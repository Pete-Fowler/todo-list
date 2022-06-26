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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: oswald;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n    font-family: baloo;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n* {\n    font-family: oswald;\n}\nbody {\n    color: white;\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n    display: grid;\n    grid-template: 1fr 11fr / 1fr 3fr;\n    grid-template-areas: \n    \"header header\"\n    \"nav main\";\n}\n\n#header {\n    display: flex; \n    justify-content: center;\n    align-items: center;\n    font-size: 3rem;\n    font-weight: 700;\n    background-color: #3261EB;\n    grid-area: header;\n}\n\n#title {\n    font-family: baloo;\n}\n\n#nav {\n    background-color: #274BB8;\n    grid-area: nav;\n}\n\n#nav-top {\n    display: flex;\n    flex-direction: column;\n    padding: 5px;\n}\n\n.nav {\n    font-size: 2rem;\n    color: white;\n    height: 100%;\n    border-radius: 10px;\n    border: 0px;\n    margin: 5px 2px;\n    padding: 10px;\n    background-color: #274BB8;\n    text-align: left;\n    transition: .6s;\n}\n\n#delete-icon {\n    height: 30px;\n    width: 30px;\n    transition: .6s;\n}\n\n#delete-icon:hover {\n    transform: scale(1.3);\n}\n\n.nav:hover, .active {\n    background-color: #7997EE;\n}\n\n.project-wrapper {\n    display: flex;\n    align-items: center;\n    padding: 5px;\n}\n\n.project {\n    flex: 7; \n}\n\n#nav hr {\n    color: white;\n    background-color: white;\n    height: 1px;\n    width: 95%;\n}\n\n#new-project, #new-task {\n    color: white;\n    font-size: 4rem;\n    height: 50px;\n    width: 50px;\n    border: 0px;\n    border-radius: 10px;\n    margin: 10px;\n    background-color: #274BB8;\n    transition: .6s;\n}\n\n#new-project:hover, #new-task:hover {\n    transform: scale(1.3);\n}\n\n#new-task {\n    background-color: #7997EE;\n    align-self: flex-start;\n}\n\n/* Main */\n#main {\n    display: grid;\n    grid-template: repeat(auto-fill, 50px) / 1fr;\n    grid-auto-rows: 50px;\n    gap: 10px;\n    padding: 10px;\n    align-items: center;\n    background-color: #7997EE;\n    grid-area: main;\n    overflow: auto;\n}\n\n.task {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    margin: 0px;\n    background-color: #274BB8;\n    border-radius: 10px;\n    box-shadow: 2px 2px 6px rgba(0, 0, 0, .8);\n}\n\n.task input, .task label, .dropdown-button {\n    color: white;\n    font-size: 1.5rem;\n    background-color: inherit;\n    height: 70%;\n    border: none;\n    border-radius: 5px;\n    padding: 0px 5px;\n    margin: 5px 10px;\n    transition: .4s;\n}\n\n.task input:hover, .task label:hover, #menu:hover  {\n    background-color: #7997EE;\n}\n\n.task input:focus {\n    background-color: #7997EE;\n    border: 3px solid black;\n}\n\n.task input::placeholder{\n    color: white;\n    opacity: .6;\n}\n\n.description {\n    flex: 1 1 0;\n}\n\n.due {\n    width: 150px;\n}\n\n#star {\n    height: 35px;\n    width: 35px;\n    border-radius: 5px;\n    transition: .4s;\n    padding: 1px;\n}\n\n.hovered {\n    filter: invert(54%) sepia(3%) saturate(25%) hue-rotate(27deg) brightness(92%) contrast(88%);\n}\n\n.filter-white {\n    filter: invert(100%) sepia(0%) saturate(7488%) hue-rotate(1deg) brightness(103%) contrast(99%);\n}\n\n/* Dropdown  */\n.dropdown {\n    position: relative;\n    display: inline-block;\n    margin: 0px;\n    padding: 5px;\n    padding-top: 10px;\n}\n\n#menu {\n    width: 38px;\n    height: 38px;\n    border-radius: 5px;\n}\n\n.dropdown-content {\n    display: none;\n    position: absolute;\n    right: 0;\n    box-shadow: 4px 4px 16px 0px rgba(0, 0, 0, .8);\n    z-index: 5;\n    color: white;\n    font-size: 1.3rem;\n    background-color: #3261EB;\n    min-height: 40px;\n    min-width: 200px;\n    border: none;\n    border-radius: 5px;\n    padding: 10px;\n    margin: 0px;\n    transition: .4s;\n}\n\n.show {\n    display: block;\n}\n\n.menu-item {\n    display: flex;\n    align-items: center;\n    padding: 5px;\n    transition: .4s;\n    border-radius: 5px;\n}\n\n.menu-item:hover {\n    background-color: #7997EE;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,4CAAqD;AACzD;;AAEA;IACI,kBAAkB;IAClB,4CAAuD;AAC3D;;AAEA;IACI,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,SAAS;IACT,aAAa;IACb,iCAAiC;IACjC;;cAEU;AACd;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,gBAAgB;IAChB,yBAAyB;IACzB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,WAAW;IACX,eAAe;IACf,aAAa;IACb,yBAAyB;IACzB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,YAAY;IACZ,uBAAuB;IACvB,WAAW;IACX,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,WAAW;IACX,WAAW;IACX,mBAAmB;IACnB,YAAY;IACZ,yBAAyB;IACzB,eAAe;AACnB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,yBAAyB;IACzB,sBAAsB;AAC1B;;AAEA,SAAS;AACT;IACI,aAAa;IACb,4CAA4C;IAC5C,oBAAoB;IACpB,SAAS;IACT,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,WAAW;IACX,yBAAyB;IACzB,mBAAmB;IACnB,yCAAyC;AAC7C;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,yBAAyB;IACzB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;IAChB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,2FAA2F;AAC/F;;AAEA;IACI,8FAA8F;AAClG;;AAEA,cAAc;AACd;IACI,kBAAkB;IAClB,qBAAqB;IACrB,WAAW;IACX,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,QAAQ;IACR,8CAA8C;IAC9C,UAAU;IACV,YAAY;IACZ,iBAAiB;IACjB,yBAAyB;IACzB,gBAAgB;IAChB,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;AAC7B","sourcesContent":["@font-face {\n    font-family: oswald;\n    src: url(./assets/fonts/Oswald-VariableFont_wght.ttf);\n}\n\n@font-face {\n    font-family: baloo;\n    src: url('./assets/fonts/Baloo2-VariableFont_wght.ttf');\n}\n\n* {\n    font-family: oswald;\n}\nbody {\n    color: white;\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n    display: grid;\n    grid-template: 1fr 11fr / 1fr 3fr;\n    grid-template-areas: \n    \"header header\"\n    \"nav main\";\n}\n\n#header {\n    display: flex; \n    justify-content: center;\n    align-items: center;\n    font-size: 3rem;\n    font-weight: 700;\n    background-color: #3261EB;\n    grid-area: header;\n}\n\n#title {\n    font-family: baloo;\n}\n\n#nav {\n    background-color: #274BB8;\n    grid-area: nav;\n}\n\n#nav-top {\n    display: flex;\n    flex-direction: column;\n    padding: 5px;\n}\n\n.nav {\n    font-size: 2rem;\n    color: white;\n    height: 100%;\n    border-radius: 10px;\n    border: 0px;\n    margin: 5px 2px;\n    padding: 10px;\n    background-color: #274BB8;\n    text-align: left;\n    transition: .6s;\n}\n\n#delete-icon {\n    height: 30px;\n    width: 30px;\n    transition: .6s;\n}\n\n#delete-icon:hover {\n    transform: scale(1.3);\n}\n\n.nav:hover, .active {\n    background-color: #7997EE;\n}\n\n.project-wrapper {\n    display: flex;\n    align-items: center;\n    padding: 5px;\n}\n\n.project {\n    flex: 7; \n}\n\n#nav hr {\n    color: white;\n    background-color: white;\n    height: 1px;\n    width: 95%;\n}\n\n#new-project, #new-task {\n    color: white;\n    font-size: 4rem;\n    height: 50px;\n    width: 50px;\n    border: 0px;\n    border-radius: 10px;\n    margin: 10px;\n    background-color: #274BB8;\n    transition: .6s;\n}\n\n#new-project:hover, #new-task:hover {\n    transform: scale(1.3);\n}\n\n#new-task {\n    background-color: #7997EE;\n    align-self: flex-start;\n}\n\n/* Main */\n#main {\n    display: grid;\n    grid-template: repeat(auto-fill, 50px) / 1fr;\n    grid-auto-rows: 50px;\n    gap: 10px;\n    padding: 10px;\n    align-items: center;\n    background-color: #7997EE;\n    grid-area: main;\n    overflow: auto;\n}\n\n.task {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    margin: 0px;\n    background-color: #274BB8;\n    border-radius: 10px;\n    box-shadow: 2px 2px 6px rgba(0, 0, 0, .8);\n}\n\n.task input, .task label, .dropdown-button {\n    color: white;\n    font-size: 1.5rem;\n    background-color: inherit;\n    height: 70%;\n    border: none;\n    border-radius: 5px;\n    padding: 0px 5px;\n    margin: 5px 10px;\n    transition: .4s;\n}\n\n.task input:hover, .task label:hover, #menu:hover  {\n    background-color: #7997EE;\n}\n\n.task input:focus {\n    background-color: #7997EE;\n    border: 3px solid black;\n}\n\n.task input::placeholder{\n    color: white;\n    opacity: .6;\n}\n\n.description {\n    flex: 1 1 0;\n}\n\n.due {\n    width: 150px;\n}\n\n#star {\n    height: 35px;\n    width: 35px;\n    border-radius: 5px;\n    transition: .4s;\n    padding: 1px;\n}\n\n.hovered {\n    filter: invert(54%) sepia(3%) saturate(25%) hue-rotate(27deg) brightness(92%) contrast(88%);\n}\n\n.filter-white {\n    filter: invert(100%) sepia(0%) saturate(7488%) hue-rotate(1deg) brightness(103%) contrast(99%);\n}\n\n/* Dropdown  */\n.dropdown {\n    position: relative;\n    display: inline-block;\n    margin: 0px;\n    padding: 5px;\n    padding-top: 10px;\n}\n\n#menu {\n    width: 38px;\n    height: 38px;\n    border-radius: 5px;\n}\n\n.dropdown-content {\n    display: none;\n    position: absolute;\n    right: 0;\n    box-shadow: 4px 4px 16px 0px rgba(0, 0, 0, .8);\n    z-index: 5;\n    color: white;\n    font-size: 1.3rem;\n    background-color: #3261EB;\n    min-height: 40px;\n    min-width: 200px;\n    border: none;\n    border-radius: 5px;\n    padding: 10px;\n    margin: 0px;\n    transition: .4s;\n}\n\n.show {\n    display: block;\n}\n\n.menu-item {\n    display: flex;\n    align-items: center;\n    padding: 5px;\n    transition: .4s;\n    border-radius: 5px;\n}\n\n.menu-item:hover {\n    background-color: #7997EE;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks.js */ "./src/assets/modules/tasks.js");
/* harmony import */ var _images_delete_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/delete.svg */ "./src/assets/images/delete.svg");





const nav = document.querySelector('#nav-projects');
const newProjectBtn = document.querySelector('#new-project');
const all = document.querySelector('#all');
const starred = document.querySelector('#starred');
const today = document.querySelector('#today');
const thisWeek = document.querySelector('#this-week');

let currentView = 'all';
let currentArray = [_tasks_js__WEBPACK_IMPORTED_MODULE_2__.tasks];

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
        img.src = _images_delete_svg__WEBPACK_IMPORTED_MODULE_3__;
        img.id = 'delete-icon';
        img.alt = 'Delete icon';
        img.addEventListener('click', removeProject);

        wrapper.appendChild(img);

        nav.insertBefore(wrapper, newProjectBtn);
    }
}

