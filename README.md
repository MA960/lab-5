# Mubeen Amir — Backend Portfolio Hub

A dependency-free backend-oriented portfolio hub for Mubeen Amir. The project runs locally with `npm start` and is also configured for Vercel.

## Vercel

Import this folder as a Vercel project. Use the project root as the Root Directory. The included `vercel.json` sets the static output directory to the project root and preserves the portfolio variant URLs. No build step is required. Vercel will detect the native functions in `api/` and expose `/api/status` and `/api/profile`.

## Local after extracting the zip

On Windows, double-click `start-local.bat`. On macOS or Linux, run `start-local.sh`. The launcher opens the hub in your browser and starts the full local Node server when Node.js is installed. If Node.js is not available but Python is installed, it falls back to static local mode.

You can also double-click `index.html` directly. The hub and all three portfolio variants use relative local paths, so they open from the extracted folder without Git, npm, or a server. Direct file mode shows a local static status instead of trying to call the API.

For manual server mode, run `npm start` and open `http://localhost:3000`. The local server serves the same frontend and API routes for Preview-style testing.

## Included work

- `/` — backend-oriented portfolio hub
- `/website-1-scrollable/` — single-page landing variant
- `/website-2-noscroll/` — 100vh dashboard variant
- `/website-3-multipage/` — multi-page architecture variant
- `/api/status` and `/api/profile` — lightweight profile/status endpoints
