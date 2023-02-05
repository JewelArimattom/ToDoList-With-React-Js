import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function MasksTheater(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-masks-theater",
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
    d: "M13.192 9h6.616a2 2 0 0 1 1.992 2.183l-.567 6.182a4 4 0 0 1 -3.983 3.635h-1.5a4 4 0 0 1 -3.983 -3.635l-.567 -6.182a2 2 0 0 1 1.992 -2.183z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 13h.01"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 13h.01"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 16.5c1 .667 2 .667 3 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.632 15.982a4.037 4.037 0 0 1 -.382 .018h-1.5a4 4 0 0 1 -3.983 -3.635l-.567 -6.182a2 2 0 0 1 1.992 -2.183h6.616a2 2 0 0 1 2 2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 8h.01"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 8h.01"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 12c.764 -.51 1.528 -.63 2.291 -.36"
  }));
}

export { MasksTheater as default };
