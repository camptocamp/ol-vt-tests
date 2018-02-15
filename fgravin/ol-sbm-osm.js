webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _ol_ = {};


/**
 * Constants defined with the define tag cannot be changed in application
 * code, but can be set at compile time.
 * Some reduce the size of the build in advanced compile mode.
 */


/**
 * @define {boolean} Assume touch.  Default is `false`.
 */
_ol_.ASSUME_TOUCH = false;


/**
 * TODO: rename this to something having to do with tile grids
 * see https://github.com/openlayers/openlayers/issues/2076
 * @define {number} Default maximum zoom for default tile grids.
 */
_ol_.DEFAULT_MAX_ZOOM = 42;


/**
 * @define {number} Default min zoom level for the map view.  Default is `0`.
 */
_ol_.DEFAULT_MIN_ZOOM = 0;


/**
 * @define {number} Default maximum allowed threshold  (in pixels) for
 *     reprojection triangulation. Default is `0.5`.
 */
_ol_.DEFAULT_RASTER_REPROJECTION_ERROR_THRESHOLD = 0.5;


/**
 * @define {number} Default tile size.
 */
_ol_.DEFAULT_TILE_SIZE = 256;


/**
 * @define {string} Default WMS version.
 */
_ol_.DEFAULT_WMS_VERSION = '1.3.0';


/**
 * @define {boolean} Enable the Canvas renderer.  Default is `true`. Setting
 *     this to false at compile time in advanced mode removes all code
 *     supporting the Canvas renderer from the build.
 */
_ol_.ENABLE_CANVAS = true;


/**
 * @define {boolean} Enable integration with the Proj4js library.  Default is
 *     `true`.
 */
_ol_.ENABLE_PROJ4JS = true;


/**
 * @define {boolean} Enable automatic reprojection of raster sources. Default is
 *     `true`.
 */
_ol_.ENABLE_RASTER_REPROJECTION = true;


/**
 * @define {boolean} Enable the WebGL renderer.  Default is `true`. Setting
 *     this to false at compile time in advanced mode removes all code
 *     supporting the WebGL renderer from the build.
 */
_ol_.ENABLE_WEBGL = true;


/**
 * @define {boolean} Include debuggable shader sources.  Default is `true`.
 *     This should be set to `false` for production builds (if `ol.ENABLE_WEBGL`
 *     is `true`).
 */
_ol_.DEBUG_WEBGL = true;


/**
 * @define {number} The size in pixels of the first atlas image. Default is
 * `256`.
 */
_ol_.INITIAL_ATLAS_SIZE = 256;


/**
 * @define {number} The maximum size in pixels of atlas images. Default is
 * `-1`, meaning it is not used (and `ol.WEBGL_MAX_TEXTURE_SIZE` is
 * used instead).
 */
_ol_.MAX_ATLAS_SIZE = -1;


/**
 * @define {number} Maximum mouse wheel delta.
 */
_ol_.MOUSEWHEELZOOM_MAXDELTA = 1;


/**
 * @define {number} Maximum width and/or height extent ratio that determines
 * when the overview map should be zoomed out.
 */
_ol_.OVERVIEWMAP_MAX_RATIO = 0.75;


/**
 * @define {number} Minimum width and/or height extent ratio that determines
 * when the overview map should be zoomed in.
 */
_ol_.OVERVIEWMAP_MIN_RATIO = 0.1;


/**
 * @define {number} Maximum number of source tiles for raster reprojection of
 *     a single tile.
 *     If too many source tiles are determined to be loaded to create a single
 *     reprojected tile the browser can become unresponsive or even crash.
 *     This can happen if the developer defines projections improperly and/or
 *     with unlimited extents.
 *     If too many tiles are required, no tiles are loaded and
 *     `ol.TileState.ERROR` state is set. Default is `100`.
 */
_ol_.RASTER_REPROJECTION_MAX_SOURCE_TILES = 100;


/**
 * @define {number} Maximum number of subdivision steps during raster
 *     reprojection triangulation. Prevents high memory usage and large
 *     number of proj4 calls (for certain transformations and areas).
 *     At most `2*(2^this)` triangles are created for each triangulated
 *     extent (tile/image). Default is `10`.
 */
_ol_.RASTER_REPROJECTION_MAX_SUBDIVISION = 10;


/**
 * @define {number} Maximum allowed size of triangle relative to world width.
 *     When transforming corners of world extent between certain projections,
 *     the resulting triangulation seems to have zero error and no subdivision
 *     is performed.
 *     If the triangle width is more than this (relative to world width; 0-1),
 *     subdivison is forced (up to `ol.RASTER_REPROJECTION_MAX_SUBDIVISION`).
 *     Default is `0.25`.
 */
_ol_.RASTER_REPROJECTION_MAX_TRIANGLE_WIDTH = 0.25;


/**
 * @define {number} Tolerance for geometry simplification in device pixels.
 */
_ol_.SIMPLIFY_TOLERANCE = 0.5;


/**
 * @define {number} Texture cache high water mark.
 */
_ol_.WEBGL_TEXTURE_CACHE_HIGH_WATER_MARK = 1024;


/**
 * @define {string} OpenLayers version.
 */
_ol_.VERSION = 'v4.6.4';


/**
 * The maximum supported WebGL texture size in pixels. If WebGL is not
 * supported, the value is set to `undefined`.
 * @const
 * @type {number|undefined}
 */
_ol_.WEBGL_MAX_TEXTURE_SIZE; // value is set in `ol.has`


/**
 * List of supported WebGL extensions.
 * @const
 * @type {Array.<string>}
 */
_ol_.WEBGL_EXTENSIONS; // value is set in `ol.has`


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * Usage:
 *
 *     function ParentClass(a, b) { }
 *     ParentClass.prototype.foo = function(a) { }
 *
 *     function ChildClass(a, b, c) {
 *       // Call parent constructor
 *       ParentClass.call(this, a, b);
 *     }
 *     ol.inherits(ChildClass, ParentClass);
 *
 *     var child = new ChildClass('a', 'b', 'see');
 *     child.foo(); // This works.
 *
 * @param {!Function} childCtor Child constructor.
 * @param {!Function} parentCtor Parent constructor.
 * @function
 * @api
 */
_ol_.inherits = function(childCtor, parentCtor) {
  childCtor.prototype = Object.create(parentCtor.prototype);
  childCtor.prototype.constructor = childCtor;
};


/**
 * A reusable function, used e.g. as a default for callbacks.
 *
 * @return {undefined} Nothing.
 */
_ol_.nullFunction = function() {};


/**
 * Gets a unique ID for an object. This mutates the object so that further calls
 * with the same object as a parameter returns the same value. Unique IDs are generated
 * as a strictly increasing sequence. Adapted from goog.getUid.
 *
 * @param {Object} obj The object to get the unique ID for.
 * @return {number} The unique ID for the object.
 */
_ol_.getUid = function(obj) {
  return obj.ol_uid ||
      (obj.ol_uid = ++_ol_.uidCounter_);
};


/**
 * Counter for getUid.
 * @type {number}
 * @private
 */
_ol_.uidCounter_ = 0;
/* harmony default export */ __webpack_exports__["a"] = (_ol_);


/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assertionerror_js__ = __webpack_require__(273);

var _ol_asserts_ = {};


/**
 * @param {*} assertion Assertion we expected to be truthy.
 * @param {number} errorCode Error code.
 */
_ol_asserts_.assert = function(assertion, errorCode) {
  if (!assertion) {
    throw new __WEBPACK_IMPORTED_MODULE_0__assertionerror_js__["a" /* default */](errorCode);
  }
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_asserts_);


/***/ }),
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__asserts_js__ = __webpack_require__(41);

var _ol_math_ = {};


/**
 * Takes a number and clamps it to within the provided bounds.
 * @param {number} value The input number.
 * @param {number} min The minimum value to return.
 * @param {number} max The maximum value to return.
 * @return {number} The input number if it is within bounds, or the nearest
 *     number within the bounds.
 */
_ol_math_.clamp = function(value, min, max) {
  return Math.min(Math.max(value, min), max);
};


/**
 * Return the hyperbolic cosine of a given number. The method will use the
 * native `Math.cosh` function if it is available, otherwise the hyperbolic
 * cosine will be calculated via the reference implementation of the Mozilla
 * developer network.
 *
 * @param {number} x X.
 * @return {number} Hyperbolic cosine of x.
 */
_ol_math_.cosh = (function() {
  // Wrapped in a iife, to save the overhead of checking for the native
  // implementation on every invocation.
  var cosh;
  if ('cosh' in Math) {
    // The environment supports the native Math.cosh function, use it…
    cosh = Math.cosh;
  } else {
    // … else, use the reference implementation of MDN:
    cosh = function(x) {
      var y = Math.exp(x);
      return (y + 1 / y) / 2;
    };
  }
  return cosh;
}());


/**
 * @param {number} x X.
 * @return {number} The smallest power of two greater than or equal to x.
 */
_ol_math_.roundUpToPowerOfTwo = function(x) {
  __WEBPACK_IMPORTED_MODULE_0__asserts_js__["a" /* default */].assert(0 < x, 29); // `x` must be greater than `0`
  return Math.pow(2, Math.ceil(Math.log(x) / Math.LN2));
};


/**
 * Returns the square of the closest distance between the point (x, y) and the
 * line segment (x1, y1) to (x2, y2).
 * @param {number} x X.
 * @param {number} y Y.
 * @param {number} x1 X1.
 * @param {number} y1 Y1.
 * @param {number} x2 X2.
 * @param {number} y2 Y2.
 * @return {number} Squared distance.
 */
_ol_math_.squaredSegmentDistance = function(x, y, x1, y1, x2, y2) {
  var dx = x2 - x1;
  var dy = y2 - y1;
  if (dx !== 0 || dy !== 0) {
    var t = ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy);
    if (t > 1) {
      x1 = x2;
      y1 = y2;
    } else if (t > 0) {
      x1 += dx * t;
      y1 += dy * t;
    }
  }
  return _ol_math_.squaredDistance(x, y, x1, y1);
};


/**
 * Returns the square of the distance between the points (x1, y1) and (x2, y2).
 * @param {number} x1 X1.
 * @param {number} y1 Y1.
 * @param {number} x2 X2.
 * @param {number} y2 Y2.
 * @return {number} Squared distance.
 */
_ol_math_.squaredDistance = function(x1, y1, x2, y2) {
  var dx = x2 - x1;
  var dy = y2 - y1;
  return dx * dx + dy * dy;
};


/**
 * Solves system of linear equations using Gaussian elimination method.
 *
 * @param {Array.<Array.<number>>} mat Augmented matrix (n x n + 1 column)
 *                                     in row-major order.
 * @return {Array.<number>} The resulting vector.
 */
_ol_math_.solveLinearSystem = function(mat) {
  var n = mat.length;

  for (var i = 0; i < n; i++) {
    // Find max in the i-th column (ignoring i - 1 first rows)
    var maxRow = i;
    var maxEl = Math.abs(mat[i][i]);
    for (var r = i + 1; r < n; r++) {
      var absValue = Math.abs(mat[r][i]);
      if (absValue > maxEl) {
        maxEl = absValue;
        maxRow = r;
      }
    }

    if (maxEl === 0) {
      return null; // matrix is singular
    }

    // Swap max row with i-th (current) row
    var tmp = mat[maxRow];
    mat[maxRow] = mat[i];
    mat[i] = tmp;

    // Subtract the i-th row to make all the remaining rows 0 in the i-th column
    for (var j = i + 1; j < n; j++) {
      var coef = -mat[j][i] / mat[i][i];
      for (var k = i; k < n + 1; k++) {
        if (i == k) {
          mat[j][k] = 0;
        } else {
          mat[j][k] += coef * mat[i][k];
        }
      }
    }
  }

  // Solve Ax=b for upper triangular matrix A (mat)
  var x = new Array(n);
  for (var l = n - 1; l >= 0; l--) {
    x[l] = mat[l][n] / mat[l][l];
    for (var m = l - 1; m >= 0; m--) {
      mat[m][n] -= mat[m][l] * x[l];
    }
  }
  return x;
};


/**
 * Converts radians to to degrees.
 *
 * @param {number} angleInRadians Angle in radians.
 * @return {number} Angle in degrees.
 */
_ol_math_.toDegrees = function(angleInRadians) {
  return angleInRadians * 180 / Math.PI;
};


/**
 * Converts degrees to radians.
 *
 * @param {number} angleInDegrees Angle in degrees.
 * @return {number} Angle in radians.
 */
_ol_math_.toRadians = function(angleInDegrees) {
  return angleInDegrees * Math.PI / 180;
};

/**
 * Returns the modulo of a / b, depending on the sign of b.
 *
 * @param {number} a Dividend.
 * @param {number} b Divisor.
 * @return {number} Modulo.
 */
_ol_math_.modulo = function(a, b) {
  var r = a % b;
  return r * b < 0 ? r + b : r;
};

/**
 * Calculates the linearly interpolated value of x between a and b.
 *
 * @param {number} a Number
 * @param {number} b Number
 * @param {number} x Value to be interpolated.
 * @return {number} Interpolated value.
 */
_ol_math_.lerp = function(a, b, x) {
  return a + x * (b - a);
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_math_);


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _ol_obj_ = {};


/**
 * Polyfill for Object.assign().  Assigns enumerable and own properties from
 * one or more source objects to a target object.
 *
 * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 * @param {!Object} target The target object.
 * @param {...Object} var_sources The source object(s).
 * @return {!Object} The modified target object.
 */
_ol_obj_.assign = (typeof Object.assign === 'function') ? Object.assign : function(target, var_sources) {
  if (target === undefined || target === null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  var output = Object(target);
  for (var i = 1, ii = arguments.length; i < ii; ++i) {
    var source = arguments[i];
    if (source !== undefined && source !== null) {
      for (var key in source) {
        if (source.hasOwnProperty(key)) {
          output[key] = source[key];
        }
      }
    }
  }
  return output;
};


/**
 * Removes all properties from an object.
 * @param {Object} object The object to clear.
 */
_ol_obj_.clear = function(object) {
  for (var property in object) {
    delete object[property];
  }
};


/**
 * Get an array of property values from an object.
 * @param {Object<K,V>} object The object from which to get the values.
 * @return {!Array<V>} The property values.
 * @template K,V
 */
_ol_obj_.getValues = function(object) {
  var values = [];
  for (var property in object) {
    values.push(object[property]);
  }
  return values;
};


/**
 * Determine if an object has any properties.
 * @param {Object} object The object to check.
 * @return {boolean} The object is empty.
 */
_ol_obj_.isEmpty = function(object) {
  var property;
  for (property in object) {
    return false;
  }
  return !property;
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_obj_);


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Projection units: `'degrees'`, `'ft'`, `'m'`, `'pixels'`, `'tile-pixels'` or
 * `'us-ft'`.
 * @enum {string}
 */
var _ol_proj_Units_ = {
  DEGREES: 'degrees',
  FEET: 'ft',
  METERS: 'm',
  PIXELS: 'pixels',
  TILE_PIXELS: 'tile-pixels',
  USFEET: 'us-ft'
};


/**
 * Meters per unit lookup table.
 * @const
 * @type {Object.<ol.proj.Units, number>}
 * @api
 */
_ol_proj_Units_.METERS_PER_UNIT = {};
// use the radius of the Normal sphere
_ol_proj_Units_.METERS_PER_UNIT[_ol_proj_Units_.DEGREES] =
    2 * Math.PI * 6370997 / 360;
_ol_proj_Units_.METERS_PER_UNIT[_ol_proj_Units_.FEET] = 0.3048;
_ol_proj_Units_.METERS_PER_UNIT[_ol_proj_Units_.METERS] = 1;
_ol_proj_Units_.METERS_PER_UNIT[_ol_proj_Units_.USFEET] = 1200 / 3937;
/* harmony default export */ __webpack_exports__["a"] = (_ol_proj_Units_);


/***/ }),
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__asserts_js__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(59);


var _ol_color_ = {};


/**
 * This RegExp matches # followed by 3, 4, 6, or 8 hex digits.
 * @const
 * @type {RegExp}
 * @private
 */
_ol_color_.HEX_COLOR_RE_ = /^#(?:[0-9a-f]{3,4}){1,2}$/i;


/**
 * Regular expression for matching potential named color style strings.
 * @const
 * @type {RegExp}
 * @private
 */
_ol_color_.NAMED_COLOR_RE_ = /^([a-z]*)$/i;


/**
 * Return the color as an array. This function maintains a cache of calculated
 * arrays which means the result should not be modified.
 * @param {ol.Color|string} color Color.
 * @return {ol.Color} Color.
 * @api
 */
_ol_color_.asArray = function(color) {
  if (Array.isArray(color)) {
    return color;
  } else {
    return _ol_color_.fromString(/** @type {string} */ (color));
  }
};


/**
 * Return the color as an rgba string.
 * @param {ol.Color|string} color Color.
 * @return {string} Rgba string.
 * @api
 */
_ol_color_.asString = function(color) {
  if (typeof color === 'string') {
    return color;
  } else {
    return _ol_color_.toString(color);
  }
};

/**
 * Return named color as an rgba string.
 * @param {string} color Named color.
 * @return {string} Rgb string.
 */
_ol_color_.fromNamed = function(color) {
  var el = document.createElement('div');
  el.style.color = color;
  document.body.appendChild(el);
  var rgb = getComputedStyle(el).color;
  document.body.removeChild(el);
  return rgb;
};


/**
 * @param {string} s String.
 * @return {ol.Color} Color.
 */
_ol_color_.fromString = (
  function() {

    // We maintain a small cache of parsed strings.  To provide cheap LRU-like
    // semantics, whenever the cache grows too large we simply delete an
    // arbitrary 25% of the entries.

    /**
     * @const
     * @type {number}
     */
    var MAX_CACHE_SIZE = 1024;

    /**
     * @type {Object.<string, ol.Color>}
     */
    var cache = {};

    /**
     * @type {number}
     */
    var cacheSize = 0;

    return (
      /**
       * @param {string} s String.
       * @return {ol.Color} Color.
       */
      function(s) {
        var color;
        if (cache.hasOwnProperty(s)) {
          color = cache[s];
        } else {
          if (cacheSize >= MAX_CACHE_SIZE) {
            var i = 0;
            var key;
            for (key in cache) {
              if ((i++ & 3) === 0) {
                delete cache[key];
                --cacheSize;
              }
            }
          }
          color = _ol_color_.fromStringInternal_(s);
          cache[s] = color;
          ++cacheSize;
        }
        return color;
      }
    );

  })();


/**
 * @param {string} s String.
 * @private
 * @return {ol.Color} Color.
 */
_ol_color_.fromStringInternal_ = function(s) {
  var r, g, b, a, color, parts;

  if (_ol_color_.NAMED_COLOR_RE_.exec(s)) {
    s = _ol_color_.fromNamed(s);
  }

  if (_ol_color_.HEX_COLOR_RE_.exec(s)) { // hex
    var n = s.length - 1; // number of hex digits
    var d; // number of digits per channel
    if (n <= 4) {
      d = 1;
    } else {
      d = 2;
    }
    var hasAlpha = n === 4 || n === 8;
    r = parseInt(s.substr(1 + 0 * d, d), 16);
    g = parseInt(s.substr(1 + 1 * d, d), 16);
    b = parseInt(s.substr(1 + 2 * d, d), 16);
    if (hasAlpha) {
      a = parseInt(s.substr(1 + 3 * d, d), 16);
    } else {
      a = 255;
    }
    if (d == 1) {
      r = (r << 4) + r;
      g = (g << 4) + g;
      b = (b << 4) + b;
      if (hasAlpha) {
        a = (a << 4) + a;
      }
    }
    color = [r, g, b, a / 255];
  } else if (s.indexOf('rgba(') == 0) { // rgba()
    parts = s.slice(5, -1).split(',').map(Number);
    color = _ol_color_.normalize(parts);
  } else if (s.indexOf('rgb(') == 0) { // rgb()
    parts = s.slice(4, -1).split(',').map(Number);
    parts.push(1);
    color = _ol_color_.normalize(parts);
  } else {
    __WEBPACK_IMPORTED_MODULE_0__asserts_js__["a" /* default */].assert(false, 14); // Invalid color
  }
  return /** @type {ol.Color} */ (color);
};


/**
 * @param {ol.Color} color Color.
 * @param {ol.Color=} opt_color Color.
 * @return {ol.Color} Clamped color.
 */
_ol_color_.normalize = function(color, opt_color) {
  var result = opt_color || [];
  result[0] = __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* default */].clamp((color[0] + 0.5) | 0, 0, 255);
  result[1] = __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* default */].clamp((color[1] + 0.5) | 0, 0, 255);
  result[2] = __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* default */].clamp((color[2] + 0.5) | 0, 0, 255);
  result[3] = __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* default */].clamp(color[3], 0, 1);
  return result;
};


/**
 * @param {ol.Color} color Color.
 * @return {string} String.
 */
_ol_color_.toString = function(color) {
  var r = color[0];
  if (r != (r | 0)) {
    r = (r + 0.5) | 0;
  }
  var g = color[1];
  if (g != (g | 0)) {
    g = (g + 0.5) | 0;
  }
  var b = color[2];
  if (b != (b | 0)) {
    b = (b + 0.5) | 0;
  }
  var a = color[3] === undefined ? 1 : color[3];
  return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_color_);


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__obj_js__ = __webpack_require__(60);

var _ol_events_ = {};


/**
 * @param {ol.EventsKey} listenerObj Listener object.
 * @return {ol.EventsListenerFunctionType} Bound listener.
 */
_ol_events_.bindListener_ = function(listenerObj) {
  var boundListener = function(evt) {
    var listener = listenerObj.listener;
    var bindTo = listenerObj.bindTo || listenerObj.target;
    if (listenerObj.callOnce) {
      _ol_events_.unlistenByKey(listenerObj);
    }
    return listener.call(bindTo, evt);
  };
  listenerObj.boundListener = boundListener;
  return boundListener;
};


/**
 * Finds the matching {@link ol.EventsKey} in the given listener
 * array.
 *
 * @param {!Array<!ol.EventsKey>} listeners Array of listeners.
 * @param {!Function} listener The listener function.
 * @param {Object=} opt_this The `this` value inside the listener.
 * @param {boolean=} opt_setDeleteIndex Set the deleteIndex on the matching
 *     listener, for {@link ol.events.unlistenByKey}.
 * @return {ol.EventsKey|undefined} The matching listener object.
 * @private
 */
_ol_events_.findListener_ = function(listeners, listener, opt_this,
    opt_setDeleteIndex) {
  var listenerObj;
  for (var i = 0, ii = listeners.length; i < ii; ++i) {
    listenerObj = listeners[i];
    if (listenerObj.listener === listener &&
        listenerObj.bindTo === opt_this) {
      if (opt_setDeleteIndex) {
        listenerObj.deleteIndex = i;
      }
      return listenerObj;
    }
  }
  return undefined;
};


/**
 * @param {ol.EventTargetLike} target Target.
 * @param {string} type Type.
 * @return {Array.<ol.EventsKey>|undefined} Listeners.
 */
_ol_events_.getListeners = function(target, type) {
  var listenerMap = target.ol_lm;
  return listenerMap ? listenerMap[type] : undefined;
};


/**
 * Get the lookup of listeners.  If one does not exist on the target, it is
 * created.
 * @param {ol.EventTargetLike} target Target.
 * @return {!Object.<string, Array.<ol.EventsKey>>} Map of
 *     listeners by event type.
 * @private
 */
_ol_events_.getListenerMap_ = function(target) {
  var listenerMap = target.ol_lm;
  if (!listenerMap) {
    listenerMap = target.ol_lm = {};
  }
  return listenerMap;
};


/**
 * Clean up all listener objects of the given type.  All properties on the
 * listener objects will be removed, and if no listeners remain in the listener
 * map, it will be removed from the target.
 * @param {ol.EventTargetLike} target Target.
 * @param {string} type Type.
 * @private
 */
_ol_events_.removeListeners_ = function(target, type) {
  var listeners = _ol_events_.getListeners(target, type);
  if (listeners) {
    for (var i = 0, ii = listeners.length; i < ii; ++i) {
      target.removeEventListener(type, listeners[i].boundListener);
      __WEBPACK_IMPORTED_MODULE_0__obj_js__["a" /* default */].clear(listeners[i]);
    }
    listeners.length = 0;
    var listenerMap = target.ol_lm;
    if (listenerMap) {
      delete listenerMap[type];
      if (Object.keys(listenerMap).length === 0) {
        delete target.ol_lm;
      }
    }
  }
};


/**
 * Registers an event listener on an event target. Inspired by
 * {@link https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html}
 *
 * This function efficiently binds a `listener` to a `this` object, and returns
 * a key for use with {@link ol.events.unlistenByKey}.
 *
 * @param {ol.EventTargetLike} target Event target.
 * @param {string} type Event type.
 * @param {ol.EventsListenerFunctionType} listener Listener.
 * @param {Object=} opt_this Object referenced by the `this` keyword in the
 *     listener. Default is the `target`.
 * @param {boolean=} opt_once If true, add the listener as one-off listener.
 * @return {ol.EventsKey} Unique key for the listener.
 */
_ol_events_.listen = function(target, type, listener, opt_this, opt_once) {
  var listenerMap = _ol_events_.getListenerMap_(target);
  var listeners = listenerMap[type];
  if (!listeners) {
    listeners = listenerMap[type] = [];
  }
  var listenerObj = _ol_events_.findListener_(listeners, listener, opt_this,
      false);
  if (listenerObj) {
    if (!opt_once) {
      // Turn one-off listener into a permanent one.
      listenerObj.callOnce = false;
    }
  } else {
    listenerObj = /** @type {ol.EventsKey} */ ({
      bindTo: opt_this,
      callOnce: !!opt_once,
      listener: listener,
      target: target,
      type: type
    });
    target.addEventListener(type, _ol_events_.bindListener_(listenerObj));
    listeners.push(listenerObj);
  }

  return listenerObj;
};


/**
 * Registers a one-off event listener on an event target. Inspired by
 * {@link https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html}
 *
 * This function efficiently binds a `listener` as self-unregistering listener
 * to a `this` object, and returns a key for use with
 * {@link ol.events.unlistenByKey} in case the listener needs to be unregistered
 * before it is called.
 *
 * When {@link ol.events.listen} is called with the same arguments after this
 * function, the self-unregistering listener will be turned into a permanent
 * listener.
 *
 * @param {ol.EventTargetLike} target Event target.
 * @param {string} type Event type.
 * @param {ol.EventsListenerFunctionType} listener Listener.
 * @param {Object=} opt_this Object referenced by the `this` keyword in the
 *     listener. Default is the `target`.
 * @return {ol.EventsKey} Key for unlistenByKey.
 */
_ol_events_.listenOnce = function(target, type, listener, opt_this) {
  return _ol_events_.listen(target, type, listener, opt_this, true);
};


/**
 * Unregisters an event listener on an event target. Inspired by
 * {@link https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html}
 *
 * To return a listener, this function needs to be called with the exact same
 * arguments that were used for a previous {@link ol.events.listen} call.
 *
 * @param {ol.EventTargetLike} target Event target.
 * @param {string} type Event type.
 * @param {ol.EventsListenerFunctionType} listener Listener.
 * @param {Object=} opt_this Object referenced by the `this` keyword in the
 *     listener. Default is the `target`.
 */
_ol_events_.unlisten = function(target, type, listener, opt_this) {
  var listeners = _ol_events_.getListeners(target, type);
  if (listeners) {
    var listenerObj = _ol_events_.findListener_(listeners, listener, opt_this,
        true);
    if (listenerObj) {
      _ol_events_.unlistenByKey(listenerObj);
    }
  }
};


/**
 * Unregisters event listeners on an event target. Inspired by
 * {@link https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html}
 *
 * The argument passed to this function is the key returned from
 * {@link ol.events.listen} or {@link ol.events.listenOnce}.
 *
 * @param {ol.EventsKey} key The key.
 */
_ol_events_.unlistenByKey = function(key) {
  if (key && key.target) {
    key.target.removeEventListener(key.type, key.boundListener);
    var listeners = _ol_events_.getListeners(key.target, key.type);
    if (listeners) {
      var i = 'deleteIndex' in key ? key.deleteIndex : listeners.indexOf(key);
      if (i !== -1) {
        listeners.splice(i, 1);
      }
      if (listeners.length === 0) {
        _ol_events_.removeListeners_(key.target, key.type);
      }
    }
    __WEBPACK_IMPORTED_MODULE_0__obj_js__["a" /* default */].clear(key);
  }
};


/**
 * Unregisters all event listeners on an event target. Inspired by
 * {@link https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html}
 *
 * @param {ol.EventTargetLike} target Target.
 */
_ol_events_.unlistenAll = function(target) {
  var listenerMap = _ol_events_.getListenerMap_(target);
  for (var type in listenerMap) {
    _ol_events_.removeListeners_(target, type);
  }
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_events_);


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @enum {string}
 * @const
 */
var _ol_events_EventType_ = {
  /**
   * Generic change event. Triggered when the revision counter is increased.
   * @event ol.events.Event#change
   * @api
   */
  CHANGE: 'change',

  CLEAR: 'clear',
  CLICK: 'click',
  DBLCLICK: 'dblclick',
  DRAGENTER: 'dragenter',
  DRAGOVER: 'dragover',
  DROP: 'drop',
  ERROR: 'error',
  KEYDOWN: 'keydown',
  KEYPRESS: 'keypress',
  LOAD: 'load',
  MOUSEDOWN: 'mousedown',
  MOUSEMOVE: 'mousemove',
  MOUSEOUT: 'mouseout',
  MOUSEUP: 'mouseup',
  MOUSEWHEEL: 'mousewheel',
  MSPOINTERDOWN: 'MSPointerDown',
  RESIZE: 'resize',
  TOUCHSTART: 'touchstart',
  TOUCHMOVE: 'touchmove',
  TOUCHEND: 'touchend',
  WHEEL: 'wheel'
};

/* harmony default export */ __webpack_exports__["a"] = (_ol_events_EventType_);


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__asserts_js__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__extent_corner_js__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__extent_relationship_js__ = __webpack_require__(292);



var _ol_extent_ = {};


/**
 * Build an extent that includes all given coordinates.
 *
 * @param {Array.<ol.Coordinate>} coordinates Coordinates.
 * @return {ol.Extent} Bounding extent.
 * @api
 */
_ol_extent_.boundingExtent = function(coordinates) {
  var extent = _ol_extent_.createEmpty();
  for (var i = 0, ii = coordinates.length; i < ii; ++i) {
    _ol_extent_.extendCoordinate(extent, coordinates[i]);
  }
  return extent;
};


/**
 * @param {Array.<number>} xs Xs.
 * @param {Array.<number>} ys Ys.
 * @param {ol.Extent=} opt_extent Destination extent.
 * @private
 * @return {ol.Extent} Extent.
 */
_ol_extent_.boundingExtentXYs_ = function(xs, ys, opt_extent) {
  var minX = Math.min.apply(null, xs);
  var minY = Math.min.apply(null, ys);
  var maxX = Math.max.apply(null, xs);
  var maxY = Math.max.apply(null, ys);
  return _ol_extent_.createOrUpdate(minX, minY, maxX, maxY, opt_extent);
};


/**
 * Return extent increased by the provided value.
 * @param {ol.Extent} extent Extent.
 * @param {number} value The amount by which the extent should be buffered.
 * @param {ol.Extent=} opt_extent Extent.
 * @return {ol.Extent} Extent.
 * @api
 */
_ol_extent_.buffer = function(extent, value, opt_extent) {
  if (opt_extent) {
    opt_extent[0] = extent[0] - value;
    opt_extent[1] = extent[1] - value;
    opt_extent[2] = extent[2] + value;
    opt_extent[3] = extent[3] + value;
    return opt_extent;
  } else {
    return [
      extent[0] - value,
      extent[1] - value,
      extent[2] + value,
      extent[3] + value
    ];
  }
};


/**
 * Creates a clone of an extent.
 *
 * @param {ol.Extent} extent Extent to clone.
 * @param {ol.Extent=} opt_extent Extent.
 * @return {ol.Extent} The clone.
 */
_ol_extent_.clone = function(extent, opt_extent) {
  if (opt_extent) {
    opt_extent[0] = extent[0];
    opt_extent[1] = extent[1];
    opt_extent[2] = extent[2];
    opt_extent[3] = extent[3];
    return opt_extent;
  } else {
    return extent.slice();
  }
};


/**
 * @param {ol.Extent} extent Extent.
 * @param {number} x X.
 * @param {number} y Y.
 * @return {number} Closest squared distance.
 */
_ol_extent_.closestSquaredDistanceXY = function(extent, x, y) {
  var dx, dy;
  if (x < extent[0]) {
    dx = extent[0] - x;
  } else if (extent[2] < x) {
    dx = x - extent[2];
  } else {
    dx = 0;
  }
  if (y < extent[1]) {
    dy = extent[1] - y;
  } else if (extent[3] < y) {
    dy = y - extent[3];
  } else {
    dy = 0;
  }
  return dx * dx + dy * dy;
};


/**
 * Check if the passed coordinate is contained or on the edge of the extent.
 *
 * @param {ol.Extent} extent Extent.
 * @param {ol.Coordinate} coordinate Coordinate.
 * @return {boolean} The coordinate is contained in the extent.
 * @api
 */
_ol_extent_.containsCoordinate = function(extent, coordinate) {
  return _ol_extent_.containsXY(extent, coordinate[0], coordinate[1]);
};


/**
 * Check if one extent contains another.
 *
 * An extent is deemed contained if it lies completely within the other extent,
 * including if they share one or more edges.
 *
 * @param {ol.Extent} extent1 Extent 1.
 * @param {ol.Extent} extent2 Extent 2.
 * @return {boolean} The second extent is contained by or on the edge of the
 *     first.
 * @api
 */
_ol_extent_.containsExtent = function(extent1, extent2) {
  return extent1[0] <= extent2[0] && extent2[2] <= extent1[2] &&
      extent1[1] <= extent2[1] && extent2[3] <= extent1[3];
};


/**
 * Check if the passed coordinate is contained or on the edge of the extent.
 *
 * @param {ol.Extent} extent Extent.
 * @param {number} x X coordinate.
 * @param {number} y Y coordinate.
 * @return {boolean} The x, y values are contained in the extent.
 * @api
 */
_ol_extent_.containsXY = function(extent, x, y) {
  return extent[0] <= x && x <= extent[2] && extent[1] <= y && y <= extent[3];
};


/**
 * Get the relationship between a coordinate and extent.
 * @param {ol.Extent} extent The extent.
 * @param {ol.Coordinate} coordinate The coordinate.
 * @return {number} The relationship (bitwise compare with
 *     ol.extent.Relationship).
 */
_ol_extent_.coordinateRelationship = function(extent, coordinate) {
  var minX = extent[0];
  var minY = extent[1];
  var maxX = extent[2];
  var maxY = extent[3];
  var x = coordinate[0];
  var y = coordinate[1];
  var relationship = __WEBPACK_IMPORTED_MODULE_2__extent_relationship_js__["a" /* default */].UNKNOWN;
  if (x < minX) {
    relationship = relationship | __WEBPACK_IMPORTED_MODULE_2__extent_relationship_js__["a" /* default */].LEFT;
  } else if (x > maxX) {
    relationship = relationship | __WEBPACK_IMPORTED_MODULE_2__extent_relationship_js__["a" /* default */].RIGHT;
  }
  if (y < minY) {
    relationship = relationship | __WEBPACK_IMPORTED_MODULE_2__extent_relationship_js__["a" /* default */].BELOW;
  } else if (y > maxY) {
    relationship = relationship | __WEBPACK_IMPORTED_MODULE_2__extent_relationship_js__["a" /* default */].ABOVE;
  }
  if (relationship === __WEBPACK_IMPORTED_MODULE_2__extent_relationship_js__["a" /* default */].UNKNOWN) {
    relationship = __WEBPACK_IMPORTED_MODULE_2__extent_relationship_js__["a" /* default */].INTERSECTING;
  }
  return relationship;
};


/**
 * Create an empty extent.
 * @return {ol.Extent} Empty extent.
 * @api
 */
_ol_extent_.createEmpty = function() {
  return [Infinity, Infinity, -Infinity, -Infinity];
};


/**
 * Create a new extent or update the provided extent.
 * @param {number} minX Minimum X.
 * @param {number} minY Minimum Y.
 * @param {number} maxX Maximum X.
 * @param {number} maxY Maximum Y.
 * @param {ol.Extent=} opt_extent Destination extent.
 * @return {ol.Extent} Extent.
 */
_ol_extent_.createOrUpdate = function(minX, minY, maxX, maxY, opt_extent) {
  if (opt_extent) {
    opt_extent[0] = minX;
    opt_extent[1] = minY;
    opt_extent[2] = maxX;
    opt_extent[3] = maxY;
    return opt_extent;
  } else {
    return [minX, minY, maxX, maxY];
  }
};


/**
 * Create a new empty extent or make the provided one empty.
 * @param {ol.Extent=} opt_extent Extent.
 * @return {ol.Extent} Extent.
 */
_ol_extent_.createOrUpdateEmpty = function(opt_extent) {
  return _ol_extent_.createOrUpdate(
      Infinity, Infinity, -Infinity, -Infinity, opt_extent);
};


/**
 * @param {ol.Coordinate} coordinate Coordinate.
 * @param {ol.Extent=} opt_extent Extent.
 * @return {ol.Extent} Extent.
 */
_ol_extent_.createOrUpdateFromCoordinate = function(coordinate, opt_extent) {
  var x = coordinate[0];
  var y = coordinate[1];
  return _ol_extent_.createOrUpdate(x, y, x, y, opt_extent);
};


/**
 * @param {Array.<ol.Coordinate>} coordinates Coordinates.
 * @param {ol.Extent=} opt_extent Extent.
 * @return {ol.Extent} Extent.
 */
_ol_extent_.createOrUpdateFromCoordinates = function(coordinates, opt_extent) {
  var extent = _ol_extent_.createOrUpdateEmpty(opt_extent);
  return _ol_extent_.extendCoordinates(extent, coordinates);
};


/**
 * @param {Array.<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {ol.Extent=} opt_extent Extent.
 * @return {ol.Extent} Extent.
 */
_ol_extent_.createOrUpdateFromFlatCoordinates = function(flatCoordinates, offset, end, stride, opt_extent) {
  var extent = _ol_extent_.createOrUpdateEmpty(opt_extent);
  return _ol_extent_.extendFlatCoordinates(
      extent, flatCoordinates, offset, end, stride);
};


/**
 * @param {Array.<Array.<ol.Coordinate>>} rings Rings.
 * @param {ol.Extent=} opt_extent Extent.
 * @return {ol.Extent} Extent.
 */
_ol_extent_.createOrUpdateFromRings = function(rings, opt_extent) {
  var extent = _ol_extent_.createOrUpdateEmpty(opt_extent);
  return _ol_extent_.extendRings(extent, rings);
};


/**
 * Determine if two extents are equivalent.
 * @param {ol.Extent} extent1 Extent 1.
 * @param {ol.Extent} extent2 Extent 2.
 * @return {boolean} The two extents are equivalent.
 * @api
 */
_ol_extent_.equals = function(extent1, extent2) {
  return extent1[0] == extent2[0] && extent1[2] == extent2[2] &&
      extent1[1] == extent2[1] && extent1[3] == extent2[3];
};


/**
 * Modify an extent to include another extent.
 * @param {ol.Extent} extent1 The extent to be modified.
 * @param {ol.Extent} extent2 The extent that will be included in the first.
 * @return {ol.Extent} A reference to the first (extended) extent.
 * @api
 */
_ol_extent_.extend = function(extent1, extent2) {
  if (extent2[0] < extent1[0]) {
    extent1[0] = extent2[0];
  }
  if (extent2[2] > extent1[2]) {
    extent1[2] = extent2[2];
  }
  if (extent2[1] < extent1[1]) {
    extent1[1] = extent2[1];
  }
  if (extent2[3] > extent1[3]) {
    extent1[3] = extent2[3];
  }
  return extent1;
};


/**
 * @param {ol.Extent} extent Extent.
 * @param {ol.Coordinate} coordinate Coordinate.
 */
_ol_extent_.extendCoordinate = function(extent, coordinate) {
  if (coordinate[0] < extent[0]) {
    extent[0] = coordinate[0];
  }
  if (coordinate[0] > extent[2]) {
    extent[2] = coordinate[0];
  }
  if (coordinate[1] < extent[1]) {
    extent[1] = coordinate[1];
  }
  if (coordinate[1] > extent[3]) {
    extent[3] = coordinate[1];
  }
};


/**
 * @param {ol.Extent} extent Extent.
 * @param {Array.<ol.Coordinate>} coordinates Coordinates.
 * @return {ol.Extent} Extent.
 */
_ol_extent_.extendCoordinates = function(extent, coordinates) {
  var i, ii;
  for (i = 0, ii = coordinates.length; i < ii; ++i) {
    _ol_extent_.extendCoordinate(extent, coordinates[i]);
  }
  return extent;
};


/**
 * @param {ol.Extent} extent Extent.
 * @param {Array.<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @return {ol.Extent} Extent.
 */
_ol_extent_.extendFlatCoordinates = function(extent, flatCoordinates, offset, end, stride) {
  for (; offset < end; offset += stride) {
    _ol_extent_.extendXY(
        extent, flatCoordinates[offset], flatCoordinates[offset + 1]);
  }
  return extent;
};


/**
 * @param {ol.Extent} extent Extent.
 * @param {Array.<Array.<ol.Coordinate>>} rings Rings.
 * @return {ol.Extent} Extent.
 */
_ol_extent_.extendRings = function(extent, rings) {
  var i, ii;
  for (i = 0, ii = rings.length; i < ii; ++i) {
    _ol_extent_.extendCoordinates(extent, rings[i]);
  }
  return extent;
};


/**
 * @param {ol.Extent} extent Extent.
 * @param {number} x X.
 * @param {number} y Y.
 */
_ol_extent_.extendXY = function(extent, x, y) {
  extent[0] = Math.min(extent[0], x);
  extent[1] = Math.min(extent[1], y);
  extent[2] = Math.max(extent[2], x);
  extent[3] = Math.max(extent[3], y);
};


/**
 * This function calls `callback` for each corner of the extent. If the
 * callback returns a truthy value the function returns that value
 * immediately. Otherwise the function returns `false`.
 * @param {ol.Extent} extent Extent.
 * @param {function(this:T, ol.Coordinate): S} callback Callback.
 * @param {T=} opt_this Value to use as `this` when executing `callback`.
 * @return {S|boolean} Value.
 * @template S, T
 */
_ol_extent_.forEachCorner = function(extent, callback, opt_this) {
  var val;
  val = callback.call(opt_this, _ol_extent_.getBottomLeft(extent));
  if (val) {
    return val;
  }
  val = callback.call(opt_this, _ol_extent_.getBottomRight(extent));
  if (val) {
    return val;
  }
  val = callback.call(opt_this, _ol_extent_.getTopRight(extent));
  if (val) {
    return val;
  }
  val = callback.call(opt_this, _ol_extent_.getTopLeft(extent));
  if (val) {
    return val;
  }
  return false;
};


/**
 * Get the size of an extent.
 * @param {ol.Extent} extent Extent.
 * @return {number} Area.
 * @api
 */
_ol_extent_.getArea = function(extent) {
  var area = 0;
  if (!_ol_extent_.isEmpty(extent)) {
    area = _ol_extent_.getWidth(extent) * _ol_extent_.getHeight(extent);
  }
  return area;
};


/**
 * Get the bottom left coordinate of an extent.
 * @param {ol.Extent} extent Extent.
 * @return {ol.Coordinate} Bottom left coordinate.
 * @api
 */
_ol_extent_.getBottomLeft = function(extent) {
  return [extent[0], extent[1]];
};


/**
 * Get the bottom right coordinate of an extent.
 * @param {ol.Extent} extent Extent.
 * @return {ol.Coordinate} Bottom right coordinate.
 * @api
 */
_ol_extent_.getBottomRight = function(extent) {
  return [extent[2], extent[1]];
};


/**
 * Get the center coordinate of an extent.
 * @param {ol.Extent} extent Extent.
 * @return {ol.Coordinate} Center.
 * @api
 */
_ol_extent_.getCenter = function(extent) {
  return [(extent[0] + extent[2]) / 2, (extent[1] + extent[3]) / 2];
};


/**
 * Get a corner coordinate of an extent.
 * @param {ol.Extent} extent Extent.
 * @param {ol.extent.Corner} corner Corner.
 * @return {ol.Coordinate} Corner coordinate.
 */
_ol_extent_.getCorner = function(extent, corner) {
  var coordinate;
  if (corner === __WEBPACK_IMPORTED_MODULE_1__extent_corner_js__["a" /* default */].BOTTOM_LEFT) {
    coordinate = _ol_extent_.getBottomLeft(extent);
  } else if (corner === __WEBPACK_IMPORTED_MODULE_1__extent_corner_js__["a" /* default */].BOTTOM_RIGHT) {
    coordinate = _ol_extent_.getBottomRight(extent);
  } else if (corner === __WEBPACK_IMPORTED_MODULE_1__extent_corner_js__["a" /* default */].TOP_LEFT) {
    coordinate = _ol_extent_.getTopLeft(extent);
  } else if (corner === __WEBPACK_IMPORTED_MODULE_1__extent_corner_js__["a" /* default */].TOP_RIGHT) {
    coordinate = _ol_extent_.getTopRight(extent);
  } else {
    __WEBPACK_IMPORTED_MODULE_0__asserts_js__["a" /* default */].assert(false, 13); // Invalid corner
  }
  return /** @type {!ol.Coordinate} */ (coordinate);
};


/**
 * @param {ol.Extent} extent1 Extent 1.
 * @param {ol.Extent} extent2 Extent 2.
 * @return {number} Enlarged area.
 */
_ol_extent_.getEnlargedArea = function(extent1, extent2) {
  var minX = Math.min(extent1[0], extent2[0]);
  var minY = Math.min(extent1[1], extent2[1]);
  var maxX = Math.max(extent1[2], extent2[2]);
  var maxY = Math.max(extent1[3], extent2[3]);
  return (maxX - minX) * (maxY - minY);
};


/**
 * @param {ol.Coordinate} center Center.
 * @param {number} resolution Resolution.
 * @param {number} rotation Rotation.
 * @param {ol.Size} size Size.
 * @param {ol.Extent=} opt_extent Destination extent.
 * @return {ol.Extent} Extent.
 */
_ol_extent_.getForViewAndSize = function(center, resolution, rotation, size, opt_extent) {
  var dx = resolution * size[0] / 2;
  var dy = resolution * size[1] / 2;
  var cosRotation = Math.cos(rotation);
  var sinRotation = Math.sin(rotation);
  var xCos = dx * cosRotation;
  var xSin = dx * sinRotation;
  var yCos = dy * cosRotation;
  var ySin = dy * sinRotation;
  var x = center[0];
  var y = center[1];
  var x0 = x - xCos + ySin;
  var x1 = x - xCos - ySin;
  var x2 = x + xCos - ySin;
  var x3 = x + xCos + ySin;
  var y0 = y - xSin - yCos;
  var y1 = y - xSin + yCos;
  var y2 = y + xSin + yCos;
  var y3 = y + xSin - yCos;
  return _ol_extent_.createOrUpdate(
      Math.min(x0, x1, x2, x3), Math.min(y0, y1, y2, y3),
      Math.max(x0, x1, x2, x3), Math.max(y0, y1, y2, y3),
      opt_extent);
};


/**
 * Get the height of an extent.
 * @param {ol.Extent} extent Extent.
 * @return {number} Height.
 * @api
 */
_ol_extent_.getHeight = function(extent) {
  return extent[3] - extent[1];
};


/**
 * @param {ol.Extent} extent1 Extent 1.
 * @param {ol.Extent} extent2 Extent 2.
 * @return {number} Intersection area.
 */
_ol_extent_.getIntersectionArea = function(extent1, extent2) {
  var intersection = _ol_extent_.getIntersection(extent1, extent2);
  return _ol_extent_.getArea(intersection);
};


/**
 * Get the intersection of two extents.
 * @param {ol.Extent} extent1 Extent 1.
 * @param {ol.Extent} extent2 Extent 2.
 * @param {ol.Extent=} opt_extent Optional extent to populate with intersection.
 * @return {ol.Extent} Intersecting extent.
 * @api
 */
_ol_extent_.getIntersection = function(extent1, extent2, opt_extent) {
  var intersection = opt_extent ? opt_extent : _ol_extent_.createEmpty();
  if (_ol_extent_.intersects(extent1, extent2)) {
    if (extent1[0] > extent2[0]) {
      intersection[0] = extent1[0];
    } else {
      intersection[0] = extent2[0];
    }
    if (extent1[1] > extent2[1]) {
      intersection[1] = extent1[1];
    } else {
      intersection[1] = extent2[1];
    }
    if (extent1[2] < extent2[2]) {
      intersection[2] = extent1[2];
    } else {
      intersection[2] = extent2[2];
    }
    if (extent1[3] < extent2[3]) {
      intersection[3] = extent1[3];
    } else {
      intersection[3] = extent2[3];
    }
  }
  return intersection;
};


/**
 * @param {ol.Extent} extent Extent.
 * @return {number} Margin.
 */
_ol_extent_.getMargin = function(extent) {
  return _ol_extent_.getWidth(extent) + _ol_extent_.getHeight(extent);
};


/**
 * Get the size (width, height) of an extent.
 * @param {ol.Extent} extent The extent.
 * @return {ol.Size} The extent size.
 * @api
 */
_ol_extent_.getSize = function(extent) {
  return [extent[2] - extent[0], extent[3] - extent[1]];
};


/**
 * Get the top left coordinate of an extent.
 * @param {ol.Extent} extent Extent.
 * @return {ol.Coordinate} Top left coordinate.
 * @api
 */
_ol_extent_.getTopLeft = function(extent) {
  return [extent[0], extent[3]];
};


/**
 * Get the top right coordinate of an extent.
 * @param {ol.Extent} extent Extent.
 * @return {ol.Coordinate} Top right coordinate.
 * @api
 */
_ol_extent_.getTopRight = function(extent) {
  return [extent[2], extent[3]];
};


/**
 * Get the width of an extent.
 * @param {ol.Extent} extent Extent.
 * @return {number} Width.
 * @api
 */
_ol_extent_.getWidth = function(extent) {
  return extent[2] - extent[0];
};


/**
 * Determine if one extent intersects another.
 * @param {ol.Extent} extent1 Extent 1.
 * @param {ol.Extent} extent2 Extent.
 * @return {boolean} The two extents intersect.
 * @api
 */
_ol_extent_.intersects = function(extent1, extent2) {
  return extent1[0] <= extent2[2] &&
      extent1[2] >= extent2[0] &&
      extent1[1] <= extent2[3] &&
      extent1[3] >= extent2[1];
};


/**
 * Determine if an extent is empty.
 * @param {ol.Extent} extent Extent.
 * @return {boolean} Is empty.
 * @api
 */
_ol_extent_.isEmpty = function(extent) {
  return extent[2] < extent[0] || extent[3] < extent[1];
};


/**
 * @param {ol.Extent} extent Extent.
 * @param {ol.Extent=} opt_extent Extent.
 * @return {ol.Extent} Extent.
 */
_ol_extent_.returnOrUpdate = function(extent, opt_extent) {
  if (opt_extent) {
    opt_extent[0] = extent[0];
    opt_extent[1] = extent[1];
    opt_extent[2] = extent[2];
    opt_extent[3] = extent[3];
    return opt_extent;
  } else {
    return extent;
  }
};


/**
 * @param {ol.Extent} extent Extent.
 * @param {number} value Value.
 */
_ol_extent_.scaleFromCenter = function(extent, value) {
  var deltaX = ((extent[2] - extent[0]) / 2) * (value - 1);
  var deltaY = ((extent[3] - extent[1]) / 2) * (value - 1);
  extent[0] -= deltaX;
  extent[2] += deltaX;
  extent[1] -= deltaY;
  extent[3] += deltaY;
};


/**
 * Determine if the segment between two coordinates intersects (crosses,
 * touches, or is contained by) the provided extent.
 * @param {ol.Extent} extent The extent.
 * @param {ol.Coordinate} start Segment start coordinate.
 * @param {ol.Coordinate} end Segment end coordinate.
 * @return {boolean} The segment intersects the extent.
 */
_ol_extent_.intersectsSegment = function(extent, start, end) {
  var intersects = false;
  var startRel = _ol_extent_.coordinateRelationship(extent, start);
  var endRel = _ol_extent_.coordinateRelationship(extent, end);
  if (startRel === __WEBPACK_IMPORTED_MODULE_2__extent_relationship_js__["a" /* default */].INTERSECTING ||
      endRel === __WEBPACK_IMPORTED_MODULE_2__extent_relationship_js__["a" /* default */].INTERSECTING) {
    intersects = true;
  } else {
    var minX = extent[0];
    var minY = extent[1];
    var maxX = extent[2];
    var maxY = extent[3];
    var startX = start[0];
    var startY = start[1];
    var endX = end[0];
    var endY = end[1];
    var slope = (endY - startY) / (endX - startX);
    var x, y;
    if (!!(endRel & __WEBPACK_IMPORTED_MODULE_2__extent_relationship_js__["a" /* default */].ABOVE) &&
        !(startRel & __WEBPACK_IMPORTED_MODULE_2__extent_relationship_js__["a" /* default */].ABOVE)) {
      // potentially intersects top
      x = endX - ((endY - maxY) / slope);
      intersects = x >= minX && x <= maxX;
    }
    if (!intersects && !!(endRel & __WEBPACK_IMPORTED_MODULE_2__extent_relationship_js__["a" /* default */].RIGHT) &&
        !(startRel & __WEBPACK_IMPORTED_MODULE_2__extent_relationship_js__["a" /* default */].RIGHT)) {
      // potentially intersects right
      y = endY - ((endX - maxX) * slope);
      intersects = y >= minY && y <= maxY;
    }
    if (!intersects && !!(endRel & __WEBPACK_IMPORTED_MODULE_2__extent_relationship_js__["a" /* default */].BELOW) &&
        !(startRel & __WEBPACK_IMPORTED_MODULE_2__extent_relationship_js__["a" /* default */].BELOW)) {
      // potentially intersects bottom
      x = endX - ((endY - minY) / slope);
      intersects = x >= minX && x <= maxX;
    }
    if (!intersects && !!(endRel & __WEBPACK_IMPORTED_MODULE_2__extent_relationship_js__["a" /* default */].LEFT) &&
        !(startRel & __WEBPACK_IMPORTED_MODULE_2__extent_relationship_js__["a" /* default */].LEFT)) {
      // potentially intersects left
      y = endY - ((endX - minX) * slope);
      intersects = y >= minY && y <= maxY;
    }

  }
  return intersects;
};


/**
 * Apply a transform function to the extent.
 * @param {ol.Extent} extent Extent.
 * @param {ol.TransformFunction} transformFn Transform function.  Called with
 * [minX, minY, maxX, maxY] extent coordinates.
 * @param {ol.Extent=} opt_extent Destination extent.
 * @return {ol.Extent} Extent.
 * @api
 */
_ol_extent_.applyTransform = function(extent, transformFn, opt_extent) {
  var coordinates = [
    extent[0], extent[1],
    extent[0], extent[3],
    extent[2], extent[1],
    extent[2], extent[3]
  ];
  transformFn(coordinates, coordinates, 2);
  var xs = [coordinates[0], coordinates[2], coordinates[4], coordinates[6]];
  var ys = [coordinates[1], coordinates[3], coordinates[5], coordinates[7]];
  return _ol_extent_.boundingExtentXYs_(xs, ys, opt_extent);
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_extent_);


/***/ }),
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = interpolatePoint;
/* harmony export (immutable) */ __webpack_exports__["b"] = lineStringCoordinateAtM;
/* harmony export (immutable) */ __webpack_exports__["c"] = lineStringsCoordinateAtM;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(4);
/**
 * @module ol/geom/flat/interpolate
 */




/**
 * @param {Array.<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} fraction Fraction.
 * @param {Array.<number>=} opt_dest Destination.
 * @return {Array.<number>} Destination.
 */
function interpolatePoint(flatCoordinates, offset, end, stride, fraction, opt_dest) {
  let pointX = NaN;
  let pointY = NaN;
  const n = (end - offset) / stride;
  if (n === 1) {
    pointX = flatCoordinates[offset];
    pointY = flatCoordinates[offset + 1];
  } else if (n == 2) {
    pointX = (1 - fraction) * flatCoordinates[offset] +
        fraction * flatCoordinates[offset + stride];
    pointY = (1 - fraction) * flatCoordinates[offset + 1] +
        fraction * flatCoordinates[offset + stride + 1];
  } else if (n !== 0) {
    let x1 = flatCoordinates[offset];
    let y1 = flatCoordinates[offset + 1];
    let length = 0;
    const cumulativeLengths = [0];
    for (let i = offset + stride; i < end; i += stride) {
      const x2 = flatCoordinates[i];
      const y2 = flatCoordinates[i + 1];
      length += Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
      cumulativeLengths.push(length);
      x1 = x2;
      y1 = y2;
    }
    const target = fraction * length;
    const index = Object(__WEBPACK_IMPORTED_MODULE_0__array_js__["a" /* binarySearch */])(cumulativeLengths, target);
    if (index < 0) {
      const t = (target - cumulativeLengths[-index - 2]) /
          (cumulativeLengths[-index - 1] - cumulativeLengths[-index - 2]);
      const o = offset + (-index - 2) * stride;
      pointX = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* lerp */])(
        flatCoordinates[o], flatCoordinates[o + stride], t);
      pointY = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* lerp */])(
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
}


/**
 * @param {Array.<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} m M.
 * @param {boolean} extrapolate Extrapolate.
 * @return {ol.Coordinate} Coordinate.
 */
function lineStringCoordinateAtM(flatCoordinates, offset, end, stride, m, extrapolate) {
  if (end == offset) {
    return null;
  }
  let coordinate;
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
  let lo = offset / stride;
  let hi = end / stride;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (m < flatCoordinates[(mid + 1) * stride - 1]) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }
  const m0 = flatCoordinates[lo * stride - 1];
  if (m == m0) {
    return flatCoordinates.slice((lo - 1) * stride, (lo - 1) * stride + stride);
  }
  const m1 = flatCoordinates[(lo + 1) * stride - 1];
  const t = (m - m0) / (m1 - m0);
  coordinate = [];
  for (let i = 0; i < stride - 1; ++i) {
    coordinate.push(Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* lerp */])(flatCoordinates[(lo - 1) * stride + i],
      flatCoordinates[lo * stride + i], t));
  }
  coordinate.push(m);
  return coordinate;
}


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
function lineStringsCoordinateAtM(
  flatCoordinates, offset, ends, stride, m, extrapolate, interpolate) {
  if (interpolate) {
    return lineStringCoordinateAtM(
      flatCoordinates, offset, ends[ends.length - 1], stride, m, extrapolate);
  }
  let coordinate;
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
  for (let i = 0, ii = ends.length; i < ii; ++i) {
    const end = ends[i];
    if (offset == end) {
      continue;
    }
    if (m < flatCoordinates[offset + stride - 1]) {
      return null;
    } else if (m <= flatCoordinates[end - 1]) {
      return lineStringCoordinateAtM(
        flatCoordinates, offset, end, stride, m, false);
    }
    offset = end;
  }
  return null;
}


/***/ }),
/* 101 */,
/* 102 */,
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * The geometry type. One of `'Point'`, `'LineString'`, `'LinearRing'`,
 * `'Polygon'`, `'MultiPoint'`, `'MultiLineString'`, `'MultiPolygon'`,
 * `'GeometryCollection'`, `'Circle'`.
 * @enum {string}
 */
var _ol_geom_GeometryType_ = {
  POINT: 'Point',
  LINE_STRING: 'LineString',
  LINEAR_RING: 'LinearRing',
  POLYGON: 'Polygon',
  MULTI_POINT: 'MultiPoint',
  MULTI_LINE_STRING: 'MultiLineString',
  MULTI_POLYGON: 'MultiPolygon',
  GEOMETRY_COLLECTION: 'GeometryCollection',
  CIRCLE: 'Circle'
};

/* harmony default export */ __webpack_exports__["a"] = (_ol_geom_GeometryType_);


/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _ol_dom_ = {};


/**
 * Create an html canvas element and returns its 2d context.
 * @param {number=} opt_width Canvas width.
 * @param {number=} opt_height Canvas height.
 * @return {CanvasRenderingContext2D} The context.
 */
_ol_dom_.createCanvasContext2D = function(opt_width, opt_height) {
  var canvas = document.createElement('CANVAS');
  if (opt_width) {
    canvas.width = opt_width;
  }
  if (opt_height) {
    canvas.height = opt_height;
  }
  return canvas.getContext('2d');
};


/**
 * Get the current computed width for the given element including margin,
 * padding and border.
 * Equivalent to jQuery's `$(el).outerWidth(true)`.
 * @param {!Element} element Element.
 * @return {number} The width.
 */
_ol_dom_.outerWidth = function(element) {
  var width = element.offsetWidth;
  var style = getComputedStyle(element);
  width += parseInt(style.marginLeft, 10) + parseInt(style.marginRight, 10);

  return width;
};


/**
 * Get the current computed height for the given element including margin,
 * padding and border.
 * Equivalent to jQuery's `$(el).outerHeight(true)`.
 * @param {!Element} element Element.
 * @return {number} The height.
 */
_ol_dom_.outerHeight = function(element) {
  var height = element.offsetHeight;
  var style = getComputedStyle(element);
  height += parseInt(style.marginTop, 10) + parseInt(style.marginBottom, 10);

  return height;
};

/**
 * @param {Node} newNode Node to replace old node
 * @param {Node} oldNode The node to be replaced
 */
_ol_dom_.replaceNode = function(newNode, oldNode) {
  var parent = oldNode.parentNode;
  if (parent) {
    parent.replaceChild(newNode, oldNode);
  }
};

/**
 * @param {Node} node The node to remove.
 * @returns {Node} The node that was removed or null.
 */
_ol_dom_.removeNode = function(node) {
  return node && node.parentNode ? node.parentNode.removeChild(node) : null;
};

/**
 * @param {Node} node The node to remove the children from.
 */
_ol_dom_.removeChildren = function(node) {
  while (node.lastChild) {
    node.removeChild(node.lastChild);
  }
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_dom_);


/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @enum {number}
 */
var _ol_ImageState_ = {
  IDLE: 0,
  LOADING: 1,
  LOADED: 2,
  ERROR: 3
};

/* harmony default export */ __webpack_exports__["a"] = (_ol_ImageState_);


/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__disposable_js__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_js__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__events_event_js__ = __webpack_require__(154);





/**
 * @classdesc
 * A simplified implementation of the W3C DOM Level 2 EventTarget interface.
 * @see {@link https://www.w3.org/TR/2000/REC-DOM-Level-2-Events-20001113/events.html#Events-EventTarget}
 *
 * There are two important simplifications compared to the specification:
 *
 * 1. The handling of `useCapture` in `addEventListener` and
 *    `removeEventListener`. There is no real capture model.
 * 2. The handling of `stopPropagation` and `preventDefault` on `dispatchEvent`.
 *    There is no event target hierarchy. When a listener calls
 *    `stopPropagation` or `preventDefault` on an event object, it means that no
 *    more listeners after this one will be called. Same as when the listener
 *    returns false.
 *
 * @constructor
 * @extends {ol.Disposable}
 */
var _ol_events_EventTarget_ = function() {

  __WEBPACK_IMPORTED_MODULE_1__disposable_js__["a" /* default */].call(this);

  /**
   * @private
   * @type {!Object.<string, number>}
   */
  this.pendingRemovals_ = {};

  /**
   * @private
   * @type {!Object.<string, number>}
   */
  this.dispatching_ = {};

  /**
   * @private
   * @type {!Object.<string, Array.<ol.EventsListenerFunctionType>>}
   */
  this.listeners_ = {};

};

__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_events_EventTarget_, __WEBPACK_IMPORTED_MODULE_1__disposable_js__["a" /* default */]);


/**
 * @param {string} type Type.
 * @param {ol.EventsListenerFunctionType} listener Listener.
 */
_ol_events_EventTarget_.prototype.addEventListener = function(type, listener) {
  var listeners = this.listeners_[type];
  if (!listeners) {
    listeners = this.listeners_[type] = [];
  }
  if (listeners.indexOf(listener) === -1) {
    listeners.push(listener);
  }
};


/**
 * @param {{type: string,
 *     target: (EventTarget|ol.events.EventTarget|undefined)}|ol.events.Event|
 *     string} event Event or event type.
 * @return {boolean|undefined} `false` if anyone called preventDefault on the
 *     event object or if any of the listeners returned false.
 */
_ol_events_EventTarget_.prototype.dispatchEvent = function(event) {
  var evt = typeof event === 'string' ? new __WEBPACK_IMPORTED_MODULE_3__events_event_js__["a" /* default */](event) : event;
  var type = evt.type;
  evt.target = this;
  var listeners = this.listeners_[type];
  var propagate;
  if (listeners) {
    if (!(type in this.dispatching_)) {
      this.dispatching_[type] = 0;
      this.pendingRemovals_[type] = 0;
    }
    ++this.dispatching_[type];
    for (var i = 0, ii = listeners.length; i < ii; ++i) {
      if (listeners[i].call(this, evt) === false || evt.propagationStopped) {
        propagate = false;
        break;
      }
    }
    --this.dispatching_[type];
    if (this.dispatching_[type] === 0) {
      var pendingRemovals = this.pendingRemovals_[type];
      delete this.pendingRemovals_[type];
      while (pendingRemovals--) {
        this.removeEventListener(type, __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].nullFunction);
      }
      delete this.dispatching_[type];
    }
    return propagate;
  }
};


/**
 * @inheritDoc
 */
_ol_events_EventTarget_.prototype.disposeInternal = function() {
  __WEBPACK_IMPORTED_MODULE_2__events_js__["a" /* default */].unlistenAll(this);
};


/**
 * Get the listeners for a specified event type. Listeners are returned in the
 * order that they will be called in.
 *
 * @param {string} type Type.
 * @return {Array.<ol.EventsListenerFunctionType>} Listeners.
 */
_ol_events_EventTarget_.prototype.getListeners = function(type) {
  return this.listeners_[type];
};


/**
 * @param {string=} opt_type Type. If not provided,
 *     `true` will be returned if this EventTarget has any listeners.
 * @return {boolean} Has listeners.
 */
_ol_events_EventTarget_.prototype.hasListener = function(opt_type) {
  return opt_type ?
    opt_type in this.listeners_ :
    Object.keys(this.listeners_).length > 0;
};


/**
 * @param {string} type Type.
 * @param {ol.EventsListenerFunctionType} listener Listener.
 */
_ol_events_EventTarget_.prototype.removeEventListener = function(type, listener) {
  var listeners = this.listeners_[type];
  if (listeners) {
    var index = listeners.indexOf(listener);
    if (type in this.pendingRemovals_) {
      // make listener a no-op, and remove later in #dispatchEvent()
      listeners[index] = __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].nullFunction;
      ++this.pendingRemovals_[type];
    } else {
      listeners.splice(index, 1);
      if (listeners.length === 0) {
        delete this.listeners_[type];
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_events_EventTarget_);


/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color_js__ = __webpack_require__(81);



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


/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__proj_units_js__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__proj_proj4_js__ = __webpack_require__(161);




/**
 * @classdesc
 * Projection definition class. One of these is created for each projection
 * supported in the application and stored in the {@link ol.proj} namespace.
 * You can use these in applications, but this is not required, as API params
 * and options use {@link ol.ProjectionLike} which means the simple string
 * code will suffice.
 *
 * You can use {@link ol.proj.get} to retrieve the object for a particular
 * projection.
 *
 * The library includes definitions for `EPSG:4326` and `EPSG:3857`, together
 * with the following aliases:
 * * `EPSG:4326`: CRS:84, urn:ogc:def:crs:EPSG:6.6:4326,
 *     urn:ogc:def:crs:OGC:1.3:CRS84, urn:ogc:def:crs:OGC:2:84,
 *     http://www.opengis.net/gml/srs/epsg.xml#4326,
 *     urn:x-ogc:def:crs:EPSG:4326
 * * `EPSG:3857`: EPSG:102100, EPSG:102113, EPSG:900913,
 *     urn:ogc:def:crs:EPSG:6.18:3:3857,
 *     http://www.opengis.net/gml/srs/epsg.xml#3857
 *
 * If you use proj4js, aliases can be added using `proj4.defs()`; see
 * [documentation](https://github.com/proj4js/proj4js). To set an alternative
 * namespace for proj4, use {@link ol.proj.setProj4}.
 *
 * @constructor
 * @param {olx.ProjectionOptions} options Projection options.
 * @struct
 * @api
 */
var _ol_proj_Projection_ = function(options) {
  /**
   * @private
   * @type {string}
   */
  this.code_ = options.code;

  /**
   * Units of projected coordinates. When set to `ol.proj.Units.TILE_PIXELS`, a
   * `this.extent_` and `this.worldExtent_` must be configured properly for each
   * tile.
   * @private
   * @type {ol.proj.Units}
   */
  this.units_ = /** @type {ol.proj.Units} */ (options.units);

  /**
   * Validity extent of the projection in projected coordinates. For projections
   * with `ol.proj.Units.TILE_PIXELS` units, this is the extent of the tile in
   * tile pixel space.
   * @private
   * @type {ol.Extent}
   */
  this.extent_ = options.extent !== undefined ? options.extent : null;

  /**
   * Extent of the world in EPSG:4326. For projections with
   * `ol.proj.Units.TILE_PIXELS` units, this is the extent of the tile in
   * projected coordinate space.
   * @private
   * @type {ol.Extent}
   */
  this.worldExtent_ = options.worldExtent !== undefined ?
    options.worldExtent : null;

  /**
   * @private
   * @type {string}
   */
  this.axisOrientation_ = options.axisOrientation !== undefined ?
    options.axisOrientation : 'enu';

  /**
   * @private
   * @type {boolean}
   */
  this.global_ = options.global !== undefined ? options.global : false;

  /**
   * @private
   * @type {boolean}
   */
  this.canWrapX_ = !!(this.global_ && this.extent_);

  /**
   * @private
   * @type {function(number, ol.Coordinate):number|undefined}
   */
  this.getPointResolutionFunc_ = options.getPointResolution;

  /**
   * @private
   * @type {ol.tilegrid.TileGrid}
   */
  this.defaultTileGrid_ = null;

  /**
   * @private
   * @type {number|undefined}
   */
  this.metersPerUnit_ = options.metersPerUnit;

  var code = options.code;
  if (__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].ENABLE_PROJ4JS) {
    var proj4js = __WEBPACK_IMPORTED_MODULE_2__proj_proj4_js__["a" /* default */].get();
    if (typeof proj4js == 'function') {
      var def = proj4js.defs(code);
      if (def !== undefined) {
        if (def.axis !== undefined && options.axisOrientation === undefined) {
          this.axisOrientation_ = def.axis;
        }
        if (options.metersPerUnit === undefined) {
          this.metersPerUnit_ = def.to_meter;
        }
        if (options.units === undefined) {
          this.units_ = def.units;
        }
      }
    }
  }
};


/**
 * @return {boolean} The projection is suitable for wrapping the x-axis
 */
_ol_proj_Projection_.prototype.canWrapX = function() {
  return this.canWrapX_;
};


/**
 * Get the code for this projection, e.g. 'EPSG:4326'.
 * @return {string} Code.
 * @api
 */
_ol_proj_Projection_.prototype.getCode = function() {
  return this.code_;
};


/**
 * Get the validity extent for this projection.
 * @return {ol.Extent} Extent.
 * @api
 */
_ol_proj_Projection_.prototype.getExtent = function() {
  return this.extent_;
};


/**
 * Get the units of this projection.
 * @return {ol.proj.Units} Units.
 * @api
 */
_ol_proj_Projection_.prototype.getUnits = function() {
  return this.units_;
};


/**
 * Get the amount of meters per unit of this projection.  If the projection is
 * not configured with `metersPerUnit` or a units identifier, the return is
 * `undefined`.
 * @return {number|undefined} Meters.
 * @api
 */
_ol_proj_Projection_.prototype.getMetersPerUnit = function() {
  return this.metersPerUnit_ || __WEBPACK_IMPORTED_MODULE_1__proj_units_js__["a" /* default */].METERS_PER_UNIT[this.units_];
};


/**
 * Get the world extent for this projection.
 * @return {ol.Extent} Extent.
 * @api
 */
_ol_proj_Projection_.prototype.getWorldExtent = function() {
  return this.worldExtent_;
};


/**
 * Get the axis orientation of this projection.
 * Example values are:
 * enu - the default easting, northing, elevation.
 * neu - northing, easting, up - useful for "lat/long" geographic coordinates,
 *     or south orientated transverse mercator.
 * wnu - westing, northing, up - some planetary coordinate systems have
 *     "west positive" coordinate systems
 * @return {string} Axis orientation.
 * @api
 */
_ol_proj_Projection_.prototype.getAxisOrientation = function() {
  return this.axisOrientation_;
};


/**
 * Is this projection a global projection which spans the whole world?
 * @return {boolean} Whether the projection is global.
 * @api
 */
_ol_proj_Projection_.prototype.isGlobal = function() {
  return this.global_;
};


/**
* Set if the projection is a global projection which spans the whole world
* @param {boolean} global Whether the projection is global.
* @api
*/
_ol_proj_Projection_.prototype.setGlobal = function(global) {
  this.global_ = global;
  this.canWrapX_ = !!(global && this.extent_);
};


/**
 * @return {ol.tilegrid.TileGrid} The default tile grid.
 */
_ol_proj_Projection_.prototype.getDefaultTileGrid = function() {
  return this.defaultTileGrid_;
};


/**
 * @param {ol.tilegrid.TileGrid} tileGrid The default tile grid.
 */
_ol_proj_Projection_.prototype.setDefaultTileGrid = function(tileGrid) {
  this.defaultTileGrid_ = tileGrid;
};


/**
 * Set the validity extent for this projection.
 * @param {ol.Extent} extent Extent.
 * @api
 */
_ol_proj_Projection_.prototype.setExtent = function(extent) {
  this.extent_ = extent;
  this.canWrapX_ = !!(this.global_ && extent);
};


/**
 * Set the world extent for this projection.
 * @param {ol.Extent} worldExtent World extent
 *     [minlon, minlat, maxlon, maxlat].
 * @api
 */
_ol_proj_Projection_.prototype.setWorldExtent = function(worldExtent) {
  this.worldExtent_ = worldExtent;
};


/**
 * Set the getPointResolution function (see {@link ol.proj#getPointResolution}
 * for this projection.
 * @param {function(number, ol.Coordinate):number} func Function
 * @api
 */
_ol_proj_Projection_.prototype.setGetPointResolution = function(func) {
  this.getPointResolutionFunc_ = func;
};


/**
 * Get the custom point resolution function for this projection (if set).
 * @return {function(number, ol.Coordinate):number|undefined} The custom point
 * resolution function (if set).
 */
_ol_proj_Projection_.prototype.getPointResolutionFunc = function() {
  return this.getPointResolutionFunc_;
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_proj_Projection_);


/***/ }),
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @module ol/format/FormatType
 */

/**
 * @enum {string}
 */
/* harmony default export */ __webpack_exports__["a"] = ({
  ARRAY_BUFFER: 'arraybuffer',
  JSON: 'json',
  TEXT: 'text',
  XML: 'xml'
});


/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__extent_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__geom_GeometryLayout_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__geom_GeometryType_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__geom_SimpleGeometry_js__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__geom_flat_closest_js__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__geom_flat_deflate_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__geom_flat_inflate_js__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__geom_flat_interpolate_js__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__geom_flat_intersectsextent_js__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__geom_flat_length_js__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__geom_flat_segments_js__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__geom_flat_simplify_js__ = __webpack_require__(44);
/**
 * @module ol/geom/LineString
 */















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
const LineString = function(coordinates, opt_layout) {

  __WEBPACK_IMPORTED_MODULE_5__geom_SimpleGeometry_js__["a" /* default */].call(this);

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

Object(__WEBPACK_IMPORTED_MODULE_0__index_js__["g" /* inherits */])(LineString, __WEBPACK_IMPORTED_MODULE_5__geom_SimpleGeometry_js__["a" /* default */]);


/**
 * Append the passed coordinate to the coordinates of the linestring.
 * @param {ol.Coordinate} coordinate Coordinate.
 * @api
 */
LineString.prototype.appendCoordinate = function(coordinate) {
  if (!this.flatCoordinates) {
    this.flatCoordinates = coordinate.slice();
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_1__array_js__["c" /* extend */])(this.flatCoordinates, coordinate);
  }
  this.changed();
};


/**
 * Make a complete copy of the geometry.
 * @return {!ol.geom.LineString} Clone.
 * @override
 * @api
 */
LineString.prototype.clone = function() {
  const lineString = new LineString(null);
  lineString.setFlatCoordinates(this.layout, this.flatCoordinates.slice());
  return lineString;
};


/**
 * @inheritDoc
 */
LineString.prototype.closestPointXY = function(x, y, closestPoint, minSquaredDistance) {
  if (minSquaredDistance < Object(__WEBPACK_IMPORTED_MODULE_2__extent_js__["e" /* closestSquaredDistanceXY */])(this.getExtent(), x, y)) {
    return minSquaredDistance;
  }
  if (this.maxDeltaRevision_ != this.getRevision()) {
    this.maxDelta_ = Math.sqrt(Object(__WEBPACK_IMPORTED_MODULE_6__geom_flat_closest_js__["e" /* maxSquaredDelta */])(
      this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, 0));
    this.maxDeltaRevision_ = this.getRevision();
  }
  return Object(__WEBPACK_IMPORTED_MODULE_6__geom_flat_closest_js__["d" /* assignClosestPoint */])(
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
 * @return {T|boolean} Value.
 * @template T,S
 * @api
 */
LineString.prototype.forEachSegment = function(callback) {
  return Object(__WEBPACK_IMPORTED_MODULE_12__geom_flat_segments_js__["a" /* forEach */])(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, callback);
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
LineString.prototype.getCoordinateAtM = function(m, opt_extrapolate) {
  if (this.layout != __WEBPACK_IMPORTED_MODULE_3__geom_GeometryLayout_js__["a" /* default */].XYM &&
      this.layout != __WEBPACK_IMPORTED_MODULE_3__geom_GeometryLayout_js__["a" /* default */].XYZM) {
    return null;
  }
  const extrapolate = opt_extrapolate !== undefined ? opt_extrapolate : false;
  return Object(__WEBPACK_IMPORTED_MODULE_9__geom_flat_interpolate_js__["b" /* lineStringCoordinateAtM */])(this.flatCoordinates, 0,
    this.flatCoordinates.length, this.stride, m, extrapolate);
};


/**
 * Return the coordinates of the linestring.
 * @return {Array.<ol.Coordinate>} Coordinates.
 * @override
 * @api
 */
LineString.prototype.getCoordinates = function() {
  return Object(__WEBPACK_IMPORTED_MODULE_8__geom_flat_inflate_js__["a" /* inflateCoordinates */])(
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
LineString.prototype.getCoordinateAt = function(fraction, opt_dest) {
  return Object(__WEBPACK_IMPORTED_MODULE_9__geom_flat_interpolate_js__["a" /* interpolatePoint */])(
    this.flatCoordinates, 0, this.flatCoordinates.length, this.stride,
    fraction, opt_dest);
};


/**
 * Return the length of the linestring on projected plane.
 * @return {number} Length (on projected plane).
 * @api
 */
LineString.prototype.getLength = function() {
  return Object(__WEBPACK_IMPORTED_MODULE_11__geom_flat_length_js__["a" /* lineStringLength */])(
    this.flatCoordinates, 0, this.flatCoordinates.length, this.stride);
};


/**
 * @return {Array.<number>} Flat midpoint.
 */
LineString.prototype.getFlatMidpoint = function() {
  if (this.flatMidpointRevision_ != this.getRevision()) {
    this.flatMidpoint_ = this.getCoordinateAt(0.5, this.flatMidpoint_);
    this.flatMidpointRevision_ = this.getRevision();
  }
  return this.flatMidpoint_;
};


/**
 * @inheritDoc
 */
LineString.prototype.getSimplifiedGeometryInternal = function(squaredTolerance) {
  const simplifiedFlatCoordinates = [];
  simplifiedFlatCoordinates.length = Object(__WEBPACK_IMPORTED_MODULE_13__geom_flat_simplify_js__["a" /* douglasPeucker */])(
    this.flatCoordinates, 0, this.flatCoordinates.length, this.stride,
    squaredTolerance, simplifiedFlatCoordinates, 0);
  const simplifiedLineString = new LineString(null);
  simplifiedLineString.setFlatCoordinates(
    __WEBPACK_IMPORTED_MODULE_3__geom_GeometryLayout_js__["a" /* default */].XY, simplifiedFlatCoordinates);
  return simplifiedLineString;
};


/**
 * @inheritDoc
 * @api
 */
LineString.prototype.getType = function() {
  return __WEBPACK_IMPORTED_MODULE_4__geom_GeometryType_js__["a" /* default */].LINE_STRING;
};


/**
 * @inheritDoc
 * @api
 */
LineString.prototype.intersectsExtent = function(extent) {
  return Object(__WEBPACK_IMPORTED_MODULE_10__geom_flat_intersectsextent_js__["a" /* intersectsLineString */])(
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
LineString.prototype.setCoordinates = function(coordinates, opt_layout) {
  if (!coordinates) {
    this.setFlatCoordinates(__WEBPACK_IMPORTED_MODULE_3__geom_GeometryLayout_js__["a" /* default */].XY, null);
  } else {
    this.setLayout(opt_layout, coordinates, 1);
    if (!this.flatCoordinates) {
      this.flatCoordinates = [];
    }
    this.flatCoordinates.length = Object(__WEBPACK_IMPORTED_MODULE_7__geom_flat_deflate_js__["b" /* deflateCoordinates */])(
      this.flatCoordinates, 0, coordinates, this.stride);
    this.changed();
  }
};


/**
 * @param {ol.geom.GeometryLayout} layout Layout.
 * @param {Array.<number>} flatCoordinates Flat coordinates.
 */
LineString.prototype.setFlatCoordinates = function(layout, flatCoordinates) {
  this.setFlatCoordinatesInternal(layout, flatCoordinates);
  this.changed();
};
/* harmony default export */ __webpack_exports__["a"] = (LineString);


/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__extent_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__geom_GeometryLayout_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__geom_GeometryType_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__geom_Point_js__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__geom_SimpleGeometry_js__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__geom_flat_deflate_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__geom_flat_inflate_js__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__math_js__ = __webpack_require__(4);
/**
 * @module ol/geom/MultiPoint
 */











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
const MultiPoint = function(coordinates, opt_layout) {
  __WEBPACK_IMPORTED_MODULE_6__geom_SimpleGeometry_js__["a" /* default */].call(this);
  this.setCoordinates(coordinates, opt_layout);
};

Object(__WEBPACK_IMPORTED_MODULE_0__index_js__["g" /* inherits */])(MultiPoint, __WEBPACK_IMPORTED_MODULE_6__geom_SimpleGeometry_js__["a" /* default */]);


/**
 * Append the passed point to this multipoint.
 * @param {ol.geom.Point} point Point.
 * @api
 */
MultiPoint.prototype.appendPoint = function(point) {
  if (!this.flatCoordinates) {
    this.flatCoordinates = point.getFlatCoordinates().slice();
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_1__array_js__["c" /* extend */])(this.flatCoordinates, point.getFlatCoordinates());
  }
  this.changed();
};


/**
 * Make a complete copy of the geometry.
 * @return {!ol.geom.MultiPoint} Clone.
 * @override
 * @api
 */
MultiPoint.prototype.clone = function() {
  const multiPoint = new MultiPoint(null);
  multiPoint.setFlatCoordinates(this.layout, this.flatCoordinates.slice());
  return multiPoint;
};


/**
 * @inheritDoc
 */
MultiPoint.prototype.closestPointXY = function(x, y, closestPoint, minSquaredDistance) {
  if (minSquaredDistance < Object(__WEBPACK_IMPORTED_MODULE_2__extent_js__["e" /* closestSquaredDistanceXY */])(this.getExtent(), x, y)) {
    return minSquaredDistance;
  }
  const flatCoordinates = this.flatCoordinates;
  const stride = this.stride;
  for (let i = 0, ii = flatCoordinates.length; i < ii; i += stride) {
    const squaredDistance = Object(__WEBPACK_IMPORTED_MODULE_9__math_js__["g" /* squaredDistance */])(
      x, y, flatCoordinates[i], flatCoordinates[i + 1]);
    if (squaredDistance < minSquaredDistance) {
      minSquaredDistance = squaredDistance;
      for (let j = 0; j < stride; ++j) {
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
MultiPoint.prototype.getCoordinates = function() {
  return Object(__WEBPACK_IMPORTED_MODULE_8__geom_flat_inflate_js__["a" /* inflateCoordinates */])(
    this.flatCoordinates, 0, this.flatCoordinates.length, this.stride);
};


/**
 * Return the point at the specified index.
 * @param {number} index Index.
 * @return {ol.geom.Point} Point.
 * @api
 */
MultiPoint.prototype.getPoint = function(index) {
  const n = !this.flatCoordinates ? 0 : this.flatCoordinates.length / this.stride;
  if (index < 0 || n <= index) {
    return null;
  }
  const point = new __WEBPACK_IMPORTED_MODULE_5__geom_Point_js__["a" /* default */](null);
  point.setFlatCoordinates(this.layout, this.flatCoordinates.slice(
    index * this.stride, (index + 1) * this.stride));
  return point;
};


/**
 * Return the points of this multipoint.
 * @return {Array.<ol.geom.Point>} Points.
 * @api
 */
MultiPoint.prototype.getPoints = function() {
  const flatCoordinates = this.flatCoordinates;
  const layout = this.layout;
  const stride = this.stride;
  /** @type {Array.<ol.geom.Point>} */
  const points = [];
  for (let i = 0, ii = flatCoordinates.length; i < ii; i += stride) {
    const point = new __WEBPACK_IMPORTED_MODULE_5__geom_Point_js__["a" /* default */](null);
    point.setFlatCoordinates(layout, flatCoordinates.slice(i, i + stride));
    points.push(point);
  }
  return points;
};


/**
 * @inheritDoc
 * @api
 */
MultiPoint.prototype.getType = function() {
  return __WEBPACK_IMPORTED_MODULE_4__geom_GeometryType_js__["a" /* default */].MULTI_POINT;
};


/**
 * @inheritDoc
 * @api
 */
MultiPoint.prototype.intersectsExtent = function(extent) {
  const flatCoordinates = this.flatCoordinates;
  const stride = this.stride;
  for (let i = 0, ii = flatCoordinates.length; i < ii; i += stride) {
    const x = flatCoordinates[i];
    const y = flatCoordinates[i + 1];
    if (Object(__WEBPACK_IMPORTED_MODULE_2__extent_js__["h" /* containsXY */])(extent, x, y)) {
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
MultiPoint.prototype.setCoordinates = function(coordinates, opt_layout) {
  if (!coordinates) {
    this.setFlatCoordinates(__WEBPACK_IMPORTED_MODULE_3__geom_GeometryLayout_js__["a" /* default */].XY, null);
  } else {
    this.setLayout(opt_layout, coordinates, 1);
    if (!this.flatCoordinates) {
      this.flatCoordinates = [];
    }
    this.flatCoordinates.length = Object(__WEBPACK_IMPORTED_MODULE_7__geom_flat_deflate_js__["b" /* deflateCoordinates */])(
      this.flatCoordinates, 0, coordinates, this.stride);
    this.changed();
  }
};


/**
 * @param {ol.geom.GeometryLayout} layout Layout.
 * @param {Array.<number>} flatCoordinates Flat coordinates.
 */
MultiPoint.prototype.setFlatCoordinates = function(layout, flatCoordinates) {
  this.setFlatCoordinatesInternal(layout, flatCoordinates);
  this.changed();
};
/* harmony default export */ __webpack_exports__["a"] = (MultiPoint);


/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = linearRingss;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__extent_js__ = __webpack_require__(1);
/**
 * @module ol/geom/flat/center
 */



/**
 * @param {Array.<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array.<Array.<number>>} endss Endss.
 * @param {number} stride Stride.
 * @return {Array.<number>} Flat centers.
 */
function linearRingss(flatCoordinates, offset, endss, stride) {
  const flatCenters = [];
  let extent = Object(__WEBPACK_IMPORTED_MODULE_0__extent_js__["j" /* createEmpty */])();
  for (let i = 0, ii = endss.length; i < ii; ++i) {
    const ends = endss[i];
    extent = Object(__WEBPACK_IMPORTED_MODULE_0__extent_js__["o" /* createOrUpdateFromFlatCoordinates */])(flatCoordinates, offset, ends[0], stride);
    flatCenters.push((extent[0] + extent[2]) / 2, (extent[1] + extent[3]) / 2);
    offset = ends[ends.length - 1];
  }
  return flatCenters;
}


/***/ }),
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_regularshape_js__ = __webpack_require__(274);



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
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @classdesc
 * Stripped down implementation of the W3C DOM Level 2 Event interface.
 * @see {@link https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-interface}
 *
 * This implementation only provides `type` and `target` properties, and
 * `stopPropagation` and `preventDefault` methods. It is meant as base class
 * for higher level events defined in the library, and works with
 * {@link ol.events.EventTarget}.
 *
 * @constructor
 * @implements {oli.events.Event}
 * @param {string} type Type.
 */
var _ol_events_Event_ = function(type) {

  /**
   * @type {boolean}
   */
  this.propagationStopped;

  /**
   * The event type.
   * @type {string}
   * @api
   */
  this.type = type;

  /**
   * The event target.
   * @type {Object}
   * @api
   */
  this.target = null;

};


/**
 * Stop event propagation.
 * @function
 * @override
 * @api
 */
_ol_events_Event_.prototype.preventDefault =

  /**
   * Stop event propagation.
   * @function
   * @override
   * @api
   */
  _ol_events_Event_.prototype.stopPropagation = function() {
    this.propagationStopped = true;
  };


/**
 * @param {Event|ol.events.Event} evt Event
 */
_ol_events_Event_.stopPropagation = function(evt) {
  evt.stopPropagation();
};


/**
 * @param {Event|ol.events.Event} evt Event
 */
_ol_events_Event_.preventDefault = function(evt) {
  evt.preventDefault();
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_events_Event_);


/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__asserts_js__ = __webpack_require__(41);

var _ol_transform_ = {};


/**
 * Collection of affine 2d transformation functions. The functions work on an
 * array of 6 elements. The element order is compatible with the [SVGMatrix
 * interface](https://developer.mozilla.org/en-US/docs/Web/API/SVGMatrix) and is
 * a subset (elements a to f) of a 3x3 martrix:
 * ```
 * [ a c e ]
 * [ b d f ]
 * [ 0 0 1 ]
 * ```
 */


/**
 * @private
 * @type {ol.Transform}
 */
_ol_transform_.tmp_ = new Array(6);


/**
 * Create an identity transform.
 * @return {!ol.Transform} Identity transform.
 */
_ol_transform_.create = function() {
  return [1, 0, 0, 1, 0, 0];
};


/**
 * Resets the given transform to an identity transform.
 * @param {!ol.Transform} transform Transform.
 * @return {!ol.Transform} Transform.
 */
_ol_transform_.reset = function(transform) {
  return _ol_transform_.set(transform, 1, 0, 0, 1, 0, 0);
};


/**
 * Multiply the underlying matrices of two transforms and return the result in
 * the first transform.
 * @param {!ol.Transform} transform1 Transform parameters of matrix 1.
 * @param {!ol.Transform} transform2 Transform parameters of matrix 2.
 * @return {!ol.Transform} transform1 multiplied with transform2.
 */
_ol_transform_.multiply = function(transform1, transform2) {
  var a1 = transform1[0];
  var b1 = transform1[1];
  var c1 = transform1[2];
  var d1 = transform1[3];
  var e1 = transform1[4];
  var f1 = transform1[5];
  var a2 = transform2[0];
  var b2 = transform2[1];
  var c2 = transform2[2];
  var d2 = transform2[3];
  var e2 = transform2[4];
  var f2 = transform2[5];

  transform1[0] = a1 * a2 + c1 * b2;
  transform1[1] = b1 * a2 + d1 * b2;
  transform1[2] = a1 * c2 + c1 * d2;
  transform1[3] = b1 * c2 + d1 * d2;
  transform1[4] = a1 * e2 + c1 * f2 + e1;
  transform1[5] = b1 * e2 + d1 * f2 + f1;

  return transform1;
};

/**
 * Set the transform components a-f on a given transform.
 * @param {!ol.Transform} transform Transform.
 * @param {number} a The a component of the transform.
 * @param {number} b The b component of the transform.
 * @param {number} c The c component of the transform.
 * @param {number} d The d component of the transform.
 * @param {number} e The e component of the transform.
 * @param {number} f The f component of the transform.
 * @return {!ol.Transform} Matrix with transform applied.
 */
_ol_transform_.set = function(transform, a, b, c, d, e, f) {
  transform[0] = a;
  transform[1] = b;
  transform[2] = c;
  transform[3] = d;
  transform[4] = e;
  transform[5] = f;
  return transform;
};


/**
 * Set transform on one matrix from another matrix.
 * @param {!ol.Transform} transform1 Matrix to set transform to.
 * @param {!ol.Transform} transform2 Matrix to set transform from.
 * @return {!ol.Transform} transform1 with transform from transform2 applied.
 */
_ol_transform_.setFromArray = function(transform1, transform2) {
  transform1[0] = transform2[0];
  transform1[1] = transform2[1];
  transform1[2] = transform2[2];
  transform1[3] = transform2[3];
  transform1[4] = transform2[4];
  transform1[5] = transform2[5];
  return transform1;
};


/**
 * Transforms the given coordinate with the given transform returning the
 * resulting, transformed coordinate. The coordinate will be modified in-place.
 *
 * @param {ol.Transform} transform The transformation.
 * @param {ol.Coordinate|ol.Pixel} coordinate The coordinate to transform.
 * @return {ol.Coordinate|ol.Pixel} return coordinate so that operations can be
 *     chained together.
 */
_ol_transform_.apply = function(transform, coordinate) {
  var x = coordinate[0], y = coordinate[1];
  coordinate[0] = transform[0] * x + transform[2] * y + transform[4];
  coordinate[1] = transform[1] * x + transform[3] * y + transform[5];
  return coordinate;
};


/**
 * Applies rotation to the given transform.
 * @param {!ol.Transform} transform Transform.
 * @param {number} angle Angle in radians.
 * @return {!ol.Transform} The rotated transform.
 */
_ol_transform_.rotate = function(transform, angle) {
  var cos = Math.cos(angle);
  var sin = Math.sin(angle);
  return _ol_transform_.multiply(transform,
      _ol_transform_.set(_ol_transform_.tmp_, cos, sin, -sin, cos, 0, 0));
};


/**
 * Applies scale to a given transform.
 * @param {!ol.Transform} transform Transform.
 * @param {number} x Scale factor x.
 * @param {number} y Scale factor y.
 * @return {!ol.Transform} The scaled transform.
 */
_ol_transform_.scale = function(transform, x, y) {
  return _ol_transform_.multiply(transform,
      _ol_transform_.set(_ol_transform_.tmp_, x, 0, 0, y, 0, 0));
};


/**
 * Applies translation to the given transform.
 * @param {!ol.Transform} transform Transform.
 * @param {number} dx Translation x.
 * @param {number} dy Translation y.
 * @return {!ol.Transform} The translated transform.
 */
_ol_transform_.translate = function(transform, dx, dy) {
  return _ol_transform_.multiply(transform,
      _ol_transform_.set(_ol_transform_.tmp_, 1, 0, 0, 1, dx, dy));
};


/**
 * Creates a composite transform given an initial translation, scale, rotation, and
 * final translation (in that order only, not commutative).
 * @param {!ol.Transform} transform The transform (will be modified in place).
 * @param {number} dx1 Initial translation x.
 * @param {number} dy1 Initial translation y.
 * @param {number} sx Scale factor x.
 * @param {number} sy Scale factor y.
 * @param {number} angle Rotation (in counter-clockwise radians).
 * @param {number} dx2 Final translation x.
 * @param {number} dy2 Final translation y.
 * @return {!ol.Transform} The composite transform.
 */
_ol_transform_.compose = function(transform, dx1, dy1, sx, sy, angle, dx2, dy2) {
  var sin = Math.sin(angle);
  var cos = Math.cos(angle);
  transform[0] = sx * cos;
  transform[1] = sy * sin;
  transform[2] = -sx * sin;
  transform[3] = sy * cos;
  transform[4] = dx2 * sx * cos - dy2 * sx * sin + dx1;
  transform[5] = dx2 * sy * sin + dy2 * sy * cos + dy1;
  return transform;
};


/**
 * Invert the given transform.
 * @param {!ol.Transform} transform Transform.
 * @return {!ol.Transform} Inverse of the transform.
 */
_ol_transform_.invert = function(transform) {
  var det = _ol_transform_.determinant(transform);
  __WEBPACK_IMPORTED_MODULE_0__asserts_js__["a" /* default */].assert(det !== 0, 32); // Transformation matrix cannot be inverted

  var a = transform[0];
  var b = transform[1];
  var c = transform[2];
  var d = transform[3];
  var e = transform[4];
  var f = transform[5];

  transform[0] = d / det;
  transform[1] = -b / det;
  transform[2] = -c / det;
  transform[3] = a / det;
  transform[4] = (c * f - d * e) / det;
  transform[5] = -(a * f - b * e) / det;

  return transform;
};


/**
 * Returns the determinant of the given matrix.
 * @param {!ol.Transform} mat Matrix.
 * @return {number} Determinant.
 */
_ol_transform_.determinant = function(mat) {
  return mat[0] * mat[3] - mat[1] * mat[2];
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_transform_);


/***/ }),
/* 156 */
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
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(9);


/**
 * @classdesc
 * Set stroke style for vector features.
 * Note that the defaults given are the Canvas defaults, which will be used if
 * option is not defined. The `get` functions return whatever was entered in
 * the options; they will not return the default.
 *
 * @constructor
 * @param {olx.style.StrokeOptions=} opt_options Options.
 * @api
 */
var _ol_style_Stroke_ = function(opt_options) {

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
  this.lineCap_ = options.lineCap;

  /**
   * @private
   * @type {Array.<number>}
   */
  this.lineDash_ = options.lineDash !== undefined ? options.lineDash : null;

  /**
   * @private
   * @type {number|undefined}
   */
  this.lineDashOffset_ = options.lineDashOffset;

  /**
   * @private
   * @type {string|undefined}
   */
  this.lineJoin_ = options.lineJoin;

  /**
   * @private
   * @type {number|undefined}
   */
  this.miterLimit_ = options.miterLimit;

  /**
   * @private
   * @type {number|undefined}
   */
  this.width_ = options.width;

  /**
   * @private
   * @type {string|undefined}
   */
  this.checksum_ = undefined;
};


/**
 * Clones the style.
 * @return {ol.style.Stroke} The cloned style.
 * @api
 */
_ol_style_Stroke_.prototype.clone = function() {
  var color = this.getColor();
  return new _ol_style_Stroke_({
    color: (color && color.slice) ? color.slice() : color || undefined,
    lineCap: this.getLineCap(),
    lineDash: this.getLineDash() ? this.getLineDash().slice() : undefined,
    lineDashOffset: this.getLineDashOffset(),
    lineJoin: this.getLineJoin(),
    miterLimit: this.getMiterLimit(),
    width: this.getWidth()
  });
};


/**
 * Get the stroke color.
 * @return {ol.Color|ol.ColorLike} Color.
 * @api
 */
_ol_style_Stroke_.prototype.getColor = function() {
  return this.color_;
};


/**
 * Get the line cap type for the stroke.
 * @return {string|undefined} Line cap.
 * @api
 */
_ol_style_Stroke_.prototype.getLineCap = function() {
  return this.lineCap_;
};


/**
 * Get the line dash style for the stroke.
 * @return {Array.<number>} Line dash.
 * @api
 */
_ol_style_Stroke_.prototype.getLineDash = function() {
  return this.lineDash_;
};


/**
 * Get the line dash offset for the stroke.
 * @return {number|undefined} Line dash offset.
 * @api
 */
_ol_style_Stroke_.prototype.getLineDashOffset = function() {
  return this.lineDashOffset_;
};


/**
 * Get the line join type for the stroke.
 * @return {string|undefined} Line join.
 * @api
 */
_ol_style_Stroke_.prototype.getLineJoin = function() {
  return this.lineJoin_;
};


/**
 * Get the miter limit for the stroke.
 * @return {number|undefined} Miter limit.
 * @api
 */
_ol_style_Stroke_.prototype.getMiterLimit = function() {
  return this.miterLimit_;
};


/**
 * Get the stroke width.
 * @return {number|undefined} Width.
 * @api
 */
_ol_style_Stroke_.prototype.getWidth = function() {
  return this.width_;
};


/**
 * Set the color.
 *
 * @param {ol.Color|ol.ColorLike} color Color.
 * @api
 */
_ol_style_Stroke_.prototype.setColor = function(color) {
  this.color_ = color;
  this.checksum_ = undefined;
};


/**
 * Set the line cap.
 *
 * @param {string|undefined} lineCap Line cap.
 * @api
 */
_ol_style_Stroke_.prototype.setLineCap = function(lineCap) {
  this.lineCap_ = lineCap;
  this.checksum_ = undefined;
};


/**
 * Set the line dash.
 *
 * Please note that Internet Explorer 10 and lower [do not support][mdn] the
 * `setLineDash` method on the `CanvasRenderingContext2D` and therefore this
 * property will have no visual effect in these browsers.
 *
 * [mdn]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility
 *
 * @param {Array.<number>} lineDash Line dash.
 * @api
 */
_ol_style_Stroke_.prototype.setLineDash = function(lineDash) {
  this.lineDash_ = lineDash;
  this.checksum_ = undefined;
};


/**
 * Set the line dash offset.
 *
 * @param {number|undefined} lineDashOffset Line dash offset.
 * @api
 */
_ol_style_Stroke_.prototype.setLineDashOffset = function(lineDashOffset) {
  this.lineDashOffset_ = lineDashOffset;
  this.checksum_ = undefined;
};


/**
 * Set the line join.
 *
 * @param {string|undefined} lineJoin Line join.
 * @api
 */
_ol_style_Stroke_.prototype.setLineJoin = function(lineJoin) {
  this.lineJoin_ = lineJoin;
  this.checksum_ = undefined;
};


/**
 * Set the miter limit.
 *
 * @param {number|undefined} miterLimit Miter limit.
 * @api
 */
_ol_style_Stroke_.prototype.setMiterLimit = function(miterLimit) {
  this.miterLimit_ = miterLimit;
  this.checksum_ = undefined;
};


/**
 * Set the width.
 *
 * @param {number|undefined} width Width.
 * @api
 */
_ol_style_Stroke_.prototype.setWidth = function(width) {
  this.width_ = width;
  this.checksum_ = undefined;
};


/**
 * @return {string} The checksum.
 */
_ol_style_Stroke_.prototype.getChecksum = function() {
  if (this.checksum_ === undefined) {
    this.checksum_ = 's';
    if (this.color_) {
      if (typeof this.color_ === 'string') {
        this.checksum_ += this.color_;
      } else {
        this.checksum_ += __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].getUid(this.color_).toString();
      }
    } else {
      this.checksum_ += '-';
    }
    this.checksum_ += ',' +
        (this.lineCap_ !== undefined ?
          this.lineCap_.toString() : '-') + ',' +
        (this.lineDash_ ?
          this.lineDash_.toString() : '-') + ',' +
        (this.lineDashOffset_ !== undefined ?
          this.lineDashOffset_ : '-') + ',' +
        (this.lineJoin_ !== undefined ?
          this.lineJoin_ : '-') + ',' +
        (this.miterLimit_ !== undefined ?
          this.miterLimit_.toString() : '-') + ',' +
        (this.width_ !== undefined ?
          this.width_.toString() : '-');
  }

  return this.checksum_;
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_style_Stroke_);


/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * The coordinate layout for geometries, indicating whether a 3rd or 4th z ('Z')
 * or measure ('M') coordinate is available. Supported values are `'XY'`,
 * `'XYZ'`, `'XYM'`, `'XYZM'`.
 * @enum {string}
 */
var _ol_geom_GeometryLayout_ = {
  XY: 'XY',
  XYZ: 'XYZ',
  XYM: 'XYM',
  XYZM: 'XYZM'
};

/* harmony default export */ __webpack_exports__["a"] = (_ol_geom_GeometryLayout_);


/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _ol_functions_ = {};

/**
 * Always returns true.
 * @returns {boolean} true.
 */
_ol_functions_.TRUE = function() {
  return true;
};

/**
 * Always returns false.
 * @returns {boolean} false.
 */
_ol_functions_.FALSE = function() {
  return false;
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_functions_);


/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _ol_geom_flat_transform_ = {};


/**
 * @param {Array.<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {ol.Transform} transform Transform.
 * @param {Array.<number>=} opt_dest Destination.
 * @return {Array.<number>} Transformed coordinates.
 */
_ol_geom_flat_transform_.transform2D = function(flatCoordinates, offset, end, stride, transform, opt_dest) {
  var dest = opt_dest ? opt_dest : [];
  var i = 0;
  var j;
  for (j = offset; j < end; j += stride) {
    var x = flatCoordinates[j];
    var y = flatCoordinates[j + 1];
    dest[i++] = transform[0] * x + transform[2] * y + transform[4];
    dest[i++] = transform[1] * x + transform[3] * y + transform[5];
  }
  if (opt_dest && dest.length != i) {
    dest.length = i;
  }
  return dest;
};


/**
 * @param {Array.<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} angle Angle.
 * @param {Array.<number>} anchor Rotation anchor point.
 * @param {Array.<number>=} opt_dest Destination.
 * @return {Array.<number>} Transformed coordinates.
 */
_ol_geom_flat_transform_.rotate = function(flatCoordinates, offset, end, stride, angle, anchor, opt_dest) {
  var dest = opt_dest ? opt_dest : [];
  var cos = Math.cos(angle);
  var sin = Math.sin(angle);
  var anchorX = anchor[0];
  var anchorY = anchor[1];
  var i = 0;
  for (var j = offset; j < end; j += stride) {
    var deltaX = flatCoordinates[j] - anchorX;
    var deltaY = flatCoordinates[j + 1] - anchorY;
    dest[i++] = anchorX + deltaX * cos - deltaY * sin;
    dest[i++] = anchorY + deltaX * sin + deltaY * cos;
    for (var k = j + 2; k < j + stride; ++k) {
      dest[i++] = flatCoordinates[k];
    }
  }
  if (opt_dest && dest.length != i) {
    dest.length = i;
  }
  return dest;
};


/**
 * Scale the coordinates.
 * @param {Array.<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} sx Scale factor in the x-direction.
 * @param {number} sy Scale factor in the y-direction.
 * @param {Array.<number>} anchor Scale anchor point.
 * @param {Array.<number>=} opt_dest Destination.
 * @return {Array.<number>} Transformed coordinates.
 */
_ol_geom_flat_transform_.scale = function(flatCoordinates, offset, end, stride, sx, sy, anchor, opt_dest) {
  var dest = opt_dest ? opt_dest : [];
  var anchorX = anchor[0];
  var anchorY = anchor[1];
  var i = 0;
  for (var j = offset; j < end; j += stride) {
    var deltaX = flatCoordinates[j] - anchorX;
    var deltaY = flatCoordinates[j + 1] - anchorY;
    dest[i++] = anchorX + sx * deltaX;
    dest[i++] = anchorY + sy * deltaY;
    for (var k = j + 2; k < j + stride; ++k) {
      dest[i++] = flatCoordinates[k];
    }
  }
  if (opt_dest && dest.length != i) {
    dest.length = i;
  }
  return dest;
};


/**
 * @param {Array.<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} deltaX Delta X.
 * @param {number} deltaY Delta Y.
 * @param {Array.<number>=} opt_dest Destination.
 * @return {Array.<number>} Transformed coordinates.
 */
_ol_geom_flat_transform_.translate = function(flatCoordinates, offset, end, stride, deltaX, deltaY, opt_dest) {
  var dest = opt_dest ? opt_dest : [];
  var i = 0;
  var j, k;
  for (j = offset; j < end; j += stride) {
    dest[i++] = flatCoordinates[j] + deltaX;
    dest[i++] = flatCoordinates[j + 1] + deltaY;
    for (k = j + 2; k < j + stride; ++k) {
      dest[i++] = flatCoordinates[k];
    }
  }
  if (opt_dest && dest.length != i) {
    dest.length = i;
  }
  return dest;
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_geom_flat_transform_);


/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _ol_proj_proj4_ = {};


/**
 * @private
 * @type {Proj4}
 */
_ol_proj_proj4_.cache_ = null;


/**
 * Store the proj4 function.
 * @param {Proj4} proj4 The proj4 function.
 */
_ol_proj_proj4_.set = function(proj4) {
  _ol_proj_proj4_.cache_ = proj4;
};


/**
 * Get proj4.
 * @return {Proj4} The proj4 function set above or available globally.
 */
_ol_proj_proj4_.get = function() {
  return _ol_proj_proj4_.cache_ || window['proj4'];
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_proj_proj4_);


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(163);


/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_openlayers_Map__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_openlayers_View__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_openlayers_format_MVT__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_openlayers_layer_VectorTile__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_openlayers_source_VectorTile__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_openlayers_layer_Tile__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_openlayers_source_XYZ__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_openlayers_tilegrid_TileGrid__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_openlayers_proj__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_openlayers_control_Zoom__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_mapbox_to_ol_style__ = __webpack_require__(271);












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


const tileGridMvt = new __WEBPACK_IMPORTED_MODULE_7_openlayers_tilegrid_TileGrid__["a" /* default */]({
  extent: Object(__WEBPACK_IMPORTED_MODULE_8_openlayers_proj__["e" /* get */])('EPSG:3857').getExtent(),
  resolutions: resolutionsMvt,
  tileSize: 512
});

const map = new __WEBPACK_IMPORTED_MODULE_0_openlayers_Map__["a" /* default */]({
  layers: [
    new __WEBPACK_IMPORTED_MODULE_5_openlayers_layer_Tile__["a" /* default */]({
      opacity: 0.3,
      source: new __WEBPACK_IMPORTED_MODULE_6_openlayers_source_XYZ__["a" /* default */]({
        url: 'https://tileserver.dev.bgdi.ch/data/hillshade-europe-cut-mbtiles/{z}/{x}/{y}.png',
        transition: 0,
        tileGrid: tileGridMvt,
        maxZoom: 14
      })
    }),
    new __WEBPACK_IMPORTED_MODULE_5_openlayers_layer_Tile__["a" /* default */]({
      opacity: 0,
      source: new __WEBPACK_IMPORTED_MODULE_6_openlayers_source_XYZ__["a" /* default */]({
        url: 'https://wmts{10-14}.geo.admin.ch/1.0.0/ch.swisstopo.swissalti3d-reliefschattierung/default/current/3857/{z}/{x}/{y}.png',
        transition: 0,
        tileGrid: new __WEBPACK_IMPORTED_MODULE_7_openlayers_tilegrid_TileGrid__["a" /* default */]({
          extent: Object(__WEBPACK_IMPORTED_MODULE_8_openlayers_proj__["e" /* get */])('EPSG:3857').getExtent(),
          resolutions: resolutionsWmts,
          tileSize: 256
        })
      })
    })
  ],
  target: 'map',
  view: new  __WEBPACK_IMPORTED_MODULE_1_openlayers_View__["a" /* default */]({
    center: Object(__WEBPACK_IMPORTED_MODULE_8_openlayers_proj__["d" /* fromLonLat */])([7.75, 46.7]),
    zoom: 7
  }),
  controls: [
    new __WEBPACK_IMPORTED_MODULE_9_openlayers_control_Zoom__["a" /* default */]({delta: 0.55})
  ]
});

const mbTilesLayer = new __WEBPACK_IMPORTED_MODULE_3_openlayers_layer_VectorTile__["a" /* default */]({
  declutter: true,
  visible: true,
  source: new __WEBPACK_IMPORTED_MODULE_4_openlayers_source_VectorTile__["a" /* default */]({
    format: new __WEBPACK_IMPORTED_MODULE_2_openlayers_format_MVT__["a" /* default */](),
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
        Object(__WEBPACK_IMPORTED_MODULE_10_mapbox_to_ol_style__["a" /* default */])(mbTilesLayer, glStyle, 'swissbasemap', undefined, glSpriteData, 'https://vtiles.geops.ch/styles/inspirationskarte/sprite.png', ft);
      });
    });
  });
});



/***/ }),
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__asserts_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pbf__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pbf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pbf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__format_Feature_js__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__format_FormatType_js__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__geom_GeometryLayout_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__geom_GeometryType_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__geom_LineString_js__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__geom_MultiLineString_js__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__geom_MultiPoint_js__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__geom_MultiPolygon_js__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__geom_Point_js__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__geom_Polygon_js__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__geom_flat_orient_js__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__proj_Projection_js__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__proj_Units_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__render_Feature_js__ = __webpack_require__(251);
/**
 * @module ol/format/MVT
 */
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
const MVT = function(opt_options) {

  __WEBPACK_IMPORTED_MODULE_3__format_Feature_js__["a" /* default */].call(this);

  const options = opt_options ? opt_options : {};

  /**
   * @type {ol.proj.Projection}
   */
  this.defaultDataProjection = new __WEBPACK_IMPORTED_MODULE_14__proj_Projection_js__["a" /* default */]({
    code: '',
    units: __WEBPACK_IMPORTED_MODULE_15__proj_Units_js__["a" /* default */].TILE_PIXELS
  });

  /**
   * @private
   * @type {function((ol.geom.Geometry|Object.<string,*>)=)|
   *     function(ol.geom.GeometryType,Array.<number>,
   *         (Array.<number>|Array.<Array.<number>>),Object.<string,*>,number)}
   */
  this.featureClass_ = options.featureClass ?
    options.featureClass : __WEBPACK_IMPORTED_MODULE_16__render_Feature_js__["a" /* default */];

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

Object(__WEBPACK_IMPORTED_MODULE_0__index_js__["g" /* inherits */])(MVT, __WEBPACK_IMPORTED_MODULE_3__format_Feature_js__["a" /* default */]);


/**
 * Reader callback for parsing layers.
 * @param {number} tag The tag.
 * @param {Object} layers The layers object.
 * @param {ol.ext.PBF} pbf The PBF.
 */
function layersPBFReader(tag, layers, pbf) {
  if (tag === 3) {
    const layer = {
      keys: [],
      values: [],
      features: []
    };
    const end = pbf.readVarint() + pbf.pos;
    pbf.readFields(layerPBFReader, layer, end);
    layer.length = layer.features.length;
    if (layer.length) {
      layers[layer.name] = layer;
    }
  }
}

/**
 * Reader callback for parsing layer.
 * @param {number} tag The tag.
 * @param {Object} layer The layer object.
 * @param {ol.ext.PBF} pbf The PBF.
 */
function layerPBFReader(tag, layer, pbf) {
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
    let value = null;
    const end = pbf.readVarint() + pbf.pos;
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
}

/**
 * Reader callback for parsing feature.
 * @param {number} tag The tag.
 * @param {Object} feature The feature object.
 * @param {ol.ext.PBF} pbf The PBF.
 */
function featurePBFReader(tag, feature, pbf) {
  if (tag == 1) {
    feature.id = pbf.readVarint();
  } else if (tag == 2) {
    const end = pbf.readVarint() + pbf.pos;
    while (pbf.pos < end) {
      const key = feature.layer.keys[pbf.readVarint()];
      const value = feature.layer.values[pbf.readVarint()];
      feature.properties[key] = value;
    }
  } else if (tag == 3) {
    feature.type = pbf.readVarint();
  } else if (tag == 4) {
    feature.geometry = pbf.pos;
  }
}


/**
 * Read a raw feature from the pbf offset stored at index `i` in the raw layer.
 * @suppress {missingProperties}
 * @param {ol.ext.PBF} pbf PBF.
 * @param {Object} layer Raw layer.
 * @param {number} i Index of the feature in the raw layer's `features` array.
 * @return {Object} Raw feature.
 */
function readRawFeature(pbf, layer, i) {
  pbf.pos = layer.features[i];
  const end = pbf.readVarint() + pbf.pos;

  const feature = {
    layer: layer,
    type: 0,
    properties: {}
  };
  pbf.readFields(featurePBFReader, feature, end);
  return feature;
}


/**
 * Read the raw geometry from the pbf offset stored in a raw feature's geometry
 * proeprty.
 * @suppress {missingProperties}
 * @param {ol.ext.PBF} pbf PBF.
 * @param {Object} feature Raw feature.
 * @param {Array.<number>} flatCoordinates Array to store flat coordinates in.
 * @param {Array.<number>} ends Array to store ends in.
 * @private
 */
MVT.prototype.readRawGeometry_ = function(pbf, feature, flatCoordinates, ends) {
  pbf.pos = feature.geometry;

  const end = pbf.readVarint() + pbf.pos;
  let cmd = 1;
  let length = 0;
  let x = 0;
  let y = 0;
  let coordsLen = 0;
  let currentEnd = 0;

  while (pbf.pos < end) {
    if (!length) {
      const cmdLen = pbf.readVarint();
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
      Object(__WEBPACK_IMPORTED_MODULE_1__asserts_js__["a" /* assert */])(false, 59); // Invalid command found in the PBF
    }
  }

  if (coordsLen > currentEnd) {
    ends.push(coordsLen);
    currentEnd = coordsLen;
  }

};


/**
 * @suppress {missingProperties}
 * @param {number} type The raw feature's geometry type
 * @param {number} numEnds Number of ends of the flat coordinates of the
 * geometry.
 * @return {ol.geom.GeometryType} The geometry type.
 */
function getGeometryType(type, numEnds) {
  /** @type {ol.geom.GeometryType} */
  let geometryType;
  if (type === 1) {
    geometryType = numEnds === 1 ?
      __WEBPACK_IMPORTED_MODULE_6__geom_GeometryType_js__["a" /* default */].POINT : __WEBPACK_IMPORTED_MODULE_6__geom_GeometryType_js__["a" /* default */].MULTI_POINT;
  } else if (type === 2) {
    geometryType = numEnds === 1 ?
      __WEBPACK_IMPORTED_MODULE_6__geom_GeometryType_js__["a" /* default */].LINE_STRING :
      __WEBPACK_IMPORTED_MODULE_6__geom_GeometryType_js__["a" /* default */].MULTI_LINE_STRING;
  } else if (type === 3) {
    geometryType = __WEBPACK_IMPORTED_MODULE_6__geom_GeometryType_js__["a" /* default */].POLYGON;
    // MultiPolygon not relevant for rendering - winding order determines
    // outer rings of polygons.
  }
  return geometryType;
}

/**
 * @private
 * @param {ol.ext.PBF} pbf PBF
 * @param {Object} rawFeature Raw Mapbox feature.
 * @param {olx.format.ReadOptions=} opt_options Read options.
 * @return {ol.Feature|ol.render.Feature} Feature.
 */
MVT.prototype.createFeature_ = function(pbf, rawFeature, opt_options) {
  const type = rawFeature.type;
  if (type === 0) {
    return null;
  }

  let feature;
  const id = rawFeature.id;
  const values = rawFeature.properties;
  values[this.layerName_] = rawFeature.layer.name;

  const flatCoordinates = [];
  let ends = [];
  this.readRawGeometry_(pbf, rawFeature, flatCoordinates, ends);

  const geometryType = getGeometryType(type, ends.length);

  if (this.featureClass_ === __WEBPACK_IMPORTED_MODULE_16__render_Feature_js__["a" /* default */]) {
    feature = new this.featureClass_(geometryType, flatCoordinates, ends, values, id);
  } else {
    let geom;
    if (geometryType == __WEBPACK_IMPORTED_MODULE_6__geom_GeometryType_js__["a" /* default */].POLYGON) {
      const endss = [];
      let offset = 0;
      let prevEndIndex = 0;
      for (let i = 0, ii = ends.length; i < ii; ++i) {
        const end = ends[i];
        if (!Object(__WEBPACK_IMPORTED_MODULE_13__geom_flat_orient_js__["a" /* linearRingIsClockwise */])(flatCoordinates, offset, end, 2)) {
          endss.push(ends.slice(prevEndIndex, i));
          prevEndIndex = i;
        }
        offset = end;
      }
      if (endss.length > 1) {
        ends = endss;
        geom = new __WEBPACK_IMPORTED_MODULE_10__geom_MultiPolygon_js__["a" /* default */](null);
      } else {
        geom = new __WEBPACK_IMPORTED_MODULE_12__geom_Polygon_js__["a" /* default */](null);
      }
    } else {
      geom = geometryType === __WEBPACK_IMPORTED_MODULE_6__geom_GeometryType_js__["a" /* default */].POINT ? new __WEBPACK_IMPORTED_MODULE_11__geom_Point_js__["a" /* default */](null) :
        geometryType === __WEBPACK_IMPORTED_MODULE_6__geom_GeometryType_js__["a" /* default */].LINE_STRING ? new __WEBPACK_IMPORTED_MODULE_7__geom_LineString_js__["a" /* default */](null) :
          geometryType === __WEBPACK_IMPORTED_MODULE_6__geom_GeometryType_js__["a" /* default */].POLYGON ? new __WEBPACK_IMPORTED_MODULE_12__geom_Polygon_js__["a" /* default */](null) :
            geometryType === __WEBPACK_IMPORTED_MODULE_6__geom_GeometryType_js__["a" /* default */].MULTI_POINT ? new __WEBPACK_IMPORTED_MODULE_9__geom_MultiPoint_js__["a" /* default */] (null) :
              geometryType === __WEBPACK_IMPORTED_MODULE_6__geom_GeometryType_js__["a" /* default */].MULTI_LINE_STRING ? new __WEBPACK_IMPORTED_MODULE_8__geom_MultiLineString_js__["a" /* default */](null) :
                null;
    }
    geom.setFlatCoordinates(__WEBPACK_IMPORTED_MODULE_5__geom_GeometryLayout_js__["a" /* default */].XY, flatCoordinates, ends);
    feature = new this.featureClass_();
    if (this.geometryName_) {
      feature.setGeometryName(this.geometryName_);
    }
    const geometry = Object(__WEBPACK_IMPORTED_MODULE_3__format_Feature_js__["b" /* transformWithOptions */])(geom, false, this.adaptOptions(opt_options));
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
MVT.prototype.getLastExtent = function() {
  return this.extent_;
};


/**
 * @inheritDoc
 */
MVT.prototype.getType = function() {
  return __WEBPACK_IMPORTED_MODULE_4__format_FormatType_js__["a" /* default */].ARRAY_BUFFER;
};


/**
 * @inheritDoc
 * @api
 */
MVT.prototype.readFeatures = function(source, opt_options) {
  const layers = this.layers_;

  const pbf = new __WEBPACK_IMPORTED_MODULE_2_pbf___default.a(/** @type {ArrayBuffer} */ (source));
  const pbfLayers = pbf.readFields(layersPBFReader, {});
  /** @type {Array.<ol.Feature|ol.render.Feature>} */
  const features = [];
  let pbfLayer;
  for (const name in pbfLayers) {
    if (layers && layers.indexOf(name) == -1) {
      continue;
    }
    pbfLayer = pbfLayers[name];

    for (let i = 0, ii = pbfLayer.length; i < ii; ++i) {
      const rawFeature = readRawFeature(pbf, pbfLayer, i);
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
MVT.prototype.readProjection = function(source) {
  return this.defaultDataProjection;
};


/**
 * Sets the layers that features will be read from.
 * @param {Array.<string>} layers Layers.
 * @api
 */
MVT.prototype.setLayers = function(layers) {
  this.layers_ = layers;
};


/**
 * Not implemented.
 * @override
 */
MVT.prototype.readFeature = function() {};


/**
 * Not implemented.
 * @override
 */
MVT.prototype.readGeometry = function() {};


/**
 * Not implemented.
 * @override
 */
MVT.prototype.writeFeature = function() {};


/**
 * Not implemented.
 * @override
 */
MVT.prototype.writeGeometry = function() {};


/**
 * Not implemented.
 * @override
 */
MVT.prototype.writeFeatures = function() {};
/* harmony default export */ __webpack_exports__["a"] = (MVT);


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Pbf;

var ieee754 = __webpack_require__(247);

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
/* 247 */
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
/* 248 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = transformWithOptions;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__geom_Geometry_js__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__obj_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__proj_js__ = __webpack_require__(18);
/**
 * @module ol/format/Feature
 */




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
const FeatureFormat = function() {

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
FeatureFormat.prototype.getReadOptions = function(source, opt_options) {
  let options;
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
FeatureFormat.prototype.adaptOptions = function(options) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__obj_js__["a" /* assign */])({
    dataProjection: this.defaultDataProjection,
    featureProjection: this.defaultFeatureProjection
  }, options);
};


/**
 * Get the extent from the source of the last {@link readFeatures} call.
 * @return {ol.Extent} Tile extent.
 */
FeatureFormat.prototype.getLastExtent = function() {
  return null;
};


/**
 * @abstract
 * @return {ol.format.FormatType} Format.
 */
FeatureFormat.prototype.getType = function() {};


/**
 * Read a single feature from a source.
 *
 * @abstract
 * @param {Document|Node|Object|string} source Source.
 * @param {olx.format.ReadOptions=} opt_options Read options.
 * @return {ol.Feature} Feature.
 */
FeatureFormat.prototype.readFeature = function(source, opt_options) {};


/**
 * Read all features from a source.
 *
 * @abstract
 * @param {Document|Node|ArrayBuffer|Object|string} source Source.
 * @param {olx.format.ReadOptions=} opt_options Read options.
 * @return {Array.<ol.Feature>} Features.
 */
FeatureFormat.prototype.readFeatures = function(source, opt_options) {};


/**
 * Read a single geometry from a source.
 *
 * @abstract
 * @param {Document|Node|Object|string} source Source.
 * @param {olx.format.ReadOptions=} opt_options Read options.
 * @return {ol.geom.Geometry} Geometry.
 */
FeatureFormat.prototype.readGeometry = function(source, opt_options) {};


/**
 * Read the projection from a source.
 *
 * @abstract
 * @param {Document|Node|Object|string} source Source.
 * @return {ol.proj.Projection} Projection.
 */
FeatureFormat.prototype.readProjection = function(source) {};


/**
 * Encode a feature in this format.
 *
 * @abstract
 * @param {ol.Feature} feature Feature.
 * @param {olx.format.WriteOptions=} opt_options Write options.
 * @return {string} Result.
 */
FeatureFormat.prototype.writeFeature = function(feature, opt_options) {};


/**
 * Encode an array of features in this format.
 *
 * @abstract
 * @param {Array.<ol.Feature>} features Features.
 * @param {olx.format.WriteOptions=} opt_options Write options.
 * @return {string} Result.
 */
FeatureFormat.prototype.writeFeatures = function(features, opt_options) {};


/**
 * Write a single geometry in this format.
 *
 * @abstract
 * @param {ol.geom.Geometry} geometry Geometry.
 * @param {olx.format.WriteOptions=} opt_options Write options.
 * @return {string} Result.
 */
FeatureFormat.prototype.writeGeometry = function(geometry, opt_options) {};

/* harmony default export */ __webpack_exports__["a"] = (FeatureFormat);

/**
 * @param {ol.geom.Geometry|ol.Extent} geometry Geometry.
 * @param {boolean} write Set to true for writing, false for reading.
 * @param {(olx.format.WriteOptions|olx.format.ReadOptions)=} opt_options
 *     Options.
 * @return {ol.geom.Geometry|ol.Extent} Transformed geometry.
 */
function transformWithOptions(geometry, write, opt_options) {
  const featureProjection = opt_options ?
    Object(__WEBPACK_IMPORTED_MODULE_2__proj_js__["e" /* get */])(opt_options.featureProjection) : null;
  const dataProjection = opt_options ?
    Object(__WEBPACK_IMPORTED_MODULE_2__proj_js__["e" /* get */])(opt_options.dataProjection) : null;
  /**
   * @type {ol.geom.Geometry|ol.Extent}
   */
  let transformed;
  if (featureProjection && dataProjection &&
      !Object(__WEBPACK_IMPORTED_MODULE_2__proj_js__["c" /* equivalent */])(featureProjection, dataProjection)) {
    if (geometry instanceof __WEBPACK_IMPORTED_MODULE_0__geom_Geometry_js__["a" /* default */]) {
      transformed = (write ? geometry.clone() : geometry).transform(
        write ? featureProjection : dataProjection,
        write ? dataProjection : featureProjection);
    } else {
      // FIXME this is necessary because ol.format.GML treats extents
      // as geometries
      transformed = Object(__WEBPACK_IMPORTED_MODULE_2__proj_js__["i" /* transformExtent */])(
        geometry,
        dataProjection,
        featureProjection);
    }
  } else {
    transformed = geometry;
  }
  if (write && opt_options && opt_options.decimals !== undefined) {
    const power = Math.pow(10, opt_options.decimals);
    // if decimals option on write, round each coordinate appropriately
    /**
     * @param {Array.<number>} coordinates Coordinates.
     * @return {Array.<number>} Transformed coordinates.
     */
    const transform = function(coordinates) {
      for (let i = 0, ii = coordinates.length; i < ii; ++i) {
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
}


/***/ }),
/* 249 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__extent_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__geom_GeometryLayout_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__geom_GeometryType_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__geom_LineString_js__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__geom_SimpleGeometry_js__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__geom_flat_closest_js__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__geom_flat_deflate_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__geom_flat_inflate_js__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__geom_flat_interpolate_js__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__geom_flat_intersectsextent_js__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__geom_flat_simplify_js__ = __webpack_require__(44);
/**
 * @module ol/geom/MultiLineString
 */














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
const MultiLineString = function(coordinates, opt_layout) {

  __WEBPACK_IMPORTED_MODULE_6__geom_SimpleGeometry_js__["a" /* default */].call(this);

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

Object(__WEBPACK_IMPORTED_MODULE_0__index_js__["g" /* inherits */])(MultiLineString, __WEBPACK_IMPORTED_MODULE_6__geom_SimpleGeometry_js__["a" /* default */]);


/**
 * Append the passed linestring to the multilinestring.
 * @param {ol.geom.LineString} lineString LineString.
 * @api
 */
MultiLineString.prototype.appendLineString = function(lineString) {
  if (!this.flatCoordinates) {
    this.flatCoordinates = lineString.getFlatCoordinates().slice();
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_1__array_js__["c" /* extend */])(this.flatCoordinates, lineString.getFlatCoordinates().slice());
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
MultiLineString.prototype.clone = function() {
  const multiLineString = new MultiLineString(null);
  multiLineString.setFlatCoordinates(
    this.layout, this.flatCoordinates.slice(), this.ends_.slice());
  return multiLineString;
};


/**
 * @inheritDoc
 */
MultiLineString.prototype.closestPointXY = function(x, y, closestPoint, minSquaredDistance) {
  if (minSquaredDistance < Object(__WEBPACK_IMPORTED_MODULE_2__extent_js__["e" /* closestSquaredDistanceXY */])(this.getExtent(), x, y)) {
    return minSquaredDistance;
  }
  if (this.maxDeltaRevision_ != this.getRevision()) {
    this.maxDelta_ = Math.sqrt(Object(__WEBPACK_IMPORTED_MODULE_7__geom_flat_closest_js__["a" /* arrayMaxSquaredDelta */])(
      this.flatCoordinates, 0, this.ends_, this.stride, 0));
    this.maxDeltaRevision_ = this.getRevision();
  }
  return Object(__WEBPACK_IMPORTED_MODULE_7__geom_flat_closest_js__["b" /* assignClosestArrayPoint */])(
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
MultiLineString.prototype.getCoordinateAtM = function(m, opt_extrapolate, opt_interpolate) {
  if ((this.layout != __WEBPACK_IMPORTED_MODULE_3__geom_GeometryLayout_js__["a" /* default */].XYM &&
       this.layout != __WEBPACK_IMPORTED_MODULE_3__geom_GeometryLayout_js__["a" /* default */].XYZM) ||
      this.flatCoordinates.length === 0) {
    return null;
  }
  const extrapolate = opt_extrapolate !== undefined ? opt_extrapolate : false;
  const interpolate = opt_interpolate !== undefined ? opt_interpolate : false;
  return Object(__WEBPACK_IMPORTED_MODULE_10__geom_flat_interpolate_js__["c" /* lineStringsCoordinateAtM */])(this.flatCoordinates, 0,
    this.ends_, this.stride, m, extrapolate, interpolate);
};


/**
 * Return the coordinates of the multilinestring.
 * @return {Array.<Array.<ol.Coordinate>>} Coordinates.
 * @override
 * @api
 */
MultiLineString.prototype.getCoordinates = function() {
  return Object(__WEBPACK_IMPORTED_MODULE_9__geom_flat_inflate_js__["b" /* inflateCoordinatesArray */])(
    this.flatCoordinates, 0, this.ends_, this.stride);
};


/**
 * @return {Array.<number>} Ends.
 */
MultiLineString.prototype.getEnds = function() {
  return this.ends_;
};


/**
 * Return the linestring at the specified index.
 * @param {number} index Index.
 * @return {ol.geom.LineString} LineString.
 * @api
 */
MultiLineString.prototype.getLineString = function(index) {
  if (index < 0 || this.ends_.length <= index) {
    return null;
  }
  const lineString = new __WEBPACK_IMPORTED_MODULE_5__geom_LineString_js__["a" /* default */](null);
  lineString.setFlatCoordinates(this.layout, this.flatCoordinates.slice(
    index === 0 ? 0 : this.ends_[index - 1], this.ends_[index]));
  return lineString;
};


/**
 * Return the linestrings of this multilinestring.
 * @return {Array.<ol.geom.LineString>} LineStrings.
 * @api
 */
MultiLineString.prototype.getLineStrings = function() {
  const flatCoordinates = this.flatCoordinates;
  const ends = this.ends_;
  const layout = this.layout;
  /** @type {Array.<ol.geom.LineString>} */
  const lineStrings = [];
  let offset = 0;
  for (let i = 0, ii = ends.length; i < ii; ++i) {
    const end = ends[i];
    const lineString = new __WEBPACK_IMPORTED_MODULE_5__geom_LineString_js__["a" /* default */](null);
    lineString.setFlatCoordinates(layout, flatCoordinates.slice(offset, end));
    lineStrings.push(lineString);
    offset = end;
  }
  return lineStrings;
};


/**
 * @return {Array.<number>} Flat midpoints.
 */
MultiLineString.prototype.getFlatMidpoints = function() {
  const midpoints = [];
  const flatCoordinates = this.flatCoordinates;
  let offset = 0;
  const ends = this.ends_;
  const stride = this.stride;
  for (let i = 0, ii = ends.length; i < ii; ++i) {
    const end = ends[i];
    const midpoint = Object(__WEBPACK_IMPORTED_MODULE_10__geom_flat_interpolate_js__["a" /* interpolatePoint */])(
      flatCoordinates, offset, end, stride, 0.5);
    Object(__WEBPACK_IMPORTED_MODULE_1__array_js__["c" /* extend */])(midpoints, midpoint);
    offset = end;
  }
  return midpoints;
};


/**
 * @inheritDoc
 */
MultiLineString.prototype.getSimplifiedGeometryInternal = function(squaredTolerance) {
  const simplifiedFlatCoordinates = [];
  const simplifiedEnds = [];
  simplifiedFlatCoordinates.length = Object(__WEBPACK_IMPORTED_MODULE_12__geom_flat_simplify_js__["b" /* douglasPeuckerArray */])(
    this.flatCoordinates, 0, this.ends_, this.stride, squaredTolerance,
    simplifiedFlatCoordinates, 0, simplifiedEnds);
  const simplifiedMultiLineString = new MultiLineString(null);
  simplifiedMultiLineString.setFlatCoordinates(
    __WEBPACK_IMPORTED_MODULE_3__geom_GeometryLayout_js__["a" /* default */].XY, simplifiedFlatCoordinates, simplifiedEnds);
  return simplifiedMultiLineString;
};


/**
 * @inheritDoc
 * @api
 */
MultiLineString.prototype.getType = function() {
  return __WEBPACK_IMPORTED_MODULE_4__geom_GeometryType_js__["a" /* default */].MULTI_LINE_STRING;
};


/**
 * @inheritDoc
 * @api
 */
MultiLineString.prototype.intersectsExtent = function(extent) {
  return Object(__WEBPACK_IMPORTED_MODULE_11__geom_flat_intersectsextent_js__["b" /* intersectsLineStringArray */])(
    this.flatCoordinates, 0, this.ends_, this.stride, extent);
};


/**
 * Set the coordinates of the multilinestring.
 * @param {Array.<Array.<ol.Coordinate>>} coordinates Coordinates.
 * @param {ol.geom.GeometryLayout=} opt_layout Layout.
 * @override
 * @api
 */
MultiLineString.prototype.setCoordinates = function(coordinates, opt_layout) {
  if (!coordinates) {
    this.setFlatCoordinates(__WEBPACK_IMPORTED_MODULE_3__geom_GeometryLayout_js__["a" /* default */].XY, null, this.ends_);
  } else {
    this.setLayout(opt_layout, coordinates, 2);
    if (!this.flatCoordinates) {
      this.flatCoordinates = [];
    }
    const ends = Object(__WEBPACK_IMPORTED_MODULE_8__geom_flat_deflate_js__["c" /* deflateCoordinatesArray */])(
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
MultiLineString.prototype.setFlatCoordinates = function(layout, flatCoordinates, ends) {
  this.setFlatCoordinatesInternal(layout, flatCoordinates);
  this.ends_ = ends;
  this.changed();
};


/**
 * @param {Array.<ol.geom.LineString>} lineStrings LineStrings.
 */
MultiLineString.prototype.setLineStrings = function(lineStrings) {
  let layout = this.getLayout();
  const flatCoordinates = [];
  const ends = [];
  for (let i = 0, ii = lineStrings.length; i < ii; ++i) {
    const lineString = lineStrings[i];
    if (i === 0) {
      layout = lineString.getLayout();
    }
    Object(__WEBPACK_IMPORTED_MODULE_1__array_js__["c" /* extend */])(flatCoordinates, lineString.getFlatCoordinates());
    ends.push(flatCoordinates.length);
  }
  this.setFlatCoordinates(layout, flatCoordinates, ends);
};
/* harmony default export */ __webpack_exports__["a"] = (MultiLineString);


/***/ }),
/* 250 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__extent_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__geom_GeometryLayout_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__geom_GeometryType_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__geom_MultiPoint_js__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__geom_Polygon_js__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__geom_SimpleGeometry_js__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__geom_flat_area_js__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__geom_flat_center_js__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__geom_flat_closest_js__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__geom_flat_contains_js__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__geom_flat_deflate_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__geom_flat_inflate_js__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__geom_flat_interiorpoint_js__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__geom_flat_intersectsextent_js__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__geom_flat_orient_js__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__geom_flat_simplify_js__ = __webpack_require__(44);
/**
 * @module ol/geom/MultiPolygon
 */



















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
const MultiPolygon = function(coordinates, opt_layout) {

  __WEBPACK_IMPORTED_MODULE_7__geom_SimpleGeometry_js__["a" /* default */].call(this);

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

Object(__WEBPACK_IMPORTED_MODULE_0__index_js__["g" /* inherits */])(MultiPolygon, __WEBPACK_IMPORTED_MODULE_7__geom_SimpleGeometry_js__["a" /* default */]);


/**
 * Append the passed polygon to this multipolygon.
 * @param {ol.geom.Polygon} polygon Polygon.
 * @api
 */
MultiPolygon.prototype.appendPolygon = function(polygon) {
  /** @type {Array.<number>} */
  let ends;
  if (!this.flatCoordinates) {
    this.flatCoordinates = polygon.getFlatCoordinates().slice();
    ends = polygon.getEnds().slice();
    this.endss_.push();
  } else {
    const offset = this.flatCoordinates.length;
    Object(__WEBPACK_IMPORTED_MODULE_1__array_js__["c" /* extend */])(this.flatCoordinates, polygon.getFlatCoordinates());
    ends = polygon.getEnds().slice();
    for (let i = 0, ii = ends.length; i < ii; ++i) {
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
MultiPolygon.prototype.clone = function() {
  const multiPolygon = new MultiPolygon(null);

  const len = this.endss_.length;
  const newEndss = new Array(len);
  for (let i = 0; i < len; ++i) {
    newEndss[i] = this.endss_[i].slice();
  }

  multiPolygon.setFlatCoordinates(
    this.layout, this.flatCoordinates.slice(), newEndss);
  return multiPolygon;
};


/**
 * @inheritDoc
 */
MultiPolygon.prototype.closestPointXY = function(x, y, closestPoint, minSquaredDistance) {
  if (minSquaredDistance < Object(__WEBPACK_IMPORTED_MODULE_2__extent_js__["e" /* closestSquaredDistanceXY */])(this.getExtent(), x, y)) {
    return minSquaredDistance;
  }
  if (this.maxDeltaRevision_ != this.getRevision()) {
    this.maxDelta_ = Math.sqrt(Object(__WEBPACK_IMPORTED_MODULE_10__geom_flat_closest_js__["f" /* multiArrayMaxSquaredDelta */])(
      this.flatCoordinates, 0, this.endss_, this.stride, 0));
    this.maxDeltaRevision_ = this.getRevision();
  }
  return Object(__WEBPACK_IMPORTED_MODULE_10__geom_flat_closest_js__["c" /* assignClosestMultiArrayPoint */])(
    this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride,
    this.maxDelta_, true, x, y, closestPoint, minSquaredDistance);
};


/**
 * @inheritDoc
 */
MultiPolygon.prototype.containsXY = function(x, y) {
  return Object(__WEBPACK_IMPORTED_MODULE_11__geom_flat_contains_js__["d" /* linearRingssContainsXY */])(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, x, y);
};


/**
 * Return the area of the multipolygon on projected plane.
 * @return {number} Area (on projected plane).
 * @api
 */
MultiPolygon.prototype.getArea = function() {
  return Object(__WEBPACK_IMPORTED_MODULE_8__geom_flat_area_js__["c" /* linearRingss */])(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride);
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
MultiPolygon.prototype.getCoordinates = function(opt_right) {
  let flatCoordinates;
  if (opt_right !== undefined) {
    flatCoordinates = this.getOrientedFlatCoordinates().slice();
    Object(__WEBPACK_IMPORTED_MODULE_16__geom_flat_orient_js__["e" /* orientLinearRingsArray */])(
      flatCoordinates, 0, this.endss_, this.stride, opt_right);
  } else {
    flatCoordinates = this.flatCoordinates;
  }

  return Object(__WEBPACK_IMPORTED_MODULE_13__geom_flat_inflate_js__["c" /* inflateMultiCoordinatesArray */])(
    flatCoordinates, 0, this.endss_, this.stride);
};


/**
 * @return {Array.<Array.<number>>} Endss.
 */
MultiPolygon.prototype.getEndss = function() {
  return this.endss_;
};


/**
 * @return {Array.<number>} Flat interior points.
 */
MultiPolygon.prototype.getFlatInteriorPoints = function() {
  if (this.flatInteriorPointsRevision_ != this.getRevision()) {
    const flatCenters = Object(__WEBPACK_IMPORTED_MODULE_9__geom_flat_center_js__["a" /* linearRingss */])(
      this.flatCoordinates, 0, this.endss_, this.stride);
    this.flatInteriorPoints_ = Object(__WEBPACK_IMPORTED_MODULE_14__geom_flat_interiorpoint_js__["b" /* getInteriorPointsOfMultiArray */])(
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
MultiPolygon.prototype.getInteriorPoints = function() {
  const interiorPoints = new __WEBPACK_IMPORTED_MODULE_5__geom_MultiPoint_js__["a" /* default */](null);
  interiorPoints.setFlatCoordinates(__WEBPACK_IMPORTED_MODULE_3__geom_GeometryLayout_js__["a" /* default */].XYM,
    this.getFlatInteriorPoints().slice());
  return interiorPoints;
};


/**
 * @return {Array.<number>} Oriented flat coordinates.
 */
MultiPolygon.prototype.getOrientedFlatCoordinates = function() {
  if (this.orientedRevision_ != this.getRevision()) {
    const flatCoordinates = this.flatCoordinates;
    if (Object(__WEBPACK_IMPORTED_MODULE_16__geom_flat_orient_js__["c" /* linearRingsAreOriented */])(
      flatCoordinates, 0, this.endss_, this.stride)) {
      this.orientedFlatCoordinates_ = flatCoordinates;
    } else {
      this.orientedFlatCoordinates_ = flatCoordinates.slice();
      this.orientedFlatCoordinates_.length =
          Object(__WEBPACK_IMPORTED_MODULE_16__geom_flat_orient_js__["e" /* orientLinearRingsArray */])(
            this.orientedFlatCoordinates_, 0, this.endss_, this.stride);
    }
    this.orientedRevision_ = this.getRevision();
  }
  return this.orientedFlatCoordinates_;
};


/**
 * @inheritDoc
 */
MultiPolygon.prototype.getSimplifiedGeometryInternal = function(squaredTolerance) {
  const simplifiedFlatCoordinates = [];
  const simplifiedEndss = [];
  simplifiedFlatCoordinates.length = Object(__WEBPACK_IMPORTED_MODULE_17__geom_flat_simplify_js__["d" /* quantizeMultiArray */])(
    this.flatCoordinates, 0, this.endss_, this.stride,
    Math.sqrt(squaredTolerance),
    simplifiedFlatCoordinates, 0, simplifiedEndss);
  const simplifiedMultiPolygon = new MultiPolygon(null);
  simplifiedMultiPolygon.setFlatCoordinates(
    __WEBPACK_IMPORTED_MODULE_3__geom_GeometryLayout_js__["a" /* default */].XY, simplifiedFlatCoordinates, simplifiedEndss);
  return simplifiedMultiPolygon;
};


/**
 * Return the polygon at the specified index.
 * @param {number} index Index.
 * @return {ol.geom.Polygon} Polygon.
 * @api
 */
MultiPolygon.prototype.getPolygon = function(index) {
  if (index < 0 || this.endss_.length <= index) {
    return null;
  }
  let offset;
  if (index === 0) {
    offset = 0;
  } else {
    const prevEnds = this.endss_[index - 1];
    offset = prevEnds[prevEnds.length - 1];
  }
  const ends = this.endss_[index].slice();
  const end = ends[ends.length - 1];
  if (offset !== 0) {
    for (let i = 0, ii = ends.length; i < ii; ++i) {
      ends[i] -= offset;
    }
  }
  const polygon = new __WEBPACK_IMPORTED_MODULE_6__geom_Polygon_js__["a" /* default */](null);
  polygon.setFlatCoordinates(
    this.layout, this.flatCoordinates.slice(offset, end), ends);
  return polygon;
};


/**
 * Return the polygons of this multipolygon.
 * @return {Array.<ol.geom.Polygon>} Polygons.
 * @api
 */
MultiPolygon.prototype.getPolygons = function() {
  const layout = this.layout;
  const flatCoordinates = this.flatCoordinates;
  const endss = this.endss_;
  const polygons = [];
  let offset = 0;
  for (let i = 0, ii = endss.length; i < ii; ++i) {
    const ends = endss[i].slice();
    const end = ends[ends.length - 1];
    if (offset !== 0) {
      for (let j = 0, jj = ends.length; j < jj; ++j) {
        ends[j] -= offset;
      }
    }
    const polygon = new __WEBPACK_IMPORTED_MODULE_6__geom_Polygon_js__["a" /* default */](null);
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
MultiPolygon.prototype.getType = function() {
  return __WEBPACK_IMPORTED_MODULE_4__geom_GeometryType_js__["a" /* default */].MULTI_POLYGON;
};


/**
 * @inheritDoc
 * @api
 */
MultiPolygon.prototype.intersectsExtent = function(extent) {
  return Object(__WEBPACK_IMPORTED_MODULE_15__geom_flat_intersectsextent_js__["d" /* intersectsLinearRingMultiArray */])(
    this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, extent);
};


/**
 * Set the coordinates of the multipolygon.
 * @param {Array.<Array.<Array.<ol.Coordinate>>>} coordinates Coordinates.
 * @param {ol.geom.GeometryLayout=} opt_layout Layout.
 * @override
 * @api
 */
MultiPolygon.prototype.setCoordinates = function(coordinates, opt_layout) {
  if (!coordinates) {
    this.setFlatCoordinates(__WEBPACK_IMPORTED_MODULE_3__geom_GeometryLayout_js__["a" /* default */].XY, null, this.endss_);
  } else {
    this.setLayout(opt_layout, coordinates, 3);
    if (!this.flatCoordinates) {
      this.flatCoordinates = [];
    }
    const endss = Object(__WEBPACK_IMPORTED_MODULE_12__geom_flat_deflate_js__["d" /* deflateMultiCoordinatesArray */])(
      this.flatCoordinates, 0, coordinates, this.stride, this.endss_);
    if (endss.length === 0) {
      this.flatCoordinates.length = 0;
    } else {
      const lastEnds = endss[endss.length - 1];
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
MultiPolygon.prototype.setFlatCoordinates = function(layout, flatCoordinates, endss) {
  this.setFlatCoordinatesInternal(layout, flatCoordinates);
  this.endss_ = endss;
  this.changed();
};


/**
 * @param {Array.<ol.geom.Polygon>} polygons Polygons.
 */
MultiPolygon.prototype.setPolygons = function(polygons) {
  let layout = this.getLayout();
  const flatCoordinates = [];
  const endss = [];
  for (let i = 0, ii = polygons.length; i < ii; ++i) {
    const polygon = polygons[i];
    if (i === 0) {
      layout = polygon.getLayout();
    }
    const offset = flatCoordinates.length;
    const ends = polygon.getEnds();
    for (let j = 0, jj = ends.length; j < jj; ++j) {
      ends[j] += offset;
    }
    Object(__WEBPACK_IMPORTED_MODULE_1__array_js__["c" /* extend */])(flatCoordinates, polygon.getFlatCoordinates());
    endss.push(ends);
  }
  this.setFlatCoordinates(layout, flatCoordinates, endss);
};

/* harmony default export */ __webpack_exports__["a"] = (MultiPolygon);


/***/ }),
/* 251 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__extent_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__geom_GeometryType_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__geom_flat_center_js__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__geom_flat_interiorpoint_js__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__geom_flat_interpolate_js__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__geom_flat_transform_js__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__transform_js__ = __webpack_require__(8);
/**
 * @module ol/render/Feature
 */










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
const RenderFeature = function(type, flatCoordinates, ends, properties, id) {
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
RenderFeature.prototype.get = function(key) {
  return this.properties_[key];
};


/**
 * @return {Array.<number>|Array.<Array.<number>>} Ends or endss.
 */
RenderFeature.prototype.getEnds =
RenderFeature.prototype.getEndss = function() {
  return this.ends_;
};


/**
 * Get the extent of this feature's geometry.
 * @return {ol.Extent} Extent.
 * @api
 */
RenderFeature.prototype.getExtent = function() {
  if (!this.extent_) {
    this.extent_ = this.type_ === __WEBPACK_IMPORTED_MODULE_3__geom_GeometryType_js__["a" /* default */].POINT ?
      Object(__WEBPACK_IMPORTED_MODULE_2__extent_js__["m" /* createOrUpdateFromCoordinate */])(this.flatCoordinates_) :
      Object(__WEBPACK_IMPORTED_MODULE_2__extent_js__["o" /* createOrUpdateFromFlatCoordinates */])(
        this.flatCoordinates_, 0, this.flatCoordinates_.length, 2);

  }
  return this.extent_;
};


/**
 * @return {Array.<number>} Flat interior points.
 */
RenderFeature.prototype.getFlatInteriorPoint = function() {
  if (!this.flatInteriorPoints_) {
    const flatCenter = Object(__WEBPACK_IMPORTED_MODULE_2__extent_js__["x" /* getCenter */])(this.getExtent());
    this.flatInteriorPoints_ = Object(__WEBPACK_IMPORTED_MODULE_5__geom_flat_interiorpoint_js__["a" /* getInteriorPointOfArray */])(
      this.flatCoordinates_, 0, this.ends_, 2, flatCenter, 0);
  }
  return this.flatInteriorPoints_;
};


/**
 * @return {Array.<number>} Flat interior points.
 */
RenderFeature.prototype.getFlatInteriorPoints = function() {
  if (!this.flatInteriorPoints_) {
    const flatCenters = Object(__WEBPACK_IMPORTED_MODULE_4__geom_flat_center_js__["a" /* linearRingss */])(
      this.flatCoordinates_, 0, this.ends_, 2);
    this.flatInteriorPoints_ = Object(__WEBPACK_IMPORTED_MODULE_5__geom_flat_interiorpoint_js__["b" /* getInteriorPointsOfMultiArray */])(
      this.flatCoordinates_, 0, this.ends_, 2, flatCenters);
  }
  return this.flatInteriorPoints_;
};


/**
 * @return {Array.<number>} Flat midpoint.
 */
RenderFeature.prototype.getFlatMidpoint = function() {
  if (!this.flatMidpoints_) {
    this.flatMidpoints_ = Object(__WEBPACK_IMPORTED_MODULE_6__geom_flat_interpolate_js__["a" /* interpolatePoint */])(
      this.flatCoordinates_, 0, this.flatCoordinates_.length, 2, 0.5);
  }
  return this.flatMidpoints_;
};


/**
 * @return {Array.<number>} Flat midpoints.
 */
RenderFeature.prototype.getFlatMidpoints = function() {
  if (!this.flatMidpoints_) {
    this.flatMidpoints_ = [];
    const flatCoordinates = this.flatCoordinates_;
    let offset = 0;
    const ends = this.ends_;
    for (let i = 0, ii = ends.length; i < ii; ++i) {
      const end = ends[i];
      const midpoint = Object(__WEBPACK_IMPORTED_MODULE_6__geom_flat_interpolate_js__["a" /* interpolatePoint */])(
        flatCoordinates, offset, end, 2, 0.5);
      Object(__WEBPACK_IMPORTED_MODULE_1__array_js__["c" /* extend */])(this.flatMidpoints_, midpoint);
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
RenderFeature.prototype.getId = function() {
  return this.id_;
};


/**
 * @return {Array.<number>} Flat coordinates.
 */
RenderFeature.prototype.getOrientedFlatCoordinates = function() {
  return this.flatCoordinates_;
};


/**
 * @return {Array.<number>} Flat coordinates.
 */
RenderFeature.prototype.getFlatCoordinates =
    RenderFeature.prototype.getOrientedFlatCoordinates;


/**
 * For API compatibility with {@link ol.Feature}, this method is useful when
 * determining the geometry type in style function (see {@link #getType}).
 * @return {ol.render.Feature} Feature.
 * @api
 */
RenderFeature.prototype.getGeometry = function() {
  return this;
};


/**
 * Get the feature properties.
 * @return {Object.<string, *>} Feature properties.
 * @api
 */
RenderFeature.prototype.getProperties = function() {
  return this.properties_;
};


/**
 * Get the feature for working with its geometry.
 * @return {ol.render.Feature} Feature.
 */
RenderFeature.prototype.getSimplifiedGeometry =
    RenderFeature.prototype.getGeometry;


/**
 * @return {number} Stride.
 */
RenderFeature.prototype.getStride = function() {
  return 2;
};


/**
 * @return {undefined}
 */
RenderFeature.prototype.getStyleFunction = __WEBPACK_IMPORTED_MODULE_0__index_js__["h" /* nullFunction */];


/**
 * Get the type of this feature's geometry.
 * @return {ol.geom.GeometryType} Geometry type.
 * @api
 */
RenderFeature.prototype.getType = function() {
  return this.type_;
};

/**
 * Transform geometry coordinates from tile pixel space to projected.
 * The SRS of the source and destination are expected to be the same.
 *
 * @param {ol.ProjectionLike} source The current projection
 * @param {ol.ProjectionLike} destination The desired projection.
 */
RenderFeature.prototype.transform = function(source, destination) {
  const pixelExtent = source.getExtent();
  const projectedExtent = source.getWorldExtent();
  const scale = Object(__WEBPACK_IMPORTED_MODULE_2__extent_js__["A" /* getHeight */])(projectedExtent) / Object(__WEBPACK_IMPORTED_MODULE_2__extent_js__["A" /* getHeight */])(pixelExtent);
  const transform = this.tmpTransform_;
  __WEBPACK_IMPORTED_MODULE_8__transform_js__["a" /* default */].compose(transform,
    projectedExtent[0], projectedExtent[3],
    scale, -scale, 0,
    0, 0);
  Object(__WEBPACK_IMPORTED_MODULE_7__geom_flat_transform_js__["c" /* transform2D */])(this.flatCoordinates_, 0, this.flatCoordinates_.length, 2,
    transform, this.flatCoordinates_);
};
/* harmony default export */ __webpack_exports__["a"] = (RenderFeature);


/***/ }),
/* 252 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__LayerType_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asserts_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layer_TileProperty_js__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layer_Vector_js__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layer_VectorTileRenderType_js__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__obj_js__ = __webpack_require__(3);
/**
 * @module ol/layer/VectorTile
 */








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
const VectorTileLayer = function(opt_options) {
  const options = opt_options ? opt_options : {};

  let renderMode = options.renderMode || __WEBPACK_IMPORTED_MODULE_5__layer_VectorTileRenderType_js__["a" /* default */].HYBRID;
  Object(__WEBPACK_IMPORTED_MODULE_2__asserts_js__["a" /* assert */])(renderMode == undefined ||
      renderMode == __WEBPACK_IMPORTED_MODULE_5__layer_VectorTileRenderType_js__["a" /* default */].IMAGE ||
      renderMode == __WEBPACK_IMPORTED_MODULE_5__layer_VectorTileRenderType_js__["a" /* default */].HYBRID ||
      renderMode == __WEBPACK_IMPORTED_MODULE_5__layer_VectorTileRenderType_js__["a" /* default */].VECTOR,
  28); // `renderMode` must be `'image'`, `'hybrid'` or `'vector'`
  if (options.declutter && renderMode == __WEBPACK_IMPORTED_MODULE_5__layer_VectorTileRenderType_js__["a" /* default */].IMAGE) {
    renderMode = __WEBPACK_IMPORTED_MODULE_5__layer_VectorTileRenderType_js__["a" /* default */].HYBRID;
  }
  options.renderMode = renderMode;

  const baseOptions = Object(__WEBPACK_IMPORTED_MODULE_6__obj_js__["a" /* assign */])({}, options);

  delete baseOptions.preload;
  delete baseOptions.useInterimTilesOnError;
  __WEBPACK_IMPORTED_MODULE_4__layer_Vector_js__["a" /* default */].call(this,  /** @type {olx.layer.VectorOptions} */ (baseOptions));

  this.setPreload(options.preload ? options.preload : 0);
  this.setUseInterimTilesOnError(options.useInterimTilesOnError ?
    options.useInterimTilesOnError : true);

  /**
   * The layer type.
   * @protected
   * @type {ol.LayerType}
   */
  this.type = __WEBPACK_IMPORTED_MODULE_1__LayerType_js__["a" /* default */].VECTOR_TILE;

};

Object(__WEBPACK_IMPORTED_MODULE_0__index_js__["g" /* inherits */])(VectorTileLayer, __WEBPACK_IMPORTED_MODULE_4__layer_Vector_js__["a" /* default */]);


/**
 * Return the level as number to which we will preload tiles up to.
 * @return {number} The level to preload tiles up to.
 * @observable
 * @api
 */
VectorTileLayer.prototype.getPreload = function() {
  return /** @type {number} */ (this.get(__WEBPACK_IMPORTED_MODULE_3__layer_TileProperty_js__["a" /* default */].PRELOAD));
};


/**
 * Whether we use interim tiles on error.
 * @return {boolean} Use interim tiles on error.
 * @observable
 * @api
 */
VectorTileLayer.prototype.getUseInterimTilesOnError = function() {
  return /** @type {boolean} */ (this.get(__WEBPACK_IMPORTED_MODULE_3__layer_TileProperty_js__["a" /* default */].USE_INTERIM_TILES_ON_ERROR));
};


/**
 * Set the level as number to which we will preload tiles up to.
 * @param {number} preload The level to preload tiles up to.
 * @observable
 * @api
 */
VectorTileLayer.prototype.setPreload = function(preload) {
  this.set(__WEBPACK_IMPORTED_MODULE_3__layer_TileProperty_js__["a" /* default */].PRELOAD, preload);
};


/**
 * Set whether we use interim tiles on error.
 * @param {boolean} useInterimTilesOnError Use interim tiles on error.
 * @observable
 * @api
 */
VectorTileLayer.prototype.setUseInterimTilesOnError = function(useInterimTilesOnError) {
  this.set(__WEBPACK_IMPORTED_MODULE_3__layer_TileProperty_js__["a" /* default */].USE_INTERIM_TILES_ON_ERROR, useInterimTilesOnError);
};


/**
 * Return the associated {@link ol.source.VectorTile vectortilesource} of the layer.
 * @function
 * @return {ol.source.VectorTile} Source.
 * @api
 */
VectorTileLayer.prototype.getSource;
/* harmony default export */ __webpack_exports__["a"] = (VectorTileLayer);


/***/ }),
/* 253 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__LayerType_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layer_Layer_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layer_VectorRenderType_js__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__obj_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_Style_js__ = __webpack_require__(254);
/**
 * @module ol/layer/Vector
 */








/**
 * @enum {string}
 * @private
 */
const Property = {
  RENDER_ORDER: 'renderOrder'
};


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
const VectorLayer = function(opt_options) {
  const options = opt_options ?
    opt_options : /** @type {olx.layer.VectorOptions} */ ({});

  const baseOptions = Object(__WEBPACK_IMPORTED_MODULE_4__obj_js__["a" /* assign */])({}, options);

  delete baseOptions.style;
  delete baseOptions.renderBuffer;
  delete baseOptions.updateWhileAnimating;
  delete baseOptions.updateWhileInteracting;
  __WEBPACK_IMPORTED_MODULE_2__layer_Layer_js__["a" /* default */].call(this, /** @type {olx.layer.LayerOptions} */ (baseOptions));

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
  this.renderMode_ = options.renderMode || __WEBPACK_IMPORTED_MODULE_3__layer_VectorRenderType_js__["a" /* default */].VECTOR;

  /**
   * The layer type.
   * @protected
   * @type {ol.LayerType}
   */
  this.type = __WEBPACK_IMPORTED_MODULE_1__LayerType_js__["a" /* default */].VECTOR;

};

Object(__WEBPACK_IMPORTED_MODULE_0__index_js__["g" /* inherits */])(VectorLayer, __WEBPACK_IMPORTED_MODULE_2__layer_Layer_js__["a" /* default */]);


/**
 * @return {boolean} Declutter.
 */
VectorLayer.prototype.getDeclutter = function() {
  return this.declutter_;
};


/**
 * @param {boolean} declutter Declutter.
 */
VectorLayer.prototype.setDeclutter = function(declutter) {
  this.declutter_ = declutter;
};


/**
 * @return {number|undefined} Render buffer.
 */
VectorLayer.prototype.getRenderBuffer = function() {
  return this.renderBuffer_;
};


/**
 * @return {function(ol.Feature, ol.Feature): number|null|undefined} Render
 *     order.
 */
VectorLayer.prototype.getRenderOrder = function() {
  return /** @type {ol.RenderOrderFunction|null|undefined} */ (this.get(Property.RENDER_ORDER));
};


/**
 * Return the associated {@link ol.source.Vector vectorsource} of the layer.
 * @function
 * @return {ol.source.Vector} Source.
 * @api
 */
VectorLayer.prototype.getSource;


/**
 * Get the style for features.  This returns whatever was passed to the `style`
 * option at construction or to the `setStyle` method.
 * @return {ol.style.Style|Array.<ol.style.Style>|ol.StyleFunction}
 *     Layer style.
 * @api
 */
VectorLayer.prototype.getStyle = function() {
  return this.style_;
};


/**
 * Get the style function.
 * @return {ol.StyleFunction|undefined} Layer style function.
 * @api
 */
VectorLayer.prototype.getStyleFunction = function() {
  return this.styleFunction_;
};


/**
 * @return {boolean} Whether the rendered layer should be updated while
 *     animating.
 */
VectorLayer.prototype.getUpdateWhileAnimating = function() {
  return this.updateWhileAnimating_;
};


/**
 * @return {boolean} Whether the rendered layer should be updated while
 *     interacting.
 */
VectorLayer.prototype.getUpdateWhileInteracting = function() {
  return this.updateWhileInteracting_;
};


/**
 * @param {ol.RenderOrderFunction|null|undefined} renderOrder
 *     Render order.
 */
VectorLayer.prototype.setRenderOrder = function(renderOrder) {
  this.set(Property.RENDER_ORDER, renderOrder);
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
VectorLayer.prototype.setStyle = function(style) {
  this.style_ = style !== undefined ? style : __WEBPACK_IMPORTED_MODULE_5__style_Style_js__["a" /* default */].defaultFunction;
  this.styleFunction_ = style === null ?
    undefined : __WEBPACK_IMPORTED_MODULE_5__style_Style_js__["a" /* default */].createFunction(this.style_);
  this.changed();
};


/**
 * @return {ol.layer.VectorRenderType|string} The render mode.
 */
VectorLayer.prototype.getRenderMode = function() {
  return this.renderMode_;
};


/* harmony default export */ __webpack_exports__["a"] = (VectorLayer);


/***/ }),
/* 254 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__asserts_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__geom_GeometryType_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_Circle_js__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_Fill_js__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_Stroke_js__ = __webpack_require__(140);
/**
 * @module ol/style/Style
 */






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
const Style = function(opt_options) {

  const options = opt_options || {};

  /**
   * @private
   * @type {string|ol.geom.Geometry|ol.StyleGeometryFunction}
   */
  this.geometry_ = null;

  /**
   * @private
   * @type {!ol.StyleGeometryFunction}
   */
  this.geometryFunction_ = Style.defaultGeometryFunction;

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
Style.prototype.clone = function() {
  let geometry = this.getGeometry();
  if (geometry && geometry.clone) {
    geometry = geometry.clone();
  }
  return new Style({
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
Style.prototype.getRenderer = function() {
  return this.renderer_;
};


/**
 * Sets a custom renderer function for this style. When set, `fill`, `stroke`
 * and `image` options of the style will be ignored.
 * @param {ol.StyleRenderFunction|null} renderer Custom renderer function.
 * @api
 */
Style.prototype.setRenderer = function(renderer) {
  this.renderer_ = renderer;
};


/**
 * Get the geometry to be rendered.
 * @return {string|ol.geom.Geometry|ol.StyleGeometryFunction}
 * Feature property or geometry or function that returns the geometry that will
 * be rendered with this style.
 * @api
 */
Style.prototype.getGeometry = function() {
  return this.geometry_;
};


/**
 * Get the function used to generate a geometry for rendering.
 * @return {!ol.StyleGeometryFunction} Function that is called with a feature
 * and returns the geometry to render instead of the feature's geometry.
 * @api
 */
Style.prototype.getGeometryFunction = function() {
  return this.geometryFunction_;
};


/**
 * Get the fill style.
 * @return {ol.style.Fill} Fill style.
 * @api
 */
Style.prototype.getFill = function() {
  return this.fill_;
};


/**
 * Set the fill style.
 * @param {ol.style.Fill} fill Fill style.
 * @api
 */
Style.prototype.setFill = function(fill) {
  this.fill_ = fill;
};


/**
 * Get the image style.
 * @return {ol.style.Image} Image style.
 * @api
 */
Style.prototype.getImage = function() {
  return this.image_;
};


/**
 * Set the image style.
 * @param {ol.style.Image} image Image style.
 * @api
 */
Style.prototype.setImage = function(image) {
  this.image_ = image;
};


/**
 * Get the stroke style.
 * @return {ol.style.Stroke} Stroke style.
 * @api
 */
Style.prototype.getStroke = function() {
  return this.stroke_;
};


/**
 * Set the stroke style.
 * @param {ol.style.Stroke} stroke Stroke style.
 * @api
 */
Style.prototype.setStroke = function(stroke) {
  this.stroke_ = stroke;
};


/**
 * Get the text style.
 * @return {ol.style.Text} Text style.
 * @api
 */
Style.prototype.getText = function() {
  return this.text_;
};


/**
 * Set the text style.
 * @param {ol.style.Text} text Text style.
 * @api
 */
Style.prototype.setText = function(text) {
  this.text_ = text;
};


/**
 * Get the z-index for the style.
 * @return {number|undefined} ZIndex.
 * @api
 */
Style.prototype.getZIndex = function() {
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
Style.prototype.setGeometry = function(geometry) {
  if (typeof geometry === 'function') {
    this.geometryFunction_ = geometry;
  } else if (typeof geometry === 'string') {
    this.geometryFunction_ = function(feature) {
      return /** @type {ol.geom.Geometry} */ (feature.get(geometry));
    };
  } else if (!geometry) {
    this.geometryFunction_ = Style.defaultGeometryFunction;
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
Style.prototype.setZIndex = function(zIndex) {
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
Style.createFunction = function(obj) {
  let styleFunction;

  if (typeof obj === 'function') {
    styleFunction = obj;
  } else {
    /**
     * @type {Array.<ol.style.Style>}
     */
    let styles;
    if (Array.isArray(obj)) {
      styles = obj;
    } else {
      Object(__WEBPACK_IMPORTED_MODULE_0__asserts_js__["a" /* assert */])(obj instanceof Style,
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
 */
let defaultStyles = null;


/**
 * @param {ol.Feature|ol.render.Feature} feature Feature.
 * @param {number} resolution Resolution.
 * @return {Array.<ol.style.Style>} Style.
 */
Style.defaultFunction = function(feature, resolution) {
  // We don't use an immediately-invoked function
  // and a closure so we don't get an error at script evaluation time in
  // browsers that do not support Canvas. (ol.style.Circle does
  // canvas.getContext('2d') at construction time, which will cause an.error
  // in such browsers.)
  if (!defaultStyles) {
    const fill = new __WEBPACK_IMPORTED_MODULE_3__style_Fill_js__["a" /* default */]({
      color: 'rgba(255,255,255,0.4)'
    });
    const stroke = new __WEBPACK_IMPORTED_MODULE_4__style_Stroke_js__["a" /* default */]({
      color: '#3399CC',
      width: 1.25
    });
    defaultStyles = [
      new Style({
        image: new __WEBPACK_IMPORTED_MODULE_2__style_Circle_js__["a" /* default */]({
          fill: fill,
          stroke: stroke,
          radius: 5
        }),
        fill: fill,
        stroke: stroke
      })
    ];
  }
  return defaultStyles;
};


/**
 * Default styles for editing features.
 * @return {Object.<ol.geom.GeometryType, Array.<ol.style.Style>>} Styles
 */
Style.createDefaultEditing = function() {
  /** @type {Object.<ol.geom.GeometryType, Array.<ol.style.Style>>} */
  const styles = {};
  const white = [255, 255, 255, 1];
  const blue = [0, 153, 255, 1];
  const width = 3;
  styles[__WEBPACK_IMPORTED_MODULE_1__geom_GeometryType_js__["a" /* default */].POLYGON] = [
    new Style({
      fill: new __WEBPACK_IMPORTED_MODULE_3__style_Fill_js__["a" /* default */]({
        color: [255, 255, 255, 0.5]
      })
    })
  ];
  styles[__WEBPACK_IMPORTED_MODULE_1__geom_GeometryType_js__["a" /* default */].MULTI_POLYGON] =
      styles[__WEBPACK_IMPORTED_MODULE_1__geom_GeometryType_js__["a" /* default */].POLYGON];

  styles[__WEBPACK_IMPORTED_MODULE_1__geom_GeometryType_js__["a" /* default */].LINE_STRING] = [
    new Style({
      stroke: new __WEBPACK_IMPORTED_MODULE_4__style_Stroke_js__["a" /* default */]({
        color: white,
        width: width + 2
      })
    }),
    new Style({
      stroke: new __WEBPACK_IMPORTED_MODULE_4__style_Stroke_js__["a" /* default */]({
        color: blue,
        width: width
      })
    })
  ];
  styles[__WEBPACK_IMPORTED_MODULE_1__geom_GeometryType_js__["a" /* default */].MULTI_LINE_STRING] =
      styles[__WEBPACK_IMPORTED_MODULE_1__geom_GeometryType_js__["a" /* default */].LINE_STRING];

  styles[__WEBPACK_IMPORTED_MODULE_1__geom_GeometryType_js__["a" /* default */].CIRCLE] =
      styles[__WEBPACK_IMPORTED_MODULE_1__geom_GeometryType_js__["a" /* default */].POLYGON].concat(
        styles[__WEBPACK_IMPORTED_MODULE_1__geom_GeometryType_js__["a" /* default */].LINE_STRING]
      );


  styles[__WEBPACK_IMPORTED_MODULE_1__geom_GeometryType_js__["a" /* default */].POINT] = [
    new Style({
      image: new __WEBPACK_IMPORTED_MODULE_2__style_Circle_js__["a" /* default */]({
        radius: width * 2,
        fill: new __WEBPACK_IMPORTED_MODULE_3__style_Fill_js__["a" /* default */]({
          color: blue
        }),
        stroke: new __WEBPACK_IMPORTED_MODULE_4__style_Stroke_js__["a" /* default */]({
          color: white,
          width: width / 2
        })
      }),
      zIndex: Infinity
    })
  ];
  styles[__WEBPACK_IMPORTED_MODULE_1__geom_GeometryType_js__["a" /* default */].MULTI_POINT] =
      styles[__WEBPACK_IMPORTED_MODULE_1__geom_GeometryType_js__["a" /* default */].POINT];

  styles[__WEBPACK_IMPORTED_MODULE_1__geom_GeometryType_js__["a" /* default */].GEOMETRY_COLLECTION] =
      styles[__WEBPACK_IMPORTED_MODULE_1__geom_GeometryType_js__["a" /* default */].POLYGON].concat(
        styles[__WEBPACK_IMPORTED_MODULE_1__geom_GeometryType_js__["a" /* default */].LINE_STRING],
        styles[__WEBPACK_IMPORTED_MODULE_1__geom_GeometryType_js__["a" /* default */].POINT]
      );

  return styles;
};


/**
 * Function that is called with a feature and returns its default geometry.
 * @param {ol.Feature|ol.render.Feature} feature Feature to get the geometry
 *     for.
 * @return {ol.geom.Geometry|ol.render.Feature|undefined} Geometry to render.
 */
Style.defaultGeometryFunction = function(feature) {
  return feature.getGeometry();
};
/* harmony default export */ __webpack_exports__["a"] = (Style);


/***/ }),
/* 255 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_RegularShape_js__ = __webpack_require__(256);
/**
 * @module ol/style/Circle
 */



/**
 * @classdesc
 * Set circle style for vector features.
 *
 * @constructor
 * @param {olx.style.CircleOptions=} opt_options Options.
 * @extends {ol.style.RegularShape}
 * @api
 */
const CircleStyle = function(opt_options) {

  const options = opt_options || {};

  __WEBPACK_IMPORTED_MODULE_1__style_RegularShape_js__["a" /* default */].call(this, {
    points: Infinity,
    fill: options.fill,
    radius: options.radius,
    snapToPixel: options.snapToPixel,
    stroke: options.stroke,
    atlasManager: options.atlasManager
  });

};

Object(__WEBPACK_IMPORTED_MODULE_0__index_js__["g" /* inherits */])(CircleStyle, __WEBPACK_IMPORTED_MODULE_1__style_RegularShape_js__["a" /* default */]);


/**
 * Clones the style.  If an atlasmanager was provided to the original style it will be used in the cloned style, too.
 * @return {ol.style.Circle} The cloned style.
 * @override
 * @api
 */
CircleStyle.prototype.clone = function() {
  const style = new CircleStyle({
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
CircleStyle.prototype.setRadius = function(radius) {
  this.radius_ = radius;
  this.render_(this.atlasManager_);
};
/* harmony default export */ __webpack_exports__["a"] = (CircleStyle);


/***/ }),
/* 256 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__colorlike_js__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__has_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ImageState_js__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__render_canvas_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_Image_js__ = __webpack_require__(257);
/**
 * @module ol/style/RegularShape
 */








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
const RegularShape = function(options) {
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
  const snapToPixel = options.snapToPixel !== undefined ?
    options.snapToPixel : true;

  /**
   * @type {boolean}
   */
  const rotateWithView = options.rotateWithView !== undefined ?
    options.rotateWithView : false;

  __WEBPACK_IMPORTED_MODULE_6__style_Image_js__["a" /* default */].call(this, {
    opacity: 1,
    rotateWithView: rotateWithView,
    rotation: options.rotation !== undefined ? options.rotation : 0,
    scale: 1,
    snapToPixel: snapToPixel
  });
};

Object(__WEBPACK_IMPORTED_MODULE_0__index_js__["g" /* inherits */])(RegularShape, __WEBPACK_IMPORTED_MODULE_6__style_Image_js__["a" /* default */]);


/**
 * Clones the style. If an atlasmanager was provided to the original style it will be used in the cloned style, too.
 * @return {ol.style.RegularShape} The cloned style.
 * @api
 */
RegularShape.prototype.clone = function() {
  const style = new RegularShape({
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
RegularShape.prototype.getAnchor = function() {
  return this.anchor_;
};


/**
 * Get the angle used in generating the shape.
 * @return {number} Shape's rotation in radians.
 * @api
 */
RegularShape.prototype.getAngle = function() {
  return this.angle_;
};


/**
 * Get the fill style for the shape.
 * @return {ol.style.Fill} Fill style.
 * @api
 */
RegularShape.prototype.getFill = function() {
  return this.fill_;
};


/**
 * @inheritDoc
 */
RegularShape.prototype.getHitDetectionImage = function(pixelRatio) {
  return this.hitDetectionCanvas_;
};


/**
 * @inheritDoc
 * @api
 */
RegularShape.prototype.getImage = function(pixelRatio) {
  return this.canvas_;
};


/**
 * @inheritDoc
 */
RegularShape.prototype.getImageSize = function() {
  return this.imageSize_;
};


/**
 * @inheritDoc
 */
RegularShape.prototype.getHitDetectionImageSize = function() {
  return this.hitDetectionImageSize_;
};


/**
 * @inheritDoc
 */
RegularShape.prototype.getImageState = function() {
  return __WEBPACK_IMPORTED_MODULE_4__ImageState_js__["a" /* default */].LOADED;
};


/**
 * @inheritDoc
 * @api
 */
RegularShape.prototype.getOrigin = function() {
  return this.origin_;
};


/**
 * Get the number of points for generating the shape.
 * @return {number} Number of points for stars and regular polygons.
 * @api
 */
RegularShape.prototype.getPoints = function() {
  return this.points_;
};


/**
 * Get the (primary) radius for the shape.
 * @return {number} Radius.
 * @api
 */
RegularShape.prototype.getRadius = function() {
  return this.radius_;
};


/**
 * Get the secondary radius for the shape.
 * @return {number|undefined} Radius2.
 * @api
 */
RegularShape.prototype.getRadius2 = function() {
  return this.radius2_;
};


/**
 * @inheritDoc
 * @api
 */
RegularShape.prototype.getSize = function() {
  return this.size_;
};


/**
 * Get the stroke style for the shape.
 * @return {ol.style.Stroke} Stroke style.
 * @api
 */
RegularShape.prototype.getStroke = function() {
  return this.stroke_;
};


/**
 * @inheritDoc
 */
RegularShape.prototype.listenImageChange = function(listener, thisArg) {};


/**
 * @inheritDoc
 */
RegularShape.prototype.load = function() {};


/**
 * @inheritDoc
 */
RegularShape.prototype.unlistenImageChange = function(listener, thisArg) {};


/**
 * @protected
 * @param {ol.style.AtlasManager|undefined} atlasManager An atlas manager.
 */
RegularShape.prototype.render_ = function(atlasManager) {
  let imageSize;
  let lineCap = '';
  let lineJoin = '';
  let miterLimit = 0;
  let lineDash = null;
  let lineDashOffset = 0;
  let strokeStyle;
  let strokeWidth = 0;

  if (this.stroke_) {
    strokeStyle = this.stroke_.getColor();
    if (strokeStyle === null) {
      strokeStyle = __WEBPACK_IMPORTED_MODULE_5__render_canvas_js__["k" /* defaultStrokeStyle */];
    }
    strokeStyle = Object(__WEBPACK_IMPORTED_MODULE_1__colorlike_js__["a" /* asColorLike */])(strokeStyle);
    strokeWidth = this.stroke_.getWidth();
    if (strokeWidth === undefined) {
      strokeWidth = __WEBPACK_IMPORTED_MODULE_5__render_canvas_js__["h" /* defaultLineWidth */];
    }
    lineDash = this.stroke_.getLineDash();
    lineDashOffset = this.stroke_.getLineDashOffset();
    if (!__WEBPACK_IMPORTED_MODULE_3__has_js__["a" /* CANVAS_LINE_DASH */]) {
      lineDash = null;
      lineDashOffset = 0;
    }
    lineJoin = this.stroke_.getLineJoin();
    if (lineJoin === undefined) {
      lineJoin = __WEBPACK_IMPORTED_MODULE_5__render_canvas_js__["g" /* defaultLineJoin */];
    }
    lineCap = this.stroke_.getLineCap();
    if (lineCap === undefined) {
      lineCap = __WEBPACK_IMPORTED_MODULE_5__render_canvas_js__["d" /* defaultLineCap */];
    }
    miterLimit = this.stroke_.getMiterLimit();
    if (miterLimit === undefined) {
      miterLimit = __WEBPACK_IMPORTED_MODULE_5__render_canvas_js__["i" /* defaultMiterLimit */];
    }
  }

  let size = 2 * (this.radius_ + strokeWidth) + 1;

  /** @type {ol.RegularShapeRenderOptions} */
  const renderOptions = {
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
    const context = Object(__WEBPACK_IMPORTED_MODULE_2__dom_js__["a" /* createCanvasContext2D */])(size, size);
    this.canvas_ = context.canvas;

    // canvas.width and height are rounded to the closest integer
    size = this.canvas_.width;
    imageSize = size;

    this.draw_(renderOptions, context, 0, 0);

    this.createHitDetectionCanvas_(renderOptions);
  } else {
    // an atlas manager is used, add the symbol to an atlas
    size = Math.round(size);

    const hasCustomHitDetectionImage = !this.fill_;
    let renderHitDetectionCallback;
    if (hasCustomHitDetectionImage) {
      // render the hit-detection image into a separate atlas image
      renderHitDetectionCallback =
          this.drawHitDetectionCanvas_.bind(this, renderOptions);
    }

    const id = this.getChecksum();
    const info = atlasManager.add(
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
RegularShape.prototype.draw_ = function(renderOptions, context, x, y) {
  let i, angle0, radiusC;
  // reset transform
  context.setTransform(1, 0, 0, 1, 0, 0);

  // then move to (x, y)
  context.translate(x, y);

  context.beginPath();

  let points = this.points_;
  if (points === Infinity) {
    context.arc(
      renderOptions.size / 2, renderOptions.size / 2,
      this.radius_, 0, 2 * Math.PI, true);
  } else {
    const radius2 = (this.radius2_ !== undefined) ? this.radius2_
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
    let color = this.fill_.getColor();
    if (color === null) {
      color = __WEBPACK_IMPORTED_MODULE_5__render_canvas_js__["b" /* defaultFillStyle */];
    }
    context.fillStyle = Object(__WEBPACK_IMPORTED_MODULE_1__colorlike_js__["a" /* asColorLike */])(color);
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
RegularShape.prototype.createHitDetectionCanvas_ = function(renderOptions) {
  this.hitDetectionImageSize_ = [renderOptions.size, renderOptions.size];
  if (this.fill_) {
    this.hitDetectionCanvas_ = this.canvas_;
    return;
  }

  // if no fill style is set, create an extra hit-detection image with a
  // default fill style
  const context = Object(__WEBPACK_IMPORTED_MODULE_2__dom_js__["a" /* createCanvasContext2D */])(renderOptions.size, renderOptions.size);
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
RegularShape.prototype.drawHitDetectionCanvas_ = function(renderOptions, context, x, y) {
  // reset transform
  context.setTransform(1, 0, 0, 1, 0, 0);

  // then move to (x, y)
  context.translate(x, y);

  context.beginPath();

  let points = this.points_;
  if (points === Infinity) {
    context.arc(
      renderOptions.size / 2, renderOptions.size / 2,
      this.radius_, 0, 2 * Math.PI, true);
  } else {
    const radius2 = (this.radius2_ !== undefined) ? this.radius2_
      : this.radius_;
    if (radius2 !== this.radius_) {
      points = 2 * points;
    }
    let i, radiusC, angle0;
    for (i = 0; i <= points; i++) {
      angle0 = i * 2 * Math.PI / points - Math.PI / 2 + this.angle_;
      radiusC = i % 2 === 0 ? this.radius_ : radius2;
      context.lineTo(renderOptions.size / 2 + radiusC * Math.cos(angle0),
        renderOptions.size / 2 + radiusC * Math.sin(angle0));
    }
  }

  context.fillStyle = __WEBPACK_IMPORTED_MODULE_5__render_canvas_js__["b" /* defaultFillStyle */];
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
RegularShape.prototype.getChecksum = function() {
  const strokeChecksum = this.stroke_ ?
    this.stroke_.getChecksum() : '-';
  const fillChecksum = this.fill_ ?
    this.fill_.getChecksum() : '-';

  const recalculate = !this.checksums_ ||
      (strokeChecksum != this.checksums_[1] ||
      fillChecksum != this.checksums_[2] ||
      this.radius_ != this.checksums_[3] ||
      this.radius2_ != this.checksums_[4] ||
      this.angle_ != this.checksums_[5] ||
      this.points_ != this.checksums_[6]);

  if (recalculate) {
    const checksum = 'r' + strokeChecksum + fillChecksum +
        (this.radius_ !== undefined ? this.radius_.toString() : '-') +
        (this.radius2_ !== undefined ? this.radius2_.toString() : '-') +
        (this.angle_ !== undefined ? this.angle_.toString() : '-') +
        (this.points_ !== undefined ? this.points_.toString() : '-');
    this.checksums_ = [checksum, strokeChecksum, fillChecksum,
      this.radius_, this.radius2_, this.angle_, this.points_];
  }

  return this.checksums_[0];
};
/* harmony default export */ __webpack_exports__["a"] = (RegularShape);


/***/ }),
/* 257 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @module ol/style/Image
 */
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
const ImageStyle = function(options) {

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
ImageStyle.prototype.getOpacity = function() {
  return this.opacity_;
};


/**
 * Determine whether the symbolizer rotates with the map.
 * @return {boolean} Rotate with map.
 * @api
 */
ImageStyle.prototype.getRotateWithView = function() {
  return this.rotateWithView_;
};


/**
 * Get the symoblizer rotation.
 * @return {number} Rotation.
 * @api
 */
ImageStyle.prototype.getRotation = function() {
  return this.rotation_;
};


/**
 * Get the symbolizer scale.
 * @return {number} Scale.
 * @api
 */
ImageStyle.prototype.getScale = function() {
  return this.scale_;
};


/**
 * Determine whether the symbolizer should be snapped to a pixel.
 * @return {boolean} The symbolizer should snap to a pixel.
 * @api
 */
ImageStyle.prototype.getSnapToPixel = function() {
  return this.snapToPixel_;
};


/**
 * Get the anchor point in pixels. The anchor determines the center point for the
 * symbolizer.
 * @abstract
 * @return {Array.<number>} Anchor.
 */
ImageStyle.prototype.getAnchor = function() {};


/**
 * Get the image element for the symbolizer.
 * @abstract
 * @param {number} pixelRatio Pixel ratio.
 * @return {HTMLCanvasElement|HTMLVideoElement|Image} Image element.
 */
ImageStyle.prototype.getImage = function(pixelRatio) {};


/**
 * @abstract
 * @param {number} pixelRatio Pixel ratio.
 * @return {HTMLCanvasElement|HTMLVideoElement|Image} Image element.
 */
ImageStyle.prototype.getHitDetectionImage = function(pixelRatio) {};


/**
 * @abstract
 * @return {ol.ImageState} Image state.
 */
ImageStyle.prototype.getImageState = function() {};


/**
 * @abstract
 * @return {ol.Size} Image size.
 */
ImageStyle.prototype.getImageSize = function() {};


/**
 * @abstract
 * @return {ol.Size} Size of the hit-detection image.
 */
ImageStyle.prototype.getHitDetectionImageSize = function() {};


/**
 * Get the origin of the symbolizer.
 * @abstract
 * @return {Array.<number>} Origin.
 */
ImageStyle.prototype.getOrigin = function() {};


/**
 * Get the size of the symbolizer (in pixels).
 * @abstract
 * @return {ol.Size} Size.
 */
ImageStyle.prototype.getSize = function() {};


/**
 * Set the opacity.
 *
 * @param {number} opacity Opacity.
 * @api
 */
ImageStyle.prototype.setOpacity = function(opacity) {
  this.opacity_ = opacity;
};


/**
 * Set whether to rotate the style with the view.
 *
 * @param {boolean} rotateWithView Rotate with map.
 */
ImageStyle.prototype.setRotateWithView = function(rotateWithView) {
  this.rotateWithView_ = rotateWithView;
};


/**
 * Set the rotation.
 *
 * @param {number} rotation Rotation.
 * @api
 */
ImageStyle.prototype.setRotation = function(rotation) {
  this.rotation_ = rotation;
};


/**
 * Set the scale.
 *
 * @param {number} scale Scale.
 * @api
 */
ImageStyle.prototype.setScale = function(scale) {
  this.scale_ = scale;
};


/**
 * Set whether to snap the image to the closest pixel.
 *
 * @param {boolean} snapToPixel Snap to pixel?
 */
ImageStyle.prototype.setSnapToPixel = function(snapToPixel) {
  this.snapToPixel_ = snapToPixel;
};


/**
 * @abstract
 * @param {function(this: T, ol.events.Event)} listener Listener function.
 * @param {T} thisArg Value to use as `this` when executing `listener`.
 * @return {ol.EventsKey|undefined} Listener key.
 * @template T
 */
ImageStyle.prototype.listenImageChange = function(listener, thisArg) {};


/**
 * Load not yet loaded URI.
 * @abstract
 */
ImageStyle.prototype.load = function() {};


/**
 * @abstract
 * @param {function(this: T, ol.events.Event)} listener Listener function.
 * @param {T} thisArg Value to use as `this` when executing `listener`.
 * @template T
 */
ImageStyle.prototype.unlistenImageChange = function(listener, thisArg) {};
/* harmony default export */ __webpack_exports__["a"] = (ImageStyle);


/***/ }),
/* 258 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color_js__ = __webpack_require__(39);
/**
 * @module ol/style/Fill
 */



/**
 * @classdesc
 * Set fill style for vector features.
 *
 * @constructor
 * @param {olx.style.FillOptions=} opt_options Options.
 * @api
 */
const Fill = function(opt_options) {

  const options = opt_options || {};

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
Fill.prototype.clone = function() {
  const color = this.getColor();
  return new Fill({
    color: (color && color.slice) ? color.slice() : color || undefined
  });
};


/**
 * Get the fill color.
 * @return {ol.Color|ol.ColorLike} Color.
 * @api
 */
Fill.prototype.getColor = function() {
  return this.color_;
};


/**
 * Set the color.
 *
 * @param {ol.Color|ol.ColorLike} color Color.
 * @api
 */
Fill.prototype.setColor = function(color) {
  this.color_ = color;
  this.checksum_ = undefined;
};


/**
 * @return {string} The checksum.
 */
Fill.prototype.getChecksum = function() {
  if (this.checksum_ === undefined) {
    if (
      this.color_ instanceof CanvasPattern ||
        this.color_ instanceof CanvasGradient
    ) {
      this.checksum_ = Object(__WEBPACK_IMPORTED_MODULE_0__index_js__["f" /* getUid */])(this.color_).toString();
    } else {
      this.checksum_ = 'f' + (this.color_ ? Object(__WEBPACK_IMPORTED_MODULE_1__color_js__["b" /* asString */])(this.color_) : '-');
    }
  }

  return this.checksum_;
};
/* harmony default export */ __webpack_exports__["a"] = (Fill);


/***/ }),
/* 259 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TileState_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VectorImageTile_js__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__VectorTile_js__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__size_js__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__source_UrlTile_js__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tilecoord_js__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tilegrid_js__ = __webpack_require__(80);
/**
 * @module ol/source/VectorTile
 */









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
const VectorTileSource = function(options) {
  const projection = options.projection || 'EPSG:3857';

  const extent = options.extent || Object(__WEBPACK_IMPORTED_MODULE_7__tilegrid_js__["c" /* extentFromProjection */])(projection);

  const tileGrid = options.tileGrid || Object(__WEBPACK_IMPORTED_MODULE_7__tilegrid_js__["b" /* createXYZ */])({
    extent: extent,
    maxZoom: options.maxZoom || 22,
    minZoom: options.minZoom,
    tileSize: options.tileSize || 512
  });

  __WEBPACK_IMPORTED_MODULE_5__source_UrlTile_js__["a" /* default */].call(this, {
    attributions: options.attributions,
    cacheSize: options.cacheSize !== undefined ? options.cacheSize : 128,
    extent: extent,
    opaque: false,
    projection: projection,
    state: options.state,
    tileGrid: tileGrid,
    tileLoadFunction: options.tileLoadFunction ? options.tileLoadFunction : __WEBPACK_IMPORTED_MODULE_2__VectorImageTile_js__["b" /* defaultLoadFunction */],
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
  this.tileClass = options.tileClass ? options.tileClass : __WEBPACK_IMPORTED_MODULE_3__VectorTile_js__["a" /* default */];

  /**
   * @private
   * @type {Object.<string,ol.tilegrid.TileGrid>}
   */
  this.tileGrids_ = {};

};

Object(__WEBPACK_IMPORTED_MODULE_0__index_js__["g" /* inherits */])(VectorTileSource, __WEBPACK_IMPORTED_MODULE_5__source_UrlTile_js__["a" /* default */]);


/**
 * @return {boolean} The source can have overlapping geometries.
 */
VectorTileSource.prototype.getOverlaps = function() {
  return this.overlaps_;
};

/**
 * clear {@link ol.TileCache} and delete all source tiles
 * @api
 */
VectorTileSource.prototype.clear = function() {
  this.tileCache.clear();
  this.sourceTiles_ = {};
};

/**
 * @inheritDoc
 */
VectorTileSource.prototype.getTile = function(z, x, y, pixelRatio, projection) {
  const tileCoordKey = __WEBPACK_IMPORTED_MODULE_6__tilecoord_js__["a" /* default */].getKeyZXY(z, x, y);
  if (this.tileCache.containsKey(tileCoordKey)) {
    return /** @type {!ol.Tile} */ (this.tileCache.get(tileCoordKey));
  } else {
    const tileCoord = [z, x, y];
    const urlTileCoord = this.getTileCoordForTileUrlFunction(
      tileCoord, projection);
    const tile = new __WEBPACK_IMPORTED_MODULE_2__VectorImageTile_js__["a" /* default */](
      tileCoord,
      urlTileCoord !== null ? __WEBPACK_IMPORTED_MODULE_1__TileState_js__["a" /* default */].IDLE : __WEBPACK_IMPORTED_MODULE_1__TileState_js__["a" /* default */].EMPTY,
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
VectorTileSource.prototype.getTileGridForProjection = function(projection) {
  const code = projection.getCode();
  let tileGrid = this.tileGrids_[code];
  if (!tileGrid) {
    // A tile grid that matches the tile size of the source tile grid is more
    // likely to have 1:1 relationships between source tiles and rendered tiles.
    const sourceTileGrid = this.tileGrid;
    tileGrid = this.tileGrids_[code] = Object(__WEBPACK_IMPORTED_MODULE_7__tilegrid_js__["a" /* createForProjection */])(projection, undefined,
      sourceTileGrid ? sourceTileGrid.getTileSize(sourceTileGrid.getMinZoom()) : undefined);
  }
  return tileGrid;
};


/**
 * @inheritDoc
 */
VectorTileSource.prototype.getTilePixelRatio = function(pixelRatio) {
  return pixelRatio;
};


/**
 * @inheritDoc
 */
VectorTileSource.prototype.getTilePixelSize = function(z, pixelRatio, projection) {
  const tileGrid = this.getTileGridForProjection(projection);
  const tileSize = Object(__WEBPACK_IMPORTED_MODULE_4__size_js__["d" /* toSize */])(tileGrid.getTileSize(z), this.tmpSize);
  return [Math.round(tileSize[0] * pixelRatio), Math.round(tileSize[1] * pixelRatio)];
};
/* harmony default export */ __webpack_exports__["a"] = (VectorTileSource);


/***/ }),
/* 260 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = defaultLoadFunction;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Tile_js__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TileState_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dom_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__extent_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__events_EventType_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__featureloader_js__ = __webpack_require__(261);
/**
 * @module ol/VectorImageTile
 */









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
const VectorImageTile = function(tileCoord, state, sourceRevision, format,
  tileLoadFunction, urlTileCoord, tileUrlFunction, sourceTileGrid, tileGrid,
  sourceTiles, pixelRatio, projection, tileClass, handleTileChange, opt_options) {

  __WEBPACK_IMPORTED_MODULE_1__Tile_js__["a" /* default */].call(this, tileCoord, state, opt_options);

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
    const extent = tileGrid.getTileCoordExtent(urlTileCoord);
    const resolution = tileGrid.getResolution(tileCoord[0]);
    const sourceZ = sourceTileGrid.getZForResolution(resolution);
    sourceTileGrid.forEachTileCoord(extent, sourceZ, function(sourceTileCoord) {
      let sharedExtent = Object(__WEBPACK_IMPORTED_MODULE_5__extent_js__["B" /* getIntersection */])(extent,
        sourceTileGrid.getTileCoordExtent(sourceTileCoord));
      const sourceExtent = sourceTileGrid.getExtent();
      if (sourceExtent) {
        sharedExtent = Object(__WEBPACK_IMPORTED_MODULE_5__extent_js__["B" /* getIntersection */])(sharedExtent, sourceExtent, sharedExtent);
      }
      if (Object(__WEBPACK_IMPORTED_MODULE_5__extent_js__["E" /* getWidth */])(sharedExtent) / resolution >= 0.5 &&
          Object(__WEBPACK_IMPORTED_MODULE_5__extent_js__["A" /* getHeight */])(sharedExtent) / resolution >= 0.5) {
        // only include source tile if overlap is at least 1 pixel
        const sourceTileKey = sourceTileCoord.toString();
        let sourceTile = sourceTiles[sourceTileKey];
        if (!sourceTile) {
          const tileUrl = tileUrlFunction(sourceTileCoord, pixelRatio, projection);
          sourceTile = sourceTiles[sourceTileKey] = new tileClass(sourceTileCoord,
            tileUrl == undefined ? __WEBPACK_IMPORTED_MODULE_2__TileState_js__["a" /* default */].EMPTY : __WEBPACK_IMPORTED_MODULE_2__TileState_js__["a" /* default */].IDLE,
            tileUrl == undefined ? '' : tileUrl,
            format, tileLoadFunction);
          this.sourceTileListenerKeys_.push(
            Object(__WEBPACK_IMPORTED_MODULE_4__events_js__["a" /* listen */])(sourceTile, __WEBPACK_IMPORTED_MODULE_6__events_EventType_js__["a" /* default */].CHANGE, handleTileChange));
        }
        sourceTile.consumers++;
        this.tileKeys.push(sourceTileKey);
      }
    }.bind(this));
  }

};

Object(__WEBPACK_IMPORTED_MODULE_0__index_js__["g" /* inherits */])(VectorImageTile, __WEBPACK_IMPORTED_MODULE_1__Tile_js__["a" /* default */]);


/**
 * @inheritDoc
 */
VectorImageTile.prototype.disposeInternal = function() {
  this.state = __WEBPACK_IMPORTED_MODULE_2__TileState_js__["a" /* default */].ABORT;
  this.changed();
  if (this.interimTile) {
    this.interimTile.dispose();
  }

  for (let i = 0, ii = this.tileKeys.length; i < ii; ++i) {
    const sourceTileKey = this.tileKeys[i];
    const sourceTile = this.getTile(sourceTileKey);
    sourceTile.consumers--;
    if (sourceTile.consumers == 0) {
      delete this.sourceTiles_[sourceTileKey];
      sourceTile.dispose();
    }
  }
  this.tileKeys.length = 0;
  this.sourceTiles_ = null;
  this.loadListenerKeys_.forEach(__WEBPACK_IMPORTED_MODULE_4__events_js__["e" /* unlistenByKey */]);
  this.loadListenerKeys_.length = 0;
  this.sourceTileListenerKeys_.forEach(__WEBPACK_IMPORTED_MODULE_4__events_js__["e" /* unlistenByKey */]);
  this.sourceTileListenerKeys_.length = 0;
  __WEBPACK_IMPORTED_MODULE_1__Tile_js__["a" /* default */].prototype.disposeInternal.call(this);
};


/**
 * @param {ol.layer.Layer} layer Layer.
 * @return {CanvasRenderingContext2D} The rendering context.
 */
VectorImageTile.prototype.getContext = function(layer) {
  const key = Object(__WEBPACK_IMPORTED_MODULE_0__index_js__["f" /* getUid */])(layer).toString();
  if (!(key in this.context_)) {
    this.context_[key] = Object(__WEBPACK_IMPORTED_MODULE_3__dom_js__["a" /* createCanvasContext2D */])();
  }
  return this.context_[key];
};


/**
 * Get the Canvas for this tile.
 * @param {ol.layer.Layer} layer Layer.
 * @return {HTMLCanvasElement} Canvas.
 */
VectorImageTile.prototype.getImage = function(layer) {
  return this.getReplayState(layer).renderedTileRevision == -1 ?
    null : this.getContext(layer).canvas;
};


/**
 * @param {ol.layer.Layer} layer Layer.
 * @return {ol.TileReplayState} The replay state.
 */
VectorImageTile.prototype.getReplayState = function(layer) {
  const key = Object(__WEBPACK_IMPORTED_MODULE_0__index_js__["f" /* getUid */])(layer).toString();
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
VectorImageTile.prototype.getKey = function() {
  return this.tileKeys.join('/') + '-' + this.sourceRevision_;
};


/**
 * @param {string} tileKey Key (tileCoord) of the source tile.
 * @return {ol.VectorTile} Source tile.
 */
VectorImageTile.prototype.getTile = function(tileKey) {
  return this.sourceTiles_[tileKey];
};


/**
 * @inheritDoc
 */
VectorImageTile.prototype.load = function() {
  // Source tiles with LOADED state - we just count them because once they are
  // loaded, we're no longer listening to state changes.
  let leftToLoad = 0;
  // Source tiles with ERROR state - we track them because they can still have
  // an ERROR state after another load attempt.
  const errorSourceTiles = {};

  if (this.state == __WEBPACK_IMPORTED_MODULE_2__TileState_js__["a" /* default */].IDLE) {
    this.setState(__WEBPACK_IMPORTED_MODULE_2__TileState_js__["a" /* default */].LOADING);
  }
  if (this.state == __WEBPACK_IMPORTED_MODULE_2__TileState_js__["a" /* default */].LOADING) {
    this.tileKeys.forEach(function(sourceTileKey) {
      const sourceTile = this.getTile(sourceTileKey);
      if (sourceTile.state == __WEBPACK_IMPORTED_MODULE_2__TileState_js__["a" /* default */].IDLE) {
        sourceTile.setLoader(this.loader_);
        sourceTile.load();
      }
      if (sourceTile.state == __WEBPACK_IMPORTED_MODULE_2__TileState_js__["a" /* default */].LOADING) {
        const key = Object(__WEBPACK_IMPORTED_MODULE_4__events_js__["a" /* listen */])(sourceTile, __WEBPACK_IMPORTED_MODULE_6__events_EventType_js__["a" /* default */].CHANGE, function(e) {
          const state = sourceTile.getState();
          if (state == __WEBPACK_IMPORTED_MODULE_2__TileState_js__["a" /* default */].LOADED ||
              state == __WEBPACK_IMPORTED_MODULE_2__TileState_js__["a" /* default */].ERROR) {
            const uid = Object(__WEBPACK_IMPORTED_MODULE_0__index_js__["f" /* getUid */])(sourceTile);
            if (state == __WEBPACK_IMPORTED_MODULE_2__TileState_js__["a" /* default */].ERROR) {
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
VectorImageTile.prototype.finishLoading_ = function() {
  let loaded = this.tileKeys.length;
  let empty = 0;
  for (let i = loaded - 1; i >= 0; --i) {
    const state = this.getTile(this.tileKeys[i]).getState();
    if (state != __WEBPACK_IMPORTED_MODULE_2__TileState_js__["a" /* default */].LOADED) {
      --loaded;
    }
    if (state == __WEBPACK_IMPORTED_MODULE_2__TileState_js__["a" /* default */].EMPTY) {
      ++empty;
    }
  }
  if (loaded == this.tileKeys.length) {
    this.loadListenerKeys_.forEach(__WEBPACK_IMPORTED_MODULE_4__events_js__["e" /* unlistenByKey */]);
    this.loadListenerKeys_.length = 0;
    this.setState(__WEBPACK_IMPORTED_MODULE_2__TileState_js__["a" /* default */].LOADED);
  } else {
    this.setState(empty == this.tileKeys.length ? __WEBPACK_IMPORTED_MODULE_2__TileState_js__["a" /* default */].EMPTY : __WEBPACK_IMPORTED_MODULE_2__TileState_js__["a" /* default */].ERROR);
  }
};

/* harmony default export */ __webpack_exports__["a"] = (VectorImageTile);

/**
 * Sets the loader for a tile.
 * @param {ol.VectorTile} tile Vector tile.
 * @param {string} url URL.
 */
function defaultLoadFunction(tile, url) {
  const loader = Object(__WEBPACK_IMPORTED_MODULE_7__featureloader_js__["a" /* loadFeaturesXhr */])(url, tile.getFormat(), tile.onLoad.bind(tile), tile.onError.bind(tile));
  tile.setLoader(loader);
}


/***/ }),
/* 261 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = loadFeaturesXhr;
/* unused harmony export xhr */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__format_FormatType_js__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__xml_js__ = __webpack_require__(262);
/**
 * @module ol/featureloader
 */





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
function loadFeaturesXhr(url, format, success, failure) {
  return (
    /**
     * @param {ol.Extent} extent Extent.
     * @param {number} resolution Resolution.
     * @param {ol.proj.Projection} projection Projection.
     * @this {ol.source.Vector|ol.VectorTile}
     */
    function(extent, resolution, projection) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET',
        typeof url === 'function' ? url(extent, resolution, projection) : url,
        true);
      if (format.getType() == __WEBPACK_IMPORTED_MODULE_1__format_FormatType_js__["a" /* default */].ARRAY_BUFFER) {
        xhr.responseType = 'arraybuffer';
      }
      /**
       * @param {Event} event Event.
       * @private
       */
      xhr.onload = function(event) {
        // status will be 0 for file:// urls
        if (!xhr.status || xhr.status >= 200 && xhr.status < 300) {
          const type = format.getType();
          /** @type {Document|Node|Object|string|undefined} */
          let source;
          if (type == __WEBPACK_IMPORTED_MODULE_1__format_FormatType_js__["a" /* default */].JSON || type == __WEBPACK_IMPORTED_MODULE_1__format_FormatType_js__["a" /* default */].TEXT) {
            source = xhr.responseText;
          } else if (type == __WEBPACK_IMPORTED_MODULE_1__format_FormatType_js__["a" /* default */].XML) {
            source = xhr.responseXML;
            if (!source) {
              source = Object(__WEBPACK_IMPORTED_MODULE_2__xml_js__["a" /* parse */])(xhr.responseText);
            }
          } else if (type == __WEBPACK_IMPORTED_MODULE_1__format_FormatType_js__["a" /* default */].ARRAY_BUFFER) {
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
}


/**
 * Create an XHR feature loader for a `url` and `format`. The feature loader
 * loads features (with XHR), parses the features, and adds them to the
 * vector source.
 * @param {string|ol.FeatureUrlFunction} url Feature URL service.
 * @param {ol.format.Feature} format Feature format.
 * @return {ol.FeatureLoader} The feature loader.
 * @api
 */
function xhr(url, format) {
  return loadFeaturesXhr(url, format,
    /**
       * @param {Array.<ol.Feature>} features The loaded features.
       * @param {ol.proj.Projection} dataProjection Data projection.
       * @this {ol.source.Vector}
       */
    function(features, dataProjection) {
      this.addFeatures(features);
    }, /* FIXME handle error */ __WEBPACK_IMPORTED_MODULE_0__index_js__["h" /* nullFunction */]);
}


/***/ }),
/* 262 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createElementNS */
/* unused harmony export getAllTextContent */
/* unused harmony export getAllTextContent_ */
/* unused harmony export isDocument */
/* unused harmony export isNode */
/* unused harmony export getAttributeNS */
/* unused harmony export setAttributeNS */
/* harmony export (immutable) */ __webpack_exports__["a"] = parse;
/* unused harmony export makeArrayExtender */
/* unused harmony export makeArrayPusher */
/* unused harmony export makeReplacer */
/* unused harmony export makeObjectPropertyPusher */
/* unused harmony export makeObjectPropertySetter */
/* unused harmony export makeChildAppender */
/* unused harmony export makeArraySerializer */
/* unused harmony export makeSimpleNodeFactory */
/* unused harmony export makeSequence */
/* unused harmony export makeStructureNS */
/* unused harmony export parseNode */
/* unused harmony export pushParseAndPop */
/* unused harmony export serialize */
/* unused harmony export pushSerializeAndPop */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array_js__ = __webpack_require__(2);
/**
 * @module ol/xml
 */



/**
 * This document should be used when creating nodes for XML serializations. This
 * document is also used by {@link ol.xml.createElementNS} and
 * {@link ol.xml.setAttributeNS}
 * @const
 * @type {Document}
 */
const DOCUMENT = document.implementation.createDocument('', '', null);
/* unused harmony export DOCUMENT */



/**
 * @param {string} namespaceURI Namespace URI.
 * @param {string} qualifiedName Qualified name.
 * @return {Node} Node.
 */
function createElementNS(namespaceURI, qualifiedName) {
  return DOCUMENT.createElementNS(namespaceURI, qualifiedName);
}


/**
 * Recursively grab all text content of child nodes into a single string.
 * @param {Node} node Node.
 * @param {boolean} normalizeWhitespace Normalize whitespace: remove all line
 * breaks.
 * @return {string} All text content.
 * @api
 */
function getAllTextContent(node, normalizeWhitespace) {
  return getAllTextContent_(node, normalizeWhitespace, []).join('');
}


/**
 * Recursively grab all text content of child nodes into a single string.
 * @param {Node} node Node.
 * @param {boolean} normalizeWhitespace Normalize whitespace: remove all line
 * breaks.
 * @param {Array.<string>} accumulator Accumulator.
 * @private
 * @return {Array.<string>} Accumulator.
 */
function getAllTextContent_(node, normalizeWhitespace, accumulator) {
  if (node.nodeType == Node.CDATA_SECTION_NODE ||
      node.nodeType == Node.TEXT_NODE) {
    if (normalizeWhitespace) {
      accumulator.push(String(node.nodeValue).replace(/(\r\n|\r|\n)/g, ''));
    } else {
      accumulator.push(node.nodeValue);
    }
  } else {
    let n;
    for (n = node.firstChild; n; n = n.nextSibling) {
      getAllTextContent_(n, normalizeWhitespace, accumulator);
    }
  }
  return accumulator;
}


/**
 * @param {?} value Value.
 * @return {boolean} Is document.
 */
function isDocument(value) {
  return value instanceof Document;
}


/**
 * @param {?} value Value.
 * @return {boolean} Is node.
 */
function isNode(value) {
  return value instanceof Node;
}


/**
 * @param {Node} node Node.
 * @param {?string} namespaceURI Namespace URI.
 * @param {string} name Attribute name.
 * @return {string} Value
 */
function getAttributeNS(node, namespaceURI, name) {
  return node.getAttributeNS(namespaceURI, name) || '';
}


/**
 * @param {Node} node Node.
 * @param {?string} namespaceURI Namespace URI.
 * @param {string} name Attribute name.
 * @param {string|number} value Value.
 */
function setAttributeNS(node, namespaceURI, name, value) {
  node.setAttributeNS(namespaceURI, name, value);
}


/**
 * Parse an XML string to an XML Document.
 * @param {string} xml XML.
 * @return {Document} Document.
 * @api
 */
function parse(xml) {
  return new DOMParser().parseFromString(xml, 'application/xml');
}


/**
 * Make an array extender function for extending the array at the top of the
 * object stack.
 * @param {function(this: T, Node, Array.<*>): (Array.<*>|undefined)}
 *     valueReader Value reader.
 * @param {T=} opt_this The object to use as `this` in `valueReader`.
 * @return {ol.XmlParser} Parser.
 * @template T
 */
function makeArrayExtender(valueReader, opt_this) {
  return (
    /**
     * @param {Node} node Node.
     * @param {Array.<*>} objectStack Object stack.
     */
    function(node, objectStack) {
      const value = valueReader.call(opt_this, node, objectStack);
      if (value !== undefined) {
        const array = /** @type {Array.<*>} */
              (objectStack[objectStack.length - 1]);
        Object(__WEBPACK_IMPORTED_MODULE_0__array_js__["c" /* extend */])(array, value);
      }
    }
  );
}


/**
 * Make an array pusher function for pushing to the array at the top of the
 * object stack.
 * @param {function(this: T, Node, Array.<*>): *} valueReader Value reader.
 * @param {T=} opt_this The object to use as `this` in `valueReader`.
 * @return {ol.XmlParser} Parser.
 * @template T
 */
function makeArrayPusher(valueReader, opt_this) {
  return (
    /**
     * @param {Node} node Node.
     * @param {Array.<*>} objectStack Object stack.
     */
    function(node, objectStack) {
      const value = valueReader.call(opt_this !== undefined ? opt_this : this,
        node, objectStack);
      if (value !== undefined) {
        const array = objectStack[objectStack.length - 1];
        array.push(value);
      }
    });
}


/**
 * Make an object stack replacer function for replacing the object at the
 * top of the stack.
 * @param {function(this: T, Node, Array.<*>): *} valueReader Value reader.
 * @param {T=} opt_this The object to use as `this` in `valueReader`.
 * @return {ol.XmlParser} Parser.
 * @template T
 */
function makeReplacer(valueReader, opt_this) {
  return (
    /**
     * @param {Node} node Node.
     * @param {Array.<*>} objectStack Object stack.
     */
    function(node, objectStack) {
      const value = valueReader.call(opt_this !== undefined ? opt_this : this,
        node, objectStack);
      if (value !== undefined) {
        objectStack[objectStack.length - 1] = value;
      }
    });
}


/**
 * Make an object property pusher function for adding a property to the
 * object at the top of the stack.
 * @param {function(this: T, Node, Array.<*>): *} valueReader Value reader.
 * @param {string=} opt_property Property.
 * @param {T=} opt_this The object to use as `this` in `valueReader`.
 * @return {ol.XmlParser} Parser.
 * @template T
 */
function makeObjectPropertyPusher(valueReader, opt_property, opt_this) {
  return (
    /**
     * @param {Node} node Node.
     * @param {Array.<*>} objectStack Object stack.
     */
    function(node, objectStack) {
      const value = valueReader.call(opt_this !== undefined ? opt_this : this,
        node, objectStack);
      if (value !== undefined) {
        const object = /** @type {Object} */
              (objectStack[objectStack.length - 1]);
        const property = opt_property !== undefined ?
          opt_property : node.localName;
        let array;
        if (property in object) {
          array = object[property];
        } else {
          array = object[property] = [];
        }
        array.push(value);
      }
    });
}


/**
 * Make an object property setter function.
 * @param {function(this: T, Node, Array.<*>): *} valueReader Value reader.
 * @param {string=} opt_property Property.
 * @param {T=} opt_this The object to use as `this` in `valueReader`.
 * @return {ol.XmlParser} Parser.
 * @template T
 */
function makeObjectPropertySetter(valueReader, opt_property, opt_this) {
  return (
    /**
     * @param {Node} node Node.
     * @param {Array.<*>} objectStack Object stack.
     */
    function(node, objectStack) {
      const value = valueReader.call(opt_this !== undefined ? opt_this : this,
        node, objectStack);
      if (value !== undefined) {
        const object = /** @type {Object} */
              (objectStack[objectStack.length - 1]);
        const property = opt_property !== undefined ?
          opt_property : node.localName;
        object[property] = value;
      }
    });
}


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
function makeChildAppender(nodeWriter, opt_this) {
  return function(node, value, objectStack) {
    nodeWriter.call(opt_this !== undefined ? opt_this : this,
      node, value, objectStack);
    const parent = objectStack[objectStack.length - 1];
    const parentNode = parent.node;
    parentNode.appendChild(node);
  };
}


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
function makeArraySerializer(nodeWriter, opt_this) {
  let serializersNS, nodeFactory;
  return function(node, value, objectStack) {
    if (serializersNS === undefined) {
      serializersNS = {};
      const serializers = {};
      serializers[node.localName] = nodeWriter;
      serializersNS[node.namespaceURI] = serializers;
      nodeFactory = makeSimpleNodeFactory(node.localName);
    }
    serialize(serializersNS, nodeFactory, value, objectStack);
  };
}


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
function makeSimpleNodeFactory(opt_nodeName, opt_namespaceURI) {
  const fixedNodeName = opt_nodeName;
  return (
    /**
     * @param {*} value Value.
     * @param {Array.<*>} objectStack Object stack.
     * @param {string=} opt_nodeName Node name.
     * @return {Node} Node.
     */
    function(value, objectStack, opt_nodeName) {
      const context = objectStack[objectStack.length - 1];
      const node = context.node;
      let nodeName = fixedNodeName;
      if (nodeName === undefined) {
        nodeName = opt_nodeName;
      }
      let namespaceURI = opt_namespaceURI;
      if (opt_namespaceURI === undefined) {
        namespaceURI = node.namespaceURI;
      }
      return createElementNS(namespaceURI, /** @type {string} */ (nodeName));
    }
  );
}


/**
 * A node factory that creates a node using the parent's `namespaceURI` and the
 * `nodeName` passed by {@link ol.xml.serialize} or
 * {@link ol.xml.pushSerializeAndPop} to the node factory.
 * @const
 * @type {function(*, Array.<*>, string=): (Node|undefined)}
 */
const OBJECT_PROPERTY_NODE_FACTORY = makeSimpleNodeFactory();
/* unused harmony export OBJECT_PROPERTY_NODE_FACTORY */



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
function makeSequence(object, orderedKeys) {
  const length = orderedKeys.length;
  const sequence = new Array(length);
  for (let i = 0; i < length; ++i) {
    sequence[i] = object[orderedKeys[i]];
  }
  return sequence;
}


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
function makeStructureNS(namespaceURIs, structure, opt_structureNS) {
  /**
   * @type {Object.<string, *>}
   */
  const structureNS = opt_structureNS !== undefined ? opt_structureNS : {};
  let i, ii;
  for (i = 0, ii = namespaceURIs.length; i < ii; ++i) {
    structureNS[namespaceURIs[i]] = structure;
  }
  return structureNS;
}


/**
 * Parse a node using the parsers and object stack.
 * @param {Object.<string, Object.<string, ol.XmlParser>>} parsersNS
 *     Parsers by namespace.
 * @param {Node} node Node.
 * @param {Array.<*>} objectStack Object stack.
 * @param {*=} opt_this The object to use as `this`.
 */
function parseNode(parsersNS, node, objectStack, opt_this) {
  let n;
  for (n = node.firstElementChild; n; n = n.nextElementSibling) {
    const parsers = parsersNS[n.namespaceURI];
    if (parsers !== undefined) {
      const parser = parsers[n.localName];
      if (parser !== undefined) {
        parser.call(opt_this, n, objectStack);
      }
    }
  }
}


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
function pushParseAndPop(
  object, parsersNS, node, objectStack, opt_this) {
  objectStack.push(object);
  parseNode(parsersNS, node, objectStack, opt_this);
  return objectStack.pop();
}


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
function serialize(
  serializersNS, nodeFactory, values, objectStack, opt_keys, opt_this) {
  const length = (opt_keys !== undefined ? opt_keys : values).length;
  let value, node;
  for (let i = 0; i < length; ++i) {
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
}


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
function pushSerializeAndPop(object,
  serializersNS, nodeFactory, values, objectStack, opt_keys, opt_this) {
  objectStack.push(object);
  serialize(
    serializersNS, nodeFactory, values, objectStack, opt_keys, opt_this);
  return objectStack.pop();
}


/***/ }),
/* 263 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Tile_js__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TileState_js__ = __webpack_require__(13);
/**
 * @module ol/VectorTile
 */




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
const VectorTile = function(tileCoord, state, src, format, tileLoadFunction, opt_options) {

  __WEBPACK_IMPORTED_MODULE_1__Tile_js__["a" /* default */].call(this, tileCoord, state, opt_options);

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

Object(__WEBPACK_IMPORTED_MODULE_0__index_js__["g" /* inherits */])(VectorTile, __WEBPACK_IMPORTED_MODULE_1__Tile_js__["a" /* default */]);

/**
 * @const
 * @type {ol.Extent}
 */
const DEFAULT_EXTENT = [0, 0, 4096, 4096];


/**
 * @inheritDoc
 */
VectorTile.prototype.disposeInternal = function() {
  this.features_ = null;
  this.replayGroups_ = {};
  this.state = __WEBPACK_IMPORTED_MODULE_2__TileState_js__["a" /* default */].ABORT;
  this.changed();
  __WEBPACK_IMPORTED_MODULE_1__Tile_js__["a" /* default */].prototype.disposeInternal.call(this);
};


/**
 * Gets the extent of the vector tile.
 * @return {ol.Extent} The extent.
 * @api
 */
VectorTile.prototype.getExtent = function() {
  return this.extent_ || DEFAULT_EXTENT;
};


/**
 * Get the feature format assigned for reading this tile's features.
 * @return {ol.format.Feature} Feature format.
 * @api
 */
VectorTile.prototype.getFormat = function() {
  return this.format_;
};


/**
 * Get the features for this tile. Geometries will be in the projection returned
 * by {@link ol.VectorTile#getProjection}.
 * @return {Array.<ol.Feature|ol.render.Feature>} Features.
 * @api
 */
VectorTile.prototype.getFeatures = function() {
  return this.features_;
};


/**
 * @inheritDoc
 */
VectorTile.prototype.getKey = function() {
  return this.url_;
};


/**
 * Get the feature projection of features returned by
 * {@link ol.VectorTile#getFeatures}.
 * @return {ol.proj.Projection} Feature projection.
 * @api
 */
VectorTile.prototype.getProjection = function() {
  return this.projection_;
};


/**
 * @param {ol.layer.Layer} layer Layer.
 * @param {string} key Key.
 * @return {ol.render.ReplayGroup} Replay group.
 */
VectorTile.prototype.getReplayGroup = function(layer, key) {
  return this.replayGroups_[Object(__WEBPACK_IMPORTED_MODULE_0__index_js__["f" /* getUid */])(layer) + ',' + key];
};


/**
 * @inheritDoc
 */
VectorTile.prototype.load = function() {
  if (this.state == __WEBPACK_IMPORTED_MODULE_2__TileState_js__["a" /* default */].IDLE) {
    this.setState(__WEBPACK_IMPORTED_MODULE_2__TileState_js__["a" /* default */].LOADING);
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
VectorTile.prototype.onLoad = function(features, dataProjection, extent) {
  this.setProjection(dataProjection);
  this.setFeatures(features);
  this.setExtent(extent);
};


/**
 * Handler for tile load errors.
 */
VectorTile.prototype.onError = function() {
  this.setState(__WEBPACK_IMPORTED_MODULE_2__TileState_js__["a" /* default */].ERROR);
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
VectorTile.prototype.setExtent = function(extent) {
  this.extent_ = extent;
};


/**
 * Function for use in an {@link ol.source.VectorTile}'s `tileLoadFunction`.
 * Sets the features for the tile.
 * @param {Array.<ol.Feature>} features Features.
 * @api
 */
VectorTile.prototype.setFeatures = function(features) {
  this.features_ = features;
  this.setState(__WEBPACK_IMPORTED_MODULE_2__TileState_js__["a" /* default */].LOADED);
};


/**
 * Function for use in an {@link ol.source.VectorTile}'s `tileLoadFunction`.
 * Sets the projection of the features that were added with
 * {@link ol.VectorTile#setFeatures}.
 * @param {ol.proj.Projection} projection Feature projection.
 * @api
 */
VectorTile.prototype.setProjection = function(projection) {
  this.projection_ = projection;
};


/**
 * @param {ol.layer.Layer} layer Layer.
 * @param {string} key Key.
 * @param {ol.render.ReplayGroup} replayGroup Replay group.
 */
VectorTile.prototype.setReplayGroup = function(layer, key, replayGroup) {
  this.replayGroups_[Object(__WEBPACK_IMPORTED_MODULE_0__index_js__["f" /* getUid */])(layer) + ',' + key] = replayGroup;
};


/**
 * Set the feature loader for reading this tile's features.
 * @param {ol.FeatureLoader} loader Feature loader.
 * @api
 */
VectorTile.prototype.setLoader = function(loader) {
  this.loader_ = loader;
};

/* harmony default export */ __webpack_exports__["a"] = (VectorTile);


/***/ }),
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ol_style_style__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ol_style_fill__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ol_style_stroke__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ol_style_icon__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ol_style_text__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ol_style_circle__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ol_geom_point__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mapbox_mapbox_gl_style_spec_function__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mapbox_mapbox_gl_style_spec_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__mapbox_mapbox_gl_style_spec_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mapbox_mapbox_gl_style_spec_feature_filter__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mapbox_mapbox_gl_style_spec_feature_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__mapbox_mapbox_gl_style_spec_feature_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_mapbox_to_css_font__ = __webpack_require__(313);
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
/* 272 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__asserts_js__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_circle_js__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_fill_js__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_stroke_js__ = __webpack_require__(157);






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
/* 273 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(9);


/**
 * Error object thrown when an assertion failed. This is an ECMA-262 Error,
 * extended with a `code` property.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error}
 * @constructor
 * @extends {Error}
 * @implements {oli.AssertionError}
 * @param {number} code Error code.
 */
var _ol_AssertionError_ = function(code) {

  var path = __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].VERSION ? __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].VERSION.split('-')[0] : 'latest';

  /**
   * @type {string}
   */
  this.message = 'Assertion failed. See https://openlayers.org/en/' + path +
      '/doc/errors/#' + code + ' for details.';

  /**
   * Error code. The meaning of the code can be found on
   * {@link https://openlayers.org/en/latest/doc/errors/} (replace `latest` with
   * the version found in the OpenLayers script's header comment if a version
   * other than the latest is used).
   * @type {number}
   * @api
   */
  this.code = code;

  this.name = 'AssertionError';

};

__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_AssertionError_, Error);
/* harmony default export */ __webpack_exports__["a"] = (_ol_AssertionError_);


/***/ }),
/* 274 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__colorlike_js__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom_js__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__has_js__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__imagestate_js__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__render_canvas_js__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_image_js__ = __webpack_require__(156);








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
/* 275 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__color_js__ = __webpack_require__(81);

var _ol_colorlike_ = {};


/**
 * @param {ol.Color|ol.ColorLike} color Color.
 * @return {ol.ColorLike} The color as an ol.ColorLike
 * @api
 */
_ol_colorlike_.asColorLike = function(color) {
  if (_ol_colorlike_.isColorLike(color)) {
    return /** @type {string|CanvasPattern|CanvasGradient} */ (color);
  } else {
    return __WEBPACK_IMPORTED_MODULE_0__color_js__["a" /* default */].asString(/** @type {ol.Color} */ (color));
  }
};


/**
 * @param {?} color The value that is potentially an ol.ColorLike
 * @return {boolean} Whether the color is an ol.ColorLike
 */
_ol_colorlike_.isColorLike = function(color) {
  return (
    typeof color === 'string' ||
    color instanceof CanvasPattern ||
    color instanceof CanvasGradient
  );
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_colorlike_);


/***/ }),
/* 276 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__webgl_js__ = __webpack_require__(277);


var _ol_has_ = {};

var ua = typeof navigator !== 'undefined' ?
  navigator.userAgent.toLowerCase() : '';

/**
 * User agent string says we are dealing with Firefox as browser.
 * @type {boolean}
 */
_ol_has_.FIREFOX = ua.indexOf('firefox') !== -1;

/**
 * User agent string says we are dealing with Safari as browser.
 * @type {boolean}
 */
_ol_has_.SAFARI = ua.indexOf('safari') !== -1 && ua.indexOf('chrom') == -1;

/**
 * User agent string says we are dealing with a WebKit engine.
 * @type {boolean}
 */
_ol_has_.WEBKIT = ua.indexOf('webkit') !== -1 && ua.indexOf('edge') == -1;

/**
 * User agent string says we are dealing with a Mac as platform.
 * @type {boolean}
 */
_ol_has_.MAC = ua.indexOf('macintosh') !== -1;


/**
 * The ratio between physical pixels and device-independent pixels
 * (dips) on the device (`window.devicePixelRatio`).
 * @const
 * @type {number}
 * @api
 */
_ol_has_.DEVICE_PIXEL_RATIO = window.devicePixelRatio || 1;


/**
 * True if the browser's Canvas implementation implements {get,set}LineDash.
 * @type {boolean}
 */
_ol_has_.CANVAS_LINE_DASH = false;


/**
 * True if both the library and browser support Canvas.  Always `false`
 * if `ol.ENABLE_CANVAS` is set to `false` at compile time.
 * @const
 * @type {boolean}
 * @api
 */
_ol_has_.CANVAS = __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].ENABLE_CANVAS && (
  /**
   * @return {boolean} Canvas supported.
   */
  function() {
    if (!('HTMLCanvasElement' in window)) {
      return false;
    }
    try {
      var context = document.createElement('CANVAS').getContext('2d');
      if (!context) {
        return false;
      } else {
        if (context.setLineDash !== undefined) {
          _ol_has_.CANVAS_LINE_DASH = true;
        }
        return true;
      }
    } catch (e) {
      return false;
    }
  })();


/**
 * Indicates if DeviceOrientation is supported in the user's browser.
 * @const
 * @type {boolean}
 * @api
 */
_ol_has_.DEVICE_ORIENTATION = 'DeviceOrientationEvent' in window;


/**
 * Is HTML5 geolocation supported in the current browser?
 * @const
 * @type {boolean}
 * @api
 */
_ol_has_.GEOLOCATION = 'geolocation' in navigator;


/**
 * True if browser supports touch events.
 * @const
 * @type {boolean}
 * @api
 */
_ol_has_.TOUCH = __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].ASSUME_TOUCH || 'ontouchstart' in window;


/**
 * True if browser supports pointer events.
 * @const
 * @type {boolean}
 */
_ol_has_.POINTER = 'PointerEvent' in window;


/**
 * True if browser supports ms pointer events (IE 10).
 * @const
 * @type {boolean}
 */
_ol_has_.MSPOINTER = !!(navigator.msPointerEnabled);


/**
 * True if both OpenLayers and browser support WebGL.  Always `false`
 * if `ol.ENABLE_WEBGL` is set to `false` at compile time.
 * @const
 * @type {boolean}
 * @api
 */
_ol_has_.WEBGL;


(function() {
  if (__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].ENABLE_WEBGL) {
    var hasWebGL = false;
    var textureSize;
    var /** @type {Array.<string>} */ extensions = [];

    if ('WebGLRenderingContext' in window) {
      try {
        var canvas = /** @type {HTMLCanvasElement} */
            (document.createElement('CANVAS'));
        var gl = __WEBPACK_IMPORTED_MODULE_1__webgl_js__["a" /* default */].getContext(canvas, {
          failIfMajorPerformanceCaveat: true
        });
        if (gl) {
          hasWebGL = true;
          textureSize = /** @type {number} */
            (gl.getParameter(gl.MAX_TEXTURE_SIZE));
          extensions = gl.getSupportedExtensions();
        }
      } catch (e) {
        // pass
      }
    }
    _ol_has_.WEBGL = hasWebGL;
    __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].WEBGL_EXTENSIONS = extensions;
    __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].WEBGL_MAX_TEXTURE_SIZE = textureSize;
  }
})();
/* harmony default export */ __webpack_exports__["a"] = (_ol_has_);


/***/ }),
/* 277 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _ol_webgl_ = {};

/**
 * Constants taken from goog.webgl
 */


/**
 * @const
 * @type {number}
 */
_ol_webgl_.ONE = 1;


/**
 * @const
 * @type {number}
 */
_ol_webgl_.SRC_ALPHA = 0x0302;


/**
 * @const
 * @type {number}
 */
_ol_webgl_.COLOR_ATTACHMENT0 = 0x8CE0;


/**
 * @const
 * @type {number}
 */
_ol_webgl_.COLOR_BUFFER_BIT = 0x00004000;


/**
 * @const
 * @type {number}
 */
_ol_webgl_.TRIANGLES = 0x0004;


/**
 * @const
 * @type {number}
 */
_ol_webgl_.TRIANGLE_STRIP = 0x0005;


/**
 * @const
 * @type {number}
 */
_ol_webgl_.ONE_MINUS_SRC_ALPHA = 0x0303;


/**
 * @const
 * @type {number}
 */
_ol_webgl_.ARRAY_BUFFER = 0x8892;


/**
 * @const
 * @type {number}
 */
_ol_webgl_.ELEMENT_ARRAY_BUFFER = 0x8893;


/**
 * @const
 * @type {number}
 */
_ol_webgl_.STREAM_DRAW = 0x88E0;


/**
 * @const
 * @type {number}
 */
_ol_webgl_.STATIC_DRAW = 0x88E4;


/**
 * @const
 * @type {number}
 */
_ol_webgl_.DYNAMIC_DRAW = 0x88E8;


/**
 * @const
 * @type {number}
 */
_ol_webgl_.CULL_FACE = 0x0B44;


/**
 * @const
 * @type {number}
 */
_ol_webgl_.BLEND = 0x0BE2;


/**
 * @const
 * @type {number}
 */
_ol_webgl_.STENCIL_TEST = 0x0B90;


/**
 * @const
 * @type {number}
 */
_ol_webgl_.DEPTH_TEST = 0x0B71;


/**
 * @const
 * @type {number}
 */
_ol_webgl_.SCISSOR_TEST = 0x0C11;


/**
 * @const
 * @type {number}
 */
_ol_webgl_.UNSIGNED_BYTE = 0x1401;


/**
 * @const
 * @type {number}
 */
_ol_webgl_.UNSIGNED_SHORT = 0x1403;


/**
 * @const
 * @type {number}
 */
_ol_webgl_.UNSIGNED_INT = 0x1405;


/**
 * @const
 * @type {number}
 */
_ol_webgl_.FLOAT = 0x1406;


/**
 * @const
 * @type {number}
 */
_ol_webgl_.RGBA = 0x1908;


/**
 * @const
 * @type {number}
 */
_ol_webgl_.FRAGMENT_SHADER = 0x8B30;


/**
 * @const
 * @type {number}
 */
_ol_webgl_.VERTEX_SHADER = 0x8B31;


/**
 * @const
 * @type {number}
 */
_ol_webgl_.LINK_STATUS = 0x8B82;


/**
 * @const
 * @type {number}
 */
_ol_webgl_.LINEAR = 0x2601;


/**
 * @const
 * @type {number}
 */
_ol_webgl_.TEXTURE_MAG_FILTER = 0x2800;


/**
 * @const
 * @type {number}
 */
_ol_webgl_.TEXTURE_MIN_FILTER = 0x2801;


/**
 * @const
 * @type {number}
 */
_ol_webgl_.TEXTURE_WRAP_S = 0x2802;


/**
 * @const
 * @type {number}
 */
_ol_webgl_.TEXTURE_WRAP_T = 0x2803;


/**
 * @const
 * @type {number}
 */
_ol_webgl_.TEXTURE_2D = 0x0DE1;


/**
 * @const
 * @type {number}
 */
_ol_webgl_.TEXTURE0 = 0x84C0;


/**
 * @const
 * @type {number}
 */
_ol_webgl_.CLAMP_TO_EDGE = 0x812F;


/**
 * @const
 * @type {number}
 */
_ol_webgl_.COMPILE_STATUS = 0x8B81;


/**
 * @const
 * @type {number}
 */
_ol_webgl_.FRAMEBUFFER = 0x8D40;


/** end of goog.webgl constants
 */


/**
 * @const
 * @private
 * @type {Array.<string>}
 */
_ol_webgl_.CONTEXT_IDS_ = [
  'experimental-webgl',
  'webgl',
  'webkit-3d',
  'moz-webgl'
];


/**
 * @param {HTMLCanvasElement} canvas Canvas.
 * @param {Object=} opt_attributes Attributes.
 * @return {WebGLRenderingContext} WebGL rendering context.
 */
_ol_webgl_.getContext = function(canvas, opt_attributes) {
  var context, i, ii = _ol_webgl_.CONTEXT_IDS_.length;
  for (i = 0; i < ii; ++i) {
    try {
      context = canvas.getContext(_ol_webgl_.CONTEXT_IDS_[i], opt_attributes);
      if (context) {
        return /** @type {!WebGLRenderingContext} */ (context);
      }
    } catch (e) {
      // pass
    }
  }
  return null;
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_webgl_);


/***/ }),
/* 278 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_js__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom_js__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__obj_js__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__structs_lrucache_js__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transform_js__ = __webpack_require__(155);





var _ol_render_canvas_ = {};


/**
 * @const
 * @type {string}
 */
_ol_render_canvas_.defaultFont = '10px sans-serif';


/**
 * @const
 * @type {ol.Color}
 */
_ol_render_canvas_.defaultFillStyle = [0, 0, 0, 1];


/**
 * @const
 * @type {string}
 */
_ol_render_canvas_.defaultLineCap = 'round';


/**
 * @const
 * @type {Array.<number>}
 */
_ol_render_canvas_.defaultLineDash = [];


/**
 * @const
 * @type {number}
 */
_ol_render_canvas_.defaultLineDashOffset = 0;


/**
 * @const
 * @type {string}
 */
_ol_render_canvas_.defaultLineJoin = 'round';


/**
 * @const
 * @type {number}
 */
_ol_render_canvas_.defaultMiterLimit = 10;


/**
 * @const
 * @type {ol.Color}
 */
_ol_render_canvas_.defaultStrokeStyle = [0, 0, 0, 1];


/**
 * @const
 * @type {string}
 */
_ol_render_canvas_.defaultTextAlign = 'center';


/**
 * @const
 * @type {string}
 */
_ol_render_canvas_.defaultTextBaseline = 'middle';


/**
 * @const
 * @type {Array.<number>}
 */
_ol_render_canvas_.defaultPadding = [0, 0, 0, 0];


/**
 * @const
 * @type {number}
 */
_ol_render_canvas_.defaultLineWidth = 1;


/**
 * @type {ol.structs.LRUCache.<HTMLCanvasElement>}
 */
_ol_render_canvas_.labelCache = new __WEBPACK_IMPORTED_MODULE_3__structs_lrucache_js__["a" /* default */]();


/**
 * @type {!Object.<string, number>}
 */
_ol_render_canvas_.checkedFonts_ = {};


/**
 * @type {CanvasRenderingContext2D}
 */
_ol_render_canvas_.measureContext_ = null;


/**
 * @type {!Object.<string, number>}
 */
_ol_render_canvas_.textHeights_ = {};


/**
 * Clears the label cache when a font becomes available.
 * @param {string} fontSpec CSS font spec.
 */
_ol_render_canvas_.checkFont = (function() {
  var retries = 60;
  var checked = _ol_render_canvas_.checkedFonts_;
  var labelCache = _ol_render_canvas_.labelCache;
  var font = '32px monospace';
  var text = 'wmytzilWMYTZIL@#/&?$%10';
  var interval, referenceWidth;

  function isAvailable(fontFamily) {
    var context = _ol_render_canvas_.getMeasureContext();
    context.font = font;
    referenceWidth = context.measureText(text).width;
    var available = true;
    if (fontFamily != 'monospace') {
      context.font = '32px ' + fontFamily + ',monospace';
      var width = context.measureText(text).width;
      // If width and referenceWidth are the same, then the 'monospace'
      // fallback was used instead of the font we wanted, so the font is not
      // available.
      available = width != referenceWidth;
    }
    return available;
  }

  function check() {
    var done = true;
    for (var font in checked) {
      if (checked[font] < retries) {
        if (isAvailable(font)) {
          checked[font] = retries;
          __WEBPACK_IMPORTED_MODULE_2__obj_js__["a" /* default */].clear(_ol_render_canvas_.textHeights_);
          // Make sure that loaded fonts are picked up by Safari
          _ol_render_canvas_.measureContext_ = null;
          labelCache.clear();
        } else {
          ++checked[font];
          done = false;
        }
      }
    }
    if (done) {
      window.clearInterval(interval);
      interval = undefined;
    }
  }

  return function(fontSpec) {
    var fontFamilies = __WEBPACK_IMPORTED_MODULE_0__css_js__["a" /* default */].getFontFamilies(fontSpec);
    if (!fontFamilies) {
      return;
    }
    for (var i = 0, ii = fontFamilies.length; i < ii; ++i) {
      var fontFamily = fontFamilies[i];
      if (!(fontFamily in checked)) {
        checked[fontFamily] = retries;
        if (!isAvailable(fontFamily)) {
          checked[fontFamily] = 0;
          if (interval === undefined) {
            interval = window.setInterval(check, 32);
          }
        }
      }
    }
  };
})();


/**
 * @return {CanvasRenderingContext2D} Measure context.
 */
_ol_render_canvas_.getMeasureContext = function() {
  var context = _ol_render_canvas_.measureContext_;
  if (!context) {
    context = _ol_render_canvas_.measureContext_ = __WEBPACK_IMPORTED_MODULE_1__dom_js__["a" /* default */].createCanvasContext2D(1, 1);
  }
  return context;
};


/**
 * @param {string} font Font to use for measuring.
 * @return {ol.Size} Measurement.
 */
_ol_render_canvas_.measureTextHeight = (function() {
  var span;
  var heights = _ol_render_canvas_.textHeights_;
  return function(font) {
    var height = heights[font];
    if (height == undefined) {
      if (!span) {
        span = document.createElement('span');
        span.textContent = 'M';
        span.style.margin = span.style.padding = '0 !important';
        span.style.position = 'absolute !important';
        span.style.left = '-99999px !important';
      }
      span.style.font = font;
      document.body.appendChild(span);
      height = heights[font] = span.offsetHeight;
      document.body.removeChild(span);
    }
    return height;
  };
})();


/**
 * @param {string} font Font.
 * @param {string} text Text.
 * @return {number} Width.
 */
_ol_render_canvas_.measureTextWidth = function(font, text) {
  var measureContext = _ol_render_canvas_.getMeasureContext();
  if (font != measureContext.font) {
    measureContext.font = font;
  }
  return measureContext.measureText(text).width;
};


/**
 * @param {CanvasRenderingContext2D} context Context.
 * @param {number} rotation Rotation.
 * @param {number} offsetX X offset.
 * @param {number} offsetY Y offset.
 */
_ol_render_canvas_.rotateAtOffset = function(context, rotation, offsetX, offsetY) {
  if (rotation !== 0) {
    context.translate(offsetX, offsetY);
    context.rotate(rotation);
    context.translate(-offsetX, -offsetY);
  }
};


_ol_render_canvas_.resetTransform_ = __WEBPACK_IMPORTED_MODULE_4__transform_js__["a" /* default */].create();


/**
 * @param {CanvasRenderingContext2D} context Context.
 * @param {ol.Transform|null} transform Transform.
 * @param {number} opacity Opacity.
 * @param {HTMLImageElement|HTMLCanvasElement|HTMLVideoElement} image Image.
 * @param {number} originX Origin X.
 * @param {number} originY Origin Y.
 * @param {number} w Width.
 * @param {number} h Height.
 * @param {number} x X.
 * @param {number} y Y.
 * @param {number} scale Scale.
 */
_ol_render_canvas_.drawImage = function(context,
    transform, opacity, image, originX, originY, w, h, x, y, scale) {
  var alpha;
  if (opacity != 1) {
    alpha = context.globalAlpha;
    context.globalAlpha = alpha * opacity;
  }
  if (transform) {
    context.setTransform.apply(context, transform);
  }

  context.drawImage(image, originX, originY, w, h, x, y, w * scale, h * scale);

  if (alpha) {
    context.globalAlpha = alpha;
  }
  if (transform) {
    context.setTransform.apply(context, _ol_render_canvas_.resetTransform_);
  }
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_render_canvas_);


/***/ }),
/* 279 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _ol_css_ = {};


/**
 * The CSS class for hidden feature.
 *
 * @const
 * @type {string}
 */
_ol_css_.CLASS_HIDDEN = 'ol-hidden';


/**
 * The CSS class that we'll give the DOM elements to have them selectable.
 *
 * @const
 * @type {string}
 */
_ol_css_.CLASS_SELECTABLE = 'ol-selectable';

/**
 * The CSS class that we'll give the DOM elements to have them unselectable.
 *
 * @const
 * @type {string}
 */
_ol_css_.CLASS_UNSELECTABLE = 'ol-unselectable';


/**
 * The CSS class for unsupported feature.
 *
 * @const
 * @type {string}
 */
_ol_css_.CLASS_UNSUPPORTED = 'ol-unsupported';


/**
 * The CSS class for controls.
 *
 * @const
 * @type {string}
 */
_ol_css_.CLASS_CONTROL = 'ol-control';


/**
 * Get the list of font families from a font spec.  Note that this doesn't work
 * for font families that have commas in them.
 * @param {string} The CSS font property.
 * @return {Object.<string>} The font families (or null if the input spec is invalid).
 */
_ol_css_.getFontFamilies = (function() {
  var style;
  var cache = {};
  return function(font) {
    if (!style) {
      style = document.createElement('div').style;
    }
    if (!(font in cache)) {
      style.font = font;
      var family = style.fontFamily;
      style.font = '';
      if (!family) {
        return null;
      }
      cache[font] = family.split(/,\s?/);
    }
    return cache[font];
  };
})();
/* harmony default export */ __webpack_exports__["a"] = (_ol_css_);


/***/ }),
/* 280 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__asserts_js__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_eventtarget_js__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__events_eventtype_js__ = __webpack_require__(83);





/**
 * Implements a Least-Recently-Used cache where the keys do not conflict with
 * Object's properties (e.g. 'hasOwnProperty' is not allowed as a key). Expiring
 * items from the cache is the responsibility of the user.
 * @constructor
 * @extends {ol.events.EventTarget}
 * @fires ol.events.Event
 * @struct
 * @template T
 * @param {number=} opt_highWaterMark High water mark.
 */
var _ol_structs_LRUCache_ = function(opt_highWaterMark) {

  __WEBPACK_IMPORTED_MODULE_2__events_eventtarget_js__["a" /* default */].call(this);

  /**
   * @type {number}
   */
  this.highWaterMark = opt_highWaterMark !== undefined ? opt_highWaterMark : 2048;

  /**
   * @private
   * @type {number}
   */
  this.count_ = 0;

  /**
   * @private
   * @type {!Object.<string, ol.LRUCacheEntry>}
   */
  this.entries_ = {};

  /**
   * @private
   * @type {?ol.LRUCacheEntry}
   */
  this.oldest_ = null;

  /**
   * @private
   * @type {?ol.LRUCacheEntry}
   */
  this.newest_ = null;

};

__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_structs_LRUCache_, __WEBPACK_IMPORTED_MODULE_2__events_eventtarget_js__["a" /* default */]);


/**
 * @return {boolean} Can expire cache.
 */
_ol_structs_LRUCache_.prototype.canExpireCache = function() {
  return this.getCount() > this.highWaterMark;
};


/**
 * FIXME empty description for jsdoc
 */
_ol_structs_LRUCache_.prototype.clear = function() {
  this.count_ = 0;
  this.entries_ = {};
  this.oldest_ = null;
  this.newest_ = null;
  this.dispatchEvent(__WEBPACK_IMPORTED_MODULE_3__events_eventtype_js__["a" /* default */].CLEAR);
};


/**
 * @param {string} key Key.
 * @return {boolean} Contains key.
 */
_ol_structs_LRUCache_.prototype.containsKey = function(key) {
  return this.entries_.hasOwnProperty(key);
};


/**
 * @param {function(this: S, T, string, ol.structs.LRUCache): ?} f The function
 *     to call for every entry from the oldest to the newer. This function takes
 *     3 arguments (the entry value, the entry key and the LRUCache object).
 *     The return value is ignored.
 * @param {S=} opt_this The object to use as `this` in `f`.
 * @template S
 */
_ol_structs_LRUCache_.prototype.forEach = function(f, opt_this) {
  var entry = this.oldest_;
  while (entry) {
    f.call(opt_this, entry.value_, entry.key_, this);
    entry = entry.newer;
  }
};


/**
 * @param {string} key Key.
 * @return {T} Value.
 */
_ol_structs_LRUCache_.prototype.get = function(key) {
  var entry = this.entries_[key];
  __WEBPACK_IMPORTED_MODULE_1__asserts_js__["a" /* default */].assert(entry !== undefined,
      15); // Tried to get a value for a key that does not exist in the cache
  if (entry === this.newest_) {
    return entry.value_;
  } else if (entry === this.oldest_) {
    this.oldest_ = /** @type {ol.LRUCacheEntry} */ (this.oldest_.newer);
    this.oldest_.older = null;
  } else {
    entry.newer.older = entry.older;
    entry.older.newer = entry.newer;
  }
  entry.newer = null;
  entry.older = this.newest_;
  this.newest_.newer = entry;
  this.newest_ = entry;
  return entry.value_;
};


/**
 * Remove an entry from the cache.
 * @param {string} key The entry key.
 * @return {T} The removed entry.
 */
_ol_structs_LRUCache_.prototype.remove = function(key) {
  var entry = this.entries_[key];
  __WEBPACK_IMPORTED_MODULE_1__asserts_js__["a" /* default */].assert(entry !== undefined, 15); // Tried to get a value for a key that does not exist in the cache
  if (entry === this.newest_) {
    this.newest_ = /** @type {ol.LRUCacheEntry} */ (entry.older);
    if (this.newest_) {
      this.newest_.newer = null;
    }
  } else if (entry === this.oldest_) {
    this.oldest_ = /** @type {ol.LRUCacheEntry} */ (entry.newer);
    if (this.oldest_) {
      this.oldest_.older = null;
    }
  } else {
    entry.newer.older = entry.older;
    entry.older.newer = entry.newer;
  }
  delete this.entries_[key];
  --this.count_;
  return entry.value_;
};


/**
 * @return {number} Count.
 */
_ol_structs_LRUCache_.prototype.getCount = function() {
  return this.count_;
};


/**
 * @return {Array.<string>} Keys.
 */
_ol_structs_LRUCache_.prototype.getKeys = function() {
  var keys = new Array(this.count_);
  var i = 0;
  var entry;
  for (entry = this.newest_; entry; entry = entry.older) {
    keys[i++] = entry.key_;
  }
  return keys;
};


/**
 * @return {Array.<T>} Values.
 */
_ol_structs_LRUCache_.prototype.getValues = function() {
  var values = new Array(this.count_);
  var i = 0;
  var entry;
  for (entry = this.newest_; entry; entry = entry.older) {
    values[i++] = entry.value_;
  }
  return values;
};


/**
 * @return {T} Last value.
 */
_ol_structs_LRUCache_.prototype.peekLast = function() {
  return this.oldest_.value_;
};


/**
 * @return {string} Last key.
 */
_ol_structs_LRUCache_.prototype.peekLastKey = function() {
  return this.oldest_.key_;
};


/**
 * Get the key of the newest item in the cache.  Throws if the cache is empty.
 * @return {string} The newest key.
 */
_ol_structs_LRUCache_.prototype.peekFirstKey = function() {
  return this.newest_.key_;
};


/**
 * @return {T} value Value.
 */
_ol_structs_LRUCache_.prototype.pop = function() {
  var entry = this.oldest_;
  delete this.entries_[entry.key_];
  if (entry.newer) {
    entry.newer.older = null;
  }
  this.oldest_ = /** @type {ol.LRUCacheEntry} */ (entry.newer);
  if (!this.oldest_) {
    this.newest_ = null;
  }
  --this.count_;
  return entry.value_;
};


/**
 * @param {string} key Key.
 * @param {T} value Value.
 */
_ol_structs_LRUCache_.prototype.replace = function(key, value) {
  this.get(key);  // update `newest_`
  this.entries_[key].value_ = value;
};


/**
 * @param {string} key Key.
 * @param {T} value Value.
 */
_ol_structs_LRUCache_.prototype.set = function(key, value) {
  __WEBPACK_IMPORTED_MODULE_1__asserts_js__["a" /* default */].assert(!(key in this.entries_),
      16); // Tried to set a value for a key that is used already
  var entry = /** @type {ol.LRUCacheEntry} */ ({
    key_: key,
    newer: null,
    older: this.newest_,
    value_: value
  });
  if (!this.newest_) {
    this.oldest_ = entry;
  } else {
    this.newest_.newer = entry;
  }
  this.newest_ = entry;
  this.entries_[key] = entry;
  ++this.count_;
};


/**
 * Prune the cache.
 */
_ol_structs_LRUCache_.prototype.prune = function() {
  while (this.canExpireCache()) {
    this.pop();
  }
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_structs_LRUCache_);


/***/ }),
/* 281 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(9);


/**
 * Objects that need to clean up after themselves.
 * @constructor
 */
var _ol_Disposable_ = function() {};

/**
 * The object has already been disposed.
 * @type {boolean}
 * @private
 */
_ol_Disposable_.prototype.disposed_ = false;

/**
 * Clean up.
 */
_ol_Disposable_.prototype.dispose = function() {
  if (!this.disposed_) {
    this.disposed_ = true;
    this.disposeInternal();
  }
};

/**
 * Extension point for disposable objects.
 * @protected
 */
_ol_Disposable_.prototype.disposeInternal = __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].nullFunction;
/* harmony default export */ __webpack_exports__["a"] = (_ol_Disposable_);


/***/ }),
/* 282 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__imagestate_js__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asserts_js__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__color_js__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events_js__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__events_eventtype_js__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_iconanchorunits_js__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style_iconimage_js__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__style_iconorigin_js__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__style_image_js__ = __webpack_require__(156);











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
/* 283 */
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
/* 284 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom_js__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_js__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__events_eventtarget_js__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events_eventtype_js__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__imagestate_js__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_js__ = __webpack_require__(285);








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
/* 285 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_iconimagecache_js__ = __webpack_require__(286);

var _ol_style_ = {};

/**
 * The {@link ol.style.IconImageCache} for {@link ol.style.Icon} images.
 * @api
 */
_ol_style_.iconImageCache = new __WEBPACK_IMPORTED_MODULE_0__style_iconimagecache_js__["a" /* default */]();
/* harmony default export */ __webpack_exports__["a"] = (_ol_style_);


/***/ }),
/* 286 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__color_js__ = __webpack_require__(81);


/**
 * Singleton class. Available through {@link ol.style.iconImageCache}.
 * @constructor
 */
var _ol_style_IconImageCache_ = function() {

  /**
   * @type {Object.<string, ol.style.IconImage>}
   * @private
   */
  this.cache_ = {};

  /**
   * @type {number}
   * @private
   */
  this.cacheSize_ = 0;

  /**
   * @type {number}
   * @private
   */
  this.maxCacheSize_ = 32;
};


/**
 * @param {string} src Src.
 * @param {?string} crossOrigin Cross origin.
 * @param {ol.Color} color Color.
 * @return {string} Cache key.
 */
_ol_style_IconImageCache_.getKey = function(src, crossOrigin, color) {
  var colorString = color ? __WEBPACK_IMPORTED_MODULE_0__color_js__["a" /* default */].asString(color) : 'null';
  return crossOrigin + ':' + src + ':' + colorString;
};


/**
 * FIXME empty description for jsdoc
 */
_ol_style_IconImageCache_.prototype.clear = function() {
  this.cache_ = {};
  this.cacheSize_ = 0;
};


/**
 * FIXME empty description for jsdoc
 */
_ol_style_IconImageCache_.prototype.expire = function() {
  if (this.cacheSize_ > this.maxCacheSize_) {
    var i = 0;
    var key, iconImage;
    for (key in this.cache_) {
      iconImage = this.cache_[key];
      if ((i++ & 3) === 0 && !iconImage.hasListener()) {
        delete this.cache_[key];
        --this.cacheSize_;
      }
    }
  }
};


/**
 * @param {string} src Src.
 * @param {?string} crossOrigin Cross origin.
 * @param {ol.Color} color Color.
 * @return {ol.style.IconImage} Icon image.
 */
_ol_style_IconImageCache_.prototype.get = function(src, crossOrigin, color) {
  var key = _ol_style_IconImageCache_.getKey(src, crossOrigin, color);
  return key in this.cache_ ? this.cache_[key] : null;
};


/**
 * @param {string} src Src.
 * @param {?string} crossOrigin Cross origin.
 * @param {ol.Color} color Color.
 * @param {ol.style.IconImage} iconImage Icon image.
 */
_ol_style_IconImageCache_.prototype.set = function(src, crossOrigin, color, iconImage) {
  var key = _ol_style_IconImageCache_.getKey(src, crossOrigin, color);
  this.cache_[key] = iconImage;
  ++this.cacheSize_;
};


/**
 * Set the cache size of the icon cache. Default is `32`. Change this value when
 * your map uses more than 32 different icon images and you are not caching icon
 * styles on the application level.
 * @param {number} maxCacheSize Cache max size.
 * @api
 */
_ol_style_IconImageCache_.prototype.setSize = function(maxCacheSize) {
  this.maxCacheSize_ = maxCacheSize;
  this.expire();
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_style_IconImageCache_);


/***/ }),
/* 287 */
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
/* 288 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_fill_js__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_textplacement_js__ = __webpack_require__(289);



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
/* 289 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Text placement. One of `'point'`, `'line'`. Default is `'point'`. Note that
 * `'line'` requires the underlying geometry to be a {@link ol.geom.LineString},
 * {@link ol.geom.Polygon}, {@link ol.geom.MultiLineString} or
 * {@link ol.geom.MultiPolygon}.
 * @enum {string}
 */
var _ol_style_TextPlacement_ = {
  POINT: 'point',
  LINE: 'line'
};

/* harmony default export */ __webpack_exports__["a"] = (_ol_style_TextPlacement_);


/***/ }),
/* 290 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__extent_js__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__geom_geometrylayout_js__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__geom_geometrytype_js__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__geom_simplegeometry_js__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__geom_flat_deflate_js__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__math_js__ = __webpack_require__(59);








/**
 * @classdesc
 * Point geometry.
 *
 * @constructor
 * @extends {ol.geom.SimpleGeometry}
 * @param {ol.Coordinate} coordinates Coordinates.
 * @param {ol.geom.GeometryLayout=} opt_layout Layout.
 * @api
 */
var _ol_geom_Point_ = function(coordinates, opt_layout) {
  __WEBPACK_IMPORTED_MODULE_4__geom_simplegeometry_js__["a" /* default */].call(this);
  this.setCoordinates(coordinates, opt_layout);
};

__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_geom_Point_, __WEBPACK_IMPORTED_MODULE_4__geom_simplegeometry_js__["a" /* default */]);


/**
 * Make a complete copy of the geometry.
 * @return {!ol.geom.Point} Clone.
 * @override
 * @api
 */
_ol_geom_Point_.prototype.clone = function() {
  var point = new _ol_geom_Point_(null);
  point.setFlatCoordinates(this.layout, this.flatCoordinates.slice());
  return point;
};


/**
 * @inheritDoc
 */
_ol_geom_Point_.prototype.closestPointXY = function(x, y, closestPoint, minSquaredDistance) {
  var flatCoordinates = this.flatCoordinates;
  var squaredDistance = __WEBPACK_IMPORTED_MODULE_6__math_js__["a" /* default */].squaredDistance(
      x, y, flatCoordinates[0], flatCoordinates[1]);
  if (squaredDistance < minSquaredDistance) {
    var stride = this.stride;
    var i;
    for (i = 0; i < stride; ++i) {
      closestPoint[i] = flatCoordinates[i];
    }
    closestPoint.length = stride;
    return squaredDistance;
  } else {
    return minSquaredDistance;
  }
};


/**
 * Return the coordinate of the point.
 * @return {ol.Coordinate} Coordinates.
 * @override
 * @api
 */
_ol_geom_Point_.prototype.getCoordinates = function() {
  return !this.flatCoordinates ? [] : this.flatCoordinates.slice();
};


/**
 * @inheritDoc
 */
_ol_geom_Point_.prototype.computeExtent = function(extent) {
  return __WEBPACK_IMPORTED_MODULE_1__extent_js__["a" /* default */].createOrUpdateFromCoordinate(this.flatCoordinates, extent);
};


/**
 * @inheritDoc
 * @api
 */
_ol_geom_Point_.prototype.getType = function() {
  return __WEBPACK_IMPORTED_MODULE_3__geom_geometrytype_js__["a" /* default */].POINT;
};


/**
 * @inheritDoc
 * @api
 */
_ol_geom_Point_.prototype.intersectsExtent = function(extent) {
  return __WEBPACK_IMPORTED_MODULE_1__extent_js__["a" /* default */].containsXY(extent,
      this.flatCoordinates[0], this.flatCoordinates[1]);
};


/**
 * @inheritDoc
 * @api
 */
_ol_geom_Point_.prototype.setCoordinates = function(coordinates, opt_layout) {
  if (!coordinates) {
    this.setFlatCoordinates(__WEBPACK_IMPORTED_MODULE_2__geom_geometrylayout_js__["a" /* default */].XY, null);
  } else {
    this.setLayout(opt_layout, coordinates, 0);
    if (!this.flatCoordinates) {
      this.flatCoordinates = [];
    }
    this.flatCoordinates.length = __WEBPACK_IMPORTED_MODULE_5__geom_flat_deflate_js__["a" /* default */].coordinate(
        this.flatCoordinates, 0, coordinates, this.stride);
    this.changed();
  }
};


/**
 * @param {ol.geom.GeometryLayout} layout Layout.
 * @param {Array.<number>} flatCoordinates Flat coordinates.
 */
_ol_geom_Point_.prototype.setFlatCoordinates = function(layout, flatCoordinates) {
  this.setFlatCoordinatesInternal(layout, flatCoordinates);
  this.changed();
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_geom_Point_);


/***/ }),
/* 291 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Extent corner.
 * @enum {string}
 */
var _ol_extent_Corner_ = {
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_RIGHT: 'bottom-right',
  TOP_LEFT: 'top-left',
  TOP_RIGHT: 'top-right'
};

/* harmony default export */ __webpack_exports__["a"] = (_ol_extent_Corner_);


/***/ }),
/* 292 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Relationship to an extent.
 * @enum {number}
 */
var _ol_extent_Relationship_ = {
  UNKNOWN: 0,
  INTERSECTING: 1,
  ABOVE: 2,
  RIGHT: 4,
  BELOW: 8,
  LEFT: 16
};

/* harmony default export */ __webpack_exports__["a"] = (_ol_extent_Relationship_);


/***/ }),
/* 293 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__functions_js__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__extent_js__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__geom_geometry_js__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__geom_geometrylayout_js__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__geom_flat_transform_js__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__obj_js__ = __webpack_require__(60);








/**
 * @classdesc
 * Abstract base class; only used for creating subclasses; do not instantiate
 * in apps, as cannot be rendered.
 *
 * @constructor
 * @abstract
 * @extends {ol.geom.Geometry}
 * @api
 */
var _ol_geom_SimpleGeometry_ = function() {

  __WEBPACK_IMPORTED_MODULE_3__geom_geometry_js__["a" /* default */].call(this);

  /**
   * @protected
   * @type {ol.geom.GeometryLayout}
   */
  this.layout = __WEBPACK_IMPORTED_MODULE_4__geom_geometrylayout_js__["a" /* default */].XY;

  /**
   * @protected
   * @type {number}
   */
  this.stride = 2;

  /**
   * @protected
   * @type {Array.<number>}
   */
  this.flatCoordinates = null;

};

__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_geom_SimpleGeometry_, __WEBPACK_IMPORTED_MODULE_3__geom_geometry_js__["a" /* default */]);


/**
 * @param {number} stride Stride.
 * @private
 * @return {ol.geom.GeometryLayout} layout Layout.
 */
_ol_geom_SimpleGeometry_.getLayoutForStride_ = function(stride) {
  var layout;
  if (stride == 2) {
    layout = __WEBPACK_IMPORTED_MODULE_4__geom_geometrylayout_js__["a" /* default */].XY;
  } else if (stride == 3) {
    layout = __WEBPACK_IMPORTED_MODULE_4__geom_geometrylayout_js__["a" /* default */].XYZ;
  } else if (stride == 4) {
    layout = __WEBPACK_IMPORTED_MODULE_4__geom_geometrylayout_js__["a" /* default */].XYZM;
  }
  return /** @type {ol.geom.GeometryLayout} */ (layout);
};


/**
 * @param {ol.geom.GeometryLayout} layout Layout.
 * @return {number} Stride.
 */
_ol_geom_SimpleGeometry_.getStrideForLayout = function(layout) {
  var stride;
  if (layout == __WEBPACK_IMPORTED_MODULE_4__geom_geometrylayout_js__["a" /* default */].XY) {
    stride = 2;
  } else if (layout == __WEBPACK_IMPORTED_MODULE_4__geom_geometrylayout_js__["a" /* default */].XYZ || layout == __WEBPACK_IMPORTED_MODULE_4__geom_geometrylayout_js__["a" /* default */].XYM) {
    stride = 3;
  } else if (layout == __WEBPACK_IMPORTED_MODULE_4__geom_geometrylayout_js__["a" /* default */].XYZM) {
    stride = 4;
  }
  return /** @type {number} */ (stride);
};


/**
 * @inheritDoc
 */
_ol_geom_SimpleGeometry_.prototype.containsXY = __WEBPACK_IMPORTED_MODULE_1__functions_js__["a" /* default */].FALSE;


/**
 * @inheritDoc
 */
_ol_geom_SimpleGeometry_.prototype.computeExtent = function(extent) {
  return __WEBPACK_IMPORTED_MODULE_2__extent_js__["a" /* default */].createOrUpdateFromFlatCoordinates(
      this.flatCoordinates, 0, this.flatCoordinates.length, this.stride,
      extent);
};


/**
 * @abstract
 * @return {Array} Coordinates.
 */
_ol_geom_SimpleGeometry_.prototype.getCoordinates = function() {};


/**
 * Return the first coordinate of the geometry.
 * @return {ol.Coordinate} First coordinate.
 * @api
 */
_ol_geom_SimpleGeometry_.prototype.getFirstCoordinate = function() {
  return this.flatCoordinates.slice(0, this.stride);
};


/**
 * @return {Array.<number>} Flat coordinates.
 */
_ol_geom_SimpleGeometry_.prototype.getFlatCoordinates = function() {
  return this.flatCoordinates;
};


/**
 * Return the last coordinate of the geometry.
 * @return {ol.Coordinate} Last point.
 * @api
 */
_ol_geom_SimpleGeometry_.prototype.getLastCoordinate = function() {
  return this.flatCoordinates.slice(this.flatCoordinates.length - this.stride);
};


/**
 * Return the {@link ol.geom.GeometryLayout layout} of the geometry.
 * @return {ol.geom.GeometryLayout} Layout.
 * @api
 */
_ol_geom_SimpleGeometry_.prototype.getLayout = function() {
  return this.layout;
};


/**
 * @inheritDoc
 */
_ol_geom_SimpleGeometry_.prototype.getSimplifiedGeometry = function(squaredTolerance) {
  if (this.simplifiedGeometryRevision != this.getRevision()) {
    __WEBPACK_IMPORTED_MODULE_6__obj_js__["a" /* default */].clear(this.simplifiedGeometryCache);
    this.simplifiedGeometryMaxMinSquaredTolerance = 0;
    this.simplifiedGeometryRevision = this.getRevision();
  }
  // If squaredTolerance is negative or if we know that simplification will not
  // have any effect then just return this.
  if (squaredTolerance < 0 ||
      (this.simplifiedGeometryMaxMinSquaredTolerance !== 0 &&
       squaredTolerance <= this.simplifiedGeometryMaxMinSquaredTolerance)) {
    return this;
  }
  var key = squaredTolerance.toString();
  if (this.simplifiedGeometryCache.hasOwnProperty(key)) {
    return this.simplifiedGeometryCache[key];
  } else {
    var simplifiedGeometry =
        this.getSimplifiedGeometryInternal(squaredTolerance);
    var simplifiedFlatCoordinates = simplifiedGeometry.getFlatCoordinates();
    if (simplifiedFlatCoordinates.length < this.flatCoordinates.length) {
      this.simplifiedGeometryCache[key] = simplifiedGeometry;
      return simplifiedGeometry;
    } else {
      // Simplification did not actually remove any coordinates.  We now know
      // that any calls to getSimplifiedGeometry with a squaredTolerance less
      // than or equal to the current squaredTolerance will also not have any
      // effect.  This allows us to short circuit simplification (saving CPU
      // cycles) and prevents the cache of simplified geometries from filling
      // up with useless identical copies of this geometry (saving memory).
      this.simplifiedGeometryMaxMinSquaredTolerance = squaredTolerance;
      return this;
    }
  }
};


/**
 * @param {number} squaredTolerance Squared tolerance.
 * @return {ol.geom.SimpleGeometry} Simplified geometry.
 * @protected
 */
_ol_geom_SimpleGeometry_.prototype.getSimplifiedGeometryInternal = function(squaredTolerance) {
  return this;
};


/**
 * @return {number} Stride.
 */
_ol_geom_SimpleGeometry_.prototype.getStride = function() {
  return this.stride;
};


/**
 * @param {ol.geom.GeometryLayout} layout Layout.
 * @param {Array.<number>} flatCoordinates Flat coordinates.
 * @protected
 */
_ol_geom_SimpleGeometry_.prototype.setFlatCoordinatesInternal = function(layout, flatCoordinates) {
  this.stride = _ol_geom_SimpleGeometry_.getStrideForLayout(layout);
  this.layout = layout;
  this.flatCoordinates = flatCoordinates;
};


/**
 * @abstract
 * @param {Array} coordinates Coordinates.
 * @param {ol.geom.GeometryLayout=} opt_layout Layout.
 */
_ol_geom_SimpleGeometry_.prototype.setCoordinates = function(coordinates, opt_layout) {};


/**
 * @param {ol.geom.GeometryLayout|undefined} layout Layout.
 * @param {Array} coordinates Coordinates.
 * @param {number} nesting Nesting.
 * @protected
 */
_ol_geom_SimpleGeometry_.prototype.setLayout = function(layout, coordinates, nesting) {
  /** @type {number} */
  var stride;
  if (layout) {
    stride = _ol_geom_SimpleGeometry_.getStrideForLayout(layout);
  } else {
    var i;
    for (i = 0; i < nesting; ++i) {
      if (coordinates.length === 0) {
        this.layout = __WEBPACK_IMPORTED_MODULE_4__geom_geometrylayout_js__["a" /* default */].XY;
        this.stride = 2;
        return;
      } else {
        coordinates = /** @type {Array} */ (coordinates[0]);
      }
    }
    stride = coordinates.length;
    layout = _ol_geom_SimpleGeometry_.getLayoutForStride_(stride);
  }
  this.layout = layout;
  this.stride = stride;
};


/**
 * @inheritDoc
 * @api
 */
_ol_geom_SimpleGeometry_.prototype.applyTransform = function(transformFn) {
  if (this.flatCoordinates) {
    transformFn(this.flatCoordinates, this.flatCoordinates, this.stride);
    this.changed();
  }
};


/**
 * @inheritDoc
 * @api
 */
_ol_geom_SimpleGeometry_.prototype.rotate = function(angle, anchor) {
  var flatCoordinates = this.getFlatCoordinates();
  if (flatCoordinates) {
    var stride = this.getStride();
    __WEBPACK_IMPORTED_MODULE_5__geom_flat_transform_js__["a" /* default */].rotate(
        flatCoordinates, 0, flatCoordinates.length,
        stride, angle, anchor, flatCoordinates);
    this.changed();
  }
};


/**
 * @inheritDoc
 * @api
 */
_ol_geom_SimpleGeometry_.prototype.scale = function(sx, opt_sy, opt_anchor) {
  var sy = opt_sy;
  if (sy === undefined) {
    sy = sx;
  }
  var anchor = opt_anchor;
  if (!anchor) {
    anchor = __WEBPACK_IMPORTED_MODULE_2__extent_js__["a" /* default */].getCenter(this.getExtent());
  }
  var flatCoordinates = this.getFlatCoordinates();
  if (flatCoordinates) {
    var stride = this.getStride();
    __WEBPACK_IMPORTED_MODULE_5__geom_flat_transform_js__["a" /* default */].scale(
        flatCoordinates, 0, flatCoordinates.length,
        stride, sx, sy, anchor, flatCoordinates);
    this.changed();
  }
};


/**
 * @inheritDoc
 * @api
 */
_ol_geom_SimpleGeometry_.prototype.translate = function(deltaX, deltaY) {
  var flatCoordinates = this.getFlatCoordinates();
  if (flatCoordinates) {
    var stride = this.getStride();
    __WEBPACK_IMPORTED_MODULE_5__geom_flat_transform_js__["a" /* default */].translate(
        flatCoordinates, 0, flatCoordinates.length, stride,
        deltaX, deltaY, flatCoordinates);
    this.changed();
  }
};


/**
 * @param {ol.geom.SimpleGeometry} simpleGeometry Simple geometry.
 * @param {ol.Transform} transform Transform.
 * @param {Array.<number>=} opt_dest Destination.
 * @return {Array.<number>} Transformed flat coordinates.
 */
_ol_geom_SimpleGeometry_.transform2D = function(simpleGeometry, transform, opt_dest) {
  var flatCoordinates = simpleGeometry.getFlatCoordinates();
  if (!flatCoordinates) {
    return null;
  } else {
    var stride = simpleGeometry.getStride();
    return __WEBPACK_IMPORTED_MODULE_5__geom_flat_transform_js__["a" /* default */].transform2D(
        flatCoordinates, 0, flatCoordinates.length, stride,
        transform, opt_dest);
  }
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_geom_SimpleGeometry_);


/***/ }),
/* 294 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__object_js__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__extent_js__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__functions_js__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__geom_flat_transform_js__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__proj_js__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__proj_units_js__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__transform_js__ = __webpack_require__(155);









/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * Base class for vector geometries.
 *
 * To get notified of changes to the geometry, register a listener for the
 * generic `change` event on your geometry instance.
 *
 * @constructor
 * @abstract
 * @extends {ol.Object}
 * @api
 */
var _ol_geom_Geometry_ = function() {

  __WEBPACK_IMPORTED_MODULE_1__object_js__["a" /* default */].call(this);

  /**
   * @private
   * @type {ol.Extent}
   */
  this.extent_ = __WEBPACK_IMPORTED_MODULE_2__extent_js__["a" /* default */].createEmpty();

  /**
   * @private
   * @type {number}
   */
  this.extentRevision_ = -1;

  /**
   * @protected
   * @type {Object.<string, ol.geom.Geometry>}
   */
  this.simplifiedGeometryCache = {};

  /**
   * @protected
   * @type {number}
   */
  this.simplifiedGeometryMaxMinSquaredTolerance = 0;

  /**
   * @protected
   * @type {number}
   */
  this.simplifiedGeometryRevision = 0;

  /**
   * @private
   * @type {ol.Transform}
   */
  this.tmpTransform_ = __WEBPACK_IMPORTED_MODULE_7__transform_js__["a" /* default */].create();

};

__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_geom_Geometry_, __WEBPACK_IMPORTED_MODULE_1__object_js__["a" /* default */]);


/**
 * Make a complete copy of the geometry.
 * @abstract
 * @return {!ol.geom.Geometry} Clone.
 */
_ol_geom_Geometry_.prototype.clone = function() {};


/**
 * @abstract
 * @param {number} x X.
 * @param {number} y Y.
 * @param {ol.Coordinate} closestPoint Closest point.
 * @param {number} minSquaredDistance Minimum squared distance.
 * @return {number} Minimum squared distance.
 */
_ol_geom_Geometry_.prototype.closestPointXY = function(x, y, closestPoint, minSquaredDistance) {};


/**
 * Return the closest point of the geometry to the passed point as
 * {@link ol.Coordinate coordinate}.
 * @param {ol.Coordinate} point Point.
 * @param {ol.Coordinate=} opt_closestPoint Closest point.
 * @return {ol.Coordinate} Closest point.
 * @api
 */
_ol_geom_Geometry_.prototype.getClosestPoint = function(point, opt_closestPoint) {
  var closestPoint = opt_closestPoint ? opt_closestPoint : [NaN, NaN];
  this.closestPointXY(point[0], point[1], closestPoint, Infinity);
  return closestPoint;
};


/**
 * Returns true if this geometry includes the specified coordinate. If the
 * coordinate is on the boundary of the geometry, returns false.
 * @param {ol.Coordinate} coordinate Coordinate.
 * @return {boolean} Contains coordinate.
 * @api
 */
_ol_geom_Geometry_.prototype.intersectsCoordinate = function(coordinate) {
  return this.containsXY(coordinate[0], coordinate[1]);
};


/**
 * @abstract
 * @param {ol.Extent} extent Extent.
 * @protected
 * @return {ol.Extent} extent Extent.
 */
_ol_geom_Geometry_.prototype.computeExtent = function(extent) {};


/**
 * @param {number} x X.
 * @param {number} y Y.
 * @return {boolean} Contains (x, y).
 */
_ol_geom_Geometry_.prototype.containsXY = __WEBPACK_IMPORTED_MODULE_3__functions_js__["a" /* default */].FALSE;


/**
 * Get the extent of the geometry.
 * @param {ol.Extent=} opt_extent Extent.
 * @return {ol.Extent} extent Extent.
 * @api
 */
_ol_geom_Geometry_.prototype.getExtent = function(opt_extent) {
  if (this.extentRevision_ != this.getRevision()) {
    this.extent_ = this.computeExtent(this.extent_);
    this.extentRevision_ = this.getRevision();
  }
  return __WEBPACK_IMPORTED_MODULE_2__extent_js__["a" /* default */].returnOrUpdate(this.extent_, opt_extent);
};


/**
 * Rotate the geometry around a given coordinate. This modifies the geometry
 * coordinates in place.
 * @abstract
 * @param {number} angle Rotation angle in radians.
 * @param {ol.Coordinate} anchor The rotation center.
 * @api
 */
_ol_geom_Geometry_.prototype.rotate = function(angle, anchor) {};


/**
 * Scale the geometry (with an optional origin).  This modifies the geometry
 * coordinates in place.
 * @abstract
 * @param {number} sx The scaling factor in the x-direction.
 * @param {number=} opt_sy The scaling factor in the y-direction (defaults to
 *     sx).
 * @param {ol.Coordinate=} opt_anchor The scale origin (defaults to the center
 *     of the geometry extent).
 * @api
 */
_ol_geom_Geometry_.prototype.scale = function(sx, opt_sy, opt_anchor) {};


/**
 * Create a simplified version of this geometry.  For linestrings, this uses
 * the the {@link
 * https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm
 * Douglas Peucker} algorithm.  For polygons, a quantization-based
 * simplification is used to preserve topology.
 * @function
 * @param {number} tolerance The tolerance distance for simplification.
 * @return {ol.geom.Geometry} A new, simplified version of the original
 *     geometry.
 * @api
 */
_ol_geom_Geometry_.prototype.simplify = function(tolerance) {
  return this.getSimplifiedGeometry(tolerance * tolerance);
};


/**
 * Create a simplified version of this geometry using the Douglas Peucker
 * algorithm.
 * @see https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm
 * @abstract
 * @param {number} squaredTolerance Squared tolerance.
 * @return {ol.geom.Geometry} Simplified geometry.
 */
_ol_geom_Geometry_.prototype.getSimplifiedGeometry = function(squaredTolerance) {};


/**
 * Get the type of this geometry.
 * @abstract
 * @return {ol.geom.GeometryType} Geometry type.
 */
_ol_geom_Geometry_.prototype.getType = function() {};


/**
 * Apply a transform function to each coordinate of the geometry.
 * The geometry is modified in place.
 * If you do not want the geometry modified in place, first `clone()` it and
 * then use this function on the clone.
 * @abstract
 * @param {ol.TransformFunction} transformFn Transform.
 */
_ol_geom_Geometry_.prototype.applyTransform = function(transformFn) {};


/**
 * Test if the geometry and the passed extent intersect.
 * @abstract
 * @param {ol.Extent} extent Extent.
 * @return {boolean} `true` if the geometry and the extent intersect.
 */
_ol_geom_Geometry_.prototype.intersectsExtent = function(extent) {};


/**
 * Translate the geometry.  This modifies the geometry coordinates in place.  If
 * instead you want a new geometry, first `clone()` this geometry.
 * @abstract
 * @param {number} deltaX Delta X.
 * @param {number} deltaY Delta Y.
 */
_ol_geom_Geometry_.prototype.translate = function(deltaX, deltaY) {};


/**
 * Transform each coordinate of the geometry from one coordinate reference
 * system to another. The geometry is modified in place.
 * For example, a line will be transformed to a line and a circle to a circle.
 * If you do not want the geometry modified in place, first `clone()` it and
 * then use this function on the clone.
 *
 * @param {ol.ProjectionLike} source The current projection.  Can be a
 *     string identifier or a {@link ol.proj.Projection} object.
 * @param {ol.ProjectionLike} destination The desired projection.  Can be a
 *     string identifier or a {@link ol.proj.Projection} object.
 * @return {ol.geom.Geometry} This geometry.  Note that original geometry is
 *     modified in place.
 * @api
 */
_ol_geom_Geometry_.prototype.transform = function(source, destination) {
  var tmpTransform = this.tmpTransform_;
  source = __WEBPACK_IMPORTED_MODULE_5__proj_js__["a" /* default */].get(source);
  var transformFn = source.getUnits() == __WEBPACK_IMPORTED_MODULE_6__proj_units_js__["a" /* default */].TILE_PIXELS ?
    function(inCoordinates, outCoordinates, stride) {
      var pixelExtent = source.getExtent();
      var projectedExtent = source.getWorldExtent();
      var scale = __WEBPACK_IMPORTED_MODULE_2__extent_js__["a" /* default */].getHeight(projectedExtent) / __WEBPACK_IMPORTED_MODULE_2__extent_js__["a" /* default */].getHeight(pixelExtent);
      __WEBPACK_IMPORTED_MODULE_7__transform_js__["a" /* default */].compose(tmpTransform,
          projectedExtent[0], projectedExtent[3],
          scale, -scale, 0,
          0, 0);
      __WEBPACK_IMPORTED_MODULE_4__geom_flat_transform_js__["a" /* default */].transform2D(inCoordinates, 0, inCoordinates.length, stride,
          tmpTransform, outCoordinates);
      return __WEBPACK_IMPORTED_MODULE_5__proj_js__["a" /* default */].getTransform(source, destination)(inCoordinates, outCoordinates, stride);
    } :
    __WEBPACK_IMPORTED_MODULE_5__proj_js__["a" /* default */].getTransform(source, destination);
  this.applyTransform(transformFn);
  return this;
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_geom_Geometry_);


/***/ }),
/* 295 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objecteventtype_js__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__observable_js__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__events_event_js__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__obj_js__ = __webpack_require__(60);






/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * Most non-trivial classes inherit from this.
 *
 * This extends {@link ol.Observable} with observable properties, where each
 * property is observable as well as the object as a whole.
 *
 * Classes that inherit from this have pre-defined properties, to which you can
 * add your owns. The pre-defined properties are listed in this documentation as
 * 'Observable Properties', and have their own accessors; for example,
 * {@link ol.Map} has a `target` property, accessed with `getTarget()`  and
 * changed with `setTarget()`. Not all properties are however settable. There
 * are also general-purpose accessors `get()` and `set()`. For example,
 * `get('target')` is equivalent to `getTarget()`.
 *
 * The `set` accessors trigger a change event, and you can monitor this by
 * registering a listener. For example, {@link ol.View} has a `center`
 * property, so `view.on('change:center', function(evt) {...});` would call the
 * function whenever the value of the center property changes. Within the
 * function, `evt.target` would be the view, so `evt.target.getCenter()` would
 * return the new center.
 *
 * You can add your own observable properties with
 * `object.set('prop', 'value')`, and retrieve that with `object.get('prop')`.
 * You can listen for changes on that property value with
 * `object.on('change:prop', listener)`. You can get a list of all
 * properties with {@link ol.Object#getProperties object.getProperties()}.
 *
 * Note that the observable properties are separate from standard JS properties.
 * You can, for example, give your map object a title with
 * `map.title='New title'` and with `map.set('title', 'Another title')`. The
 * first will be a `hasOwnProperty`; the second will appear in
 * `getProperties()`. Only the second is observable.
 *
 * Properties can be deleted by using the unset method. E.g.
 * object.unset('foo').
 *
 * @constructor
 * @extends {ol.Observable}
 * @param {Object.<string, *>=} opt_values An object with key-value pairs.
 * @fires ol.Object.Event
 * @api
 */
var _ol_Object_ = function(opt_values) {
  __WEBPACK_IMPORTED_MODULE_2__observable_js__["a" /* default */].call(this);

  // Call ol.getUid to ensure that the order of objects' ids is the same as
  // the order in which they were created.  This also helps to ensure that
  // object properties are always added in the same order, which helps many
  // JavaScript engines generate faster code.
  __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].getUid(this);

  /**
   * @private
   * @type {!Object.<string, *>}
   */
  this.values_ = {};

  if (opt_values !== undefined) {
    this.setProperties(opt_values);
  }
};

__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_Object_, __WEBPACK_IMPORTED_MODULE_2__observable_js__["a" /* default */]);


/**
 * @private
 * @type {Object.<string, string>}
 */
_ol_Object_.changeEventTypeCache_ = {};


/**
 * @param {string} key Key name.
 * @return {string} Change name.
 */
_ol_Object_.getChangeEventType = function(key) {
  return _ol_Object_.changeEventTypeCache_.hasOwnProperty(key) ?
    _ol_Object_.changeEventTypeCache_[key] :
    (_ol_Object_.changeEventTypeCache_[key] = 'change:' + key);
};


/**
 * Gets a value.
 * @param {string} key Key name.
 * @return {*} Value.
 * @api
 */
_ol_Object_.prototype.get = function(key) {
  var value;
  if (this.values_.hasOwnProperty(key)) {
    value = this.values_[key];
  }
  return value;
};


/**
 * Get a list of object property names.
 * @return {Array.<string>} List of property names.
 * @api
 */
_ol_Object_.prototype.getKeys = function() {
  return Object.keys(this.values_);
};


/**
 * Get an object of all property names and values.
 * @return {Object.<string, *>} Object.
 * @api
 */
_ol_Object_.prototype.getProperties = function() {
  return __WEBPACK_IMPORTED_MODULE_4__obj_js__["a" /* default */].assign({}, this.values_);
};


/**
 * @param {string} key Key name.
 * @param {*} oldValue Old value.
 */
_ol_Object_.prototype.notify = function(key, oldValue) {
  var eventType;
  eventType = _ol_Object_.getChangeEventType(key);
  this.dispatchEvent(new _ol_Object_.Event(eventType, key, oldValue));
  eventType = __WEBPACK_IMPORTED_MODULE_1__objecteventtype_js__["a" /* default */].PROPERTYCHANGE;
  this.dispatchEvent(new _ol_Object_.Event(eventType, key, oldValue));
};


/**
 * Sets a value.
 * @param {string} key Key name.
 * @param {*} value Value.
 * @param {boolean=} opt_silent Update without triggering an event.
 * @api
 */
_ol_Object_.prototype.set = function(key, value, opt_silent) {
  if (opt_silent) {
    this.values_[key] = value;
  } else {
    var oldValue = this.values_[key];
    this.values_[key] = value;
    if (oldValue !== value) {
      this.notify(key, oldValue);
    }
  }
};


/**
 * Sets a collection of key-value pairs.  Note that this changes any existing
 * properties and adds new ones (it does not remove any existing properties).
 * @param {Object.<string, *>} values Values.
 * @param {boolean=} opt_silent Update without triggering an event.
 * @api
 */
_ol_Object_.prototype.setProperties = function(values, opt_silent) {
  var key;
  for (key in values) {
    this.set(key, values[key], opt_silent);
  }
};


/**
 * Unsets a property.
 * @param {string} key Key name.
 * @param {boolean=} opt_silent Unset without triggering an event.
 * @api
 */
_ol_Object_.prototype.unset = function(key, opt_silent) {
  if (key in this.values_) {
    var oldValue = this.values_[key];
    delete this.values_[key];
    if (!opt_silent) {
      this.notify(key, oldValue);
    }
  }
};


/**
 * @classdesc
 * Events emitted by {@link ol.Object} instances are instances of this type.
 *
 * @param {string} type The event type.
 * @param {string} key The property name.
 * @param {*} oldValue The old value for `key`.
 * @extends {ol.events.Event}
 * @implements {oli.Object.Event}
 * @constructor
 */
_ol_Object_.Event = function(type, key, oldValue) {
  __WEBPACK_IMPORTED_MODULE_3__events_event_js__["a" /* default */].call(this, type);

  /**
   * The name of the property whose value is changing.
   * @type {string}
   * @api
   */
  this.key = key;

  /**
   * The old value. To get the new value use `e.target.get(e.key)` where
   * `e` is the event object.
   * @type {*}
   * @api
   */
  this.oldValue = oldValue;

};
__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_Object_.Event, __WEBPACK_IMPORTED_MODULE_3__events_event_js__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (_ol_Object_);


/***/ }),
/* 296 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @enum {string}
 */
var _ol_ObjectEventType_ = {
  /**
   * Triggered when a property is changed.
   * @event ol.Object.Event#propertychange
   * @api
   */
  PROPERTYCHANGE: 'propertychange'
};

/* harmony default export */ __webpack_exports__["a"] = (_ol_ObjectEventType_);


/***/ }),
/* 297 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events_js__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_eventtarget_js__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__events_eventtype_js__ = __webpack_require__(83);





/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * An event target providing convenient methods for listener registration
 * and unregistration. A generic `change` event is always available through
 * {@link ol.Observable#changed}.
 *
 * @constructor
 * @extends {ol.events.EventTarget}
 * @fires ol.events.Event
 * @struct
 * @api
 */
var _ol_Observable_ = function() {

  __WEBPACK_IMPORTED_MODULE_2__events_eventtarget_js__["a" /* default */].call(this);

  /**
   * @private
   * @type {number}
   */
  this.revision_ = 0;

};

__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_Observable_, __WEBPACK_IMPORTED_MODULE_2__events_eventtarget_js__["a" /* default */]);


/**
 * Removes an event listener using the key returned by `on()` or `once()`.
 * @param {ol.EventsKey|Array.<ol.EventsKey>} key The key returned by `on()`
 *     or `once()` (or an array of keys).
 * @api
 */
_ol_Observable_.unByKey = function(key) {
  if (Array.isArray(key)) {
    for (var i = 0, ii = key.length; i < ii; ++i) {
      __WEBPACK_IMPORTED_MODULE_1__events_js__["a" /* default */].unlistenByKey(key[i]);
    }
  } else {
    __WEBPACK_IMPORTED_MODULE_1__events_js__["a" /* default */].unlistenByKey(/** @type {ol.EventsKey} */ (key));
  }
};


/**
 * Increases the revision counter and dispatches a 'change' event.
 * @api
 */
_ol_Observable_.prototype.changed = function() {
  ++this.revision_;
  this.dispatchEvent(__WEBPACK_IMPORTED_MODULE_3__events_eventtype_js__["a" /* default */].CHANGE);
};


/**
 * Dispatches an event and calls all listeners listening for events
 * of this type. The event parameter can either be a string or an
 * Object with a `type` property.
 *
 * @param {{type: string,
 *     target: (EventTarget|ol.events.EventTarget|undefined)}|ol.events.Event|
 *     string} event Event object.
 * @function
 * @api
 */
_ol_Observable_.prototype.dispatchEvent;


/**
 * Get the version number for this object.  Each time the object is modified,
 * its version number will be incremented.
 * @return {number} Revision.
 * @api
 */
_ol_Observable_.prototype.getRevision = function() {
  return this.revision_;
};


/**
 * Listen for a certain type of event.
 * @param {string|Array.<string>} type The event type or array of event types.
 * @param {function(?): ?} listener The listener function.
 * @param {Object=} opt_this The object to use as `this` in `listener`.
 * @return {ol.EventsKey|Array.<ol.EventsKey>} Unique key for the listener. If
 *     called with an array of event types as the first argument, the return
 *     will be an array of keys.
 * @api
 */
_ol_Observable_.prototype.on = function(type, listener, opt_this) {
  if (Array.isArray(type)) {
    var len = type.length;
    var keys = new Array(len);
    for (var i = 0; i < len; ++i) {
      keys[i] = __WEBPACK_IMPORTED_MODULE_1__events_js__["a" /* default */].listen(this, type[i], listener, opt_this);
    }
    return keys;
  } else {
    return __WEBPACK_IMPORTED_MODULE_1__events_js__["a" /* default */].listen(
        this, /** @type {string} */ (type), listener, opt_this);
  }
};


/**
 * Listen once for a certain type of event.
 * @param {string|Array.<string>} type The event type or array of event types.
 * @param {function(?): ?} listener The listener function.
 * @param {Object=} opt_this The object to use as `this` in `listener`.
 * @return {ol.EventsKey|Array.<ol.EventsKey>} Unique key for the listener. If
 *     called with an array of event types as the first argument, the return
 *     will be an array of keys.
 * @api
 */
_ol_Observable_.prototype.once = function(type, listener, opt_this) {
  if (Array.isArray(type)) {
    var len = type.length;
    var keys = new Array(len);
    for (var i = 0; i < len; ++i) {
      keys[i] = __WEBPACK_IMPORTED_MODULE_1__events_js__["a" /* default */].listenOnce(this, type[i], listener, opt_this);
    }
    return keys;
  } else {
    return __WEBPACK_IMPORTED_MODULE_1__events_js__["a" /* default */].listenOnce(
        this, /** @type {string} */ (type), listener, opt_this);
  }
};


/**
 * Unlisten for a certain type of event.
 * @param {string|Array.<string>} type The event type or array of event types.
 * @param {function(?): ?} listener The listener function.
 * @param {Object=} opt_this The object which was used as `this` by the
 * `listener`.
 * @api
 */
_ol_Observable_.prototype.un = function(type, listener, opt_this) {
  if (Array.isArray(type)) {
    for (var i = 0, ii = type.length; i < ii; ++i) {
      __WEBPACK_IMPORTED_MODULE_1__events_js__["a" /* default */].unlisten(this, type[i], listener, opt_this);
    }
    return;
  } else {
    __WEBPACK_IMPORTED_MODULE_1__events_js__["a" /* default */].unlisten(this, /** @type {string} */ (type), listener, opt_this);
  }
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_Observable_);


/***/ }),
/* 298 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sphere_js__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__extent_js__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math_js__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__proj_epsg3857_js__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__proj_epsg4326_js__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__proj_projection_js__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__proj_units_js__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__proj_proj4_js__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__proj_projections_js__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__proj_transforms_js__ = __webpack_require__(303);











var _ol_proj_ = {};


/**
 * Meters per unit lookup table.
 * @const
 * @type {Object.<ol.proj.Units, number>}
 * @api
 */
_ol_proj_.METERS_PER_UNIT = __WEBPACK_IMPORTED_MODULE_7__proj_units_js__["a" /* default */].METERS_PER_UNIT;


/**
 * A place to store the mean radius of the Earth.
 * @private
 * @type {ol.Sphere}
 */
_ol_proj_.SPHERE_ = new __WEBPACK_IMPORTED_MODULE_1__sphere_js__["a" /* default */](__WEBPACK_IMPORTED_MODULE_1__sphere_js__["a" /* default */].DEFAULT_RADIUS);


if (__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].ENABLE_PROJ4JS) {
  /**
   * Register proj4. If not explicitly registered, it will be assumed that
   * proj4js will be loaded in the global namespace. For example in a
   * browserify ES6 environment you could use:
   *
   *     import ol from 'openlayers';
   *     import proj4 from 'proj4';
   *     ol.proj.setProj4(proj4);
   *
   * @param {Proj4} proj4 Proj4.
   * @api
   */
  _ol_proj_.setProj4 = function(proj4) {
    __WEBPACK_IMPORTED_MODULE_8__proj_proj4_js__["a" /* default */].set(proj4);
  };
}


/**
 * Get the resolution of the point in degrees or distance units.
 * For projections with degrees as the unit this will simply return the
 * provided resolution. For other projections the point resolution is
 * by default estimated by transforming the 'point' pixel to EPSG:4326,
 * measuring its width and height on the normal sphere,
 * and taking the average of the width and height.
 * A custom function can be provided for a specific projection, either
 * by setting the `getPointResolution` option in the
 * {@link ol.proj.Projection} constructor or by using
 * {@link ol.proj.Projection#setGetPointResolution} to change an existing
 * projection object.
 * @param {ol.ProjectionLike} projection The projection.
 * @param {number} resolution Nominal resolution in projection units.
 * @param {ol.Coordinate} point Point to find adjusted resolution at.
 * @param {ol.proj.Units=} opt_units Units to get the point resolution in.
 * Default is the projection's units.
 * @return {number} Point resolution.
 * @api
 */
_ol_proj_.getPointResolution = function(projection, resolution, point, opt_units) {
  projection = _ol_proj_.get(projection);
  var pointResolution;
  var getter = projection.getPointResolutionFunc();
  if (getter) {
    pointResolution = getter(resolution, point);
  } else {
    var units = projection.getUnits();
    if (units == __WEBPACK_IMPORTED_MODULE_7__proj_units_js__["a" /* default */].DEGREES && !opt_units || opt_units == __WEBPACK_IMPORTED_MODULE_7__proj_units_js__["a" /* default */].DEGREES) {
      pointResolution = resolution;
    } else {
      // Estimate point resolution by transforming the center pixel to EPSG:4326,
      // measuring its width and height on the normal sphere, and taking the
      // average of the width and height.
      var toEPSG4326 = _ol_proj_.getTransformFromProjections(projection, _ol_proj_.get('EPSG:4326'));
      var vertices = [
        point[0] - resolution / 2, point[1],
        point[0] + resolution / 2, point[1],
        point[0], point[1] - resolution / 2,
        point[0], point[1] + resolution / 2
      ];
      vertices = toEPSG4326(vertices, vertices, 2);
      var width = _ol_proj_.SPHERE_.haversineDistance(
          vertices.slice(0, 2), vertices.slice(2, 4));
      var height = _ol_proj_.SPHERE_.haversineDistance(
          vertices.slice(4, 6), vertices.slice(6, 8));
      pointResolution = (width + height) / 2;
      var metersPerUnit = opt_units ?
        __WEBPACK_IMPORTED_MODULE_7__proj_units_js__["a" /* default */].METERS_PER_UNIT[opt_units] :
        projection.getMetersPerUnit();
      if (metersPerUnit !== undefined) {
        pointResolution /= metersPerUnit;
      }
    }
  }
  return pointResolution;
};


/**
 * Registers transformation functions that don't alter coordinates. Those allow
 * to transform between projections with equal meaning.
 *
 * @param {Array.<ol.proj.Projection>} projections Projections.
 * @api
 */
_ol_proj_.addEquivalentProjections = function(projections) {
  _ol_proj_.addProjections(projections);
  projections.forEach(function(source) {
    projections.forEach(function(destination) {
      if (source !== destination) {
        __WEBPACK_IMPORTED_MODULE_10__proj_transforms_js__["a" /* default */].add(source, destination, _ol_proj_.cloneTransform);
      }
    });
  });
};


/**
 * Registers transformation functions to convert coordinates in any projection
 * in projection1 to any projection in projection2.
 *
 * @param {Array.<ol.proj.Projection>} projections1 Projections with equal
 *     meaning.
 * @param {Array.<ol.proj.Projection>} projections2 Projections with equal
 *     meaning.
 * @param {ol.TransformFunction} forwardTransform Transformation from any
 *   projection in projection1 to any projection in projection2.
 * @param {ol.TransformFunction} inverseTransform Transform from any projection
 *   in projection2 to any projection in projection1..
 */
_ol_proj_.addEquivalentTransforms = function(projections1, projections2, forwardTransform, inverseTransform) {
  projections1.forEach(function(projection1) {
    projections2.forEach(function(projection2) {
      __WEBPACK_IMPORTED_MODULE_10__proj_transforms_js__["a" /* default */].add(projection1, projection2, forwardTransform);
      __WEBPACK_IMPORTED_MODULE_10__proj_transforms_js__["a" /* default */].add(projection2, projection1, inverseTransform);
    });
  });
};


/**
 * Add a Projection object to the list of supported projections that can be
 * looked up by their code.
 *
 * @param {ol.proj.Projection} projection Projection instance.
 * @api
 */
_ol_proj_.addProjection = function(projection) {
  __WEBPACK_IMPORTED_MODULE_9__proj_projections_js__["a" /* default */].add(projection.getCode(), projection);
  __WEBPACK_IMPORTED_MODULE_10__proj_transforms_js__["a" /* default */].add(projection, projection, _ol_proj_.cloneTransform);
};


/**
 * @param {Array.<ol.proj.Projection>} projections Projections.
 */
_ol_proj_.addProjections = function(projections) {
  projections.forEach(_ol_proj_.addProjection);
};


/**
 * Clear all cached projections and transforms.
 */
_ol_proj_.clearAllProjections = function() {
  __WEBPACK_IMPORTED_MODULE_9__proj_projections_js__["a" /* default */].clear();
  __WEBPACK_IMPORTED_MODULE_10__proj_transforms_js__["a" /* default */].clear();
};


/**
 * @param {ol.proj.Projection|string|undefined} projection Projection.
 * @param {string} defaultCode Default code.
 * @return {ol.proj.Projection} Projection.
 */
_ol_proj_.createProjection = function(projection, defaultCode) {
  if (!projection) {
    return _ol_proj_.get(defaultCode);
  } else if (typeof projection === 'string') {
    return _ol_proj_.get(projection);
  } else {
    return /** @type {ol.proj.Projection} */ (projection);
  }
};


/**
 * Registers coordinate transform functions to convert coordinates between the
 * source projection and the destination projection.
 * The forward and inverse functions convert coordinate pairs; this function
 * converts these into the functions used internally which also handle
 * extents and coordinate arrays.
 *
 * @param {ol.ProjectionLike} source Source projection.
 * @param {ol.ProjectionLike} destination Destination projection.
 * @param {function(ol.Coordinate): ol.Coordinate} forward The forward transform
 *     function (that is, from the source projection to the destination
 *     projection) that takes a {@link ol.Coordinate} as argument and returns
 *     the transformed {@link ol.Coordinate}.
 * @param {function(ol.Coordinate): ol.Coordinate} inverse The inverse transform
 *     function (that is, from the destination projection to the source
 *     projection) that takes a {@link ol.Coordinate} as argument and returns
 *     the transformed {@link ol.Coordinate}.
 * @api
 */
_ol_proj_.addCoordinateTransforms = function(source, destination, forward, inverse) {
  var sourceProj = _ol_proj_.get(source);
  var destProj = _ol_proj_.get(destination);
  __WEBPACK_IMPORTED_MODULE_10__proj_transforms_js__["a" /* default */].add(sourceProj, destProj,
      _ol_proj_.createTransformFromCoordinateTransform(forward));
  __WEBPACK_IMPORTED_MODULE_10__proj_transforms_js__["a" /* default */].add(destProj, sourceProj,
      _ol_proj_.createTransformFromCoordinateTransform(inverse));
};


/**
 * Creates a {@link ol.TransformFunction} from a simple 2D coordinate transform
 * function.
 * @param {function(ol.Coordinate): ol.Coordinate} transform Coordinate
 *     transform.
 * @return {ol.TransformFunction} Transform function.
 */
_ol_proj_.createTransformFromCoordinateTransform = function(transform) {
  return (
    /**
     * @param {Array.<number>} input Input.
     * @param {Array.<number>=} opt_output Output.
     * @param {number=} opt_dimension Dimension.
     * @return {Array.<number>} Output.
     */
    function(input, opt_output, opt_dimension) {
      var length = input.length;
      var dimension = opt_dimension !== undefined ? opt_dimension : 2;
      var output = opt_output !== undefined ? opt_output : new Array(length);
      var point, i, j;
      for (i = 0; i < length; i += dimension) {
        point = transform([input[i], input[i + 1]]);
        output[i] = point[0];
        output[i + 1] = point[1];
        for (j = dimension - 1; j >= 2; --j) {
          output[i + j] = input[i + j];
        }
      }
      return output;
    });
};


/**
 * Transforms a coordinate from longitude/latitude to a different projection.
 * @param {ol.Coordinate} coordinate Coordinate as longitude and latitude, i.e.
 *     an array with longitude as 1st and latitude as 2nd element.
 * @param {ol.ProjectionLike=} opt_projection Target projection. The
 *     default is Web Mercator, i.e. 'EPSG:3857'.
 * @return {ol.Coordinate} Coordinate projected to the target projection.
 * @api
 */
_ol_proj_.fromLonLat = function(coordinate, opt_projection) {
  return _ol_proj_.transform(coordinate, 'EPSG:4326',
      opt_projection !== undefined ? opt_projection : 'EPSG:3857');
};


/**
 * Transforms a coordinate to longitude/latitude.
 * @param {ol.Coordinate} coordinate Projected coordinate.
 * @param {ol.ProjectionLike=} opt_projection Projection of the coordinate.
 *     The default is Web Mercator, i.e. 'EPSG:3857'.
 * @return {ol.Coordinate} Coordinate as longitude and latitude, i.e. an array
 *     with longitude as 1st and latitude as 2nd element.
 * @api
 */
_ol_proj_.toLonLat = function(coordinate, opt_projection) {
  var lonLat = _ol_proj_.transform(coordinate,
      opt_projection !== undefined ? opt_projection : 'EPSG:3857', 'EPSG:4326');
  var lon = lonLat[0];
  if (lon < -180 || lon > 180) {
    lonLat[0] = __WEBPACK_IMPORTED_MODULE_3__math_js__["a" /* default */].modulo(lon + 180, 360) - 180;
  }
  return lonLat;
};


/**
 * Fetches a Projection object for the code specified.
 *
 * @param {ol.ProjectionLike} projectionLike Either a code string which is
 *     a combination of authority and identifier such as "EPSG:4326", or an
 *     existing projection object, or undefined.
 * @return {ol.proj.Projection} Projection object, or null if not in list.
 * @api
 */
_ol_proj_.get = function(projectionLike) {
  var projection = null;
  if (projectionLike instanceof __WEBPACK_IMPORTED_MODULE_6__proj_projection_js__["a" /* default */]) {
    projection = projectionLike;
  } else if (typeof projectionLike === 'string') {
    var code = projectionLike;
    projection = __WEBPACK_IMPORTED_MODULE_9__proj_projections_js__["a" /* default */].get(code);
    if (__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].ENABLE_PROJ4JS && !projection) {
      var proj4js = __WEBPACK_IMPORTED_MODULE_8__proj_proj4_js__["a" /* default */].get();
      if (typeof proj4js == 'function' &&
          proj4js.defs(code) !== undefined) {
        projection = new __WEBPACK_IMPORTED_MODULE_6__proj_projection_js__["a" /* default */]({code: code});
        _ol_proj_.addProjection(projection);
      }
    }
  }
  return projection;
};


/**
 * Checks if two projections are the same, that is every coordinate in one
 * projection does represent the same geographic point as the same coordinate in
 * the other projection.
 *
 * @param {ol.proj.Projection} projection1 Projection 1.
 * @param {ol.proj.Projection} projection2 Projection 2.
 * @return {boolean} Equivalent.
 * @api
 */
_ol_proj_.equivalent = function(projection1, projection2) {
  if (projection1 === projection2) {
    return true;
  }
  var equalUnits = projection1.getUnits() === projection2.getUnits();
  if (projection1.getCode() === projection2.getCode()) {
    return equalUnits;
  } else {
    var transformFn = _ol_proj_.getTransformFromProjections(
        projection1, projection2);
    return transformFn === _ol_proj_.cloneTransform && equalUnits;
  }
};


/**
 * Given the projection-like objects, searches for a transformation
 * function to convert a coordinates array from the source projection to the
 * destination projection.
 *
 * @param {ol.ProjectionLike} source Source.
 * @param {ol.ProjectionLike} destination Destination.
 * @return {ol.TransformFunction} Transform function.
 * @api
 */
_ol_proj_.getTransform = function(source, destination) {
  var sourceProjection = _ol_proj_.get(source);
  var destinationProjection = _ol_proj_.get(destination);
  return _ol_proj_.getTransformFromProjections(
      sourceProjection, destinationProjection);
};


/**
 * Searches in the list of transform functions for the function for converting
 * coordinates from the source projection to the destination projection.
 *
 * @param {ol.proj.Projection} sourceProjection Source Projection object.
 * @param {ol.proj.Projection} destinationProjection Destination Projection
 *     object.
 * @return {ol.TransformFunction} Transform function.
 */
_ol_proj_.getTransformFromProjections = function(sourceProjection, destinationProjection) {
  var sourceCode = sourceProjection.getCode();
  var destinationCode = destinationProjection.getCode();
  var transform = __WEBPACK_IMPORTED_MODULE_10__proj_transforms_js__["a" /* default */].get(sourceCode, destinationCode);
  if (__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].ENABLE_PROJ4JS && !transform) {
    var proj4js = __WEBPACK_IMPORTED_MODULE_8__proj_proj4_js__["a" /* default */].get();
    if (typeof proj4js == 'function') {
      var sourceDef = proj4js.defs(sourceCode);
      var destinationDef = proj4js.defs(destinationCode);

      if (sourceDef !== undefined && destinationDef !== undefined) {
        if (sourceDef === destinationDef) {
          _ol_proj_.addEquivalentProjections([destinationProjection, sourceProjection]);
        } else {
          var proj4Transform = proj4js(destinationCode, sourceCode);
          _ol_proj_.addCoordinateTransforms(destinationProjection, sourceProjection,
              proj4Transform.forward, proj4Transform.inverse);
        }
        transform = __WEBPACK_IMPORTED_MODULE_10__proj_transforms_js__["a" /* default */].get(sourceCode, destinationCode);
      }
    }
  }
  if (!transform) {
    transform = _ol_proj_.identityTransform;
  }
  return transform;
};


/**
 * @param {Array.<number>} input Input coordinate array.
 * @param {Array.<number>=} opt_output Output array of coordinate values.
 * @param {number=} opt_dimension Dimension.
 * @return {Array.<number>} Input coordinate array (same array as input).
 */
_ol_proj_.identityTransform = function(input, opt_output, opt_dimension) {
  if (opt_output !== undefined && input !== opt_output) {
    for (var i = 0, ii = input.length; i < ii; ++i) {
      opt_output[i] = input[i];
    }
    input = opt_output;
  }
  return input;
};


/**
 * @param {Array.<number>} input Input coordinate array.
 * @param {Array.<number>=} opt_output Output array of coordinate values.
 * @param {number=} opt_dimension Dimension.
 * @return {Array.<number>} Output coordinate array (new array, same coordinate
 *     values).
 */
_ol_proj_.cloneTransform = function(input, opt_output, opt_dimension) {
  var output;
  if (opt_output !== undefined) {
    for (var i = 0, ii = input.length; i < ii; ++i) {
      opt_output[i] = input[i];
    }
    output = opt_output;
  } else {
    output = input.slice();
  }
  return output;
};


/**
 * Transforms a coordinate from source projection to destination projection.
 * This returns a new coordinate (and does not modify the original).
 *
 * See {@link ol.proj.transformExtent} for extent transformation.
 * See the transform method of {@link ol.geom.Geometry} and its subclasses for
 * geometry transforms.
 *
 * @param {ol.Coordinate} coordinate Coordinate.
 * @param {ol.ProjectionLike} source Source projection-like.
 * @param {ol.ProjectionLike} destination Destination projection-like.
 * @return {ol.Coordinate} Coordinate.
 * @api
 */
_ol_proj_.transform = function(coordinate, source, destination) {
  var transformFn = _ol_proj_.getTransform(source, destination);
  return transformFn(coordinate, undefined, coordinate.length);
};


/**
 * Transforms an extent from source projection to destination projection.  This
 * returns a new extent (and does not modify the original).
 *
 * @param {ol.Extent} extent The extent to transform.
 * @param {ol.ProjectionLike} source Source projection-like.
 * @param {ol.ProjectionLike} destination Destination projection-like.
 * @return {ol.Extent} The transformed extent.
 * @api
 */
_ol_proj_.transformExtent = function(extent, source, destination) {
  var transformFn = _ol_proj_.getTransform(source, destination);
  return __WEBPACK_IMPORTED_MODULE_2__extent_js__["a" /* default */].applyTransform(extent, transformFn);
};


/**
 * Transforms the given point to the destination projection.
 *
 * @param {ol.Coordinate} point Point.
 * @param {ol.proj.Projection} sourceProjection Source projection.
 * @param {ol.proj.Projection} destinationProjection Destination projection.
 * @return {ol.Coordinate} Point.
 */
_ol_proj_.transformWithProjections = function(point, sourceProjection, destinationProjection) {
  var transformFn = _ol_proj_.getTransformFromProjections(
      sourceProjection, destinationProjection);
  return transformFn(point);
};

/**
 * Add transforms to and from EPSG:4326 and EPSG:3857.  This function is called
 * by when this module is executed and should only need to be called again after
 * `ol.proj.clearAllProjections()` is called (e.g. in tests).
 */
_ol_proj_.addCommon = function() {
  // Add transformations that don't alter coordinates to convert within set of
  // projections with equal meaning.
  _ol_proj_.addEquivalentProjections(__WEBPACK_IMPORTED_MODULE_4__proj_epsg3857_js__["a" /* default */].PROJECTIONS);
  _ol_proj_.addEquivalentProjections(__WEBPACK_IMPORTED_MODULE_5__proj_epsg4326_js__["a" /* default */].PROJECTIONS);
  // Add transformations to convert EPSG:4326 like coordinates to EPSG:3857 like
  // coordinates and back.
  _ol_proj_.addEquivalentTransforms(
      __WEBPACK_IMPORTED_MODULE_5__proj_epsg4326_js__["a" /* default */].PROJECTIONS,
      __WEBPACK_IMPORTED_MODULE_4__proj_epsg3857_js__["a" /* default */].PROJECTIONS,
      __WEBPACK_IMPORTED_MODULE_4__proj_epsg3857_js__["a" /* default */].fromEPSG4326,
      __WEBPACK_IMPORTED_MODULE_4__proj_epsg3857_js__["a" /* default */].toEPSG4326);
};

_ol_proj_.addCommon();
/* harmony default export */ __webpack_exports__["a"] = (_ol_proj_);


/***/ }),
/* 299 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__ = __webpack_require__(103);
/**
 * @license
 * Latitude/longitude spherical geodesy formulae taken from
 * http://www.movable-type.co.uk/scripts/latlong.html
 * Licensed under CC-BY-3.0.
 */




/**
 * @classdesc
 * Class to create objects that can be used with {@link
 * ol.geom.Polygon.circular}.
 *
 * For example to create a sphere whose radius is equal to the semi-major
 * axis of the WGS84 ellipsoid:
 *
 * ```js
 * var wgs84Sphere= new ol.Sphere(6378137);
 * ```
 *
 * @constructor
 * @param {number} radius Radius.
 * @api
 */
var _ol_Sphere_ = function(radius) {

  /**
   * @type {number}
   */
  this.radius = radius;

};


/**
 * Returns the geodesic area for a list of coordinates.
 *
 * [Reference](https://trs-new.jpl.nasa.gov/handle/2014/40409)
 * Robert. G. Chamberlain and William H. Duquette, "Some Algorithms for
 * Polygons on a Sphere", JPL Publication 07-03, Jet Propulsion
 * Laboratory, Pasadena, CA, June 2007
 *
 * @param {Array.<ol.Coordinate>} coordinates List of coordinates of a linear
 * ring. If the ring is oriented clockwise, the area will be positive,
 * otherwise it will be negative.
 * @return {number} Area.
 * @api
 */
_ol_Sphere_.prototype.geodesicArea = function(coordinates) {
  return _ol_Sphere_.getArea_(coordinates, this.radius);
};


/**
 * Returns the distance from c1 to c2 using the haversine formula.
 *
 * @param {ol.Coordinate} c1 Coordinate 1.
 * @param {ol.Coordinate} c2 Coordinate 2.
 * @return {number} Haversine distance.
 * @api
 */
_ol_Sphere_.prototype.haversineDistance = function(c1, c2) {
  return _ol_Sphere_.getDistance_(c1, c2, this.radius);
};


/**
 * Returns the coordinate at the given distance and bearing from `c1`.
 *
 * @param {ol.Coordinate} c1 The origin point (`[lon, lat]` in degrees).
 * @param {number} distance The great-circle distance between the origin
 *     point and the target point.
 * @param {number} bearing The bearing (in radians).
 * @return {ol.Coordinate} The target point.
 */
_ol_Sphere_.prototype.offset = function(c1, distance, bearing) {
  var lat1 = __WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* default */].toRadians(c1[1]);
  var lon1 = __WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* default */].toRadians(c1[0]);
  var dByR = distance / this.radius;
  var lat = Math.asin(
      Math.sin(lat1) * Math.cos(dByR) +
      Math.cos(lat1) * Math.sin(dByR) * Math.cos(bearing));
  var lon = lon1 + Math.atan2(
      Math.sin(bearing) * Math.sin(dByR) * Math.cos(lat1),
      Math.cos(dByR) - Math.sin(lat1) * Math.sin(lat));
  return [__WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* default */].toDegrees(lon), __WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* default */].toDegrees(lat)];
};


/**
 * The mean Earth radius (1/3 * (2a + b)) for the WGS84 ellipsoid.
 * https://en.wikipedia.org/wiki/Earth_radius#Mean_radius
 * @type {number}
 */
_ol_Sphere_.DEFAULT_RADIUS = 6371008.8;


/**
 * Get the spherical length of a geometry.  This length is the sum of the
 * great circle distances between coordinates.  For polygons, the length is
 * the sum of all rings.  For points, the length is zero.  For multi-part
 * geometries, the length is the sum of the length of each part.
 * @param {ol.geom.Geometry} geometry A geometry.
 * @param {olx.SphereMetricOptions=} opt_options Options for the length
 *     calculation.  By default, geometries are assumed to be in 'EPSG:3857'.
 *     You can change this by providing a `projection` option.
 * @return {number} The spherical length (in meters).
 * @api
 */
_ol_Sphere_.getLength = function(geometry, opt_options) {
  var options = opt_options || {};
  var radius = options.radius || _ol_Sphere_.DEFAULT_RADIUS;
  var projection = options.projection || 'EPSG:3857';
  geometry = geometry.clone().transform(projection, 'EPSG:4326');
  var type = geometry.getType();
  var length = 0;
  var coordinates, coords, i, ii, j, jj;
  switch (type) {
    case __WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__["a" /* default */].POINT:
    case __WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__["a" /* default */].MULTI_POINT: {
      break;
    }
    case __WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__["a" /* default */].LINE_STRING:
    case __WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__["a" /* default */].LINEAR_RING: {
      coordinates = /** @type {ol.geom.SimpleGeometry} */ (geometry).getCoordinates();
      length = _ol_Sphere_.getLength_(coordinates, radius);
      break;
    }
    case __WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__["a" /* default */].MULTI_LINE_STRING:
    case __WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__["a" /* default */].POLYGON: {
      coordinates = /** @type {ol.geom.SimpleGeometry} */ (geometry).getCoordinates();
      for (i = 0, ii = coordinates.length; i < ii; ++i) {
        length += _ol_Sphere_.getLength_(coordinates[i], radius);
      }
      break;
    }
    case __WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__["a" /* default */].MULTI_POLYGON: {
      coordinates = /** @type {ol.geom.SimpleGeometry} */ (geometry).getCoordinates();
      for (i = 0, ii = coordinates.length; i < ii; ++i) {
        coords = coordinates[i];
        for (j = 0, jj = coords.length; j < jj; ++j) {
          length += _ol_Sphere_.getLength_(coords[j], radius);
        }
      }
      break;
    }
    case __WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__["a" /* default */].GEOMETRY_COLLECTION: {
      var geometries = /** @type {ol.geom.GeometryCollection} */ (geometry).getGeometries();
      for (i = 0, ii = geometries.length; i < ii; ++i) {
        length += _ol_Sphere_.getLength(geometries[i], opt_options);
      }
      break;
    }
    default: {
      throw new Error('Unsupported geometry type: ' + type);
    }
  }
  return length;
};


/**
 * Get the cumulative great circle length of linestring coordinates (geographic).
 * @param {Array} coordinates Linestring coordinates.
 * @param {number} radius The sphere radius to use.
 * @return {number} The length (in meters).
 */
_ol_Sphere_.getLength_ = function(coordinates, radius) {
  var length = 0;
  for (var i = 0, ii = coordinates.length; i < ii - 1; ++i) {
    length += _ol_Sphere_.getDistance_(coordinates[i], coordinates[i + 1], radius);
  }
  return length;
};


/**
 * Get the great circle distance between two geographic coordinates.
 * @param {Array} c1 Starting coordinate.
 * @param {Array} c2 Ending coordinate.
 * @param {number} radius The sphere radius to use.
 * @return {number} The great circle distance between the points (in meters).
 */
_ol_Sphere_.getDistance_ = function(c1, c2, radius) {
  var lat1 = __WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* default */].toRadians(c1[1]);
  var lat2 = __WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* default */].toRadians(c2[1]);
  var deltaLatBy2 = (lat2 - lat1) / 2;
  var deltaLonBy2 = __WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* default */].toRadians(c2[0] - c1[0]) / 2;
  var a = Math.sin(deltaLatBy2) * Math.sin(deltaLatBy2) +
      Math.sin(deltaLonBy2) * Math.sin(deltaLonBy2) *
      Math.cos(lat1) * Math.cos(lat2);
  return 2 * radius * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};


/**
 * Get the spherical area of a geometry.  This is the area (in meters) assuming
 * that polygon edges are segments of great circles on a sphere.
 * @param {ol.geom.Geometry} geometry A geometry.
 * @param {olx.SphereMetricOptions=} opt_options Options for the area
 *     calculation.  By default, geometries are assumed to be in 'EPSG:3857'.
 *     You can change this by providing a `projection` option.
 * @return {number} The spherical area (in square meters).
 * @api
 */
_ol_Sphere_.getArea = function(geometry, opt_options) {
  var options = opt_options || {};
  var radius = options.radius || _ol_Sphere_.DEFAULT_RADIUS;
  var projection = options.projection || 'EPSG:3857';
  geometry = geometry.clone().transform(projection, 'EPSG:4326');
  var type = geometry.getType();
  var area = 0;
  var coordinates, coords, i, ii, j, jj;
  switch (type) {
    case __WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__["a" /* default */].POINT:
    case __WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__["a" /* default */].MULTI_POINT:
    case __WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__["a" /* default */].LINE_STRING:
    case __WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__["a" /* default */].MULTI_LINE_STRING:
    case __WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__["a" /* default */].LINEAR_RING: {
      break;
    }
    case __WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__["a" /* default */].POLYGON: {
      coordinates = /** @type {ol.geom.Polygon} */ (geometry).getCoordinates();
      area = Math.abs(_ol_Sphere_.getArea_(coordinates[0], radius));
      for (i = 1, ii = coordinates.length; i < ii; ++i) {
        area -= Math.abs(_ol_Sphere_.getArea_(coordinates[i], radius));
      }
      break;
    }
    case __WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__["a" /* default */].MULTI_POLYGON: {
      coordinates = /** @type {ol.geom.SimpleGeometry} */ (geometry).getCoordinates();
      for (i = 0, ii = coordinates.length; i < ii; ++i) {
        coords = coordinates[i];
        area += Math.abs(_ol_Sphere_.getArea_(coords[0], radius));
        for (j = 1, jj = coords.length; j < jj; ++j) {
          area -= Math.abs(_ol_Sphere_.getArea_(coords[j], radius));
        }
      }
      break;
    }
    case __WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__["a" /* default */].GEOMETRY_COLLECTION: {
      var geometries = /** @type {ol.geom.GeometryCollection} */ (geometry).getGeometries();
      for (i = 0, ii = geometries.length; i < ii; ++i) {
        area += _ol_Sphere_.getArea(geometries[i], opt_options);
      }
      break;
    }
    default: {
      throw new Error('Unsupported geometry type: ' + type);
    }
  }
  return area;
};


/**
 * Returns the spherical area for a list of coordinates.
 *
 * [Reference](https://trs-new.jpl.nasa.gov/handle/2014/40409)
 * Robert. G. Chamberlain and William H. Duquette, "Some Algorithms for
 * Polygons on a Sphere", JPL Publication 07-03, Jet Propulsion
 * Laboratory, Pasadena, CA, June 2007
 *
 * @param {Array.<ol.Coordinate>} coordinates List of coordinates of a linear
 * ring. If the ring is oriented clockwise, the area will be positive,
 * otherwise it will be negative.
 * @param {number} radius The sphere radius.
 * @return {number} Area (in square meters).
 */
_ol_Sphere_.getArea_ = function(coordinates, radius) {
  var area = 0, len = coordinates.length;
  var x1 = coordinates[len - 1][0];
  var y1 = coordinates[len - 1][1];
  for (var i = 0; i < len; i++) {
    var x2 = coordinates[i][0], y2 = coordinates[i][1];
    area += __WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* default */].toRadians(x2 - x1) *
        (2 + Math.sin(__WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* default */].toRadians(y1)) +
        Math.sin(__WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* default */].toRadians(y2)));
    x1 = x2;
    y1 = y2;
  }
  return area * radius * radius / 2.0;
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_Sphere_);


/***/ }),
/* 300 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__proj_projection_js__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__proj_units_js__ = __webpack_require__(61);




var _ol_proj_EPSG3857_ = {};


/**
 * @classdesc
 * Projection object for web/spherical Mercator (EPSG:3857).
 *
 * @constructor
 * @extends {ol.proj.Projection}
 * @param {string} code Code.
 * @private
 */
_ol_proj_EPSG3857_.Projection_ = function(code) {
  __WEBPACK_IMPORTED_MODULE_2__proj_projection_js__["a" /* default */].call(this, {
    code: code,
    units: __WEBPACK_IMPORTED_MODULE_3__proj_units_js__["a" /* default */].METERS,
    extent: _ol_proj_EPSG3857_.EXTENT,
    global: true,
    worldExtent: _ol_proj_EPSG3857_.WORLD_EXTENT,
    getPointResolution: function(resolution, point) {
      return resolution / __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* default */].cosh(point[1] / _ol_proj_EPSG3857_.RADIUS);
    }
  });
};
__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_proj_EPSG3857_.Projection_, __WEBPACK_IMPORTED_MODULE_2__proj_projection_js__["a" /* default */]);


/**
 * Radius of WGS84 sphere
 *
 * @const
 * @type {number}
 */
_ol_proj_EPSG3857_.RADIUS = 6378137;


/**
 * @const
 * @type {number}
 */
_ol_proj_EPSG3857_.HALF_SIZE = Math.PI * _ol_proj_EPSG3857_.RADIUS;


/**
 * @const
 * @type {ol.Extent}
 */
_ol_proj_EPSG3857_.EXTENT = [
  -_ol_proj_EPSG3857_.HALF_SIZE, -_ol_proj_EPSG3857_.HALF_SIZE,
  _ol_proj_EPSG3857_.HALF_SIZE, _ol_proj_EPSG3857_.HALF_SIZE
];


/**
 * @const
 * @type {ol.Extent}
 */
_ol_proj_EPSG3857_.WORLD_EXTENT = [-180, -85, 180, 85];


/**
 * Projections equal to EPSG:3857.
 *
 * @const
 * @type {Array.<ol.proj.Projection>}
 */
_ol_proj_EPSG3857_.PROJECTIONS = [
  new _ol_proj_EPSG3857_.Projection_('EPSG:3857'),
  new _ol_proj_EPSG3857_.Projection_('EPSG:102100'),
  new _ol_proj_EPSG3857_.Projection_('EPSG:102113'),
  new _ol_proj_EPSG3857_.Projection_('EPSG:900913'),
  new _ol_proj_EPSG3857_.Projection_('urn:ogc:def:crs:EPSG:6.18:3:3857'),
  new _ol_proj_EPSG3857_.Projection_('urn:ogc:def:crs:EPSG::3857'),
  new _ol_proj_EPSG3857_.Projection_('http://www.opengis.net/gml/srs/epsg.xml#3857')
];


/**
 * Transformation from EPSG:4326 to EPSG:3857.
 *
 * @param {Array.<number>} input Input array of coordinate values.
 * @param {Array.<number>=} opt_output Output array of coordinate values.
 * @param {number=} opt_dimension Dimension (default is `2`).
 * @return {Array.<number>} Output array of coordinate values.
 */
_ol_proj_EPSG3857_.fromEPSG4326 = function(input, opt_output, opt_dimension) {
  var length = input.length,
      dimension = opt_dimension > 1 ? opt_dimension : 2,
      output = opt_output;
  if (output === undefined) {
    if (dimension > 2) {
      // preserve values beyond second dimension
      output = input.slice();
    } else {
      output = new Array(length);
    }
  }
  var halfSize = _ol_proj_EPSG3857_.HALF_SIZE;
  for (var i = 0; i < length; i += dimension) {
    output[i] = halfSize * input[i] / 180;
    var y = _ol_proj_EPSG3857_.RADIUS *
        Math.log(Math.tan(Math.PI * (input[i + 1] + 90) / 360));
    if (y > halfSize) {
      y = halfSize;
    } else if (y < -halfSize) {
      y = -halfSize;
    }
    output[i + 1] = y;
  }
  return output;
};


/**
 * Transformation from EPSG:3857 to EPSG:4326.
 *
 * @param {Array.<number>} input Input array of coordinate values.
 * @param {Array.<number>=} opt_output Output array of coordinate values.
 * @param {number=} opt_dimension Dimension (default is `2`).
 * @return {Array.<number>} Output array of coordinate values.
 */
_ol_proj_EPSG3857_.toEPSG4326 = function(input, opt_output, opt_dimension) {
  var length = input.length,
      dimension = opt_dimension > 1 ? opt_dimension : 2,
      output = opt_output;
  if (output === undefined) {
    if (dimension > 2) {
      // preserve values beyond second dimension
      output = input.slice();
    } else {
      output = new Array(length);
    }
  }
  for (var i = 0; i < length; i += dimension) {
    output[i] = 180 * input[i] / _ol_proj_EPSG3857_.HALF_SIZE;
    output[i + 1] = 360 * Math.atan(
        Math.exp(input[i + 1] / _ol_proj_EPSG3857_.RADIUS)) / Math.PI - 90;
  }
  return output;
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_proj_EPSG3857_);


/***/ }),
/* 301 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__proj_projection_js__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__proj_units_js__ = __webpack_require__(61);



var _ol_proj_EPSG4326_ = {};


/**
 * @classdesc
 * Projection object for WGS84 geographic coordinates (EPSG:4326).
 *
 * Note that OpenLayers does not strictly comply with the EPSG definition.
 * The EPSG registry defines 4326 as a CRS for Latitude,Longitude (y,x).
 * OpenLayers treats EPSG:4326 as a pseudo-projection, with x,y coordinates.
 *
 * @constructor
 * @extends {ol.proj.Projection}
 * @param {string} code Code.
 * @param {string=} opt_axisOrientation Axis orientation.
 * @private
 */
_ol_proj_EPSG4326_.Projection_ = function(code, opt_axisOrientation) {
  __WEBPACK_IMPORTED_MODULE_1__proj_projection_js__["a" /* default */].call(this, {
    code: code,
    units: __WEBPACK_IMPORTED_MODULE_2__proj_units_js__["a" /* default */].DEGREES,
    extent: _ol_proj_EPSG4326_.EXTENT,
    axisOrientation: opt_axisOrientation,
    global: true,
    metersPerUnit: _ol_proj_EPSG4326_.METERS_PER_UNIT,
    worldExtent: _ol_proj_EPSG4326_.EXTENT
  });
};
__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_proj_EPSG4326_.Projection_, __WEBPACK_IMPORTED_MODULE_1__proj_projection_js__["a" /* default */]);


/**
 * Radius of WGS84 sphere
 *
 * @const
 * @type {number}
 */
_ol_proj_EPSG4326_.RADIUS = 6378137;


/**
 * Extent of the EPSG:4326 projection which is the whole world.
 *
 * @const
 * @type {ol.Extent}
 */
_ol_proj_EPSG4326_.EXTENT = [-180, -90, 180, 90];


/**
 * @const
 * @type {number}
 */
_ol_proj_EPSG4326_.METERS_PER_UNIT = Math.PI * _ol_proj_EPSG4326_.RADIUS / 180;


/**
 * Projections equal to EPSG:4326.
 *
 * @const
 * @type {Array.<ol.proj.Projection>}
 */
_ol_proj_EPSG4326_.PROJECTIONS = [
  new _ol_proj_EPSG4326_.Projection_('CRS:84'),
  new _ol_proj_EPSG4326_.Projection_('EPSG:4326', 'neu'),
  new _ol_proj_EPSG4326_.Projection_('urn:ogc:def:crs:EPSG::4326', 'neu'),
  new _ol_proj_EPSG4326_.Projection_('urn:ogc:def:crs:EPSG:6.6:4326', 'neu'),
  new _ol_proj_EPSG4326_.Projection_('urn:ogc:def:crs:OGC:1.3:CRS84'),
  new _ol_proj_EPSG4326_.Projection_('urn:ogc:def:crs:OGC:2:84'),
  new _ol_proj_EPSG4326_.Projection_('http://www.opengis.net/gml/srs/epsg.xml#4326', 'neu'),
  new _ol_proj_EPSG4326_.Projection_('urn:x-ogc:def:crs:EPSG:4326', 'neu')
];
/* harmony default export */ __webpack_exports__["a"] = (_ol_proj_EPSG4326_);


/***/ }),
/* 302 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _ol_proj_projections_ = {};


/**
 * @private
 * @type {Object.<string, ol.proj.Projection>}
 */
_ol_proj_projections_.cache_ = {};


/**
 * Clear the projections cache.
 */
_ol_proj_projections_.clear = function() {
  _ol_proj_projections_.cache_ = {};
};


/**
 * Get a cached projection by code.
 * @param {string} code The code for the projection.
 * @return {ol.proj.Projection} The projection (if cached).
 */
_ol_proj_projections_.get = function(code) {
  var projections = _ol_proj_projections_.cache_;
  return projections[code] || null;
};


/**
 * Add a projection to the cache.
 * @param {string} code The projection code.
 * @param {ol.proj.Projection} projection The projection to cache.
 */
_ol_proj_projections_.add = function(code, projection) {
  var projections = _ol_proj_projections_.cache_;
  projections[code] = projection;
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_proj_projections_);


/***/ }),
/* 303 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__obj_js__ = __webpack_require__(60);

var _ol_proj_transforms_ = {};


/**
 * @private
 * @type {Object.<string, Object.<string, ol.TransformFunction>>}
 */
_ol_proj_transforms_.cache_ = {};


/**
 * Clear the transform cache.
 */
_ol_proj_transforms_.clear = function() {
  _ol_proj_transforms_.cache_ = {};
};


/**
 * Registers a conversion function to convert coordinates from the source
 * projection to the destination projection.
 *
 * @param {ol.proj.Projection} source Source.
 * @param {ol.proj.Projection} destination Destination.
 * @param {ol.TransformFunction} transformFn Transform.
 */
_ol_proj_transforms_.add = function(source, destination, transformFn) {
  var sourceCode = source.getCode();
  var destinationCode = destination.getCode();
  var transforms = _ol_proj_transforms_.cache_;
  if (!(sourceCode in transforms)) {
    transforms[sourceCode] = {};
  }
  transforms[sourceCode][destinationCode] = transformFn;
};


/**
 * Unregisters the conversion function to convert coordinates from the source
 * projection to the destination projection.  This method is used to clean up
 * cached transforms during testing.
 *
 * @param {ol.proj.Projection} source Source projection.
 * @param {ol.proj.Projection} destination Destination projection.
 * @return {ol.TransformFunction} transformFn The unregistered transform.
 */
_ol_proj_transforms_.remove = function(source, destination) {
  var sourceCode = source.getCode();
  var destinationCode = destination.getCode();
  var transforms = _ol_proj_transforms_.cache_;
  var transform = transforms[sourceCode][destinationCode];
  delete transforms[sourceCode][destinationCode];
  if (__WEBPACK_IMPORTED_MODULE_0__obj_js__["a" /* default */].isEmpty(transforms[sourceCode])) {
    delete transforms[sourceCode];
  }
  return transform;
};


/**
 * Get a transform given a source code and a destination code.
 * @param {string} sourceCode The code for the source projection.
 * @param {string} destinationCode The code for the destination projection.
 * @return {ol.TransformFunction|undefined} The transform function (if found).
 */
_ol_proj_transforms_.get = function(sourceCode, destinationCode) {
  var transform;
  var transforms = _ol_proj_transforms_.cache_;
  if (sourceCode in transforms && destinationCode in transforms[sourceCode]) {
    transform = transforms[sourceCode][destinationCode];
  }
  return transform;
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_proj_transforms_);


/***/ }),
/* 304 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _ol_geom_flat_deflate_ = {};


/**
 * @param {Array.<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {ol.Coordinate} coordinate Coordinate.
 * @param {number} stride Stride.
 * @return {number} offset Offset.
 */
_ol_geom_flat_deflate_.coordinate = function(flatCoordinates, offset, coordinate, stride) {
  var i, ii;
  for (i = 0, ii = coordinate.length; i < ii; ++i) {
    flatCoordinates[offset++] = coordinate[i];
  }
  return offset;
};


/**
 * @param {Array.<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array.<ol.Coordinate>} coordinates Coordinates.
 * @param {number} stride Stride.
 * @return {number} offset Offset.
 */
_ol_geom_flat_deflate_.coordinates = function(flatCoordinates, offset, coordinates, stride) {
  var i, ii;
  for (i = 0, ii = coordinates.length; i < ii; ++i) {
    var coordinate = coordinates[i];
    var j;
    for (j = 0; j < stride; ++j) {
      flatCoordinates[offset++] = coordinate[j];
    }
  }
  return offset;
};


/**
 * @param {Array.<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array.<Array.<ol.Coordinate>>} coordinatess Coordinatess.
 * @param {number} stride Stride.
 * @param {Array.<number>=} opt_ends Ends.
 * @return {Array.<number>} Ends.
 */
_ol_geom_flat_deflate_.coordinatess = function(flatCoordinates, offset, coordinatess, stride, opt_ends) {
  var ends = opt_ends ? opt_ends : [];
  var i = 0;
  var j, jj;
  for (j = 0, jj = coordinatess.length; j < jj; ++j) {
    var end = _ol_geom_flat_deflate_.coordinates(
        flatCoordinates, offset, coordinatess[j], stride);
    ends[i++] = end;
    offset = end;
  }
  ends.length = i;
  return ends;
};


/**
 * @param {Array.<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array.<Array.<Array.<ol.Coordinate>>>} coordinatesss Coordinatesss.
 * @param {number} stride Stride.
 * @param {Array.<Array.<number>>=} opt_endss Endss.
 * @return {Array.<Array.<number>>} Endss.
 */
_ol_geom_flat_deflate_.coordinatesss = function(flatCoordinates, offset, coordinatesss, stride, opt_endss) {
  var endss = opt_endss ? opt_endss : [];
  var i = 0;
  var j, jj;
  for (j = 0, jj = coordinatesss.length; j < jj; ++j) {
    var ends = _ol_geom_flat_deflate_.coordinatess(
        flatCoordinates, offset, coordinatesss[j], stride, endss[i]);
    endss[i++] = ends;
    offset = ends[ends.length - 1];
  }
  endss.length = i;
  return endss;
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_geom_flat_deflate_);


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {


const colorSpaces = __webpack_require__(306);
const parseColor = __webpack_require__(307);
const extend = __webpack_require__(309);
const getType = __webpack_require__(310);
const interpolate = __webpack_require__(311);

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
/* 306 */
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
/* 307 */
/***/ (function(module, exports, __webpack_require__) {


const parseColorString = __webpack_require__(308).parseCSSColor;

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
/* 308 */
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
/* 309 */
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
/* 310 */
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
/* 311 */
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
/* 312 */
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
/* 313 */
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


/***/ })
],[162]);