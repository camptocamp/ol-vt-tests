webpackJsonp([0],{

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @enum {string}
 */
var _ol_format_FormatType_ = {
  ARRAY_BUFFER: 'arraybuffer',
  JSON: 'json',
  TEXT: 'text',
  XML: 'xml'
};

/* harmony default export */ __webpack_exports__["a"] = (_ol_format_FormatType_);


/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__extent_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__geom_geometrylayout_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__geom_geometrytype_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__geom_simplegeometry_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__geom_flat_closest_js__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__geom_flat_deflate_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__geom_flat_inflate_js__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__geom_flat_interpolate_js__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__geom_flat_intersectsextent_js__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__geom_flat_length_js__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__geom_flat_segments_js__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__geom_flat_simplify_js__ = __webpack_require__(34);















/**
 * @classdesc
 * Linestring geometry.
 *
 * @constructor
 * @extends {ol.geom.SimpleGeometry}
 * @param {Array.<ol.Coordinate>} coordinates Coordinates.
 * @param {ol.geom.GeometryLayout=} opt_layout Layout.
 * @api
 */
var _ol_geom_LineString_ = function(coordinates, opt_layout) {

  __WEBPACK_IMPORTED_MODULE_5__geom_simplegeometry_js__["a" /* default */].call(this);

  /**
   * @private
   * @type {ol.Coordinate}
   */
  this.flatMidpoint_ = null;

  /**
   * @private
   * @type {number}
   */
  this.flatMidpointRevision_ = -1;

  /**
   * @private
   * @type {number}
   */
  this.maxDelta_ = -1;

  /**
   * @private
   * @type {number}
   */
  this.maxDeltaRevision_ = -1;

  this.setCoordinates(coordinates, opt_layout);

};

__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_geom_LineString_, __WEBPACK_IMPORTED_MODULE_5__geom_simplegeometry_js__["a" /* default */]);


/**
 * Append the passed coordinate to the coordinates of the linestring.
 * @param {ol.Coordinate} coordinate Coordinate.
 * @api
 */
_ol_geom_LineString_.prototype.appendCoordinate = function(coordinate) {
  if (!this.flatCoordinates) {
    this.flatCoordinates = coordinate.slice();
  } else {
    __WEBPACK_IMPORTED_MODULE_1__array_js__["a" /* default */].extend(this.flatCoordinates, coordinate);
  }
  this.changed();
};


/**
 * Make a complete copy of the geometry.
 * @return {!ol.geom.LineString} Clone.
 * @override
 * @api
 */
_ol_geom_LineString_.prototype.clone = function() {
  var lineString = new _ol_geom_LineString_(null);
  lineString.setFlatCoordinates(this.layout, this.flatCoordinates.slice());
  return lineString;
};


/**
 * @inheritDoc
 */
_ol_geom_LineString_.prototype.closestPointXY = function(x, y, closestPoint, minSquaredDistance) {
  if (minSquaredDistance <
      __WEBPACK_IMPORTED_MODULE_2__extent_js__["a" /* default */].closestSquaredDistanceXY(this.getExtent(), x, y)) {
    return minSquaredDistance;
  }
  if (this.maxDeltaRevision_ != this.getRevision()) {
    this.maxDelta_ = Math.sqrt(__WEBPACK_IMPORTED_MODULE_6__geom_flat_closest_js__["a" /* default */].getMaxSquaredDelta(
        this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, 0));
    this.maxDeltaRevision_ = this.getRevision();
  }
  return __WEBPACK_IMPORTED_MODULE_6__geom_flat_closest_js__["a" /* default */].getClosestPoint(
      this.flatCoordinates, 0, this.flatCoordinates.length, this.stride,
      this.maxDelta_, false, x, y, closestPoint, minSquaredDistance);
};


/**
 * Iterate over each segment, calling the provided callback.
 * If the callback returns a truthy value the function returns that
 * value immediately. Otherwise the function returns `false`.
 *
 * @param {function(this: S, ol.Coordinate, ol.Coordinate): T} callback Function
 *     called for each segment.
 * @param {S=} opt_this The object to be used as the value of 'this'
 *     within callback.
 * @return {T|boolean} Value.
 * @template T,S
 * @api
 */
_ol_geom_LineString_.prototype.forEachSegment = function(callback, opt_this) {
  return __WEBPACK_IMPORTED_MODULE_12__geom_flat_segments_js__["a" /* default */].forEach(this.flatCoordinates, 0,
      this.flatCoordinates.length, this.stride, callback, opt_this);
};


/**
 * Returns the coordinate at `m` using linear interpolation, or `null` if no
 * such coordinate exists.
 *
 * `opt_extrapolate` controls extrapolation beyond the range of Ms in the
 * MultiLineString. If `opt_extrapolate` is `true` then Ms less than the first
 * M will return the first coordinate and Ms greater than the last M will
 * return the last coordinate.
 *
 * @param {number} m M.
 * @param {boolean=} opt_extrapolate Extrapolate. Default is `false`.
 * @return {ol.Coordinate} Coordinate.
 * @api
 */
_ol_geom_LineString_.prototype.getCoordinateAtM = function(m, opt_extrapolate) {
  if (this.layout != __WEBPACK_IMPORTED_MODULE_3__geom_geometrylayout_js__["a" /* default */].XYM &&
      this.layout != __WEBPACK_IMPORTED_MODULE_3__geom_geometrylayout_js__["a" /* default */].XYZM) {
    return null;
  }
  var extrapolate = opt_extrapolate !== undefined ? opt_extrapolate : false;
  return __WEBPACK_IMPORTED_MODULE_9__geom_flat_interpolate_js__["a" /* default */].lineStringCoordinateAtM(this.flatCoordinates, 0,
      this.flatCoordinates.length, this.stride, m, extrapolate);
};


/**
 * Return the coordinates of the linestring.
 * @return {Array.<ol.Coordinate>} Coordinates.
 * @override
 * @api
 */
_ol_geom_LineString_.prototype.getCoordinates = function() {
  return __WEBPACK_IMPORTED_MODULE_8__geom_flat_inflate_js__["a" /* default */].coordinates(
      this.flatCoordinates, 0, this.flatCoordinates.length, this.stride);
};


/**
 * Return the coordinate at the provided fraction along the linestring.
 * The `fraction` is a number between 0 and 1, where 0 is the start of the
 * linestring and 1 is the end.
 * @param {number} fraction Fraction.
 * @param {ol.Coordinate=} opt_dest Optional coordinate whose values will
 *     be modified. If not provided, a new coordinate will be returned.
 * @return {ol.Coordinate} Coordinate of the interpolated point.
 * @api
 */
_ol_geom_LineString_.prototype.getCoordinateAt = function(fraction, opt_dest) {
  return __WEBPACK_IMPORTED_MODULE_9__geom_flat_interpolate_js__["a" /* default */].lineString(
      this.flatCoordinates, 0, this.flatCoordinates.length, this.stride,
      fraction, opt_dest);
};


/**
 * Return the length of the linestring on projected plane.
 * @return {number} Length (on projected plane).
 * @api
 */
_ol_geom_LineString_.prototype.getLength = function() {
  return __WEBPACK_IMPORTED_MODULE_11__geom_flat_length_js__["a" /* default */].lineString(
      this.flatCoordinates, 0, this.flatCoordinates.length, this.stride);
};


/**
 * @return {Array.<number>} Flat midpoint.
 */
_ol_geom_LineString_.prototype.getFlatMidpoint = function() {
  if (this.flatMidpointRevision_ != this.getRevision()) {
    this.flatMidpoint_ = this.getCoordinateAt(0.5, this.flatMidpoint_);
    this.flatMidpointRevision_ = this.getRevision();
  }
  return this.flatMidpoint_;
};


/**
 * @inheritDoc
 */
_ol_geom_LineString_.prototype.getSimplifiedGeometryInternal = function(squaredTolerance) {
  var simplifiedFlatCoordinates = [];
  simplifiedFlatCoordinates.length = __WEBPACK_IMPORTED_MODULE_13__geom_flat_simplify_js__["a" /* default */].douglasPeucker(
      this.flatCoordinates, 0, this.flatCoordinates.length, this.stride,
      squaredTolerance, simplifiedFlatCoordinates, 0);
  var simplifiedLineString = new _ol_geom_LineString_(null);
  simplifiedLineString.setFlatCoordinates(
      __WEBPACK_IMPORTED_MODULE_3__geom_geometrylayout_js__["a" /* default */].XY, simplifiedFlatCoordinates);
  return simplifiedLineString;
};


/**
 * @inheritDoc
 * @api
 */
_ol_geom_LineString_.prototype.getType = function() {
  return __WEBPACK_IMPORTED_MODULE_4__geom_geometrytype_js__["a" /* default */].LINE_STRING;
};


/**
 * @inheritDoc
 * @api
 */
_ol_geom_LineString_.prototype.intersectsExtent = function(extent) {
  return __WEBPACK_IMPORTED_MODULE_10__geom_flat_intersectsextent_js__["a" /* default */].lineString(
      this.flatCoordinates, 0, this.flatCoordinates.length, this.stride,
      extent);
};


/**
 * Set the coordinates of the linestring.
 * @param {Array.<ol.Coordinate>} coordinates Coordinates.
 * @param {ol.geom.GeometryLayout=} opt_layout Layout.
 * @override
 * @api
 */
_ol_geom_LineString_.prototype.setCoordinates = function(coordinates, opt_layout) {
  if (!coordinates) {
    this.setFlatCoordinates(__WEBPACK_IMPORTED_MODULE_3__geom_geometrylayout_js__["a" /* default */].XY, null);
  } else {
    this.setLayout(opt_layout, coordinates, 1);
    if (!this.flatCoordinates) {
      this.flatCoordinates = [];
    }
    this.flatCoordinates.length = __WEBPACK_IMPORTED_MODULE_7__geom_flat_deflate_js__["a" /* default */].coordinates(
        this.flatCoordinates, 0, coordinates, this.stride);
    this.changed();
  }
};


/**
 * @param {ol.geom.GeometryLayout} layout Layout.
 * @param {Array.<number>} flatCoordinates Flat coordinates.
 */
_ol_geom_LineString_.prototype.setFlatCoordinates = function(layout, flatCoordinates) {
  this.setFlatCoordinatesInternal(layout, flatCoordinates);
  this.changed();
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_geom_LineString_);


/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__extent_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__geom_geometrylayout_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__geom_geometrytype_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__geom_point_js__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__geom_simplegeometry_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__geom_flat_deflate_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__geom_flat_inflate_js__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__math_js__ = __webpack_require__(4);











/**
 * @classdesc
 * Multi-point geometry.
 *
 * @constructor
 * @extends {ol.geom.SimpleGeometry}
 * @param {Array.<ol.Coordinate>} coordinates Coordinates.
 * @param {ol.geom.GeometryLayout=} opt_layout Layout.
 * @api
 */
var _ol_geom_MultiPoint_ = function(coordinates, opt_layout) {
  __WEBPACK_IMPORTED_MODULE_6__geom_simplegeometry_js__["a" /* default */].call(this);
  this.setCoordinates(coordinates, opt_layout);
};

__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_geom_MultiPoint_, __WEBPACK_IMPORTED_MODULE_6__geom_simplegeometry_js__["a" /* default */]);


/**
 * Append the passed point to this multipoint.
 * @param {ol.geom.Point} point Point.
 * @api
 */
_ol_geom_MultiPoint_.prototype.appendPoint = function(point) {
  if (!this.flatCoordinates) {
    this.flatCoordinates = point.getFlatCoordinates().slice();
  } else {
    __WEBPACK_IMPORTED_MODULE_1__array_js__["a" /* default */].extend(this.flatCoordinates, point.getFlatCoordinates());
  }
  this.changed();
};


/**
 * Make a complete copy of the geometry.
 * @return {!ol.geom.MultiPoint} Clone.
 * @override
 * @api
 */
_ol_geom_MultiPoint_.prototype.clone = function() {
  var multiPoint = new _ol_geom_MultiPoint_(null);
  multiPoint.setFlatCoordinates(this.layout, this.flatCoordinates.slice());
  return multiPoint;
};


/**
 * @inheritDoc
 */
_ol_geom_MultiPoint_.prototype.closestPointXY = function(x, y, closestPoint, minSquaredDistance) {
  if (minSquaredDistance <
      __WEBPACK_IMPORTED_MODULE_2__extent_js__["a" /* default */].closestSquaredDistanceXY(this.getExtent(), x, y)) {
    return minSquaredDistance;
  }
  var flatCoordinates = this.flatCoordinates;
  var stride = this.stride;
  var i, ii, j;
  for (i = 0, ii = flatCoordinates.length; i < ii; i += stride) {
    var squaredDistance = __WEBPACK_IMPORTED_MODULE_9__math_js__["a" /* default */].squaredDistance(
        x, y, flatCoordinates[i], flatCoordinates[i + 1]);
    if (squaredDistance < minSquaredDistance) {
      minSquaredDistance = squaredDistance;
      for (j = 0; j < stride; ++j) {
        closestPoint[j] = flatCoordinates[i + j];
      }
      closestPoint.length = stride;
    }
  }
  return minSquaredDistance;
};


/**
 * Return the coordinates of the multipoint.
 * @return {Array.<ol.Coordinate>} Coordinates.
 * @override
 * @api
 */
_ol_geom_MultiPoint_.prototype.getCoordinates = function() {
  return __WEBPACK_IMPORTED_MODULE_8__geom_flat_inflate_js__["a" /* default */].coordinates(
      this.flatCoordinates, 0, this.flatCoordinates.length, this.stride);
};


/**
 * Return the point at the specified index.
 * @param {number} index Index.
 * @return {ol.geom.Point} Point.
 * @api
 */
_ol_geom_MultiPoint_.prototype.getPoint = function(index) {
  var n = !this.flatCoordinates ?
    0 : this.flatCoordinates.length / this.stride;
  if (index < 0 || n <= index) {
    return null;
  }
  var point = new __WEBPACK_IMPORTED_MODULE_5__geom_point_js__["a" /* default */](null);
  point.setFlatCoordinates(this.layout, this.flatCoordinates.slice(
      index * this.stride, (index + 1) * this.stride));
  return point;
};


/**
 * Return the points of this multipoint.
 * @return {Array.<ol.geom.Point>} Points.
 * @api
 */
_ol_geom_MultiPoint_.prototype.getPoints = function() {
  var flatCoordinates = this.flatCoordinates;
  var layout = this.layout;
  var stride = this.stride;
  /** @type {Array.<ol.geom.Point>} */
  var points = [];
  var i, ii;
  for (i = 0, ii = flatCoordinates.length; i < ii; i += stride) {
    var point = new __WEBPACK_IMPORTED_MODULE_5__geom_point_js__["a" /* default */](null);
    point.setFlatCoordinates(layout, flatCoordinates.slice(i, i + stride));
    points.push(point);
  }
  return points;
};


/**
 * @inheritDoc
 * @api
 */
_ol_geom_MultiPoint_.prototype.getType = function() {
  return __WEBPACK_IMPORTED_MODULE_4__geom_geometrytype_js__["a" /* default */].MULTI_POINT;
};


/**
 * @inheritDoc
 * @api
 */
_ol_geom_MultiPoint_.prototype.intersectsExtent = function(extent) {
  var flatCoordinates = this.flatCoordinates;
  var stride = this.stride;
  var i, ii, x, y;
  for (i = 0, ii = flatCoordinates.length; i < ii; i += stride) {
    x = flatCoordinates[i];
    y = flatCoordinates[i + 1];
    if (__WEBPACK_IMPORTED_MODULE_2__extent_js__["a" /* default */].containsXY(extent, x, y)) {
      return true;
    }
  }
  return false;
};


/**
 * Set the coordinates of the multipoint.
 * @param {Array.<ol.Coordinate>} coordinates Coordinates.
 * @param {ol.geom.GeometryLayout=} opt_layout Layout.
 * @override
 * @api
 */
_ol_geom_MultiPoint_.prototype.setCoordinates = function(coordinates, opt_layout) {
  if (!coordinates) {
    this.setFlatCoordinates(__WEBPACK_IMPORTED_MODULE_3__geom_geometrylayout_js__["a" /* default */].XY, null);
  } else {
    this.setLayout(opt_layout, coordinates, 1);
    if (!this.flatCoordinates) {
      this.flatCoordinates = [];
    }
    this.flatCoordinates.length = __WEBPACK_IMPORTED_MODULE_7__geom_flat_deflate_js__["a" /* default */].coordinates(
        this.flatCoordinates, 0, coordinates, this.stride);
    this.changed();
  }
};


/**
 * @param {ol.geom.GeometryLayout} layout Layout.
 * @param {Array.<number>} flatCoordinates Flat coordinates.
 */
_ol_geom_MultiPoint_.prototype.setFlatCoordinates = function(layout, flatCoordinates) {
  this.setFlatCoordinatesInternal(layout, flatCoordinates);
  this.changed();
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_geom_MultiPoint_);


/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__extent_js__ = __webpack_require__(1);

var _ol_geom_flat_center_ = {};


/**
 * @param {Array.<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array.<Array.<number>>} endss Endss.
 * @param {number} stride Stride.
 * @return {Array.<number>} Flat centers.
 */
_ol_geom_flat_center_.linearRingss = function(flatCoordinates, offset, endss, stride) {
  var flatCenters = [];
  var i, ii;
  var extent = __WEBPACK_IMPORTED_MODULE_0__extent_js__["a" /* default */].createEmpty();
  for (i = 0, ii = endss.length; i < ii; ++i) {
    var ends = endss[i];
    extent = __WEBPACK_IMPORTED_MODULE_0__extent_js__["a" /* default */].createOrUpdateFromFlatCoordinates(
        flatCoordinates, offset, ends[0], stride);
    flatCenters.push((extent[0] + extent[2]) / 2, (extent[1] + extent[3]) / 2);
    offset = ends[ends.length - 1];
  }
  return flatCenters;
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_geom_flat_center_);


/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__asserts_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_circle_js__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_fill_js__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_stroke_js__ = __webpack_require__(84);






/**
 * @classdesc
 * Container for vector feature rendering styles. Any changes made to the style
 * or its children through `set*()` methods will not take effect until the
 * feature or layer that uses the style is re-rendered.
 *
 * @constructor
 * @struct
 * @param {olx.style.StyleOptions=} opt_options Style options.
 * @api
 */
var _ol_style_Style_ = function(opt_options) {

  var options = opt_options || {};

  /**
   * @private
   * @type {string|ol.geom.Geometry|ol.StyleGeometryFunction}
   */
  this.geometry_ = null;

  /**
   * @private
   * @type {!ol.StyleGeometryFunction}
   */
  this.geometryFunction_ = _ol_style_Style_.defaultGeometryFunction;

  if (options.geometry !== undefined) {
    this.setGeometry(options.geometry);
  }

  /**
   * @private
   * @type {ol.style.Fill}
   */
  this.fill_ = options.fill !== undefined ? options.fill : null;

  /**
   * @private
   * @type {ol.style.Image}
   */
  this.image_ = options.image !== undefined ? options.image : null;

  /**
   * @private
   * @type {ol.StyleRenderFunction|null}
   */
  this.renderer_ = options.renderer !== undefined ? options.renderer : null;

  /**
   * @private
   * @type {ol.style.Stroke}
   */
  this.stroke_ = options.stroke !== undefined ? options.stroke : null;

  /**
   * @private
   * @type {ol.style.Text}
   */
  this.text_ = options.text !== undefined ? options.text : null;

  /**
   * @private
   * @type {number|undefined}
   */
  this.zIndex_ = options.zIndex;

};


/**
 * Clones the style.
 * @return {ol.style.Style} The cloned style.
 * @api
 */
_ol_style_Style_.prototype.clone = function() {
  var geometry = this.getGeometry();
  if (geometry && geometry.clone) {
    geometry = geometry.clone();
  }
  return new _ol_style_Style_({
    geometry: geometry,
    fill: this.getFill() ? this.getFill().clone() : undefined,
    image: this.getImage() ? this.getImage().clone() : undefined,
    stroke: this.getStroke() ? this.getStroke().clone() : undefined,
    text: this.getText() ? this.getText().clone() : undefined,
    zIndex: this.getZIndex()
  });
};


/**
 * Get the custom renderer function that was configured with
 * {@link #setRenderer} or the `renderer` constructor option.
 * @return {ol.StyleRenderFunction|null} Custom renderer function.
 * @api
 */
_ol_style_Style_.prototype.getRenderer = function() {
  return this.renderer_;
};


/**
 * Sets a custom renderer function for this style. When set, `fill`, `stroke`
 * and `image` options of the style will be ignored.
 * @param {ol.StyleRenderFunction|null} renderer Custom renderer function.
 * @api
 */
_ol_style_Style_.prototype.setRenderer = function(renderer) {
  this.renderer_ = renderer;
};


/**
 * Get the geometry to be rendered.
 * @return {string|ol.geom.Geometry|ol.StyleGeometryFunction}
 * Feature property or geometry or function that returns the geometry that will
 * be rendered with this style.
 * @api
 */
_ol_style_Style_.prototype.getGeometry = function() {
  return this.geometry_;
};


/**
 * Get the function used to generate a geometry for rendering.
 * @return {!ol.StyleGeometryFunction} Function that is called with a feature
 * and returns the geometry to render instead of the feature's geometry.
 * @api
 */
_ol_style_Style_.prototype.getGeometryFunction = function() {
  return this.geometryFunction_;
};


/**
 * Get the fill style.
 * @return {ol.style.Fill} Fill style.
 * @api
 */
_ol_style_Style_.prototype.getFill = function() {
  return this.fill_;
};


/**
 * Set the fill style.
 * @param {ol.style.Fill} fill Fill style.
 * @api
 */
_ol_style_Style_.prototype.setFill = function(fill) {
  this.fill_ = fill;
};


/**
 * Get the image style.
 * @return {ol.style.Image} Image style.
 * @api
 */
_ol_style_Style_.prototype.getImage = function() {
  return this.image_;
};


/**
 * Set the image style.
 * @param {ol.style.Image} image Image style.
 * @api
 */
_ol_style_Style_.prototype.setImage = function(image) {
  this.image_ = image;
};


/**
 * Get the stroke style.
 * @return {ol.style.Stroke} Stroke style.
 * @api
 */
_ol_style_Style_.prototype.getStroke = function() {
  return this.stroke_;
};


/**
 * Set the stroke style.
 * @param {ol.style.Stroke} stroke Stroke style.
 * @api
 */
_ol_style_Style_.prototype.setStroke = function(stroke) {
  this.stroke_ = stroke;
};


/**
 * Get the text style.
 * @return {ol.style.Text} Text style.
 * @api
 */
_ol_style_Style_.prototype.getText = function() {
  return this.text_;
};


/**
 * Set the text style.
 * @param {ol.style.Text} text Text style.
 * @api
 */
_ol_style_Style_.prototype.setText = function(text) {
  this.text_ = text;
};


/**
 * Get the z-index for the style.
 * @return {number|undefined} ZIndex.
 * @api
 */
_ol_style_Style_.prototype.getZIndex = function() {
  return this.zIndex_;
};


/**
 * Set a geometry that is rendered instead of the feature's geometry.
 *
 * @param {string|ol.geom.Geometry|ol.StyleGeometryFunction} geometry
 *     Feature property or geometry or function returning a geometry to render
 *     for this style.
 * @api
 */
_ol_style_Style_.prototype.setGeometry = function(geometry) {
  if (typeof geometry === 'function') {
    this.geometryFunction_ = geometry;
  } else if (typeof geometry === 'string') {
    this.geometryFunction_ = function(feature) {
      return /** @type {ol.geom.Geometry} */ (feature.get(geometry));
    };
  } else if (!geometry) {
    this.geometryFunction_ = _ol_style_Style_.defaultGeometryFunction;
  } else if (geometry !== undefined) {
    this.geometryFunction_ = function() {
      return /** @type {ol.geom.Geometry} */ (geometry);
    };
  }
  this.geometry_ = geometry;
};


/**
 * Set the z-index.
 *
 * @param {number|undefined} zIndex ZIndex.
 * @api
 */
_ol_style_Style_.prototype.setZIndex = function(zIndex) {
  this.zIndex_ = zIndex;
};


/**
 * Convert the provided object into a style function.  Functions passed through
 * unchanged.  Arrays of ol.style.Style or single style objects wrapped in a
 * new style function.
 * @param {ol.StyleFunction|Array.<ol.style.Style>|ol.style.Style} obj
 *     A style function, a single style, or an array of styles.
 * @return {ol.StyleFunction} A style function.
 */
_ol_style_Style_.createFunction = function(obj) {
  var styleFunction;

  if (typeof obj === 'function') {
    styleFunction = obj;
  } else {
    /**
     * @type {Array.<ol.style.Style>}
     */
    var styles;
    if (Array.isArray(obj)) {
      styles = obj;
    } else {
      __WEBPACK_IMPORTED_MODULE_0__asserts_js__["a" /* default */].assert(obj instanceof _ol_style_Style_,
          41); // Expected an `ol.style.Style` or an array of `ol.style.Style`
      styles = [obj];
    }
    styleFunction = function() {
      return styles;
    };
  }
  return styleFunction;
};


/**
 * @type {Array.<ol.style.Style>}
 * @private
 */
_ol_style_Style_.default_ = null;


/**
 * @param {ol.Feature|ol.render.Feature} feature Feature.
 * @param {number} resolution Resolution.
 * @return {Array.<ol.style.Style>} Style.
 */
_ol_style_Style_.defaultFunction = function(feature, resolution) {
  // We don't use an immediately-invoked function
  // and a closure so we don't get an error at script evaluation time in
  // browsers that do not support Canvas. (ol.style.Circle does
  // canvas.getContext('2d') at construction time, which will cause an.error
  // in such browsers.)
  if (!_ol_style_Style_.default_) {
    var fill = new __WEBPACK_IMPORTED_MODULE_3__style_fill_js__["a" /* default */]({
      color: 'rgba(255,255,255,0.4)'
    });
    var stroke = new __WEBPACK_IMPORTED_MODULE_4__style_stroke_js__["a" /* default */]({
      color: '#3399CC',
      width: 1.25
    });
    _ol_style_Style_.default_ = [
      new _ol_style_Style_({
        image: new __WEBPACK_IMPORTED_MODULE_2__style_circle_js__["a" /* default */]({
          fill: fill,
          stroke: stroke,
          radius: 5
        }),
        fill: fill,
        stroke: stroke
      })
    ];
  }
  return _ol_style_Style_.default_;
};


/**
 * Default styles for editing features.
 * @return {Object.<ol.geom.GeometryType, Array.<ol.style.Style>>} Styles
 */
_ol_style_Style_.createDefaultEditing = function() {
  /** @type {Object.<ol.geom.GeometryType, Array.<ol.style.Style>>} */
  var styles = {};
  var white = [255, 255, 255, 1];
  var blue = [0, 153, 255, 1];
  var width = 3;
  styles[__WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__["a" /* default */].POLYGON] = [
    new _ol_style_Style_({
      fill: new __WEBPACK_IMPORTED_MODULE_3__style_fill_js__["a" /* default */]({
        color: [255, 255, 255, 0.5]
      })
    })
  ];
  styles[__WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__["a" /* default */].MULTI_POLYGON] =
      styles[__WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__["a" /* default */].POLYGON];

  styles[__WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__["a" /* default */].LINE_STRING] = [
    new _ol_style_Style_({
      stroke: new __WEBPACK_IMPORTED_MODULE_4__style_stroke_js__["a" /* default */]({
        color: white,
        width: width + 2
      })
    }),
    new _ol_style_Style_({
      stroke: new __WEBPACK_IMPORTED_MODULE_4__style_stroke_js__["a" /* default */]({
        color: blue,
        width: width
      })
    })
  ];
  styles[__WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__["a" /* default */].MULTI_LINE_STRING] =
      styles[__WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__["a" /* default */].LINE_STRING];

  styles[__WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__["a" /* default */].CIRCLE] =
      styles[__WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__["a" /* default */].POLYGON].concat(
          styles[__WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__["a" /* default */].LINE_STRING]
      );


  styles[__WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__["a" /* default */].POINT] = [
    new _ol_style_Style_({
      image: new __WEBPACK_IMPORTED_MODULE_2__style_circle_js__["a" /* default */]({
        radius: width * 2,
        fill: new __WEBPACK_IMPORTED_MODULE_3__style_fill_js__["a" /* default */]({
          color: blue
        }),
        stroke: new __WEBPACK_IMPORTED_MODULE_4__style_stroke_js__["a" /* default */]({
          color: white,
          width: width / 2
        })
      }),
      zIndex: Infinity
    })
  ];
  styles[__WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__["a" /* default */].MULTI_POINT] =
      styles[__WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__["a" /* default */].POINT];

  styles[__WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__["a" /* default */].GEOMETRY_COLLECTION] =
      styles[__WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__["a" /* default */].POLYGON].concat(
          styles[__WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__["a" /* default */].LINE_STRING],
          styles[__WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__["a" /* default */].POINT]
      );

  return styles;
};


/**
 * Function that is called with a feature and returns its default geometry.
 * @param {ol.Feature|ol.render.Feature} feature Feature to get the geometry
 *     for.
 * @return {ol.geom.Geometry|ol.render.Feature|undefined} Geometry to render.
 */
_ol_style_Style_.defaultGeometryFunction = function(feature) {
  return feature.getGeometry();
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_style_Style_);


/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_regularshape_js__ = __webpack_require__(234);



/**
 * @classdesc
 * Set circle style for vector features.
 *
 * @constructor
 * @param {olx.style.CircleOptions=} opt_options Options.
 * @extends {ol.style.RegularShape}
 * @api
 */
var _ol_style_Circle_ = function(opt_options) {

  var options = opt_options || {};

  __WEBPACK_IMPORTED_MODULE_1__style_regularshape_js__["a" /* default */].call(this, {
    points: Infinity,
    fill: options.fill,
    radius: options.radius,
    snapToPixel: options.snapToPixel,
    stroke: options.stroke,
    atlasManager: options.atlasManager
  });

};

__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_style_Circle_, __WEBPACK_IMPORTED_MODULE_1__style_regularshape_js__["a" /* default */]);


/**
 * Clones the style.  If an atlasmanager was provided to the original style it will be used in the cloned style, too.
 * @return {ol.style.Circle} The cloned style.
 * @override
 * @api
 */
_ol_style_Circle_.prototype.clone = function() {
  var style = new _ol_style_Circle_({
    fill: this.getFill() ? this.getFill().clone() : undefined,
    stroke: this.getStroke() ? this.getStroke().clone() : undefined,
    radius: this.getRadius(),
    snapToPixel: this.getSnapToPixel(),
    atlasManager: this.atlasManager_
  });
  style.setOpacity(this.getOpacity());
  style.setScale(this.getScale());
  return style;
};


/**
 * Set the circle radius.
 *
 * @param {number} radius Circle radius.
 * @api
 */
_ol_style_Circle_.prototype.setRadius = function(radius) {
  this.radius_ = radius;
  this.render_(this.atlasManager_);
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_style_Circle_);


/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @classdesc
 * A base class used for creating subclasses and not instantiated in
 * apps. Base class for {@link ol.style.Icon}, {@link ol.style.Circle} and
 * {@link ol.style.RegularShape}.
 *
 * @constructor
 * @abstract
 * @param {ol.StyleImageOptions} options Options.
 * @api
 */
var _ol_style_Image_ = function(options) {

  /**
   * @private
   * @type {number}
   */
  this.opacity_ = options.opacity;

  /**
   * @private
   * @type {boolean}
   */
  this.rotateWithView_ = options.rotateWithView;

  /**
   * @private
   * @type {number}
   */
  this.rotation_ = options.rotation;

  /**
   * @private
   * @type {number}
   */
  this.scale_ = options.scale;

  /**
   * @private
   * @type {boolean}
   */
  this.snapToPixel_ = options.snapToPixel;

};


/**
 * Get the symbolizer opacity.
 * @return {number} Opacity.
 * @api
 */
_ol_style_Image_.prototype.getOpacity = function() {
  return this.opacity_;
};


/**
 * Determine whether the symbolizer rotates with the map.
 * @return {boolean} Rotate with map.
 * @api
 */
_ol_style_Image_.prototype.getRotateWithView = function() {
  return this.rotateWithView_;
};


/**
 * Get the symoblizer rotation.
 * @return {number} Rotation.
 * @api
 */
_ol_style_Image_.prototype.getRotation = function() {
  return this.rotation_;
};


/**
 * Get the symbolizer scale.
 * @return {number} Scale.
 * @api
 */
_ol_style_Image_.prototype.getScale = function() {
  return this.scale_;
};


/**
 * Determine whether the symbolizer should be snapped to a pixel.
 * @return {boolean} The symbolizer should snap to a pixel.
 * @api
 */
_ol_style_Image_.prototype.getSnapToPixel = function() {
  return this.snapToPixel_;
};


/**
 * Get the anchor point in pixels. The anchor determines the center point for the
 * symbolizer.
 * @abstract
 * @return {Array.<number>} Anchor.
 */
_ol_style_Image_.prototype.getAnchor = function() {};


/**
 * Get the image element for the symbolizer.
 * @abstract
 * @param {number} pixelRatio Pixel ratio.
 * @return {HTMLCanvasElement|HTMLVideoElement|Image} Image element.
 */
_ol_style_Image_.prototype.getImage = function(pixelRatio) {};


/**
 * @abstract
 * @param {number} pixelRatio Pixel ratio.
 * @return {HTMLCanvasElement|HTMLVideoElement|Image} Image element.
 */
_ol_style_Image_.prototype.getHitDetectionImage = function(pixelRatio) {};


/**
 * @abstract
 * @return {ol.ImageState} Image state.
 */
_ol_style_Image_.prototype.getImageState = function() {};


/**
 * @abstract
 * @return {ol.Size} Image size.
 */
_ol_style_Image_.prototype.getImageSize = function() {};


/**
 * @abstract
 * @return {ol.Size} Size of the hit-detection image.
 */
_ol_style_Image_.prototype.getHitDetectionImageSize = function() {};


/**
 * Get the origin of the symbolizer.
 * @abstract
 * @return {Array.<number>} Origin.
 */
_ol_style_Image_.prototype.getOrigin = function() {};


/**
 * Get the size of the symbolizer (in pixels).
 * @abstract
 * @return {ol.Size} Size.
 */
_ol_style_Image_.prototype.getSize = function() {};


/**
 * Set the opacity.
 *
 * @param {number} opacity Opacity.
 * @api
 */
_ol_style_Image_.prototype.setOpacity = function(opacity) {
  this.opacity_ = opacity;
};


/**
 * Set whether to rotate the style with the view.
 *
 * @param {boolean} rotateWithView Rotate with map.
 */
_ol_style_Image_.prototype.setRotateWithView = function(rotateWithView) {
  this.rotateWithView_ = rotateWithView;
};


/**
 * Set the rotation.
 *
 * @param {number} rotation Rotation.
 * @api
 */
_ol_style_Image_.prototype.setRotation = function(rotation) {
  this.rotation_ = rotation;
};


/**
 * Set the scale.
 *
 * @param {number} scale Scale.
 * @api
 */
_ol_style_Image_.prototype.setScale = function(scale) {
  this.scale_ = scale;
};


/**
 * Set whether to snap the image to the closest pixel.
 *
 * @param {boolean} snapToPixel Snap to pixel?
 */
_ol_style_Image_.prototype.setSnapToPixel = function(snapToPixel) {
  this.snapToPixel_ = snapToPixel;
};


/**
 * @abstract
 * @param {function(this: T, ol.events.Event)} listener Listener function.
 * @param {T} thisArg Value to use as `this` when executing `listener`.
 * @return {ol.EventsKey|undefined} Listener key.
 * @template T
 */
_ol_style_Image_.prototype.listenImageChange = function(listener, thisArg) {};


/**
 * Load not yet loaded URI.
 * @abstract
 */
_ol_style_Image_.prototype.load = function() {};


/**
 * @abstract
 * @param {function(this: T, ol.events.Event)} listener Listener function.
 * @param {T} thisArg Value to use as `this` when executing `listener`.
 * @template T
 */
_ol_style_Image_.prototype.unlistenImageChange = function(listener, thisArg) {};
/* harmony default export */ __webpack_exports__["a"] = (_ol_style_Image_);


/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(252);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(253);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(250), __webpack_require__(251)))

/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(137);

var enc = encodeURIComponent;

var serializers = {
  string: function(str) {
    if (typeof str !== 'string') {
      throw new Error('Expected string to serialize: ' + str);
    }
    return enc(str);
  },
  number: function(num) {
    if (typeof num !== 'number') {
      throw new Error('Expected number to serialize: ' + num);
    }
    return enc(String(num));
  },
  boolean: function(bool) {
    if (typeof bool !== 'boolean') {
      throw new Error('Expected boolean to serialize: ' + bool);
    }
    return bool ? '1' : '0';
  },
  date: function(date) {
    if (!util.isDate(date)) {
      throw new Error('Expected date to serialize: ' + date);
    }
    return enc(date.toISOString());
  },
  array: function(array) {
    if (!util.isArray(array)) {
      throw new Error('Expected array to serialize: ' + array);
    }
    return enc(JSON.stringify(array));
  },
  object: function(obj) {
    return enc(JSON.stringify(obj));
  }
};


/**
 * Get a serializer for a value of the given type.
 * @param {string} type Value type.
 * @return {function(*): string} Function that serializes a value to a string.
 */
exports.get = function(type) {
  if (!(type in serializers)) {
    throw new Error('Unable to serialize type: ' + type);
  }
  return serializers[type];
};


/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(142);


/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ol_ol_css__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ol_ol_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ol_ol_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ol_map__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ol_view__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ol_format_mvt__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ol_layer_vectortile__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ol_source_vectortile__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ol_hashed__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ol_layer_tile__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ol_source_xyz__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ol_tilegrid_tilegrid__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ol_proj__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ol_control_zoom__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_mapbox_to_ol_style__ = __webpack_require__(261);














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


