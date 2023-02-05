import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function TableOptions(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-table-options",
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
    d: "M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 10h16"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 4v9"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "5.281",
    cy: "18.5",
    r: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.281 15v1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.281 20.5v1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.312 16.75l-1.299 .75"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.55 19.5l-1.3 .75"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.25 16.75l1.3 .75"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.013 19.5l1.3 .75"
  }));
}

export { TableOptions as default };
