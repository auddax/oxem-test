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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  display: flex;\n  min-height: 100vh;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0 47px;\n}\n@media screen and (max-width: 768px) {\n  body {\n    margin: 64px 36px 156px;\n  }\n}\n@media screen and (max-width: 320px) {\n  body {\n    margin: 44px 20px 64px;\n  }\n}\n\n.calc {\n  width: 100%;\n}\n.calc .calc__form {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 32px;\n  justify-content: space-between;\n}\n.calc .calc__form .form__field {\n  display: flex;\n  flex-direction: column;\n  width: 427px;\n}\n.calc .calc__form .form__field .field__label {\n  color: #575757;\n  font-family: \"Gilroy\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 20px;\n  margin: 0 0 24px;\n}\n@media screen and (max-width: 320px) {\n  .calc .calc__form .form__field .field__label {\n    margin: 0 0 8px;\n  }\n}\n.calc .calc__form .form__field .field__wrapper {\n  position: relative;\n  width: 100%;\n}\n.calc .calc__form .form__field .field__wrapper .field__text {\n  margin: 0;\n  padding: 16px 24px;\n  border: 0;\n  width: 100%;\n  box-sizing: border-box;\n  background-color: #F3F3F4;\n  border-radius: 1rem;\n  height: 4.25rem;\n  color: #575757;\n  font-family: \"Nekst\", sans-serif;\n  font-style: normal;\n  font-weight: 900;\n  font-size: 30px;\n  line-height: 36px;\n}\n.calc .calc__form .form__field .field__wrapper .field__text:focus {\n  outline: none;\n  border: 1px solid #F3F3F4;\n  background-color: #FFFFFF;\n}\n@media screen and (max-width: 320px) {\n  .calc .calc__form .form__field .field__wrapper .field__text {\n    height: 60px;\n    padding: 20px;\n    font-size: 22px;\n    line-height: 20px;\n  }\n}\n.calc .calc__form .form__field .field__wrapper .field__unit {\n  position: absolute;\n  color: #575757;\n  font-family: \"Nekst\", sans-serif;\n  font-style: normal;\n  font-weight: 900;\n  font-size: 30px;\n  line-height: 36px;\n  text-align: center;\n  z-index: 10;\n}\n.calc .calc__form .form__field .field__wrapper .field__unit.price-unit {\n  position: absolute;\n  height: 36px;\n  width: 20px;\n  top: 16px;\n  right: 16px;\n}\n.calc .calc__form .form__field .field__wrapper .field__unit.fee-unit {\n  position: absolute;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 15px 17px;\n  font-size: 20px;\n  line-height: 120%;\n  height: 54px;\n  width: 73px;\n  top: 7px;\n  right: 7px;\n  border-radius: 16px;\n  background-color: #EBEBEC;\n}\n@media screen and (max-width: 320px) {\n  .calc .calc__form .form__field .field__wrapper .field__unit.fee-unit {\n    top: 6px;\n    right: 6px;\n    height: 48px;\n  }\n}\n.calc .calc__form .form__field .field__wrapper .field__unit.term-unit {\n  position: absolute;\n  height: 36px;\n  width: 63px;\n  top: 16px;\n  right: 24px;\n}\n@media screen and (max-width: 320px) {\n  .calc .calc__form .form__field .field__wrapper .field__unit {\n    font-size: 22px;\n    line-height: 28px;\n  }\n}\n.calc .calc__form .form__field input[type=range] {\n  position: relative;\n  z-index: 10;\n  top: -10px;\n  width: calc(100% - 48px);\n  margin: 9px auto;\n  background-color: #F3F3F4;\n  height: 2px;\n  -webkit-appearance: none;\n}\n.calc .calc__form .form__field input[type=range]:focus {\n  outline: none;\n}\n.calc .calc__form .form__field input[type=range]::-webkit-slider-runnable-track {\n  border: 0.2px solid rgba(0, 0, 0, 0);\n  border-radius: 1.3px;\n  width: 100%;\n  height: 2px;\n  cursor: pointer;\n}\n.calc .calc__form .form__field input[type=range]::-webkit-slider-thumb {\n  margin-top: -9.2px;\n  width: 20px;\n  height: 20px;\n  -webkit-appearance: none;\n  background: #FF9514;\n  border: 0px solid rgba(0, 0, 0, 0);\n  border: 0;\n  border-radius: 10px;\n  cursor: pointer;\n}\n.calc .calc__form .form__field input[type=range]::-moz-range-track {\n  border: 0.2px solid rgba(0, 0, 0, 0);\n  border-radius: 1.3px;\n  width: 100%;\n  height: 2px;\n  cursor: pointer;\n}\n.calc .calc__form .form__field input[type=range]::-moz-range-progress {\n  background-color: #FF9514;\n}\n.calc .calc__form .form__field input[type=range]::-moz-range-thumb {\n  width: 20px;\n  height: 20px;\n  background: #FF9514;\n  border: 0px solid rgba(0, 0, 0, 0);\n  border: 0;\n  border-radius: 10px;\n  cursor: pointer;\n}\n.calc .calc__form .form__field input[type=range]::-ms-track {\n  background: transparent;\n  border-color: transparent;\n  border-width: 10px 0;\n  color: transparent;\n  width: 100%;\n  height: 2px;\n  cursor: pointer;\n}\n.calc .calc__form .form__field input[type=range]::-ms-fill-lower {\n  background: #FF9514;\n  border: 0.2px solid rgba(0, 0, 0, 0);\n  border-radius: 2.6px;\n}\n.calc .calc__form .form__field input[type=range]::-ms-fill-upper {\n  background: #F3F3F4;\n  border: 0.2px solid rgba(0, 0, 0, 0);\n  border-radius: 2.6px;\n}\n.calc .calc__form .form__field input[type=range]::-ms-thumb {\n  width: 20px;\n  height: 20px;\n  background: #FF9514;\n  border: 0px solid rgba(0, 0, 0, 0);\n  border: 0;\n  border-radius: 10px;\n  cursor: pointer;\n  margin-top: 0px;\n}\n.calc .calc__form .form__field input[type=range]:focus::-ms-fill-lower {\n  background: #FF9514;\n}\n.calc .calc__form .form__field input[type=range]:focus::-ms-fill-upper {\n  background: #F3F3F4;\n}\n@media screen and (max-width: 1024px) {\n  .calc .calc__form .form__field {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 1024px) {\n  .calc .calc__form {\n    flex-direction: column;\n  }\n}\n.calc .calc__result {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 32px;\n  align-items: center;\n  justify-content: space-between;\n}\n.calc .calc__result .result {\n  flex-grow: 1;\n  max-width: 427px;\n}\n.calc .calc__result .result .result__label {\n  font-family: \"Gilroy\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 150%;\n  margin: 0 0 8px;\n}\n.calc .calc__result .result .result__output {\n  color: #333333;\n  font-family: \"Nekst\", sans-serif;\n  font-style: normal;\n  font-weight: 900;\n  font-size: 54px;\n  line-height: 90%;\n}\n@media screen and (max-width: 320px) {\n  .calc .calc__result .result .result__output {\n    font-size: 22px;\n    line-height: 20px;\n  }\n}\n.calc .calc__result .submit {\n  flex-grow: 1;\n  max-width: 427px;\n  font-family: \"Nekst\", sans-serif;\n  font-style: normal;\n  font-weight: 900;\n  font-size: 30px;\n  line-height: 36px;\n  background-color: #FF9514;\n  border-radius: 40px;\n  color: #FFFFFF;\n  height: 68px;\n  border: 0;\n  cursor: pointer;\n}\n.calc .calc__result .submit:hover {\n  background-color: #111111;\n  color: #FFFFFF;\n}\n.calc .calc__result .submit:active {\n  background-color: #575757;\n  color: #FFFFFF;\n}\n.calc .calc__result .submit.disabled {\n  background-color: rgba(255, 149, 20, 0.4);\n}\n@media screen and (max-width: 1024px) {\n  .calc .calc__result .submit {\n    margin: 0 200px 0 0;\n    max-width: 345px;\n  }\n}\n@media screen and (max-width: 320px) {\n  .calc .calc__result .submit {\n    margin: 0;\n    max-width: 345px;\n    min-width: 280px;\n    font-size: 22px;\n    line-height: 20px;\n    height: 60px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/components/Calc/calc.scss"],"names":[],"mappings":"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","sourcesContent":["$font-primary: 'Nekst', sans-serif;\n$font-secondary: 'Gilroy', sans-serif;\n\n$color-input-medium: #FF9514;\n$color-input-light: rgba(255, 149, 20, 0.4);\n$color-text-dark: #111111;\n$color-text-strong: #333333;\n$color-text-medium: #575757;\n$color-text-light: #F3F3F4;\n\n$screen-large: 1024px;\n$screen-medium: 768px;\n$screen-small: 320px;\n\nbody {\n  display: flex;\n  min-height: 100vh;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0 47px;\n\n  @media screen and (max-width: $screen-medium) {\n    margin: 64px 36px 156px;\n  }\n\n  @media screen and (max-width: $screen-small) {\n    margin: 44px 20px 64px;\n  }\n}\n\n.calc {\n  width: 100%;\n\n  .calc__form {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 32px;\n    justify-content: space-between;\n  \n    .form__field {\n      display: flex;\n      flex-direction: column;\n      width: 427px;\n\n      .field__label {\n        color: $color-text-medium;\n        font-family: $font-secondary;\n        font-style: normal;\n        font-weight: 400;\n        font-size: 1rem;\n        line-height: 20px;\n        margin: 0 0 24px;\n\n        @media screen and (max-width: $screen-small) {\n          margin: 0 0 8px;\n         }\n\n      }\n\n      .field__wrapper {\n        position: relative;\n        width: 100%;\n\n        .field__text {\n          margin: 0;\n          padding: 16px 24px;\n          border: 0;\n          width: 100%;\n          box-sizing: border-box;\n          background-color: $color-text-light;\n          border-radius: 1rem;\n          height: 4.25rem;\n          color: $color-text-medium;\n          font-family: $font-primary;\n          font-style: normal;\n          font-weight: 900;\n          font-size: 30px;\n          line-height: 36px;\n\n          &:focus {\n            outline: none;\n            border: 1px solid #F3F3F4;\n            background-color: #FFFFFF;\n          }\n\n          @media screen and (max-width: $screen-small) {\n            height: 60px;\n            padding: 20px;\n            font-size: 22px;\n            line-height: 20px;\n           }\n        }\n  \n        .field__unit {\n          position: absolute;\n          color: $color-text-medium;\n          font-family: $font-primary;\n          font-style: normal;\n          font-weight: 900;\n          font-size: 30px;\n          line-height: 36px;\n          text-align: center;\n          z-index: 10;\n  \n          &.price-unit {\n            position: absolute;\n            height: 36px;\n            width: 20px;\n            top: 16px;\n            right: 16px;\n          }\n\n          &.fee-unit {\n            position: absolute;\n            box-sizing: border-box;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            padding: 15px 17px;\n            font-size: 20px;\n            line-height: 120%;\n            height: 54px;\n            width: 73px;\n            top: 7px;\n            right: 7px;\n            border-radius: 16px;\n            background-color: #EBEBEC;\n\n            @media screen and (max-width: $screen-small) {\n              top: 6px;\n              right: 6px;\n              height: 48px;\n             }\n  \n          }\n\n          &.term-unit {\n            position: absolute;\n            height: 36px;\n            width: 63px;\n            top: 16px;\n            right: 24px;\n          }\n\n          @media screen and (max-width: $screen-small) {\n            font-size: 22px;\n            line-height: 28px;\n           }\n        }  \n      }\n\n      input[type=range] {\n        position: relative;\n        z-index: 10;\n        top: -10px;\n        width: calc(100% - 48px);\n        margin: 9px auto;\n        background-color: $color-text-light;\n        height: 2px;\n        -webkit-appearance: none;\n      }\n      \n      input[type=range]:focus {\n        outline: none;\n      }\n      \n      input[type=range]::-webkit-slider-runnable-track {\n        border: 0.2px solid rgba(0, 0, 0, 0);\n        border-radius: 1.3px;\n        width: 100%;\n        height: 2px;\n        cursor: pointer;\n      }\n      \n      input[type=range]::-webkit-slider-thumb {\n        margin-top: -9.2px;\n        width: 20px;\n        height: 20px;\n        -webkit-appearance: none;\n        background: $color-input-medium;\n        border: 0px solid rgba(0, 0, 0, 0);\n        border: 0;\n        border-radius: 10px;\n        cursor: pointer;\n      }\n\n      input[type=range]::-moz-range-track {\n        border: 0.2px solid rgba(0, 0, 0, 0);\n        border-radius: 1.3px;\n        width: 100%;\n        height: 2px;\n        cursor: pointer;\n      }\n\n      input[type=\"range\"]::-moz-range-progress {\n        background-color: $color-input-medium; \n      }\n  \n      input[type=range]::-moz-range-thumb {\n        width: 20px;\n        height: 20px;\n        background: $color-input-medium;\n        border: 0px solid rgba(0, 0, 0, 0);\n        border: 0;\n        border-radius: 10px;\n        cursor: pointer;\n      }\n      \n      input[type=range]::-ms-track {\n        background: transparent;\n        border-color: transparent;\n        border-width: 10px 0;\n        color: transparent;\n        width: 100%;\n        height: 2px;\n        cursor: pointer;\n      }\n      \n      input[type=range]::-ms-fill-lower {\n        background: $color-input-medium;\n        border: 0.2px solid rgba(0, 0, 0, 0);\n        border-radius: 2.6px;\n      }\n      \n      input[type=range]::-ms-fill-upper {\n        background: $color-text-light;\n        border: 0.2px solid rgba(0, 0, 0, 0);\n        border-radius: 2.6px;\n      }\n      \n      input[type=range]::-ms-thumb {\n        width: 20px;\n        height: 20px;\n        background: $color-input-medium;\n        border: 0px solid rgba(0, 0, 0, 0);\n        border: 0;\n        border-radius: 10px;\n        cursor: pointer;\n        margin-top: 0px;\n      }\n      \n      input[type=range]:focus::-ms-fill-lower {\n        background: $color-input-medium;\n      }\n      \n      input[type=range]:focus::-ms-fill-upper {\n        background: $color-text-light;\n      }\n\n      @media screen and (max-width: $screen-large) {\n        width: 100%;\n      }\n    }\n\n    @media screen and (max-width: $screen-large) {\n      flex-direction: column;\n     }\n  }\n\n  .calc__result {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 32px;\n    align-items: center;\n    justify-content: space-between;\n\n    .result {\n      flex-grow: 1;\n      max-width: 427px;\n\n      .result__label {\n        font-family: $font-secondary;\n        font-style: normal;\n        font-weight: 400;\n        font-size: 16px;\n        line-height: 150%;\n        margin: 0 0 8px;\n      }\n\n      .result__output {\n        color: $color-text-strong;\n        font-family: $font-primary;\n        font-style: normal;\n        font-weight: 900;\n        font-size: 54px;\n        line-height: 90%;\n\n        @media screen and (max-width: $screen-small) {\n          font-size: 22px;\n          line-height: 20px;\n        }\n      }\n    }\n  \n    .submit {\n      flex-grow: 1;\n      max-width: 427px;\n      font-family: $font-primary;\n      font-style: normal;\n      font-weight: 900;\n      font-size: 30px;\n      line-height: 36px;\n      background-color: $color-input-medium;\n      border-radius: 40px;\n      color: #FFFFFF;\n      height: 68px;\n      border: 0;\n      cursor: pointer;\n\n      &:hover {\n        background-color: $color-text-dark;\n        color: #FFFFFF;\n      }\n\n      &:active {\n        background-color: $color-text-medium;\n        color: #FFFFFF;\n      }\n\n      &.disabled {\n        background-color: $color-input-light;\n      }\n\n      @media screen and (max-width: $screen-large) {\n        margin: 0 200px 0 0;\n        max-width: 345px;\n       }\n\n       @media screen and (max-width: $screen-small) {\n        margin: 0;\n        max-width: 345px;\n        min-width: 280px;\n        font-size: 22px;\n        line-height: 20px;\n        height: 60px;\n       }\n    }  \n  }\n\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxNQUFNLE1BQU0sV0FBVyxXQUFXLEtBQUssS0FBSyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFlBQVksWUFBWSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxZQUFZLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxZQUFZLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLFlBQVksVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sWUFBWSxZQUFZLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsYUFBYSxZQUFZLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsWUFBWSxZQUFZLFdBQVcsVUFBVSxXQUFXLFlBQVksWUFBWSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxZQUFZLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxN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LGNBQWMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUjlCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBdUM7QUFDSDtBQUNDO0FBQ3JDLGdCQUFnQiwyREFBRztBQUNuQjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3hlbS10ZXN0Ly4vc3JjL2NvbXBvbmVudHMvQXBwL2FwcC5zY3NzIiwid2VicGFjazovL294ZW0tdGVzdC8uL3NyYy9jb21wb25lbnRzL0NhbGMvY2FsYy5zY3NzIiwid2VicGFjazovL294ZW0tdGVzdC8uL3NyYy9yZXNvdXJjZXMvY3NzL3Jlc2V0LnNjc3MiLCJ3ZWJwYWNrOi8vb3hlbS10ZXN0Ly4vc3JjL3Jlc291cmNlcy9jc3Mvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vb3hlbS10ZXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9veGVtLXRlc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL294ZW0tdGVzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL294ZW0tdGVzdC8uL3NyYy9jb21wb25lbnRzL0FwcC9hcHAuc2Nzcz82ZWI1Iiwid2VicGFjazovL294ZW0tdGVzdC8uL3NyYy9jb21wb25lbnRzL0NhbGMvY2FsYy5zY3NzPzc2OWUiLCJ3ZWJwYWNrOi8vb3hlbS10ZXN0Ly4vc3JjL3Jlc291cmNlcy9jc3MvcmVzZXQuc2Nzcz8zYTVlIiwid2VicGFjazovL294ZW0tdGVzdC8uL3NyYy9yZXNvdXJjZXMvY3NzL3N0eWxlcy5zY3NzPzljMmEiLCJ3ZWJwYWNrOi8vb3hlbS10ZXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL294ZW0tdGVzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb3hlbS10ZXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL294ZW0tdGVzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9veGVtLXRlc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9veGVtLXRlc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9veGVtLXRlc3QvLi9zcmMvY29tcG9uZW50cy9BcHAvYXBwLnRzIiwid2VicGFjazovL294ZW0tdGVzdC8uL3NyYy9jb21wb25lbnRzL0NhbGMvY2FsYy50cyIsIndlYnBhY2s6Ly9veGVtLXRlc3QvLi9zcmMvZW52aXJvbm1lbnQvZW52aXJvbm1lbnQudHMiLCJ3ZWJwYWNrOi8vb3hlbS10ZXN0Ly4vc3JjL3V0aWxzL3V0aWxzLnRzIiwid2VicGFjazovL294ZW0tdGVzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9veGVtLXRlc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb3hlbS10ZXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9veGVtLXRlc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9veGVtLXRlc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9veGVtLXRlc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9veGVtLXRlc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb3hlbS10ZXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL294ZW0tdGVzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb3hlbS10ZXN0Ly4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi8uLi9yZXNvdXJjZXMvZm9udHMvR2lscm95LVJlZ3VsYXIud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi8uLi9yZXNvdXJjZXMvZm9udHMvTmVrc3QtQmxhY2sud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDAgNDdweDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIGJvZHkge1xcbiAgICBtYXJnaW46IDY0cHggMzZweCAxNTZweDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBtYXJnaW46IDQ0cHggMjBweCA2NHB4O1xcbiAgfVxcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR2lscm95XFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOZWtzdFxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpO1xcbn1cXG4ucGFnZS1oZWFkZXIge1xcbiAgbWF4LXdpZHRoOiA3NTNweDtcXG4gIG1hcmdpbjogMCAwIDMycHg7XFxufVxcbi5wYWdlLWhlYWRlciBoMSB7XFxuICBmb250LWZhbWlseTogXFxcIk5la3N0XFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBmb250LXNpemU6IDU0cHg7XFxuICBsaW5lLWhlaWdodDogOTAlO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xcbiAgLnBhZ2UtaGVhZGVyIGgxIHtcXG4gICAgZm9udC1zaXplOiAzNHB4O1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9BcHAvYXBwLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBY0E7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQWJGO0FBZUU7RUFQRjtJQVFJLHVCQUFBO0VBWkY7QUFDRjtBQWNFO0VBWEY7SUFZSSxzQkFBQTtFQVhGO0FBQ0Y7O0FBY0E7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNERBQUE7QUFYRjtBQWNBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLDREQUFBO0FBWkY7QUFlQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFiRjtBQWVFO0VBQ0UsZ0NBL0NXO0VBZ0RYLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBYko7QUFlSTtFQU5GO0lBT0ksZUFBQTtFQVpKO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGZvbnQtcHJpbWFyeTogJ05la3N0Jywgc2Fucy1zZXJpZjtcXG4kZm9udC1zZWNvbmRhcnk6ICdHaWxyb3knLCBzYW5zLXNlcmlmO1xcblxcbiRjb2xvci1pbnB1dC1tZWRpdW06ICNGRjk1MTQ7XFxuJGNvbG9yLWlucHV0LWxpZ2h0OiByZ2JhKDI1NSwgMTQ5LCAyMCwgMC40KTtcXG4kY29sb3ItdGV4dC1kYXJrOiAjMTExMTExO1xcbiRjb2xvci10ZXh0LXN0cm9uZzogIzMzMzMzMztcXG4kY29sb3ItdGV4dC1tZWRpdW06ICM1NzU3NTc7XFxuJGNvbG9yLXRleHQtbGlnaHQ6ICNGM0YzRjQ7XFxuXFxuJHNjcmVlbi1sYXJnZTogMTAyNHB4O1xcbiRzY3JlZW4tbWVkaXVtOiA3NjhweDtcXG4kc2NyZWVuLXNtYWxsOiAzMjBweDtcXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMCA0N3B4O1xcblxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHNjcmVlbi1tZWRpdW0pIHtcXG4gICAgbWFyZ2luOiA2NHB4IDM2cHggMTU2cHg7XFxuICB9XFxuXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkc2NyZWVuLXNtYWxsKSB7XFxuICAgIG1hcmdpbjogNDRweCAyMHB4IDY0cHg7XFxuICB9XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdHaWxyb3knO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgc3JjOiB1cmwoLi4vLi4vcmVzb3VyY2VzL2ZvbnRzL0dpbHJveS1SZWd1bGFyLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdOZWtzdCc7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBzcmM6IHVybCguLi8uLi9yZXNvdXJjZXMvZm9udHMvTmVrc3QtQmxhY2sud29mZjIpIGZvcm1hdCgnd29mZjInKTtcXG59XFxuXFxuLnBhZ2UtaGVhZGVyIHtcXG4gIG1heC13aWR0aDogNzUzcHg7XFxuICBtYXJnaW46IDAgMCAzMnB4O1xcblxcbiAgaDEge1xcbiAgICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZm9udC1zaXplOiA1NHB4O1xcbiAgICBsaW5lLWhlaWdodDogOTAlO1xcblxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkc2NyZWVuLXNtYWxsKSB7XFxuICAgICAgZm9udC1zaXplOiAzNHB4O1xcbiAgICAgfVxcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMCA0N3B4O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgYm9keSB7XFxuICAgIG1hcmdpbjogNjRweCAzNnB4IDE1NnB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xcbiAgYm9keSB7XFxuICAgIG1hcmdpbjogNDRweCAyMHB4IDY0cHg7XFxuICB9XFxufVxcblxcbi5jYWxjIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uY2FsYyAuY2FsY19fZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAzMnB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uY2FsYyAuY2FsY19fZm9ybSAuZm9ybV9fZmllbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogNDI3cHg7XFxufVxcbi5jYWxjIC5jYWxjX19mb3JtIC5mb3JtX19maWVsZCAuZmllbGRfX2xhYmVsIHtcXG4gIGNvbG9yOiAjNTc1NzU3O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHaWxyb3lcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgbWFyZ2luOiAwIDAgMjRweDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcXG4gIC5jYWxjIC5jYWxjX19mb3JtIC5mb3JtX19maWVsZCAuZmllbGRfX2xhYmVsIHtcXG4gICAgbWFyZ2luOiAwIDAgOHB4O1xcbiAgfVxcbn1cXG4uY2FsYyAuY2FsY19fZm9ybSAuZm9ybV9fZmllbGQgLmZpZWxkX193cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uY2FsYyAuY2FsY19fZm9ybSAuZm9ybV9fZmllbGQgLmZpZWxkX193cmFwcGVyIC5maWVsZF9fdGV4dCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAxNnB4IDI0cHg7XFxuICBib3JkZXI6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGM0Y0O1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGhlaWdodDogNC4yNXJlbTtcXG4gIGNvbG9yOiAjNTc1NzU3O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOZWtzdFxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XFxufVxcbi5jYWxjIC5jYWxjX19mb3JtIC5mb3JtX19maWVsZCAuZmllbGRfX3dyYXBwZXIgLmZpZWxkX190ZXh0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRjNGM0Y0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcXG4gIC5jYWxjIC5jYWxjX19mb3JtIC5mb3JtX19maWVsZCAuZmllbGRfX3dyYXBwZXIgLmZpZWxkX190ZXh0IHtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgfVxcbn1cXG4uY2FsYyAuY2FsY19fZm9ybSAuZm9ybV9fZmllbGQgLmZpZWxkX193cmFwcGVyIC5maWVsZF9fdW5pdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb2xvcjogIzU3NTc1NztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmVrc3RcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgei1pbmRleDogMTA7XFxufVxcbi5jYWxjIC5jYWxjX19mb3JtIC5mb3JtX19maWVsZCAuZmllbGRfX3dyYXBwZXIgLmZpZWxkX191bml0LnByaWNlLXVuaXQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICB0b3A6IDE2cHg7XFxuICByaWdodDogMTZweDtcXG59XFxuLmNhbGMgLmNhbGNfX2Zvcm0gLmZvcm1fX2ZpZWxkIC5maWVsZF9fd3JhcHBlciAuZmllbGRfX3VuaXQuZmVlLXVuaXQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxNXB4IDE3cHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBsaW5lLWhlaWdodDogMTIwJTtcXG4gIGhlaWdodDogNTRweDtcXG4gIHdpZHRoOiA3M3B4O1xcbiAgdG9wOiA3cHg7XFxuICByaWdodDogN3B4O1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFQkVCRUM7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XFxuICAuY2FsYyAuY2FsY19fZm9ybSAuZm9ybV9fZmllbGQgLmZpZWxkX193cmFwcGVyIC5maWVsZF9fdW5pdC5mZWUtdW5pdCB7XFxuICAgIHRvcDogNnB4O1xcbiAgICByaWdodDogNnB4O1xcbiAgICBoZWlnaHQ6IDQ4cHg7XFxuICB9XFxufVxcbi5jYWxjIC5jYWxjX19mb3JtIC5mb3JtX19maWVsZCAuZmllbGRfX3dyYXBwZXIgLmZpZWxkX191bml0LnRlcm0tdW5pdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDM2cHg7XFxuICB3aWR0aDogNjNweDtcXG4gIHRvcDogMTZweDtcXG4gIHJpZ2h0OiAyNHB4O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xcbiAgLmNhbGMgLmNhbGNfX2Zvcm0gLmZvcm1fX2ZpZWxkIC5maWVsZF9fd3JhcHBlciAuZmllbGRfX3VuaXQge1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xcbiAgfVxcbn1cXG4uY2FsYyAuY2FsY19fZm9ybSAuZm9ybV9fZmllbGQgaW5wdXRbdHlwZT1yYW5nZV0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTA7XFxuICB0b3A6IC0xMHB4O1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDQ4cHgpO1xcbiAgbWFyZ2luOiA5cHggYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGM0YzRjQ7XFxuICBoZWlnaHQ6IDJweDtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuLmNhbGMgLmNhbGNfX2Zvcm0gLmZvcm1fX2ZpZWxkIGlucHV0W3R5cGU9cmFuZ2VdOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5jYWxjIC5jYWxjX19mb3JtIC5mb3JtX19maWVsZCBpbnB1dFt0eXBlPXJhbmdlXTo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xcbiAgYm9yZGVyOiAwLjJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xcbiAgYm9yZGVyLXJhZGl1czogMS4zcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY2FsYyAuY2FsY19fZm9ybSAuZm9ybV9fZmllbGQgaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXG4gIG1hcmdpbi10b3A6IC05LjJweDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgYmFja2dyb3VuZDogI0ZGOTUxNDtcXG4gIGJvcmRlcjogMHB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY2FsYyAuY2FsY19fZm9ybSAuZm9ybV9fZmllbGQgaW5wdXRbdHlwZT1yYW5nZV06Oi1tb3otcmFuZ2UtdHJhY2sge1xcbiAgYm9yZGVyOiAwLjJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xcbiAgYm9yZGVyLXJhZGl1czogMS4zcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY2FsYyAuY2FsY19fZm9ybSAuZm9ybV9fZmllbGQgaW5wdXRbdHlwZT1yYW5nZV06Oi1tb3otcmFuZ2UtcHJvZ3Jlc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOTUxNDtcXG59XFxuLmNhbGMgLmNhbGNfX2Zvcm0gLmZvcm1fX2ZpZWxkIGlucHV0W3R5cGU9cmFuZ2VdOjotbW96LXJhbmdlLXRodW1iIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYmFja2dyb3VuZDogI0ZGOTUxNDtcXG4gIGJvcmRlcjogMHB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY2FsYyAuY2FsY19fZm9ybSAuZm9ybV9fZmllbGQgaW5wdXRbdHlwZT1yYW5nZV06Oi1tcy10cmFjayB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItd2lkdGg6IDEwcHggMDtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jYWxjIC5jYWxjX19mb3JtIC5mb3JtX19maWVsZCBpbnB1dFt0eXBlPXJhbmdlXTo6LW1zLWZpbGwtbG93ZXIge1xcbiAgYmFja2dyb3VuZDogI0ZGOTUxNDtcXG4gIGJvcmRlcjogMC4ycHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDIuNnB4O1xcbn1cXG4uY2FsYyAuY2FsY19fZm9ybSAuZm9ybV9fZmllbGQgaW5wdXRbdHlwZT1yYW5nZV06Oi1tcy1maWxsLXVwcGVyIHtcXG4gIGJhY2tncm91bmQ6ICNGM0YzRjQ7XFxuICBib3JkZXI6IDAuMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XFxuICBib3JkZXItcmFkaXVzOiAyLjZweDtcXG59XFxuLmNhbGMgLmNhbGNfX2Zvcm0gLmZvcm1fX2ZpZWxkIGlucHV0W3R5cGU9cmFuZ2VdOjotbXMtdGh1bWIge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kOiAjRkY5NTE0O1xcbiAgYm9yZGVyOiAwcHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tdG9wOiAwcHg7XFxufVxcbi5jYWxjIC5jYWxjX19mb3JtIC5mb3JtX19maWVsZCBpbnB1dFt0eXBlPXJhbmdlXTpmb2N1czo6LW1zLWZpbGwtbG93ZXIge1xcbiAgYmFja2dyb3VuZDogI0ZGOTUxNDtcXG59XFxuLmNhbGMgLmNhbGNfX2Zvcm0gLmZvcm1fX2ZpZWxkIGlucHV0W3R5cGU9cmFuZ2VdOmZvY3VzOjotbXMtZmlsbC11cHBlciB7XFxuICBiYWNrZ3JvdW5kOiAjRjNGM0Y0O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gIC5jYWxjIC5jYWxjX19mb3JtIC5mb3JtX19maWVsZCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gIC5jYWxjIC5jYWxjX19mb3JtIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG59XFxuLmNhbGMgLmNhbGNfX3Jlc3VsdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAzMnB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmNhbGMgLmNhbGNfX3Jlc3VsdCAucmVzdWx0IHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIG1heC13aWR0aDogNDI3cHg7XFxufVxcbi5jYWxjIC5jYWxjX19yZXN1bHQgLnJlc3VsdCAucmVzdWx0X19sYWJlbCB7XFxuICBmb250LWZhbWlseTogXFxcIkdpbHJveVxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XFxuICBtYXJnaW46IDAgMCA4cHg7XFxufVxcbi5jYWxjIC5jYWxjX19yZXN1bHQgLnJlc3VsdCAucmVzdWx0X19vdXRwdXQge1xcbiAgY29sb3I6ICMzMzMzMzM7XFxuICBmb250LWZhbWlseTogXFxcIk5la3N0XFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBmb250LXNpemU6IDU0cHg7XFxuICBsaW5lLWhlaWdodDogOTAlO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xcbiAgLmNhbGMgLmNhbGNfX3Jlc3VsdCAucmVzdWx0IC5yZXN1bHRfX291dHB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICB9XFxufVxcbi5jYWxjIC5jYWxjX19yZXN1bHQgLnN1Ym1pdCB7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBtYXgtd2lkdGg6IDQyN3B4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOZWtzdFxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5NTE0O1xcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcXG4gIGNvbG9yOiAjRkZGRkZGO1xcbiAgaGVpZ2h0OiA2OHB4O1xcbiAgYm9yZGVyOiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY2FsYyAuY2FsY19fcmVzdWx0IC5zdWJtaXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTExMTtcXG4gIGNvbG9yOiAjRkZGRkZGO1xcbn1cXG4uY2FsYyAuY2FsY19fcmVzdWx0IC5zdWJtaXQ6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NzU3NTc7XFxuICBjb2xvcjogI0ZGRkZGRjtcXG59XFxuLmNhbGMgLmNhbGNfX3Jlc3VsdCAuc3VibWl0LmRpc2FibGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNDksIDIwLCAwLjQpO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gIC5jYWxjIC5jYWxjX19yZXN1bHQgLnN1Ym1pdCB7XFxuICAgIG1hcmdpbjogMCAyMDBweCAwIDA7XFxuICAgIG1heC13aWR0aDogMzQ1cHg7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XFxuICAuY2FsYyAuY2FsY19fcmVzdWx0IC5zdWJtaXQge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1heC13aWR0aDogMzQ1cHg7XFxuICAgIG1pbi13aWR0aDogMjgwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvQ2FsYy9jYWxjLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBY0E7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQWJGO0FBZUU7RUFQRjtJQVFJLHVCQUFBO0VBWkY7QUFDRjtBQWNFO0VBWEY7SUFZSSxzQkFBQTtFQVhGO0FBQ0Y7O0FBY0E7RUFDRSxXQUFBO0FBWEY7QUFhRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0FBWEo7QUFhSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFYTjtBQWFNO0VBQ0UsY0F0Q1k7RUF1Q1osaUNBN0NTO0VBOENULGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQVhSO0FBYVE7RUFURjtJQVVJLGVBQUE7RUFWUjtBQUNGO0FBY007RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFaUjtBQWNRO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQTdEUztFQThEVCxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQWpFVTtFQWtFVixnQ0F6RUs7RUEwRUwsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVpWO0FBY1U7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQVpaO0FBZVU7RUF0QkY7SUF1QkksWUFBQTtJQUNBLGFBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7RUFaVjtBQUNGO0FBZVE7RUFDRSxrQkFBQTtFQUNBLGNBeEZVO0VBeUZWLGdDQWhHSztFQWlHTCxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBYlY7QUFlVTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQWJaO0FBZ0JVO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQWRaO0FBZ0JZO0VBaEJGO0lBaUJJLFFBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtFQWJaO0FBQ0Y7QUFpQlU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFmWjtBQWtCVTtFQW5ERjtJQW9ESSxlQUFBO0lBQ0EsaUJBQUE7RUFmVjtBQUNGO0FBbUJNO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFySlc7RUFzSlgsV0FBQTtFQUNBLHdCQUFBO0FBakJSO0FBb0JNO0VBQ0UsYUFBQTtBQWxCUjtBQXFCTTtFQUNFLG9DQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFuQlI7QUFzQk07RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFoTGE7RUFpTGIsa0NBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBcEJSO0FBdUJNO0VBQ0Usb0NBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQXJCUjtBQXdCTTtFQUNFLHlCQWhNYTtBQTBLckI7QUF5Qk07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQXRNYTtFQXVNYixrQ0FBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUF2QlI7QUEwQk07RUFDRSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQXhCUjtBQTJCTTtFQUNFLG1CQXhOYTtFQXlOYixvQ0FBQTtFQUNBLG9CQUFBO0FBekJSO0FBNEJNO0VBQ0UsbUJBek5XO0VBME5YLG9DQUFBO0VBQ0Esb0JBQUE7QUExQlI7QUE2Qk07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQXRPYTtFQXVPYixrQ0FBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBM0JSO0FBOEJNO0VBQ0UsbUJBL09hO0FBbU5yQjtBQStCTTtFQUNFLG1CQTlPVztBQWlObkI7QUFnQ007RUFsTkY7SUFtTkksV0FBQTtFQTdCTjtBQUNGO0FBZ0NJO0VBN05GO0lBOE5JLHNCQUFBO0VBN0JKO0FBQ0Y7QUFnQ0U7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBOUJKO0FBZ0NJO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBOUJOO0FBZ0NNO0VBQ0UsaUNBOVFTO0VBK1FULGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBOUJSO0FBaUNNO0VBQ0UsY0FsUlk7RUFtUlosZ0NBelJPO0VBMFJQLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUEvQlI7QUFpQ1E7RUFSRjtJQVNJLGVBQUE7SUFDQSxpQkFBQTtFQTlCUjtBQUNGO0FBa0NJO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBelNTO0VBMFNULGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkEzU2U7RUE0U2YsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBaENOO0FBa0NNO0VBQ0UseUJBalRVO0VBa1RWLGNBQUE7QUFoQ1I7QUFtQ007RUFDRSx5QkFwVFk7RUFxVFosY0FBQTtBQWpDUjtBQW9DTTtFQUNFLHlDQTVUWTtBQTBScEI7QUFxQ007RUE3QkY7SUE4QkksbUJBQUE7SUFDQSxnQkFBQTtFQWxDTjtBQUNGO0FBb0NPO0VBbENIO0lBbUNJLFNBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsWUFBQTtFQWpDTjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiRmb250LXByaW1hcnk6ICdOZWtzdCcsIHNhbnMtc2VyaWY7XFxuJGZvbnQtc2Vjb25kYXJ5OiAnR2lscm95Jywgc2Fucy1zZXJpZjtcXG5cXG4kY29sb3ItaW5wdXQtbWVkaXVtOiAjRkY5NTE0O1xcbiRjb2xvci1pbnB1dC1saWdodDogcmdiYSgyNTUsIDE0OSwgMjAsIDAuNCk7XFxuJGNvbG9yLXRleHQtZGFyazogIzExMTExMTtcXG4kY29sb3ItdGV4dC1zdHJvbmc6ICMzMzMzMzM7XFxuJGNvbG9yLXRleHQtbWVkaXVtOiAjNTc1NzU3O1xcbiRjb2xvci10ZXh0LWxpZ2h0OiAjRjNGM0Y0O1xcblxcbiRzY3JlZW4tbGFyZ2U6IDEwMjRweDtcXG4kc2NyZWVuLW1lZGl1bTogNzY4cHg7XFxuJHNjcmVlbi1zbWFsbDogMzIwcHg7XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDAgNDdweDtcXG5cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRzY3JlZW4tbWVkaXVtKSB7XFxuICAgIG1hcmdpbjogNjRweCAzNnB4IDE1NnB4O1xcbiAgfVxcblxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHNjcmVlbi1zbWFsbCkge1xcbiAgICBtYXJnaW46IDQ0cHggMjBweCA2NHB4O1xcbiAgfVxcbn1cXG5cXG4uY2FsYyB7XFxuICB3aWR0aDogMTAwJTtcXG5cXG4gIC5jYWxjX19mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDMycHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIFxcbiAgICAuZm9ybV9fZmllbGQge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICB3aWR0aDogNDI3cHg7XFxuXFxuICAgICAgLmZpZWxkX19sYWJlbCB7XFxuICAgICAgICBjb2xvcjogJGNvbG9yLXRleHQtbWVkaXVtO1xcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LXNlY29uZGFyeTtcXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcXG4gICAgICAgIG1hcmdpbjogMCAwIDI0cHg7XFxuXFxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkc2NyZWVuLXNtYWxsKSB7XFxuICAgICAgICAgIG1hcmdpbjogMCAwIDhweDtcXG4gICAgICAgICB9XFxuXFxuICAgICAgfVxcblxcbiAgICAgIC5maWVsZF9fd3JhcHBlciB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgICAgIC5maWVsZF9fdGV4dCB7XFxuICAgICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgICAgcGFkZGluZzogMTZweCAyNHB4O1xcbiAgICAgICAgICBib3JkZXI6IDA7XFxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItdGV4dC1saWdodDtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgICAgICAgaGVpZ2h0OiA0LjI1cmVtO1xcbiAgICAgICAgICBjb2xvcjogJGNvbG9yLXRleHQtbWVkaXVtO1xcbiAgICAgICAgICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XFxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xcblxcbiAgICAgICAgICAmOmZvY3VzIHtcXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGM0YzRjQ7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkc2NyZWVuLXNtYWxsKSB7XFxuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgXFxuICAgICAgICAuZmllbGRfX3VuaXQge1xcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgIGNvbG9yOiAkY29sb3ItdGV4dC1tZWRpdW07XFxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XFxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgei1pbmRleDogMTA7XFxuICBcXG4gICAgICAgICAgJi5wcmljZS11bml0IHtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xcbiAgICAgICAgICAgIHRvcDogMTZweDtcXG4gICAgICAgICAgICByaWdodDogMTZweDtcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICAmLmZlZS11bml0IHtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgcGFkZGluZzogMTVweCAxN3B4O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTIwJTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDU0cHg7XFxuICAgICAgICAgICAgd2lkdGg6IDczcHg7XFxuICAgICAgICAgICAgdG9wOiA3cHg7XFxuICAgICAgICAgICAgcmlnaHQ6IDdweDtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFQkVCRUM7XFxuXFxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHNjcmVlbi1zbWFsbCkge1xcbiAgICAgICAgICAgICAgdG9wOiA2cHg7XFxuICAgICAgICAgICAgICByaWdodDogNnB4O1xcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xcbiAgICAgICAgICAgICB9XFxuICBcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICAmLnRlcm0tdW5pdCB7XFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIGhlaWdodDogMzZweDtcXG4gICAgICAgICAgICB3aWR0aDogNjNweDtcXG4gICAgICAgICAgICB0b3A6IDE2cHg7XFxuICAgICAgICAgICAgcmlnaHQ6IDI0cHg7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHNjcmVlbi1zbWFsbCkge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcXG4gICAgICAgICAgIH1cXG4gICAgICAgIH0gIFxcbiAgICAgIH1cXG5cXG4gICAgICBpbnB1dFt0eXBlPXJhbmdlXSB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB6LWluZGV4OiAxMDtcXG4gICAgICAgIHRvcDogLTEwcHg7XFxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNDhweCk7XFxuICAgICAgICBtYXJnaW46IDlweCBhdXRvO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXRleHQtbGlnaHQ7XFxuICAgICAgICBoZWlnaHQ6IDJweDtcXG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICB9XFxuICAgICAgXFxuICAgICAgaW5wdXRbdHlwZT1yYW5nZV06Zm9jdXMge1xcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICB9XFxuICAgICAgXFxuICAgICAgaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcXG4gICAgICAgIGJvcmRlcjogMC4ycHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEuM3B4O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDJweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB9XFxuICAgICAgXFxuICAgICAgaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IC05LjJweDtcXG4gICAgICAgIHdpZHRoOiAyMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yLWlucHV0LW1lZGl1bTtcXG4gICAgICAgIGJvcmRlcjogMHB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XFxuICAgICAgICBib3JkZXI6IDA7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIH1cXG5cXG4gICAgICBpbnB1dFt0eXBlPXJhbmdlXTo6LW1vei1yYW5nZS10cmFjayB7XFxuICAgICAgICBib3JkZXI6IDAuMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxLjNweDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAycHg7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgfVxcblxcbiAgICAgIGlucHV0W3R5cGU9XFxcInJhbmdlXFxcIl06Oi1tb3otcmFuZ2UtcHJvZ3Jlc3Mge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWlucHV0LW1lZGl1bTsgXFxuICAgICAgfVxcbiAgXFxuICAgICAgaW5wdXRbdHlwZT1yYW5nZV06Oi1tb3otcmFuZ2UtdGh1bWIge1xcbiAgICAgICAgd2lkdGg6IDIwcHg7XFxuICAgICAgICBoZWlnaHQ6IDIwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3ItaW5wdXQtbWVkaXVtO1xcbiAgICAgICAgYm9yZGVyOiAwcHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcXG4gICAgICAgIGJvcmRlcjogMDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgfVxcbiAgICAgIFxcbiAgICAgIGlucHV0W3R5cGU9cmFuZ2VdOjotbXMtdHJhY2sge1xcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxMHB4IDA7XFxuICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMnB4O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIH1cXG4gICAgICBcXG4gICAgICBpbnB1dFt0eXBlPXJhbmdlXTo6LW1zLWZpbGwtbG93ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yLWlucHV0LW1lZGl1bTtcXG4gICAgICAgIGJvcmRlcjogMC4ycHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIuNnB4O1xcbiAgICAgIH1cXG4gICAgICBcXG4gICAgICBpbnB1dFt0eXBlPXJhbmdlXTo6LW1zLWZpbGwtdXBwZXIge1xcbiAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yLXRleHQtbGlnaHQ7XFxuICAgICAgICBib3JkZXI6IDAuMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyLjZweDtcXG4gICAgICB9XFxuICAgICAgXFxuICAgICAgaW5wdXRbdHlwZT1yYW5nZV06Oi1tcy10aHVtYiB7XFxuICAgICAgICB3aWR0aDogMjBweDtcXG4gICAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci1pbnB1dC1tZWRpdW07XFxuICAgICAgICBib3JkZXI6IDBweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xcbiAgICAgICAgYm9yZGVyOiAwO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcXG4gICAgICB9XFxuICAgICAgXFxuICAgICAgaW5wdXRbdHlwZT1yYW5nZV06Zm9jdXM6Oi1tcy1maWxsLWxvd2VyIHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci1pbnB1dC1tZWRpdW07XFxuICAgICAgfVxcbiAgICAgIFxcbiAgICAgIGlucHV0W3R5cGU9cmFuZ2VdOmZvY3VzOjotbXMtZmlsbC11cHBlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3ItdGV4dC1saWdodDtcXG4gICAgICB9XFxuXFxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHNjcmVlbi1sYXJnZSkge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRzY3JlZW4tbGFyZ2UpIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgfVxcbiAgfVxcblxcbiAgLmNhbGNfX3Jlc3VsdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiAzMnB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAgIC5yZXN1bHQge1xcbiAgICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgICBtYXgtd2lkdGg6IDQyN3B4O1xcblxcbiAgICAgIC5yZXN1bHRfX2xhYmVsIHtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1zZWNvbmRhcnk7XFxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1MCU7XFxuICAgICAgICBtYXJnaW46IDAgMCA4cHg7XFxuICAgICAgfVxcblxcbiAgICAgIC5yZXN1bHRfX291dHB1dCB7XFxuICAgICAgICBjb2xvcjogJGNvbG9yLXRleHQtc3Ryb25nO1xcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICAgICAgZm9udC1zaXplOiA1NHB4O1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDkwJTtcXG5cXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRzY3JlZW4tc21hbGwpIHtcXG4gICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIFxcbiAgICAuc3VibWl0IHtcXG4gICAgICBmbGV4LWdyb3c6IDE7XFxuICAgICAgbWF4LXdpZHRoOiA0MjdweDtcXG4gICAgICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgICBmb250LXNpemU6IDMwcHg7XFxuICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWlucHV0LW1lZGl1bTtcXG4gICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgICAgIGNvbG9yOiAjRkZGRkZGO1xcbiAgICAgIGhlaWdodDogNjhweDtcXG4gICAgICBib3JkZXI6IDA7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXRleHQtZGFyaztcXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xcbiAgICAgIH1cXG5cXG4gICAgICAmOmFjdGl2ZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItdGV4dC1tZWRpdW07XFxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcXG4gICAgICB9XFxuXFxuICAgICAgJi5kaXNhYmxlZCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItaW5wdXQtbGlnaHQ7XFxuICAgICAgfVxcblxcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRzY3JlZW4tbGFyZ2UpIHtcXG4gICAgICAgIG1hcmdpbjogMCAyMDBweCAwIDA7XFxuICAgICAgICBtYXgtd2lkdGg6IDM0NXB4O1xcbiAgICAgICB9XFxuXFxuICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRzY3JlZW4tc21hbGwpIHtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIG1heC13aWR0aDogMzQ1cHg7XFxuICAgICAgICBtaW4td2lkdGg6IDI4MHB4O1xcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICAgICAgICBoZWlnaHQ6IDYwcHg7XFxuICAgICAgIH1cXG4gICAgfSAgXFxuICB9XFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAwIDQ3cHg7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICBib2R5IHtcXG4gICAgbWFyZ2luOiA2NHB4IDM2cHggMTU2cHg7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XFxuICBib2R5IHtcXG4gICAgbWFyZ2luOiA0NHB4IDIwcHggNjRweDtcXG4gIH1cXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBvYmplY3QsIGlmcmFtZSwgZmlndXJlLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsIGEsIGNvZGUsIGVtLCBpbWcsIHNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCBiLCB1LCBpLCBvbCwgdWwsIGxpLCBmaWVsZHNldCwgZm9ybSwgbGFiZWwsIHRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLCBtYWluLCBjYW52YXMsIGVtYmVkLCBmb290ZXIsIGhlYWRlciwgbmF2LCBzZWN0aW9uLCB2aWRlbyB7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgdGV4dC1zaXplLWFkanVzdDogbm9uZTtcXG59XFxuXFxuZm9vdGVyLCBoZWFkZXIsIG5hdiwgc2VjdGlvbiwgbWFpbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxub2wsIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGUsIHEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlciwgcTpiZWZvcmUsIHE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbmlucHV0IHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxufVxcblxcbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxcbmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaW5wdXRbdHlwZT1udW1iZXJdIHtcXG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcmVzb3VyY2VzL2Nzcy9yZXNldC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQWNBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFiRjtBQWVFO0VBUEY7SUFRSSx1QkFBQTtFQVpGO0FBQ0Y7QUFjRTtFQVhGO0lBWUksc0JBQUE7RUFYRjtBQUNGOztBQWNBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUFYRjs7QUFjQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esc0JBQUE7QUFYRjs7QUFjQTtFQUNFLGNBQUE7QUFYRjs7QUFjQTtFQUNFLGNBQUE7QUFYRjs7QUFjQTtFQUNFLGdCQUFBO0FBWEY7O0FBY0E7RUFDRSxZQUFBO0FBWEY7O0FBY0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQVhGOztBQWNBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQVhGOztBQWNBO0VBQ0Usd0JBQUE7RUFDQSxnQkFBQTtBQVhGOztBQWNBOztFQUVFLHdCQUFBO0VBQ0EsU0FBQTtBQVhGOztBQWNBO0VBQ0UsMEJBQUE7QUFYRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkZm9udC1wcmltYXJ5OiAnTmVrc3QnLCBzYW5zLXNlcmlmO1xcbiRmb250LXNlY29uZGFyeTogJ0dpbHJveScsIHNhbnMtc2VyaWY7XFxuXFxuJGNvbG9yLWlucHV0LW1lZGl1bTogI0ZGOTUxNDtcXG4kY29sb3ItaW5wdXQtbGlnaHQ6IHJnYmEoMjU1LCAxNDksIDIwLCAwLjQpO1xcbiRjb2xvci10ZXh0LWRhcms6ICMxMTExMTE7XFxuJGNvbG9yLXRleHQtc3Ryb25nOiAjMzMzMzMzO1xcbiRjb2xvci10ZXh0LW1lZGl1bTogIzU3NTc1NztcXG4kY29sb3ItdGV4dC1saWdodDogI0YzRjNGNDtcXG5cXG4kc2NyZWVuLWxhcmdlOiAxMDI0cHg7XFxuJHNjcmVlbi1tZWRpdW06IDc2OHB4O1xcbiRzY3JlZW4tc21hbGw6IDMyMHB4O1xcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAwIDQ3cHg7XFxuXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkc2NyZWVuLW1lZGl1bSkge1xcbiAgICBtYXJnaW46IDY0cHggMzZweCAxNTZweDtcXG4gIH1cXG5cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRzY3JlZW4tc21hbGwpIHtcXG4gICAgbWFyZ2luOiA0NHB4IDIwcHggNjRweDtcXG4gIH1cXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBvYmplY3QsIGlmcmFtZSwgZmlndXJlLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsIGEsIGNvZGUsIGVtLCBpbWcsIHNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCBiLCB1LCBpLCBvbCwgdWwsIGxpLCBmaWVsZHNldCwgZm9ybSwgbGFiZWwsIHRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLCBtYWluLCBjYW52YXMsIGVtYmVkLCBmb290ZXIsIGhlYWRlciwgbmF2LCBzZWN0aW9uLCB2aWRlbyB7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgdGV4dC1zaXplLWFkanVzdDogbm9uZTtcXG59XFxuXFxuZm9vdGVyLCBoZWFkZXIsIG5hdiwgc2VjdGlvbiwgbWFpbntcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5ib2R5e1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm9sLCB1bHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGUsIHF7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLCBxOmJlZm9yZSwgcTphZnRlcntcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGV7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbmlucHV0e1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG59XFxuXFxuaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXFxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAwIDQ3cHg7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICBib2R5IHtcXG4gICAgbWFyZ2luOiA2NHB4IDM2cHggMTU2cHg7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XFxuICBib2R5IHtcXG4gICAgbWFyZ2luOiA0NHB4IDIwcHggNjRweDtcXG4gIH1cXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDAgNDdweDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIGJvZHkge1xcbiAgICBtYXJnaW46IDY0cHggMzZweCAxNTZweDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBtYXJnaW46IDQ0cHggMjBweCA2NHB4O1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcmVzb3VyY2VzL2Nzcy9zdHlsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFjQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBYkY7QUFlRTtFQVBGO0lBUUksdUJBQUE7RUFaRjtBQUNGO0FBY0U7RUFYRjtJQVlJLHNCQUFBO0VBWEY7QUFDRjs7QUE0QkE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQXpCRjtBQTJCRTtFQVBGO0lBUUksdUJBQUE7RUF4QkY7QUFDRjtBQTBCRTtFQVhGO0lBWUksc0JBQUE7RUF2QkY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkZm9udC1wcmltYXJ5OiAnTmVrc3QnLCBzYW5zLXNlcmlmO1xcbiRmb250LXNlY29uZGFyeTogJ0dpbHJveScsIHNhbnMtc2VyaWY7XFxuXFxuJGNvbG9yLWlucHV0LW1lZGl1bTogI0ZGOTUxNDtcXG4kY29sb3ItaW5wdXQtbGlnaHQ6IHJnYmEoMjU1LCAxNDksIDIwLCAwLjQpO1xcbiRjb2xvci10ZXh0LWRhcms6ICMxMTExMTE7XFxuJGNvbG9yLXRleHQtc3Ryb25nOiAjMzMzMzMzO1xcbiRjb2xvci10ZXh0LW1lZGl1bTogIzU3NTc1NztcXG4kY29sb3ItdGV4dC1saWdodDogI0YzRjNGNDtcXG5cXG4kc2NyZWVuLWxhcmdlOiAxMDI0cHg7XFxuJHNjcmVlbi1tZWRpdW06IDc2OHB4O1xcbiRzY3JlZW4tc21hbGw6IDMyMHB4O1xcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAwIDQ3cHg7XFxuXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkc2NyZWVuLW1lZGl1bSkge1xcbiAgICBtYXJnaW46IDY0cHggMzZweCAxNTZweDtcXG4gIH1cXG5cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRzY3JlZW4tc21hbGwpIHtcXG4gICAgbWFyZ2luOiA0NHB4IDIwcHggNjRweDtcXG4gIH1cXG59XFxuXFxuJGZvbnQtcHJpbWFyeTogJ05la3N0Jywgc2Fucy1zZXJpZjtcXG4kZm9udC1zZWNvbmRhcnk6ICdHaWxyb3knLCBzYW5zLXNlcmlmO1xcblxcbiRjb2xvci1pbnB1dC1tZWRpdW06ICNGRjk1MTQ7XFxuJGNvbG9yLWlucHV0LWxpZ2h0OiByZ2JhKDI1NSwgMTQ5LCAyMCwgMC40KTtcXG4kY29sb3ItdGV4dC1kYXJrOiAjMTExMTExO1xcbiRjb2xvci10ZXh0LXN0cm9uZzogIzMzMzMzMztcXG4kY29sb3ItdGV4dC1tZWRpdW06ICM1NzU3NTc7XFxuJGNvbG9yLXRleHQtbGlnaHQ6ICNGM0YzRjQ7XFxuXFxuJHNjcmVlbi1sYXJnZTogMTAyNHB4O1xcbiRzY3JlZW4tbWVkaXVtOiA3NjhweDtcXG4kc2NyZWVuLXNtYWxsOiAzMjBweDtcXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMCA0N3B4O1xcblxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHNjcmVlbi1tZWRpdW0pIHtcXG4gICAgbWFyZ2luOiA2NHB4IDM2cHggMTU2cHg7XFxuICB9XFxuXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkc2NyZWVuLXNtYWxsKSB7XFxuICAgIG1hcmdpbjogNDRweCAyMHB4IDY0cHg7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLXJlc291cmNlcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9hcHAuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1yZXNvdXJjZXMtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vYXBwLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1yZXNvdXJjZXMtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vY2FsYy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLXJlc291cmNlcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9jYWxjLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1yZXNvdXJjZXMtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vcmVzZXQuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1yZXNvdXJjZXMtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vcmVzZXQuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLXJlc291cmNlcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1yZXNvdXJjZXMtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IENhbGMgZnJvbSAnLi4vQ2FsYy9jYWxjJztcbmltcG9ydCAnLi9hcHAuc2Nzcyc7XG5jbGFzcyBBcHAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuICAgICAgICB0aGlzLmNhbGMgPSBuZXcgQ2FsYygpO1xuICAgIH1cbiAgICBsaXN0ZW4oKSB7XG4gICAgICAgIHRoaXMucm9vdC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgdGhpcy5jYWxjLmxpc3RlbklucHV0KHRhcmdldCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJvb3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgIHRoaXMuY2FsYy5saXN0ZW5DbGljayh0YXJnZXQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLnJvb3QuaW5uZXJIVE1MID0gYFxuICAgICAgPGhlYWRlciBjbGFzcz1cInBhZ2UtaGVhZGVyXCI+XG4gICAgICAgIDxoMT7QoNCw0YHRgdGH0LjRgtCw0LnRgtC1INGB0YLQvtC40LzQvtGB0YLRjCDQsNCy0YLQvtC80L7QsdC40LvRjyDQsiDQu9C40LfQuNC90LM8L2gxPlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8bWFpbiBjbGFzcz1cInBhZ2UtY29udGVudFwiPlxuICAgICAgPC9tYWluPlxuICAgIGA7XG4gICAgICAgIHRoaXMuY2FsYy5yZW5kZXIoKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCBlbnZpcm9ubWVudCBmcm9tICcuLi8uLi9lbnZpcm9ubWVudC9lbnZpcm9ubWVudCc7XG5pbXBvcnQgZmlsbElucHV0VHJhY2sgZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xuaW1wb3J0ICcuL2NhbGMuc2Nzcyc7XG5jbGFzcyBDYWxjIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wcmljZSA9IGVudmlyb25tZW50LnByaWNlRGVmYXVsdDtcbiAgICAgICAgdGhpcy5mZWUgPSBlbnZpcm9ubWVudC5mZWVEZWZhdWx0O1xuICAgICAgICB0aGlzLnRlcm0gPSBlbnZpcm9ubWVudC50ZXJtRGVmYXVsdDtcbiAgICAgICAgdGhpcy5mZWVDYWxjdWxhdGVkID0gdGhpcy5jYWxjSW5pdGlhbEZlZSgpO1xuICAgICAgICB0aGlzLnBheW1lbnQgPSB0aGlzLmNhbGNPdXRwdXRQYXltZW50KCk7XG4gICAgICAgIHRoaXMuc3VtID0gdGhpcy5jYWxjT3V0cHV0U3VtKCk7XG4gICAgfVxuICAgIGxpc3RlbklucHV0KHRhcmdldCkge1xuICAgICAgICB0aGlzLnJhbmdlSW5wdXRIYW5kZXIodGFyZ2V0KTtcbiAgICAgICAgdGhpcy50ZXh0SW5wdXRIYW5kbGVyKHRhcmdldCk7XG4gICAgICAgIGZpbGxJbnB1dFRyYWNrKHRhcmdldCk7XG4gICAgfVxuICAgIGxpc3RlbkNsaWNrKHRhcmdldCkge1xuICAgICAgICB0aGlzLnN1Ym1pdFJlcXVlc3QodGFyZ2V0KTtcbiAgICB9XG4gICAgcmFuZ2VJbnB1dEhhbmRlcih0YXJnZXQpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoIXRhcmdldC5pZC5pbmNsdWRlcygnUmFuZ2UnKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgdGFyZ2V0SWQgPSB0YXJnZXQuaWQ7XG4gICAgICAgIGNvbnN0IGdyb3VwUGFyZW50RWxlbWVudCA9IChfYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldElkKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHRleHRJbnB1dEVsZW1lbnQgPSBncm91cFBhcmVudEVsZW1lbnQgPT09IG51bGwgfHwgZ3JvdXBQYXJlbnRFbGVtZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBncm91cFBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmZpZWxkX19pbnB1dCcpO1xuICAgICAgICBpZiAodGFyZ2V0LmlkID09PSAnZmVlUmFuZ2UnKSB7XG4gICAgICAgICAgICB0ZXh0SW5wdXRFbGVtZW50LnZhbHVlID0gYCR7dGFyZ2V0LnZhbHVlfSVgO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGV4dElucHV0RWxlbWVudC52YWx1ZSA9IHRhcmdldC52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcmljZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaWNlVGV4dCcpO1xuICAgICAgICBjb25zdCBmZWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZWVUZXh0Jyk7XG4gICAgICAgIGNvbnN0IHJhbmdlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVybVRleHQnKTtcbiAgICAgICAgc3dpdGNoICh0ZXh0SW5wdXRFbGVtZW50Lm5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3ByaWNlJzpcbiAgICAgICAgICAgICAgICB0aGlzLnByaWNlID0gTnVtYmVyKHRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgcHJpY2VJbnB1dC52YWx1ZSA9IFN0cmluZyh0aGlzLnByaWNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2ZlZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5mZWUgPSBOdW1iZXIodGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICBmZWVJbnB1dC52YWx1ZSA9IGAke3RhcmdldC52YWx1ZX0lYDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Rlcm0nOlxuICAgICAgICAgICAgICAgIHRoaXMudGVybSA9IE51bWJlcih0YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIHJhbmdlSW5wdXQudmFsdWUgPSBTdHJpbmcodGhpcy50ZXJtKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW5kZXJJbml0aWFsRmVlKCk7XG4gICAgICAgIHRoaXMucmVuZGVyT3V0cHV0UGF5bWVudCgpO1xuICAgICAgICB0aGlzLnJlbmRlck91dHB1dFN1bSgpO1xuICAgIH1cbiAgICB0ZXh0SW5wdXRIYW5kbGVyKHRhcmdldCkge1xuICAgICAgICBpZiAoIXRhcmdldC5pZC5pbmNsdWRlcygnVGV4dCcpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBwcmljZSA9IE51bWJlcih0YXJnZXQudmFsdWUpID4gZW52aXJvbm1lbnQucHJpY2VNYXhcbiAgICAgICAgICAgID8gZW52aXJvbm1lbnQucHJpY2VNYXggOiBOdW1iZXIodGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgY29uc3QgZmVlID0gcGFyc2VJbnQodGFyZ2V0LnZhbHVlLCAxMCkgPiBlbnZpcm9ubWVudC5mZWVNYXhcbiAgICAgICAgICAgID8gZW52aXJvbm1lbnQuZmVlTWF4IDogcGFyc2VJbnQodGFyZ2V0LnZhbHVlLCAxMCkgfHwgMDtcbiAgICAgICAgY29uc3QgdGVybSA9IE51bWJlcih0YXJnZXQudmFsdWUpID4gZW52aXJvbm1lbnQudGVybU1heFxuICAgICAgICAgICAgPyBlbnZpcm9ubWVudC50ZXJtTWF4IDogTnVtYmVyKHRhcmdldC52YWx1ZSk7XG4gICAgICAgIHN3aXRjaCAodGFyZ2V0Lm5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3ByaWNlJzpcbiAgICAgICAgICAgICAgICB0aGlzLnByaWNlID0gcHJpY2UgPCBlbnZpcm9ubWVudC5wcmljZU1pblxuICAgICAgICAgICAgICAgICAgICA/IGVudmlyb25tZW50LnByaWNlTWluIDogcHJpY2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdmZWUnOlxuICAgICAgICAgICAgICAgIHRoaXMuZmVlID0gZmVlIDwgZW52aXJvbm1lbnQuZmVlTWluXG4gICAgICAgICAgICAgICAgICAgID8gZW52aXJvbm1lbnQuZmVlTWluIDogZmVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndGVybSc6XG4gICAgICAgICAgICAgICAgdGhpcy50ZXJtID0gdGVybSA8IGVudmlyb25tZW50LnRlcm1NaW5cbiAgICAgICAgICAgICAgICAgICAgPyBlbnZpcm9ubWVudC50ZXJtTWluIDogdGVybTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW5kZXJJbml0aWFsRmVlKCk7XG4gICAgICAgIHRoaXMucmVuZGVyT3V0cHV0UGF5bWVudCgpO1xuICAgICAgICB0aGlzLnJlbmRlck91dHB1dFN1bSgpO1xuICAgIH1cbiAgICBzdWJtaXRSZXF1ZXN0KHRhcmdldCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKHRhcmdldC5pZCAhPT0gJ3N1Ym1pdFJlcXVlc3QnIHx8IHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICBjb25zdCBteUhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgICAgICAgbXlIZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgICAgICAgIG15SGVhZGVycy5hcHBlbmQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgICAgICAgICBjb25zdCByYXcgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgcHJpY2U6IHRoaXMucHJpY2UsXG4gICAgICAgICAgICAgICAgZmVlOiB0aGlzLmZlZSxcbiAgICAgICAgICAgICAgICB0ZXJtOiB0aGlzLnRlcm0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IG15SGVhZGVycyxcbiAgICAgICAgICAgICAgICBib2R5OiByYXcsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgeWllbGQgZmV0Y2goZW52aXJvbm1lbnQuYmFzZVVybCwgcmVxdWVzdE9wdGlvbnMpO1xuICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjYWxjSW5pdGlhbEZlZSgpIHtcbiAgICAgICAgY29uc3QgZmVlQ2FsY3VsYXRlZCA9IE1hdGgucm91bmQodGhpcy5wcmljZSAqICh0aGlzLmZlZSAvIDEwMCkpO1xuICAgICAgICByZXR1cm4gZmVlQ2FsY3VsYXRlZDtcbiAgICB9XG4gICAgY2FsY091dHB1dFN1bSgpIHtcbiAgICAgICAgY29uc3Qgc3VtID0gdGhpcy5mZWVDYWxjdWxhdGVkICsgKHRoaXMudGVybSAqIHRoaXMucGF5bWVudCk7XG4gICAgICAgIHJldHVybiBzdW07XG4gICAgfVxuICAgIGNhbGNPdXRwdXRQYXltZW50KCkge1xuICAgICAgICBjb25zdCBpbnRlcmVzdFJhdGUgPSBlbnZpcm9ubWVudC5pbnRlcmVzdFJhdGUgLyAxMDA7XG4gICAgICAgIGNvbnN0IHBheW1lbnQgPSAodGhpcy5wcmljZSAtIHRoaXMuZmVlQ2FsY3VsYXRlZClcbiAgICAgICAgICAgICogKChpbnRlcmVzdFJhdGUgKiAoKDEgKyBpbnRlcmVzdFJhdGUpICoqIHRoaXMudGVybSkpXG4gICAgICAgICAgICAgICAgLyAoKCgxICsgaW50ZXJlc3RSYXRlKSAqKiB0aGlzLnRlcm0pIC0gMSkpO1xuICAgICAgICByZXR1cm4gcGF5bWVudDtcbiAgICB9XG4gICAgcmVuZGVySW5pdGlhbEZlZSgpIHtcbiAgICAgICAgY29uc3QgZmVlQ2FsY3VsYXRlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZWVDYWxjdWxhdGVkJyk7XG4gICAgICAgIHRoaXMuZmVlQ2FsY3VsYXRlZCA9IHRoaXMuY2FsY0luaXRpYWxGZWUoKTtcbiAgICAgICAgZmVlQ2FsY3VsYXRlZC5pbm5lclRleHQgPSBTdHJpbmcoTWF0aC5yb3VuZCh0aGlzLmZlZUNhbGN1bGF0ZWQpKTtcbiAgICB9XG4gICAgcmVuZGVyT3V0cHV0UGF5bWVudCgpIHtcbiAgICAgICAgY29uc3Qgb3V0cHV0UGF5bWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdXRwdXRQYXltZW50Jyk7XG4gICAgICAgIHRoaXMucGF5bWVudCA9IHRoaXMuY2FsY091dHB1dFBheW1lbnQoKTtcbiAgICAgICAgb3V0cHV0UGF5bWVudC5pbm5lckhUTUwgPSBgJHtTdHJpbmcoTWF0aC5yb3VuZCh0aGlzLnBheW1lbnQpKX0gPHNwYW4+4oK9PC9zcGFuPmA7XG4gICAgfVxuICAgIHJlbmRlck91dHB1dFN1bSgpIHtcbiAgICAgICAgY29uc3Qgb3V0cHV0U3VtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ291dHB1dFN1bScpO1xuICAgICAgICB0aGlzLnN1bSA9IHRoaXMuY2FsY091dHB1dFN1bSgpO1xuICAgICAgICBvdXRwdXRTdW0uaW5uZXJIVE1MID0gYCR7U3RyaW5nKE1hdGgucm91bmQodGhpcy5zdW0pKX0gPHNwYW4+4oK9PC9zcGFuPmA7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLWNvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgcHJpY2VQZXJjZW50YWdlID0gKCh0aGlzLnByaWNlIC0gZW52aXJvbm1lbnQucHJpY2VNaW4pXG4gICAgICAgICAgICAvIChlbnZpcm9ubWVudC5wcmljZU1heCAtIGVudmlyb25tZW50LnByaWNlTWluKSkgKiAxMDA7XG4gICAgICAgIGNvbnN0IGZlZVBlcmNlbnRhZ2UgPSAoKHRoaXMuZmVlIC0gZW52aXJvbm1lbnQuZmVlTWluKVxuICAgICAgICAgICAgLyAoZW52aXJvbm1lbnQuZmVlTWF4IC0gZW52aXJvbm1lbnQuZmVlTWluKSkgKiAxMDA7XG4gICAgICAgIGNvbnN0IHRlcm1QZXJjZW50YWdlID0gKCh0aGlzLnRlcm0gLSBlbnZpcm9ubWVudC50ZXJtTWluKVxuICAgICAgICAgICAgLyAoZW52aXJvbm1lbnQudGVybU1heCAtIGVudmlyb25tZW50LnRlcm1NaW4pKSAqIDEwMDtcbiAgICAgICAgaWYgKG1haW4pIHtcbiAgICAgICAgICAgIG1haW4uaW5uZXJIVE1MID0gYFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNhbGNcIj5cbiAgICAgICAgICA8Zm9ybSBjbGFzcz1cImNhbGNfX2Zvcm1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtX19maWVsZFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicHJpY2VcIiBjbGFzcz1cImZpZWxkX19sYWJlbFwiPtCh0YLQvtC40LzQvtGB0YLRjCDQsNCy0YLQvtC80L7QsdC40LvRjzwvbGFiZWw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZF9fd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cInByaWNlXCIgY2xhc3M9XCJmaWVsZF9fdGV4dCBmaWVsZF9faW5wdXRcIiBpZD1cInByaWNlVGV4dFwiIHZhbHVlPVwiJHt0aGlzLnByaWNlfVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZF9fdW5pdCBwcmljZS11bml0XCI+4oK9PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgY2xhc3M9XCJmaWVsZF9fcmFuZ2VcIiBpZD1cInByaWNlUmFuZ2VcIiB2YWx1ZT1cIiR7dGhpcy5wcmljZX1cIiBtaW49XCIke2Vudmlyb25tZW50LnByaWNlTWlufVwiIG1heD1cIiR7ZW52aXJvbm1lbnQucHJpY2VNYXh9XCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNGRjk1MTQgJHtwcmljZVBlcmNlbnRhZ2V9JSwgdHJhbnNwYXJlbnQgJHtwcmljZVBlcmNlbnRhZ2V9JSlcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1fX2ZpZWxkXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJmZWVcIiBjbGFzcz1cImZpZWxkX19sYWJlbFwiPtCf0LXRgNCy0L7QvdCw0YfQsNC70YzQvdGL0Lkg0LLQt9C90L7RgTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZF9fd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZF9fdGV4dFwiIGlkPVwiZmVlQ2FsY3VsYXRlZFwiPiR7dGhpcy5mZWVDYWxjdWxhdGVkfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJHt0aGlzLmZlZX0lXCIgbmFtZT1cImZlZVwiIGNsYXNzPVwiZmllbGRfX3VuaXQgZmllbGRfX3RleHQgZmllbGRfX2lucHV0IGZlZS11bml0XCIgaWQ9XCJmZWVUZXh0XCI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgY2xhc3M9XCJmaWVsZF9fcmFuZ2VcIiBpZD1cImZlZVJhbmdlXCIgdmFsdWU9XCIke3RoaXMuZmVlfVwibWluPVwiJHtlbnZpcm9ubWVudC5mZWVNaW59XCIgbWF4PVwiJHtlbnZpcm9ubWVudC5mZWVNYXh9XCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNGRjk1MTQgJHtmZWVQZXJjZW50YWdlfSUsIHRyYW5zcGFyZW50ICR7ZmVlUGVyY2VudGFnZX0lKVwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybV9fZmllbGRcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRlcm1cIiBjbGFzcz1cImZpZWxkX19sYWJlbFwiPtCh0YDQvtC6INC70LjQt9C40L3Qs9CwPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkX193cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwidGVybVwiIGNsYXNzPVwiZmllbGRfX3RleHQgZmllbGRfX2lucHV0XCIgaWQ9XCJ0ZXJtVGV4dFwiIHZhbHVlPVwiJHt0aGlzLnRlcm19XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkX191bml0IHRlcm0tdW5pdFwiPtC80LXRgS48L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBjbGFzcz1cImZpZWxkX19yYW5nZVwiIGlkPVwidGVybVJhbmdlXCIgdmFsdWU9XCIke3RoaXMudGVybX1cIiBtaW49XCIke2Vudmlyb25tZW50LnRlcm1NaW59XCIgbWF4PVwiJHtlbnZpcm9ubWVudC50ZXJtTWF4fVwiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjRkY5NTE0ICR7dGVybVBlcmNlbnRhZ2V9JSwgdHJhbnNwYXJlbnQgJHt0ZXJtUGVyY2VudGFnZX0lKVwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWxjX19yZXN1bHRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdF9fbGFiZWxcIiA+XG4gICAgICAgICAgICAgICAg0KHRg9C80LzQsCDQtNC+0LPQvtCy0L7RgNCwINC70LjQt9C40L3Qs9CwXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0X19vdXRwdXRcIiBpZD1cIm91dHB1dFN1bVwiPlxuICAgICAgICAgICAgICAgICR7TWF0aC5yb3VuZCh0aGlzLnN1bSl9IDxzcGFuPuKCvTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdF9fbGFiZWxcIj5cbiAgICAgICAgICAgICAgICDQldC20LXQvNC10YHRj9GH0L3Ri9C5INC/0LvQsNGC0LXQtiDQvtGCXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0X19vdXRwdXRcIiBpZD1cIm91dHB1dFBheW1lbnRcIj5cbiAgICAgICAgICAgICAgICAke01hdGgucm91bmQodGhpcy5wYXltZW50KX0gPHNwYW4+4oK9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzdWJtaXRcIiBpZD1cInN1Ym1pdFJlcXVlc3RcIj7QntGB0YLQsNCy0LjRgtGMINC30LDRj9Cy0LrRgzwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICBgO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ2FsYztcbiIsImNvbnN0IGVudmlyb25tZW50ID0ge1xuICAgIGJhc2VVcmw6ICdodHRwczovL2VvajNyN2YzcjRlZjZ2NC5tLnBpcGVkcmVhbS5uZXQnLFxuICAgIHByaWNlTWluOiAxMDAwMDAwLFxuICAgIHByaWNlTWF4OiA2MDAwMDAwLFxuICAgIHByaWNlRGVmYXVsdDogMzMwMDAwMCxcbiAgICBmZWVNaW46IDEwLFxuICAgIGZlZU1heDogNjAsXG4gICAgZmVlRGVmYXVsdDogMTMsXG4gICAgdGVybU1pbjogMSxcbiAgICB0ZXJtTWF4OiA2MCxcbiAgICB0ZXJtRGVmYXVsdDogNjAsXG4gICAgaW50ZXJlc3RSYXRlOiAzLjUsXG59O1xuZXhwb3J0IGRlZmF1bHQgZW52aXJvbm1lbnQ7XG4iLCJmdW5jdGlvbiBmaWxsSW5wdXRUcmFjayh0YXJnZXQpIHtcbiAgICBpZiAoIXRhcmdldC5pZC5pbmNsdWRlcygnUmFuZ2UnKSlcbiAgICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IHsgc3R5bGUgfSA9IHRhcmdldDtcbiAgICBjb25zdCBwZXJjZW50YWdlID0gKChOdW1iZXIodGFyZ2V0LnZhbHVlKSAtIE51bWJlcih0YXJnZXQubWluKSlcbiAgICAgICAgLyAoTnVtYmVyKHRhcmdldC5tYXgpIC0gTnVtYmVyKHRhcmdldC5taW4pKSkgKiAxMDA7XG4gICAgc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYGxpbmVhci1ncmFkaWVudCg5MGRlZywgI0ZGOTUxNCAke3BlcmNlbnRhZ2V9JSwgdHJhbnNwYXJlbnQgJHtwZXJjZW50YWdlfSUpYDtcbn1cbmV4cG9ydCBkZWZhdWx0IGZpbGxJbnB1dFRyYWNrO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcC9hcHAnO1xuaW1wb3J0ICcuL3Jlc291cmNlcy9jc3MvcmVzZXQuc2Nzcyc7XG5pbXBvcnQgJy4vcmVzb3VyY2VzL2Nzcy9zdHlsZXMuc2Nzcyc7XG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XG5hcHAucmVuZGVyKCk7XG5hcHAubGlzdGVuKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=