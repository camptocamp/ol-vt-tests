webpackJsonp([1],{

/***/ 100:
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

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__asserts_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pbf__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pbf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pbf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__format_Feature_js__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__format_FormatType_js__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__geom_GeometryLayout_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__geom_GeometryType_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__geom_LineString_js__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__geom_MultiLineString_js__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__geom_MultiPoint_js__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__geom_MultiPolygon_js__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__geom_Point_js__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__geom_Polygon_js__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__geom_flat_orient_js__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__proj_Projection_js__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__proj_Units_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__render_Feature_js__ = __webpack_require__(127);
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

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Pbf;

var ieee754 = __webpack_require__(123);

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

/***/ 123:
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

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = transformWithOptions;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__geom_Geometry_js__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__obj_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__proj_js__ = __webpack_require__(10);
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

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__extent_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__geom_GeometryLayout_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__geom_GeometryType_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__geom_LineString_js__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__geom_SimpleGeometry_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__geom_flat_closest_js__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__geom_flat_deflate_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__geom_flat_inflate_js__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__geom_flat_interpolate_js__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__geom_flat_intersectsextent_js__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__geom_flat_simplify_js__ = __webpack_require__(34);
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

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__extent_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__geom_GeometryLayout_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__geom_GeometryType_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__geom_MultiPoint_js__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__geom_Polygon_js__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__geom_SimpleGeometry_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__geom_flat_area_js__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__geom_flat_center_js__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__geom_flat_closest_js__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__geom_flat_contains_js__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__geom_flat_deflate_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__geom_flat_inflate_js__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__geom_flat_interiorpoint_js__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__geom_flat_intersectsextent_js__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__geom_flat_orient_js__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__geom_flat_simplify_js__ = __webpack_require__(34);
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

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__extent_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__geom_GeometryType_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__geom_flat_center_js__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__geom_flat_interiorpoint_js__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__geom_flat_interpolate_js__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__geom_flat_transform_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__transform_js__ = __webpack_require__(12);
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

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__LayerType_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asserts_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layer_TileProperty_js__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layer_Vector_js__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layer_VectorTileRenderType_js__ = __webpack_require__(118);
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

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__LayerType_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layer_Layer_js__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layer_VectorRenderType_js__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__obj_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_Style_js__ = __webpack_require__(99);
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

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_RegularShape_js__ = __webpack_require__(131);
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

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__colorlike_js__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__has_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ImageState_js__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__render_canvas_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_Image_js__ = __webpack_require__(100);
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

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TileState_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VectorImageTile_js__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__VectorTile_js__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__size_js__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__source_UrlTile_js__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tilecoord_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tilegrid_js__ = __webpack_require__(28);
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

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = defaultLoadFunction;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Tile_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TileState_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dom_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__extent_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__events_EventType_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__featureloader_js__ = __webpack_require__(134);
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

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = loadFeaturesXhr;
/* unused harmony export xhr */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__format_FormatType_js__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__xml_js__ = __webpack_require__(135);
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

/***/ 135:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array_js__ = __webpack_require__(6);
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

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Tile_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TileState_js__ = __webpack_require__(8);
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

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(191);


/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_openlayers_Map_js__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_openlayers_View_js__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_openlayers_format_MVT_js__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_openlayers_layer_VectorTile_js__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_openlayers_source_VectorTile_js__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_openlayers_style_Fill_js__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_openlayers_style_Icon_js__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_openlayers_style_Stroke_js__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_openlayers_style_Style_js__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_openlayers_style_Text_js__ = __webpack_require__(280);












const key = 'pk.eyJ1IjoiYWhvY2V2YXIiLCJhIjoiRk1kMWZaSSJ9.E5BkluenyWQMsBLsuByrmg';
// Styles for the mapbox-streets-v6 vector tile data set. Loosely based on
// http://a.tiles.mapbox.com/v4/mapbox.mapbox-streets-v6.json

function createMapboxStreetsV6Style(Style, Fill, Stroke, Icon, Text) {
  var fill = new Fill({color: ''});
  var stroke = new Stroke({color: '', width: 1});
  var polygon = new Style({fill: fill});
  var strokedPolygon = new Style({fill: fill, stroke: stroke});
  var line = new Style({stroke: stroke});
  var text = new Style({text: new Text({
    text: '', fill: fill, stroke: stroke
  })});
  var iconCache = {};
  function getIcon(iconName) {
    var icon = iconCache[iconName];
    if (!icon) {
      icon = new Style({image: new Icon({
        src: 'https://cdn.rawgit.com/mapbox/maki/master/icons/' + iconName + '-15.svg',
        imgSize: [15, 15]
      })});
      iconCache[iconName] = icon;
    }
    return icon;
  }
  var styles = [];
  return function(feature, resolution) {
    var length = 0;
    var layer = feature.get('layer');
    var cls = feature.get('class');
    var type = feature.get('type');
    var scalerank = feature.get('scalerank');
    var labelrank = feature.get('labelrank');
    var adminLevel = feature.get('admin_level');
    var maritime = feature.get('maritime');
    var disputed = feature.get('disputed');
    var maki = feature.get('maki');
    var geom = feature.getGeometry().getType();
    if (layer == 'landuse' && cls == 'park') {
      fill.setColor('#d8e8c8');
      styles[length++] = polygon;
    } else if (layer == 'landuse' && cls == 'cemetery') {
      fill.setColor('#e0e4dd');
      styles[length++] = polygon;
    } else if (layer == 'landuse' && cls == 'hospital') {
      fill.setColor('#fde');
      styles[length++] = polygon;
    } else if (layer == 'landuse' && cls == 'school') {
      fill.setColor('#f0e8f8');
      styles[length++] = polygon;
    } else if (layer == 'landuse' && cls == 'wood') {
      fill.setColor('rgb(233,238,223)');
      styles[length++] = polygon;
    } else if (layer == 'waterway' &&
        cls != 'river' && cls != 'stream' && cls != 'canal') {
      stroke.setColor('#a0c8f0');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'waterway' && cls == 'river') {
      stroke.setColor('#a0c8f0');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'waterway' && (cls == 'stream' ||
        cls == 'canal')) {
      stroke.setColor('#a0c8f0');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'water') {
      fill.setColor('#a0c8f0');
      styles[length++] = polygon;
    } else if (layer == 'aeroway' && geom == 'Polygon') {
      fill.setColor('rgb(242,239,235)');
      styles[length++] = polygon;
    } else if (layer == 'aeroway' && geom == 'LineString' &&
        resolution <= 76.43702828517625) {
      stroke.setColor('#f0ede9');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'building') {
      fill.setColor('#f2eae2');
      stroke.setColor('#dfdbd7');
      stroke.setWidth(1);
      styles[length++] = strokedPolygon;
    } else if (layer == 'tunnel' && cls == 'motorway_link') {
      stroke.setColor('#e9ac77');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'tunnel' && cls == 'service') {
      stroke.setColor('#cfcdca');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'tunnel' &&
        (cls == 'street' || cls == 'street_limited')) {
      stroke.setColor('#cfcdca');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'tunnel' && cls == 'main' &&
        resolution <= 1222.99245256282) {
      stroke.setColor('#e9ac77');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'tunnel' && cls == 'motorway') {
      stroke.setColor('#e9ac77');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'tunnel' && cls == 'path') {
      stroke.setColor('#cba');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'tunnel' && cls == 'major_rail') {
      stroke.setColor('#bbb');
      stroke.setWidth(2);
      styles[length++] = line;
    } else if (layer == 'road' && cls == 'motorway_link') {
      stroke.setColor('#e9ac77');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'road' && (cls == 'street' ||
        cls == 'street_limited') && geom == 'LineString') {
      stroke.setColor('#cfcdca');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'road' && cls == 'main' &&
        resolution <= 1222.99245256282) {
      stroke.setColor('#e9ac77');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'road' && cls == 'motorway' &&
        resolution <= 4891.96981025128) {
      stroke.setColor('#e9ac77');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'road' && cls == 'path') {
      stroke.setColor('#cba');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'road' && cls == 'major_rail') {
      stroke.setColor('#bbb');
      stroke.setWidth(2);
      styles[length++] = line;
    } else if (layer == 'bridge' && cls == 'motorway_link') {
      stroke.setColor('#e9ac77');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'bridge' && cls == 'motorway') {
      stroke.setColor('#e9ac77');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'bridge' && cls == 'service') {
      stroke.setColor('#cfcdca');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'bridge' &&
        (cls == 'street' || cls == 'street_limited')) {
      stroke.setColor('#cfcdca');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'bridge' && cls == 'main' &&
        resolution <= 1222.99245256282) {
      stroke.setColor('#e9ac77');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'bridge' && cls == 'path') {
      stroke.setColor('#cba');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'bridge' && cls == 'major_rail') {
      stroke.setColor('#bbb');
      stroke.setWidth(2);
      styles[length++] = line;
    } else if (layer == 'admin' && adminLevel >= 3 && maritime === 0) {
      stroke.setColor('#9e9cab');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'admin' && adminLevel == 2 &&
        disputed === 0 && maritime === 0) {
      stroke.setColor('#9e9cab');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'admin' && adminLevel == 2 &&
        disputed === 1 && maritime === 0) {
      stroke.setColor('#9e9cab');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'admin' && adminLevel >= 3 && maritime === 1) {
      stroke.setColor('#a0c8f0');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'admin' && adminLevel == 2 && maritime === 1) {
      stroke.setColor('#a0c8f0');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'country_label' && scalerank === 1) {
      text.getText().setText(feature.get('name_en'));
      text.getText().setFont('bold 11px "Open Sans", "Arial Unicode MS"');
      fill.setColor('#334');
      stroke.setColor('rgba(255,255,255,0.8)');
      stroke.setWidth(2);
      styles[length++] = text;
    } else if (layer == 'country_label' && scalerank === 2 &&
        resolution <= 19567.87924100512) {
      text.getText().setText(feature.get('name_en'));
      text.getText().setFont('bold 10px "Open Sans", "Arial Unicode MS"');
      fill.setColor('#334');
      stroke.setColor('rgba(255,255,255,0.8)');
      stroke.setWidth(2);
      styles[length++] = text;
    } else if (layer == 'country_label' && scalerank === 3 &&
        resolution <= 9783.93962050256) {
      text.getText().setText(feature.get('name_en'));
      text.getText().setFont('bold 9px "Open Sans", "Arial Unicode MS"');
      fill.setColor('#334');
      stroke.setColor('rgba(255,255,255,0.8)');
      stroke.setWidth(2);
      styles[length++] = text;
    } else if (layer == 'country_label' && scalerank === 4 &&
        resolution <= 4891.96981025128) {
      text.getText().setText(feature.get('name_en'));
      text.getText().setFont('bold 8px "Open Sans", "Arial Unicode MS"');
      fill.setColor('#334');
      stroke.setColor('rgba(255,255,255,0.8)');
      stroke.setWidth(2);
      styles[length++] = text;
    } else if (layer == 'marine_label' && labelrank === 1 &&
        geom == 'Point') {
      text.getText().setText(feature.get('name_en'));
      text.getText().setFont(
          '11px "Open Sans", "Arial Unicode MS"');
      fill.setColor('#74aee9');
      stroke.setColor('rgba(255,255,255,0.8)');
      stroke.setWidth(1);
      styles[length++] = text;
    } else if (layer == 'marine_label' && labelrank === 2 &&
        geom == 'Point') {
      text.getText().setText(feature.get('name_en'));
      text.getText().setFont(
          '11px "Open Sans", "Arial Unicode MS"');
      fill.setColor('#74aee9');
      stroke.setColor('rgba(255,255,255,0.8)');
      stroke.setWidth(1);
      styles[length++] = text;
    } else if (layer == 'marine_label' && labelrank === 3 &&
        geom == 'Point') {
      text.getText().setText(feature.get('name_en'));
      text.getText().setFont(
          '10px "Open Sans", "Arial Unicode MS"');
      fill.setColor('#74aee9');
      stroke.setColor('rgba(255,255,255,0.8)');
      stroke.setWidth(1);
      styles[length++] = text;
    } else if (layer == 'marine_label' && labelrank === 4 &&
        geom == 'Point') {
      text.getText().setText(feature.get('name_en'));
      text.getText().setFont(
          '9px "Open Sans", "Arial Unicode MS"');
      fill.setColor('#74aee9');
      stroke.setColor('rgba(255,255,255,0.8)');
      stroke.setWidth(1);
      styles[length++] = text;
    } else if (layer == 'place_label' && type == 'city' &&
        resolution <= 1222.99245256282) {
      text.getText().setText(feature.get('name_en'));
      text.getText().setFont('11px "Open Sans", "Arial Unicode MS"');
      fill.setColor('#333');
      stroke.setColor('rgba(255,255,255,0.8)');
      stroke.setWidth(1);
      styles[length++] = text;
    } else if (layer == 'place_label' && type == 'town' &&
        resolution <= 305.748113140705) {
      text.getText().setText(feature.get('name_en'));
      text.getText().setFont('9px "Open Sans", "Arial Unicode MS"');
      fill.setColor('#333');
      stroke.setColor('rgba(255,255,255,0.8)');
      stroke.setWidth(1);
      styles[length++] = text;
    } else if (layer == 'place_label' && type == 'village' &&
        resolution <= 38.21851414258813) {
      text.getText().setText(feature.get('name_en'));
      text.getText().setFont('8px "Open Sans", "Arial Unicode MS"');
      fill.setColor('#333');
      stroke.setColor('rgba(255,255,255,0.8)');
      stroke.setWidth(1);
      styles[length++] = text;
    } else if (layer == 'place_label' &&
        resolution <= 19.109257071294063 && (type == 'hamlet' ||
        type == 'suburb' || type == 'neighbourhood')) {
      text.getText().setText(feature.get('name_en'));
      text.getText().setFont('bold 9px "Arial Narrow"');
      fill.setColor('#633');
      stroke.setColor('rgba(255,255,255,0.8)');
      stroke.setWidth(1);
      styles[length++] = text;
    } else if (layer == 'poi_label' && resolution <= 19.109257071294063 &&
        scalerank == 1 && maki !== 'marker') {
      styles[length++] = getIcon(maki);
    } else if (layer == 'poi_label' && resolution <= 9.554628535647032 &&
        scalerank == 2 && maki !== 'marker') {
      styles[length++] = getIcon(maki);
    } else if (layer == 'poi_label' && resolution <= 4.777314267823516 &&
        scalerank == 3 && maki !== 'marker') {
      styles[length++] = getIcon(maki);
    } else if (layer == 'poi_label' && resolution <= 2.388657133911758 &&
        scalerank == 4 && maki !== 'marker') {
      styles[length++] = getIcon(maki);
    } else if (layer == 'poi_label' && resolution <= 1.194328566955879 &&
        scalerank >= 5 && maki !== 'marker') {
      styles[length++] = getIcon(maki);
    }
    styles.length = length;
    return styles;
  };
}

const map = new __WEBPACK_IMPORTED_MODULE_0_openlayers_Map_js__["a" /* default */]({
  layers: [
    new __WEBPACK_IMPORTED_MODULE_3_openlayers_layer_VectorTile_js__["a" /* default */]({
      declutter: true,
      source: new __WEBPACK_IMPORTED_MODULE_4_openlayers_source_VectorTile_js__["a" /* default */]({
        attributions: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> ' +
          '© <a href="https://www.openstreetmap.org/copyright">' +
          'OpenStreetMap contributors</a>',
        format: new __WEBPACK_IMPORTED_MODULE_2_openlayers_format_MVT_js__["a" /* default */](),
        url: 'https://{a-d}.tiles.mapbox.com/v4/mapbox.mapbox-streets-v6/' +
            '{z}/{x}/{y}.vector.pbf?access_token=' + key
      }),
      style: createMapboxStreetsV6Style(__WEBPACK_IMPORTED_MODULE_8_openlayers_style_Style_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5_openlayers_style_Fill_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_7_openlayers_style_Stroke_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6_openlayers_style_Icon_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_9_openlayers_style_Text_js__["a" /* default */])
    })
  ],
  target: 'map',
  view: new __WEBPACK_IMPORTED_MODULE_1_openlayers_View_js__["a" /* default */]({
    center: [0, 0],
    zoom: 2
  }),
  renderer: 'webgl'
});

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ImageState_js__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asserts_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__color_js__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__events_EventType_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_IconAnchorUnits_js__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style_IconImage_js__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__style_IconOrigin_js__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__style_Image_js__ = __webpack_require__(100);
/**
 * @module ol/style/Icon
 */











/**
 * @classdesc
 * Set icon style for vector features.
 *
 * @constructor
 * @param {olx.style.IconOptions=} opt_options Options.
 * @extends {ol.style.Image}
 * @api
 */
const Icon = function(opt_options) {

  const options = opt_options || {};

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
    options.anchorOrigin : __WEBPACK_IMPORTED_MODULE_8__style_IconOrigin_js__["a" /* default */].TOP_LEFT;

  /**
   * @private
   * @type {ol.style.IconAnchorUnits}
   */
  this.anchorXUnits_ = options.anchorXUnits !== undefined ?
    options.anchorXUnits : __WEBPACK_IMPORTED_MODULE_6__style_IconAnchorUnits_js__["a" /* default */].FRACTION;

  /**
   * @private
   * @type {ol.style.IconAnchorUnits}
   */
  this.anchorYUnits_ = options.anchorYUnits !== undefined ?
    options.anchorYUnits : __WEBPACK_IMPORTED_MODULE_6__style_IconAnchorUnits_js__["a" /* default */].FRACTION;

  /**
   * @private
   * @type {?string}
   */
  this.crossOrigin_ =
      options.crossOrigin !== undefined ? options.crossOrigin : null;

  /**
   * @type {Image|HTMLCanvasElement}
   */
  const image = options.img !== undefined ? options.img : null;

  /**
   * @type {ol.Size}
   */
  const imgSize = options.imgSize !== undefined ? options.imgSize : null;

  /**
   * @type {string|undefined}
   */
  let src = options.src;

  Object(__WEBPACK_IMPORTED_MODULE_2__asserts_js__["a" /* assert */])(!(src !== undefined && image),
    4); // `image` and `src` cannot be provided at the same time
  Object(__WEBPACK_IMPORTED_MODULE_2__asserts_js__["a" /* assert */])(!image || (image && imgSize),
    5); // `imgSize` must be set when `image` is provided

  if ((src === undefined || src.length === 0) && image) {
    src = image.src || Object(__WEBPACK_IMPORTED_MODULE_0__index_js__["f" /* getUid */])(image).toString();
  }
  Object(__WEBPACK_IMPORTED_MODULE_2__asserts_js__["a" /* assert */])(src !== undefined && src.length > 0,
    6); // A defined and non-empty `src` or `image` must be provided

  /**
   * @type {ol.ImageState}
   */
  const imageState = options.src !== undefined ?
    __WEBPACK_IMPORTED_MODULE_1__ImageState_js__["a" /* default */].IDLE : __WEBPACK_IMPORTED_MODULE_1__ImageState_js__["a" /* default */].LOADED;

  /**
   * @private
   * @type {ol.Color}
   */
  this.color_ = options.color !== undefined ? Object(__WEBPACK_IMPORTED_MODULE_3__color_js__["a" /* asArray */])(options.color) : null;

  /**
   * @private
   * @type {ol.style.IconImage}
   */
  this.iconImage_ = __WEBPACK_IMPORTED_MODULE_7__style_IconImage_js__["a" /* default */].get(
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
    options.offsetOrigin : __WEBPACK_IMPORTED_MODULE_8__style_IconOrigin_js__["a" /* default */].TOP_LEFT;

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
  const opacity = options.opacity !== undefined ? options.opacity : 1;

  /**
   * @type {boolean}
   */
  const rotateWithView = options.rotateWithView !== undefined ?
    options.rotateWithView : false;

  /**
   * @type {number}
   */
  const rotation = options.rotation !== undefined ? options.rotation : 0;

  /**
   * @type {number}
   */
  const scale = options.scale !== undefined ? options.scale : 1;

  /**
   * @type {boolean}
   */
  const snapToPixel = options.snapToPixel !== undefined ?
    options.snapToPixel : true;

  __WEBPACK_IMPORTED_MODULE_9__style_Image_js__["a" /* default */].call(this, {
    opacity: opacity,
    rotation: rotation,
    scale: scale,
    snapToPixel: snapToPixel,
    rotateWithView: rotateWithView
  });

};

Object(__WEBPACK_IMPORTED_MODULE_0__index_js__["g" /* inherits */])(Icon, __WEBPACK_IMPORTED_MODULE_9__style_Image_js__["a" /* default */]);


/**
 * Clones the style. The underlying Image/HTMLCanvasElement is not cloned.
 * @return {ol.style.Icon} The cloned style.
 * @api
 */
Icon.prototype.clone = function() {
  return new Icon({
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
Icon.prototype.getAnchor = function() {
  if (this.normalizedAnchor_) {
    return this.normalizedAnchor_;
  }
  let anchor = this.anchor_;
  const size = this.getSize();
  if (this.anchorXUnits_ == __WEBPACK_IMPORTED_MODULE_6__style_IconAnchorUnits_js__["a" /* default */].FRACTION ||
      this.anchorYUnits_ == __WEBPACK_IMPORTED_MODULE_6__style_IconAnchorUnits_js__["a" /* default */].FRACTION) {
    if (!size) {
      return null;
    }
    anchor = this.anchor_.slice();
    if (this.anchorXUnits_ == __WEBPACK_IMPORTED_MODULE_6__style_IconAnchorUnits_js__["a" /* default */].FRACTION) {
      anchor[0] *= size[0];
    }
    if (this.anchorYUnits_ == __WEBPACK_IMPORTED_MODULE_6__style_IconAnchorUnits_js__["a" /* default */].FRACTION) {
      anchor[1] *= size[1];
    }
  }

  if (this.anchorOrigin_ != __WEBPACK_IMPORTED_MODULE_8__style_IconOrigin_js__["a" /* default */].TOP_LEFT) {
    if (!size) {
      return null;
    }
    if (anchor === this.anchor_) {
      anchor = this.anchor_.slice();
    }
    if (this.anchorOrigin_ == __WEBPACK_IMPORTED_MODULE_8__style_IconOrigin_js__["a" /* default */].TOP_RIGHT ||
        this.anchorOrigin_ == __WEBPACK_IMPORTED_MODULE_8__style_IconOrigin_js__["a" /* default */].BOTTOM_RIGHT) {
      anchor[0] = -anchor[0] + size[0];
    }
    if (this.anchorOrigin_ == __WEBPACK_IMPORTED_MODULE_8__style_IconOrigin_js__["a" /* default */].BOTTOM_LEFT ||
        this.anchorOrigin_ == __WEBPACK_IMPORTED_MODULE_8__style_IconOrigin_js__["a" /* default */].BOTTOM_RIGHT) {
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
Icon.prototype.getColor = function() {
  return this.color_;
};


/**
 * Get the image icon.
 * @param {number} pixelRatio Pixel ratio.
 * @return {Image|HTMLCanvasElement} Image or Canvas element.
 * @override
 * @api
 */
Icon.prototype.getImage = function(pixelRatio) {
  return this.iconImage_.getImage(pixelRatio);
};


/**
 * @override
 */
Icon.prototype.getImageSize = function() {
  return this.iconImage_.getSize();
};


/**
 * @override
 */
Icon.prototype.getHitDetectionImageSize = function() {
  return this.getImageSize();
};


/**
 * @override
 */
Icon.prototype.getImageState = function() {
  return this.iconImage_.getImageState();
};


/**
 * @override
 */
Icon.prototype.getHitDetectionImage = function(pixelRatio) {
  return this.iconImage_.getHitDetectionImage(pixelRatio);
};


/**
 * @inheritDoc
 * @api
 */
Icon.prototype.getOrigin = function() {
  if (this.origin_) {
    return this.origin_;
  }
  let offset = this.offset_;

  if (this.offsetOrigin_ != __WEBPACK_IMPORTED_MODULE_8__style_IconOrigin_js__["a" /* default */].TOP_LEFT) {
    const size = this.getSize();
    const iconImageSize = this.iconImage_.getSize();
    if (!size || !iconImageSize) {
      return null;
    }
    offset = offset.slice();
    if (this.offsetOrigin_ == __WEBPACK_IMPORTED_MODULE_8__style_IconOrigin_js__["a" /* default */].TOP_RIGHT ||
        this.offsetOrigin_ == __WEBPACK_IMPORTED_MODULE_8__style_IconOrigin_js__["a" /* default */].BOTTOM_RIGHT) {
      offset[0] = iconImageSize[0] - size[0] - offset[0];
    }
    if (this.offsetOrigin_ == __WEBPACK_IMPORTED_MODULE_8__style_IconOrigin_js__["a" /* default */].BOTTOM_LEFT ||
        this.offsetOrigin_ == __WEBPACK_IMPORTED_MODULE_8__style_IconOrigin_js__["a" /* default */].BOTTOM_RIGHT) {
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
Icon.prototype.getSrc = function() {
  return this.iconImage_.getSrc();
};


/**
 * @inheritDoc
 * @api
 */
Icon.prototype.getSize = function() {
  return !this.size_ ? this.iconImage_.getSize() : this.size_;
};


/**
 * @override
 */
Icon.prototype.listenImageChange = function(listener, thisArg) {
  return Object(__WEBPACK_IMPORTED_MODULE_4__events_js__["a" /* listen */])(this.iconImage_, __WEBPACK_IMPORTED_MODULE_5__events_EventType_js__["a" /* default */].CHANGE,
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
Icon.prototype.load = function() {
  this.iconImage_.load();
};


/**
 * @override
 */
Icon.prototype.unlistenImageChange = function(listener, thisArg) {
  Object(__WEBPACK_IMPORTED_MODULE_4__events_js__["c" /* unlisten */])(this.iconImage_, __WEBPACK_IMPORTED_MODULE_5__events_EventType_js__["a" /* default */].CHANGE,
    listener, thisArg);
};
/* harmony default export */ __webpack_exports__["a"] = (Icon);


/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @module ol/style/IconAnchorUnits
 */

/**
 * Icon anchor units. One of 'fraction', 'pixels'.
 * @enum {string}
 */
/* harmony default export */ __webpack_exports__["a"] = ({
  FRACTION: 'fraction',
  PIXELS: 'pixels'
});


/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__events_EventTarget_js__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events_EventType_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ImageState_js__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_js__ = __webpack_require__(168);
/**
 * @module ol/style/IconImage
 */








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
const IconImage = function(image, src, size, crossOrigin, imageState,
  color) {

  __WEBPACK_IMPORTED_MODULE_3__events_EventTarget_js__["a" /* default */].call(this);

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
  if (this.imageState_ == __WEBPACK_IMPORTED_MODULE_5__ImageState_js__["a" /* default */].LOADED) {
    this.determineTainting_();
  }

};

Object(__WEBPACK_IMPORTED_MODULE_0__index_js__["g" /* inherits */])(IconImage, __WEBPACK_IMPORTED_MODULE_3__events_EventTarget_js__["a" /* default */]);


/**
 * @param {Image|HTMLCanvasElement} image Image.
 * @param {string} src Src.
 * @param {ol.Size} size Size.
 * @param {?string} crossOrigin Cross origin.
 * @param {ol.ImageState} imageState Image state.
 * @param {ol.Color} color Color.
 * @return {ol.style.IconImage} Icon image.
 */
IconImage.get = function(image, src, size, crossOrigin, imageState,
  color) {
  let iconImage = __WEBPACK_IMPORTED_MODULE_6__style_js__["a" /* iconImageCache */].get(src, crossOrigin, color);
  if (!iconImage) {
    iconImage = new IconImage(
      image, src, size, crossOrigin, imageState, color);
    __WEBPACK_IMPORTED_MODULE_6__style_js__["a" /* iconImageCache */].set(src, crossOrigin, color, iconImage);
  }
  return iconImage;
};


/**
 * @private
 */
IconImage.prototype.determineTainting_ = function() {
  const context = Object(__WEBPACK_IMPORTED_MODULE_1__dom_js__["a" /* createCanvasContext2D */])(1, 1);
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
IconImage.prototype.dispatchChangeEvent_ = function() {
  this.dispatchEvent(__WEBPACK_IMPORTED_MODULE_4__events_EventType_js__["a" /* default */].CHANGE);
};


/**
 * @private
 */
IconImage.prototype.handleImageError_ = function() {
  this.imageState_ = __WEBPACK_IMPORTED_MODULE_5__ImageState_js__["a" /* default */].ERROR;
  this.unlistenImage_();
  this.dispatchChangeEvent_();
};


/**
 * @private
 */
IconImage.prototype.handleImageLoad_ = function() {
  this.imageState_ = __WEBPACK_IMPORTED_MODULE_5__ImageState_js__["a" /* default */].LOADED;
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
IconImage.prototype.getImage = function(pixelRatio) {
  return this.canvas_ ? this.canvas_ : this.image_;
};


/**
 * @return {ol.ImageState} Image state.
 */
IconImage.prototype.getImageState = function() {
  return this.imageState_;
};


/**
 * @param {number} pixelRatio Pixel ratio.
 * @return {Image|HTMLCanvasElement} Image element.
 */
IconImage.prototype.getHitDetectionImage = function(pixelRatio) {
  if (!this.hitDetectionImage_) {
    if (this.tainting_) {
      const width = this.size_[0];
      const height = this.size_[1];
      const context = Object(__WEBPACK_IMPORTED_MODULE_1__dom_js__["a" /* createCanvasContext2D */])(width, height);
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
IconImage.prototype.getSize = function() {
  return this.size_;
};


/**
 * @return {string|undefined} Image src.
 */
IconImage.prototype.getSrc = function() {
  return this.src_;
};


/**
 * Load not yet loaded URI.
 */
IconImage.prototype.load = function() {
  if (this.imageState_ == __WEBPACK_IMPORTED_MODULE_5__ImageState_js__["a" /* default */].IDLE) {
    this.imageState_ = __WEBPACK_IMPORTED_MODULE_5__ImageState_js__["a" /* default */].LOADING;
    this.imageListenerKeys_ = [
      Object(__WEBPACK_IMPORTED_MODULE_2__events_js__["b" /* listenOnce */])(this.image_, __WEBPACK_IMPORTED_MODULE_4__events_EventType_js__["a" /* default */].ERROR,
        this.handleImageError_, this),
      Object(__WEBPACK_IMPORTED_MODULE_2__events_js__["b" /* listenOnce */])(this.image_, __WEBPACK_IMPORTED_MODULE_4__events_EventType_js__["a" /* default */].LOAD,
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
IconImage.prototype.replaceColor_ = function() {
  if (this.tainting_ || this.color_ === null) {
    return;
  }

  this.canvas_.width = this.image_.width;
  this.canvas_.height = this.image_.height;

  const ctx = this.canvas_.getContext('2d');
  ctx.drawImage(this.image_, 0, 0);

  const imgData = ctx.getImageData(0, 0, this.image_.width, this.image_.height);
  const data = imgData.data;
  const r = this.color_[0] / 255.0;
  const g = this.color_[1] / 255.0;
  const b = this.color_[2] / 255.0;

  for (let i = 0, ii = data.length; i < ii; i += 4) {
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
IconImage.prototype.unlistenImage_ = function() {
  this.imageListenerKeys_.forEach(__WEBPACK_IMPORTED_MODULE_2__events_js__["e" /* unlistenByKey */]);
  this.imageListenerKeys_ = null;
};
/* harmony default export */ __webpack_exports__["a"] = (IconImage);


/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @module ol/style/IconOrigin
 */

/**
 * Icon origin. One of 'bottom-left', 'bottom-right', 'top-left', 'top-right'.
 * @enum {string}
 */
/* harmony default export */ __webpack_exports__["a"] = ({
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_RIGHT: 'bottom-right',
  TOP_LEFT: 'top-left',
  TOP_RIGHT: 'top-right'
});


/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_Fill_js__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_TextPlacement_js__ = __webpack_require__(172);
/**
 * @module ol/style/Text
 */




/**
 * The default fill color to use if no fill was set at construction time; a
 * blackish `#333`.
 *
 * @const {string}
 */
const DEFAULT_FILL_COLOR = '#333';


/**
 * @classdesc
 * Set text style for vector features.
 *
 * @constructor
 * @param {olx.style.TextOptions=} opt_options Options.
 * @api
 */
const Text = function(opt_options) {

  const options = opt_options || {};

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
    new __WEBPACK_IMPORTED_MODULE_0__style_Fill_js__["a" /* default */]({color: DEFAULT_FILL_COLOR});

  /**
   * @private
   * @type {number}
   */
  this.maxAngle_ = options.maxAngle !== undefined ? options.maxAngle : Math.PI / 4;

  /**
   * @private
   * @type {ol.style.TextPlacement|string}
   */
  this.placement_ = options.placement !== undefined ? options.placement : __WEBPACK_IMPORTED_MODULE_1__style_TextPlacement_js__["a" /* default */].POINT;

  /**
   * @private
   * @type {boolean}
   */
  this.overflow_ = !!options.overflow;

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
 * Clones the style.
 * @return {ol.style.Text} The cloned style.
 * @api
 */
Text.prototype.clone = function() {
  return new Text({
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
    offsetY: this.getOffsetY(),
    backgroundFill: this.getBackgroundFill() ? this.getBackgroundFill().clone() : undefined,
    backgroundStroke: this.getBackgroundStroke() ? this.getBackgroundStroke().clone() : undefined
  });
};


/**
 * Get the `overflow` configuration.
 * @return {boolean} Let text overflow the length of the path they follow.
 * @api
 */
Text.prototype.getOverflow = function() {
  return this.overflow_;
};


/**
 * Get the font name.
 * @return {string|undefined} Font.
 * @api
 */
Text.prototype.getFont = function() {
  return this.font_;
};


/**
 * Get the maximum angle between adjacent characters.
 * @return {number} Angle in radians.
 * @api
 */
Text.prototype.getMaxAngle = function() {
  return this.maxAngle_;
};


/**
 * Get the label placement.
 * @return {ol.style.TextPlacement|string} Text placement.
 * @api
 */
Text.prototype.getPlacement = function() {
  return this.placement_;
};


/**
 * Get the x-offset for the text.
 * @return {number} Horizontal text offset.
 * @api
 */
Text.prototype.getOffsetX = function() {
  return this.offsetX_;
};


/**
 * Get the y-offset for the text.
 * @return {number} Vertical text offset.
 * @api
 */
Text.prototype.getOffsetY = function() {
  return this.offsetY_;
};


/**
 * Get the fill style for the text.
 * @return {ol.style.Fill} Fill style.
 * @api
 */
Text.prototype.getFill = function() {
  return this.fill_;
};


/**
 * Determine whether the text rotates with the map.
 * @return {boolean|undefined} Rotate with map.
 * @api
 */
Text.prototype.getRotateWithView = function() {
  return this.rotateWithView_;
};


/**
 * Get the text rotation.
 * @return {number|undefined} Rotation.
 * @api
 */
Text.prototype.getRotation = function() {
  return this.rotation_;
};


/**
 * Get the text scale.
 * @return {number|undefined} Scale.
 * @api
 */
Text.prototype.getScale = function() {
  return this.scale_;
};


/**
 * Get the stroke style for the text.
 * @return {ol.style.Stroke} Stroke style.
 * @api
 */
Text.prototype.getStroke = function() {
  return this.stroke_;
};


/**
 * Get the text to be rendered.
 * @return {string|undefined} Text.
 * @api
 */
Text.prototype.getText = function() {
  return this.text_;
};


/**
 * Get the text alignment.
 * @return {string|undefined} Text align.
 * @api
 */
Text.prototype.getTextAlign = function() {
  return this.textAlign_;
};


/**
 * Get the text baseline.
 * @return {string|undefined} Text baseline.
 * @api
 */
Text.prototype.getTextBaseline = function() {
  return this.textBaseline_;
};


/**
 * Get the background fill style for the text.
 * @return {ol.style.Fill} Fill style.
 * @api
 */
Text.prototype.getBackgroundFill = function() {
  return this.backgroundFill_;
};


/**
 * Get the background stroke style for the text.
 * @return {ol.style.Stroke} Stroke style.
 * @api
 */
Text.prototype.getBackgroundStroke = function() {
  return this.backgroundStroke_;
};


/**
 * Get the padding for the text.
 * @return {Array.<number>} Padding.
 * @api
 */
Text.prototype.getPadding = function() {
  return this.padding_;
};


/**
 * Set the `overflow` property.
 *
 * @param {boolean} overflow Let text overflow the path that it follows.
 * @api
 */
Text.prototype.setOverflow = function(overflow) {
  this.overflow_ = overflow;
};


/**
 * Set the font.
 *
 * @param {string|undefined} font Font.
 * @api
 */
Text.prototype.setFont = function(font) {
  this.font_ = font;
};


/**
 * Set the maximum angle between adjacent characters.
 *
 * @param {number} maxAngle Angle in radians.
 * @api
 */
Text.prototype.setMaxAngle = function(maxAngle) {
  this.maxAngle_ = maxAngle;
};


/**
 * Set the x offset.
 *
 * @param {number} offsetX Horizontal text offset.
 * @api
 */
Text.prototype.setOffsetX = function(offsetX) {
  this.offsetX_ = offsetX;
};


/**
 * Set the y offset.
 *
 * @param {number} offsetY Vertical text offset.
 * @api
 */
Text.prototype.setOffsetY = function(offsetY) {
  this.offsetY_ = offsetY;
};


/**
 * Set the text placement.
 *
 * @param {ol.style.TextPlacement|string} placement Placement.
 * @api
 */
Text.prototype.setPlacement = function(placement) {
  this.placement_ = placement;
};


/**
 * Set the fill.
 *
 * @param {ol.style.Fill} fill Fill style.
 * @api
 */
Text.prototype.setFill = function(fill) {
  this.fill_ = fill;
};


/**
 * Set the rotation.
 *
 * @param {number|undefined} rotation Rotation.
 * @api
 */
Text.prototype.setRotation = function(rotation) {
  this.rotation_ = rotation;
};


/**
 * Set the scale.
 *
 * @param {number|undefined} scale Scale.
 * @api
 */
Text.prototype.setScale = function(scale) {
  this.scale_ = scale;
};


/**
 * Set the stroke.
 *
 * @param {ol.style.Stroke} stroke Stroke style.
 * @api
 */
Text.prototype.setStroke = function(stroke) {
  this.stroke_ = stroke;
};


/**
 * Set the text.
 *
 * @param {string|undefined} text Text.
 * @api
 */
Text.prototype.setText = function(text) {
  this.text_ = text;
};


/**
 * Set the text alignment.
 *
 * @param {string|undefined} textAlign Text align.
 * @api
 */
Text.prototype.setTextAlign = function(textAlign) {
  this.textAlign_ = textAlign;
};


/**
 * Set the text baseline.
 *
 * @param {string|undefined} textBaseline Text baseline.
 * @api
 */
Text.prototype.setTextBaseline = function(textBaseline) {
  this.textBaseline_ = textBaseline;
};


/**
 * Set the background fill.
 *
 * @param {ol.style.Fill} fill Fill style.
 * @api
 */
Text.prototype.setBackgroundFill = function(fill) {
  this.backgroundFill_ = fill;
};


/**
 * Set the background stroke.
 *
 * @param {ol.style.Stroke} stroke Stroke style.
 * @api
 */
Text.prototype.setBackgroundStroke = function(stroke) {
  this.backgroundStroke_ = stroke;
};


/**
 * Set the padding (`[top, right, bottom, left]`).
 *
 * @param {!Array.<number>} padding Padding.
 * @api
 */
Text.prototype.setPadding = function(padding) {
  this.padding_ = padding;
};
/* harmony default export */ __webpack_exports__["a"] = (Text);


/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = interpolatePoint;
/* harmony export (immutable) */ __webpack_exports__["b"] = lineStringCoordinateAtM;
/* harmony export (immutable) */ __webpack_exports__["c"] = lineStringsCoordinateAtM;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(2);
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

/***/ 77:
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

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__extent_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__geom_GeometryLayout_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__geom_GeometryType_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__geom_SimpleGeometry_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__geom_flat_closest_js__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__geom_flat_deflate_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__geom_flat_inflate_js__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__geom_flat_interpolate_js__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__geom_flat_intersectsextent_js__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__geom_flat_length_js__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__geom_flat_segments_js__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__geom_flat_simplify_js__ = __webpack_require__(34);
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

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__extent_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__geom_GeometryLayout_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__geom_GeometryType_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__geom_Point_js__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__geom_SimpleGeometry_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__geom_flat_deflate_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__geom_flat_inflate_js__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__math_js__ = __webpack_require__(2);
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

/***/ 80:
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

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color_js__ = __webpack_require__(36);
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

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__asserts_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__geom_GeometryType_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_Circle_js__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_Fill_js__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_Stroke_js__ = __webpack_require__(98);
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


/***/ })

},[190]);