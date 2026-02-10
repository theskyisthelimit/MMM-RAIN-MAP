# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## [2.11.3](https://github.com/jalibu/MMM-RAIN-MAP/compare/v2.11.2...v2.11.3) (2026-02-10)


### Fixed

* Correct types and add debug logging for forecast frames ([ad7afc7](https://github.com/jalibu/MMM-RAIN-MAP/commit/ad7afc76995b74e47dedf4a99354485ed0c4f2a0)), closes [#59](https://github.com/jalibu/MMM-RAIN-MAP/issues/59)

## [2.11.2](https://github.com/jalibu/MMM-RAIN-MAP/compare/v2.11.1...v2.11.2) (2026-02-09)


### Fixed

* Use correct slice for forecast frames ([07c0bf4](https://github.com/jalibu/MMM-RAIN-MAP/commit/07c0bf4283cbea034996443a6fe3ed70cd449256)), closes [#59](https://github.com/jalibu/MMM-RAIN-MAP/issues/59)


### Chores

* update devDependencies ([9295229](https://github.com/jalibu/MMM-RAIN-MAP/commit/9295229f62741f0cfa60f82459335988c5867b70))

## [2.11.1](https://github.com/jalibu/MMM-RAIN-MAP/compare/v2.11.0...v2.11.1) (2026-02-03)


### Fixed

* race condition with MMM-Carousel when using displayHoursBeforeRain ([05a611f](https://github.com/jalibu/MMM-RAIN-MAP/commit/05a611faad8882c41215d2d29cf7615153f770c4)), closes [#58](https://github.com/jalibu/MMM-RAIN-MAP/issues/58)

## [2.11.0](https://github.com/jalibu/MMM-RAIN-MAP/compare/v2.10.1...v2.11.0) (2026-02-03)


### Added

* optimize defaults and add exponential backoff for API rate limiting ([f3c9854](https://github.com/jalibu/MMM-RAIN-MAP/commit/f3c98549500af0f000958fcb8e51c70cc07b71bf))


### Fixed

* sanitizeAndFilterFrames returns empty array when maxFrames is 0 ([61ba860](https://github.com/jalibu/MMM-RAIN-MAP/commit/61ba86010ff65bb3ef70f2078cae19121b1abbd8))


### Chores

* add CHANGELOG.md to .prettierignore ([070579a](https://github.com/jalibu/MMM-RAIN-MAP/commit/070579ae3471d93fa7c3bb272952b27dff99ecf1))
* simplify demo script command in package.json ([bb32a0d](https://github.com/jalibu/MMM-RAIN-MAP/commit/bb32a0df31201a997a005293dad52050909f5f7e))
* update devDependencies ([81fc80c](https://github.com/jalibu/MMM-RAIN-MAP/commit/81fc80cdd44ac00d2a8a0b497ad04728b4edba0a))
* update git hooks to use lint-staged for pre-commit ([bbfefc5](https://github.com/jalibu/MMM-RAIN-MAP/commit/bbfefc5ec8cb1e1b2081c28d10f7702ce4cd82e7))


### Code Refactoring

* replace any types with concrete TypeScript interfaces ([1b65796](https://github.com/jalibu/MMM-RAIN-MAP/commit/1b65796ad8c172d1dc350d7c960fe49d20a4a73f))


### Tests

* add unit tests with node:test for configuration and utilities ([e5e34e5](https://github.com/jalibu/MMM-RAIN-MAP/commit/e5e34e542e4d66ec7671409299a45d421b153ec7))

## [2.10.1](https://github.com/jalibu/MMM-RAIN-MAP/compare/v2.10.0...v2.10.1) (2026-01-09)


### Fixed

* prevent animation speed increase with carousel modules ([66bc8e3](https://github.com/jalibu/MMM-RAIN-MAP/commit/66bc8e3909c838ace2f4ab0414bf19dae384eae3)), closes [#54](https://github.com/jalibu/MMM-RAIN-MAP/issues/54)


### Documentation

* add Code of Conduct file to promote community guidelines ([5f74912](https://github.com/jalibu/MMM-RAIN-MAP/commit/5f74912a50249d008966fbeaef0ec29c5ac6ebe4))


### Chores

* add changelog configuration and release script ([6f5d22f](https://github.com/jalibu/MMM-RAIN-MAP/commit/6f5d22fd81ccc2a2162b7c3f690214eb70977d99))
* add demo config ([fc4a7c0](https://github.com/jalibu/MMM-RAIN-MAP/commit/fc4a7c00011a1157f4f2f166ef9c2842e4fc3970))
* add lint-staged and simple-git-hooks for pre-commit linting ([70f2581](https://github.com/jalibu/MMM-RAIN-MAP/commit/70f25810239626a4152a0de74f0c9aaebe608798))
* update devDependencies ([0ed0e2a](https://github.com/jalibu/MMM-RAIN-MAP/commit/0ed0e2a9065322f1a6f2907640267ae028b41394))
* update npm script commands to use 'node --run' ([e45e4cd](https://github.com/jalibu/MMM-RAIN-MAP/commit/e45e4cda7c1c160daffc8f103a7e2c3d6272a864))


### Build System

* change lint job to use ubuntu-slim for reduced image size ([8991f40](https://github.com/jalibu/MMM-RAIN-MAP/commit/8991f40703828c6baa7288e70e320fa311b2b275))

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
