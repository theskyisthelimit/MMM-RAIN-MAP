/**
 * Demo configuration for MMM-RAIN-MAP module development
 * This config is used for testing the module in isolation
 *
 * Usage: node --run demo
 */

let config = {
  port: 8080,
  address: 'localhost',
  language: 'de',
  logLevel: ['INFO', 'LOG', 'WARN', 'ERROR'],
  timeFormat: 24,
  units: 'metric',

  modules: [
    {
      module: 'alert'
    },
    {
      module: 'clock',
      position: 'top_right',
      config: {
        timeFormat: 'HH:mm:ss'
      }
    },

    // Top Left: Berlin
    {
      module: 'MMM-RAIN-MAP',
      position: 'top_left',
      config: {
        animationSpeedMs: 400,
        colorScheme: 2,
        colorizeTime: true,
        defaultZoomLevel: 8,
        displayTime: true,
        displayTimeline: true,
        displayClockSymbol: true,
        displayHoursBeforeRain: -1,
        extraDelayLastFrameMs: 1000,
        extraDelayCurrentFrameMs: 3000,
        invertColors: false,
        markers: [
          { lat: 49.41, lng: 8.717, color: 'red' },
          { lat: 48.856, lng: 2.35, color: 'green' }
        ],
        mapPositions: [
          { lat: 49.41, lng: 8.717, zoom: 9, loops: 1 },
          { lat: 49.41, lng: 8.717, zoom: 6, loops: 2 },
          { lat: 48.856, lng: 2.35, zoom: 6, loops: 1 },
          { lat: 48.856, lng: 2.35, zoom: 9, loops: 2 },
          { lat: 49.15, lng: 6.154, zoom: 5, loops: 2 }
        ],
        mapUrl: 'https://a.tile.openstreetmap.de/{z}/{x}/{y}.png',
        mapHeight: '420px', // must be a pixel value (no percent)
        mapWidth: '420px', // must be a pixel value (no percent)
        maxHistoryFrames: -1,
        maxForecastFrames: -1,
        substitudeModules: [],
        updateIntervalInSeconds: 300
      }
    }
  ]
}

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {
  module.exports = config
}
