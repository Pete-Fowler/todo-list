/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Oswald-VariableFont_wght.ttf */ "./src/assets/fonts/Oswald-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Baloo2-VariableFont_wght.ttf */ "./src/assets/fonts/Baloo2-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: oswald;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n    font-family: baloo;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n* {\n    font-family: oswald;\n}\nbody {\n    color: white;\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n    display: grid;\n    grid-template: 1fr 11fr / 1fr 3fr;\n    grid-template-areas: \n    \"header header\"\n    \"nav main\";\n}\n\n#header {\n    display: flex; \n    justify-content: center;\n    align-items: center;\n    font-size: 3rem;\n    font-weight: 700;\n    background-color: #3261EB;\n    grid-area: header;\n}\n\n#title {\n    font-family: baloo;\n}\n\n#nav {\n    background-color: #274BB8;\n    grid-area: nav;\n}\n\n#nav-top {\n    display: flex;\n    flex-direction: column;\n    padding: 5px;\n}\n\n.nav {\n    font-size: 2rem;\n    color: white;\n    height: 100%;\n    border-radius: 10px;\n    border: 0px;\n    margin: 5px 2px;\n    padding: 10px;\n    background-color: #274BB8;\n    text-align: left;\n    transition: .6s;\n}\n\n#delete-icon {\n    height: 30px;\n    width: 30px;\n}\n\n.nav:hover, .active {\n    background-color: #7997EE;\n}\n\n.project-wrapper {\n    display: flex;\n    align-items: center;\n    padding: 5px;\n}\n\n.project {\n    flex: 7; \n}\n\n#nav hr {\n    color: white;\n    background-color: white;\n    height: 1px;\n    width: 95%;\n}\n\n#new-project, #new-task {\n    color: white;\n    font-size: 4rem;\n    height: 50px;\n    width: 50px;\n    border: 0px;\n    border-radius: 10px;\n    margin: 10px;\n    background-color: #274BB8;\n    transition: .6s;\n}\n\n#new-project:hover, #new-task:hover {\n    transform: scale(1.3);\n}\n\n#new-task {\n    background-color: #7997EE;\n    align-self: flex-start;\n}\n\n/* Main */\n#main {\n    display: grid;\n    grid-template: repeat(auto-fill, 50px) / 1fr;\n    grid-auto-rows: 50px;\n    gap: 10px;\n    padding: 10px;\n    align-items: center;\n    background-color: #7997EE;\n    grid-area: main;\n    overflow: auto;\n}\n\n.task {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    margin: 0px;\n    background-color: #274BB8;\n    border-radius: 10px;\n}\n\n.task input, .task label, .dropdown-button {\n    color: white;\n    font-size: 1.5rem;\n    background-color: inherit;\n    height: 70%;\n    border: none;\n    border-radius: 5px;\n    padding: 0px 5px;\n    margin: 5px 10px;\n    transition: .4s;\n}\n\n.task input:hover, .task label:hover, #menu:hover  {\n    background-color: #7997EE;\n}\n\n.task input:focus {\n    background-color: #7997EE;\n    border: 3px solid black;\n}\n\n.task input::placeholder{\n    color: white;\n    opacity: .6;\n}\n\n.description {\n    flex: 1 1 0;\n}\n\n.due {\n    width: 150px;\n}\n\n#star {\n    height: 35px;\n    width: 35px;\n    border-radius: 5px;\n    transition: .4s;\n    padding: 1px;\n}\n\n.hovered {\n    filter: invert(54%) sepia(3%) saturate(25%) hue-rotate(27deg) brightness(92%) contrast(88%);\n}\n\n.filter-white {\n    filter: invert(100%) sepia(0%) saturate(7488%) hue-rotate(1deg) brightness(103%) contrast(99%);\n}\n\n/* Dropdown  */\n.dropdown {\n    position: relative;\n    display: inline-block;\n    margin: 0px;\n    padding: 5px;\n    padding-top: 10px;\n}\n\n#menu {\n    width: 38px;\n    height: 38px;\n    border-radius: 5px;\n}\n\n.dropdown-content {\n    display: none;\n    position: absolute;\n    right: 0;\n    box-shadow: 4px 4px 16px 0px rgba(0, 0, 0, .8);\n    z-index: 5;\n    color: white;\n    font-size: 1.3rem;\n    background-color: #3261EB;\n    min-height: 40px;\n    min-width: 200px;\n    border: none;\n    border-radius: 5px;\n    padding: 10px;\n    margin: 0px;\n    transition: .4s;\n}\n\n.show {\n    display: block;\n}\n\n.menu-item {\n    display: flex;\n    align-items: center;\n    padding: 5px;\n    transition: .4s;\n    border-radius: 5px;\n}\n\n.menu-item:hover {\n    background-color: #7997EE;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,4CAAqD;AACzD;;AAEA;IACI,kBAAkB;IAClB,4CAAuD;AAC3D;;AAEA;IACI,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,SAAS;IACT,aAAa;IACb,iCAAiC;IACjC;;cAEU;AACd;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,gBAAgB;IAChB,yBAAyB;IACzB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,WAAW;IACX,eAAe;IACf,aAAa;IACb,yBAAyB;IACzB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,YAAY;IACZ,uBAAuB;IACvB,WAAW;IACX,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,WAAW;IACX,WAAW;IACX,mBAAmB;IACnB,YAAY;IACZ,yBAAyB;IACzB,eAAe;AACnB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,yBAAyB;IACzB,sBAAsB;AAC1B;;AAEA,SAAS;AACT;IACI,aAAa;IACb,4CAA4C;IAC5C,oBAAoB;IACpB,SAAS;IACT,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,WAAW;IACX,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,yBAAyB;IACzB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;IAChB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,2FAA2F;AAC/F;;AAEA;IACI,8FAA8F;AAClG;;AAEA,cAAc;AACd;IACI,kBAAkB;IAClB,qBAAqB;IACrB,WAAW;IACX,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,QAAQ;IACR,8CAA8C;IAC9C,UAAU;IACV,YAAY;IACZ,iBAAiB;IACjB,yBAAyB;IACzB,gBAAgB;IAChB,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;AAC7B","sourcesContent":["@font-face {\n    font-family: oswald;\n    src: url(./assets/fonts/Oswald-VariableFont_wght.ttf);\n}\n\n@font-face {\n    font-family: baloo;\n    src: url('./assets/fonts/Baloo2-VariableFont_wght.ttf');\n}\n\n* {\n    font-family: oswald;\n}\nbody {\n    color: white;\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n    display: grid;\n    grid-template: 1fr 11fr / 1fr 3fr;\n    grid-template-areas: \n    \"header header\"\n    \"nav main\";\n}\n\n#header {\n    display: flex; \n    justify-content: center;\n    align-items: center;\n    font-size: 3rem;\n    font-weight: 700;\n    background-color: #3261EB;\n    grid-area: header;\n}\n\n#title {\n    font-family: baloo;\n}\n\n#nav {\n    background-color: #274BB8;\n    grid-area: nav;\n}\n\n#nav-top {\n    display: flex;\n    flex-direction: column;\n    padding: 5px;\n}\n\n.nav {\n    font-size: 2rem;\n    color: white;\n    height: 100%;\n    border-radius: 10px;\n    border: 0px;\n    margin: 5px 2px;\n    padding: 10px;\n    background-color: #274BB8;\n    text-align: left;\n    transition: .6s;\n}\n\n#delete-icon {\n    height: 30px;\n    width: 30px;\n}\n\n.nav:hover, .active {\n    background-color: #7997EE;\n}\n\n.project-wrapper {\n    display: flex;\n    align-items: center;\n    padding: 5px;\n}\n\n.project {\n    flex: 7; \n}\n\n#nav hr {\n    color: white;\n    background-color: white;\n    height: 1px;\n    width: 95%;\n}\n\n#new-project, #new-task {\n    color: white;\n    font-size: 4rem;\n    height: 50px;\n    width: 50px;\n    border: 0px;\n    border-radius: 10px;\n    margin: 10px;\n    background-color: #274BB8;\n    transition: .6s;\n}\n\n#new-project:hover, #new-task:hover {\n    transform: scale(1.3);\n}\n\n#new-task {\n    background-color: #7997EE;\n    align-self: flex-start;\n}\n\n/* Main */\n#main {\n    display: grid;\n    grid-template: repeat(auto-fill, 50px) / 1fr;\n    grid-auto-rows: 50px;\n    gap: 10px;\n    padding: 10px;\n    align-items: center;\n    background-color: #7997EE;\n    grid-area: main;\n    overflow: auto;\n}\n\n.task {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    margin: 0px;\n    background-color: #274BB8;\n    border-radius: 10px;\n}\n\n.task input, .task label, .dropdown-button {\n    color: white;\n    font-size: 1.5rem;\n    background-color: inherit;\n    height: 70%;\n    border: none;\n    border-radius: 5px;\n    padding: 0px 5px;\n    margin: 5px 10px;\n    transition: .4s;\n}\n\n.task input:hover, .task label:hover, #menu:hover  {\n    background-color: #7997EE;\n}\n\n.task input:focus {\n    background-color: #7997EE;\n    border: 3px solid black;\n}\n\n.task input::placeholder{\n    color: white;\n    opacity: .6;\n}\n\n.description {\n    flex: 1 1 0;\n}\n\n.due {\n    width: 150px;\n}\n\n#star {\n    height: 35px;\n    width: 35px;\n    border-radius: 5px;\n    transition: .4s;\n    padding: 1px;\n}\n\n.hovered {\n    filter: invert(54%) sepia(3%) saturate(25%) hue-rotate(27deg) brightness(92%) contrast(88%);\n}\n\n.filter-white {\n    filter: invert(100%) sepia(0%) saturate(7488%) hue-rotate(1deg) brightness(103%) contrast(99%);\n}\n\n/* Dropdown  */\n.dropdown {\n    position: relative;\n    display: inline-block;\n    margin: 0px;\n    padding: 5px;\n    padding-top: 10px;\n}\n\n#menu {\n    width: 38px;\n    height: 38px;\n    border-radius: 5px;\n}\n\n.dropdown-content {\n    display: none;\n    position: absolute;\n    right: 0;\n    box-shadow: 4px 4px 16px 0px rgba(0, 0, 0, .8);\n    z-index: 5;\n    color: white;\n    font-size: 1.3rem;\n    background-color: #3261EB;\n    min-height: 40px;\n    min-width: 200px;\n    border: none;\n    border-radius: 5px;\n    padding: 10px;\n    margin: 0px;\n    transition: .4s;\n}\n\n.show {\n    display: block;\n}\n\n.menu-item {\n    display: flex;\n    align-items: center;\n    padding: 5px;\n    transition: .4s;\n    border-radius: 5px;\n}\n\n.menu-item:hover {\n    background-color: #7997EE;\n}"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/assets/modules/projects.js":
/*!****************************************!*\
  !*** ./src/assets/modules/projects.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "blank": () => (/* binding */ blank),
/* harmony export */   "del": () => (/* binding */ del),
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "update": () => (/* binding */ update)
/* harmony export */ });
const projects = [
    {
    name: 'Main',
    tasks: [],
    },
];

