# Mubeen Amir — Backend Portfolio Hub

## Product direction

Turn the supplied Web Technologies Lab Assignment 5 launchpad into a polished backend-engineering portfolio hub. The landing page should feel like a compact API operations console, not a generic personal portfolio or SaaS template. It needs to surface Mubeen Amir's actual profile: BSCS undergraduate at Qarshi University, Lahore; Java and Spring Boot backend developer; REST APIs; PostgreSQL; JPA; DTOs; validation; authentication; layered controller/service/repository architecture; public GitHub, email, and Upwork links. It must keep the three supplied portfolio variants available as clearly differentiated release artifacts.

## Design exploration

- **Observability console** — a dark, typographic backend control surface with lime telemetry and dense metadata. Probability: 0.07.
- **Editorial engineering dossier** — a warm paper-like case study with monospace annotations and restrained technical diagrams. Probability: 0.05.
- **Swiss systems index** — a white and cobalt information architecture with oversized type and strict rules. Probability: 0.03.

### Chosen: Observability console

- **Design Movement:** Modern observability dashboards and command-line interfaces, filtered through editorial Swiss spacing instead of gaming UI or neon cyberpunk.
- **Core Principles:** Make proof visible; use hierarchy instead of decoration; favor short, concrete copy; make every link feel like an action in a system.
- **Color Philosophy:** Near-black graphite establishes a technical workspace. Warm off-white makes reading calm. A single acid-lime accent signals healthy systems and active states without looking like a template accent.
- **Layout Paradigm:** A persistent left rail anchors identity and navigation while the content area behaves like a sequence of operational panels. The hero uses a split “system overview / signal” composition, then shifts into a dense registry and release log.
- **Signature Elements:** Lime health dots and hairline measurement rules; monospaced route and stack labels; oversized numeric system stats paired with small, precise annotations.
- **Interaction Philosophy:** Interactions should answer “what happens next?” Every release card has a clear launch action. Tabs, copy-to-clipboard, and the command strip provide tactile utility rather than gratuitous motion.
- **Animation:** Use short 160–240ms ease-out transitions. Stagger panel entrance only once on load. Add a quiet pulse to the health dot and an animated terminal cursor in the command strip; avoid looping hero effects and parallax.
- **Typography System:** Use IBM Plex Sans for UI and body text with IBM Plex Mono for technical labels, routes, status, and stats. Large headings use tight tracking and high contrast. Sentence case is preferred; uppercase is reserved for metadata.
- **Brand Essence:** A backend-first developer profile that makes system thinking legible before the client even opens a project. Personality: precise, composed, quietly ambitious.
- **Brand Voice:** Headlines should be direct and technical without overclaiming. Example lines: “Backend systems, made legible.” and “Three interfaces. One engineering thread.”
- **Wordmark & Logo:** A compact `MA/` monogram inside a squared signal frame, paired with a small `backend index` label.
- **Signature Brand Color:** Signal lime `#c8f04a`, used only for health, primary actions, and active state.

## Implementation approach

Use a dependency-free Node HTTP server and a static frontend so the experience remains cheap to run and easy to understand. The server serves the static application plus a tiny `/api/status` endpoint that returns the profile's visible system status and a `/api/profile` endpoint for future expansion. No database is needed for this assignment; the managed server capability is enabled, but data remains deterministic and frontend-safe. The page progressively enhances from embedded data and refreshes its status badge from the local API when available.

The landing page will be a single responsive route with these regions:

1. Persistent brand rail with identity, availability, navigation anchors, and compact contact actions.
2. System overview hero with a proof-oriented headline, profile metadata, capability list, and a live status panel.
3. Engineering signal row with rate, public builds, and core stack metrics.
4. Portfolio release registry preserving the three supplied site variants with distinct tags, descriptions, and launch links.
5. Backend architecture panel with layered flow and visible API route snippets.
6. Footer with direct contact and Upwork/GitHub links.

The supplied `website-1-scrollable`, `website-2-noscroll`, and `website-3-multipage` directories will be copied into the managed project unchanged except for any asset path adjustments needed to keep them launchable. The original avatar will be reused as a small identity asset, with no generated imagery or heavy libraries.

## Project structure

- `server.js` — dependency-free HTTP server, static file handling, and lightweight profile/status endpoints.
- `index.html` — backend-oriented portfolio hub shell and content.
- `style.css` — complete responsive visual system for the landing page.
- `app.js` — progressive enhancement: nav state, status refresh, clipboard action, release filters, and motion safety.
- `public/manus-routes.json` — route manifest for the landing page and launchable variants.
- `public/avatar.png` — supplied profile image.
- `website-1-scrollable/` — supplied variant 1.
- `website-2-noscroll/` — supplied variant 2.
- `website-3-multipage/` — supplied variant 3.
- `certs/` — supplied certification PDFs retained for future linking.
- `app.config.ts` — project metadata with the uploaded identity asset as the logo URL.
- `plan.md` / `TODO.md` — implementation decisions and outcome tracking.

## Serving and runtime

Run `node server.js` on port `3000` (or the `PORT` environment value). The server binds to `0.0.0.0` for managed Preview compatibility. The app has no login or cookies, no secret values, no external API dependency, and no client-side build step. The route manifest lists only the actual page routes; assets and API endpoints are excluded.
