import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function MicrowaveOff(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-microwave-off",
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
    d: "M18 18h-14a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h2m4 0h10a1 1 0 0 1 1 1v10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 6v5m0 4v3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 12h.01"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 9h.01"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 10.5c1 -.667 1.5 -.667 2.5 0c.636 .265 1.272 .665 1.907 .428"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 13.5c1 -.667 1.5 -.667 2.5 0c.833 .347 1.667 .926 2.5 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 3l18 18"
  }));
}

export { MicrowaveOff as default };