const update = (index, property, value) => {
    projects[index][property] = value;
    console.log(projects);
}

const create = (name, tasks) => {
    return {name, tasks};
}

const blank = () => {
    projects.push(create('', ''));
}

const add = (index, task) => {
    projects[index].tasks.push(task);
}

const del = (id) => {
    projects.splice(id, 1);
}



/***/ }),

/***/ "./src/assets/modules/projectsDom.js":
/*!*******************************************!*\
  !*** ./src/assets/modules/projectsDom.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listen": () => (/* binding */ listen),
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _tasksDom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasksDom.js */ "./src/assets/modules/tasksDom.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/assets/modules/projects.js");
/* harmony import */ var _images_delete_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/delete.svg */ "./src/assets/images/delete.svg");




const nav = document.querySelector('#nav-projects');
const newProjectBtn = document.querySelector('#new-project');

const render = () => {
    
    
    const domProjects = document.querySelectorAll('.project-wrapper');
    domProjects.forEach(e => e.remove());
    
    for(let i=0; i < _projects__WEBPACK_IMPORTED_MODULE_1__.projects.length; i++) {
        const wrapper = document.createElement('div');
        wrapper.id = `p${i}`;
        wrapper.setAttribute('class', 'project-wrapper');
        
        const proj = document.createElement('input');
        proj.setAttribute('placeholder', 'Project');
        proj.classList.add('nav');
        proj.classList.add('project');
        proj.value = _projects__WEBPACK_IMPORTED_MODULE_1__.projects[i].name;
        wrapper.appendChild(proj);
        proj.addEventListener('change', handleChange);

        const img = new Image();
        img.src = _images_delete_svg__WEBPACK_IMPORTED_MODULE_2__;
        img.id = 'delete-icon';
        img.alt = 'Delete icon';
        img.addEventListener('click', removeProject);

        wrapper.appendChild(img);

        nav.insertBefore(wrapper, newProjectBtn);
    }
}

