# UI/UX Refinements: Readability, Academic Balance, and Header Density

Written against: f9ce4fc7cebd8f347dc317d384af59958d529ed8

## Evidence chain

- Surface: `src/components/ProjectComponent.tsx`, `src/components/ProfileSection.tsx`, `src/components/SiteHeader.tsx`
- Problem:
  1. Multiline architectural decisions in `ProjectComponent.tsx` (L153) use `list-inside`, causing wrapped lines to fall under bullets rather than holding a clean hanging indent.
  2. "Analista en Ciencias de la Computación" (L122-138) in `ProfileSection.tsx` is styled as unbordered text, creating stark visual asymmetry and lower perceived status compared to the in-progress "Licenciatura" card above it.
  3. `SiteHeader.tsx` (L12-33) has high horizontal density on small viewports (< 400px) due to rigid gaps and lack of flex-shrink constraints.
- Design evidence:
  1. Standard typography hierarchy in `globals.css` and `ProjectComponent.tsx`.
  2. Licenciatura card exemplar in `ProfileSection.tsx` (L105-120).
  3. Responsive flex layout in `SiteHeader.tsx`.
- Owner: `src/components/`
- Scope and affected surfaces: `src/components/ProjectComponent.tsx`, `src/components/ProfileSection.tsx`, `src/components/SiteHeader.tsx`
- Uncertainty: none

## Design decision

Apply 3 focused refinements:
1. In `ProjectComponent.tsx`, switch from `list-inside` to `list-outside pl-4` for architectural decision lists to guarantee clean scannability.
2. In `ProfileSection.tsx`, wrap the completed "Analista" degree in a structured card with a badge, matching the system's card language while reflecting graduation status.
3. In `SiteHeader.tsx`, adjust mobile nav gaps (`gap-3 sm:gap-8`) and add `shrink-0` to prevent collision on narrow mobile viewports.

## Reuse

- Card border: `border border-[#d80621]/30`
- Badge style: `border border-[#d80621] px-1.5 py-0.5 bg-[#d80621]/10 text-[10px]`
- Exemplar: `src/components/ProfileSection.tsx` (L105-120)

## Changes

1. `src/components/ProjectComponent.tsx`
   - Change: Replace `list-disc list-inside` with `list-disc list-outside pl-4` in L153.
   - Preserve: Color, opacity, tracking, and font-size.
   - Verify: Bullets hang to the left and multiline text wraps cleanly aligned.

2. `src/components/ProfileSection.tsx`
   - Change: Encapsulate the completed "Analista" degree block with a structured card and badge matching the Licenciatura card.
   - Preserve: Degree title, institution, years, and grade average.
   - Verify: Both degrees have balanced card structure.

3. `src/components/SiteHeader.tsx`
   - Change: Add `shrink-0` to the brand link and adjust nav gap to `gap-3 sm:gap-8` for smooth mobile rendering.
   - Preserve: Navigation labels, links, and sticky behavior.
   - Verify: No touch target collision or overflow at 360px viewport width.

## Scope

- Inherit: All rendered project cards and profile sections
- Verify: Mobile (360px - 414px) and desktop (1024px+) viewports
- Exclude: Data files, footer, and hero action button styling

## Validation

- Product: Clean scannability for recruiters and tech reviewers
- Interface: Verified at 360px, 768px, and 1280px
- Repository: `pnpm build` → Clean build with exit code 0

## Stop conditions

- Stop if changes introduce horizontal scroll or typescript compilation errors.

## Design documentation

- After acceptance and validation: None
