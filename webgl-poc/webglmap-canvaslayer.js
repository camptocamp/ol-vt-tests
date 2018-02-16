webpackJsonp([1],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asserts_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__extent_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__obj_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__math_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__proj_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reproj_js__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__size_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__source_TileImage_js__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__source_WMSServerType_js__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tilecoord_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__string_js__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__uri_js__ = __webpack_require__(105);
/**
 * @module ol/source/TileWMS
 */
















/**
 * @classdesc
 * Layer source for tile data from WMS servers.
 *
 * @constructor
 * @extends {ol.source.TileImage}
 * @param {olx.source.TileWMSOptions=} opt_options Tile WMS options.
 * @api
 */
const TileWMS = function(opt_options) {

  const options = opt_options || {};

  const params = options.params || {};

  const transparent = 'TRANSPARENT' in params ? params['TRANSPARENT'] : true;

  __WEBPACK_IMPORTED_MODULE_9__source_TileImage_js__["a" /* default */].call(this, {
    attributions: options.attributions,
    cacheSize: options.cacheSize,
    crossOrigin: options.crossOrigin,
    opaque: !transparent,
    projection: options.projection,
    reprojectionErrorThreshold: options.reprojectionErrorThreshold,
    tileClass: options.tileClass,
    tileGrid: options.tileGrid,
    tileLoadFunction: options.tileLoadFunction,
    url: options.url,
    urls: options.urls,
    wrapX: options.wrapX !== undefined ? options.wrapX : true,
    transition: options.transition
  });

  /**
   * @private
   * @type {number}
   */
  this.gutter_ = options.gutter !== undefined ? options.gutter : 0;

  /**
   * @private
   * @type {!Object}
   */
  this.params_ = params;

  /**
   * @private
   * @type {boolean}
   */
  this.v13_ = true;

  /**
   * @private
   * @type {ol.source.WMSServerType|undefined}
   */
  this.serverType_ = /** @type {ol.source.WMSServerType|undefined} */ (options.serverType);

  /**
   * @private
   * @type {boolean}
   */
  this.hidpi_ = options.hidpi !== undefined ? options.hidpi : true;

  /**
   * @private
   * @type {ol.Extent}
   */
  this.tmpExtent_ = Object(__WEBPACK_IMPORTED_MODULE_3__extent_js__["j" /* createEmpty */])();

  this.updateV13_();
  this.setKey(this.getKeyForParams_());

};

Object(__WEBPACK_IMPORTED_MODULE_1__index_js__["g" /* inherits */])(TileWMS, __WEBPACK_IMPORTED_MODULE_9__source_TileImage_js__["a" /* default */]);


/**
 * Return the GetFeatureInfo URL for the passed coordinate, resolution, and
 * projection. Return `undefined` if the GetFeatureInfo URL cannot be
 * constructed.
 * @param {ol.Coordinate} coordinate Coordinate.
 * @param {number} resolution Resolution.
 * @param {ol.ProjectionLike} projection Projection.
 * @param {!Object} params GetFeatureInfo params. `INFO_FORMAT` at least should
 *     be provided. If `QUERY_LAYERS` is not provided then the layers specified
 *     in the `LAYERS` parameter will be used. `VERSION` should not be
 *     specified here.
 * @return {string|undefined} GetFeatureInfo URL.
 * @api
 */
TileWMS.prototype.getGetFeatureInfoUrl = function(coordinate, resolution, projection, params) {
  const projectionObj = Object(__WEBPACK_IMPORTED_MODULE_6__proj_js__["e" /* get */])(projection);
  const sourceProjectionObj = this.getProjection();

  let tileGrid = this.getTileGrid();
  if (!tileGrid) {
    tileGrid = this.getTileGridForProjection(projectionObj);
  }

  const tileCoord = tileGrid.getTileCoordForCoordAndResolution(coordinate, resolution);

  if (tileGrid.getResolutions().length <= tileCoord[0]) {
    return undefined;
  }

  let tileResolution = tileGrid.getResolution(tileCoord[0]);
  let tileExtent = tileGrid.getTileCoordExtent(tileCoord, this.tmpExtent_);
  let tileSize = Object(__WEBPACK_IMPORTED_MODULE_8__size_js__["d" /* toSize */])(tileGrid.getTileSize(tileCoord[0]), this.tmpSize);


  const gutter = this.gutter_;
  if (gutter !== 0) {
    tileSize = Object(__WEBPACK_IMPORTED_MODULE_8__size_js__["a" /* buffer */])(tileSize, gutter, this.tmpSize);
    tileExtent = Object(__WEBPACK_IMPORTED_MODULE_3__extent_js__["c" /* buffer */])(tileExtent, tileResolution * gutter, tileExtent);
  }

  if (sourceProjectionObj && sourceProjectionObj !== projectionObj) {
    tileResolution = Object(__WEBPACK_IMPORTED_MODULE_7__reproj_js__["a" /* calculateSourceResolution */])(sourceProjectionObj, projectionObj, coordinate, tileResolution);
    tileExtent = Object(__WEBPACK_IMPORTED_MODULE_6__proj_js__["i" /* transformExtent */])(tileExtent, projectionObj, sourceProjectionObj);
    coordinate = Object(__WEBPACK_IMPORTED_MODULE_6__proj_js__["h" /* transform */])(coordinate, projectionObj, sourceProjectionObj);
  }

  const baseParams = {
    'SERVICE': 'WMS',
    'VERSION': __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* DEFAULT_WMS_VERSION */],
    'REQUEST': 'GetFeatureInfo',
    'FORMAT': 'image/png',
    'TRANSPARENT': true,
    'QUERY_LAYERS': this.params_['LAYERS']
  };
  Object(__WEBPACK_IMPORTED_MODULE_4__obj_js__["a" /* assign */])(baseParams, this.params_, params);

  const x = Math.floor((coordinate[0] - tileExtent[0]) / tileResolution);
  const y = Math.floor((tileExtent[3] - coordinate[1]) / tileResolution);

  baseParams[this.v13_ ? 'I' : 'X'] = x;
  baseParams[this.v13_ ? 'J' : 'Y'] = y;

  return this.getRequestUrl_(tileCoord, tileSize, tileExtent,
    1, sourceProjectionObj || projectionObj, baseParams);
};