const addProject = () => {
    _projects__WEBPACK_IMPORTED_MODULE_1__.blank();
    render();
    _tasksDom_js__WEBPACK_IMPORTED_MODULE_0__.render();
}

const removeProject = (e) => {
    let el = e.target.closest('.project-wrapper');
    let id = el.id.slice(-1);
    _projects__WEBPACK_IMPORTED_MODULE_1__.del(id);
    el.remove();
    _tasksDom_js__WEBPACK_IMPORTED_MODULE_0__.render();
}

const listen = () => {
    newProjectBtn.addEventListener('click', addProject);
}

const handleChange = (e) => {
    let id = e.target.closest('.project-wrapper').id.slice(-1);
    let value = e.target.closest('.project').value;
    _projects__WEBPACK_IMPORTED_MODULE_1__.update(id, 'name', value);
    _tasksDom_js__WEBPACK_IMPORTED_MODULE_0__.render();
}



/***/ }),

/***/ "./src/assets/modules/tasks.js":
/*!*************************************!*\
  !*** ./src/assets/modules/tasks.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "blank": () => (/* binding */ blank),
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "del": () => (/* binding */ del),
/* harmony export */   "tasks": () => (/* binding */ tasks),
/* harmony export */   "toggleStarred": () => (/* binding */ toggleStarred),
/* harmony export */   "update": () => (/* binding */ update)
/* harmony export */ });
let tasks = [{
    title: 'Run',
    description: 'Go running',
    starred: false,
    due: '2022-06-21',
    project: '',
}];

const update = (index, property, value) => {
    tasks[index][property] = value;
    console.log(tasks[index]);
}

const create = (title, description, starred, due, project) => {
        return {title, description, starred, due, project};
    }

const blank = () => {
    tasks.push(create('', '', '', '', ''));
}
const del = (id) => {
    tasks.splice(id, 1);
}

const toggleStarred = (index) => {
    if (tasks[index].starred === false) {
        tasks[index].starred = true;
    } else {
        tasks[index].starred = false;
    }
}



/***/ }),

/***/ "./src/assets/modules/tasksDom.js":
/*!****************************************!*\
  !*** ./src/assets/modules/tasksDom.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listen": () => (/* binding */ listen),
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ "./src/assets/modules/projects.js");
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks.js */ "./src/assets/modules/tasks.js");
/* harmony import */ var _images_menu_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/menu.svg */ "./src/assets/images/menu.svg");
/* harmony import */ var _images_star_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/star.svg */ "./src/assets/images/star.svg");





const main = document.querySelector('#main');
const newTaskBtn = document.querySelector('#new-task');
const newProjectBtn = document.querySelector('#new-project');

window.addEventListener('click', closeDrop);

function listen() {
    newTaskBtn.addEventListener('click', newTaskClick);

}

function render() {
    document.querySelectorAll('.task').forEach((e) => {e.remove()});

    for(let i=0; i < _tasks_js__WEBPACK_IMPORTED_MODULE_1__.tasks.length; i++) {
        const task = document.createElement('div');
            task.id = `${i}`;
            task.classList.add('task');

        const title = document.createElement('input');
            title.classList.add('title');
            title.setAttribute('type', 'text');
            title.setAttribute('placeholder', 'Title');
            title.setAttribute('minlength', '1');
            title.setAttribute('maxlength', '25');
            title.value = _tasks_js__WEBPACK_IMPORTED_MODULE_1__.tasks[i].title;
            task.appendChild(title);
            title.addEventListener('change', handleChange);

        const description = document.createElement('input');
            description.classList.add('description');
            description.setAttribute('type', 'text');
            description.setAttribute('placeholder', 'Description');
            description.setAttribute('minlength', '1');
            description.setAttribute('maxlength', '111');
            description.value = _tasks_js__WEBPACK_IMPORTED_MODULE_1__.tasks[i].description;
            task.appendChild(description);
            description.addEventListener('change', handleChange);

        const star = new Image();
            star.src = _images_star_svg__WEBPACK_IMPORTED_MODULE_3__;
            star.alt = 'Star icon';
            star.id = 'star';
            task.appendChild(star);
            star.addEventListener('click', handleStar);
            star.addEventListener('mouseover', hoverStar);

        const due = document.createElement('input');
            due.classList.add('due');
            due.setAttribute('type', 'date');
            due.value = _tasks_js__WEBPACK_IMPORTED_MODULE_1__.tasks[i].due;
            task.appendChild(due);
            due.addEventListener('change', handleChange);

        const dropDown = document.createElement('div');
            dropDown.classList.add('dropdown');

            const menu = new Image();
                menu.src = _images_menu_svg__WEBPACK_IMPORTED_MODULE_2__;
                menu.id = 'menu';
                menu.alt = 'Menu icon';
                menu.addEventListener('click', handleDrop);

                dropDown.appendChild(menu);

            const dropDownContent = document.createElement('div');
                dropDownContent.classList.add('dropdown-content');
                
                const del = document.createElement('div');
                del.classList.add('menu-item');
                del.textContent = 'Delete Task';
                dropDownContent.appendChild(del);
                del.addEventListener('click', deleteTask); 
                
                const mps = document.querySelectorAll('.menu-project');
                mps.forEach(e => e.remove);
                for (let i = 0; i < _projects_js__WEBPACK_IMPORTED_MODULE_0__.projects.length; i++) {
                    let proj = document.createElement('div');
                    proj.id = `mp${i}`;
                    proj.classList.add('menu-item');
                    proj.textContent = _projects_js__WEBPACK_IMPORTED_MODULE_0__.projects[i].name;
                    dropDownContent.appendChild(proj);
                    proj.addEventListener('click', assignTask);
                }
                dropDown.appendChild(dropDownContent);

        task.appendChild(dropDown);

        main.insertBefore(task, newTaskBtn);
    }
}