const tileGridMvt = new __WEBPACK_IMPORTED_MODULE_9_ol_tilegrid_tilegrid__["a" /* default */]({
  extent: __WEBPACK_IMPORTED_MODULE_10_ol_proj__["a" /* default */].get('EPSG:3857').getExtent(),
  resolutions: resolutionsMvt,
  tileSize: 512
});

const map = new __WEBPACK_IMPORTED_MODULE_1_ol_map__["a" /* default */]({
  layers: [
    new __WEBPACK_IMPORTED_MODULE_7_ol_layer_tile__["a" /* default */]({
      opacity: 0.3,
      source: new __WEBPACK_IMPORTED_MODULE_8_ol_source_xyz__["a" /* default */]({
        url: 'https://tileserver.dev.bgdi.ch/data/hillshade-europe-cut-mbtiles/{z}/{x}/{y}.png',
        tileGrid: tileGridMvt,
        maxZoom: 14
      })
    }),
    new __WEBPACK_IMPORTED_MODULE_7_ol_layer_tile__["a" /* default */]({
      opacity: 0,
      source: new __WEBPACK_IMPORTED_MODULE_8_ol_source_xyz__["a" /* default */]({
        url: 'https://wmts10.geo.admin.ch/1.0.0/ch.swisstopo.swissalti3d-reliefschattierung/default/current/3857/{z}/{x}/{y}.png',
        tileGrid: new __WEBPACK_IMPORTED_MODULE_9_ol_tilegrid_tilegrid__["a" /* default */]({
          extent: ol.proj.get('EPSG:3857').getExtent(),
          resolutions: resolutionsWmts,
          tileSize: 256
        })
      })
    })
  ],
  target: 'map',
  view: new  __WEBPACK_IMPORTED_MODULE_2_ol_view__["a" /* default */]({
    center: __WEBPACK_IMPORTED_MODULE_10_ol_proj__["a" /* default */].fromLonLat([7.75, 46.7]),
    zoom: 7
  }),
  controls: [
    new __WEBPACK_IMPORTED_MODULE_11_ol_control_zoom__["a" /* default */]({delta: 0.55})
  ]
});

// sync(map);

const mbTilesLayer = new __WEBPACK_IMPORTED_MODULE_4_ol_layer_vectortile__["a" /* default */]({
  declutter: true,
  visible: true,
  source: new __WEBPACK_IMPORTED_MODULE_5_ol_source_vectortile__["a" /* default */]({
    format: new __WEBPACK_IMPORTED_MODULE_3_ol_format_mvt__["a" /* default */](),
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
        Object(__WEBPACK_IMPORTED_MODULE_12_mapbox_to_ol_style__["a" /* default */])(mbTilesLayer, glStyle, 'swissbasemap', undefined, glSpriteData, 'https://vtiles.geops.ch/styles/inspirationskarte/sprite.png', ft);
      });
    });
  });
});



/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__asserts_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pbf__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pbf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pbf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__format_feature_js__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__format_formattype_js__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__geom_geometrylayout_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__geom_geometrytype_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__geom_linestring_js__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__geom_multilinestring_js__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__geom_multipoint_js__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__geom_multipolygon_js__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__geom_point_js__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__geom_polygon_js__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__geom_flat_orient_js__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__proj_projection_js__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__proj_units_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__render_feature_js__ = __webpack_require__(231);
//FIXME Implement projection handling



















/**
 * @classdesc
 * Feature format for reading data in the Mapbox MVT format.
 *
 * @constructor
 * @extends {ol.format.Feature}
 * @param {olx.format.MVTOptions=} opt_options Options.
 * @api
 */
var _ol_format_MVT_ = function(opt_options) {

  __WEBPACK_IMPORTED_MODULE_3__format_feature_js__["a" /* default */].call(this);

  var options = opt_options ? opt_options : {};

  /**
   * @type {ol.proj.Projection}
   */
  this.defaultDataProjection = new __WEBPACK_IMPORTED_MODULE_14__proj_projection_js__["a" /* default */]({
    code: 'EPSG:3857',
    units: __WEBPACK_IMPORTED_MODULE_15__proj_units_js__["a" /* default */].TILE_PIXELS
  });

  /**
   * @private
   * @type {function((ol.geom.Geometry|Object.<string,*>)=)|
   *     function(ol.geom.GeometryType,Array.<number>,
   *         (Array.<number>|Array.<Array.<number>>),Object.<string,*>,number)}
   */
  this.featureClass_ = options.featureClass ?
    options.featureClass : __WEBPACK_IMPORTED_MODULE_16__render_feature_js__["a" /* default */];

  /**
   * @private
   * @type {string|undefined}
   */
  this.geometryName_ = options.geometryName;

  /**
   * @private
   * @type {string}
   */
  this.layerName_ = options.layerName ? options.layerName : 'layer';

  /**
   * @private
   * @type {Array.<string>}
   */
  this.layers_ = options.layers ? options.layers : null;

  /**
   * @private
   * @type {ol.Extent}
   */
  this.extent_ = null;

};

__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_format_MVT_, __WEBPACK_IMPORTED_MODULE_3__format_feature_js__["a" /* default */]);


/**
 * Reader callbacks for parsing the PBF.
 * @type {Object.<string, function(number, Object, ol.ext.PBF)>}
 */
_ol_format_MVT_.pbfReaders_ = {
  layers: function(tag, layers, pbf) {
    if (tag === 3) {
      var layer = {
        keys: [],
        values: [],
        features: []
      };
      var end = pbf.readVarint() + pbf.pos;
      pbf.readFields(_ol_format_MVT_.pbfReaders_.layer, layer, end);
      layer.length = layer.features.length;
      if (layer.length) {
        layers[layer.name] = layer;
      }
    }
  },
  layer: function(tag, layer, pbf) {
    if (tag === 15) {
      layer.version = pbf.readVarint();
    } else if (tag === 1) {
      layer.name = pbf.readString();
    } else if (tag === 5) {
      layer.extent = pbf.readVarint();
    } else if (tag === 2) {
      layer.features.push(pbf.pos);
    } else if (tag === 3) {
      layer.keys.push(pbf.readString());
    } else if (tag === 4) {
      var value = null;
      var end = pbf.readVarint() + pbf.pos;
      while (pbf.pos < end) {
        tag = pbf.readVarint() >> 3;
        value = tag === 1 ? pbf.readString() :
          tag === 2 ? pbf.readFloat() :
            tag === 3 ? pbf.readDouble() :
              tag === 4 ? pbf.readVarint64() :
                tag === 5 ? pbf.readVarint() :
                  tag === 6 ? pbf.readSVarint() :
                    tag === 7 ? pbf.readBoolean() : null;
      }
      layer.values.push(value);
    }
  },
  feature: function(tag, feature, pbf) {
    if (tag == 1) {
      feature.id = pbf.readVarint();
    } else if (tag == 2) {
      var end = pbf.readVarint() + pbf.pos;
      while (pbf.pos < end) {
        var key = feature.layer.keys[pbf.readVarint()];
        var value = feature.layer.values[pbf.readVarint()];
        feature.properties[key] = value;
      }
    } else if (tag == 3) {
      feature.type = pbf.readVarint();
    } else if (tag == 4) {
      feature.geometry = pbf.pos;
    }
  }
};


/**
 * Read a raw feature from the pbf offset stored at index `i` in the raw layer.
 * @suppress {missingProperties}
 * @private
 * @param {ol.ext.PBF} pbf PBF.
 * @param {Object} layer Raw layer.
 * @param {number} i Index of the feature in the raw layer's `features` array.
 * @return {Object} Raw feature.
 */
_ol_format_MVT_.readRawFeature_ = function(pbf, layer, i) {
  pbf.pos = layer.features[i];
  var end = pbf.readVarint() + pbf.pos;

  var feature = {
    layer: layer,
    type: 0,
    properties: {}
  };
  pbf.readFields(_ol_format_MVT_.pbfReaders_.feature, feature, end);
  return feature;
};


/**
 * Read the raw geometry from the pbf offset stored in a raw feature's geometry
 * proeprty.
 * @suppress {missingProperties}
 * @private
 * @param {ol.ext.PBF} pbf PBF.
 * @param {Object} feature Raw feature.
 * @param {Array.<number>} flatCoordinates Array to store flat coordinates in.
 * @param {Array.<number>} ends Array to store ends in.
 */
_ol_format_MVT_.readRawGeometry_ = function(pbf, feature, flatCoordinates, ends) {
  pbf.pos = feature.geometry;

  var end = pbf.readVarint() + pbf.pos;
  var cmd = 1;
  var length = 0;
  var x = 0;
  var y = 0;
  var coordsLen = 0;
  var currentEnd = 0;

  while (pbf.pos < end) {
    if (!length) {
      var cmdLen = pbf.readVarint();
      cmd = cmdLen & 0x7;
      length = cmdLen >> 3;
    }

    length--;

    if (cmd === 1 || cmd === 2) {
      x += pbf.readSVarint();
      y += pbf.readSVarint();

      if (cmd === 1) { // moveTo
        if (coordsLen > currentEnd) {
          ends.push(coordsLen);
          currentEnd = coordsLen;
        }
      }

      flatCoordinates.push(x, y);
      coordsLen += 2;

    } else if (cmd === 7) {

      if (coordsLen > currentEnd) {
        // close polygon
        flatCoordinates.push(
            flatCoordinates[currentEnd], flatCoordinates[currentEnd + 1]);
        coordsLen += 2;
      }

    } else {
      __WEBPACK_IMPORTED_MODULE_1__asserts_js__["a" /* default */].assert(false, 59); // Invalid command found in the PBF
    }
  }

  if (coordsLen > currentEnd) {
    ends.push(coordsLen);
    currentEnd = coordsLen;
  }

};


/**
 * @suppress {missingProperties}
 * @private
 * @param {number} type The raw feature's geometry type
 * @param {number} numEnds Number of ends of the flat coordinates of the
 * geometry.
 * @return {ol.geom.GeometryType} The geometry type.
 */
_ol_format_MVT_.getGeometryType_ = function(type, numEnds) {
  /** @type {ol.geom.GeometryType} */
  var geometryType;
  if (type === 1) {
    geometryType = numEnds === 1 ?
      __WEBPACK_IMPORTED_MODULE_6__geom_geometrytype_js__["a" /* default */].POINT : __WEBPACK_IMPORTED_MODULE_6__geom_geometrytype_js__["a" /* default */].MULTI_POINT;
  } else if (type === 2) {
    geometryType = numEnds === 1 ?
      __WEBPACK_IMPORTED_MODULE_6__geom_geometrytype_js__["a" /* default */].LINE_STRING :
      __WEBPACK_IMPORTED_MODULE_6__geom_geometrytype_js__["a" /* default */].MULTI_LINE_STRING;
  } else if (type === 3) {
    geometryType = __WEBPACK_IMPORTED_MODULE_6__geom_geometrytype_js__["a" /* default */].POLYGON;
    // MultiPolygon not relevant for rendering - winding order determines
    // outer rings of polygons.
  }
  return geometryType;
};

/**
 * @private
 * @param {ol.ext.PBF} pbf PBF
 * @param {Object} rawFeature Raw Mapbox feature.
 * @param {olx.format.ReadOptions=} opt_options Read options.
 * @return {ol.Feature|ol.render.Feature} Feature.
 */
_ol_format_MVT_.prototype.createFeature_ = function(pbf, rawFeature, opt_options) {
  var type = rawFeature.type;
  if (type === 0) {
    return null;
  }

  var feature;
  var id = rawFeature.id;
  var values = rawFeature.properties;
  values[this.layerName_] = rawFeature.layer.name;

  var flatCoordinates = [];
  var ends = [];
  _ol_format_MVT_.readRawGeometry_(pbf, rawFeature, flatCoordinates, ends);

  var geometryType = _ol_format_MVT_.getGeometryType_(type, ends.length);

  if (this.featureClass_ === __WEBPACK_IMPORTED_MODULE_16__render_feature_js__["a" /* default */]) {
    feature = new this.featureClass_(geometryType, flatCoordinates, ends, values, id);
  } else {
    var geom;
    if (geometryType == __WEBPACK_IMPORTED_MODULE_6__geom_geometrytype_js__["a" /* default */].POLYGON) {
      var endss = [];
      var offset = 0;
      var prevEndIndex = 0;
      for (var i = 0, ii = ends.length; i < ii; ++i) {
        var end = ends[i];
        if (!__WEBPACK_IMPORTED_MODULE_13__geom_flat_orient_js__["a" /* default */].linearRingIsClockwise(flatCoordinates, offset, end, 2)) {
          endss.push(ends.slice(prevEndIndex, i));
          prevEndIndex = i;
        }
        offset = end;
      }
      if (endss.length > 1) {
        ends = endss;
        geom = new __WEBPACK_IMPORTED_MODULE_10__geom_multipolygon_js__["a" /* default */](null);
      } else {
        geom = new __WEBPACK_IMPORTED_MODULE_12__geom_polygon_js__["a" /* default */](null);
      }
    } else {
      geom = geometryType === __WEBPACK_IMPORTED_MODULE_6__geom_geometrytype_js__["a" /* default */].POINT ? new __WEBPACK_IMPORTED_MODULE_11__geom_point_js__["a" /* default */](null) :
        geometryType === __WEBPACK_IMPORTED_MODULE_6__geom_geometrytype_js__["a" /* default */].LINE_STRING ? new __WEBPACK_IMPORTED_MODULE_7__geom_linestring_js__["a" /* default */](null) :
          geometryType === __WEBPACK_IMPORTED_MODULE_6__geom_geometrytype_js__["a" /* default */].POLYGON ? new __WEBPACK_IMPORTED_MODULE_12__geom_polygon_js__["a" /* default */](null) :
            geometryType === __WEBPACK_IMPORTED_MODULE_6__geom_geometrytype_js__["a" /* default */].MULTI_POINT ? new __WEBPACK_IMPORTED_MODULE_9__geom_multipoint_js__["a" /* default */] (null) :
              geometryType === __WEBPACK_IMPORTED_MODULE_6__geom_geometrytype_js__["a" /* default */].MULTI_LINE_STRING ? new __WEBPACK_IMPORTED_MODULE_8__geom_multilinestring_js__["a" /* default */](null) :
                null;
    }
    geom.setFlatCoordinates(__WEBPACK_IMPORTED_MODULE_5__geom_geometrylayout_js__["a" /* default */].XY, flatCoordinates, ends);
    feature = new this.featureClass_();
    if (this.geometryName_) {
      feature.setGeometryName(this.geometryName_);
    }
    var geometry = __WEBPACK_IMPORTED_MODULE_3__format_feature_js__["a" /* default */].transformWithOptions(geom, false, this.adaptOptions(opt_options));
    feature.setGeometry(geometry);
    feature.setId(id);
    feature.setProperties(values);
  }

  return feature;
};


/**
 * @inheritDoc
 * @api
 */
_ol_format_MVT_.prototype.getLastExtent = function() {
  return this.extent_;
};


/**
 * @inheritDoc
 */
_ol_format_MVT_.prototype.getType = function() {
  return __WEBPACK_IMPORTED_MODULE_4__format_formattype_js__["a" /* default */].ARRAY_BUFFER;
};


/**
 * @inheritDoc
 * @api
 */
_ol_format_MVT_.prototype.readFeatures = function(source, opt_options) {
  var layers = this.layers_;

  var pbf = new __WEBPACK_IMPORTED_MODULE_2_pbf___default.a(/** @type {ArrayBuffer} */ (source));
  var pbfLayers = pbf.readFields(_ol_format_MVT_.pbfReaders_.layers, {});
  /** @type {Array.<ol.Feature|ol.render.Feature>} */
  var features = [];
  var pbfLayer;
  for (var name in pbfLayers) {
    if (layers && layers.indexOf(name) == -1) {
      continue;
    }
    pbfLayer = pbfLayers[name];

    var rawFeature;
    for (var i = 0, ii = pbfLayer.length; i < ii; ++i) {
      rawFeature = _ol_format_MVT_.readRawFeature_(pbf, pbfLayer, i);
      features.push(this.createFeature_(pbf, rawFeature));
    }
    this.extent_ = pbfLayer ? [0, 0, pbfLayer.extent, pbfLayer.extent] : null;
  }

  return features;
};


/**
 * @inheritDoc
 * @api
 */
_ol_format_MVT_.prototype.readProjection = function(source) {
  return this.defaultDataProjection;
};


/**
 * Sets the layers that features will be read from.
 * @param {Array.<string>} layers Layers.
 * @api
 */
_ol_format_MVT_.prototype.setLayers = function(layers) {
  this.layers_ = layers;
};


/**
 * Not implemented.
 * @override
 */
_ol_format_MVT_.prototype.readFeature = function() {};


/**
 * Not implemented.
 * @override
 */
_ol_format_MVT_.prototype.readGeometry = function() {};


/**
 * Not implemented.
 * @override
 */
_ol_format_MVT_.prototype.writeFeature = function() {};


/**
 * Not implemented.
 * @override
 */
_ol_format_MVT_.prototype.writeGeometry = function() {};


/**
 * Not implemented.
 * @override
 */
_ol_format_MVT_.prototype.writeFeatures = function() {};
/* harmony default export */ __webpack_exports__["a"] = (_ol_format_MVT_);


/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Pbf;

var ieee754 = __webpack_require__(227);

function Pbf(buf) {
    this.buf = ArrayBuffer.isView && ArrayBuffer.isView(buf) ? buf : new Uint8Array(buf || 0);
    this.pos = 0;
    this.type = 0;
    this.length = this.buf.length;
}

Pbf.Varint  = 0; // varint: int32, int64, uint32, uint64, sint32, sint64, bool, enum
Pbf.Fixed64 = 1; // 64-bit: double, fixed64, sfixed64
Pbf.Bytes   = 2; // length-delimited: string, bytes, embedded messages, packed repeated fields
Pbf.Fixed32 = 5; // 32-bit: float, fixed32, sfixed32

var SHIFT_LEFT_32 = (1 << 16) * (1 << 16),
    SHIFT_RIGHT_32 = 1 / SHIFT_LEFT_32;

Pbf.prototype = {

    destroy: function() {
        this.buf = null;
    },

    // === READING =================================================================

    readFields: function(readField, result, end) {
        end = end || this.length;

        while (this.pos < end) {
            var val = this.readVarint(),
                tag = val >> 3,
                startPos = this.pos;

            this.type = val & 0x7;
            readField(tag, result, this);

            if (this.pos === startPos) this.skip(val);
        }
        return result;
    },

    readMessage: function(readField, result) {
        return this.readFields(readField, result, this.readVarint() + this.pos);
    },

    readFixed32: function() {
        var val = readUInt32(this.buf, this.pos);
        this.pos += 4;
        return val;
    },

    readSFixed32: function() {
        var val = readInt32(this.buf, this.pos);
        this.pos += 4;
        return val;
    },

    // 64-bit int handling is based on github.com/dpw/node-buffer-more-ints (MIT-licensed)

    readFixed64: function() {
        var val = readUInt32(this.buf, this.pos) + readUInt32(this.buf, this.pos + 4) * SHIFT_LEFT_32;
        this.pos += 8;
        return val;
    },

    readSFixed64: function() {
        var val = readUInt32(this.buf, this.pos) + readInt32(this.buf, this.pos + 4) * SHIFT_LEFT_32;
        this.pos += 8;
        return val;
    },

    readFloat: function() {
        var val = ieee754.read(this.buf, this.pos, true, 23, 4);
        this.pos += 4;
        return val;
    },

    readDouble: function() {
        var val = ieee754.read(this.buf, this.pos, true, 52, 8);
        this.pos += 8;
        return val;
    },

    readVarint: function(isSigned) {
        var buf = this.buf,
            val, b;

        b = buf[this.pos++]; val  =  b & 0x7f;        if (b < 0x80) return val;
        b = buf[this.pos++]; val |= (b & 0x7f) << 7;  if (b < 0x80) return val;
        b = buf[this.pos++]; val |= (b & 0x7f) << 14; if (b < 0x80) return val;
        b = buf[this.pos++]; val |= (b & 0x7f) << 21; if (b < 0x80) return val;
        b = buf[this.pos];   val |= (b & 0x0f) << 28;

        return readVarintRemainder(val, isSigned, this);
    },

    readVarint64: function() { // for compatibility with v2.0.1
        return this.readVarint(true);
    },

    readSVarint: function() {
        var num = this.readVarint();
        return num % 2 === 1 ? (num + 1) / -2 : num / 2; // zigzag encoding
    },

    readBoolean: function() {
        return Boolean(this.readVarint());
    },

    readString: function() {
        var end = this.readVarint() + this.pos,
            str = readUtf8(this.buf, this.pos, end);
        this.pos = end;
        return str;
    },

    readBytes: function() {
        var end = this.readVarint() + this.pos,
            buffer = this.buf.subarray(this.pos, end);
        this.pos = end;
        return buffer;
    },

    // verbose for performance reasons; doesn't affect gzipped size

    readPackedVarint: function(arr, isSigned) {
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readVarint(isSigned));
        return arr;
    },
    readPackedSVarint: function(arr) {
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readSVarint());
        return arr;
    },
    readPackedBoolean: function(arr) {
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readBoolean());
        return arr;
    },
    readPackedFloat: function(arr) {
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readFloat());
        return arr;
    },
    readPackedDouble: function(arr) {
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readDouble());
        return arr;
    },
    readPackedFixed32: function(arr) {
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readFixed32());
        return arr;
    },
    readPackedSFixed32: function(arr) {
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readSFixed32());
        return arr;
    },
    readPackedFixed64: function(arr) {
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readFixed64());
        return arr;
    },
    readPackedSFixed64: function(arr) {
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readSFixed64());
        return arr;
    },

    skip: function(val) {
        var type = val & 0x7;
        if (type === Pbf.Varint) while (this.buf[this.pos++] > 0x7f) {}
        else if (type === Pbf.Bytes) this.pos = this.readVarint() + this.pos;
        else if (type === Pbf.Fixed32) this.pos += 4;
        else if (type === Pbf.Fixed64) this.pos += 8;
        else throw new Error('Unimplemented type: ' + type);
    },

    // === WRITING =================================================================

    writeTag: function(tag, type) {
        this.writeVarint((tag << 3) | type);
    },

    realloc: function(min) {
        var length = this.length || 16;

        while (length < this.pos + min) length *= 2;

        if (length !== this.length) {
            var buf = new Uint8Array(length);
            buf.set(this.buf);
            this.buf = buf;
            this.length = length;
        }
    },

    finish: function() {
        this.length = this.pos;
        this.pos = 0;
        return this.buf.subarray(0, this.length);
    },

    writeFixed32: function(val) {
        this.realloc(4);
        writeInt32(this.buf, val, this.pos);
        this.pos += 4;
    },

    writeSFixed32: function(val) {
        this.realloc(4);
        writeInt32(this.buf, val, this.pos);
        this.pos += 4;
    },

    writeFixed64: function(val) {
        this.realloc(8);
        writeInt32(this.buf, val & -1, this.pos);
        writeInt32(this.buf, Math.floor(val * SHIFT_RIGHT_32), this.pos + 4);
        this.pos += 8;
    },

    writeSFixed64: function(val) {
        this.realloc(8);
        writeInt32(this.buf, val & -1, this.pos);
        writeInt32(this.buf, Math.floor(val * SHIFT_RIGHT_32), this.pos + 4);
        this.pos += 8;
    },

    writeVarint: function(val) {
        val = +val || 0;

        if (val > 0xfffffff || val < 0) {
            writeBigVarint(val, this);
            return;
        }

        this.realloc(4);

        this.buf[this.pos++] =           val & 0x7f  | (val > 0x7f ? 0x80 : 0); if (val <= 0x7f) return;
        this.buf[this.pos++] = ((val >>>= 7) & 0x7f) | (val > 0x7f ? 0x80 : 0); if (val <= 0x7f) return;
        this.buf[this.pos++] = ((val >>>= 7) & 0x7f) | (val > 0x7f ? 0x80 : 0); if (val <= 0x7f) return;
        this.buf[this.pos++] =   (val >>> 7) & 0x7f;
    },

    writeSVarint: function(val) {
        this.writeVarint(val < 0 ? -val * 2 - 1 : val * 2);
    },

    writeBoolean: function(val) {
        this.writeVarint(Boolean(val));
    },

    writeString: function(str) {
        str = String(str);
        this.realloc(str.length * 4);

        this.pos++; // reserve 1 byte for short string length

        var startPos = this.pos;
        // write the string directly to the buffer and see how much was written
        this.pos = writeUtf8(this.buf, str, this.pos);
        var len = this.pos - startPos;

        if (len >= 0x80) makeRoomForExtraLength(startPos, len, this);

        // finally, write the message length in the reserved place and restore the position
        this.pos = startPos - 1;
        this.writeVarint(len);
        this.pos += len;
    },

    writeFloat: function(val) {
        this.realloc(4);
        ieee754.write(this.buf, val, this.pos, true, 23, 4);
        this.pos += 4;
    },

    writeDouble: function(val) {
        this.realloc(8);
        ieee754.write(this.buf, val, this.pos, true, 52, 8);
        this.pos += 8;
    },

    writeBytes: function(buffer) {
        var len = buffer.length;
        this.writeVarint(len);
        this.realloc(len);
        for (var i = 0; i < len; i++) this.buf[this.pos++] = buffer[i];
    },

    writeRawMessage: function(fn, obj) {
        this.pos++; // reserve 1 byte for short message length

        // write the message directly to the buffer and see how much was written
        var startPos = this.pos;
        fn(obj, this);
        var len = this.pos - startPos;

        if (len >= 0x80) makeRoomForExtraLength(startPos, len, this);

        // finally, write the message length in the reserved place and restore the position
        this.pos = startPos - 1;
        this.writeVarint(len);
        this.pos += len;
    },

    writeMessage: function(tag, fn, obj) {
        this.writeTag(tag, Pbf.Bytes);
        this.writeRawMessage(fn, obj);
    },

    writePackedVarint:   function(tag, arr) { this.writeMessage(tag, writePackedVarint, arr);   },
    writePackedSVarint:  function(tag, arr) { this.writeMessage(tag, writePackedSVarint, arr);  },
    writePackedBoolean:  function(tag, arr) { this.writeMessage(tag, writePackedBoolean, arr);  },
    writePackedFloat:    function(tag, arr) { this.writeMessage(tag, writePackedFloat, arr);    },
    writePackedDouble:   function(tag, arr) { this.writeMessage(tag, writePackedDouble, arr);   },
    writePackedFixed32:  function(tag, arr) { this.writeMessage(tag, writePackedFixed32, arr);  },
    writePackedSFixed32: function(tag, arr) { this.writeMessage(tag, writePackedSFixed32, arr); },
    writePackedFixed64:  function(tag, arr) { this.writeMessage(tag, writePackedFixed64, arr);  },
    writePackedSFixed64: function(tag, arr) { this.writeMessage(tag, writePackedSFixed64, arr); },

    writeBytesField: function(tag, buffer) {
        this.writeTag(tag, Pbf.Bytes);
        this.writeBytes(buffer);
    },
    writeFixed32Field: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed32);
        this.writeFixed32(val);
    },
    writeSFixed32Field: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed32);
        this.writeSFixed32(val);
    },
    writeFixed64Field: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed64);
        this.writeFixed64(val);
    },
    writeSFixed64Field: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed64);
        this.writeSFixed64(val);
    },
    writeVarintField: function(tag, val) {
        this.writeTag(tag, Pbf.Varint);
        this.writeVarint(val);
    },
    writeSVarintField: function(tag, val) {
        this.writeTag(tag, Pbf.Varint);
        this.writeSVarint(val);
    },
    writeStringField: function(tag, str) {
        this.writeTag(tag, Pbf.Bytes);
        this.writeString(str);
    },
    writeFloatField: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed32);
        this.writeFloat(val);
    },
    writeDoubleField: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed64);
        this.writeDouble(val);
    },
    writeBooleanField: function(tag, val) {
        this.writeVarintField(tag, Boolean(val));
    }
};

function readVarintRemainder(l, s, p) {
    var buf = p.buf,
        h, b;

    b = buf[p.pos++]; h  = (b & 0x70) >> 4;  if (b < 0x80) return toNum(l, h, s);
    b = buf[p.pos++]; h |= (b & 0x7f) << 3;  if (b < 0x80) return toNum(l, h, s);
    b = buf[p.pos++]; h |= (b & 0x7f) << 10; if (b < 0x80) return toNum(l, h, s);
    b = buf[p.pos++]; h |= (b & 0x7f) << 17; if (b < 0x80) return toNum(l, h, s);
    b = buf[p.pos++]; h |= (b & 0x7f) << 24; if (b < 0x80) return toNum(l, h, s);
    b = buf[p.pos++]; h |= (b & 0x01) << 31; if (b < 0x80) return toNum(l, h, s);

    throw new Error('Expected varint not more than 10 bytes');
}

function readPackedEnd(pbf) {
    return pbf.type === Pbf.Bytes ?
        pbf.readVarint() + pbf.pos : pbf.pos + 1;
}

function toNum(low, high, isSigned) {
    if (isSigned) {
        return high * 0x100000000 + (low >>> 0);
    }

    return ((high >>> 0) * 0x100000000) + (low >>> 0);
}

function writeBigVarint(val, pbf) {
    var low, high;

    if (val >= 0) {
        low  = (val % 0x100000000) | 0;
        high = (val / 0x100000000) | 0;
    } else {
        low  = ~(-val % 0x100000000);
        high = ~(-val / 0x100000000);

        if (low ^ 0xffffffff) {
            low = (low + 1) | 0;
        } else {
            low = 0;
            high = (high + 1) | 0;
        }
    }

    if (val >= 0x10000000000000000 || val < -0x10000000000000000) {
        throw new Error('Given varint doesn\'t fit into 10 bytes');
    }

    pbf.realloc(10);

    writeBigVarintLow(low, high, pbf);
    writeBigVarintHigh(high, pbf);
}

function writeBigVarintLow(low, high, pbf) {
    pbf.buf[pbf.pos++] = low & 0x7f | 0x80; low >>>= 7;
    pbf.buf[pbf.pos++] = low & 0x7f | 0x80; low >>>= 7;
    pbf.buf[pbf.pos++] = low & 0x7f | 0x80; low >>>= 7;
    pbf.buf[pbf.pos++] = low & 0x7f | 0x80; low >>>= 7;
    pbf.buf[pbf.pos]   = low & 0x7f;
}

function writeBigVarintHigh(high, pbf) {
    var lsb = (high & 0x07) << 4;

    pbf.buf[pbf.pos++] |= lsb         | ((high >>>= 3) ? 0x80 : 0); if (!high) return;
    pbf.buf[pbf.pos++]  = high & 0x7f | ((high >>>= 7) ? 0x80 : 0); if (!high) return;
    pbf.buf[pbf.pos++]  = high & 0x7f | ((high >>>= 7) ? 0x80 : 0); if (!high) return;
    pbf.buf[pbf.pos++]  = high & 0x7f | ((high >>>= 7) ? 0x80 : 0); if (!high) return;
    pbf.buf[pbf.pos++]  = high & 0x7f | ((high >>>= 7) ? 0x80 : 0); if (!high) return;
    pbf.buf[pbf.pos++]  = high & 0x7f;
}

function makeRoomForExtraLength(startPos, len, pbf) {
    var extraLen =
        len <= 0x3fff ? 1 :
        len <= 0x1fffff ? 2 :
        len <= 0xfffffff ? 3 : Math.ceil(Math.log(len) / (Math.LN2 * 7));

    // if 1 byte isn't enough for encoding message length, shift the data to the right
    pbf.realloc(extraLen);
    for (var i = pbf.pos - 1; i >= startPos; i--) pbf.buf[i + extraLen] = pbf.buf[i];
}

function writePackedVarint(arr, pbf)   { for (var i = 0; i < arr.length; i++) pbf.writeVarint(arr[i]);   }
function writePackedSVarint(arr, pbf)  { for (var i = 0; i < arr.length; i++) pbf.writeSVarint(arr[i]);  }
function writePackedFloat(arr, pbf)    { for (var i = 0; i < arr.length; i++) pbf.writeFloat(arr[i]);    }
function writePackedDouble(arr, pbf)   { for (var i = 0; i < arr.length; i++) pbf.writeDouble(arr[i]);   }
function writePackedBoolean(arr, pbf)  { for (var i = 0; i < arr.length; i++) pbf.writeBoolean(arr[i]);  }
function writePackedFixed32(arr, pbf)  { for (var i = 0; i < arr.length; i++) pbf.writeFixed32(arr[i]);  }
function writePackedSFixed32(arr, pbf) { for (var i = 0; i < arr.length; i++) pbf.writeSFixed32(arr[i]); }
function writePackedFixed64(arr, pbf)  { for (var i = 0; i < arr.length; i++) pbf.writeFixed64(arr[i]);  }
function writePackedSFixed64(arr, pbf) { for (var i = 0; i < arr.length; i++) pbf.writeSFixed64(arr[i]); }

// Buffer code below from https://github.com/feross/buffer, MIT-licensed

function readUInt32(buf, pos) {
    return ((buf[pos]) |
        (buf[pos + 1] << 8) |
        (buf[pos + 2] << 16)) +
        (buf[pos + 3] * 0x1000000);
}

function writeInt32(buf, val, pos) {
    buf[pos] = val;
    buf[pos + 1] = (val >>> 8);
    buf[pos + 2] = (val >>> 16);
    buf[pos + 3] = (val >>> 24);
}

function readInt32(buf, pos) {
    return ((buf[pos]) |
        (buf[pos + 1] << 8) |
        (buf[pos + 2] << 16)) +
        (buf[pos + 3] << 24);
}

function readUtf8(buf, pos, end) {
    var str = '';
    var i = pos;

    while (i < end) {
        var b0 = buf[i];
        var c = null; // codepoint
        var bytesPerSequence =
            b0 > 0xEF ? 4 :
            b0 > 0xDF ? 3 :
            b0 > 0xBF ? 2 : 1;

        if (i + bytesPerSequence > end) break;

        var b1, b2, b3;

        if (bytesPerSequence === 1) {
            if (b0 < 0x80) {
                c = b0;
            }
        } else if (bytesPerSequence === 2) {
            b1 = buf[i + 1];
            if ((b1 & 0xC0) === 0x80) {
                c = (b0 & 0x1F) << 0x6 | (b1 & 0x3F);
                if (c <= 0x7F) {
                    c = null;
                }
            }
        } else if (bytesPerSequence === 3) {
            b1 = buf[i + 1];
            b2 = buf[i + 2];
            if ((b1 & 0xC0) === 0x80 && (b2 & 0xC0) === 0x80) {
                c = (b0 & 0xF) << 0xC | (b1 & 0x3F) << 0x6 | (b2 & 0x3F);
                if (c <= 0x7FF || (c >= 0xD800 && c <= 0xDFFF)) {
                    c = null;
                }
            }
        } else if (bytesPerSequence === 4) {
            b1 = buf[i + 1];
            b2 = buf[i + 2];
            b3 = buf[i + 3];
            if ((b1 & 0xC0) === 0x80 && (b2 & 0xC0) === 0x80 && (b3 & 0xC0) === 0x80) {
                c = (b0 & 0xF) << 0x12 | (b1 & 0x3F) << 0xC | (b2 & 0x3F) << 0x6 | (b3 & 0x3F);
                if (c <= 0xFFFF || c >= 0x110000) {
                    c = null;
                }
            }
        }

        if (c === null) {
            c = 0xFFFD;
            bytesPerSequence = 1;

        } else if (c > 0xFFFF) {
            c -= 0x10000;
            str += String.fromCharCode(c >>> 10 & 0x3FF | 0xD800);
            c = 0xDC00 | c & 0x3FF;
        }

        str += String.fromCharCode(c);
        i += bytesPerSequence;
    }

    return str;
}

function writeUtf8(buf, str, pos) {
    for (var i = 0, c, lead; i < str.length; i++) {
        c = str.charCodeAt(i); // code point

        if (c > 0xD7FF && c < 0xE000) {
            if (lead) {
                if (c < 0xDC00) {
                    buf[pos++] = 0xEF;
                    buf[pos++] = 0xBF;
                    buf[pos++] = 0xBD;
                    lead = c;
                    continue;
                } else {
                    c = lead - 0xD800 << 10 | c - 0xDC00 | 0x10000;
                    lead = null;
                }
            } else {
                if (c > 0xDBFF || (i + 1 === str.length)) {
                    buf[pos++] = 0xEF;
                    buf[pos++] = 0xBF;
                    buf[pos++] = 0xBD;
                } else {
                    lead = c;
                }
                continue;
            }
        } else if (lead) {
            buf[pos++] = 0xEF;
            buf[pos++] = 0xBF;
            buf[pos++] = 0xBD;
            lead = null;
        }

        if (c < 0x80) {
            buf[pos++] = c;
        } else {
            if (c < 0x800) {
                buf[pos++] = c >> 0x6 | 0xC0;
            } else {
                if (c < 0x10000) {
                    buf[pos++] = c >> 0xC | 0xE0;
                } else {
                    buf[pos++] = c >> 0x12 | 0xF0;
                    buf[pos++] = c >> 0xC & 0x3F | 0x80;
                }
                buf[pos++] = c >> 0x6 & 0x3F | 0x80;
            }
            buf[pos++] = c & 0x3F | 0x80;
        }
    }
    return pos;
}


/***/ }),

/***/ 227:
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__geom_geometry_js__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__obj_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__proj_js__ = __webpack_require__(15);




/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * Base class for feature formats.
 * {ol.format.Feature} subclasses provide the ability to decode and encode
 * {@link ol.Feature} objects from a variety of commonly used geospatial
 * file formats.  See the documentation for each format for more details.
 *
 * @constructor
 * @abstract
 * @api
 */