/**
 * @inheritDoc
 */
TileWMS.prototype.getGutterInternal = function() {
  return this.gutter_;
};


/**
 * Get the user-provided params, i.e. those passed to the constructor through
 * the "params" option, and possibly updated using the updateParams method.
 * @return {Object} Params.
 * @api
 */
TileWMS.prototype.getParams = function() {
  return this.params_;
};


/**
 * @param {ol.TileCoord} tileCoord Tile coordinate.
 * @param {ol.Size} tileSize Tile size.
 * @param {ol.Extent} tileExtent Tile extent.
 * @param {number} pixelRatio Pixel ratio.
 * @param {ol.proj.Projection} projection Projection.
 * @param {Object} params Params.
 * @return {string|undefined} Request URL.
 * @private
 */
TileWMS.prototype.getRequestUrl_ = function(tileCoord, tileSize, tileExtent,
  pixelRatio, projection, params) {

  const urls = this.urls;
  if (!urls) {
    return undefined;
  }

  params['WIDTH'] = tileSize[0];
  params['HEIGHT'] = tileSize[1];

  params[this.v13_ ? 'CRS' : 'SRS'] = projection.getCode();

  if (!('STYLES' in this.params_)) {
    params['STYLES'] = '';
  }

  if (pixelRatio != 1) {
    switch (this.serverType_) {
      case __WEBPACK_IMPORTED_MODULE_10__source_WMSServerType_js__["a" /* default */].GEOSERVER:
        const dpi = (90 * pixelRatio + 0.5) | 0;
        if ('FORMAT_OPTIONS' in params) {
          params['FORMAT_OPTIONS'] += ';dpi:' + dpi;
        } else {
          params['FORMAT_OPTIONS'] = 'dpi:' + dpi;
        }
        break;
      case __WEBPACK_IMPORTED_MODULE_10__source_WMSServerType_js__["a" /* default */].MAPSERVER:
        params['MAP_RESOLUTION'] = 90 * pixelRatio;
        break;
      case __WEBPACK_IMPORTED_MODULE_10__source_WMSServerType_js__["a" /* default */].CARMENTA_SERVER:
      case __WEBPACK_IMPORTED_MODULE_10__source_WMSServerType_js__["a" /* default */].QGIS:
        params['DPI'] = 90 * pixelRatio;
        break;
      default:
        Object(__WEBPACK_IMPORTED_MODULE_2__asserts_js__["a" /* assert */])(false, 52); // Unknown `serverType` configured
        break;
    }
  }

  const axisOrientation = projection.getAxisOrientation();
  const bbox = tileExtent;
  if (this.v13_ && axisOrientation.substr(0, 2) == 'ne') {
    let tmp;
    tmp = tileExtent[0];
    bbox[0] = tileExtent[1];
    bbox[1] = tmp;
    tmp = tileExtent[2];
    bbox[2] = tileExtent[3];
    bbox[3] = tmp;
  }
  params['BBOX'] = bbox.join(',');

  let url;
  if (urls.length == 1) {
    url = urls[0];
  } else {
    const index = Object(__WEBPACK_IMPORTED_MODULE_5__math_js__["d" /* modulo */])(__WEBPACK_IMPORTED_MODULE_11__tilecoord_js__["a" /* default */].hash(tileCoord), urls.length);
    url = urls[index];
  }
  return Object(__WEBPACK_IMPORTED_MODULE_13__uri_js__["a" /* appendParams */])(url, params);
};


