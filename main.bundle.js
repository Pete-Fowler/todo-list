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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: oswald;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n    font-family: baloo;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n* {\n    font-family: oswald;\n}\nbody {\n    color: white;\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n    display: grid;\n    grid-template: 1fr 11fr / 1fr 3fr;\n    grid-template-areas: \n    \"header header\"\n    \"nav main\";\n}\n\n#header {\n    display: flex; \n    justify-content: center;\n    align-items: center;\n    font-size: 3rem;\n    font-weight: 700;\n    background-color: #3261EB;\n    grid-area: header;\n}\n\n#title {\n    font-family: baloo;\n}\n\n#nav {\n    background-color: #274BB8;\n    grid-area: nav;\n}\n\n#nav-top {\n    display: flex;\n    flex-direction: column;\n    padding: 5px;\n}\n\n.nav {\n    font-size: 2rem;\n    color: white;\n    height: 100%;\n    border-radius: 10px;\n    border: 0px;\n    margin: 5px 2px;\n    padding: 10px;\n    background-color: #274BB8;\n    text-align: left;\n    transition: .6s;\n}\n\n#delete-icon {\n    height: 30px;\n    width: 30px;\n    transition: .6s;\n}\n\n#delete-icon:hover {\n    transform: scale(1.3);\n}\n\n.nav:hover, .active {\n    background-color: #7997EE;\n}\n\n.project-wrapper {\n    display: flex;\n    align-items: center;\n    padding: 5px;\n}\n\n.project {\n    flex: 7; \n}\n\n#nav hr {\n    color: white;\n    background-color: white;\n    height: 1px;\n    width: 95%;\n}\n\n#new-project, #new-task {\n    color: white;\n    font-size: 4rem;\n    height: 50px;\n    width: 50px;\n    border: 0px;\n    border-radius: 10px;\n    margin: 10px;\n    background-color: #274BB8;\n    transition: .6s;\n}\n\n#modal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100vw;\n    height: 100vh;\n    overflow: hidden;\n    background-color: rgba(0, 0, 0, .5);\n}\n\n#modal-content {\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #7997EE;\n    margin: 20% auto;\n    padding: 5px;\n    border: 1px solid #274BB8;\n    border-radius: 10px;\n    width: 30%;\n}\n\n#modal-input {\n    width: 95%;\n    font-size: 2rem;\n    color: white;\n    height: 100%;\n    border-radius: 10px;\n    border: 0px;\n    margin: 5px 2px;\n    padding: 10px;\n    background-color: #274BB8;\n    text-align: left;\n}\n\n#modal-delete {\n    font-size: 1rem;\n    font-weight: 700;\n    appearance: none;\n    position: absolute;\n    top: 14px;\n    left: 94%;\n    color: #274BB8;\n    background-color: #7997EE;\n    border: none;\n    border-radius: 5px;\n    margin-left: auto;\n    margin-bottom: auto;\n    transition: .4s;\n}\n\n#modal-delete:hover {\n    color: #7997EE;\n    background-color: #274BB8;\n    border: 1px solid #7997EE;\n}\n\n#new-project:hover, #new-task:hover {\n    transform: scale(1.3);\n}\n\n#new-task {\n    background-color: #7997EE;\n    align-self: flex-start;\n}\n\n/* Main */\n#main {\n    display: grid;\n    grid-template: repeat(auto-fill, 50px) / 1fr;\n    grid-auto-rows: 50px;\n    gap: 10px;\n    padding: 10px;\n    align-items: center;\n    background-color: #7997EE;\n    grid-area: main;\n    overflow: auto;\n}\n\n.task {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    margin: 0px;\n    background-color: #274BB8;\n    border-radius: 10px;\n    box-shadow: 2px 2px 6px rgba(0, 0, 0, .8);\n}\n\n.task input, .task label, .dropdown-button {\n    color: white;\n    font-size: 1.5rem;\n    background-color: inherit;\n    height: 70%;\n    border: none;\n    border-radius: 5px;\n    padding: 0px 5px;\n    margin: 5px 10px;\n    transition: .4s;\n}\n\n.task input:hover, .task label:hover, #menu:hover  {\n    background-color: #7997EE;\n}\n\n.task input:focus {\n    background-color: #7997EE;\n    border: 3px solid black;\n}\n\n.task input::placeholder{\n    color: white;\n    opacity: .6;\n}\n\n.description {\n    flex: 1 1 0;\n}\n\n.due {\n    width: 150px;\n}\n\n#star {\n    height: 35px;\n    width: 35px;\n    border-radius: 5px;\n    transition: .4s;\n    padding: 1px;\n}\n\n.hovered {\n    filter: invert(54%) sepia(3%) saturate(25%) hue-rotate(27deg) brightness(92%) contrast(88%);\n}\n\n.filter-white {\n    filter: invert(100%) sepia(0%) saturate(7488%) hue-rotate(1deg) brightness(103%) contrast(99%);\n}\n\n/* Dropdown  */\n.dropdown {\n    position: relative;\n    display: inline-block;\n    margin: 0px;\n    padding: 5px;\n    padding-top: 10px;\n}\n\n#menu {\n    width: 38px;\n    height: 38px;\n    border-radius: 5px;\n}\n\n.dropdown-content {\n    display: none;\n    position: absolute;\n    right: 0;\n    box-shadow: 4px 4px 16px 0px rgba(0, 0, 0, .8);\n    z-index: 5;\n    color: white;\n    font-size: 1.3rem;\n    background-color: #3261EB;\n    min-height: 40px;\n    min-width: 200px;\n    border: none;\n    border-radius: 5px;\n    padding: 10px;\n    margin: 0px;\n    transition: .4s;\n}\n\n.show {\n    display: block;\n}\n\n.menu-item {\n    display: flex;\n    align-items: center;\n    padding: 5px;\n    transition: .4s;\n    border-radius: 5px;\n}\n\n.menu-item:hover {\n    background-color: #7997EE;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: oswald;\n    src: url(./assets/fonts/Oswald-VariableFont_wght.ttf);\n}\n\n@font-face {\n    font-family: baloo;\n    src: url('./assets/fonts/Baloo2-VariableFont_wght.ttf');\n}\n\n* {\n    font-family: oswald;\n}\nbody {\n    color: white;\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n    display: grid;\n    grid-template: 1fr 11fr / 1fr 3fr;\n    grid-template-areas: \n    \"header header\"\n    \"nav main\";\n}\n\n#header {\n    display: flex; \n    justify-content: center;\n    align-items: center;\n    font-size: 3rem;\n    font-weight: 700;\n    background-color: #3261EB;\n    grid-area: header;\n}\n\n#title {\n    font-family: baloo;\n}\n\n#nav {\n    background-color: #274BB8;\n    grid-area: nav;\n}\n\n#nav-top {\n    display: flex;\n    flex-direction: column;\n    padding: 5px;\n}\n\n.nav {\n    font-size: 2rem;\n    color: white;\n    height: 100%;\n    border-radius: 10px;\n    border: 0px;\n    margin: 5px 2px;\n    padding: 10px;\n    background-color: #274BB8;\n    text-align: left;\n    transition: .6s;\n}\n\n#delete-icon {\n    height: 30px;\n    width: 30px;\n    transition: .6s;\n}\n\n#delete-icon:hover {\n    transform: scale(1.3);\n}\n\n.nav:hover, .active {\n    background-color: #7997EE;\n}\n\n.project-wrapper {\n    display: flex;\n    align-items: center;\n    padding: 5px;\n}\n\n.project {\n    flex: 7; \n}\n\n#nav hr {\n    color: white;\n    background-color: white;\n    height: 1px;\n    width: 95%;\n}\n\n#new-project, #new-task {\n    color: white;\n    font-size: 4rem;\n    height: 50px;\n    width: 50px;\n    border: 0px;\n    border-radius: 10px;\n    margin: 10px;\n    background-color: #274BB8;\n    transition: .6s;\n}\n\n#modal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100vw;\n    height: 100vh;\n    overflow: hidden;\n    background-color: rgba(0, 0, 0, .5);\n}\n\n#modal-content {\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #7997EE;\n    margin: 20% auto;\n    padding: 5px;\n    border: 1px solid #274BB8;\n    border-radius: 10px;\n    width: 30%;\n}\n\n#modal-input {\n    width: 95%;\n    font-size: 2rem;\n    color: white;\n    height: 100%;\n    border-radius: 10px;\n    border: 0px;\n    margin: 5px 2px;\n    padding: 10px;\n    background-color: #274BB8;\n    text-align: left;\n}\n\n#modal-delete {\n    font-size: 1rem;\n    font-weight: 700;\n    appearance: none;\n    position: absolute;\n    top: 14px;\n    left: 94%;\n    color: #274BB8;\n    background-color: #7997EE;\n    border: none;\n    border-radius: 5px;\n    margin-left: auto;\n    margin-bottom: auto;\n    transition: .4s;\n}\n\n#modal-delete:hover {\n    color: #7997EE;\n    background-color: #274BB8;\n    border: 1px solid #7997EE;\n}\n\n#new-project:hover, #new-task:hover {\n    transform: scale(1.3);\n}\n\n#new-task {\n    background-color: #7997EE;\n    align-self: flex-start;\n}\n\n/* Main */\n#main {\n    display: grid;\n    grid-template: repeat(auto-fill, 50px) / 1fr;\n    grid-auto-rows: 50px;\n    gap: 10px;\n    padding: 10px;\n    align-items: center;\n    background-color: #7997EE;\n    grid-area: main;\n    overflow: auto;\n}\n\n.task {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    margin: 0px;\n    background-color: #274BB8;\n    border-radius: 10px;\n    box-shadow: 2px 2px 6px rgba(0, 0, 0, .8);\n}\n\n.task input, .task label, .dropdown-button {\n    color: white;\n    font-size: 1.5rem;\n    background-color: inherit;\n    height: 70%;\n    border: none;\n    border-radius: 5px;\n    padding: 0px 5px;\n    margin: 5px 10px;\n    transition: .4s;\n}\n\n.task input:hover, .task label:hover, #menu:hover  {\n    background-color: #7997EE;\n}\n\n.task input:focus {\n    background-color: #7997EE;\n    border: 3px solid black;\n}\n\n.task input::placeholder{\n    color: white;\n    opacity: .6;\n}\n\n.description {\n    flex: 1 1 0;\n}\n\n.due {\n    width: 150px;\n}\n\n#star {\n    height: 35px;\n    width: 35px;\n    border-radius: 5px;\n    transition: .4s;\n    padding: 1px;\n}\n\n.hovered {\n    filter: invert(54%) sepia(3%) saturate(25%) hue-rotate(27deg) brightness(92%) contrast(88%);\n}\n\n.filter-white {\n    filter: invert(100%) sepia(0%) saturate(7488%) hue-rotate(1deg) brightness(103%) contrast(99%);\n}\n\n/* Dropdown  */\n.dropdown {\n    position: relative;\n    display: inline-block;\n    margin: 0px;\n    padding: 5px;\n    padding-top: 10px;\n}\n\n#menu {\n    width: 38px;\n    height: 38px;\n    border-radius: 5px;\n}\n\n.dropdown-content {\n    display: none;\n    position: absolute;\n    right: 0;\n    box-shadow: 4px 4px 16px 0px rgba(0, 0, 0, .8);\n    z-index: 5;\n    color: white;\n    font-size: 1.3rem;\n    background-color: #3261EB;\n    min-height: 40px;\n    min-width: 200px;\n    border: none;\n    border-radius: 5px;\n    padding: 10px;\n    margin: 0px;\n    transition: .4s;\n}\n\n.show {\n    display: block;\n}\n\n.menu-item {\n    display: flex;\n    align-items: center;\n    padding: 5px;\n    transition: .4s;\n    border-radius: 5px;\n}\n\n.menu-item:hover {\n    background-color: #7997EE;\n}"],"sourceRoot":""}]);
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
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "del": () => (/* binding */ del),
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "update": () => (/* binding */ update)
/* harmony export */ });
const projects = [
    {
    name: 'Main',
    },
];

