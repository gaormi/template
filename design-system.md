# Fairfield Center Design System

This document extracts the current `/training` page into a reusable design baseline for future pages. The goal is visual continuity: calm nonprofit credibility, warm educational guidance, refined editorial typography, and consistent spacing/color rules.

## 设计原则 (Design Principles)

### Overall Direction

- The visual language should feel **professional, calm, guided, and human-centered**. It is not a marketing splash page first; it is an informational service page for people evaluating mediator training and certification.
- The page style balances **institutional trust** with **warm mentorship**. Use large readable headings, soft color fields, full-bleed photography, generous section spacing, and structured cards.
- The main training identity color is green, centered on `training-500` (`#2d9966`). It should signal education, growth, and guidance. Use it as the primary accent, not as a full-page wash.
- The page should feel refined through small details: rounded glass navigation, muted image overlays, decorative but quiet SVG shapes, soft shadows, subtle hover movement, staggered scroll reveal animation, and careful uppercase labels.
- Avoid generic SaaS styling. The look should be editorial and nonprofit-oriented: large calm typography, tactile cards, natural imagery, and restrained decorative geometry.
- Use white space deliberately. Sections should breathe, but content blocks should remain information-dense enough for users comparing programs.
- Use cards only where content is genuinely grouped: certification tracks, forms, course entries, navigation dropdowns. Page sections themselves should remain unframed full-width bands.
- Maintain strong hierarchy: one immersive hero, repeated section labels, large section headings, medium card titles, small body copy, compact metadata tags.

### Layout Rhythm

- Hero first, then process, tracks, courses, requirements/forms.
- Main content should live inside a shared container: `max-w-7xl` (`1280px`) with responsive side padding.
- Use large vertical rhythm:
  - Standard section padding: `py-10 sm:py-20` = `40px` mobile, `80px` tablet/desktop.
  - Hero uses viewport height: `min-h-[80vh]`.
  - Section header bottom margin usually `mb-10 sm:mb-16` (`40px`, `64px`) or `mb-8 sm:mb-12` (`32px`, `48px`).
- Use two kinds of composition:
  - Centered editorial section headers for high-level decisions.
  - Left-aligned explanatory sections when users need to scan practical details.

### Motion

- Scroll reveal uses `AnimateIn`: `transition-all duration-700 ease-out`, hidden state `opacity-0` plus `translate-y-8` / `translate-x-8` / `scale-95`.
- Use staggered delays in `60ms`, `100ms`, `150ms`, `200ms`, `300ms` steps.
- Hover motion should be subtle:
  - Track cards: `hover:-translate-y-1 hover:shadow-xl`, `duration-500`.
  - Course images: `group-hover:scale-105`, `duration-700`.
  - Course action icon: `group-hover:scale-110`, `duration-300`.
  - Buttons: press feedback `active:scale-[0.98]`, `duration-150`.

## 色彩系统 (Color Palette)

All reusable colors should come from `src/app/globals.css` `@theme` tokens. Avoid new arbitrary colors like `bg-[#...]` in page code unless a color is intentionally being prototyped before tokenization.

### Base Surface And Text

| Token / Usage | HEX | RGB | Usage |
| --- | --- | --- | --- |
| `white` | `#ffffff` | `rgb(255,255,255)` | Page background, card surfaces, hero CTA, course card cutout |
| `foreground` | `#171717` | `rgb(23,23,23)` | Base foreground and dark neutral text |
| `background` | `#ffffff` | `rgb(255,255,255)` | Light mode body background |
| `neutral-900` | `#171717` | `rgb(23,23,23)` | Main headings |
| `neutral-800` | `#262626` | `rgb(38,38,38)` | Strong body/list text |
| `neutral-700` | `#404040` | `rgb(64,64,64)` | Nav text, pill text, form labels |
| `neutral-600` | `#525252` | `rgb(82,82,82)` | Body copy in practical sections |
| `neutral-500` | `#737373` | `rgb(115,115,115)` | Secondary paragraphs and descriptions |
| `neutral-400` | `#a3a3a3` | `rgb(163,163,163)` | Form IDs, inactive icons |
| `neutral-300` | `#d4d4d4` | `rgb(212,212,212)` | Input borders |
| `neutral-200` | `#e5e5e5` | `rgb(229,229,229)` | Image placeholders, subtle borders |
| `neutral-100` | `#f5f5f5` | `rgb(245,245,245)` | Light hover surfaces, icon backgrounds |
| `neutral-50` | `#fafafa` | `rgb(250,250,250)` | Very soft borders and hover backgrounds |

### Brand And Service Palettes

