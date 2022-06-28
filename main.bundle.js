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
/* harmony export */   "projectSelected": () => (/* binding */ projectSelected),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "updateArray": () => (/* binding */ updateArray)
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

let projectSelected = '';
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
    let projectName = _projects__WEBPACK_IMPORTED_MODULE_1__.projects[id].name;
    _projects__WEBPACK_IMPORTED_MODULE_1__.del(id);
    el.remove();
    modalInput.value = '';
    _tasks_js__WEBPACK_IMPORTED_MODULE_2__.tasks.forEach(obj => {
        if (obj.project === projectName) {
            obj.project = '';
        }
    });
    _tasksDom_js__WEBPACK_IMPORTED_MODULE_0__.render(currentArray);
    console.log(_tasks_js__WEBPACK_IMPORTED_MODULE_2__.tasks);
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
    removeActive(e);
    makeActive(e);
    
    let id = e.target.closest('.project-wrapper').id.slice(-1);
    currentView = _projects__WEBPACK_IMPORTED_MODULE_1__.projects[id].name;
    projectSelected = currentView;
    updateArray();
}

const removeActive = (e) => {
    let btns = document.querySelectorAll('button.nav');
    btns.forEach(e => e.classList.remove('active'));
}

const makeActive = (e) => {
    let element = e.target.closest('button'); 
    element.classList.add('active');
}

const updateArray = () => {
    if (currentView === 'all' || currentView === 'starred' || currentView === 
    'today' || currentView === 'this-week') {
        currentArray = _tasks_js__WEBPACK_IMPORTED_MODULE_2__.tasks;
        _tasksDom_js__WEBPACK_IMPORTED_MODULE_0__.render(currentArray);
    } else {
    currentArray = _tasks_js__WEBPACK_IMPORTED_MODULE_2__.tasks.filter(obj => obj.project === currentView);
    _tasksDom_js__WEBPACK_IMPORTED_MODULE_0__.render(currentArray);
    }
}

