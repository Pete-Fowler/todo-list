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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: oswald;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n    font-family: baloo;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n* {\n    font-family: oswald;\n}\nbody {\n    color: white;\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n    display: grid;\n    grid-template: 1fr 11fr / 1fr 3fr;\n    grid-template-areas: \n    \"header header\"\n    \"nav main\";\n}\n\n#header {\n    display: flex; \n    justify-content: center;\n    align-items: center;\n    font-size: 3rem;\n    font-weight: 700;\n    background-color: #3261EB;\n    grid-area: header;\n}\n\n#title {\n    font-family: baloo;\n}\n\n#nav {\n    background-color: #274BB8;\n    grid-area: nav;\n}\n\n#nav-top {\n    display: flex;\n    flex-direction: column;\n    padding: 5px;\n}\n\n.nav {\n    font-size: 2rem;\n    color: white;\n    height: 100%;\n    border-radius: 10px;\n    border: 0px;\n    margin: 5px 2px;\n    padding: 10px;\n    background-color: #274BB8;\n    text-align: left;\n}\n\n#delete-icon {\n    height: 30px;\n    width: 30px;\n}\n\n#delete-icon:hover {\n    transform: scale(1.3);\n    transition: .6s;\n}\n\n.nav:hover, .active {\n    background-color: #7997EE;\n    transition: .6s;\n}\n\n.project-wrapper {\n    display: flex;\n    align-items: center;\n    padding: 5px;\n}\n\n.project {\n    flex: 7; \n}\n\n#nav hr {\n    color: white;\n    background-color: white;\n    height: 1px;\n    width: 95%;\n}\n\n#new-project, #new-task {\n    color: white;\n    font-size: 4rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 50px;\n    width: 50px;\n    border: 0px;\n    border-radius: 10px;\n    margin: 20px;\n    background-color: #274BB8;\n}\n\n#new-project:hover, #new-task:hover {\n    transform: scale(1.3);\n    transition: .6s;\n}\n\n#new-task {\n    background-color: #7997EE;\n}\n\n#new-task-img, #new-project-img {\n    \n}\n\n#modal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100vw;\n    height: 100vh;\n    overflow: hidden;\n    background-color: rgba(0, 0, 0, .5);\n}\n\n#modal-content {\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #7997EE;\n    margin: 20% auto;\n    padding: 5px;\n    border: 1px solid #274BB8;\n    border-radius: 10px;\n    width: 30%;\n}\n\n#modal-input {\n    width: 95%;\n    font-size: 2rem;\n    color: white;\n    height: 100%;\n    border-radius: 10px;\n    border: 0px;\n    margin: 5px 2px;\n    padding: 10px;\n    background-color: #274BB8;\n    text-align: left;\n}\n\n#modal-delete {\n    font-size: 1rem;\n    font-weight: 700;\n    appearance: none;\n    position: absolute;\n    top: 14px;\n    left: 94%;\n    color: #274BB8;\n    background-color: #7997EE;\n    border: none;\n    border-radius: 5px;\n    margin-left: auto;\n    margin-bottom: auto;\n    transition: .4s;\n}\n\n#modal-delete:hover {\n    color: #7997EE;\n    background-color: #274BB8;\n    border: 1px solid #7997EE;\n}\n\n/* Main */\n#main {\n    display: grid;\n    grid-template: repeat(auto-fill, 50px) / 1fr;\n    grid-auto-rows: 50px;\n    gap: 20px;\n    padding: 10px;\n    align-items: center;\n    background-color: #7997EE;\n    grid-area: main;\n    overflow: auto;\n}\n\n.task {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    margin: 0px;\n    background-color: #274BB8;\n    border-radius: 10px;\n    box-shadow: 2px 2px 6px rgba(0, 0, 0, .8);\n}\n\n.task input, .task label, .dropdown-button {\n    color: white;\n    font-size: 1.5rem;\n    background-color: inherit;\n    height: 70%;\n    border: none;\n    border-radius: 5px;\n    padding: 0px 5px;\n    margin: 5px 10px;\n    transition: .4s;\n}\n\n.task input:hover, .task label:hover, #menu:hover  {\n    background-color: #7997EE;\n}\n\n.task input:focus {\n    background-color: #7997EE;\n    border: 3px solid black;\n}\n\n.task input::placeholder{\n    color: white;\n    opacity: .6;\n}\n\n.description {\n    flex: 1 1 0;\n}\n\n.due {\n    width: 150px;\n}\n\n#star {\n    height: 35px;\n    width: 35px;\n    border-radius: 5px;\n    transition: .4s;\n    padding: 1px;\n}\n\n.hovered {\n    filter: invert(54%) sepia(3%) saturate(25%) hue-rotate(27deg) brightness(92%) contrast(88%);\n}\n\n.filter-white {\n    filter: invert(100%) sepia(0%) saturate(7488%) hue-rotate(1deg) brightness(103%) contrast(99%);\n}\n\n/* Dropdown  */\n.dropdown {\n    position: relative;\n    display: inline-block;\n    margin: 0px;\n    padding: 5px;\n    padding-top: 10px;\n}\n\n#menu {\n    width: 38px;\n    height: 38px;\n    border-radius: 5px;\n}\n\n.dropdown-content {\n    display: none;\n    position: absolute;\n    right: 0;\n    box-shadow: 4px 4px 16px 0px rgba(0, 0, 0, .8);\n    z-index: 5;\n    color: white;\n    font-size: 1.3rem;\n    background-color: #3261EB;\n    min-height: 40px;\n    min-width: 200px;\n    border: none;\n    border-radius: 5px;\n    padding: 10px;\n    margin: 0px;\n    transition: .4s;\n}\n\n.show {\n    display: block;\n}\n\n.menu-item {\n    display: flex;\n    align-items: center;\n    padding: 5px;\n    transition: .4s;\n    border-radius: 5px;\n}\n\n.menu-item-hover:hover, .ddcactive {\n    background-color: #7997EE;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: oswald;\n    src: url(./assets/fonts/Oswald-VariableFont_wght.ttf);\n}\n\n@font-face {\n    font-family: baloo;\n    src: url('./assets/fonts/Baloo2-VariableFont_wght.ttf');\n}\n\n* {\n    font-family: oswald;\n}\nbody {\n    color: white;\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n    display: grid;\n    grid-template: 1fr 11fr / 1fr 3fr;\n    grid-template-areas: \n    \"header header\"\n    \"nav main\";\n}\n\n#header {\n    display: flex; \n    justify-content: center;\n    align-items: center;\n    font-size: 3rem;\n    font-weight: 700;\n    background-color: #3261EB;\n    grid-area: header;\n}\n\n#title {\n    font-family: baloo;\n}\n\n#nav {\n    background-color: #274BB8;\n    grid-area: nav;\n}\n\n#nav-top {\n    display: flex;\n    flex-direction: column;\n    padding: 5px;\n}\n\n.nav {\n    font-size: 2rem;\n    color: white;\n    height: 100%;\n    border-radius: 10px;\n    border: 0px;\n    margin: 5px 2px;\n    padding: 10px;\n    background-color: #274BB8;\n    text-align: left;\n}\n\n#delete-icon {\n    height: 30px;\n    width: 30px;\n}\n\n#delete-icon:hover {\n    transform: scale(1.3);\n    transition: .6s;\n}\n\n.nav:hover, .active {\n    background-color: #7997EE;\n    transition: .6s;\n}\n\n.project-wrapper {\n    display: flex;\n    align-items: center;\n    padding: 5px;\n}\n\n.project {\n    flex: 7; \n}\n\n#nav hr {\n    color: white;\n    background-color: white;\n    height: 1px;\n    width: 95%;\n}\n\n#new-project, #new-task {\n    color: white;\n    font-size: 4rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 50px;\n    width: 50px;\n    border: 0px;\n    border-radius: 10px;\n    margin: 20px;\n    background-color: #274BB8;\n}\n\n#new-project:hover, #new-task:hover {\n    transform: scale(1.3);\n    transition: .6s;\n}\n\n#new-task {\n    background-color: #7997EE;\n}\n\n#new-task-img, #new-project-img {\n    \n}\n\n#modal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100vw;\n    height: 100vh;\n    overflow: hidden;\n    background-color: rgba(0, 0, 0, .5);\n}\n\n#modal-content {\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #7997EE;\n    margin: 20% auto;\n    padding: 5px;\n    border: 1px solid #274BB8;\n    border-radius: 10px;\n    width: 30%;\n}\n\n#modal-input {\n    width: 95%;\n    font-size: 2rem;\n    color: white;\n    height: 100%;\n    border-radius: 10px;\n    border: 0px;\n    margin: 5px 2px;\n    padding: 10px;\n    background-color: #274BB8;\n    text-align: left;\n}\n\n#modal-delete {\n    font-size: 1rem;\n    font-weight: 700;\n    appearance: none;\n    position: absolute;\n    top: 14px;\n    left: 94%;\n    color: #274BB8;\n    background-color: #7997EE;\n    border: none;\n    border-radius: 5px;\n    margin-left: auto;\n    margin-bottom: auto;\n    transition: .4s;\n}\n\n#modal-delete:hover {\n    color: #7997EE;\n    background-color: #274BB8;\n    border: 1px solid #7997EE;\n}\n\n/* Main */\n#main {\n    display: grid;\n    grid-template: repeat(auto-fill, 50px) / 1fr;\n    grid-auto-rows: 50px;\n    gap: 20px;\n    padding: 10px;\n    align-items: center;\n    background-color: #7997EE;\n    grid-area: main;\n    overflow: auto;\n}\n\n.task {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    margin: 0px;\n    background-color: #274BB8;\n    border-radius: 10px;\n    box-shadow: 2px 2px 6px rgba(0, 0, 0, .8);\n}\n\n.task input, .task label, .dropdown-button {\n    color: white;\n    font-size: 1.5rem;\n    background-color: inherit;\n    height: 70%;\n    border: none;\n    border-radius: 5px;\n    padding: 0px 5px;\n    margin: 5px 10px;\n    transition: .4s;\n}\n\n.task input:hover, .task label:hover, #menu:hover  {\n    background-color: #7997EE;\n}\n\n.task input:focus {\n    background-color: #7997EE;\n    border: 3px solid black;\n}\n\n.task input::placeholder{\n    color: white;\n    opacity: .6;\n}\n\n.description {\n    flex: 1 1 0;\n}\n\n.due {\n    width: 150px;\n}\n\n#star {\n    height: 35px;\n    width: 35px;\n    border-radius: 5px;\n    transition: .4s;\n    padding: 1px;\n}\n\n.hovered {\n    filter: invert(54%) sepia(3%) saturate(25%) hue-rotate(27deg) brightness(92%) contrast(88%);\n}\n\n.filter-white {\n    filter: invert(100%) sepia(0%) saturate(7488%) hue-rotate(1deg) brightness(103%) contrast(99%);\n}\n\n/* Dropdown  */\n.dropdown {\n    position: relative;\n    display: inline-block;\n    margin: 0px;\n    padding: 5px;\n    padding-top: 10px;\n}\n\n#menu {\n    width: 38px;\n    height: 38px;\n    border-radius: 5px;\n}\n\n.dropdown-content {\n    display: none;\n    position: absolute;\n    right: 0;\n    box-shadow: 4px 4px 16px 0px rgba(0, 0, 0, .8);\n    z-index: 5;\n    color: white;\n    font-size: 1.3rem;\n    background-color: #3261EB;\n    min-height: 40px;\n    min-width: 200px;\n    border: none;\n    border-radius: 5px;\n    padding: 10px;\n    margin: 0px;\n    transition: .4s;\n}\n\n.show {\n    display: block;\n}\n\n.menu-item {\n    display: flex;\n    align-items: center;\n    padding: 5px;\n    transition: .4s;\n    border-radius: 5px;\n}\n\n.menu-item-hover:hover, .ddcactive {\n    background-color: #7997EE;\n}"],"sourceRoot":""}]);
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
/* harmony export */   "getProjects": () => (/* binding */ getProjects),
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "storeProjects": () => (/* binding */ storeProjects),
/* harmony export */   "update": () => (/* binding */ update)
/* harmony export */ });
const storeProjects = () => {
    localStorage.setItem('projects', JSON.stringify(projects));
}

