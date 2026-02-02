# FIR Risk Advisory Website

Hugo-based website for [firriskadvisory.com](https://firriskadvisory.com), deployed via Cloudflare Pages.

## Quick Start

```bash
# Install Hugo (macOS)
brew install hugo

# Run locally
hugo server -D

# Build for production
hugo --minify
```

## Structure

```
content/
├── _index.md           # Homepage
├── platform.md         # FIR Risk Platform page
├── solutions.md        # AI & Data Solutions page
├── about.md            # Founder background
├── contact.md          # Contact form
├── intel/              # FIR Risk INTEL posts
│   └── _index.md
└── tuesday/            # FIR Risk Tuesday newsletters
    └── _index.md
```

## Content Workflow

### Publishing INTEL Posts

1. Create new file: `content/intel/intel-XX.md`
2. Add frontmatter (title, date, type, summary)
3. Write content in Markdown
4. Commit and push — auto-deploys to Cloudflare

### Publishing Tuesday Newsletters

1. Create new file: `content/tuesday/eXX.md`
2. Add frontmatter
3. Commit and push

## Deployment

- **Hosting**: Cloudflare Pages
- **Build command**: `hugo --minify`
- **Output directory**: `public`
- **Branch**: `main`

Pushes to `main` trigger automatic deployment.

## Related Repositories

- [fir-risk-platform](https://github.com/stikman28/fir-risk-platform) — FIR Risk Platform (AI application)
- [fir-risk-intelligence](https://github.com/stikman28/fir-risk-intelligence) — Public prompts, methodology, INTEL content