function addProject() {
    _projects__WEBPACK_IMPORTED_MODULE_1__.blank();
    render();
    _tasksDom_js__WEBPACK_IMPORTED_MODULE_0__.render(currentArray);
}

const removeProject = (e) => {
    let el = e.target.closest('.project-wrapper');
    let id = el.id.slice(-1);
    _projects__WEBPACK_IMPORTED_MODULE_1__.del(id);
    el.remove();
    _tasksDom_js__WEBPACK_IMPORTED_MODULE_0__.render(currentArray);
}

const listen = () => {
    newProjectBtn.addEventListener('click', addProject);
    all.addEventListener('click', changeTasksView);
    starred.addEventListener('click', changeTasksView);
    today.addEventListener('click', changeTasksView);
    thisWeek.addEventListener('click', changeTasksView);
}

function changeTasksView(e) {
    let id = e.target.closest('button').id;
    currentView = id;

    if (currentView === 'all') {
        currentArray = _tasks_js__WEBPACK_IMPORTED_MODULE_2__.tasks;
        _tasksDom_js__WEBPACK_IMPORTED_MODULE_0__.render(currentArray);
    }
    if (currentView === 'starred') {
        currentArray = _tasks_js__WEBPACK_IMPORTED_MODULE_2__.tasks.filter(object => object['starred'] === true);
        _tasksDom_js__WEBPACK_IMPORTED_MODULE_0__.render(currentArray);
    }  
    if (currentView === 'today') {
        let today = new Date()
        today = new Date(Date.UTC(today.getFullYear(),today.getMonth(), today.getDate()));
        today = today.toISOString().split('T')[0];
        currentArray = _tasks_js__WEBPACK_IMPORTED_MODULE_2__.tasks.filter(object => object['due'] === today);
        _tasksDom_js__WEBPACK_IMPORTED_MODULE_0__.render(currentArray);
    }
    if (currentView === 'this-week') {
        let today = new Date();
        today = new Date(Date.UTC(today.getFullYear(),today.getMonth(), today.getDate()));
        let week = new Date();
        week = new Date(Date.UTC(week.getFullYear(),week.getMonth(), week.getDate()));
        week.setDate(today.getDate() + 7);

        currentArray = _tasks_js__WEBPACK_IMPORTED_MODULE_2__.tasks.filter((object) => {
            let date = new Date(Date.parse(object['due']));
            console.log(today);
            console.log(date);
            console.log(week);
            return (date >= today && date <= week);
        });
        _tasksDom_js__WEBPACK_IMPORTED_MODULE_0__.render(currentArray);
    }
}

