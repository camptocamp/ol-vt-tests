webpackJsonp([1],{

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(277);


/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ol_ol_css__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ol_ol_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ol_ol_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ol_map__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ol_view__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ol_layer_tile__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ol_source_xyz__ = __webpack_require__(140);






new __WEBPACK_IMPORTED_MODULE_1_ol_map__["a" /* default */]({
  target: 'map',
  layers: [
    new __WEBPACK_IMPORTED_MODULE_3_ol_layer_tile__["a" /* default */]({
      source: new __WEBPACK_IMPORTED_MODULE_4_ol_source_xyz__["a" /* default */]({
        url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      })
    })
  ],
  view: new __WEBPACK_IMPORTED_MODULE_2_ol_view__["a" /* default */]({
    center: [0, 0],
    zoom: 2
  })
});

/***/ })

},[276]);