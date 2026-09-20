# 99Ways — Homepage Specification

This document defines the structure and content of the current 99Ways Astro homepage.

`design.md` is the source of truth for colors, typography, spacing, components, and interaction rules.

This document defines what each homepage section contains and how the sections are composed.

The homepage must preserve the approved recovered design while applying the current design-system rules.

Do not invent new copy.

---

# 1. Global Homepage Rules

* Mobile-first implementation.
* Use the shared container from `design.md`.
* Use the shared spacing system.
* Use the shared typography hierarchy.
* Use only approved background/color families.
* Do not introduce arbitrary section colors.
* The Hero uses the approved Hero background.
* Green sections must remain within the green color family.
* Blue sections must remain within the blue color family.
* Do not mix green and blue decorative systems inside the same section.
* Primary CTA buttons are green by default.
* CTA hover uses the defined alternate interaction color.
* No frog or mascot exists anywhere on the homepage.
* No frog animation exists.
* No Google Maps embed exists.
* The header must not have a persistent white sticky separator line.

---

# 2. Header

## Background

Use the approved dark/header background from `design.md`.

## Structure

```text
Logo
→ Navigation
→ Contact Us CTA
```

Navigation remains clean and compact.

## Navigation

### Services

* Conversion Rate Optimization → `/hire-cro-expert/`
* PostHog & Product Analytics → `/hire-posthog-expert-guide/`
* Hyros & Tracking Setup → `/hire-hyros-expert-guide/`

### Resources

* Guides and How-tos → `/category/guides-how-to/`
* PostHog Feature Breakdowns → `/category/posthog-feature-breakdown/`
* Tools Comparison → `/category/tools-comparison/`
* Optimization Experiences → `/category/optimization-experience/`
* Featured Experiments → `/category/optimization-experience/featured-experiments/`

## Contact CTA

Text:

`Contact Us`

Link:

`/contact-form/`

The header CTA follows the standard secondary button system unless explicitly changed by the current design implementation.

## Sticky Behavior

The header remains sticky.

Remove the persistent bright white horizontal line that previously followed the sticky header while scrolling.

No white sticky border should appear.

---

# 3. Hero

## Background

Use the approved Hero background from `design.md`.

This background is intentionally distinct from the green/blue section families.

## Content

Headline:

> Find and Pull Your Biggest Growth Levers with Experimentation

Subheading:

> We run your CRO operation, from research and prioritization to implementation and analysis.

Supporting positioning text:

> Conversion rate optimization, experimentation & analytics

## CTA

Text:

`Book Intro Call`

The CTA uses the global primary CTA system:

```text
Default → Green
Hover → defined alternate interaction color
```

## Hero Visual

There is no frog.

There is no mascot.

There is no replacement mascot.

There is no frog animation.

The Hero should remain visually strong through typography, composition, spacing, and the approved Hero background.

---

# 4. How I Find CRO Breakthroughs Again and Again

## Title

`How I Find CRO Breakthroughs Again and Again`

## Content

Preserve the existing YouTube video.

YouTube ID:

`STouQwJZ4bY`

Use a responsive video container.

The video should maintain a cinematic, controlled presentation.

## Styling

Use the active section color family.

The video may have a subtle border/highlight.

Hover treatment must remain subtle.

Do not introduce unrelated colors.

---

# 5. How Partners Review Us

## Title

`How Partners Review Us`

## Content

Use the existing partner review/testimonial screenshots.

There are nine review images.

Order:

1. Client review: Funnel Optimization Assessment and Recommendations
2. Client review: E-commerce analytics, CRO, and A/B testing
3. Client review: Marketing and conversion rate optimization consultation
4. Client review: Conversion Rate Optimization Expert quick job
5. Client review: PostHog and Analytics Expert
6. Client review: Conversion Rate Optimization for Coaching Business
7. Client review: Conversion Rate Optimization and PostHog
8. Client review: Course Marketing Funnel Manager
9. Client review: SaaS Google Analytics and PostHog setup

Images must preserve their aspect ratios.

## Interaction

The review collection may use a horizontally scrollable presentation where appropriate.

The existing click-to-enlarge behavior should remain available if already implemented.

Lightbox behavior:

* centered in viewport
* dimmed background
* preserve aspect ratio
* no clipping
* smooth open/close
* Escape closes
* outside click closes where appropriate
* background scrolling disabled while open

Use subtle highlight/hover treatment.

Do not add unnecessary animation.

---

# 6. About Us

## Title

`About Us`

The section contains two founders:

* Iman Nazari
* Moein Heshmati

The recovered design's mirrored founder composition should be preserved.

## Iman Nazari

Role:

`Co-Founder`

Specialty:

`Strategy & Experimentation`

Bio:

> Iman connects what most teams keep separate: technology, business, and human behavior. He is the strategic force behind 99Ways' approach to conversion; translating user psychology, product reality, and commercial goals into decisions that actually improve performance. Where others guess at what customers want, Iman looks for signal: how people think, what drives action, and which changes measurably move results. He is relentless about clean measurement, sound inference, and experiments you can trust. For him, better decisions start with better evidence. Every metric must be credible, every insight must survive scrutiny, every test must produce learning; not noise. That is the foundation of 99Ways: reliable data, sharper understanding, and changes proven before they are scaled.

## Moein Heshmati

Role:

`Co-Founder`

Specialty:

`Data Systems & Engineering`

Bio:

> Moein turns complexity into order. He's the architect behind 99Ways' tracking, reporting, and deployment systems; ensuring every insight is built on verified data and reproducible results. Where others chase creative flair, Moein builds structure: repeatable processes, documented workflows, and flawless implementation. He treats precision as a form of respect, for data, for the client, and for the truth. Nothing escapes his attention. Every number must reconcile, every change must be traceable, every system must work exactly as intended. That discipline is what allows 99Ways to move fast without breaking things.

