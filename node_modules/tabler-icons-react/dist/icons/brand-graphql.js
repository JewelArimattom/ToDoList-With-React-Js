import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function BrandGraphql(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-brand-graphql",
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
    d: "M5.308 7.265l5.385 -3.029"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.308 4.235l5.384 3.03"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 9.5v5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.693 16.736l-5.385 3.029"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.692 19.765l-5.384 -3.03"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 14.5v-5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.772 4.786l6.121 10.202"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 16h-13"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.107 14.988l6.122 -10.201"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "3.5",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "20.5",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "4",
    cy: "8",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "4",
    cy: "16",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "20",
    cy: "16",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "20",
    cy: "8",
    r: "1.5"
  }));
}

export { BrandGraphql as default };
