import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function MoodNerd(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-mood-nerd",
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
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "10",
    r: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "16",
    cy: "10",
    r: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 15a3.5 3.5 0 0 0 5 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.5 9h2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 9h2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 9.5c1.333 -1.333 2.667 -1.333 4 0"
  }));
}

export { MoodNerd as default };
