@echo off
title Lavalink Server
color 0a

REM Lavalink Server Startup Script for Windows
REM This script starts Lavalink with optimized JVM settings

REM Set Lavalink JAR name
set LAVALINK_JAR=Lavalink.jar

REM Checking if Java is installed
where java >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo Java could not be found. Please install Java 17 or newer.
    pause
    exit /b 1
)

REM Check Java version
for /f tokens^=3^ delims^=.^" %%a in ('java -version 2^>^&1 ^| findstr /i "version"') do (
    set JAVA_VERSION=%%a
)

if %JAVA_VERSION% LSS 17 (
    echo Java version detected: %JAVA_VERSION%
    echo Lavalink requires Java 17 or newer. Please update your Java installation.
    pause
    exit /b 1
)

REM Check if the Lavalink JAR exists
if not exist "%LAVALINK_JAR%" (
    echo Lavalink JAR file not found: %LAVALINK_JAR%
    echo Please download the latest Lavalink JAR from: https://github.com/lavalink-devs/Lavalink/releases
    pause
    exit /b 1
)

REM Check if application.yml exists
if not exist "application.yml" (
    echo application.yml not found!
    echo Please create an application.yml configuration file in the same directory.
    pause
    exit /b 1
)

REM JVM options
set JVM_OPTIONS=-Xmx1G -Xms1G ^
-XX:+UseG1GC ^
-XX:+ParallelRefProcEnabled ^
-XX:+DisableExplicitGC ^
-XX:+AlwaysPreTouch ^
-XX:MaxGCPauseMillis=200 ^
-XX:G1NewSizePercent=30 ^
-XX:G1MaxNewSizePercent=40 ^
-XX:G1HeapRegionSize=8M ^
-XX:G1ReservePercent=20 ^
-XX:G1HeapWastePercent=5 ^
-XX:G1MixedGCCountTarget=4 ^
-XX:InitiatingHeapOccupancyPercent=15 ^
-XX:G1MixedGCLiveThresholdPercent=90 ^
-XX:G1RSetUpdatingPauseTimePercent=5 ^
-Dcom.sun.management.jmxremote ^
-Djdk.tls.rejectClientInitiatedRenegotiation=true ^
-XX:+CrashOnOutOfMemoryError ^
-Duser.timezone=UTC

echo Starting Lavalink server...
echo Java version:
java -version
echo.

REM Create logs directory if it doesn't exist
if not exist "logs" mkdir logs

REM Start Lavalink with the configured JVM options
java %JVM_OPTIONS% -jar %LAVALINK_JAR%

pause 