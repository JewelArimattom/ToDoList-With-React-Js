import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function Spider(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-spider",
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
    d: "M5 4v2l5 5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.5 9.5l1.5 1.5h6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 19v-2l6 -6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 4v2l-5 5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21.5 9.5l-1.5 1.5h-6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 19v-2l-6 -6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "15",
    r: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "9",
    r: "2"
  }));
}

export { Spider as default };
