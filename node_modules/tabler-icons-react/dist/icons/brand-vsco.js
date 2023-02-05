import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function BrandVsco(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-brand-vsco",
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
    d: "M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 12a5 5 0 1 0 -10 0a5 5 0 0 0 10 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 3v4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 12h-4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 21v-4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 12h4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.364 5.636l-2.828 2.828"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.364 18.364l-2.828 -2.828"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.636 18.364l2.828 -2.828"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.636 5.636l2.828 2.828"
  }));
}

export { BrandVsco as default };
