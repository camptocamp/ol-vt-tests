webpackJsonp([2],{

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(315);


/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_openlayers_Map__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_openlayers_View__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_openlayers_layer_Tile__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_openlayers_source_XYZ__ = __webpack_require__(102);





new __WEBPACK_IMPORTED_MODULE_0_openlayers_Map__["a" /* default */]({
  target: 'map',
  layers: [
    new __WEBPACK_IMPORTED_MODULE_2_openlayers_layer_Tile__["a" /* default */]({
      source: new __WEBPACK_IMPORTED_MODULE_3_openlayers_source_XYZ__["a" /* default */]({
        url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      })
    })
  ],
  view: new __WEBPACK_IMPORTED_MODULE_1_openlayers_View__["a" /* default */]({
    center: [0, 0],
    zoom: 2
  })
});


/***/ })

},[314]);