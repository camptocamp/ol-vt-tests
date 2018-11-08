import RenderFeature from 'openlayers/render/Feature.js';
import MVTFormat from 'openlayers/format/MVT.js';
const format = new MVTFormat();

import {loadFeaturesXhr} from 'openlayers/featureloader.js';
// import VectorTileLayer from 'openlayers/layer/VectorTile';
// import VectorTileSource from 'openlayers/source/VectorTile';

self.onmessage = function(event) {
    // console.log('Received event in worker', event.data);
    if (event.data.action === 'load') {
        const url = event.data.url;
        loadFeaturesXhr(url, format, (features) => {
            self.postMessage({
                what: 'features',
                url,
                features,
                projection: format.readProjection(),
                extent: format.getLastExtent()
            });
        }, () => {
            self.postMessage({
                what: 'error',
                url
            });
        })();
    }
}