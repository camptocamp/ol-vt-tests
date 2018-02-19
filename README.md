# Vector tiles support in openlayers, test & metrics
Provide different examples to compare vector tiles rendering performance.
## Install
```
npm install
cd node_modules/mapbox-to-ol-style/ && npm install
```
## Run
```
npm start
```
## Open

localhost:3000/simple.html

## Deploy
### Standard
```
npm run deploy
```

https://camptocamp.github.io/ol-vt-tests/ol-sbm-osm.html

### In a folder (custom version of third-party library)
```
npm run deploy -- --dest fgravin
```
https://camptocamp.github.io/ol-vt-tests/fgravin/ol-sbm-osm.html

## Mapbox GL JS integration examples

Showing a mapbox streets-v9 base layer with Mapbox GL JS and the
[ch.are.bauzonen](https://map.geo.admin.ch/?lang=en&topic=ech&bgLayer=ch.swisstopo.pixelkarte-farbe&layers=ch.are.bauzonen&layers_visibility=true&layers_opacity=0.6&E=2536210.88&N=1152458.97&zoom=5)
layer with Openlayers.

## [Mapbox GL JS + Openlayers](https://camptocamp.github.io/ol-vt-tests/mapbox-ol.html)

Mapbox GL JS is handling pointer events.

## [Openlayers + Mapbox GL JS](https://camptocamp.github.io/ol-vt-tests/ol-mapbox.html)

Openlayers is handling pointer events.

## [Mapbox GL JS standalone](https://camptocamp.github.io/ol-vt-tests/mapbox-standalone.html)

Mapbox GL JS can also display raster layers. This example serves as a benchmark
of how well the two map layers should be connected in the OpenLayers integration
examples, i.e. ideally there is no noticeable difference.
