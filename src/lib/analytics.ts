import { track } from "@vercel/analytics";

/**
 * Track conversion events throughout the funnel.
 * Events: lead_capture, checkout_start, purchase_complete
 */
export const trackEvent = {
  leadCapture: (source: string) => {
    track("lead_capture", { source });
  },
  checkoutStart: (productType: string, moduleId?: string) => {
    track("checkout_start", { product_type: productType, module_id: moduleId || "complete" });
  },
  purchaseComplete: (productType: string, amount: number) => {
    track("purchase_complete", { product_type: productType, amount: String(amount) });
  },
  coursePageView: (source: string) => {
    track("curso_view", { source });
  },
  // /geo-score — funnel del auditor HABLA (F0-4)
  geoScoreStarted: (url: string) => {
    track("geo_score_started", { url });
  },
  geoScoreCompleted: (score: number, grade: string) => {
    track("geo_score_completed", { score, grade });
  },
  geoScoreError: (message: string) => {
    track("geo_score_error", { message });
  },
  geoScoreCta: (target: string, grade: string) => {
    track("geo_score_cta_click", { target, grade });
  },
};
