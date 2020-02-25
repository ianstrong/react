webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/sidebar.js":
/*!*******************************!*\
  !*** ./components/sidebar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\react\\pokedex\\components\\sidebar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Sidebar = function Sidebar(props) {
  return __jsx("div", {
    className: "sidebar",
    style: {
      height: "calc(100vh - 56px)",
      overflow: "auto",
      overflowX: "hidden"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.pokemon.map(function (pokemon, index) {
    return __jsx("li", {
      key: index + 1,
      className: "m-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/p/[id]",
      as: "/p/".concat(index + 1),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, pokemon.name)));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ })

})
//# sourceMappingURL=_app.js.4cb9bad67fb3d512cb7d.hot-update.js.map