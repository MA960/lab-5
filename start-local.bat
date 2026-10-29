@echo off
set "ROOT=%~dp0"
cd /d "%ROOT%"

where node >nul 2>nul
if %errorlevel%==0 (
  echo Starting Mubeen Amir Backend Portfolio Hub on http://127.0.0.1:3000
  start "Mubeen Amir Portfolio" http://127.0.0.1:3000/
  node server.js
  exit /b
)

where py >nul 2>nul
if %errorlevel%==0 (
  echo Node.js was not found. Starting static local mode on http://127.0.0.1:8000
  start "Mubeen Amir Portfolio" http://127.0.0.1:8000/
  py -m http.server 8000
  exit /b
)

where python >nul 2>nul
if %errorlevel%==0 (
  echo Node.js was not found. Starting static local mode on http://127.0.0.1:8000
  start "Mubeen Amir Portfolio" http://127.0.0.1:8000/
  python -m http.server 8000
  exit /b
)

echo Could not find Node.js or Python.
echo You can still double-click index.html to open the static portfolio.
pause