var _ol_format_Feature_ = function() {

  /**
   * @protected
   * @type {ol.proj.Projection}
   */
  this.defaultDataProjection = null;

  /**
   * @protected
   * @type {ol.proj.Projection}
   */
  this.defaultFeatureProjection = null;

};


/**
 * Adds the data projection to the read options.
 * @param {Document|Node|Object|string} source Source.
 * @param {olx.format.ReadOptions=} opt_options Options.
 * @return {olx.format.ReadOptions|undefined} Options.
 * @protected
 */
_ol_format_Feature_.prototype.getReadOptions = function(source, opt_options) {
  var options;
  if (opt_options) {
    options = {
      dataProjection: opt_options.dataProjection ?
        opt_options.dataProjection : this.readProjection(source),
      featureProjection: opt_options.featureProjection
    };
  }
  return this.adaptOptions(options);
};


/**
 * Sets the `defaultDataProjection` on the options, if no `dataProjection`
 * is set.
 * @param {olx.format.WriteOptions|olx.format.ReadOptions|undefined} options
 *     Options.
 * @protected
 * @return {olx.format.WriteOptions|olx.format.ReadOptions|undefined}
 *     Updated options.
 */
_ol_format_Feature_.prototype.adaptOptions = function(options) {
  return __WEBPACK_IMPORTED_MODULE_1__obj_js__["a" /* default */].assign({
    dataProjection: this.defaultDataProjection,
    featureProjection: this.defaultFeatureProjection
  }, options);
};


/**
 * Get the extent from the source of the last {@link readFeatures} call.
 * @return {ol.Extent} Tile extent.
 */
_ol_format_Feature_.prototype.getLastExtent = function() {
  return null;
};


/**
 * @abstract
 * @return {ol.format.FormatType} Format.
 */
_ol_format_Feature_.prototype.getType = function() {};


/**
 * Read a single feature from a source.
 *
 * @abstract
 * @param {Document|Node|Object|string} source Source.
 * @param {olx.format.ReadOptions=} opt_options Read options.
 * @return {ol.Feature} Feature.
 */
_ol_format_Feature_.prototype.readFeature = function(source, opt_options) {};


/**
 * Read all features from a source.
 *
 * @abstract
 * @param {Document|Node|ArrayBuffer|Object|string} source Source.
 * @param {olx.format.ReadOptions=} opt_options Read options.
 * @return {Array.<ol.Feature>} Features.
 */
_ol_format_Feature_.prototype.readFeatures = function(source, opt_options) {};


/**
 * Read a single geometry from a source.
 *
 * @abstract
 * @param {Document|Node|Object|string} source Source.
 * @param {olx.format.ReadOptions=} opt_options Read options.
 * @return {ol.geom.Geometry} Geometry.
 */
_ol_format_Feature_.prototype.readGeometry = function(source, opt_options) {};


/**
 * Read the projection from a source.
 *
 * @abstract
 * @param {Document|Node|Object|string} source Source.
 * @return {ol.proj.Projection} Projection.
 */
_ol_format_Feature_.prototype.readProjection = function(source) {};


/**
 * Encode a feature in this format.
 *
 * @abstract
 * @param {ol.Feature} feature Feature.
 * @param {olx.format.WriteOptions=} opt_options Write options.
 * @return {string} Result.
 */
_ol_format_Feature_.prototype.writeFeature = function(feature, opt_options) {};


/**
 * Encode an array of features in this format.
 *
 * @abstract
 * @param {Array.<ol.Feature>} features Features.
 * @param {olx.format.WriteOptions=} opt_options Write options.
 * @return {string} Result.
 */
_ol_format_Feature_.prototype.writeFeatures = function(features, opt_options) {};


/**
 * Write a single geometry in this format.
 *
 * @abstract
 * @param {ol.geom.Geometry} geometry Geometry.
 * @param {olx.format.WriteOptions=} opt_options Write options.
 * @return {string} Result.
 */
_ol_format_Feature_.prototype.writeGeometry = function(geometry, opt_options) {};


/**
 * @param {ol.geom.Geometry|ol.Extent} geometry Geometry.
 * @param {boolean} write Set to true for writing, false for reading.
 * @param {(olx.format.WriteOptions|olx.format.ReadOptions)=} opt_options
 *     Options.
 * @return {ol.geom.Geometry|ol.Extent} Transformed geometry.
 * @protected
 */
_ol_format_Feature_.transformWithOptions = function(
    geometry, write, opt_options) {
  var featureProjection = opt_options ?
    __WEBPACK_IMPORTED_MODULE_2__proj_js__["a" /* default */].get(opt_options.featureProjection) : null;
  var dataProjection = opt_options ?
    __WEBPACK_IMPORTED_MODULE_2__proj_js__["a" /* default */].get(opt_options.dataProjection) : null;
  /**
   * @type {ol.geom.Geometry|ol.Extent}
   */
  var transformed;
  if (featureProjection && dataProjection &&
      !__WEBPACK_IMPORTED_MODULE_2__proj_js__["a" /* default */].equivalent(featureProjection, dataProjection)) {
    if (geometry instanceof __WEBPACK_IMPORTED_MODULE_0__geom_geometry_js__["a" /* default */]) {
      transformed = (write ? geometry.clone() : geometry).transform(
          write ? featureProjection : dataProjection,
          write ? dataProjection : featureProjection);
    } else {
      // FIXME this is necessary because ol.format.GML treats extents
      // as geometries
      transformed = __WEBPACK_IMPORTED_MODULE_2__proj_js__["a" /* default */].transformExtent(
          geometry,
          dataProjection,
          featureProjection);
    }
  } else {
    transformed = geometry;
  }
  if (write && opt_options && opt_options.decimals !== undefined) {
    var power = Math.pow(10, opt_options.decimals);
    // if decimals option on write, round each coordinate appropriately
    /**
     * @param {Array.<number>} coordinates Coordinates.
     * @return {Array.<number>} Transformed coordinates.
     */
    var transform = function(coordinates) {
      for (var i = 0, ii = coordinates.length; i < ii; ++i) {
        coordinates[i] = Math.round(coordinates[i] * power) / power;
      }
      return coordinates;
    };
    if (transformed === geometry) {
      transformed = transformed.clone();
    }
    transformed.applyTransform(transform);
  }
  return transformed;
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_format_Feature_);


/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__extent_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__geom_geometrylayout_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__geom_geometrytype_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__geom_linestring_js__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__geom_simplegeometry_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__geom_flat_closest_js__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__geom_flat_deflate_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__geom_flat_inflate_js__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__geom_flat_interpolate_js__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__geom_flat_intersectsextent_js__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__geom_flat_simplify_js__ = __webpack_require__(34);














/**
 * @classdesc
 * Multi-linestring geometry.
 *
 * @constructor
 * @extends {ol.geom.SimpleGeometry}
 * @param {Array.<Array.<ol.Coordinate>>} coordinates Coordinates.
 * @param {ol.geom.GeometryLayout=} opt_layout Layout.
 * @api
 */
var _ol_geom_MultiLineString_ = function(coordinates, opt_layout) {

  __WEBPACK_IMPORTED_MODULE_6__geom_simplegeometry_js__["a" /* default */].call(this);

  /**
   * @type {Array.<number>}
   * @private
   */
  this.ends_ = [];

  /**
   * @private
   * @type {number}
   */
  this.maxDelta_ = -1;

  /**
   * @private
   * @type {number}
   */
  this.maxDeltaRevision_ = -1;

  this.setCoordinates(coordinates, opt_layout);

};

__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_geom_MultiLineString_, __WEBPACK_IMPORTED_MODULE_6__geom_simplegeometry_js__["a" /* default */]);


/**
 * Append the passed linestring to the multilinestring.
 * @param {ol.geom.LineString} lineString LineString.
 * @api
 */
_ol_geom_MultiLineString_.prototype.appendLineString = function(lineString) {
  if (!this.flatCoordinates) {
    this.flatCoordinates = lineString.getFlatCoordinates().slice();
  } else {
    __WEBPACK_IMPORTED_MODULE_1__array_js__["a" /* default */].extend(
        this.flatCoordinates, lineString.getFlatCoordinates().slice());
  }
  this.ends_.push(this.flatCoordinates.length);
  this.changed();
};


/**
 * Make a complete copy of the geometry.
 * @return {!ol.geom.MultiLineString} Clone.
 * @override
 * @api
 */
_ol_geom_MultiLineString_.prototype.clone = function() {
  var multiLineString = new _ol_geom_MultiLineString_(null);
  multiLineString.setFlatCoordinates(
      this.layout, this.flatCoordinates.slice(), this.ends_.slice());
  return multiLineString;
};


/**
 * @inheritDoc
 */
_ol_geom_MultiLineString_.prototype.closestPointXY = function(x, y, closestPoint, minSquaredDistance) {
  if (minSquaredDistance <
      __WEBPACK_IMPORTED_MODULE_2__extent_js__["a" /* default */].closestSquaredDistanceXY(this.getExtent(), x, y)) {
    return minSquaredDistance;
  }
  if (this.maxDeltaRevision_ != this.getRevision()) {
    this.maxDelta_ = Math.sqrt(__WEBPACK_IMPORTED_MODULE_7__geom_flat_closest_js__["a" /* default */].getsMaxSquaredDelta(
        this.flatCoordinates, 0, this.ends_, this.stride, 0));
    this.maxDeltaRevision_ = this.getRevision();
  }
  return __WEBPACK_IMPORTED_MODULE_7__geom_flat_closest_js__["a" /* default */].getsClosestPoint(
      this.flatCoordinates, 0, this.ends_, this.stride,
      this.maxDelta_, false, x, y, closestPoint, minSquaredDistance);
};


/**
 * Returns the coordinate at `m` using linear interpolation, or `null` if no
 * such coordinate exists.
 *
 * `opt_extrapolate` controls extrapolation beyond the range of Ms in the
 * MultiLineString. If `opt_extrapolate` is `true` then Ms less than the first
 * M will return the first coordinate and Ms greater than the last M will
 * return the last coordinate.
 *
 * `opt_interpolate` controls interpolation between consecutive LineStrings
 * within the MultiLineString. If `opt_interpolate` is `true` the coordinates
 * will be linearly interpolated between the last coordinate of one LineString
 * and the first coordinate of the next LineString.  If `opt_interpolate` is
 * `false` then the function will return `null` for Ms falling between
 * LineStrings.
 *
 * @param {number} m M.
 * @param {boolean=} opt_extrapolate Extrapolate. Default is `false`.
 * @param {boolean=} opt_interpolate Interpolate. Default is `false`.
 * @return {ol.Coordinate} Coordinate.
 * @api
 */
_ol_geom_MultiLineString_.prototype.getCoordinateAtM = function(m, opt_extrapolate, opt_interpolate) {
  if ((this.layout != __WEBPACK_IMPORTED_MODULE_3__geom_geometrylayout_js__["a" /* default */].XYM &&
       this.layout != __WEBPACK_IMPORTED_MODULE_3__geom_geometrylayout_js__["a" /* default */].XYZM) ||
      this.flatCoordinates.length === 0) {
    return null;
  }
  var extrapolate = opt_extrapolate !== undefined ? opt_extrapolate : false;
  var interpolate = opt_interpolate !== undefined ? opt_interpolate : false;
  return __WEBPACK_IMPORTED_MODULE_10__geom_flat_interpolate_js__["a" /* default */].lineStringsCoordinateAtM(this.flatCoordinates, 0,
      this.ends_, this.stride, m, extrapolate, interpolate);
};


/**
 * Return the coordinates of the multilinestring.
 * @return {Array.<Array.<ol.Coordinate>>} Coordinates.
 * @override
 * @api
 */
_ol_geom_MultiLineString_.prototype.getCoordinates = function() {
  return __WEBPACK_IMPORTED_MODULE_9__geom_flat_inflate_js__["a" /* default */].coordinatess(
      this.flatCoordinates, 0, this.ends_, this.stride);
};


/**
 * @return {Array.<number>} Ends.
 */
_ol_geom_MultiLineString_.prototype.getEnds = function() {
  return this.ends_;
};


/**
 * Return the linestring at the specified index.
 * @param {number} index Index.
 * @return {ol.geom.LineString} LineString.
 * @api
 */
_ol_geom_MultiLineString_.prototype.getLineString = function(index) {
  if (index < 0 || this.ends_.length <= index) {
    return null;
  }
  var lineString = new __WEBPACK_IMPORTED_MODULE_5__geom_linestring_js__["a" /* default */](null);
  lineString.setFlatCoordinates(this.layout, this.flatCoordinates.slice(
      index === 0 ? 0 : this.ends_[index - 1], this.ends_[index]));
  return lineString;
};


/**
 * Return the linestrings of this multilinestring.
 * @return {Array.<ol.geom.LineString>} LineStrings.
 * @api
 */
_ol_geom_MultiLineString_.prototype.getLineStrings = function() {
  var flatCoordinates = this.flatCoordinates;
  var ends = this.ends_;
  var layout = this.layout;
  /** @type {Array.<ol.geom.LineString>} */
  var lineStrings = [];
  var offset = 0;
  var i, ii;
  for (i = 0, ii = ends.length; i < ii; ++i) {
    var end = ends[i];
    var lineString = new __WEBPACK_IMPORTED_MODULE_5__geom_linestring_js__["a" /* default */](null);
    lineString.setFlatCoordinates(layout, flatCoordinates.slice(offset, end));
    lineStrings.push(lineString);
    offset = end;
  }
  return lineStrings;
};


/**
 * @return {Array.<number>} Flat midpoints.
 */
_ol_geom_MultiLineString_.prototype.getFlatMidpoints = function() {
  var midpoints = [];
  var flatCoordinates = this.flatCoordinates;
  var offset = 0;
  var ends = this.ends_;
  var stride = this.stride;
  var i, ii;
  for (i = 0, ii = ends.length; i < ii; ++i) {
    var end = ends[i];
    var midpoint = __WEBPACK_IMPORTED_MODULE_10__geom_flat_interpolate_js__["a" /* default */].lineString(
        flatCoordinates, offset, end, stride, 0.5);
    __WEBPACK_IMPORTED_MODULE_1__array_js__["a" /* default */].extend(midpoints, midpoint);
    offset = end;
  }
  return midpoints;
};


/**
 * @inheritDoc
 */
_ol_geom_MultiLineString_.prototype.getSimplifiedGeometryInternal = function(squaredTolerance) {
  var simplifiedFlatCoordinates = [];
  var simplifiedEnds = [];
  simplifiedFlatCoordinates.length = __WEBPACK_IMPORTED_MODULE_12__geom_flat_simplify_js__["a" /* default */].douglasPeuckers(
      this.flatCoordinates, 0, this.ends_, this.stride, squaredTolerance,
      simplifiedFlatCoordinates, 0, simplifiedEnds);
  var simplifiedMultiLineString = new _ol_geom_MultiLineString_(null);
  simplifiedMultiLineString.setFlatCoordinates(
      __WEBPACK_IMPORTED_MODULE_3__geom_geometrylayout_js__["a" /* default */].XY, simplifiedFlatCoordinates, simplifiedEnds);
  return simplifiedMultiLineString;
};


/**
 * @inheritDoc
 * @api
 */
_ol_geom_MultiLineString_.prototype.getType = function() {
  return __WEBPACK_IMPORTED_MODULE_4__geom_geometrytype_js__["a" /* default */].MULTI_LINE_STRING;
};


/**
 * @inheritDoc
 * @api
 */
_ol_geom_MultiLineString_.prototype.intersectsExtent = function(extent) {
  return __WEBPACK_IMPORTED_MODULE_11__geom_flat_intersectsextent_js__["a" /* default */].lineStrings(
      this.flatCoordinates, 0, this.ends_, this.stride, extent);
};


/**
 * Set the coordinates of the multilinestring.
 * @param {Array.<Array.<ol.Coordinate>>} coordinates Coordinates.
 * @param {ol.geom.GeometryLayout=} opt_layout Layout.
 * @override
 * @api
 */
_ol_geom_MultiLineString_.prototype.setCoordinates = function(coordinates, opt_layout) {
  if (!coordinates) {
    this.setFlatCoordinates(__WEBPACK_IMPORTED_MODULE_3__geom_geometrylayout_js__["a" /* default */].XY, null, this.ends_);
  } else {
    this.setLayout(opt_layout, coordinates, 2);
    if (!this.flatCoordinates) {
      this.flatCoordinates = [];
    }
    var ends = __WEBPACK_IMPORTED_MODULE_8__geom_flat_deflate_js__["a" /* default */].coordinatess(
        this.flatCoordinates, 0, coordinates, this.stride, this.ends_);
    this.flatCoordinates.length = ends.length === 0 ? 0 : ends[ends.length - 1];
    this.changed();
  }
};


/**
 * @param {ol.geom.GeometryLayout} layout Layout.
 * @param {Array.<number>} flatCoordinates Flat coordinates.
 * @param {Array.<number>} ends Ends.
 */
_ol_geom_MultiLineString_.prototype.setFlatCoordinates = function(layout, flatCoordinates, ends) {
  this.setFlatCoordinatesInternal(layout, flatCoordinates);
  this.ends_ = ends;
  this.changed();
};


/**
 * @param {Array.<ol.geom.LineString>} lineStrings LineStrings.
 */
_ol_geom_MultiLineString_.prototype.setLineStrings = function(lineStrings) {
  var layout = this.getLayout();
  var flatCoordinates = [];
  var ends = [];
  var i, ii;
  for (i = 0, ii = lineStrings.length; i < ii; ++i) {
    var lineString = lineStrings[i];
    if (i === 0) {
      layout = lineString.getLayout();
    }
    __WEBPACK_IMPORTED_MODULE_1__array_js__["a" /* default */].extend(flatCoordinates, lineString.getFlatCoordinates());
    ends.push(flatCoordinates.length);
  }
  this.setFlatCoordinates(layout, flatCoordinates, ends);
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_geom_MultiLineString_);


/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__extent_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__geom_geometrylayout_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__geom_geometrytype_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__geom_multipoint_js__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__geom_polygon_js__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__geom_simplegeometry_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__geom_flat_area_js__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__geom_flat_center_js__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__geom_flat_closest_js__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__geom_flat_contains_js__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__geom_flat_deflate_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__geom_flat_inflate_js__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__geom_flat_interiorpoint_js__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__geom_flat_intersectsextent_js__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__geom_flat_orient_js__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__geom_flat_simplify_js__ = __webpack_require__(34);



















/**
 * @classdesc
 * Multi-polygon geometry.
 *
 * @constructor
 * @extends {ol.geom.SimpleGeometry}
 * @param {Array.<Array.<Array.<ol.Coordinate>>>} coordinates Coordinates.
 * @param {ol.geom.GeometryLayout=} opt_layout Layout.
 * @api
 */
var _ol_geom_MultiPolygon_ = function(coordinates, opt_layout) {

  __WEBPACK_IMPORTED_MODULE_7__geom_simplegeometry_js__["a" /* default */].call(this);

  /**
   * @type {Array.<Array.<number>>}
   * @private
   */
  this.endss_ = [];

  /**
   * @private
   * @type {number}
   */
  this.flatInteriorPointsRevision_ = -1;

  /**
   * @private
   * @type {Array.<number>}
   */
  this.flatInteriorPoints_ = null;

  /**
   * @private
   * @type {number}
   */
  this.maxDelta_ = -1;

  /**
   * @private
   * @type {number}
   */
  this.maxDeltaRevision_ = -1;

  /**
   * @private
   * @type {number}
   */
  this.orientedRevision_ = -1;

  /**
   * @private
   * @type {Array.<number>}
   */
  this.orientedFlatCoordinates_ = null;

  this.setCoordinates(coordinates, opt_layout);

};

__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_geom_MultiPolygon_, __WEBPACK_IMPORTED_MODULE_7__geom_simplegeometry_js__["a" /* default */]);


/**
 * Append the passed polygon to this multipolygon.
 * @param {ol.geom.Polygon} polygon Polygon.
 * @api
 */
_ol_geom_MultiPolygon_.prototype.appendPolygon = function(polygon) {
  /** @type {Array.<number>} */
  var ends;
  if (!this.flatCoordinates) {
    this.flatCoordinates = polygon.getFlatCoordinates().slice();
    ends = polygon.getEnds().slice();
    this.endss_.push();
  } else {
    var offset = this.flatCoordinates.length;
    __WEBPACK_IMPORTED_MODULE_1__array_js__["a" /* default */].extend(this.flatCoordinates, polygon.getFlatCoordinates());
    ends = polygon.getEnds().slice();
    var i, ii;
    for (i = 0, ii = ends.length; i < ii; ++i) {
      ends[i] += offset;
    }
  }
  this.endss_.push(ends);
  this.changed();
};


/**
 * Make a complete copy of the geometry.
 * @return {!ol.geom.MultiPolygon} Clone.
 * @override
 * @api
 */
_ol_geom_MultiPolygon_.prototype.clone = function() {
  var multiPolygon = new _ol_geom_MultiPolygon_(null);

  var len = this.endss_.length;
  var newEndss = new Array(len);
  for (var i = 0; i < len; ++i) {
    newEndss[i] = this.endss_[i].slice();
  }

  multiPolygon.setFlatCoordinates(
      this.layout, this.flatCoordinates.slice(), newEndss);
  return multiPolygon;
};


/**
 * @inheritDoc
 */
_ol_geom_MultiPolygon_.prototype.closestPointXY = function(x, y, closestPoint, minSquaredDistance) {
  if (minSquaredDistance <
      __WEBPACK_IMPORTED_MODULE_2__extent_js__["a" /* default */].closestSquaredDistanceXY(this.getExtent(), x, y)) {
    return minSquaredDistance;
  }
  if (this.maxDeltaRevision_ != this.getRevision()) {
    this.maxDelta_ = Math.sqrt(__WEBPACK_IMPORTED_MODULE_10__geom_flat_closest_js__["a" /* default */].getssMaxSquaredDelta(
        this.flatCoordinates, 0, this.endss_, this.stride, 0));
    this.maxDeltaRevision_ = this.getRevision();
  }
  return __WEBPACK_IMPORTED_MODULE_10__geom_flat_closest_js__["a" /* default */].getssClosestPoint(
      this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride,
      this.maxDelta_, true, x, y, closestPoint, minSquaredDistance);
};


/**
 * @inheritDoc
 */
_ol_geom_MultiPolygon_.prototype.containsXY = function(x, y) {
  return __WEBPACK_IMPORTED_MODULE_11__geom_flat_contains_js__["a" /* default */].linearRingssContainsXY(
      this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, x, y);
};


/**
 * Return the area of the multipolygon on projected plane.
 * @return {number} Area (on projected plane).
 * @api
 */
_ol_geom_MultiPolygon_.prototype.getArea = function() {
  return __WEBPACK_IMPORTED_MODULE_8__geom_flat_area_js__["a" /* default */].linearRingss(
      this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride);
};


/**
 * Get the coordinate array for this geometry.  This array has the structure
 * of a GeoJSON coordinate array for multi-polygons.
 *
 * @param {boolean=} opt_right Orient coordinates according to the right-hand
 *     rule (counter-clockwise for exterior and clockwise for interior rings).
 *     If `false`, coordinates will be oriented according to the left-hand rule
 *     (clockwise for exterior and counter-clockwise for interior rings).
 *     By default, coordinate orientation will depend on how the geometry was
 *     constructed.
 * @return {Array.<Array.<Array.<ol.Coordinate>>>} Coordinates.
 * @override
 * @api
 */
_ol_geom_MultiPolygon_.prototype.getCoordinates = function(opt_right) {
  var flatCoordinates;
  if (opt_right !== undefined) {
    flatCoordinates = this.getOrientedFlatCoordinates().slice();
    __WEBPACK_IMPORTED_MODULE_16__geom_flat_orient_js__["a" /* default */].orientLinearRingss(
        flatCoordinates, 0, this.endss_, this.stride, opt_right);
  } else {
    flatCoordinates = this.flatCoordinates;
  }

  return __WEBPACK_IMPORTED_MODULE_13__geom_flat_inflate_js__["a" /* default */].coordinatesss(
      flatCoordinates, 0, this.endss_, this.stride);
};


/**
 * @return {Array.<Array.<number>>} Endss.
 */
_ol_geom_MultiPolygon_.prototype.getEndss = function() {
  return this.endss_;
};


/**
 * @return {Array.<number>} Flat interior points.
 */
_ol_geom_MultiPolygon_.prototype.getFlatInteriorPoints = function() {
  if (this.flatInteriorPointsRevision_ != this.getRevision()) {
    var flatCenters = __WEBPACK_IMPORTED_MODULE_9__geom_flat_center_js__["a" /* default */].linearRingss(
        this.flatCoordinates, 0, this.endss_, this.stride);
    this.flatInteriorPoints_ = __WEBPACK_IMPORTED_MODULE_14__geom_flat_interiorpoint_js__["a" /* default */].linearRingss(
        this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride,
        flatCenters);
    this.flatInteriorPointsRevision_ = this.getRevision();
  }
  return this.flatInteriorPoints_;
};


/**
 * Return the interior points as {@link ol.geom.MultiPoint multipoint}.
 * @return {ol.geom.MultiPoint} Interior points as XYM coordinates, where M is
 * the length of the horizontal intersection that the point belongs to.
 * @api
 */
_ol_geom_MultiPolygon_.prototype.getInteriorPoints = function() {
  var interiorPoints = new __WEBPACK_IMPORTED_MODULE_5__geom_multipoint_js__["a" /* default */](null);
  interiorPoints.setFlatCoordinates(__WEBPACK_IMPORTED_MODULE_3__geom_geometrylayout_js__["a" /* default */].XYM,
      this.getFlatInteriorPoints().slice());
  return interiorPoints;
};


/**
 * @return {Array.<number>} Oriented flat coordinates.
 */
_ol_geom_MultiPolygon_.prototype.getOrientedFlatCoordinates = function() {
  if (this.orientedRevision_ != this.getRevision()) {
    var flatCoordinates = this.flatCoordinates;
    if (__WEBPACK_IMPORTED_MODULE_16__geom_flat_orient_js__["a" /* default */].linearRingssAreOriented(
        flatCoordinates, 0, this.endss_, this.stride)) {
      this.orientedFlatCoordinates_ = flatCoordinates;
    } else {
      this.orientedFlatCoordinates_ = flatCoordinates.slice();
      this.orientedFlatCoordinates_.length =
          __WEBPACK_IMPORTED_MODULE_16__geom_flat_orient_js__["a" /* default */].orientLinearRingss(
              this.orientedFlatCoordinates_, 0, this.endss_, this.stride);
    }
    this.orientedRevision_ = this.getRevision();
  }
  return this.orientedFlatCoordinates_;
};


/**
 * @inheritDoc
 */
_ol_geom_MultiPolygon_.prototype.getSimplifiedGeometryInternal = function(squaredTolerance) {
  var simplifiedFlatCoordinates = [];
  var simplifiedEndss = [];
  simplifiedFlatCoordinates.length = __WEBPACK_IMPORTED_MODULE_17__geom_flat_simplify_js__["a" /* default */].quantizess(
      this.flatCoordinates, 0, this.endss_, this.stride,
      Math.sqrt(squaredTolerance),
      simplifiedFlatCoordinates, 0, simplifiedEndss);
  var simplifiedMultiPolygon = new _ol_geom_MultiPolygon_(null);
  simplifiedMultiPolygon.setFlatCoordinates(
      __WEBPACK_IMPORTED_MODULE_3__geom_geometrylayout_js__["a" /* default */].XY, simplifiedFlatCoordinates, simplifiedEndss);
  return simplifiedMultiPolygon;
};


/**
 * Return the polygon at the specified index.
 * @param {number} index Index.
 * @return {ol.geom.Polygon} Polygon.
 * @api
 */
_ol_geom_MultiPolygon_.prototype.getPolygon = function(index) {
  if (index < 0 || this.endss_.length <= index) {
    return null;
  }
  var offset;
  if (index === 0) {
    offset = 0;
  } else {
    var prevEnds = this.endss_[index - 1];
    offset = prevEnds[prevEnds.length - 1];
  }
  var ends = this.endss_[index].slice();
  var end = ends[ends.length - 1];
  if (offset !== 0) {
    var i, ii;
    for (i = 0, ii = ends.length; i < ii; ++i) {
      ends[i] -= offset;
    }
  }
  var polygon = new __WEBPACK_IMPORTED_MODULE_6__geom_polygon_js__["a" /* default */](null);
  polygon.setFlatCoordinates(
      this.layout, this.flatCoordinates.slice(offset, end), ends);
  return polygon;
};


/**
 * Return the polygons of this multipolygon.
 * @return {Array.<ol.geom.Polygon>} Polygons.
 * @api
 */
_ol_geom_MultiPolygon_.prototype.getPolygons = function() {
  var layout = this.layout;
  var flatCoordinates = this.flatCoordinates;
  var endss = this.endss_;
  var polygons = [];
  var offset = 0;
  var i, ii, j, jj;
  for (i = 0, ii = endss.length; i < ii; ++i) {
    var ends = endss[i].slice();
    var end = ends[ends.length - 1];
    if (offset !== 0) {
      for (j = 0, jj = ends.length; j < jj; ++j) {
        ends[j] -= offset;
      }
    }
    var polygon = new __WEBPACK_IMPORTED_MODULE_6__geom_polygon_js__["a" /* default */](null);
    polygon.setFlatCoordinates(
        layout, flatCoordinates.slice(offset, end), ends);
    polygons.push(polygon);
    offset = end;
  }
  return polygons;
};


/**
 * @inheritDoc
 * @api
 */
_ol_geom_MultiPolygon_.prototype.getType = function() {
  return __WEBPACK_IMPORTED_MODULE_4__geom_geometrytype_js__["a" /* default */].MULTI_POLYGON;
};


/**
 * @inheritDoc
 * @api
 */
_ol_geom_MultiPolygon_.prototype.intersectsExtent = function(extent) {
  return __WEBPACK_IMPORTED_MODULE_15__geom_flat_intersectsextent_js__["a" /* default */].linearRingss(
      this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, extent);
};


/**
 * Set the coordinates of the multipolygon.
 * @param {Array.<Array.<Array.<ol.Coordinate>>>} coordinates Coordinates.
 * @param {ol.geom.GeometryLayout=} opt_layout Layout.
 * @override
 * @api
 */
_ol_geom_MultiPolygon_.prototype.setCoordinates = function(coordinates, opt_layout) {
  if (!coordinates) {
    this.setFlatCoordinates(__WEBPACK_IMPORTED_MODULE_3__geom_geometrylayout_js__["a" /* default */].XY, null, this.endss_);
  } else {
    this.setLayout(opt_layout, coordinates, 3);
    if (!this.flatCoordinates) {
      this.flatCoordinates = [];
    }
    var endss = __WEBPACK_IMPORTED_MODULE_12__geom_flat_deflate_js__["a" /* default */].coordinatesss(
        this.flatCoordinates, 0, coordinates, this.stride, this.endss_);
    if (endss.length === 0) {
      this.flatCoordinates.length = 0;
    } else {
      var lastEnds = endss[endss.length - 1];
      this.flatCoordinates.length = lastEnds.length === 0 ?
        0 : lastEnds[lastEnds.length - 1];
    }
    this.changed();
  }
};


/**
 * @param {ol.geom.GeometryLayout} layout Layout.
 * @param {Array.<number>} flatCoordinates Flat coordinates.
 * @param {Array.<Array.<number>>} endss Endss.
 */
_ol_geom_MultiPolygon_.prototype.setFlatCoordinates = function(layout, flatCoordinates, endss) {
  this.setFlatCoordinatesInternal(layout, flatCoordinates);
  this.endss_ = endss;
  this.changed();
};


/**
 * @param {Array.<ol.geom.Polygon>} polygons Polygons.
 */
_ol_geom_MultiPolygon_.prototype.setPolygons = function(polygons) {
  var layout = this.getLayout();
  var flatCoordinates = [];
  var endss = [];
  var i, ii, ends;
  for (i = 0, ii = polygons.length; i < ii; ++i) {
    var polygon = polygons[i];
    if (i === 0) {
      layout = polygon.getLayout();
    }
    var offset = flatCoordinates.length;
    ends = polygon.getEnds();
    var j, jj;
    for (j = 0, jj = ends.length; j < jj; ++j) {
      ends[j] += offset;
    }
    __WEBPACK_IMPORTED_MODULE_1__array_js__["a" /* default */].extend(flatCoordinates, polygon.getFlatCoordinates());
    endss.push(ends);
  }
  this.setFlatCoordinates(layout, flatCoordinates, endss);
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_geom_MultiPolygon_);


/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__extent_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__geom_geometrytype_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__geom_flat_center_js__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__geom_flat_interiorpoint_js__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__geom_flat_interpolate_js__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__geom_flat_transform_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__transform_js__ = __webpack_require__(8);










/**
 * Lightweight, read-only, {@link ol.Feature} and {@link ol.geom.Geometry} like
 * structure, optimized for vector tile rendering and styling. Geometry access
 * through the API is limited to getting the type and extent of the geometry.
 *
 * @constructor
 * @param {ol.geom.GeometryType} type Geometry type.
 * @param {Array.<number>} flatCoordinates Flat coordinates. These always need
 *     to be right-handed for polygons.
 * @param {Array.<number>|Array.<Array.<number>>} ends Ends or Endss.
 * @param {Object.<string, *>} properties Properties.
 * @param {number|string|undefined} id Feature id.
 */
var _ol_render_Feature_ = function(type, flatCoordinates, ends, properties, id) {
  /**
   * @private
   * @type {ol.Extent|undefined}
   */
  this.extent_;

  /**
   * @private
   * @type {number|string|undefined}
   */
  this.id_ = id;

  /**
   * @private
   * @type {ol.geom.GeometryType}
   */
  this.type_ = type;

  /**
   * @private
   * @type {Array.<number>}
   */
  this.flatCoordinates_ = flatCoordinates;

  /**
   * @private
   * @type {Array.<number>}
   */
  this.flatInteriorPoints_ = null;

  /**
   * @private
   * @type {Array.<number>}
   */
  this.flatMidpoints_ = null;

  /**
   * @private
   * @type {Array.<number>|Array.<Array.<number>>}
   */
  this.ends_ = ends;

  /**
   * @private
   * @type {Object.<string, *>}
   */
  this.properties_ = properties;


  /**
   * @private
   * @type {ol.Transform}
   */
  this.tmpTransform_ = __WEBPACK_IMPORTED_MODULE_8__transform_js__["a" /* default */].create();
};


/**
 * Get a feature property by its key.
 * @param {string} key Key
 * @return {*} Value for the requested key.
 * @api
 */
_ol_render_Feature_.prototype.get = function(key) {
  return this.properties_[key];
};


/**
 * @return {Array.<number>|Array.<Array.<number>>} Ends or endss.
 */
_ol_render_Feature_.prototype.getEnds =
_ol_render_Feature_.prototype.getEndss = function() {
  return this.ends_;
};


/**
 * Get the extent of this feature's geometry.
 * @return {ol.Extent} Extent.
 * @api
 */
_ol_render_Feature_.prototype.getExtent = function() {
  if (!this.extent_) {
    this.extent_ = this.type_ === __WEBPACK_IMPORTED_MODULE_3__geom_geometrytype_js__["a" /* default */].POINT ?
      __WEBPACK_IMPORTED_MODULE_2__extent_js__["a" /* default */].createOrUpdateFromCoordinate(this.flatCoordinates_) :
      __WEBPACK_IMPORTED_MODULE_2__extent_js__["a" /* default */].createOrUpdateFromFlatCoordinates(
          this.flatCoordinates_, 0, this.flatCoordinates_.length, 2);

  }
  return this.extent_;
};


/**
 * @return {Array.<number>} Flat interior points.
 */
_ol_render_Feature_.prototype.getFlatInteriorPoint = function() {
  if (!this.flatInteriorPoints_) {
    var flatCenter = __WEBPACK_IMPORTED_MODULE_2__extent_js__["a" /* default */].getCenter(this.getExtent());
    this.flatInteriorPoints_ = __WEBPACK_IMPORTED_MODULE_5__geom_flat_interiorpoint_js__["a" /* default */].linearRings(
        this.flatCoordinates_, 0, this.ends_, 2, flatCenter, 0);
  }
  return this.flatInteriorPoints_;
};


/**
 * @return {Array.<number>} Flat interior points.
 */
_ol_render_Feature_.prototype.getFlatInteriorPoints = function() {
  if (!this.flatInteriorPoints_) {
    var flatCenters = __WEBPACK_IMPORTED_MODULE_4__geom_flat_center_js__["a" /* default */].linearRingss(
        this.flatCoordinates_, 0, this.ends_, 2);
    this.flatInteriorPoints_ = __WEBPACK_IMPORTED_MODULE_5__geom_flat_interiorpoint_js__["a" /* default */].linearRingss(
        this.flatCoordinates_, 0, this.ends_, 2, flatCenters);
  }
  return this.flatInteriorPoints_;
};


/**
 * @return {Array.<number>} Flat midpoint.
 */
_ol_render_Feature_.prototype.getFlatMidpoint = function() {
  if (!this.flatMidpoints_) {
    this.flatMidpoints_ = __WEBPACK_IMPORTED_MODULE_6__geom_flat_interpolate_js__["a" /* default */].lineString(
        this.flatCoordinates_, 0, this.flatCoordinates_.length, 2, 0.5);
  }
  return this.flatMidpoints_;
};


/**
 * @return {Array.<number>} Flat midpoints.
 */
