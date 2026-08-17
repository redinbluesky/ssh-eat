# Shh-eat Next.js Landing Page Implementation Plan

> **For Hermes:** Execute this plan task by task in the existing `D:\llm\workspace\ssh-eat` Git working tree. Do not run `git init`, create a replacement repository, delete existing documents, or overwrite original image assets. Track progress with the checkboxes in this document.

**Goal:** Build and deploy a responsive Next.js landing page that validates demand for the Shh-eat office snack through starter-set interest, trial applications, and office-test inquiries.

**Architecture:** Use a statically exported Next.js App Router application hosted under the GitHub Pages `/ssh-eat` base path. Keep brand copy and product hypotheses in a typed content module, render most sections as Server Components, and isolate form submission and analytics in small Client Components. Send leads to a Formspree-compatible external endpoint so the static site needs no backend.

**Tech Stack:** Next.js App Router, React, TypeScript, Tailwind CSS v4, Vitest, React Testing Library, Playwright, GitHub Pages, GitHub Actions

## Global Constraints

- Work in the existing `ssh-eat` directory and existing `main` Git repository. Never run `git init`.
- Treat `docs/brand-brief.md`, `docs/brand-direction.md`, and `docs/visual-direction.md` as the current sources of truth.
- Keep the main copy exactly as `회의는 계속. 간식도 조용히.`
- Present `Low Sound`, `Low Mess`, and `Low Scent` as product-development principles, not verified performance.
- Do not publish unverified health claims, decibel values, sales figures, customer reviews, scarcity counters, or customer logos.
- Use `체험단 신청하기` as the consistent primary CTA and `오피스 테스트 문의하기` as the business CTA.
- Display `24,900원` as an explicit MVP hypothesis for the Desk Pod starter set, not as a confirmed retail price.
- Preserve the original PNG files under `assets/images`; add optimized derivatives instead of replacing them.
- Support keyboard navigation, visible focus, descriptive alternative text, WCAG AA contrast, responsive layouts, and reduced-motion preferences.
- Run the relevant tests and a production build after each meaningful implementation unit.

---

## Source Material and Fixed Decisions

### Brand and audience

- Primary audience: 25-39-year-old knowledge workers in quiet offices, open offices, and coworking spaces.
- Core problem: hunger during work, combined with concern about package noise, chewing noise, crumbs, hand residue, and scent.
- Initial product system: `Soft Savory Bites + Desk Pod + Refill`.
- Initial flavor hypotheses: `Quiet Corn` and `Mellow Potato`.
- Primary validation targets: 200 relevant visitors, 8% trial or notification conversion, and 5% starter-set interest click-through.

### Visual direction

- Direction: `Quiet Utility`.
- Design dials: `DESIGN_VARIANCE 6`, `MOTION_INTENSITY 3`, `VISUAL_DENSITY 3`.
- Use a light page theme with `Quiet Ivory #F5F1E8`, `Desk Charcoal #20221F`, `Paper Beige #E7DED0`, and one primary accent, `Quiet Corn #E5C75A`.
- Use `Mellow Potato #C9B38C` only to identify the potato flavor and `Desk Sage #9FAA92` for subdued explanatory states.
- Use Noto Sans KR for primary text and IBM Plex Mono for restricted system labels through `next/font`.
- Avoid gradients, glass effects, oversized rounded cards, decorative waveforms, certification-style badges, generic equal feature cards, and excessive animation.

### Existing images

- `assets/images/shh-eat-package-hero.png`: landscape hero and product-concept image.
- `assets/images/shh-eat-sns-launch-lifestyle.png`: portrait remote-meeting and desk-use image.
- Both must be identified as concept imagery wherever a visitor could mistake them for final production photography.
- Before coding image-dependent Desk Pod and product-detail sections, prepare and approve:
  - `assets/images/shh-eat-desk-pod-flow.png`: realistic refill-to-desk-use concept, without unverified seals or claims.
  - `assets/images/shh-eat-bites-macro.png`: close product texture view consistent with the existing snack shape and lighting.

---

## Target File Structure

