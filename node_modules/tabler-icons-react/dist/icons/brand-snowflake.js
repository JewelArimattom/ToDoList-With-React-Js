import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function BrandSnowflake(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-brand-snowflake",
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
    d: "M14 21v-5.5l4.5 2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 21v-5.5l-4.5 2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.5 14.5l4.5 -2.5l-4.5 -2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20.5 9.5l-4.5 2.5l4.5 2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 3v5.5l-4.5 -2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 3v5.5l4.5 -2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 11l1 1l-1 1l-1 -1z"
  }));
}

export { BrandSnowflake as default };