/**
 * @inheritDoc
 */
TileWMS.prototype.getTilePixelRatio = function(pixelRatio) {
  return (!this.hidpi_ || this.serverType_ === undefined) ? 1 :
  /** @type {number} */ (pixelRatio);
};


/**
 * @private
 * @return {string} The key for the current params.
 */
TileWMS.prototype.getKeyForParams_ = function() {
  let i = 0;
  const res = [];
  for (const key in this.params_) {
    res[i++] = key + '-' + this.params_[key];
  }
  return res.join('/');
};


/**
 * @inheritDoc
 */
TileWMS.prototype.fixedTileUrlFunction = function(tileCoord, pixelRatio, projection) {

  let tileGrid = this.getTileGrid();
  if (!tileGrid) {
    tileGrid = this.getTileGridForProjection(projection);
  }

  if (tileGrid.getResolutions().length <= tileCoord[0]) {
    return undefined;
  }

  if (pixelRatio != 1 && (!this.hidpi_ || this.serverType_ === undefined)) {
    pixelRatio = 1;
  }

  const tileResolution = tileGrid.getResolution(tileCoord[0]);
  let tileExtent = tileGrid.getTileCoordExtent(tileCoord, this.tmpExtent_);
  let tileSize = Object(__WEBPACK_IMPORTED_MODULE_8__size_js__["d" /* toSize */])(
    tileGrid.getTileSize(tileCoord[0]), this.tmpSize);

  const gutter = this.gutter_;
  if (gutter !== 0) {
    tileSize = Object(__WEBPACK_IMPORTED_MODULE_8__size_js__["a" /* buffer */])(tileSize, gutter, this.tmpSize);
    tileExtent = Object(__WEBPACK_IMPORTED_MODULE_3__extent_js__["c" /* buffer */])(tileExtent, tileResolution * gutter, tileExtent);
  }

  if (pixelRatio != 1) {
    tileSize = Object(__WEBPACK_IMPORTED_MODULE_8__size_js__["c" /* scale */])(tileSize, pixelRatio, this.tmpSize);
  }

  const baseParams = {
    'SERVICE': 'WMS',
    'VERSION': __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* DEFAULT_WMS_VERSION */],
    'REQUEST': 'GetMap',
    'FORMAT': 'image/png',
    'TRANSPARENT': true
  };
  Object(__WEBPACK_IMPORTED_MODULE_4__obj_js__["a" /* assign */])(baseParams, this.params_);

  return this.getRequestUrl_(tileCoord, tileSize, tileExtent,
    pixelRatio, projection, baseParams);
};

/**
 * Update the user-provided params.
 * @param {Object} params Params.
 * @api
 */
TileWMS.prototype.updateParams = function(params) {
  Object(__WEBPACK_IMPORTED_MODULE_4__obj_js__["a" /* assign */])(this.params_, params);
  this.updateV13_();
  this.setKey(this.getKeyForParams_());
};


/**
 * @private
 */
TileWMS.prototype.updateV13_ = function() {
  const version = this.params_['VERSION'] || __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* DEFAULT_WMS_VERSION */];
  this.v13_ = Object(__WEBPACK_IMPORTED_MODULE_12__string_js__["a" /* compareVersions */])(version, '1.3') >= 0;
};
/* harmony default export */ __webpack_exports__["a"] = (TileWMS);


/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Default WMS version.
 * @type {string}
 */
const DEFAULT_WMS_VERSION = '1.3.0';
/* harmony export (immutable) */ __webpack_exports__["a"] = DEFAULT_WMS_VERSION;



/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @module ol/source/WMSServerType
 */

/**
 * Available server types: `'carmentaserver'`, `'geoserver'`, `'mapserver'`,
 *     `'qgis'`. These are servers that have vendor parameters beyond the WMS
 *     specification that OpenLayers can make use of.
 * @enum {string}
 */