_ol_render_Feature_.prototype.getFlatMidpoints = function() {
  if (!this.flatMidpoints_) {
    this.flatMidpoints_ = [];
    var flatCoordinates = this.flatCoordinates_;
    var offset = 0;
    var ends = this.ends_;
    for (var i = 0, ii = ends.length; i < ii; ++i) {
      var end = ends[i];
      var midpoint = __WEBPACK_IMPORTED_MODULE_6__geom_flat_interpolate_js__["a" /* default */].lineString(
          flatCoordinates, offset, end, 2, 0.5);
      __WEBPACK_IMPORTED_MODULE_1__array_js__["a" /* default */].extend(this.flatMidpoints_, midpoint);
      offset = end;
    }
  }
  return this.flatMidpoints_;
};

/**
 * Get the feature identifier.  This is a stable identifier for the feature and
 * is set when reading data from a remote source.
 * @return {number|string|undefined} Id.
 * @api
 */
_ol_render_Feature_.prototype.getId = function() {
  return this.id_;
};


/**
 * @return {Array.<number>} Flat coordinates.
 */
_ol_render_Feature_.prototype.getOrientedFlatCoordinates = function() {
  return this.flatCoordinates_;
};


/**
 * @return {Array.<number>} Flat coordinates.
 */
_ol_render_Feature_.prototype.getFlatCoordinates =
    _ol_render_Feature_.prototype.getOrientedFlatCoordinates;


/**
 * For API compatibility with {@link ol.Feature}, this method is useful when
 * determining the geometry type in style function (see {@link #getType}).
 * @return {ol.render.Feature} Feature.
 * @api
 */
_ol_render_Feature_.prototype.getGeometry = function() {
  return this;
};


/**
 * Get the feature properties.
 * @return {Object.<string, *>} Feature properties.
 * @api
 */
_ol_render_Feature_.prototype.getProperties = function() {
  return this.properties_;
};


/**
 * Get the feature for working with its geometry.
 * @return {ol.render.Feature} Feature.
 */
_ol_render_Feature_.prototype.getSimplifiedGeometry =
    _ol_render_Feature_.prototype.getGeometry;


/**
 * @return {number} Stride.
 */
_ol_render_Feature_.prototype.getStride = function() {
  return 2;
};


/**
 * @return {undefined}
 */
_ol_render_Feature_.prototype.getStyleFunction = __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].nullFunction;


/**
 * Get the type of this feature's geometry.
 * @return {ol.geom.GeometryType} Geometry type.
 * @api
 */
_ol_render_Feature_.prototype.getType = function() {
  return this.type_;
};

/**
 * Transform geometry coordinates from tile pixel space to projected.
 * The SRS of the source and destination are expected to be the same.
 *
 * @param {ol.ProjectionLike} source The current projection
 * @param {ol.ProjectionLike} destination The desired projection.
 */
_ol_render_Feature_.prototype.transform = function(source, destination) {
  var pixelExtent = source.getExtent();
  var projectedExtent = source.getWorldExtent();
  var scale = __WEBPACK_IMPORTED_MODULE_2__extent_js__["a" /* default */].getHeight(projectedExtent) / __WEBPACK_IMPORTED_MODULE_2__extent_js__["a" /* default */].getHeight(pixelExtent);
  var transform = this.tmpTransform_;
  __WEBPACK_IMPORTED_MODULE_8__transform_js__["a" /* default */].compose(transform,
      projectedExtent[0], projectedExtent[3],
      scale, -scale, 0,
      0, 0);
  __WEBPACK_IMPORTED_MODULE_7__geom_flat_transform_js__["a" /* default */].transform2D(this.flatCoordinates_, 0, this.flatCoordinates_.length, 2,
      transform, this.flatCoordinates_);
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_render_Feature_);


/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layertype_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asserts_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layer_tileproperty_js__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layer_vector_js__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layer_vectortilerendertype_js__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__obj_js__ = __webpack_require__(2);








/**
 * @classdesc
 * Layer for vector tile data that is rendered client-side.
 * Note that any property set in the options is set as a {@link ol.Object}
 * property on the layer object; for example, setting `title: 'My Title'` in the
 * options means that `title` is observable, and has get/set accessors.
 *
 * @constructor
 * @extends {ol.layer.Vector}
 * @param {olx.layer.VectorTileOptions=} opt_options Options.
 * @api
 */
var _ol_layer_VectorTile_ = function(opt_options) {
  var options = opt_options ? opt_options : {};

  var renderMode = options.renderMode || __WEBPACK_IMPORTED_MODULE_5__layer_vectortilerendertype_js__["a" /* default */].HYBRID;
  __WEBPACK_IMPORTED_MODULE_2__asserts_js__["a" /* default */].assert(renderMode == undefined ||
      renderMode == __WEBPACK_IMPORTED_MODULE_5__layer_vectortilerendertype_js__["a" /* default */].IMAGE ||
      renderMode == __WEBPACK_IMPORTED_MODULE_5__layer_vectortilerendertype_js__["a" /* default */].HYBRID ||
      renderMode == __WEBPACK_IMPORTED_MODULE_5__layer_vectortilerendertype_js__["a" /* default */].VECTOR,
  28); // `renderMode` must be `'image'`, `'hybrid'` or `'vector'`
  if (options.declutter && renderMode == __WEBPACK_IMPORTED_MODULE_5__layer_vectortilerendertype_js__["a" /* default */].IMAGE) {
    renderMode = __WEBPACK_IMPORTED_MODULE_5__layer_vectortilerendertype_js__["a" /* default */].HYBRID;
  }
  options.renderMode = renderMode;

  var baseOptions = __WEBPACK_IMPORTED_MODULE_6__obj_js__["a" /* default */].assign({}, options);

  delete baseOptions.preload;
  delete baseOptions.useInterimTilesOnError;
  __WEBPACK_IMPORTED_MODULE_4__layer_vector_js__["a" /* default */].call(this,  /** @type {olx.layer.VectorOptions} */ (baseOptions));

  this.setPreload(options.preload ? options.preload : 0);
  this.setUseInterimTilesOnError(options.useInterimTilesOnError ?
    options.useInterimTilesOnError : true);

  /**
   * The layer type.
   * @protected
   * @type {ol.LayerType}
   */
  this.type = __WEBPACK_IMPORTED_MODULE_1__layertype_js__["a" /* default */].VECTOR_TILE;

};

__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_layer_VectorTile_, __WEBPACK_IMPORTED_MODULE_4__layer_vector_js__["a" /* default */]);


/**
 * Return the level as number to which we will preload tiles up to.
 * @return {number} The level to preload tiles up to.
 * @observable
 * @api
 */
_ol_layer_VectorTile_.prototype.getPreload = function() {
  return (
  /** @type {number} */ this.get(__WEBPACK_IMPORTED_MODULE_3__layer_tileproperty_js__["a" /* default */].PRELOAD)
  );
};


/**
 * Whether we use interim tiles on error.
 * @return {boolean} Use interim tiles on error.
 * @observable
 * @api
 */
_ol_layer_VectorTile_.prototype.getUseInterimTilesOnError = function() {
  return (
  /** @type {boolean} */ this.get(__WEBPACK_IMPORTED_MODULE_3__layer_tileproperty_js__["a" /* default */].USE_INTERIM_TILES_ON_ERROR)
  );
};


/**
 * Set the level as number to which we will preload tiles up to.
 * @param {number} preload The level to preload tiles up to.
 * @observable
 * @api
 */
_ol_layer_VectorTile_.prototype.setPreload = function(preload) {
  this.set(__WEBPACK_IMPORTED_MODULE_3__layer_tileproperty_js__["a" /* default */].PRELOAD, preload);
};


/**
 * Set whether we use interim tiles on error.
 * @param {boolean} useInterimTilesOnError Use interim tiles on error.
 * @observable
 * @api
 */
_ol_layer_VectorTile_.prototype.setUseInterimTilesOnError = function(useInterimTilesOnError) {
  this.set(
      __WEBPACK_IMPORTED_MODULE_3__layer_tileproperty_js__["a" /* default */].USE_INTERIM_TILES_ON_ERROR, useInterimTilesOnError);
};


/**
 * Return the associated {@link ol.source.VectorTile vectortilesource} of the layer.
 * @function
 * @return {ol.source.VectorTile} Source.
 * @api
 */
_ol_layer_VectorTile_.prototype.getSource;
/* harmony default export */ __webpack_exports__["a"] = (_ol_layer_VectorTile_);


/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layertype_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layer_layer_js__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layer_vectorrendertype_js__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__obj_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_style_js__ = __webpack_require__(131);







/**
 * @classdesc
 * Vector data that is rendered client-side.
 * Note that any property set in the options is set as a {@link ol.Object}
 * property on the layer object; for example, setting `title: 'My Title'` in the
 * options means that `title` is observable, and has get/set accessors.
 *
 * @constructor
 * @extends {ol.layer.Layer}
 * @fires ol.render.Event
 * @param {olx.layer.VectorOptions=} opt_options Options.
 * @api
 */
var _ol_layer_Vector_ = function(opt_options) {
  var options = opt_options ?
    opt_options : /** @type {olx.layer.VectorOptions} */ ({});

  var baseOptions = __WEBPACK_IMPORTED_MODULE_4__obj_js__["a" /* default */].assign({}, options);

  delete baseOptions.style;
  delete baseOptions.renderBuffer;
  delete baseOptions.updateWhileAnimating;
  delete baseOptions.updateWhileInteracting;
  __WEBPACK_IMPORTED_MODULE_2__layer_layer_js__["a" /* default */].call(this, /** @type {olx.layer.LayerOptions} */ (baseOptions));

  /**
   * @private
   * @type {boolean}
   */
  this.declutter_ = options.declutter !== undefined ? options.declutter : false;

  /**
   * @type {number}
   * @private
   */
  this.renderBuffer_ = options.renderBuffer !== undefined ?
    options.renderBuffer : 100;

  /**
   * User provided style.
   * @type {ol.style.Style|Array.<ol.style.Style>|ol.StyleFunction}
   * @private
   */
  this.style_ = null;

  /**
   * Style function for use within the library.
   * @type {ol.StyleFunction|undefined}
   * @private
   */
  this.styleFunction_ = undefined;

  this.setStyle(options.style);

  /**
   * @type {boolean}
   * @private
   */
  this.updateWhileAnimating_ = options.updateWhileAnimating !== undefined ?
    options.updateWhileAnimating : false;

  /**
   * @type {boolean}
   * @private
   */
  this.updateWhileInteracting_ = options.updateWhileInteracting !== undefined ?
    options.updateWhileInteracting : false;

  /**
   * @private
   * @type {ol.layer.VectorTileRenderType|string}
   */
  this.renderMode_ = options.renderMode || __WEBPACK_IMPORTED_MODULE_3__layer_vectorrendertype_js__["a" /* default */].VECTOR;

  /**
   * The layer type.
   * @protected
   * @type {ol.LayerType}
   */
  this.type = __WEBPACK_IMPORTED_MODULE_1__layertype_js__["a" /* default */].VECTOR;

};

__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_layer_Vector_, __WEBPACK_IMPORTED_MODULE_2__layer_layer_js__["a" /* default */]);


/**
 * @return {boolean} Declutter.
 */
_ol_layer_Vector_.prototype.getDeclutter = function() {
  return this.declutter_;
};


/**
 * @param {boolean} declutter Declutter.
 */
_ol_layer_Vector_.prototype.setDeclutter = function(declutter) {
  this.declutter_ = declutter;
};


/**
 * @return {number|undefined} Render buffer.
 */
_ol_layer_Vector_.prototype.getRenderBuffer = function() {
  return this.renderBuffer_;
};


/**
 * @return {function(ol.Feature, ol.Feature): number|null|undefined} Render
 *     order.
 */
_ol_layer_Vector_.prototype.getRenderOrder = function() {
  return (
  /** @type {ol.RenderOrderFunction|null|undefined} */ this.get(_ol_layer_Vector_.Property_.RENDER_ORDER)
  );
};


/**
 * Return the associated {@link ol.source.Vector vectorsource} of the layer.
 * @function
 * @return {ol.source.Vector} Source.
 * @api
 */
_ol_layer_Vector_.prototype.getSource;


/**
 * Get the style for features.  This returns whatever was passed to the `style`
 * option at construction or to the `setStyle` method.
 * @return {ol.style.Style|Array.<ol.style.Style>|ol.StyleFunction}
 *     Layer style.
 * @api
 */
_ol_layer_Vector_.prototype.getStyle = function() {
  return this.style_;
};


/**
 * Get the style function.
 * @return {ol.StyleFunction|undefined} Layer style function.
 * @api
 */
_ol_layer_Vector_.prototype.getStyleFunction = function() {
  return this.styleFunction_;
};


/**
 * @return {boolean} Whether the rendered layer should be updated while
 *     animating.
 */
_ol_layer_Vector_.prototype.getUpdateWhileAnimating = function() {
  return this.updateWhileAnimating_;
};


/**
 * @return {boolean} Whether the rendered layer should be updated while
 *     interacting.
 */
_ol_layer_Vector_.prototype.getUpdateWhileInteracting = function() {
  return this.updateWhileInteracting_;
};


/**
 * @param {ol.RenderOrderFunction|null|undefined} renderOrder
 *     Render order.
 */
_ol_layer_Vector_.prototype.setRenderOrder = function(renderOrder) {
  this.set(_ol_layer_Vector_.Property_.RENDER_ORDER, renderOrder);
};


/**
 * Set the style for features.  This can be a single style object, an array
 * of styles, or a function that takes a feature and resolution and returns
 * an array of styles. If it is `undefined` the default style is used. If
 * it is `null` the layer has no style (a `null` style), so only features
 * that have their own styles will be rendered in the layer. See
 * {@link ol.style} for information on the default style.
 * @param {ol.style.Style|Array.<ol.style.Style>|ol.StyleFunction|null|undefined}
 *     style Layer style.
 * @api
 */
_ol_layer_Vector_.prototype.setStyle = function(style) {
  this.style_ = style !== undefined ? style : __WEBPACK_IMPORTED_MODULE_5__style_style_js__["a" /* default */].defaultFunction;
  this.styleFunction_ = style === null ?
    undefined : __WEBPACK_IMPORTED_MODULE_5__style_style_js__["a" /* default */].createFunction(this.style_);
  this.changed();
};


/**
 * @return {ol.layer.VectorRenderType|string} The render mode.
 */
_ol_layer_Vector_.prototype.getRenderMode = function() {
  return this.renderMode_;
};


/**
 * @enum {string}
 * @private
 */
_ol_layer_Vector_.Property_ = {
  RENDER_ORDER: 'renderOrder'
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_layer_Vector_);


/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__colorlike_js__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__has_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__imagestate_js__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__render_canvas_js__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_image_js__ = __webpack_require__(133);








/**
 * @classdesc
 * Set regular shape style for vector features. The resulting shape will be
 * a regular polygon when `radius` is provided, or a star when `radius1` and
 * `radius2` are provided.
 *
 * @constructor
 * @param {olx.style.RegularShapeOptions} options Options.
 * @extends {ol.style.Image}
 * @api
 */
var _ol_style_RegularShape_ = function(options) {
  /**
   * @private
   * @type {Array.<string>}
   */
  this.checksums_ = null;

  /**
   * @private
   * @type {HTMLCanvasElement}
   */
  this.canvas_ = null;

  /**
   * @private
   * @type {HTMLCanvasElement}
   */
  this.hitDetectionCanvas_ = null;

  /**
   * @private
   * @type {ol.style.Fill}
   */
  this.fill_ = options.fill !== undefined ? options.fill : null;

  /**
   * @private
   * @type {Array.<number>}
   */
  this.origin_ = [0, 0];

  /**
   * @private
   * @type {number}
   */
  this.points_ = options.points;

  /**
   * @protected
   * @type {number}
   */
  this.radius_ = /** @type {number} */ (options.radius !== undefined ?
    options.radius : options.radius1);

  /**
   * @private
   * @type {number|undefined}
   */
  this.radius2_ = options.radius2;

  /**
   * @private
   * @type {number}
   */
  this.angle_ = options.angle !== undefined ? options.angle : 0;

  /**
   * @private
   * @type {ol.style.Stroke}
   */
  this.stroke_ = options.stroke !== undefined ? options.stroke : null;

  /**
   * @private
   * @type {Array.<number>}
   */
  this.anchor_ = null;

  /**
   * @private
   * @type {ol.Size}
   */
  this.size_ = null;

  /**
   * @private
   * @type {ol.Size}
   */
  this.imageSize_ = null;

  /**
   * @private
   * @type {ol.Size}
   */
  this.hitDetectionImageSize_ = null;

  /**
   * @protected
   * @type {ol.style.AtlasManager|undefined}
   */
  this.atlasManager_ = options.atlasManager;

  this.render_(this.atlasManager_);

  /**
   * @type {boolean}
   */
  var snapToPixel = options.snapToPixel !== undefined ?
    options.snapToPixel : true;

  /**
   * @type {boolean}
   */
  var rotateWithView = options.rotateWithView !== undefined ?
    options.rotateWithView : false;

  __WEBPACK_IMPORTED_MODULE_6__style_image_js__["a" /* default */].call(this, {
    opacity: 1,
    rotateWithView: rotateWithView,
    rotation: options.rotation !== undefined ? options.rotation : 0,
    scale: 1,
    snapToPixel: snapToPixel
  });
};

__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_style_RegularShape_, __WEBPACK_IMPORTED_MODULE_6__style_image_js__["a" /* default */]);


/**
 * Clones the style. If an atlasmanager was provided to the original style it will be used in the cloned style, too.
 * @return {ol.style.RegularShape} The cloned style.
 * @api
 */
_ol_style_RegularShape_.prototype.clone = function() {
  var style = new _ol_style_RegularShape_({
    fill: this.getFill() ? this.getFill().clone() : undefined,
    points: this.getPoints(),
    radius: this.getRadius(),
    radius2: this.getRadius2(),
    angle: this.getAngle(),
    snapToPixel: this.getSnapToPixel(),
    stroke: this.getStroke() ?  this.getStroke().clone() : undefined,
    rotation: this.getRotation(),
    rotateWithView: this.getRotateWithView(),
    atlasManager: this.atlasManager_
  });
  style.setOpacity(this.getOpacity());
  style.setScale(this.getScale());
  return style;
};


/**
 * @inheritDoc
 * @api
 */
_ol_style_RegularShape_.prototype.getAnchor = function() {
  return this.anchor_;
};


/**
 * Get the angle used in generating the shape.
 * @return {number} Shape's rotation in radians.
 * @api
 */
_ol_style_RegularShape_.prototype.getAngle = function() {
  return this.angle_;
};


/**
 * Get the fill style for the shape.
 * @return {ol.style.Fill} Fill style.
 * @api
 */
_ol_style_RegularShape_.prototype.getFill = function() {
  return this.fill_;
};


/**
 * @inheritDoc
 */
_ol_style_RegularShape_.prototype.getHitDetectionImage = function(pixelRatio) {
  return this.hitDetectionCanvas_;
};


/**
 * @inheritDoc
 * @api
 */
_ol_style_RegularShape_.prototype.getImage = function(pixelRatio) {
  return this.canvas_;
};


/**
 * @inheritDoc
 */
_ol_style_RegularShape_.prototype.getImageSize = function() {
  return this.imageSize_;
};


/**
 * @inheritDoc
 */
_ol_style_RegularShape_.prototype.getHitDetectionImageSize = function() {
  return this.hitDetectionImageSize_;
};


/**
 * @inheritDoc
 */
_ol_style_RegularShape_.prototype.getImageState = function() {
  return __WEBPACK_IMPORTED_MODULE_4__imagestate_js__["a" /* default */].LOADED;
};


/**
 * @inheritDoc
 * @api
 */
_ol_style_RegularShape_.prototype.getOrigin = function() {
  return this.origin_;
};


/**
 * Get the number of points for generating the shape.
 * @return {number} Number of points for stars and regular polygons.
 * @api
 */
_ol_style_RegularShape_.prototype.getPoints = function() {
  return this.points_;
};


/**
 * Get the (primary) radius for the shape.
 * @return {number} Radius.
 * @api
 */
_ol_style_RegularShape_.prototype.getRadius = function() {
  return this.radius_;
};


/**
 * Get the secondary radius for the shape.
 * @return {number|undefined} Radius2.
 * @api
 */
_ol_style_RegularShape_.prototype.getRadius2 = function() {
  return this.radius2_;
};


/**
 * @inheritDoc
 * @api
 */
_ol_style_RegularShape_.prototype.getSize = function() {
  return this.size_;
};


/**
 * Get the stroke style for the shape.
 * @return {ol.style.Stroke} Stroke style.
 * @api
 */
_ol_style_RegularShape_.prototype.getStroke = function() {
  return this.stroke_;
};


/**
 * @inheritDoc
 */
_ol_style_RegularShape_.prototype.listenImageChange = function(listener, thisArg) {};


/**
 * @inheritDoc
 */
_ol_style_RegularShape_.prototype.load = function() {};


/**
 * @inheritDoc
 */
_ol_style_RegularShape_.prototype.unlistenImageChange = function(listener, thisArg) {};


/**
 * @protected
 * @param {ol.style.AtlasManager|undefined} atlasManager An atlas manager.
 */
_ol_style_RegularShape_.prototype.render_ = function(atlasManager) {
  var imageSize;
  var lineCap = '';
  var lineJoin = '';
  var miterLimit = 0;
  var lineDash = null;
  var lineDashOffset = 0;
  var strokeStyle;
  var strokeWidth = 0;

  if (this.stroke_) {
    strokeStyle = this.stroke_.getColor();
    if (strokeStyle === null) {
      strokeStyle = __WEBPACK_IMPORTED_MODULE_5__render_canvas_js__["a" /* default */].defaultStrokeStyle;
    }
    strokeStyle = __WEBPACK_IMPORTED_MODULE_1__colorlike_js__["a" /* default */].asColorLike(strokeStyle);
    strokeWidth = this.stroke_.getWidth();
    if (strokeWidth === undefined) {
      strokeWidth = __WEBPACK_IMPORTED_MODULE_5__render_canvas_js__["a" /* default */].defaultLineWidth;
    }
    lineDash = this.stroke_.getLineDash();
    lineDashOffset = this.stroke_.getLineDashOffset();
    if (!__WEBPACK_IMPORTED_MODULE_3__has_js__["a" /* default */].CANVAS_LINE_DASH) {
      lineDash = null;
      lineDashOffset = 0;
    }
    lineJoin = this.stroke_.getLineJoin();
    if (lineJoin === undefined) {
      lineJoin = __WEBPACK_IMPORTED_MODULE_5__render_canvas_js__["a" /* default */].defaultLineJoin;
    }
    lineCap = this.stroke_.getLineCap();
    if (lineCap === undefined) {
      lineCap = __WEBPACK_IMPORTED_MODULE_5__render_canvas_js__["a" /* default */].defaultLineCap;
    }
    miterLimit = this.stroke_.getMiterLimit();
    if (miterLimit === undefined) {
      miterLimit = __WEBPACK_IMPORTED_MODULE_5__render_canvas_js__["a" /* default */].defaultMiterLimit;
    }
  }

  var size = 2 * (this.radius_ + strokeWidth) + 1;

  /** @type {ol.RegularShapeRenderOptions} */
  var renderOptions = {
    strokeStyle: strokeStyle,
    strokeWidth: strokeWidth,
    size: size,
    lineCap: lineCap,
    lineDash: lineDash,
    lineDashOffset: lineDashOffset,
    lineJoin: lineJoin,
    miterLimit: miterLimit
  };

  if (atlasManager === undefined) {
    // no atlas manager is used, create a new canvas
    var context = __WEBPACK_IMPORTED_MODULE_2__dom_js__["a" /* default */].createCanvasContext2D(size, size);
    this.canvas_ = context.canvas;

    // canvas.width and height are rounded to the closest integer
    size = this.canvas_.width;
    imageSize = size;

    this.draw_(renderOptions, context, 0, 0);

    this.createHitDetectionCanvas_(renderOptions);
  } else {
    // an atlas manager is used, add the symbol to an atlas
    size = Math.round(size);

    var hasCustomHitDetectionImage = !this.fill_;
    var renderHitDetectionCallback;
    if (hasCustomHitDetectionImage) {
      // render the hit-detection image into a separate atlas image
      renderHitDetectionCallback =
          this.drawHitDetectionCanvas_.bind(this, renderOptions);
    }

    var id = this.getChecksum();
    var info = atlasManager.add(
        id, size, size, this.draw_.bind(this, renderOptions),
        renderHitDetectionCallback);

    this.canvas_ = info.image;
    this.origin_ = [info.offsetX, info.offsetY];
    imageSize = info.image.width;

    if (hasCustomHitDetectionImage) {
      this.hitDetectionCanvas_ = info.hitImage;
      this.hitDetectionImageSize_ =
          [info.hitImage.width, info.hitImage.height];
    } else {
      this.hitDetectionCanvas_ = this.canvas_;
      this.hitDetectionImageSize_ = [imageSize, imageSize];
    }
  }

  this.anchor_ = [size / 2, size / 2];
  this.size_ = [size, size];
  this.imageSize_ = [imageSize, imageSize];
};


/**
 * @private
 * @param {ol.RegularShapeRenderOptions} renderOptions Render options.
 * @param {CanvasRenderingContext2D} context The rendering context.
 * @param {number} x The origin for the symbol (x).
 * @param {number} y The origin for the symbol (y).
 */
_ol_style_RegularShape_.prototype.draw_ = function(renderOptions, context, x, y) {
  var i, angle0, radiusC;
  // reset transform
  context.setTransform(1, 0, 0, 1, 0, 0);

  // then move to (x, y)
  context.translate(x, y);

  context.beginPath();

  var points = this.points_;
  if (points === Infinity) {
    context.arc(
        renderOptions.size / 2, renderOptions.size / 2,
        this.radius_, 0, 2 * Math.PI, true);
  } else {
    var radius2 = (this.radius2_ !== undefined) ? this.radius2_
      : this.radius_;
    if (radius2 !== this.radius_) {
      points = 2 * points;
    }
    for (i = 0; i <= points; i++) {
      angle0 = i * 2 * Math.PI / points - Math.PI / 2 + this.angle_;
      radiusC = i % 2 === 0 ? this.radius_ : radius2;
      context.lineTo(renderOptions.size / 2 + radiusC * Math.cos(angle0),
          renderOptions.size / 2 + radiusC * Math.sin(angle0));
    }
  }


  if (this.fill_) {
    var color = this.fill_.getColor();
    if (color === null) {
      color = __WEBPACK_IMPORTED_MODULE_5__render_canvas_js__["a" /* default */].defaultFillStyle;
    }
    context.fillStyle = __WEBPACK_IMPORTED_MODULE_1__colorlike_js__["a" /* default */].asColorLike(color);
    context.fill();
  }
  if (this.stroke_) {
    context.strokeStyle = renderOptions.strokeStyle;
    context.lineWidth = renderOptions.strokeWidth;
    if (renderOptions.lineDash) {
      context.setLineDash(renderOptions.lineDash);
      context.lineDashOffset = renderOptions.lineDashOffset;
    }
    context.lineCap = renderOptions.lineCap;
    context.lineJoin = renderOptions.lineJoin;
    context.miterLimit = renderOptions.miterLimit;
    context.stroke();
  }
  context.closePath();
};


/**
 * @private
 * @param {ol.RegularShapeRenderOptions} renderOptions Render options.
 */
_ol_style_RegularShape_.prototype.createHitDetectionCanvas_ = function(renderOptions) {
  this.hitDetectionImageSize_ = [renderOptions.size, renderOptions.size];
  if (this.fill_) {
    this.hitDetectionCanvas_ = this.canvas_;
    return;
  }

  // if no fill style is set, create an extra hit-detection image with a
  // default fill style
  var context = __WEBPACK_IMPORTED_MODULE_2__dom_js__["a" /* default */].createCanvasContext2D(renderOptions.size, renderOptions.size);
  this.hitDetectionCanvas_ = context.canvas;

  this.drawHitDetectionCanvas_(renderOptions, context, 0, 0);
};


/**
 * @private
 * @param {ol.RegularShapeRenderOptions} renderOptions Render options.
 * @param {CanvasRenderingContext2D} context The context.
 * @param {number} x The origin for the symbol (x).
 * @param {number} y The origin for the symbol (y).
 */
_ol_style_RegularShape_.prototype.drawHitDetectionCanvas_ = function(renderOptions, context, x, y) {
  // reset transform
  context.setTransform(1, 0, 0, 1, 0, 0);

  // then move to (x, y)
  context.translate(x, y);

  context.beginPath();

  var points = this.points_;
  if (points === Infinity) {
    context.arc(
        renderOptions.size / 2, renderOptions.size / 2,
        this.radius_, 0, 2 * Math.PI, true);
  } else {
    var radius2 = (this.radius2_ !== undefined) ? this.radius2_
      : this.radius_;
    if (radius2 !== this.radius_) {
      points = 2 * points;
    }
    var i, radiusC, angle0;
    for (i = 0; i <= points; i++) {
      angle0 = i * 2 * Math.PI / points - Math.PI / 2 + this.angle_;
      radiusC = i % 2 === 0 ? this.radius_ : radius2;
      context.lineTo(renderOptions.size / 2 + radiusC * Math.cos(angle0),
          renderOptions.size / 2 + radiusC * Math.sin(angle0));
    }
  }

  context.fillStyle = __WEBPACK_IMPORTED_MODULE_5__render_canvas_js__["a" /* default */].defaultFillStyle;
  context.fill();
  if (this.stroke_) {
    context.strokeStyle = renderOptions.strokeStyle;
    context.lineWidth = renderOptions.strokeWidth;
    if (renderOptions.lineDash) {
      context.setLineDash(renderOptions.lineDash);
      context.lineDashOffset = renderOptions.lineDashOffset;
    }
    context.stroke();
  }
  context.closePath();
};


/**
 * @return {string} The checksum.
 */
_ol_style_RegularShape_.prototype.getChecksum = function() {
  var strokeChecksum = this.stroke_ ?
    this.stroke_.getChecksum() : '-';
  var fillChecksum = this.fill_ ?
    this.fill_.getChecksum() : '-';

  var recalculate = !this.checksums_ ||
      (strokeChecksum != this.checksums_[1] ||
      fillChecksum != this.checksums_[2] ||
      this.radius_ != this.checksums_[3] ||
      this.radius2_ != this.checksums_[4] ||
      this.angle_ != this.checksums_[5] ||
      this.points_ != this.checksums_[6]);

  if (recalculate) {
    var checksum = 'r' + strokeChecksum + fillChecksum +
        (this.radius_ !== undefined ? this.radius_.toString() : '-') +
        (this.radius2_ !== undefined ? this.radius2_.toString() : '-') +
        (this.angle_ !== undefined ? this.angle_.toString() : '-') +
        (this.points_ !== undefined ? this.points_.toString() : '-');
    this.checksums_ = [checksum, strokeChecksum, fillChecksum,
      this.radius_, this.radius2_, this.angle_, this.points_];
  }

  return this.checksums_[0];
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_style_RegularShape_);


/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tilestate_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vectorimagetile_js__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vectortile_js__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__size_js__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__source_urltile_js__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tilecoord_js__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tilegrid_js__ = __webpack_require__(54);









/**
 * @classdesc
 * Class for layer sources providing vector data divided into a tile grid, to be
 * used with {@link ol.layer.VectorTile}. Although this source receives tiles
 * with vector features from the server, it is not meant for feature editing.
 * Features are optimized for rendering, their geometries are clipped at or near
 * tile boundaries and simplified for a view resolution. See
 * {@link ol.source.Vector} for vector sources that are suitable for feature
 * editing.
 *
 * @constructor
 * @fires ol.source.Tile.Event
 * @extends {ol.source.UrlTile}
 * @param {olx.source.VectorTileOptions} options Vector tile options.
 * @api
 */
var _ol_source_VectorTile_ = function(options) {
  var projection = options.projection || 'EPSG:3857';

  var extent = options.extent || __WEBPACK_IMPORTED_MODULE_7__tilegrid_js__["a" /* default */].extentFromProjection(projection);

  var tileGrid = options.tileGrid || __WEBPACK_IMPORTED_MODULE_7__tilegrid_js__["a" /* default */].createXYZ({
    extent: extent,
    maxZoom: options.maxZoom || 22,
    minZoom: options.minZoom,
    tileSize: options.tileSize || 512
  });

  __WEBPACK_IMPORTED_MODULE_5__source_urltile_js__["a" /* default */].call(this, {
    attributions: options.attributions,
    cacheSize: options.cacheSize !== undefined ? options.cacheSize : 128,
    extent: extent,
    logo: options.logo,
    opaque: false,
    projection: projection,
    state: options.state,
    tileGrid: tileGrid,
    tileLoadFunction: options.tileLoadFunction ?
      options.tileLoadFunction : __WEBPACK_IMPORTED_MODULE_2__vectorimagetile_js__["a" /* default */].defaultLoadFunction,
    tileUrlFunction: options.tileUrlFunction,
    url: options.url,
    urls: options.urls,
    wrapX: options.wrapX === undefined ? true : options.wrapX,
    transition: options.transition
  });

  /**
   * @private
   * @type {ol.format.Feature}
   */
  this.format_ = options.format ? options.format : null;

  /**
   * @private
   * @type {Object.<string,ol.VectorTile>}
   */
  this.sourceTiles_ = {};

  /**
   * @private
   * @type {boolean}
   */
  this.overlaps_ = options.overlaps == undefined ? true : options.overlaps;

  /**
   * @protected
   * @type {function(new: ol.VectorTile, ol.TileCoord, ol.TileState, string,
   *        ol.format.Feature, ol.TileLoadFunctionType)}
   */
  this.tileClass = options.tileClass ? options.tileClass : __WEBPACK_IMPORTED_MODULE_3__vectortile_js__["a" /* default */];

  /**
   * @private
   * @type {Object.<string,ol.tilegrid.TileGrid>}
   */
  this.tileGrids_ = {};

};

__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_source_VectorTile_, __WEBPACK_IMPORTED_MODULE_5__source_urltile_js__["a" /* default */]);


/**
 * @return {boolean} The source can have overlapping geometries.
 */
_ol_source_VectorTile_.prototype.getOverlaps = function() {
  return this.overlaps_;
};

/**
 * clear {@link ol.TileCache} and delete all source tiles
 * @api
 */
_ol_source_VectorTile_.prototype.clear = function() {
  this.tileCache.clear();
  this.sourceTiles_ = {};
};

/**
 * @inheritDoc
 */
_ol_source_VectorTile_.prototype.getTile = function(z, x, y, pixelRatio, projection) {
  var tileCoordKey = __WEBPACK_IMPORTED_MODULE_6__tilecoord_js__["a" /* default */].getKeyZXY(z, x, y);
  if (this.tileCache.containsKey(tileCoordKey)) {
    return /** @type {!ol.Tile} */ (this.tileCache.get(tileCoordKey));
  } else {
    var tileCoord = [z, x, y];
    var urlTileCoord = this.getTileCoordForTileUrlFunction(
        tileCoord, projection);
    var tile = new __WEBPACK_IMPORTED_MODULE_2__vectorimagetile_js__["a" /* default */](
        tileCoord,
        urlTileCoord !== null ? __WEBPACK_IMPORTED_MODULE_1__tilestate_js__["a" /* default */].IDLE : __WEBPACK_IMPORTED_MODULE_1__tilestate_js__["a" /* default */].EMPTY,
        this.getRevision(),
        this.format_, this.tileLoadFunction, urlTileCoord, this.tileUrlFunction,
        this.tileGrid, this.getTileGridForProjection(projection),
        this.sourceTiles_, pixelRatio, projection, this.tileClass,
        this.handleTileChange.bind(this),
        this.tileOptions);

    this.tileCache.set(tileCoordKey, tile);
    return tile;
  }
};


/**
 * @inheritDoc
 */
_ol_source_VectorTile_.prototype.getTileGridForProjection = function(projection) {
  var code = projection.getCode();
  var tileGrid = this.tileGrids_[code];
  if (!tileGrid) {
    // A tile grid that matches the tile size of the source tile grid is more
    // likely to have 1:1 relationships between source tiles and rendered tiles.
    var sourceTileGrid = this.tileGrid;
    tileGrid = this.tileGrids_[code] = __WEBPACK_IMPORTED_MODULE_7__tilegrid_js__["a" /* default */].createForProjection(projection, undefined,
        sourceTileGrid ? sourceTileGrid.getTileSize(sourceTileGrid.getMinZoom()) : undefined);
  }
  return tileGrid;
};


/**
 * @inheritDoc
 */
_ol_source_VectorTile_.prototype.getTilePixelRatio = function(pixelRatio) {
  return pixelRatio;
};


/**
 * @inheritDoc
 */
_ol_source_VectorTile_.prototype.getTilePixelSize = function(z, pixelRatio, projection) {
  var tileSize = __WEBPACK_IMPORTED_MODULE_4__size_js__["a" /* default */].toSize(this.getTileGridForProjection(projection).getTileSize(z));
  return [Math.round(tileSize[0] * pixelRatio), Math.round(tileSize[1] * pixelRatio)];
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_source_VectorTile_);


/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tile_js__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tilestate_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dom_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__extent_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__events_eventtype_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__featureloader_js__ = __webpack_require__(237);









/**
 * @constructor
 * @extends {ol.Tile}
 * @param {ol.TileCoord} tileCoord Tile coordinate.
 * @param {ol.TileState} state State.
 * @param {number} sourceRevision Source revision.
 * @param {ol.format.Feature} format Feature format.
 * @param {ol.TileLoadFunctionType} tileLoadFunction Tile load function.
 * @param {ol.TileCoord} urlTileCoord Wrapped tile coordinate for source urls.
 * @param {ol.TileUrlFunctionType} tileUrlFunction Tile url function.
 * @param {ol.tilegrid.TileGrid} sourceTileGrid Tile grid of the source.
 * @param {ol.tilegrid.TileGrid} tileGrid Tile grid of the renderer.
 * @param {Object.<string,ol.VectorTile>} sourceTiles Source tiles.
 * @param {number} pixelRatio Pixel ratio.
 * @param {ol.proj.Projection} projection Projection.
 * @param {function(new: ol.VectorTile, ol.TileCoord, ol.TileState, string,
 *     ol.format.Feature, ol.TileLoadFunctionType)} tileClass Class to
 *     instantiate for source tiles.
 * @param {function(this: ol.source.VectorTile, ol.events.Event)} handleTileChange
 *     Function to call when a source tile's state changes.
 * @param {olx.TileOptions=} opt_options Tile options.
 */