| Token | HEX | RGB | Usage |
| --- | --- | --- | --- |
| `primary-500` | `#2984d1` | `rgb(41,132,209)` | Mediation/service blue accent |
| `primary-600` | `#2272b8` | `rgb(34,114,184)` | Primary button base |
| `primary-700` | `#1d5e96` | `rgb(29,94,150)` | Primary button hover |
| `training-50` | `#f0faf5` | `rgb(240,250,245)` | Soft training background, inactive mobile accordion |
| `training-100` | `#d6f2e4` | `rgb(214,242,228)` | Light green icon/tint |
| `training-200` | `#a8e4c7` | `rgb(168,228,199)` | Hero serif highlight |
| `training-300` | `#6ecfa3` | `rgb(110,207,163)` | Hero label dot |
| `training-400` | `#3db87f` | `rgb(61,184,127)` | Secondary green marks |
| `training-500` | `#2d9966` | `rgb(45,153,102)` | Main training accent, section highlights, active accordion |
| `training-600` | `#237a51` | `rgb(35,122,81)` | CTA text and link hover |
| `training-700` | `#1d6243` | `rgb(29,98,67)` | Strong green hover/link text |
| `training-800` | `#194e36` | `rgb(25,78,54)` | Deep training tone |
| `training-900` | `#15412d` | `rgb(21,65,45)` | Dark training tone |
| `coparent-500` | `#e08a3c` | `rgb(224,138,60)` | Warm orange service accent |
| `rj-400` | `#a05dfe` | `rgb(160,93,254)` | Restorative justice purple accent |

### Training Certification Track Tokens

Use these for certification track cards. Do not substitute random tints.

| Track | Token | HEX | RGB | Usage |
| --- | --- | --- | --- | --- |
| GDC | `cert-gdc-bg` | `#f0f4ff` | `rgb(240,244,255)` | Card background |
| GDC | `cert-gdc-dot` | `#4f46e5` | `rgb(79,70,229)` | Dot, bullet |
| GDC | `cert-gdc-text` | `#1e3a8a` | `rgb(30,58,138)` | Card title and copy |
| GDC | `cert-gdc-decor-start` | `#c7d2fe` | `rgb(199,210,254)` | SVG gradient start |
| GDC | `cert-gdc-decor-end` | `#6366f1` | `rgb(99,102,241)` | SVG gradient end |
| CCC | `cert-ccc-bg` | `#fffcf0` | `rgb(255,252,240)` | Card background |
| CCC | `cert-ccc-dot` | `#eab308` | `rgb(234,179,8)` | Dot, bullet |
| CCC | `cert-ccc-text` | `#423800` | `rgb(66,56,0)` | Card title and copy |
| CCC | `cert-ccc-decor-start` | `#fef08a` | `rgb(254,240,138)` | SVG gradient start |
| CCC | `cert-ccc-decor-end` | `#eab308` | `rgb(234,179,8)` | SVG gradient end |
| J&DR | `cert-jdr-bg` | `#ebf5ee` | `rgb(235,245,238)` | Card background |
| J&DR | `cert-jdr-dot` | `#2d9966` | `rgb(45,153,102)` | Dot, bullet |
| J&DR | `cert-jdr-text` | `#123d29` | `rgb(18,61,41)` | Card title and copy |
| J&DR | `cert-jdr-decor-start` | `#bde2cb` | `rgb(189,226,203)` | SVG gradient start |
| J&DR | `cert-jdr-decor-end` | `#2d9966` | `rgb(45,153,102)` | SVG gradient end |
| CCF | `cert-ccf-bg` | `#fff4ed` | `rgb(255,244,237)` | Card background |
| CCF | `cert-ccf-dot` | `#ff7733` | `rgb(255,119,51)` | Dot, bullet |
| CCF | `cert-ccf-text` | `#2b1a10` | `rgb(43,26,16)` | Card title and copy |
| CCF | `cert-ccf-decor-start` | `#ffd5bb` | `rgb(255,213,187)` | SVG gradient start |
| CCF | `cert-ccf-decor-end` | `#ff7733` | `rgb(255,119,51)` | SVG gradient end |

### Training Course Card Tokens

