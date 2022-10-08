/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/components/App/app.scss":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/components/App/app.scss ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../resources/fonts/Gilroy-Regular.woff2 */ "./src/resources/fonts/Gilroy-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../resources/fonts/Nekst-Black.woff2 */ "./src/resources/fonts/Nekst-Black.woff2"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  display: flex;\n  min-height: 100vh;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0 47px;\n}\n@media screen and (max-width: 768px) {\n  body {\n    margin: 64px 36px 156px;\n  }\n}\n@media screen and (max-width: 320px) {\n  body {\n    margin: 44px 20px 64px;\n  }\n}\n\n@font-face {\n  font-family: \"Gilroy\";\n  font-style: normal;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\");\n}\n@font-face {\n  font-family: \"Nekst\";\n  font-style: normal;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff2\");\n}\n.page-header {\n  max-width: 753px;\n  margin: 0 0 32px;\n}\n.page-header h1 {\n  font-family: \"Nekst\", sans-serif;\n  font-weight: 900;\n  font-size: 54px;\n  line-height: 90%;\n}\n@media screen and (max-width: 320px) {\n  .page-header h1 {\n    font-size: 34px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/components/App/app.scss"],"names":[],"mappings":"AAcA;EACE,aAAA;EACA,iBAAA;EACA,sBAAA;EACA,uBAAA;EACA,cAAA;AAbF;AAeE;EAPF;IAQI,uBAAA;EAZF;AACF;AAcE;EAXF;IAYI,sBAAA;EAXF;AACF;;AAcA;EACE,qBAAA;EACA,kBAAA;EACA,4DAAA;AAXF;AAcA;EACE,oBAAA;EACA,kBAAA;EACA,4DAAA;AAZF;AAeA;EACE,gBAAA;EACA,gBAAA;AAbF;AAeE;EACE,gCA/CW;EAgDX,gBAAA;EACA,eAAA;EACA,gBAAA;AAbJ;AAeI;EANF;IAOI,eAAA;EAZJ;AACF","sourcesContent":["$font-primary: 'Nekst', sans-serif;\n$font-secondary: 'Gilroy', sans-serif;\n\n$color-input-medium: #FF9514;\n$color-input-light: rgba(255, 149, 20, 0.4);\n$color-text-dark: #111111;\n$color-text-strong: #333333;\n$color-text-medium: #575757;\n$color-text-light: #F3F3F4;\n\n$screen-large: 1024px;\n$screen-medium: 768px;\n$screen-small: 320px;\n\nbody {\n  display: flex;\n  min-height: 100vh;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0 47px;\n\n  @media screen and (max-width: $screen-medium) {\n    margin: 64px 36px 156px;\n  }\n\n  @media screen and (max-width: $screen-small) {\n    margin: 44px 20px 64px;\n  }\n}\n\n@font-face {\n  font-family: 'Gilroy';\n  font-style: normal;\n  src: url(../../resources/fonts/Gilroy-Regular.woff2) format('woff2');\n}\n\n@font-face {\n  font-family: 'Nekst';\n  font-style: normal;\n  src: url(../../resources/fonts/Nekst-Black.woff2) format('woff2');\n}\n\n.page-header {\n  max-width: 753px;\n  margin: 0 0 32px;\n\n  h1 {\n    font-family: $font-primary;\n    font-weight: 900;\n    font-size: 54px;\n    line-height: 90%;\n\n    @media screen and (max-width: $screen-small) {\n      font-size: 34px;\n     }\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/components/Calc/calc.scss":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/components/Calc/calc.scss ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  display: flex;\n  min-height: 100vh;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0 47px;\n}\n@media screen and (max-width: 768px) {\n  body {\n    margin: 64px 36px 156px;\n  }\n}\n@media screen and (max-width: 320px) {\n  body {\n    margin: 44px 20px 64px;\n  }\n}\n\n.calc {\n  width: 100%;\n}\n.calc .calc__form {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 32px;\n  justify-content: space-between;\n}\n.calc .calc__form .form__field {\n  display: flex;\n  flex-direction: column;\n  width: 427px;\n}\n.calc .calc__form .form__field .field__label {\n  color: #575757;\n  font-family: \"Gilroy\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 20px;\n  margin: 0 0 24px;\n}\n@media screen and (max-width: 320px) {\n  .calc .calc__form .form__field .field__label {\n    margin: 0 0 8px;\n  }\n}\n.calc .calc__form .form__field .field__wrapper {\n  position: relative;\n  width: 100%;\n}\n.calc .calc__form .form__field .field__wrapper .field__text {\n  margin: 0;\n  padding: 16px 24px;\n  border: 0;\n  width: 100%;\n  box-sizing: border-box;\n  background-color: #F3F3F4;\n  border-radius: 1rem;\n  height: 4.25rem;\n  color: #575757;\n  font-family: \"Nekst\", sans-serif;\n  font-style: normal;\n  font-weight: 900;\n  font-size: 30px;\n  line-height: 36px;\n}\n.calc .calc__form .form__field .field__wrapper .field__text:focus {\n  outline: none;\n  border: 1px solid #F3F3F4;\n  background-color: #FFFFFF;\n}\n@media screen and (max-width: 320px) {\n  .calc .calc__form .form__field .field__wrapper .field__text {\n    height: 60px;\n    padding: 20px;\n    font-size: 22px;\n    line-height: 20px;\n  }\n}\n.calc .calc__form .form__field .field__wrapper .field__unit {\n  position: absolute;\n  color: #575757;\n  font-family: \"Nekst\", sans-serif;\n  font-style: normal;\n  font-weight: 900;\n  font-size: 30px;\n  line-height: 36px;\n  text-align: center;\n  z-index: 10;\n}\n.calc .calc__form .form__field .field__wrapper .field__unit.price-unit {\n  position: absolute;\n  height: 36px;\n  width: 20px;\n  top: 16px;\n  right: 16px;\n}\n.calc .calc__form .form__field .field__wrapper .field__unit.fee-unit {\n  position: absolute;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 15px 17px;\n  font-size: 20px;\n  line-height: 120%;\n  height: 54px;\n  width: 73px;\n  top: 7px;\n  right: 7px;\n  border-radius: 16px;\n  background-color: #EBEBEC;\n}\n@media screen and (max-width: 320px) {\n  .calc .calc__form .form__field .field__wrapper .field__unit.fee-unit {\n    top: 6px;\n    right: 6px;\n    height: 48px;\n  }\n}\n.calc .calc__form .form__field .field__wrapper .field__unit.term-unit {\n  position: absolute;\n  height: 36px;\n  width: 63px;\n  top: 16px;\n  right: 24px;\n}\n@media screen and (max-width: 320px) {\n  .calc .calc__form .form__field .field__wrapper .field__unit {\n    font-size: 22px;\n    line-height: 28px;\n  }\n}\n.calc .calc__form .form__field input[type=range] {\n  position: relative;\n  z-index: 10;\n  top: -10px;\n  width: calc(100% - 48px);\n  margin: 9px auto;\n  background-color: #F3F3F4;\n  height: 2px;\n  -webkit-appearance: none;\n}\n.calc .calc__form .form__field input[type=range]:focus {\n  outline: none;\n}\n.calc .calc__form .form__field input[type=range]::-webkit-slider-runnable-track {\n  border: 0.2px solid rgba(0, 0, 0, 0);\n  border-radius: 1.3px;\n  width: 100%;\n  height: 2px;\n  cursor: pointer;\n}\n.calc .calc__form .form__field input[type=range]::-webkit-slider-thumb {\n  margin-top: -9.2px;\n  width: 20px;\n  height: 20px;\n  -webkit-appearance: none;\n  background: #FF9514;\n  border: 0px solid rgba(0, 0, 0, 0);\n  border: 0;\n  border-radius: 50%;\n  transition: all 0.3s;\n  cursor: pointer;\n}\n.calc .calc__form .form__field input[type=range]::-webkit-slider-thumb:hover {\n  width: 24px;\n  height: 24px;\n  margin-top: -11.2px;\n  transition: all 0.3s;\n}\n.calc .calc__form .form__field input[type=range]::-moz-range-track {\n  border: 0.2px solid rgba(0, 0, 0, 0);\n  border-radius: 1.3px;\n  width: 100%;\n  height: 2px;\n  cursor: pointer;\n}\n.calc .calc__form .form__field input[type=range]::-moz-range-progress {\n  background-color: #FF9514;\n}\n.calc .calc__form .form__field input[type=range]::-moz-range-thumb {\n  width: 20px;\n  height: 20px;\n  background: #FF9514;\n  border: 0px solid rgba(0, 0, 0, 0);\n  border: 0;\n  border-radius: 10px;\n  transition: all 0.3s;\n  cursor: pointer;\n}\n.calc .calc__form .form__field input[type=range]::-moz-range-thumb:hover {\n  width: 24px;\n  height: 24px;\n  margin-top: -11.2px;\n  transition: all 0.3s;\n}\n.calc .calc__form .form__field input[type=range]::-ms-track {\n  background: transparent;\n  border-color: transparent;\n  border-width: 10px 0;\n  color: transparent;\n  width: 100%;\n  height: 2px;\n  cursor: pointer;\n}\n.calc .calc__form .form__field input[type=range]::-ms-fill-lower {\n  background: #FF9514;\n  border: 0.2px solid rgba(0, 0, 0, 0);\n  border-radius: 2.6px;\n}\n.calc .calc__form .form__field input[type=range]::-ms-fill-upper {\n  background: #F3F3F4;\n  border: 0.2px solid rgba(0, 0, 0, 0);\n  border-radius: 2.6px;\n}\n.calc .calc__form .form__field input[type=range]::-ms-thumb {\n  width: 20px;\n  height: 20px;\n  background: #FF9514;\n  border: 0px solid rgba(0, 0, 0, 0);\n  border: 0;\n  border-radius: 10px;\n  margin-top: 0px;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.calc .calc__form .form__field input[type=range]::-ms-thumb:hover {\n  width: 24px;\n  height: 24px;\n  margin-top: -11.2px;\n  transition: all 0.3s;\n}\n.calc .calc__form .form__field input[type=range]:focus::-ms-fill-lower {\n  background: #FF9514;\n}\n.calc .calc__form .form__field input[type=range]:focus::-ms-fill-upper {\n  background: #F3F3F4;\n}\n@media screen and (max-width: 1024px) {\n  .calc .calc__form .form__field {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 1024px) {\n  .calc .calc__form {\n    flex-direction: column;\n  }\n}\n.calc .calc__result {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 32px;\n  align-items: center;\n  justify-content: space-between;\n}\n.calc .calc__result .result {\n  flex-grow: 1;\n  max-width: 427px;\n}\n.calc .calc__result .result .result__label {\n  font-family: \"Gilroy\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 150%;\n  margin: 0 0 8px;\n}\n.calc .calc__result .result .result__output {\n  color: #333333;\n  font-family: \"Nekst\", sans-serif;\n  font-style: normal;\n  font-weight: 900;\n  font-size: 54px;\n  line-height: 90%;\n}\n@media screen and (max-width: 320px) {\n  .calc .calc__result .result .result__output {\n    font-size: 22px;\n    line-height: 20px;\n  }\n}\n.calc .calc__result .submit {\n  flex-grow: 1;\n  max-width: 427px;\n  font-family: \"Nekst\", sans-serif;\n  font-style: normal;\n  font-weight: 900;\n  font-size: 30px;\n  line-height: 36px;\n  background-color: #FF9514;\n  border-radius: 40px;\n  color: #FFFFFF;\n  height: 68px;\n  border: 0;\n  cursor: pointer;\n}\n.calc .calc__result .submit:hover {\n  background-color: #111111;\n  color: #FFFFFF;\n}\n.calc .calc__result .submit:active {\n  background-color: #575757;\n  color: #FFFFFF;\n}\n.calc .calc__result .submit.disabled {\n  background-color: rgba(255, 149, 20, 0.4);\n}\n@media screen and (max-width: 1024px) {\n  .calc .calc__result .submit {\n    margin: 0 200px 0 0;\n    max-width: 345px;\n    min-width: 280px;\n  }\n}\n@media screen and (max-width: 320px) {\n  .calc .calc__result .submit {\n    margin: 0;\n    max-width: 345px;\n    min-width: 280px;\n    font-size: 22px;\n    line-height: 20px;\n    height: 60px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/components/Calc/calc.scss"],"names":[],"mappings":"AAcA;EACE,aAAA;EACA,iBAAA;EACA,sBAAA;EACA,uBAAA;EACA,cAAA;AAbF;AAeE;EAPF;IAQI,uBAAA;EAZF;AACF;AAcE;EAXF;IAYI,sBAAA;EAXF;AACF;;AAcA;EACE,WAAA;AAXF;AAaE;EACE,aAAA;EACA,eAAA;EACA,SAAA;EACA,8BAAA;AAXJ;AAaI;EACE,aAAA;EACA,sBAAA;EACA,YAAA;AAXN;AAaM;EACE,cAtCY;EAuCZ,iCA7CS;EA8CT,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,gBAAA;AAXR;AAaQ;EATF;IAUI,eAAA;EAVR;AACF;AAcM;EACE,kBAAA;EACA,WAAA;AAZR;AAcQ;EACE,SAAA;EACA,kBAAA;EACA,SAAA;EACA,WAAA;EACA,sBAAA;EACA,yBA7DS;EA8DT,mBAAA;EACA,eAAA;EACA,cAjEU;EAkEV,gCAzEK;EA0EL,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;AAZV;AAcU;EACE,aAAA;EACA,yBAAA;EACA,yBAAA;AAZZ;AAeU;EAtBF;IAuBI,YAAA;IACA,aAAA;IACA,eAAA;IACA,iBAAA;EAZV;AACF;AAeQ;EACE,kBAAA;EACA,cAxFU;EAyFV,gCAhGK;EAiGL,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,WAAA;AAbV;AAeU;EACE,kBAAA;EACA,YAAA;EACA,WAAA;EACA,SAAA;EACA,WAAA;AAbZ;AAgBU;EACE,kBAAA;EACA,sBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,eAAA;EACA,iBAAA;EACA,YAAA;EACA,WAAA;EACA,QAAA;EACA,UAAA;EACA,mBAAA;EACA,yBAAA;AAdZ;AAgBY;EAhBF;IAiBI,QAAA;IACA,UAAA;IACA,YAAA;EAbZ;AACF;AAiBU;EACE,kBAAA;EACA,YAAA;EACA,WAAA;EACA,SAAA;EACA,WAAA;AAfZ;AAkBU;EAnDF;IAoDI,eAAA;IACA,iBAAA;EAfV;AACF;AAmBM;EACE,kBAAA;EACA,WAAA;EACA,UAAA;EACA,wBAAA;EACA,gBAAA;EACA,yBArJW;EAsJX,WAAA;EACA,wBAAA;AAjBR;AAoBM;EACE,aAAA;AAlBR;AAqBM;EACE,oCAAA;EACA,oBAAA;EACA,WAAA;EACA,WAAA;EACA,eAAA;AAnBR;AAsBM;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,wBAAA;EACA,mBAhLa;EAiLb,kCAAA;EACA,SAAA;EACA,kBAAA;EACA,oBAAA;EACA,eAAA;AApBR;AAsBQ;EACE,WAAA;EACA,YAAA;EACA,mBAAA;EACA,oBAAA;AApBV;AAwBM;EACE,oCAAA;EACA,oBAAA;EACA,WAAA;EACA,WAAA;EACA,eAAA;AAtBR;AAyBM;EACE,yBAxMa;AAiLrB;AA0BM;EACE,WAAA;EACA,YAAA;EACA,mBA9Ma;EA+Mb,kCAAA;EACA,SAAA;EACA,mBAAA;EACA,oBAAA;EACA,eAAA;AAxBR;AA0BQ;EACE,WAAA;EACA,YAAA;EACA,mBAAA;EACA,oBAAA;AAxBV;AA4BM;EACE,uBAAA;EACA,yBAAA;EACA,oBAAA;EACA,kBAAA;EACA,WAAA;EACA,WAAA;EACA,eAAA;AA1BR;AA6BM;EACE,mBAxOa;EAyOb,oCAAA;EACA,oBAAA;AA3BR;AA8BM;EACE,mBAzOW;EA0OX,oCAAA;EACA,oBAAA;AA5BR;AA+BM;EACE,WAAA;EACA,YAAA;EACA,mBAtPa;EAuPb,kCAAA;EACA,SAAA;EACA,mBAAA;EACA,eAAA;EACA,eAAA;EACA,oBAAA;AA7BR;AA+BQ;EACE,WAAA;EACA,YAAA;EACA,mBAAA;EACA,oBAAA;AA7BV;AAiCM;EACE,mBAvQa;AAwOrB;AAkCM;EACE,mBAtQW;AAsOnB;AAmCM;EA1OF;IA2OI,WAAA;EAhCN;AACF;AAmCI;EArPF;IAsPI,sBAAA;EAhCJ;AACF;AAmCE;EACE,aAAA;EACA,eAAA;EACA,SAAA;EACA,mBAAA;EACA,8BAAA;AAjCJ;AAmCI;EACE,YAAA;EACA,gBAAA;AAjCN;AAmCM;EACE,iCAtSS;EAuST,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,eAAA;AAjCR;AAoCM;EACE,cA1SY;EA2SZ,gCAjTO;EAkTP,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;AAlCR;AAoCQ;EARF;IASI,eAAA;IACA,iBAAA;EAjCR;AACF;AAqCI;EACE,YAAA;EACA,gBAAA;EACA,gCAjUS;EAkUT,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,yBAnUe;EAoUf,mBAAA;EACA,cAAA;EACA,YAAA;EACA,SAAA;EACA,eAAA;AAnCN;AAqCM;EACE,yBAzUU;EA0UV,cAAA;AAnCR;AAsCM;EACE,yBA5UY;EA6UZ,cAAA;AApCR;AAuCM;EACE,yCApVY;AA+SpB;AAwCM;EA7BF;IA8BI,mBAAA;IACA,gBAAA;IACA,gBAAA;EArCN;AACF;AAuCO;EAnCH;IAoCI,SAAA;IACA,gBAAA;IACA,gBAAA;IACA,eAAA;IACA,iBAAA;IACA,YAAA;EApCN;AACF","sourcesContent":["$font-primary: 'Nekst', sans-serif;\n$font-secondary: 'Gilroy', sans-serif;\n\n$color-input-medium: #FF9514;\n$color-input-light: rgba(255, 149, 20, 0.4);\n$color-text-dark: #111111;\n$color-text-strong: #333333;\n$color-text-medium: #575757;\n$color-text-light: #F3F3F4;\n\n$screen-large: 1024px;\n$screen-medium: 768px;\n$screen-small: 320px;\n\nbody {\n  display: flex;\n  min-height: 100vh;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0 47px;\n\n  @media screen and (max-width: $screen-medium) {\n    margin: 64px 36px 156px;\n  }\n\n  @media screen and (max-width: $screen-small) {\n    margin: 44px 20px 64px;\n  }\n}\n\n.calc {\n  width: 100%;\n\n  .calc__form {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 32px;\n    justify-content: space-between;\n  \n    .form__field {\n      display: flex;\n      flex-direction: column;\n      width: 427px;\n\n      .field__label {\n        color: $color-text-medium;\n        font-family: $font-secondary;\n        font-style: normal;\n        font-weight: 400;\n        font-size: 1rem;\n        line-height: 20px;\n        margin: 0 0 24px;\n\n        @media screen and (max-width: $screen-small) {\n          margin: 0 0 8px;\n         }\n\n      }\n\n      .field__wrapper {\n        position: relative;\n        width: 100%;\n\n        .field__text {\n          margin: 0;\n          padding: 16px 24px;\n          border: 0;\n          width: 100%;\n          box-sizing: border-box;\n          background-color: $color-text-light;\n          border-radius: 1rem;\n          height: 4.25rem;\n          color: $color-text-medium;\n          font-family: $font-primary;\n          font-style: normal;\n          font-weight: 900;\n          font-size: 30px;\n          line-height: 36px;\n\n          &:focus {\n            outline: none;\n            border: 1px solid #F3F3F4;\n            background-color: #FFFFFF;\n          }\n\n          @media screen and (max-width: $screen-small) {\n            height: 60px;\n            padding: 20px;\n            font-size: 22px;\n            line-height: 20px;\n           }\n        }\n  \n        .field__unit {\n          position: absolute;\n          color: $color-text-medium;\n          font-family: $font-primary;\n          font-style: normal;\n          font-weight: 900;\n          font-size: 30px;\n          line-height: 36px;\n          text-align: center;\n          z-index: 10;\n  \n          &.price-unit {\n            position: absolute;\n            height: 36px;\n            width: 20px;\n            top: 16px;\n            right: 16px;\n          }\n\n          &.fee-unit {\n            position: absolute;\n            box-sizing: border-box;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            padding: 15px 17px;\n            font-size: 20px;\n            line-height: 120%;\n            height: 54px;\n            width: 73px;\n            top: 7px;\n            right: 7px;\n            border-radius: 16px;\n            background-color: #EBEBEC;\n\n            @media screen and (max-width: $screen-small) {\n              top: 6px;\n              right: 6px;\n              height: 48px;\n             }\n  \n          }\n\n          &.term-unit {\n            position: absolute;\n            height: 36px;\n            width: 63px;\n            top: 16px;\n            right: 24px;\n          }\n\n          @media screen and (max-width: $screen-small) {\n            font-size: 22px;\n            line-height: 28px;\n           }\n        }  \n      }\n\n      input[type=range] {\n        position: relative;\n        z-index: 10;\n        top: -10px;\n        width: calc(100% - 48px);\n        margin: 9px auto;\n        background-color: $color-text-light;\n        height: 2px;\n        -webkit-appearance: none;\n      }\n      \n      input[type=range]:focus {\n        outline: none;\n      }\n      \n      input[type=range]::-webkit-slider-runnable-track {\n        border: 0.2px solid rgba(0, 0, 0, 0);\n        border-radius: 1.3px;\n        width: 100%;\n        height: 2px;\n        cursor: pointer;\n      }\n      \n      input[type=range]::-webkit-slider-thumb {\n        margin-top: -9.2px;\n        width: 20px;\n        height: 20px;\n        -webkit-appearance: none;\n        background: $color-input-medium;\n        border: 0px solid rgba(0, 0, 0, 0);\n        border: 0;\n        border-radius: 50%;\n        transition: all 0.3s;\n        cursor: pointer;\n\n        &:hover {\n          width: 24px;\n          height: 24px;\n          margin-top: -11.2px;\n          transition: all 0.3s;\n        }\n      }\n\n      input[type=range]::-moz-range-track {\n        border: 0.2px solid rgba(0, 0, 0, 0);\n        border-radius: 1.3px;\n        width: 100%;\n        height: 2px;\n        cursor: pointer;\n      }\n\n      input[type=\"range\"]::-moz-range-progress {\n        background-color: $color-input-medium; \n      }\n  \n      input[type=range]::-moz-range-thumb {\n        width: 20px;\n        height: 20px;\n        background: $color-input-medium;\n        border: 0px solid rgba(0, 0, 0, 0);\n        border: 0;\n        border-radius: 10px;\n        transition: all 0.3s;\n        cursor: pointer;\n\n        &:hover {\n          width: 24px;\n          height: 24px;\n          margin-top: -11.2px;\n          transition: all 0.3s;\n        }\n      }\n      \n      input[type=range]::-ms-track {\n        background: transparent;\n        border-color: transparent;\n        border-width: 10px 0;\n        color: transparent;\n        width: 100%;\n        height: 2px;\n        cursor: pointer;\n      }\n      \n      input[type=range]::-ms-fill-lower {\n        background: $color-input-medium;\n        border: 0.2px solid rgba(0, 0, 0, 0);\n        border-radius: 2.6px;\n      }\n      \n      input[type=range]::-ms-fill-upper {\n        background: $color-text-light;\n        border: 0.2px solid rgba(0, 0, 0, 0);\n        border-radius: 2.6px;\n      }\n      \n      input[type=range]::-ms-thumb {\n        width: 20px;\n        height: 20px;\n        background: $color-input-medium;\n        border: 0px solid rgba(0, 0, 0, 0);\n        border: 0;\n        border-radius: 10px;\n        margin-top: 0px;\n        cursor: pointer;\n        transition: all 0.3s;\n\n        &:hover {\n          width: 24px;\n          height: 24px;\n          margin-top: -11.2px;\n          transition: all 0.3s;\n        }\n      }\n      \n      input[type=range]:focus::-ms-fill-lower {\n        background: $color-input-medium;\n      }\n      \n      input[type=range]:focus::-ms-fill-upper {\n        background: $color-text-light;\n      }\n\n      @media screen and (max-width: $screen-large) {\n        width: 100%;\n      }\n    }\n\n    @media screen and (max-width: $screen-large) {\n      flex-direction: column;\n     }\n  }\n\n  .calc__result {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 32px;\n    align-items: center;\n    justify-content: space-between;\n\n    .result {\n      flex-grow: 1;\n      max-width: 427px;\n\n      .result__label {\n        font-family: $font-secondary;\n        font-style: normal;\n        font-weight: 400;\n        font-size: 16px;\n        line-height: 150%;\n        margin: 0 0 8px;\n      }\n\n      .result__output {\n        color: $color-text-strong;\n        font-family: $font-primary;\n        font-style: normal;\n        font-weight: 900;\n        font-size: 54px;\n        line-height: 90%;\n\n        @media screen and (max-width: $screen-small) {\n          font-size: 22px;\n          line-height: 20px;\n        }\n      }\n    }\n  \n    .submit {\n      flex-grow: 1;\n      max-width: 427px;\n      font-family: $font-primary;\n      font-style: normal;\n      font-weight: 900;\n      font-size: 30px;\n      line-height: 36px;\n      background-color: $color-input-medium;\n      border-radius: 40px;\n      color: #FFFFFF;\n      height: 68px;\n      border: 0;\n      cursor: pointer;\n\n      &:hover {\n        background-color: $color-text-dark;\n        color: #FFFFFF;\n      }\n\n      &:active {\n        background-color: $color-text-medium;\n        color: #FFFFFF;\n      }\n\n      &.disabled {\n        background-color: $color-input-light;\n      }\n\n      @media screen and (max-width: $screen-large) {\n        margin: 0 200px 0 0;\n        max-width: 345px;\n        min-width: 280px;\n       }\n\n       @media screen and (max-width: $screen-small) {\n        margin: 0;\n        max-width: 345px;\n        min-width: 280px;\n        font-size: 22px;\n        line-height: 20px;\n        height: 60px;\n       }\n    }  \n  }\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/resources/css/reset.scss":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/resources/css/reset.scss ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  display: flex;\n  min-height: 100vh;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0 47px;\n}\n@media screen and (max-width: 768px) {\n  body {\n    margin: 64px 36px 156px;\n  }\n}\n@media screen and (max-width: 320px) {\n  body {\n    margin: 44px 20px 64px;\n  }\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  box-sizing: border-box;\n}\n\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  text-size-adjust: none;\n}\n\nfooter, header, nav, section, main {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after, q:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput {\n  -webkit-appearance: none;\n  border-radius: 0;\n}\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=number] {\n  -moz-appearance: textfield;\n}", "",{"version":3,"sources":["webpack://./src/resources/css/reset.scss"],"names":[],"mappings":"AAcA;EACE,aAAA;EACA,iBAAA;EACA,sBAAA;EACA,uBAAA;EACA,cAAA;AAbF;AAeE;EAPF;IAQI,uBAAA;EAZF;AACF;AAcE;EAXF;IAYI,sBAAA;EAXF;AACF;;AAcA;EACE,SAAA;EACA,UAAA;EACA,SAAA;EACA,sBAAA;AAXF;;AAcA;EACE,eAAA;EACA,aAAA;EACA,wBAAA;EACA,kCAAA;EACA,mCAAA;EACA,sBAAA;AAXF;;AAcA;EACE,cAAA;AAXF;;AAcA;EACE,cAAA;AAXF;;AAcA;EACE,gBAAA;AAXF;;AAcA;EACE,YAAA;AAXF;;AAcA;EACE,WAAA;EACA,aAAA;AAXF;;AAcA;EACE,yBAAA;EACA,iBAAA;AAXF;;AAcA;EACE,wBAAA;EACA,gBAAA;AAXF;;AAcA;;EAEE,wBAAA;EACA,SAAA;AAXF;;AAcA;EACE,0BAAA;AAXF","sourcesContent":["$font-primary: 'Nekst', sans-serif;\n$font-secondary: 'Gilroy', sans-serif;\n\n$color-input-medium: #FF9514;\n$color-input-light: rgba(255, 149, 20, 0.4);\n$color-text-dark: #111111;\n$color-text-strong: #333333;\n$color-text-medium: #575757;\n$color-text-light: #F3F3F4;\n\n$screen-large: 1024px;\n$screen-medium: 768px;\n$screen-small: 320px;\n\nbody {\n  display: flex;\n  min-height: 100vh;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0 47px;\n\n  @media screen and (max-width: $screen-medium) {\n    margin: 64px 36px 156px;\n  }\n\n  @media screen and (max-width: $screen-small) {\n    margin: 44px 20px 64px;\n  }\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  box-sizing: border-box;\n}\n\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  text-size-adjust: none;\n}\n\nfooter, header, nav, section, main{\n  display: block;\n}\n\nbody{\n  line-height: 1;\n}\n\nol, ul{\n  list-style: none;\n}\n\nblockquote, q{\n  quotes: none;\n}\n\nblockquote:before, blockquote:after, q:before, q:after{\n  content: '';\n  content: none;\n}\n\ntable{\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput{\n  -webkit-appearance: none;\n  border-radius: 0;\n}\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=number] {\n  -moz-appearance: textfield;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/resources/css/styles.scss":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/resources/css/styles.scss ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  display: flex;\n  min-height: 100vh;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0 47px;\n}\n@media screen and (max-width: 768px) {\n  body {\n    margin: 64px 36px 156px;\n  }\n}\n@media screen and (max-width: 320px) {\n  body {\n    margin: 44px 20px 64px;\n  }\n}\n\nbody {\n  display: flex;\n  min-height: 100vh;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0 47px;\n}\n@media screen and (max-width: 768px) {\n  body {\n    margin: 64px 36px 156px;\n  }\n}\n@media screen and (max-width: 320px) {\n  body {\n    margin: 44px 20px 64px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/resources/css/styles.scss"],"names":[],"mappings":"AAcA;EACE,aAAA;EACA,iBAAA;EACA,sBAAA;EACA,uBAAA;EACA,cAAA;AAbF;AAeE;EAPF;IAQI,uBAAA;EAZF;AACF;AAcE;EAXF;IAYI,sBAAA;EAXF;AACF;;AA4BA;EACE,aAAA;EACA,iBAAA;EACA,sBAAA;EACA,uBAAA;EACA,cAAA;AAzBF;AA2BE;EAPF;IAQI,uBAAA;EAxBF;AACF;AA0BE;EAXF;IAYI,sBAAA;EAvBF;AACF","sourcesContent":["$font-primary: 'Nekst', sans-serif;\n$font-secondary: 'Gilroy', sans-serif;\n\n$color-input-medium: #FF9514;\n$color-input-light: rgba(255, 149, 20, 0.4);\n$color-text-dark: #111111;\n$color-text-strong: #333333;\n$color-text-medium: #575757;\n$color-text-light: #F3F3F4;\n\n$screen-large: 1024px;\n$screen-medium: 768px;\n$screen-small: 320px;\n\nbody {\n  display: flex;\n  min-height: 100vh;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0 47px;\n\n  @media screen and (max-width: $screen-medium) {\n    margin: 64px 36px 156px;\n  }\n\n  @media screen and (max-width: $screen-small) {\n    margin: 44px 20px 64px;\n  }\n}\n\n$font-primary: 'Nekst', sans-serif;\n$font-secondary: 'Gilroy', sans-serif;\n\n$color-input-medium: #FF9514;\n$color-input-light: rgba(255, 149, 20, 0.4);\n$color-text-dark: #111111;\n$color-text-strong: #333333;\n$color-text-medium: #575757;\n$color-text-light: #F3F3F4;\n\n$screen-large: 1024px;\n$screen-medium: 768px;\n$screen-small: 320px;\n\nbody {\n  display: flex;\n  min-height: 100vh;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0 47px;\n\n  @media screen and (max-width: $screen-medium) {\n    margin: 64px 36px 156px;\n  }\n\n  @media screen and (max-width: $screen-small) {\n    margin: 44px 20px 64px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/components/App/app.scss":
/*!*************************************!*\
  !*** ./src/components/App/app.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_app_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./app.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/components/App/app.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Calc/calc.scss":
/*!***************************************!*\
  !*** ./src/components/Calc/calc.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_calc_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./calc.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/components/Calc/calc.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_calc_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_calc_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_calc_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_calc_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/resources/css/reset.scss":
/*!**************************************!*\
  !*** ./src/resources/css/reset.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_reset_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./reset.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/resources/css/reset.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_reset_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_reset_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_reset_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_reset_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/resources/css/styles.scss":
/*!***************************************!*\
  !*** ./src/resources/css/styles.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/resources/css/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/App/app.ts":
/*!***********************************!*\
  !*** ./src/components/App/app.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Calc_calc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Calc/calc */ "./src/components/Calc/calc.ts");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.scss */ "./src/components/App/app.scss");