var _ol_VectorImageTile_ = function(tileCoord, state, sourceRevision, format,
    tileLoadFunction, urlTileCoord, tileUrlFunction, sourceTileGrid, tileGrid,
    sourceTiles, pixelRatio, projection, tileClass, handleTileChange, opt_options) {

  __WEBPACK_IMPORTED_MODULE_1__tile_js__["a" /* default */].call(this, tileCoord, state, opt_options);

  /**
   * @private
   * @type {Object.<string, CanvasRenderingContext2D>}
   */
  this.context_ = {};

  /**
   * @private
   * @type {ol.FeatureLoader}
   */
  this.loader_;

  /**
   * @private
   * @type {Object.<string, ol.TileReplayState>}
   */
  this.replayState_ = {};

  /**
   * @private
   * @type {Object.<string,ol.VectorTile>}
   */
  this.sourceTiles_ = sourceTiles;

  /**
   * Keys of source tiles used by this tile. Use with {@link #getTile}.
   * @type {Array.<string>}
   */
  this.tileKeys = [];

  /**
   * @type {number}
   */
  this.sourceRevision_ = sourceRevision;

  /**
   * @type {ol.TileCoord}
   */
  this.wrappedTileCoord = urlTileCoord;

  /**
   * @type {Array.<ol.EventsKey>}
   */
  this.loadListenerKeys_ = [];

  /**
   * @type {Array.<ol.EventsKey>}
   */
  this.sourceTileListenerKeys_ = [];

  if (urlTileCoord) {
    var extent = tileGrid.getTileCoordExtent(urlTileCoord);
    var resolution = tileGrid.getResolution(tileCoord[0]);
    var sourceZ = sourceTileGrid.getZForResolution(resolution);
    sourceTileGrid.forEachTileCoord(extent, sourceZ, function(sourceTileCoord) {
      var sharedExtent = __WEBPACK_IMPORTED_MODULE_5__extent_js__["a" /* default */].getIntersection(extent,
          sourceTileGrid.getTileCoordExtent(sourceTileCoord));
      var sourceExtent = sourceTileGrid.getExtent();
      if (sourceExtent) {
        sharedExtent = __WEBPACK_IMPORTED_MODULE_5__extent_js__["a" /* default */].getIntersection(sharedExtent, sourceExtent);
      }
      if (__WEBPACK_IMPORTED_MODULE_5__extent_js__["a" /* default */].getWidth(sharedExtent) / resolution >= 0.5 &&
          __WEBPACK_IMPORTED_MODULE_5__extent_js__["a" /* default */].getHeight(sharedExtent) / resolution >= 0.5) {
        // only include source tile if overlap is at least 1 pixel
        var sourceTileKey = sourceTileCoord.toString();
        var sourceTile = sourceTiles[sourceTileKey];
        if (!sourceTile) {
          var tileUrl = tileUrlFunction(sourceTileCoord, pixelRatio, projection);
          sourceTile = sourceTiles[sourceTileKey] = new tileClass(sourceTileCoord,
              tileUrl == undefined ? __WEBPACK_IMPORTED_MODULE_2__tilestate_js__["a" /* default */].EMPTY : __WEBPACK_IMPORTED_MODULE_2__tilestate_js__["a" /* default */].IDLE,
              tileUrl == undefined ? '' : tileUrl,
              format, tileLoadFunction);
          this.sourceTileListenerKeys_.push(
              __WEBPACK_IMPORTED_MODULE_4__events_js__["a" /* default */].listen(sourceTile, __WEBPACK_IMPORTED_MODULE_6__events_eventtype_js__["a" /* default */].CHANGE, handleTileChange));
        }
        sourceTile.consumers++;
        this.tileKeys.push(sourceTileKey);
      }
    }.bind(this));
  }

};

__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_VectorImageTile_, __WEBPACK_IMPORTED_MODULE_1__tile_js__["a" /* default */]);


/**
 * @inheritDoc
 */
_ol_VectorImageTile_.prototype.disposeInternal = function() {
  for (var i = 0, ii = this.tileKeys.length; i < ii; ++i) {
    var sourceTileKey = this.tileKeys[i];
    var sourceTile = this.getTile(sourceTileKey);
    sourceTile.consumers--;
    if (sourceTile.consumers == 0) {
      delete this.sourceTiles_[sourceTileKey];
      sourceTile.dispose();
    }
  }
  this.tileKeys.length = 0;
  this.sourceTiles_ = null;
  this.loadListenerKeys_.forEach(__WEBPACK_IMPORTED_MODULE_4__events_js__["a" /* default */].unlistenByKey);
  this.loadListenerKeys_.length = 0;
  if (this.interimTile) {
    this.interimTile.dispose();
  }
  this.state = __WEBPACK_IMPORTED_MODULE_2__tilestate_js__["a" /* default */].ABORT;
  this.changed();
  this.sourceTileListenerKeys_.forEach(__WEBPACK_IMPORTED_MODULE_4__events_js__["a" /* default */].unlistenByKey);
  this.sourceTileListenerKeys_.length = 0;
  __WEBPACK_IMPORTED_MODULE_1__tile_js__["a" /* default */].prototype.disposeInternal.call(this);
};


/**
 * @param {ol.layer.Layer} layer Layer.
 * @return {CanvasRenderingContext2D} The rendering context.
 */
_ol_VectorImageTile_.prototype.getContext = function(layer) {
  var key = __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].getUid(layer).toString();
  if (!(key in this.context_)) {
    this.context_[key] = __WEBPACK_IMPORTED_MODULE_3__dom_js__["a" /* default */].createCanvasContext2D();
  }
  return this.context_[key];
};


/**
 * Get the Canvas for this tile.
 * @param {ol.layer.Layer} layer Layer.
 * @return {HTMLCanvasElement} Canvas.
 */
_ol_VectorImageTile_.prototype.getImage = function(layer) {
  return this.getReplayState(layer).renderedTileRevision == -1 ?
    null : this.getContext(layer).canvas;
};


/**
 * @param {ol.layer.Layer} layer Layer.
 * @return {ol.TileReplayState} The replay state.
 */
_ol_VectorImageTile_.prototype.getReplayState = function(layer) {
  var key = __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].getUid(layer).toString();
  if (!(key in this.replayState_)) {
    this.replayState_[key] = {
      dirty: false,
      renderedRenderOrder: null,
      renderedRevision: -1,
      renderedTileRevision: -1
    };
  }
  return this.replayState_[key];
};


/**
 * @inheritDoc
 */
_ol_VectorImageTile_.prototype.getKey = function() {
  return this.tileKeys.join('/') + '-' + this.sourceRevision_;
};


/**
 * @param {string} tileKey Key (tileCoord) of the source tile.
 * @return {ol.VectorTile} Source tile.
 */
_ol_VectorImageTile_.prototype.getTile = function(tileKey) {
  return this.sourceTiles_[tileKey];
};


/**
 * @inheritDoc
 */
_ol_VectorImageTile_.prototype.load = function() {
  // Source tiles with LOADED state - we just count them because once they are
  // loaded, we're no longer listening to state changes.
  var leftToLoad = 0;
  // Source tiles with ERROR state - we track them because they can still have
  // an ERROR state after another load attempt.
  var errorSourceTiles = {};

  if (this.state == __WEBPACK_IMPORTED_MODULE_2__tilestate_js__["a" /* default */].IDLE) {
    this.setState(__WEBPACK_IMPORTED_MODULE_2__tilestate_js__["a" /* default */].LOADING);
  }
  if (this.state == __WEBPACK_IMPORTED_MODULE_2__tilestate_js__["a" /* default */].LOADING) {
    this.tileKeys.forEach(function(sourceTileKey) {
      var sourceTile = this.getTile(sourceTileKey);
      if (sourceTile.state == __WEBPACK_IMPORTED_MODULE_2__tilestate_js__["a" /* default */].IDLE) {
        sourceTile.setLoader(this.loader_);
        sourceTile.load();
      }
      if (sourceTile.state == __WEBPACK_IMPORTED_MODULE_2__tilestate_js__["a" /* default */].LOADING) {
        var key = __WEBPACK_IMPORTED_MODULE_4__events_js__["a" /* default */].listen(sourceTile, __WEBPACK_IMPORTED_MODULE_6__events_eventtype_js__["a" /* default */].CHANGE, function(e) {
          var state = sourceTile.getState();
          if (state == __WEBPACK_IMPORTED_MODULE_2__tilestate_js__["a" /* default */].LOADED ||
              state == __WEBPACK_IMPORTED_MODULE_2__tilestate_js__["a" /* default */].ERROR) {
            var uid = __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].getUid(sourceTile);
            if (state == __WEBPACK_IMPORTED_MODULE_2__tilestate_js__["a" /* default */].ERROR) {
              errorSourceTiles[uid] = true;
            } else {
              --leftToLoad;
              delete errorSourceTiles[uid];
            }
            if (leftToLoad - Object.keys(errorSourceTiles).length == 0) {
              this.finishLoading_();
            }
          }
        }.bind(this));
        this.loadListenerKeys_.push(key);
        ++leftToLoad;
      }
    }.bind(this));
  }
  if (leftToLoad - Object.keys(errorSourceTiles).length == 0) {
    setTimeout(this.finishLoading_.bind(this), 0);
  }
};


/**
 * @private
 */
_ol_VectorImageTile_.prototype.finishLoading_ = function() {
  var loaded = this.tileKeys.length;
  var empty = 0;
  for (var i = loaded - 1; i >= 0; --i) {
    var state = this.getTile(this.tileKeys[i]).getState();
    if (state != __WEBPACK_IMPORTED_MODULE_2__tilestate_js__["a" /* default */].LOADED) {
      --loaded;
    }
    if (state == __WEBPACK_IMPORTED_MODULE_2__tilestate_js__["a" /* default */].EMPTY) {
      ++empty;
    }
  }
  if (loaded == this.tileKeys.length) {
    this.loadListenerKeys_.forEach(__WEBPACK_IMPORTED_MODULE_4__events_js__["a" /* default */].unlistenByKey);
    this.loadListenerKeys_.length = 0;
    this.setState(__WEBPACK_IMPORTED_MODULE_2__tilestate_js__["a" /* default */].LOADED);
  } else {
    this.setState(empty == this.tileKeys.length ? __WEBPACK_IMPORTED_MODULE_2__tilestate_js__["a" /* default */].EMPTY : __WEBPACK_IMPORTED_MODULE_2__tilestate_js__["a" /* default */].ERROR);
  }
};


/**
 * Sets the loader for a tile.
 * @param {ol.VectorTile} tile Vector tile.
 * @param {string} url URL.
 */
_ol_VectorImageTile_.defaultLoadFunction = function(tile, url) {
  var loader = __WEBPACK_IMPORTED_MODULE_7__featureloader_js__["a" /* default */].loadFeaturesXhr(
      url, tile.getFormat(), tile.onLoad.bind(tile), tile.onError.bind(tile));

  tile.setLoader(loader);
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_VectorImageTile_);


/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__format_formattype_js__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__xml_js__ = __webpack_require__(238);



var _ol_featureloader_ = {};


/**
 * @param {string|ol.FeatureUrlFunction} url Feature URL service.
 * @param {ol.format.Feature} format Feature format.
 * @param {function(this:ol.VectorTile, Array.<ol.Feature>, ol.proj.Projection, ol.Extent)|function(this:ol.source.Vector, Array.<ol.Feature>)} success
 *     Function called with the loaded features and optionally with the data
 *     projection. Called with the vector tile or source as `this`.
 * @param {function(this:ol.VectorTile)|function(this:ol.source.Vector)} failure
 *     Function called when loading failed. Called with the vector tile or
 *     source as `this`.
 * @return {ol.FeatureLoader} The feature loader.
 */
_ol_featureloader_.loadFeaturesXhr = function(url, format, success, failure) {
  return (
    /**
     * @param {ol.Extent} extent Extent.
     * @param {number} resolution Resolution.
     * @param {ol.proj.Projection} projection Projection.
     * @this {ol.source.Vector|ol.VectorTile}
     */
    function(extent, resolution, projection) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET',
          typeof url === 'function' ? url(extent, resolution, projection) : url,
          true);
      if (format.getType() == __WEBPACK_IMPORTED_MODULE_1__format_formattype_js__["a" /* default */].ARRAY_BUFFER) {
        xhr.responseType = 'arraybuffer';
      }
      /**
       * @param {Event} event Event.
       * @private
       */
      xhr.onload = function(event) {
        // status will be 0 for file:// urls
        if (!xhr.status || xhr.status >= 200 && xhr.status < 300) {
          var type = format.getType();
          /** @type {Document|Node|Object|string|undefined} */
          var source;
          if (type == __WEBPACK_IMPORTED_MODULE_1__format_formattype_js__["a" /* default */].JSON ||
                type == __WEBPACK_IMPORTED_MODULE_1__format_formattype_js__["a" /* default */].TEXT) {
            source = xhr.responseText;
          } else if (type == __WEBPACK_IMPORTED_MODULE_1__format_formattype_js__["a" /* default */].XML) {
            source = xhr.responseXML;
            if (!source) {
              source = __WEBPACK_IMPORTED_MODULE_2__xml_js__["a" /* default */].parse(xhr.responseText);
            }
          } else if (type == __WEBPACK_IMPORTED_MODULE_1__format_formattype_js__["a" /* default */].ARRAY_BUFFER) {
            source = /** @type {ArrayBuffer} */ (xhr.response);
          }
          if (source) {
            success.call(this, format.readFeatures(source,
                {featureProjection: projection}),
            format.readProjection(source), format.getLastExtent());
          } else {
            failure.call(this);
          }
        } else {
          failure.call(this);
        }
      }.bind(this);
      /**
       * @private
       */
      xhr.onerror = function() {
        failure.call(this);
      }.bind(this);
      xhr.send();
    }
  );
};


/**
 * Create an XHR feature loader for a `url` and `format`. The feature loader
 * loads features (with XHR), parses the features, and adds them to the
 * vector source.
 * @param {string|ol.FeatureUrlFunction} url Feature URL service.
 * @param {ol.format.Feature} format Feature format.
 * @return {ol.FeatureLoader} The feature loader.
 * @api
 */
_ol_featureloader_.xhr = function(url, format) {
  return _ol_featureloader_.loadFeaturesXhr(url, format,
      /**
       * @param {Array.<ol.Feature>} features The loaded features.
       * @param {ol.proj.Projection} dataProjection Data projection.
       * @this {ol.source.Vector}
       */
      function(features, dataProjection) {
        this.addFeatures(features);
      }, /* FIXME handle error */ __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].nullFunction);
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_featureloader_);


/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array_js__ = __webpack_require__(3);

var _ol_xml_ = {};


/**
 * This document should be used when creating nodes for XML serializations. This
 * document is also used by {@link ol.xml.createElementNS} and
 * {@link ol.xml.setAttributeNS}
 * @const
 * @type {Document}
 */
_ol_xml_.DOCUMENT = document.implementation.createDocument('', '', null);


/**
 * @param {string} namespaceURI Namespace URI.
 * @param {string} qualifiedName Qualified name.
 * @return {Node} Node.
 */
_ol_xml_.createElementNS = function(namespaceURI, qualifiedName) {
  return _ol_xml_.DOCUMENT.createElementNS(namespaceURI, qualifiedName);
};


/**
 * Recursively grab all text content of child nodes into a single string.
 * @param {Node} node Node.
 * @param {boolean} normalizeWhitespace Normalize whitespace: remove all line
 * breaks.
 * @return {string} All text content.
 * @api
 */
_ol_xml_.getAllTextContent = function(node, normalizeWhitespace) {
  return _ol_xml_.getAllTextContent_(node, normalizeWhitespace, []).join('');
};


/**
 * Recursively grab all text content of child nodes into a single string.
 * @param {Node} node Node.
 * @param {boolean} normalizeWhitespace Normalize whitespace: remove all line
 * breaks.
 * @param {Array.<string>} accumulator Accumulator.
 * @private
 * @return {Array.<string>} Accumulator.
 */
_ol_xml_.getAllTextContent_ = function(node, normalizeWhitespace, accumulator) {
  if (node.nodeType == Node.CDATA_SECTION_NODE ||
      node.nodeType == Node.TEXT_NODE) {
    if (normalizeWhitespace) {
      accumulator.push(String(node.nodeValue).replace(/(\r\n|\r|\n)/g, ''));
    } else {
      accumulator.push(node.nodeValue);
    }
  } else {
    var n;
    for (n = node.firstChild; n; n = n.nextSibling) {
      _ol_xml_.getAllTextContent_(n, normalizeWhitespace, accumulator);
    }
  }
  return accumulator;
};


/**
 * @param {?} value Value.
 * @return {boolean} Is document.
 */
_ol_xml_.isDocument = function(value) {
  return value instanceof Document;
};


/**
 * @param {?} value Value.
 * @return {boolean} Is node.
 */
_ol_xml_.isNode = function(value) {
  return value instanceof Node;
};


/**
 * @param {Node} node Node.
 * @param {?string} namespaceURI Namespace URI.
 * @param {string} name Attribute name.
 * @return {string} Value
 */
_ol_xml_.getAttributeNS = function(node, namespaceURI, name) {
  return node.getAttributeNS(namespaceURI, name) || '';
};


/**
 * @param {Node} node Node.
 * @param {?string} namespaceURI Namespace URI.
 * @param {string} name Attribute name.
 * @param {string|number} value Value.
 */
_ol_xml_.setAttributeNS = function(node, namespaceURI, name, value) {
  node.setAttributeNS(namespaceURI, name, value);
};


/**
 * Parse an XML string to an XML Document.
 * @param {string} xml XML.
 * @return {Document} Document.
 * @api
 */
_ol_xml_.parse = function(xml) {
  return new DOMParser().parseFromString(xml, 'application/xml');
};


/**
 * Make an array extender function for extending the array at the top of the
 * object stack.
 * @param {function(this: T, Node, Array.<*>): (Array.<*>|undefined)}
 *     valueReader Value reader.
 * @param {T=} opt_this The object to use as `this` in `valueReader`.
 * @return {ol.XmlParser} Parser.
 * @template T
 */
_ol_xml_.makeArrayExtender = function(valueReader, opt_this) {
  return (
    /**
     * @param {Node} node Node.
     * @param {Array.<*>} objectStack Object stack.
     */
    function(node, objectStack) {
      var value = valueReader.call(opt_this, node, objectStack);
      if (value !== undefined) {
        var array = /** @type {Array.<*>} */
              (objectStack[objectStack.length - 1]);
        __WEBPACK_IMPORTED_MODULE_0__array_js__["a" /* default */].extend(array, value);
      }
    }
  );
};


/**
 * Make an array pusher function for pushing to the array at the top of the
 * object stack.
 * @param {function(this: T, Node, Array.<*>): *} valueReader Value reader.
 * @param {T=} opt_this The object to use as `this` in `valueReader`.
 * @return {ol.XmlParser} Parser.
 * @template T
 */
_ol_xml_.makeArrayPusher = function(valueReader, opt_this) {
  return (
    /**
     * @param {Node} node Node.
     * @param {Array.<*>} objectStack Object stack.
     */
    function(node, objectStack) {
      var value = valueReader.call(opt_this !== undefined ? opt_this : this,
          node, objectStack);
      if (value !== undefined) {
        var array = objectStack[objectStack.length - 1];
        array.push(value);
      }
    });
};


/**
 * Make an object stack replacer function for replacing the object at the
 * top of the stack.
 * @param {function(this: T, Node, Array.<*>): *} valueReader Value reader.
 * @param {T=} opt_this The object to use as `this` in `valueReader`.
 * @return {ol.XmlParser} Parser.
 * @template T
 */
_ol_xml_.makeReplacer = function(valueReader, opt_this) {
  return (
    /**
     * @param {Node} node Node.
     * @param {Array.<*>} objectStack Object stack.
     */
    function(node, objectStack) {
      var value = valueReader.call(opt_this !== undefined ? opt_this : this,
          node, objectStack);
      if (value !== undefined) {
        objectStack[objectStack.length - 1] = value;
      }
    });
};


/**
 * Make an object property pusher function for adding a property to the
 * object at the top of the stack.
 * @param {function(this: T, Node, Array.<*>): *} valueReader Value reader.
 * @param {string=} opt_property Property.
 * @param {T=} opt_this The object to use as `this` in `valueReader`.
 * @return {ol.XmlParser} Parser.
 * @template T
 */
_ol_xml_.makeObjectPropertyPusher = function(valueReader, opt_property, opt_this) {
  return (
    /**
     * @param {Node} node Node.
     * @param {Array.<*>} objectStack Object stack.
     */
    function(node, objectStack) {
      var value = valueReader.call(opt_this !== undefined ? opt_this : this,
          node, objectStack);
      if (value !== undefined) {
        var object = /** @type {Object} */
              (objectStack[objectStack.length - 1]);
        var property = opt_property !== undefined ?
          opt_property : node.localName;
        var array;
        if (property in object) {
          array = object[property];
        } else {
          array = object[property] = [];
        }
        array.push(value);
      }
    });
};


/**
 * Make an object property setter function.
 * @param {function(this: T, Node, Array.<*>): *} valueReader Value reader.
 * @param {string=} opt_property Property.
 * @param {T=} opt_this The object to use as `this` in `valueReader`.
 * @return {ol.XmlParser} Parser.
 * @template T
 */
_ol_xml_.makeObjectPropertySetter = function(valueReader, opt_property, opt_this) {
  return (
    /**
     * @param {Node} node Node.
     * @param {Array.<*>} objectStack Object stack.
     */
    function(node, objectStack) {
      var value = valueReader.call(opt_this !== undefined ? opt_this : this,
          node, objectStack);
      if (value !== undefined) {
        var object = /** @type {Object} */
              (objectStack[objectStack.length - 1]);
        var property = opt_property !== undefined ?
          opt_property : node.localName;
        object[property] = value;
      }
    });
};


/**
 * Create a serializer that appends nodes written by its `nodeWriter` to its
 * designated parent. The parent is the `node` of the
 * {@link ol.XmlNodeStackItem} at the top of the `objectStack`.
 * @param {function(this: T, Node, V, Array.<*>)}
 *     nodeWriter Node writer.
 * @param {T=} opt_this The object to use as `this` in `nodeWriter`.
 * @return {ol.XmlSerializer} Serializer.
 * @template T, V
 */
_ol_xml_.makeChildAppender = function(nodeWriter, opt_this) {
  return function(node, value, objectStack) {
    nodeWriter.call(opt_this !== undefined ? opt_this : this,
        node, value, objectStack);
    var parent = objectStack[objectStack.length - 1];
    var parentNode = parent.node;
    parentNode.appendChild(node);
  };
};


/**
 * Create a serializer that calls the provided `nodeWriter` from
 * {@link ol.xml.serialize}. This can be used by the parent writer to have the
 * 'nodeWriter' called with an array of values when the `nodeWriter` was
 * designed to serialize a single item. An example would be a LineString
 * geometry writer, which could be reused for writing MultiLineString
 * geometries.
 * @param {function(this: T, Node, V, Array.<*>)}
 *     nodeWriter Node writer.
 * @param {T=} opt_this The object to use as `this` in `nodeWriter`.
 * @return {ol.XmlSerializer} Serializer.
 * @template T, V
 */
_ol_xml_.makeArraySerializer = function(nodeWriter, opt_this) {
  var serializersNS, nodeFactory;
  return function(node, value, objectStack) {
    if (serializersNS === undefined) {
      serializersNS = {};
      var serializers = {};
      serializers[node.localName] = nodeWriter;
      serializersNS[node.namespaceURI] = serializers;
      nodeFactory = _ol_xml_.makeSimpleNodeFactory(node.localName);
    }
    _ol_xml_.serialize(serializersNS, nodeFactory, value, objectStack);
  };
};


/**
 * Create a node factory which can use the `opt_keys` passed to
 * {@link ol.xml.serialize} or {@link ol.xml.pushSerializeAndPop} as node names,
 * or a fixed node name. The namespace of the created nodes can either be fixed,
 * or the parent namespace will be used.
 * @param {string=} opt_nodeName Fixed node name which will be used for all
 *     created nodes. If not provided, the 3rd argument to the resulting node
 *     factory needs to be provided and will be the nodeName.
 * @param {string=} opt_namespaceURI Fixed namespace URI which will be used for
 *     all created nodes. If not provided, the namespace of the parent node will
 *     be used.
 * @return {function(*, Array.<*>, string=): (Node|undefined)} Node factory.
 */
_ol_xml_.makeSimpleNodeFactory = function(opt_nodeName, opt_namespaceURI) {
  var fixedNodeName = opt_nodeName;
  return (
    /**
     * @param {*} value Value.
     * @param {Array.<*>} objectStack Object stack.
     * @param {string=} opt_nodeName Node name.
     * @return {Node} Node.
     */
    function(value, objectStack, opt_nodeName) {
      var context = objectStack[objectStack.length - 1];
      var node = context.node;
      var nodeName = fixedNodeName;
      if (nodeName === undefined) {
        nodeName = opt_nodeName;
      }
      var namespaceURI = opt_namespaceURI;
      if (opt_namespaceURI === undefined) {
        namespaceURI = node.namespaceURI;
      }
      return _ol_xml_.createElementNS(namespaceURI, /** @type {string} */ (nodeName));
    }
  );
};


/**
 * A node factory that creates a node using the parent's `namespaceURI` and the
 * `nodeName` passed by {@link ol.xml.serialize} or
 * {@link ol.xml.pushSerializeAndPop} to the node factory.
 * @const
 * @type {function(*, Array.<*>, string=): (Node|undefined)}
 */
_ol_xml_.OBJECT_PROPERTY_NODE_FACTORY = _ol_xml_.makeSimpleNodeFactory();


/**
 * Create an array of `values` to be used with {@link ol.xml.serialize} or
 * {@link ol.xml.pushSerializeAndPop}, where `orderedKeys` has to be provided as
 * `opt_key` argument.
 * @param {Object.<string, V>} object Key-value pairs for the sequence. Keys can
 *     be a subset of the `orderedKeys`.
 * @param {Array.<string>} orderedKeys Keys in the order of the sequence.
 * @return {Array.<V>} Values in the order of the sequence. The resulting array
 *     has the same length as the `orderedKeys` array. Values that are not
 *     present in `object` will be `undefined` in the resulting array.
 * @template V
 */
_ol_xml_.makeSequence = function(object, orderedKeys) {
  var length = orderedKeys.length;
  var sequence = new Array(length);
  for (var i = 0; i < length; ++i) {
    sequence[i] = object[orderedKeys[i]];
  }
  return sequence;
};


/**
 * Create a namespaced structure, using the same values for each namespace.
 * This can be used as a starting point for versioned parsers, when only a few
 * values are version specific.
 * @param {Array.<string>} namespaceURIs Namespace URIs.
 * @param {T} structure Structure.
 * @param {Object.<string, T>=} opt_structureNS Namespaced structure to add to.
 * @return {Object.<string, T>} Namespaced structure.
 * @template T
 */
_ol_xml_.makeStructureNS = function(namespaceURIs, structure, opt_structureNS) {
  /**
   * @type {Object.<string, *>}
   */
  var structureNS = opt_structureNS !== undefined ? opt_structureNS : {};
  var i, ii;
  for (i = 0, ii = namespaceURIs.length; i < ii; ++i) {
    structureNS[namespaceURIs[i]] = structure;
  }
  return structureNS;
};


/**
 * Parse a node using the parsers and object stack.
 * @param {Object.<string, Object.<string, ol.XmlParser>>} parsersNS
 *     Parsers by namespace.
 * @param {Node} node Node.
 * @param {Array.<*>} objectStack Object stack.
 * @param {*=} opt_this The object to use as `this`.
 */
_ol_xml_.parseNode = function(parsersNS, node, objectStack, opt_this) {
  var n;
  for (n = node.firstElementChild; n; n = n.nextElementSibling) {
    var parsers = parsersNS[n.namespaceURI];
    if (parsers !== undefined) {
      var parser = parsers[n.localName];
      if (parser !== undefined) {
        parser.call(opt_this, n, objectStack);
      }
    }
  }
};


/**
 * Push an object on top of the stack, parse and return the popped object.
 * @param {T} object Object.
 * @param {Object.<string, Object.<string, ol.XmlParser>>} parsersNS
 *     Parsers by namespace.
 * @param {Node} node Node.
 * @param {Array.<*>} objectStack Object stack.
 * @param {*=} opt_this The object to use as `this`.
 * @return {T} Object.
 * @template T
 */
_ol_xml_.pushParseAndPop = function(
    object, parsersNS, node, objectStack, opt_this) {
  objectStack.push(object);
  _ol_xml_.parseNode(parsersNS, node, objectStack, opt_this);
  return objectStack.pop();
};


/**
 * Walk through an array of `values` and call a serializer for each value.
 * @param {Object.<string, Object.<string, ol.XmlSerializer>>} serializersNS
 *     Namespaced serializers.
 * @param {function(this: T, *, Array.<*>, (string|undefined)): (Node|undefined)} nodeFactory
 *     Node factory. The `nodeFactory` creates the node whose namespace and name
 *     will be used to choose a node writer from `serializersNS`. This
 *     separation allows us to decide what kind of node to create, depending on
 *     the value we want to serialize. An example for this would be different
 *     geometry writers based on the geometry type.
 * @param {Array.<*>} values Values to serialize. An example would be an array
 *     of {@link ol.Feature} instances.
 * @param {Array.<*>} objectStack Node stack.
 * @param {Array.<string>=} opt_keys Keys of the `values`. Will be passed to the
 *     `nodeFactory`. This is used for serializing object literals where the
 *     node name relates to the property key. The array length of `opt_keys` has
 *     to match the length of `values`. For serializing a sequence, `opt_keys`
 *     determines the order of the sequence.
 * @param {T=} opt_this The object to use as `this` for the node factory and
 *     serializers.
 * @template T
 */
_ol_xml_.serialize = function(
    serializersNS, nodeFactory, values, objectStack, opt_keys, opt_this) {
  var length = (opt_keys !== undefined ? opt_keys : values).length;
  var value, node;
  for (var i = 0; i < length; ++i) {
    value = values[i];
    if (value !== undefined) {
      node = nodeFactory.call(opt_this, value, objectStack,
          opt_keys !== undefined ? opt_keys[i] : undefined);
      if (node !== undefined) {
        serializersNS[node.namespaceURI][node.localName]
            .call(opt_this, node, value, objectStack);
      }
    }
  }
};


/**
 * @param {O} object Object.
 * @param {Object.<string, Object.<string, ol.XmlSerializer>>} serializersNS
 *     Namespaced serializers.
 * @param {function(this: T, *, Array.<*>, (string|undefined)): (Node|undefined)} nodeFactory
 *     Node factory. The `nodeFactory` creates the node whose namespace and name
 *     will be used to choose a node writer from `serializersNS`. This
 *     separation allows us to decide what kind of node to create, depending on
 *     the value we want to serialize. An example for this would be different
 *     geometry writers based on the geometry type.
 * @param {Array.<*>} values Values to serialize. An example would be an array
 *     of {@link ol.Feature} instances.
 * @param {Array.<*>} objectStack Node stack.
 * @param {Array.<string>=} opt_keys Keys of the `values`. Will be passed to the
 *     `nodeFactory`. This is used for serializing object literals where the
 *     node name relates to the property key. The array length of `opt_keys` has
 *     to match the length of `values`. For serializing a sequence, `opt_keys`
 *     determines the order of the sequence.
 * @param {T=} opt_this The object to use as `this` for the node factory and
 *     serializers.
 * @return {O|undefined} Object.
 * @template O, T
 */
_ol_xml_.pushSerializeAndPop = function(object,
    serializersNS, nodeFactory, values, objectStack, opt_keys, opt_this) {
  objectStack.push(object);
  _ol_xml_.serialize(
      serializersNS, nodeFactory, values, objectStack, opt_keys, opt_this);
  return objectStack.pop();
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_xml_);


/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tile_js__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tilestate_js__ = __webpack_require__(12);




/**
 * @constructor
 * @extends {ol.Tile}
 * @param {ol.TileCoord} tileCoord Tile coordinate.
 * @param {ol.TileState} state State.
 * @param {string} src Data source url.
 * @param {ol.format.Feature} format Feature format.
 * @param {ol.TileLoadFunctionType} tileLoadFunction Tile load function.
 * @param {olx.TileOptions=} opt_options Tile options.
 */
var _ol_VectorTile_ = function(tileCoord, state, src, format, tileLoadFunction, opt_options) {

  __WEBPACK_IMPORTED_MODULE_1__tile_js__["a" /* default */].call(this, tileCoord, state, opt_options);

  /**
   * @type {number}
   */
  this.consumers = 0;

  /**
   * @private
   * @type {ol.Extent}
   */
  this.extent_ = null;

  /**
   * @private
   * @type {ol.format.Feature}
   */
  this.format_ = format;

  /**
   * @private
   * @type {Array.<ol.Feature>}
   */
  this.features_ = null;

  /**
   * @private
   * @type {ol.FeatureLoader}
   */
  this.loader_;

  /**
   * Data projection
   * @private
   * @type {ol.proj.Projection}
   */
  this.projection_;

  /**
   * @private
   * @type {Object.<string, ol.render.ReplayGroup>}
   */
  this.replayGroups_ = {};

  /**
   * @private
   * @type {ol.TileLoadFunctionType}
   */
  this.tileLoadFunction_ = tileLoadFunction;

  /**
   * @private
   * @type {string}
   */
  this.url_ = src;

};

__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_VectorTile_, __WEBPACK_IMPORTED_MODULE_1__tile_js__["a" /* default */]);


/**
 * @inheritDoc
 */
_ol_VectorTile_.prototype.disposeInternal = function() {
  this.features_ = null;
  this.replayGroups_ = {};
  this.state = __WEBPACK_IMPORTED_MODULE_2__tilestate_js__["a" /* default */].ABORT;
  this.changed();
  __WEBPACK_IMPORTED_MODULE_1__tile_js__["a" /* default */].prototype.disposeInternal.call(this);
};


/**
 * Gets the extent of the vector tile.
 * @return {ol.Extent} The extent.
 * @api
 */
_ol_VectorTile_.prototype.getExtent = function() {
  return this.extent_ || _ol_VectorTile_.DEFAULT_EXTENT;
};


/**
 * Get the feature format assigned for reading this tile's features.
 * @return {ol.format.Feature} Feature format.
 * @api
 */
_ol_VectorTile_.prototype.getFormat = function() {
  return this.format_;
};


/**
 * Get the features for this tile. Geometries will be in the projection returned
 * by {@link ol.VectorTile#getProjection}.
 * @return {Array.<ol.Feature|ol.render.Feature>} Features.
 * @api
 */
_ol_VectorTile_.prototype.getFeatures = function() {
  return this.features_;
};


/**
 * @inheritDoc
 */
_ol_VectorTile_.prototype.getKey = function() {
  return this.url_;
};


/**
 * Get the feature projection of features returned by
 * {@link ol.VectorTile#getFeatures}.
 * @return {ol.proj.Projection} Feature projection.
 * @api
 */
_ol_VectorTile_.prototype.getProjection = function() {
  return this.projection_;
};


/**
 * @param {ol.layer.Layer} layer Layer.
 * @param {string} key Key.
 * @return {ol.render.ReplayGroup} Replay group.
 */
_ol_VectorTile_.prototype.getReplayGroup = function(layer, key) {
  return this.replayGroups_[__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].getUid(layer) + ',' + key];
};


/**
 * @inheritDoc
 */
_ol_VectorTile_.prototype.load = function() {
  if (this.state == __WEBPACK_IMPORTED_MODULE_2__tilestate_js__["a" /* default */].IDLE) {
    this.setState(__WEBPACK_IMPORTED_MODULE_2__tilestate_js__["a" /* default */].LOADING);
    this.tileLoadFunction_(this, this.url_);
    this.loader_(null, NaN, null);
  }
};


/**
 * Handler for successful tile load.
 * @param {Array.<ol.Feature>} features The loaded features.
 * @param {ol.proj.Projection} dataProjection Data projection.
 * @param {ol.Extent} extent Extent.
 */
_ol_VectorTile_.prototype.onLoad = function(features, dataProjection, extent) {
  this.setProjection(dataProjection);
  this.setFeatures(features);
  this.setExtent(extent);
};


/**
 * Handler for tile load errors.
 */
_ol_VectorTile_.prototype.onError = function() {
  this.setState(__WEBPACK_IMPORTED_MODULE_2__tilestate_js__["a" /* default */].ERROR);
};


/**
 * Function for use in an {@link ol.source.VectorTile}'s `tileLoadFunction`.
 * Sets the extent of the vector tile. This is only required for tiles in
 * projections with `tile-pixels` as units. The extent should be set to
 * `[0, 0, tilePixelSize, tilePixelSize]`, where `tilePixelSize` is calculated
 * by multiplying the tile size with the tile pixel ratio. For sources using
 * {@link ol.format.MVT} as feature format, the
 * {@link ol.format.MVT#getLastExtent} method will return the correct extent.
 * The default is `[0, 0, 4096, 4096]`.
 * @param {ol.Extent} extent The extent.
 * @api
 */
_ol_VectorTile_.prototype.setExtent = function(extent) {
  this.extent_ = extent;
};


/**
 * Function for use in an {@link ol.source.VectorTile}'s `tileLoadFunction`.
 * Sets the features for the tile.
 * @param {Array.<ol.Feature>} features Features.
 * @api
 */
