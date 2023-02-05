import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function BrandWaze(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-brand-waze",
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
    d: "M6.66 17.52a7 7 0 0 1 -3.66 -4.52c2 0 3 -1 3 -2.51c0 -3.92 2.25 -7.49 7.38 -7.49c4.62 0 7.62 3.51 7.62 8a8.08 8.08 0 0 1 -3.39 6.62"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 18.69a17.29 17.29 0 0 0 3.33 .3h.54"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "16",
    cy: "19",
    r: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "19",
    r: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 9h.01"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 9h.01"
  }));
}

export { BrandWaze as default };
