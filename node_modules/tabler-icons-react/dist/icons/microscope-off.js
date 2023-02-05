import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function MicroscopeOff(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-microscope-off",
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
    d: "M5 21h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 18h2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 18v3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 10l-1 1l3 3l1 -1m2 -2l3 -3l-3 -3l-3 3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.5 12.5l-1.5 1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 3l3 3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 21a6 6 0 0 0 5.457 -3.505m.441 -3.599a5.996 5.996 0 0 0 -2.183 -3.608"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 3l18 18"
  }));
}

export { MicroscopeOff as default };