_ol_VectorTile_.prototype.setFeatures = function(features) {
  this.features_ = features;
  this.setState(__WEBPACK_IMPORTED_MODULE_2__tilestate_js__["a" /* default */].LOADED);
};


/**
 * Function for use in an {@link ol.source.VectorTile}'s `tileLoadFunction`.
 * Sets the projection of the features that were added with
 * {@link ol.VectorTile#setFeatures}.
 * @param {ol.proj.Projection} projection Feature projection.
 * @api
 */
_ol_VectorTile_.prototype.setProjection = function(projection) {
  this.projection_ = projection;
};


/**
 * @param {ol.layer.Layer} layer Layer.
 * @param {string} key Key.
 * @param {ol.render.ReplayGroup} replayGroup Replay group.
 */
_ol_VectorTile_.prototype.setReplayGroup = function(layer, key, replayGroup) {
  this.replayGroups_[__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].getUid(layer) + ',' + key] = replayGroup;
};


/**
 * Set the feature loader for reading this tile's features.
 * @param {ol.FeatureLoader} loader Feature loader.
 * @api
 */
_ol_VectorTile_.prototype.setLoader = function(loader) {
  this.loader_ = loader;
};


/**
 * @const
 * @type {ol.Extent}
 */
_ol_VectorTile_.DEFAULT_EXTENT = [0, 0, 4096, 4096];
/* harmony default export */ __webpack_exports__["a"] = (_ol_VectorTile_);


/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hashed__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hashed___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hashed__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ol_proj__ = __webpack_require__(15);



function toPrecision(value, precision) {
  var factor = Math.pow(10, precision);
  return (Math.round(value * factor) / factor).toString();
}

function synchronize(map, options) {
  options = options || {};
  var animate;
  if ('animate' in options) {
    animate = options.animate;
  } else {
    animate = {duration: 250};
  }

  var view = map.getView();
  var projection = view.getProjection().getCode();

  var zoom, center, rotation;
  if (view.isDef()) {
    zoom = view.getZoom();
    center = view.getCenter();
    rotation = view.getRotation();
  } else {
    var viewport = map.getViewport();
    if (viewport) {
      zoom = Math.LOG2E * Math.log(viewport.clientWidth / 256);
    } else {
      zoom = 0;
    }
    center = [0, 0];
    rotation = 0;
  }

  var config = {
    center: {
      default: center,
      serialize: function(coord, state) {
        var precision;
        if (state && 'zoom' in state) {
          precision = Math.max(0, Math.ceil(Math.log(state.zoom) / Math.LN2));
        } else {
          precision = 3;
        }
        coord = __WEBPACK_IMPORTED_MODULE_1_ol_proj__["a" /* default */].transform(coord, projection, 'EPSG:4326');
        return (
          toPrecision(coord[0], precision) +
          ',' +
          toPrecision(coord[1], precision)
        );
      },
      deserialize: function(str) {
        var parts = str.split(',');
        if (parts.length !== 2) {
          throw new Error('Expected lon,lat but got ' + str);
        }
        var coord = [parseFloat(parts[0]), parseFloat(parts[1])];
        return __WEBPACK_IMPORTED_MODULE_1_ol_proj__["a" /* default */].transform(coord, 'EPSG:4326', projection);
      }
    },
    zoom: {
      default: zoom,
      serialize: function(value) {
        return toPrecision(value, 1);
      },
      deserialize: Number
    },
    rotation: {
      default: rotation,
      serialize: function(value) {
        return toPrecision(value, 2);
      },
      deserialize: Number
    }
  };

  function hashHandler(state) {
    if (view.isDef() && animate) {
      view.animate(Object.assign({}, state, animate));
      return;
    }
    if ('center' in state) {
      view.setCenter(state.center);
    }
    if ('zoom' in state) {
      view.setZoom(state.zoom);
    }
    if ('rotation' in state) {
      view.setRotation(state.rotation);
    }
  }

  var update = __WEBPACK_IMPORTED_MODULE_0_hashed___default.a.register(config, hashHandler);

  function onMoveEnd() {
    update({
      center: view.getCenter(),
      zoom: view.getZoom(),
      rotation: view.getRotation()
    });
  }

  map.on('moveend', onMoveEnd);

  return function unregister() {
    map.un('moveend', onMoveEnd);
    __WEBPACK_IMPORTED_MODULE_0_hashed___default.a.unregister(hashHandler);
  };
}

/* unused harmony default export */ var _unused_webpack_default_export = (synchronize);


/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

var Store = __webpack_require__(247).Store;
var hash = __webpack_require__(255);

var store;

function reset() {
  if (store) {
    window.removeEventListener('popstate', update);
  }
  window.addEventListener('popstate', update);
  store = new Store(hash.deserialize(location.hash), function(values, defaults) {
    var nonDefaults = {};
    for (var key in values) {
      if (values[key] !== defaults[key]) {
        nonDefaults[key] = values[key];
      }
    }
    history.pushState(values, '', hash.serialize(nonDefaults));
  });
}

function update() {
  store.update(hash.deserialize(location.hash));
}

/**
 * Register a new state provider.
 * @param {Object} config Schema config.
 * @param {function(Object)} callback Called immediately with initial state.
 * @return {function(Object)} Call this function with any updates to the state.
 */
exports.register = function(config, callback) {
  return store.register(config, callback);
};

/**
 * Unregister an existing state provider.
 * @param {function(Object)} callback Callback registered by the provider.
 */
exports.unregister = function(callback) {
  store.unregister(callback);
};

/**
 * Serialize values as they would be represented in the hash.
 * @param {Object} values An object with values to be serialized.
 * @return {string} The values as they would be represented in the hash.
 */
exports.serialize = function(values) {
  return hash.serialize(store.serialize(values));
};

exports.reset = reset;

reset();


/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

var Schema = __webpack_require__(248).Schema;
var util = __webpack_require__(55);
var serializers = __webpack_require__(138);


/**
 * An object backed store of string values.  Allows registering multiple state
 * providers.
 * @param {Object} values Initial serialized values.
 * @param {function(Object)} callback Called with an object of serialized
 *     values and defaults whenever a provider updates state.
 * @constructor
 */
var Store = exports.Store = function(values, callback) {
  this._values = values;
  this._defaults = {};
  this._providers = [];
  this._callback = callback;
  this._callbackTimer = null;
};

Store.prototype._scheduleCallback = function() {
  if (this._callbackTimer) {
    clearTimeout(this._callbackTimer);
  }
  this._callbackTimer = setTimeout(this._debouncedCallback.bind(this));
};

Store.prototype._debouncedCallback = function() {
  this._callbackTimer = null;
  this._callback(this._values, this._defaults);
};

Store.prototype.update = function(values) {
  if (this._updateTimer) {
    clearTimeout(this._updateTimer);
  }
  this._updateTimer = setTimeout(this._debouncedUpdate.bind(this, values));
};

Store.prototype._debouncedUpdate = function(newValues) {
  this._updateTimer = null;
  var values = this._values;
  var providers = this._providers.slice();  // callbacks may unregister providers
  for (var i = providers.length - 1; i >= 0; --i) {
    var provider = providers[i];
    var schema = provider.schema;
    var changed = false;
    var state = {};
    schema.forEachKey(function(key, prefixed) {
      var deserialized;
      if (!(prefixed in newValues)) {
        deserialized = schema.getDefault(key);
        var serializedDefault = schema.serialize(key, deserialized);
        if (values[prefixed] !== serializedDefault) {
          changed = true;
          values[prefixed] = serializedDefault;
          state[key] = deserialized;
        }
      } else if (values[prefixed] !== newValues[prefixed]) {
        try {
          deserialized = schema.deserialize(key, newValues[prefixed]);
          values[prefixed] = newValues[prefixed];
          state[key] = deserialized;
          changed = true;
        } catch (err) {
          // invalid value, pass
        }
      }
    });
    if (changed && this._providers.indexOf(provider) >= 0) {
      provider.callback(state);
    }
  }
};

/**
 * Unregister a provider.  Deletes the provider's values from the underlying
 * store and calls the store's callback.
 * @param {Function} callback The provider's callback.
 */
Store.prototype.unregister = function(callback) {
  var removedProvider;
  this._providers = this._providers.filter(function(provider) {
    var remove = provider.callback === callback;
    if (remove) {
      removedProvider = provider;
    }
    return !remove;
  });
  if (!removedProvider) {
    throw new Error('Unable to unregister hashed state provider');
  }
  var values = this._values;
  var defaults = this._defaults;
  removedProvider.schema.forEachKey(function(key, prefixed) {
    delete values[prefixed];
    delete defaults[prefixed];
  });
  this._scheduleCallback();
};

/**
 * Register a new state provider.
 * @param {Object} config Schema config.
 * @param {function(Object)} callback Called by the store on state changes.
 * @return {function(Object)} Called by the provider on state changes.
 */
Store.prototype.register = function(config, callback) {
  var provider = {
    schema: new Schema(config),
    callback: callback
  };

  // ensure there are no conflicts with existing providers
  for (var i = 0, ii = this._providers.length; i < ii; ++i) {
    var conflicts = provider.schema.conflicts(this._providers[i].schema);
    if (conflicts) {
      throw new Error('Provider already registered using the same name: ' +
          conflicts);
    }
    if (provider.callback === this._providers[i].callback) {
      throw new Error('Provider already registered with the same callback');
    }
  }

  this._providers.push(provider);
  this._initializeProvider(provider);

  return function update(state) {
    if (this._providers.indexOf(provider) === -1) {
      throw new Error('Unregistered provider attempting to update state');
    }
    var schema = provider.schema;
    var changed = false;
    var values = this._values;
    schema.forEachKey(function(key, prefixed) {
      if (key in state) {
        var serializedValue = schema.serialize(key, state[key], state);
        if (values[prefixed] !== serializedValue) {
          changed = true;
          values[prefixed] = serializedValue;
        }
      }
    });
    if (changed) {
      this._scheduleCallback();
    }
  }.bind(this);
};


/**
 * Call provider with initial values.
 * @param {Object} provider Provider to be initialized.
 */
Store.prototype._initializeProvider = function(provider) {
  var state = {};
  var defaults = {};
  var values = this._values;
  provider.schema.forEachKey(function(key, prefixed) {
    var deserializedValue;
    var deserializedDefault = provider.schema.getDefault(key);
    var serializedDefault = provider.schema.serialize(key, deserializedDefault);
    if (prefixed in values) {
      try {
        deserializedValue = provider.schema.deserialize(key, values[prefixed]);
      } catch (err) {
        deserializedValue = deserializedDefault;
      }
    } else {
      deserializedValue = deserializedDefault;
    }
    state[key] = deserializedValue;
    defaults[prefixed] = serializedDefault;
    values[prefixed] = provider.schema.serialize(key, deserializedValue);
  });
  for (var prefixed in defaults) {
    this._defaults[prefixed] = defaults[prefixed];
  }
  provider.callback(state);
};


/**
 * Serialize values with provider serializers where available.
 * @param {Object} values Values to be serialized.
 * @return {Object} The serialized values.
 */
Store.prototype.serialize = function(values) {
  var serialized = {};
  for (var i = 0, ii = this._providers.length; i < ii; ++i) {
    var provider = this._providers[i];
    provider.schema.forEachKey(function(key, prefixed) {
      if (prefixed in values) {
        serialized[prefixed] = provider.schema.serialize(key, values[prefixed], values);
      }
    });
  }
  for (var key in values) {
    if (!(key in serialized)) {
      var value = values[key];
      var type = util.typeOf(value);
      var serializer = serializers.get(type);
      serialized[key] = serializer(value);
    }
  }
  return serialized;
};


/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

var Field = __webpack_require__(249).Field;
var util = __webpack_require__(55);


/**
 * Create a new schema.  A schema is a collection of field definitions.
 * @param {Object} config Keys are field names, values are field configs.
 * @constructor
 */
var Schema = exports.Schema = function(config) {
  config = util.extend({}, config);
  var fields = {};
  var prefix;
  if ('_' in config) {
    prefix = config._;
    delete config._;
  }
  for (var key in config) {
    fields[key] = new Field(config[key]);
  }
  this._prefix = prefix;
  this._fields = fields;
};


/**
 * Get the prefixed version of a key.
 * @param {string} key The key.
 * @return {string} The prefixed key.
 */
Schema.prototype.getPrefixed = function(key) {
  return this._prefix ? (this._prefix + '.' + key) : key;
};


/**
 * Call a callback for each field key.
 * @param {function(string, number)} callback Called with a local field key and
 *     a prefixed key.
 * @param {Object} thisArg This argument for the callback.
 */
Schema.prototype.forEachKey = function(callback, thisArg) {
  var more;
  for (var key in this._fields) {
    more = callback.call(thisArg, key, this.getPrefixed(key));
    if (more === false) {
      return;
    }
  }
};


/**
 * Serialize a value.
 * @param {string} key The key or field name.
 * @param {*} value The value to serialize.
 * @param {Object} values Additional values for providers to use when serializing.
 * @return {string} The serialized value.
 */
Schema.prototype.serialize = function(key, value, values) {
  if (!(key in this._fields)) {
    throw new Error('Unknown key: ' + key);
  }
  return this._fields[key].serialize(value, values);
};


/**
 * Deserialize a value.
 * @param {string} key The key or field name.
 * @param {string} str The serialized value.
 * @return {*} The deserialized value.
 */
Schema.prototype.deserialize = function(key, str) {
  if (!(key in this._fields)) {
    throw new Error('Unknown key: ' + key);
  }
  return this._fields[key].deserialize(str);
};


/**
 * Get the default value for a particular field.
 * @param {string} key The key or field name.
 * @return {*} The default value.
 */
Schema.prototype.getDefault = function(key) {
  if (!(key in this._fields)) {
    throw new Error('Unknown key: ' + key);
  }
  return this._fields[key].default;
};


/**
 * Determine if one schema conflicts with another.  Two schemas conflict if
 * any of their prefixed keys are the same.
 * @param {Schema} other The other schema.
 * @return {boolean|string} This schema conflicts with the other.  If the two
 *     schemas conflict, the return will be the first conflicting key (with
 *     any prefix).
 */
Schema.prototype.conflicts = function(other) {
  var thisPrefixedKeys = {};
  for (var key in this._fields) {
    thisPrefixedKeys[this.getPrefixed(key)] = true;
  }

  var conflicts = false;
  other.forEachKey(function(_, prefixed) {
    if (prefixed in thisPrefixedKeys) {
      conflicts = prefixed;
    }
    return !conflicts;
  });
  return conflicts;
};


/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(55);

var serializers = __webpack_require__(138);
var deserializers = __webpack_require__(254);

/**
 * Create a new field.  A field must have a default value (`default`) and is
 * capable of serializing and deserializing values.
 * @param {Object} config Field configuration.  Must have a `default` property
 *     with a default value.  May have optional `serialize` and `deserialize`
 *     functions.  As a shorthand for providing a config object with a `default`
 *     property, a default value may be provided directly.
 * @constructor
 */
exports.Field = function(config) {
  if (util.typeOf(config) !== 'object') {
    this.default = config;
  } else if (!('default' in config)) {
    throw new Error('Missing default');
  } else {
    this.default = config.default;
  }

  var type = util.typeOf(this.default);
  this.serialize = config.serialize || serializers.get(type);
  this.deserialize = config.deserialize || deserializers.get(type);
};


/***/ }),

/***/ 250:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 251:
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ 252:
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ 253:
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(55);

var dec = decodeURIComponent;

var noop = function() {};

var deserializers = {
  string: function(str) {
    if (!str || typeof str !== 'string') {
      throw new Error('Expected string to deserialize: ' + str);
    }
    return dec(str);
  },
  number: function(str) {
    if (!str || typeof str !== 'string') {
      throw new Error('Expected string to deserialize: ' + str);
    }
    var num = Number(dec(str));
    if (isNaN(num)) {
      throw new Error('Expected to deserialize a number: ' + str);
    }
    return num;
  },
  boolean: function(str) {
    if (!str || typeof str !== 'string') {
      throw new Error('Expected string to deserialize: ' + str);
    }
    var bool;
    if (str === '1') {
      bool = true;
    } else if (str === '0') {
      bool = false;
    } else {
      throw new Error('Expected "1" or "0" for boolean: ' + str);
    }
    return bool;
  },
  date: function(str) {
    if (!str || typeof str !== 'string') {
      throw new Error('Expected string to deserialize: ' + str);
    }
    var date = new Date(dec(str));
    if (isNaN(date.getTime())) {
      throw new Error('Expected to deserialize a date: ' + str);
    }
    return date;
  },
  array: function(str) {
    if (!str || typeof str !== 'string') {
      throw new Error('Expected string to deserialize: ' + str);
    }
    var array;
    try {
      array = JSON.parse(dec(str));
    } catch (err) {
      noop();
    }
    if (!array || util.typeOf(array) !== 'array') {
      throw new Error('Expected to deserialize an array: ' + str);
    }
    return array;
  },
  object: function(str) {
    if (!str || typeof str !== 'string') {
      throw new Error('Expected string to deserialize: ' + str);
    }
    var obj;
    try {
      obj = JSON.parse(dec(str));
    } catch (err) {
      noop();
    }
    if (!obj || util.typeOf(obj) !== 'object') {
      throw new Error('Expected to deserialize an object: ' + str);
    }
    return obj;
  }
};


/**
 * Get a deserializer for a value of the given type.
 * @param {string} type Value type.
 * @return {function(string): *} Function that deserializes a string to a value.
 */
exports.get = function(type) {
  if (!(type in deserializers)) {
    throw new Error('Unable to deserialize type: ' + type);
  }
  return deserializers[type];
};


/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(55);

/**
 * Get values from a hash string.
 * @param {string} hash The hash string (e.g. '#/foo/bar').
 * @return {Object} The string values (e.g. {foo: 'bar'}).
 */
function deserialize(hash) {
  var zipped;
  if (hash.length > 2) {
    var path = hash.substring(2);
    zipped = path.split('/');
  } else {
    zipped = [];
  }
  return util.unzip(zipped);
}

/**
 * Serialize values for the hash.
 * @param {Object} values The values to serialize.
 * @return {string} The hash string.
 */
function serialize(values) {
  var path = '#';
  var parts = util.zip(values);
  if (parts.length > 0) {
    path = '#/' + parts.join('/');
  }
  return path;
}

exports.deserialize = deserialize;
exports.serialize = serialize;


/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ol_style_style__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ol_style_fill__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ol_style_stroke__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ol_style_icon__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ol_style_text__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ol_style_circle__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ol_geom_point__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mapbox_mapbox_gl_style_spec_function__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mapbox_mapbox_gl_style_spec_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__mapbox_mapbox_gl_style_spec_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mapbox_mapbox_gl_style_spec_feature_filter__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mapbox_mapbox_gl_style_spec_feature_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__mapbox_mapbox_gl_style_spec_feature_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_mapbox_to_css_font__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_mapbox_to_css_font___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_mapbox_to_css_font__);
/*
mapbox-to-ol-style - Create OpenLayers style functions from Mapbox Style objects
Copyright 2016-present Boundless Spatial, Inc.
License: https://raw.githubusercontent.com/boundlessgeo/mapbox-to-ol-style/master/LICENSE.md
*/












var functions = {
  interpolated: [
    'line-miter-limit',
    'fill-opacity',
    'line-opacity',
    'line-width',
    'text-halo-width',
    'text-max-width',
    'text-offset',
    'text-opacity',
    'text-rotate',
    'text-size',
    'icon-opacity',
    'icon-rotate',
    'icon-size',
    'icon-color',
    'circle-radius',
    'circle-opacity',
    'circle-stroke-width',
    'circle-color',
    'circle-stroke-color',
    'text-halo-color',
    'text-color',
    'line-color',
    'fill-outline-color',
    'fill-color'
  ],
  'piecewise-constant': [
    'icon-image',
    'line-cap',
    'line-join',
    'line-dasharray',
    'symbol-placement',
    'text-anchor',
    'text-field',
    'text-font'
  ]
};

var defaults = {
  'fill-opacity': 1,
  'line-cap': 'butt',
  'line-join': 'miter',
  'line-miter-limit': 2,
  'line-opacity': 1,
  'line-width': 1,
  'symbol-placement': 'point',
  'text-anchor': 'center',
  'text-color': '#000000',
  'text-font': ['Open Sans Regular', 'Arial Unicode MS Regular'],
  'text-halo-color': 'rgba(0, 0, 0, 0)',
  'text-halo-width': 0,
  'text-max-width': 10,
  'text-offset': [0, 0],
  'text-opacity': 1,
  'text-rotate': 0,
  'text-size': 16,
  'icon-opacity': 1,
  'icon-rotate': 0,
  'icon-size': 1,
  'circle-color': '#000000',
  'circle-stroke-color': '#000000',
  'circle-opacity': 1,
  'circle-stroke-width': 0
};

var types = {
  'Point': 1,
  'MultiPoint': 1,
  'LineString': 2,
  'MultiLineString': 2,
  'Polygon': 3,
  'MultiPolygon': 3
};

function applyDefaults(properties) {
  for (var property in defaults) {
    if (!(property in properties)) {
      properties[property] = defaults[property];
    }
  }
}

function applyLayoutToPaint(layer) {
  for (var property in layer.layout) {
    if (!(property in layer.paint)) {
      layer.paint[property] = layer.layout[property];
    }
  }
}

function convertToFunctions(properties, type) {
  for (var i = 0, ii = functions[type].length; i < ii; ++i) {
    var property = functions[type][i];
    if (property in properties) {
      var value = properties[property];
      properties[property] = __WEBPACK_IMPORTED_MODULE_7__mapbox_mapbox_gl_style_spec_function___default()(value, {
        function: type,
        type: property.indexOf('color') !== -1 ? 'color' :
          typeof value == 'object' && value.stops && typeof value.stops[0][0] == 'number' ? 'number' : undefined
      });
    }
  }
}

var fontMap = {};

function chooseFont(fonts, availableFonts) {
  if (availableFonts) {
    var font, i, ii;
    if (!Array.isArray(fonts)) {
      var stops = fonts.stops;
      if (stops) {
        for (i = 0, ii = stops.length; i < ii; ++i) {
          chooseFont(stops[i][1], availableFonts);
        }
      }
      return;
    }
    if (!fontMap[fonts]) {
      for (i = 0, ii = fonts.length; i < ii; ++i) {
        font = fonts[i];
        if (availableFonts.indexOf(font) != -1) {
          fontMap[fonts] = font;
          break;
        }
      }
      if (!fontMap[fonts]) {
        // fallback font
        fontMap[fonts] = fonts[fonts.length - 1];
      }
    }
  } else {
    fontMap[fonts] = fonts[0];
  }
}

function preprocess(layer, fonts) {
  if (!layer.paint) {
    layer.paint = {};
  }
  if (!layer.ref) {
    applyLayoutToPaint(layer);
  }
  applyDefaults(layer.paint);
  if (layer.paint['text-field']) {
    chooseFont(layer.paint['text-font'], fonts);
  }
  if (Array.isArray(layer.filter)) {
    layer.filter = __WEBPACK_IMPORTED_MODULE_8__mapbox_mapbox_gl_style_spec_feature_filter___default()(layer.filter);
  }
  convertToFunctions(layer.paint, 'interpolated');
  convertToFunctions(layer.paint, 'piecewise-constant');
}

function resolveRef(layer, glStyleObj) {
  if (layer.ref) {
    var layers = glStyleObj.layers;
    for (var i = 0, ii = layers.length; i < ii; ++i) {
      var refLayer = layers[i];
      if (refLayer.id == layer.ref) {
        layer.type = refLayer.type;
        layer.source = refLayer.source;
        layer['source-layer'] = refLayer['source-layer'];
        layer.minzoom = refLayer.minzoom;
        layer.maxzoom = refLayer.maxzoom;
        layer.filter = refLayer.filter;
        layer.layout = refLayer.layout;
        return;
      }
    }
  }
}

function getZoomForResolution(resolution, resolutions) {
  var candidate;
  var i = 0, ii = resolutions.length;
  for (; i < ii; ++i) {
    candidate = resolutions[i];
    if (candidate < resolution && i + 1 < ii) {
      var zoomFactor = resolutions[i] / resolutions[i + 1];
      return i + Math.log(resolutions[i] / resolution) / Math.log(zoomFactor);
    }
  }
  return ii - 1;
}

var colorCache = {};
function colorWithOpacity(color, opacity) {
  if (color && opacity !== undefined) {
    var colorData = colorCache[color];
    if (!colorData) {
      colorCache[color] = colorData = {
        color: [
          color[0] * 255 / color[3],
          color[1] * 255 / color[3],
          color[2] * 255 / color[3],
          color[3]
        ],
        opacity: color[3]
      };
    }
    color = colorData.color;
    color[3] = colorData.opacity * opacity;
    if (color[3] === 0) {
      color = undefined;
    }
  }
  return color;
}

function deg2rad(degrees) {
  return degrees * Math.PI / 180;
}

var templateRegEx = /^([^]*)\{(.*)\}([^]*)$/;

function fromTemplate(text, properties) {
  var parts;
  do {
    parts = text.match(templateRegEx);
    if (parts) {
      var value = properties[parts[2]] || '';
      text = parts[1] + value + parts[3];
    }
  } while (parts);
  return text;
}

/**
 * Creates a style function from the `glStyle` object for all layers that use
 * the specified `source`, which needs to be a `"type": "vector"` or
 * `"type": "geojson"` source and applies it to the specified OpenLayers layer.
 *
 * @param {ol.layer.Vector|ol.layer.VectorTile} olLayer OpenLayers layer to
 * apply the style to. In addition to the style, the layer will get two
 * properties: `mapbox-source` will be the `id` of the `glStyle`'s source used
 * for the layer, and `mapbox-layers` will be an array of the `id`s of the
 * `glStyle`'s layers.
 * @param {string|Object} glStyle Mapbox Style object.
 * @param {string|Array<string>} source `source` key or an array of layer `id`s
 * from the Mapbox Style object. When a `source` key is provided, all layers for
 * the specified source will be included in the style function. When layer `id`s
 * are provided, they must be from layers that use the same source.
 * @param {Array<number>} [resolutions=[156543.03392804097,
 * 78271.51696402048, 39135.75848201024, 19567.87924100512, 9783.93962050256,
 * 4891.96981025128, 2445.98490512564, 1222.99245256282, 611.49622628141,
 * 305.748113140705, 152.8740565703525, 76.43702828517625, 38.21851414258813,
 * 19.109257071294063, 9.554628535647032, 4.777314267823516, 2.388657133911758,
 * 1.194328566955879, 0.5971642834779395, 0.29858214173896974,
 * 0.14929107086948487, 0.07464553543474244]]
 * Resolutions for mapping resolution to zoom level.
 * @param {Object} [spriteData=undefined] Sprite data from the url specified in
 * the Mapbox Style object's `sprite` property. Only required if a `sprite`
 * property is specified in the Mapbox Style object.
 * @param {Object} [spriteImageUrl=undefined] Sprite image url for the sprite
 * specified in the Mapbox Style object's `sprite` property. Only required if a
 * `sprite` property is specified in the Mapbox Style object.
 * @param {Array<string>} [fonts=undefined] Array of available fonts, using the
 * same font names as the Mapbox Style object. If not provided, the style
 * function will always use the first font from the font array.
 * @return {ol.style.StyleFunction} Style function for use in
 * `ol.layer.Vector` or `ol.layer.VectorTile`.
 */
/* harmony default export */ __webpack_exports__["a"] = (function(olLayer, glStyle, source, resolutions, spriteData, spriteImageUrl, fonts) {
  if (!resolutions) {
    resolutions = [];
    for (var res = 78271.51696402048; resolutions.length < 21; res /= 2) {
      resolutions.push(res);
    }
  }
  if (typeof glStyle == 'object') {
    // We do not want to modify the original, so we deep-clone it
    glStyle = JSON.stringify(glStyle);
  }
  glStyle = JSON.parse(glStyle);
  if (glStyle.version != 8) {
    throw new Error('glStyle version 8 required.');
  }

  var spriteImage, spriteImgSize;
  if (spriteImageUrl) {
    var img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = function() {
      spriteImage = img;
      spriteImgSize = [img.width, img.height];
      olLayer.changed();
    };
    img.src = spriteImageUrl;
  }

  var ctx = document.createElement('CANVAS').getContext('2d');
  var measureCache = {};
  function wrapText(text, font, em) {
    var key = em + ',' + font + ',' + text;
    var wrappedText = measureCache[key];
    if (!wrappedText) {
      ctx.font = font;
      var oneEm = ctx.measureText('M').width;
      var width = oneEm * em;
      var words = text.split(' ');
      var line = '';
      var lines = [];
      for (var i = 0, ii = words.length; i < ii; ++i) {
        var word = words[i];
        if ((ctx.measureText(line + word).width <= width)) {
          line += (line ? ' ' : '') + word;
        } else {
          if (line) {
            lines.push(line);
          }
          line = word;
        }
      }
      if (line) {
        lines.push(line);
      }
      measureCache[key] = wrappedText = lines.join('\n');
    }
    return wrappedText;
  }

  var allLayers = glStyle.layers;
  var layersBySourceLayer = {};
  var mapboxLayers = [];
  var mapboxSource;
  for (var i = 0, ii = allLayers.length; i < ii; ++i) {
    var layer = allLayers[i];
    if (!layer.layout) {
      layer.layout = {};
    }
    resolveRef(layer, glStyle);
    if (typeof source == 'string' && layer.source == source ||
        source.indexOf(layer.id) !== -1) {
      var sourceLayer = layer['source-layer'];
      if (!mapboxSource) {
        mapboxSource = layer.source;
      }
      var layers = layersBySourceLayer[sourceLayer];
      if (!layers) {
        layers = layersBySourceLayer[sourceLayer] = [];
      }
      layers.push({
        layer: layer,
        index: i
      });
      mapboxLayers.push(layer.id);
      preprocess(layer, fonts);
    }
  }

  var textHalo = new __WEBPACK_IMPORTED_MODULE_2_ol_style_stroke__["a" /* default */]();
  var textColor = new __WEBPACK_IMPORTED_MODULE_1_ol_style_fill__["a" /* default */]();

  var iconImageCache = {};

  var styles = [];

  var styleFunction = function(feature, resolution) {
    var properties = feature.getProperties();
    var layers = layersBySourceLayer[properties.layer];
    if (!layers) {
      return;
    }
    var zoom = resolutions.indexOf(resolution);
    if (zoom == -1) {
      zoom = getZoomForResolution(resolution, resolutions);
    }
    var type = types[feature.getGeometry().getType()];
    var f = {
      properties: properties,
      type: type
    };
    var stylesLength = -1;
    for (var i = 0, ii = layers.length; i < ii; ++i) {
      var layerData = layers[i];
      var layer = layerData.layer;
      var paint = layer.paint;
      if (paint.visibility === 'none' || ('minzoom' in layer && zoom < layer.minzoom) ||
          ('maxzoom' in layer && zoom >= layer.maxzoom)) {
        continue;
      }
      if (!layer.filter || layer.filter(f)) {
        var color, opacity, fill, stroke, strokeColor, style;
        var index = layerData.index;
        if (type == 3) {
          if (!('fill-pattern' in paint) && 'fill-color' in paint) {
            opacity = paint['fill-opacity'](zoom, properties);
            color = colorWithOpacity(paint['fill-color'](zoom, properties), opacity);
            if (color) {
              ++stylesLength;
              style = styles[stylesLength];
              if (!style || !style.getFill() || style.getStroke() || style.getText()) {
                style = styles[stylesLength] = new __WEBPACK_IMPORTED_MODULE_0_ol_style_style__["a" /* default */]({
                  fill: new __WEBPACK_IMPORTED_MODULE_1_ol_style_fill__["a" /* default */]()
                });
              }
              fill = style.getFill();
              fill.setColor(color);
              style.setZIndex(index);
            }
            if ('fill-outline-color' in paint) {
              strokeColor = colorWithOpacity(paint['fill-outline-color'](zoom, properties), opacity);
            }
            if (strokeColor) {
              ++stylesLength;
              style = styles[stylesLength];
              if (!style || !style.getStroke() || style.getFill() || style.getText()) {
                style = styles[stylesLength] = new __WEBPACK_IMPORTED_MODULE_0_ol_style_style__["a" /* default */]({
                  stroke: new __WEBPACK_IMPORTED_MODULE_2_ol_style_stroke__["a" /* default */]()
                });
              }
              stroke = style.getStroke();
              stroke.setLineCap(defaults['line-cap']);
              stroke.setLineJoin(defaults['line-join']);
              stroke.setMiterLimit(defaults['line-miter-limit']);
              stroke.setColor(strokeColor);
              stroke.setWidth(1);
              stroke.setLineDash(null);
              style.setZIndex(index);
            }
          }
        }
        if (type != 1) {
          color = !('line-pattern' in paint) && 'line-color' in paint ?
            colorWithOpacity(paint['line-color'](zoom, properties), paint['line-opacity'](zoom, properties)) :
            undefined;
          var width = paint['line-width'](zoom, properties);
          if (color && width > 0) {
            ++stylesLength;
            style = styles[stylesLength];
            if (!style || !style.getStroke() || style.getFill() || style.getText()) {
              style = styles[stylesLength] = new __WEBPACK_IMPORTED_MODULE_0_ol_style_style__["a" /* default */]({
                stroke: new __WEBPACK_IMPORTED_MODULE_2_ol_style_stroke__["a" /* default */]()
              });
            }
            stroke = style.getStroke();
            stroke.setLineCap(paint['line-cap'](zoom, properties));
            stroke.setLineJoin(paint['line-join'](zoom, properties));
            stroke.setMiterLimit(paint['line-miter-limit'](zoom, properties));
            stroke.setColor(color);
            stroke.setWidth(width);
            stroke.setLineDash(paint['line-dasharray'] ?
                paint['line-dasharray'](zoom, properties).map(function(x) {
                  return x * width;
                }) : null);
            style.setZIndex(index);
          }
        }

        var hasImage = false;
        var text = null;
        var icon, iconImg, skipLabel;
        if ((type == 1 || type == 2) && 'icon-image' in paint) {
          var iconImage = paint['icon-image'](zoom, properties);
          if (iconImage) {
            icon = fromTemplate(iconImage, properties);
            var styleGeom = undefined;
            if (spriteImage && spriteData && spriteData[icon]) {
              if (type == 2) {
                var geom = feature.getGeometry();
                // ol package and ol-debug.js only
                if (geom.getFlatMidpoint) {
                  var extent = geom.getExtent();
                  var size = Math.sqrt(
                      Math.pow((extent[2] - extent[0]) / resolution, 2),
                      Math.pow((extent[3] - extent[1]) / resolution, 2));
                  if (size > 150) {
                    //FIXME Do not hard-code a size of 150
                    styleGeom = new __WEBPACK_IMPORTED_MODULE_6_ol_geom_point__["a" /* default */](geom.getFlatMidpoint());
                  }
                }
              }
              if (type !== 2 || styleGeom) {
                ++stylesLength;
                style = styles[stylesLength];
                if (!style || !style.getImage() || style.getFill() || style.getStroke()) {
                  style = styles[stylesLength] = new __WEBPACK_IMPORTED_MODULE_0_ol_style_style__["a" /* default */]();
                }
                style.setGeometry(styleGeom);
                var iconSize = paint['icon-size'](zoom, properties);
                var iconColor = paint['icon-color'] !== undefined ? paint['icon-color'](zoom, properties) : null;
                var icon_cache_key = icon + '.' + iconSize;
                if (iconColor !== null) {
                  icon_cache_key += '.' + iconColor;
                }
                iconImg = iconImageCache[icon_cache_key];
                if (!iconImg) {
                  var spriteImageData = spriteData[icon];
                  if (iconColor !== null) {
                    // cut out the sprite and color it
                    color = colorWithOpacity(iconColor, 1);
                    var canvas = document.createElement('canvas');
                    canvas.width = spriteImageData.width;
                    canvas.height = spriteImageData.height;
                    var ctx = canvas.getContext('2d');
                    ctx.drawImage(
                      spriteImage,
                      spriteImageData.x,
                      spriteImageData.y,
                      spriteImageData.width,
                      spriteImageData.height,
                      0,
                      0,
                      spriteImageData.width,
                      spriteImageData.height
                    );
                    var data = ctx.getImageData(0, 0, canvas.width, canvas.height);
                    for (var c = 0, cc = data.data.length; c < cc; c += 4) {
                      data.data[c] = color[0];
                      data.data[c + 1] = color[1];
                      data.data[c + 2] = color[2];
                    }
                    ctx.putImageData(data, 0, 0);
                    iconImg = iconImageCache[icon_cache_key] = new __WEBPACK_IMPORTED_MODULE_3_ol_style_icon__["a" /* default */]({
                      img: canvas,
                      imgSize: [canvas.width, canvas.height],
                      scale: iconSize / spriteImageData.pixelRatio
                    });
                  } else {
                    iconImg = iconImageCache[icon_cache_key] = new __WEBPACK_IMPORTED_MODULE_3_ol_style_icon__["a" /* default */]({
                      img: spriteImage,
                      imgSize: spriteImgSize,
                      size: [spriteImageData.width, spriteImageData.height],
                      offset: [spriteImageData.x, spriteImageData.y],
                      scale: iconSize / spriteImageData.pixelRatio
                    });
                  }
                }
                iconImg.setRotation(deg2rad(paint['icon-rotate'](zoom, properties)));
                iconImg.setOpacity(paint['icon-opacity'](zoom, properties));
                style.setImage(iconImg);
                text = style.getText();
                style.setText(undefined);
                style.setZIndex(99999 - index);
                hasImage = true;
                skipLabel = false;
              } else {
                skipLabel = true;
              }
            }
          }
        }

        if (type == 1 && 'circle-radius' in paint) {
          ++stylesLength;
          style = styles[stylesLength];
          if (!style || !style.getImage() || style.getFill() || style.getStroke()) {
            style = styles[stylesLength] = new __WEBPACK_IMPORTED_MODULE_0_ol_style_style__["a" /* default */]();
          }
          var circleRadius = paint['circle-radius'](zoom, properties);
          var circleStrokeColor = paint['circle-stroke-color'](zoom, properties);
          var circleColor = paint['circle-color'](zoom, properties);
          var circleOpacity = paint['circle-opacity'](zoom, properties);
          var circleStrokeWidth = paint['circle-stroke-width'](zoom, properties);
          var cache_key = circleRadius + '.' + circleStrokeColor + '.' +
            circleColor + '.' + circleOpacity + '.' + circleStrokeWidth;
          iconImg = iconImageCache[cache_key];
          if (!iconImg) {
            iconImg = new __WEBPACK_IMPORTED_MODULE_5_ol_style_circle__["a" /* default */]({
              radius: circleRadius,
              stroke: circleStrokeWidth === 0 ? undefined : new __WEBPACK_IMPORTED_MODULE_2_ol_style_stroke__["a" /* default */]({
                width: circleStrokeWidth,
                color: colorWithOpacity(circleStrokeColor, circleOpacity)
              }),
              fill: new __WEBPACK_IMPORTED_MODULE_1_ol_style_fill__["a" /* default */]({
                color: colorWithOpacity(circleColor, circleOpacity)
              })
            });
          }
          style.setImage(iconImg);
          text = style.getText();
          style.setText(undefined);
          style.setGeometry(undefined);
          style.setZIndex(99999 - index);
          hasImage = true;
        }

        var label;
        if ('text-field' in paint) {
          var textField = paint['text-field'](zoom, properties);
          label = fromTemplate(textField, properties);
        }
        if (label && !skipLabel) {
          if (!hasImage) {
            ++stylesLength;
            style = styles[stylesLength];
            if (!style || !style.getText() || style.getFill() || style.getStroke()) {
              style = styles[stylesLength] = new __WEBPACK_IMPORTED_MODULE_0_ol_style_style__["a" /* default */]();
            }
            style.setImage(undefined);
            style.setGeometry(undefined);
          }
          if (!style.getText()) {
            style.setText(text || new __WEBPACK_IMPORTED_MODULE_4_ol_style_text__["a" /* default */]());
          }
          text = style.getText();
          var textSize = paint['text-size'](zoom, properties);
          var font = __WEBPACK_IMPORTED_MODULE_9_mapbox_to_css_font___default()(fontMap[paint['text-font'](zoom, properties)], textSize);
          var textTransform = paint['text-transform'];
          if (textTransform == 'uppercase') {
            label = label.toUpperCase();
          } else if (textTransform == 'lowercase') {
            label = label.toLowerCase();
          }
          var wrappedLabel = type == 2 ? label : wrapText(label, font, paint['text-max-width'](zoom, properties));
          text.setText(wrappedLabel);
          text.setFont(font);
          text.setRotation(deg2rad(paint['text-rotate'](zoom, properties)));
          var textAnchor = paint['text-anchor'](zoom, properties);
          var placement = (hasImage || type == 1) ? 'point' : paint['symbol-placement'](zoom, properties);
          text.setPlacement(placement);
          if (placement == 'point') {
            var textAlign = 'center';
            if (textAnchor.indexOf('left') !== -1) {
              textAlign = 'left';
            } else if (textAnchor.indexOf('right') !== -1) {
              textAlign = 'right';
            }
            text.setTextAlign(textAlign);
          } else {
            text.setTextAlign();
          }
          var textBaseline = 'middle';
          if (textAnchor.indexOf('bottom') == 0) {
            textBaseline = 'bottom';
          } else if (textAnchor.indexOf('top') == 0) {
            textBaseline = 'top';
          }
          text.setTextBaseline(textBaseline);
          var textOffset = paint['text-offset'](zoom, properties);
          text.setOffsetX(textOffset[0] * textSize);
          text.setOffsetY(textOffset[1] * textSize);
          opacity = paint['text-opacity'](zoom, properties);
          textColor.setColor(
              colorWithOpacity(paint['text-color'](zoom, properties), opacity));
          text.setFill(textColor);
          var haloColor = colorWithOpacity(paint['text-halo-color'](zoom, properties), opacity);
          if (haloColor) {
            textHalo.setColor(haloColor);
            textHalo.setWidth(paint['text-halo-width'](zoom, properties));
            text.setStroke(textHalo);
          } else {
            text.setStroke(undefined);
          }
          style.setZIndex(99999 - index);
        }
      }
    }

    if (stylesLength > -1) {
      styles.length = stylesLength + 1;
      return styles;
    }
  };

  olLayer.setStyle(styleFunction);
  olLayer.set('mapbox-source', mapboxSource);
  olLayer.set('mapbox-layers', mapboxLayers);
  return styleFunction;
});


