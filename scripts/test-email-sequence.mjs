#!/usr/bin/env node
/**
 * scripts/test-email-sequence.mjs — MASTERPLAN F3-1 / F3-2
 *
 * Test unitario (node puro, sin framework) de la lógica pura de la secuencia
 * de email: selector de leads E2-E5 (día 3/7/12/18) y selector de compradores
 * para el email de testimonio (+7 días), con fechas sintéticas.
 *
 * Uso: node scripts/test-email-sequence.mjs   (sale 0 si todo pasa)
 */
import assert from "node:assert/strict";
import {
  SEQUENCE,
  selectNextEmail,
  isTestimonialDue,
  buildTestimonialEmail,
  unsubLink,
} from "../api/_lib/sequence-logic.mjs";

const NOW = new Date("2026-07-15T09:00:00Z");
const daysAgo = (d) => new Date(NOW.getTime() - d * 24 * 60 * 60 * 1000).toISOString();

const lead = (emailsSent, createdDaysAgo, extra = {}) => ({
  email: "test@example.com",
  emails_sent: emailsSent,
  created_at: daysAgo(createdDaysAgo),
  unsubscribed: false,
  converted: false,
  ...extra,
});

let passed = 0;
function check(name, fn) {
  try {
    fn();
    passed++;
    console.log(`  ✓ ${name}`);
  } catch (e) {
    console.error(`  ✗ ${name}\n    ${e.message}`);
    process.exitCode = 1;
  }
}

console.log("── Selector de leads E2-E5 (día 3/7/12/18) ──");

check("E2 se envía en el día 3 (emails_sent=1, alta hace 3 días)", () => {
  const r = selectNextEmail(lead(1, 3), NOW);
  assert.ok(r, "debería tocar email");
  assert.equal(r.emailNumber, 2);
  assert.equal(r.subject, SEQUENCE[1].subject);
  assert.ok(r.html.includes("GEO (Generative Engine Optimization)"));
});

check("E2 NO se envía antes del día 3 (alta hace 2.5 días)", () => {
  assert.equal(selectNextEmail(lead(1, 2.5), NOW), null);
});

check("E3 se envía en el día 7 (emails_sent=2)", () => {
  const r = selectNextEmail(lead(2, 7), NOW);
  assert.equal(r.emailNumber, 3);
  assert.ok(r.html.includes("Princeton"));
});

check("E3 NO se envía en el día 6 (emails_sent=2)", () => {
  assert.equal(selectNextEmail(lead(2, 6), NOW), null);
});

check("E4 se envía en el día 12 (emails_sent=3)", () => {
  const r = selectNextEmail(lead(3, 12), NOW);
  assert.equal(r.emailNumber, 4);
});

check("E5 (venta) se envía en el día 18 (emails_sent=4)", () => {
  const r = selectNextEmail(lead(4, 18), NOW);
  assert.equal(r.emailNumber, 5);
  assert.ok(r.html.includes("€47"));
  assert.ok(r.html.includes("https://www.esgeo.ai/curso#comprar"));
});

check("E5 NO se envía en el día 17 (emails_sent=4)", () => {
  assert.equal(selectNextEmail(lead(4, 17), NOW), null);
});

check("Un lead atrasado recibe el email pendiente (emails_sent=1, alta hace 30 días → E2)", () => {
  const r = selectNextEmail(lead(1, 30), NOW);
  assert.equal(r.emailNumber, 2, "solo el siguiente de la secuencia, no salta a E5");
});

check("Secuencia completa (emails_sent=5) → null", () => {
  assert.equal(selectNextEmail(lead(5, 30), NOW), null);
});

check("emails_sent=0 (welcome aún no enviado) → null (E1 lo envía capture-lead)", () => {
  assert.equal(selectNextEmail(lead(0, 10), NOW), null);
});

check("Lead dado de baja → null", () => {
  assert.equal(selectNextEmail(lead(1, 10, { unsubscribed: true }), NOW), null);
});

check("Lead convertido (ya compró) → null", () => {
  assert.equal(selectNextEmail(lead(1, 10, { converted: true }), NOW), null);
});

check("Todos los emails llevan link de baja con el email codificado", () => {
  const email = "usuario+test@example.com";
  for (const step of Object.values(SEQUENCE)) {
    assert.ok(step.build(email).includes(unsubLink(email)));
  }
});

console.log("── Selector de compradores para testimonio (+7 días) ──");

const purchase = (createdDaysAgo, extra = {}) => ({
  customer_email: "buyer@example.com",
  status: "completed",
  testimonial_requested: false,
  created_at: daysAgo(createdDaysAgo),
  ...extra,
});

check("Compra hace 7.5 días → toca pedir testimonio", () => {
  assert.equal(isTestimonialDue(purchase(7.5), NOW), true);
});

check("Compra hace 7 días exactos → toca", () => {
  assert.equal(isTestimonialDue(purchase(7), NOW), true);
});

check("Compra hace 6.5 días → todavía no", () => {
  assert.equal(isTestimonialDue(purchase(6.5), NOW), false);
});

check("Compra hace 9 días (fuera de la ventana de 24h) → no", () => {
  assert.equal(isTestimonialDue(purchase(9), NOW), false);
});

check("Testimonio ya pedido → no repite", () => {
  assert.equal(isTestimonialDue(purchase(7.5, { testimonial_requested: true }), NOW), false);
});

check("Compra no completada (pending/refunded) → no", () => {
  assert.equal(isTestimonialDue(purchase(7.5, { status: "pending" }), NOW), false);
  assert.equal(isTestimonialDue(purchase(7.5, { status: "refunded" }), NOW), false);
});

check("Compra sin email de cliente → no", () => {
  assert.equal(isTestimonialDue(purchase(7.5, { customer_email: null }), NOW), false);
});

check("El email de testimonio tiene las 2 preguntas y link de baja", () => {
  const html = buildTestimonialEmail("buyer@example.com");
  assert.ok(html.includes("¿Qué es lo que más te ha servido del curso?"));
  assert.ok(html.includes("¿Se lo recomendarías a alguien?"));
  assert.ok(html.includes(unsubLink("buyer@example.com")));
});

if (process.exitCode) {
  console.error(`\n✗ test-email-sequence: hay tests en rojo (${passed} pasaron).`);
} else {
  console.log(`\n✓ test-email-sequence: ${passed}/${passed} tests OK.`);
}
