# Plan — Phase 1: Fix the Funnel

## Wave 1: Foundation (Parallel — no dependencies)

<plan>
  <metadata>
    <wave>1</wave>
    <id>W1-DESIGN</id>
    <depends_on></depends_on>
    <files_read>src/index.css, tailwind.config.ts</files_read>
    <files_modified>src/index.css, tailwind.config.ts, index.html</files_modified>
    <requirements>DSGN-01, DSGN-02</requirements>
    <must_haves>
      - CSS variables updated to E-learning palette: primary teal #0D9488, accent orange #EA580C
      - Plus Jakarta Sans + Inter loaded via Google Fonts with display=swap
      - Claymorphism shadow tokens defined
      - CTA glow tokens defined
      - tailwind.config extended with new font families
    </must_haves>
  </metadata>
  <task type="auto">
    <name>Update design tokens and typography</name>
    <action>
      1. Update :root CSS variables in src/index.css with new E-learning palette
         - --primary: teal HSL equivalent of #0D9488
         - --accent: orange HSL equivalent of #EA580C
         - --background: HSL of #F0FDFA
         - --foreground: HSL of #134E4A
         - Keep .dark theme consistent
      2. Add Google Fonts link in index.html: Plus Jakarta Sans (600,700,800) + Inter (400,500,600)
      3. Add custom shadow tokens: --shadow-clay, --shadow-clay-hover, --cta-glow, --cta-glow-hover
      4. Update tailwind.config.ts to extend fontFamily with 'Plus Jakarta Sans' and 'Inter'
      5. Add .btn-cta utility class with orange bg + glow + hover transform
    </action>
    <verify>
      - [ ] :root has --primary as teal, --accent as orange
      - [ ] Google Fonts link in index.html loads Plus Jakarta Sans + Inter
      - [ ] tailwind.config has fontFamily extensions
      - [ ] .btn-cta class exists with glow effect
      - [ ] --shadow-clay tokens defined
    </verify>
  </task>
</plan>

<plan>
  <metadata>
    <wave>1</wave>
    <id>W1-VISITOR</id>
    <depends_on></depends_on>
    <files_read>.gsd/CONTEXT.md</files_read>
    <files_modified>src/hooks/useVisitorState.ts</files_modified>
    <requirements>PERS-01</requirements>
    <must_haves>
      - useVisitorState hook exports visitor state (new/returning/lead/customer)
      - State persisted in localStorage under key esgeo_visitor
      - Tracks visitCount, firstVisit, referrer, hasEmail
      - Auto-detects referrer from document.referrer on first visit
      - Returns personalization helpers: isReturning, isFromAI, visitorState
    </must_haves>
  </metadata>
  <task type="auto">
    <name>Create visitor state hook for personalization</name>
    <action>
      1. Create src/hooks/useVisitorState.ts
      2. On mount: read localStorage 'esgeo_visitor'
      3. If not exists: create with state='new', firstVisit=now, visitCount=1, referrer=document.referrer
      4. If exists: increment visitCount, update state to 'returning' if visitCount > 1
      5. Detect AI referrer: check if referrer includes 'gemini', 'claude', 'perplexity', 'chatgpt'
      6. Export: { visitorState, isReturning, isFromAI, referrerSource, visitCount, markAsLead }
      7. markAsLead() updates hasEmail=true in localStorage
    </action>
    <verify>
      - [ ] File exists at src/hooks/useVisitorState.ts
      - [ ] Exports useVisitorState hook with correct return type
      - [ ] localStorage key is 'esgeo_visitor'
      - [ ] AI referrer detection covers gemini, claude, perplexity
      - [ ] markAsLead function updates state
    </verify>
  </task>
</plan>

<plan>
  <metadata>
    <wave>1</wave>
    <id>W1-MODULES</id>
    <depends_on></depends_on>
    <files_read>src/data/modules.ts</files_read>
    <files_modified>src/data/modules.ts</files_modified>
    <requirements>PRICE-01, PRICE-02, PRICE-03</requirements>
    <must_haves>
      - COMPLETE_COURSE.price = 47 (was 50)
      - COMPLETE_COURSE.originalPrice = 197 (was 60)
      - New field COMPLETE_COURSE.launchPrice = true
      - Individual module purchase paths removed from UI data (backend preserved)
    </must_haves>
  </metadata>
  <task type="auto">
    <name>Update pricing data in modules.ts</name>
    <action>
      1. Change COMPLETE_COURSE.price from 50 to 47
      2. Change COMPLETE_COURSE.originalPrice from 60 to 197
      3. Add COMPLETE_COURSE.launchPrice = true
      4. Update features array to include "Garantía de 14 días"
      5. Keep MODULES individual data intact (backend compatibility)
      6. Add COMPLETE_COURSE.guarantee = "14 días de garantía — si no te convence, te devolvemos el dinero"
    </action>
    <verify>
      - [ ] COMPLETE_COURSE.price === 47
      - [ ] COMPLETE_COURSE.originalPrice === 197
      - [ ] COMPLETE_COURSE.launchPrice === true
      - [ ] COMPLETE_COURSE.guarantee string exists
      - [ ] Individual MODULES data unchanged
    </verify>
  </task>
