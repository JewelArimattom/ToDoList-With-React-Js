import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function HomeEco(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-home-eco",
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
    d: "M20.002 11.002l-8.002 -8.002l-9 9h2v7a2 2 0 0 0 2 2h5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 21v-6a2 2 0 0 1 2 -2h2c.325 0 .631 .077 .902 .215"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 22s0 -2 3 -4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 21a3 3 0 0 1 0 -6h3v3a3 3 0 0 1 -3 3z"
  }));
}

export { HomeEco as default };
