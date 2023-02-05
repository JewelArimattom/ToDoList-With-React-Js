import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function HomeInfinity(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-home-infinity",
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
    d: "M19 14v-2h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 1.75 1.032"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.536 17.586a2.123 2.123 0 0 0 -2.929 0a1.951 1.951 0 0 0 0 2.828c.809 .781 2.12 .781 2.929 0c.809 -.781 -.805 .778 .004 -.003l1.46 -1.41l1.46 -1.419"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.54 17.582l1.46 1.42l1.46 1.41c.809 .78 -.805 -.779 .004 .002s2.12 .781 2.929 0a1.951 1.951 0 0 0 0 -2.828a2.123 2.123 0 0 0 -2.929 0"
  }));
}

export { HomeInfinity as default };
