# Smart Travel Planner: project website (R26-IT-155)

The public website for the SLIIT final-year research project **"Smart Travel
Planner: Personalization and Operational Efficiency for Tourists"** (project
R26-IT-155, 2026, AIMS research group, B.Sc. (Hons) in Information Technology,
supervised by Prof. Dasuni Nawinna).

It presents the research problem, the system that was built, and each of the
three component services: method, results and stated limitations. This
repository holds the website only. The implementation lives in a separate
monorepo.

## Pages

| File | Page | Component owner |
|---|---|---|
| `index.html` | Home: problem, research gap, objectives, architecture, registry | the team |
| `recommendation.html` | Preference modelling and recommendation | Shazni M.S.M. (IT22915368) |
| `transport.html` | Transport recommendation | Haifa M.A.F. (IT22211064) |
| `budget.html` | Budget–experience decision intelligence | Vithanage D. D. H. L. J (IT22369406) |

## Run it locally

There is no build step. From this folder:

```sh
python -m http.server 5500
```

Then open <http://localhost:5500>. Opening `index.html` directly in a browser
also works.

## Structure

```
index.html, recommendation.html, transport.html, budget.html
assets/css/styles.css   design system: tokens, grid, type scale, components
assets/js/main.js       nav active state and mobile menu toggle
assets/img/             images (none yet)
VERIFICATION.md         open questions for each component owner (team only)
```

`_reference/` is git-ignored build input: the content brief the pages were
written from. It is not published.

## Constraints

- Plain HTML, CSS and vanilla JavaScript. No frameworks, bundlers or npm.
- No network requests at runtime: no webfonts, CDNs or map tiles. Text uses
  the system font stack.
- No browser storage.
- The repository stays under 20 MB.

## Design system

The palette is taken from the product's own stylesheet, so the website
matches the system it describes. Colours are declared once, by role, as
custom properties on `:root` in `assets/css/styles.css`.

| Token | Hex | Role |
|---|---|---|
| `--mist` | `#DCE7E1` | tinted surfaces |
| `--sage` | `#8FAF9B` | borders, secondary marks |
| `--mint` | `#4FD1C0` | the one accent, active states |
| `--pine` | `#2F6F62` | links, eyebrow labels |
| `--forest` | `#1E3D34` | headings, solid buttons |
| `--charcoal` | `#1A2622` | body text, header and footer ground |

All text meets WCAG AA. Mint and Sage fail AA against white, so on light
surfaces they are used only for borders and decorative rules. Mint is used as
text only on the dark header, footer and key callouts. Pine teal is not used
for text on Mist; there, links and labels switch to Deep forest.

Main classes: `.container`, `.grid` with `.span-*`, `.section`,
`.section--tint`, `.eyebrow`, `.lead`, `.card`, `.card--link`, `.stat`,
`.table` inside `.table-wrap` (`.table--wide` to scroll on phones),
`.callout` (stated limitations), `.callout--key` (one decisive finding per
page), `.pullquote`, `.code`, `.stages` and `.rule-list`.

## Writing conventions

- Oxford spelling: British, with -ize endings (personalization, optimizer).
- "Tourist" for the person planning the trip. "User" appears only in
  technical evaluation terms such as `split_user`.
- Every figure comes from the content brief. Null and weak results are
  reported alongside the positive ones.
