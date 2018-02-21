import Map from "openlayers/Map.js";
import View from "openlayers/View.js";
import TileLayer from "openlayers/layer/Tile.js";
import MapBox from "openlayers/layer/MapBox";
import OLTileJSON from "openlayers/source/TileJSON.js";
import {get as getTransform} from "openlayers/proj/transforms.js";

const layers = [];

const transformFromLatLng = getTransform("EPSG:4326", "EPSG:3857");

const map = new Map({
  layers: layers,
  target: 'map',
  renderer: 'mixed',
  view: new View({
    center: transformFromLatLng([6.5124174, 46.5284586]),
    maxZoom: 18,
    zoom: 11
  })
});

const mbLayer = new MapBox({
  map: map,
  container: map.getTarget(),
  style: 'data/swissbasemap-osm-integrated.json'
});

const  swisstopoBauzonenSource = new OLTileJSON({
  tileJSON: {
    "attribution": "&copy; swisstopo",
    "bounds": [
      5.140242,
      45.398181,
      11.47757,
      48.230651
    ],
    "id": "bauzonen",
    "maxzoom": 18,
    "minzoom": 0,
    "type": "raster",
    "tileSize": 256,
    "tiles": [
      "https://wmts.geo.admin.ch/1.0.0/ch.are.bauzonen/default/current/3857/{z}/{x}/{y}.png"
    ],
  }
});

const  trailSource = new OLTileJSON({
  tileJSON: {
    "attribution": "&copy; swisstopo",
    "bounds": [
      5.140242,
      45.398181,
      11.47757,
      48.230651
    ],
    "id": "bauzonen",
    "maxzoom": 18,
    "minzoom": 0,
    "type": "raster",
    "tileSize": 256,
    "tiles": [
      "https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.swisstlm3d-wanderwege/default/current/3857/{z}/{x}/{y}.png"
    ],
  }
});

map.addLayer(new TileLayer({
  opacity: 1,
  source: swisstopoBauzonenSource
}));

const trailLayer = new TileLayer({
  opacity: 1,
  source: trailSource
});

map.addLayer(trailLayer);


const mbToggleButton = document.getElementById('mbToggle');
const mbOpacityInput = document.getElementById('mbOpacity');

mbToggleButton.addEventListener('click', function() {
  mbLayer.setVisible(!mbLayer.getVisible());
}, false);

mbOpacityInput.addEventListener('change', function(e) {
  mbLayer.setOpacity(parseFloat(this.value));
}, false);

const mbZIndexInput = document.getElementById('mbZIndex');
mbZIndexInput.onchange = function() {
  trailLayer.get('canvas').style.zIndex = 1;
  mbLayer.setZIndex(parseInt(this.value, 10) || 0);
};
mbZIndexInput.value = String(mbLayer.getZIndex());
mbOpacityInput.value = mbLayer.getOpacity();