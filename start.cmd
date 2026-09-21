@echo off
setlocal
cd /d "%~dp0"
title Einkaufswochen - lokaler Server
echo.
echo   Startet den lokalen Webserver fuer diesen Ordner.
echo   Das Fenster offen lassen. Beenden mit Strg+C.
echo.

rem Browser kurz verzoegert oeffnen, damit der Server schon laeuft
start "" /min cmd /c "timeout /t 2 >nul & start """" http://localhost:8000"

where py >nul 2>&1
if %errorlevel%==0 (
  py -m http.server 8000 --bind 0.0.0.0
  goto ende
)

where python >nul 2>&1
if %errorlevel%==0 (
  python -m http.server 8000 --bind 0.0.0.0
  goto ende
)

echo   Kein Python gefunden - starte die PowerShell-Variante.
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0serve.ps1"

:ende
echo.
echo   Server beendet.
pause
