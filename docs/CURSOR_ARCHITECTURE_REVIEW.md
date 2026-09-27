# Architecture Review — Shri Vijaya Kitchenware Digital Catalog

**Reviewer role:** Senior software architect (read-only inspection of the existing implementation).  
**Date:** 26 September 2026  
**Scope:** Review only. No rebuild. No new features. No application code changes in this document’s delivery.

**Sources of truth**

- `MASTER_PROJECT_PROMPT.md` (requirements)
- `docs/IMPLEMENTATION_PLAN.md` (intended architecture; **stale**: still describes an empty repo)
- `docs/BUILD_STATUS.md` (claimed QA; **overstates** pinch zoom and completeness)
- Actual codebase under `src/`

**Principle:** Preserve functioning architecture unless there is a concrete defect or a finalized requirement mismatch. Prefer the smallest clean fix over a rewrite.

---

## 1. Architecture assessment

### 1.1 Overall verdict

The project is a **coherent V1 SPA catalog**, not a demo template. Stack, folder layout, data-driven products, overlay-over-brochure, and contact utilities match the intended architecture. The implementation should be **refined, not replaced**.

The main risks are **history-stack behavior**, **production deep-link hosting**, **invented product/business copy presented as fact**, and a few **spec mismatches** (homepage section order, pinch zoom). None of these justify introducing React Router, a CMS, a gallery library, or a new component system.

### 1.2 Stack and layering

| Layer | Choice | Assessment |
| --- | --- | --- |
| Build | Vite 5 + TypeScript | Correct for a static catalog |
| UI | React 18, no global store | Appropriate; overlay and scroll-spy live in `App` |
| Style | CSS custom properties + per-component CSS | Maintainable; no unnecessary CSS framework |
| Icons | `lucide-react` | Used in ~10 components; **not** an unused dependency |
| Routing | Native `history.pushState` / `popstate` | Correct strategy; close-path implementation is buggy |
| Backend | None | Correct for V1 |

Dependencies in `package.json` are lean (`react`, `react-dom`, `lucide-react`). There is no e-commerce, auth, search, or analytics stack. That matches the master prompt’s exclusions.

### 1.3 Runtime shape

```
App
├── Header (sticky, drawer, scroll-spy consumer)
├── main
│   ├── Hero
│   ├── About
│   ├── Categories  → jumps to #cat-{id}
│   ├── Catalog     → ProductCard × 12
│   ├── Videos      (currently before Testimonials)
│   ├── Testimonials
│   └── Contact
├── Footer
└── ProductOverlay (conditional) → Gallery
```

Data flows from `src/data/products.ts` and `src/data/storeInfo.ts` into presentational components. Helpers (`whatsapp.ts`, `share.ts`, `storeHours.ts`) keep URL and status logic out of JSX. That separation is sound.

### 1.3 Component structure

| Component | Role | Verdict |
| --- | --- | --- |
| `App.tsx` | Layout, history, overlay state, scroll-spy | Right place for global routing; close logic needs a surgical fix |
| `Header` | Glass header + left drawer | Matches spec; tablet breakpoint mismatch |
| `Hero` / `About` / `Categories` / `Catalog` / `Testimonials` / `Videos` / `Contact` / `Footer` | Brochure sections | Clear one-component-per-section mapping |
| `ProductCard` | Image, name, size, More Info / Get Info | Data-driven; extra short description is harmless |
| `ProductOverlay` | 85–90% modal, 5-part info order, fixed actions | Layout and content order are correct |
| `Gallery` | 8 views, thumbs, arrows, swipe, desktop hover zoom | Structure correct; pinch zoom missing |

Duplication is **low** at the product-markup level: there is one card and one overlay, not twelve hardcoded product trees. Remaining duplication is small (WhatsApp/Call links in Header, Hero, Contact, ProductCard) and is acceptable; extracting a “contact actions” primitive is **not** required for V1.

### 1.4 Product data model

`Product` in `src/types/index.ts` supports the required fields: `id`, `slug`, `name`, `category`, `size`, descriptions, `specifications`, `dimensions`, `weight`, `otherSpecs`, `features`, `benefits`, `includedContents`, `howItIsMade`, and eight named gallery slots.

There are **exactly 12 products** in three categories. UI does not hardcode product identity. **Do not change the schema.**

The problem is **content**, not structure: many specification values, weights, warranties, and marketing claims appear invented and are not marked as placeholders (unlike testimonials and videos).

### 1.5 Routing

- `/` — continuous homepage
- `/products/:slug` — same page + overlay

Direct load of a known slug opens the overlay and scrolls to `#products`. Unknown slugs leave the homepage visible with a product URL in the bar (acceptable for V1; optional later: `replaceState` to `/`).

