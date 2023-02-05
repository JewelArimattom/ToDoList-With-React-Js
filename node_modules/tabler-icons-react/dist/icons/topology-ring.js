import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function TopologyRing(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-topology-ring",
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
    d: "M14 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 4a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.5 5.5l5 5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.5 13.5l5 5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.5 18.5l5 -5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.5 5.5l-5 5"
  }));
}

export { TopologyRing as default };
