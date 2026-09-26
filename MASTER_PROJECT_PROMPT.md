# MASTER DEVELOPMENT PROMPT

# Shri Vijaya Kitchenware Digital Catalog Website

You are the lead software architect, senior frontend engineer, UI/UX engineer, QA engineer, and technical project manager for this project.

Your job is to build a real, production-quality website for:

**Shri Vijaya Kitchenware**

This is NOT a hackathon demo, mockup, toy project, or generic template.

Build the actual website according to the requirements below.

---

# 1. PRIMARY OBJECTIVE

Create a premium, modern, practical, responsive digital catalog website for Shri Vijaya Kitchenware.

The website is a continuous digital brochure/catalog.

Customers should be able to:

1. Understand the business.
2. Browse the complete product catalog.
3. Open detailed product information.
4. View high-quality product images.
5. Zoom/swipe product images.
6. Share a product.
7. Contact the store through WhatsApp.
8. Call the store.
9. View testimonials.
10. View videos.
11. Find the physical store using Google Maps.

This is NOT an e-commerce website.

DO NOT add:

* Cart
* Checkout
* Online payment
* Customer login
* Registration
* Admin dashboard
* Product search
* Product comparison
* Unrequested backend
* Unrequested database
* Unrequested APIs

Do not invent features simply because they are common on e-commerce websites.

---

# 2. SOURCE OF TRUTH

The complete project requirements are defined in the project documentation.

Treat the requirements document as the source of truth.

If something is marked:

* FINALIZED → implement it.
* PENDING LATER → do not force a final decision.
* EXCLUDED → do not implement it.
* TBD → create an architecture that allows the information to be added later without redesigning the application.

Never invent business information.

Never fabricate product specifications.

Never fabricate testimonials.

Never fabricate contact details.

Temporary placeholders are allowed during development but must be clearly replaceable.

---

# 3. PRODUCT CATALOG

There are exactly 12 products.

## Category 1 — Roti Makers

1. 9.5 × 9.5 inch Roti Maker
2. 9.5 × 9.5 inch Roti Maker — Steel Handle, Version 2
3. 12 inch Roti Maker
4. 12 inch Roti Maker — Steel Handle, Version 2

## Category 2 — Tri-Ply Honeycomb Cookware

5. Tri-Ply Honeycomb Dosa Tawa
6. Tri-Ply Honeycomb Kadai with Glass Lid
7. Tri-Ply Honeycomb Fry Pan
8. Tri-Ply Stainless Steel Tadka Pan

## Category 3 — Tri-Ply HexaPro Cook & Serve

9. 20 cm
10. 22 cm
11. 24 cm
12. 28 cm

Do not add additional products.

---

# 4. PRODUCT DATA ARCHITECTURE

Use structured product data.

Product information must be separated from UI components.

Prefer a clean structured JSON or TypeScript data model.

Each product should support:

* id
* slug
* name
* category
* size
* description
* specifications
* dimensions
* weight
* other specifications
* features
* benefits
* included contents
* how it is made
* gallery images
* image ordering

The UI should generate product cards and product detail overlays from this structured data.

Adding/editing a product should NOT require rebuilding UI components.

Do NOT create an admin dashboard.

Do NOT create a database for V1.

---

# 5. HOMEPAGE

Homepage order:

1. Opening / Brand Introduction
2. Store / Location Introduction
3. About Us
4. Product Categories
5. Testimonials
6. Videos
7. Contact
8. Footer

The page should feel like one continuous premium brochure.

Avoid disconnected-looking blocks.

---

# 6. HEADER

Desktop:

Home | About Us | Products | Videos | Testimonials | Contact

Header actions:

* Get Info
* Call

Header is sticky/fixed.

Use translucent glassmorphism with:

* subtle backdrop blur
* subtle separation
* restrained visual treatment

Mobile:

* hamburger menu
* left-side navigation drawer
* logo + brand name
* Products
* Get Info
* Call
* remaining navigation items

Navigation should use smooth scrolling.

Implement scroll-spy highlighting.

---

# 7. BRANDING

Use:

* Shri Vijaya Kitchenware logo
* existing logo colors as brand accents
* black
* white
* neutral/steel tones

Overall design must combine:

* premium minimal
* modern bold
* clean practical
* premium + practical

Typography should be selected for:

* readability
* modern appearance
* premium feel
* excellent mobile/desktop rendering

---

# 8. MOTION

Use subtle + dynamic + smart adaptive animation.

Default motion should be subtle.

Stronger animation can be used selectively for:

* hero
* category cards
* product gallery
* product overlay

Avoid excessive animation.

---

# 9. CATEGORY CARDS

Exactly three category cards:

1. Roti Makers
2. Tri-Ply Honeycomb Cookware
3. Tri-Ply HexaPro Cook & Serve

