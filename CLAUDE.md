# FIR Risk Website - Claude Instructions

> **Hugo static site** for FIR Risk Advisory marketing website
> **Live Domain**: firriskadvisory.com (WordPress) → migrating to firrisk.ai (Hugo/Cloudflare)

---

## Quick Reference

| Setting | Value |
|---------|-------|
| **Framework** | Hugo v0.155.2+ (extended) |
| **Theme** | Hinode v1.23.7 (via Hugo modules) |
| **Hosting** | Cloudflare Pages (planned) |
| **Domain** | firrisk.ai |
| **Local Dev** | `hugo server` → http://localhost:1313 |
| **Build** | `hugo` → outputs to `public/` |

---

## Brand Colors

```css
--fir-teal: #00e5a9;      /* Primary - headlines, links, accents */
--fir-dark: #16393F;      /* Secondary - dark backgrounds */
--fir-navy: #213246;      /* Alternative dark */
--fir-bg-light: #F7FAF2;  /* Light mode background */
```

---

## Key Files

| File | Purpose |
|------|---------|
| `hugo.toml` | Site config, navigation menus, theme settings |
| `static/css/custom.css` | Brand styling, hero sections, cards |
| `layouts/partials/head/head.html` | Injects custom CSS into theme |
| `content/_index.md` | Homepage |
| `content/partners.md` | Partners page with logo cards |
| `content/intel/` | FIR Risk INTEL posts |
| `content/tuesday/` | FIR Risk Tuesday newsletters |
| `static/images/partners/` | Partner logo files |
| `static/img/logo.png` | FIR Risk logo |

---

## Critical: Hinode Theme Requirements

### All headings need ID attributes

The Hinode theme **requires ID attributes** on all headings for table-of-contents processing. Without them, the build fails.

**Wrong** (will error):
```html
<h2>Become a Partner</h2>
```

**Correct**:
```html
<h2 id="become-a-partner">Become a Partner</h2>
```

Markdown headings (`## Heading`) automatically get IDs. Only HTML `<h2>`, `<h3>` tags need manual IDs.

---

## Styling Patterns

### Hero Sections
Use the `.hero-section` class for gradient background treatment:
```html
<div class="hero-section text-center py-4 mb-4">
  <h1 id="headline" class="display-5 fw-bold mb-3">Headline Here</h1>
  <p class="lead">Subtext here</p>
</div>
```

### Cards (for offerings, partners, etc.)
```html
<div class="row g-4">
  <div class="col-md-6">
    <div class="card h-100 p-4">
      <h3 id="card-title" class="h5">Card Title</h3>
      <p>Description</p>
      <a href="/link/" class="fw-semibold">Learn More →</a>
    </div>
  </div>
</div>
```

### Section Spacing
Use padding classes instead of `---` horizontal rules:
- `py-4` - standard section padding
- `py-5` - larger section padding
- `mb-4` - bottom margin

---

## Logo Handling

### FIR Risk Logo
- Located at `static/img/logo.png` and `assets/img/logo.png`
- Dark mode: Gets white background via CSS (see custom.css)
- Size: 80px height in navbar

### Partner Logos
- Located in `static/images/partners/`
- Standard size: `max-height: 60px`
- For logos with whitespace issues, use `mix-blend-mode: multiply`
- Current partner logos:
  - `fastrics_Logo_w_Text_300dpi.avif`
  - `raxis_logo_neg-300x199-1.webp`
  - `pondurance_clear.png` (55px, left-aligned, mix-blend-mode)
  - `altum-logo-retina.png`

---

## Navigation Menu

Defined in `hugo.toml` under `[menu]`:
- Platform (weight 1)
- Solutions (weight 2)
- Intelligence (weight 3)
- Partners (weight 4)
- About (weight 5)
- Contact (weight 6)

Footer menu: Privacy Policy, Contact

---

## Common Tasks

### Start Dev Server
```bash
cd /Users/stikman/Projects/ai-assistant/fir-risk-website
hugo server
```

### Kill Stuck Hugo Server
```bash
pkill -9 -f "hugo"
```

### Build for Production
```bash
hugo --minify
```

---

## Content Types

### FIR Risk Tuesday (Newsletters)
- Location: `content/tuesday/`
- Naming: `e##-slug.md` (e.g., `e77-wiz-ciso-budget-survey.md`)
- Front matter: title, date, description, image

### FIR Risk INTEL
- Location: `content/intel/`
- Naming: `intel-#-slug.md`
- Types: THREAT ALERT, VULNERABILITY, SECTOR ALERT, TECHNIQUE, REGULATORY, TREND, FILING INTEL

---

## Deployment (Planned)

1. Connect `fir-risk-website` repo to Cloudflare Pages
2. Build command: `hugo --minify`
3. Output directory: `public`
4. Domain: firrisk.ai
5. Contact form: Cloudflare Pages Functions (not Formspree)

---

## Known Issues & Fixes

| Issue | Solution |
|-------|----------|
| "heading does not have ID attribute" error | Add `id="slug"` to HTML headings |
| Logo invisible in dark mode | CSS adds white background behind logo |
| Partner logo looks like sticker | Use `mix-blend-mode: multiply` |
| Can't scroll to top of hero | Add `margin-top: 2.5rem` to `.hero-section` |
| Site down after changes | Kill Hugo server and restart: `pkill -9 -f hugo && hugo server` |

---

## Related Repos

| Repo | Purpose |
|------|---------|
| `fir-risk-platform` | Main FIR Risk Platform application |
| `fir-risk-intelligence` | Public prompts, methodology, newsletter content |
| `fir-risk-website` | This repo - marketing website |

---

## Session Notes

**Last Updated**: 2025-02-03

**Recent Work**:
- Enhanced hero section with gradient styling
- Replaced horizontal dividers with card-based layouts
- Added Partners to main navigation
- Partner logos integrated with proper sizing/alignment
- Fixed scroll issue with hero top margin
- All pages use consistent hero-section treatment
