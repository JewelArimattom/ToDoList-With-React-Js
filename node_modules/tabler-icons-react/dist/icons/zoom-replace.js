import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function ZoomReplace(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-zoom-replace",
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
    d: "M21 21l-6 -6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.291 8.003a7 7 0 0 1 5.077 -4.806a7.021 7.021 0 0 1 8.242 4.403"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 4v4h-4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.705 12.005a7 7 0 0 1 -5.074 4.798a7.021 7.021 0 0 1 -8.241 -4.403"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 16v-4h4"
  }));
}

export { ZoomReplace as default };