const update = (index, property, value) => {
    projects[index][property] = value;
}

const create = (name) => {
    return {name};
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
/* harmony export */   "currentArray": () => (/* binding */ currentArray),
/* harmony export */   "currentView": () => (/* binding */ currentView),
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
const modal = document.querySelector('#modal');
const modalContent = document.querySelector('#modal-content');
const modalInput = document.querySelector('#modal-input');
const modalDelete = document.querySelector('#modal-delete');

let currentView = 'all';
let currentArray = _tasks_js__WEBPACK_IMPORTED_MODULE_2__.tasks;

const render = () => {
    const domProjects = document.querySelectorAll('.project-wrapper');
    domProjects.forEach(e => e.remove());
    
    for(let i=0; i < _projects__WEBPACK_IMPORTED_MODULE_1__.projects.length; i++) {
        const wrapper = document.createElement('div');
        wrapper.id = `p${i}`;
        wrapper.setAttribute('class', 'project-wrapper');
        
        const proj = document.createElement('button');
        proj.classList.add('nav');
        proj.classList.add('project');
        proj.textContent = _projects__WEBPACK_IMPORTED_MODULE_1__.projects[i].name;
        wrapper.appendChild(proj);
        proj.addEventListener('click', projectView);

        const img = new Image();
        img.src = _images_delete_svg__WEBPACK_IMPORTED_MODULE_3__;
        img.id = 'delete-icon';
        img.alt = 'Delete icon';
        img.addEventListener('click', removeProject);

        wrapper.appendChild(img);

        nav.insertBefore(wrapper, newProjectBtn);
    }
}

const showModal = () => {
    modal.style.display = 'block';
}

const handleInput = () => {
    let value = modalInput.value;
    _projects__WEBPACK_IMPORTED_MODULE_1__.projects.push(_projects__WEBPACK_IMPORTED_MODULE_1__.create(value));
    modalInput.value = '';
    render();
    _tasksDom_js__WEBPACK_IMPORTED_MODULE_0__.render(currentArray);
}

const closeModalButton = () => {
    modal.style.display = 'none';
}

const closeModalWindow = (e) => {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  }

const removeProject = (e) => {
    let el = e.target.closest('.project-wrapper');
    let id = el.id.slice(-1);
    _projects__WEBPACK_IMPORTED_MODULE_1__.del(id);
    el.remove();
    modalInput.value = '';
    _tasksDom_js__WEBPACK_IMPORTED_MODULE_0__.render(currentArray);
}

const listen = () => {
    newProjectBtn.addEventListener('click', showModal);
    all.addEventListener('click', changeTasksView);
    starred.addEventListener('click', changeTasksView);
    today.addEventListener('click', changeTasksView);
    thisWeek.addEventListener('click', changeTasksView);
    modalDelete.addEventListener('click', closeModalButton);
    window.addEventListener('click', closeModalWindow);
    modalInput.addEventListener('change', handleInput)
}

const projectView = (e) => {
    let id = e.target.closest('.project-wrapper').id.slice(-1);
    currentView = _projects__WEBPACK_IMPORTED_MODULE_1__.projects[id].name;
    currentArray = _tasks_js__WEBPACK_IMPORTED_MODULE_2__.tasks.filter(obj => obj.project === currentView);
    _tasksDom_js__WEBPACK_IMPORTED_MODULE_0__.render(currentArray);
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
            return (date >= today && date <= week);
        });
        _tasksDom_js__WEBPACK_IMPORTED_MODULE_0__.render(currentArray);
    }
}