class App {
    constructor() {
        this.root = document.getElementById('root');
        this.calc = new _Calc_calc__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
    listen() {
        this.root.addEventListener('input', (event) => {
            const target = event.target;
            this.calc.listenInput(target);
        });
        this.root.addEventListener('click', (event) => {
            const target = event.target;
            this.calc.listenClick(target);
        });
    }
    render() {
        this.root.innerHTML = `
      <header class="page-header">
        <h1>Рассчитайте стоимость автомобиля в лизинг</h1>
      </header>
      <main class="page-content">
      </main>
    `;
        this.calc.render();
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ "./src/components/Calc/calc.ts":
/*!*************************************!*\
  !*** ./src/components/Calc/calc.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _environment_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environment/environment */ "./src/environment/environment.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _calc_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calc.scss */ "./src/components/Calc/calc.scss");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class Calc {
    constructor() {
        this.price = _environment_environment__WEBPACK_IMPORTED_MODULE_0__["default"].priceDefault;
        this.fee = _environment_environment__WEBPACK_IMPORTED_MODULE_0__["default"].feeDefault;
        this.term = _environment_environment__WEBPACK_IMPORTED_MODULE_0__["default"].termDefault;
        this.feeCalculated = this.calcInitialFee();
        this.payment = this.calcOutputPayment();
        this.sum = this.calcOutputSum();
    }
    listenInput(target) {
        this.rangeInputHander(target);
        this.textInputHandler(target);
        (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__["default"])(target);
    }
    listenClick(target) {
        this.submitRequest(target);
    }
    rangeInputHander(target) {
        var _a;
        if (!target.id.includes('Range'))
            return;
        const targetId = target.id;
        const groupParentElement = (_a = document.getElementById(targetId)) === null || _a === void 0 ? void 0 : _a.parentElement;
        const textInputElement = groupParentElement === null || groupParentElement === void 0 ? void 0 : groupParentElement.querySelector('.field__input');
        if (target.id === 'feeRange') {
            textInputElement.value = `${target.value}%`;
        }
        else {
            textInputElement.value = target.value;
        }
        const priceInput = document.getElementById('priceText');
        const feeInput = document.getElementById('feeText');
        const rangeInput = document.getElementById('termText');
        switch (textInputElement.name) {
            case 'price':
                this.price = Number(target.value);
                priceInput.value = String(this.price);
                break;
            case 'fee':
                this.fee = Number(target.value);
                feeInput.value = `${target.value}%`;
                break;
            case 'term':
                this.term = Number(target.value);
                rangeInput.value = String(this.term);
                break;
            default:
                break;
        }
        this.renderInitialFee();
        this.renderOutputPayment();
        this.renderOutputSum();
    }
    textInputHandler(target) {
        if (!target.id.includes('Text'))
            return;
        const price = Number(target.value) > _environment_environment__WEBPACK_IMPORTED_MODULE_0__["default"].priceMax
            ? _environment_environment__WEBPACK_IMPORTED_MODULE_0__["default"].priceMax : Number(target.value);
        const fee = parseInt(target.value, 10) > _environment_environment__WEBPACK_IMPORTED_MODULE_0__["default"].feeMax
            ? _environment_environment__WEBPACK_IMPORTED_MODULE_0__["default"].feeMax : parseInt(target.value, 10) || 0;
        const term = Number(target.value) > _environment_environment__WEBPACK_IMPORTED_MODULE_0__["default"].termMax
            ? _environment_environment__WEBPACK_IMPORTED_MODULE_0__["default"].termMax : Number(target.value);
        switch (target.name) {
            case 'price':
                this.price = price < _environment_environment__WEBPACK_IMPORTED_MODULE_0__["default"].priceMin
                    ? _environment_environment__WEBPACK_IMPORTED_MODULE_0__["default"].priceMin : price;
                break;
            case 'fee':
                this.fee = fee < _environment_environment__WEBPACK_IMPORTED_MODULE_0__["default"].feeMin
                    ? _environment_environment__WEBPACK_IMPORTED_MODULE_0__["default"].feeMin : fee;
                break;
            case 'term':
                this.term = term < _environment_environment__WEBPACK_IMPORTED_MODULE_0__["default"].termMin
                    ? _environment_environment__WEBPACK_IMPORTED_MODULE_0__["default"].termMin : term;
                break;
            default:
                break;
        }
        this.renderInitialFee();
        this.renderOutputPayment();
        this.renderOutputSum();
    }
    submitRequest(target) {
        return __awaiter(this, void 0, void 0, function* () {
            if (target.id !== 'submitRequest' || target.classList.contains('disabled'))
                return;
            target.classList.add('disabled');
            const myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');
            myHeaders.append('Accept', 'application/json');
            const raw = JSON.stringify({
                price: this.price,
                fee: this.fee,
                term: this.term,
            });
            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
            };
            yield fetch(_environment_environment__WEBPACK_IMPORTED_MODULE_0__["default"].baseUrl, requestOptions);
            target.classList.remove('disabled');
        });
    }
    calcInitialFee() {
        const feeCalculated = Math.round(this.price * (this.fee / 100));
        return feeCalculated;
    }
    calcOutputSum() {
        const sum = this.feeCalculated + (this.term * this.payment);
        return sum;
    }
    calcOutputPayment() {
        const interestRate = _environment_environment__WEBPACK_IMPORTED_MODULE_0__["default"].interestRate / 100;
        const payment = (this.price - this.feeCalculated)
            * ((interestRate * ((1 + interestRate) ** this.term))
                / (((1 + interestRate) ** this.term) - 1));
        return payment;
    }
    renderInitialFee() {
        const feeCalculated = document.getElementById('feeCalculated');
        this.feeCalculated = this.calcInitialFee();
        feeCalculated.innerText = String(Math.round(this.feeCalculated));
    }
    renderOutputPayment() {
        const outputPayment = document.getElementById('outputPayment');
        this.payment = this.calcOutputPayment();
        outputPayment.innerHTML = `${String(Math.round(this.payment))} <span>₽</span>`;
    }
    renderOutputSum() {
        const outputSum = document.getElementById('outputSum');
        this.sum = this.calcOutputSum();
        outputSum.innerHTML = `${String(Math.round(this.sum))} <span>₽</span>`;
    }
    render() {
        const main = document.querySelector('.page-content');
        const pricePercentage = ((this.price - _environment_environment__WEBPACK_IMPORTED_MODULE_0__["default"].priceMin)
            / (_environment_environment__WEBPACK_IMPORTED_MODULE_0__["default"].priceMax - _environment_environment__WEBPACK_IMPORTED_MODULE_0__["default"].priceMin)) * 100;
        const feePercentage = ((this.fee - _environment_environment__WEBPACK_IMPORTED_MODULE_0__["default"].feeMin)
            / (_environment_environment__WEBPACK_IMPORTED_MODULE_0__["default"].feeMax - _environment_environment__WEBPACK_IMPORTED_MODULE_0__["default"].feeMin)) * 100;
        const termPercentage = ((this.term - _environment_environment__WEBPACK_IMPORTED_MODULE_0__["default"].termMin)
            / (_environment_environment__WEBPACK_IMPORTED_MODULE_0__["default"].termMax - _environment_environment__WEBPACK_IMPORTED_MODULE_0__["default"].termMin)) * 100;
        if (main) {
            main.innerHTML = `
        <section class="calc">
          <form class="calc__form">
            <div class="form__field">
              <label for="price" class="field__label">Стоимость автомобиля</label>
              <div class="field__wrapper">
                <input type="number" name="price" class="field__text field__input" id="priceText" value="${this.price}">
                <div class="field__unit price-unit">₽</div>
              </div>
              <input type="range" class="field__range" id="priceRange" value="${this.price}" min="${_environment_environment__WEBPACK_IMPORTED_MODULE_0__["default"].priceMin}" max="${_environment_environment__WEBPACK_IMPORTED_MODULE_0__["default"].priceMax}" style="background-image: linear-gradient(90deg, #FF9514 ${pricePercentage}%, transparent ${pricePercentage}%)">
            </div>
            <div class="form__field">
              <label for="fee" class="field__label">Первоначальный взнос</label>
              <div class="field__wrapper">
                <div class="field__text" id="feeCalculated">${this.feeCalculated}</div>
                <input type="text" value="${this.fee}%" name="fee" class="field__unit field__text field__input fee-unit" id="feeText">
              </div>
              <input type="range" class="field__range" id="feeRange" value="${this.fee}"min="${_environment_environment__WEBPACK_IMPORTED_MODULE_0__["default"].feeMin}" max="${_environment_environment__WEBPACK_IMPORTED_MODULE_0__["default"].feeMax}" style="background-image: linear-gradient(90deg, #FF9514 ${feePercentage}%, transparent ${feePercentage}%)">
            </div>
            <div class="form__field">
              <label for="term" class="field__label">Срок лизинга</label>
              <div class="field__wrapper">
                <input type="number" name="term" class="field__text field__input" id="termText" value="${this.term}">
                <div class="field__unit term-unit">мес.</div>
              </div>
              <input type="range" class="field__range" id="termRange" value="${this.term}" min="${_environment_environment__WEBPACK_IMPORTED_MODULE_0__["default"].termMin}" max="${_environment_environment__WEBPACK_IMPORTED_MODULE_0__["default"].termMax}" style="background-image: linear-gradient(90deg, #FF9514 ${termPercentage}%, transparent ${termPercentage}%)">
            </div>
          </form>
          <div class="calc__result">
            <div class="result">
              <div class="result__label" >
                Сумма договора лизинга
              </div>
              <div class="result__output" id="outputSum">
                ${Math.round(this.sum)} <span>₽</span>
              </div>
            </div>
            <div class="result">
              <div class="result__label">
                Ежемесячный платеж от
              </div>
              <div class="result__output" id="outputPayment">
                ${Math.round(this.payment)} <span>₽</span>
              </div>
            </div>
            <button type="button" class="submit" id="submitRequest">Оставить заявку</button>
          </div>
        </section>
      `;
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Calc);


/***/ }),

/***/ "./src/environment/environment.ts":
/*!****************************************!*\
  !*** ./src/environment/environment.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const environment = {
    baseUrl: 'https://eoj3r7f3r4ef6v4.m.pipedream.net',
    priceMin: 1000000,
    priceMax: 6000000,
    priceDefault: 3300000,
    feeMin: 10,
    feeMax: 60,
    feeDefault: 13,
    termMin: 1,
    termMax: 60,
    termDefault: 60,
    interestRate: 3.5,
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (environment);


/***/ }),

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function fillInputTrack(target) {
    if (!target.id.includes('Range'))
        return;
    const { style } = target;
    const percentage = ((Number(target.value) - Number(target.min))
        / (Number(target.max) - Number(target.min))) * 100;
    style.backgroundImage = `linear-gradient(90deg, #FF9514 ${percentage}%, transparent ${percentage}%)`;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fillInputTrack);


