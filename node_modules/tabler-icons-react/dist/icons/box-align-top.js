import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function BoxAlignTop(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-box-align-top",
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
    d: "M4 9.505h16v-5a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1v5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 14.505v-.01"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 19.505v-.01"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 19.505v-.01"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 19.505v-.01"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 19.505v-.01"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 14.505v-.01"
  }));
}

export { BoxAlignTop as default };
