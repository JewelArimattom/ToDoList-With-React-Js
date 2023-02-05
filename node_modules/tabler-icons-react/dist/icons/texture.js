import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function Texture(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-texture",
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
    d: "M6 3l-3 3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 18l-3 3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 3l-8 8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 3l-13 13"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 3l-18 18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 8l-13 13"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 13l-8 8"
  }));
}

export { Texture as default };
