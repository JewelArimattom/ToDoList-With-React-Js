import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function BuildingTunnel(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-building-tunnel",
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
    d: "M5 21h14a2 2 0 0 0 2 -2v-7a9 9 0 0 0 -18 0v7a2 2 0 0 0 2 2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 21v-9a4 4 0 1 1 8 0v9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 17h4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 17h4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 12h-4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 12h-4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 3v5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 6l3 3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 9l3 -3l-3 3z"
  }));
}

export { BuildingTunnel as default };
