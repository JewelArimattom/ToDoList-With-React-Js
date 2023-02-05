import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function BrandDenodo(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-brand-denodo",
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
    d: "M11 11h2v2h-2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.634 15.634l1.732 -1l1 1.732l-1.732 1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 19h2v2h-2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.634 14.634l1.732 1l-1 1.732l-1.732 -1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.634 7.634l1.732 -1l1 1.732l-1.732 1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 3h2v2h-2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.634 8.366l1 -1.732l1.732 1l-1 1.732z"
  }));
}

export { BrandDenodo as default };
