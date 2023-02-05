import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function AlignBoxRightBottom(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-align-box-right-bottom",
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
    d: "M4 18.222v-12.444c0 -.982 .796 -1.778 1.778 -1.778h12.444c.982 0 1.778 .796 1.778 1.778v12.444c0 .982 -.796 1.778 -1.778 1.778h-12.444a1.778 1.778 0 0 1 -1.778 -1.778z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 17h2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 14h6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 11h4"
  }));
}

export { AlignBoxRightBottom as default };
