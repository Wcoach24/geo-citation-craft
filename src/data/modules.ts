/**
 * Single source of truth for all module data.
 * Import this in every component that references modules.
 */

export interface ModuleInfo {
  id: string;
  name: string;
  shortName: string;
  description: string;
  price: number;
  image: string;
  comingSoon?: boolean;
  stripeIds: {
    priceId: string;
    productId: string;
  };
}

export interface CompleteCourseInfo {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  launchPrice?: boolean;
  stripeIds: {
    priceId: string;
    productId: string;
  };
  features: string[];
}

export const MODULES: Record<string, ModuleInfo> = {
  f1: {
    id: 'f1',
    name: 'Módulo F1 - Fundamentos de Accesibilidad Generativa',
    shortName: 'F1 - Fundamentos',
    description: 'Aprende los fundamentos técnicos para hacer tu contenido accesible y comprensible para modelos de lenguaje AI.',
    price: 10,
    image: '/images/modulo-f1.png',
    stripeIds: { priceId: 'price_1SIElCLYFGrlrWdkg6xDfNK4', productId: 'prod_TEiBWaHzwUlXA5' },
  },
  f2: {
    id: 'f2',
    name: 'Módulo F2 - Contexto Semántico',
    shortName: 'F2 - Contexto Semántico',
    description: 'Domina la estructura semántica y el contexto óptimo para modelos generativos.',
    price: 10,
    image: '/images/modulo-f2.png',
    stripeIds: { priceId: 'price_1SIEr4LYFGrlrWdkKnenQc0o', productId: 'prod_TEiHYoMQxn8CW4' },
  },
  f3: {
    id: 'f3',
    name: 'Módulo F3 - Autoridad Generativa',
    shortName: 'F3 - Autoridad Generativa',
    description: 'Construye autoridad y credibilidad para ser citado por modelos de AI.',
    price: 10,
    image: '/images/modulo-f3.png',
    stripeIds: { priceId: 'price_1SIEvqLYFGrlrWdkKyiOQhsz', productId: 'prod_TEiMYkaDdZNpHK' },
  },
  f4: {
    id: 'f4',
    name: 'Módulo F4 - Validación Conversacional',
    shortName: 'F4 - Validación Conversacional',
    description: 'Aprende validación conversacional y optimización de interacciones.',
    price: 10,
    image: '/images/modulo-f4.png',
    stripeIds: { priceId: 'price_1SIEySLYFGrlrWdkPpmf0HrO', productId: 'prod_TEiPPFHp6tqbVK' },
  },
  f5: {
    id: 'f5',
    name: 'Módulo F5 - Mantenimiento Evolutivo',
    shortName: 'F5 - Mantenimiento Evolutivo',
    description: 'Diseña sistemas de mantenimiento evolutivo para la era de la AI.',
    price: 10,
    image: '/images/modulo-f5.png',
    stripeIds: { priceId: 'price_1SIF46LVUGCJuFgUOnlch4Dj', productId: 'prod_TEiVtvLyYnRoPQ' },
  },
};

export const COMPLETE_COURSE = {
  id: 'complete',
  name: 'Curso GEO Completo',
  description: 'Acceso completo a todos los módulos del curso GEO con metodología integral.',
  price: 47,
  // Sin `originalPrice`: el €97 tachado nunca se cobró. En la UE (Directiva Omnibus) el
  // precio anterior tiene que haberse aplicado de verdad. El anclaje ahora es comparativo
  // y honesto: lo que cuesta una auditoría GEO frente a lo que cuesta el curso.
  launchPrice: false,
  // Los stripeIds vivían aquí duplicados y apuntaban a OTRA cuenta de Stripe
  // (prefijo LVUGCJuFgU, no LYFGrlrWdk). Código muerto y peligroso: la fuente de
  // verdad es api/checkout.ts, que es donde se crea la sesión de pago.
  features: [
    '5 módulos (F1 a F5) en PDF, tuyos para siempre',
    'El método aplicado paso a paso, con checklists',
    'El caso real de esgeo.ai: de 35 a 92 sobre 100',
    'Actualizaciones incluidas',
  ],
};

/** Available module IDs (excluding coming soon) */
export const AVAILABLE_MODULE_IDS = Object.keys(MODULES).filter(
  (id) => !MODULES[id].comingSoon
);

/** All module IDs including coming soon */
export const ALL_MODULE_IDS = Object.keys(MODULES);

/** Get module name by ID, with fallback */
export const getModuleName = (id: string): string =>
  MODULES[id]?.name ?? `Módulo ${id.toUpperCase()}`;

/** Get Stripe price/product mapping */
export const getStripeIds = (key: string) => {
  if (key === 'complete') return null; // los IDs de Stripe viven en api/checkout.ts
  return MODULES[key]?.stripeIds ?? null;
};

/** Support email - single source of truth */
export const SUPPORT_EMAIL = 'hola@esgeo.ai';