/* harmony default export */ __webpack_exports__["a"] = ({
  CARMENTA_SERVER: 'carmentaserver',
  GEOSERVER: 'geoserver',
  MAPSERVER: 'mapserver',
  QGIS: 'qgis'
});


/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = appendParams;
/**
 * @module ol/uri
 */


/**
 * Appends query parameters to a URI.
 *
 * @param {string} uri The original URI, which may already have query data.
 * @param {!Object} params An object where keys are URI-encoded parameter keys,
 *     and the values are arbitrary types or arrays.
 * @return {string} The new URI.
 */
function appendParams(uri, params) {
  const keyParams = [];
  // Skip any null or undefined parameter values
  Object.keys(params).forEach(function(k) {
    if (params[k] !== null && params[k] !== undefined) {
      keyParams.push(k + '=' + encodeURIComponent(params[k]));
    }
  });
  const qs = keyParams.join('&');
  // remove any trailing ? or &
  uri = uri.replace(/[?&]$/, '');
  // append ? or & depending on whether uri has existing parameters
  uri = uri.indexOf('?') === -1 ? uri + '?' : uri + '&';
  return uri + qs;
}


/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(324);


/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_openlayers_Map_js__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_openlayers_View_js__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_openlayers_layer_Tile_js__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_openlayers_source_OSM_js__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_openlayers_source_TileWMS_js__ = __webpack_require__(102);







const layers = [
  new __WEBPACK_IMPORTED_MODULE_2_openlayers_layer_Tile_js__["a" /* default */]({
    extent: [-13884991, 2870341, -7455066, 6338219],
    renderer: 'canvas',
    source: new __WEBPACK_IMPORTED_MODULE_4_openlayers_source_TileWMS_js__["a" /* default */]({
      url: 'https://ahocevar.com/geoserver/wms',
      params: {'LAYERS': 'topp:states', 'TILED': true},
      serverType: 'geoserver',
      // Countries have transparency, so do not fade tiles:
      transition: 0
    })
  }),
  new __WEBPACK_IMPORTED_MODULE_2_openlayers_layer_Tile_js__["a" /* default */]({
    renderer: 'webgl',
    source: new __WEBPACK_IMPORTED_MODULE_3_openlayers_source_OSM_js__["a" /* default */]()
  })
];
const map = new __WEBPACK_IMPORTED_MODULE_0_openlayers_Map_js__["a" /* default */]({
  layers: layers,
  target: 'map',
  renderer: 'webgl',
  view: new __WEBPACK_IMPORTED_MODULE_1_openlayers_View_js__["a" /* default */]({
    center: [-10997148, 4569099],
    zoom: 4
  })
});


/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__source_XYZ_js__ = __webpack_require__(79);
/**
 * @module ol/source/OSM
 */



/**
 * @classdesc
 * Layer source for the OpenStreetMap tile server.
 *
 * @constructor
 * @extends {ol.source.XYZ}
 * @param {olx.source.OSMOptions=} opt_options Open Street Map options.
 * @api
 */
const OSM = function(opt_options) {

  const options = opt_options || {};

  let attributions;
  if (options.attributions !== undefined) {
    attributions = options.attributions;
  } else {
    attributions = [OSM.ATTRIBUTION];
  }

  const crossOrigin = options.crossOrigin !== undefined ?
    options.crossOrigin : 'anonymous';

  const url = options.url !== undefined ?
    options.url : 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png';

  __WEBPACK_IMPORTED_MODULE_1__source_XYZ_js__["a" /* default */].call(this, {
    attributions: attributions,
    cacheSize: options.cacheSize,
    crossOrigin: crossOrigin,
    opaque: options.opaque !== undefined ? options.opaque : true,
    maxZoom: options.maxZoom !== undefined ? options.maxZoom : 19,
    reprojectionErrorThreshold: options.reprojectionErrorThreshold,
    tileLoadFunction: options.tileLoadFunction,
    url: url,
    wrapX: options.wrapX
  });

};

Object(__WEBPACK_IMPORTED_MODULE_0__index_js__["g" /* inherits */])(OSM, __WEBPACK_IMPORTED_MODULE_1__source_XYZ_js__["a" /* default */]);


/**
 * The attribution containing a link to the OpenStreetMap Copyright and License
 * page.
 * @const
 * @type {string}
 * @api
 */
OSM.ATTRIBUTION = '&copy; ' +
      '<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> ' +
      'contributors.';
/* harmony default export */ __webpack_exports__["a"] = (OSM);


/***/ })

},[323]);