Cards should use representative product/category imagery.

Use:

* image background
* translucent text area
* category name
* whole card clickable

Clicking a category should take the customer to the relevant section of the continuous Products flow.

---

# 10. PRODUCTS

Products appear in ONE continuous Products section.

Do NOT create separate category pages.

Do NOT add product search.

Each category contains four products.

Product card order:

IMAGE

PRODUCT NAME

SIZE

[ MORE INFO ] [ GET INFO ]

Product name should be bold.

Size should be separately visible.

Buttons should be slightly rounded.

---

# 11. PRODUCT OVERLAY

More Info opens a large overlay/modal.

Target desktop size:

Approximately 85–90% viewport width.

Approximately 85–90% viewport height.

Original Products page remains visible behind it.

Backdrop:

Semi-transparent black/dark overlay.

Overlay appearance:

* flat
* minimal
* no visible border
* no shadow
* sharp/square corners

Do NOT add a prominent X button.

Close through:

* outside click
* browser Back
* mobile Back/gesture

Browser history must represent the overlay state.

---

# 12. PRODUCT URLS

Every product must have a unique URL.

Example:

/products/product-name

Opening a product URL directly must:

1. Open the Products section.
2. Automatically open that product's overlay.

This must work when someone receives a shared product URL.

---

# 13. DESKTOP PRODUCT OVERLAY

Layout:

LEFT:
Vertical thumbnails

CENTER-LEFT:
Large main image

RIGHT:
Product information

Gallery remains fixed.

Only information column scrolls.

Bottom action footer remains fixed within the information column.

---

# 14. MOBILE PRODUCT OVERLAY

Layout:

Large image

Thumbnails

Product information

Fixed bottom action bar

Product information scrolls vertically.

Bottom action bar remains fixed while overlay is open.

Action bar:

[ SHARE PRODUCT ] [ GET INFO ]

Each button gets approximately 50% width.

Respect mobile safe-area padding.

---

# 15. PRODUCT INFORMATION ORDER

Exactly:

1. Product Description
2. Specifications
3. Features & Benefits
4. Included Contents
5. How It Is Made

Do not reorder these without explicit approval.

---

# 16. PRODUCT GALLERY

Image order:

1. Front view
2. Alternate angle
3. Left view
4. Right view
5. Top view
6. Bottom view
7. Close-up/detail
8. Kitchen/lifestyle usage

Controls:

* thumbnails
* arrows
* swipe/drag

Desktop:

Amazon-style hover magnification.

Mobile:

touch/pinch zoom.

No separate lightbox.

First/main image loads immediately.

Remaining images lazy-load.

---

# 17. PRODUCT ACTIONS

Only:

Share Product
Get Info

Share Product:

Use native device/browser Share Sheet.

Share:

* product name
* product URL

Do NOT create a custom sharing popup.

---

# 18. WHATSAPP

Main header Get Info:

"Hello Shree Vijaya Kitchenware, can I get information about the products?"

Product Get Info should dynamically generate a message such as:

"Hello Shree Vijaya Kitchenware, can I get details about the 12 inch Roti Maker – Steel Handle Version 2?"

The user must not manually type the product name.

Actual WhatsApp number will be inserted later.

---

# 19. CALL

Header Call button should open the phone/dialer with the store number pre-entered.

Actual number will be inserted later.

Do NOT add Call inside the product overlay.

---

# 20. TESTIMONIALS

Testimonials are a separate homepage section.

Temporary placeholders may be used during development.

Final customer testimonials will be inserted later.

Do not fabricate final customer claims.

---

# 21. VIDEOS

Videos are a major homepage section after Testimonials.

Header contains a Videos navigation item.

Actual videos will be inserted later.

Architecture must make adding videos easy.

---

# 22. ABOUT US

About Us appears after Store/Location Introduction and before Product Categories.

Actual content will be supplied later.

Do not invent business history.

---

# 23. CONTACT

Desktop:

Two columns.

LEFT:

* phone
* email
* address
* WhatsApp
* social links

RIGHT:

Google Maps embed.

Mobile:

Stack vertically.

Prominent actions:

CALL
WHATSAPP

---

# 24. STORE HOURS

Support different opening/closing times for each day.

Display dynamically:

OPEN NOW
or
CLOSED NOW

based on local time and weekly schedule.

No holiday-management system in V1.

---

# 25. GOOGLE MAPS

Include:

* embedded map
* external Google Maps link

Actual link will be supplied later.

---

# 26. GOOGLE REVIEWS

Do NOT embed live reviews in V1.

Provide:

"Review Us on Google"

button/link.

Actual review URL will be supplied later.

---

# 27. SOCIAL LINKS

Support:

* Facebook
* Instagram
* YouTube
* WhatsApp

Actual links supplied later.

---

