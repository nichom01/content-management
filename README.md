# Neversoft CMS

A static site built with Hugo, serving as a content management system and documentation site for the Neversoft Supplier Management System.

## Overview

This is a Hugo-based static website that hosts documentation and content related to the Neversoft Supplier Management System. The site uses the **Monochrome** theme, providing a clean, responsive, and programmer-friendly interface.

## Tech Stack

### Core Technologies

- **Hugo** - Static site generator (v0.146.0+)
  - Fast, flexible static site generator written in Go
  - Generates HTML from Markdown content
  - No runtime dependencies required

- **Monochrome Theme** - Hugo theme
  - Clean UI with minimal resources (~5KB gzipped CSS)
  - Responsive layout (desktop to mobile)
  - Light/dark mode support
  - Multiple layout options (balloon, bookcase, gallery, list, postcard)
  - Syntax highlighting with Prism.js
  - Site search with uFuzzy
  - MathJax support for mathematical notation
  - SEO-friendly

### Supporting Technologies

- **Markdown** - Content format (`.md` files)
- **TOML** - Configuration format (`hugo.toml`)
- **SCSS** - Styling (compiled by Hugo)
- **JavaScript** - Interactive features (Prism.js, uFuzzy, MathJax, Zooming)

## Project Structure

```
cms/
├── archetypes/          # Content templates
├── assets/             # Asset files (JS config)
├── content/            # Site content (Markdown files)
│   ├── about.md
│   ├── functional-specification.md
│   └── system-description.md
├── data/               # Data files (YAML, JSON, TOML)
├── hugo.toml          # Main configuration file
├── i18n/              # Internationalization files
├── layouts/           # Custom layout overrides
├── public/            # Generated static site (output)
├── resources/         # Generated resources cache
├── static/            # Static files (images, CSS, JS)
└── themes/            # Hugo themes
    └── hugo-theme-monochrome/
```

## Prerequisites

- **Hugo Extended** (v0.146.0 or higher)
  - Required for SCSS compilation
  - Download from: https://gohugo.io/installation/

### Installing Hugo

**macOS (Homebrew):**
```bash
brew install hugo
```

**Linux:**
```bash
# Check Hugo website for latest installation instructions
```

**Windows:**
- Download from: https://github.com/gohugoio/hugo/releases
- Or use Chocolatey: `choco install hugo-extended`

**Verify installation:**
```bash
hugo version
```

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd cms
```

### 2. Run Development Server

```bash
hugo server
```

The site will be available at `http://localhost:1313`

**With drafts and future posts:**
```bash
hugo server -D
```

**With live reload (watch for changes):**
```bash
hugo server --watch
```

### 3. Build for Production

```bash
hugo
```

This generates the static site in the `public/` directory.

**Build with drafts:**
```bash
hugo -D
```

**Build with verbose output:**
```bash
hugo -v
```

## Configuration

### Main Configuration (`hugo.toml`)

```toml
baseURL = 'https://example.org/'
languageCode = 'en-us'
title = 'Neversoft'
theme = "hugo-theme-monochrome"
```

### Theme Configuration

The Monochrome theme supports extensive configuration. See the theme documentation:
- [Theme Demo & Docs](https://kaiiiz.github.io/hugo-theme-monochrome)
- [Configuration Guide](https://kaiiiz.github.io/hugo-theme-monochrome/configuration/)

## Content Management

### Creating New Content

**Using Hugo archetype:**
```bash
hugo new posts/my-new-post.md
```

**Manual creation:**
Create a new `.md` file in the `content/` directory with front matter:

```markdown
+++
date = '2025-01-15T10:30:00Z'
title = 'My New Page'
+++

Your content here...
```

### Content Front Matter

Front matter can be in TOML (`+++`), YAML (`---`), or JSON format:

```toml
+++
date = '2025-01-15T10:30:00Z'
title = 'Page Title'
draft = false
tags = ['tag1', 'tag2']
categories = ['category1']
+++
```

### Content Organization

- **Pages**: Direct `.md` files in `content/`
- **Sections**: Subdirectories in `content/` (e.g., `content/posts/`)
- **Taxonomies**: Tags and categories are automatically generated

## Customization

### Overriding Theme Layouts

Create files in `layouts/` to override theme templates:
- `layouts/_default/single.html` - Single page template
- `layouts/_default/list.html` - List page template
- `layouts/_partials/` - Reusable partials

### Custom Styles

Add custom CSS in:
- `static/css/custom.css` - Will be included automatically
- Or override theme SCSS variables

### Custom JavaScript

Add custom JS files in:
- `static/js/` - Will be included in the build

## Deployment

### Static Hosting Options

**Netlify:**
1. Connect repository to Netlify
2. Build command: `hugo`
3. Publish directory: `public`

**GitHub Pages:**
1. Build the site: `hugo`
2. Push `public/` directory to `gh-pages` branch
3. Configure GitHub Pages to serve from `gh-pages` branch

**Vercel:**
1. Connect repository
2. Build command: `hugo`
3. Output directory: `public`

**Manual Deployment:**
```bash
hugo
# Upload contents of public/ to your web server
```

## Development Workflow

1. **Edit content** in `content/` directory
2. **Run dev server**: `hugo server`
3. **Preview changes** at `http://localhost:1313`
4. **Build for production**: `hugo`
5. **Deploy** the `public/` directory

## Theme Features

### Layouts
- **List** - Standard blog/list layout
- **Balloon** - Card-based layout
- **Bookcase** - Book-style layout
- **Gallery** - Image gallery layout
- **Postcard** - Postcard-style layout

### Shortcodes

The theme includes useful shortcodes:
- `{{< icon >}}` - Display icons
- `{{< color-block >}}` - Colored content blocks
- `{{< breadcrumbs >}}` - Navigation breadcrumbs
- `{{< terms-cloud >}}` - Tag/category cloud

See [Theme Shortcodes Documentation](https://kaiiiz.github.io/hugo-theme-monochrome/shortcodes/)

## Troubleshooting

### Common Issues

**Hugo version too old:**
```bash
# Update Hugo
brew upgrade hugo  # macOS
# Or download latest from https://gohugo.io/installation/
```

**Theme not found:**
```bash
# Ensure theme is in themes/hugo-theme-monochrome/
# Or use as Git submodule:
git submodule add https://github.com/kaiiiz/hugo-theme-monochrome themes/hugo-theme-monochrome
```

**SCSS not compiling:**
- Ensure you have Hugo Extended (not just Hugo)
- Check Hugo version: `hugo version` (should show "extended")

**Changes not appearing:**
- Clear cache: `hugo --cleanDestinationDir`
- Restart dev server
- Check for build errors

## Resources

- [Hugo Documentation](https://gohugo.io/documentation/)
- [Monochrome Theme](https://github.com/kaiiiz/hugo-theme-monochrome)
- [Theme Demo & Docs](https://kaiiiz.github.io/hugo-theme-monochrome)
- [Hugo Quick Start Guide](https://gohugo.io/getting-started/quick-start/)

## License

This project uses the Monochrome theme, which is licensed under MIT.

## Contributing

1. Make changes to content in `content/`
2. Test locally with `hugo server`
3. Build and verify: `hugo`
4. Commit and push changes

---

**Note**: This site documents the Neversoft Supplier Management System. For system specifications, see:
- [Functional Specification](./content/functional-specification.md)
- [System Description](./content/system-description.md)

