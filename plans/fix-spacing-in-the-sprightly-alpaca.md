# RadCard Global — Multi-Fix Plan

## Context
A series of UI polish, content accuracy, and layout fixes across the RadCard Global enterprise website. The site uses an Apple/Palantir/Stripe-inspired design system defined in `Nav.tsx` (the `C` constants). Changes span navigation, floating buttons, section ordering, text alignment, card design, and footer.

---

## Changes Required

### 1. Nav — Logo & "Global" color + spacing
**File:** `src/app/components/Nav.tsx`
- Remove the `linear-gradient` from the ECG logo badge — replace with solid `C.accentBlue` (`#1555BA`)
- Change "Global" span color from `rgba(255,255,255,0.38)` → `C.white` (`#FFFFFF`) at lower weight (400) — still visually softer than "RadCard" but fully white
- Review padding/gap on the nav container for better spacing between logo, links, and CTA

### 2. Floating Button — fix transparency
**File:** `src/app/components/FloatingButtons.tsx`
- `C.blue` is undefined in the color constants — this causes the button to render transparent
- Replace `C.blue` with `C.accentBlue` (`#1555BA`) for the Schedule Consultation button background
- The dismiss close button should use a darker shade: `#0f4fa0`
- Ensure button text is white and fully legible

### 3. Company positioning — remove disclaimers
**Files:** `src/app/components/Footer.tsx`, `src/app/components/Hero.tsx`, `src/app/App.tsx`
- **Footer.tsx line ~123:** Change `"Preliminary radiology reporting services only."` → remove entirely from the copyright line
- **Hero.tsx:** The operations panel footer says `"Preliminary reporting only — 24/7/365"` → change to `"Teleradiology · Preliminary Reporting · 24/7/365"`
- **App.tsx SEO schema:** Update `"serviceType"` and descriptions to say "Teleradiology company providing preliminary radiology reporting services" rather than implying non-teleradiology
- Do not add the disclaimer back anywhere

### 4. Hero text — center align on ALL pages
Center the hero/header block text on:
- **Home Hero** (`Hero.tsx`): Add `textAlign: "center"` to the content container; center the headline, body, CTA row (`justifyContent: "center"`), and stats bar
- **All dedicated page headers** — the navy hero block at the top of each page:
  - `PreliminaryReportingPage.tsx`
  - `SolutionsPage.tsx`
  - `RegionsPage.tsx`
  - `QualityPage.tsx`
  - `AboutPage.tsx`
  - `ContactPage.tsx`
  
  In each, the inner `<div style={{ maxWidth: 1200... }}>` should have `textAlign: "center"` and the `<p>` + `<h1>` should have `maxWidth` centered with `margin: "0 auto"`.

**Note:** The operations dashboard panel in Hero.tsx stays left-aligned (it's a data panel, not editorial text). Only the headline/body/CTA above it gets centered. The stats bar below should be `justifyContent: "center"`.

### 5. Regions We Serve — Apple-themed cards
**Files:** `src/app/components/GlobalCoverage.tsx`, `src/app/components/RegionsPage.tsx`

Replace the colored left-border accent pattern with Apple-style clean cards:
- **Market selector tabs** (GlobalCoverage): Keep the underline-tab pattern — it's already clean
- **Active market detail card**: White background, `1px solid C.border`, `borderRadius: 12`, generous padding (40px), NO colored left border — use the flag emoji as the only visual accent
- **All-markets compact row** (GlobalCoverage bottom): Clean pill buttons, no left border
- **RegionsPage market grid cards** (bottom section): White card, `1px solid C.border`, `borderRadius: 10`, `padding: "20px 24px"`, flag + country + timezone — NO `borderLeft: 3px solid color`
- **RegionsPage active market right column card**: White, `1px solid C.border`, `borderRadius: 10`, clean bullet list, NO colored left border

### 6. Homepage section order
**File:** `src/app/App.tsx` — `HomePage` function

Change order from:
```
Hero → WorkforceCrisis → WhyTraditionalFails → Solution → GlobalCoverage → PreliminaryReporting → HowItWorks → WhyRadCard → QualityCompliance → FinalCTA
```
To:
```
Hero → WorkforceCrisis → WhyTraditionalFails → PreliminaryReporting → HowItWorks → Solution → GlobalCoverage → WhyRadCard → QualityCompliance → FinalCTA
```

### 7. Footer — white text + highlighted contact info
**File:** `src/app/components/Footer.tsx`

- **Bottom bar text** (copyright + legal links): Change from `rgba(255,255,255,0.18)` → `rgba(255,255,255,0.55)` for legibility
- **Contact info block** (email, phone, WhatsApp): Elevate to a dedicated highlighted panel at the top of the footer (above the link columns), styled as a navy-bordered card with white text at full opacity, slightly larger font size (14px), clearly labeled
- Consider adding a thin colored top border (`C.accentCyan`) to the contact panel to draw the eye

### 8. CTA buttons — ensure legibility throughout
**Files:** `FinalCTA.tsx`, `PreliminaryReportingPage.tsx`, `SolutionsPage.tsx`, `QualityPage.tsx`, `AboutPage.tsx`, `ContactPage.tsx`

- All primary CTAs: `background: C.navy`, `color: C.white`, no transparency
- All secondary CTAs: `background: C.accentBlue`, `color: C.white` OR outlined with `border: 1px solid C.border`, `color: C.text` — never transparent or low-contrast
- CTA buttons on dark sections: `background: C.white`, `color: C.navy`
- Minimum padding: `"12px 24px"`, `fontSize: 14`, `fontWeight: 700`

### 9. Apple theme consistency — cards audit
Apply these rules consistently to ALL card-like elements across the site:
- **Light section cards**: `background: C.white`, `border: 1px solid C.border`, `borderRadius: 10–12px`, padding `28–40px` — NO colored left borders, NO colored backgrounds
- **Dark section cards** (navy bg): `background: C.cardDark` (`#0D2040`), `border: 1px solid C.borderDark`, `borderRadius: 10px` — NO colored left borders
- Step/numbered items: large muted number + title + description — no icon badges
- Remove any remaining colored left-border (`borderLeft: 3px solid`) patterns from light section cards (WorkforceCrisis, PreliminaryReporting)

---

## Critical Files to Modify
1. `src/app/components/Nav.tsx` — logo badge, Global color
2. `src/app/components/FloatingButtons.tsx` — button background fix
3. `src/app/components/Footer.tsx` — contact highlight, white text, remove disclaimer
4. `src/app/components/Hero.tsx` — center text, update panel footer text
5. `src/app/App.tsx` — section order + SEO text
6. `src/app/components/GlobalCoverage.tsx` — Apple card style
7. `src/app/components/RegionsPage.tsx` — Apple card style
8. `src/app/components/WorkforceCrisis.tsx` — remove left-border from cards
9. `src/app/components/PreliminaryReporting.tsx` — remove left-border from cards
10. All dedicated page files — center hero text: `PreliminaryReportingPage.tsx`, `SolutionsPage.tsx`, `QualityPage.tsx`, `AboutPage.tsx`, `ContactPage.tsx`

---

## Verification
- Navigate to Home — confirm hero headline is centered, section order is Crisis → Traditional → Preliminary → HowItWorks → Solution → Global → WhyRadCard → Quality → CTA
- Navigate to each dedicated page — confirm hero header text is centered
- Confirm floating Schedule Consultation button shows solid blue, not transparent
- Scroll footer — contact info is prominently visible, bottom text is readable white
- Check Regions We Serve page — no colored left borders on cards, clean Apple aesthetic
- No text reads "Preliminary radiology reporting services only" anywhere
