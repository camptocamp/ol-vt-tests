import mapboxgl from 'mapbox-gl';

const map = new mapboxgl.Map({
    container: "map", // container id
    style: "data/swissbasemap-osm-integrated.json", // stylesheet location
    center: [6.5124174, 46.5284586], // starting position
    maxZoom: 17,
    zoom: 10 // starting zoom
});

map.on("load", () => {
    map.addSource("bauzonen", {
        "attribution": "&copy; swisstopo",
        "bounds": [
            5.140242,
            45.398181,
            11.47757,
            48.230651
        ],
        "maxzoom": 18,
        "minzoom": 0,
        "type": "raster",
        "tileSize": 256,
        "tiles": [
            "https://wmts.geo.admin.ch/1.0.0/ch.are.bauzonen/default/current/3857/{z}/{x}/{y}.png"
        ],
    });

    map.addLayer({
        "id": "bauzonen",
        "type": "raster",
        "source": "bauzonen",
        "minzoom": 0,
        "maxzoom": 18,
        "paint": {
            "raster-opacity": 0.3,
        },
    });
});
