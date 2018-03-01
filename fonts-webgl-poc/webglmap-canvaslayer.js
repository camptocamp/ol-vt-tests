webpackJsonp([2],{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__source_XYZ_js__ = __webpack_require__(52);
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


/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asserts_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__extent_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__obj_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__math_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__proj_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reproj_js__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__size_js__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__source_TileImage_js__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__source_WMSServerType_js__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tilecoord_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__string_js__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__uri_js__ = __webpack_require__(141);
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

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Default WMS version.
 * @type {string}
 */
const DEFAULT_WMS_VERSION = '1.3.0';
/* harmony export (immutable) */ __webpack_exports__["a"] = DEFAULT_WMS_VERSION;



/***/ }),

/***/ 140:
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

/***/ 141:
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

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(331);


/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_openlayers_Map_js__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_openlayers_View_js__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_openlayers_layer_Tile_js__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_openlayers_source_OSM_js__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_openlayers_source_TileWMS_js__ = __webpack_require__(138);







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

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reproj_common_js__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ImageTile_js__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TileCache_js__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TileState_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__events_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__events_EventType_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__proj_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reproj_Tile_js__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__source_UrlTile_js__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tilecoord_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tilegrid_js__ = __webpack_require__(28);
/**
 * @module ol/source/TileImage
 */













/**
 * @classdesc
 * Base class for sources providing images divided into a tile grid.
 *
 * @constructor
 * @fires ol.source.Tile.Event
 * @extends {ol.source.UrlTile}
 * @param {olx.source.TileImageOptions} options Image tile options.
 * @api
 */
const TileImage = function(options) {

  __WEBPACK_IMPORTED_MODULE_9__source_UrlTile_js__["a" /* default */].call(this, {
    attributions: options.attributions,
    cacheSize: options.cacheSize,
    extent: options.extent,
    opaque: options.opaque,
    projection: options.projection,
    state: options.state,
    tileGrid: options.tileGrid,
    tileLoadFunction: options.tileLoadFunction ?
      options.tileLoadFunction : TileImage.defaultTileLoadFunction,
    tilePixelRatio: options.tilePixelRatio,
    tileUrlFunction: options.tileUrlFunction,
    url: options.url,
    urls: options.urls,
    wrapX: options.wrapX,
    transition: options.transition
  });

  /**
   * @protected
   * @type {?string}
   */
  this.crossOrigin =
      options.crossOrigin !== undefined ? options.crossOrigin : null;

  /**
   * @protected
   * @type {function(new: ol.ImageTile, ol.TileCoord, ol.TileState, string,
   *        ?string, ol.TileLoadFunctionType, olx.TileOptions=)}
   */
  this.tileClass = options.tileClass !== undefined ?
    options.tileClass : __WEBPACK_IMPORTED_MODULE_2__ImageTile_js__["a" /* default */];

  /**
   * @protected
   * @type {Object.<string, ol.TileCache>}
   */
  this.tileCacheForProjection = {};

  /**
   * @protected
   * @type {Object.<string, ol.tilegrid.TileGrid>}
   */
  this.tileGridForProjection = {};

  /**
   * @private
   * @type {number|undefined}
   */
  this.reprojectionErrorThreshold_ = options.reprojectionErrorThreshold;

  /**
   * @private
   * @type {boolean}
   */
  this.renderReprojectionEdges_ = false;
};

Object(__WEBPACK_IMPORTED_MODULE_1__index_js__["g" /* inherits */])(TileImage, __WEBPACK_IMPORTED_MODULE_9__source_UrlTile_js__["a" /* default */]);


/**
 * @inheritDoc
 */
TileImage.prototype.canExpireCache = function() {
  if (!__WEBPACK_IMPORTED_MODULE_0__reproj_common_js__["a" /* ENABLE_RASTER_REPROJECTION */]) {
    return __WEBPACK_IMPORTED_MODULE_9__source_UrlTile_js__["a" /* default */].prototype.canExpireCache.call(this);
  }
  if (this.tileCache.canExpireCache()) {
    return true;
  } else {
    for (const key in this.tileCacheForProjection) {
      if (this.tileCacheForProjection[key].canExpireCache()) {
        return true;
      }
    }
  }
  return false;
};


/**
 * @inheritDoc
 */
TileImage.prototype.expireCache = function(projection, usedTiles) {
  if (!__WEBPACK_IMPORTED_MODULE_0__reproj_common_js__["a" /* ENABLE_RASTER_REPROJECTION */]) {
    __WEBPACK_IMPORTED_MODULE_9__source_UrlTile_js__["a" /* default */].prototype.expireCache.call(this, projection, usedTiles);
    return;
  }
  const usedTileCache = this.getTileCacheForProjection(projection);

  this.tileCache.expireCache(this.tileCache == usedTileCache ? usedTiles : {});
  for (const id in this.tileCacheForProjection) {
    const tileCache = this.tileCacheForProjection[id];
    tileCache.expireCache(tileCache == usedTileCache ? usedTiles : {});
  }
};


/**
 * @inheritDoc
 */
TileImage.prototype.getGutter = function(projection) {
  if (__WEBPACK_IMPORTED_MODULE_0__reproj_common_js__["a" /* ENABLE_RASTER_REPROJECTION */] &&
      this.getProjection() && projection && !Object(__WEBPACK_IMPORTED_MODULE_7__proj_js__["c" /* equivalent */])(this.getProjection(), projection)) {
    return 0;
  } else {
    return this.getGutterInternal();
  }
};


/**
 * @protected
 * @return {number} Gutter.
 */
TileImage.prototype.getGutterInternal = function() {
  return 0;
};


/**
 * @inheritDoc
 */
TileImage.prototype.getOpaque = function(projection) {
  if (__WEBPACK_IMPORTED_MODULE_0__reproj_common_js__["a" /* ENABLE_RASTER_REPROJECTION */] &&
      this.getProjection() && projection && !Object(__WEBPACK_IMPORTED_MODULE_7__proj_js__["c" /* equivalent */])(this.getProjection(), projection)) {
    return false;
  } else {
    return __WEBPACK_IMPORTED_MODULE_9__source_UrlTile_js__["a" /* default */].prototype.getOpaque.call(this, projection);
  }
};


/**
 * @inheritDoc
 */
TileImage.prototype.getTileGridForProjection = function(projection) {
  if (!__WEBPACK_IMPORTED_MODULE_0__reproj_common_js__["a" /* ENABLE_RASTER_REPROJECTION */]) {
    return __WEBPACK_IMPORTED_MODULE_9__source_UrlTile_js__["a" /* default */].prototype.getTileGridForProjection.call(this, projection);
  }
  const thisProj = this.getProjection();
  if (this.tileGrid && (!thisProj || Object(__WEBPACK_IMPORTED_MODULE_7__proj_js__["c" /* equivalent */])(thisProj, projection))) {
    return this.tileGrid;
  } else {
    const projKey = Object(__WEBPACK_IMPORTED_MODULE_1__index_js__["f" /* getUid */])(projection).toString();
    if (!(projKey in this.tileGridForProjection)) {
      this.tileGridForProjection[projKey] =
          Object(__WEBPACK_IMPORTED_MODULE_11__tilegrid_js__["d" /* getForProjection */])(projection);
    }
    return /** @type {!ol.tilegrid.TileGrid} */ (this.tileGridForProjection[projKey]);
  }
};


/**
 * @inheritDoc
 */
TileImage.prototype.getTileCacheForProjection = function(projection) {
  if (!__WEBPACK_IMPORTED_MODULE_0__reproj_common_js__["a" /* ENABLE_RASTER_REPROJECTION */]) {
    return __WEBPACK_IMPORTED_MODULE_9__source_UrlTile_js__["a" /* default */].prototype.getTileCacheForProjection.call(this, projection);
  }
  const thisProj = this.getProjection(); if (!thisProj || Object(__WEBPACK_IMPORTED_MODULE_7__proj_js__["c" /* equivalent */])(thisProj, projection)) {
    return this.tileCache;
  } else {
    const projKey = Object(__WEBPACK_IMPORTED_MODULE_1__index_js__["f" /* getUid */])(projection).toString();
    if (!(projKey in this.tileCacheForProjection)) {
      this.tileCacheForProjection[projKey] = new __WEBPACK_IMPORTED_MODULE_3__TileCache_js__["a" /* default */](this.tileCache.highWaterMark);
    }
    return this.tileCacheForProjection[projKey];
  }
};


