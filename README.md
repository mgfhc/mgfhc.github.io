# HiT4EMR — Maple Grove Public Project Showcase

Static public-facing microsite for the COMP 4090 HiT4EMR project, built around the fictitious Maple Grove Family Health Centre clinic scenario in Toronto, Ontario.

The shared project environment used OpenEMR 7.0.2 on AWS.

## Run locally
No build step is required. Open `index.html` directly, or serve the folder with any simple static web server.

For example:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Structure

- `index.html` — page content
- `styles.css` — site styling
- `script.js` — navigation, reveal behavior, and screenshot lightbox
- `assets/branding/` — local Maple Grove logo assets
- `assets/screenshots/` — curated public-facing screenshots
- `CONTENT_EVIDENCE.md` — internal source/evidence notes for copy accuracy
- `ASSET_TODO.md` — remaining publication checks and decisions

## Current site

The current version includes:

- Maple Grove branding
- a grouped clinical workflow journey
- technology and standards used in the project
- eight project workstreams
- FHIR `DiagnosticReport` evidence from Postman
- a mock lab workflow example
- a UI/UX spotlight showing Canadian patient-registration customization
- selected August 1 Go-Live screenshots
- click-to-enlarge screenshot lightboxes
- lessons learned and production-readiness limitations

Curated screenshots are used instead of raw evidence files so browser chrome, tokens, credentials, private links, and unrelated desktop content can be removed where needed.

## GitHub Pages

Planned public home:

- GitHub organization: `mgfhc`
- repository: `mgfhc.github.io`
- site: `https://mgfhc.github.io/`

The site is plain static HTML/CSS/JavaScript, so it can be published directly from the `main` branch root.

## Publication note
Maple Grove Family Health Centre is a fictitious educational clinic scenario. Patient information is synthetic or fictitious. This is not a production healthcare deployment or regulatory certification.