</plan>

## Wave 2: Core Page Rewrite (Depends on Wave 1)

<plan>
  <metadata>
    <wave>2</wave>
    <id>W2-CURSO</id>
    <depends_on>W1-DESIGN, W1-VISITOR, W1-MODULES</depends_on>
    <files_read>src/pages/CursoGeoPage.tsx, src/data/modules.ts, src/hooks/useVisitorState.ts, src/index.css, .gsd/CONTEXT.md</files_read>
    <files_modified>src/pages/CursoGeoPage.tsx</files_modified>
    <requirements>LAND-01, LAND-02, LAND-03, LAND-04, LAND-05, LAND-06, LAND-07, LAND-08, LAND-09, PERS-02, PERS-03, PERS-04, CHKT-01, PRICE-03, PRICE-04, DSGN-03, DSGN-04, DSGN-05, TRACK-01</requirements>
    <must_haves>
      - Hero section with personalized headline based on visitor state
      - Trust bar with "Referenciado por Gemini, Perplexity y Claude"
      - PAS section (Problema → Agitación → Solución)
      - Module cards with Claymorphism shadows and Lucide icons (NO emoji)
      - Before/After section (BAB framework)
      - Social proof section with AI referral data
      - FAQ section with existing questions + Schema.org FAQ structured data
      - Inline checkout section at bottom: €197 tachado → €47 + CTA → Stripe
      - Guarantee badge (14 días)
      - Sticky CTA in viewport (mobile-friendly)
      - Clarity event tracking on CTA clicks
      - First-person CTA text: "Quiero dominar GEO"
      - All icons from Lucide, zero emoji as icons
      - Responsive: works at 375/768/1024/1440px
      - cursor-pointer on all clickable elements
    </must_haves>
  </metadata>
  <task type="auto">
    <name>Rewrite CursoGeoPage with new design and conversion optimization</name>
    <action>
      1. Import useVisitorState, useAuth, supabase, COMPLETE_COURSE, MODULES
      2. Build PersonalizedHero component:
         - new visitor: "Haz que ChatGPT, Gemini y Perplexity citen tu marca"
         - returning: "Sigues pensando en GEO — es hora de actuar"
         - from AI: "Estás aquí porque una IA te trajo — imagina que haga lo mismo con TU marca"
         - customer: redirect to /dashboard
      3. Build TrustBar: logos/icons of ChatGPT, Gemini, Perplexity, Claude + "Referenciado por modelos de IA"
      4. Build PASSection: Problem → Agitation → Solution with teal/orange accent
      5. Build ModuleCards: 5 cards (F1-F5) with Claymorphism, Lucide icons, topic list
      6. Build BeforeAfterSection: Before (SEO traditional) → After (GEO cited by AI)
      7. Build SocialProofSection: "8+ visitantes llegan desde Gemini cada mes" + trust signals
      8. Keep existing FAQ section but add Schema.org FAQ JSON-LD
      9. Build InlineCheckout component:
         - Price: €197 tachado → €47
         - CTA: "Quiero dominar GEO — €47" (orange btn-cta class)
         - onClick: call supabase.functions.invoke('create-checkout') with complete course priceId
         - Guarantee: Shield icon + "14 días de garantía"
         - Trust badges: Stripe, acceso inmediato, PDF descargable
      10. Add Clarity events: window.clarity('event', 'cta_hero_click'), etc.
      11. Add sticky CTA bar (fixed bottom on mobile, in-nav on desktop)
      12. Ensure all interactive elements have cursor-pointer
      13. Test responsive layout mentally: stack on mobile, grid on desktop
    </action>
    <verify>
      - [ ] Hero renders personalized headline based on visitor state
      - [ ] Trust bar visible with AI model names
      - [ ] PAS section present with Problem/Agitation/Solution
      - [ ] 5 module cards with Claymorphism shadows
      - [ ] All icons are Lucide components, zero emoji as icons
      - [ ] FAQ section with Schema.org FAQ JSON-LD script tag
      - [ ] Inline checkout shows €197 tachado → €47
      - [ ] CTA calls supabase.functions.invoke('create-checkout')
      - [ ] Guarantee text visible near CTA
      - [ ] Clarity events fire on CTA clicks
      - [ ] cursor-pointer on all buttons/links
      - [ ] Responsive grid: 1 col mobile, 2-3 col desktop
    </verify>
  </task>
