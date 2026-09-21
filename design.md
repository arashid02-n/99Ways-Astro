# 99Ways — Design System

This document is the single source of truth for the visual system of the 99Ways Astro website.

It defines the shared visual rules that must be followed across the homepage and future pages.

The goal is a consistent, restrained, premium visual language rather than section-by-section styling decisions.

The design system must be applied through reusable CSS variables, component rules, and layout tokens. Individual sections must not introduce arbitrary spacing, typography, colors, or interaction styles unless explicitly required by this document.

---

## 1. Design Principles

The 99Ways website should feel:

* professional
* analytical
* modern
* premium
* confident
* clean
* visually controlled
* spacious without becoming excessively loose

The visual system should prioritize consistency over decorative variation.

Do not introduce:

* arbitrary colors
* arbitrary font sizes
* arbitrary spacing values
* excessive gradients
* unnecessary shadows
* excessive animation
* decorative elements without a clear purpose
* visual effects that compete with the content

The design should feel refined through typography, spacing, composition, color relationships, and subtle interaction rather than through heavy visual effects.

---

## 2. Theme

The website uses a dark visual system.

There is no light-mode toggle.

There is no theme switcher.

The dark system must remain consistent across all pages.

---

## 3. Responsive Breakpoints

Use the following shared breakpoints:

```css
:root {
  --bp-sm: 480px;
  --bp-md: 768px;
  --bp-lg: 1024px;
  --bp-xl: 1280px;
}
```

The implementation is mobile-first.

Base values represent mobile layouts.

Tablet and desktop layouts should progressively enhance the base system rather than creating independent designs.

---

# 4. Color System

Color usage must be standardized.

Do not create a new background color for an individual section unless the color is added to this system first.

The website uses four approved background states:

1. Hero background
2. Neutral dark background
3. Green family background
4. Blue family background

The Hero is a special approved state and is not part of the green/blue section rotation.

---

## 4.1 Core Color Tokens

```css
:root {
  /* Core */
  --color-text: #F4F3EF;
  --color-text-muted: #B5B8B1;

  /* Hero */
  --color-hero-bg: #292B2A;

  /* Neutral */
  --color-bg: #313330;

  /* Green family */
  --color-green-1: #173D2A;
  --color-green-2: #205638;
  --color-green-3: #2A7048;
  --color-green-4: #6BD98D;

  /* Blue family */
  --color-blue-1: #172B4A;
  --color-blue-2: #203B63;
  --color-blue-3: #2D527F;
  --color-blue-4: #A6BAFF;

  /* Interaction */
  --color-action: #6BD98D;
  --color-action-hover: #A6BAFF;

  /* Borders */
  --color-border: rgba(181, 184, 177, 0.20);
  --color-border-strong: rgba(181, 184, 177, 0.38);

  /* Overlay */
  --color-overlay: rgba(0, 0, 0, 0.78);
}
```

The exact visual relationship between these tokens must remain consistent throughout the site.

---

## 4.2 Hero Background

The Hero uses:

```css
--color-hero-bg
```

The Hero background is an approved special state.

It composes two subtle radial glows over the `--color-hero-bg` base, matching the previous design:

```css
background:
  radial-gradient(52rem 30rem at 82% 28%,
    color-mix(in srgb, var(--color-success) 12%, transparent), transparent 65%),
  radial-gradient(44rem 28rem at 10% 88%,
    color-mix(in srgb, var(--color-brand) 10%, transparent), transparent 60%),
  var(--color-hero-bg);
```

Do not replace it with the green or blue section families.

Do not introduce additional Hero background variants.

The existing Hero background color is intentionally retained because it was specifically approved.

---

## 4.3 Green Section Family

A section assigned to the green family may use only:

```css
--color-green-1
--color-green-2
--color-green-3
--color-green-4
```

The section may use different values from this family for:

* background
* borders
* subtle surfaces
* controlled highlights
* interaction states

It must not introduce blue-family colors as decorative or structural colors.

---

## 4.4 Blue Section Family

A section assigned to the blue family may use only:

```css
--color-blue-1
--color-blue-2
--color-blue-3
--color-blue-4
```

It must not introduce green-family colors as decorative or structural colors.

---

## 4.5 Section Color Family Rule

Every major section must have one declared color family.

Allowed:

