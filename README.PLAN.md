# Plan: game-based build filtering

This file is the **project plan** for how PC builds are chosen on this site. Keep it updated when behavior or scope changes; it is the reference for *why* the UI and data are shaped this way.

## Goal

Visitors select the games they care about. The site lists only PC builds whose data includes **every** selected game (performance entries under `build.games`). If no games are selected, **all** builds are shown.

## Stack

**Vanilla JavaScript only** — no React, Vue, Svelte, Angular, or similar UI frameworks. Use the browser’s DOM APIs and plain scripts (e.g. `<script src="...">`). This keeps the project small and makes behavior easy to trace while learning.

## Data and code

| Piece | Role |
|--------|------|
| [`builds.js`](builds.js) | Source of truth: each build has a `games` object keyed by title. |
| [`index.html`](index.html) | Filter section + mount point for cards. |
| [`app.js`](app.js) | Derives checkbox labels from all builds, filters, and renders cards. |
| [`styles.css`](styles.css) | Layout for the filter panel and empty state. |

## Behavior (current)

- Checkboxes are built from the union of game names across all builds (sorted).
- **Filter rule:** a build is shown only if it has an entry for each checked game. No checks → show every build.
- **Empty result:** if the user checks a combination no build satisfies, a short message is shown instead of cards.

## Optional extensions (not implemented yet)

- Resolution dropdown and highlighting FPS for that resolution only.
- Sort filtered builds by price or by minimum FPS across selected games.

## Related

The main [`README.md`](README.md) describes the repo; this document is specifically the **plan** for the game-driven build list.