```text
ssh-eat/
├─ assets/images/                         # preserved original and approved concept images
├─ public/images/                         # responsive WebP derivatives
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx                      # fonts, metadata, analytics consent shell
│  │  ├─ page.tsx                        # landing-page section composition
│  │  └─ globals.css                     # tokens, base styles, reduced-motion rules
│  ├─ components/
│  │  ├─ landing-sections.tsx            # static brand and product sections
│  │  ├─ lead-form.tsx                   # validated external form submission
│  │  ├─ faq.tsx                         # accessible FAQ disclosures
│  │  └─ analytics.tsx                   # consent-aware GA4 client boundary
│  ├─ content/landing.ts                 # copy, products, price, FAQ, navigation
│  └─ lib/
│     ├─ lead-schema.ts                  # form types and validation
│     └─ analytics-events.ts             # event names and safe properties
├─ tests/                                # unit and component tests
├─ e2e/landing.spec.ts                   # Playwright page-flow tests
├─ next.config.ts                        # static export and Pages base path
├─ package.json                          # scripts and dependencies
└─ .github/workflows/deploy-pages.yml    # production deployment
```

## Public Interfaces

Use these names and values consistently across the form, tests, analytics, and external endpoint.

```ts
export type LeadIntent = "trial" | "office_test";
export type PainPoint = "sound" | "mess" | "scent";
export type UseContext =
  | "before_meeting"
  | "video_call"
  | "focus_work"
  | "other";

export interface LeadPayload {
  intent: LeadIntent;
  email: string;
  painPoints: PainPoint[];
  useContext: UseContext;
  company?: string;
  teamSize?: string;
  privacyConsent: true;
  source: "landing";
}

export type AnalyticsEventName =
  | "cta_click"
  | "starter_set_interest"
  | "lead_submit_success"
  | "lead_submit_error"
  | "faq_open";
```

- `NEXT_PUBLIC_FORM_ENDPOINT`: Formspree-compatible submission endpoint. Production builds must fail their readiness check when it is absent.
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: optional GA4 identifier. Analytics must safely do nothing when unset and must not load before consent.
- Analytics properties may contain CTA placement, `LeadIntent`, and FAQ identifier. They must never contain email, company name, free text, or another personal identifier.

---

### Task 1: Record the Approved Product and Price Hypotheses

**Files:**
- Modify: `docs/brand-brief.md`
- Verify: `docs/brand-direction.md`
- Verify: `docs/visual-direction.md`

**Completion criterion:** The brief records the 24,900 won starter-set hypothesis and clearly distinguishes concept images and unverified product properties from final claims.

- [ ] Add the Desk Pod starter-set price hypothesis as `24,900원` under the initial SKU section.
- [ ] State that the value exists only to measure landing-page interest and can change after user and manufacturing validation.
- [ ] Confirm every proposed landing-page claim against the prohibited-claim tables in `brand-direction.md`.
- [ ] Review the four concept images for consistent product shape, logo spelling, hand anatomy, keyboard layout, and lack of unsupported badges.
- [ ] Run `git diff --check` and inspect the Markdown diff.
- [ ] Commit with `docs: record landing page validation hypotheses` if Hermes is authorized to commit.

### Task 2: Initialize Next.js Without Replacing the Repository

**Files:**
- Create: `package.json`, `package-lock.json`, `tsconfig.json`, `next-env.d.ts`, `next.config.ts`, `postcss.config.mjs`
- Create: `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`
- Create: `.gitignore`

**Produces:** A minimal App Router application that runs locally and exports to `out/` for GitHub Pages.

- [ ] Confirm `git rev-parse --show-toplevel` resolves to `D:/llm/workspace/ssh-eat` and that the branch remains `main`.
- [ ] Create the package manifest manually in the existing folder and install Next.js, React, TypeScript, Tailwind CSS v4, and the test dependencies. Do not run a scaffolder that replaces existing files.
- [ ] Define scripts named `dev`, `build`, `start`, `lint`, `test`, `test:watch`, and `test:e2e`.
- [ ] Configure `output: "export"`, `trailingSlash: true`, and unoptimized images. Apply `/ssh-eat` as `basePath` and `assetPrefix` only for production Pages builds so local URLs remain rooted at `/`.
- [ ] Add the base layout, Korean language metadata, font configuration, and an empty semantic page shell.
- [ ] Add test configuration and a smoke test that renders the main heading.
- [ ] Run the smoke test and confirm it passes.
- [ ] Run `npm run build` and confirm `out/index.html` exists.
- [ ] Commit with `chore: initialize Next.js landing app` if authorized.