/**
 * @param {number} z Tile coordinate z.
 * @param {number} x Tile coordinate x.
 * @param {number} y Tile coordinate y.
 * @param {number} pixelRatio Pixel ratio.
 * @param {ol.proj.Projection} projection Projection.
 * @param {string} key The key set on the tile.
 * @return {!ol.Tile} Tile.
 * @private
 */
TileImage.prototype.createTile_ = function(z, x, y, pixelRatio, projection, key) {
  const tileCoord = [z, x, y];
  const urlTileCoord = this.getTileCoordForTileUrlFunction(
    tileCoord, projection);
  const tileUrl = urlTileCoord ?
    this.tileUrlFunction(urlTileCoord, pixelRatio, projection) : undefined;
  const tile = new this.tileClass(
    tileCoord,
    tileUrl !== undefined ? __WEBPACK_IMPORTED_MODULE_4__TileState_js__["a" /* default */].IDLE : __WEBPACK_IMPORTED_MODULE_4__TileState_js__["a" /* default */].EMPTY,
    tileUrl !== undefined ? tileUrl : '',
    this.crossOrigin,
    this.tileLoadFunction,
    this.tileOptions);
  tile.key = key;
  Object(__WEBPACK_IMPORTED_MODULE_5__events_js__["a" /* listen */])(tile, __WEBPACK_IMPORTED_MODULE_6__events_EventType_js__["a" /* default */].CHANGE,
    this.handleTileChange, this);
  return tile;
};


/**
 * @inheritDoc
 */
TileImage.prototype.getTile = function(z, x, y, pixelRatio, projection) {
  const sourceProjection = /** @type {!ol.proj.Projection} */ (this.getProjection());
  if (!__WEBPACK_IMPORTED_MODULE_0__reproj_common_js__["a" /* ENABLE_RASTER_REPROJECTION */] ||
      !sourceProjection || !projection || Object(__WEBPACK_IMPORTED_MODULE_7__proj_js__["c" /* equivalent */])(sourceProjection, projection)) {
    return this.getTileInternal(z, x, y, pixelRatio, sourceProjection || projection);
  } else {
    const cache = this.getTileCacheForProjection(projection);
    const tileCoord = [z, x, y];
    let tile;
    const tileCoordKey = __WEBPACK_IMPORTED_MODULE_10__tilecoord_js__["a" /* default */].getKey(tileCoord);
    if (cache.containsKey(tileCoordKey)) {
      tile = /** @type {!ol.Tile} */ (cache.get(tileCoordKey));
    }
    const key = this.getKey();
    if (tile && tile.key == key) {
      return tile;
    } else {
      const sourceTileGrid = this.getTileGridForProjection(sourceProjection);
      const targetTileGrid = this.getTileGridForProjection(projection);
      const wrappedTileCoord =
          this.getTileCoordForTileUrlFunction(tileCoord, projection);
      const newTile = new __WEBPACK_IMPORTED_MODULE_8__reproj_Tile_js__["a" /* default */](
        sourceProjection, sourceTileGrid,
        projection, targetTileGrid,
        tileCoord, wrappedTileCoord, this.getTilePixelRatio(pixelRatio),
        this.getGutterInternal(),
        function(z, x, y, pixelRatio) {
          return this.getTileInternal(z, x, y, pixelRatio, sourceProjection);
        }.bind(this), this.reprojectionErrorThreshold_,
        this.renderReprojectionEdges_);
      newTile.key = key;

      if (tile) {
        newTile.interimTile = tile;
        newTile.refreshInterimChain();
        cache.replace(tileCoordKey, newTile);
      } else {
        cache.set(tileCoordKey, newTile);
      }
      return newTile;
    }
  }
};


/**
 * @param {number} z Tile coordinate z.
 * @param {number} x Tile coordinate x.
 * @param {number} y Tile coordinate y.
 * @param {number} pixelRatio Pixel ratio.
 * @param {!ol.proj.Projection} projection Projection.
 * @return {!ol.Tile} Tile.
 * @protected
 */
TileImage.prototype.getTileInternal = function(z, x, y, pixelRatio, projection) {
  let tile = null;
  const tileCoordKey = __WEBPACK_IMPORTED_MODULE_10__tilecoord_js__["a" /* default */].getKeyZXY(z, x, y);
  const key = this.getKey();
  if (!this.tileCache.containsKey(tileCoordKey)) {
    tile = this.createTile_(z, x, y, pixelRatio, projection, key);
    this.tileCache.set(tileCoordKey, tile);
  } else {
    tile = this.tileCache.get(tileCoordKey);
    if (tile.key != key) {
      // The source's params changed. If the tile has an interim tile and if we
      // can use it then we use it. Otherwise we create a new tile.  In both
      // cases we attempt to assign an interim tile to the new tile.
      const interimTile = tile;
      tile = this.createTile_(z, x, y, pixelRatio, projection, key);

      //make the new tile the head of the list,
      if (interimTile.getState() == __WEBPACK_IMPORTED_MODULE_4__TileState_js__["a" /* default */].IDLE) {
        //the old tile hasn't begun loading yet, and is now outdated, so we can simply discard it
        tile.interimTile = interimTile.interimTile;
      } else {
        tile.interimTile = interimTile;
      }
      tile.refreshInterimChain();
      this.tileCache.replace(tileCoordKey, tile);
    }
  }
  return tile;
};


/**
 * Sets whether to render reprojection edges or not (usually for debugging).
 * @param {boolean} render Render the edges.
 * @api
 */
TileImage.prototype.setRenderReprojectionEdges = function(render) {
  if (!__WEBPACK_IMPORTED_MODULE_0__reproj_common_js__["a" /* ENABLE_RASTER_REPROJECTION */] ||
      this.renderReprojectionEdges_ == render) {
    return;
  }
  this.renderReprojectionEdges_ = render;
  for (const id in this.tileCacheForProjection) {
    this.tileCacheForProjection[id].clear();
  }
  this.changed();
};


/**
 * Sets the tile grid to use when reprojecting the tiles to the given
 * projection instead of the default tile grid for the projection.
 *
 * This can be useful when the default tile grid cannot be created
 * (e.g. projection has no extent defined) or
 * for optimization reasons (custom tile size, resolutions, ...).
 *
 * @param {ol.ProjectionLike} projection Projection.
 * @param {ol.tilegrid.TileGrid} tilegrid Tile grid to use for the projection.
 * @api
 */
TileImage.prototype.setTileGridForProjection = function(projection, tilegrid) {
  if (__WEBPACK_IMPORTED_MODULE_0__reproj_common_js__["a" /* ENABLE_RASTER_REPROJECTION */]) {
    const proj = Object(__WEBPACK_IMPORTED_MODULE_7__proj_js__["e" /* get */])(projection);
    if (proj) {
      const projKey = Object(__WEBPACK_IMPORTED_MODULE_1__index_js__["f" /* getUid */])(proj).toString();
      if (!(projKey in this.tileGridForProjection)) {
        this.tileGridForProjection[projKey] = tilegrid;
      }
    }
  }
};


/**
 * @param {ol.ImageTile} imageTile Image tile.
 * @param {string} src Source.
 */
TileImage.defaultTileLoadFunction = function(imageTile, src) {
  imageTile.getImage().src = src;
};
/* harmony default export */ __webpack_exports__["a"] = (TileImage);


/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = calculateSourceResolution;
/* harmony export (immutable) */ __webpack_exports__["b"] = render;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__extent_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__proj_js__ = __webpack_require__(10);
/**
 * @module ol/reproj
 */






/**
 * Calculates ideal resolution to use from the source in order to achieve
 * pixel mapping as close as possible to 1:1 during reprojection.
 * The resolution is calculated regardless of what resolutions
 * are actually available in the dataset (TileGrid, Image, ...).
 *
 * @param {ol.proj.Projection} sourceProj Source projection.
 * @param {ol.proj.Projection} targetProj Target projection.
 * @param {ol.Coordinate} targetCenter Target center.
 * @param {number} targetResolution Target resolution.
 * @return {number} The best resolution to use. Can be +-Infinity, NaN or 0.
 */