| Token | HEX | RGB | Usage |
| --- | --- | --- | --- |
| `course-blue-action` | `#b6d2e6` | `rgb(182,210,230)` | Blue course action icon background |
| `course-blue-tag-bg` | `#eaf4fa` | `rgb(234,244,250)` | Blue course track tag background at 85% opacity |
| `course-blue-text` | `#5f87a3` | `rgb(95,135,163)` | Blue course tag text and title hover |
| `course-green-action` | `#b8d7be` | `rgb(184,215,190)` | Green course action icon background |
| `course-green-tag-bg` | `#e4f0e6` | `rgb(228,240,230)` | Green course track tag background at 80% opacity |
| `course-green-text` | `#6f9576` | `rgb(111,149,118)` | Green course tag text and title hover |
| `course-orange-action` | `#f6ca9d` | `rgb(246,202,157)` | Orange course action icon background |
| `course-orange-tag-bg` | `#fcecdf` | `rgb(252,236,223)` | Orange course track tag background at 80% opacity |
| `course-orange-text` | `#bc875d` | `rgb(188,135,93)` | Orange course tag text and title hover |
| `course-purple-action` | `#ccc3e8` | `rgb(204,195,232)` | Purple course action icon background |
| `course-all-tag-bg` | `#e6e0f3` | `rgb(230,224,243)` | All-tracks tag background at 75% opacity |
| `course-all-text` | `#7e70a8` | `rgb(126,112,168)` | All-tracks tag text and purple title hover |
| `training-grid` | `#e2e8f0` | `rgb(226,232,240)` | Process section grid lines |

### Overlays And Transparencies

- Hero image overlay: `bg-neutral-900/60` with `mix-blend-multiply`.
- Hero bottom fade: `bg-gradient-to-t from-white via-white/55 to-transparent`, height `h-48` (`192px`).
- Hero label: `border-white/20 bg-white/10 backdrop-blur`.
- Track card top pill: `bg-white/80 shadow-sm backdrop-blur-md`.
- Course image overlay: `bg-black/[0.03]`.
- Accordion active overlay: `linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2), rgba(0,0,0,0.1))`.
- Accordion inactive overlay: `linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.3))`.
- Form card shadow: `shadow-xl shadow-neutral-200/50`.
- Fixed nav glass: `bg-white/70 backdrop-blur-2xl backdrop-saturate-150`.

## 排版与字体 (Typography)

### Font Families

| Role | Font | Source | Usage |
| --- | --- | --- | --- |
| Primary sans | `Inter` | `next/font/google`, `--font-inter` | Body, nav, cards, forms, buttons |
| Brand serif | `Newsreader` | `next/font/google`, `--font-newsreader` | Editorial emphasis, italic hero words |
| Mono | `Fira Code` | `next/font/google`, `--font-fira` | Code/technical text if needed |

Implementation:

```css
--font-sans: var(--font-inter);
--font-serif: var(--font-newsreader);
--font-mono: var(--font-fira);
```

### Heading Scale

| Element | Tailwind Class | Size | Line Height | Weight | Letter Spacing | Usage |
| --- | --- | --- | --- | --- | --- | --- |
| Hero H1 mobile | `text-[2.25rem] leading-[1.08]` | `36px` | `38.88px` | `font-medium` 500 | normal | Main page title on mobile |
| Hero H1 small+ | `sm:text-[4.25rem] sm:leading-[1.05]` | `68px` | `71.4px` | `font-medium` 500 | normal | Hero title on tablet |
| Hero H1 md+ | `md:text-[5.125rem]` | `82px` | inherits `1.05` = `86.1px` | `font-medium` 500 | normal | Hero title on desktop |
| Hero serif emphasis | `font-serif italic text-training-200` | inherits H1 | inherits H1 | italic | normal | Use for one emotional keyword only |
| Main section H2 | `text-4xl sm:text-[3.45rem]` | `36px`, `55.2px` | Tailwind `text-4xl` default `40px`; custom size uses normal line-height unless set | `font-normal` with `font-semibold` highlight | `tracking-tight` = `-0.025em` | Process and track headings |
| Course section H2 | `text-3xl sm:text-[3.45rem]` | `30px`, `55.2px` | `36px` default mobile | `font-normal` plus green `font-semibold` span | `tracking-tight` | Course section heading |
| Requirements H2 | `text-3xl sm:text-[2.55rem]` | `30px`, `40.8px` | `36px` default mobile | `font-normal` plus green `font-semibold` span | `tracking-tight` | Two-column lower section |
| Application Forms H3 | `text-2xl sm:text-[1.7rem]` | `24px`, `27.2px` | `32px` default mobile | `font-normal` plus green `font-semibold` span | normal | Card heading |
| Track card title | `text-lg sm:text-[1.7rem]` | `18px`, `27.2px` | tight | `font-bold` 700 | `tracking-tight` | Certification card title |
| Course card title | `text-lg sm:text-[1.45rem]` | `18px`, `23.2px` | `leading-snug` = `1.375` | `font-bold` 700 | normal | Clickable course title |
| Step title | `text-lg sm:text-[1.45rem]` | `18px`, `23.2px` | default/tight feel | `font-bold` 700 | normal | Accordion active title |
| Tip title | `text-lg sm:text-xl` | `18px`, `20px` | `28px` default | `font-bold` 700 | normal | Requirements/tips list |