### Task 3: Build the Brand Tokens and Static Landing Sections

**Files:**
- Create: `src/content/landing.ts`
- Create: `src/components/landing-sections.tsx`
- Modify: `src/app/page.tsx`, `src/app/globals.css`
- Test: `tests/landing-content.test.tsx`

**Consumes:** The fixed brand direction, approved imagery, and the static export shell.

**Produces:** A responsive, content-complete landing page without form submission behavior.

- [ ] Write tests asserting the exact main copy, all three LOW principles, both flavors, the `24,900원` price, and the two CTA intents.
- [ ] Run the tests and confirm they fail because the content module and sections do not exist.
- [ ] Implement `landing.ts` as the single source for navigation, copy, products, price, usage scenes, and FAQ content.
- [ ] Implement sections in this order:
  1. single-line navigation
  2. asymmetric hero
  3. recognizable workplace problem scene
  4. text-first 3 LOW development principles
  5. Soft Savory Bites and two flavor hypotheses
  6. refill, Desk Pod, and one-bite use flow
  7. meeting-adjacent, video-call, and focus-work scenes
  8. starter-set price hypothesis
  9. application section shell
  10. FAQ and footer
- [ ] Use the primary CTA label `체험단 신청하기` consistently. Use `조용한 첫입 기다리기` only as supporting copy, not as a competing CTA.
- [ ] Use semantic landmarks and heading order, descriptive image alternatives, explicit image dimensions, and responsive `<picture>` sources.
- [ ] Make every multi-column layout collapse to one column below 768px and keep the desktop navigation within one line and 80px height.
- [ ] Restrict interaction motion to 120-200ms opacity and transform transitions, with reduced-motion overrides.
- [ ] Run the content tests and confirm they pass.
- [ ] Check 375px, 768px, and 1440px layouts in a real browser before marking the task complete.
- [ ] Commit with `feat: build Shh-eat landing sections` if authorized.

### Task 4: Implement Lead Validation and External Submission

**Files:**
- Create: `src/lib/lead-schema.ts`
- Create: `src/components/lead-form.tsx`
- Modify: `src/app/page.tsx`
- Test: `tests/lead-form.test.tsx`

**Consumes:** `LeadPayload`, `NEXT_PUBLIC_FORM_ENDPOINT`, and the application section shell.

**Produces:** One accessible form supporting both personal trials and office tests.

- [ ] Write tests for invalid email, missing pain point, missing use context, missing consent, and missing company when `intent` is `office_test`.
- [ ] Write tests for submitting valid `trial` and `office_test` payloads as `FormData`.
- [ ] Write tests for submitting, success, endpoint error, network error, and retry states.
- [ ] Run the form tests and confirm they fail before implementation.
- [ ] Implement labels above every control and associate errors through `aria-describedby`.
- [ ] Require email, use context, at least one pain point, and privacy consent. Require company only for office-test submissions.
- [ ] Send the exact `LeadPayload` fields to `NEXT_PUBLIC_FORM_ENDPOINT` and request a JSON response.
- [ ] Disable duplicate submissions only while a request is active, then allow retry after an error.
- [ ] Clear personal form values after success and display a persistent success message that receives programmatic focus.
- [ ] Keep email, company, and free text out of localStorage, query strings, console output, and analytics.
- [ ] Run the form tests and confirm they pass.
- [ ] Commit with `feat: add trial and office lead form` if authorized.

### Task 5: Add Consent-Aware Analytics

**Files:**
- Create: `src/lib/analytics-events.ts`
- Create: `src/components/analytics.tsx`
- Modify: `src/app/layout.tsx`, `src/components/lead-form.tsx`, `src/components/landing-sections.tsx`
- Test: `tests/analytics.test.tsx`

**Consumes:** `AnalyticsEventName` and `NEXT_PUBLIC_GA_MEASUREMENT_ID`.

**Produces:** Privacy-conscious measurement for the documented MVP metrics.