function calculateSourceResolution(sourceProj, targetProj,
  targetCenter, targetResolution) {

  const sourceCenter = Object(__WEBPACK_IMPORTED_MODULE_3__proj_js__["h" /* transform */])(targetCenter, targetProj, sourceProj);

  // calculate the ideal resolution of the source data
  let sourceResolution = Object(__WEBPACK_IMPORTED_MODULE_3__proj_js__["f" /* getPointResolution */])(targetProj, targetResolution, targetCenter);

  const targetMetersPerUnit = targetProj.getMetersPerUnit();
  if (targetMetersPerUnit !== undefined) {
    sourceResolution *= targetMetersPerUnit;
  }
  const sourceMetersPerUnit = sourceProj.getMetersPerUnit();
  if (sourceMetersPerUnit !== undefined) {
    sourceResolution /= sourceMetersPerUnit;
  }

  // Based on the projection properties, the point resolution at the specified
  // coordinates may be slightly different. We need to reverse-compensate this
  // in order to achieve optimal results.

  const sourceExtent = sourceProj.getExtent();
  if (!sourceExtent || Object(__WEBPACK_IMPORTED_MODULE_1__extent_js__["f" /* containsCoordinate */])(sourceExtent, sourceCenter)) {
    const compensationFactor = Object(__WEBPACK_IMPORTED_MODULE_3__proj_js__["f" /* getPointResolution */])(sourceProj, sourceResolution, sourceCenter) /
        sourceResolution;
    if (isFinite(compensationFactor) && compensationFactor > 0) {
      sourceResolution /= compensationFactor;
    }
  }

  return sourceResolution;
}


/**
 * Enlarge the clipping triangle point by 1 pixel to ensure the edges overlap
 * in order to mask gaps caused by antialiasing.
 *
 * @param {number} centroidX Centroid of the triangle (x coordinate in pixels).
 * @param {number} centroidY Centroid of the triangle (y coordinate in pixels).
 * @param {number} x X coordinate of the point (in pixels).
 * @param {number} y Y coordinate of the point (in pixels).
 * @return {ol.Coordinate} New point 1 px farther from the centroid.
 */
function enlargeClipPoint(centroidX, centroidY, x, y) {
  const dX = x - centroidX;
  const dY = y - centroidY;
  const distance = Math.sqrt(dX * dX + dY * dY);
  return [Math.round(x + dX / distance), Math.round(y + dY / distance)];
}


/**
 * Renders the source data into new canvas based on the triangulation.
 *
 * @param {number} width Width of the canvas.
 * @param {number} height Height of the canvas.
 * @param {number} pixelRatio Pixel ratio.
 * @param {number} sourceResolution Source resolution.
 * @param {ol.Extent} sourceExtent Extent of the data source.
 * @param {number} targetResolution Target resolution.
 * @param {ol.Extent} targetExtent Target extent.
 * @param {ol.reproj.Triangulation} triangulation Calculated triangulation.
 * @param {Array.<{extent: ol.Extent,
 *                 image: (HTMLCanvasElement|Image|HTMLVideoElement)}>} sources
 *             Array of sources.
 * @param {number} gutter Gutter of the sources.
 * @param {boolean=} opt_renderEdges Render reprojection edges.
 * @return {HTMLCanvasElement} Canvas with reprojected data.
 */
function render(width, height, pixelRatio,
  sourceResolution, sourceExtent, targetResolution, targetExtent,
  triangulation, sources, gutter, opt_renderEdges) {

  const context = Object(__WEBPACK_IMPORTED_MODULE_0__dom_js__["a" /* createCanvasContext2D */])(Math.round(pixelRatio * width),
    Math.round(pixelRatio * height));

  if (sources.length === 0) {
    return context.canvas;
  }

  context.scale(pixelRatio, pixelRatio);

  const sourceDataExtent = Object(__WEBPACK_IMPORTED_MODULE_1__extent_js__["j" /* createEmpty */])();
  sources.forEach(function(src, i, arr) {
    Object(__WEBPACK_IMPORTED_MODULE_1__extent_js__["q" /* extend */])(sourceDataExtent, src.extent);
  });

  const canvasWidthInUnits = Object(__WEBPACK_IMPORTED_MODULE_1__extent_js__["E" /* getWidth */])(sourceDataExtent);
  const canvasHeightInUnits = Object(__WEBPACK_IMPORTED_MODULE_1__extent_js__["A" /* getHeight */])(sourceDataExtent);
  const stitchContext = Object(__WEBPACK_IMPORTED_MODULE_0__dom_js__["a" /* createCanvasContext2D */])(
    Math.round(pixelRatio * canvasWidthInUnits / sourceResolution),
    Math.round(pixelRatio * canvasHeightInUnits / sourceResolution));

  const stitchScale = pixelRatio / sourceResolution;

  sources.forEach(function(src, i, arr) {
    const xPos = src.extent[0] - sourceDataExtent[0];
    const yPos = -(src.extent[3] - sourceDataExtent[3]);
    const srcWidth = Object(__WEBPACK_IMPORTED_MODULE_1__extent_js__["E" /* getWidth */])(src.extent);
    const srcHeight = Object(__WEBPACK_IMPORTED_MODULE_1__extent_js__["A" /* getHeight */])(src.extent);

    stitchContext.drawImage(
      src.image,
      gutter, gutter,
      src.image.width - 2 * gutter, src.image.height - 2 * gutter,
      xPos * stitchScale, yPos * stitchScale,
      srcWidth * stitchScale, srcHeight * stitchScale);
  });

  const targetTopLeft = Object(__WEBPACK_IMPORTED_MODULE_1__extent_js__["C" /* getTopLeft */])(targetExtent);

  triangulation.getTriangles().forEach(function(triangle, i, arr) {
    /* Calculate affine transform (src -> dst)
     * Resulting matrix can be used to transform coordinate
     * from `sourceProjection` to destination pixels.
     *
     * To optimize number of context calls and increase numerical stability,
     * we also do the following operations:
     * trans(-topLeftExtentCorner), scale(1 / targetResolution), scale(1, -1)
     * here before solving the linear system so [ui, vi] are pixel coordinates.
     *
     * Src points: xi, yi
     * Dst points: ui, vi
     * Affine coefficients: aij
     *
     * | x0 y0 1  0  0 0 |   |a00|   |u0|
     * | x1 y1 1  0  0 0 |   |a01|   |u1|
     * | x2 y2 1  0  0 0 | x |a02| = |u2|
     * |  0  0 0 x0 y0 1 |   |a10|   |v0|
     * |  0  0 0 x1 y1 1 |   |a11|   |v1|
     * |  0  0 0 x2 y2 1 |   |a12|   |v2|
     */
    const source = triangle.source;
    const target = triangle.target;
    let x0 = source[0][0], y0 = source[0][1];
    let x1 = source[1][0], y1 = source[1][1];
    let x2 = source[2][0], y2 = source[2][1];
    const u0 = (target[0][0] - targetTopLeft[0]) / targetResolution;
    const v0 = -(target[0][1] - targetTopLeft[1]) / targetResolution;
    const u1 = (target[1][0] - targetTopLeft[0]) / targetResolution;
    const v1 = -(target[1][1] - targetTopLeft[1]) / targetResolution;
    const u2 = (target[2][0] - targetTopLeft[0]) / targetResolution;
    const v2 = -(target[2][1] - targetTopLeft[1]) / targetResolution;

    // Shift all the source points to improve numerical stability
    // of all the subsequent calculations. The [x0, y0] is used here.
    // This is also used to simplify the linear system.
    const sourceNumericalShiftX = x0;
    const sourceNumericalShiftY = y0;
    x0 = 0;
    y0 = 0;
    x1 -= sourceNumericalShiftX;
    y1 -= sourceNumericalShiftY;
    x2 -= sourceNumericalShiftX;
    y2 -= sourceNumericalShiftY;

    const augmentedMatrix = [
      [x1, y1, 0, 0, u1 - u0],
      [x2, y2, 0, 0, u2 - u0],
      [0, 0, x1, y1, v1 - v0],
      [0, 0, x2, y2, v2 - v0]
    ];
    const affineCoefs = Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["f" /* solveLinearSystem */])(augmentedMatrix);
    if (!affineCoefs) {
      return;
    }

    context.save();
    context.beginPath();
    const centroidX = (u0 + u1 + u2) / 3;
    const centroidY = (v0 + v1 + v2) / 3;
    const p0 = enlargeClipPoint(centroidX, centroidY, u0, v0);
    const p1 = enlargeClipPoint(centroidX, centroidY, u1, v1);
    const p2 = enlargeClipPoint(centroidX, centroidY, u2, v2);

    context.moveTo(p1[0], p1[1]);
    context.lineTo(p0[0], p0[1]);
    context.lineTo(p2[0], p2[1]);
    context.clip();

    context.transform(
      affineCoefs[0], affineCoefs[2], affineCoefs[1], affineCoefs[3], u0, v0);

    context.translate(sourceDataExtent[0] - sourceNumericalShiftX,
      sourceDataExtent[3] - sourceNumericalShiftY);

    context.scale(sourceResolution / pixelRatio,
      -sourceResolution / pixelRatio);

    context.drawImage(stitchContext.canvas, 0, 0);
    context.restore();
  });

  if (opt_renderEdges) {
    context.save();

    context.strokeStyle = 'black';
    context.lineWidth = 1;

    triangulation.getTriangles().forEach(function(triangle, i, arr) {
      const target = triangle.target;
      const u0 = (target[0][0] - targetTopLeft[0]) / targetResolution;
      const v0 = -(target[0][1] - targetTopLeft[1]) / targetResolution;
      const u1 = (target[1][0] - targetTopLeft[0]) / targetResolution;
      const v1 = -(target[1][1] - targetTopLeft[1]) / targetResolution;
      const u2 = (target[2][0] - targetTopLeft[0]) / targetResolution;
      const v2 = -(target[2][1] - targetTopLeft[1]) / targetResolution;

      context.beginPath();
      context.moveTo(u1, v1);
      context.lineTo(u0, v0);
      context.lineTo(u2, v2);
      context.closePath();
      context.stroke();
    });

    context.restore();
  }
  return context.canvas;
}


