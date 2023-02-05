import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function BrandBaidu(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-brand-baidu",
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
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "5",
    cy: "9.5",
    rx: "1",
    ry: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.463 11.596c1.282 1.774 3.476 3.416 3.476 3.416s1.921 1.574 .593 3.636c-1.328 2.063 -4.892 1.152 -4.892 1.152s-1.416 -.44 -3.06 -.088c-1.644 .356 -3.06 .22 -3.06 .22s-2.055 -.22 -2.47 -2.304c-.416 -2.084 1.918 -3.638 2.102 -3.858c.182 -.222 1.409 -.966 2.284 -2.394c.875 -1.428 3.337 -2.287 5.027 .221z"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "9",
    cy: "4.5",
    rx: "1",
    ry: "1.5"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "15",
    cy: "4.5",
    rx: "1",
    ry: "1.5"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "19",
    cy: "9.5",
    rx: "1",
    ry: "1.5"
  }));
}

export { BrandBaidu as default };
