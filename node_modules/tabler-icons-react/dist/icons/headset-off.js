import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function HeadsetOff(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-headset-off",
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
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "13",
    width: "4",
    height: "6",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.185 13.173a2 2 0 0 1 2.815 1.827v1m-1.18 2.825a2 2 0 0 1 -2.82 -1.825v-1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 15v-3c0 -2.208 .894 -4.207 2.34 -5.654m2.377 -1.643a8 8 0 0 1 11.283 7.297v3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 19c0 1.657 -2.686 3 -6 3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 3l18 18"
  }));
}

export { HeadsetOff as default };