</plan>

<plan>
  <metadata>
    <wave>2</wave>
    <id>W2-HEADER</id>
    <depends_on>W1-DESIGN</depends_on>
    <files_read>src/components/Header.tsx</files_read>
    <files_modified>src/components/Header.tsx</files_modified>
    <requirements>LAND-09, DSGN-04</requirements>
    <must_haves>
      - Sticky CTA button in navbar: "Curso GEO — €47" (orange accent)
      - Replaces current "Accede al curso" with price-visible CTA
      - Mobile menu includes CTA prominently
      - Uses new design tokens
    </must_haves>
  </metadata>
  <task type="auto">
    <name>Update Header with sticky CTA and new design</name>
    <action>
      1. Replace right-side buttons with primary CTA: "Curso GEO — €47"
      2. Style CTA with accent orange + glow
      3. Link CTA to /curso#comprar (anchor to inline checkout)
      4. If user is authenticated + has access: show "Mi Dashboard" instead
      5. Mobile hamburger menu: add CTA at top of menu
      6. Ensure cursor-pointer on all interactive elements
    </action>
    <verify>
      - [ ] Desktop nav shows "Curso GEO — €47" CTA in accent color
      - [ ] CTA links to /curso#comprar
      - [ ] Authenticated users with access see "Mi Dashboard"
      - [ ] Mobile menu includes CTA
      - [ ] cursor-pointer on all clickable elements
    </verify>
  </task>
</plan>

