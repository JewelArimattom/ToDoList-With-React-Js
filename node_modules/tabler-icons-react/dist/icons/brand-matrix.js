import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function BrandMatrix(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-brand-matrix",
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
    d: "M4 3h-1v18h1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 21h1v-18h-1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 9v6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 15v-3.5a2.5 2.5 0 1 0 -5 0v.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 15v-3.5a2.5 2.5 0 1 0 -5 0v.5"
  }));
}

export { BrandMatrix as default };