/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__LayerType_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layer_Layer_js__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layer_TileProperty_js__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__obj_js__ = __webpack_require__(3);
/**
 * @module ol/layer/Tile
 */






/**
 * @classdesc
 * For layer sources that provide pre-rendered, tiled images in grids that are
 * organized by zoom levels for specific resolutions.
 * Note that any property set in the options is set as a {@link ol.Object}
 * property on the layer object; for example, setting `title: 'My Title'` in the
 * options means that `title` is observable, and has get/set accessors.
 *
 * @constructor
 * @extends {ol.layer.Layer}
 * @fires ol.render.Event
 * @param {olx.layer.TileOptions=} opt_options Tile layer options.
 * @api
 */
const TileLayer = function(opt_options) {
  const options = opt_options ? opt_options : {};

  const baseOptions = Object(__WEBPACK_IMPORTED_MODULE_4__obj_js__["a" /* assign */])({}, options);

  delete baseOptions.preload;
  delete baseOptions.useInterimTilesOnError;
  __WEBPACK_IMPORTED_MODULE_2__layer_Layer_js__["a" /* default */].call(this,  /** @type {olx.layer.LayerOptions} */ (baseOptions));

  this.setPreload(options.preload !== undefined ? options.preload : 0);
  this.setUseInterimTilesOnError(options.useInterimTilesOnError !== undefined ?
    options.useInterimTilesOnError : true);

  /**
   * The layer type.
   * @protected
   * @type {ol.LayerType}
   */
  this.type = __WEBPACK_IMPORTED_MODULE_1__LayerType_js__["a" /* default */].TILE;

};

Object(__WEBPACK_IMPORTED_MODULE_0__index_js__["g" /* inherits */])(TileLayer, __WEBPACK_IMPORTED_MODULE_2__layer_Layer_js__["a" /* default */]);


/**
 * Return the level as number to which we will preload tiles up to.
 * @return {number} The level to preload tiles up to.
 * @observable
 * @api
 */
TileLayer.prototype.getPreload = function() {
  return /** @type {number} */ (this.get(__WEBPACK_IMPORTED_MODULE_3__layer_TileProperty_js__["a" /* default */].PRELOAD));
};


/**
 * Return the associated {@link ol.source.Tile tilesource} of the layer.
 * @function
 * @return {ol.source.Tile} Source.
 * @api
 */
TileLayer.prototype.getSource;


/**
 * Set the level as number to which we will preload tiles up to.
 * @param {number} preload The level to preload tiles up to.
 * @observable
 * @api
 */
TileLayer.prototype.setPreload = function(preload) {
  this.set(__WEBPACK_IMPORTED_MODULE_3__layer_TileProperty_js__["a" /* default */].PRELOAD, preload);
};


/**
 * Whether we use interim tiles on error.
 * @return {boolean} Use interim tiles on error.
 * @observable
 * @api
 */
TileLayer.prototype.getUseInterimTilesOnError = function() {
  return /** @type {boolean} */ (this.get(__WEBPACK_IMPORTED_MODULE_3__layer_TileProperty_js__["a" /* default */].USE_INTERIM_TILES_ON_ERROR));
};


/**
 * Set whether we use interim tiles on error.
 * @param {boolean} useInterimTilesOnError Use interim tiles on error.
 * @observable
 * @api
 */
TileLayer.prototype.setUseInterimTilesOnError = function(useInterimTilesOnError) {
  this.set(__WEBPACK_IMPORTED_MODULE_3__layer_TileProperty_js__["a" /* default */].USE_INTERIM_TILES_ON_ERROR, useInterimTilesOnError);
};
/* harmony default export */ __webpack_exports__["a"] = (TileLayer);


/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__source_TileImage_js__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tilegrid_js__ = __webpack_require__(28);
/**
 * @module ol/source/XYZ
 */




/**
 * @classdesc
 * Layer source for tile data with URLs in a set XYZ format that are
 * defined in a URL template. By default, this follows the widely-used
 * Google grid where `x` 0 and `y` 0 are in the top left. Grids like
 * TMS where `x` 0 and `y` 0 are in the bottom left can be used by
 * using the `{-y}` placeholder in the URL template, so long as the
 * source does not have a custom tile grid. In this case,
 * {@link ol.source.TileImage} can be used with a `tileUrlFunction`
 * such as:
 *
 *  tileUrlFunction: function(coordinate) {
 *    return 'http://mapserver.com/' + coordinate[0] + '/' +
 *        coordinate[1] + '/' + coordinate[2] + '.png';
 *    }
 *
 *
 * @constructor
 * @extends {ol.source.TileImage}
 * @param {olx.source.XYZOptions=} opt_options XYZ options.
 * @api
 */
const XYZ = function(opt_options) {
  const options = opt_options || {};
  const projection = options.projection !== undefined ?
    options.projection : 'EPSG:3857';

  const tileGrid = options.tileGrid !== undefined ? options.tileGrid :
    Object(__WEBPACK_IMPORTED_MODULE_2__tilegrid_js__["b" /* createXYZ */])({
      extent: Object(__WEBPACK_IMPORTED_MODULE_2__tilegrid_js__["c" /* extentFromProjection */])(projection),
      maxZoom: options.maxZoom,
      minZoom: options.minZoom,
      tileSize: options.tileSize
    });

  __WEBPACK_IMPORTED_MODULE_1__source_TileImage_js__["a" /* default */].call(this, {
    attributions: options.attributions,
    cacheSize: options.cacheSize,
    crossOrigin: options.crossOrigin,
    opaque: options.opaque,
    projection: projection,
    reprojectionErrorThreshold: options.reprojectionErrorThreshold,
    tileGrid: tileGrid,
    tileLoadFunction: options.tileLoadFunction,
    tilePixelRatio: options.tilePixelRatio,
    tileUrlFunction: options.tileUrlFunction,
    url: options.url,
    urls: options.urls,
    wrapX: options.wrapX !== undefined ? options.wrapX : true,
    transition: options.transition
  });

};

