import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function GoGame(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-go-game",
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
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "6",
    r: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "18",
    r: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "18",
    r: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 12h7m4 0h7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 6h1m4 0h13"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 18h1m4 0h8m4 0h1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 3v1m0 4v8m0 4v1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 3v7m0 4v7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 3v13m0 4v1"
  }));
}

export { GoGame as default };
