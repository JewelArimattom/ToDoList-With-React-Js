import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function BinaryTree(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-binary-tree",
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
    d: "M6 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 4a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.058 18.306l2.88 -4.606"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.061 10.303l2.877 -4.604"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.065 13.705l2.876 4.6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.063 5.7l2.881 4.61"
  }));
}

export { BinaryTree as default };