function hoverStar(e) {
    const star = e.target.closest('#star');
    star.classList.toggle('hovered');
}

function assignTask(e) {
    let tIndex = e.target.closest('.task').id;
    let pName = e.target.closest('.menu-item').textContent;
    let pIndex = e.target.closest('.menu-item').id.slice(-1);

    _tasks_js__WEBPACK_IMPORTED_MODULE_1__.update(tIndex, 'project', pName);
}

function closeDrop(e) {
    if (!e.target.matches('#menu')) {
        let ddc = document.querySelector('.dropdown-content');
        if(ddc.classList.contains('show')) {
            ddc.classList.remove('show');
        }
    }
}

function handleDrop() {
    let ddc = document.querySelector('.dropdown-content');
    ddc.classList.toggle('show');
}

function handleChange(e) {
    let property = e.target.className;
    let value = e.target.value;
    let id = e.target.closest('.task').id;
    _tasks_js__WEBPACK_IMPORTED_MODULE_1__.update(id, property, value)
}

function handleStar() {
    const star = document.querySelector('#star');
    star.classList.toggle('filter-white');
    let id = star.closest('.task').id;
    _tasks_js__WEBPACK_IMPORTED_MODULE_1__.toggleStarred(id);
}

function newTaskClick() {
    _tasks_js__WEBPACK_IMPORTED_MODULE_1__.blank();
    render();
}

function deleteTask (e) {
    let id = e.target.closest('.task').id;
    _tasks_js__WEBPACK_IMPORTED_MODULE_1__.del(id);
    render();
}



/***/ }),

/***/ "./src/assets/fonts/Baloo2-VariableFont_wght.ttf":
/*!*******************************************************!*\
  !*** ./src/assets/fonts/Baloo2-VariableFont_wght.ttf ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0b284e749360dd03ca90.ttf";

/***/ }),

/***/ "./src/assets/fonts/Oswald-VariableFont_wght.ttf":
/*!*******************************************************!*\
  !*** ./src/assets/fonts/Oswald-VariableFont_wght.ttf ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ee815f542584c61b67c2.ttf";

/***/ }),

/***/ "./src/assets/images/delete.svg":
/*!**************************************!*\
  !*** ./src/assets/images/delete.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1c05487f4903f3c23aac.svg";

/***/ }),

/***/ "./src/assets/images/menu.svg":
/*!************************************!*\
  !*** ./src/assets/images/menu.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "979c95ee82838b3c3066.svg";

/***/ }),

/***/ "./src/assets/images/star.svg":
/*!************************************!*\
  !*** ./src/assets/images/star.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "35f8e54765a297d5d8a2.svg";

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
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_modules_tasksDom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/modules/tasksDom.js */ "./src/assets/modules/tasksDom.js");
/* harmony import */ var _assets_modules_projectsDom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/modules/projectsDom.js */ "./src/assets/modules/projectsDom.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





