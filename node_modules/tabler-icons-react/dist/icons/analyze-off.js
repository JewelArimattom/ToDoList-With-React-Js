import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function AnalyzeOff(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-analyze-off",
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
    d: "M20 11a8.1 8.1 0 0 0 -6.986 -6.918a8.086 8.086 0 0 0 -4.31 .62m-2.383 1.608a8.089 8.089 0 0 0 -1.326 1.69"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 13a8.1 8.1 0 0 0 13.687 4.676"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 16a1 1 0 0 0 -1 -1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "5",
    cy: "8",
    r: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.888 9.87a3 3 0 1 0 4.233 4.252m.595 -3.397a3.012 3.012 0 0 0 -1.426 -1.435"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 3l18 18"
  }));
}

export { AnalyzeOff as default };
