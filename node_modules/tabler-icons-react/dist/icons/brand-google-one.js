import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function BrandGoogleOne(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-brand-google-one",
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
    d: "M11 4.998v13.982a1.998 1.998 0 0 0 3.995 0v-13.982a1.998 1.998 0 1 0 -3.995 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.63 8.407a2.125 2.125 0 0 0 -.074 2.944c.77 .834 2.051 .869 2.862 .077l4.95 -4.834c.812 -.792 .846 -2.11 .076 -2.945a1.984 1.984 0 0 0 -2.861 -.077l-4.953 4.835z"
  }));
}

export { BrandGoogleOne as default };