const getProjects = () => {
    let existingProjects = JSON.parse(localStorage.getItem('projects'));
    return existingProjects;
}

const update = (index, property, value) => {
    projects[index][property] = value;
}

const create = (name) => {
    return {name};
}

const del = (id) => {
    projects.splice(id, 1);
}

let projects = [];

if(localStorage.length !== 0){
    projects = getProjects();
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
/* harmony import */ var _images_newProject_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/newProject.svg */ "./src/assets/images/newProject.svg");






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
    _projects__WEBPACK_IMPORTED_MODULE_1__.storeProjects();
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
    _projects__WEBPACK_IMPORTED_MODULE_1__.storeProjects();
}

const listen = () => {
    const newProject = new Image();
        newProject.src = _images_newProject_svg__WEBPACK_IMPORTED_MODULE_4__;
        newProject.alt = 'New project icon';
        newProject.id = 'new-project-img';
        newProjectBtn.appendChild(newProject);
    
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
    removeActive(e);    // UI highlighting
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
/* harmony export */   "storeTasks": () => (/* binding */ storeTasks),
/* harmony export */   "tasks": () => (/* binding */ tasks),
/* harmony export */   "toggleStarred": () => (/* binding */ toggleStarred),
/* harmony export */   "update": () => (/* binding */ update)
/* harmony export */ });



const storeTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

const getTasks = () => {
    let existingTasks = JSON.parse(localStorage.getItem('tasks'));
    return existingTasks;
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

let tasks = [];
if (localStorage.length !== 0) {
    tasks = getTasks();
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
/* harmony import */ var _images_newTask_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/newTask.svg */ "./src/assets/images/newTask.svg");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../index.js */ "./src/index.js");








const main = document.querySelector('#main');
const newTaskBtn = document.querySelector('#new-task');
const newProjectBtn = document.querySelector('#new-project');

window.addEventListener('click', closeDrop);