<plan>
  <metadata>
    <wave>2</wave>
    <id>W2-CHECKOUT-REDIRECT</id>
    <depends_on>W1-MODULES</depends_on>
    <files_read>src/pages/CheckoutPage.tsx, src/App.tsx</files_read>
    <files_modified>src/pages/CheckoutPage.tsx</files_modified>
    <requirements>CHKT-02</requirements>
    <must_haves>
      - /checkout redirects to /curso#comprar
      - Old checkout page no longer renders plan selector
    </must_haves>
  </metadata>
  <task type="auto">
    <name>Redirect /checkout to /curso</name>
    <action>
      1. Replace CheckoutPage content with Navigate to="/curso#comprar"
      2. Or: useEffect redirect on mount with window.location
      3. Keep the file (don't delete route) for backwards compatibility
    </action>
    <verify>
      - [ ] Visiting /checkout redirects to /curso#comprar
      - [ ] No console errors
    </verify>
  </task>
</plan>

## Wave 3: Email Capture + Tracking (Depends on Wave 2)

<plan>
  <metadata>
    <wave>3</wave>
    <id>W3-EMAIL</id>
    <depends_on>W2-CURSO</depends_on>
    <files_read>src/pages/CursoGeoPage.tsx, src/integrations/supabase/client.ts</files_read>
    <files_modified>src/components/EmailCapture.tsx, src/components/ExitIntentPopup.tsx, src/pages/CursoGeoPage.tsx</files_modified>
    <requirements>EMAIL-01, EMAIL-02, EMAIL-04</requirements>
    <must_haves>
      - EmailCapture component: 1 field (email), copy "Recibe el checklist GEO gratis"
      - First-person CTA: "Envíame el checklist"
      - Sub-text: "Solo para enviarte el recurso. Sin spam."
      - Success state: "¡Listo! Revisa tu email"
      - ExitIntentPopup: triggers on mouse leave (desktop) with lead magnet offer
      - Both store email in localStorage (mark as lead) + attempt Supabase insert
      - Integrated into CursoGeoPage between social proof and FAQ
    </must_haves>
  </metadata>
  <task type="auto">
    <name>Build email capture components</name>
    <action>
      1. Create src/components/EmailCapture.tsx:
         - Single email input + submit button
         - Copy: "Recibe el checklist GEO gratis"
         - CTA: "Envíame el checklist"
         - On submit: save to localStorage via markAsLead(), try Supabase insert
         - Success/error states
         - Clarity event: window.clarity('event', 'email_capture')
      2. Create src/components/ExitIntentPopup.tsx:
         - Listen for mouseleave event on document (desktop only)
         - Only show once per session (sessionStorage flag)
         - Don't show to returning leads or customers
         - Content: "Antes de irte — llévate el checklist GEO gratis"
         - Uses EmailCapture component inside
      3. Add EmailCapture inline in CursoGeoPage between social proof and FAQ
      4. Add ExitIntentPopup to CursoGeoPage
    </action>
    <verify>
      - [ ] EmailCapture.tsx exists and renders form with 1 field
      - [ ] CTA text is "Envíame el checklist"
      - [ ] Submit triggers Clarity event
      - [ ] ExitIntentPopup.tsx exists
      - [ ] Popup only shows once per session
      - [ ] Components integrated in CursoGeoPage
    </verify>
  </task>
</plan>

<plan>
  <metadata>
    <wave>3</wave>
    <id>W3-FOOTER-EMAIL</id>
    <depends_on>W3-EMAIL</depends_on>
    <files_read>src/components/Footer.tsx, src/components/EmailCapture.tsx</files_read>
    <files_modified>src/components/Footer.tsx</files_modified>
    <requirements>EMAIL-03</requirements>
    <must_haves>
      - Footer includes compact email capture CTA
      - Reuses EmailCapture component in compact mode
    </must_haves>
  </metadata>
  <task type="auto">
    <name>Add email capture to footer</name>
    <action>
      1. Import EmailCapture in Footer
      2. Add compact variant prop to EmailCapture
      3. Place above footer links with "Recibe tips de GEO cada semana"
    </action>
    <verify>
      - [ ] Footer renders EmailCapture component
      - [ ] Compact styling doesn't break footer layout
    </verify>
  </task>
</plan>

<plan>
  <metadata>
    <wave>3</wave>
    <id>W3-DEADCLICKS</id>
    <depends_on>W2-CURSO</depends_on>
    <files_read>src/pages/CursoGeoPage.tsx, src/components/Header.tsx</files_read>
    <files_modified>src/pages/CursoGeoPage.tsx</files_modified>
    <requirements>DSGN-06</requirements>
    <must_haves>
      - Audit all elements that look clickable but aren't
      - Badge components should not have cursor-pointer unless they link somewhere
      - Non-interactive cards should have cursor-default
      - Interactive elements have clear hover states with transitions
    </must_haves>
  </metadata>
  <task type="auto">
    <name>Fix dead clicks and interaction states</name>
    <action>
      1. Audit CursoGeoPage for elements that could cause dead clicks:
         - Badge components without onClick → add cursor-default
         - Cards that look clickable but aren't → remove hover effects or add click target
         - Icons that seem interactive → ensure they're wrapped in buttons/links
      2. Add 200ms hover transitions to all interactive elements
      3. Ensure focus-visible rings on all focusable elements
      4. Add aria-labels to icon-only buttons
    </action>
    <verify>
      - [ ] No elements have cursor-pointer without onClick/href
      - [ ] All buttons/links have hover transitions
      - [ ] Focus-visible rings present
      - [ ] aria-labels on icon buttons
    </verify>
  </task>
</plan>

## Requirement Coverage Check

| REQ-ID | Plan |
|--------|------|
| PRICE-01 | W1-MODULES (remove individual from UI) + W2-CURSO (only complete shown) |
| PRICE-02 | W1-MODULES (€47) + W2-CURSO (inline checkout) |
| PRICE-03 | W1-MODULES (€197 anchor) + W2-CURSO (display tachado) |
| PRICE-04 | W2-CURSO (guarantee badge) |
| LAND-01 | W2-CURSO (personalized hero) |
| LAND-02 | W2-CURSO (trust bar) |
| LAND-03 | W2-CURSO (PAS section) |
| LAND-04 | W2-CURSO (Claymorphism module cards) |
| LAND-05 | W2-CURSO (BAB section) |
| LAND-06 | W2-CURSO (social proof with AI data) |
| LAND-07 | W2-CURSO (FAQ + Schema.org) |
| LAND-08 | W2-CURSO (inline checkout + guarantee) |
| LAND-09 | W2-HEADER (sticky CTA) |
| CHKT-01 | W2-CURSO (CTA → create-checkout → Stripe) |
| CHKT-02 | W2-CHECKOUT-REDIRECT |
| CHKT-03 | Handled by existing edge function (priceId sent from frontend) |
| DSGN-01 | W1-DESIGN |
| DSGN-02 | W1-DESIGN |
| DSGN-03 | W1-DESIGN + W2-CURSO |
| DSGN-04 | W2-CURSO + W2-HEADER |
| DSGN-05 | W2-CURSO |
| DSGN-06 | W3-DEADCLICKS |
| PERS-01 | W1-VISITOR |
| PERS-02 | W2-CURSO |
| PERS-03 | W2-CURSO |
| PERS-04 | W2-CURSO |
| EMAIL-01 | W3-EMAIL |
| EMAIL-02 | W3-EMAIL |
| EMAIL-03 | W3-FOOTER-EMAIL |
| EMAIL-04 | W3-EMAIL |
| TRACK-01 | W2-CURSO + W3-EMAIL |
| TRACK-02 | W3-EMAIL (Clarity events) |

**Coverage: 100% of must-have requirements mapped to plans.**
**No file conflicts between parallel tasks within same wave.**