**Do not add React Router.** Native history is the agreed design.

### 1.6 Product overlay

Desktop (~992px+): ~88vw × 88vh, square corners, no container border/shadow, gallery column fixed, info column scrolls, action bar pinned. Matches the master overlay contract.

Mobile: large image then thumbnails (`column-reverse`), scrollable copy, 50/50 Share / Get Info with `env(safe-area-inset-bottom)`. Close via backdrop and Escape. No prominent X. No Call in the overlay.

### 1.7 Browser history (intended vs actual)

**Intended:** overlay is a history entry; Back closes it without leaving the site.

**Actual:**

- Open: `pushState` to `/products/:slug` (correct).
- Close (backdrop / Escape): `pushState({}, '', '/')` (incorrect).

In-app sequence `/` → product → close produces a stack `/`, `/products/x`, `/`. Browser Back **reopens the overlay**. This is a real V1 bug.

Direct shared-URL visits must **not** use `history.back()` on close, or the user may leave the site. Close must distinguish in-app push vs landing on the product URL.

### 1.8 Gallery architecture

Standardized 8-angle order is implemented. Controls: thumbnails, arrows, swipe. Desktop hover magnification uses a full-viewport lens (reasonable Amazon-style interpretation). First main image is eager; thumbnail index 0 is eager, others `loading="lazy"`.

Missing: **touch/pinch zoom**. Hint copy says “Hover / Touch to Zoom” but pinch is not implemented. Hover `onMouseEnter` can also fire on some touch devices.

**Do not** add a lightbox or a third-party gallery.

### 1.9 Responsive implementation

Breakpoints are mostly 768px / 992px / 1200px (plan said 768 / 1024; 992 is a reasonable desktop-nav split). Overlay, catalog, contact two-column, and drawer are purpose-built rather than a shrunk desktop.

Issue: Header **Get Info / Call** appear at `min-width: 768px` while the hamburger hides only at `992px`, so **768–991px shows both**.

### 1.10 WhatsApp generation

`getWhatsAppUrl()`:

- Generic: `Hello Shree Vijaya Kitchenware, can I get information about the products?`
- Product: `Hello Shree Vijaya Kitchenware, can I get details about the ${productName}?`

Encoding via `encodeURIComponent`. Number comes from `STORE_INFO.whatsappNumber` (placeholder). User does not type the product name. **Correct. Do not rewrite.**

### 1.11 Contact actions

Phone `tel:` via `getCallUrl()`, email `mailto:`, maps embed + Open in Maps, Google Review CTA, Facebook / Instagram / YouTube / WhatsApp. Mobile contact row prioritizes Call and WhatsApp. **Correct shape.** Values are placeholders pending real numbers and URLs.

### 1.12 Store-hours logic

Per-day schedule with distinct hours (e.g. Saturday later close, Sunday 11:00–18:00). Status uses the device local clock. OPEN NOW / CLOSED NOW is displayed on Hero and Contact.

Gaps: “Opens tomorrow at 10:00 AM” is hardcoded (wrong for Saturday evening → Sunday 11:00 AM); `nextChangeText` is unused in the UI; status is computed once on mount (stale if the tab stays open across open/close). No holiday system — correctly omitted.

### 1.13 Code duplication

Acceptable repetition of CTA links and store status calls. Catalog filters 12 products by category (cheap). `getCallUrl` living in `whatsapp.ts` is a mild naming mismatch, not worth a file split for V1.

### 1.14 Unnecessary dependencies

None that should be removed for V1. **Do not** replace `lucide-react`. **Do not** add React Router, zoom libraries, or share popups.

### 1.15 Performance risks

- All placeholder product images are **SVG data URIs generated at module load** (`generateCookwareSvg` × 12 products × 8 views + 3 category banners). They sit in the JS bundle; `loading="lazy"` does not defer bytes already parsed.
- Unthrottled `scroll` listeners in `App` (spy) and `Header` (`is-scrolled`) — minor with 12 products.
- Google Maps iframe is `loading="lazy"` — good.

When real photos arrive, image fields should be **file paths**, not inlined data URIs. Do not rewrite Gallery to solve placeholders.

### 1.16 Maintainability and extensibility

**Maintainability:** Clear folders (`data`, `types`, `utils`, `components/*`), typed products, placeholder registry. Overlay and catalog will not need a rewrite to add copy or photos.

**Extensibility (without redesign):**

- New product: append to `PRODUCTS` (V1 still wants exactly 12).
- Real photos: swap `images.*` strings to `/assets/products/...`.
- Videos: `VIDEOS` already has optional `videoUrl`; player is a placeholder box.
- Analytics/SEO: page structure and slugs are clean; do not add either unless requested.

