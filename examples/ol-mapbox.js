import mapboxgl from 'mapbox-gl';

import OLLayerTile from 'openlayers/layer/Tile.js';
import OLMap from 'openlayers/Map.js';
import OLTileJSON from 'openlayers/source/TileJSON.js';
import OLView from 'openlayers/View.js';
import { get as getTransform } from 'openlayers/proj/transforms.js';

var map = new mapboxgl.Map({
    container: "map", // container id
    style: "data/swissbasemap-osm-integrated.json", // stylesheet location
    center: [6.5124174, 46.5284586], // starting position
    maxZoom: 17,
    zoom: 10 // starting zoom
});

var swisstopoBauzonenSource = new OLTileJSON({
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

const transformFromLatLng = getTransform("EPSG:4326", "EPSG:3857");
const transformToLatLng = getTransform("EPSG:3857", "EPSG:4326");

var olMap = new OLMap({
    layers: [
        new OLLayerTile({
            opacity: 0.3,
            source: swisstopoBauzonenSource
        })
    ],
    target: "olmap",
    view: new OLView({
        center: transformFromLatLng([6.5124174, 46.5284586]),
        maxZoom: 18,
        zoom: 11
    })
});

var olMapView = olMap.getView();
olMap.on('precompose', () => {
    var center = transformToLatLng(olMapView.getCenter());
    var zoom = olMapView.getZoom() - 1;
    map.jumpTo({
        center: center,
        zoom: zoom
    });
});