Object(__WEBPACK_IMPORTED_MODULE_0__index_js__["g" /* inherits */])(XYZ, __WEBPACK_IMPORTED_MODULE_1__source_TileImage_js__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (XYZ);


/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Tile_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TileState_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dom_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__events_EventType_js__ = __webpack_require__(4);
/**
 * @module ol/ImageTile
 */







/**
 * @constructor
 * @extends {ol.Tile}
 * @param {ol.TileCoord} tileCoord Tile coordinate.
 * @param {ol.TileState} state State.
 * @param {string} src Image source URI.
 * @param {?string} crossOrigin Cross origin.
 * @param {ol.TileLoadFunctionType} tileLoadFunction Tile load function.
 * @param {olx.TileOptions=} opt_options Tile options.
 */
const ImageTile = function(tileCoord, state, src, crossOrigin, tileLoadFunction, opt_options) {

  __WEBPACK_IMPORTED_MODULE_1__Tile_js__["a" /* default */].call(this, tileCoord, state, opt_options);

  /**
   * @private
   * @type {?string}
   */
  this.crossOrigin_ = crossOrigin;

  /**
   * Image URI
   *
   * @private
   * @type {string}
   */
  this.src_ = src;

  /**
   * @private
   * @type {Image|HTMLCanvasElement}
   */
  this.image_ = new Image();
  if (crossOrigin !== null) {
    this.image_.crossOrigin = crossOrigin;
  }

  /**
   * @private
   * @type {Array.<ol.EventsKey>}
   */
  this.imageListenerKeys_ = null;

  /**
   * @private
   * @type {ol.TileLoadFunctionType}
   */
  this.tileLoadFunction_ = tileLoadFunction;

};

Object(__WEBPACK_IMPORTED_MODULE_0__index_js__["g" /* inherits */])(ImageTile, __WEBPACK_IMPORTED_MODULE_1__Tile_js__["a" /* default */]);


/**
 * @inheritDoc
 */
ImageTile.prototype.disposeInternal = function() {
  if (this.state == __WEBPACK_IMPORTED_MODULE_2__TileState_js__["a" /* default */].LOADING) {
    this.unlistenImage_();
    this.image_ = ImageTile.getBlankImage();
  }
  if (this.interimTile) {
    this.interimTile.dispose();
  }
  this.state = __WEBPACK_IMPORTED_MODULE_2__TileState_js__["a" /* default */].ABORT;
  this.changed();
  __WEBPACK_IMPORTED_MODULE_1__Tile_js__["a" /* default */].prototype.disposeInternal.call(this);
};


/**
 * Get the HTML image element for this tile (may be a Canvas, Image, or Video).
 * @return {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} Image.
 * @api
 */
ImageTile.prototype.getImage = function() {
  return this.image_;
};


/**
 * @inheritDoc
 */
ImageTile.prototype.getKey = function() {
  return this.src_;
};


/**
 * Tracks loading or read errors.
 *
 * @private
 */
ImageTile.prototype.handleImageError_ = function() {
  this.state = __WEBPACK_IMPORTED_MODULE_2__TileState_js__["a" /* default */].ERROR;
  this.unlistenImage_();
  this.image_ = ImageTile.getBlankImage();
  this.changed();
};


/**
 * Tracks successful image load.
 *
 * @private
 */
ImageTile.prototype.handleImageLoad_ = function() {
  if (this.image_.naturalWidth && this.image_.naturalHeight) {
    this.state = __WEBPACK_IMPORTED_MODULE_2__TileState_js__["a" /* default */].LOADED;
  } else {
    this.state = __WEBPACK_IMPORTED_MODULE_2__TileState_js__["a" /* default */].EMPTY;
  }
  this.unlistenImage_();
  this.changed();
};


/**
 * @inheritDoc
 * @api
 */
ImageTile.prototype.load = function() {
  if (this.state == __WEBPACK_IMPORTED_MODULE_2__TileState_js__["a" /* default */].ERROR) {
    this.state = __WEBPACK_IMPORTED_MODULE_2__TileState_js__["a" /* default */].IDLE;
    this.image_ = new Image();
    if (this.crossOrigin_ !== null) {
      this.image_.crossOrigin = this.crossOrigin_;
    }
  }
  if (this.state == __WEBPACK_IMPORTED_MODULE_2__TileState_js__["a" /* default */].IDLE) {
    this.state = __WEBPACK_IMPORTED_MODULE_2__TileState_js__["a" /* default */].LOADING;
    this.changed();
    this.imageListenerKeys_ = [
      Object(__WEBPACK_IMPORTED_MODULE_4__events_js__["b" /* listenOnce */])(this.image_, __WEBPACK_IMPORTED_MODULE_5__events_EventType_js__["a" /* default */].ERROR,
        this.handleImageError_, this),
      Object(__WEBPACK_IMPORTED_MODULE_4__events_js__["b" /* listenOnce */])(this.image_, __WEBPACK_IMPORTED_MODULE_5__events_EventType_js__["a" /* default */].LOAD,
        this.handleImageLoad_, this)
    ];
    this.tileLoadFunction_(this, this.src_);
  }
};


/**
 * Discards event handlers which listen for load completion or errors.
 *
 * @private
 */
ImageTile.prototype.unlistenImage_ = function() {
  this.imageListenerKeys_.forEach(__WEBPACK_IMPORTED_MODULE_4__events_js__["e" /* unlistenByKey */]);
  this.imageListenerKeys_ = null;
};


/**
 * Get a 1-pixel blank image.
 * @return {HTMLCanvasElement} Blank image.
 */
ImageTile.getBlankImage = function() {
  const ctx = Object(__WEBPACK_IMPORTED_MODULE_3__dom_js__["a" /* createCanvasContext2D */])(1, 1);
  ctx.fillStyle = 'rgba(0,0,0,0)';
  ctx.fillRect(0, 0, 1, 1);
  return ctx.canvas;
};
/* harmony default export */ __webpack_exports__["a"] = (ImageTile);


/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Tile_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TileState_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__events_EventType_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__extent_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__math_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reproj_js__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__reproj_Triangulation_js__ = __webpack_require__(55);
/**
 * @module ol/reproj/Tile
 */











/**
 * @classdesc
 * Class encapsulating single reprojected tile.
 * See {@link ol.source.TileImage}.
 *
 * @constructor
 * @extends {ol.Tile}
 * @param {ol.proj.Projection} sourceProj Source projection.
 * @param {ol.tilegrid.TileGrid} sourceTileGrid Source tile grid.
 * @param {ol.proj.Projection} targetProj Target projection.
 * @param {ol.tilegrid.TileGrid} targetTileGrid Target tile grid.
 * @param {ol.TileCoord} tileCoord Coordinate of the tile.
 * @param {ol.TileCoord} wrappedTileCoord Coordinate of the tile wrapped in X.
 * @param {number} pixelRatio Pixel ratio.
 * @param {number} gutter Gutter of the source tiles.
 * @param {ol.ReprojTileFunctionType} getTileFunction
 *     Function returning source tiles (z, x, y, pixelRatio).
 * @param {number=} opt_errorThreshold Acceptable reprojection error (in px).
 * @param {boolean=} opt_renderEdges Render reprojection edges.
 */
const ReprojTile = function(sourceProj, sourceTileGrid,
  targetProj, targetTileGrid, tileCoord, wrappedTileCoord,
  pixelRatio, gutter, getTileFunction,
  opt_errorThreshold, opt_renderEdges) {
  __WEBPACK_IMPORTED_MODULE_2__Tile_js__["a" /* default */].call(this, tileCoord, __WEBPACK_IMPORTED_MODULE_3__TileState_js__["a" /* default */].IDLE);

  /**
   * @private
   * @type {boolean}
   */
  this.renderEdges_ = opt_renderEdges !== undefined ? opt_renderEdges : false;

  /**
   * @private
   * @type {number}
   */
  this.pixelRatio_ = pixelRatio;

  /**
   * @private
   * @type {number}
   */
  this.gutter_ = gutter;

  /**
   * @private
   * @type {HTMLCanvasElement}
   */
  this.canvas_ = null;

  /**
   * @private
   * @type {ol.tilegrid.TileGrid}
   */
  this.sourceTileGrid_ = sourceTileGrid;

  /**
   * @private
   * @type {ol.tilegrid.TileGrid}
   */
  this.targetTileGrid_ = targetTileGrid;

  /**
   * @private
   * @type {ol.TileCoord}
   */
  this.wrappedTileCoord_ = wrappedTileCoord ? wrappedTileCoord : tileCoord;

  /**
   * @private
   * @type {!Array.<ol.Tile>}
   */
  this.sourceTiles_ = [];

  /**
   * @private
   * @type {Array.<ol.EventsKey>}
   */
  this.sourcesListenerKeys_ = null;

  /**
   * @private
   * @type {number}
   */
  this.sourceZ_ = 0;

  const targetExtent = targetTileGrid.getTileCoordExtent(this.wrappedTileCoord_);
  const maxTargetExtent = this.targetTileGrid_.getExtent();
  let maxSourceExtent = this.sourceTileGrid_.getExtent();

  const limitedTargetExtent = maxTargetExtent ?
    Object(__WEBPACK_IMPORTED_MODULE_6__extent_js__["B" /* getIntersection */])(targetExtent, maxTargetExtent) : targetExtent;

  if (Object(__WEBPACK_IMPORTED_MODULE_6__extent_js__["u" /* getArea */])(limitedTargetExtent) === 0) {
    // Tile is completely outside range -> EMPTY
    // TODO: is it actually correct that the source even creates the tile ?
    this.state = __WEBPACK_IMPORTED_MODULE_3__TileState_js__["a" /* default */].EMPTY;
    return;
  }

  const sourceProjExtent = sourceProj.getExtent();
  if (sourceProjExtent) {
    if (!maxSourceExtent) {
      maxSourceExtent = sourceProjExtent;
    } else {
      maxSourceExtent = Object(__WEBPACK_IMPORTED_MODULE_6__extent_js__["B" /* getIntersection */])(maxSourceExtent, sourceProjExtent);
    }
  }

  const targetResolution = targetTileGrid.getResolution(
    this.wrappedTileCoord_[0]);

  const targetCenter = Object(__WEBPACK_IMPORTED_MODULE_6__extent_js__["x" /* getCenter */])(limitedTargetExtent);
  const sourceResolution = Object(__WEBPACK_IMPORTED_MODULE_8__reproj_js__["a" /* calculateSourceResolution */])(
    sourceProj, targetProj, targetCenter, targetResolution);

  if (!isFinite(sourceResolution) || sourceResolution <= 0) {
    // invalid sourceResolution -> EMPTY
    // probably edges of the projections when no extent is defined
    this.state = __WEBPACK_IMPORTED_MODULE_3__TileState_js__["a" /* default */].EMPTY;
    return;
  }

  const errorThresholdInPixels = opt_errorThreshold !== undefined ?
    opt_errorThreshold : __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* ERROR_THRESHOLD */];

  /**
   * @private
   * @type {!ol.reproj.Triangulation}
   */
  this.triangulation_ = new __WEBPACK_IMPORTED_MODULE_9__reproj_Triangulation_js__["a" /* default */](
    sourceProj, targetProj, limitedTargetExtent, maxSourceExtent,
    sourceResolution * errorThresholdInPixels);

  if (this.triangulation_.getTriangles().length === 0) {
    // no valid triangles -> EMPTY
    this.state = __WEBPACK_IMPORTED_MODULE_3__TileState_js__["a" /* default */].EMPTY;
    return;
  }

  this.sourceZ_ = sourceTileGrid.getZForResolution(sourceResolution);
  let sourceExtent = this.triangulation_.calculateSourceExtent();

  if (maxSourceExtent) {
    if (sourceProj.canWrapX()) {
      sourceExtent[1] = Object(__WEBPACK_IMPORTED_MODULE_7__math_js__["a" /* clamp */])(
        sourceExtent[1], maxSourceExtent[1], maxSourceExtent[3]);
      sourceExtent[3] = Object(__WEBPACK_IMPORTED_MODULE_7__math_js__["a" /* clamp */])(
        sourceExtent[3], maxSourceExtent[1], maxSourceExtent[3]);
    } else {
      sourceExtent = Object(__WEBPACK_IMPORTED_MODULE_6__extent_js__["B" /* getIntersection */])(sourceExtent, maxSourceExtent);
    }
  }

  if (!Object(__WEBPACK_IMPORTED_MODULE_6__extent_js__["u" /* getArea */])(sourceExtent)) {
    this.state = __WEBPACK_IMPORTED_MODULE_3__TileState_js__["a" /* default */].EMPTY;
  } else {
    const sourceRange = sourceTileGrid.getTileRangeForExtentAndZ(
      sourceExtent, this.sourceZ_);

    for (let srcX = sourceRange.minX; srcX <= sourceRange.maxX; srcX++) {
      for (let srcY = sourceRange.minY; srcY <= sourceRange.maxY; srcY++) {
        const tile = getTileFunction(this.sourceZ_, srcX, srcY, pixelRatio);
        if (tile) {
          this.sourceTiles_.push(tile);
        }
      }
    }

    if (this.sourceTiles_.length === 0) {
      this.state = __WEBPACK_IMPORTED_MODULE_3__TileState_js__["a" /* default */].EMPTY;
    }
  }
};

