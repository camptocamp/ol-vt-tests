import Map from 'openlayers/Map';
import View from 'openlayers/View';
import MVT from 'openlayers/format/MVT';
import VectorTileLayer from 'openlayers/layer/VectorTile';
import VectorTileSource from 'openlayers/source/VectorTile';
import TileGrid from 'openlayers/tilegrid/TileGrid';
import {fromLonLat, get as getProjection} from 'openlayers/proj';
import Zoom from 'openlayers/control/Zoom';
import mb2olstyle from 'mapbox-to-ol-style';

import {workerfeatureloader} from './workerfeatureloader.js';

const resolutionsView = [];
for (let i = 0; i <= 20; ++i) {
  resolutionsView.push(78271.51696402048 / Math.pow(2, i));
}
const resolutionsWmts = [];
for (let i = 0; i <= 22; ++i) {
  resolutionsWmts.push(156543.03392804097 / Math.pow(2, i));
}

// TIlegrid for mbtiles
const resolutionsMvt = [];
for (let i = 0; i <= 14; ++i) {
  resolutionsMvt.push(78271.51696402048 / Math.pow(2, i));
}


const tileGridMvt = new TileGrid({
  extent: getProjection('EPSG:3857').getExtent(),
  resolutions: resolutionsMvt,
  tileSize: 512
});

const map = new Map({
  layers: [],
  loadTilesWhileInteracting: true,
  target: 'map',
  view: new  View({
    center: fromLonLat([7.75, 46.7]),
    zoom: 7
  }),
  controls: [
    new Zoom({delta: 0.55})
  ]
});

const mbTilesLayer = new VectorTileLayer({
  declutter: true,
  visible: true,
  source: new VectorTileSource({
    format: new MVT(),
    url: 'https://tileserver.dev.bgdi.ch/data/swissbasemap-mbtiles/{z}/{x}/{y}.pbf',
    tileLoadFunction: workerfeatureloader,
    maxZoom: 15
  })
});
map.addLayer(mbTilesLayer);

fetch('data/swissbasemap-osm-integrated.json').then(function(style) {
  var ft = ['Helvetica'];
  style.json().then(function(glStyle) {
    fetch('data/ol-sbm-osm-sprite.json').then(function(spriteData) {
      spriteData.json().then(function(glSpriteData) {
        mb2olstyle(mbTilesLayer, glStyle, 'swissbasemap', undefined, glSpriteData, 'https://vtiles.geops.ch/styles/inspirationskarte/sprite.png', ft);
      });
    });
  });
});
