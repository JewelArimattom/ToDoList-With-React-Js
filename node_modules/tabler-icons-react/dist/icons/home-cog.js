import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function HomeCog(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-home-cog",
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
    d: "M9 21v-6a2 2 0 0 1 2 -2h1.6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20.001 11.001l-8.001 -8.001l-9 9h2v7a2 2 0 0 0 2 2h4.159"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18.001",
    cy: "18",
    r: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.001 14.5v1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.001 20v1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21.032 16.25l-1.299 .75"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.27 19l-1.3 .75"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.97 16.25l1.3 .75"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.733 19l1.3 .75"
  }));
}

export { HomeCog as default };
