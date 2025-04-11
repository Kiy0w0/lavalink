#!/bin/bash

# Lavalink Server Startup Script
# This script starts Lavalink with optimized JVM settings

# Java executable path - change if needed
JAVA_PATH="java"

# Set the Lavalink JAR file name
LAVALINK_JAR="Lavalink.jar"

# Check if Java is installed
if ! command -v $JAVA_PATH &> /dev/null; then
    echo "Java could not be found. Please install Java 17 or newer."
    exit 1
fi

# Check Java version
JAVA_VERSION=$($JAVA_PATH -version 2>&1 | awk -F '"' '/version/ {print $2}' | awk -F. '{print $1}')
if [ "$JAVA_VERSION" -lt 17 ]; then
    echo "Java version detected: $JAVA_VERSION"
    echo "Lavalink requires Java 17 or newer. Please update your Java installation."
    exit 1
fi

# Check if the Lavalink JAR exists
if [ ! -f "$LAVALINK_JAR" ]; then
    echo "Lavalink JAR file not found: $LAVALINK_JAR"
    echo "Please download the latest Lavalink JAR from: https://github.com/lavalink-devs/Lavalink/releases"
    exit 1
fi

# Check if application.yml exists
if [ ! -f "application.yml" ]; then
    echo "application.yml not found!"
    echo "Please create an application.yml configuration file in the same directory."
    exit 1
fi

# JVM options
JVM_OPTIONS=(
    # Memory settings
    "-Xmx1G" # Max heap size (adjust based on your server memory)
    "-Xms1G" # Initial heap size

    # Garbage collection settings for better performance
    "-XX:+UseG1GC"
    "-XX:+ParallelRefProcEnabled"
    "-XX:+DisableExplicitGC"
    "-XX:+AlwaysPreTouch"
    "-XX:MaxGCPauseMillis=200"
    "-XX:G1NewSizePercent=30"
    "-XX:G1MaxNewSizePercent=40"
    "-XX:G1HeapRegionSize=8M"
    "-XX:G1ReservePercent=20"
    "-XX:G1HeapWastePercent=5"
    "-XX:G1MixedGCCountTarget=4"
    "-XX:InitiatingHeapOccupancyPercent=15"
    "-XX:G1MixedGCLiveThresholdPercent=90"
    "-XX:G1RSetUpdatingPauseTimePercent=5"
    
    # Other JVM settings
    "-Dcom.sun.management.jmxremote"
    "-Djdk.tls.rejectClientInitiatedRenegotiation=true"
    "-XX:+CrashOnOutOfMemoryError"
    
    # Set timezone to UTC
    "-Duser.timezone=UTC"
)

echo "Starting Lavalink server..."
echo "Java version: $($JAVA_PATH -version 2>&1 | head -n 1)"
echo ""

# Create logs directory if it doesn't exist
mkdir -p logs

# Start Lavalink with the configured JVM options
$JAVA_PATH "${JVM_OPTIONS[@]}" -jar "$LAVALINK_JAR" 