# 28. FOOTER

Keep concise.

Possible information:

Shri Vijaya Kitchenware

Owner:
Harita Gummadadelli

Seller/Business:
Free Harita Agencies

Phone

Address

Relevant links

Copyright/business information

Do not overload the footer.

---

# 29. LANGUAGE

English only.

No language switcher.

No automatic translation.

---

# 30. RESPONSIVE DESIGN

Must work well on:

* desktop
* laptop
* tablet
* mobile

Do not simply shrink desktop into mobile.

Mobile should have purpose-built layouts where required.

---

# 31. CODE QUALITY

Write production-quality code.

Use:

* reusable components
* clean naming
* logical file organization
* structured data
* reusable UI primitives
* responsive CSS
* maintainable architecture

Avoid:

* duplicated product markup
* hardcoded repeated product components
* unnecessary dependencies
* unnecessary backend services
* unnecessary libraries
* overengineering

---

# 32. PERFORMANCE

Prioritize:

* fast initial load
* optimized component rendering
* lazy loading where appropriate
* efficient image loading
* minimal unnecessary JavaScript
* responsive layout stability

Do not sacrifice the visual quality of the original product photographs unnecessarily.

---

# 33. ACCESSIBILITY

Accessibility requirements are currently pending.

However, do not intentionally create inaccessible controls.

Use sensible:

* semantic HTML
* button elements
* keyboard-friendly interaction
* readable contrast
* useful image alt text structure

Do not let accessibility work change the agreed visual design.

---

# 34. SEO

SEO is currently pending.

Do not spend major implementation time on advanced SEO unless explicitly requested.

However, maintain clean:

* semantic headings
* meaningful URLs
* page structure

so SEO can be added later without rebuilding the site.

---

# 35. ANALYTICS

Analytics are currently pending.

Do not add analytics unless explicitly requested.

Keep architecture open for later integration.

---

# 36. DEVELOPMENT PLACEHOLDERS

During development, use placeholders for:

* logo if unavailable
* product images
* About Us content
* testimonials
* videos
* phone
* WhatsApp
* email
* Maps
* social links

Clearly mark these as temporary.

Before launch, provide a clear replacement checklist.

---

# 37. IMPORTANT DEVELOPMENT RULE

Before implementing a major feature:

1. Inspect the existing project.
2. Understand the architecture.
3. Check whether the feature already exists.
4. Reuse existing components where appropriate.
5. Avoid duplicate systems.
6. Make the smallest clean architectural change that satisfies the requirement.

Do not rewrite working parts unnecessarily.

---

# 38. VERIFICATION RULE

After implementation:

1. Run the application.
2. Inspect the browser.
3. Test desktop layout.
4. Test mobile layout.
5. Test interactions.
6. Check console errors.
7. Check broken links.
8. Check product routing.
9. Check overlay behavior.
10. Check WhatsApp URL generation.
11. Check native share behavior where supported.
12. Check image gallery behavior.
13. Fix discovered issues.
14. Re-test.

Do not report success merely because code compiles.

The actual browser behavior must be verified.

---

# 39. GIT SAFETY

Before large architectural changes:

* inspect Git status
* inspect current branch
* preserve existing working code
* avoid destructive commands
* do not delete unrelated files

Never run destructive Git operations unless explicitly requested.

---

# 40. AI BEHAVIOR

You are allowed to make reasonable implementation decisions when requirements are not specified.

However:

DO NOT change finalized requirements.

DO NOT introduce e-commerce functionality.

DO NOT introduce an admin dashboard.

DO NOT invent business information.

DO NOT invent product facts.

DO NOT add unnecessary features.

If an important requirement genuinely conflicts with another requirement, stop and explain the conflict before making a destructive architectural decision.

---

# 41. DELIVERY EXPECTATION

Build the project in phases.

Do not attempt to blindly create everything in one giant uncontrolled operation.

Use this sequence:

PHASE 1
Project inspection + architecture

PHASE 2
Foundation + design system

PHASE 3
Header + navigation

PHASE 4
Homepage

PHASE 5
Structured product data

PHASE 6
Product cards + catalog

PHASE 7
Product overlay + routing

PHASE 8
Gallery + zoom + sharing

PHASE 9
WhatsApp + Call

PHASE 10
Testimonials + Videos + About + Contact

PHASE 11
Responsive refinement

PHASE 12
Browser testing + bug fixing

PHASE 13
Final QA

Do not move to the next phase with known major failures.

---

# 42. FINAL PRINCIPLE

The final website should feel like:

A premium digital catalog,
not an online shop.

It should be:

Beautiful.
Fast.
Simple.
Practical.
Trustworthy.
Easy to maintain.
Easy to expand.

Do not overengineer it.

Do not make it generic.

Build Shri Vijaya Kitchenware specifically.
