import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function DeviceAirpods(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-device-airpods",
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
    d: "M6 4a4 4 0 0 1 3.995 3.8l.005 .2v10.5a1.5 1.5 0 0 1 -3 0v-6.5h-1a4 4 0 0 1 -3.995 -3.8l-.005 -.2a4 4 0 0 1 4 -4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 4a4 4 0 0 0 -3.995 3.8l-.005 .2v10.5a1.5 1.5 0 0 0 3 0v-6.5h1a4 4 0 0 0 3.995 -3.8l.005 -.2a4 4 0 0 0 -4 -4z"
  }));
}

export { DeviceAirpods as default };