_assets_modules_tasksDom_js__WEBPACK_IMPORTED_MODULE_0__.listen();
_assets_modules_tasksDom_js__WEBPACK_IMPORTED_MODULE_0__.render();
_assets_modules_projectsDom_js__WEBPACK_IMPORTED_MODULE_1__.listen();
_assets_modules_projectsDom_js__WEBPACK_IMPORTED_MODULE_1__.render()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQ3lEO0FBQ0M7QUFDckM7O0FBRXJCLCtEQUFlO0FBQ2YsK0RBQWU7QUFDZixrRUFBYztBQUNkLGtFQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy9tb2R1bGVzL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc3NldHMvbW9kdWxlcy9wcm9qZWN0c0RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL21vZHVsZXMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy9tb2R1bGVzL3Rhc2tzRG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9Pc3dhbGQtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvQmFsb28yLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IG9zd2FsZDtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IGJhbG9vO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcblxcbioge1xcbiAgICBmb250LWZhbWlseTogb3N3YWxkO1xcbn1cXG5ib2R5IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDExZnIgLyAxZnIgM2ZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgXFxcImhlYWRlciBoZWFkZXJcXFwiXFxuICAgIFxcXCJuYXYgbWFpblxcXCI7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4OyBcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMyNjFFQjtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxufVxcblxcbiN0aXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBiYWxvbztcXG59XFxuXFxuI25hdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzRCQjg7XFxuICAgIGdyaWQtYXJlYTogbmF2O1xcbn1cXG5cXG4jbmF2LXRvcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLm5hdiB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBtYXJnaW46IDVweCAycHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzRCQjg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHRyYW5zaXRpb246IC42cztcXG59XFxuXFxuI2RlbGV0ZS1pY29uIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG59XFxuXFxuLm5hdjpob3ZlciwgLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTk3RUU7XFxufVxcblxcbi5wcm9qZWN0LXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgZmxleDogNzsgXFxufVxcblxcbiNuYXYgaHIge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgd2lkdGg6IDk1JTtcXG59XFxuXFxuI25ldy1wcm9qZWN0LCAjbmV3LXRhc2sge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3NEJCODtcXG4gICAgdHJhbnNpdGlvbjogLjZzO1xcbn1cXG5cXG4jbmV3LXByb2plY3Q6aG92ZXIsICNuZXctdGFzazpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG59XFxuXFxuI25ldy10YXNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc5OTdFRTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLyogTWFpbiAqL1xcbiNtYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KGF1dG8tZmlsbCwgNTBweCkgLyAxZnI7XFxuICAgIGdyaWQtYXV0by1yb3dzOiA1MHB4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTk3RUU7XFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi50YXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzRCQjg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi50YXNrIGlucHV0LCAudGFzayBsYWJlbCwgLmRyb3Bkb3duLWJ1dHRvbiB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGhlaWdodDogNzAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMHB4IDVweDtcXG4gICAgbWFyZ2luOiA1cHggMTBweDtcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcbn1cXG5cXG4udGFzayBpbnB1dDpob3ZlciwgLnRhc2sgbGFiZWw6aG92ZXIsICNtZW51OmhvdmVyICB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTk3RUU7XFxufVxcblxcbi50YXNrIGlucHV0OmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc5OTdFRTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxufVxcblxcbi50YXNrIGlucHV0OjpwbGFjZWhvbGRlcntcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBvcGFjaXR5OiAuNjtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gICAgZmxleDogMSAxIDA7XFxufVxcblxcbi5kdWUge1xcbiAgICB3aWR0aDogMTUwcHg7XFxufVxcblxcbiNzdGFyIHtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDogMzVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxuICAgIHBhZGRpbmc6IDFweDtcXG59XFxuXFxuLmhvdmVyZWQge1xcbiAgICBmaWx0ZXI6IGludmVydCg1NCUpIHNlcGlhKDMlKSBzYXR1cmF0ZSgyNSUpIGh1ZS1yb3RhdGUoMjdkZWcpIGJyaWdodG5lc3MoOTIlKSBjb250cmFzdCg4OCUpO1xcbn1cXG5cXG4uZmlsdGVyLXdoaXRlIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc0ODglKSBodWUtcm90YXRlKDFkZWcpIGJyaWdodG5lc3MoMTAzJSkgY29udHJhc3QoOTklKTtcXG59XFxuXFxuLyogRHJvcGRvd24gICovXFxuLmRyb3Bkb3duIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbn1cXG5cXG4jbWVudSB7XFxuICAgIHdpZHRoOiAzOHB4O1xcbiAgICBoZWlnaHQ6IDM4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmRyb3Bkb3duLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgLjgpO1xcbiAgICB6LWluZGV4OiA1O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI2MUVCO1xcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG59XFxuXFxuLnNob3cge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5tZW51LWl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk5N0VFO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9z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QUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IG9zd2FsZDtcXG4gICAgc3JjOiB1cmwoLi9hc3NldHMvZm9udHMvT3N3YWxkLVZhcmlhYmxlRm9udF93Z2h0LnR0Zik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogYmFsb287XFxuICAgIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9CYWxvbzItVmFyaWFibGVGb250X3dnaHQudHRmJyk7XFxufVxcblxcbioge1xcbiAgICBmb250LWZhbWlseTogb3N3YWxkO1xcbn1cXG5ib2R5IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDExZnIgLyAxZnIgM2ZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgXFxcImhlYWRlciBoZWFkZXJcXFwiXFxuICAgIFxcXCJuYXYgbWFpblxcXCI7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4OyBcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMyNjFFQjtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxufVxcblxcbiN0aXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBiYWxvbztcXG59XFxuXFxuI25hdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzRCQjg7XFxuICAgIGdyaWQtYXJlYTogbmF2O1xcbn1cXG5cXG4jbmF2LXRvcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLm5hdiB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBtYXJnaW46IDVweCAycHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzRCQjg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHRyYW5zaXRpb246IC42cztcXG59XFxuXFxuI2RlbGV0ZS1pY29uIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG59XFxuXFxuLm5hdjpob3ZlciwgLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTk3RUU7XFxufVxcblxcbi5wcm9qZWN0LXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgZmxleDogNzsgXFxufVxcblxcbiNuYXYgaHIge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgd2lkdGg6IDk1JTtcXG59XFxuXFxuI25ldy1wcm9qZWN0LCAjbmV3LXRhc2sge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3NEJCODtcXG4gICAgdHJhbnNpdGlvbjogLjZzO1xcbn1cXG5cXG4jbmV3LXByb2plY3Q6aG92ZXIsICNuZXctdGFzazpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG59XFxuXFxuI25ldy10YXNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc5OTdFRTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLyogTWFpbiAqL1xcbiNtYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KGF1dG8tZmlsbCwgNTBweCkgLyAxZnI7XFxuICAgIGdyaWQtYXV0by1yb3dzOiA1MHB4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTk3RUU7XFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi50YXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzRCQjg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi50YXNrIGlucHV0LCAudGFzayBsYWJlbCwgLmRyb3Bkb3duLWJ1dHRvbiB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGhlaWdodDogNzAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMHB4IDVweDtcXG4gICAgbWFyZ2luOiA1cHggMTBweDtcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcbn1cXG5cXG4udGFzayBpbnB1dDpob3ZlciwgLnRhc2sgbGFiZWw6aG92ZXIsICNtZW51OmhvdmVyICB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTk3RUU7XFxufVxcblxcbi50YXNrIGlucHV0OmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc5OTdFRTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxufVxcblxcbi50YXNrIGlucHV0OjpwbGFjZWhvbGRlcntcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBvcGFjaXR5OiAuNjtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gICAgZmxleDogMSAxIDA7XFxufVxcblxcbi5kdWUge1xcbiAgICB3aWR0aDogMTUwcHg7XFxufVxcblxcbiNzdGFyIHtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDogMzVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxuICAgIHBhZGRpbmc6IDFweDtcXG59XFxuXFxuLmhvdmVyZWQge1xcbiAgICBmaWx0ZXI6IGludmVydCg1NCUpIHNlcGlhKDMlKSBzYXR1cmF0ZSgyNSUpIGh1ZS1yb3RhdGUoMjdkZWcpIGJyaWdodG5lc3MoOTIlKSBjb250cmFzdCg4OCUpO1xcbn1cXG5cXG4uZmlsdGVyLXdoaXRlIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc0ODglKSBodWUtcm90YXRlKDFkZWcpIGJyaWdodG5lc3MoMTAzJSkgY29udHJhc3QoOTklKTtcXG59XFxuXFxuLyogRHJvcGRvd24gICovXFxuLmRyb3Bkb3duIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbn1cXG5cXG4jbWVudSB7XFxuICAgIHdpZHRoOiAzOHB4O1xcbiAgICBoZWlnaHQ6IDM4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmRyb3Bkb3duLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgLjgpO1xcbiAgICB6LWluZGV4OiA1O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI2MUVCO1xcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG59XFxuXFxuLnNob3cge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5tZW51LWl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk5N0VFO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgcHJvamVjdHMgPSBbXG4gICAge1xuICAgIG5hbWU6ICdNYWluJyxcbiAgICB0YXNrczogW10sXG4gICAgfSxcbl07XG5cbmNvbnN0IHVwZGF0ZSA9IChpbmRleCwgcHJvcGVydHksIHZhbHVlKSA9PiB7XG4gICAgcHJvamVjdHNbaW5kZXhdW3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RzKTtcbn1cblxuY29uc3QgY3JlYXRlID0gKG5hbWUsIHRhc2tzKSA9PiB7XG4gICAgcmV0dXJuIHtuYW1lLCB0YXNrc307XG59XG5cbmNvbnN0IGJsYW5rID0gKCkgPT4ge1xuICAgIHByb2plY3RzLnB1c2goY3JlYXRlKCcnLCAnJykpO1xufVxuXG5jb25zdCBhZGQgPSAoaW5kZXgsIHRhc2spID0+IHtcbiAgICBwcm9qZWN0c1tpbmRleF0udGFza3MucHVzaCh0YXNrKTtcbn1cblxuY29uc3QgZGVsID0gKGlkKSA9PiB7XG4gICAgcHJvamVjdHMuc3BsaWNlKGlkLCAxKTtcbn1cblxuZXhwb3J0IHtwcm9qZWN0cywgYmxhbmssIGFkZCwgZGVsLCB1cGRhdGV9OyIsImltcG9ydCAqIGFzIHRhc2tzRG9tIGZyb20gJy4vdGFza3NEb20uanMnO1xuaW1wb3J0ICogYXMgcHJvamVjdHMgZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCBkZWxldGVJY29uIGZyb20gJy4uL2ltYWdlcy9kZWxldGUuc3ZnJztcblxuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdi1wcm9qZWN0cycpO1xuY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcHJvamVjdCcpO1xuXG5jb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gICAgXG4gICAgXG4gICAgY29uc3QgZG9tUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC13cmFwcGVyJyk7XG4gICAgZG9tUHJvamVjdHMuZm9yRWFjaChlID0+IGUucmVtb3ZlKCkpO1xuICAgIFxuICAgIGZvcihsZXQgaT0wOyBpIDwgcHJvamVjdHMucHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB3cmFwcGVyLmlkID0gYHAke2l9YDtcbiAgICAgICAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3Qtd3JhcHBlcicpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcHJvaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHByb2ouc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdQcm9qZWN0Jyk7XG4gICAgICAgIHByb2ouY2xhc3NMaXN0LmFkZCgnbmF2Jyk7XG4gICAgICAgIHByb2ouY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgICAgICBwcm9qLnZhbHVlID0gcHJvamVjdHMucHJvamVjdHNbaV0ubmFtZTtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChwcm9qKTtcbiAgICAgICAgcHJvai5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVDaGFuZ2UpO1xuXG4gICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcuc3JjID0gZGVsZXRlSWNvbjtcbiAgICAgICAgaW1nLmlkID0gJ2RlbGV0ZS1pY29uJztcbiAgICAgICAgaW1nLmFsdCA9ICdEZWxldGUgaWNvbic7XG4gICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZVByb2plY3QpO1xuXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoaW1nKTtcblxuICAgICAgICBuYXYuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIG5ld1Byb2plY3RCdG4pO1xuICAgIH1cbn1cblxuY29uc3QgYWRkUHJvamVjdCA9ICgpID0+IHtcbiAgICBwcm9qZWN0cy5ibGFuaygpO1xuICAgIHJlbmRlcigpO1xuICAgIHRhc2tzRG9tLnJlbmRlcigpO1xufVxuXG5jb25zdCByZW1vdmVQcm9qZWN0ID0gKGUpID0+IHtcbiAgICBsZXQgZWwgPSBlLnRhcmdldC5jbG9zZXN0KCcucHJvamVjdC13cmFwcGVyJyk7XG4gICAgbGV0IGlkID0gZWwuaWQuc2xpY2UoLTEpO1xuICAgIHByb2plY3RzLmRlbChpZCk7XG4gICAgZWwucmVtb3ZlKCk7XG4gICAgdGFza3NEb20ucmVuZGVyKCk7XG59XG5cbmNvbnN0IGxpc3RlbiA9ICgpID0+IHtcbiAgICBuZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkUHJvamVjdCk7XG59XG5cbmNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgbGV0IGlkID0gZS50YXJnZXQuY2xvc2VzdCgnLnByb2plY3Qtd3JhcHBlcicpLmlkLnNsaWNlKC0xKTtcbiAgICBsZXQgdmFsdWUgPSBlLnRhcmdldC5jbG9zZXN0KCcucHJvamVjdCcpLnZhbHVlO1xuICAgIHByb2plY3RzLnVwZGF0ZShpZCwgJ25hbWUnLCB2YWx1ZSk7XG4gICAgdGFza3NEb20ucmVuZGVyKCk7XG59XG5cbmV4cG9ydCB7cmVuZGVyLCBsaXN0ZW59OyIsImxldCB0YXNrcyA9IFt7XG4gICAgdGl0bGU6ICdSdW4nLFxuICAgIGRlc2NyaXB0aW9uOiAnR28gcnVubmluZycsXG4gICAgc3RhcnJlZDogZmFsc2UsXG4gICAgZHVlOiAnMjAyMi0wNi0yMScsXG4gICAgcHJvamVjdDogJycsXG59XTtcblxuY29uc3QgdXBkYXRlID0gKGluZGV4LCBwcm9wZXJ0eSwgdmFsdWUpID0+IHtcbiAgICB0YXNrc1tpbmRleF1bcHJvcGVydHldID0gdmFsdWU7XG4gICAgY29uc29sZS5sb2codGFza3NbaW5kZXhdKTtcbn1cblxuY29uc3QgY3JlYXRlID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgc3RhcnJlZCwgZHVlLCBwcm9qZWN0KSA9PiB7XG4gICAgICAgIHJldHVybiB7dGl0bGUsIGRlc2NyaXB0aW9uLCBzdGFycmVkLCBkdWUsIHByb2plY3R9O1xuICAgIH1cblxuY29uc3QgYmxhbmsgPSAoKSA9PiB7XG4gICAgdGFza3MucHVzaChjcmVhdGUoJycsICcnLCAnJywgJycsICcnKSk7XG59XG5jb25zdCBkZWwgPSAoaWQpID0+IHtcbiAgICB0YXNrcy5zcGxpY2UoaWQsIDEpO1xufVxuXG5jb25zdCB0b2dnbGVTdGFycmVkID0gKGluZGV4KSA9PiB7XG4gICAgaWYgKHRhc2tzW2luZGV4XS5zdGFycmVkID09PSBmYWxzZSkge1xuICAgICAgICB0YXNrc1tpbmRleF0uc3RhcnJlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGFza3NbaW5kZXhdLnN0YXJyZWQgPSBmYWxzZTtcbiAgICB9XG59XG5cbmV4cG9ydCB7dXBkYXRlLCBjcmVhdGUsIHRhc2tzLCBibGFuaywgZGVsLCB0b2dnbGVTdGFycmVkfTsiLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gJy4vcHJvamVjdHMuanMnO1xuaW1wb3J0ICogYXMgdGFza21vZCBmcm9tICcuL3Rhc2tzLmpzJztcbmltcG9ydCBtZW51MSBmcm9tICcuLi9pbWFnZXMvbWVudS5zdmcnO1xuaW1wb3J0IHN0YXIxIGZyb20gJy4uL2ltYWdlcy9zdGFyLnN2Zyc7XG5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpO1xuY29uc3QgbmV3VGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctdGFzaycpO1xuY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcHJvamVjdCcpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZURyb3ApO1xuXG5mdW5jdGlvbiBsaXN0ZW4oKSB7XG4gICAgbmV3VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld1Rhc2tDbGljayk7XG5cbn1cblxuZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJykuZm9yRWFjaCgoZSkgPT4ge2UucmVtb3ZlKCl9KTtcblxuICAgIGZvcihsZXQgaT0wOyBpIDwgdGFza21vZC50YXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YXNrLmlkID0gYCR7aX1gO1xuICAgICAgICAgICAgdGFzay5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICAgICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1RpdGxlJyk7XG4gICAgICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ21pbmxlbmd0aCcsICcxJyk7XG4gICAgICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsICcyNScpO1xuICAgICAgICAgICAgdGl0bGUudmFsdWUgPSB0YXNrbW9kLnRhc2tzW2ldLnRpdGxlO1xuICAgICAgICAgICAgdGFzay5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgICAgICB0aXRsZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVDaGFuZ2UpO1xuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdEZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdtaW5sZW5ndGgnLCAnMScpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnMTExJyk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbi52YWx1ZSA9IHRhc2ttb2QudGFza3NbaV0uZGVzY3JpcHRpb247XG4gICAgICAgICAgICB0YXNrLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZUNoYW5nZSk7XG5cbiAgICAgICAgY29uc3Qgc3RhciA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgc3Rhci5zcmMgPSBzdGFyMTtcbiAgICAgICAgICAgIHN0YXIuYWx0ID0gJ1N0YXIgaWNvbic7XG4gICAgICAgICAgICBzdGFyLmlkID0gJ3N0YXInO1xuICAgICAgICAgICAgdGFzay5hcHBlbmRDaGlsZChzdGFyKTtcbiAgICAgICAgICAgIHN0YXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVTdGFyKTtcbiAgICAgICAgICAgIHN0YXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgaG92ZXJTdGFyKTtcblxuICAgICAgICBjb25zdCBkdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgZHVlLmNsYXNzTGlzdC5hZGQoJ2R1ZScpO1xuICAgICAgICAgICAgZHVlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgICAgICAgICBkdWUudmFsdWUgPSB0YXNrbW9kLnRhc2tzW2ldLmR1ZTtcbiAgICAgICAgICAgIHRhc2suYXBwZW5kQ2hpbGQoZHVlKTtcbiAgICAgICAgICAgIGR1ZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVDaGFuZ2UpO1xuXG4gICAgICAgIGNvbnN0IGRyb3BEb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkcm9wRG93bi5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bicpO1xuXG4gICAgICAgICAgICBjb25zdCBtZW51ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgbWVudS5zcmMgPSBtZW51MTtcbiAgICAgICAgICAgICAgICBtZW51LmlkID0gJ21lbnUnO1xuICAgICAgICAgICAgICAgIG1lbnUuYWx0ID0gJ01lbnUgaWNvbic7XG4gICAgICAgICAgICAgICAgbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZURyb3ApO1xuXG4gICAgICAgICAgICAgICAgZHJvcERvd24uYXBwZW5kQ2hpbGQobWVudSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRyb3BEb3duQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGRyb3BEb3duQ29udGVudC5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bi1jb250ZW50Jyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgZGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZGVsLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgICAgICAgICAgICAgIGRlbC50ZXh0Q29udGVudCA9ICdEZWxldGUgVGFzayc7XG4gICAgICAgICAgICAgICAgZHJvcERvd25Db250ZW50LmFwcGVuZENoaWxkKGRlbCk7XG4gICAgICAgICAgICAgICAgZGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlVGFzayk7IFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IG1wcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LXByb2plY3QnKTtcbiAgICAgICAgICAgICAgICBtcHMuZm9yRWFjaChlID0+IGUucmVtb3ZlKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwcm9qID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHByb2ouaWQgPSBgbXAke2l9YDtcbiAgICAgICAgICAgICAgICAgICAgcHJvai5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvai50ZXh0Q29udGVudCA9IHByb2plY3RzW2ldLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIGRyb3BEb3duQ29udGVudC5hcHBlbmRDaGlsZChwcm9qKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvai5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzc2lnblRhc2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkcm9wRG93bi5hcHBlbmRDaGlsZChkcm9wRG93bkNvbnRlbnQpO1xuXG4gICAgICAgIHRhc2suYXBwZW5kQ2hpbGQoZHJvcERvd24pO1xuXG4gICAgICAgIG1haW4uaW5zZXJ0QmVmb3JlKHRhc2ssIG5ld1Rhc2tCdG4pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaG92ZXJTdGFyKGUpIHtcbiAgICBjb25zdCBzdGFyID0gZS50YXJnZXQuY2xvc2VzdCgnI3N0YXInKTtcbiAgICBzdGFyLmNsYXNzTGlzdC50b2dnbGUoJ2hvdmVyZWQnKTtcbn1cblxuZnVuY3Rpb24gYXNzaWduVGFzayhlKSB7XG4gICAgbGV0IHRJbmRleCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrJykuaWQ7XG4gICAgbGV0IHBOYW1lID0gZS50YXJnZXQuY2xvc2VzdCgnLm1lbnUtaXRlbScpLnRleHRDb250ZW50O1xuICAgIGxldCBwSW5kZXggPSBlLnRhcmdldC5jbG9zZXN0KCcubWVudS1pdGVtJykuaWQuc2xpY2UoLTEpO1xuXG4gICAgdGFza21vZC51cGRhdGUodEluZGV4LCAncHJvamVjdCcsIHBOYW1lKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VEcm9wKGUpIHtcbiAgICBpZiAoIWUudGFyZ2V0Lm1hdGNoZXMoJyNtZW51JykpIHtcbiAgICAgICAgbGV0IGRkYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bi1jb250ZW50Jyk7XG4gICAgICAgIGlmKGRkYy5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3cnKSkge1xuICAgICAgICAgICAgZGRjLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlRHJvcCgpIHtcbiAgICBsZXQgZGRjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duLWNvbnRlbnQnKTtcbiAgICBkZGMuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xuICAgIGxldCBwcm9wZXJ0eSA9IGUudGFyZ2V0LmNsYXNzTmFtZTtcbiAgICBsZXQgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBsZXQgaWQgPSBlLnRhcmdldC5jbG9zZXN0KCcudGFzaycpLmlkO1xuICAgIHRhc2ttb2QudXBkYXRlKGlkLCBwcm9wZXJ0eSwgdmFsdWUpXG59XG5cbmZ1bmN0aW9uIGhhbmRsZVN0YXIoKSB7XG4gICAgY29uc3Qgc3RhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFyJyk7XG4gICAgc3Rhci5jbGFzc0xpc3QudG9nZ2xlKCdmaWx0ZXItd2hpdGUnKTtcbiAgICBsZXQgaWQgPSBzdGFyLmNsb3Nlc3QoJy50YXNrJykuaWQ7XG4gICAgdGFza21vZC50b2dnbGVTdGFycmVkKGlkKTtcbn1cblxuZnVuY3Rpb24gbmV3VGFza0NsaWNrKCkge1xuICAgIHRhc2ttb2QuYmxhbmsoKTtcbiAgICByZW5kZXIoKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlVGFzayAoZSkge1xuICAgIGxldCBpZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrJykuaWQ7XG4gICAgdGFza21vZC5kZWwoaWQpO1xuICAgIHJlbmRlcigpO1xufVxuXG5leHBvcnQge2xpc3RlbiwgcmVuZGVyfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiXG5pbXBvcnQgKiBhcyB0YXNrc0RvbSBmcm9tICcuL2Fzc2V0cy9tb2R1bGVzL3Rhc2tzRG9tLmpzJztcbmltcG9ydCAqIGFzIHByb2pEb20gZnJvbSAnLi9hc3NldHMvbW9kdWxlcy9wcm9qZWN0c0RvbS5qcydcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG50YXNrc0RvbS5saXN0ZW4oKTtcbnRhc2tzRG9tLnJlbmRlcigpO1xucHJvakRvbS5saXN0ZW4oKTtcbnByb2pEb20ucmVuZGVyKClcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==