Object(__WEBPACK_IMPORTED_MODULE_1__index_js__["g" /* inherits */])(ReprojTile, __WEBPACK_IMPORTED_MODULE_2__Tile_js__["a" /* default */]);


/**
 * @inheritDoc
 */
ReprojTile.prototype.disposeInternal = function() {
  if (this.state == __WEBPACK_IMPORTED_MODULE_3__TileState_js__["a" /* default */].LOADING) {
    this.unlistenSources_();
  }
  __WEBPACK_IMPORTED_MODULE_2__Tile_js__["a" /* default */].prototype.disposeInternal.call(this);
};


/**
 * Get the HTML Canvas element for this tile.
 * @return {HTMLCanvasElement} Canvas.
 */
ReprojTile.prototype.getImage = function() {
  return this.canvas_;
};


/**
 * @private
 */
ReprojTile.prototype.reproject_ = function() {
  const sources = [];
  this.sourceTiles_.forEach(function(tile, i, arr) {
    if (tile && tile.getState() == __WEBPACK_IMPORTED_MODULE_3__TileState_js__["a" /* default */].LOADED) {
      sources.push({
        extent: this.sourceTileGrid_.getTileCoordExtent(tile.tileCoord),
        image: tile.getImage()
      });
    }
  }.bind(this));
  this.sourceTiles_.length = 0;

  if (sources.length === 0) {
    this.state = __WEBPACK_IMPORTED_MODULE_3__TileState_js__["a" /* default */].ERROR;
  } else {
    const z = this.wrappedTileCoord_[0];
    const size = this.targetTileGrid_.getTileSize(z);
    const width = typeof size === 'number' ? size : size[0];
    const height = typeof size === 'number' ? size : size[1];
    const targetResolution = this.targetTileGrid_.getResolution(z);
    const sourceResolution = this.sourceTileGrid_.getResolution(this.sourceZ_);

    const targetExtent = this.targetTileGrid_.getTileCoordExtent(
      this.wrappedTileCoord_);
    this.canvas_ = Object(__WEBPACK_IMPORTED_MODULE_8__reproj_js__["b" /* render */])(width, height, this.pixelRatio_,
      sourceResolution, this.sourceTileGrid_.getExtent(),
      targetResolution, targetExtent, this.triangulation_, sources,
      this.gutter_, this.renderEdges_);

    this.state = __WEBPACK_IMPORTED_MODULE_3__TileState_js__["a" /* default */].LOADED;
  }
  this.changed();
};


/**
 * @inheritDoc
 */