function listen() {
    const newTask = new Image();
    newTask.src = _images_newTask_svg__WEBPACK_IMPORTED_MODULE_5__;
    newTask.alt = 'New task icon';
    newTask.id = 'new-task-img';
    newTaskBtn.appendChild(newTask);
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
                del.classList.add('menu-item-hover');
                dropDownContent.appendChild(del);
                del.addEventListener('click', deleteTask);

                const hr = document.createElement('hr');
                dropDownContent.appendChild(hr);
                
                const mps = document.querySelectorAll('.menu-project');
                mps.forEach(e => e.remove);
                for (let i = 0; i < _projects_js__WEBPACK_IMPORTED_MODULE_0__.projects.length; i++) {
                    let proj = document.createElement('div');
                    proj.id = `mp${i}`;
                    proj.classList.add('menu-item');
                    proj.classList.add('menu-item-hover');
                    proj.textContent = _projects_js__WEBPACK_IMPORTED_MODULE_0__.projects[i].name;
                    proj.addEventListener('click', assignTask);
                    dropDownContent.appendChild(proj);
                }

                // const none = document.createElement('div');
                // none.id = 'none'
                // none.classList.add('menu-item');
                // none.classList.add('menu-item-hover');
                // none.addEventListener('click', removeFromProject);

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
    let item = e.target.closest('.menu-item');
    let taskIndex = e.target.closest('.task').id;
    let projectName = item.textContent;
    if (_tasks_js__WEBPACK_IMPORTED_MODULE_1__.tasks[taskIndex].project === projectName) {
        _tasks_js__WEBPACK_IMPORTED_MODULE_1__.tasks[taskIndex].project = '';
        item.classList.remove('ddcactive');
        item.classList.remove('menu-item-hover');
        item.addEventListener('mouseout', () => 
        {item.classList.add('menu-item-hover')});
    } else {
    _tasks_js__WEBPACK_IMPORTED_MODULE_1__.update(taskIndex, 'project', projectName);
    item.classList.toggle('ddcactive');
    }
    _tasks_js__WEBPACK_IMPORTED_MODULE_1__.storeTasks();
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
    _tasks_js__WEBPACK_IMPORTED_MODULE_1__.storeTasks();
}

function handleStar(e) {
    const star = e.target.closest('#star');
    star.classList.toggle('filter-white');
    let id = star.closest('.task').id;
    _tasks_js__WEBPACK_IMPORTED_MODULE_1__.toggleStarred(id);
    _tasks_js__WEBPACK_IMPORTED_MODULE_1__.storeTasks();
}

function newTaskClick() {
    _tasks_js__WEBPACK_IMPORTED_MODULE_1__.tasks.push(_tasks_js__WEBPACK_IMPORTED_MODULE_1__.create('', '', false, '', _projectsDom_js__WEBPACK_IMPORTED_MODULE_2__.projectSelected));
    _projectsDom_js__WEBPACK_IMPORTED_MODULE_2__.updateArray();
    render(_projectsDom_js__WEBPACK_IMPORTED_MODULE_2__.currentArray);
    _tasks_js__WEBPACK_IMPORTED_MODULE_1__.storeTasks();
}

function deleteTask (e) {
    let id = e.target.closest('.task').id;
    _tasks_js__WEBPACK_IMPORTED_MODULE_1__.del(id);
    render(_projectsDom_js__WEBPACK_IMPORTED_MODULE_2__.currentArray);
    _tasks_js__WEBPACK_IMPORTED_MODULE_1__.storeTasks();
}





/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_modules_tasksDom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/modules/tasksDom.js */ "./src/assets/modules/tasksDom.js");
/* harmony import */ var _assets_modules_projectsDom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/modules/projectsDom.js */ "./src/assets/modules/projectsDom.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _assets_modules_tasks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/modules/tasks.js */ "./src/assets/modules/tasks.js");
/* harmony import */ var _assets_modules_projects_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/modules/projects.js */ "./src/assets/modules/projects.js");








_assets_modules_tasksDom_js__WEBPACK_IMPORTED_MODULE_0__.render();
_assets_modules_tasksDom_js__WEBPACK_IMPORTED_MODULE_0__.listen();
_assets_modules_projectsDom_js__WEBPACK_IMPORTED_MODULE_1__.render();
_assets_modules_projectsDom_js__WEBPACK_IMPORTED_MODULE_1__.listen();








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

/***/ "./src/assets/images/newProject.svg":
/*!******************************************!*\
  !*** ./src/assets/images/newProject.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f344ba02b7fe7ce626a2.svg";

/***/ }),

