#!/usr/bin/env bash
set -e
ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"

open_url() {
  url="$1"
  if command -v xdg-open >/dev/null 2>&1; then
    (sleep 1; xdg-open "$url" >/dev/null 2>&1) &
  elif command -v open >/dev/null 2>&1; then
    (sleep 1; open "$url") &
  else
    echo "Open $url in your browser."
  fi
}

if command -v node >/dev/null 2>&1; then
  echo "Starting Mubeen Amir Backend Portfolio Hub on http://127.0.0.1:3000"
  open_url "http://127.0.0.1:3000/"
  exec node server.js
fi

if command -v python3 >/dev/null 2>&1; then
  echo "Node.js was not found. Starting static local mode on http://127.0.0.1:8000"
  open_url "http://127.0.0.1:8000/"
  exec python3 -m http.server 8000
fi

echo "Could not find Node.js or Python. Double-click index.html to open static mode."
