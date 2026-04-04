# Plan: game-based build filtering

This file is the **project plan** for how PC builds are chosen on this site. Keep it updated when behavior or scope changes; it is the reference for *why* the UI and data are shaped this way.

## Goal

The page is **dynamic**: the list of PC builds updates from the visitor’s choices.

**Inputs (all drive filtering):**

1. **Game(s)** — Which title(s) they care about (same idea as before: only builds that include every selected game in `build.games`).
2. **Resolution** — One target resolution, aligned with existing data keys: `1080p`, `1440p`, or `4K`.
3. **FPS** — A **minimum FPS** they want at that resolution (e.g. 60 or 120). A build qualifies only if, for **each** selected game, `build.games[game].performance[resolution]` is **greater than or equal to** that minimum.

**Presentation:** For each game row shown in a build card, show a **short video clip (MP4)** **above** the game name. This replaces the idea of a GIF: MP4 is the format; in HTML you use `<video>` (often `muted`, `loop`, and `playsinline` if you want GIF-like looping without sound). Keep file sizes small for a real product (short loops, reasonable bitrate).

**Incomplete criteria:** Decide explicitly in implementation (and document here when you ship): e.g. show all builds until game + resolution + min FPS are all set, **or** show an empty state / helper text until the form is complete. Default recommendation: **do not filter** until all three are chosen, then apply the rules above; avoids confusing partial results.

## Stack

The site is **vanilla front end only** — no compile step, no UI framework, no CSS preprocessor, no HTML templating layer. Ship what the browser loads: `.html`, `.css`, and `.js`.

- **Vanilla HTML** — Hand-written markup in static `.html` files. No JSX, Vue SFCs, or server-side templating for this project. Prefer semantic elements and meaningful structure (headings, `main`, labels tied to controls, etc.).
- **Vanilla CSS** — Hand-written stylesheets (e.g. a single `styles.css`). No Sass/Less, Tailwind, CSS-in-JS, or component libraries that own your layout. You can still aim for a polished, consistent UI; it is just expressed in plain CSS.
- **Vanilla JavaScript** — No React, Vue, Svelte, Angular, or similar. Use the DOM APIs and plain `<script>` tags (or a small second file like `app.js`). Logic should be easy to read and debug in the browser.

## Product mindset

The scope is small, but the **process** should match a real product: keep this plan and the main README accurate, name things clearly, handle obvious empty states, and treat accessibility (e.g. labels, focus, contrast) as part of shipping — not an afterthought.

## Data and code

| Piece | Role |
|--------|------|
| [`builds.js`](builds.js) | Source of truth: each build has a `games` object keyed by title, with `performance` per resolution. |
| **Game media (new)** | A **single map** (e.g. `gameClips` in its own small `.js` file or next to builds) from game title → MP4 URL/path. Avoid duplicating the same MP4 path on every build. |
| [`index.html`](index.html) | Controls: game selection, resolution, min FPS; mount point for build cards. |
| [`app.js`](app.js) | Read controls, filter `builds`, render cards (including `<video>` + game name + stats). |
| [`styles.css`](styles.css) | Filter controls, cards, video sizing (e.g. max-width, aspect ratio), empty states. |

### Data shape notes (video)

- Example field: `clipSrc: 'media/apex-legends.mp4'` on a shared object keyed by game name, **not** repeated inside every build unless you have a strong reason.
- Use relative paths so the site works when opened locally or on static hosting.

## Behavior (target)

- **Game list UI:** Still derived from the union of game names in `builds` (sorted), unless you later introduce a master game list.
- **Resolution UI:** `<select>` or radio group for `1080p` / `1440p` / `4K`.
- **FPS UI:** Number input or preset buttons (e.g. 60, 120, 144) mapped to a minimum FPS threshold.
- **Filter rule:** For each selected game, the build must have that game in `build.games`, and at the chosen resolution the FPS value must be **≥** the user’s minimum. If multiple games are selected, **all** must pass.
- **Incomplete inputs:** Per **Goal**, either no filter until all required fields are set, or a clear empty/helper state (pick one and keep it consistent).
- **Empty result:** No qualifying builds → short message; optional “relax FPS” or “try 1080p” hints.
- **Video:** Render `<video>` above the game name in each game row; include `alt`-equivalent context via visible text (game name) and avoid autoplay with sound. Respect **`prefers-reduced-motion`** where possible (e.g. pause video or show poster only).

## Optional extensions (not implemented yet)

- Sort filtered builds by price or by “headroom” above min FPS.
- “Best value” highlight or compare two builds side by side.
- Poster image for each clip (`poster` attribute) for faster perceived load.

## Related

The main [`README.md`](README.md) describes the repo; this document is specifically the **plan** for the game-driven build list.