**Docs drift:** `IMPLEMENTATION_PLAN.md` still says the repo is empty. `BUILD_STATUS.md` claims pinch zoom and full browser QA. Treat this review as the accurate status for architecture; do not treat BUILD_STATUS as verified.

---

## 2. What is already correct (do not rewrite)

- Vite + React + TypeScript + vanilla CSS tokens
- Continuous brochure + overlay sibling (not product pages)
- Native History API for `/products/:slug`
- 12 products / 3 categories / typed data model
- Overlay info order, no Call in overlay, no prominent X
- WhatsApp message split (generic vs product)
- Store schedule data shape and local-time OPEN/CLOSED
- Placeholder registry + `isPlaceholder` on testimonials/videos
- English-only, no cart/search/admin/backend

---

## 3. Problems found

Severity: **High** / **Medium** / **Low**.  
**V1 necessary** = finalized requirement or user-facing bug that should be fixed before treating V1 as done.

### P1. Overlay close pollutes history

| | |
| --- | --- |
| **Severity** | High |
| **V1 necessary** | Yes |
| **Files** | `src/App.tsx` |
| **Risk of fix** | Low, if limited to history helpers in `App` |

**Problem:** `handleCloseOverlay` always `pushState`s `/`. Back after close reopens the overlay.

**Recommended fix:** On in-app open, `pushState({ overlay: true, slug }, '', path)`. On close: if `history.state.overlay`, `history.back()`; if the user landed on the product URL, `replaceState({}, '', '/')`. Keep `popstate` as the only place that sets overlay from the URL. Do **not** add a router library.

---

### P2. Production product URLs 404 on static hosts

| | |
| --- | --- |
| **Severity** | High (at deploy) |
| **V1 necessary** | Yes, when the site is hosted statically |
| **Files** | Host config (e.g. `public/_redirects`, `vercel.json`, or equivalent) + a short README note |
| **Risk of fix** | Low |

**Problem:** Vite dev rewrites unknown paths to `index.html`. There is no production SPA fallback. Shared `/products/:slug` links fail on typical static hosting.

**Recommended fix:** `/* → /index.html` rewrite for the chosen host. Do **not** change client routing.

---

### P3. Invented product and brand facts presented as real

| | |
| --- | --- |
| **Severity** | High (content / trust) |
| **V1 necessary** | Yes before launch (schema stays) |
| **Files** | `src/data/products.ts`, `src/components/About/About.tsx`, `src/components/Hero/Hero.tsx`, optionally `src/data/placeholders.ts` |
| **Risk of fix** | Low (copy only) |

**Problem:** Master forbids fabricating specifications and business history. Product records include watts, kg, “Lifetime Structural Integrity Guarantee”, oil-reduction claims, etc., without placeholder flags. About/Hero assert SS304, metal-spoon safety, dual heating, and similar.

**Recommended fix:** Keep the TypeScript model. Mark unconfirmed fields or strip to known names/sizes until owner data exists. Extend the placeholder registry. Do **not** invent replacement numbers. Do **not** redesign the product type.

---

### P4. Homepage section order and nav list vs master

| | |
| --- | --- |
| **Severity** | Medium |
| **V1 necessary** | Yes (order). Nav item is optional. |
| **Files** | `src/App.tsx`, `src/components/Header/Header.tsx`, `src/components/Footer/Footer.tsx` (scroll-spy / link order) |
| **Risk of fix** | Very low |

**Problem:** Master homepage order is Testimonials then Videos. App renders Videos then Testimonials. Desktop nav in master is Home | About Us | Products | Videos | Testimonials | Contact; implementation also includes Categories.

**Recommended fix:** Swap Testimonials and Videos in `App` and align Header/Footer/scroll-spy arrays. Removing Categories from desktop nav is a small spec alignment, not a feature. Do **not** create category pages.

---

### P5. Share cancel still copies the URL

| | |
| --- | --- |
| **Severity** | Medium |
| **V1 necessary** | Yes |
| **Files** | `src/utils/share.ts` (and toast behavior in `ProductOverlay.tsx` if needed) |
| **Risk of fix** | Low |

**Problem:** `navigator.share` rejection (including user cancel) falls through to clipboard copy.

**Recommended fix:** If the error is abort/cancel, return `{ success: false }` without clipboard. Keep native share. Do **not** add a custom share popup.

---

### P6. Mobile pinch zoom missing

| | |
| --- | --- |
| **Severity** | Medium |
| **V1 necessary** | Yes (finalized gallery requirement), bounded |
| **Files** | `src/components/Gallery/Gallery.tsx`, `src/components/Gallery/Gallery.css` |
| **Risk of fix** | Medium (pinch vs swipe) |