function changeTasksView(e) {
    removeActive(e);
    makeActive(e);
    let id = e.target.closest('button').id;
    
    currentView = id;
    projectSelected = '';

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
    _tasks_js__WEBPACK_IMPORTED_MODULE_1__.tasks.push(_tasks_js__WEBPACK_IMPORTED_MODULE_1__.create('', '', false, '', _projectsDom_js__WEBPACK_IMPORTED_MODULE_2__.projectSelected));
    _projectsDom_js__WEBPACK_IMPORTED_MODULE_2__.updateArray();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7QUNDeUQ7QUFDQztBQUNyQzs7QUFFckIsK0RBQWU7QUFDZiwrREFBZTtBQUNmLGtFQUFjO0FBQ2Qsa0VBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL21vZHVsZXMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy9tb2R1bGVzL3Byb2plY3RzRG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc3NldHMvbW9kdWxlcy90YXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL21vZHVsZXMvdGFza3NEb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL09zd2FsZC1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9CYWxvbzItVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogb3N3YWxkO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogYmFsb287XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuKiB7XFxuICAgIGZvbnQtZmFtaWx5OiBvc3dhbGQ7XFxufVxcbmJvZHkge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgMTFmciAvIDFmciAzZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXG4gICAgXFxcIm5hdiBtYWluXFxcIjtcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7IFxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI2MUVCO1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG59XFxuXFxuI3RpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6IGJhbG9vO1xcbn1cXG5cXG4jbmF2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3NEJCODtcXG4gICAgZ3JpZC1hcmVhOiBuYXY7XFxufVxcblxcbiNuYXYtdG9wIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ubmF2IHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIG1hcmdpbjogNXB4IDJweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3NEJCODtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgdHJhbnNpdGlvbjogLjZzO1xcbn1cXG5cXG4jZGVsZXRlLWljb24ge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICB0cmFuc2l0aW9uOiAuNnM7XFxufVxcblxcbiNkZWxldGUtaWNvbjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG59XFxuXFxuLm5hdjpob3ZlciwgLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTk3RUU7XFxufVxcblxcbi5wcm9qZWN0LXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgZmxleDogNzsgXFxufVxcblxcbiNuYXYgaHIge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgd2lkdGg6IDk1JTtcXG59XFxuXFxuI25ldy1wcm9qZWN0LCAjbmV3LXRhc2sge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3NEJCODtcXG4gICAgdHJhbnNpdGlvbjogLjZzO1xcbn1cXG5cXG4jbW9kYWwge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcXG59XFxuXFxuI21vZGFsLWNvbnRlbnQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk5N0VFO1xcbiAgICBtYXJnaW46IDIwJSBhdXRvO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyNzRCQjg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHdpZHRoOiAzMCU7XFxufVxcblxcbiNtb2RhbC1pbnB1dCB7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBtYXJnaW46IDVweCAycHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzRCQjg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbiNtb2RhbC1kZWxldGUge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxNHB4O1xcbiAgICBsZWZ0OiA5NCU7XFxuICAgIGNvbG9yOiAjMjc0QkI4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk5N0VFO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XFxuICAgIHRyYW5zaXRpb246IC40cztcXG59XFxuXFxuI21vZGFsLWRlbGV0ZTpob3ZlciB7XFxuICAgIGNvbG9yOiAjNzk5N0VFO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc0QkI4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzk5N0VFO1xcbn1cXG5cXG4jbmV3LXByb2plY3Q6aG92ZXIsICNuZXctdGFzazpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG59XFxuXFxuI25ldy10YXNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc5OTdFRTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLyogTWFpbiAqL1xcbiNtYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KGF1dG8tZmlsbCwgNTBweCkgLyAxZnI7XFxuICAgIGdyaWQtYXV0by1yb3dzOiA1MHB4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTk3RUU7XFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi50YXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzRCQjg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNnB4IHJnYmEoMCwgMCwgMCwgLjgpO1xcbn1cXG5cXG4udGFzayBpbnB1dCwgLnRhc2sgbGFiZWwsIC5kcm9wZG93bi1idXR0b24ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBoZWlnaHQ6IDcwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDBweCA1cHg7XFxuICAgIG1hcmdpbjogNXB4IDEwcHg7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG59XFxuXFxuLnRhc2sgaW5wdXQ6aG92ZXIsIC50YXNrIGxhYmVsOmhvdmVyLCAjbWVudTpob3ZlciAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk5N0VFO1xcbn1cXG5cXG4udGFzayBpbnB1dDpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTk3RUU7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4udGFzayBpbnB1dDo6cGxhY2Vob2xkZXJ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgb3BhY2l0eTogLjY7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIGZsZXg6IDEgMSAwO1xcbn1cXG5cXG4uZHVlIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbn1cXG5cXG4jc3RhciB7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgd2lkdGg6IDM1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcbiAgICBwYWRkaW5nOiAxcHg7XFxufVxcblxcbi5ob3ZlcmVkIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoNTQlKSBzZXBpYSgzJSkgc2F0dXJhdGUoMjUlKSBodWUtcm90YXRlKDI3ZGVnKSBicmlnaHRuZXNzKDkyJSkgY29udHJhc3QoODglKTtcXG59XFxuXFxuLmZpbHRlci13aGl0ZSB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg3NDg4JSkgaHVlLXJvdGF0ZSgxZGVnKSBicmlnaHRuZXNzKDEwMyUpIGNvbnRyYXN0KDk5JSk7XFxufVxcblxcbi8qIERyb3Bkb3duICAqL1xcbi5kcm9wZG93biB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG59XFxuXFxuI21lbnUge1xcbiAgICB3aWR0aDogMzhweDtcXG4gICAgaGVpZ2h0OiAzOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5kcm9wZG93bi1jb250ZW50IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIC44KTtcXG4gICAgei1pbmRleDogNTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMyNjFFQjtcXG4gICAgbWluLWhlaWdodDogNDBweDtcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxufVxcblxcbi5zaG93IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ubWVudS1pdGVtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc5OTdFRTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQiw0Q0FBcUQ7QUFDekQ7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsNENBQXVEO0FBQzNEOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixTQUFTO0lBQ1QsYUFBYTtJQUNiLGlDQUFpQztJQUNqQzs7Y0FFVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RC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QUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUiw4Q0FBOEM7SUFDOUMsVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IG9zd2FsZDtcXG4gICAgc3JjOiB1cmwoLi9hc3NldHMvZm9udHMvT3N3YWxkLVZhcmlhYmxlRm9udF93Z2h0LnR0Zik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogYmFsb287XFxuICAgIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9CYWxvbzItVmFyaWFibGVGb250X3dnaHQudHRmJyk7XFxufVxcblxcbioge1xcbiAgICBmb250LWZhbWlseTogb3N3YWxkO1xcbn1cXG5ib2R5IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDExZnIgLyAxZnIgM2ZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgXFxcImhlYWRlciBoZWFkZXJcXFwiXFxuICAgIFxcXCJuYXYgbWFpblxcXCI7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4OyBcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMyNjFFQjtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxufVxcblxcbiN0aXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBiYWxvbztcXG59XFxuXFxuI25hdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzRCQjg7XFxuICAgIGdyaWQtYXJlYTogbmF2O1xcbn1cXG5cXG4jbmF2LXRvcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLm5hdiB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBtYXJnaW46IDVweCAycHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzRCQjg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHRyYW5zaXRpb246IC42cztcXG59XFxuXFxuI2RlbGV0ZS1pY29uIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgdHJhbnNpdGlvbjogLjZzO1xcbn1cXG5cXG4jZGVsZXRlLWljb246aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxufVxcblxcbi5uYXY6aG92ZXIsIC5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk5N0VFO1xcbn1cXG5cXG4ucHJvamVjdC13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGZsZXg6IDc7IFxcbn1cXG5cXG4jbmF2IGhyIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIHdpZHRoOiA5NSU7XFxufVxcblxcbiNuZXctcHJvamVjdCwgI25ldy10YXNrIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzRCQjg7XFxuICAgIHRyYW5zaXRpb246IC42cztcXG59XFxuXFxuI21vZGFsIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNSk7XFxufVxcblxcbiNtb2RhbC1jb250ZW50IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc5OTdFRTtcXG4gICAgbWFyZ2luOiAyMCUgYXV0bztcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjc0QkI4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB3aWR0aDogMzAlO1xcbn1cXG5cXG4jbW9kYWwtaW5wdXQge1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgbWFyZ2luOiA1cHggMnB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc0QkI4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4jbW9kYWwtZGVsZXRlIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTRweDtcXG4gICAgbGVmdDogOTQlO1xcbiAgICBjb2xvcjogIzI3NEJCODtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc5OTdFRTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxufVxcblxcbiNtb2RhbC1kZWxldGU6aG92ZXIge1xcbiAgICBjb2xvcjogIzc5OTdFRTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3NEJCODtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzc5OTdFRTtcXG59XFxuXFxuI25ldy1wcm9qZWN0OmhvdmVyLCAjbmV3LXRhc2s6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxufVxcblxcbiNuZXctdGFzayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTk3RUU7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi8qIE1haW4gKi9cXG4jbWFpbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdChhdXRvLWZpbGwsIDUwcHgpIC8gMWZyO1xcbiAgICBncmlkLWF1dG8tcm93czogNTBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk5N0VFO1xcbiAgICBncmlkLWFyZWE6IG1haW47XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4udGFzayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc0QkI4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDZweCByZ2JhKDAsIDAsIDAsIC44KTtcXG59XFxuXFxuLnRhc2sgaW5wdXQsIC50YXNrIGxhYmVsLCAuZHJvcGRvd24tYnV0dG9uIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgaGVpZ2h0OiA3MCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAwcHggNXB4O1xcbiAgICBtYXJnaW46IDVweCAxMHB4O1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxufVxcblxcbi50YXNrIGlucHV0OmhvdmVyLCAudGFzayBsYWJlbDpob3ZlciwgI21lbnU6aG92ZXIgIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc5OTdFRTtcXG59XFxuXFxuLnRhc2sgaW5wdXQ6Zm9jdXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk5N0VFO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnRhc2sgaW5wdXQ6OnBsYWNlaG9sZGVye1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG9wYWNpdHk6IC42O1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgICBmbGV4OiAxIDEgMDtcXG59XFxuXFxuLmR1ZSB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG59XFxuXFxuI3N0YXIge1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHdpZHRoOiAzNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG4gICAgcGFkZGluZzogMXB4O1xcbn1cXG5cXG4uaG92ZXJlZCB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDU0JSkgc2VwaWEoMyUpIHNhdHVyYXRlKDI1JSkgaHVlLXJvdGF0ZSgyN2RlZykgYnJpZ2h0bmVzcyg5MiUpIGNvbnRyYXN0KDg4JSk7XFxufVxcblxcbi5maWx0ZXItd2hpdGUge1xcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNzQ4OCUpIGh1ZS1yb3RhdGUoMWRlZykgYnJpZ2h0bmVzcygxMDMlKSBjb250cmFzdCg5OSUpO1xcbn1cXG5cXG4vKiBEcm9wZG93biAgKi9cXG4uZHJvcGRvd24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxufVxcblxcbiNtZW51IHtcXG4gICAgd2lkdGg6IDM4cHg7XFxuICAgIGhlaWdodDogMzhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uZHJvcGRvd24tY29udGVudCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAuOCk7XFxuICAgIHotaW5kZXg6IDU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjYxRUI7XFxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XFxuICAgIG1pbi13aWR0aDogMjAwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcbn1cXG5cXG4uc2hvdyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLm1lbnUtaXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTk3RUU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBwcm9qZWN0cyA9IFtcbiAgICB7XG4gICAgbmFtZTogJ01haW4nLFxuICAgIH0sXG5dO1xuXG5jb25zdCB1cGRhdGUgPSAoaW5kZXgsIHByb3BlcnR5LCB2YWx1ZSkgPT4ge1xuICAgIHByb2plY3RzW2luZGV4XVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbn1cblxuY29uc3QgY3JlYXRlID0gKG5hbWUpID0+IHtcbiAgICByZXR1cm4ge25hbWV9O1xufVxuXG5jb25zdCBkZWwgPSAoaWQpID0+IHtcbiAgICBwcm9qZWN0cy5zcGxpY2UoaWQsIDEpO1xufVxuXG5leHBvcnQge3Byb2plY3RzLCBkZWwsIHVwZGF0ZSwgY3JlYXRlfTsiLCJpbXBvcnQgKiBhcyB0YXNrc0RvbSBmcm9tICcuL3Rhc2tzRG9tLmpzJztcbmltcG9ydCAqIGFzIHByb2plY3RzIGZyb20gXCIuL3Byb2plY3RzXCI7XG5pbXBvcnQgKiBhcyB0YXNrcyBmcm9tICcuL3Rhc2tzLmpzJztcbmltcG9ydCBkZWxldGVJY29uIGZyb20gJy4uL2ltYWdlcy9kZWxldGUuc3ZnJztcblxuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdi1wcm9qZWN0cycpO1xuY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcHJvamVjdCcpO1xuY29uc3QgYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FsbCcpO1xuY29uc3Qgc3RhcnJlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFycmVkJyk7XG5jb25zdCB0b2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RheScpO1xuY29uc3QgdGhpc1dlZWsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGhpcy13ZWVrJyk7XG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbCcpO1xuY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWNvbnRlbnQnKTtcbmNvbnN0IG1vZGFsSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtaW5wdXQnKTtcbmNvbnN0IG1vZGFsRGVsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWRlbGV0ZScpO1xuXG5sZXQgcHJvamVjdFNlbGVjdGVkID0gJyc7XG5sZXQgY3VycmVudFZpZXcgPSAnYWxsJztcbmxldCBjdXJyZW50QXJyYXkgPSB0YXNrcy50YXNrcztcblxuY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGRvbVByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3Qtd3JhcHBlcicpO1xuICAgIGRvbVByb2plY3RzLmZvckVhY2goZSA9PiBlLnJlbW92ZSgpKTtcbiAgICBcbiAgICBmb3IobGV0IGk9MDsgaSA8IHByb2plY3RzLnByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgd3JhcHBlci5pZCA9IGBwJHtpfWA7XG4gICAgICAgIHdyYXBwZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0LXdyYXBwZXInKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByb2ogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcHJvai5jbGFzc0xpc3QuYWRkKCduYXYnKTtcbiAgICAgICAgcHJvai5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gICAgICAgIHByb2oudGV4dENvbnRlbnQgPSBwcm9qZWN0cy5wcm9qZWN0c1tpXS5uYW1lO1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHByb2opO1xuICAgICAgICBwcm9qLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJvamVjdFZpZXcpO1xuXG4gICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcuc3JjID0gZGVsZXRlSWNvbjtcbiAgICAgICAgaW1nLmlkID0gJ2RlbGV0ZS1pY29uJztcbiAgICAgICAgaW1nLmFsdCA9ICdEZWxldGUgaWNvbic7XG4gICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZVByb2plY3QpO1xuXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoaW1nKTtcblxuICAgICAgICBuYXYuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIG5ld1Byb2plY3RCdG4pO1xuICAgIH1cbn1cblxuY29uc3Qgc2hvd01vZGFsID0gKCkgPT4ge1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufVxuXG5jb25zdCBoYW5kbGVJbnB1dCA9ICgpID0+IHtcbiAgICBsZXQgdmFsdWUgPSBtb2RhbElucHV0LnZhbHVlO1xuICAgIHByb2plY3RzLnByb2plY3RzLnB1c2gocHJvamVjdHMuY3JlYXRlKHZhbHVlKSk7XG4gICAgbW9kYWxJbnB1dC52YWx1ZSA9ICcnO1xuICAgIHJlbmRlcigpO1xuICAgIHRhc2tzRG9tLnJlbmRlcihjdXJyZW50QXJyYXkpO1xufVxuXG5jb25zdCBjbG9zZU1vZGFsQnV0dG9uID0gKCkgPT4ge1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbmNvbnN0IGNsb3NlTW9kYWxXaW5kb3cgPSAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldCA9PSBtb2RhbCkge1xuICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgfVxuXG5jb25zdCByZW1vdmVQcm9qZWN0ID0gKGUpID0+IHtcbiAgICBsZXQgZWwgPSBlLnRhcmdldC5jbG9zZXN0KCcucHJvamVjdC13cmFwcGVyJyk7XG4gICAgbGV0IGlkID0gZWwuaWQuc2xpY2UoLTEpO1xuICAgIGxldCBwcm9qZWN0TmFtZSA9IHByb2plY3RzLnByb2plY3RzW2lkXS5uYW1lO1xuICAgIHByb2plY3RzLmRlbChpZCk7XG4gICAgZWwucmVtb3ZlKCk7XG4gICAgbW9kYWxJbnB1dC52YWx1ZSA9ICcnO1xuICAgIHRhc2tzLnRhc2tzLmZvckVhY2gob2JqID0+IHtcbiAgICAgICAgaWYgKG9iai5wcm9qZWN0ID09PSBwcm9qZWN0TmFtZSkge1xuICAgICAgICAgICAgb2JqLnByb2plY3QgPSAnJztcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHRhc2tzRG9tLnJlbmRlcihjdXJyZW50QXJyYXkpO1xuICAgIGNvbnNvbGUubG9nKHRhc2tzLnRhc2tzKTtcbn1cblxuY29uc3QgbGlzdGVuID0gKCkgPT4ge1xuICAgIG5ld1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93TW9kYWwpO1xuICAgIGFsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZVRhc2tzVmlldyk7XG4gICAgc3RhcnJlZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZVRhc2tzVmlldyk7XG4gICAgdG9kYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VUYXNrc1ZpZXcpO1xuICAgIHRoaXNXZWVrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlVGFza3NWaWV3KTtcbiAgICBtb2RhbERlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWxCdXR0b24pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWxXaW5kb3cpO1xuICAgIG1vZGFsSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlSW5wdXQpXG59XG5cbmNvbnN0IHByb2plY3RWaWV3ID0gKGUpID0+IHtcbiAgICByZW1vdmVBY3RpdmUoZSk7XG4gICAgbWFrZUFjdGl2ZShlKTtcbiAgICBcbiAgICBsZXQgaWQgPSBlLnRhcmdldC5jbG9zZXN0KCcucHJvamVjdC13cmFwcGVyJykuaWQuc2xpY2UoLTEpO1xuICAgIGN1cnJlbnRWaWV3ID0gcHJvamVjdHMucHJvamVjdHNbaWRdLm5hbWU7XG4gICAgcHJvamVjdFNlbGVjdGVkID0gY3VycmVudFZpZXc7XG4gICAgdXBkYXRlQXJyYXkoKTtcbn1cblxuY29uc3QgcmVtb3ZlQWN0aXZlID0gKGUpID0+IHtcbiAgICBsZXQgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbi5uYXYnKTtcbiAgICBidG5zLmZvckVhY2goZSA9PiBlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcbn1cblxuY29uc3QgbWFrZUFjdGl2ZSA9IChlKSA9PiB7XG4gICAgbGV0IGVsZW1lbnQgPSBlLnRhcmdldC5jbG9zZXN0KCdidXR0b24nKTsgXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn1cblxuY29uc3QgdXBkYXRlQXJyYXkgPSAoKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRWaWV3ID09PSAnYWxsJyB8fCBjdXJyZW50VmlldyA9PT0gJ3N0YXJyZWQnIHx8IGN1cnJlbnRWaWV3ID09PSBcbiAgICAndG9kYXknIHx8IGN1cnJlbnRWaWV3ID09PSAndGhpcy13ZWVrJykge1xuICAgICAgICBjdXJyZW50QXJyYXkgPSB0YXNrcy50YXNrcztcbiAgICAgICAgdGFza3NEb20ucmVuZGVyKGN1cnJlbnRBcnJheSk7XG4gICAgfSBlbHNlIHtcbiAgICBjdXJyZW50QXJyYXkgPSB0YXNrcy50YXNrcy5maWx0ZXIob2JqID0+IG9iai5wcm9qZWN0ID09PSBjdXJyZW50Vmlldyk7XG4gICAgdGFza3NEb20ucmVuZGVyKGN1cnJlbnRBcnJheSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VUYXNrc1ZpZXcoZSkge1xuICAgIHJlbW92ZUFjdGl2ZShlKTtcbiAgICBtYWtlQWN0aXZlKGUpO1xuICAgIGxldCBpZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpLmlkO1xuICAgIFxuICAgIGN1cnJlbnRWaWV3ID0gaWQ7XG4gICAgcHJvamVjdFNlbGVjdGVkID0gJyc7XG5cbiAgICBpZiAoY3VycmVudFZpZXcgPT09ICdhbGwnKSB7XG4gICAgICAgIGN1cnJlbnRBcnJheSA9IHRhc2tzLnRhc2tzO1xuICAgICAgICB0YXNrc0RvbS5yZW5kZXIoY3VycmVudEFycmF5KTtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRWaWV3ID09PSAnc3RhcnJlZCcpIHtcbiAgICAgICAgY3VycmVudEFycmF5ID0gdGFza3MudGFza3MuZmlsdGVyKG9iamVjdCA9PiBvYmplY3RbJ3N0YXJyZWQnXSA9PT0gdHJ1ZSk7XG4gICAgICAgIHRhc2tzRG9tLnJlbmRlcihjdXJyZW50QXJyYXkpO1xuICAgIH0gIFxuICAgIGlmIChjdXJyZW50VmlldyA9PT0gJ3RvZGF5Jykge1xuICAgICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpXG4gICAgICAgIHRvZGF5ID0gbmV3IERhdGUoRGF0ZS5VVEModG9kYXkuZ2V0RnVsbFllYXIoKSx0b2RheS5nZXRNb250aCgpLCB0b2RheS5nZXREYXRlKCkpKTtcbiAgICAgICAgdG9kYXkgPSB0b2RheS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XG4gICAgICAgIGN1cnJlbnRBcnJheSA9IHRhc2tzLnRhc2tzLmZpbHRlcihvYmplY3QgPT4gb2JqZWN0WydkdWUnXSA9PT0gdG9kYXkpO1xuICAgICAgICB0YXNrc0RvbS5yZW5kZXIoY3VycmVudEFycmF5KTtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRWaWV3ID09PSAndGhpcy13ZWVrJykge1xuICAgICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB0b2RheSA9IG5ldyBEYXRlKERhdGUuVVRDKHRvZGF5LmdldEZ1bGxZZWFyKCksdG9kYXkuZ2V0TW9udGgoKSwgdG9kYXkuZ2V0RGF0ZSgpKSk7XG4gICAgICAgIGxldCB3ZWVrID0gbmV3IERhdGUoKTtcbiAgICAgICAgd2VlayA9IG5ldyBEYXRlKERhdGUuVVRDKHdlZWsuZ2V0RnVsbFllYXIoKSx3ZWVrLmdldE1vbnRoKCksIHdlZWsuZ2V0RGF0ZSgpKSk7XG4gICAgICAgIHdlZWsuc2V0RGF0ZSh0b2RheS5nZXREYXRlKCkgKyA3KTtcblxuICAgICAgICBjdXJyZW50QXJyYXkgPSB0YXNrcy50YXNrcy5maWx0ZXIoKG9iamVjdCkgPT4ge1xuICAgICAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShEYXRlLnBhcnNlKG9iamVjdFsnZHVlJ10pKTtcbiAgICAgICAgICAgIHJldHVybiAoZGF0ZSA+PSB0b2RheSAmJiBkYXRlIDw9IHdlZWspO1xuICAgICAgICB9KTtcbiAgICAgICAgdGFza3NEb20ucmVuZGVyKGN1cnJlbnRBcnJheSk7XG4gICAgfVxufVxuXG5leHBvcnQge3JlbmRlciwgbGlzdGVuLCBjdXJyZW50QXJyYXksIGN1cnJlbnRWaWV3LCB1cGRhdGVBcnJheSwgXG4gICAgcHJvamVjdFNlbGVjdGVkfTsiLCJsZXQgdGFza3MgPSBbe1xuICAgIHRpdGxlOiAnUnVuJyxcbiAgICBkZXNjcmlwdGlvbjogJ0dvIHJ1bm5pbmcnLFxuICAgIHN0YXJyZWQ6IGZhbHNlLFxuICAgIGR1ZTogJzIwMjItMDYtMjEnLFxuICAgIHByb2plY3Q6ICcnLFxufV07XG5cbmNvbnN0IGdldFRhc2tzID0gKCkgPT4ge1xuICAgIHJldHVybiB0YXNrcztcbn1cblxuY29uc3QgdXBkYXRlID0gKGluZGV4LCBwcm9wZXJ0eSwgdmFsdWUpID0+IHtcbiAgICB0YXNrc1tpbmRleF1bcHJvcGVydHldID0gdmFsdWU7XG59XG5cbmNvbnN0IGNyZWF0ZSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIHN0YXJyZWQsIGR1ZSwgcHJvamVjdCkgPT4ge1xuICAgICAgICByZXR1cm4ge3RpdGxlLCBkZXNjcmlwdGlvbiwgc3RhcnJlZCwgZHVlLCBwcm9qZWN0fTtcbiAgICB9XG5cbmNvbnN0IGFkZCA9IChvYmplY3QpID0+IHtcbiAgICB0YXNrcy5wdXNoKG9iamVjdCk7XG59XG5cbmNvbnN0IGRlbCA9IChpZCkgPT4ge1xuICAgIHRhc2tzLnNwbGljZShpZCwgMSk7XG59XG5cbmNvbnN0IHRvZ2dsZVN0YXJyZWQgPSAoaW5kZXgpID0+IHtcbiAgICBpZiAodGFza3NbaW5kZXhdLnN0YXJyZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIHRhc2tzW2luZGV4XS5zdGFycmVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0YXNrc1tpbmRleF0uc3RhcnJlZCA9IGZhbHNlO1xuICAgIH1cbn1cblxuZXhwb3J0IHt1cGRhdGUsIGNyZWF0ZSwgdGFza3MsIGdldFRhc2tzLCBhZGQsIGRlbCwgdG9nZ2xlU3RhcnJlZH07IiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tICcuL3Byb2plY3RzLmpzJztcbmltcG9ydCAqIGFzIHRhc2tzIGZyb20gJy4vdGFza3MuanMnO1xuaW1wb3J0ICogYXMgcHJvamVjdHNEb20gZnJvbSAnLi9wcm9qZWN0c0RvbS5qcyc7XG5pbXBvcnQgbWVudTEgZnJvbSAnLi4vaW1hZ2VzL21lbnUuc3ZnJztcbmltcG9ydCBzdGFyMSBmcm9tICcuLi9pbWFnZXMvc3Rhci5zdmcnO1xuXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKTtcbmNvbnN0IG5ld1Rhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXRhc2snKTtcbmNvbnN0IG5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QnKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VEcm9wKTtcblxuZnVuY3Rpb24gbGlzdGVuKCkge1xuICAgIG5ld1Rhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXdUYXNrQ2xpY2spO1xuXG59XG5cbmZ1bmN0aW9uIHJlbmRlcihhcnJheSA9IHRhc2tzLnRhc2tzKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKS5mb3JFYWNoKChlKSA9PiB7ZS5yZW1vdmUoKX0pO1xuXG4gICAgZm9yKGxldCBpPTA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YXNrLmlkID0gYCR7aX1gO1xuICAgICAgICAgICAgdGFzay5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICAgICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1RpdGxlJyk7XG4gICAgICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ21pbmxlbmd0aCcsICcxJyk7XG4gICAgICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsICcyNScpO1xuICAgICAgICAgICAgdGl0bGUudmFsdWUgPSBhcnJheVtpXS50aXRsZTtcbiAgICAgICAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICAgICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlQ2hhbmdlKTtcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnbWlubGVuZ3RoJywgJzEnKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJywgJzExMScpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb24udmFsdWUgPSBhcnJheVtpXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIHRhc2suYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgZGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlQ2hhbmdlKTtcblxuICAgICAgICBjb25zdCBzdGFyID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBzdGFyLnNyYyA9IHN0YXIxO1xuICAgICAgICAgICAgc3Rhci5hbHQgPSAnU3RhciBpY29uJztcbiAgICAgICAgICAgIHN0YXIuaWQgPSAnc3Rhcic7XG4gICAgICAgICAgICBpZiAoYXJyYXlbaV0uc3RhcnJlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHN0YXIuY2xhc3NMaXN0LmFkZCgnZmlsdGVyLXdoaXRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXNrLmFwcGVuZENoaWxkKHN0YXIpO1xuICAgICAgICAgICAgc3Rhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVN0YXIpO1xuICAgICAgICAgICAgc3Rhci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBvdmVyU3Rhcik7XG4gICAgICAgICAgICBzdGFyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0Jywgb3V0U3Rhcik7XG5cbiAgICAgICAgY29uc3QgZHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGR1ZS5jbGFzc0xpc3QuYWRkKCdkdWUnKTtcbiAgICAgICAgICAgIGR1ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgICAgICAgICAgZHVlLnZhbHVlID0gYXJyYXlbaV0uZHVlO1xuICAgICAgICAgICAgdGFzay5hcHBlbmRDaGlsZChkdWUpO1xuICAgICAgICAgICAgZHVlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZUNoYW5nZSk7XG5cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGRyb3BEb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkcm9wRG93bi5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bicpO1xuXG4gICAgICAgICAgICBjb25zdCBtZW51ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgbWVudS5zcmMgPSBtZW51MTtcbiAgICAgICAgICAgICAgICBtZW51LmlkID0gJ21lbnUnO1xuICAgICAgICAgICAgICAgIG1lbnUuYWx0ID0gJ01lbnUgaWNvbic7XG4gICAgICAgICAgICAgICAgZHJvcERvd24uYXBwZW5kQ2hpbGQobWVudSk7XG4gICAgICAgICAgICAgICAgbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZURyb3ApO1xuXG4gICAgICAgICAgICBjb25zdCBkcm9wRG93bkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBkcm9wRG93bkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd24tY29udGVudCcpO1xuICAgICAgICAgICAgICAgIGRyb3BEb3duQ29udGVudC5pZCA9IGBkcm9wZG93bi1jb250ZW50LSR7aX1gO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGRlbC5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgICAgICAgICAgICAgICBkZWwudGV4dENvbnRlbnQgPSAnRGVsZXRlIFRhc2snO1xuICAgICAgICAgICAgICAgIGRyb3BEb3duQ29udGVudC5hcHBlbmRDaGlsZChkZWwpO1xuICAgICAgICAgICAgICAgIGRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVRhc2spOyBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBtcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1wcm9qZWN0Jyk7XG4gICAgICAgICAgICAgICAgbXBzLmZvckVhY2goZSA9PiBlLnJlbW92ZSk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcHJvaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qLmlkID0gYG1wJHtpfWA7XG4gICAgICAgICAgICAgICAgICAgIHByb2ouY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gICAgICAgICAgICAgICAgICAgIHByb2oudGV4dENvbnRlbnQgPSBwcm9qZWN0c1tpXS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICBwcm9qLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXNzaWduVGFzayk7XG4gICAgICAgICAgICAgICAgICAgIGRyb3BEb3duQ29udGVudC5hcHBlbmRDaGlsZChwcm9qKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZHJvcERvd24uYXBwZW5kQ2hpbGQoZHJvcERvd25Db250ZW50KTtcblxuICAgICAgICB0YXNrLmFwcGVuZENoaWxkKGRyb3BEb3duKTtcblxuICAgICAgICBtYWluLmluc2VydEJlZm9yZSh0YXNrLCBuZXdUYXNrQnRuKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG92ZXJTdGFyKGUpIHtcbiAgICBjb25zdCBzdGFyID0gZS50YXJnZXQuY2xvc2VzdCgnI3N0YXInKTtcbiAgICBzdGFyLmNsYXNzTGlzdC5hZGQoJ2hvdmVyZWQnKTtcbn1cblxuZnVuY3Rpb24gb3V0U3RhcihlKSB7XG4gICAgY29uc3Qgc3RhciA9IGUudGFyZ2V0LmNsb3Nlc3QoJyNzdGFyJyk7XG4gICAgc3Rhci5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcmVkJyk7XG59XG5cbmZ1bmN0aW9uIGFzc2lnblRhc2soZSkge1xuICAgIGxldCB0SW5kZXggPSBlLnRhcmdldC5jbG9zZXN0KCcudGFzaycpLmlkO1xuICAgIGxldCBwTmFtZSA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5tZW51LWl0ZW0nKS50ZXh0Q29udGVudDtcbiAgICB0YXNrcy51cGRhdGUodEluZGV4LCAncHJvamVjdCcsIHBOYW1lKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VEcm9wKGUpIHtcbiAgaWYoIWUudGFyZ2V0Lm1hdGNoZXMoJyNtZW51JykpIHtcbiAgICBsZXQgZGRjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3cnKTtcbiAgICBpZiAoZGRjID09PSBudWxsKSB7cmV0dXJuO31cbiAgICBpZiAoZGRjLmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKSB7XG4gICAgZGRjLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcbiAgICB9XG4gIH1cbn1cbiAgIFxuXG5mdW5jdGlvbiBoYW5kbGVEcm9wKGUpIHtcbiAgICBsZXQgdGFzayA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrJykuaWQ7XG4gICAgbGV0IGRkYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNkcm9wZG93bi1jb250ZW50LSR7dGFza31gKTtcbiAgICBkZGMuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xuICAgIGxldCBwcm9wZXJ0eSA9IGUudGFyZ2V0LmNsYXNzTmFtZTtcbiAgICBsZXQgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBsZXQgaWQgPSBlLnRhcmdldC5jbG9zZXN0KCcudGFzaycpLmlkO1xuICAgIHRhc2tzLnVwZGF0ZShpZCwgcHJvcGVydHksIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlU3RhcihlKSB7XG4gICAgY29uc3Qgc3RhciA9IGUudGFyZ2V0LmNsb3Nlc3QoJyNzdGFyJyk7XG4gICAgc3Rhci5jbGFzc0xpc3QudG9nZ2xlKCdmaWx0ZXItd2hpdGUnKTtcbiAgICBsZXQgaWQgPSBzdGFyLmNsb3Nlc3QoJy50YXNrJykuaWQ7XG4gICAgdGFza3MudG9nZ2xlU3RhcnJlZChpZCk7XG59XG5cbmZ1bmN0aW9uIG5ld1Rhc2tDbGljaygpIHtcbiAgICB0YXNrcy50YXNrcy5wdXNoKHRhc2tzLmNyZWF0ZSgnJywgJycsIGZhbHNlLCAnJywgcHJvamVjdHNEb20ucHJvamVjdFNlbGVjdGVkKSk7XG4gICAgcHJvamVjdHNEb20udXBkYXRlQXJyYXkoKTtcbiAgICByZW5kZXIocHJvamVjdHNEb20uY3VycmVudEFycmF5KTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlVGFzayAoZSkge1xuICAgIGxldCBpZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrJykuaWQ7XG4gICAgdGFza3MuZGVsKGlkKTtcbiAgICByZW5kZXIocHJvamVjdHNEb20uY3VycmVudEFycmF5KTtcbn1cblxuZXhwb3J0IHtsaXN0ZW4sIHJlbmRlcn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIlxuaW1wb3J0ICogYXMgdGFza3NEb20gZnJvbSAnLi9hc3NldHMvbW9kdWxlcy90YXNrc0RvbS5qcyc7XG5pbXBvcnQgKiBhcyBwcm9qRG9tIGZyb20gJy4vYXNzZXRzL21vZHVsZXMvcHJvamVjdHNEb20uanMnXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxudGFza3NEb20ubGlzdGVuKCk7XG50YXNrc0RvbS5yZW5kZXIoKTtcbnByb2pEb20ubGlzdGVuKCk7XG5wcm9qRG9tLnJlbmRlcigpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=