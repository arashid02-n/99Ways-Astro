# 99Ways — Asset Manifest

This document defines the approved assets used by the 99Ways Astro website.

Assets should be reused rather than recreated.

Do not add an asset merely because a section appears visually empty.

All assets must have a clear purpose and must follow the design system.

---

# 1. Brand Assets

Brand assets are located relative to the project's asset directory.

## Header Wordmark

```text
assets/logo/wordmark/dark/99ways-wordmark-dark-background.svg
```

Use:

* desktop header
* approved dark-background contexts

Minimum visible width:

```text
180px
```

Do not:

* distort
* stretch
* recolor
* manually recreate
* alter letter spacing

---

## Compact Logo

```text
assets/logo/compact/dark/99ways-compact-dark-background.svg
```

Use:

* mobile navigation
* compact contexts

Minimum visible width:

```text
64px
```

---

## Favicon

```text
assets/icons/favicon/99ways-favicon.svg
```

Use directly.

Do not create alternate versions unless required by the asset itself.

---

## Apple Touch Icon

```text
assets/icons/apple-touch/99ways-apple-touch-icon-180.png
```

Size:

```text
180 × 180
```

Use as the Apple touch icon.

---

# 2. Homepage Content Assets

## Testimonial Screenshots

These are content assets from the existing 99Ways website.

Store them locally in the Astro project.

### 1

```text
https://99ways.io/wp-content/uploads/2026/07/Screenshot-2025-10-21-at-11.46.12.webp
```

### 2

```text
https://99ways.io/wp-content/uploads/2026/07/Screenshot-2025-10-20-at-20.10.05-e1761003445793.webp
```

### 3

```text
https://99ways.io/wp-content/uploads/2026/07/Screenshot-2025-10-21-at-11.39.31.webp
```

### 4

```text
https://99ways.io/wp-content/uploads/2026/07/Screenshot-2025-10-21-at-11.40.23.webp
```

### 5

```text
https://99ways.io/wp-content/uploads/2026/07/Screenshot-2025-10-21-at-11.33.00.webp
```

### 6

```text
https://99ways.io/wp-content/uploads/2026/07/Screenshot-2025-10-21-at-11.29.51.webp
```

### 7

```text
https://99ways.io/wp-content/uploads/2026/07/Screenshot-2025-10-21-at-11.37.38.webp
```

### 8

```text
https://99ways.io/wp-content/uploads/2026/07/Screenshot-2025-10-21-at-11.47.35.webp
```

### 9

```text
https://99ways.io/wp-content/uploads/2026/07/Screenshot-2025-10-21-at-11.46.37.webp
```

Preserve aspect ratios.

Do not crop unless the final component explicitly requires it.

---

# 3. Founder Images

## Iman Nazari

Source:

```text
https://99ways.io/wp-content/uploads/2026/07/2026-05-26-17.45.07.jpg
```

Use as a circular identity portrait.

---

## Moein Heshmati

Source:

```text
https://99ways.io/wp-content/uploads/2026/07/cropped_circle_image-9.webp
```

Use as a circular identity portrait.

---

# 4. Academy Images

Academy post thumbnails should correspond to the actual posts displayed on the homepage.

Do not use generic placeholder images.

When featured images are sourced from the live 99Ways content, store them locally with the corresponding content entry.

The three homepage cards must use the correct image associated with the corresponding post.

---

# 5. Video

Homepage Section:

`How I Find CRO Breakthroughs Again and Again`

YouTube ID:

```text
STouQwJZ4bY
```

No local video asset is required.

Embed responsively.

---

# 6. Social Icons

The footer uses small image/icon links.

## LinkedIn

URL:

```text
https://www.linkedin.com/company/99ways-io/
```

Asset:

```text
https://99ways.io/wp-content/uploads/2025/10/LinkedIn_icon.svg_.webp
```

---

## Iman's Upwork

URL:

```text
https://upwork.com/freelancers/imannazari
```

Asset:

```text
https://99ways.io/wp-content/uploads/2026/07/upwork-roundedsquare-1.webp
```

---

## Agency Upwork

URL:

```text
https://www.upwork.com/agencies/1718792436665155584/
```

Asset:

```text
https://99ways.io/wp-content/uploads/2026/07/Untitled-design-20-1.webp
```

---

## Iman Fiverr

URL:

```text
https://www.fiverr.com/ishto7
```

Asset:

```text
https://99ways.io/wp-content/uploads/2026/07/Fiverr_Logo_fiverr.webp
```

---

## GitHub

URL:

```text
https://github.com/99ways-io
```

Asset:

```text
https://99ways.io/wp-content/uploads/2025/11/5968866.png
```

---

## Medium

URL:

```text
https://medium.com/nes-stories
```

Asset:

```text
https://99ways.io/wp-content/uploads/2026/07/medium-logo-icon.webp
```

Social icons should be rendered at approximately:

```text
20px–28px
```

They must remain visually small and consistent.

---

# 7. Footer Assets

The footer must not use:

* frog mascot
* frog favicon variant
* frog illustrations
* Google Maps embed assets
* Google Maps API key
* CPU stickers
* CPU badges
* decorative utility graphics

The footer is now a unified navigation/social/legal composition.

---

# 8. Explicitly Removed Assets

The following assets must not be migrated into the current website:

```text
Gemini_Generated_Image_hd7mpohd7mpohd7m-removebg-preview.webp
```

and any cropped frog/favicon variants.

Reason:

The frog mascot has been removed from the current design.

No replacement frog asset should be introduced.

---

# 9. Google Maps

No embedded Google Maps asset or API integration is required.

The footer may contain the external Google Maps link:

```text
https://maps.app.goo.gl/daoBjTCZu7YghnJj9
```

This is a normal external link only.

Do not add:

* map iframe
* Maps JavaScript API
* API key
* map screenshot
* static map component

---

# 10. Fonts

Primary heading font:

```text
Fraunces
```

Body font:

```text
IBM Plex Sans
```

Brand/label font:

```text
IBM Plex Mono
```

The fonts should follow the definitions in `design.md`.

---

# 11. Asset Handling Rules

Prefer local project assets for stable production content.

Use Astro's image optimization where appropriate.

Every image should have:

* meaningful filename
* appropriate alt text
* preserved aspect ratio
* responsive sizing

Do not duplicate the same asset unnecessarily.

Do not download or add assets that are explicitly marked as removed.

---

# 12. Asset Source of Truth

This manifest defines which assets belong to the current 99Ways Astro design.

If a future page requires a new asset:

1. verify that it is genuinely required
2. add it to this manifest
3. place it in the appropriate project directory
4. document its purpose
5. avoid introducing unrelated visual assets