- [ ] Write tests proving that the GA script is absent before consent and when the measurement ID is unset.
- [ ] Write tests for `cta_click`, `starter_set_interest`, `lead_submit_success`, `lead_submit_error`, and `faq_open` event names and safe properties.
- [ ] Run the analytics tests and confirm they fail before implementation.
- [ ] Implement a small consent boundary that loads GA4 only after affirmative analytics consent.
- [ ] Track CTA placement, intent, and FAQ identifiers without personal fields.
- [ ] Fire `starter_set_interest` before scrolling the visitor to the lead form and preselecting the personal-trial intent.
- [ ] Fire success only after the external endpoint confirms receipt.
- [ ] Run the analytics tests and confirm they pass.
- [ ] Verify through the browser network panel that no GA request occurs before consent.
- [ ] Commit with `feat: measure landing page validation events` if authorized.

### Task 6: Configure GitHub Pages Deployment

**Files:**
- Create: `.github/workflows/deploy-pages.yml`
- Modify: `README.md`
- Test: static production output under `out/`

**Consumes:** The static export and the `redinbluesky/ssh-eat` repository path.

**Produces:** A reproducible GitHub Pages deployment at `/ssh-eat/`.

- [ ] Configure workflow permissions for Pages and OIDC, install with `npm ci`, run tests, build the site, upload `out/`, and deploy through the official Pages actions.
- [ ] Add workflow concurrency so a newer main-branch deployment cancels an older in-progress deployment.
- [ ] Document local development, test, build, required environment variables, Pages setup, and the `/ssh-eat/` production URL in `README.md`.
- [ ] Build with the production Pages environment and verify generated HTML, CSS, scripts, and image paths include `/ssh-eat` exactly once.
- [ ] Serve the `out/` directory locally and verify internal anchors, refreshes, and static assets.
- [ ] Commit with `ci: deploy static landing page to GitHub Pages` if authorized.

### Task 7: Production Verification

**Files:**
- Create: `e2e/landing.spec.ts`
- Modify: tests only when they expose a real requirement mismatch

**Completion criterion:** The deployed site works at the Pages subpath, collects valid leads, records consented non-personal events, and passes responsive and accessibility acceptance checks.

- [ ] Add Playwright scenarios for the main CTA, starter-set interest CTA, individual application, office-test conditional fields, FAQ controls, and external-form error recovery.
- [ ] Test viewports at 375x812, 768x1024, and 1440x900 with no horizontal overflow.
- [ ] Test keyboard-only navigation, visible focus, logical heading order, control labels, and success-message focus.
- [ ] Run an automated axe scan and fix every serious or critical finding.
- [ ] Confirm `prefers-reduced-motion` removes nonessential transitions.
- [ ] Run `npm run lint`, `npm test`, `npm run test:e2e`, and `npm run build`; require all commands to exit successfully.
- [ ] Run mobile Lighthouse and target at least 90 for Performance, Accessibility, Best Practices, and SEO, with LCP below 2.5 seconds and CLS below 0.1.
- [ ] Review every visible claim against the prohibited-claim section of `docs/brand-direction.md` and remove anything that overstates evidence.
- [ ] Verify the deployed `/ssh-eat/` page, the Formspree receipt, and GA4 DebugView before announcing completion.
- [ ] Commit with `test: verify landing page production readiness` if authorized.

---

## Acceptance Checklist

- [ ] Existing Git history, docs, and original images remain intact.
- [ ] The first viewport communicates office snack, one-bite product, and trial CTA without requiring scroll.
- [ ] `Low Sound`, `Low Mess`, and `Low Scent` are visibly labeled as design principles under validation.
- [ ] `24,900원` is visibly labeled as an MVP price hypothesis.
- [ ] No unverified performance, nutrition, sustainability, popularity, or customer claims appear.
- [ ] Primary and business CTAs lead to the correct form intent.
- [ ] Form success and failure states work with keyboard and screen-reader navigation.
- [ ] Personal information is sent only to the configured form endpoint.
- [ ] Analytics loads only after consent and records no personal information.
- [ ] Local development works at `/`; production works at `/ssh-eat/`.
- [ ] Tests, static production build, Pages deployment, and deployed smoke checks all pass.

