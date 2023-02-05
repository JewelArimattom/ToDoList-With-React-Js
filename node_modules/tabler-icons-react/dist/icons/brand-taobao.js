import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function BrandTaobao(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-brand-taobao",
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
    d: "M17 10h-6.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 9c-.44 .843 -1 1.5 -2 2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 10v6.8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 15c.71 3.675 6 1.366 8.5 .5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 14.5l1 2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 13h5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 10c4.5 1 2.902 4.85 0 8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 9c1.43 -1.652 2.06 -2.876 2.5 -4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 7c4.333 -.667 7 -1 8 -1c1.5 0 3.5 -.5 4 1.5c.333 1.333 .5 2.833 .5 4.5v4c0 2 -1 3 -5 3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "5",
    cy: "6",
    r: "1"
  }));
}

export { BrandTaobao as default };
