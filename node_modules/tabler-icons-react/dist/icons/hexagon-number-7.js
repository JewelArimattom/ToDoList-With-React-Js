import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function HexagonNumber7(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-hexagon-number-7",
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
    d: "M19.02 6.858a2.006 2.006 0 0 1 1.003 1.752v6.555c0 .728 -.395 1.4 -1.032 1.753l-6.017 3.844a2.006 2.006 0 0 1 -1.948 0l-6.016 -3.844a2.006 2.006 0 0 1 -1.032 -1.752v-6.556c0 -.728 .395 -1.4 1.032 -1.753l6.017 -3.582a2.062 2.062 0 0 1 2.006 0l6.017 3.583h-.029z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 8h4l-2 8"
  }));
}

export { HexagonNumber7 as default };
