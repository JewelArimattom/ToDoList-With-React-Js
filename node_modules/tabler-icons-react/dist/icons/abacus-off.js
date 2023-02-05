import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function AbacusOff(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-abacus-off",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    stroke: color,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, restProps), /*#__PURE__*/React.createElement("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 5v16"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 21v-2m0 -4v-12"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 7h2m4 0h8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 15h10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 13v4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 13v4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 16v1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 5v4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 5v2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 8v1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 21h18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 3l18 18"
  }));
}

export { AbacusOff as default };
