# coldqubit · website (`web` branch)

This orphan branch holds the **coldqubit project-home** website, served by
GitHub Pages at <https://coldqubit.org>. It shares no history with `main`:
organisation management lives on `main`, the site lives here.

## Structure

```
index.html                  the project-home page (single surface, cyan-forward)
404.html                    branded not-found page
styles/
  styles.css                design-system entry point (fonts + tokens + components)
  fonts.css                 brand faces (IBM Plex Mono + Sans, Google Fonts)
  colors_and_type.css       token layer (color, type, spacing, radii, motion)
  components.css            canonical component classes
  site.css                  page-level styles for this surface only
js/site.js                  scroll-reveal navbar name
assets/                     ecosystem logomarks (SVG) + PNG favicons
.github/workflows/pages.yml deploy workflow (Pages in GitHub Actions mode)
```

`styles/{styles,fonts,colors_and_type,components}.css` are vendored verbatim
from the coldqubit design system. Do not edit them here; change the design
system and re-copy. Surface-specific rules belong in `styles/site.css`.

## Deploying

Push to `web`. The `deploy-pages` workflow uploads the branch root as the
Pages artifact and deploys it. No build step, no dependencies.

## Domain

`coldqubit.org` (apex), configured in the repository's Pages settings; DNS
points the apex A/AAAA records at GitHub Pages. The shotgate product site is
at <https://shotgate.coldqubit.org>.
