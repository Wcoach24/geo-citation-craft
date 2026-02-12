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
  f6: {
    id: 'f6',
    name: 'Módulo F6 - Métricas y Análisis',
    shortName: 'F6 - Métricas y Análisis',
    description: 'Próximamente - Métricas y análisis avanzado para medir el impacto del GEO.',
    price: 10,
    image: '/images/modulo-f6.png',
    comingSoon: true,
    stripeIds: { priceId: 'price_1SIF4xLYFGrlrWdkDBACLaKe', productId: 'prod_TEiV7zVpP97KSz' },
  },
};

export const COMPLETE_COURSE = {
  id: 'complete',
  name: 'Curso GEO Completo',
  description: 'Acceso completo a todos los módulos del curso GEO con metodología integral.',
  price: 50,
  originalPrice: 60,
  stripeIds: { priceId: 'price_1SISmrLVUGCJuFgUOUi48HYz', productId: 'prod_TEwgtqUMZscsp8' },
  features: [
    '5 módulos fundamentales (F1-F5)',
    '5 guías PDF profesionales (15-25 páginas)',
    'Metodología práctica paso a paso',
    'Casos de estudio reales incluidos',
    'Actualizaciones de contenido gratuitas',
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
  if (key === 'complete') return COMPLETE_COURSE.stripeIds;
  return MODULES[key]?.stripeIds ?? null;
};

/** Support email - single source of truth */
export const SUPPORT_EMAIL = 'hola@esgeo.ai';
