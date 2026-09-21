@echo off
setlocal
cd /d "%~dp0"
set "MSG=%*"
if "%MSG%"=="" set "MSG=Aktualisierung Einkaufswoche"
echo.
echo   Veroeffentliche nach GitHub Pages: %MSG%
echo.
git add -A
git commit -m "%MSG%"
git push
echo.
echo   Fertig. In etwa einer Minute ist die Seite aktualisiert:
echo   https://mschutting78.github.io/menu/
echo.
pause