```text
Hero
→ Hero background

Green section
→ Green family only

Blue section
→ Blue family only

Neutral section
→ Neutral dark system
```

Not allowed:

```text
Green section
→ green background + blue decorative elements

Blue section
→ blue background + green decorative elements
```

The purpose is to keep each section visually coherent.

---

# 5. CTA System

CTA buttons are standardized globally.

All primary CTA buttons must use green as their default state.

```css
background: var(--color-action);
```

Primary CTA text must maintain sufficient contrast against the green background.

---

## 5.1 Primary CTA

```text
Default:
Green

Hover:
Blue

Focus:
Accessible visible focus state derived from the active CTA system

Active:
Controlled darker interaction state
```

The hover state must not simply be an arbitrary darker version of green.

The defined alternate interaction color is:

```css
--color-action-hover
```

The same CTA behavior must be used consistently across the website.

Examples:

* Book Intro Call
* Contact Us (header CTA)
* View all posts (academy)
* primary conversion buttons
* other explicitly designated primary actions

---

## 5.2 Secondary Button

Secondary buttons may use:

* transparent background
* border
* light text

Example:

```css
background: transparent;
border: 1px solid var(--color-border-strong);
color: var(--color-text);
```

Hover may use the appropriate interaction color from the active context.

Secondary buttons must not visually compete with primary green CTAs.

---

# 6. Typography

Typography must have a strict hierarchy.

A heading must never become visually larger than its parent heading level.

The Hero H1 is the largest heading on the page.

Section H2 headings are smaller than the Hero H1.

Card/founder H3 headings are smaller than Section H2 headings.

Navigation, buttons, metadata, and legal text must remain smaller than content headings.

No component may independently increase its font size beyond the defined hierarchy.

---

## 6.1 Font Families

```css
:root {
  --font-primary: "Fraunces", Georgia, serif;
  --font-body: "IBM Plex Sans", sans-serif;
  --font-brand: "IBM Plex Mono", monospace;
}
```

Use:

* Fraunces for major headings and display typography
* IBM Plex Sans for body copy
* IBM Plex Mono for CTA labels, navigation labels, metadata, and selected brand-highlight elements

Typography must remain readable and restrained.

---

## 6.2 Typography Scale

```css
:root {
  --text-display-mobile: 2rem;
  --text-display-desktop: 2.75rem;

  --text-h2-mobile: 1.375rem;
  --text-h2-desktop: 1.75rem;

  --text-h3-mobile: 1.0625rem;
  --text-h3-desktop: 1.25rem;

  --text-body-mobile: 0.9375rem;
  --text-body-desktop: 1rem;

  --text-label-mobile: 0.8125rem;
  --text-label-desktop: 0.875rem;

  --text-small-mobile: 0.75rem;
  --text-small-desktop: 0.8125rem;
}
```

Line heights:

```css
:root {
  --leading-display: 1.15;
  --leading-heading: 1.2;
  --leading-card: 1.3;
  --leading-body: 1.6;
  --leading-label: 1.4;
  --leading-small: 1.5;
}
```

---

## 6.3 Typography Hierarchy Rule

The hierarchy is:

```text
Hero H1
↓
Section H2
↓
Card / Founder H3
↓
Body
↓
Label / Metadata
↓
Legal / Small
```

Do not allow:

* card titles larger than section titles
* navigation text larger than section titles
* button labels larger than headings
* footer headings larger than main section headings
* decorative text to compete with the Hero H1

The header must remain visually subordinate to the Hero.

---

# 7. Spacing System

All spacing must use the shared spacing scale.

Do not introduce arbitrary values such as:

```css
margin-top: 37px;
gap: 29px;
padding: 53px;
```

unless there is a documented reason and the value is added to the system.

Use:

```css
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
}
```

---

## 7.1 Spacing Rules

Use the spacing system consistently for:

* section padding
* section-to-section spacing
* card padding
* card gaps
* heading-to-content spacing
* button spacing
* navigation gaps
* footer columns
* image/text relationships

Do not use large empty spaces simply to make a section feel "premium."

Premium presentation should come from controlled rhythm.

---

## 7.2 Section Padding

Default:

```text
Mobile:
32px–48px

Desktop:
64px–80px
```

Use the nearest spacing token.

Do not make every section the same height.

Content density should determine the final composition while remaining within the spacing system.

---

