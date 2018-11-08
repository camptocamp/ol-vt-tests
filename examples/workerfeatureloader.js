var Worker = require("worker-loader?name=hash.worker.js!./worker");
var worker = new Worker;

import MVTFormat from 'openlayers/format/MVT.js'
const format = new MVTFormat();
const projection = format.readProjection();

import RenderFeature from 'openlayers/render/Feature.js'

const tiles = {};

worker.onmessage = function(event) {
    // console.log('received in app', event.data);
    const url = event.data.url;
    const tile = tiles[url];
    if (event.data.what === 'features') {
        event.data.features.forEach(e => e.__proto__ = RenderFeature.prototype);  // restore prototype chain
        tile.onLoad(event.data.features, projection, event.data.extent);
    } else if (event.data.what === 'error') {
        tile.onError();
    }
    delete tiles[url];
};

export function workerfeatureloader(tile, url) {
    tiles[url] = tile;
    const loader = function() {
        worker.postMessage({
            action: 'load',
            url
        });
    };
    tile.setLoader(loader);
}
