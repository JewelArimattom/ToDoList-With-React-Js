import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function BrandVinted(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-brand-vinted",
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
    d: "M11.028 6c0 7.695 -.292 11.728 0 12c2.046 -5.002 4.246 -12.642 5.252 -14.099c.343 -.497 .768 -.93 1.257 -1.277c.603 -.39 1.292 -.76 1.463 -.575c-.07 2.319 -4.023 15.822 -4.209 16.314a6.135 6.135 0 0 1 -3.465 3.386c-3.213 .78 -3.429 -.446 -3.836 -1.134c-.95 -2.103 -1.682 -14.26 -1.445 -15.615c.05 -.523 .143 -1.851 2.491 -2c2.359 -.354 2.547 1.404 2.492 3z"
  }));
}

export { BrandVinted as default };