/***/ }),

/***/ "./src/assets/modules/tasks.js":
/*!*************************************!*\
  !*** ./src/assets/modules/tasks.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add": () => (/* binding */ add),
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

const add = (object) => {
    tasks.push(object);
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
/* harmony import */ var _projectsDom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectsDom.js */ "./src/assets/modules/projectsDom.js");
/* harmony import */ var _images_menu_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/menu.svg */ "./src/assets/images/menu.svg");
/* harmony import */ var _images_star_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/star.svg */ "./src/assets/images/star.svg");






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
            star.src = _images_star_svg__WEBPACK_IMPORTED_MODULE_4__;
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
                menu.src = _images_menu_svg__WEBPACK_IMPORTED_MODULE_3__;
                menu.id = 'menu';
                menu.alt = 'Menu icon';
                dropDown.appendChild(menu);
                menu.addEventListener('click', handleDrop);

            const dropDownContent = document.createElement('div');
                dropDownContent.classList.add('dropdown-content');
                dropDownContent.id = `dropdown-content-${i}`;
                
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
                    proj.addEventListener('click', assignTask);
                    dropDownContent.appendChild(proj);
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
    _tasks_js__WEBPACK_IMPORTED_MODULE_1__.update(tIndex, 'project', pName);
}

function closeDrop(e) {
  if(!e.target.matches('#menu')) {
    let ddc = document.querySelector('.show');
    if (ddc === null) {return;}
    if (ddc.classList.contains('show')) {
    ddc.classList.toggle('show');
    }
  }
}
   

function handleDrop(e) {
    let task = e.target.closest('.task').id;
    let ddc = document.querySelector(`#dropdown-content-${task}`);
    ddc.classList.toggle('show');
}

function handleChange(e) {
    let property = e.target.className;
    let value = e.target.value;
    let id = e.target.closest('.task').id;
    _tasks_js__WEBPACK_IMPORTED_MODULE_1__.update(id, property, value);
}

function handleStar(e) {
    const star = e.target.closest('#star');
    star.classList.toggle('filter-white');
    let id = star.closest('.task').id;
    _tasks_js__WEBPACK_IMPORTED_MODULE_1__.toggleStarred(id);
}

function newTaskClick() {
    _tasks_js__WEBPACK_IMPORTED_MODULE_1__.push(create('', '', false, '', _projectsDom_js__WEBPACK_IMPORTED_MODULE_2__.currentView));
    console.log(_tasks_js__WEBPACK_IMPORTED_MODULE_1__.tasks);
    render(_projectsDom_js__WEBPACK_IMPORTED_MODULE_2__.currentArray);
}

