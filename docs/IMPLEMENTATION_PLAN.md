# Implementation Plan — Shri Vijaya Kitchenware Digital Catalog

## 1. Current Project State
- **Repository Status:** Fresh repository containing `MASTER_PROJECT_PROMPT.md` and `.agent` directory.
- **Framework / Toolchain:** Uninitialized. Node v24.14.0 and NPM v11.9.0 available.
- **Existing Source / Assets:** None yet. Placeholders will be created for logo, product gallery images, video frames, and store images.
- **Project Classification:** Empty project needing full setup from foundation.

---

## 2. Proposed Architecture
- **Framework:** Vite + React + TypeScript for high-performance SPA, instant hot-reloading, type safety for structured product schemas, and clean state management.
- **Styling Strategy:** Vanilla CSS / CSS Modules utilizing custom CSS custom properties (design tokens) for colors, typography, layout dimensions, glassmorphism backdrop blurs, and transitions.
- **State Management:** React state for active overlays, gallery modal indices, active category scroll position, and navigation state.
- **URL & History Management:** Native `window.history` / HTML5 pushState & popstate handling for seamless overlay URL routing (`/products/:slug`) and mobile hardware back button support.
- **Zero Backend / Zero E-Commerce:** 100% static client-side application without database, login, checkout, cart, or external API dependencies.

---

## 3. File & Folder Structure
```
SVKH/
├── docs/
│   ├── IMPLEMENTATION_PLAN.md
│   └── BUILD_STATUS.md
├── public/
│   ├── assets/
│   │   ├── logo.svg
│   │   ├── products/         (Categorized placeholder SVG/WebP product images)
│   │   ├── categories/       (Category banner thumbnails)
│   │   └── store/            (Store & brand placeholder images)
├── src/
│   ├── data/
│   │   ├── products.ts       (12 structured products source of truth)
│   │   ├── storeInfo.ts      (Hours, location, phone, social, testimonials, videos)
│   │   └── placeholders.ts   (Central registry of all temporary placeholder markers)
│   ├── types/
│   │   └── index.ts          (TypeScript definitions for Product, Category, StoreInfo, etc.)
│   ├── styles/
│   │   ├── variables.css     (Design tokens: colors, spacing, typography, z-index, glassmorphism)
│   │   ├── global.css        (Reset, base styles, typography, scroll-behavior)
│   │   └── components/       (Scoped styling files per major component)
│   ├── utils/
│   │   ├── whatsapp.ts       (Message formatting and URL generator)
│   │   ├── share.ts          (Web Share API helper with fallback)
│   │   └── storeHours.ts     (Dynamic OPEN NOW / CLOSED NOW calculation engine)
│   ├── components/
│   │   ├── Header/           (Sticky glassmorphism header & Mobile Drawer)
│   │   ├── Hero/             (Brand intro, store intro & hero section)
│   │   ├── About/            (About Us section)
│   │   ├── Categories/       (3 interactive category feature cards)
│   │   ├── Catalog/          (Continuous 12-product section grouped by category)
│   │   ├── ProductCard/      (Product card with size pill and actions)
│   │   ├── ProductOverlay/   (85-90% responsive modal overlay with custom scroll area)
│   │   ├── Gallery/          (Amazon-style hover zoom on Desktop, Touch pinch/swipe on Mobile)
│   │   ├── Testimonials/     (Customer reviews section)
│   │   ├── Videos/           (Video showcases placeholder gallery)
│   │   ├── Contact/          (2-column Desktop / stacked Mobile with embedded Google Maps & status)
│   │   └── Footer/           (Concise corporate & seller disclosure footer)
│   ├── App.tsx               (Main continuous layout container & history router listener)
│   └── main.tsx              (Entry point)
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
```

---

## 4. Component Structure
- `App`: Main layout renderer containing Header, Hero, About, Categories, Catalog, Testimonials, Videos, Contact, Footer, and conditionally rendered `ProductOverlay`. Handles global URL route syncing (`/products/:slug`).
- `Header`: Sticky translucent glassmorphic bar. Desktop navigation links + "Get Info" (WhatsApp) & "Call" buttons. Mobile drawer menu with smooth scrolling.
- `CategoriesCard`: 3 cards (Roti Makers, Tri-Ply Honeycomb Cookware, Tri-Ply HexaPro Cook & Serve) linking dynamically to category targets in the continuous catalog.
- `ProductCard`: Clean visual card displaying image, bold product name, separate size badge, and two primary actions: `[ MORE INFO ]` and `[ GET INFO ]`.
- `ProductOverlay`: Modal overlay displaying:
  - **Desktop:** Left thumbnail list, Center-Left primary image display, Right scrollable product info column with fixed action footer.
  - **Mobile:** Top large image display, horizontal thumbnail scroll, scrollable info section, fixed bottom action bar `[ SHARE PRODUCT ] [ GET INFO ]`.
  - **Content Sections:** 1. Description, 2. Specifications, 3. Features & Benefits, 4. Included Contents, 5. How It Is Made.
- `Gallery`: Magnifier lens / hover zoom for desktop, swipe gestures and responsive thumbnail selector, lazy loading for secondary images.
- `ContactSection`: Left contact info, dynamic store operating status ("OPEN NOW" / "CLOSED NOW" calculated per day/time), right embedded Google Maps preview + "Review Us on Google" CTA.

---