/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__imagestate_js__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asserts_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__color_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__events_eventtype_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_iconanchorunits_js__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style_iconimage_js__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__style_iconorigin_js__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__style_image_js__ = __webpack_require__(133);











/**
 * @classdesc
 * Set icon style for vector features.
 *
 * @constructor
 * @param {olx.style.IconOptions=} opt_options Options.
 * @extends {ol.style.Image}
 * @api
 */
var _ol_style_Icon_ = function(opt_options) {

  var options = opt_options || {};

  /**
   * @private
   * @type {Array.<number>}
   */
  this.anchor_ = options.anchor !== undefined ? options.anchor : [0.5, 0.5];

  /**
   * @private
   * @type {Array.<number>}
   */
  this.normalizedAnchor_ = null;

  /**
   * @private
   * @type {ol.style.IconOrigin}
   */
  this.anchorOrigin_ = options.anchorOrigin !== undefined ?
    options.anchorOrigin : __WEBPACK_IMPORTED_MODULE_8__style_iconorigin_js__["a" /* default */].TOP_LEFT;

  /**
   * @private
   * @type {ol.style.IconAnchorUnits}
   */
  this.anchorXUnits_ = options.anchorXUnits !== undefined ?
    options.anchorXUnits : __WEBPACK_IMPORTED_MODULE_6__style_iconanchorunits_js__["a" /* default */].FRACTION;

  /**
   * @private
   * @type {ol.style.IconAnchorUnits}
   */
  this.anchorYUnits_ = options.anchorYUnits !== undefined ?
    options.anchorYUnits : __WEBPACK_IMPORTED_MODULE_6__style_iconanchorunits_js__["a" /* default */].FRACTION;

  /**
   * @private
   * @type {?string}
   */
  this.crossOrigin_ =
      options.crossOrigin !== undefined ? options.crossOrigin : null;

  /**
   * @type {Image|HTMLCanvasElement}
   */
  var image = options.img !== undefined ? options.img : null;

  /**
   * @type {ol.Size}
   */
  var imgSize = options.imgSize !== undefined ? options.imgSize : null;

  /**
   * @type {string|undefined}
   */
  var src = options.src;

  __WEBPACK_IMPORTED_MODULE_2__asserts_js__["a" /* default */].assert(!(src !== undefined && image),
      4); // `image` and `src` cannot be provided at the same time
  __WEBPACK_IMPORTED_MODULE_2__asserts_js__["a" /* default */].assert(!image || (image && imgSize),
      5); // `imgSize` must be set when `image` is provided

  if ((src === undefined || src.length === 0) && image) {
    src = image.src || __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].getUid(image).toString();
  }
  __WEBPACK_IMPORTED_MODULE_2__asserts_js__["a" /* default */].assert(src !== undefined && src.length > 0,
      6); // A defined and non-empty `src` or `image` must be provided

  /**
   * @type {ol.ImageState}
   */
  var imageState = options.src !== undefined ?
    __WEBPACK_IMPORTED_MODULE_1__imagestate_js__["a" /* default */].IDLE : __WEBPACK_IMPORTED_MODULE_1__imagestate_js__["a" /* default */].LOADED;

  /**
   * @private
   * @type {ol.Color}
   */
  this.color_ = options.color !== undefined ? __WEBPACK_IMPORTED_MODULE_3__color_js__["a" /* default */].asArray(options.color) :
    null;

  /**
   * @private
   * @type {ol.style.IconImage}
   */
  this.iconImage_ = __WEBPACK_IMPORTED_MODULE_7__style_iconimage_js__["a" /* default */].get(
      image, /** @type {string} */ (src), imgSize, this.crossOrigin_, imageState, this.color_);

  /**
   * @private
   * @type {Array.<number>}
   */
  this.offset_ = options.offset !== undefined ? options.offset : [0, 0];

  /**
   * @private
   * @type {ol.style.IconOrigin}
   */
  this.offsetOrigin_ = options.offsetOrigin !== undefined ?
    options.offsetOrigin : __WEBPACK_IMPORTED_MODULE_8__style_iconorigin_js__["a" /* default */].TOP_LEFT;

  /**
   * @private
   * @type {Array.<number>}
   */
  this.origin_ = null;

  /**
   * @private
   * @type {ol.Size}
   */
  this.size_ = options.size !== undefined ? options.size : null;

  /**
   * @type {number}
   */
  var opacity = options.opacity !== undefined ? options.opacity : 1;

  /**
   * @type {boolean}
   */
  var rotateWithView = options.rotateWithView !== undefined ?
    options.rotateWithView : false;

  /**
   * @type {number}
   */
  var rotation = options.rotation !== undefined ? options.rotation : 0;

  /**
   * @type {number}
   */
  var scale = options.scale !== undefined ? options.scale : 1;

  /**
   * @type {boolean}
   */
  var snapToPixel = options.snapToPixel !== undefined ?
    options.snapToPixel : true;

  __WEBPACK_IMPORTED_MODULE_9__style_image_js__["a" /* default */].call(this, {
    opacity: opacity,
    rotation: rotation,
    scale: scale,
    snapToPixel: snapToPixel,
    rotateWithView: rotateWithView
  });

};

__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_style_Icon_, __WEBPACK_IMPORTED_MODULE_9__style_image_js__["a" /* default */]);


/**
 * Clones the style. The underlying Image/HTMLCanvasElement is not cloned.
 * @return {ol.style.Icon} The cloned style.
 * @api
 */
_ol_style_Icon_.prototype.clone = function() {
  return new _ol_style_Icon_({
    anchor: this.anchor_.slice(),
    anchorOrigin: this.anchorOrigin_,
    anchorXUnits: this.anchorXUnits_,
    anchorYUnits: this.anchorYUnits_,
    crossOrigin: this.crossOrigin_,
    color: (this.color_ && this.color_.slice) ? this.color_.slice() : this.color_ || undefined,
    src: this.getSrc(),
    offset: this.offset_.slice(),
    offsetOrigin: this.offsetOrigin_,
    size: this.size_ !== null ? this.size_.slice() : undefined,
    opacity: this.getOpacity(),
    scale: this.getScale(),
    snapToPixel: this.getSnapToPixel(),
    rotation: this.getRotation(),
    rotateWithView: this.getRotateWithView()
  });
};


/**
 * @inheritDoc
 * @api
 */
_ol_style_Icon_.prototype.getAnchor = function() {
  if (this.normalizedAnchor_) {
    return this.normalizedAnchor_;
  }
  var anchor = this.anchor_;
  var size = this.getSize();
  if (this.anchorXUnits_ == __WEBPACK_IMPORTED_MODULE_6__style_iconanchorunits_js__["a" /* default */].FRACTION ||
      this.anchorYUnits_ == __WEBPACK_IMPORTED_MODULE_6__style_iconanchorunits_js__["a" /* default */].FRACTION) {
    if (!size) {
      return null;
    }
    anchor = this.anchor_.slice();
    if (this.anchorXUnits_ == __WEBPACK_IMPORTED_MODULE_6__style_iconanchorunits_js__["a" /* default */].FRACTION) {
      anchor[0] *= size[0];
    }
    if (this.anchorYUnits_ == __WEBPACK_IMPORTED_MODULE_6__style_iconanchorunits_js__["a" /* default */].FRACTION) {
      anchor[1] *= size[1];
    }
  }

  if (this.anchorOrigin_ != __WEBPACK_IMPORTED_MODULE_8__style_iconorigin_js__["a" /* default */].TOP_LEFT) {
    if (!size) {
      return null;
    }
    if (anchor === this.anchor_) {
      anchor = this.anchor_.slice();
    }
    if (this.anchorOrigin_ == __WEBPACK_IMPORTED_MODULE_8__style_iconorigin_js__["a" /* default */].TOP_RIGHT ||
        this.anchorOrigin_ == __WEBPACK_IMPORTED_MODULE_8__style_iconorigin_js__["a" /* default */].BOTTOM_RIGHT) {
      anchor[0] = -anchor[0] + size[0];
    }
    if (this.anchorOrigin_ == __WEBPACK_IMPORTED_MODULE_8__style_iconorigin_js__["a" /* default */].BOTTOM_LEFT ||
        this.anchorOrigin_ == __WEBPACK_IMPORTED_MODULE_8__style_iconorigin_js__["a" /* default */].BOTTOM_RIGHT) {
      anchor[1] = -anchor[1] + size[1];
    }
  }
  this.normalizedAnchor_ = anchor;
  return this.normalizedAnchor_;
};


/**
 * Get the icon color.
 * @return {ol.Color} Color.
 * @api
 */
_ol_style_Icon_.prototype.getColor = function() {
  return this.color_;
};


/**
 * Get the image icon.
 * @param {number} pixelRatio Pixel ratio.
 * @return {Image|HTMLCanvasElement} Image or Canvas element.
 * @override
 * @api
 */
_ol_style_Icon_.prototype.getImage = function(pixelRatio) {
  return this.iconImage_.getImage(pixelRatio);
};


/**
 * @override
 */
_ol_style_Icon_.prototype.getImageSize = function() {
  return this.iconImage_.getSize();
};


/**
 * @override
 */
_ol_style_Icon_.prototype.getHitDetectionImageSize = function() {
  return this.getImageSize();
};


/**
 * @override
 */
_ol_style_Icon_.prototype.getImageState = function() {
  return this.iconImage_.getImageState();
};


/**
 * @override
 */
_ol_style_Icon_.prototype.getHitDetectionImage = function(pixelRatio) {
  return this.iconImage_.getHitDetectionImage(pixelRatio);
};


/**
 * @inheritDoc
 * @api
 */
_ol_style_Icon_.prototype.getOrigin = function() {
  if (this.origin_) {
    return this.origin_;
  }
  var offset = this.offset_;

  if (this.offsetOrigin_ != __WEBPACK_IMPORTED_MODULE_8__style_iconorigin_js__["a" /* default */].TOP_LEFT) {
    var size = this.getSize();
    var iconImageSize = this.iconImage_.getSize();
    if (!size || !iconImageSize) {
      return null;
    }
    offset = offset.slice();
    if (this.offsetOrigin_ == __WEBPACK_IMPORTED_MODULE_8__style_iconorigin_js__["a" /* default */].TOP_RIGHT ||
        this.offsetOrigin_ == __WEBPACK_IMPORTED_MODULE_8__style_iconorigin_js__["a" /* default */].BOTTOM_RIGHT) {
      offset[0] = iconImageSize[0] - size[0] - offset[0];
    }
    if (this.offsetOrigin_ == __WEBPACK_IMPORTED_MODULE_8__style_iconorigin_js__["a" /* default */].BOTTOM_LEFT ||
        this.offsetOrigin_ == __WEBPACK_IMPORTED_MODULE_8__style_iconorigin_js__["a" /* default */].BOTTOM_RIGHT) {
      offset[1] = iconImageSize[1] - size[1] - offset[1];
    }
  }
  this.origin_ = offset;
  return this.origin_;
};


/**
 * Get the image URL.
 * @return {string|undefined} Image src.
 * @api
 */
_ol_style_Icon_.prototype.getSrc = function() {
  return this.iconImage_.getSrc();
};


/**
 * @inheritDoc
 * @api
 */
_ol_style_Icon_.prototype.getSize = function() {
  return !this.size_ ? this.iconImage_.getSize() : this.size_;
};


/**
 * @override
 */
_ol_style_Icon_.prototype.listenImageChange = function(listener, thisArg) {
  return __WEBPACK_IMPORTED_MODULE_4__events_js__["a" /* default */].listen(this.iconImage_, __WEBPACK_IMPORTED_MODULE_5__events_eventtype_js__["a" /* default */].CHANGE,
      listener, thisArg);
};


/**
 * Load not yet loaded URI.
 * When rendering a feature with an icon style, the vector renderer will
 * automatically call this method. However, you might want to call this
 * method yourself for preloading or other purposes.
 * @override
 * @api
 */
_ol_style_Icon_.prototype.load = function() {
  this.iconImage_.load();
};


/**
 * @override
 */
_ol_style_Icon_.prototype.unlistenImageChange = function(listener, thisArg) {
  __WEBPACK_IMPORTED_MODULE_4__events_js__["a" /* default */].unlisten(this.iconImage_, __WEBPACK_IMPORTED_MODULE_5__events_eventtype_js__["a" /* default */].CHANGE,
      listener, thisArg);
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_style_Icon_);


/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Icon anchor units. One of 'fraction', 'pixels'.
 * @enum {string}
 */
var _ol_style_IconAnchorUnits_ = {
  FRACTION: 'fraction',
  PIXELS: 'pixels'
};

/* harmony default export */ __webpack_exports__["a"] = (_ol_style_IconAnchorUnits_);


/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__events_eventtarget_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events_eventtype_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__imagestate_js__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_js__ = __webpack_require__(112);








/**
 * @constructor
 * @param {Image|HTMLCanvasElement} image Image.
 * @param {string|undefined} src Src.
 * @param {ol.Size} size Size.
 * @param {?string} crossOrigin Cross origin.
 * @param {ol.ImageState} imageState Image state.
 * @param {ol.Color} color Color.
 * @extends {ol.events.EventTarget}
 */
var _ol_style_IconImage_ = function(image, src, size, crossOrigin, imageState,
    color) {

  __WEBPACK_IMPORTED_MODULE_3__events_eventtarget_js__["a" /* default */].call(this);

  /**
   * @private
   * @type {Image|HTMLCanvasElement}
   */
  this.hitDetectionImage_ = null;

  /**
   * @private
   * @type {Image|HTMLCanvasElement}
   */
  this.image_ = !image ? new Image() : image;

  if (crossOrigin !== null) {
    this.image_.crossOrigin = crossOrigin;
  }

  /**
   * @private
   * @type {HTMLCanvasElement}
   */
  this.canvas_ = color ?
    /** @type {HTMLCanvasElement} */ (document.createElement('CANVAS')) :
    null;

  /**
   * @private
   * @type {ol.Color}
   */
  this.color_ = color;

  /**
   * @private
   * @type {Array.<ol.EventsKey>}
   */
  this.imageListenerKeys_ = null;

  /**
   * @private
   * @type {ol.ImageState}
   */
  this.imageState_ = imageState;

  /**
   * @private
   * @type {ol.Size}
   */
  this.size_ = size;

  /**
   * @private
   * @type {string|undefined}
   */
  this.src_ = src;

  /**
   * @private
   * @type {boolean}
   */
  this.tainting_ = false;
  if (this.imageState_ == __WEBPACK_IMPORTED_MODULE_5__imagestate_js__["a" /* default */].LOADED) {
    this.determineTainting_();
  }

};

__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_style_IconImage_, __WEBPACK_IMPORTED_MODULE_3__events_eventtarget_js__["a" /* default */]);


/**
 * @param {Image|HTMLCanvasElement} image Image.
 * @param {string} src Src.
 * @param {ol.Size} size Size.
 * @param {?string} crossOrigin Cross origin.
 * @param {ol.ImageState} imageState Image state.
 * @param {ol.Color} color Color.
 * @return {ol.style.IconImage} Icon image.
 */
_ol_style_IconImage_.get = function(image, src, size, crossOrigin, imageState,
    color) {
  var iconImageCache = __WEBPACK_IMPORTED_MODULE_6__style_js__["a" /* default */].iconImageCache;
  var iconImage = iconImageCache.get(src, crossOrigin, color);
  if (!iconImage) {
    iconImage = new _ol_style_IconImage_(
        image, src, size, crossOrigin, imageState, color);
    iconImageCache.set(src, crossOrigin, color, iconImage);
  }
  return iconImage;
};


/**
 * @private
 */
_ol_style_IconImage_.prototype.determineTainting_ = function() {
  var context = __WEBPACK_IMPORTED_MODULE_1__dom_js__["a" /* default */].createCanvasContext2D(1, 1);
  try {
    context.drawImage(this.image_, 0, 0);
    context.getImageData(0, 0, 1, 1);
  } catch (e) {
    this.tainting_ = true;
  }
};


/**
 * @private
 */
_ol_style_IconImage_.prototype.dispatchChangeEvent_ = function() {
  this.dispatchEvent(__WEBPACK_IMPORTED_MODULE_4__events_eventtype_js__["a" /* default */].CHANGE);
};


/**
 * @private
 */
_ol_style_IconImage_.prototype.handleImageError_ = function() {
  this.imageState_ = __WEBPACK_IMPORTED_MODULE_5__imagestate_js__["a" /* default */].ERROR;
  this.unlistenImage_();
  this.dispatchChangeEvent_();
};


/**
 * @private
 */
_ol_style_IconImage_.prototype.handleImageLoad_ = function() {
  this.imageState_ = __WEBPACK_IMPORTED_MODULE_5__imagestate_js__["a" /* default */].LOADED;
  if (this.size_) {
    this.image_.width = this.size_[0];
    this.image_.height = this.size_[1];
  }
  this.size_ = [this.image_.width, this.image_.height];
  this.unlistenImage_();
  this.determineTainting_();
  this.replaceColor_();
  this.dispatchChangeEvent_();
};


/**
 * @param {number} pixelRatio Pixel ratio.
 * @return {Image|HTMLCanvasElement} Image or Canvas element.
 */
_ol_style_IconImage_.prototype.getImage = function(pixelRatio) {
  return this.canvas_ ? this.canvas_ : this.image_;
};


/**
 * @return {ol.ImageState} Image state.
 */
_ol_style_IconImage_.prototype.getImageState = function() {
  return this.imageState_;
};


/**
 * @param {number} pixelRatio Pixel ratio.
 * @return {Image|HTMLCanvasElement} Image element.
 */
_ol_style_IconImage_.prototype.getHitDetectionImage = function(pixelRatio) {
  if (!this.hitDetectionImage_) {
    if (this.tainting_) {
      var width = this.size_[0];
      var height = this.size_[1];
      var context = __WEBPACK_IMPORTED_MODULE_1__dom_js__["a" /* default */].createCanvasContext2D(width, height);
      context.fillRect(0, 0, width, height);
      this.hitDetectionImage_ = context.canvas;
    } else {
      this.hitDetectionImage_ = this.image_;
    }
  }
  return this.hitDetectionImage_;
};


/**
 * @return {ol.Size} Image size.
 */
_ol_style_IconImage_.prototype.getSize = function() {
  return this.size_;
};


/**
 * @return {string|undefined} Image src.
 */
_ol_style_IconImage_.prototype.getSrc = function() {
  return this.src_;
};


/**
 * Load not yet loaded URI.
 */
_ol_style_IconImage_.prototype.load = function() {
  if (this.imageState_ == __WEBPACK_IMPORTED_MODULE_5__imagestate_js__["a" /* default */].IDLE) {
    this.imageState_ = __WEBPACK_IMPORTED_MODULE_5__imagestate_js__["a" /* default */].LOADING;
    this.imageListenerKeys_ = [
      __WEBPACK_IMPORTED_MODULE_2__events_js__["a" /* default */].listenOnce(this.image_, __WEBPACK_IMPORTED_MODULE_4__events_eventtype_js__["a" /* default */].ERROR,
          this.handleImageError_, this),
      __WEBPACK_IMPORTED_MODULE_2__events_js__["a" /* default */].listenOnce(this.image_, __WEBPACK_IMPORTED_MODULE_4__events_eventtype_js__["a" /* default */].LOAD,
          this.handleImageLoad_, this)
    ];
    try {
      this.image_.src = this.src_;
    } catch (e) {
      this.handleImageError_();
    }
  }
};


/**
 * @private
 */
_ol_style_IconImage_.prototype.replaceColor_ = function() {
  if (this.tainting_ || this.color_ === null) {
    return;
  }

  this.canvas_.width = this.image_.width;
  this.canvas_.height = this.image_.height;

  var ctx = this.canvas_.getContext('2d');
  ctx.drawImage(this.image_, 0, 0);

  var imgData = ctx.getImageData(0, 0, this.image_.width, this.image_.height);
  var data = imgData.data;
  var r = this.color_[0] / 255.0;
  var g = this.color_[1] / 255.0;
  var b = this.color_[2] / 255.0;

  for (var i = 0, ii = data.length; i < ii; i += 4) {
    data[i] *= r;
    data[i + 1] *= g;
    data[i + 2] *= b;
  }
  ctx.putImageData(imgData, 0, 0);
};


/**
 * Discards event handlers which listen for load completion or errors.
 *
 * @private
 */
_ol_style_IconImage_.prototype.unlistenImage_ = function() {
  this.imageListenerKeys_.forEach(__WEBPACK_IMPORTED_MODULE_2__events_js__["a" /* default */].unlistenByKey);
  this.imageListenerKeys_ = null;
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_style_IconImage_);


/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Icon origin. One of 'bottom-left', 'bottom-right', 'top-left', 'top-right'.
 * @enum {string}
 */
var _ol_style_IconOrigin_ = {
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_RIGHT: 'bottom-right',
  TOP_LEFT: 'top-left',
  TOP_RIGHT: 'top-right'
};

/* harmony default export */ __webpack_exports__["a"] = (_ol_style_IconOrigin_);


/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_fill_js__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_textplacement_js__ = __webpack_require__(117);



/**
 * @classdesc
 * Set text style for vector features.
 *
 * @constructor
 * @param {olx.style.TextOptions=} opt_options Options.
 * @api
 */
var _ol_style_Text_ = function(opt_options) {

  var options = opt_options || {};

  /**
   * @private
   * @type {string|undefined}
   */
  this.font_ = options.font;

  /**
   * @private
   * @type {number|undefined}
   */
  this.rotation_ = options.rotation;

  /**
   * @private
   * @type {boolean|undefined}
   */
  this.rotateWithView_ = options.rotateWithView;

  /**
   * @private
   * @type {number|undefined}
   */
  this.scale_ = options.scale;

  /**
   * @private
   * @type {string|undefined}
   */
  this.text_ = options.text;

  /**
   * @private
   * @type {string|undefined}
   */
  this.textAlign_ = options.textAlign;

  /**
   * @private
   * @type {string|undefined}
   */
  this.textBaseline_ = options.textBaseline;

  /**
   * @private
   * @type {ol.style.Fill}
   */
  this.fill_ = options.fill !== undefined ? options.fill :
    new __WEBPACK_IMPORTED_MODULE_0__style_fill_js__["a" /* default */]({color: _ol_style_Text_.DEFAULT_FILL_COLOR_});

  /**
   * @private
   * @type {number}
   */
  this.maxAngle_ = options.maxAngle !== undefined ? options.maxAngle : Math.PI / 4;

  /**
   * @private
   * @type {ol.style.TextPlacement|string}
   */
  this.placement_ = options.placement !== undefined ? options.placement : __WEBPACK_IMPORTED_MODULE_1__style_textplacement_js__["a" /* default */].POINT;

  //TODO Use options.overflow directly after removing @deprecated exceedLength
  var overflow = options.overflow === undefined ? options.exceedLength : options.overflow;

  /**
   * @private
   * @type {boolean}
   */
  this.overflow_ = overflow !== undefined ? overflow : false;

  /**
   * @private
   * @type {ol.style.Stroke}
   */
  this.stroke_ = options.stroke !== undefined ? options.stroke : null;

  /**
   * @private
   * @type {number}
   */
  this.offsetX_ = options.offsetX !== undefined ? options.offsetX : 0;

  /**
   * @private
   * @type {number}
   */
  this.offsetY_ = options.offsetY !== undefined ? options.offsetY : 0;

  /**
   * @private
   * @type {ol.style.Fill}
   */
  this.backgroundFill_ = options.backgroundFill ? options.backgroundFill : null;

  /**
   * @private
   * @type {ol.style.Stroke}
   */
  this.backgroundStroke_ = options.backgroundStroke ? options.backgroundStroke : null;

  /**
   * @private
   * @type {Array.<number>}
   */
  this.padding_ = options.padding === undefined ? null : options.padding;
};


/**
 * The default fill color to use if no fill was set at construction time; a
 * blackish `#333`.
 *
 * @const {string}
 * @private
 */
_ol_style_Text_.DEFAULT_FILL_COLOR_ = '#333';


/**
 * Clones the style.
 * @return {ol.style.Text} The cloned style.
 * @api
 */
_ol_style_Text_.prototype.clone = function() {
  return new _ol_style_Text_({
    font: this.getFont(),
    placement: this.getPlacement(),
    maxAngle: this.getMaxAngle(),
    overflow: this.getOverflow(),
    rotation: this.getRotation(),
    rotateWithView: this.getRotateWithView(),
    scale: this.getScale(),
    text: this.getText(),
    textAlign: this.getTextAlign(),
    textBaseline: this.getTextBaseline(),
    fill: this.getFill() ? this.getFill().clone() : undefined,
    stroke: this.getStroke() ? this.getStroke().clone() : undefined,
    offsetX: this.getOffsetX(),
    offsetY: this.getOffsetY()
  });
};


/**
 * Get the `overflow` configuration.
 * @return {boolean} Let text overflow the length of the path they follow.
 * @api
 */
_ol_style_Text_.prototype.getOverflow = function() {
  return this.overflow_;
};


/**
 * Get the font name.
 * @return {string|undefined} Font.
 * @api
 */
_ol_style_Text_.prototype.getFont = function() {
  return this.font_;
};


/**
 * Get the maximum angle between adjacent characters.
 * @return {number} Angle in radians.
 * @api
 */
_ol_style_Text_.prototype.getMaxAngle = function() {
  return this.maxAngle_;
};


/**
 * Get the label placement.
 * @return {ol.style.TextPlacement|string} Text placement.
 * @api
 */
_ol_style_Text_.prototype.getPlacement = function() {
  return this.placement_;
};


/**
 * Get the x-offset for the text.
 * @return {number} Horizontal text offset.
 * @api
 */
_ol_style_Text_.prototype.getOffsetX = function() {
  return this.offsetX_;
};


/**
 * Get the y-offset for the text.
 * @return {number} Vertical text offset.
 * @api
 */
_ol_style_Text_.prototype.getOffsetY = function() {
  return this.offsetY_;
};


/**
 * Get the fill style for the text.
 * @return {ol.style.Fill} Fill style.
 * @api
 */
_ol_style_Text_.prototype.getFill = function() {
  return this.fill_;
};


/**
 * Determine whether the text rotates with the map.
 * @return {boolean|undefined} Rotate with map.
 * @api
 */
_ol_style_Text_.prototype.getRotateWithView = function() {
  return this.rotateWithView_;
};


/**
 * Get the text rotation.
 * @return {number|undefined} Rotation.
 * @api
 */
_ol_style_Text_.prototype.getRotation = function() {
  return this.rotation_;
};


/**
 * Get the text scale.
 * @return {number|undefined} Scale.
 * @api
 */
_ol_style_Text_.prototype.getScale = function() {
  return this.scale_;
};


/**
 * Get the stroke style for the text.
 * @return {ol.style.Stroke} Stroke style.
 * @api
 */
_ol_style_Text_.prototype.getStroke = function() {
  return this.stroke_;
};


/**
 * Get the text to be rendered.
 * @return {string|undefined} Text.
 * @api
 */
_ol_style_Text_.prototype.getText = function() {
  return this.text_;
};


/**
 * Get the text alignment.
 * @return {string|undefined} Text align.
 * @api
 */
_ol_style_Text_.prototype.getTextAlign = function() {
  return this.textAlign_;
};


/**
 * Get the text baseline.
 * @return {string|undefined} Text baseline.
 * @api
 */
_ol_style_Text_.prototype.getTextBaseline = function() {
  return this.textBaseline_;
};


/**
 * Get the background fill style for the text.
 * @return {ol.style.Fill} Fill style.
 * @api
 */
_ol_style_Text_.prototype.getBackgroundFill = function() {
  return this.backgroundFill_;
};


/**
 * Get the background stroke style for the text.
 * @return {ol.style.Stroke} Stroke style.
 * @api
 */
_ol_style_Text_.prototype.getBackgroundStroke = function() {
  return this.backgroundStroke_;
};


/**
 * Get the padding for the text.
 * @return {Array.<number>} Padding.
 * @api
 */
_ol_style_Text_.prototype.getPadding = function() {
  return this.padding_;
};


/**
 * Set the `overflow` property.
 *
 * @param {boolean} overflow Let text overflow the path that it follows.
 * @api
 */
_ol_style_Text_.prototype.setOverflow = function(overflow) {
  this.overflow_ = overflow;
};


/**
 * Set the font.
 *
 * @param {string|undefined} font Font.
 * @api
 */
_ol_style_Text_.prototype.setFont = function(font) {
  this.font_ = font;
};


/**
 * Set the maximum angle between adjacent characters.
 *
 * @param {number} maxAngle Angle in radians.
 * @api
 */
_ol_style_Text_.prototype.setMaxAngle = function(maxAngle) {
  this.maxAngle_ = maxAngle;
};


/**
 * Set the x offset.
 *
 * @param {number} offsetX Horizontal text offset.
 * @api
 */
_ol_style_Text_.prototype.setOffsetX = function(offsetX) {
  this.offsetX_ = offsetX;
};


/**
 * Set the y offset.
 *
 * @param {number} offsetY Vertical text offset.
 * @api
 */
_ol_style_Text_.prototype.setOffsetY = function(offsetY) {
  this.offsetY_ = offsetY;
};


/**
 * Set the text placement.
 *
 * @param {ol.style.TextPlacement|string} placement Placement.
 * @api
 */
_ol_style_Text_.prototype.setPlacement = function(placement) {
  this.placement_ = placement;
};


/**
 * Set the fill.
 *
 * @param {ol.style.Fill} fill Fill style.
 * @api
 */
_ol_style_Text_.prototype.setFill = function(fill) {
  this.fill_ = fill;
};


/**
 * Set the rotation.
 *
 * @param {number|undefined} rotation Rotation.
 * @api
 */
_ol_style_Text_.prototype.setRotation = function(rotation) {
  this.rotation_ = rotation;
};


/**
 * Set the scale.
 *
 * @param {number|undefined} scale Scale.
 * @api
 */
_ol_style_Text_.prototype.setScale = function(scale) {
  this.scale_ = scale;
};


/**
 * Set the stroke.
 *
 * @param {ol.style.Stroke} stroke Stroke style.
 * @api
 */
_ol_style_Text_.prototype.setStroke = function(stroke) {
  this.stroke_ = stroke;
};


/**
 * Set the text.
 *
 * @param {string|undefined} text Text.
 * @api
 */
_ol_style_Text_.prototype.setText = function(text) {
  this.text_ = text;
};


/**
 * Set the text alignment.
 *
 * @param {string|undefined} textAlign Text align.
 * @api
 */
_ol_style_Text_.prototype.setTextAlign = function(textAlign) {
  this.textAlign_ = textAlign;
};


/**
 * Set the text baseline.
 *
 * @param {string|undefined} textBaseline Text baseline.
 * @api
 */
_ol_style_Text_.prototype.setTextBaseline = function(textBaseline) {
  this.textBaseline_ = textBaseline;
};


/**
 * Set the background fill.
 *
 * @param {ol.style.Fill} fill Fill style.
 * @api
 */
_ol_style_Text_.prototype.setBackgroundFill = function(fill) {
  this.backgroundFill_ = fill;
};


/**
 * Set the background stroke.
 *
 * @param {ol.style.Stroke} stroke Stroke style.
 * @api
 */
_ol_style_Text_.prototype.setBackgroundStroke = function(stroke) {
  this.backgroundStroke_ = stroke;
};


/**
 * Set the padding (`[top, right, bottom, left]`).
 *
 * @param {!Array.<number>} padding Padding.
 * @api
 */
_ol_style_Text_.prototype.setPadding = function(padding) {
  this.padding_ = padding;
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_style_Text_);


