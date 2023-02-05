import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function SquareF9(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-square-f9",
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
    d: "M20 6.667v10.666a2.667 2.667 0 0 1 -2.667 2.667h-10.666a2.667 2.667 0 0 1 -2.667 -2.667v-10.666a2.667 2.667 0 0 1 2.667 -2.667h10.666a2.667 2.667 0 0 1 2.667 2.667z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 14.25c0 .414 .336 .75 .75 .75h1.5a0.75 .75 0 0 0 .75 -.75v-4.5a0.75 .75 0 0 0 -.75 -.75h-1.5a0.75 .75 0 0 0 -.75 .75v1.5c0 .414 .336 .75 .75 .75h2.25"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 12h2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 9h-2v6"
  }));
}

export { SquareF9 as default };
