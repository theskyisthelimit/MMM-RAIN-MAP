# Changelog

All notable changes to this project will be documented in this file.

## [2.9.0] - 2023-11-16

### Added
- New configuration option `invertColors` for dark mode display

## [2.8.0] - 2023-11-12

### Fixed
- Transparent background while loading weather data overlays (#37)
- Improvements during map rendering

### Contributors
- [@KristjanESPERANTO](https://github.com/KristjanESPERANTO)

## [2.7.0] - 2022-09-03

### Added
- New option `displayHoursBeforeRain` to show map depending on forecast (#31, #32)
- Forecast-dependent content displaying

### Contributors
- [@JonathanSchostak](https://github.com/JonathanSchostak)

## [2.6.2] - 2022-04-02

### Changed
- Changed default tile server to German fork (old server blocked Electron requests)

## [2.5.0] - 2021-09-18

### Added
- New option to select different color schemes

## [2.4.1] - 2021-09-14

### Fixed
- Fixed lockString usage for MMM-Pages compatibility

## [2.4.0] - 2021-09-11

### Changed
- Internal refactoring of build process (no functional changes)

## [2.3.0] - 2021-08-31

### Added
- Option to specify number of history and forecast layers
- Substitute modules feature (show/hidden when `onlyShowOnRain` is enabled)

## [2.2.0] - 2021-08-25

### Added
- New timeline feature with configuration options

## [2.1.0] - 2021-08-24

### Added
- Support for 30-minute radar layer forecast

## [2.0.2] - 2021-08-23

### Fixed
- MMM-Pages compatibility - module now sets lock when hidden

## [2.0.1] - 2021-08-19

### Fixed
- Fixed `displayOnlyOnRain` feature

## [2.0.0] - 2021-08-18

### Changed
- Complete rewrite from scratch (100%)
- Much more lightweight and resource-efficient
- Redefined configuration (breaking change - old configs not compatible)

### Removed
- GoogleMaps support (maintenance burden too high)

### Fixed
- `onlyOnRain` feature now compatible with default weather module and MMM-OpenWeatherForecast

## [1.1.0] - 2020-08-18

### Added
- New option to select OpenStreetMap URL

### Fixed
- Time format always was 24, regardless of settings

### Contributors
- [@khassel](https://github.com/khassel)

## [1.0.0] - 2020-05-24

### Added
- Initial release
- Shows Rainviewer.com rain data on OpenStreetMap or Google Maps
- Support for multiple, alternating zoom levels
- Option to only show on rain (dependency to currentweather module)
- Option to add markers on map
