# esGEO - Portfolio Project Summary

## 🎯 Project Overview

**esGEO** is a full-stack educational SaaS platform and e-commerce solution built to teach **Generative Engine Optimization (GEO)** - the methodology for optimizing web content to be cited by AI models like ChatGPT, Claude, Perplexity, and Gemini.

- **Live URL:** https://esgeo.ai
- **Market:** Spanish-speaking EdTech / B2C & B2B
- **Type:** Educational Platform + E-commerce + Content Delivery System

---

## 🛠️ Technical Stack

### Frontend
- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS + Shadcn/UI component library
- **State Management:** React Context API + TanStack Query
- **Routing:** React Router DOM v6
- **SEO:** React Helmet for meta management

### Backend (Serverless)
- **Database:** PostgreSQL (via Supabase)
- **Authentication:** Supabase Auth (email/password + guest access)
- **Edge Functions:** Deno-based serverless functions
- **File Storage:** Supabase Storage for premium content delivery

### Payments & E-commerce
- **Payment Processor:** Stripe (production integration)
- **Checkout:** Stripe Checkout Sessions
- **Webhooks:** Automated payment processing and access granting
- **Products:** 6 SKUs live (5 individual modules F1–F5 + 1 complete bundle); F6 in production

---

## 📦 Features Implemented

### 1. E-Commerce System
- **Modular Course Sales:** 6 individual modules (F1-F6) purchasable separately
- **Bundle Option:** Complete course package at discounted price
- **Dual Checkout Flow:** 
  - Authenticated users (linked to account)
  - Guest checkout (email-based access tokens)
- **Stripe Integration:** Full production Stripe Checkout with webhooks
- **Automated Fulfillment:** Zero manual intervention from purchase to content delivery

### 2. Authentication & Access Control
- **User Authentication:** Email/password signup and login
- **Guest Access System:** 90-day access tokens for non-registered purchases
- **Row Level Security (RLS):** PostgreSQL policies protecting user data
- **Module-Based Access:** Granular content access per purchased module

### 3. Premium Content Delivery
- **Secure Downloads:** Signed URLs for PDF content
- **Content Gating:** Premium content locked behind purchase verification
- **Download Tracking:** Logging of all content downloads per user
- **Multi-Module Support:** Each module has dedicated premium materials

### 4. AI-Optimized Architecture (GEO Implementation)
- **Schema.org Markup:** Comprehensive structured data (Course, HowTo, FAQ, Organization)
- **LLM-Friendly HTML:** Semantic HTML5 structure optimized for AI parsing
- **`.geo.txt` Files:** Plain-text summaries for each page optimized for AI citation
- **`llm.txt` Manifest:** Crawler directives for AI models (similar to robots.txt for LLMs)
- **Speakable Specifications:** Content marked for voice assistant compatibility
- **Citation Metadata:** Custom meta tags for AI attribution

### 5. Content Management
- **5-Module Course Structure (F6 in production):**
  - F1: Generative Accessibility Fundamentals — live
  - F2: Semantic Hierarchy — live
  - F3: Generative Authority — live
  - F4: Structured Data (Schema.org) — live
  - F5: Technical Optimization — live
  - F6: Measurement & Analytics — coming soon
- **Interactive Assessments:** GEO readiness tests
- **Glossary System:** Technical terminology database
- **Case Studies:** Real-world implementation examples
- **Radar IA:** AI trends and news section

### 6. User Experience
- **Responsive Design:** Mobile-first approach with Tailwind CSS
- **Dark/Light Mode:** Theme support via CSS variables
- **Toast Notifications:** User feedback system (Sonner)
- **Loading States:** Skeleton loaders and progress indicators
- **Form Validation:** Zod + React Hook Form

---

## 🗄️ Database Schema

### Tables
```
├── profiles          # User profile information
├── purchases         # Transaction records (Stripe integration)
├── user_access       # Module access grants for authenticated users
├── guest_access      # Token-based access for guest purchases
└── content_downloads # Download audit trail
```

