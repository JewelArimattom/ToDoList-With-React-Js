import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function BrandVisa(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-brand-visa",
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
    d: "M21 15l-1 -6l-2.5 6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 15l1 -6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 9h1v6h.5l2.5 -6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 9.5a0.5 .5 0 0 0 -.5 -.5h-.75c-.721 0 -1.337 .521 -1.455 1.233l-.09 .534a1.059 1.059 0 0 0 1.045 1.233a1.059 1.059 0 0 1 1.045 1.233l-.09 .534a1.476 1.476 0 0 1 -1.455 1.233h-.75a0.5 .5 0 0 1 -.5 -.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 14h2.7"
  }));
}

export { BrandVisa as default };