### Body Copy Scale

| Element | Tailwind Class | Size | Line Height | Color |
| --- | --- | --- | --- | --- |
| Hero body | `text-base leading-relaxed sm:text-xl` | `16px`, `20px` | `1.625` = `26px`, `32.5px` | `white/82` |
| Section intro | `text-base leading-relaxed sm:text-xl` | `16px`, `20px` | `26px`, `32.5px` | `neutral-500` |
| Process side note | `text-lg leading-relaxed sm:text-xl` | `18px`, `20px` | `29.25px`, `32.5px` | `neutral-500` |
| Track scope | `text-sm leading-relaxed` | `14px` | `22.75px` | track text at `opacity-75` |
| Track body | `text-sm leading-relaxed sm:font-semibold` | `14px` | `22.75px` | track text at `opacity-80` |
| Track course list | `text-sm leading-snug` | `14px` | `19.25px` | track text at `opacity-80` |
| Course description | `text-sm leading-relaxed sm:text-base` | `14px`, `16px` | `22.75px`, `26px` | `neutral-500` |
| Tip description | `text-sm leading-relaxed sm:text-base` | `14px`, `16px` | `22.75px`, `26px` | `neutral-600` |
| Form row title | `text-sm sm:text-base leading-snug` | `14px`, `16px` | `19.25px`, `22px` | `neutral-800` |

### Labels, Tags, And Letter Spacing

| Element | Tailwind Class | Size | Weight | Letter Spacing | Case |
| --- | --- | --- | --- | --- | --- |
| Hero eyebrow | `text-sm font-bold uppercase tracking-widest` | `14px` | 700 | `0.1em` | Uppercase |
| Section eyebrow | `text-xs font-bold uppercase tracking-widest` | `12px` | 700 | `0.1em` | Uppercase |
| Track card small headings | `text-[11px] font-bold uppercase tracking-widest` | `11px` | 700 | `0.1em` | Uppercase |
| Step pill | `text-[11px] font-bold uppercase tracking-widest` | `11px` | 700 | `0.1em` | Uppercase |
| Course tags | `text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest` | `9px`, `10px` | 800 | `0.1em` | Uppercase |
| Vertical inactive step title | `text-base font-bold uppercase tracking-[0.2em]` | `16px` | 700 | `0.2em` | Uppercase |
| Form ID | `text-xs font-bold uppercase tracking-wider` | `12px` | 700 | `0.05em` | Uppercase |

### Typography Rules

- Use `font-normal` for large editorial headings, then emphasize one phrase with `font-semibold text-training-500`.
- Use `font-serif italic` sparingly, only for one emotional/high-value word or short phrase.
- Body copy should almost always use `leading-relaxed`.
- Compact metadata should use uppercase, bold/extrabold, and wide tracking.
- Avoid negative letter spacing beyond Tailwind `tracking-tight` for headings.
- Avoid all-caps paragraphs; reserve uppercase for eyebrows, tags, step labels, and small metadata.

## 间距与布局 (Spacing & Layout)

### Breakpoints And Containers

| Item | Class | Value |
| --- | --- | --- |
| Main container | `max-w-7xl` | `1280px` |
| Main container x padding | `px-4 sm:px-6 lg:px-8` | `16px`, `24px`, `32px` |
| Header nav max width | `max-w-6xl` | `1152px` |
| Hero text container | `max-w-4xl px-6` | `896px`, `24px` side padding |
| Section header max width | `max-w-3xl` | `768px` |
| Hero paragraph max width | `max-w-2xl` | `672px` |
| Process side note | `max-w-md` | `448px` |
| Accordion body copy | `max-w-lg` | `512px` |

### Section Spacing

| Pattern | Class | Pixels | Usage |
| --- | --- | --- | --- |
| Standard section padding | `py-10 sm:py-20` | `40px`, `80px` | Process, tracks, courses, lower section |
| Hero spacing | `pt-24 pb-12 sm:pt-28 lg:pt-0 lg:pb-0` | `96px/48px`, `112px`, desktop reset | Keeps fixed nav from covering hero text |
| Hero height | `min-h-[80vh]` | 80% viewport height | First viewport immersive hero |
| Section header margin | `mb-10 sm:mb-16` | `40px`, `64px` | Major centered/paired section headers |
| Course header margin | `mb-8 sm:mb-12` | `32px`, `48px` | Course grid section |
| Hero label bottom margin | `mb-6` | `24px` | Space before H1 |
| Hero paragraph top margin | `mt-7` | `28px` | Space after H1 |
| Hero CTA top margin | `mt-10` | `40px` | Space after intro copy |
| Section intro top margin | `mt-5` | `20px` | Paragraph after heading |
| Course intro top margin | `mt-4 sm:mt-5` | `16px`, `20px` | Paragraph after course heading |