### Key Relationships
- Purchases link to user_access (authenticated) or guest_access (guests)
- All tables protected by Row Level Security policies
- Automatic timestamps and UUID primary keys

---

## ⚡ Edge Functions (Serverless Backend)

| Function | Purpose |
|----------|---------|
| `create-checkout` | Creates Stripe Checkout sessions |
| `stripe-webhook` | Processes Stripe payment events |
| `process-payment-success` | Grants access post-payment |
| `generate-guest-access` | Creates guest access tokens |
| `generate-download-url` | Signs secure download URLs |
| `download-premium-content` | Serves protected PDF files |
| `send-purchase-email` | Transactional email notifications |
| `upload-premium-content` | Admin content upload |

---

## 💰 Business Model

### Pricing Structure (EUR)
- **Individual Modules (F1-F6):** €15 each
- **Complete Bundle:** €50 (save €40)

### Revenue Features
- Automated payment processing
- Immediate content delivery
- No subscription management overhead
- One-time purchase model

---

## 🔒 Security Implementation

- **Authentication:** Supabase Auth with email verification
- **Authorization:** Row Level Security on all tables
- **API Security:** Edge functions with JWT validation
- **Payment Security:** Stripe handles all PCI compliance
- **Content Protection:** Signed URLs with expiration
- **CORS:** Properly configured cross-origin policies

---

## 📊 Technical Highlights

### Code Quality
- TypeScript strict mode
- Component-based architecture
- Custom hooks for reusable logic
- Consistent error handling
- ESLint configuration

### Performance
- Vite for fast builds and HMR
- Lazy loading for routes
- Optimized images
- Efficient bundle splitting

### SEO/GEO
- Server-side meta tags via React Helmet
- JSON-LD structured data
- Semantic HTML throughout
- AI-optimized content structure

---

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── ui/          # Shadcn/UI base components
│   └── ...          # Feature components
├── pages/           # Route pages
│   ├── modules/     # Course module pages
│   └── articles/    # Blog/article pages
├── contexts/        # React Context providers
├── hooks/           # Custom React hooks
├── integrations/    # External service clients
└── lib/             # Utility functions

supabase/
├── functions/       # Edge functions (Deno)
└── config.toml      # Supabase configuration

public/
├── premium-content/ # Protected PDF files
├── images/          # Static images
└── *.geo.txt        # AI-optimized content files
```

---

## 🎓 Skills Demonstrated

### Frontend Development
- React 18 with hooks and context
- TypeScript for type safety
- Modern CSS (Tailwind, CSS variables)
- Component library integration (Shadcn/UI)
- Form handling and validation
- State management patterns

### Backend Development
- Serverless architecture (Edge Functions)
- PostgreSQL database design
- RESTful API design
- Authentication/Authorization
- Webhook processing

### E-commerce
- Stripe API integration
- Payment flow implementation
- Digital product delivery
- Guest checkout systems

### DevOps & Infrastructure
- Supabase platform
- Environment configuration
- Deployment pipelines
- Security best practices

### Specialized Knowledge
- SEO implementation
- AI/LLM optimization (GEO)
- Structured data (Schema.org)
- Content strategy for AI visibility

---

## 🚀 Unique Value Proposition

This project demonstrates expertise in an **emerging technology niche** (Generative Engine Optimization) while implementing a **production-ready e-commerce platform**. It showcases the ability to:

1. **Identify market opportunities** in AI-adjacent spaces
2. **Build complete products** from concept to production
3. **Integrate complex payment systems** with automated fulfillment
4. **Implement forward-thinking SEO** for the AI era
5. **Design scalable architectures** with modern serverless patterns

---

## 📬 Contact & Links

- **Live Demo:** https://esgeo.ai
- **Course Page:** https://esgeo.ai/curso
- **Methodology:** https://esgeo.ai/metodologia
