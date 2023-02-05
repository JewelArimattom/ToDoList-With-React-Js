import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function MathXDivideY2(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-math-x-divide-y-2",
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
    d: "M3 21l18 -18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 14l3 4.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 14l-4.5 7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 4l6 6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 10l6 -6"
  }));
}

export { MathXDivideY2 as default };