ReprojTile.prototype.load = function() {
  if (this.state == __WEBPACK_IMPORTED_MODULE_3__TileState_js__["a" /* default */].IDLE) {
    this.state = __WEBPACK_IMPORTED_MODULE_3__TileState_js__["a" /* default */].LOADING;
    this.changed();

    let leftToLoad = 0;

    this.sourcesListenerKeys_ = [];
    this.sourceTiles_.forEach(function(tile, i, arr) {
      const state = tile.getState();
      if (state == __WEBPACK_IMPORTED_MODULE_3__TileState_js__["a" /* default */].IDLE || state == __WEBPACK_IMPORTED_MODULE_3__TileState_js__["a" /* default */].LOADING) {
        leftToLoad++;

        const sourceListenKey = Object(__WEBPACK_IMPORTED_MODULE_4__events_js__["a" /* listen */])(tile, __WEBPACK_IMPORTED_MODULE_5__events_EventType_js__["a" /* default */].CHANGE,
          function(e) {
            const state = tile.getState();
            if (state == __WEBPACK_IMPORTED_MODULE_3__TileState_js__["a" /* default */].LOADED ||
                  state == __WEBPACK_IMPORTED_MODULE_3__TileState_js__["a" /* default */].ERROR ||
                  state == __WEBPACK_IMPORTED_MODULE_3__TileState_js__["a" /* default */].EMPTY) {
              Object(__WEBPACK_IMPORTED_MODULE_4__events_js__["e" /* unlistenByKey */])(sourceListenKey);
              leftToLoad--;
              if (leftToLoad === 0) {
                this.unlistenSources_();
                this.reproject_();
              }
            }
          }, this);
        this.sourcesListenerKeys_.push(sourceListenKey);
      }
    }.bind(this));

    this.sourceTiles_.forEach(function(tile, i, arr) {
      const state = tile.getState();
      if (state == __WEBPACK_IMPORTED_MODULE_3__TileState_js__["a" /* default */].IDLE) {
        tile.load();
      }
    });

    if (leftToLoad === 0) {
      setTimeout(this.reproject_.bind(this), 0);
    }
  }
};


/**
 * @private
 */
ReprojTile.prototype.unlistenSources_ = function() {
  this.sourcesListenerKeys_.forEach(__WEBPACK_IMPORTED_MODULE_4__events_js__["e" /* unlistenByKey */]);
  this.sourcesListenerKeys_ = null;
};
/* harmony default export */ __webpack_exports__["a"] = (ReprojTile);


/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__extent_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__proj_js__ = __webpack_require__(10);
/**
 * @module ol/reproj/Triangulation
 */





/**
 * Maximum number of subdivision steps during raster reprojection triangulation.
 * Prevents high memory usage and large number of proj4 calls (for certain
 * transformations and areas). At most `2*(2^this)` triangles are created for
 * each triangulated extent (tile/image).
 * @type {number}
 */
const MAX_SUBDIVISION = 10;


/**
 * Maximum allowed size of triangle relative to world width. When transforming
 * corners of world extent between certain projections, the resulting
 * triangulation seems to have zero error and no subdivision is performed. If
 * the triangle width is more than this (relative to world width; 0-1),
 * subdivison is forced (up to `MAX_SUBDIVISION`). Default is `0.25`.
 * @type {number}
 */
const MAX_TRIANGLE_WIDTH = 0.25;


/**
 * @classdesc
 * Class containing triangulation of the given target extent.
 * Used for determining source data and the reprojection itself.
 *
 * @param {ol.proj.Projection} sourceProj Source projection.
 * @param {ol.proj.Projection} targetProj Target projection.
 * @param {ol.Extent} targetExtent Target extent to triangulate.
 * @param {ol.Extent} maxSourceExtent Maximal source extent that can be used.
 * @param {number} errorThreshold Acceptable error (in source units).
 * @constructor
 */
const Triangulation = function(sourceProj, targetProj, targetExtent,
  maxSourceExtent, errorThreshold) {

  /**
   * @type {ol.proj.Projection}
   * @private
   */
  this.sourceProj_ = sourceProj;

  /**
   * @type {ol.proj.Projection}
   * @private
   */
  this.targetProj_ = targetProj;

  /** @type {!Object.<string, ol.Coordinate>} */
  let transformInvCache = {};
  const transformInv = Object(__WEBPACK_IMPORTED_MODULE_2__proj_js__["g" /* getTransform */])(this.targetProj_, this.sourceProj_);

  /**
   * @param {ol.Coordinate} c A coordinate.
   * @return {ol.Coordinate} Transformed coordinate.
   * @private
   */
  this.transformInv_ = function(c) {
    const key = c[0] + '/' + c[1];
    if (!transformInvCache[key]) {
      transformInvCache[key] = transformInv(c);
    }
    return transformInvCache[key];
  };

  /**
   * @type {ol.Extent}
   * @private
   */
  this.maxSourceExtent_ = maxSourceExtent;

  /**
   * @type {number}
   * @private
   */
  this.errorThresholdSquared_ = errorThreshold * errorThreshold;

  /**
   * @type {Array.<ol.ReprojTriangle>}
   * @private
   */
  this.triangles_ = [];

  /**
   * Indicates that the triangulation crosses edge of the source projection.
   * @type {boolean}
   * @private
   */
  this.wrapsXInSource_ = false;

  /**
   * @type {boolean}
   * @private
   */
  this.canWrapXInSource_ = this.sourceProj_.canWrapX() &&
      !!maxSourceExtent &&
      !!this.sourceProj_.getExtent() &&
      (Object(__WEBPACK_IMPORTED_MODULE_0__extent_js__["E" /* getWidth */])(maxSourceExtent) == Object(__WEBPACK_IMPORTED_MODULE_0__extent_js__["E" /* getWidth */])(this.sourceProj_.getExtent()));

  /**
   * @type {?number}
   * @private
   */
  this.sourceWorldWidth_ = this.sourceProj_.getExtent() ?
    Object(__WEBPACK_IMPORTED_MODULE_0__extent_js__["E" /* getWidth */])(this.sourceProj_.getExtent()) : null;

  /**
   * @type {?number}
   * @private
   */
  this.targetWorldWidth_ = this.targetProj_.getExtent() ?
    Object(__WEBPACK_IMPORTED_MODULE_0__extent_js__["E" /* getWidth */])(this.targetProj_.getExtent()) : null;

  const destinationTopLeft = Object(__WEBPACK_IMPORTED_MODULE_0__extent_js__["C" /* getTopLeft */])(targetExtent);
  const destinationTopRight = Object(__WEBPACK_IMPORTED_MODULE_0__extent_js__["D" /* getTopRight */])(targetExtent);
  const destinationBottomRight = Object(__WEBPACK_IMPORTED_MODULE_0__extent_js__["w" /* getBottomRight */])(targetExtent);
  const destinationBottomLeft = Object(__WEBPACK_IMPORTED_MODULE_0__extent_js__["v" /* getBottomLeft */])(targetExtent);
  const sourceTopLeft = this.transformInv_(destinationTopLeft);
  const sourceTopRight = this.transformInv_(destinationTopRight);
  const sourceBottomRight = this.transformInv_(destinationBottomRight);
  const sourceBottomLeft = this.transformInv_(destinationBottomLeft);

  this.addQuad_(
    destinationTopLeft, destinationTopRight,
    destinationBottomRight, destinationBottomLeft,
    sourceTopLeft, sourceTopRight, sourceBottomRight, sourceBottomLeft,
    MAX_SUBDIVISION);

  if (this.wrapsXInSource_) {
    let leftBound = Infinity;
    this.triangles_.forEach(function(triangle, i, arr) {
      leftBound = Math.min(leftBound,
        triangle.source[0][0], triangle.source[1][0], triangle.source[2][0]);
    });

    // Shift triangles to be as close to `leftBound` as possible
    // (if the distance is more than `worldWidth / 2` it can be closer.
    this.triangles_.forEach(function(triangle) {
      if (Math.max(triangle.source[0][0], triangle.source[1][0],
        triangle.source[2][0]) - leftBound > this.sourceWorldWidth_ / 2) {
        const newTriangle = [[triangle.source[0][0], triangle.source[0][1]],
          [triangle.source[1][0], triangle.source[1][1]],
          [triangle.source[2][0], triangle.source[2][1]]];
        if ((newTriangle[0][0] - leftBound) > this.sourceWorldWidth_ / 2) {
          newTriangle[0][0] -= this.sourceWorldWidth_;
        }
        if ((newTriangle[1][0] - leftBound) > this.sourceWorldWidth_ / 2) {
          newTriangle[1][0] -= this.sourceWorldWidth_;
        }
        if ((newTriangle[2][0] - leftBound) > this.sourceWorldWidth_ / 2) {
          newTriangle[2][0] -= this.sourceWorldWidth_;
        }

        // Rarely (if the extent contains both the dateline and prime meridian)
        // the shift can in turn break some triangles.
        // Detect this here and don't shift in such cases.
        const minX = Math.min(
          newTriangle[0][0], newTriangle[1][0], newTriangle[2][0]);
        const maxX = Math.max(
          newTriangle[0][0], newTriangle[1][0], newTriangle[2][0]);
        if ((maxX - minX) < this.sourceWorldWidth_ / 2) {
          triangle.source = newTriangle;
        }
      }
    }.bind(this));
  }

  transformInvCache = {};
};