## 5. Product Data Structure
TypeScript Interface:
```typescript
export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'roti-makers' | 'tri-ply-honeycomb' | 'tri-ply-hexapro';
  categoryName: string;
  size: string;
  shortDescription: string;
  fullDescription: string;
  specifications: ProductSpecification[];
  dimensions: string;
  weight: string;
  otherSpecs?: ProductSpecification[];
  features: string[];
  benefits: string[];
  includedContents: string[];
  howItIsMade: string[];
  images: {
    front: string;
    alternate: string;
    left: string;
    right: string;
    top: string;
    bottom: string;
    detail: string;
    lifestyle: string;
  };
}
```
**Exact 12 Products Included:**
1. 9.5 × 9.5 inch Roti Maker
2. 9.5 × 9.5 inch Roti Maker — Steel Handle, Version 2
3. 12 inch Roti Maker
4. 12 inch Roti Maker — Steel Handle, Version 2
5. Tri-Ply Honeycomb Dosa Tawa
6. Tri-Ply Honeycomb Kadai with Glass Lid
7. Tri-Ply Honeycomb Fry Pan
8. Tri-Ply Stainless Steel Tadka Pan
9. Tri-Ply HexaPro Cook & Serve — 20 cm
10. Tri-Ply HexaPro Cook & Serve — 22 cm
11. Tri-Ply HexaPro Cook & Serve — 24 cm
12. Tri-Ply HexaPro Cook & Serve — 28 cm

---

## 6. Routing Strategy
- **Base Route:** `/` (Continuous brochure homepage).
- **Product Detail Overlay Route:** `/products/:slug` (e.g. `/products/12-inch-roti-maker-steel-handle-v2`).
- **Deep Linking:** When a user opens `/products/:slug` directly or refreshes, the app loads the main continuous catalog, scrolls seamlessly to the products section, and automatically pops up the specific product's overlay.
- **Clean In-App Navigation:** Changing active product inside overlay updates the browser URL without full page reload.

---

## 7. Overlay / History Strategy
- Uses HTML5 `history.pushState` and `window.addEventListener('popstate', ...)` listeners.
- Opening an overlay pushes state `{ overlaySlug: product.slug }` and updates path to `/products/${product.slug}`.
- Pressing browser back button or mobile hardware back swipe dispatches a `popstate` event, closing the overlay naturally without taking the user away from the site.
- Outside click or closing the overlay calls `history.pushState({}, '', '/')` or `history.back()`.

---

## 8. Gallery Strategy
- **Image List:** Standardized 8 angles per product (Front, Alternate, Left, Right, Top, Bottom, Detail, Lifestyle).
- **Lazy Loading:** Main front image loads with priority `eager`. Images 2-8 lazy load via native HTML `loading="lazy"`.
- **Desktop Hover Magnification:** Amazon-style lens hover effect showing a magnified view overlay on mouse movement.
- **Mobile Touch/Swipe:** Responsive thumbnail scroller and touch swipe gesture target for switching active image.

---

## 9. Responsive Strategy
- **Breakpoints:**
  - Mobile: `< 768px`
  - Tablet: `768px - 1024px`
  - Desktop: `> 1024px`
- **Navigation:**
  - Desktop: Horizontal translucent glassmorphic bar.
  - Mobile: Compact header with brand logo + hamburger triggering a sleek left slide-out drawer.
- **Product Overlay Layout:**
  - Desktop: Fixed 85-90% modal, 3-column layout (thumbnails - main image - scrollable info), scroll locked on background.
  - Mobile: Full height bottom drawer overlay, top main image display + horizontal thumbnail list + scrollable details + sticky bottom bar `[ SHARE PRODUCT ] [ GET INFO ]`.

---

## 10. WhatsApp Strategy
- Helper module `whatsapp.ts` builds formatted `https://wa.me/<number>?text=...` URLs with proper `encodeURIComponent`.
- **Main Header / Contact "Get Info":** `"Hello Shree Vijaya Kitchenware, can I get information about the products?"`
- **Product Specific "Get Info":** Dynamic context-aware string: `"Hello Shree Vijaya Kitchenware, can I get details about the {Product Name}?"`

---

## 11. Contact Strategy
- **Desktop Layout:** Two equal columns — Left column containing address, phone, email, WhatsApp button, social links, store weekly schedule; Right column containing interactive Google Maps embed + "Review Us on Google" CTA.
- **Mobile Layout:** Vertical stack prioritizing quick action buttons (`[ CALL ]` & `[ WHATSAPP ]`) followed by store hours, address, map, and social channels.
- **Dynamic Store Hours Engine:** Utility checks current user time against weekly schedule (e.g., Mon-Sat 10am-8pm, Sun 11am-6pm) and renders a live badge: `OPEN NOW` (Green glow) or `CLOSED NOW` (Neutral badge).

---

## 12. Testing Strategy
- **Visual & Cross-Device Browser Testing:** Use built-in browser subagent and local preview server to inspect desktop and mobile viewports (e.g. 375px mobile, 768px tablet, 1440px desktop).
- **Navigation & History Audit:** Test browser back/forward buttons when product overlay is open.
- **Interaction & Touch Verification:** Verify thumbnail clicks, WhatsApp URL generation, copy link / Web Share API, and smooth scrolling to homepage sections (`#hero`, `#about`, `#categories`, `#products`, `#videos`, `#testimonials`, `#contact`).
- **Console & Code Quality Check:** Ensure 0 warnings, 0 broken images, 0 console errors, 0 unhandled promise rejections.
