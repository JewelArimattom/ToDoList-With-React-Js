import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function VirusSearch(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-virus-search",
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
    d: "M17 12a5 5 0 1 0 -5 5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7v-4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 3h2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.536 8.464l2.828 -2.828"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.657 4.929l1.414 1.414"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 12h4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 11v2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 17v4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 21h-2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.465 15.536l-2.829 2.828"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.343 19.071l-1.413 -1.414"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 12h-4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 13v-2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.464 8.464l-2.828 -2.828"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.929 6.343l1.414 -1.413"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17.5",
    cy: "17.5",
    r: "2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.5 19.5l2.5 2.5"
  }));
}

export { VirusSearch as default };