/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {


const colorSpaces = __webpack_require__(268);
const parseColor = __webpack_require__(269);
const extend = __webpack_require__(271);
const getType = __webpack_require__(272);
const interpolate = __webpack_require__(273);

function identityFunction(x) {
    return x;
}

function createFunction(parameters, propertySpec) {
    const isColor = propertySpec.type === 'color';

    let fun;

    if (!isFunctionDefinition(parameters)) {
        if (isColor && parameters) {
            parameters = parseColor(parameters);
        }
        fun = function() {
            return parameters;
        };
        fun.isFeatureConstant = true;
        fun.isZoomConstant = true;

    } else {
        const zoomAndFeatureDependent = parameters.stops && typeof parameters.stops[0][0] === 'object';
        const featureDependent = zoomAndFeatureDependent || parameters.property !== undefined;
        const zoomDependent = zoomAndFeatureDependent || !featureDependent;
        const type = parameters.type || (propertySpec.function === 'interpolated' ? 'exponential' : 'interval');

        if (isColor) {
            parameters = extend({}, parameters);

            if (parameters.stops) {
                parameters.stops = parameters.stops.map((stop) => {
                    return [stop[0], parseColor(stop[1])];
                });
            }

            if (parameters.default) {
                parameters.default = parseColor(parameters.default);
            } else {
                parameters.default = parseColor(propertySpec.default);
            }
        }

        let innerFun;
        let hashedStops;
        let categoricalKeyType;
        if (type === 'exponential') {
            innerFun = evaluateExponentialFunction;
        } else if (type === 'interval') {
            innerFun = evaluateIntervalFunction;
        } else if (type === 'categorical') {
            innerFun = evaluateCategoricalFunction;

            // For categorical functions, generate an Object as a hashmap of the stops for fast searching
            hashedStops = Object.create(null);
            for (const stop of parameters.stops) {
                hashedStops[stop[0]] = stop[1];
            }

            // Infer key type based on first stop key-- used to encforce strict type checking later
            categoricalKeyType = typeof parameters.stops[0][0];

        } else if (type === 'identity') {
            innerFun = evaluateIdentityFunction;
        } else {
            throw new Error(`Unknown function type "${type}"`);
        }

        let outputFunction;

        // If we're interpolating colors in a color system other than RGBA,
        // first translate all stop values to that color system, then interpolate
        // arrays as usual. The `outputFunction` option lets us then translate
        // the result of that interpolation back into RGBA.
        if (parameters.colorSpace && parameters.colorSpace !== 'rgb') {
            if (colorSpaces[parameters.colorSpace]) {
                const colorspace = colorSpaces[parameters.colorSpace];
                // Avoid mutating the parameters value
                parameters = JSON.parse(JSON.stringify(parameters));
                for (let s = 0; s < parameters.stops.length; s++) {
                    parameters.stops[s] = [
                        parameters.stops[s][0],
                        colorspace.forward(parameters.stops[s][1])
                    ];
                }
                outputFunction = colorspace.reverse;
            } else {
                throw new Error(`Unknown color space: ${parameters.colorSpace}`);
            }
        } else {
            outputFunction = identityFunction;
        }

        if (zoomAndFeatureDependent) {
            const featureFunctions = {};
            const zoomStops = [];
            for (let s = 0; s < parameters.stops.length; s++) {
                const stop = parameters.stops[s];
                const zoom = stop[0].zoom;
                if (featureFunctions[zoom] === undefined) {
                    featureFunctions[zoom] = {
                        zoom: zoom,
                        type: parameters.type,
                        property: parameters.property,
                        default: parameters.default,
                        stops: []
                    };
                    zoomStops.push(zoom);
                }
                featureFunctions[zoom].stops.push([stop[0].value, stop[1]]);
            }

            const featureFunctionStops = [];
            for (const z of zoomStops) {
                featureFunctionStops.push([featureFunctions[z].zoom, createFunction(featureFunctions[z], propertySpec)]);
            }
            fun = function(zoom, feature) {
                return outputFunction(evaluateExponentialFunction({
                    stops: featureFunctionStops,
                    base: parameters.base
                }, propertySpec, zoom)(zoom, feature));
            };
            fun.isFeatureConstant = false;
            fun.isZoomConstant = false;

        } else if (zoomDependent) {
            fun = function(zoom) {
                return outputFunction(innerFun(parameters, propertySpec, zoom, hashedStops, categoricalKeyType));
            };
            fun.isFeatureConstant = true;
            fun.isZoomConstant = false;
        } else {
            fun = function(zoom, feature) {
                const value = feature[parameters.property];
                if (value === undefined) {
                    return coalesce(parameters.default, propertySpec.default);
                }
                return outputFunction(innerFun(parameters, propertySpec, value, hashedStops, categoricalKeyType));
            };
            fun.isFeatureConstant = false;
            fun.isZoomConstant = true;
        }
    }

    return fun;
}

function coalesce(a, b, c) {
    if (a !== undefined) return a;
    if (b !== undefined) return b;
    if (c !== undefined) return c;
}

function evaluateCategoricalFunction(parameters, propertySpec, input, hashedStops, keyType) {
    const evaluated = typeof input === keyType ? hashedStops[input] : undefined; // Enforce strict typing on input
    return coalesce(evaluated, parameters.default, propertySpec.default);
}

function evaluateIntervalFunction(parameters, propertySpec, input) {
    // Edge cases
    if (getType(input) !== 'number') return coalesce(parameters.default, propertySpec.default);
    const n = parameters.stops.length;
    if (n === 1) return parameters.stops[0][1];
    if (input <= parameters.stops[0][0]) return parameters.stops[0][1];
    if (input >= parameters.stops[n - 1][0]) return parameters.stops[n - 1][1];

    const index = findStopLessThanOrEqualTo(parameters.stops, input);

    return parameters.stops[index][1];
}

function evaluateExponentialFunction(parameters, propertySpec, input) {
    const base = parameters.base !== undefined ? parameters.base : 1;

    // Edge cases
    if (getType(input) !== 'number') return coalesce(parameters.default, propertySpec.default);
    const n = parameters.stops.length;
    if (n === 1) return parameters.stops[0][1];
    if (input <= parameters.stops[0][0]) return parameters.stops[0][1];
    if (input >= parameters.stops[n - 1][0]) return parameters.stops[n - 1][1];

    const index = findStopLessThanOrEqualTo(parameters.stops, input);
    const t = interpolationFactor(
        input, base,
        parameters.stops[index][0],
        parameters.stops[index + 1][0]);

    const outputLower = parameters.stops[index][1];
    const outputUpper = parameters.stops[index + 1][1];
    const interp = interpolate[propertySpec.type] || identityFunction;

    if (typeof outputLower === 'function') {
        return function(...args) {
            const evaluatedLower = outputLower.apply(undefined, args);
            const evaluatedUpper = outputUpper.apply(undefined, args);
            // Special case for fill-outline-color, which has no spec default.
            if (evaluatedLower === undefined || evaluatedUpper === undefined) {
                return undefined;
            }
            return interp(evaluatedLower, evaluatedUpper, t);
        };
    }

    return interp(outputLower, outputUpper, t);
}

function evaluateIdentityFunction(parameters, propertySpec, input) {
    if (propertySpec.type === 'color') {
        input = parseColor(input);
    } else if (getType(input) !== propertySpec.type && (propertySpec.type !== 'enum' || !propertySpec.values[input])) {
        input = undefined;
    }
    return coalesce(input, parameters.default, propertySpec.default);
}

/**
 * Returns the index of the last stop <= input, or 0 if it doesn't exist.
 *
 * @private
 */
function findStopLessThanOrEqualTo(stops, input) {
    const n = stops.length;
    let lowerIndex = 0;
    let upperIndex = n - 1;
    let currentIndex = 0;
    let currentValue, upperValue;

    while (lowerIndex <= upperIndex) {
        currentIndex = Math.floor((lowerIndex + upperIndex) / 2);
        currentValue = stops[currentIndex][0];
        upperValue = stops[currentIndex + 1][0];
        if (input === currentValue || input > currentValue && input < upperValue) { // Search complete
            return currentIndex;
        } else if (currentValue < input) {
            lowerIndex = currentIndex + 1;
        } else if (currentValue > input) {
            upperIndex = currentIndex - 1;
        }
    }

    return Math.max(currentIndex - 1, 0);
}

function isFunctionDefinition(value) {
    return typeof value === 'object' && (value.stops || value.type === 'identity');
}

/**
 * Returns a ratio that can be used to interpolate between exponential function
 * stops.
 *
 * How it works:
 * Two consecutive stop values define a (scaled and shifted) exponential
 * function `f(x) = a * base^x + b`, where `base` is the user-specified base,
 * and `a` and `b` are constants affording sufficient degrees of freedom to fit
 * the function to the given stops.
 *
 * Here's a bit of algebra that lets us compute `f(x)` directly from the stop
 * values without explicitly solving for `a` and `b`:
 *
 * First stop value: `f(x0) = y0 = a * base^x0 + b`
 * Second stop value: `f(x1) = y1 = a * base^x1 + b`
 * => `y1 - y0 = a(base^x1 - base^x0)`
 * => `a = (y1 - y0)/(base^x1 - base^x0)`
 *
 * Desired value: `f(x) = y = a * base^x + b`
 * => `f(x) = y0 + a * (base^x - base^x0)`
 *
 * From the above, we can replace the `a` in `a * (base^x - base^x0)` and do a
 * little algebra:
 * ```
 * a * (base^x - base^x0) = (y1 - y0)/(base^x1 - base^x0) * (base^x - base^x0)
 *                     = (y1 - y0) * (base^x - base^x0) / (base^x1 - base^x0)
 * ```
 *
 * If we let `(base^x - base^x0) / (base^x1 base^x0)`, then we have
 * `f(x) = y0 + (y1 - y0) * ratio`.  In other words, `ratio` may be treated as
 * an interpolation factor between the two stops' output values.
 *
 * (Note: a slightly different form for `ratio`,
 * `(base^(x-x0) - 1) / (base^(x1-x0) - 1) `, is equivalent, but requires fewer
 * expensive `Math.pow()` operations.)
 *
 * @private
*/
function interpolationFactor(input, base, lowerValue, upperValue) {
    const difference = upperValue - lowerValue;
    const progress = input - lowerValue;

    if (difference === 0) {
        return 0;
    } else if (base === 1) {
        return progress / difference;
    } else {
        return (Math.pow(base, progress) - 1) / (Math.pow(base, difference) - 1);
    }
}

module.exports = createFunction;
module.exports.isFunctionDefinition = isFunctionDefinition;
module.exports.interpolationFactor = interpolationFactor;
module.exports.findStopLessThanOrEqualTo = findStopLessThanOrEqualTo;


/***/ }),

/***/ 268:
/***/ (function(module, exports) {


// Constants
const Xn = 0.950470, // D65 standard referent
    Yn = 1,
    Zn = 1.088830,
    t0 = 4 / 29,
    t1 = 6 / 29,
    t2 = 3 * t1 * t1,
    t3 = t1 * t1 * t1,
    deg2rad = Math.PI / 180,
    rad2deg = 180 / Math.PI;

// Utilities
function xyz2lab(t) {
    return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}

function lab2xyz(t) {
    return t > t1 ? t * t * t : t2 * (t - t0);
}

function xyz2rgb(x) {
    return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}

function rgb2xyz(x) {
    x /= 255;
    return x <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}

// LAB
function rgbToLab(rgbColor) {
    const b = rgb2xyz(rgbColor[0]),
        a = rgb2xyz(rgbColor[1]),
        l = rgb2xyz(rgbColor[2]),
        x = xyz2lab((0.4124564 * b + 0.3575761 * a + 0.1804375 * l) / Xn),
        y = xyz2lab((0.2126729 * b + 0.7151522 * a + 0.0721750 * l) / Yn),
        z = xyz2lab((0.0193339 * b + 0.1191920 * a + 0.9503041 * l) / Zn);

    return [
        116 * y - 16,
        500 * (x - y),
        200 * (y - z),
        rgbColor[3]
    ];
}

function labToRgb(labColor) {
    let y = (labColor[0] + 16) / 116,
        x = isNaN(labColor[1]) ? y : y + labColor[1] / 500,
        z = isNaN(labColor[2]) ? y : y - labColor[2] / 200;
    y = Yn * lab2xyz(y);
    x = Xn * lab2xyz(x);
    z = Zn * lab2xyz(z);
    return [
        xyz2rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z), // D65 -> sRGB
        xyz2rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z),
        xyz2rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z),
        labColor[3]
    ];
}

// HCL
function rgbToHcl(rgbColor) {
    const labColor = rgbToLab(rgbColor);
    const l = labColor[0],
        a = labColor[1],
        b = labColor[2];
    const h = Math.atan2(b, a) * rad2deg;
    return [
        h < 0 ? h + 360 : h,
        Math.sqrt(a * a + b * b),
        l,
        rgbColor[3]
    ];
}

function hclToRgb(hclColor) {
    const h = hclColor[0] * deg2rad,
        c = hclColor[1],
        l = hclColor[2];
    return labToRgb([
        l,
        Math.cos(h) * c,
        Math.sin(h) * c,
        hclColor[3]
    ]);
}

module.exports = {
    lab: {
        forward: rgbToLab,
        reverse: labToRgb
    },
    hcl: {
        forward: rgbToHcl,
        reverse: hclToRgb
    }
};


/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {


const parseColorString = __webpack_require__(270).parseCSSColor;

module.exports = function parseColor(input) {
    if (typeof input === 'string') {
        const rgba = parseColorString(input);
        if (!rgba) { return undefined; }

        // GL expects all components to be in the range [0, 1] and to be
        // multipled by the alpha value.
        return [
            rgba[0] / 255 * rgba[3],
            rgba[1] / 255 * rgba[3],
            rgba[2] / 255 * rgba[3],
            rgba[3]
        ];

    } else if (Array.isArray(input)) {
        return input;

    } else {
        return undefined;
    }
};


/***/ }),

/***/ 270:
/***/ (function(module, exports) {

// (c) Dean McNamee <dean@gmail.com>, 2012.
//
// https://github.com/deanm/css-color-parser-js
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
// IN THE SOFTWARE.

// http://www.w3.org/TR/css3-color/
var kCSSColorTable = {
  "transparent": [0,0,0,0], "aliceblue": [240,248,255,1],
  "antiquewhite": [250,235,215,1], "aqua": [0,255,255,1],
  "aquamarine": [127,255,212,1], "azure": [240,255,255,1],
  "beige": [245,245,220,1], "bisque": [255,228,196,1],
  "black": [0,0,0,1], "blanchedalmond": [255,235,205,1],
  "blue": [0,0,255,1], "blueviolet": [138,43,226,1],
  "brown": [165,42,42,1], "burlywood": [222,184,135,1],
  "cadetblue": [95,158,160,1], "chartreuse": [127,255,0,1],
  "chocolate": [210,105,30,1], "coral": [255,127,80,1],
  "cornflowerblue": [100,149,237,1], "cornsilk": [255,248,220,1],
  "crimson": [220,20,60,1], "cyan": [0,255,255,1],
  "darkblue": [0,0,139,1], "darkcyan": [0,139,139,1],
  "darkgoldenrod": [184,134,11,1], "darkgray": [169,169,169,1],
  "darkgreen": [0,100,0,1], "darkgrey": [169,169,169,1],
  "darkkhaki": [189,183,107,1], "darkmagenta": [139,0,139,1],
  "darkolivegreen": [85,107,47,1], "darkorange": [255,140,0,1],
  "darkorchid": [153,50,204,1], "darkred": [139,0,0,1],
  "darksalmon": [233,150,122,1], "darkseagreen": [143,188,143,1],
  "darkslateblue": [72,61,139,1], "darkslategray": [47,79,79,1],
  "darkslategrey": [47,79,79,1], "darkturquoise": [0,206,209,1],
  "darkviolet": [148,0,211,1], "deeppink": [255,20,147,1],
  "deepskyblue": [0,191,255,1], "dimgray": [105,105,105,1],
  "dimgrey": [105,105,105,1], "dodgerblue": [30,144,255,1],
  "firebrick": [178,34,34,1], "floralwhite": [255,250,240,1],
  "forestgreen": [34,139,34,1], "fuchsia": [255,0,255,1],
  "gainsboro": [220,220,220,1], "ghostwhite": [248,248,255,1],
  "gold": [255,215,0,1], "goldenrod": [218,165,32,1],
  "gray": [128,128,128,1], "green": [0,128,0,1],
  "greenyellow": [173,255,47,1], "grey": [128,128,128,1],
  "honeydew": [240,255,240,1], "hotpink": [255,105,180,1],
  "indianred": [205,92,92,1], "indigo": [75,0,130,1],
  "ivory": [255,255,240,1], "khaki": [240,230,140,1],
  "lavender": [230,230,250,1], "lavenderblush": [255,240,245,1],
  "lawngreen": [124,252,0,1], "lemonchiffon": [255,250,205,1],
  "lightblue": [173,216,230,1], "lightcoral": [240,128,128,1],
  "lightcyan": [224,255,255,1], "lightgoldenrodyellow": [250,250,210,1],
  "lightgray": [211,211,211,1], "lightgreen": [144,238,144,1],
  "lightgrey": [211,211,211,1], "lightpink": [255,182,193,1],
  "lightsalmon": [255,160,122,1], "lightseagreen": [32,178,170,1],
  "lightskyblue": [135,206,250,1], "lightslategray": [119,136,153,1],
  "lightslategrey": [119,136,153,1], "lightsteelblue": [176,196,222,1],
  "lightyellow": [255,255,224,1], "lime": [0,255,0,1],
  "limegreen": [50,205,50,1], "linen": [250,240,230,1],
  "magenta": [255,0,255,1], "maroon": [128,0,0,1],
  "mediumaquamarine": [102,205,170,1], "mediumblue": [0,0,205,1],
  "mediumorchid": [186,85,211,1], "mediumpurple": [147,112,219,1],
  "mediumseagreen": [60,179,113,1], "mediumslateblue": [123,104,238,1],
  "mediumspringgreen": [0,250,154,1], "mediumturquoise": [72,209,204,1],
  "mediumvioletred": [199,21,133,1], "midnightblue": [25,25,112,1],
  "mintcream": [245,255,250,1], "mistyrose": [255,228,225,1],
  "moccasin": [255,228,181,1], "navajowhite": [255,222,173,1],
  "navy": [0,0,128,1], "oldlace": [253,245,230,1],
  "olive": [128,128,0,1], "olivedrab": [107,142,35,1],
  "orange": [255,165,0,1], "orangered": [255,69,0,1],
  "orchid": [218,112,214,1], "palegoldenrod": [238,232,170,1],
  "palegreen": [152,251,152,1], "paleturquoise": [175,238,238,1],
  "palevioletred": [219,112,147,1], "papayawhip": [255,239,213,1],
  "peachpuff": [255,218,185,1], "peru": [205,133,63,1],
  "pink": [255,192,203,1], "plum": [221,160,221,1],
  "powderblue": [176,224,230,1], "purple": [128,0,128,1],
  "rebeccapurple": [102,51,153,1],
  "red": [255,0,0,1], "rosybrown": [188,143,143,1],
  "royalblue": [65,105,225,1], "saddlebrown": [139,69,19,1],
  "salmon": [250,128,114,1], "sandybrown": [244,164,96,1],
  "seagreen": [46,139,87,1], "seashell": [255,245,238,1],
  "sienna": [160,82,45,1], "silver": [192,192,192,1],
  "skyblue": [135,206,235,1], "slateblue": [106,90,205,1],
  "slategray": [112,128,144,1], "slategrey": [112,128,144,1],
  "snow": [255,250,250,1], "springgreen": [0,255,127,1],
  "steelblue": [70,130,180,1], "tan": [210,180,140,1],
  "teal": [0,128,128,1], "thistle": [216,191,216,1],
  "tomato": [255,99,71,1], "turquoise": [64,224,208,1],
  "violet": [238,130,238,1], "wheat": [245,222,179,1],
  "white": [255,255,255,1], "whitesmoke": [245,245,245,1],
  "yellow": [255,255,0,1], "yellowgreen": [154,205,50,1]}

function clamp_css_byte(i) {  // Clamp to integer 0 .. 255.
  i = Math.round(i);  // Seems to be what Chrome does (vs truncation).
  return i < 0 ? 0 : i > 255 ? 255 : i;
}

function clamp_css_float(f) {  // Clamp to float 0.0 .. 1.0.
  return f < 0 ? 0 : f > 1 ? 1 : f;
}

function parse_css_int(str) {  // int or percentage.
  if (str[str.length - 1] === '%')
    return clamp_css_byte(parseFloat(str) / 100 * 255);
  return clamp_css_byte(parseInt(str));
}

function parse_css_float(str) {  // float or percentage.
  if (str[str.length - 1] === '%')
    return clamp_css_float(parseFloat(str) / 100);
  return clamp_css_float(parseFloat(str));
}

function css_hue_to_rgb(m1, m2, h) {
  if (h < 0) h += 1;
  else if (h > 1) h -= 1;

  if (h * 6 < 1) return m1 + (m2 - m1) * h * 6;
  if (h * 2 < 1) return m2;
  if (h * 3 < 2) return m1 + (m2 - m1) * (2/3 - h) * 6;
  return m1;
}

function parseCSSColor(css_str) {
  // Remove all whitespace, not compliant, but should just be more accepting.
  var str = css_str.replace(/ /g, '').toLowerCase();

  // Color keywords (and transparent) lookup.
  if (str in kCSSColorTable) return kCSSColorTable[str].slice();  // dup.

  // #abc and #abc123 syntax.
  if (str[0] === '#') {
    if (str.length === 4) {
      var iv = parseInt(str.substr(1), 16);  // TODO(deanm): Stricter parsing.
      if (!(iv >= 0 && iv <= 0xfff)) return null;  // Covers NaN.
      return [((iv & 0xf00) >> 4) | ((iv & 0xf00) >> 8),
              (iv & 0xf0) | ((iv & 0xf0) >> 4),
              (iv & 0xf) | ((iv & 0xf) << 4),
              1];
    } else if (str.length === 7) {
      var iv = parseInt(str.substr(1), 16);  // TODO(deanm): Stricter parsing.
      if (!(iv >= 0 && iv <= 0xffffff)) return null;  // Covers NaN.
      return [(iv & 0xff0000) >> 16,
              (iv & 0xff00) >> 8,
              iv & 0xff,
              1];
    }

    return null;
  }

  var op = str.indexOf('('), ep = str.indexOf(')');
  if (op !== -1 && ep + 1 === str.length) {
    var fname = str.substr(0, op);
    var params = str.substr(op+1, ep-(op+1)).split(',');
    var alpha = 1;  // To allow case fallthrough.
    switch (fname) {
      case 'rgba':
        if (params.length !== 4) return null;
        alpha = parse_css_float(params.pop());
        // Fall through.
      case 'rgb':
        if (params.length !== 3) return null;
        return [parse_css_int(params[0]),
                parse_css_int(params[1]),
                parse_css_int(params[2]),
                alpha];
      case 'hsla':
        if (params.length !== 4) return null;
        alpha = parse_css_float(params.pop());
        // Fall through.
      case 'hsl':
        if (params.length !== 3) return null;
        var h = (((parseFloat(params[0]) % 360) + 360) % 360) / 360;  // 0 .. 1
        // NOTE(deanm): According to the CSS spec s/l should only be
        // percentages, but we don't bother and let float or percentage.
        var s = parse_css_float(params[1]);
        var l = parse_css_float(params[2]);
        var m2 = l <= 0.5 ? l * (s + 1) : l + s - l * s;
        var m1 = l * 2 - m2;
        return [clamp_css_byte(css_hue_to_rgb(m1, m2, h+1/3) * 255),
                clamp_css_byte(css_hue_to_rgb(m1, m2, h) * 255),
                clamp_css_byte(css_hue_to_rgb(m1, m2, h-1/3) * 255),
                alpha];
      default:
        return null;
    }
  }

  return null;
}

try { exports.parseCSSColor = parseCSSColor } catch(e) { }


/***/ }),

/***/ 271:
/***/ (function(module, exports) {


module.exports = function (output, ...inputs) {
    for (const input of inputs) {
        for (const k in input) {
            output[k] = input[k];
        }
    }
    return output;
};


/***/ }),

/***/ 272:
/***/ (function(module, exports) {


module.exports = function getType(val) {
    if (val instanceof Number) {
        return 'number';
    } else if (val instanceof String) {
        return 'string';
    } else if (val instanceof Boolean) {
        return 'boolean';
    } else if (Array.isArray(val)) {
        return 'array';
    } else if (val === null) {
        return 'null';
    } else {
        return typeof val;
    }
};


/***/ }),

/***/ 273:
/***/ (function(module, exports) {


module.exports = interpolate;

function interpolate(a, b, t) {
    return (a * (1 - t)) + (b * t);
}

interpolate.number = interpolate;

interpolate.vec2 = function(from, to, t) {
    return [
        interpolate(from[0], to[0], t),
        interpolate(from[1], to[1], t)
    ];
};

/*
 * Interpolate between two colors given as 4-element arrays.
 *
 * @param {Color} from
 * @param {Color} to
 * @param {number} t interpolation factor between 0 and 1
 * @returns {Color} interpolated color
 */
interpolate.color = function(from, to, t) {
    return [
        interpolate(from[0], to[0], t),
        interpolate(from[1], to[1], t),
        interpolate(from[2], to[2], t),
        interpolate(from[3], to[3], t)
    ];
};

interpolate.array = function(from, to, t) {
    return from.map((d, i) => {
        return interpolate(d, to[i], t);
    });
};


/***/ }),

/***/ 274:
/***/ (function(module, exports) {

module.exports = createFilter;

const types = ['Unknown', 'Point', 'LineString', 'Polygon'];

/**
 * Given a filter expressed as nested arrays, return a new function
 * that evaluates whether a given feature (with a .properties or .tags property)
 * passes its test.
 *
 * @private
 * @param {Array} filter mapbox gl filter
 * @returns {Function} filter-evaluating function
 */
function createFilter(filter) {
    return new Function('f', `var p = (f && f.properties || {}); return ${compile(filter)}`);
}

function compile(filter) {
    if (!filter) return 'true';
    const op = filter[0];
    if (filter.length <= 1) return op === 'any' ? 'false' : 'true';
    const str =
        op === '==' ? compileComparisonOp(filter[1], filter[2], '===', false) :
        op === '!=' ? compileComparisonOp(filter[1], filter[2], '!==', false) :
        op === '<' ||
        op === '>' ||
        op === '<=' ||
        op === '>=' ? compileComparisonOp(filter[1], filter[2], op, true) :
        op === 'any' ? compileLogicalOp(filter.slice(1), '||') :
        op === 'all' ? compileLogicalOp(filter.slice(1), '&&') :
        op === 'none' ? compileNegation(compileLogicalOp(filter.slice(1), '||')) :
        op === 'in' ? compileInOp(filter[1], filter.slice(2)) :
        op === '!in' ? compileNegation(compileInOp(filter[1], filter.slice(2))) :
        op === 'has' ? compileHasOp(filter[1]) :
        op === '!has' ? compileNegation(compileHasOp(filter[1])) :
        'true';
    return `(${str})`;
}

function compilePropertyReference(property) {
    const ref =
        property === '$type' ? 'f.type' :
        property === '$id' ? 'f.id' : `p[${JSON.stringify(property)}]`;
    return ref;
}

function compileComparisonOp(property, value, op, checkType) {
    const left = compilePropertyReference(property);
    const right = property === '$type' ? types.indexOf(value) : JSON.stringify(value);
    return (checkType ? `typeof ${left}=== typeof ${right}&&` : '') + left + op + right;
}

function compileLogicalOp(expressions, op) {
    return expressions.map(compile).join(op);
}

function compileInOp(property, values) {
    if (property === '$type') values = values.map((value) => {
        return types.indexOf(value);
    });
    const left = JSON.stringify(values.sort(compare));
    const right = compilePropertyReference(property);

    if (values.length <= 200) return `${left}.indexOf(${right}) !== -1`;

    return `${'function(v, a, i, j) {' +
        'while (i <= j) { var m = (i + j) >> 1;' +
        '    if (a[m] === v) return true; if (a[m] > v) j = m - 1; else i = m + 1;' +
        '}' +
    'return false; }('}${right}, ${left},0,${values.length - 1})`;
}

function compileHasOp(property) {
    return property === '$id' ? '"id" in f' : `${JSON.stringify(property)} in p`;
}

function compileNegation(expression) {
    return `!(${expression})`;
}

// Comparison function to sort numbers and strings
function compare(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}


/***/ }),

/***/ 275:
/***/ (function(module, exports) {

var fontWeights = {
  thin: 100,
  hairline: 100,
  'ultra-light': 100,
  'extra-light': 100,
  light: 200,
  book: 300,
  regular: 400,
  normal: 400,
  plain: 400,
  roman: 400,
  standard: 400,
  medium: 500,
  'semi-bold': 600,
  'demi-bold': 600,
  bold: 700,
  heavy: 800,
  black: 800,
  'extra-bold': 800,
  'ultra-black': 900,
  'extra-black': 900,
  'ultra-bold': 900,
  'heavy-black': 900,
  fat: 900,
  poster: 900
};
var sp = ' ';

var fontCache = {};

module.exports = function(font, size) {
  var cssData = fontCache[font];
  if (!cssData) {
    var parts = font.split(' ');
    var maybeWeight = parts[parts.length - 1].toLowerCase();
    var weight = 'normal';
    var style = 'normal';
    if (maybeWeight == 'normal' || maybeWeight == 'italic' || maybeWeight == 'oblique') {
      style = maybeWeight;
      parts.pop();
      maybeWeight = parts[parts.length - 1].toLowerCase();
    }
    for (var w in fontWeights) {
      if (maybeWeight == w || maybeWeight == w.replace('-', '') || maybeWeight == w.replace('-', ' ')) {
        weight = fontWeights[w];
        parts.pop();
        break;
      }
    }
    if (typeof maybeWeight == 'number') {
      weight = maybeWeight;
    }
    var fontFamily = parts.join(' ')
        .replace('Klokantech Noto Sans', 'Noto Sans');
    if (fontFamily.indexOf(' ') !== -1) {
      fontFamily = '"' + fontFamily + '"';
    }
    // CSS font property: font-style font-weight font-size font-family
    cssData = fontCache[font] = [style, weight, fontFamily];
  }
  return cssData[0] + sp + cssData[1] + sp + size + 'px' + sp + cssData[2];
}


/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(137);

/**
 * Get the type of a value.
 * @param {*} value The value.
 * @return {string} The type.
 */
exports.typeOf = function typeOf(value) {
  var type = typeof value;
  if (type === 'object') {
    if (value === null) {
      type = 'null';
    } else if (util.isArray(value)) {
      type = 'array';
    } else if (util.isDate(value)) {
      type = 'date';
    } else if (util.isRegExp(value)) {
      type = 'regexp';
    } else if (util.isError(value)) {
      type = 'error';
    }
  }
  return type;
};


/**
 * Copy properties from one object to another.
 * @param {Object} dest The destination object.
 * @param {Object} source The source object.
 * @return {Object} The destination object.
 */
exports.extend = function(dest, source) {
  for (var key in source) {
    dest[key] = source[key];
  }
  return dest;
};


/**
 * Generate an array of alternating name, value from an object's properties.
 * @param {Object} object The object to zip.
 * @return {Array} The array of name, value [, name, value]*.
 */
exports.zip = function(object) {
  var zipped = [];
  var count = 0;
  for (var key in object) {
    zipped[2 * count] = key;
    zipped[2 * count + 1] = object[key];
    ++count;
  }
  return zipped;
};


/**
 * Generate an object from an array of alternating name, value items.
 * @param {Array} array The array of name, value [, name, value]*.
 * @return {Object} The zipped up object.
 */
exports.unzip = function(array) {
  var object = {};
  for (var i = 0, ii = array.length; i < ii; i += 2) {
    object[array[i]] = array[i + 1];
  }
  return object;
};


/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(4);


var _ol_geom_flat_interpolate_ = {};


/**
 * @param {Array.<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} fraction Fraction.
 * @param {Array.<number>=} opt_dest Destination.
 * @return {Array.<number>} Destination.
 */
_ol_geom_flat_interpolate_.lineString = function(flatCoordinates, offset, end, stride, fraction, opt_dest) {
  var pointX = NaN;
  var pointY = NaN;
  var n = (end - offset) / stride;
  if (n === 1) {
    pointX = flatCoordinates[offset];
    pointY = flatCoordinates[offset + 1];
  } else if (n == 2) {
    pointX = (1 - fraction) * flatCoordinates[offset] +
        fraction * flatCoordinates[offset + stride];
    pointY = (1 - fraction) * flatCoordinates[offset + 1] +
        fraction * flatCoordinates[offset + stride + 1];
  } else if (n !== 0) {
    var x1 = flatCoordinates[offset];
    var y1 = flatCoordinates[offset + 1];
    var length = 0;
    var cumulativeLengths = [0];
    var i;
    for (i = offset + stride; i < end; i += stride) {
      var x2 = flatCoordinates[i];
      var y2 = flatCoordinates[i + 1];
      length += Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
      cumulativeLengths.push(length);
      x1 = x2;
      y1 = y2;
    }
    var target = fraction * length;
    var index = __WEBPACK_IMPORTED_MODULE_0__array_js__["a" /* default */].binarySearch(cumulativeLengths, target);
    if (index < 0) {
      var t = (target - cumulativeLengths[-index - 2]) /
          (cumulativeLengths[-index - 1] - cumulativeLengths[-index - 2]);
      var o = offset + (-index - 2) * stride;
      pointX = __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* default */].lerp(
          flatCoordinates[o], flatCoordinates[o + stride], t);
      pointY = __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* default */].lerp(
          flatCoordinates[o + 1], flatCoordinates[o + stride + 1], t);
    } else {
      pointX = flatCoordinates[offset + index * stride];
      pointY = flatCoordinates[offset + index * stride + 1];
    }
  }
  if (opt_dest) {
    opt_dest[0] = pointX;
    opt_dest[1] = pointY;
    return opt_dest;
  } else {
    return [pointX, pointY];
  }
};


/**
 * @param {Array.<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} m M.
 * @param {boolean} extrapolate Extrapolate.
 * @return {ol.Coordinate} Coordinate.
 */
_ol_geom_flat_interpolate_.lineStringCoordinateAtM = function(flatCoordinates, offset, end, stride, m, extrapolate) {
  if (end == offset) {
    return null;
  }
  var coordinate;
  if (m < flatCoordinates[offset + stride - 1]) {
    if (extrapolate) {
      coordinate = flatCoordinates.slice(offset, offset + stride);
      coordinate[stride - 1] = m;
      return coordinate;
    } else {
      return null;
    }
  } else if (flatCoordinates[end - 1] < m) {
    if (extrapolate) {
      coordinate = flatCoordinates.slice(end - stride, end);
      coordinate[stride - 1] = m;
      return coordinate;
    } else {
      return null;
    }
  }
  // FIXME use O(1) search
  if (m == flatCoordinates[offset + stride - 1]) {
    return flatCoordinates.slice(offset, offset + stride);
  }
  var lo = offset / stride;
  var hi = end / stride;
  while (lo < hi) {
    var mid = (lo + hi) >> 1;
    if (m < flatCoordinates[(mid + 1) * stride - 1]) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }
  var m0 = flatCoordinates[lo * stride - 1];
  if (m == m0) {
    return flatCoordinates.slice((lo - 1) * stride, (lo - 1) * stride + stride);
  }
  var m1 = flatCoordinates[(lo + 1) * stride - 1];
  var t = (m - m0) / (m1 - m0);
  coordinate = [];
  var i;
  for (i = 0; i < stride - 1; ++i) {
    coordinate.push(__WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* default */].lerp(flatCoordinates[(lo - 1) * stride + i],
        flatCoordinates[lo * stride + i], t));
  }
  coordinate.push(m);
  return coordinate;
};


/**
 * @param {Array.<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array.<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {number} m M.
 * @param {boolean} extrapolate Extrapolate.
 * @param {boolean} interpolate Interpolate.
 * @return {ol.Coordinate} Coordinate.
 */
_ol_geom_flat_interpolate_.lineStringsCoordinateAtM = function(
    flatCoordinates, offset, ends, stride, m, extrapolate, interpolate) {
  if (interpolate) {
    return _ol_geom_flat_interpolate_.lineStringCoordinateAtM(
        flatCoordinates, offset, ends[ends.length - 1], stride, m, extrapolate);
  }
  var coordinate;
  if (m < flatCoordinates[stride - 1]) {
    if (extrapolate) {
      coordinate = flatCoordinates.slice(0, stride);
      coordinate[stride - 1] = m;
      return coordinate;
    } else {
      return null;
    }
  }
  if (flatCoordinates[flatCoordinates.length - 1] < m) {
    if (extrapolate) {
      coordinate = flatCoordinates.slice(flatCoordinates.length - stride);
      coordinate[stride - 1] = m;
      return coordinate;
    } else {
      return null;
    }
  }
  var i, ii;
  for (i = 0, ii = ends.length; i < ii; ++i) {
    var end = ends[i];
    if (offset == end) {
      continue;
    }
    if (m < flatCoordinates[offset + stride - 1]) {
      return null;
    } else if (m <= flatCoordinates[end - 1]) {
      return _ol_geom_flat_interpolate_.lineStringCoordinateAtM(
          flatCoordinates, offset, end, stride, m, false);
    }
    offset = end;
  }
  return null;
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_geom_flat_interpolate_);


/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color_js__ = __webpack_require__(28);



/**
 * @classdesc
 * Set fill style for vector features.
 *
 * @constructor
 * @param {olx.style.FillOptions=} opt_options Options.
 * @api
 */
var _ol_style_Fill_ = function(opt_options) {

  var options = opt_options || {};

  /**
   * @private
   * @type {ol.Color|ol.ColorLike}
   */
  this.color_ = options.color !== undefined ? options.color : null;

  /**
   * @private
   * @type {string|undefined}
   */
  this.checksum_ = undefined;
};


/**
 * Clones the style. The color is not cloned if it is an {@link ol.ColorLike}.
 * @return {ol.style.Fill} The cloned style.
 * @api
 */
_ol_style_Fill_.prototype.clone = function() {
  var color = this.getColor();
  return new _ol_style_Fill_({
    color: (color && color.slice) ? color.slice() : color || undefined
  });
};


/**
 * Get the fill color.
 * @return {ol.Color|ol.ColorLike} Color.
 * @api
 */
_ol_style_Fill_.prototype.getColor = function() {
  return this.color_;
};


/**
 * Set the color.
 *
 * @param {ol.Color|ol.ColorLike} color Color.
 * @api
 */
_ol_style_Fill_.prototype.setColor = function(color) {
  this.color_ = color;
  this.checksum_ = undefined;
};


/**
 * @return {string} The checksum.
 */
_ol_style_Fill_.prototype.getChecksum = function() {
  if (this.checksum_ === undefined) {
    if (
      this.color_ instanceof CanvasPattern ||
        this.color_ instanceof CanvasGradient
    ) {
      this.checksum_ = __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].getUid(this.color_).toString();
    } else {
      this.checksum_ = 'f' + (this.color_ ?
        __WEBPACK_IMPORTED_MODULE_1__color_js__["a" /* default */].asString(this.color_) : '-');
    }
  }

  return this.checksum_;
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_style_Fill_);


/***/ })

},[141]);