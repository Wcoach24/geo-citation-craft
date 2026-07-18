/*!
 * HyperPersonal v1.0 — motor de hiperpersonalización client-side.
 * Sin dependencias, sin backend, sin cookies de terceros. Todo ocurre en el navegador.
 * Origen: landing esgeo (jul 2026). Licencia: úsalo donde quieras.
 *
 * Uso mínimo:
 *   HyperPersonal.init({
 *     rules: [
 *       { id: 'caliente', once: true,
 *         when: s => s.score >= 65,
 *         do: (api) => api.setHTML('#headline', 'Oferta directa <b>ya</b>') }
 *     ]
 *   });
 */
(function (global) {
"use strict";

const HP = {};
const FREE_MAIL = ["gmail","googlemail","hotmail","outlook","yahoo","icloud","proton","protonmail","live","msn","aol","gmx","me","mail"];

/* ---------------- estado de señales ---------------- */
const S = {
  t0: performance.now(),
  seconds: 0,
  scrollMax: 0,          // 0..1
  mouseDist: 0,          // px acumulados
  clicks: 0,
  section: "top",        // sección actual ([data-hp-section])
  sectionsSeen: new Set(["top"]),
  dwell: {},             // segundos por sección
  favSection: null,
  visits: 1,
  daysSinceLast: 0,
  refSource: "directo",  // linkedin | búsqueda | X | <host> | directo
  hourBucket: "",        // noche | laboral | tarde
  company: null,         // dominio detectado vía email
  hidden: 0,             // veces que se fue a otra pestaña
  idle: false,
  rageClicks: 0,         // ráfagas de 3+ clicks en la misma zona
  exitIntents: 0,        // intentos de fuga por arriba
  language: navigator.language || "",
  connSlow: false,       // conexión lenta detectada
  pointerFine: matchMedia("(pointer:fine)").matches,
  reducedMotion: matchMedia("(prefers-reduced-motion:reduce)").matches,
  score: 0
};
let lastMouse = null, cfg = null, started = false;
const listeners = { signal: [], score: [] };
const firedRules = new Set();

/* ---------------- utilidades ---------------- */
const $ = sel => document.querySelector(sel);
function emit(type, payload){ listeners[type].forEach(fn => { try{ fn(payload, S); }catch(e){} }); }
function store(k, v){ try{ localStorage.setItem(k, v); }catch(e){} }
function read(k){ try{ return localStorage.getItem(k); }catch(e){ return null; } }

let toastEl = null, toastT = null;
function toast(msg, ms){
  if (!toastEl){
    toastEl = document.createElement("div");
    toastEl.setAttribute("role","status");
    toastEl.style.cssText = "position:fixed;left:18px;bottom:18px;z-index:99999;max-width:300px;" +
      "background:rgba(12,14,22,.94);color:#fff;border:1px solid rgba(255,255,255,.18);border-radius:13px;" +
      "padding:13px 16px;font:13px/1.4 system-ui,sans-serif;opacity:0;transform:translateY(10px);" +
      "transition:opacity .3s,transform .3s;pointer-events:none";
    document.body.appendChild(toastEl);
  }
  toastEl.textContent = msg;
  toastEl.style.opacity = 1; toastEl.style.transform = "none";
  clearTimeout(toastT);
  toastT = setTimeout(() => { toastEl.style.opacity = 0; toastEl.style.transform = "translateY(10px)"; }, ms || 4500);
}

/* ---------------- API para reglas ---------------- */
const api = {
  signals: S,
  toast,
  setText(sel, txt){ const el = $(sel); if (el) el.textContent = txt; },
  setHTML(sel, html){ const el = $(sel); if (el) el.innerHTML = html; },
  show(sel){ const el = $(sel); if (el){ el.hidden = false; el.style.removeProperty("display"); } },
  hide(sel){ const el = $(sel); if (el) el.style.display = "none"; },
  addClass(sel, c){ const el = $(sel); if (el) el.classList.add(c); },
  removeClass(sel, c){ const el = $(sel); if (el) el.classList.remove(c); },
  log(msg){ if (cfg.debug) console.log("[HP]", msg); emit("signal", {type:"log", msg}); },
  track(event, data){ if (typeof cfg.onEvent === "function") cfg.onEvent(event, data || {}, S); }
};

/* ---------------- señales base ---------------- */
function initSignals(){
  document.addEventListener("mousemove", e => {
    if (lastMouse) S.mouseDist += Math.hypot(e.clientX - lastMouse.x, e.clientY - lastMouse.y);
    lastMouse = { x: e.clientX, y: e.clientY };
  }, { passive: true });

  document.addEventListener("scroll", () => {
    S.scrollMax = Math.max(S.scrollMax, Math.min(1, (scrollY + innerHeight) / document.body.scrollHeight));
  }, { passive: true });

  document.addEventListener("click", () => { S.clicks++; }, true);

  // secciones: cualquier elemento con data-hp-section="Nombre"
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting){
        const name = en.target.dataset.hpSection;
        if (name && name !== S.section){
          S.section = name;
          if (!S.sectionsSeen.has(name)){ S.sectionsSeen.add(name); api.log("sección: " + name); }
        }
      }
    });
  }, { threshold: .35 });
  document.querySelectorAll("[data-hp-section]").forEach(el => io.observe(el));
}

