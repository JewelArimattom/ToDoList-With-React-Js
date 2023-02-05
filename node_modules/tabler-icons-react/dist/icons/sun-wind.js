import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function SunWind(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-sun-wind",
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
    d: "M14.468 10.005a4 4 0 1 0 -5.466 5.46"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 12h1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 3v1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 20v1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.6 5.6l.7 .7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.4 5.6l-.7 .7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.3 17.7l-.7 .7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 13h5a2 2 0 1 0 0 -4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 16h5.714l.253 -.004a2.004 2.004 0 0 1 2.033 2.004a2 2 0 0 1 -2 2h-.286"
  }));
}

export { SunWind as default };