**Problem:** Swipe and desktop hover exist; pinch zoom does not. Hint text overclaims.

**Recommended fix:** Pinch-zoom on the existing main viewport only. Disable hover-lens on coarse/touch pointers. Do **not** add a lightbox or a gallery dependency.

---

### P7. Tablet header shows hamburger and desktop actions together

| | |
| --- | --- |
| **Severity** | Medium |
| **V1 necessary** | Yes as polish (layout bug) |
| **Files** | `src/components/Header/Header.css` |
| **Risk of fix** | Low |

**Problem:** `.desktop-header-actions` at 768px vs hamburger until 992px.

**Recommended fix:** One chrome per band (e.g. both desktop nav and desktop actions at 992px). Do **not** restyle the whole header.

---

### P8. Store-hours next-open text is hardcoded; status is static

| | |
| --- | --- |
| **Severity** | Low |
| **V1 necessary** | No, unless `nextChangeText` is shown |
| **Files** | `src/utils/storeHours.ts`; optionally Hero/Contact if live updates are added |
| **Risk of fix** | Low |

**Problem:** After close, copy assumes tomorrow 10:00 AM. Status is not refreshed while the page stays open.

**Recommended fix (later):** Read the next schedule row’s `openTime`; optional interval/visibility refresh. Do **not** add holiday management.

---

### P9. Placeholder images inflate the JS bundle

| | |
| --- | --- |
| **Severity** | Medium (performance), not a functional bug |
| **V1 necessary** | No rewrite now |
| **Files** | `src/data/products.ts`, `src/utils/svgGenerator.ts`, later `public/assets/products/` |
| **Risk of later fix** | Low if image fields remain URL strings |

**Problem:** Data URIs are generated at import time for every gallery slot.

**Recommended fix (when photos exist):** Point `images.*` at static files. Keep `svgGenerator` only as a temporary helper. Do **not** rewrite Gallery for this.

---

### P10. Documentation overclaim and stale plan

| | |
| --- | --- |
| **Severity** | Low |
| **V1 necessary** | Docs only |
| **Files** | `docs/BUILD_STATUS.md`, `docs/IMPLEMENTATION_PLAN.md` (update later, not as a rebuild) |

**Problem:** BUILD_STATUS lists pinch zoom and 100% QA. Implementation plan still describes an uninitialized repo.

**Recommended fix:** After real browser verification of any code fixes, update BUILD_STATUS honestly. This review is the current architecture record.

---

## 4. Additional notes (not recommended as V1 work)

These are real but **not** worth changing unless they block QA:

- Overlay action bar has a shadow; the overlay **container** correctly has none.
- Overlay section titles are numbered (`1. Product Description`); order is correct.
- Product cards include a short description beyond Image / Name / Size / buttons.
- Category cards and some media tiles are clickable `div`s (keyboard access is weaker; accessibility is pending and must not override visual design).
- Overlay is not `role="dialog"` / focus-trapped (same accessibility caveat).
- Footer uses hash links (`#hero`); Header uses `scrollIntoView`. Fine on `/`.
- `Catalog` unused import of `CategoryId` is a tiny lint issue, not an architecture problem.
- Unknown slug URLs are not normalized.

---

## 5. What is unnecessary (do not do)

- React Router or any routing library
- Replacing `lucide-react` with hand-drawn icons
- New UI primitive layer or CSS framework
- Admin, CMS, database, search, comparison, analytics
- Rewriting overlay or gallery from scratch
- Removing Escape-to-close
- Removing product-card short descriptions without a design decision
- Zoom/share/maps libraries
- Holiday calendar for store hours
- Extra products or e-commerce flows

---

## 6. What must not change

- Continuous single-page brochure with overlay (not separate product pages)
- Native History API for product URLs
- Exactly 12 products and 3 categories for V1
- Overlay information order
- Overlay actions: Share Product and Get Info only
- No cart, login, backend, or product search
- English only; no language switcher
- Existing component folder map unless a listed fix requires a small edit

---

## 7. V1 change priority (if implementation is requested later)

Do these in order. Stop if a change would require a rewrite.

1. History close (`App.tsx`) — P1  
2. SPA host rewrite — P2  
3. Placeholder-mark or strip unconfirmed specs/copy — P3  
4. Testimonials before Videos — P4  
5. Share abort handling — P5  
6. Pinch zoom in existing Gallery — P6  
7. Header breakpoint alignment — P7  

Defer: P8 (hours next-open), P9 (image files), P10 (docs after verified QA).

**Do not implement any of the above as part of this review.** This file is the review record only.
