import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function BrandZhihu(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-brand-zhihu",
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
    d: "M14 6h6v12h-2l-2 2l-1 -2h-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 12h6.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.5 6h-5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 4c-.5 2.5 -1.5 3.5 -2.5 4.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 6v7c0 4.5 -2 5.5 -4 7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 18l-3 -5"
  }));
}

export { BrandZhihu as default };
