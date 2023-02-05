import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function WallOff(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-wall-off",
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
    d: "M8 4h10a2 2 0 0 1 2 2v10m-.589 3.417c-.361 .36 -.86 .583 -1.411 .583h-12a2 2 0 0 1 -2 -2v-12c0 -.55 .222 -1.047 .58 -1.409"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 8h4m4 0h8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 12h-4m-4 0h-8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 16h12"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 4v1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 8v2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 12v4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 16v4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 3l18 18"
  }));
}

export { WallOff as default };