/***/ }),

/***/ "./src/resources/fonts/Gilroy-Regular.woff2":
/*!**************************************************!*\
  !*** ./src/resources/fonts/Gilroy-Regular.woff2 ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1eae0fde6f6dc3bb7140.woff2";

/***/ }),

/***/ "./src/resources/fonts/Nekst-Black.woff2":
/*!***********************************************!*\
  !*** ./src/resources/fonts/Nekst-Black.woff2 ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e1b306b6f6f0ce3ca4ab.woff2";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_App_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/App/app */ "./src/components/App/app.ts");
/* harmony import */ var _resources_css_reset_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resources/css/reset.scss */ "./src/resources/css/reset.scss");
/* harmony import */ var _resources_css_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resources/css/styles.scss */ "./src/resources/css/styles.scss");



const app = new _components_App_app__WEBPACK_IMPORTED_MODULE_0__["default"]();
app.render();
app.listen();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLFdBQVcsYUFBYSxZQUFZLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssTUFBTSxNQUFNLFdBQVcsV0FBVyxLQUFLLEtBQUssTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxZQUFZLFlBQVksVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxZQUFZLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksWUFBWSxXQUFXLE1BQU0sTUFBTSxZQUFZLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksWUFBWSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FB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QUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQXVDO0FBQ0g7QUFDQztBQUNyQyxnQkFBZ0IsMkRBQUc7QUFDbkI7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL294ZW0tdGVzdC8uL3NyYy9jb21wb25lbnRzL0FwcC9hcHAuc2NzcyIsIndlYnBhY2s6Ly9veGVtLXRlc3QvLi9zcmMvY29tcG9uZW50cy9DYWxjL2NhbGMuc2NzcyIsIndlYnBhY2s6Ly9veGVtLXRlc3QvLi9zcmMvcmVzb3VyY2VzL2Nzcy9yZXNldC5zY3NzIiwid2VicGFjazovL294ZW0tdGVzdC8uL3NyYy9yZXNvdXJjZXMvY3NzL3N0eWxlcy5zY3NzIiwid2VicGFjazovL294ZW0tdGVzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb3hlbS10ZXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9veGVtLXRlc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9veGVtLXRlc3QvLi9zcmMvY29tcG9uZW50cy9BcHAvYXBwLnNjc3M/NmViNSIsIndlYnBhY2s6Ly9veGVtLXRlc3QvLi9zcmMvY29tcG9uZW50cy9DYWxjL2NhbGMuc2Nzcz83NjllIiwid2VicGFjazovL294ZW0tdGVzdC8uL3NyYy9yZXNvdXJjZXMvY3NzL3Jlc2V0LnNjc3M/M2E1ZSIsIndlYnBhY2s6Ly9veGVtLXRlc3QvLi9zcmMvcmVzb3VyY2VzL2Nzcy9zdHlsZXMuc2Nzcz85YzJhIiwid2VicGFjazovL294ZW0tdGVzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9veGVtLXRlc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL294ZW0tdGVzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9veGVtLXRlc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb3hlbS10ZXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb3hlbS10ZXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb3hlbS10ZXN0Ly4vc3JjL2NvbXBvbmVudHMvQXBwL2FwcC50cyIsIndlYnBhY2s6Ly9veGVtLXRlc3QvLi9zcmMvY29tcG9uZW50cy9DYWxjL2NhbGMudHMiLCJ3ZWJwYWNrOi8vb3hlbS10ZXN0Ly4vc3JjL2Vudmlyb25tZW50L2Vudmlyb25tZW50LnRzIiwid2VicGFjazovL294ZW0tdGVzdC8uL3NyYy91dGlscy91dGlscy50cyIsIndlYnBhY2s6Ly9veGVtLXRlc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb3hlbS10ZXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL294ZW0tdGVzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb3hlbS10ZXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb3hlbS10ZXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb3hlbS10ZXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb3hlbS10ZXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL294ZW0tdGVzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9veGVtLXRlc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL294ZW0tdGVzdC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vLi4vcmVzb3VyY2VzL2ZvbnRzL0dpbHJveS1SZWd1bGFyLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vLi4vcmVzb3VyY2VzL2ZvbnRzL05la3N0LUJsYWNrLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAwIDQ3cHg7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICBib2R5IHtcXG4gICAgbWFyZ2luOiA2NHB4IDM2cHggMTU2cHg7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XFxuICBib2R5IHtcXG4gICAgbWFyZ2luOiA0NHB4IDIwcHggNjRweDtcXG4gIH1cXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkdpbHJveVxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmVrc3RcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXG59XFxuLnBhZ2UtaGVhZGVyIHtcXG4gIG1heC13aWR0aDogNzUzcHg7XFxuICBtYXJnaW46IDAgMCAzMnB4O1xcbn1cXG4ucGFnZS1oZWFkZXIgaDEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOZWtzdFxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1zaXplOiA1NHB4O1xcbiAgbGluZS1oZWlnaHQ6IDkwJTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcXG4gIC5wYWdlLWhlYWRlciBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMzRweDtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvQXBwL2FwcC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQWNBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFiRjtBQWVFO0VBUEY7SUFRSSx1QkFBQTtFQVpGO0FBQ0Y7QUFjRTtFQVhGO0lBWUksc0JBQUE7RUFYRjtBQUNGOztBQWNBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLDREQUFBO0FBWEY7QUFjQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSw0REFBQTtBQVpGO0FBZUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBYkY7QUFlRTtFQUNFLGdDQS9DVztFQWdEWCxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQWJKO0FBZUk7RUFORjtJQU9JLGVBQUE7RUFaSjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiRmb250LXByaW1hcnk6ICdOZWtzdCcsIHNhbnMtc2VyaWY7XFxuJGZvbnQtc2Vjb25kYXJ5OiAnR2lscm95Jywgc2Fucy1zZXJpZjtcXG5cXG4kY29sb3ItaW5wdXQtbWVkaXVtOiAjRkY5NTE0O1xcbiRjb2xvci1pbnB1dC1saWdodDogcmdiYSgyNTUsIDE0OSwgMjAsIDAuNCk7XFxuJGNvbG9yLXRleHQtZGFyazogIzExMTExMTtcXG4kY29sb3ItdGV4dC1zdHJvbmc6ICMzMzMzMzM7XFxuJGNvbG9yLXRleHQtbWVkaXVtOiAjNTc1NzU3O1xcbiRjb2xvci10ZXh0LWxpZ2h0OiAjRjNGM0Y0O1xcblxcbiRzY3JlZW4tbGFyZ2U6IDEwMjRweDtcXG4kc2NyZWVuLW1lZGl1bTogNzY4cHg7XFxuJHNjcmVlbi1zbWFsbDogMzIwcHg7XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDAgNDdweDtcXG5cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRzY3JlZW4tbWVkaXVtKSB7XFxuICAgIG1hcmdpbjogNjRweCAzNnB4IDE1NnB4O1xcbiAgfVxcblxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHNjcmVlbi1zbWFsbCkge1xcbiAgICBtYXJnaW46IDQ0cHggMjBweCA2NHB4O1xcbiAgfVxcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnR2lscm95JztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIHNyYzogdXJsKC4uLy4uL3Jlc291cmNlcy9mb250cy9HaWxyb3ktUmVndWxhci53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnTmVrc3QnO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgc3JjOiB1cmwoLi4vLi4vcmVzb3VyY2VzL2ZvbnRzL05la3N0LUJsYWNrLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XFxufVxcblxcbi5wYWdlLWhlYWRlciB7XFxuICBtYXgtd2lkdGg6IDc1M3B4O1xcbiAgbWFyZ2luOiAwIDAgMzJweDtcXG5cXG4gIGgxIHtcXG4gICAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGZvbnQtc2l6ZTogNTRweDtcXG4gICAgbGluZS1oZWlnaHQ6IDkwJTtcXG5cXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHNjcmVlbi1zbWFsbCkge1xcbiAgICAgIGZvbnQtc2l6ZTogMzRweDtcXG4gICAgIH1cXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDAgNDdweDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIGJvZHkge1xcbiAgICBtYXJnaW46IDY0cHggMzZweCAxNTZweDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBtYXJnaW46IDQ0cHggMjBweCA2NHB4O1xcbiAgfVxcbn1cXG5cXG4uY2FsYyB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmNhbGMgLmNhbGNfX2Zvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMzJweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmNhbGMgLmNhbGNfX2Zvcm0gLmZvcm1fX2ZpZWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDQyN3B4O1xcbn1cXG4uY2FsYyAuY2FsY19fZm9ybSAuZm9ybV9fZmllbGQgLmZpZWxkX19sYWJlbCB7XFxuICBjb2xvcjogIzU3NTc1NztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR2lscm95XFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG4gIG1hcmdpbjogMCAwIDI0cHg7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XFxuICAuY2FsYyAuY2FsY19fZm9ybSAuZm9ybV9fZmllbGQgLmZpZWxkX19sYWJlbCB7XFxuICAgIG1hcmdpbjogMCAwIDhweDtcXG4gIH1cXG59XFxuLmNhbGMgLmNhbGNfX2Zvcm0gLmZvcm1fX2ZpZWxkIC5maWVsZF9fd3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmNhbGMgLmNhbGNfX2Zvcm0gLmZvcm1fX2ZpZWxkIC5maWVsZF9fd3JhcHBlciAuZmllbGRfX3RleHQge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMTZweCAyNHB4O1xcbiAgYm9yZGVyOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YzRjNGNDtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBoZWlnaHQ6IDQuMjVyZW07XFxuICBjb2xvcjogIzU3NTc1NztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmVrc3RcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbn1cXG4uY2FsYyAuY2FsY19fZm9ybSAuZm9ybV9fZmllbGQgLmZpZWxkX193cmFwcGVyIC5maWVsZF9fdGV4dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0YzRjNGNDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XFxuICAuY2FsYyAuY2FsY19fZm9ybSAuZm9ybV9fZmllbGQgLmZpZWxkX193cmFwcGVyIC5maWVsZF9fdGV4dCB7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBsaW5lLWhlaWdodDogMjBweDtcXG4gIH1cXG59XFxuLmNhbGMgLmNhbGNfX2Zvcm0gLmZvcm1fX2ZpZWxkIC5maWVsZF9fd3JhcHBlciAuZmllbGRfX3VuaXQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29sb3I6ICM1NzU3NTc7XFxuICBmb250LWZhbWlseTogXFxcIk5la3N0XFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBsaW5lLWhlaWdodDogMzZweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG4uY2FsYyAuY2FsY19fZm9ybSAuZm9ybV9fZmllbGQgLmZpZWxkX193cmFwcGVyIC5maWVsZF9fdW5pdC5wcmljZS11bml0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMzZweDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgdG9wOiAxNnB4O1xcbiAgcmlnaHQ6IDE2cHg7XFxufVxcbi5jYWxjIC5jYWxjX19mb3JtIC5mb3JtX19maWVsZCAuZmllbGRfX3dyYXBwZXIgLmZpZWxkX191bml0LmZlZS11bml0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMTVweCAxN3B4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEyMCU7XFxuICBoZWlnaHQ6IDU0cHg7XFxuICB3aWR0aDogNzNweDtcXG4gIHRvcDogN3B4O1xcbiAgcmlnaHQ6IDdweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJFQkVDO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xcbiAgLmNhbGMgLmNhbGNfX2Zvcm0gLmZvcm1fX2ZpZWxkIC5maWVsZF9fd3JhcHBlciAuZmllbGRfX3VuaXQuZmVlLXVuaXQge1xcbiAgICB0b3A6IDZweDtcXG4gICAgcmlnaHQ6IDZweDtcXG4gICAgaGVpZ2h0OiA0OHB4O1xcbiAgfVxcbn1cXG4uY2FsYyAuY2FsY19fZm9ybSAuZm9ybV9fZmllbGQgLmZpZWxkX193cmFwcGVyIC5maWVsZF9fdW5pdC50ZXJtLXVuaXQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgd2lkdGg6IDYzcHg7XFxuICB0b3A6IDE2cHg7XFxuICByaWdodDogMjRweDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcXG4gIC5jYWxjIC5jYWxjX19mb3JtIC5mb3JtX19maWVsZCAuZmllbGRfX3dyYXBwZXIgLmZpZWxkX191bml0IHtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBsaW5lLWhlaWdodDogMjhweDtcXG4gIH1cXG59XFxuLmNhbGMgLmNhbGNfX2Zvcm0gLmZvcm1fX2ZpZWxkIGlucHV0W3R5cGU9cmFuZ2VdIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgdG9wOiAtMTBweDtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0OHB4KTtcXG4gIG1hcmdpbjogOXB4IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGM0Y0O1xcbiAgaGVpZ2h0OiAycHg7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcbi5jYWxjIC5jYWxjX19mb3JtIC5mb3JtX19maWVsZCBpbnB1dFt0eXBlPXJhbmdlXTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4uY2FsYyAuY2FsY19fZm9ybSAuZm9ybV9fZmllbGQgaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcXG4gIGJvcmRlcjogMC4ycHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEuM3B4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDJweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmNhbGMgLmNhbGNfX2Zvcm0gLmZvcm1fX2ZpZWxkIGlucHV0W3R5cGU9cmFuZ2VdOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxuICBtYXJnaW4tdG9wOiAtOS4ycHg7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQ6ICNGRjk1MTQ7XFxuICBib3JkZXI6IDBweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jYWxjIC5jYWxjX19mb3JtIC5mb3JtX19maWVsZCBpbnB1dFt0eXBlPXJhbmdlXTo6LXdlYmtpdC1zbGlkZXItdGh1bWI6aG92ZXIge1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBtYXJnaW4tdG9wOiAtMTEuMnB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcbi5jYWxjIC5jYWxjX19mb3JtIC5mb3JtX19maWVsZCBpbnB1dFt0eXBlPXJhbmdlXTo6LW1vei1yYW5nZS10cmFjayB7XFxuICBib3JkZXI6IDAuMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XFxuICBib3JkZXItcmFkaXVzOiAxLjNweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jYWxjIC5jYWxjX19mb3JtIC5mb3JtX19maWVsZCBpbnB1dFt0eXBlPXJhbmdlXTo6LW1vei1yYW5nZS1wcm9ncmVzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5NTE0O1xcbn1cXG4uY2FsYyAuY2FsY19fZm9ybSAuZm9ybV9fZmllbGQgaW5wdXRbdHlwZT1yYW5nZV06Oi1tb3otcmFuZ2UtdGh1bWIge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kOiAjRkY5NTE0O1xcbiAgYm9yZGVyOiAwcHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmNhbGMgLmNhbGNfX2Zvcm0gLmZvcm1fX2ZpZWxkIGlucHV0W3R5cGU9cmFuZ2VdOjotbW96LXJhbmdlLXRodW1iOmhvdmVyIHtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgbWFyZ2luLXRvcDogLTExLjJweDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG4uY2FsYyAuY2FsY19fZm9ybSAuZm9ybV9fZmllbGQgaW5wdXRbdHlwZT1yYW5nZV06Oi1tcy10cmFjayB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItd2lkdGg6IDEwcHggMDtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jYWxjIC5jYWxjX19mb3JtIC5mb3JtX19maWVsZCBpbnB1dFt0eXBlPXJhbmdlXTo6LW1zLWZpbGwtbG93ZXIge1xcbiAgYmFja2dyb3VuZDogI0ZGOTUxNDtcXG4gIGJvcmRlcjogMC4ycHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDIuNnB4O1xcbn1cXG4uY2FsYyAuY2FsY19fZm9ybSAuZm9ybV9fZmllbGQgaW5wdXRbdHlwZT1yYW5nZV06Oi1tcy1maWxsLXVwcGVyIHtcXG4gIGJhY2tncm91bmQ6ICNGM0YzRjQ7XFxuICBib3JkZXI6IDAuMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XFxuICBib3JkZXItcmFkaXVzOiAyLjZweDtcXG59XFxuLmNhbGMgLmNhbGNfX2Zvcm0gLmZvcm1fX2ZpZWxkIGlucHV0W3R5cGU9cmFuZ2VdOjotbXMtdGh1bWIge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kOiAjRkY5NTE0O1xcbiAgYm9yZGVyOiAwcHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBtYXJnaW4tdG9wOiAwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuLmNhbGMgLmNhbGNfX2Zvcm0gLmZvcm1fX2ZpZWxkIGlucHV0W3R5cGU9cmFuZ2VdOjotbXMtdGh1bWI6aG92ZXIge1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBtYXJnaW4tdG9wOiAtMTEuMnB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcbi5jYWxjIC5jYWxjX19mb3JtIC5mb3JtX19maWVsZCBpbnB1dFt0eXBlPXJhbmdlXTpmb2N1czo6LW1zLWZpbGwtbG93ZXIge1xcbiAgYmFja2dyb3VuZDogI0ZGOTUxNDtcXG59XFxuLmNhbGMgLmNhbGNfX2Zvcm0gLmZvcm1fX2ZpZWxkIGlucHV0W3R5cGU9cmFuZ2VdOmZvY3VzOjotbXMtZmlsbC11cHBlciB7XFxuICBiYWNrZ3JvdW5kOiAjRjNGM0Y0O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gIC5jYWxjIC5jYWxjX19mb3JtIC5mb3JtX19maWVsZCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gIC5jYWxjIC5jYWxjX19mb3JtIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG59XFxuLmNhbGMgLmNhbGNfX3Jlc3VsdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAzMnB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmNhbGMgLmNhbGNfX3Jlc3VsdCAucmVzdWx0IHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIG1heC13aWR0aDogNDI3cHg7XFxufVxcbi5jYWxjIC5jYWxjX19yZXN1bHQgLnJlc3VsdCAucmVzdWx0X19sYWJlbCB7XFxuICBmb250LWZhbWlseTogXFxcIkdpbHJveVxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XFxuICBtYXJnaW46IDAgMCA4cHg7XFxufVxcbi5jYWxjIC5jYWxjX19yZXN1bHQgLnJlc3VsdCAucmVzdWx0X19vdXRwdXQge1xcbiAgY29sb3I6ICMzMzMzMzM7XFxuICBmb250LWZhbWlseTogXFxcIk5la3N0XFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBmb250LXNpemU6IDU0cHg7XFxuICBsaW5lLWhlaWdodDogOTAlO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xcbiAgLmNhbGMgLmNhbGNfX3Jlc3VsdCAucmVzdWx0IC5yZXN1bHRfX291dHB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICB9XFxufVxcbi5jYWxjIC5jYWxjX19yZXN1bHQgLnN1Ym1pdCB7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBtYXgtd2lkdGg6IDQyN3B4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOZWtzdFxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5NTE0O1xcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcXG4gIGNvbG9yOiAjRkZGRkZGO1xcbiAgaGVpZ2h0OiA2OHB4O1xcbiAgYm9yZGVyOiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY2FsYyAuY2FsY19fcmVzdWx0IC5zdWJtaXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTExMTtcXG4gIGNvbG9yOiAjRkZGRkZGO1xcbn1cXG4uY2FsYyAuY2FsY19fcmVzdWx0IC5zdWJtaXQ6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NzU3NTc7XFxuICBjb2xvcjogI0ZGRkZGRjtcXG59XFxuLmNhbGMgLmNhbGNfX3Jlc3VsdCAuc3VibWl0LmRpc2FibGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNDksIDIwLCAwLjQpO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gIC5jYWxjIC5jYWxjX19yZXN1bHQgLnN1Ym1pdCB7XFxuICAgIG1hcmdpbjogMCAyMDBweCAwIDA7XFxuICAgIG1heC13aWR0aDogMzQ1cHg7XFxuICAgIG1pbi13aWR0aDogMjgwcHg7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XFxuICAuY2FsYyAuY2FsY19fcmVzdWx0IC5zdWJtaXQge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1heC13aWR0aDogMzQ1cHg7XFxuICAgIG1pbi13aWR0aDogMjgwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvQ2FsYy9jYWxjLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBY0E7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQWJGO0FBZUU7RUFQRjtJQVFJLHVCQUFBO0VBWkY7QUFDRjtBQWNFO0VBWEY7SUFZSSxzQkFBQTtFQVhGO0FBQ0Y7O0FBY0E7RUFDRSxXQUFBO0FBWEY7QUFhRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0FBWEo7QUFhSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFYTjtBQWFNO0VBQ0UsY0F0Q1k7RUF1Q1osaUNBN0NTO0VBOENULGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQVhSO0FBYVE7RUFURjtJQVVJLGVBQUE7RUFWUjtBQUNGO0FBY007RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFaUjtBQWNRO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQTdEUztFQThEVCxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQWpFVTtFQWtFVixnQ0F6RUs7RUEwRUwsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVpWO0FBY1U7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQVpaO0FBZVU7RUF0QkY7SUF1QkksWUFBQTtJQUNBLGFBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7RUFaVjtBQUNGO0FBZVE7RUFDRSxrQkFBQTtFQUNBLGNBeEZVO0VBeUZWLGdDQWhHSztFQWlHTCxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBYlY7QUFlVTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQWJaO0FBZ0JVO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQWRaO0FBZ0JZO0VBaEJGO0lBaUJJLFFBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtFQWJaO0FBQ0Y7QUFpQlU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFmWjtBQWtCVTtFQW5ERjtJQW9ESSxlQUFBO0lBQ0EsaUJBQUE7RUFmVjtBQUNGO0FBbUJNO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFySlc7RUFzSlgsV0FBQTtFQUNBLHdCQUFBO0FBakJSO0FBb0JNO0VBQ0UsYUFBQTtBQWxCUjtBQXFCTTtFQUNFLG9DQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFuQlI7QUFzQk07RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFoTGE7RUFpTGIsa0NBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFwQlI7QUFzQlE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFwQlY7QUF3Qk07RUFDRSxvQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBdEJSO0FBeUJNO0VBQ0UseUJBeE1hO0FBaUxyQjtBQTBCTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBOU1hO0VBK01iLGtDQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FBeEJSO0FBMEJRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBeEJWO0FBNEJNO0VBQ0UsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUExQlI7QUE2Qk07RUFDRSxtQkF4T2E7RUF5T2Isb0NBQUE7RUFDQSxvQkFBQTtBQTNCUjtBQThCTTtFQUNFLG1CQXpPVztFQTBPWCxvQ0FBQTtFQUNBLG9CQUFBO0FBNUJSO0FBK0JNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkF0UGE7RUF1UGIsa0NBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBN0JSO0FBK0JRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBN0JWO0FBaUNNO0VBQ0UsbUJBdlFhO0FBd09yQjtBQWtDTTtFQUNFLG1CQXRRVztBQXNPbkI7QUFtQ007RUExT0Y7SUEyT0ksV0FBQTtFQWhDTjtBQUNGO0FBbUNJO0VBclBGO0lBc1BJLHNCQUFBO0VBaENKO0FBQ0Y7QUFtQ0U7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBakNKO0FBbUNJO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBakNOO0FBbUNNO0VBQ0UsaUNBdFNTO0VBdVNULGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBakNSO0FBb0NNO0VBQ0UsY0ExU1k7RUEyU1osZ0NBalRPO0VBa1RQLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFsQ1I7QUFvQ1E7RUFSRjtJQVNJLGVBQUE7SUFDQSxpQkFBQTtFQWpDUjtBQUNGO0FBcUNJO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBalVTO0VBa1VULGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFuVWU7RUFvVWYsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBbkNOO0FBcUNNO0VBQ0UseUJBelVVO0VBMFVWLGNBQUE7QUFuQ1I7QUFzQ007RUFDRSx5QkE1VVk7RUE2VVosY0FBQTtBQXBDUjtBQXVDTTtFQUNFLHlDQXBWWTtBQStTcEI7QUF3Q007RUE3QkY7SUE4QkksbUJBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0VBckNOO0FBQ0Y7QUF1Q087RUFuQ0g7SUFvQ0ksU0FBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxZQUFBO0VBcENOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGZvbnQtcHJpbWFyeTogJ05la3N0Jywgc2Fucy1zZXJpZjtcXG4kZm9udC1zZWNvbmRhcnk6ICdHaWxyb3knLCBzYW5zLXNlcmlmO1xcblxcbiRjb2xvci1pbnB1dC1tZWRpdW06ICNGRjk1MTQ7XFxuJGNvbG9yLWlucHV0LWxpZ2h0OiByZ2JhKDI1NSwgMTQ5LCAyMCwgMC40KTtcXG4kY29sb3ItdGV4dC1kYXJrOiAjMTExMTExO1xcbiRjb2xvci10ZXh0LXN0cm9uZzogIzMzMzMzMztcXG4kY29sb3ItdGV4dC1tZWRpdW06ICM1NzU3NTc7XFxuJGNvbG9yLXRleHQtbGlnaHQ6ICNGM0YzRjQ7XFxuXFxuJHNjcmVlbi1sYXJnZTogMTAyNHB4O1xcbiRzY3JlZW4tbWVkaXVtOiA3NjhweDtcXG4kc2NyZWVuLXNtYWxsOiAzMjBweDtcXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMCA0N3B4O1xcblxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHNjcmVlbi1tZWRpdW0pIHtcXG4gICAgbWFyZ2luOiA2NHB4IDM2cHggMTU2cHg7XFxuICB9XFxuXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkc2NyZWVuLXNtYWxsKSB7XFxuICAgIG1hcmdpbjogNDRweCAyMHB4IDY0cHg7XFxuICB9XFxufVxcblxcbi5jYWxjIHtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbiAgLmNhbGNfX2Zvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogMzJweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgXFxuICAgIC5mb3JtX19maWVsZCB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIHdpZHRoOiA0MjdweDtcXG5cXG4gICAgICAuZmllbGRfX2xhYmVsIHtcXG4gICAgICAgIGNvbG9yOiAkY29sb3ItdGV4dC1tZWRpdW07XFxuICAgICAgICBmb250LWZhbWlseTogJGZvbnQtc2Vjb25kYXJ5O1xcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgICAgICAgbWFyZ2luOiAwIDAgMjRweDtcXG5cXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRzY3JlZW4tc21hbGwpIHtcXG4gICAgICAgICAgbWFyZ2luOiAwIDAgOHB4O1xcbiAgICAgICAgIH1cXG5cXG4gICAgICB9XFxuXFxuICAgICAgLmZpZWxkX193cmFwcGVyIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICAgICAgLmZpZWxkX190ZXh0IHtcXG4gICAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4IDI0cHg7XFxuICAgICAgICAgIGJvcmRlcjogMDtcXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci10ZXh0LWxpZ2h0O1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICAgICAgICBoZWlnaHQ6IDQuMjVyZW07XFxuICAgICAgICAgIGNvbG9yOiAkY29sb3ItdGV4dC1tZWRpdW07XFxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XFxuXFxuICAgICAgICAgICY6Zm9jdXMge1xcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0YzRjNGNDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRzY3JlZW4tc21hbGwpIHtcXG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XFxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICBcXG4gICAgICAgIC5maWVsZF9fdW5pdCB7XFxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgY29sb3I6ICRjb2xvci10ZXh0LW1lZGl1bTtcXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICB6LWluZGV4OiAxMDtcXG4gIFxcbiAgICAgICAgICAmLnByaWNlLXVuaXQge1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDM2cHg7XFxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XFxuICAgICAgICAgICAgdG9wOiAxNnB4O1xcbiAgICAgICAgICAgIHJpZ2h0OiAxNnB4O1xcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgICYuZmVlLXVuaXQge1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDE3cHg7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMjAlO1xcbiAgICAgICAgICAgIGhlaWdodDogNTRweDtcXG4gICAgICAgICAgICB3aWR0aDogNzNweDtcXG4gICAgICAgICAgICB0b3A6IDdweDtcXG4gICAgICAgICAgICByaWdodDogN3B4O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VCRUJFQztcXG5cXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkc2NyZWVuLXNtYWxsKSB7XFxuICAgICAgICAgICAgICB0b3A6IDZweDtcXG4gICAgICAgICAgICAgIHJpZ2h0OiA2cHg7XFxuICAgICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XFxuICAgICAgICAgICAgIH1cXG4gIFxcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgICYudGVybS11bml0IHtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xcbiAgICAgICAgICAgIHdpZHRoOiA2M3B4O1xcbiAgICAgICAgICAgIHRvcDogMTZweDtcXG4gICAgICAgICAgICByaWdodDogMjRweDtcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkc2NyZWVuLXNtYWxsKSB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xcbiAgICAgICAgICAgfVxcbiAgICAgICAgfSAgXFxuICAgICAgfVxcblxcbiAgICAgIGlucHV0W3R5cGU9cmFuZ2VdIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIHotaW5kZXg6IDEwO1xcbiAgICAgICAgdG9wOiAtMTBweDtcXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0OHB4KTtcXG4gICAgICAgIG1hcmdpbjogOXB4IGF1dG87XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItdGV4dC1saWdodDtcXG4gICAgICAgIGhlaWdodDogMnB4O1xcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgIH1cXG4gICAgICBcXG4gICAgICBpbnB1dFt0eXBlPXJhbmdlXTpmb2N1cyB7XFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgIH1cXG4gICAgICBcXG4gICAgICBpbnB1dFt0eXBlPXJhbmdlXTo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xcbiAgICAgICAgYm9yZGVyOiAwLjJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMS4zcHg7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMnB4O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIH1cXG4gICAgICBcXG4gICAgICBpbnB1dFt0eXBlPXJhbmdlXTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcbiAgICAgICAgbWFyZ2luLXRvcDogLTkuMnB4O1xcbiAgICAgICAgd2lkdGg6IDIwcHg7XFxuICAgICAgICBoZWlnaHQ6IDIwcHg7XFxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3ItaW5wdXQtbWVkaXVtO1xcbiAgICAgICAgYm9yZGVyOiAwcHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcXG4gICAgICAgIGJvcmRlcjogMDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgIHdpZHRoOiAyNHB4O1xcbiAgICAgICAgICBoZWlnaHQ6IDI0cHg7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IC0xMS4ycHg7XFxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICBpbnB1dFt0eXBlPXJhbmdlXTo6LW1vei1yYW5nZS10cmFjayB7XFxuICAgICAgICBib3JkZXI6IDAuMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxLjNweDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAycHg7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgfVxcblxcbiAgICAgIGlucHV0W3R5cGU9XFxcInJhbmdlXFxcIl06Oi1tb3otcmFuZ2UtcHJvZ3Jlc3Mge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWlucHV0LW1lZGl1bTsgXFxuICAgICAgfVxcbiAgXFxuICAgICAgaW5wdXRbdHlwZT1yYW5nZV06Oi1tb3otcmFuZ2UtdGh1bWIge1xcbiAgICAgICAgd2lkdGg6IDIwcHg7XFxuICAgICAgICBoZWlnaHQ6IDIwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3ItaW5wdXQtbWVkaXVtO1xcbiAgICAgICAgYm9yZGVyOiAwcHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcXG4gICAgICAgIGJvcmRlcjogMDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICB3aWR0aDogMjRweDtcXG4gICAgICAgICAgaGVpZ2h0OiAyNHB4O1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMTEuMnB4O1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgICAgXFxuICAgICAgaW5wdXRbdHlwZT1yYW5nZV06Oi1tcy10cmFjayB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBib3JkZXItd2lkdGg6IDEwcHggMDtcXG4gICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAycHg7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgfVxcbiAgICAgIFxcbiAgICAgIGlucHV0W3R5cGU9cmFuZ2VdOjotbXMtZmlsbC1sb3dlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3ItaW5wdXQtbWVkaXVtO1xcbiAgICAgICAgYm9yZGVyOiAwLjJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMi42cHg7XFxuICAgICAgfVxcbiAgICAgIFxcbiAgICAgIGlucHV0W3R5cGU9cmFuZ2VdOjotbXMtZmlsbC11cHBlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3ItdGV4dC1saWdodDtcXG4gICAgICAgIGJvcmRlcjogMC4ycHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIuNnB4O1xcbiAgICAgIH1cXG4gICAgICBcXG4gICAgICBpbnB1dFt0eXBlPXJhbmdlXTo6LW1zLXRodW1iIHtcXG4gICAgICAgIHdpZHRoOiAyMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yLWlucHV0LW1lZGl1bTtcXG4gICAgICAgIGJvcmRlcjogMHB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XFxuICAgICAgICBib3JkZXI6IDA7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxuXFxuICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgd2lkdGg6IDI0cHg7XFxuICAgICAgICAgIGhlaWdodDogMjRweDtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogLTExLjJweDtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICAgIFxcbiAgICAgIGlucHV0W3R5cGU9cmFuZ2VdOmZvY3VzOjotbXMtZmlsbC1sb3dlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3ItaW5wdXQtbWVkaXVtO1xcbiAgICAgIH1cXG4gICAgICBcXG4gICAgICBpbnB1dFt0eXBlPXJhbmdlXTpmb2N1czo6LW1zLWZpbGwtdXBwZXIge1xcbiAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yLXRleHQtbGlnaHQ7XFxuICAgICAgfVxcblxcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRzY3JlZW4tbGFyZ2UpIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkc2NyZWVuLWxhcmdlKSB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgIH1cXG4gIH1cXG5cXG4gIC5jYWxjX19yZXN1bHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogMzJweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgICAucmVzdWx0IHtcXG4gICAgICBmbGV4LWdyb3c6IDE7XFxuICAgICAgbWF4LXdpZHRoOiA0MjdweDtcXG5cXG4gICAgICAucmVzdWx0X19sYWJlbCB7XFxuICAgICAgICBmb250LWZhbWlseTogJGZvbnQtc2Vjb25kYXJ5O1xcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xcbiAgICAgICAgbWFyZ2luOiAwIDAgOHB4O1xcbiAgICAgIH1cXG5cXG4gICAgICAucmVzdWx0X19vdXRwdXQge1xcbiAgICAgICAgY29sb3I6ICRjb2xvci10ZXh0LXN0cm9uZztcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgICAgIGZvbnQtc2l6ZTogNTRweDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA5MCU7XFxuXFxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkc2NyZWVuLXNtYWxsKSB7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICBcXG4gICAgLnN1Ym1pdCB7XFxuICAgICAgZmxleC1ncm93OiAxO1xcbiAgICAgIG1heC13aWR0aDogNDI3cHg7XFxuICAgICAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1pbnB1dC1tZWRpdW07XFxuICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcXG4gICAgICBjb2xvcjogI0ZGRkZGRjtcXG4gICAgICBoZWlnaHQ6IDY4cHg7XFxuICAgICAgYm9yZGVyOiAwO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci10ZXh0LWRhcms7XFxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcXG4gICAgICB9XFxuXFxuICAgICAgJjphY3RpdmUge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXRleHQtbWVkaXVtO1xcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XFxuICAgICAgfVxcblxcbiAgICAgICYuZGlzYWJsZWQge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWlucHV0LWxpZ2h0O1xcbiAgICAgIH1cXG5cXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkc2NyZWVuLWxhcmdlKSB7XFxuICAgICAgICBtYXJnaW46IDAgMjAwcHggMCAwO1xcbiAgICAgICAgbWF4LXdpZHRoOiAzNDVweDtcXG4gICAgICAgIG1pbi13aWR0aDogMjgwcHg7XFxuICAgICAgIH1cXG5cXG4gICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHNjcmVlbi1zbWFsbCkge1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgbWF4LXdpZHRoOiAzNDVweDtcXG4gICAgICAgIG1pbi13aWR0aDogMjgwcHg7XFxuICAgICAgICBmb250LXNpemU6IDIycHg7XFxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcXG4gICAgICAgIGhlaWdodDogNjBweDtcXG4gICAgICAgfVxcbiAgICB9ICBcXG4gIH1cXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDAgNDdweDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIGJvZHkge1xcbiAgICBtYXJnaW46IDY0cHggMzZweCAxNTZweDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBtYXJnaW46IDQ0cHggMjBweCA2NHB4O1xcbiAgfVxcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIG9iamVjdCwgaWZyYW1lLCBmaWd1cmUsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSwgYSwgY29kZSwgZW0sIGltZywgc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIGIsIHUsIGksIG9sLCB1bCwgbGksIGZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgdGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsIG1haW4sIGNhbnZhcywgZW1iZWQsIGZvb3RlciwgaGVhZGVyLCBuYXYsIHNlY3Rpb24sIHZpZGVvIHtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICB0ZXh0LXNpemUtYWRqdXN0OiBub25lO1xcbn1cXG5cXG5mb290ZXIsIGhlYWRlciwgbmF2LCBzZWN0aW9uLCBtYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG5vbCwgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSwgcSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLCBxOmJlZm9yZSwgcTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuaW5wdXQge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG59XFxuXFxuaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXFxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9yZXNvdXJjZXMvY3NzL3Jlc2V0LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBY0E7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQWJGO0FBZUU7RUFQRjtJQVFJLHVCQUFBO0VBWkY7QUFDRjtBQWNFO0VBWEY7SUFZSSxzQkFBQTtFQVhGO0FBQ0Y7O0FBY0E7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtBQVhGOztBQWNBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQkFBQTtBQVhGOztBQWNBO0VBQ0UsY0FBQTtBQVhGOztBQWNBO0VBQ0UsY0FBQTtBQVhGOztBQWNBO0VBQ0UsZ0JBQUE7QUFYRjs7QUFjQTtFQUNFLFlBQUE7QUFYRjs7QUFjQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FBWEY7O0FBY0E7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FBWEY7O0FBY0E7RUFDRSx3QkFBQTtFQUNBLGdCQUFBO0FBWEY7O0FBY0E7O0VBRUUsd0JBQUE7RUFDQSxTQUFBO0FBWEY7O0FBY0E7RUFDRSwwQkFBQTtBQVhGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiRmb250LXByaW1hcnk6ICdOZWtzdCcsIHNhbnMtc2VyaWY7XFxuJGZvbnQtc2Vjb25kYXJ5OiAnR2lscm95Jywgc2Fucy1zZXJpZjtcXG5cXG4kY29sb3ItaW5wdXQtbWVkaXVtOiAjRkY5NTE0O1xcbiRjb2xvci1pbnB1dC1saWdodDogcmdiYSgyNTUsIDE0OSwgMjAsIDAuNCk7XFxuJGNvbG9yLXRleHQtZGFyazogIzExMTExMTtcXG4kY29sb3ItdGV4dC1zdHJvbmc6ICMzMzMzMzM7XFxuJGNvbG9yLXRleHQtbWVkaXVtOiAjNTc1NzU3O1xcbiRjb2xvci10ZXh0LWxpZ2h0OiAjRjNGM0Y0O1xcblxcbiRzY3JlZW4tbGFyZ2U6IDEwMjRweDtcXG4kc2NyZWVuLW1lZGl1bTogNzY4cHg7XFxuJHNjcmVlbi1zbWFsbDogMzIwcHg7XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDAgNDdweDtcXG5cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRzY3JlZW4tbWVkaXVtKSB7XFxuICAgIG1hcmdpbjogNjRweCAzNnB4IDE1NnB4O1xcbiAgfVxcblxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHNjcmVlbi1zbWFsbCkge1xcbiAgICBtYXJnaW46IDQ0cHggMjBweCA2NHB4O1xcbiAgfVxcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIG9iamVjdCwgaWZyYW1lLCBmaWd1cmUsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSwgYSwgY29kZSwgZW0sIGltZywgc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIGIsIHUsIGksIG9sLCB1bCwgbGksIGZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgdGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsIG1haW4sIGNhbnZhcywgZW1iZWQsIGZvb3RlciwgaGVhZGVyLCBuYXYsIHNlY3Rpb24sIHZpZGVvIHtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICB0ZXh0LXNpemUtYWRqdXN0OiBub25lO1xcbn1cXG5cXG5mb290ZXIsIGhlYWRlciwgbmF2LCBzZWN0aW9uLCBtYWlue1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHl7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxub2wsIHVse1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSwgcXtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsIHE6YmVmb3JlLCBxOmFmdGVye1xcbiAgY29udGVudDogJyc7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG5cXG50YWJsZXtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuaW5wdXR7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbn1cXG5cXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmlucHV0W3R5cGU9bnVtYmVyXSB7XFxuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDAgNDdweDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIGJvZHkge1xcbiAgICBtYXJnaW46IDY0cHggMzZweCAxNTZweDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBtYXJnaW46IDQ0cHggMjBweCA2NHB4O1xcbiAgfVxcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMCA0N3B4O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgYm9keSB7XFxuICAgIG1hcmdpbjogNjRweCAzNnB4IDE1NnB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xcbiAgYm9keSB7XFxuICAgIG1hcmdpbjogNDRweCAyMHB4IDY0cHg7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9yZXNvdXJjZXMvY3NzL3N0eWxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQWNBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFiRjtBQWVFO0VBUEY7SUFRSSx1QkFBQTtFQVpGO0FBQ0Y7QUFjRTtFQVhGO0lBWUksc0JBQUE7RUFYRjtBQUNGOztBQTRCQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBekJGO0FBMkJFO0VBUEY7SUFRSSx1QkFBQTtFQXhCRjtBQUNGO0FBMEJFO0VBWEY7SUFZSSxzQkFBQTtFQXZCRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiRmb250LXByaW1hcnk6ICdOZWtzdCcsIHNhbnMtc2VyaWY7XFxuJGZvbnQtc2Vjb25kYXJ5OiAnR2lscm95Jywgc2Fucy1zZXJpZjtcXG5cXG4kY29sb3ItaW5wdXQtbWVkaXVtOiAjRkY5NTE0O1xcbiRjb2xvci1pbnB1dC1saWdodDogcmdiYSgyNTUsIDE0OSwgMjAsIDAuNCk7XFxuJGNvbG9yLXRleHQtZGFyazogIzExMTExMTtcXG4kY29sb3ItdGV4dC1zdHJvbmc6ICMzMzMzMzM7XFxuJGNvbG9yLXRleHQtbWVkaXVtOiAjNTc1NzU3O1xcbiRjb2xvci10ZXh0LWxpZ2h0OiAjRjNGM0Y0O1xcblxcbiRzY3JlZW4tbGFyZ2U6IDEwMjRweDtcXG4kc2NyZWVuLW1lZGl1bTogNzY4cHg7XFxuJHNjcmVlbi1zbWFsbDogMzIwcHg7XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDAgNDdweDtcXG5cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRzY3JlZW4tbWVkaXVtKSB7XFxuICAgIG1hcmdpbjogNjRweCAzNnB4IDE1NnB4O1xcbiAgfVxcblxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHNjcmVlbi1zbWFsbCkge1xcbiAgICBtYXJnaW46IDQ0cHggMjBweCA2NHB4O1xcbiAgfVxcbn1cXG5cXG4kZm9udC1wcmltYXJ5OiAnTmVrc3QnLCBzYW5zLXNlcmlmO1xcbiRmb250LXNlY29uZGFyeTogJ0dpbHJveScsIHNhbnMtc2VyaWY7XFxuXFxuJGNvbG9yLWlucHV0LW1lZGl1bTogI0ZGOTUxNDtcXG4kY29sb3ItaW5wdXQtbGlnaHQ6IHJnYmEoMjU1LCAxNDksIDIwLCAwLjQpO1xcbiRjb2xvci10ZXh0LWRhcms6ICMxMTExMTE7XFxuJGNvbG9yLXRleHQtc3Ryb25nOiAjMzMzMzMzO1xcbiRjb2xvci10ZXh0LW1lZGl1bTogIzU3NTc1NztcXG4kY29sb3ItdGV4dC1saWdodDogI0YzRjNGNDtcXG5cXG4kc2NyZWVuLWxhcmdlOiAxMDI0cHg7XFxuJHNjcmVlbi1tZWRpdW06IDc2OHB4O1xcbiRzY3JlZW4tc21hbGw6IDMyMHB4O1xcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAwIDQ3cHg7XFxuXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkc2NyZWVuLW1lZGl1bSkge1xcbiAgICBtYXJnaW46IDY0cHggMzZweCAxNTZweDtcXG4gIH1cXG5cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRzY3JlZW4tc21hbGwpIHtcXG4gICAgbWFyZ2luOiA0NHB4IDIwcHggNjRweDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtcmVzb3VyY2VzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL2FwcC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLXJlc291cmNlcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9hcHAuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLXJlc291cmNlcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9jYWxjLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtcmVzb3VyY2VzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL2NhbGMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLXJlc291cmNlcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9yZXNldC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLXJlc291cmNlcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9yZXNldC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtcmVzb3VyY2VzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLXJlc291cmNlcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgQ2FsYyBmcm9tICcuLi9DYWxjL2NhbGMnO1xuaW1wb3J0ICcuL2FwcC5zY3NzJztcbmNsYXNzIEFwcCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG4gICAgICAgIHRoaXMuY2FsYyA9IG5ldyBDYWxjKCk7XG4gICAgfVxuICAgIGxpc3RlbigpIHtcbiAgICAgICAgdGhpcy5yb290LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICB0aGlzLmNhbGMubGlzdGVuSW5wdXQodGFyZ2V0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucm9vdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgdGhpcy5jYWxjLmxpc3RlbkNsaWNrKHRhcmdldCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMucm9vdC5pbm5lckhUTUwgPSBgXG4gICAgICA8aGVhZGVyIGNsYXNzPVwicGFnZS1oZWFkZXJcIj5cbiAgICAgICAgPGgxPtCg0LDRgdGB0YfQuNGC0LDQudGC0LUg0YHRgtC+0LjQvNC+0YHRgtGMINCw0LLRgtC+0LzQvtCx0LjQu9GPINCyINC70LjQt9C40L3QszwvaDE+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxtYWluIGNsYXNzPVwicGFnZS1jb250ZW50XCI+XG4gICAgICA8L21haW4+XG4gICAgYDtcbiAgICAgICAgdGhpcy5jYWxjLnJlbmRlcigpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IGVudmlyb25tZW50IGZyb20gJy4uLy4uL2Vudmlyb25tZW50L2Vudmlyb25tZW50JztcbmltcG9ydCBmaWxsSW5wdXRUcmFjayBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XG5pbXBvcnQgJy4vY2FsYy5zY3NzJztcbmNsYXNzIENhbGMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnByaWNlID0gZW52aXJvbm1lbnQucHJpY2VEZWZhdWx0O1xuICAgICAgICB0aGlzLmZlZSA9IGVudmlyb25tZW50LmZlZURlZmF1bHQ7XG4gICAgICAgIHRoaXMudGVybSA9IGVudmlyb25tZW50LnRlcm1EZWZhdWx0O1xuICAgICAgICB0aGlzLmZlZUNhbGN1bGF0ZWQgPSB0aGlzLmNhbGNJbml0aWFsRmVlKCk7XG4gICAgICAgIHRoaXMucGF5bWVudCA9IHRoaXMuY2FsY091dHB1dFBheW1lbnQoKTtcbiAgICAgICAgdGhpcy5zdW0gPSB0aGlzLmNhbGNPdXRwdXRTdW0oKTtcbiAgICB9XG4gICAgbGlzdGVuSW5wdXQodGFyZ2V0KSB7XG4gICAgICAgIHRoaXMucmFuZ2VJbnB1dEhhbmRlcih0YXJnZXQpO1xuICAgICAgICB0aGlzLnRleHRJbnB1dEhhbmRsZXIodGFyZ2V0KTtcbiAgICAgICAgZmlsbElucHV0VHJhY2sodGFyZ2V0KTtcbiAgICB9XG4gICAgbGlzdGVuQ2xpY2sodGFyZ2V0KSB7XG4gICAgICAgIHRoaXMuc3VibWl0UmVxdWVzdCh0YXJnZXQpO1xuICAgIH1cbiAgICByYW5nZUlucHV0SGFuZGVyKHRhcmdldCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICghdGFyZ2V0LmlkLmluY2x1ZGVzKCdSYW5nZScpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCB0YXJnZXRJZCA9IHRhcmdldC5pZDtcbiAgICAgICAgY29uc3QgZ3JvdXBQYXJlbnRFbGVtZW50ID0gKF9hID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0SWQpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucGFyZW50RWxlbWVudDtcbiAgICAgICAgY29uc3QgdGV4dElucHV0RWxlbWVudCA9IGdyb3VwUGFyZW50RWxlbWVudCA9PT0gbnVsbCB8fCBncm91cFBhcmVudEVsZW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGdyb3VwUGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZmllbGRfX2lucHV0Jyk7XG4gICAgICAgIGlmICh0YXJnZXQuaWQgPT09ICdmZWVSYW5nZScpIHtcbiAgICAgICAgICAgIHRleHRJbnB1dEVsZW1lbnQudmFsdWUgPSBgJHt0YXJnZXQudmFsdWV9JWA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0ZXh0SW5wdXRFbGVtZW50LnZhbHVlID0gdGFyZ2V0LnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByaWNlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpY2VUZXh0Jyk7XG4gICAgICAgIGNvbnN0IGZlZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZlZVRleHQnKTtcbiAgICAgICAgY29uc3QgcmFuZ2VJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXJtVGV4dCcpO1xuICAgICAgICBzd2l0Y2ggKHRleHRJbnB1dEVsZW1lbnQubmFtZSkge1xuICAgICAgICAgICAgY2FzZSAncHJpY2UnOlxuICAgICAgICAgICAgICAgIHRoaXMucHJpY2UgPSBOdW1iZXIodGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICBwcmljZUlucHV0LnZhbHVlID0gU3RyaW5nKHRoaXMucHJpY2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZmVlJzpcbiAgICAgICAgICAgICAgICB0aGlzLmZlZSA9IE51bWJlcih0YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIGZlZUlucHV0LnZhbHVlID0gYCR7dGFyZ2V0LnZhbHVlfSVgO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndGVybSc6XG4gICAgICAgICAgICAgICAgdGhpcy50ZXJtID0gTnVtYmVyKHRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgcmFuZ2VJbnB1dC52YWx1ZSA9IFN0cmluZyh0aGlzLnRlcm0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbmRlckluaXRpYWxGZWUoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJPdXRwdXRQYXltZW50KCk7XG4gICAgICAgIHRoaXMucmVuZGVyT3V0cHV0U3VtKCk7XG4gICAgfVxuICAgIHRleHRJbnB1dEhhbmRsZXIodGFyZ2V0KSB7XG4gICAgICAgIGlmICghdGFyZ2V0LmlkLmluY2x1ZGVzKCdUZXh0JykpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IHByaWNlID0gTnVtYmVyKHRhcmdldC52YWx1ZSkgPiBlbnZpcm9ubWVudC5wcmljZU1heFxuICAgICAgICAgICAgPyBlbnZpcm9ubWVudC5wcmljZU1heCA6IE51bWJlcih0YXJnZXQudmFsdWUpO1xuICAgICAgICBjb25zdCBmZWUgPSBwYXJzZUludCh0YXJnZXQudmFsdWUsIDEwKSA+IGVudmlyb25tZW50LmZlZU1heFxuICAgICAgICAgICAgPyBlbnZpcm9ubWVudC5mZWVNYXggOiBwYXJzZUludCh0YXJnZXQudmFsdWUsIDEwKSB8fCAwO1xuICAgICAgICBjb25zdCB0ZXJtID0gTnVtYmVyKHRhcmdldC52YWx1ZSkgPiBlbnZpcm9ubWVudC50ZXJtTWF4XG4gICAgICAgICAgICA/IGVudmlyb25tZW50LnRlcm1NYXggOiBOdW1iZXIodGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgc3dpdGNoICh0YXJnZXQubmFtZSkge1xuICAgICAgICAgICAgY2FzZSAncHJpY2UnOlxuICAgICAgICAgICAgICAgIHRoaXMucHJpY2UgPSBwcmljZSA8IGVudmlyb25tZW50LnByaWNlTWluXG4gICAgICAgICAgICAgICAgICAgID8gZW52aXJvbm1lbnQucHJpY2VNaW4gOiBwcmljZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2ZlZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5mZWUgPSBmZWUgPCBlbnZpcm9ubWVudC5mZWVNaW5cbiAgICAgICAgICAgICAgICAgICAgPyBlbnZpcm9ubWVudC5mZWVNaW4gOiBmZWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0ZXJtJzpcbiAgICAgICAgICAgICAgICB0aGlzLnRlcm0gPSB0ZXJtIDwgZW52aXJvbm1lbnQudGVybU1pblxuICAgICAgICAgICAgICAgICAgICA/IGVudmlyb25tZW50LnRlcm1NaW4gOiB0ZXJtO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbmRlckluaXRpYWxGZWUoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJPdXRwdXRQYXltZW50KCk7XG4gICAgICAgIHRoaXMucmVuZGVyT3V0cHV0U3VtKCk7XG4gICAgfVxuICAgIHN1Ym1pdFJlcXVlc3QodGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0LmlkICE9PSAnc3VibWl0UmVxdWVzdCcgfHwgdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIGNvbnN0IG15SGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICAgICAgICBteUhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgICAgICAgbXlIZWFkZXJzLmFwcGVuZCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgICAgICAgIGNvbnN0IHJhdyA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBwcmljZTogdGhpcy5wcmljZSxcbiAgICAgICAgICAgICAgICBmZWU6IHRoaXMuZmVlLFxuICAgICAgICAgICAgICAgIHRlcm06IHRoaXMudGVybSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogbXlIZWFkZXJzLFxuICAgICAgICAgICAgICAgIGJvZHk6IHJhdyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB5aWVsZCBmZXRjaChlbnZpcm9ubWVudC5iYXNlVXJsLCByZXF1ZXN0T3B0aW9ucyk7XG4gICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNhbGNJbml0aWFsRmVlKCkge1xuICAgICAgICBjb25zdCBmZWVDYWxjdWxhdGVkID0gTWF0aC5yb3VuZCh0aGlzLnByaWNlICogKHRoaXMuZmVlIC8gMTAwKSk7XG4gICAgICAgIHJldHVybiBmZWVDYWxjdWxhdGVkO1xuICAgIH1cbiAgICBjYWxjT3V0cHV0U3VtKCkge1xuICAgICAgICBjb25zdCBzdW0gPSB0aGlzLmZlZUNhbGN1bGF0ZWQgKyAodGhpcy50ZXJtICogdGhpcy5wYXltZW50KTtcbiAgICAgICAgcmV0dXJuIHN1bTtcbiAgICB9XG4gICAgY2FsY091dHB1dFBheW1lbnQoKSB7XG4gICAgICAgIGNvbnN0IGludGVyZXN0UmF0ZSA9IGVudmlyb25tZW50LmludGVyZXN0UmF0ZSAvIDEwMDtcbiAgICAgICAgY29uc3QgcGF5bWVudCA9ICh0aGlzLnByaWNlIC0gdGhpcy5mZWVDYWxjdWxhdGVkKVxuICAgICAgICAgICAgKiAoKGludGVyZXN0UmF0ZSAqICgoMSArIGludGVyZXN0UmF0ZSkgKiogdGhpcy50ZXJtKSlcbiAgICAgICAgICAgICAgICAvICgoKDEgKyBpbnRlcmVzdFJhdGUpICoqIHRoaXMudGVybSkgLSAxKSk7XG4gICAgICAgIHJldHVybiBwYXltZW50O1xuICAgIH1cbiAgICByZW5kZXJJbml0aWFsRmVlKCkge1xuICAgICAgICBjb25zdCBmZWVDYWxjdWxhdGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZlZUNhbGN1bGF0ZWQnKTtcbiAgICAgICAgdGhpcy5mZWVDYWxjdWxhdGVkID0gdGhpcy5jYWxjSW5pdGlhbEZlZSgpO1xuICAgICAgICBmZWVDYWxjdWxhdGVkLmlubmVyVGV4dCA9IFN0cmluZyhNYXRoLnJvdW5kKHRoaXMuZmVlQ2FsY3VsYXRlZCkpO1xuICAgIH1cbiAgICByZW5kZXJPdXRwdXRQYXltZW50KCkge1xuICAgICAgICBjb25zdCBvdXRwdXRQYXltZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ291dHB1dFBheW1lbnQnKTtcbiAgICAgICAgdGhpcy5wYXltZW50ID0gdGhpcy5jYWxjT3V0cHV0UGF5bWVudCgpO1xuICAgICAgICBvdXRwdXRQYXltZW50LmlubmVySFRNTCA9IGAke1N0cmluZyhNYXRoLnJvdW5kKHRoaXMucGF5bWVudCkpfSA8c3Bhbj7igr08L3NwYW4+YDtcbiAgICB9XG4gICAgcmVuZGVyT3V0cHV0U3VtKCkge1xuICAgICAgICBjb25zdCBvdXRwdXRTdW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3V0cHV0U3VtJyk7XG4gICAgICAgIHRoaXMuc3VtID0gdGhpcy5jYWxjT3V0cHV0U3VtKCk7XG4gICAgICAgIG91dHB1dFN1bS5pbm5lckhUTUwgPSBgJHtTdHJpbmcoTWF0aC5yb3VuZCh0aGlzLnN1bSkpfSA8c3Bhbj7igr08L3NwYW4+YDtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UtY29udGVudCcpO1xuICAgICAgICBjb25zdCBwcmljZVBlcmNlbnRhZ2UgPSAoKHRoaXMucHJpY2UgLSBlbnZpcm9ubWVudC5wcmljZU1pbilcbiAgICAgICAgICAgIC8gKGVudmlyb25tZW50LnByaWNlTWF4IC0gZW52aXJvbm1lbnQucHJpY2VNaW4pKSAqIDEwMDtcbiAgICAgICAgY29uc3QgZmVlUGVyY2VudGFnZSA9ICgodGhpcy5mZWUgLSBlbnZpcm9ubWVudC5mZWVNaW4pXG4gICAgICAgICAgICAvIChlbnZpcm9ubWVudC5mZWVNYXggLSBlbnZpcm9ubWVudC5mZWVNaW4pKSAqIDEwMDtcbiAgICAgICAgY29uc3QgdGVybVBlcmNlbnRhZ2UgPSAoKHRoaXMudGVybSAtIGVudmlyb25tZW50LnRlcm1NaW4pXG4gICAgICAgICAgICAvIChlbnZpcm9ubWVudC50ZXJtTWF4IC0gZW52aXJvbm1lbnQudGVybU1pbikpICogMTAwO1xuICAgICAgICBpZiAobWFpbikge1xuICAgICAgICAgICAgbWFpbi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY2FsY1wiPlxuICAgICAgICAgIDxmb3JtIGNsYXNzPVwiY2FsY19fZm9ybVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1fX2ZpZWxkXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcmljZVwiIGNsYXNzPVwiZmllbGRfX2xhYmVsXCI+0KHRgtC+0LjQvNC+0YHRgtGMINCw0LLRgtC+0LzQvtCx0LjQu9GPPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkX193cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwicHJpY2VcIiBjbGFzcz1cImZpZWxkX190ZXh0IGZpZWxkX19pbnB1dFwiIGlkPVwicHJpY2VUZXh0XCIgdmFsdWU9XCIke3RoaXMucHJpY2V9XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkX191bml0IHByaWNlLXVuaXRcIj7igr08L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBjbGFzcz1cImZpZWxkX19yYW5nZVwiIGlkPVwicHJpY2VSYW5nZVwiIHZhbHVlPVwiJHt0aGlzLnByaWNlfVwiIG1pbj1cIiR7ZW52aXJvbm1lbnQucHJpY2VNaW59XCIgbWF4PVwiJHtlbnZpcm9ubWVudC5wcmljZU1heH1cIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI0ZGOTUxNCAke3ByaWNlUGVyY2VudGFnZX0lLCB0cmFuc3BhcmVudCAke3ByaWNlUGVyY2VudGFnZX0lKVwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybV9fZmllbGRcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImZlZVwiIGNsYXNzPVwiZmllbGRfX2xhYmVsXCI+0J/QtdGA0LLQvtC90LDRh9Cw0LvRjNC90YvQuSDQstC30L3QvtGBPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkX193cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkX190ZXh0XCIgaWQ9XCJmZWVDYWxjdWxhdGVkXCI+JHt0aGlzLmZlZUNhbGN1bGF0ZWR9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCIke3RoaXMuZmVlfSVcIiBuYW1lPVwiZmVlXCIgY2xhc3M9XCJmaWVsZF9fdW5pdCBmaWVsZF9fdGV4dCBmaWVsZF9faW5wdXQgZmVlLXVuaXRcIiBpZD1cImZlZVRleHRcIj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBjbGFzcz1cImZpZWxkX19yYW5nZVwiIGlkPVwiZmVlUmFuZ2VcIiB2YWx1ZT1cIiR7dGhpcy5mZWV9XCJtaW49XCIke2Vudmlyb25tZW50LmZlZU1pbn1cIiBtYXg9XCIke2Vudmlyb25tZW50LmZlZU1heH1cIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI0ZGOTUxNCAke2ZlZVBlcmNlbnRhZ2V9JSwgdHJhbnNwYXJlbnQgJHtmZWVQZXJjZW50YWdlfSUpXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtX19maWVsZFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGVybVwiIGNsYXNzPVwiZmllbGRfX2xhYmVsXCI+0KHRgNC+0Log0LvQuNC30LjQvdCz0LA8L2xhYmVsPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRfX3dyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJ0ZXJtXCIgY2xhc3M9XCJmaWVsZF9fdGV4dCBmaWVsZF9faW5wdXRcIiBpZD1cInRlcm1UZXh0XCIgdmFsdWU9XCIke3RoaXMudGVybX1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRfX3VuaXQgdGVybS11bml0XCI+0LzQtdGBLjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIGNsYXNzPVwiZmllbGRfX3JhbmdlXCIgaWQ9XCJ0ZXJtUmFuZ2VcIiB2YWx1ZT1cIiR7dGhpcy50ZXJtfVwiIG1pbj1cIiR7ZW52aXJvbm1lbnQudGVybU1pbn1cIiBtYXg9XCIke2Vudmlyb25tZW50LnRlcm1NYXh9XCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNGRjk1MTQgJHt0ZXJtUGVyY2VudGFnZX0lLCB0cmFuc3BhcmVudCAke3Rlcm1QZXJjZW50YWdlfSUpXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhbGNfX3Jlc3VsdFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0X19sYWJlbFwiID5cbiAgICAgICAgICAgICAgICDQodGD0LzQvNCwINC00L7Qs9C+0LLQvtGA0LAg0LvQuNC30LjQvdCz0LBcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHRfX291dHB1dFwiIGlkPVwib3V0cHV0U3VtXCI+XG4gICAgICAgICAgICAgICAgJHtNYXRoLnJvdW5kKHRoaXMuc3VtKX0gPHNwYW4+4oK9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0X19sYWJlbFwiPlxuICAgICAgICAgICAgICAgINCV0LbQtdC80LXRgdGP0YfQvdGL0Lkg0L/Qu9Cw0YLQtdC2INC+0YJcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHRfX291dHB1dFwiIGlkPVwib3V0cHV0UGF5bWVudFwiPlxuICAgICAgICAgICAgICAgICR7TWF0aC5yb3VuZCh0aGlzLnBheW1lbnQpfSA8c3Bhbj7igr08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInN1Ym1pdFwiIGlkPVwic3VibWl0UmVxdWVzdFwiPtCe0YHRgtCw0LLQuNGC0Ywg0LfQsNGP0LLQutGDPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIGA7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBDYWxjO1xuIiwiY29uc3QgZW52aXJvbm1lbnQgPSB7XG4gICAgYmFzZVVybDogJ2h0dHBzOi8vZW9qM3I3ZjNyNGVmNnY0Lm0ucGlwZWRyZWFtLm5ldCcsXG4gICAgcHJpY2VNaW46IDEwMDAwMDAsXG4gICAgcHJpY2VNYXg6IDYwMDAwMDAsXG4gICAgcHJpY2VEZWZhdWx0OiAzMzAwMDAwLFxuICAgIGZlZU1pbjogMTAsXG4gICAgZmVlTWF4OiA2MCxcbiAgICBmZWVEZWZhdWx0OiAxMyxcbiAgICB0ZXJtTWluOiAxLFxuICAgIHRlcm1NYXg6IDYwLFxuICAgIHRlcm1EZWZhdWx0OiA2MCxcbiAgICBpbnRlcmVzdFJhdGU6IDMuNSxcbn07XG5leHBvcnQgZGVmYXVsdCBlbnZpcm9ubWVudDtcbiIsImZ1bmN0aW9uIGZpbGxJbnB1dFRyYWNrKHRhcmdldCkge1xuICAgIGlmICghdGFyZ2V0LmlkLmluY2x1ZGVzKCdSYW5nZScpKVxuICAgICAgICByZXR1cm47XG4gICAgY29uc3QgeyBzdHlsZSB9ID0gdGFyZ2V0O1xuICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSAoKE51bWJlcih0YXJnZXQudmFsdWUpIC0gTnVtYmVyKHRhcmdldC5taW4pKVxuICAgICAgICAvIChOdW1iZXIodGFyZ2V0Lm1heCkgLSBOdW1iZXIodGFyZ2V0Lm1pbikpKSAqIDEwMDtcbiAgICBzdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjRkY5NTE0ICR7cGVyY2VudGFnZX0lLCB0cmFuc3BhcmVudCAke3BlcmNlbnRhZ2V9JSlgO1xufVxuZXhwb3J0IGRlZmF1bHQgZmlsbElucHV0VHJhY2s7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwL2FwcCc7XG5pbXBvcnQgJy4vcmVzb3VyY2VzL2Nzcy9yZXNldC5zY3NzJztcbmltcG9ydCAnLi9yZXNvdXJjZXMvY3NzL3N0eWxlcy5zY3NzJztcbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcbmFwcC5yZW5kZXIoKTtcbmFwcC5saXN0ZW4oKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==