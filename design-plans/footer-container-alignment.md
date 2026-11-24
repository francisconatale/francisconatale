# Align Footer Container to Layout Viewport Grid

Written against: f9ce4fc7cebd8f347dc317d384af59958d529ed8

## Evidence chain

- Surface: `src/components/SiteFooter.tsx` (L39-40) and `src/app/globals.css` (L447-452)
- Problem: `SiteFooter` applies `padding-inline: var(--side)` (20px) through `.site-footer-inner`, whereas all other primary surfaces on the page (`SiteHeader.tsx` L12, `HeroSection.tsx` L16, `page.tsx` L20, `ProfileSection.tsx` L25) apply `px-[6vw]`, breaking the horizontal layout grid.
- Design evidence: `src/components/SiteHeader.tsx` (L12) and `src/app/page.tsx` (L20).
- Owner: `src/components/SiteFooter.tsx`, `src/app/globals.css`
- Scope and affected surfaces: `src/components/SiteFooter.tsx`
- Uncertainty: none

## Design decision

Align `SiteFooter` to the `px-[6vw]` horizontal grid contract shared by `SiteHeader` and the rest of the application, removing the disconnected 20px padding in `.site-footer-inner`.

## Reuse

- Spacing utility: `px-[6vw]`
- Exemplar: `src/components/SiteHeader.tsx` (L12) and `src/app/page.tsx` (L20)

## Changes

1. `src/components/SiteFooter.tsx`
   - Change: Update `SiteFooter` inner wrapper to use `px-[6vw]` and remove reliance on `var(--side)` padding:
     `<div className="site-footer-inner px-[6vw]">`
   - Preserve: Vertical padding clamps, footer columns grid, and copyright/time widgets.
   - Verify: The footer header and columns align flush with the left and right boundary of the Hero, Projects, and Profile sections at all viewport widths.

## Scope

- Inherit: Footer content elements
- Verify: Responsive column collapse at 700px and 420px
- Exclude: Header, main content, and project cards

## Validation

- Product: Full-page vertical scroll and horizontal alignment check
- Interface: Viewports at 375px, 768px, 1024px, 1440px, and 1920px
- System: Horizontal gutter consistency across all 5 sections
- Repository: `pnpm build` → Clean build with exit code 0

## Stop conditions

- Stop if footer grid columns overflow on small screens (< 360px).

## Design documentation

- After acceptance and validation: None
