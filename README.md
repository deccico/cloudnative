# cloud-native.ai — landing page

A fast, accessible, static landing page for the cloud-native.ai community.

## Local dev

Just open `index.html` in your browser. No build steps required.

If you want to serve locally with a simple HTTP server:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

## Updating events

Edit `data/events.json` and add entries like:

```json
[
  {
    "title": "Cloud Native AI",
    "start": "2025-11-12T18:00:00+11:00",
    "end": "2025-11-12T20:30:00+11:00",
    "location": "Sydney CBD",
    "mode": "In person",
    "summary": "Talks + demos on Cloud Native Technologies and AI",
    "url": "https://www.meetup.com/cloud-native-ai/"
  }
]
```

Commit and redeploy — the homepage will render the cards automatically.

## Deployment

- **Vercel / Netlify / Cloudflare Pages**: Drag‑and‑drop the folder or connect your repo; set the site root to the folder containing `index.html`.
- **GitHub Pages**: Push to a `gh-pages` branch or enable Pages for the repo.
- **Custom domain**: Point `cloud-native.ai` DNS (A/AAAA or CNAME) to your host and enable HTTPS.

## Customization

- Replace `/assets/logo.svg` and `/assets/og-image.png` with your branding.
- Update `<meta>` description in `index.html` for SEO.
- Modify color tokens in `style.css` to match your palette.

## Analytics (optional)

Add your preferred lightweight analytics (e.g., Plausible, Fathom) snippet before `</head>`.

## License

MIT — do whatever you like. Please keep community friendly.
