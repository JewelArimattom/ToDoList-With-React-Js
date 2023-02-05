import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function RazorElectric(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-razor-electric",
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
    d: "M8 3v2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 3v2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 3v2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 12v6a3 3 0 0 0 6 0v-6h-6z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 5h8l-1 4h-6z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 17v1"
  }));
}

export { RazorElectric as default };