# 8. Container System

```css
:root {
  --container-max: 1200px;
  --container-padding-mobile: 16px;
  --container-padding-desktop: 48px;
}
```

All major sections should use the same centered container system.

The container must prevent:

* excessively wide text lines
* inconsistent left/right alignment
* arbitrary section widths

---

# 9. Margin and Gap Rules

Margins and gaps must come from the spacing scale.

Preferred relationships:

```text
Heading → subtitle
small gap

Subtitle → CTA
medium gap

Section title → main content
medium/large gap

Card internal elements
small/medium gap

Separate major content groups
large gap
```

Do not create a unique spacing system for each component.

---

# 10. Border Radius

Use a restrained radius system:

```css
:root {
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-full: 9999px;
}
```

Use:

* `--radius-sm` for buttons and compact controls
* `--radius-md` for cards and content surfaces
* `--radius-lg` only where a larger visual container requires it
* `--radius-full` only for circular avatars or intentionally pill-shaped elements

Avoid excessive pill-shaped UI.

---

# 11. Cards

Cards should feel integrated with their section.

Default:

```css
border: 1px solid var(--color-border);
```

Avoid heavy drop shadows.

Cards may use subtle background variation within the active section color family.

Cards should not introduce an unrelated color family.

---

# 12. Images

Images must preserve their natural aspect ratio unless the design explicitly requires cropping.

Avoid:

* unnecessary oversized imagery
* distorted images
* arbitrary cropping
* decorative images that compete with content

Founder portraits are identity elements, not hero imagery.

---

# 13. Motion and Animation

Motion must be subtle and purposeful.

Default transition:

```css
transition-duration: 150ms–200ms;
transition-timing-function: ease;
```

Allowed:

* opacity changes
* small transforms
* subtle color transitions
* subtle image zoom
* small elevation changes where appropriate

Avoid:

* bounce
* spring animations
* excessive parallax
* continuous floating
* decorative animation loops
* cursor-following effects unless explicitly approved

### Frog / Mascot

The frog mascot is completely removed from the current design.

There must be:

* no frog image
* no frog animation
* no frog hover effect
* no frog parallax
* no frog cursor tracking
* no frog in the Hero
* no frog in the Footer
* no frog asset dependency

---

# 14. Header

The header is sticky.

The header must not display a persistent white horizontal line while scrolling.

Remove any:

```css
border-bottom: 1px solid white;
```

or equivalent sticky separator.

If a border is needed for visual separation, use the defined subtle border token and ensure it does not appear as a bright white line.

The header must remain visually subordinate to the Hero.

---

# 15. Footer

The main footer uses a single unified, compact composition.

It must be significantly more compact than the previous implementation: reduced padding, gap, column, and legal spacing while keeping all the same information.

Footer layout:

```text
Left:   Company / legal information
Right:  Three navigation columns (Resources, Services, About Us)
Below right columns: social icons
```

The footer must contain:

* navigation columns (rendered as display-only text, not links)
* social icons (real links)
* legal/company information
* relevant company links

The navigation column items are display-only text: they are not interactive and display no URLs, but keep the visual styling of the previous footer links.

The Google Maps embedded map is removed.

There must be no Google Maps embed or map widget.

The external Google Maps link may remain as a normal link where required.

---

## 15.1 Social Icons

Social icons must be smaller and visually restrained.

They must not dominate the footer.

Use consistent dimensions and spacing.

The icons are image/link elements rather than large text labels.

Recommended range:

```text
20px–28px
```

Current size:

```text
28px
```

Desktop and mobile may use slightly different values, but all icons should remain visually consistent.

---

# 16. Accessibility

Interactive elements must:

* have visible focus states
* maintain sufficient contrast
* have meaningful accessible labels
* preserve keyboard accessibility

Images must have appropriate alt text.

Lightbox interactions must support:

* Escape
* outside click where appropriate
* keyboard navigation where applicable

---

# 17. Implementation Rule

The design system is the source of truth.

When implementing a new section:

1. choose its color family
2. use existing typography tokens
3. use existing spacing tokens
4. use existing component rules
5. use existing interaction rules
6. do not introduce arbitrary values unless necessary
7. if a genuinely new value is required, add it to the design system instead of silently creating a one-off value

The goal is a website that looks like one coherent product rather than a collection of individually designed sections.