### Grid Systems

| Area | Class | Behavior |
| --- | --- | --- |
| Certification tracks | `grid gap-4 sm:gap-6 lg:auto-rows-fr lg:grid-cols-2 lg:gap-8` | 1 column mobile, 2 equal-height columns desktop; gaps `16px`, `24px`, `32px` |
| Course cards | `grid gap-x-8 gap-y-4 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3` | 1 column mobile, 2 tablet, 3 desktop; horizontal gap `32px`, vertical gap `16px/48px` |
| Requirements/forms | `grid gap-8 lg:grid-cols-2 lg:gap-16` | 1 column mobile, 2 columns desktop; gap `32px/64px` |
| Track card internal details | `flex flex-col xl:flex-row xl:gap-8` | Stacked until xl, split into required courses and mentorship/docs at xl |
| Hero CTA group | `flex flex-col sm:flex-row gap-4` | Stacked mobile, horizontal tablet+ |

### Spacing Scale Used In The Page

| Token/Class | Pixels | Usage |
| --- | --- | --- |
| `gap-0.5` | `2px` | Nav item cluster |
| `gap-2` | `8px` | Eyebrows, tags, forms list spacing |
| `gap-2.5` | `10px` | Logo spacing, course tags desktop |
| `gap-3` | `12px` | Course title icon, form row icon |
| `gap-4` | `16px` | Hero CTA, cards mobile, tips rows |
| `gap-5` | `20px` | Track card internal mobile spacing |
| `gap-6` | `24px` | Section header responsive spacing, track internals |
| `gap-8` | `32px` | Desktop card grids, lower section mobile |
| `gap-16` | `64px` | Lower section desktop columns |
| `p-2` | `8px` | Header nav shell |
| `p-3` | `12px` | Form link row mobile |
| `p-3.5` | `14px` | Form link row desktop |
| `p-4` | `16px` | Course card mobile, mobile accordion body, form card mobile |
| `p-5` | `20px` | Track card mobile |
| `p-6` | `24px` | Form card tablet |
| `p-8` | `32px` | Accordion desktop content, track card tablet, form card desktop |
| `p-10` | `40px` | Track card desktop |
| `px-2.5 py-1` | `10px / 4px` | Course tags |
| `px-3 py-1` | `12px / 4px` | Step pill |
| `px-3.5 py-1.5` | `14px / 6px` | Track hours pill |
| `px-4 py-2` | `16px / 8px` | Hero eyebrow |
| `px-6 py-3` | `24px / 12px` | Large button |

### Radius Scale

| Class | Value | Usage |
| --- | --- | --- |
| `rounded-md` | `6px` | Compact tags and nav small controls |
| `rounded-lg` | `8px` | Buttons, form inputs, form icons |
| `rounded-xl` | `12px` | Form rows, mobile accordion rows, dropdown containers |
| `rounded-2xl` | `16px` | Course cards mobile, step accordion desktop wrapper |
| `rounded-3xl` | `24px` | Form card |
| `rounded-[1.75rem]` | `28px` | Course images |
| `rounded-[2rem]` | `32px` | Track cards mobile, decorative cutout |
| `rounded-[2.5rem]` | `40px` | Track cards desktop |
| `rounded-full` | Fully round | Pills, nav, logo mark, CTA, circular icons |

### Image And Media Sizing

- Hero image: full section fill, `object-cover`, priority-loaded.
- Course card image: `h-[220px]`, `rounded-[1.75rem]`, `object-cover`.
- Mobile step image: `h-40` = `160px`, full width.
- Desktop step accordion: fixed `h-[500px]`.
- Decorative track SVG: `h-40 w-40` (`160px`) mobile, `md:h-48 md:w-48` (`192px`) desktop; positioned `bottom-4 right-5`.

## 组件样式 (Components)

### Header / Navigation

- Header is fixed: `fixed top-0 left-0 right-0 z-50`.
- Header outer spacing: `px-4 pt-4 sm:px-6` = `16px/24px` side padding, `16px` top.
- Nav shell:
  - `max-w-6xl` (`1152px`)
  - `rounded-full`
  - `border`
  - `bg-white/70`
  - `p-2` (`8px`)
  - `shadow-lg`
  - `backdrop-blur-2xl backdrop-saturate-150`
- Training nav theme:
  - `border-training-300/70`
  - `shadow-training-200/20`
  - CTA `bg-training-500 hover:bg-training-600`
  - nav hover `hover:text-training-600`
  - dropdown hover `hover:bg-training-50 hover:text-training-700`