/* ---------------- señales de entrada ---------------- */
function initEntrada(){
  // origen: utm_source > referrer
  const utm = new URLSearchParams(location.search).get("utm_source");
  let src = (utm || "").toLowerCase();
  if (!src && document.referrer){ try{ src = new URL(document.referrer).hostname.toLowerCase(); }catch(e){} }
  if (/linkedin/.test(src)) S.refSource = "linkedin";
  else if (/google|bing|duckduck/.test(src)) S.refSource = "búsqueda";
  else if (/twitter|t\.co|x\.com/.test(src)) S.refSource = "X";
  else if (/instagram|facebook|fb\./.test(src)) S.refSource = "meta";
  else if (src) S.refSource = src.replace(/^www\./, "");

  // recurrencia
  const key = cfg.storageKey || "hp";
  const visits = (+read(key + "_v") || 0) + 1;
  const last = +read(key + "_t") || 0;
  store(key + "_v", visits); store(key + "_t", Date.now());
  S.visits = visits;
  S.daysSinceLast = last ? Math.max(0, Math.round((Date.now() - last) / 864e5)) : 0;

  // hora
  const h = new Date().getHours();
  S.hourBucket = (h >= 21 || h < 7) ? "noche" : (h >= 9 && h < 18) ? "laboral" : "tarde";

  // conexión
  const et = navigator.connection && navigator.connection.effectiveType;
  S.connSlow = !!et && /2g|slow/.test(et);
}

