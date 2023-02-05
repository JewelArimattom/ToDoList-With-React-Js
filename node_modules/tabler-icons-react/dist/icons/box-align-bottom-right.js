import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function BoxAlignBottomRight(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-box-align-bottom-right",
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
    d: "M19 13h-5a1 1 0 0 0 -1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1 -1v-5a1 1 0 0 0 -1 -1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 9v.01"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 4v.01"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 4v.01"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 4v.01"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 20v.01"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 4v.01"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 9v.01"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 15v.01"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 20v.01"
  }));
}

export { BoxAlignBottomRight as default };
