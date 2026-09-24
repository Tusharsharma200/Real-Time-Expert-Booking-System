@echo off
title Real-Time Expert Session Booking System
echo ==============================================================================
echo REAL-TIME EXPERT SESSION BOOKING SYSTEM
echo Starting local web server...
echo ==============================================================================
echo.

:: Start the SPA python server in the background
start /B python "%~dp0server.py"

:: Wait 1 second for the server to bind
timeout /t 1 /nobreak >nul

:: Launch browser to http://localhost:3000
start "" "http://localhost:3000"

echo.
echo Website running at: http://localhost:3000
echo.
echo Core Pages:
echo  [1] Home Landing:     http://localhost:3000/
echo  [2] Search Providers: http://localhost:3000/search
echo  [3] Expert Profile:   http://localhost:3000/hub/exp-1
echo  [4] User Dashboard:   http://localhost:3000/dashboard
echo.
echo (Keep this window open while viewing the website)
echo Press any key to stop when finished.
pause >nul
taskkill /F /IM python.exe /T 2>nul