/* ---------------- features opcionales ---------------- */
function initFeatures(){
  const F = cfg.features || {};

  // title-bait al perder la pestaña
  if (F.titleBait){
    const orig = document.title; let baited = false;
    document.addEventListener("visibilitychange", () => {
      if (document.hidden){ document.title = F.titleBait; baited = true; S.hidden++; }
      else if (baited){
        document.title = orig;
        if (F.returnToast) toast(F.returnToast);
        api.track("hp_tab_return");
      }
    });
  }

  // detección de inactividad
  if (F.idle){
    let t = null;
    const ms = F.idle.ms || 25000;
    const arm = () => {
      S.idle = false; clearTimeout(t);
      t = setTimeout(() => {
        S.idle = true; api.track("hp_idle");
        if (typeof F.idle.onIdle === "function") F.idle.onIdle(api, S);
      }, ms);
    };
    ["mousemove","scroll","keydown","click","touchstart"].forEach(ev =>
      document.addEventListener(ev, arm, { passive: true }));
    arm();
  }

  // toast al copiar texto
  if (F.copyToast){
    document.addEventListener("copy", () => { toast(F.copyToast); api.track("hp_copy"); });
  }

  // email → empresa
  if (F.emailCompany){
    const inp = $(F.emailCompany.input);
    if (inp) inp.addEventListener("input", () => {
      const m = inp.value.trim().match(/^[^@\s]+@([^@\s]+\.[^@\s]{2,})$/);
      if (!m) return;
      const domain = m[1].toLowerCase(), name = domain.split(".")[0];
      if (S.company === domain) return;
      S.company = FREE_MAIL.includes(name) ? "personal" : domain;
      api.track("hp_company", { domain: S.company });
      if (typeof F.emailCompany.onCompany === "function")
        F.emailCompany.onCompany(S.company, name.charAt(0).toUpperCase() + name.slice(1), api);
    });
  }

  // exit intent (fuga del cursor por el borde superior)
  if (F.exitIntent){
    let fired = false;
    document.addEventListener("mouseout", e => {
      if (!e.relatedTarget && e.clientY <= 0 && S.seconds > 4){
        if (fired && F.exitIntent.once !== false) return;
        fired = true;
        S.exitIntents++;
        api.track("hp_exit_intent");
        if (typeof F.exitIntent.onExit === "function") F.exitIntent.onExit(api, S);
      }
    });
  }

  // rage clicks: 3+ clicks en <900ms dentro de un radio de 50px
  let rc = [];
  document.addEventListener("click", e => {
    const now = performance.now();
    rc = rc.filter(c => now - c.t < 900);
    rc.push({ t: now, x: e.clientX, y: e.clientY });
    if (rc.length >= 3 &&
        rc.every(c => Math.hypot(c.x - rc[0].x, c.y - rc[0].y) < 50)){
      rc = [];
      S.rageClicks++;
      api.track("hp_rage_click");
      if (typeof F.onRage === "function") F.onRage(api, S);
    }
  }, true);

  // hover con duda: [{selector, ms, onHover}]
  (F.hoverIntent || []).forEach(h => {
    document.querySelectorAll(h.selector).forEach(el => {
      let t = null;
      el.addEventListener("mouseenter", () => {
        t = setTimeout(() => {
          api.track("hp_hover_intent", { selector: h.selector });
          if (typeof h.onHover === "function") h.onHover(api, S, el);
        }, h.ms || 3000);
      });
      el.addEventListener("mouseleave", () => clearTimeout(t));
    });
  });

  // dwell + sección favorita
  setInterval(() => {
    S.dwell[S.section] = (S.dwell[S.section] || 0) + 1;
    let fav = null, max = 0;
    for (const k in S.dwell){ if (S.dwell[k] > max){ max = S.dwell[k]; fav = k; } }
    if (fav && max >= (F.favSectionMin || 8) && fav !== S.favSection){
      S.favSection = fav;
      api.track("hp_fav_section", { section: fav });
    }
  }, 1000);
}

/* ---------------- score ---------------- */
function computeScore(){
  const W = Object.assign({ time: 30, scroll: 25, mouse: 15, sections: 15, extra: 15 }, cfg.weights);
  const extraSignals = (S.visits > 1 ? 1 : 0) + (S.company && S.company !== "personal" ? 1 : 0) + (S.hidden ? 1 : 0);
  return Math.round(
    Math.min(W.time,     S.seconds * 1.2) +
    Math.min(W.scroll,   S.scrollMax * W.scroll) +
    Math.min(W.mouse,    S.mouseDist / 800) +
    Math.min(W.sections, S.sectionsSeen.size * 4) +
    Math.min(W.extra,    extraSignals * 5)
  );
}

