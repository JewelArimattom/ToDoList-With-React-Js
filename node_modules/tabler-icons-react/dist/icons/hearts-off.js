import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function HeartsOff(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-hearts-off",
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
    d: "M14.017 18.001l-2.017 1.999l-7.5 -7.428a5 5 0 0 1 .49 -7.586m3.01 -.998a5 5 0 0 1 4 2.018a5 5 0 0 1 8.153 5.784"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.814 11.814a2.81 2.81 0 0 0 -.007 3.948l4.182 4.238l2.01 -2.021m1.977 -1.99l.211 -.212a2.81 2.81 0 0 0 .006 -3.948a2.747 2.747 0 0 0 -3.91 -.007l-.283 .178"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 3l18 18"
  }));
}

export { HeartsOff as default };
