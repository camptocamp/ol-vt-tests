webpackJsonp([1],{

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(310);


/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ol_Map__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ol_View__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ol_layer_Tile__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ol_source_XYZ__ = __webpack_require__(147);





new __WEBPACK_IMPORTED_MODULE_0_ol_Map__["a" /* default */]({
  target: 'map',
  layers: [
    new __WEBPACK_IMPORTED_MODULE_2_ol_layer_Tile__["a" /* default */]({
      source: new __WEBPACK_IMPORTED_MODULE_3_ol_source_XYZ__["a" /* default */]({
        url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      })
    })
  ],
  view: new __WEBPACK_IMPORTED_MODULE_1_ol_View__["a" /* default */]({
    center: [0, 0],
    zoom: 2
  })
});


/***/ })

},[309]);