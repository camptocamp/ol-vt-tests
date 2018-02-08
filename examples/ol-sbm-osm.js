import 'ol/ol.css';
import Map from 'ol/map';
import View from 'ol/view';
import MVT from 'ol/format/mvt';
import VectorTileLayer from 'ol/layer/vectortile';
import VectorTileSource from 'ol/source/vectortile';
import sync from 'ol-hashed';
import TileLayer from 'ol/layer/tile';
import XYZSource from 'ol/source/xyz';
import TileGrid from 'ol/tilegrid/tilegrid';
import proj from 'ol/proj';
import Zoom from 'ol/control/zoom';
import mb2olstyle from 'mapbox-to-ol-style';

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
  extent: proj.get('EPSG:3857').getExtent(),
  resolutions: resolutionsMvt,
  tileSize: 512
});

const map = new Map({
  layers: [
    new TileLayer({
      opacity: 0.3,
      source: new XYZSource({
        url: 'https://tileserver.dev.bgdi.ch/data/hillshade-europe-cut-mbtiles/{z}/{x}/{y}.png',
        tileGrid: tileGridMvt,
        maxZoom: 14
      })
    }),
    new TileLayer({
      opacity: 0,
      source: new XYZSource({
        url: 'https://wmts{10-14}.geo.admin.ch/1.0.0/ch.swisstopo.swissalti3d-reliefschattierung/default/current/3857/{z}/{x}/{y}.png',
        tileGrid: new TileGrid({
          extent: proj.get('EPSG:3857').getExtent(),
          resolutions: resolutionsWmts,
          tileSize: 256
        })
      })
    })
  ],
  target: 'map',
  view: new  View({
    center: proj.fromLonLat([7.75, 46.7]),
    zoom: 7
  }),
  controls: [
    new Zoom({delta: 0.55})
  ]
});

// sync(map);

const mbTilesLayer = new VectorTileLayer({
  declutter: true,
  visible: true,
  source: new VectorTileSource({
    format: new MVT(),
    url: 'https://tileserver.dev.bgdi.ch/data/swissbasemap-mbtiles/{z}/{x}/{y}.pbf',
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

