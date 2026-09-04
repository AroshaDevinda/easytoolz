@echo off
title Push EasyToolz to GitHub
cd /d "c:\Users\USER\Documents\New folder (2)\easytoolz"
echo ===================================================
echo   Syncing and Pushing EasyToolz to GitHub...
echo ===================================================
echo.
git add -A
git commit -m "Site update" 2>nul
git push origin main
if errorlevel 1 (
    echo.
    echo Remote has newer commits. Force syncing...
    git push --force origin main
)
echo.
echo ===================================================
echo   Done! Your website will update in about 1 minute.
echo ===================================================
pause