const handleChange = (e) => {
    let id = e.target.closest('.project-wrapper').id.slice(-1);
    let value = e.target.closest('.project').value;
    _projects__WEBPACK_IMPORTED_MODULE_1__.update(id, 'name', value);
    _tasksDom_js__WEBPACK_IMPORTED_MODULE_0__.render(currentArray);
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
/* harmony export */   "getTasks": () => (/* binding */ getTasks),
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

const getTasks = () => {
    return tasks;
}

const update = (index, property, value) => {
    tasks[index][property] = value;
}

const create = (title, description, starred, due, project) => {
        return {title, description, starred, due, project};
    }

const blank = () => {
    tasks.push(create('', '', false, '', ''));
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

function render(array = _tasks_js__WEBPACK_IMPORTED_MODULE_1__.tasks) {
    document.querySelectorAll('.task').forEach((e) => {e.remove()});

    for(let i=0; i < array.length; i++) {
        const task = document.createElement('div');
            task.id = `${i}`;
            task.classList.add('task');

        const title = document.createElement('input');
            title.classList.add('title');
            title.setAttribute('type', 'text');
            title.setAttribute('placeholder', 'Title');
            title.setAttribute('minlength', '1');
            title.setAttribute('maxlength', '25');
            title.value = array[i].title;
            task.appendChild(title);
            title.addEventListener('change', handleChange);

        const description = document.createElement('input');
            description.classList.add('description');
            description.setAttribute('type', 'text');
            description.setAttribute('placeholder', 'Description');
            description.setAttribute('minlength', '1');
            description.setAttribute('maxlength', '111');
            description.value = array[i].description;
            task.appendChild(description);
            description.addEventListener('change', handleChange);

        const star = new Image();
            star.src = _images_star_svg__WEBPACK_IMPORTED_MODULE_3__;
            star.alt = 'Star icon';
            star.id = 'star';
            if (array[i].starred === true) {
                star.classList.add('filter-white');
            }
            task.appendChild(star);
            star.addEventListener('click', handleStar);
            star.addEventListener('mouseover', overStar);
            star.addEventListener('mouseout', outStar);

        const due = document.createElement('input');
            due.classList.add('due');
            due.setAttribute('type', 'date');
            due.value = array[i].due;
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

function overStar(e) {
    const star = e.target.closest('#star');
    star.classList.add('hovered');
}

function outStar(e) {
    const star = e.target.closest('#star');
    star.classList.remove('hovered');
}

function assignTask(e) {
    let tIndex = e.target.closest('.task').id;
    let pName = e.target.closest('.menu-item').textContent;
    // let pIndex = e.target.closest('.menu-item').id.slice(-1);

    _tasks_js__WEBPACK_IMPORTED_MODULE_1__.update(tIndex, 'project', pName);
}

function closeDrop(e) {
    if (!e.target.matches('#menu')) {
        let ddc = document.querySelector('.dropdown-content');
        if(ddc === null) {return}
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

function handleStar(e) {
    const star = e.target.closest('#star');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QyxtS0FBOEQ7QUFDMUcsNENBQTRDLG1LQUE4RDtBQUMxRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLHNEQUFzRCwwQkFBMEIsMkRBQTJELEdBQUcsZ0JBQWdCLHlCQUF5QiwyREFBMkQsR0FBRyxPQUFPLDBCQUEwQixHQUFHLFFBQVEsbUJBQW1CLG9CQUFvQixtQkFBbUIsZ0JBQWdCLG9CQUFvQix3Q0FBd0MscUVBQXFFLEdBQUcsYUFBYSxxQkFBcUIsOEJBQThCLDBCQUEwQixzQkFBc0IsdUJBQXVCLGdDQUFnQyx3QkFBd0IsR0FBRyxZQUFZLHlCQUF5QixHQUFHLFVBQVUsZ0NBQWdDLHFCQUFxQixHQUFHLGNBQWMsb0JBQW9CLDZCQUE2QixtQkFBbUIsR0FBRyxVQUFVLHNCQUFzQixtQkFBbUIsbUJBQW1CLDBCQUEwQixrQkFBa0Isc0JBQXNCLG9CQUFvQixnQ0FBZ0MsdUJBQXVCLHNCQUFzQixHQUFHLGtCQUFrQixtQkFBbUIsa0JBQWtCLHNCQUFzQixHQUFHLHdCQUF3Qiw0QkFBNEIsR0FBRyx5QkFBeUIsZ0NBQWdDLEdBQUcsc0JBQXNCLG9CQUFvQiwwQkFBMEIsbUJBQW1CLEdBQUcsY0FBYyxlQUFlLEdBQUcsYUFBYSxtQkFBbUIsOEJBQThCLGtCQUFrQixpQkFBaUIsR0FBRyw2QkFBNkIsbUJBQW1CLHNCQUFzQixtQkFBbUIsa0JBQWtCLGtCQUFrQiwwQkFBMEIsbUJBQW1CLGdDQUFnQyxzQkFBc0IsR0FBRyx5Q0FBeUMsNEJBQTRCLEdBQUcsZUFBZSxnQ0FBZ0MsNkJBQTZCLEdBQUcsdUJBQXVCLG9CQUFvQixtREFBbUQsMkJBQTJCLGdCQUFnQixvQkFBb0IsMEJBQTBCLGdDQUFnQyxzQkFBc0IscUJBQXFCLEdBQUcsV0FBVyxvQkFBb0IsMEJBQTBCLGtCQUFrQixtQkFBbUIsa0JBQWtCLGdDQUFnQywwQkFBMEIsZ0RBQWdELEdBQUcsZ0RBQWdELG1CQUFtQix3QkFBd0IsZ0NBQWdDLGtCQUFrQixtQkFBbUIseUJBQXlCLHVCQUF1Qix1QkFBdUIsc0JBQXNCLEdBQUcsd0RBQXdELGdDQUFnQyxHQUFHLHVCQUF1QixnQ0FBZ0MsOEJBQThCLEdBQUcsNkJBQTZCLG1CQUFtQixrQkFBa0IsR0FBRyxrQkFBa0Isa0JBQWtCLEdBQUcsVUFBVSxtQkFBbUIsR0FBRyxXQUFXLG1CQUFtQixrQkFBa0IseUJBQXlCLHNCQUFzQixtQkFBbUIsR0FBRyxjQUFjLGtHQUFrRyxHQUFHLG1CQUFtQixxR0FBcUcsR0FBRyxnQ0FBZ0MseUJBQXlCLDRCQUE0QixrQkFBa0IsbUJBQW1CLHdCQUF3QixHQUFHLFdBQVcsa0JBQWtCLG1CQUFtQix5QkFBeUIsR0FBRyx1QkFBdUIsb0JBQW9CLHlCQUF5QixlQUFlLHFEQUFxRCxpQkFBaUIsbUJBQW1CLHdCQUF3QixnQ0FBZ0MsdUJBQXVCLHVCQUF1QixtQkFBbUIseUJBQXlCLG9CQUFvQixrQkFBa0Isc0JBQXNCLEdBQUcsV0FBVyxxQkFBcUIsR0FBRyxnQkFBZ0Isb0JBQW9CLDBCQUEwQixtQkFBbUIsc0JBQXNCLHlCQUF5QixHQUFHLHNCQUFzQixnQ0FBZ0MsR0FBRyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxVQUFVLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxzQ0FBc0MsMEJBQTBCLDREQUE0RCxHQUFHLGdCQUFnQix5QkFBeUIsOERBQThELEdBQUcsT0FBTywwQkFBMEIsR0FBRyxRQUFRLG1CQUFtQixvQkFBb0IsbUJBQW1CLGdCQUFnQixvQkFBb0Isd0NBQXdDLHFFQUFxRSxHQUFHLGFBQWEscUJBQXFCLDhCQUE4QiwwQkFBMEIsc0JBQXNCLHVCQUF1QixnQ0FBZ0Msd0JBQXdCLEdBQUcsWUFBWSx5QkFBeUIsR0FBRyxVQUFVLGdDQUFnQyxxQkFBcUIsR0FBRyxjQUFjLG9CQUFvQiw2QkFBNkIsbUJBQW1CLEdBQUcsVUFBVSxzQkFBc0IsbUJBQW1CLG1CQUFtQiwwQkFBMEIsa0JBQWtCLHNCQUFzQixvQkFBb0IsZ0NBQWdDLHVCQUF1QixzQkFBc0IsR0FBRyxrQkFBa0IsbUJBQW1CLGtCQUFrQixzQkFBc0IsR0FBRyx3QkFBd0IsNEJBQTRCLEdBQUcseUJBQXlCLGdDQUFnQyxHQUFHLHNCQUFzQixvQkFBb0IsMEJBQTBCLG1CQUFtQixHQUFHLGNBQWMsZUFBZSxHQUFHLGFBQWEsbUJBQW1CLDhCQUE4QixrQkFBa0IsaUJBQWlCLEdBQUcsNkJBQTZCLG1CQUFtQixzQkFBc0IsbUJBQW1CLGtCQUFrQixrQkFBa0IsMEJBQTBCLG1CQUFtQixnQ0FBZ0Msc0JBQXNCLEdBQUcseUNBQXlDLDRCQUE0QixHQUFHLGVBQWUsZ0NBQWdDLDZCQUE2QixHQUFHLHVCQUF1QixvQkFBb0IsbURBQW1ELDJCQUEyQixnQkFBZ0Isb0JBQW9CLDBCQUEwQixnQ0FBZ0Msc0JBQXNCLHFCQUFxQixHQUFHLFdBQVcsb0JBQW9CLDBCQUEwQixrQkFBa0IsbUJBQW1CLGtCQUFrQixnQ0FBZ0MsMEJBQTBCLGdEQUFnRCxHQUFHLGdEQUFnRCxtQkFBbUIsd0JBQXdCLGdDQUFnQyxrQkFBa0IsbUJBQW1CLHlCQUF5Qix1QkFBdUIsdUJBQXVCLHNCQUFzQixHQUFHLHdEQUF3RCxnQ0FBZ0MsR0FBRyx1QkFBdUIsZ0NBQWdDLDhCQUE4QixHQUFHLDZCQUE2QixtQkFBbUIsa0JBQWtCLEdBQUcsa0JBQWtCLGtCQUFrQixHQUFHLFVBQVUsbUJBQW1CLEdBQUcsV0FBVyxtQkFBbUIsa0JBQWtCLHlCQUF5QixzQkFBc0IsbUJBQW1CLEdBQUcsY0FBYyxrR0FBa0csR0FBRyxtQkFBbUIscUdBQXFHLEdBQUcsZ0NBQWdDLHlCQUF5Qiw0QkFBNEIsa0JBQWtCLG1CQUFtQix3QkFBd0IsR0FBRyxXQUFXLGtCQUFrQixtQkFBbUIseUJBQXlCLEdBQUcsdUJBQXVCLG9CQUFvQix5QkFBeUIsZUFBZSxxREFBcUQsaUJBQWlCLG1CQUFtQix3QkFBd0IsZ0NBQWdDLHVCQUF1Qix1QkFBdUIsbUJBQW1CLHlCQUF5QixvQkFBb0Isa0JBQWtCLHNCQUFzQixHQUFHLFdBQVcscUJBQXFCLEdBQUcsZ0JBQWdCLG9CQUFvQiwwQkFBMEIsbUJBQW1CLHNCQUFzQix5QkFBeUIsR0FBRyxzQkFBc0IsZ0NBQWdDLEdBQUcsbUJBQW1CO0FBQ3hpVTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1oxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0RBQW9EOztBQUVwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM1QmE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjBDO0FBQ0g7QUFDQTtBQUNPOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsNENBQWM7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLElBQUksc0RBQXdCLEVBQUU7QUFDL0M7QUFDQSx5QkFBeUIsRUFBRTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsK0NBQWlCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsK0NBQVU7QUFDNUI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksNENBQWM7QUFDbEI7QUFDQSxJQUFJLGdEQUFlO0FBQ25COztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksMENBQVk7QUFDaEI7QUFDQSxJQUFJLGdEQUFlO0FBQ25COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1Qiw0Q0FBYztBQUNyQyxRQUFRLGdEQUFlO0FBQ3ZCO0FBQ0E7QUFDQSx1QkFBdUIsbURBQXFCO0FBQzVDLFFBQVEsZ0RBQWU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixtREFBcUI7QUFDNUMsUUFBUSxnREFBZTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsbURBQXFCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUSxnREFBZTtBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksNkNBQWU7QUFDbkIsSUFBSSxnREFBZTtBQUNuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDeUM7QUFDSDtBQUNDO0FBQ0E7O0FBRXZDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLHdCQUF3Qiw0Q0FBYTtBQUNyQyx1REFBdUQsV0FBVzs7QUFFbEUsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBLHlCQUF5QixFQUFFO0FBQzNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsNkNBQUs7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsNkNBQUs7QUFDaEM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsSUFBSSx5REFBZSxFQUFFO0FBQ3JEO0FBQ0EsbUNBQW1DLEVBQUU7QUFDckM7QUFDQSx1Q0FBdUMsa0RBQVE7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksNkNBQWM7QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZDQUFjO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvREFBcUI7QUFDekI7O0FBRUE7QUFDQSxJQUFJLDRDQUFhO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksMENBQVc7QUFDZjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUpBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQ3lEO0FBQ0M7QUFDckM7O0FBRXJCLCtEQUFlO0FBQ2YsK0RBQWU7QUFDZixrRUFBYztBQUNkLGtFQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy9tb2R1bGVzL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc3NldHMvbW9kdWxlcy9wcm9qZWN0c0RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL21vZHVsZXMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy9tb2R1bGVzL3Rhc2tzRG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9Pc3dhbGQtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvQmFsb28yLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IG9zd2FsZDtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IGJhbG9vO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcblxcbioge1xcbiAgICBmb250LWZhbWlseTogb3N3YWxkO1xcbn1cXG5ib2R5IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDExZnIgLyAxZnIgM2ZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgXFxcImhlYWRlciBoZWFkZXJcXFwiXFxuICAgIFxcXCJuYXYgbWFpblxcXCI7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4OyBcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMyNjFFQjtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxufVxcblxcbiN0aXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBiYWxvbztcXG59XFxuXFxuI25hdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzRCQjg7XFxuICAgIGdyaWQtYXJlYTogbmF2O1xcbn1cXG5cXG4jbmF2LXRvcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLm5hdiB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBtYXJnaW46IDVweCAycHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzRCQjg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHRyYW5zaXRpb246IC42cztcXG59XFxuXFxuI2RlbGV0ZS1pY29uIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgdHJhbnNpdGlvbjogLjZzO1xcbn1cXG5cXG4jZGVsZXRlLWljb246aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxufVxcblxcbi5uYXY6aG92ZXIsIC5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk5N0VFO1xcbn1cXG5cXG4ucHJvamVjdC13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGZsZXg6IDc7IFxcbn1cXG5cXG4jbmF2IGhyIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIHdpZHRoOiA5NSU7XFxufVxcblxcbiNuZXctcHJvamVjdCwgI25ldy10YXNrIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzRCQjg7XFxuICAgIHRyYW5zaXRpb246IC42cztcXG59XFxuXFxuI25ldy1wcm9qZWN0OmhvdmVyLCAjbmV3LXRhc2s6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxufVxcblxcbiNuZXctdGFzayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTk3RUU7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi8qIE1haW4gKi9cXG4jbWFpbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdChhdXRvLWZpbGwsIDUwcHgpIC8gMWZyO1xcbiAgICBncmlkLWF1dG8tcm93czogNTBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk5N0VFO1xcbiAgICBncmlkLWFyZWE6IG1haW47XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4udGFzayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc0QkI4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDZweCByZ2JhKDAsIDAsIDAsIC44KTtcXG59XFxuXFxuLnRhc2sgaW5wdXQsIC50YXNrIGxhYmVsLCAuZHJvcGRvd24tYnV0dG9uIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgaGVpZ2h0OiA3MCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAwcHggNXB4O1xcbiAgICBtYXJnaW46IDVweCAxMHB4O1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxufVxcblxcbi50YXNrIGlucHV0OmhvdmVyLCAudGFzayBsYWJlbDpob3ZlciwgI21lbnU6aG92ZXIgIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc5OTdFRTtcXG59XFxuXFxuLnRhc2sgaW5wdXQ6Zm9jdXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk5N0VFO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnRhc2sgaW5wdXQ6OnBsYWNlaG9sZGVye1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG9wYWNpdHk6IC42O1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgICBmbGV4OiAxIDEgMDtcXG59XFxuXFxuLmR1ZSB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG59XFxuXFxuI3N0YXIge1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHdpZHRoOiAzNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG4gICAgcGFkZGluZzogMXB4O1xcbn1cXG5cXG4uaG92ZXJlZCB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDU0JSkgc2VwaWEoMyUpIHNhdHVyYXRlKDI1JSkgaHVlLXJvdGF0ZSgyN2RlZykgYnJpZ2h0bmVzcyg5MiUpIGNvbnRyYXN0KDg4JSk7XFxufVxcblxcbi5maWx0ZXItd2hpdGUge1xcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNzQ4OCUpIGh1ZS1yb3RhdGUoMWRlZykgYnJpZ2h0bmVzcygxMDMlKSBjb250cmFzdCg5OSUpO1xcbn1cXG5cXG4vKiBEcm9wZG93biAgKi9cXG4uZHJvcGRvd24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxufVxcblxcbiNtZW51IHtcXG4gICAgd2lkdGg6IDM4cHg7XFxuICAgIGhlaWdodDogMzhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uZHJvcGRvd24tY29udGVudCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAuOCk7XFxuICAgIHotaW5kZXg6IDU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjYxRUI7XFxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XFxuICAgIG1pbi13aWR0aDogMjAwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcbn1cXG5cXG4uc2hvdyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLm1lbnUtaXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTk3RUU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsNENBQXFEO0FBQ3pEOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDRDQUF1RDtBQUMzRDs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osU0FBUztJQUNULGFBQWE7SUFDYixpQ0FBaUM7SUFDakM7O2NBRVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxlQUFlO0lBQ2YsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixzQkFBc0I7QUFDMUI7O0FBRUEsU0FBUztBQUNUO0lBQ0ksYUFBYTtJQUNiLDRDQUE0QztJQUM1QyxvQkFBb0I7SUFDcEIsU0FBUztJQUNULGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMkZBQTJGO0FBQy9GOztBQUVBO0lBQ0ksOEZBQThGO0FBQ2xHOztBQUVBLGNBQWM7QUFDZDtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLDhDQUE4QztJQUM5QyxVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogb3N3YWxkO1xcbiAgICBzcmM6IHVybCguL2Fzc2V0cy9mb250cy9Pc3dhbGQtVmFyaWFibGVGb250X3dnaHQudHRmKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBiYWxvbztcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL0JhbG9vMi1WYXJpYWJsZUZvbnRfd2dodC50dGYnKTtcXG59XFxuXFxuKiB7XFxuICAgIGZvbnQtZmFtaWx5OiBvc3dhbGQ7XFxufVxcbmJvZHkge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgMTFmciAvIDFmciAzZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXG4gICAgXFxcIm5hdiBtYWluXFxcIjtcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7IFxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI2MUVCO1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG59XFxuXFxuI3RpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6IGJhbG9vO1xcbn1cXG5cXG4jbmF2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3NEJCODtcXG4gICAgZ3JpZC1hcmVhOiBuYXY7XFxufVxcblxcbiNuYXYtdG9wIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ubmF2IHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIG1hcmdpbjogNXB4IDJweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3NEJCODtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgdHJhbnNpdGlvbjogLjZzO1xcbn1cXG5cXG4jZGVsZXRlLWljb24ge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICB0cmFuc2l0aW9uOiAuNnM7XFxufVxcblxcbiNkZWxldGUtaWNvbjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG59XFxuXFxuLm5hdjpob3ZlciwgLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTk3RUU7XFxufVxcblxcbi5wcm9qZWN0LXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgZmxleDogNzsgXFxufVxcblxcbiNuYXYgaHIge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgd2lkdGg6IDk1JTtcXG59XFxuXFxuI25ldy1wcm9qZWN0LCAjbmV3LXRhc2sge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3NEJCODtcXG4gICAgdHJhbnNpdGlvbjogLjZzO1xcbn1cXG5cXG4jbmV3LXByb2plY3Q6aG92ZXIsICNuZXctdGFzazpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG59XFxuXFxuI25ldy10YXNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc5OTdFRTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLyogTWFpbiAqL1xcbiNtYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KGF1dG8tZmlsbCwgNTBweCkgLyAxZnI7XFxuICAgIGdyaWQtYXV0by1yb3dzOiA1MHB4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTk3RUU7XFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi50YXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzRCQjg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNnB4IHJnYmEoMCwgMCwgMCwgLjgpO1xcbn1cXG5cXG4udGFzayBpbnB1dCwgLnRhc2sgbGFiZWwsIC5kcm9wZG93bi1idXR0b24ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBoZWlnaHQ6IDcwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDBweCA1cHg7XFxuICAgIG1hcmdpbjogNXB4IDEwcHg7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG59XFxuXFxuLnRhc2sgaW5wdXQ6aG92ZXIsIC50YXNrIGxhYmVsOmhvdmVyLCAjbWVudTpob3ZlciAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk5N0VFO1xcbn1cXG5cXG4udGFzayBpbnB1dDpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTk3RUU7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4udGFzayBpbnB1dDo6cGxhY2Vob2xkZXJ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgb3BhY2l0eTogLjY7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIGZsZXg6IDEgMSAwO1xcbn1cXG5cXG4uZHVlIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbn1cXG5cXG4jc3RhciB7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgd2lkdGg6IDM1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcbiAgICBwYWRkaW5nOiAxcHg7XFxufVxcblxcbi5ob3ZlcmVkIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoNTQlKSBzZXBpYSgzJSkgc2F0dXJhdGUoMjUlKSBodWUtcm90YXRlKDI3ZGVnKSBicmlnaHRuZXNzKDkyJSkgY29udHJhc3QoODglKTtcXG59XFxuXFxuLmZpbHRlci13aGl0ZSB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg3NDg4JSkgaHVlLXJvdGF0ZSgxZGVnKSBicmlnaHRuZXNzKDEwMyUpIGNvbnRyYXN0KDk5JSk7XFxufVxcblxcbi8qIERyb3Bkb3duICAqL1xcbi5kcm9wZG93biB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG59XFxuXFxuI21lbnUge1xcbiAgICB3aWR0aDogMzhweDtcXG4gICAgaGVpZ2h0OiAzOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5kcm9wZG93bi1jb250ZW50IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIC44KTtcXG4gICAgei1pbmRleDogNTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMyNjFFQjtcXG4gICAgbWluLWhlaWdodDogNDBweDtcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxufVxcblxcbi5zaG93IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ubWVudS1pdGVtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc5OTdFRTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHByb2plY3RzID0gW1xuICAgIHtcbiAgICBuYW1lOiAnTWFpbicsXG4gICAgdGFza3M6IFtdLFxuICAgIH0sXG5dO1xuXG5jb25zdCB1cGRhdGUgPSAoaW5kZXgsIHByb3BlcnR5LCB2YWx1ZSkgPT4ge1xuICAgIHByb2plY3RzW2luZGV4XVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbn1cblxuY29uc3QgY3JlYXRlID0gKG5hbWUsIHRhc2tzKSA9PiB7XG4gICAgcmV0dXJuIHtuYW1lLCB0YXNrc307XG59XG5cbmNvbnN0IGJsYW5rID0gKCkgPT4ge1xuICAgIHByb2plY3RzLnB1c2goY3JlYXRlKCcnLCAnJykpO1xufVxuXG5jb25zdCBhZGQgPSAoaW5kZXgsIHRhc2spID0+IHtcbiAgICBwcm9qZWN0c1tpbmRleF0udGFza3MucHVzaCh0YXNrKTtcbn1cblxuY29uc3QgZGVsID0gKGlkKSA9PiB7XG4gICAgcHJvamVjdHMuc3BsaWNlKGlkLCAxKTtcbn1cblxuZXhwb3J0IHtwcm9qZWN0cywgYmxhbmssIGFkZCwgZGVsLCB1cGRhdGV9OyIsImltcG9ydCAqIGFzIHRhc2tzRG9tIGZyb20gJy4vdGFza3NEb20uanMnO1xuaW1wb3J0ICogYXMgcHJvamVjdHMgZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCAqIGFzIHRhc2tzTW9kIGZyb20gJy4vdGFza3MuanMnO1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSAnLi4vaW1hZ2VzL2RlbGV0ZS5zdmcnO1xuXG5jb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2LXByb2plY3RzJyk7XG5jb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qZWN0Jyk7XG5jb25zdCBhbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWxsJyk7XG5jb25zdCBzdGFycmVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YXJyZWQnKTtcbmNvbnN0IHRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZGF5Jyk7XG5jb25zdCB0aGlzV2VlayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aGlzLXdlZWsnKTtcblxubGV0IGN1cnJlbnRWaWV3ID0gJ2FsbCc7XG5sZXQgY3VycmVudEFycmF5ID0gW3Rhc2tzTW9kLnRhc2tzXTtcblxuY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGRvbVByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3Qtd3JhcHBlcicpO1xuICAgIGRvbVByb2plY3RzLmZvckVhY2goZSA9PiBlLnJlbW92ZSgpKTtcbiAgICBcbiAgICBmb3IobGV0IGk9MDsgaSA8IHByb2plY3RzLnByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgd3JhcHBlci5pZCA9IGBwJHtpfWA7XG4gICAgICAgIHdyYXBwZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0LXdyYXBwZXInKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByb2ogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBwcm9qLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnUHJvamVjdCcpO1xuICAgICAgICBwcm9qLmNsYXNzTGlzdC5hZGQoJ25hdicpO1xuICAgICAgICBwcm9qLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAgICAgcHJvai52YWx1ZSA9IHByb2plY3RzLnByb2plY3RzW2ldLm5hbWU7XG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQocHJvaik7XG4gICAgICAgIHByb2ouYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlQ2hhbmdlKTtcblxuICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nLnNyYyA9IGRlbGV0ZUljb247XG4gICAgICAgIGltZy5pZCA9ICdkZWxldGUtaWNvbic7XG4gICAgICAgIGltZy5hbHQgPSAnRGVsZXRlIGljb24nO1xuICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVQcm9qZWN0KTtcblxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGltZyk7XG5cbiAgICAgICAgbmF2Lmluc2VydEJlZm9yZSh3cmFwcGVyLCBuZXdQcm9qZWN0QnRuKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3QoKSB7XG4gICAgcHJvamVjdHMuYmxhbmsoKTtcbiAgICByZW5kZXIoKTtcbiAgICB0YXNrc0RvbS5yZW5kZXIoY3VycmVudEFycmF5KTtcbn1cblxuY29uc3QgcmVtb3ZlUHJvamVjdCA9IChlKSA9PiB7XG4gICAgbGV0IGVsID0gZS50YXJnZXQuY2xvc2VzdCgnLnByb2plY3Qtd3JhcHBlcicpO1xuICAgIGxldCBpZCA9IGVsLmlkLnNsaWNlKC0xKTtcbiAgICBwcm9qZWN0cy5kZWwoaWQpO1xuICAgIGVsLnJlbW92ZSgpO1xuICAgIHRhc2tzRG9tLnJlbmRlcihjdXJyZW50QXJyYXkpO1xufVxuXG5jb25zdCBsaXN0ZW4gPSAoKSA9PiB7XG4gICAgbmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFByb2plY3QpO1xuICAgIGFsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZVRhc2tzVmlldyk7XG4gICAgc3RhcnJlZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZVRhc2tzVmlldyk7XG4gICAgdG9kYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VUYXNrc1ZpZXcpO1xuICAgIHRoaXNXZWVrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlVGFza3NWaWV3KTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlVGFza3NWaWV3KGUpIHtcbiAgICBsZXQgaWQgPSBlLnRhcmdldC5jbG9zZXN0KCdidXR0b24nKS5pZDtcbiAgICBjdXJyZW50VmlldyA9IGlkO1xuXG4gICAgaWYgKGN1cnJlbnRWaWV3ID09PSAnYWxsJykge1xuICAgICAgICBjdXJyZW50QXJyYXkgPSB0YXNrc01vZC50YXNrcztcbiAgICAgICAgdGFza3NEb20ucmVuZGVyKGN1cnJlbnRBcnJheSk7XG4gICAgfVxuICAgIGlmIChjdXJyZW50VmlldyA9PT0gJ3N0YXJyZWQnKSB7XG4gICAgICAgIGN1cnJlbnRBcnJheSA9IHRhc2tzTW9kLnRhc2tzLmZpbHRlcihvYmplY3QgPT4gb2JqZWN0WydzdGFycmVkJ10gPT09IHRydWUpO1xuICAgICAgICB0YXNrc0RvbS5yZW5kZXIoY3VycmVudEFycmF5KTtcbiAgICB9ICBcbiAgICBpZiAoY3VycmVudFZpZXcgPT09ICd0b2RheScpIHtcbiAgICAgICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKVxuICAgICAgICB0b2RheSA9IG5ldyBEYXRlKERhdGUuVVRDKHRvZGF5LmdldEZ1bGxZZWFyKCksdG9kYXkuZ2V0TW9udGgoKSwgdG9kYXkuZ2V0RGF0ZSgpKSk7XG4gICAgICAgIHRvZGF5ID0gdG9kYXkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xuICAgICAgICBjdXJyZW50QXJyYXkgPSB0YXNrc01vZC50YXNrcy5maWx0ZXIob2JqZWN0ID0+IG9iamVjdFsnZHVlJ10gPT09IHRvZGF5KTtcbiAgICAgICAgdGFza3NEb20ucmVuZGVyKGN1cnJlbnRBcnJheSk7XG4gICAgfVxuICAgIGlmIChjdXJyZW50VmlldyA9PT0gJ3RoaXMtd2VlaycpIHtcbiAgICAgICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgdG9kYXkgPSBuZXcgRGF0ZShEYXRlLlVUQyh0b2RheS5nZXRGdWxsWWVhcigpLHRvZGF5LmdldE1vbnRoKCksIHRvZGF5LmdldERhdGUoKSkpO1xuICAgICAgICBsZXQgd2VlayA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHdlZWsgPSBuZXcgRGF0ZShEYXRlLlVUQyh3ZWVrLmdldEZ1bGxZZWFyKCksd2Vlay5nZXRNb250aCgpLCB3ZWVrLmdldERhdGUoKSkpO1xuICAgICAgICB3ZWVrLnNldERhdGUodG9kYXkuZ2V0RGF0ZSgpICsgNyk7XG5cbiAgICAgICAgY3VycmVudEFycmF5ID0gdGFza3NNb2QudGFza3MuZmlsdGVyKChvYmplY3QpID0+IHtcbiAgICAgICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoRGF0ZS5wYXJzZShvYmplY3RbJ2R1ZSddKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b2RheSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRlKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHdlZWspO1xuICAgICAgICAgICAgcmV0dXJuIChkYXRlID49IHRvZGF5ICYmIGRhdGUgPD0gd2Vlayk7XG4gICAgICAgIH0pO1xuICAgICAgICB0YXNrc0RvbS5yZW5kZXIoY3VycmVudEFycmF5KTtcbiAgICB9XG59XG5cbmNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgbGV0IGlkID0gZS50YXJnZXQuY2xvc2VzdCgnLnByb2plY3Qtd3JhcHBlcicpLmlkLnNsaWNlKC0xKTtcbiAgICBsZXQgdmFsdWUgPSBlLnRhcmdldC5jbG9zZXN0KCcucHJvamVjdCcpLnZhbHVlO1xuICAgIHByb2plY3RzLnVwZGF0ZShpZCwgJ25hbWUnLCB2YWx1ZSk7XG4gICAgdGFza3NEb20ucmVuZGVyKGN1cnJlbnRBcnJheSk7XG59XG5cbmV4cG9ydCB7cmVuZGVyLCBsaXN0ZW59OyIsImxldCB0YXNrcyA9IFt7XG4gICAgdGl0bGU6ICdSdW4nLFxuICAgIGRlc2NyaXB0aW9uOiAnR28gcnVubmluZycsXG4gICAgc3RhcnJlZDogZmFsc2UsXG4gICAgZHVlOiAnMjAyMi0wNi0yMScsXG4gICAgcHJvamVjdDogJycsXG59XTtcblxuY29uc3QgZ2V0VGFza3MgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRhc2tzO1xufVxuXG5jb25zdCB1cGRhdGUgPSAoaW5kZXgsIHByb3BlcnR5LCB2YWx1ZSkgPT4ge1xuICAgIHRhc2tzW2luZGV4XVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbn1cblxuY29uc3QgY3JlYXRlID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgc3RhcnJlZCwgZHVlLCBwcm9qZWN0KSA9PiB7XG4gICAgICAgIHJldHVybiB7dGl0bGUsIGRlc2NyaXB0aW9uLCBzdGFycmVkLCBkdWUsIHByb2plY3R9O1xuICAgIH1cblxuY29uc3QgYmxhbmsgPSAoKSA9PiB7XG4gICAgdGFza3MucHVzaChjcmVhdGUoJycsICcnLCBmYWxzZSwgJycsICcnKSk7XG59XG5jb25zdCBkZWwgPSAoaWQpID0+IHtcbiAgICB0YXNrcy5zcGxpY2UoaWQsIDEpO1xufVxuXG5jb25zdCB0b2dnbGVTdGFycmVkID0gKGluZGV4KSA9PiB7XG4gICAgaWYgKHRhc2tzW2luZGV4XS5zdGFycmVkID09PSBmYWxzZSkge1xuICAgICAgICB0YXNrc1tpbmRleF0uc3RhcnJlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGFza3NbaW5kZXhdLnN0YXJyZWQgPSBmYWxzZTtcbiAgICB9XG59XG5cbmV4cG9ydCB7dXBkYXRlLCBjcmVhdGUsIHRhc2tzLCBnZXRUYXNrcywgYmxhbmssIGRlbCwgdG9nZ2xlU3RhcnJlZH07IiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tICcuL3Byb2plY3RzLmpzJztcbmltcG9ydCAqIGFzIHRhc2ttb2QgZnJvbSAnLi90YXNrcy5qcyc7XG5pbXBvcnQgbWVudTEgZnJvbSAnLi4vaW1hZ2VzL21lbnUuc3ZnJztcbmltcG9ydCBzdGFyMSBmcm9tICcuLi9pbWFnZXMvc3Rhci5zdmcnO1xuXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKTtcbmNvbnN0IG5ld1Rhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXRhc2snKTtcbmNvbnN0IG5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QnKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VEcm9wKTtcblxuZnVuY3Rpb24gbGlzdGVuKCkge1xuICAgIG5ld1Rhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXdUYXNrQ2xpY2spO1xuXG59XG5cbmZ1bmN0aW9uIHJlbmRlcihhcnJheSA9IHRhc2ttb2QudGFza3MpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzaycpLmZvckVhY2goKGUpID0+IHtlLnJlbW92ZSgpfSk7XG5cbiAgICBmb3IobGV0IGk9MDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2suaWQgPSBgJHtpfWA7XG4gICAgICAgICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgICAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGl0bGUnKTtcbiAgICAgICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnbWlubGVuZ3RoJywgJzEnKTtcbiAgICAgICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJywgJzI1Jyk7XG4gICAgICAgICAgICB0aXRsZS52YWx1ZSA9IGFycmF5W2ldLnRpdGxlO1xuICAgICAgICAgICAgdGFzay5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgICAgICB0aXRsZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVDaGFuZ2UpO1xuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdEZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdtaW5sZW5ndGgnLCAnMScpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnMTExJyk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbi52YWx1ZSA9IGFycmF5W2ldLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgdGFzay5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVDaGFuZ2UpO1xuXG4gICAgICAgIGNvbnN0IHN0YXIgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIHN0YXIuc3JjID0gc3RhcjE7XG4gICAgICAgICAgICBzdGFyLmFsdCA9ICdTdGFyIGljb24nO1xuICAgICAgICAgICAgc3Rhci5pZCA9ICdzdGFyJztcbiAgICAgICAgICAgIGlmIChhcnJheVtpXS5zdGFycmVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgc3Rhci5jbGFzc0xpc3QuYWRkKCdmaWx0ZXItd2hpdGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhc2suYXBwZW5kQ2hpbGQoc3Rhcik7XG4gICAgICAgICAgICBzdGFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlU3Rhcik7XG4gICAgICAgICAgICBzdGFyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIG92ZXJTdGFyKTtcbiAgICAgICAgICAgIHN0YXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBvdXRTdGFyKTtcblxuICAgICAgICBjb25zdCBkdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgZHVlLmNsYXNzTGlzdC5hZGQoJ2R1ZScpO1xuICAgICAgICAgICAgZHVlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgICAgICAgICBkdWUudmFsdWUgPSBhcnJheVtpXS5kdWU7XG4gICAgICAgICAgICB0YXNrLmFwcGVuZENoaWxkKGR1ZSk7XG4gICAgICAgICAgICBkdWUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlQ2hhbmdlKTtcblxuICAgICAgICBcbiAgICAgICAgY29uc3QgZHJvcERvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRyb3BEb3duLmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IG1lbnUgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICBtZW51LnNyYyA9IG1lbnUxO1xuICAgICAgICAgICAgICAgIG1lbnUuaWQgPSAnbWVudSc7XG4gICAgICAgICAgICAgICAgbWVudS5hbHQgPSAnTWVudSBpY29uJztcbiAgICAgICAgICAgICAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlRHJvcCk7XG5cbiAgICAgICAgICAgICAgICBkcm9wRG93bi5hcHBlbmRDaGlsZChtZW51KTtcblxuICAgICAgICAgICAgY29uc3QgZHJvcERvd25Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZHJvcERvd25Db250ZW50LmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duLWNvbnRlbnQnKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBkZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBkZWwuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gICAgICAgICAgICAgICAgZGVsLnRleHRDb250ZW50ID0gJ0RlbGV0ZSBUYXNrJztcbiAgICAgICAgICAgICAgICBkcm9wRG93bkNvbnRlbnQuYXBwZW5kQ2hpbGQoZGVsKTtcbiAgICAgICAgICAgICAgICBkZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVUYXNrKTsgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgbXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtcHJvamVjdCcpO1xuICAgICAgICAgICAgICAgIG1wcy5mb3JFYWNoKGUgPT4gZS5yZW1vdmUpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb2ogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvai5pZCA9IGBtcCR7aX1gO1xuICAgICAgICAgICAgICAgICAgICBwcm9qLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qLnRleHRDb250ZW50ID0gcHJvamVjdHNbaV0ubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgZHJvcERvd25Db250ZW50LmFwcGVuZENoaWxkKHByb2opO1xuICAgICAgICAgICAgICAgICAgICBwcm9qLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXNzaWduVGFzayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRyb3BEb3duLmFwcGVuZENoaWxkKGRyb3BEb3duQ29udGVudCk7XG5cbiAgICAgICAgdGFzay5hcHBlbmRDaGlsZChkcm9wRG93bik7XG5cbiAgICAgICAgbWFpbi5pbnNlcnRCZWZvcmUodGFzaywgbmV3VGFza0J0bik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBvdmVyU3RhcihlKSB7XG4gICAgY29uc3Qgc3RhciA9IGUudGFyZ2V0LmNsb3Nlc3QoJyNzdGFyJyk7XG4gICAgc3Rhci5jbGFzc0xpc3QuYWRkKCdob3ZlcmVkJyk7XG59XG5cbmZ1bmN0aW9uIG91dFN0YXIoZSkge1xuICAgIGNvbnN0IHN0YXIgPSBlLnRhcmdldC5jbG9zZXN0KCcjc3RhcicpO1xuICAgIHN0YXIuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXJlZCcpO1xufVxuXG5mdW5jdGlvbiBhc3NpZ25UYXNrKGUpIHtcbiAgICBsZXQgdEluZGV4ID0gZS50YXJnZXQuY2xvc2VzdCgnLnRhc2snKS5pZDtcbiAgICBsZXQgcE5hbWUgPSBlLnRhcmdldC5jbG9zZXN0KCcubWVudS1pdGVtJykudGV4dENvbnRlbnQ7XG4gICAgLy8gbGV0IHBJbmRleCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5tZW51LWl0ZW0nKS5pZC5zbGljZSgtMSk7XG5cbiAgICB0YXNrbW9kLnVwZGF0ZSh0SW5kZXgsICdwcm9qZWN0JywgcE5hbWUpO1xufVxuXG5mdW5jdGlvbiBjbG9zZURyb3AoZSkge1xuICAgIGlmICghZS50YXJnZXQubWF0Y2hlcygnI21lbnUnKSkge1xuICAgICAgICBsZXQgZGRjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duLWNvbnRlbnQnKTtcbiAgICAgICAgaWYoZGRjID09PSBudWxsKSB7cmV0dXJufVxuICAgICAgICBpZihkZGMuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykpIHtcbiAgICAgICAgICAgIGRkYy5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZURyb3AoKSB7XG4gICAgbGV0IGRkYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bi1jb250ZW50Jyk7XG4gICAgZGRjLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICBsZXQgcHJvcGVydHkgPSBlLnRhcmdldC5jbGFzc05hbWU7XG4gICAgbGV0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgbGV0IGlkID0gZS50YXJnZXQuY2xvc2VzdCgnLnRhc2snKS5pZDtcbiAgICB0YXNrbW9kLnVwZGF0ZShpZCwgcHJvcGVydHksIHZhbHVlKVxufVxuXG5mdW5jdGlvbiBoYW5kbGVTdGFyKGUpIHtcbiAgICBjb25zdCBzdGFyID0gZS50YXJnZXQuY2xvc2VzdCgnI3N0YXInKTtcbiAgICBzdGFyLmNsYXNzTGlzdC50b2dnbGUoJ2ZpbHRlci13aGl0ZScpO1xuICAgIGxldCBpZCA9IHN0YXIuY2xvc2VzdCgnLnRhc2snKS5pZDtcbiAgICB0YXNrbW9kLnRvZ2dsZVN0YXJyZWQoaWQpO1xufVxuXG5mdW5jdGlvbiBuZXdUYXNrQ2xpY2soKSB7XG4gICAgdGFza21vZC5ibGFuaygpO1xuICAgIHJlbmRlcigpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVUYXNrIChlKSB7XG4gICAgbGV0IGlkID0gZS50YXJnZXQuY2xvc2VzdCgnLnRhc2snKS5pZDtcbiAgICB0YXNrbW9kLmRlbChpZCk7XG4gICAgcmVuZGVyKCk7XG59XG5cbmV4cG9ydCB7bGlzdGVuLCByZW5kZXJ9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJcbmltcG9ydCAqIGFzIHRhc2tzRG9tIGZyb20gJy4vYXNzZXRzL21vZHVsZXMvdGFza3NEb20uanMnO1xuaW1wb3J0ICogYXMgcHJvakRvbSBmcm9tICcuL2Fzc2V0cy9tb2R1bGVzL3Byb2plY3RzRG9tLmpzJ1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbnRhc2tzRG9tLmxpc3RlbigpO1xudGFza3NEb20ucmVuZGVyKCk7XG5wcm9qRG9tLmxpc3RlbigpO1xucHJvakRvbS5yZW5kZXIoKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9