- Logo:
  - mark: `h-9 w-9 rounded-full bg-white/80 overflow-hidden`
  - text: `text-base sm:text-lg lg:text-xl font-bold text-neutral-800`
- Desktop nav:
  - hidden below `lg`.
  - item padding `px-3.5 py-2`.
  - item type `text-sm font-medium text-neutral-600`.
- Dropdown:
  - trigger uses a text label plus chevron.
  - panel wrapper starts `invisible opacity-0`; on hover `visible opacity-100`.
  - dropdown panel: `min-w-52`, `rounded-xl`, `border-white/40`, `bg-white/70`, `p-1.5`, `shadow-xl`, `backdrop-blur-2xl`.

### Buttons

Base `Button` component:

- Layout: `inline-flex items-center justify-center gap-2`.
- Radius: default `rounded-lg`; hero CTA overrides to `rounded-full`.
- Weight: `font-semibold`.
- Transition: `transition-[background-color,border-color,color,box-shadow,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]`.
- Press feedback: `active:scale-[0.98]`.
- Disabled: `disabled:pointer-events-none disabled:opacity-50 disabled:active:scale-100`.
- Focus: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`.

Button sizes:

| Size | Class | Pixels |
| --- | --- | --- |
| `sm` | `px-3 py-1.5 text-sm` | `12px / 6px`, `14px` type |
| `md` | `px-4 py-2 text-sm` | `16px / 8px`, `14px` type |
| `lg` | `px-6 py-3 text-base` | `24px / 12px`, `16px` type |

Button variants:

- `primary`: `bg-primary-600 text-white shadow-sm hover:bg-primary-700 focus-visible:ring-primary-500`.
- `secondary`: `bg-training-500 text-white shadow-sm hover:bg-training-600 focus-visible:ring-training-500`.
- `outline`: `border border-neutral-300 text-neutral-700 hover:bg-neutral-50`.
- `ghost`: `text-neutral-700 hover:bg-neutral-100`.
- Training hero CTA uses `ghost` plus override:
  - `rounded-full`
  - `bg-white`
  - `text-training-600`
  - `shadow-xl`
  - `backdrop-blur-sm`
  - `hover:bg-training-500/75 hover:text-white hover:backdrop-blur-md`

### Eyebrow Labels

- Section eyebrow base:
  - `inline-flex items-center gap-2`
  - `text-xs font-bold uppercase tracking-widest`
  - `text-training-500`
  - dot `h-2 w-2 rounded-full bg-training-500`
  - bottom margin `mb-4`
- Hero eyebrow:
  - `rounded-full border border-white/20 bg-white/10`
  - `px-4 py-2`
  - `text-sm font-bold uppercase tracking-widest`
  - `text-training-100 backdrop-blur`
  - dot `h-2 w-2 bg-training-300`

### Hero Section

- Section:
  - `relative flex min-h-[80vh] items-center justify-center overflow-hidden`
  - `pt-24 pb-12 sm:pt-28 lg:pt-0 lg:pb-0`
- Background image:
  - full-fill `Image`, `object-cover`, `priority`.
- Overlays:
  - dark multiply overlay `absolute inset-0 bg-neutral-900/60 mix-blend-multiply`.
  - bottom white fade `absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/55 to-transparent`.
- Content:
  - `relative z-10 mx-auto max-w-4xl px-6 text-center`.
  - H1 should use two lines with `sm:whitespace-nowrap` spans to keep phrase integrity on larger screens.
  - CTA starts at `mt-10`.

### Section Headers

Common pattern:

- Eyebrow at top.
- Heading uses large `font-normal tracking-tight text-neutral-900`.
- Highlight one meaningful word/phrase using `font-semibold text-training-500`.
- Supporting paragraph uses `text-neutral-500 leading-relaxed`.

Variants:

- Split header:
  - wrapper `mb-10 sm:mb-16 flex flex-col gap-5 sm:gap-6 md:flex-row md:items-end md:justify-between`.
  - left heading `max-w-3xl`.
  - right paragraph `max-w-md md:text-right md:pb-4`.
- Centered header:
  - wrapper `mx-auto mb-10 max-w-3xl text-center sm:mb-16`.
- Left-aligned course header:
  - wrapper `mb-8 sm:mb-12`.

### Process Step Accordion

Desktop:

- Wrapper: `hidden h-[500px] overflow-hidden rounded-2xl lg:flex`.
- Items:
  - inactive flex `1`, active flex `8`.
  - transition: `flex 0.7s cubic-bezier(0.4, 0, 0.2, 1)`.
  - border between items: `border-l border-white/20 first:border-l-0`.
  - cursor: `cursor-pointer`.
- Images:
  - `object-cover transition-transform duration-700`.
  - active scale `1`; inactive scale `1.1`.
- Active content:
  - positioned bottom with `absolute inset-0 flex flex-col justify-end p-8`.
  - transition `duration-500`.
  - hidden transform `translateY(12px)`, active `translateY(0)`.
  - active transition delay `0.4s`.
- Inactive title:
  - centered vertical label.
  - `writing-mode: vertical-lr`, `rotate(180deg)`.
  - `text-base font-bold uppercase tracking-[0.2em] text-white/90`.

Mobile:

- Wrapper: `space-y-2 lg:hidden`.
- Row: `overflow-hidden rounded-xl`.
- Button:
  - `flex w-full items-center gap-3 sm:gap-4 p-4 text-left transition-colors`.
  - active `bg-training-500 text-white`.
  - inactive `bg-training-50 text-neutral-800`.
- Number:
  - `text-sm font-extrabold`.
  - active `text-white/60`, inactive `text-training-400`.
- Panel:
  - `grid transition-all duration-300 ease-in-out`.
  - open `grid-rows-[1fr] opacity-100`.
  - closed `grid-rows-[0fr] opacity-0`.
- Image: `h-40 w-full`, `object-cover`.
- Body: `bg-white p-4`, copy `text-sm leading-relaxed text-neutral-600`.

### Certification Track Cards

- Grid: `grid gap-4 sm:gap-6 lg:auto-rows-fr lg:grid-cols-2 lg:gap-8`.
- Card:
  - `group relative flex h-full flex-col overflow-hidden`
  - mobile radius `rounded-[2rem]` (`32px`)
  - desktop radius `sm:rounded-[2.5rem]` (`40px`)
  - padding `p-5 sm:p-8 md:p-10` (`20px`, `32px`, `40px`)
  - `transition-all duration-500 hover:-translate-y-1 hover:shadow-xl`
- Decorative SVG:
  - position `absolute bottom-4 right-5`
  - size `h-40 w-40`, desktop `h-48 w-48`
  - opacity `0.40-0.45`, hover opacity `0.55-0.60`
  - hover scale `group-hover:scale-105`
- Hours pill:
  - `inline-flex items-center rounded-full bg-white/80 px-3.5 py-1.5`
  - `text-xs font-bold text-neutral-700`
  - `shadow-sm backdrop-blur-md`
  - dot `h-2.5 w-2.5 mr-2`
- Internal divider:
  - `border-t border-black/[0.08] pt-5 sm:pt-6`.
- Use the track-specific token set for background, text, bullets, dots, and SVG gradient.

### Course Cards

Desktop/tablet:

- Grid: `sm:grid-cols-2 lg:grid-cols-3`, horizontal gap `32px`, vertical gap `48px`.
- Card link:
  - `group flex h-full flex-col cursor-pointer`.
  - On mobile only it has `rounded-2xl border border-neutral-100 bg-white p-4 shadow-sm`.
  - At `sm+`, remove card chrome: `sm:rounded-none sm:border-0 sm:p-0 sm:shadow-none`.
- Image:
  - hidden on mobile with `hidden sm:block`.
  - wrapper `relative mb-6`.
  - image frame `relative h-[220px] w-full overflow-hidden rounded-[1.75rem] bg-neutral-200`.
  - image `object-cover transition-transform duration-700 group-hover:scale-105`.
  - overlay `absolute inset-0 bg-black/[0.03]`.
- Bottom-right action cutout:
  - white cutout square `h-[54px] w-[54px] rounded-tl-[2rem]`.
  - two white corner SVGs `h-4 w-4`.
  - action circle `h-11 w-11 rounded-full shadow-sm`.
  - hover `group-hover:scale-110`.
- Mobile action icon:
  - `h-8 w-8 rounded-full`, visible only below `sm`.
- Title:
  - `text-lg sm:text-[1.45rem] font-bold leading-snug text-neutral-900`.
  - hover color comes from course tone token.
- Description:
  - `mt-2 sm:mt-2.5 pr-4 text-sm sm:text-base leading-relaxed text-neutral-500`.
- Tags:
  - wrapper `mt-3.5 sm:mt-4 flex flex-wrap gap-2 sm:gap-2.5`.
  - tag shape `rounded-md px-2.5 py-1`.
  - type `text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest`.
  - hours tag uses `bg-yellow-100/70 text-yellow-700/70`.
  - track tag uses course token palette.

### Requirements And Tips

- Section grid: `grid gap-8 lg:grid-cols-2 lg:gap-16`.
- Tip row:
  - `flex gap-4`.
  - icon circle `h-12 w-12 rounded-full shrink-0`.
  - icon `h-6 w-6`.
- Tip heading: `text-lg sm:text-xl font-bold text-neutral-900`.
- Tip copy: `mt-1 text-sm sm:text-base leading-relaxed text-neutral-600`.
- Tip list vertical rhythm: `mt-6 sm:mt-8 space-y-6 sm:space-y-8`.

### Application Forms Card

- Card:
  - `rounded-3xl border border-neutral-100 bg-white`
  - padding `p-4 sm:p-6 lg:p-8`
  - `shadow-xl shadow-neutral-200/50`
- Card heading:
  - `text-2xl sm:text-[1.7rem] font-normal text-neutral-900`.
  - green emphasis span `font-semibold text-training-500`.
- Intro paragraph:
  - `mt-3 text-base sm:text-lg leading-relaxed text-neutral-500`.
  - link `font-medium text-training-600 underline hover:text-training-700`.
- Row list:
  - wrapper `space-y-2`.
  - row `group flex items-center justify-between rounded-xl border border-neutral-50 p-3 sm:p-3.5`.
  - hover `hover:border-neutral-200 hover:bg-neutral-50`.
  - icon square `h-8 w-8 sm:h-9 sm:w-9 rounded-lg bg-neutral-100 text-neutral-500`.
  - icon hover `group-hover:bg-training-500/10 group-hover:text-training-500`.
  - external icon circle `h-8 w-8 sm:h-9 sm:w-9 rounded-full text-neutral-400`.

### Form Inputs

Use these shared component styles for forms across the site.

- Label:
  - `mb-1.5 block text-sm font-medium text-neutral-700`.
  - required asterisk `text-red-500`.
- Input/select/textarea:
  - `block w-full rounded-lg border px-3 py-2 text-sm shadow-sm`.
  - `transition-colors`.
  - placeholder `placeholder:text-neutral-400`.
  - focus `focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500`.
  - normal border `border-neutral-300`.
  - error border/focus `border-red-300 focus:ring-red-500 focus:border-red-500`.
- Textarea default rows: `4`.
- Error copy: `mt-1 text-xs text-red-600`.

### AnimateIn

- Use for section-level entrance, card grids, and hero stagger.
- Supported animations: `fade-up`, `fade-left`, `fade-right`, `fade`, `scale`.
- Hidden states:
  - `fade-up`: `opacity-0 translate-y-8`.
  - `fade-left`: `opacity-0 -translate-x-8`.
  - `fade-right`: `opacity-0 translate-x-8`.
  - `fade`: `opacity-0`.
  - `scale`: `opacity-0 scale-95`.
- Visible states:
  - opacity `100%`; transform reset to zero or scale `100%`.
- Transition: `transition-all duration-700 ease-out`.
- Intersection threshold: `0.15`.
- Stagger guidance:
  - hero: `0ms`, `100ms`, `200ms`, `300ms`.
  - cards: `60ms` per course or `100ms` per major card.

### Icon Style

- Icons are thin line SVGs with `strokeWidth={1.5}` for informational icons and `strokeWidth={2}` for action arrows.
- Small UI icons:
  - course arrow desktop `h-5 w-5`.
  - course arrow mobile `h-4 w-4`.
  - form icons `h-4 w-4 sm:h-5 sm:w-5`.
  - tip icons `h-6 w-6`.
- Prefer circular or rounded-square icon containers:
  - circular for tips/actions.
  - rounded-square for documents/forms.

### Shadows

- Header nav: `shadow-lg`.
- Dropdowns: `shadow-xl`.
- Hero CTA: `shadow-xl`.
- Track card hover: `hover:shadow-xl`.
- Course mobile card: `shadow-sm hover:shadow-md`.
- Application forms card: `shadow-xl shadow-neutral-200/50`.
- Icon/action circles: `shadow-sm`.

### Implementation Rules For Future Pages

- Start with `Container` unless the section is a full-bleed hero or full-width media band.
- Use `training-500` as the primary accent for training/program pages.
- Use section eyebrow + large heading + supporting paragraph as the default page rhythm.
- Use `Newsreader` serif only as an accent, not for long paragraphs.
- Use tokenized colors from `globals.css`; add new semantic tokens when a new repeated color role appears.
- Keep mobile layouts stacked and readable; introduce denser grids only at `sm`, `lg`, or `xl`.
- Keep cards purposeful. Do not nest cards inside cards.
- Preserve the same border radius hierarchy: `8px` controls, `12-16px` compact rows/cards, `24-40px` feature cards/media.
- Keep hover effects subtle: small translate, soft shadow, color shift, or image scale. Avoid aggressive motion.