function deleteTask (e) {
    let id = e.target.closest('.task').id;
    _tasks_js__WEBPACK_IMPORTED_MODULE_1__.del(id);
    render(_projectsDom_js__WEBPACK_IMPORTED_MODULE_2__.currentArray);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0N5RDtBQUNDO0FBQ3JDOztBQUVyQiwrREFBZTtBQUNmLCtEQUFlO0FBQ2Ysa0VBQWM7QUFDZCxrRUFBYyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc3NldHMvbW9kdWxlcy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL21vZHVsZXMvcHJvamVjdHNEb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy9tb2R1bGVzL3Rhc2tzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc3NldHMvbW9kdWxlcy90YXNrc0RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvT3N3YWxkLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL0JhbG9vMi1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBvc3dhbGQ7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBiYWxvbztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG4qIHtcXG4gICAgZm9udC1mYW1pbHk6IG9zd2FsZDtcXG59XFxuYm9keSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAxMWZyIC8gMWZyIDNmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICBcXFwibmF2IG1haW5cXFwiO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDsgXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjYxRUI7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbn1cXG5cXG4jdGl0bGUge1xcbiAgICBmb250LWZhbWlseTogYmFsb287XFxufVxcblxcbiNuYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc0QkI4O1xcbiAgICBncmlkLWFyZWE6IG5hdjtcXG59XFxuXFxuI25hdi10b3Age1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5uYXYge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgbWFyZ2luOiA1cHggMnB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc0QkI4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB0cmFuc2l0aW9uOiAuNnM7XFxufVxcblxcbiNkZWxldGUtaWNvbiB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIHRyYW5zaXRpb246IC42cztcXG59XFxuXFxuI2RlbGV0ZS1pY29uOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xcbn1cXG5cXG4ubmF2OmhvdmVyLCAuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc5OTdFRTtcXG59XFxuXFxuLnByb2plY3Qtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBmbGV4OiA3OyBcXG59XFxuXFxuI25hdiBociB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICB3aWR0aDogOTUlO1xcbn1cXG5cXG4jbmV3LXByb2plY3QsICNuZXctdGFzayB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc0QkI4O1xcbiAgICB0cmFuc2l0aW9uOiAuNnM7XFxufVxcblxcbiNtb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjUpO1xcbn1cXG5cXG4jbW9kYWwtY29udGVudCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTk3RUU7XFxuICAgIG1hcmdpbjogMjAlIGF1dG87XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzI3NEJCODtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgd2lkdGg6IDMwJTtcXG59XFxuXFxuI21vZGFsLWlucHV0IHtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIG1hcmdpbjogNXB4IDJweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3NEJCODtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuI21vZGFsLWRlbGV0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDE0cHg7XFxuICAgIGxlZnQ6IDk0JTtcXG4gICAgY29sb3I6ICMyNzRCQjg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTk3RUU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcbn1cXG5cXG4jbW9kYWwtZGVsZXRlOmhvdmVyIHtcXG4gICAgY29sb3I6ICM3OTk3RUU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzRCQjg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3OTk3RUU7XFxufVxcblxcbiNuZXctcHJvamVjdDpob3ZlciwgI25ldy10YXNrOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xcbn1cXG5cXG4jbmV3LXRhc2sge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk5N0VFO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4vKiBNYWluICovXFxuI21haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoYXV0by1maWxsLCA1MHB4KSAvIDFmcjtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDUwcHg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc5OTdFRTtcXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLnRhc2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3NEJCODtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAuOCk7XFxufVxcblxcbi50YXNrIGlucHV0LCAudGFzayBsYWJlbCwgLmRyb3Bkb3duLWJ1dHRvbiB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGhlaWdodDogNzAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMHB4IDVweDtcXG4gICAgbWFyZ2luOiA1cHggMTBweDtcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcbn1cXG5cXG4udGFzayBpbnB1dDpob3ZlciwgLnRhc2sgbGFiZWw6aG92ZXIsICNtZW51OmhvdmVyICB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTk3RUU7XFxufVxcblxcbi50YXNrIGlucHV0OmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc5OTdFRTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxufVxcblxcbi50YXNrIGlucHV0OjpwbGFjZWhvbGRlcntcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBvcGFjaXR5OiAuNjtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gICAgZmxleDogMSAxIDA7XFxufVxcblxcbi5kdWUge1xcbiAgICB3aWR0aDogMTUwcHg7XFxufVxcblxcbiNzdGFyIHtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDogMzVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxuICAgIHBhZGRpbmc6IDFweDtcXG59XFxuXFxuLmhvdmVyZWQge1xcbiAgICBmaWx0ZXI6IGludmVydCg1NCUpIHNlcGlhKDMlKSBzYXR1cmF0ZSgyNSUpIGh1ZS1yb3RhdGUoMjdkZWcpIGJyaWdodG5lc3MoOTIlKSBjb250cmFzdCg4OCUpO1xcbn1cXG5cXG4uZmlsdGVyLXdoaXRlIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc0ODglKSBodWUtcm90YXRlKDFkZWcpIGJyaWdodG5lc3MoMTAzJSkgY29udHJhc3QoOTklKTtcXG59XFxuXFxuLyogRHJvcGRvd24gICovXFxuLmRyb3Bkb3duIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbn1cXG5cXG4jbWVudSB7XFxuICAgIHdpZHRoOiAzOHB4O1xcbiAgICBoZWlnaHQ6IDM4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmRyb3Bkb3duLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgLjgpO1xcbiAgICB6LWluZGV4OiA1O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI2MUVCO1xcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG59XFxuXFxuLnNob3cge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5tZW51LWl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk5N0VFO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLDRDQUFxRDtBQUN6RDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiw0Q0FBdUQ7QUFDM0Q7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLFNBQVM7SUFDVCxhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDOztjQUVVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZUFBZTtJQUNmLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFB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LGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogb3N3YWxkO1xcbiAgICBzcmM6IHVybCguL2Fzc2V0cy9mb250cy9Pc3dhbGQtVmFyaWFibGVGb250X3dnaHQudHRmKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBiYWxvbztcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL0JhbG9vMi1WYXJpYWJsZUZvbnRfd2dodC50dGYnKTtcXG59XFxuXFxuKiB7XFxuICAgIGZvbnQtZmFtaWx5OiBvc3dhbGQ7XFxufVxcbmJvZHkge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgMTFmciAvIDFmciAzZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXG4gICAgXFxcIm5hdiBtYWluXFxcIjtcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7IFxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI2MUVCO1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG59XFxuXFxuI3RpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6IGJhbG9vO1xcbn1cXG5cXG4jbmF2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3NEJCODtcXG4gICAgZ3JpZC1hcmVhOiBuYXY7XFxufVxcblxcbiNuYXYtdG9wIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ubmF2IHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIG1hcmdpbjogNXB4IDJweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3NEJCODtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgdHJhbnNpdGlvbjogLjZzO1xcbn1cXG5cXG4jZGVsZXRlLWljb24ge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICB0cmFuc2l0aW9uOiAuNnM7XFxufVxcblxcbiNkZWxldGUtaWNvbjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG59XFxuXFxuLm5hdjpob3ZlciwgLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTk3RUU7XFxufVxcblxcbi5wcm9qZWN0LXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgZmxleDogNzsgXFxufVxcblxcbiNuYXYgaHIge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgd2lkdGg6IDk1JTtcXG59XFxuXFxuI25ldy1wcm9qZWN0LCAjbmV3LXRhc2sge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3NEJCODtcXG4gICAgdHJhbnNpdGlvbjogLjZzO1xcbn1cXG5cXG4jbW9kYWwge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcXG59XFxuXFxuI21vZGFsLWNvbnRlbnQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk5N0VFO1xcbiAgICBtYXJnaW46IDIwJSBhdXRvO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyNzRCQjg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHdpZHRoOiAzMCU7XFxufVxcblxcbiNtb2RhbC1pbnB1dCB7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBtYXJnaW46IDVweCAycHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzRCQjg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbiNtb2RhbC1kZWxldGUge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxNHB4O1xcbiAgICBsZWZ0OiA5NCU7XFxuICAgIGNvbG9yOiAjMjc0QkI4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk5N0VFO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XFxuICAgIHRyYW5zaXRpb246IC40cztcXG59XFxuXFxuI21vZGFsLWRlbGV0ZTpob3ZlciB7XFxuICAgIGNvbG9yOiAjNzk5N0VFO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc0QkI4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzk5N0VFO1xcbn1cXG5cXG4jbmV3LXByb2plY3Q6aG92ZXIsICNuZXctdGFzazpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG59XFxuXFxuI25ldy10YXNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc5OTdFRTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLyogTWFpbiAqL1xcbiNtYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KGF1dG8tZmlsbCwgNTBweCkgLyAxZnI7XFxuICAgIGdyaWQtYXV0by1yb3dzOiA1MHB4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTk3RUU7XFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi50YXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzRCQjg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNnB4IHJnYmEoMCwgMCwgMCwgLjgpO1xcbn1cXG5cXG4udGFzayBpbnB1dCwgLnRhc2sgbGFiZWwsIC5kcm9wZG93bi1idXR0b24ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBoZWlnaHQ6IDcwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDBweCA1cHg7XFxuICAgIG1hcmdpbjogNXB4IDEwcHg7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG59XFxuXFxuLnRhc2sgaW5wdXQ6aG92ZXIsIC50YXNrIGxhYmVsOmhvdmVyLCAjbWVudTpob3ZlciAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk5N0VFO1xcbn1cXG5cXG4udGFzayBpbnB1dDpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTk3RUU7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4udGFzayBpbnB1dDo6cGxhY2Vob2xkZXJ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgb3BhY2l0eTogLjY7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIGZsZXg6IDEgMSAwO1xcbn1cXG5cXG4uZHVlIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbn1cXG5cXG4jc3RhciB7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgd2lkdGg6IDM1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcbiAgICBwYWRkaW5nOiAxcHg7XFxufVxcblxcbi5ob3ZlcmVkIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoNTQlKSBzZXBpYSgzJSkgc2F0dXJhdGUoMjUlKSBodWUtcm90YXRlKDI3ZGVnKSBicmlnaHRuZXNzKDkyJSkgY29udHJhc3QoODglKTtcXG59XFxuXFxuLmZpbHRlci13aGl0ZSB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg3NDg4JSkgaHVlLXJvdGF0ZSgxZGVnKSBicmlnaHRuZXNzKDEwMyUpIGNvbnRyYXN0KDk5JSk7XFxufVxcblxcbi8qIERyb3Bkb3duICAqL1xcbi5kcm9wZG93biB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG59XFxuXFxuI21lbnUge1xcbiAgICB3aWR0aDogMzhweDtcXG4gICAgaGVpZ2h0OiAzOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5kcm9wZG93bi1jb250ZW50IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIC44KTtcXG4gICAgei1pbmRleDogNTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMyNjFFQjtcXG4gICAgbWluLWhlaWdodDogNDBweDtcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxufVxcblxcbi5zaG93IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ubWVudS1pdGVtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc5OTdFRTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHByb2plY3RzID0gW1xuICAgIHtcbiAgICBuYW1lOiAnTWFpbicsXG4gICAgfSxcbl07XG5cbmNvbnN0IHVwZGF0ZSA9IChpbmRleCwgcHJvcGVydHksIHZhbHVlKSA9PiB7XG4gICAgcHJvamVjdHNbaW5kZXhdW3Byb3BlcnR5XSA9IHZhbHVlO1xufVxuXG5jb25zdCBjcmVhdGUgPSAobmFtZSkgPT4ge1xuICAgIHJldHVybiB7bmFtZX07XG59XG5cbmNvbnN0IGRlbCA9IChpZCkgPT4ge1xuICAgIHByb2plY3RzLnNwbGljZShpZCwgMSk7XG59XG5cbmV4cG9ydCB7cHJvamVjdHMsIGRlbCwgdXBkYXRlLCBjcmVhdGV9OyIsImltcG9ydCAqIGFzIHRhc2tzRG9tIGZyb20gJy4vdGFza3NEb20uanMnO1xuaW1wb3J0ICogYXMgcHJvamVjdHMgZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCAqIGFzIHRhc2tzTW9kIGZyb20gJy4vdGFza3MuanMnO1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSAnLi4vaW1hZ2VzL2RlbGV0ZS5zdmcnO1xuXG5jb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2LXByb2plY3RzJyk7XG5jb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qZWN0Jyk7XG5jb25zdCBhbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWxsJyk7XG5jb25zdCBzdGFycmVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YXJyZWQnKTtcbmNvbnN0IHRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZGF5Jyk7XG5jb25zdCB0aGlzV2VlayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aGlzLXdlZWsnKTtcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsJyk7XG5jb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtY29udGVudCcpO1xuY29uc3QgbW9kYWxJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1pbnB1dCcpO1xuY29uc3QgbW9kYWxEZWxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtZGVsZXRlJyk7XG5cbmxldCBjdXJyZW50VmlldyA9ICdhbGwnO1xubGV0IGN1cnJlbnRBcnJheSA9IHRhc2tzTW9kLnRhc2tzO1xuXG5jb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZG9tUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC13cmFwcGVyJyk7XG4gICAgZG9tUHJvamVjdHMuZm9yRWFjaChlID0+IGUucmVtb3ZlKCkpO1xuICAgIFxuICAgIGZvcihsZXQgaT0wOyBpIDwgcHJvamVjdHMucHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB3cmFwcGVyLmlkID0gYHAke2l9YDtcbiAgICAgICAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3Qtd3JhcHBlcicpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcHJvaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBwcm9qLmNsYXNzTGlzdC5hZGQoJ25hdicpO1xuICAgICAgICBwcm9qLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAgICAgcHJvai50ZXh0Q29udGVudCA9IHByb2plY3RzLnByb2plY3RzW2ldLm5hbWU7XG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQocHJvaik7XG4gICAgICAgIHByb2ouYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcm9qZWN0Vmlldyk7XG5cbiAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5zcmMgPSBkZWxldGVJY29uO1xuICAgICAgICBpbWcuaWQgPSAnZGVsZXRlLWljb24nO1xuICAgICAgICBpbWcuYWx0ID0gJ0RlbGV0ZSBpY29uJztcbiAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlUHJvamVjdCk7XG5cbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChpbWcpO1xuXG4gICAgICAgIG5hdi5pbnNlcnRCZWZvcmUod3JhcHBlciwgbmV3UHJvamVjdEJ0bik7XG4gICAgfVxufVxuXG5jb25zdCBzaG93TW9kYWwgPSAoKSA9PiB7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59XG5cbmNvbnN0IGhhbmRsZUlucHV0ID0gKCkgPT4ge1xuICAgIGxldCB2YWx1ZSA9IG1vZGFsSW5wdXQudmFsdWU7XG4gICAgcHJvamVjdHMucHJvamVjdHMucHVzaChwcm9qZWN0cy5jcmVhdGUodmFsdWUpKTtcbiAgICBtb2RhbElucHV0LnZhbHVlID0gJyc7XG4gICAgcmVuZGVyKCk7XG4gICAgdGFza3NEb20ucmVuZGVyKGN1cnJlbnRBcnJheSk7XG59XG5cbmNvbnN0IGNsb3NlTW9kYWxCdXR0b24gPSAoKSA9PiB7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuY29uc3QgY2xvc2VNb2RhbFdpbmRvdyA9IChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0ID09IG1vZGFsKSB7XG4gICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuICB9XG5cbmNvbnN0IHJlbW92ZVByb2plY3QgPSAoZSkgPT4ge1xuICAgIGxldCBlbCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0LXdyYXBwZXInKTtcbiAgICBsZXQgaWQgPSBlbC5pZC5zbGljZSgtMSk7XG4gICAgcHJvamVjdHMuZGVsKGlkKTtcbiAgICBlbC5yZW1vdmUoKTtcbiAgICBtb2RhbElucHV0LnZhbHVlID0gJyc7XG4gICAgdGFza3NEb20ucmVuZGVyKGN1cnJlbnRBcnJheSk7XG59XG5cbmNvbnN0IGxpc3RlbiA9ICgpID0+IHtcbiAgICBuZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd01vZGFsKTtcbiAgICBhbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VUYXNrc1ZpZXcpO1xuICAgIHN0YXJyZWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VUYXNrc1ZpZXcpO1xuICAgIHRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlVGFza3NWaWV3KTtcbiAgICB0aGlzV2Vlay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZVRhc2tzVmlldyk7XG4gICAgbW9kYWxEZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsQnV0dG9uKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsV2luZG93KTtcbiAgICBtb2RhbElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZUlucHV0KVxufVxuXG5jb25zdCBwcm9qZWN0VmlldyA9IChlKSA9PiB7XG4gICAgbGV0IGlkID0gZS50YXJnZXQuY2xvc2VzdCgnLnByb2plY3Qtd3JhcHBlcicpLmlkLnNsaWNlKC0xKTtcbiAgICBjdXJyZW50VmlldyA9IHByb2plY3RzLnByb2plY3RzW2lkXS5uYW1lO1xuICAgIGN1cnJlbnRBcnJheSA9IHRhc2tzTW9kLnRhc2tzLmZpbHRlcihvYmogPT4gb2JqLnByb2plY3QgPT09IGN1cnJlbnRWaWV3KTtcbiAgICB0YXNrc0RvbS5yZW5kZXIoY3VycmVudEFycmF5KTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlVGFza3NWaWV3KGUpIHtcbiAgICBsZXQgaWQgPSBlLnRhcmdldC5jbG9zZXN0KCdidXR0b24nKS5pZDtcbiAgICBjdXJyZW50VmlldyA9IGlkO1xuXG4gICAgaWYgKGN1cnJlbnRWaWV3ID09PSAnYWxsJykge1xuICAgICAgICBjdXJyZW50QXJyYXkgPSB0YXNrc01vZC50YXNrcztcbiAgICAgICAgdGFza3NEb20ucmVuZGVyKGN1cnJlbnRBcnJheSk7XG4gICAgfVxuICAgIGlmIChjdXJyZW50VmlldyA9PT0gJ3N0YXJyZWQnKSB7XG4gICAgICAgIGN1cnJlbnRBcnJheSA9IHRhc2tzTW9kLnRhc2tzLmZpbHRlcihvYmplY3QgPT4gb2JqZWN0WydzdGFycmVkJ10gPT09IHRydWUpO1xuICAgICAgICB0YXNrc0RvbS5yZW5kZXIoY3VycmVudEFycmF5KTtcbiAgICB9ICBcbiAgICBpZiAoY3VycmVudFZpZXcgPT09ICd0b2RheScpIHtcbiAgICAgICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKVxuICAgICAgICB0b2RheSA9IG5ldyBEYXRlKERhdGUuVVRDKHRvZGF5LmdldEZ1bGxZZWFyKCksdG9kYXkuZ2V0TW9udGgoKSwgdG9kYXkuZ2V0RGF0ZSgpKSk7XG4gICAgICAgIHRvZGF5ID0gdG9kYXkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xuICAgICAgICBjdXJyZW50QXJyYXkgPSB0YXNrc01vZC50YXNrcy5maWx0ZXIob2JqZWN0ID0+IG9iamVjdFsnZHVlJ10gPT09IHRvZGF5KTtcbiAgICAgICAgdGFza3NEb20ucmVuZGVyKGN1cnJlbnRBcnJheSk7XG4gICAgfVxuICAgIGlmIChjdXJyZW50VmlldyA9PT0gJ3RoaXMtd2VlaycpIHtcbiAgICAgICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgdG9kYXkgPSBuZXcgRGF0ZShEYXRlLlVUQyh0b2RheS5nZXRGdWxsWWVhcigpLHRvZGF5LmdldE1vbnRoKCksIHRvZGF5LmdldERhdGUoKSkpO1xuICAgICAgICBsZXQgd2VlayA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHdlZWsgPSBuZXcgRGF0ZShEYXRlLlVUQyh3ZWVrLmdldEZ1bGxZZWFyKCksd2Vlay5nZXRNb250aCgpLCB3ZWVrLmdldERhdGUoKSkpO1xuICAgICAgICB3ZWVrLnNldERhdGUodG9kYXkuZ2V0RGF0ZSgpICsgNyk7XG5cbiAgICAgICAgY3VycmVudEFycmF5ID0gdGFza3NNb2QudGFza3MuZmlsdGVyKChvYmplY3QpID0+IHtcbiAgICAgICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoRGF0ZS5wYXJzZShvYmplY3RbJ2R1ZSddKSk7XG4gICAgICAgICAgICByZXR1cm4gKGRhdGUgPj0gdG9kYXkgJiYgZGF0ZSA8PSB3ZWVrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRhc2tzRG9tLnJlbmRlcihjdXJyZW50QXJyYXkpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtyZW5kZXIsIGxpc3RlbiwgY3VycmVudEFycmF5LCBjdXJyZW50Vmlld307IiwibGV0IHRhc2tzID0gW3tcbiAgICB0aXRsZTogJ1J1bicsXG4gICAgZGVzY3JpcHRpb246ICdHbyBydW5uaW5nJyxcbiAgICBzdGFycmVkOiBmYWxzZSxcbiAgICBkdWU6ICcyMDIyLTA2LTIxJyxcbiAgICBwcm9qZWN0OiAnJyxcbn1dO1xuXG5jb25zdCBnZXRUYXNrcyA9ICgpID0+IHtcbiAgICByZXR1cm4gdGFza3M7XG59XG5cbmNvbnN0IHVwZGF0ZSA9IChpbmRleCwgcHJvcGVydHksIHZhbHVlKSA9PiB7XG4gICAgdGFza3NbaW5kZXhdW3Byb3BlcnR5XSA9IHZhbHVlO1xufVxuXG5jb25zdCBjcmVhdGUgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBzdGFycmVkLCBkdWUsIHByb2plY3QpID0+IHtcbiAgICAgICAgcmV0dXJuIHt0aXRsZSwgZGVzY3JpcHRpb24sIHN0YXJyZWQsIGR1ZSwgcHJvamVjdH07XG4gICAgfVxuXG5jb25zdCBhZGQgPSAob2JqZWN0KSA9PiB7XG4gICAgdGFza3MucHVzaChvYmplY3QpO1xufVxuXG5jb25zdCBkZWwgPSAoaWQpID0+IHtcbiAgICB0YXNrcy5zcGxpY2UoaWQsIDEpO1xufVxuXG5jb25zdCB0b2dnbGVTdGFycmVkID0gKGluZGV4KSA9PiB7XG4gICAgaWYgKHRhc2tzW2luZGV4XS5zdGFycmVkID09PSBmYWxzZSkge1xuICAgICAgICB0YXNrc1tpbmRleF0uc3RhcnJlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGFza3NbaW5kZXhdLnN0YXJyZWQgPSBmYWxzZTtcbiAgICB9XG59XG5cbmV4cG9ydCB7dXBkYXRlLCBjcmVhdGUsIHRhc2tzLCBnZXRUYXNrcywgYWRkLCBkZWwsIHRvZ2dsZVN0YXJyZWR9OyIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSAnLi9wcm9qZWN0cy5qcyc7XG5pbXBvcnQgKiBhcyB0YXNrbW9kIGZyb20gJy4vdGFza3MuanMnO1xuaW1wb3J0ICogYXMgcHJvamVjdHNEb20gZnJvbSAnLi9wcm9qZWN0c0RvbS5qcyc7XG5pbXBvcnQgbWVudTEgZnJvbSAnLi4vaW1hZ2VzL21lbnUuc3ZnJztcbmltcG9ydCBzdGFyMSBmcm9tICcuLi9pbWFnZXMvc3Rhci5zdmcnO1xuXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKTtcbmNvbnN0IG5ld1Rhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXRhc2snKTtcbmNvbnN0IG5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QnKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VEcm9wKTtcblxuZnVuY3Rpb24gbGlzdGVuKCkge1xuICAgIG5ld1Rhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXdUYXNrQ2xpY2spO1xuXG59XG5cbmZ1bmN0aW9uIHJlbmRlcihhcnJheSA9IHRhc2ttb2QudGFza3MpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzaycpLmZvckVhY2goKGUpID0+IHtlLnJlbW92ZSgpfSk7XG5cbiAgICBmb3IobGV0IGk9MDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2suaWQgPSBgJHtpfWA7XG4gICAgICAgICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgICAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGl0bGUnKTtcbiAgICAgICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnbWlubGVuZ3RoJywgJzEnKTtcbiAgICAgICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJywgJzI1Jyk7XG4gICAgICAgICAgICB0aXRsZS52YWx1ZSA9IGFycmF5W2ldLnRpdGxlO1xuICAgICAgICAgICAgdGFzay5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgICAgICB0aXRsZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVDaGFuZ2UpO1xuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdEZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdtaW5sZW5ndGgnLCAnMScpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnMTExJyk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbi52YWx1ZSA9IGFycmF5W2ldLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgdGFzay5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVDaGFuZ2UpO1xuXG4gICAgICAgIGNvbnN0IHN0YXIgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIHN0YXIuc3JjID0gc3RhcjE7XG4gICAgICAgICAgICBzdGFyLmFsdCA9ICdTdGFyIGljb24nO1xuICAgICAgICAgICAgc3Rhci5pZCA9ICdzdGFyJztcbiAgICAgICAgICAgIGlmIChhcnJheVtpXS5zdGFycmVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgc3Rhci5jbGFzc0xpc3QuYWRkKCdmaWx0ZXItd2hpdGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhc2suYXBwZW5kQ2hpbGQoc3Rhcik7XG4gICAgICAgICAgICBzdGFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlU3Rhcik7XG4gICAgICAgICAgICBzdGFyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIG92ZXJTdGFyKTtcbiAgICAgICAgICAgIHN0YXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBvdXRTdGFyKTtcblxuICAgICAgICBjb25zdCBkdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgZHVlLmNsYXNzTGlzdC5hZGQoJ2R1ZScpO1xuICAgICAgICAgICAgZHVlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgICAgICAgICBkdWUudmFsdWUgPSBhcnJheVtpXS5kdWU7XG4gICAgICAgICAgICB0YXNrLmFwcGVuZENoaWxkKGR1ZSk7XG4gICAgICAgICAgICBkdWUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlQ2hhbmdlKTtcblxuICAgICAgICBcbiAgICAgICAgY29uc3QgZHJvcERvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRyb3BEb3duLmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IG1lbnUgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICBtZW51LnNyYyA9IG1lbnUxO1xuICAgICAgICAgICAgICAgIG1lbnUuaWQgPSAnbWVudSc7XG4gICAgICAgICAgICAgICAgbWVudS5hbHQgPSAnTWVudSBpY29uJztcbiAgICAgICAgICAgICAgICBkcm9wRG93bi5hcHBlbmRDaGlsZChtZW51KTtcbiAgICAgICAgICAgICAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlRHJvcCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRyb3BEb3duQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGRyb3BEb3duQ29udGVudC5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bi1jb250ZW50Jyk7XG4gICAgICAgICAgICAgICAgZHJvcERvd25Db250ZW50LmlkID0gYGRyb3Bkb3duLWNvbnRlbnQtJHtpfWA7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgZGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZGVsLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgICAgICAgICAgICAgIGRlbC50ZXh0Q29udGVudCA9ICdEZWxldGUgVGFzayc7XG4gICAgICAgICAgICAgICAgZHJvcERvd25Db250ZW50LmFwcGVuZENoaWxkKGRlbCk7XG4gICAgICAgICAgICAgICAgZGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlVGFzayk7IFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IG1wcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LXByb2plY3QnKTtcbiAgICAgICAgICAgICAgICBtcHMuZm9yRWFjaChlID0+IGUucmVtb3ZlKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwcm9qID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHByb2ouaWQgPSBgbXAke2l9YDtcbiAgICAgICAgICAgICAgICAgICAgcHJvai5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvai50ZXh0Q29udGVudCA9IHByb2plY3RzW2ldLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHByb2ouYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3NpZ25UYXNrKTtcbiAgICAgICAgICAgICAgICAgICAgZHJvcERvd25Db250ZW50LmFwcGVuZENoaWxkKHByb2opO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkcm9wRG93bi5hcHBlbmRDaGlsZChkcm9wRG93bkNvbnRlbnQpO1xuXG4gICAgICAgIHRhc2suYXBwZW5kQ2hpbGQoZHJvcERvd24pO1xuXG4gICAgICAgIG1haW4uaW5zZXJ0QmVmb3JlKHRhc2ssIG5ld1Rhc2tCdG4pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gb3ZlclN0YXIoZSkge1xuICAgIGNvbnN0IHN0YXIgPSBlLnRhcmdldC5jbG9zZXN0KCcjc3RhcicpO1xuICAgIHN0YXIuY2xhc3NMaXN0LmFkZCgnaG92ZXJlZCcpO1xufVxuXG5mdW5jdGlvbiBvdXRTdGFyKGUpIHtcbiAgICBjb25zdCBzdGFyID0gZS50YXJnZXQuY2xvc2VzdCgnI3N0YXInKTtcbiAgICBzdGFyLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyZWQnKTtcbn1cblxuZnVuY3Rpb24gYXNzaWduVGFzayhlKSB7XG4gICAgbGV0IHRJbmRleCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrJykuaWQ7XG4gICAgbGV0IHBOYW1lID0gZS50YXJnZXQuY2xvc2VzdCgnLm1lbnUtaXRlbScpLnRleHRDb250ZW50O1xuICAgIHRhc2ttb2QudXBkYXRlKHRJbmRleCwgJ3Byb2plY3QnLCBwTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlRHJvcChlKSB7XG4gIGlmKCFlLnRhcmdldC5tYXRjaGVzKCcjbWVudScpKSB7XG4gICAgbGV0IGRkYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG93Jyk7XG4gICAgaWYgKGRkYyA9PT0gbnVsbCkge3JldHVybjt9XG4gICAgaWYgKGRkYy5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3cnKSkge1xuICAgIGRkYy5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG4gICAgfVxuICB9XG59XG4gICBcblxuZnVuY3Rpb24gaGFuZGxlRHJvcChlKSB7XG4gICAgbGV0IHRhc2sgPSBlLnRhcmdldC5jbG9zZXN0KCcudGFzaycpLmlkO1xuICAgIGxldCBkZGMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZHJvcGRvd24tY29udGVudC0ke3Rhc2t9YCk7XG4gICAgZGRjLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICBsZXQgcHJvcGVydHkgPSBlLnRhcmdldC5jbGFzc05hbWU7XG4gICAgbGV0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgbGV0IGlkID0gZS50YXJnZXQuY2xvc2VzdCgnLnRhc2snKS5pZDtcbiAgICB0YXNrbW9kLnVwZGF0ZShpZCwgcHJvcGVydHksIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlU3RhcihlKSB7XG4gICAgY29uc3Qgc3RhciA9IGUudGFyZ2V0LmNsb3Nlc3QoJyNzdGFyJyk7XG4gICAgc3Rhci5jbGFzc0xpc3QudG9nZ2xlKCdmaWx0ZXItd2hpdGUnKTtcbiAgICBsZXQgaWQgPSBzdGFyLmNsb3Nlc3QoJy50YXNrJykuaWQ7XG4gICAgdGFza21vZC50b2dnbGVTdGFycmVkKGlkKTtcbn1cblxuZnVuY3Rpb24gbmV3VGFza0NsaWNrKCkge1xuICAgIHRhc2ttb2QucHVzaChjcmVhdGUoJycsICcnLCBmYWxzZSwgJycsIHByb2plY3RzRG9tLmN1cnJlbnRWaWV3KSk7XG4gICAgY29uc29sZS5sb2codGFza21vZC50YXNrcyk7XG4gICAgcmVuZGVyKHByb2plY3RzRG9tLmN1cnJlbnRBcnJheSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2sgKGUpIHtcbiAgICBsZXQgaWQgPSBlLnRhcmdldC5jbG9zZXN0KCcudGFzaycpLmlkO1xuICAgIHRhc2ttb2QuZGVsKGlkKTtcbiAgICByZW5kZXIocHJvamVjdHNEb20uY3VycmVudEFycmF5KTtcbn1cblxuZXhwb3J0IHtsaXN0ZW4sIHJlbmRlcn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIlxuaW1wb3J0ICogYXMgdGFza3NEb20gZnJvbSAnLi9hc3NldHMvbW9kdWxlcy90YXNrc0RvbS5qcyc7XG5pbXBvcnQgKiBhcyBwcm9qRG9tIGZyb20gJy4vYXNzZXRzL21vZHVsZXMvcHJvamVjdHNEb20uanMnXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxudGFza3NEb20ubGlzdGVuKCk7XG50YXNrc0RvbS5yZW5kZXIoKTtcbnByb2pEb20ubGlzdGVuKCk7XG5wcm9qRG9tLnJlbmRlcigpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=