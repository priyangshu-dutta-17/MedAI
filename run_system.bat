@echo off
title AI Medical System Launcher
echo ===================================================
echo   Starting AI Medical System (Backend + Frontend)
echo ===================================================
start "AI Medical Backend" cmd /k "%~dp0start_backend.bat"
timeout /t 3 /nobreak >nul
start "AI Medical Frontend" cmd /k "%~dp0start_frontend.bat"
echo.
echo Both services are starting!
echo Backend will be at: http://localhost:5000/api/health
echo Frontend will be at: http://localhost:4200
echo.
pause