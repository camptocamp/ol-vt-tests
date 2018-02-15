import Map from 'openlayers/Map.js';
import View from 'openlayers/View.js';
import TileLayer from 'openlayers/layer/Tile.js';
import OSM from 'openlayers/source/OSM.js';
import TileWMS from 'openlayers/source/TileWMS.js';


const layers = [
  new TileLayer({
    extent: [-13884991, 2870341, -7455066, 6338219],
    source: new TileWMS({
      url: 'https://ahocevar.com/geoserver/wms',
      params: {'LAYERS': 'topp:states', 'TILED': true},
      serverType: 'geoserver',
      // Countries have transparency, so do not fade tiles:
      transition: 0
    })
  }),
  new TileLayer({
    source: new OSM()
  })
];
const map = new Map({
  layers: layers,
  target: 'map',
  renderer: 'mixed',
  view: new View({
    center: [-10997148, 4569099],
    zoom: 4
  })
});