## Layout

Desktop:

```text
IMAN    [ PROFILE ] [ DESCRIPTION ]

MOEIN   [ DESCRIPTION ] [ PROFILE ]
```

The entire founder block should remain structurally coherent.

Do not independently center or absolutely position individual images.

On mobile, stack the content naturally.

Founder portraits remain identity-scale rather than hero-scale.

---

# 7. Latest from 99Ways Academy

## Title

`Latest from 99Ways Academy`

Use the latest real 99Ways Academy content.

The section should not contain fabricated or placeholder posts.

## Current Posts

### 1. Story of 74% CVR lift in 6 months for a health brand

URL:

`/health-brand-case-study/`

Category:

`Uncategorized`

### 2. Why Experimentation Is a Must-Have for Your Business

URL:

`/why-experimentation-is-important-for-business/`

Category:

`Guides and How-tos`

### 3. Confidence vs PostHog: Which Experimentation Platform Fits Your Team?

URL:

`/confidence-vs-posthog/`

Category:

`Tools Comparison`

### Additional Content

The following existing content may be available for the broader Academy:

* PostHog Implementation for Growth Lever Teams
* A/B Testing Metrics: Choose the Primary Metric Closest to Profit
* CRO Redesign vs Ongoing A/B Testing: Which to Start With?

The homepage should show the approved/latest three posts rather than inventing additional content.

## Layout

Desktop:

```text
3 columns
```

Tablet:

```text
2 columns
```

Mobile:

```text
1 column
```

Cards should maintain consistent proportions.

Use the site's existing editorial/card hierarchy.

The card design must follow the active section color family.

## View All Posts

Text:

`View all posts`

Link:

`/academy/`

Use the appropriate secondary/CTA button treatment from `design.md`.

---

# 8. Footer

The previous two major footer areas are now combined into one unified Footer section.

There is no separate frog footer area.

There is no map embed.

The footer should feel like one coherent composition rather than two unrelated footer panels.

---

## 8.1 Footer Navigation

### Resources

* Guides and How-tos → `https://99ways.io/category/guides-how-to/`
* PostHog Feature Breakdowns → `https://99ways.io/category/posthog-feature-breakdown/`
* Tools Comparison → `https://99ways.io/category/tools-comparison/`
* Optimization Experiences → `https://99ways.io/category/optimization-experience/`
* Featured Experiments → `https://99ways.io/category/optimization-experience/featured-experiments/`

### Services

* PostHog & Product Analytics → `https://99ways.io/hire-posthog-expert-guide/`
* Hyros & Tracking Setup → `https://99ways.io/hire-hyros-expert-guide/`
* CRO → `https://99ways.io/hire-cro-expert/`

### About Us

* Contact Us → `https://99ways.io/contact-form/`
* Iman's Upwork → `https://www.upwork.com/freelancers/imannazari`
* Agency's Upwork → `https://www.upwork.com/agencies/1718792436665155584/`
* Fiverr → `https://www.fiverr.com/ishto7`
* GitHub → `https://github.com/99ways-io`
* LinkedIn → `https://www.linkedin.com/company/99ways-io/`
* Medium → `https://medium.com/nes-stories`
* Google Maps → `https://maps.app.goo.gl/daoBjTCZu7YghnJj9`

The Google Maps item is an external link only.

Do not embed Google Maps.

---

# 8.2 Social Icons

Social links should be represented by small image/icon links.

Required links:

* LinkedIn
* Iman's Upwork
* Agency's Upwork
* Fiverr
* GitHub
* Medium

Icons must be smaller than the previous footer implementation.

Target visual size:

```text
20px–28px
```

Use consistent dimensions.

Do not turn social icons into large text blocks.

Do not add unrelated icon animations.

---

# 8.3 Legal Information

Use:

`Ninety Nine Ways is a registered trademark of Nazari Ecom Solutions.`

`Nazari Ecom Solutions is registered with the Dutch Chamber of Commerce (KvK) under registration number 91552451.`

`Office: Mr. Treublaan 7, 1097 DP Amsterdam, The Netherlands`

`VAT Identification Number: NL004899587B87.`

Nazari Ecom Solutions:

`https://nazaries.nl/?utm_source=99ways&utm_content=footer`

---

# 9. Final Footer Bar

A separate minimal bottom bar remains after the main unified Footer.

Background:

Dark blue.

Desktop layout:

```text
© 2026 99Ways. All rights reserved. | Privacy Policy | Terms of Service
```

Links:

Privacy Policy:

`https://99ways.io/privacy-policy/`

Terms of Service:

`https://99ways.io/terms-of-use/`

The bar must wrap naturally on smaller screens.

Keep it minimal and professional.

---

# 10. Explicitly Removed

The following are permanently out of the current homepage scope:

* Frog mascot
* Frog image
* Frog animation
* Frog hover effects
* Frog parallax
* Frog cursor tracking
* Frog footer visual
* Google Maps embedded map
* Light-mode control
* Dark-mode control
* CPU stickers
* CPU-related controls
* unrelated utility widgets at the bottom
* persistent white sticky header line

Do not reintroduce these elements unless explicitly requested in a future design revision.

---

# 11. Implementation Principle

The homepage implementation should use:

```text
design.md
    ↓
shared tokens
    ↓
shared components
    ↓
homepage sections
```

The homepage specification defines content and composition.

The design system defines visual rules.

Neither document should introduce one-off styling that contradicts the other.