/* ---------------- HUD debug ---------------- */
let hud = null;
function renderHUD(){
  if (!cfg.debug) return;
  if (!hud){
    hud = document.createElement("div");
    hud.style.cssText = "position:fixed;right:14px;bottom:14px;z-index:99998;background:rgba(12,14,22,.92);" +
      "color:#cfd6e8;border:1px solid rgba(255,255,255,.14);border-radius:12px;padding:12px 14px;" +
      "font:11px/1.7 ui-monospace,monospace;min-width:190px;pointer-events:none";
    document.body.appendChild(hud);
  }
  hud.innerHTML = "<b style='color:#7ef0dd'>HyperPersonal debug</b><br>" +
    "score " + S.score + "/100 · " + S.seconds + "s<br>" +
    "scroll " + Math.round(S.scrollMax * 100) + "% · visita " + S.visits + "<br>" +
    "origen " + S.refSource + " · " + S.hourBucket + "<br>" +
    "sección " + S.section + (S.favSection ? " · top " + S.favSection : "") +
    (S.company ? "<br>empresa " + S.company : "");
}

/* ---------------- motor de reglas ---------------- */
function tick(){
  S.seconds = Math.round((performance.now() - S.t0) / 1000);
  const prev = S.score;
  S.score = computeScore();
  if (S.score !== prev) emit("score", S.score);
  (cfg.rules || []).forEach(rule => {
    if (rule.once !== false && firedRules.has(rule.id)) return;
    let ok = false;
    try{ ok = !!rule.when(S); }catch(e){}
    if (ok){
      firedRules.add(rule.id);
      try{ rule.do(api, S); }catch(e){ if (cfg.debug) console.error("[HP] regla " + rule.id, e); }
      api.track("hp_rule", { id: rule.id, score: S.score });
      api.log("regla disparada: " + rule.id);
    }
  });
  renderHUD();
}

/* ---------------- API pública ---------------- */
HP.init = function (userCfg) {
  if (started) return HP;
  started = true;
  cfg = userCfg || {};
  initSignals();
  initEntrada();
  initFeatures();
  setInterval(tick, cfg.interval || 500);
  tick();
  return HP;
};
HP.on = function (type, fn) { if (listeners[type]) listeners[type].push(fn); return HP; };

/* Split A/B persistente: true = grupo personalizado. HP.split(50) antes de decidir aplicar reglas. */
HP.split = function (pct) {
  const key = ((cfg && cfg.storageKey) || "hp") + "_split";
  let v = read(key);
  if (v === null){
    v = (Math.random() * 100 < (pct == null ? 50 : pct)) ? "1" : "0";
    store(key, v);
  }
  return v === "1";
};

/* Bandit epsilon-greedy (ε=0.15) para auto-optimizar variantes.
   const i = HP.bandit("headline", 3);  → índice de variante a mostrar
   HP.reward("headline");               → llamar en la conversión */
HP.bandit = function (name, n) {
  const key = ((cfg && cfg.storageKey) || "hp") + "_b_" + name;
  const st = JSON.parse(read(key) || "null") || { imp: Array(n).fill(0), conv: Array(n).fill(0) };
  let pick;
  if (Math.random() < 0.15){
    pick = Math.floor(Math.random() * n);
  } else {
    let best = 0, bv = -1;
    for (let i = 0; i < n; i++){
      const r = st.imp[i] ? st.conv[i] / st.imp[i] : 1; // variantes sin datos, prioridad
      if (r > bv){ bv = r; best = i; }
    }
    pick = best;
  }
  st.imp[pick]++; st.last = pick;
  store(key, JSON.stringify(st));
  return pick;
};
HP.reward = function (name) {
  const key = ((cfg && cfg.storageKey) || "hp") + "_b_" + name;
  const st = JSON.parse(read(key) || "null");
  if (!st || st.last == null) return;
  st.conv[st.last]++;
  store(key, JSON.stringify(st));
};
HP.signals = S;
HP.api = api;

global.HyperPersonal = HP;
})(window);