/**
 * Adds triangle to the triangulation.
 * @param {ol.Coordinate} a The target a coordinate.
 * @param {ol.Coordinate} b The target b coordinate.
 * @param {ol.Coordinate} c The target c coordinate.
 * @param {ol.Coordinate} aSrc The source a coordinate.
 * @param {ol.Coordinate} bSrc The source b coordinate.
 * @param {ol.Coordinate} cSrc The source c coordinate.
 * @private
 */
Triangulation.prototype.addTriangle_ = function(a, b, c,
  aSrc, bSrc, cSrc) {
  this.triangles_.push({
    source: [aSrc, bSrc, cSrc],
    target: [a, b, c]
  });
};


/**
 * Adds quad (points in clock-wise order) to the triangulation
 * (and reprojects the vertices) if valid.
 * Performs quad subdivision if needed to increase precision.
 *
 * @param {ol.Coordinate} a The target a coordinate.
 * @param {ol.Coordinate} b The target b coordinate.
 * @param {ol.Coordinate} c The target c coordinate.
 * @param {ol.Coordinate} d The target d coordinate.
 * @param {ol.Coordinate} aSrc The source a coordinate.
 * @param {ol.Coordinate} bSrc The source b coordinate.
 * @param {ol.Coordinate} cSrc The source c coordinate.
 * @param {ol.Coordinate} dSrc The source d coordinate.
 * @param {number} maxSubdivision Maximal allowed subdivision of the quad.
 * @private
 */
Triangulation.prototype.addQuad_ = function(a, b, c, d,
  aSrc, bSrc, cSrc, dSrc, maxSubdivision) {

  const sourceQuadExtent = Object(__WEBPACK_IMPORTED_MODULE_0__extent_js__["b" /* boundingExtent */])([aSrc, bSrc, cSrc, dSrc]);
  const sourceCoverageX = this.sourceWorldWidth_ ?
    Object(__WEBPACK_IMPORTED_MODULE_0__extent_js__["E" /* getWidth */])(sourceQuadExtent) / this.sourceWorldWidth_ : null;
  const sourceWorldWidth = /** @type {number} */ (this.sourceWorldWidth_);

  // when the quad is wrapped in the source projection
  // it covers most of the projection extent, but not fully
  const wrapsX = this.sourceProj_.canWrapX() &&
               sourceCoverageX > 0.5 && sourceCoverageX < 1;

  let needsSubdivision = false;

  if (maxSubdivision > 0) {
    if (this.targetProj_.isGlobal() && this.targetWorldWidth_) {
      const targetQuadExtent = Object(__WEBPACK_IMPORTED_MODULE_0__extent_js__["b" /* boundingExtent */])([a, b, c, d]);
      const targetCoverageX = Object(__WEBPACK_IMPORTED_MODULE_0__extent_js__["E" /* getWidth */])(targetQuadExtent) / this.targetWorldWidth_;
      needsSubdivision |=
          targetCoverageX > MAX_TRIANGLE_WIDTH;
    }
    if (!wrapsX && this.sourceProj_.isGlobal() && sourceCoverageX) {
      needsSubdivision |=
          sourceCoverageX > MAX_TRIANGLE_WIDTH;
    }
  }

  if (!needsSubdivision && this.maxSourceExtent_) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__extent_js__["F" /* intersects */])(sourceQuadExtent, this.maxSourceExtent_)) {
      // whole quad outside source projection extent -> ignore
      return;
    }
  }

  if (!needsSubdivision) {
    if (!isFinite(aSrc[0]) || !isFinite(aSrc[1]) ||
        !isFinite(bSrc[0]) || !isFinite(bSrc[1]) ||
        !isFinite(cSrc[0]) || !isFinite(cSrc[1]) ||
        !isFinite(dSrc[0]) || !isFinite(dSrc[1])) {
      if (maxSubdivision > 0) {
        needsSubdivision = true;
      } else {
        return;
      }
    }
  }

  if (maxSubdivision > 0) {
    if (!needsSubdivision) {
      const center = [(a[0] + c[0]) / 2, (a[1] + c[1]) / 2];
      const centerSrc = this.transformInv_(center);

      let dx;
      if (wrapsX) {
        const centerSrcEstimX =
            (Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["d" /* modulo */])(aSrc[0], sourceWorldWidth) +
             Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["d" /* modulo */])(cSrc[0], sourceWorldWidth)) / 2;
        dx = centerSrcEstimX -
            Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["d" /* modulo */])(centerSrc[0], sourceWorldWidth);
      } else {
        dx = (aSrc[0] + cSrc[0]) / 2 - centerSrc[0];
      }
      const dy = (aSrc[1] + cSrc[1]) / 2 - centerSrc[1];
      const centerSrcErrorSquared = dx * dx + dy * dy;
      needsSubdivision = centerSrcErrorSquared > this.errorThresholdSquared_;
    }
    if (needsSubdivision) {
      if (Math.abs(a[0] - c[0]) <= Math.abs(a[1] - c[1])) {
        // split horizontally (top & bottom)
        const bc = [(b[0] + c[0]) / 2, (b[1] + c[1]) / 2];
        const bcSrc = this.transformInv_(bc);
        const da = [(d[0] + a[0]) / 2, (d[1] + a[1]) / 2];
        const daSrc = this.transformInv_(da);

        this.addQuad_(
          a, b, bc, da, aSrc, bSrc, bcSrc, daSrc, maxSubdivision - 1);
        this.addQuad_(
          da, bc, c, d, daSrc, bcSrc, cSrc, dSrc, maxSubdivision - 1);
      } else {
        // split vertically (left & right)
        const ab = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
        const abSrc = this.transformInv_(ab);
        const cd = [(c[0] + d[0]) / 2, (c[1] + d[1]) / 2];
        const cdSrc = this.transformInv_(cd);

        this.addQuad_(
          a, ab, cd, d, aSrc, abSrc, cdSrc, dSrc, maxSubdivision - 1);
        this.addQuad_(
          ab, b, c, cd, abSrc, bSrc, cSrc, cdSrc, maxSubdivision - 1);
      }
      return;
    }
  }

  if (wrapsX) {
    if (!this.canWrapXInSource_) {
      return;
    }
    this.wrapsXInSource_ = true;
  }

  this.addTriangle_(a, c, d, aSrc, cSrc, dSrc);
  this.addTriangle_(a, b, c, aSrc, bSrc, cSrc);
};


/**
 * Calculates extent of the 'source' coordinates from all the triangles.
 *
 * @return {ol.Extent} Calculated extent.
 */
Triangulation.prototype.calculateSourceExtent = function() {
  const extent = Object(__WEBPACK_IMPORTED_MODULE_0__extent_js__["j" /* createEmpty */])();

  this.triangles_.forEach(function(triangle, i, arr) {
    const src = triangle.source;
    Object(__WEBPACK_IMPORTED_MODULE_0__extent_js__["r" /* extendCoordinate */])(extent, src[0]);
    Object(__WEBPACK_IMPORTED_MODULE_0__extent_js__["r" /* extendCoordinate */])(extent, src[1]);
    Object(__WEBPACK_IMPORTED_MODULE_0__extent_js__["r" /* extendCoordinate */])(extent, src[2]);
  });

  return extent;
};


/**
 * @return {Array.<ol.ReprojTriangle>} Array of the calculated triangles.
 */
Triangulation.prototype.getTriangles = function() {
  return this.triangles_;
};
/* harmony default export */ __webpack_exports__["a"] = (Triangulation);


/***/ })

},[330]);