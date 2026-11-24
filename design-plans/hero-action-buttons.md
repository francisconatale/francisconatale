# Align Hero Action Buttons to Editorial Sharp-Border System

Written against: f9ce4fc7cebd8f347dc317d384af59958d529ed8

## Evidence chain

- Surface: `src/components/HeroSection.tsx` (action buttons column, L31-105)
- Problem: Action buttons use `rounded-2xl` (16px border-radius), `shadow-sm`, and an un-tokenized hover color `hover:bg-[#b5051c]`, conflicting with the portfolio's sharp-cornered (0px border-radius), flat, zero-shadow Swiss/editorial visual contract.
- Design evidence: `src/components/ProjectComponent.tsx` (L89, L189, L198), `src/components/ProfileSection.tsx` (L83, L105, L110), and `src/app/globals.css` (L259, L330) where all interactive elements, tags, and cards enforce strict 0px border-radius and zero box-shadow.
- Owner: `src/components/HeroSection.tsx`
- Scope and affected surfaces: `src/components/HeroSection.tsx`
- Uncertainty: none

## Design decision

Strip `rounded-2xl`, `shadow-sm`, and `hover:bg-[#b5051c]` from the action links in `src/components/HeroSection.tsx`. Replace them with flat, sharp-cornered solid red buttons (`border border-[#d80621] bg-[#d80621] text-white hover:opacity-85 transition-opacity`) that maintain high visual weight while adhering strictly to the editorial design language.

## Reuse

- Color token: `--primary` / `#d80621`, `#ffffff`
- Exemplar: `src/components/ProjectComponent.tsx` (sharp borders and opacity transitions) and `src/components/SiteHeader.tsx` (L12, L16 `hover:opacity-85`)

## Changes

1. `src/components/HeroSection.tsx`
   - Change: In lines 38, 62, and 82, update the class string of the three `Link` elements from:
     `className="group flex items-center justify-between px-5 py-3.5 rounded-2xl bg-[#d80621] !text-white hover:bg-[#b5051c] transition-all duration-200 shadow-sm"`
     to:
     `className="group flex items-center justify-between px-5 py-3.5 border border-[#d80621] bg-[#d80621] text-white hover:opacity-85 transition-opacity duration-200"`
     and remove redundant inline `style={{ color: "#ffffff" }}` and `!text-white` overrides.
   - Preserve: Icon SVGs, arrow indicator with `group-hover:translate-x-0.5 group-hover:-translate-y-0.5`, labels ("GitHub", "LinkedIn", "Mi CV"), link destinations, and accessible attributes (`aria-hidden="true"`).
   - Verify: The buttons render with sharp 90-degree corners, flat background, no drop shadow, and clean opacity hover state matching the header and project components.

## Scope

- Inherit: Desktop and mobile Hero action links
- Verify: Contrast and alignment against the vertical divider in `HeroSection.tsx`
- Exclude: Unrelated sections, data models, and footer styling

## Validation

- Product: Hero section action buttons (GitHub, LinkedIn, CV)
- Interface: Viewports from 360px to 1920px; default, hover, and focus states
- System: Zero instances of `rounded-*` and `shadow-*` in `HeroSection.tsx`
- Repository: `pnpm build` → Clean build with exit code 0

## Stop conditions

- Stop if changing button geometry alters required touch target sizes (< 44px height; `py-3.5` maintains > 48px target height).

## Design documentation

- After acceptance and validation: None
