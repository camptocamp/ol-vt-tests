import Map from 'openlayers/Map';
import View from 'openlayers/View';
import TileLayer from 'openlayers/layer/Tile';
import XYZ from 'openlayers/source/XYZ';

new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new XYZ({
        url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      })
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});
