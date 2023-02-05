import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function BrandRedux(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-brand-redux",
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
    d: "M16.54 7c-.805 -2.365 -2.536 -4 -4.54 -4c-2.774 0 -5.023 2.632 -5.023 6.496c0 1.956 1.582 4.727 2.512 5.996"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.711 11.979c-1.656 1.877 -2.214 4.185 -1.211 5.911c1.387 2.39 5.138 2.831 8.501 .9c1.703 -.979 2.875 -3.362 3.516 -4.798"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.014 19.99c2.511 0 4.523 -.438 5.487 -2.1c1.387 -2.39 -.215 -5.893 -3.579 -7.824c-1.702 -.979 -4.357 -1.235 -5.927 -1.07"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.493 9.862c.48 .276 1.095 .112 1.372 -.366a0.997 .997 0 0 0 -.367 -1.365a1.007 1.007 0 0 0 -1.373 .366a0.997 .997 0 0 0 .368 1.365z"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "9.5",
    cy: "15.5",
    rx: "1"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "15.5",
    cy: "14",
    rx: "1"
  }));
}

export { BrandRedux as default };
