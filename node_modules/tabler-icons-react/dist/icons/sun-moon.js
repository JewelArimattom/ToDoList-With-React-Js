import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function SunMoon(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-sun-moon",
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
    d: "M9.173 14.83a4 4 0 1 1 5.657 -5.657"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.294 12.707l.174 .247a7.5 7.5 0 0 0 8.845 2.492a9 9 0 0 1 -14.671 2.914"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 12h1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 3v1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.6 5.6l.7 .7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 21l18 -18"
  }));
}

export { SunMoon as default };