/***/ "./src/assets/images/newTask.svg":
/*!***************************************!*\
  !*** ./src/assets/images/newTask.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca4944c709270b60be9f.svg";

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy9tb2R1bGVzL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc3NldHMvbW9kdWxlcy9wcm9qZWN0c0RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL21vZHVsZXMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy9tb2R1bGVzL3Rhc2tzRG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvT3N3YWxkLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL0JhbG9vMi1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBvc3dhbGQ7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBiYWxvbztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG4qIHtcXG4gICAgZm9udC1mYW1pbHk6IG9zd2FsZDtcXG59XFxuYm9keSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAxMWZyIC8gMWZyIDNmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICBcXFwibmF2IG1haW5cXFwiO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDsgXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjYxRUI7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbn1cXG5cXG4jdGl0bGUge1xcbiAgICBmb250LWZhbWlseTogYmFsb287XFxufVxcblxcbiNuYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc0QkI4O1xcbiAgICBncmlkLWFyZWE6IG5hdjtcXG59XFxuXFxuI25hdi10b3Age1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5uYXYge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgbWFyZ2luOiA1cHggMnB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc0QkI4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4jZGVsZXRlLWljb24ge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbn1cXG5cXG4jZGVsZXRlLWljb246aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxuICAgIHRyYW5zaXRpb246IC42cztcXG59XFxuXFxuLm5hdjpob3ZlciwgLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTk3RUU7XFxuICAgIHRyYW5zaXRpb246IC42cztcXG59XFxuXFxuLnByb2plY3Qtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBmbGV4OiA3OyBcXG59XFxuXFxuI25hdiBociB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICB3aWR0aDogOTUlO1xcbn1cXG5cXG4jbmV3LXByb2plY3QsICNuZXctdGFzayB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3NEJCODtcXG59XFxuXFxuI25ldy1wcm9qZWN0OmhvdmVyLCAjbmV3LXRhc2s6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxuICAgIHRyYW5zaXRpb246IC42cztcXG59XFxuXFxuI25ldy10YXNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc5OTdFRTtcXG59XFxuXFxuI25ldy10YXNrLWltZywgI25ldy1wcm9qZWN0LWltZyB7XFxuICAgIFxcbn1cXG5cXG4jbW9kYWwge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcXG59XFxuXFxuI21vZGFsLWNvbnRlbnQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk5N0VFO1xcbiAgICBtYXJnaW46IDIwJSBhdXRvO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyNzRCQjg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHdpZHRoOiAzMCU7XFxufVxcblxcbiNtb2RhbC1pbnB1dCB7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBtYXJnaW46IDVweCAycHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzRCQjg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbiNtb2RhbC1kZWxldGUge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxNHB4O1xcbiAgICBsZWZ0OiA5NCU7XFxuICAgIGNvbG9yOiAjMjc0QkI4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk5N0VFO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XFxuICAgIHRyYW5zaXRpb246IC40cztcXG59XFxuXFxuI21vZGFsLWRlbGV0ZTpob3ZlciB7XFxuICAgIGNvbG9yOiAjNzk5N0VFO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc0QkI4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzk5N0VFO1xcbn1cXG5cXG4vKiBNYWluICovXFxuI21haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoYXV0by1maWxsLCA1MHB4KSAvIDFmcjtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDUwcHg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc5OTdFRTtcXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLnRhc2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3NEJCODtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAuOCk7XFxufVxcblxcbi50YXNrIGlucHV0LCAudGFzayBsYWJlbCwgLmRyb3Bkb3duLWJ1dHRvbiB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGhlaWdodDogNzAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMHB4IDVweDtcXG4gICAgbWFyZ2luOiA1cHggMTBweDtcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcbn1cXG5cXG4udGFzayBpbnB1dDpob3ZlciwgLnRhc2sgbGFiZWw6aG92ZXIsICNtZW51OmhvdmVyICB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTk3RUU7XFxufVxcblxcbi50YXNrIGlucHV0OmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc5OTdFRTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxufVxcblxcbi50YXNrIGlucHV0OjpwbGFjZWhvbGRlcntcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBvcGFjaXR5OiAuNjtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gICAgZmxleDogMSAxIDA7XFxufVxcblxcbi5kdWUge1xcbiAgICB3aWR0aDogMTUwcHg7XFxufVxcblxcbiNzdGFyIHtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDogMzVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxuICAgIHBhZGRpbmc6IDFweDtcXG59XFxuXFxuLmhvdmVyZWQge1xcbiAgICBmaWx0ZXI6IGludmVydCg1NCUpIHNlcGlhKDMlKSBzYXR1cmF0ZSgyNSUpIGh1ZS1yb3RhdGUoMjdkZWcpIGJyaWdodG5lc3MoOTIlKSBjb250cmFzdCg4OCUpO1xcbn1cXG5cXG4uZmlsdGVyLXdoaXRlIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc0ODglKSBodWUtcm90YXRlKDFkZWcpIGJyaWdodG5lc3MoMTAzJSkgY29udHJhc3QoOTklKTtcXG59XFxuXFxuLyogRHJvcGRvd24gICovXFxuLmRyb3Bkb3duIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbn1cXG5cXG4jbWVudSB7XFxuICAgIHdpZHRoOiAzOHB4O1xcbiAgICBoZWlnaHQ6IDM4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmRyb3Bkb3duLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgLjgpO1xcbiAgICB6LWluZGV4OiA1O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI2MUVCO1xcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG59XFxuXFxuLnNob3cge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5tZW51LWl0ZW0taG92ZXI6aG92ZXIsIC5kZGNhY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk5N0VFO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLDRDQUFxRDtBQUN6RDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiw0Q0FBdUQ7QUFDM0Q7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLFNBQVM7SUFDVCxhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDOztjQUVVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNa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LGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsOENBQThDO0lBQzlDLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBvc3dhbGQ7XFxuICAgIHNyYzogdXJsKC4vYXNzZXRzL2ZvbnRzL09zd2FsZC1WYXJpYWJsZUZvbnRfd2dodC50dGYpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IGJhbG9vO1xcbiAgICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvQmFsb28yLVZhcmlhYmxlRm9udF93Z2h0LnR0ZicpO1xcbn1cXG5cXG4qIHtcXG4gICAgZm9udC1mYW1pbHk6IG9zd2FsZDtcXG59XFxuYm9keSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAxMWZyIC8gMWZyIDNmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICBcXFwibmF2IG1haW5cXFwiO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDsgXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjYxRUI7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbn1cXG5cXG4jdGl0bGUge1xcbiAgICBmb250LWZhbWlseTogYmFsb287XFxufVxcblxcbiNuYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc0QkI4O1xcbiAgICBncmlkLWFyZWE6IG5hdjtcXG59XFxuXFxuI25hdi10b3Age1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5uYXYge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgbWFyZ2luOiA1cHggMnB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc0QkI4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4jZGVsZXRlLWljb24ge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbn1cXG5cXG4jZGVsZXRlLWljb246aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxuICAgIHRyYW5zaXRpb246IC42cztcXG59XFxuXFxuLm5hdjpob3ZlciwgLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTk3RUU7XFxuICAgIHRyYW5zaXRpb246IC42cztcXG59XFxuXFxuLnByb2plY3Qtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBmbGV4OiA3OyBcXG59XFxuXFxuI25hdiBociB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICB3aWR0aDogOTUlO1xcbn1cXG5cXG4jbmV3LXByb2plY3QsICNuZXctdGFzayB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3NEJCODtcXG59XFxuXFxuI25ldy1wcm9qZWN0OmhvdmVyLCAjbmV3LXRhc2s6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxuICAgIHRyYW5zaXRpb246IC42cztcXG59XFxuXFxuI25ldy10YXNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc5OTdFRTtcXG59XFxuXFxuI25ldy10YXNrLWltZywgI25ldy1wcm9qZWN0LWltZyB7XFxuICAgIFxcbn1cXG5cXG4jbW9kYWwge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcXG59XFxuXFxuI21vZGFsLWNvbnRlbnQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk5N0VFO1xcbiAgICBtYXJnaW46IDIwJSBhdXRvO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyNzRCQjg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHdpZHRoOiAzMCU7XFxufVxcblxcbiNtb2RhbC1pbnB1dCB7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBtYXJnaW46IDVweCAycHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzRCQjg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbiNtb2RhbC1kZWxldGUge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxNHB4O1xcbiAgICBsZWZ0OiA5NCU7XFxuICAgIGNvbG9yOiAjMjc0QkI4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk5N0VFO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XFxuICAgIHRyYW5zaXRpb246IC40cztcXG59XFxuXFxuI21vZGFsLWRlbGV0ZTpob3ZlciB7XFxuICAgIGNvbG9yOiAjNzk5N0VFO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc0QkI4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzk5N0VFO1xcbn1cXG5cXG4vKiBNYWluICovXFxuI21haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoYXV0by1maWxsLCA1MHB4KSAvIDFmcjtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDUwcHg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc5OTdFRTtcXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLnRhc2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3NEJCODtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAuOCk7XFxufVxcblxcbi50YXNrIGlucHV0LCAudGFzayBsYWJlbCwgLmRyb3Bkb3duLWJ1dHRvbiB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGhlaWdodDogNzAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMHB4IDVweDtcXG4gICAgbWFyZ2luOiA1cHggMTBweDtcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcbn1cXG5cXG4udGFzayBpbnB1dDpob3ZlciwgLnRhc2sgbGFiZWw6aG92ZXIsICNtZW51OmhvdmVyICB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTk3RUU7XFxufVxcblxcbi50YXNrIGlucHV0OmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc5OTdFRTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxufVxcblxcbi50YXNrIGlucHV0OjpwbGFjZWhvbGRlcntcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBvcGFjaXR5OiAuNjtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gICAgZmxleDogMSAxIDA7XFxufVxcblxcbi5kdWUge1xcbiAgICB3aWR0aDogMTUwcHg7XFxufVxcblxcbiNzdGFyIHtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDogMzVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxuICAgIHBhZGRpbmc6IDFweDtcXG59XFxuXFxuLmhvdmVyZWQge1xcbiAgICBmaWx0ZXI6IGludmVydCg1NCUpIHNlcGlhKDMlKSBzYXR1cmF0ZSgyNSUpIGh1ZS1yb3RhdGUoMjdkZWcpIGJyaWdodG5lc3MoOTIlKSBjb250cmFzdCg4OCUpO1xcbn1cXG5cXG4uZmlsdGVyLXdoaXRlIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc0ODglKSBodWUtcm90YXRlKDFkZWcpIGJyaWdodG5lc3MoMTAzJSkgY29udHJhc3QoOTklKTtcXG59XFxuXFxuLyogRHJvcGRvd24gICovXFxuLmRyb3Bkb3duIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbn1cXG5cXG4jbWVudSB7XFxuICAgIHdpZHRoOiAzOHB4O1xcbiAgICBoZWlnaHQ6IDM4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmRyb3Bkb3duLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgLjgpO1xcbiAgICB6LWluZGV4OiA1O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI2MUVCO1xcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG59XFxuXFxuLnNob3cge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5tZW51LWl0ZW0taG92ZXI6aG92ZXIsIC5kZGNhY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk5N0VFO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3Qgc3RvcmVQcm9qZWN0cyA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xufVxuXG5jb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHtcbiAgICBsZXQgZXhpc3RpbmdQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpO1xuICAgIHJldHVybiBleGlzdGluZ1Byb2plY3RzO1xufVxuXG5jb25zdCB1cGRhdGUgPSAoaW5kZXgsIHByb3BlcnR5LCB2YWx1ZSkgPT4ge1xuICAgIHByb2plY3RzW2luZGV4XVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbn1cblxuY29uc3QgY3JlYXRlID0gKG5hbWUpID0+IHtcbiAgICByZXR1cm4ge25hbWV9O1xufVxuXG5jb25zdCBkZWwgPSAoaWQpID0+IHtcbiAgICBwcm9qZWN0cy5zcGxpY2UoaWQsIDEpO1xufVxuXG5sZXQgcHJvamVjdHMgPSBbXTtcblxuaWYobG9jYWxTdG9yYWdlLmxlbmd0aCAhPT0gMCl7XG4gICAgcHJvamVjdHMgPSBnZXRQcm9qZWN0cygpO1xufVxuXG5leHBvcnQge3Byb2plY3RzLCBkZWwsIHVwZGF0ZSwgY3JlYXRlLCBzdG9yZVByb2plY3RzLCBnZXRQcm9qZWN0c307IiwiaW1wb3J0ICogYXMgdGFza3NEb20gZnJvbSAnLi90YXNrc0RvbS5qcyc7XG5pbXBvcnQgKiBhcyBwcm9qZWN0cyBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0ICogYXMgdGFza3MgZnJvbSAnLi90YXNrcy5qcyc7XG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tICcuLi9pbWFnZXMvZGVsZXRlLnN2Zyc7XG5pbXBvcnQgbmV3UHJvamVjdDEgZnJvbSAnLi4vaW1hZ2VzL25ld1Byb2plY3Quc3ZnJztcblxuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdi1wcm9qZWN0cycpO1xuY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcHJvamVjdCcpO1xuY29uc3QgYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FsbCcpO1xuY29uc3Qgc3RhcnJlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFycmVkJyk7XG5jb25zdCB0b2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RheScpO1xuY29uc3QgdGhpc1dlZWsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGhpcy13ZWVrJyk7XG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbCcpO1xuY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWNvbnRlbnQnKTtcbmNvbnN0IG1vZGFsSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtaW5wdXQnKTtcbmNvbnN0IG1vZGFsRGVsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWRlbGV0ZScpO1xuXG5sZXQgcHJvamVjdFNlbGVjdGVkID0gJyc7XG5sZXQgY3VycmVudFZpZXcgPSAnYWxsJztcbmxldCBjdXJyZW50QXJyYXkgPSB0YXNrcy50YXNrcztcblxuY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGRvbVByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3Qtd3JhcHBlcicpO1xuICAgIGRvbVByb2plY3RzLmZvckVhY2goZSA9PiBlLnJlbW92ZSgpKTtcbiAgICBcbiAgICBmb3IobGV0IGk9MDsgaSA8IHByb2plY3RzLnByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgd3JhcHBlci5pZCA9IGBwJHtpfWA7XG4gICAgICAgIHdyYXBwZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0LXdyYXBwZXInKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByb2ogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcHJvai5jbGFzc0xpc3QuYWRkKCduYXYnKTtcbiAgICAgICAgcHJvai5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gICAgICAgIHByb2oudGV4dENvbnRlbnQgPSBwcm9qZWN0cy5wcm9qZWN0c1tpXS5uYW1lO1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHByb2opO1xuICAgICAgICBwcm9qLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJvamVjdFZpZXcpO1xuXG4gICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcuc3JjID0gZGVsZXRlSWNvbjtcbiAgICAgICAgaW1nLmlkID0gJ2RlbGV0ZS1pY29uJztcbiAgICAgICAgaW1nLmFsdCA9ICdEZWxldGUgaWNvbic7XG4gICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZVByb2plY3QpO1xuXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoaW1nKTtcblxuICAgICAgICBuYXYuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIG5ld1Byb2plY3RCdG4pO1xuICAgIH1cbn1cblxuY29uc3Qgc2hvd01vZGFsID0gKCkgPT4ge1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufVxuXG5jb25zdCBoYW5kbGVJbnB1dCA9ICgpID0+IHtcbiAgICBsZXQgdmFsdWUgPSBtb2RhbElucHV0LnZhbHVlO1xuICAgIHByb2plY3RzLnByb2plY3RzLnB1c2gocHJvamVjdHMuY3JlYXRlKHZhbHVlKSk7XG4gICAgbW9kYWxJbnB1dC52YWx1ZSA9ICcnO1xuICAgIHJlbmRlcigpO1xuICAgIHRhc2tzRG9tLnJlbmRlcihjdXJyZW50QXJyYXkpO1xuICAgIHByb2plY3RzLnN0b3JlUHJvamVjdHMoKTtcbn1cblxuY29uc3QgY2xvc2VNb2RhbEJ1dHRvbiA9ICgpID0+IHtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5jb25zdCBjbG9zZU1vZGFsV2luZG93ID0gKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQgPT0gbW9kYWwpIHtcbiAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG4gIH1cblxuY29uc3QgcmVtb3ZlUHJvamVjdCA9IChlKSA9PiB7XG4gICAgbGV0IGVsID0gZS50YXJnZXQuY2xvc2VzdCgnLnByb2plY3Qtd3JhcHBlcicpO1xuICAgIGxldCBpZCA9IGVsLmlkLnNsaWNlKC0xKTtcbiAgICBsZXQgcHJvamVjdE5hbWUgPSBwcm9qZWN0cy5wcm9qZWN0c1tpZF0ubmFtZTtcbiAgICBwcm9qZWN0cy5kZWwoaWQpO1xuICAgIGVsLnJlbW92ZSgpO1xuICAgIG1vZGFsSW5wdXQudmFsdWUgPSAnJztcbiAgICB0YXNrcy50YXNrcy5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICAgIGlmIChvYmoucHJvamVjdCA9PT0gcHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgIG9iai5wcm9qZWN0ID0gJyc7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICB0YXNrc0RvbS5yZW5kZXIoY3VycmVudEFycmF5KTtcbiAgICBwcm9qZWN0cy5zdG9yZVByb2plY3RzKCk7XG59XG5cbmNvbnN0IGxpc3RlbiA9ICgpID0+IHtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIG5ld1Byb2plY3Quc3JjID0gbmV3UHJvamVjdDE7XG4gICAgICAgIG5ld1Byb2plY3QuYWx0ID0gJ05ldyBwcm9qZWN0IGljb24nO1xuICAgICAgICBuZXdQcm9qZWN0LmlkID0gJ25ldy1wcm9qZWN0LWltZyc7XG4gICAgICAgIG5ld1Byb2plY3RCdG4uYXBwZW5kQ2hpbGQobmV3UHJvamVjdCk7XG4gICAgXG4gICAgbmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dNb2RhbCk7XG4gICAgYWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlVGFza3NWaWV3KTtcbiAgICBzdGFycmVkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlVGFza3NWaWV3KTtcbiAgICB0b2RheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZVRhc2tzVmlldyk7XG4gICAgdGhpc1dlZWsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VUYXNrc1ZpZXcpO1xuICAgIG1vZGFsRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbEJ1dHRvbik7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbFdpbmRvdyk7XG4gICAgbW9kYWxJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVJbnB1dClcbn1cblxuY29uc3QgcHJvamVjdFZpZXcgPSAoZSkgPT4ge1xuICAgIHJlbW92ZUFjdGl2ZShlKTtcbiAgICBtYWtlQWN0aXZlKGUpO1xuICAgIFxuICAgIGxldCBpZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0LXdyYXBwZXInKS5pZC5zbGljZSgtMSk7XG4gICAgY3VycmVudFZpZXcgPSBwcm9qZWN0cy5wcm9qZWN0c1tpZF0ubmFtZTtcbiAgICBwcm9qZWN0U2VsZWN0ZWQgPSBjdXJyZW50VmlldztcbiAgICB1cGRhdGVBcnJheSgpO1xufVxuXG5jb25zdCByZW1vdmVBY3RpdmUgPSAoZSkgPT4ge1xuICAgIGxldCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uLm5hdicpO1xuICAgIGJ0bnMuZm9yRWFjaChlID0+IGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xufVxuXG5jb25zdCBtYWtlQWN0aXZlID0gKGUpID0+IHtcbiAgICBsZXQgZWxlbWVudCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpOyBcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufVxuXG5jb25zdCB1cGRhdGVBcnJheSA9ICgpID0+IHtcbiAgICBpZiAoY3VycmVudFZpZXcgPT09ICdhbGwnIHx8IGN1cnJlbnRWaWV3ID09PSAnc3RhcnJlZCcgfHwgY3VycmVudFZpZXcgPT09IFxuICAgICd0b2RheScgfHwgY3VycmVudFZpZXcgPT09ICd0aGlzLXdlZWsnKSB7XG4gICAgICAgIGN1cnJlbnRBcnJheSA9IHRhc2tzLnRhc2tzO1xuICAgICAgICB0YXNrc0RvbS5yZW5kZXIoY3VycmVudEFycmF5KTtcbiAgICB9IGVsc2Uge1xuICAgIGN1cnJlbnRBcnJheSA9IHRhc2tzLnRhc2tzLmZpbHRlcihvYmogPT4gb2JqLnByb2plY3QgPT09IGN1cnJlbnRWaWV3KTtcbiAgICB0YXNrc0RvbS5yZW5kZXIoY3VycmVudEFycmF5KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVRhc2tzVmlldyhlKSB7XG4gICAgcmVtb3ZlQWN0aXZlKGUpOyAgICAvLyBVSSBoaWdobGlnaHRpbmdcbiAgICBtYWtlQWN0aXZlKGUpO1xuICAgIGxldCBpZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpLmlkO1xuICAgIFxuICAgIGN1cnJlbnRWaWV3ID0gaWQ7XG4gICAgcHJvamVjdFNlbGVjdGVkID0gJyc7XG5cbiAgICBpZiAoY3VycmVudFZpZXcgPT09ICdhbGwnKSB7XG4gICAgICAgIGN1cnJlbnRBcnJheSA9IHRhc2tzLnRhc2tzO1xuICAgICAgICB0YXNrc0RvbS5yZW5kZXIoY3VycmVudEFycmF5KTtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRWaWV3ID09PSAnc3RhcnJlZCcpIHtcbiAgICAgICAgY3VycmVudEFycmF5ID0gdGFza3MudGFza3MuZmlsdGVyKG9iamVjdCA9PiBvYmplY3RbJ3N0YXJyZWQnXSA9PT0gdHJ1ZSk7XG4gICAgICAgIHRhc2tzRG9tLnJlbmRlcihjdXJyZW50QXJyYXkpO1xuICAgIH0gIFxuICAgIGlmIChjdXJyZW50VmlldyA9PT0gJ3RvZGF5Jykge1xuICAgICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpXG4gICAgICAgIHRvZGF5ID0gbmV3IERhdGUoRGF0ZS5VVEModG9kYXkuZ2V0RnVsbFllYXIoKSx0b2RheS5nZXRNb250aCgpLCB0b2RheS5nZXREYXRlKCkpKTtcbiAgICAgICAgdG9kYXkgPSB0b2RheS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XG4gICAgICAgIGN1cnJlbnRBcnJheSA9IHRhc2tzLnRhc2tzLmZpbHRlcihvYmplY3QgPT4gb2JqZWN0WydkdWUnXSA9PT0gdG9kYXkpO1xuICAgICAgICB0YXNrc0RvbS5yZW5kZXIoY3VycmVudEFycmF5KTtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRWaWV3ID09PSAndGhpcy13ZWVrJykge1xuICAgICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB0b2RheSA9IG5ldyBEYXRlKERhdGUuVVRDKHRvZGF5LmdldEZ1bGxZZWFyKCksdG9kYXkuZ2V0TW9udGgoKSwgdG9kYXkuZ2V0RGF0ZSgpKSk7XG4gICAgICAgIGxldCB3ZWVrID0gbmV3IERhdGUoKTtcbiAgICAgICAgd2VlayA9IG5ldyBEYXRlKERhdGUuVVRDKHdlZWsuZ2V0RnVsbFllYXIoKSx3ZWVrLmdldE1vbnRoKCksIHdlZWsuZ2V0RGF0ZSgpKSk7XG4gICAgICAgIHdlZWsuc2V0RGF0ZSh0b2RheS5nZXREYXRlKCkgKyA3KTtcblxuICAgICAgICBjdXJyZW50QXJyYXkgPSB0YXNrcy50YXNrcy5maWx0ZXIoKG9iamVjdCkgPT4ge1xuICAgICAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShEYXRlLnBhcnNlKG9iamVjdFsnZHVlJ10pKTtcbiAgICAgICAgICAgIHJldHVybiAoZGF0ZSA+PSB0b2RheSAmJiBkYXRlIDw9IHdlZWspO1xuICAgICAgICB9KTtcbiAgICAgICAgdGFza3NEb20ucmVuZGVyKGN1cnJlbnRBcnJheSk7XG4gICAgfVxufVxuXG5leHBvcnQge3JlbmRlciwgbGlzdGVuLCBjdXJyZW50QXJyYXksIGN1cnJlbnRWaWV3LCB1cGRhdGVBcnJheSwgXG4gICAgcHJvamVjdFNlbGVjdGVkfTsiLCJcblxuXG5jb25zdCBzdG9yZVRhc2tzID0gKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG59XG5cbmNvbnN0IGdldFRhc2tzID0gKCkgPT4ge1xuICAgIGxldCBleGlzdGluZ1Rhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XG4gICAgcmV0dXJuIGV4aXN0aW5nVGFza3M7XG59XG5cbmNvbnN0IHVwZGF0ZSA9IChpbmRleCwgcHJvcGVydHksIHZhbHVlKSA9PiB7XG4gICAgdGFza3NbaW5kZXhdW3Byb3BlcnR5XSA9IHZhbHVlO1xufVxuXG5jb25zdCBjcmVhdGUgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBzdGFycmVkLCBkdWUsIHByb2plY3QpID0+IHtcbiAgICAgICAgcmV0dXJuIHt0aXRsZSwgZGVzY3JpcHRpb24sIHN0YXJyZWQsIGR1ZSwgcHJvamVjdH07XG4gICAgfVxuXG5jb25zdCBhZGQgPSAob2JqZWN0KSA9PiB7XG4gICAgdGFza3MucHVzaChvYmplY3QpO1xufVxuXG5jb25zdCBkZWwgPSAoaWQpID0+IHtcbiAgICB0YXNrcy5zcGxpY2UoaWQsIDEpO1xufVxuXG5jb25zdCB0b2dnbGVTdGFycmVkID0gKGluZGV4KSA9PiB7XG4gICAgaWYgKHRhc2tzW2luZGV4XS5zdGFycmVkID09PSBmYWxzZSkge1xuICAgICAgICB0YXNrc1tpbmRleF0uc3RhcnJlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGFza3NbaW5kZXhdLnN0YXJyZWQgPSBmYWxzZTtcbiAgICB9XG59XG5cbmxldCB0YXNrcyA9IFtdO1xuaWYgKGxvY2FsU3RvcmFnZS5sZW5ndGggIT09IDApIHtcbiAgICB0YXNrcyA9IGdldFRhc2tzKCk7XG59XG5cbmV4cG9ydCB7dXBkYXRlLCBjcmVhdGUsIHRhc2tzLCBnZXRUYXNrcywgYWRkLCBkZWwsIHRvZ2dsZVN0YXJyZWQsIHN0b3JlVGFza3N9O1xuIiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tICcuL3Byb2plY3RzLmpzJztcbmltcG9ydCAqIGFzIHRhc2tzIGZyb20gJy4vdGFza3MuanMnO1xuaW1wb3J0ICogYXMgcHJvamVjdHNEb20gZnJvbSAnLi9wcm9qZWN0c0RvbS5qcyc7XG5pbXBvcnQgbWVudTEgZnJvbSAnLi4vaW1hZ2VzL21lbnUuc3ZnJztcbmltcG9ydCBzdGFyMSBmcm9tICcuLi9pbWFnZXMvc3Rhci5zdmcnO1xuaW1wb3J0IG5ld1Rhc2sxIGZyb20gJy4uL2ltYWdlcy9uZXdUYXNrLnN2Zyc7XG5pbXBvcnQgKiBhcyBpbmRleCBmcm9tICcuLi8uLi9pbmRleC5qcyc7XG5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpO1xuY29uc3QgbmV3VGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctdGFzaycpO1xuY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcHJvamVjdCcpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZURyb3ApO1xuXG5mdW5jdGlvbiBsaXN0ZW4oKSB7XG4gICAgY29uc3QgbmV3VGFzayA9IG5ldyBJbWFnZSgpO1xuICAgIG5ld1Rhc2suc3JjID0gbmV3VGFzazE7XG4gICAgbmV3VGFzay5hbHQgPSAnTmV3IHRhc2sgaWNvbic7XG4gICAgbmV3VGFzay5pZCA9ICduZXctdGFzay1pbWcnO1xuICAgIG5ld1Rhc2tCdG4uYXBwZW5kQ2hpbGQobmV3VGFzayk7XG4gICAgbmV3VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld1Rhc2tDbGljayk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlcihhcnJheSA9IHRhc2tzLnRhc2tzKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKS5mb3JFYWNoKChlKSA9PiB7ZS5yZW1vdmUoKX0pO1xuXG4gICAgZm9yKGxldCBpPTA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YXNrLmlkID0gYCR7aX1gO1xuICAgICAgICAgICAgdGFzay5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICAgICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1RpdGxlJyk7XG4gICAgICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ21pbmxlbmd0aCcsICcxJyk7XG4gICAgICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsICcyNScpO1xuICAgICAgICAgICAgdGl0bGUudmFsdWUgPSBhcnJheVtpXS50aXRsZTtcbiAgICAgICAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICAgICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlQ2hhbmdlKTtcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnbWlubGVuZ3RoJywgJzEnKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJywgJzExMScpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb24udmFsdWUgPSBhcnJheVtpXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIHRhc2suYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgZGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlQ2hhbmdlKTtcblxuICAgICAgICBjb25zdCBzdGFyID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBzdGFyLnNyYyA9IHN0YXIxO1xuICAgICAgICAgICAgc3Rhci5hbHQgPSAnU3RhciBpY29uJztcbiAgICAgICAgICAgIHN0YXIuaWQgPSAnc3Rhcic7XG4gICAgICAgICAgICBpZiAoYXJyYXlbaV0uc3RhcnJlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHN0YXIuY2xhc3NMaXN0LmFkZCgnZmlsdGVyLXdoaXRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXNrLmFwcGVuZENoaWxkKHN0YXIpO1xuICAgICAgICAgICAgc3Rhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVN0YXIpO1xuICAgICAgICAgICAgc3Rhci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBvdmVyU3Rhcik7XG4gICAgICAgICAgICBzdGFyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0Jywgb3V0U3Rhcik7XG5cbiAgICAgICAgY29uc3QgZHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGR1ZS5jbGFzc0xpc3QuYWRkKCdkdWUnKTtcbiAgICAgICAgICAgIGR1ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgICAgICAgICAgZHVlLnZhbHVlID0gYXJyYXlbaV0uZHVlO1xuICAgICAgICAgICAgdGFzay5hcHBlbmRDaGlsZChkdWUpO1xuICAgICAgICAgICAgZHVlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZUNoYW5nZSk7XG5cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGRyb3BEb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkcm9wRG93bi5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bicpO1xuXG4gICAgICAgICAgICBjb25zdCBtZW51ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgbWVudS5zcmMgPSBtZW51MTtcbiAgICAgICAgICAgICAgICBtZW51LmlkID0gJ21lbnUnO1xuICAgICAgICAgICAgICAgIG1lbnUuYWx0ID0gJ01lbnUgaWNvbic7XG4gICAgICAgICAgICAgICAgZHJvcERvd24uYXBwZW5kQ2hpbGQobWVudSk7XG4gICAgICAgICAgICAgICAgbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZURyb3ApO1xuXG4gICAgICAgICAgICBjb25zdCBkcm9wRG93bkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBkcm9wRG93bkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd24tY29udGVudCcpO1xuICAgICAgICAgICAgICAgIGRyb3BEb3duQ29udGVudC5pZCA9IGBkcm9wZG93bi1jb250ZW50LSR7aX1gO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGRlbC5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgICAgICAgICAgICAgICBkZWwudGV4dENvbnRlbnQgPSAnRGVsZXRlIFRhc2snO1xuICAgICAgICAgICAgICAgIGRlbC5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0taG92ZXInKTtcbiAgICAgICAgICAgICAgICBkcm9wRG93bkNvbnRlbnQuYXBwZW5kQ2hpbGQoZGVsKTtcbiAgICAgICAgICAgICAgICBkZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVUYXNrKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcbiAgICAgICAgICAgICAgICBkcm9wRG93bkNvbnRlbnQuYXBwZW5kQ2hpbGQoaHIpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IG1wcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LXByb2plY3QnKTtcbiAgICAgICAgICAgICAgICBtcHMuZm9yRWFjaChlID0+IGUucmVtb3ZlKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwcm9qID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHByb2ouaWQgPSBgbXAke2l9YDtcbiAgICAgICAgICAgICAgICAgICAgcHJvai5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvai5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0taG92ZXInKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvai50ZXh0Q29udGVudCA9IHByb2plY3RzW2ldLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHByb2ouYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3NpZ25UYXNrKTtcbiAgICAgICAgICAgICAgICAgICAgZHJvcERvd25Db250ZW50LmFwcGVuZENoaWxkKHByb2opO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IG5vbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAvLyBub25lLmlkID0gJ25vbmUnXG4gICAgICAgICAgICAgICAgLy8gbm9uZS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgICAgICAgICAgICAgICAvLyBub25lLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1ob3ZlcicpO1xuICAgICAgICAgICAgICAgIC8vIG5vbmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVGcm9tUHJvamVjdCk7XG5cbiAgICAgICAgICAgICAgICBkcm9wRG93bi5hcHBlbmRDaGlsZChkcm9wRG93bkNvbnRlbnQpO1xuXG4gICAgICAgIHRhc2suYXBwZW5kQ2hpbGQoZHJvcERvd24pO1xuXG4gICAgICAgIG1haW4uaW5zZXJ0QmVmb3JlKHRhc2ssIG5ld1Rhc2tCdG4pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gb3ZlclN0YXIoZSkge1xuICAgIGNvbnN0IHN0YXIgPSBlLnRhcmdldC5jbG9zZXN0KCcjc3RhcicpO1xuICAgIHN0YXIuY2xhc3NMaXN0LmFkZCgnaG92ZXJlZCcpO1xufVxuXG5mdW5jdGlvbiBvdXRTdGFyKGUpIHtcbiAgICBjb25zdCBzdGFyID0gZS50YXJnZXQuY2xvc2VzdCgnI3N0YXInKTtcbiAgICBzdGFyLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyZWQnKTtcbn1cblxuZnVuY3Rpb24gYXNzaWduVGFzayhlKSB7XG4gICAgbGV0IGl0ZW0gPSBlLnRhcmdldC5jbG9zZXN0KCcubWVudS1pdGVtJyk7XG4gICAgbGV0IHRhc2tJbmRleCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrJykuaWQ7XG4gICAgbGV0IHByb2plY3ROYW1lID0gaXRlbS50ZXh0Q29udGVudDtcbiAgICBpZiAodGFza3MudGFza3NbdGFza0luZGV4XS5wcm9qZWN0ID09PSBwcm9qZWN0TmFtZSkge1xuICAgICAgICB0YXNrcy50YXNrc1t0YXNrSW5kZXhdLnByb2plY3QgPSAnJztcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdkZGNhY3RpdmUnKTtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LWl0ZW0taG92ZXInKTtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IFxuICAgICAgICB7aXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0taG92ZXInKX0pO1xuICAgIH0gZWxzZSB7XG4gICAgdGFza3MudXBkYXRlKHRhc2tJbmRleCwgJ3Byb2plY3QnLCBwcm9qZWN0TmFtZSk7XG4gICAgaXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdkZGNhY3RpdmUnKTtcbiAgICB9XG4gICAgdGFza3Muc3RvcmVUYXNrcygpO1xufVxuXG5mdW5jdGlvbiBjbG9zZURyb3AoZSkge1xuICBpZighZS50YXJnZXQubWF0Y2hlcygnI21lbnUnKSkge1xuICAgIGxldCBkZGMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvdycpO1xuICAgIGlmIChkZGMgPT09IG51bGwpIHtyZXR1cm47fVxuICAgIGlmIChkZGMuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykpIHtcbiAgICBkZGMuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xuICAgIH1cbiAgfVxufVxuICAgXG5cbmZ1bmN0aW9uIGhhbmRsZURyb3AoZSkge1xuICAgIGxldCB0YXNrID0gZS50YXJnZXQuY2xvc2VzdCgnLnRhc2snKS5pZDtcbiAgICBsZXQgZGRjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2Ryb3Bkb3duLWNvbnRlbnQtJHt0YXNrfWApO1xuICAgIGRkYy5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgbGV0IHByb3BlcnR5ID0gZS50YXJnZXQuY2xhc3NOYW1lO1xuICAgIGxldCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGxldCBpZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrJykuaWQ7XG4gICAgdGFza3MudXBkYXRlKGlkLCBwcm9wZXJ0eSwgdmFsdWUpO1xuICAgIHRhc2tzLnN0b3JlVGFza3MoKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlU3RhcihlKSB7XG4gICAgY29uc3Qgc3RhciA9IGUudGFyZ2V0LmNsb3Nlc3QoJyNzdGFyJyk7XG4gICAgc3Rhci5jbGFzc0xpc3QudG9nZ2xlKCdmaWx0ZXItd2hpdGUnKTtcbiAgICBsZXQgaWQgPSBzdGFyLmNsb3Nlc3QoJy50YXNrJykuaWQ7XG4gICAgdGFza3MudG9nZ2xlU3RhcnJlZChpZCk7XG4gICAgdGFza3Muc3RvcmVUYXNrcygpO1xufVxuXG5mdW5jdGlvbiBuZXdUYXNrQ2xpY2soKSB7XG4gICAgdGFza3MudGFza3MucHVzaCh0YXNrcy5jcmVhdGUoJycsICcnLCBmYWxzZSwgJycsIHByb2plY3RzRG9tLnByb2plY3RTZWxlY3RlZCkpO1xuICAgIHByb2plY3RzRG9tLnVwZGF0ZUFycmF5KCk7XG4gICAgcmVuZGVyKHByb2plY3RzRG9tLmN1cnJlbnRBcnJheSk7XG4gICAgdGFza3Muc3RvcmVUYXNrcygpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVUYXNrIChlKSB7XG4gICAgbGV0IGlkID0gZS50YXJnZXQuY2xvc2VzdCgnLnRhc2snKS5pZDtcbiAgICB0YXNrcy5kZWwoaWQpO1xuICAgIHJlbmRlcihwcm9qZWN0c0RvbS5jdXJyZW50QXJyYXkpO1xuICAgIHRhc2tzLnN0b3JlVGFza3MoKTtcbn1cblxuXG5cbmV4cG9ydCB7bGlzdGVuLCByZW5kZXJ9OyIsIlxuaW1wb3J0ICogYXMgdGFza3NEb20gZnJvbSAnLi9hc3NldHMvbW9kdWxlcy90YXNrc0RvbS5qcyc7XG5pbXBvcnQgKiBhcyBwcm9qRG9tIGZyb20gJy4vYXNzZXRzL21vZHVsZXMvcHJvamVjdHNEb20uanMnXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHRhc2tzIH0gZnJvbSAnLi9hc3NldHMvbW9kdWxlcy90YXNrcy5qcyc7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gJy4vYXNzZXRzL21vZHVsZXMvcHJvamVjdHMuanMnO1xuXG5cbnRhc2tzRG9tLnJlbmRlcigpO1xudGFza3NEb20ubGlzdGVuKCk7XG5wcm9qRG9tLnJlbmRlcigpO1xucHJvakRvbS5saXN0ZW4oKTtcblxuXG5cblxuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==