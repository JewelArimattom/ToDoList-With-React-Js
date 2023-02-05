import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function ApertureOff(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-aperture-off",
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
    d: "M3.6 15h10.55"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.641 5.631a9 9 0 1 0 12.719 12.738m1.68 -2.318a9 9 0 0 0 -12.074 -12.098"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.395 7.534l2.416 7.438"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.032 4.636l-4.852 3.526m-2.334 1.695l-1.349 .98"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20.559 14.51l-8.535 -6.201"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.257 20.916l2.123 -6.533m.984 -3.028l.154 -.473"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 3l18 18"
  }));
}

export { ApertureOff as default };
