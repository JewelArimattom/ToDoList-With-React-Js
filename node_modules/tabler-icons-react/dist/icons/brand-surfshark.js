import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function BrandSurfshark(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-brand-surfshark",
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
    d: "M19.954 9.447c-.237 -6.217 0 -6.217 -5.996 -6.425c-5.774 -.208 -6.824 1.002 -7.91 5.382c-2.884 11.816 -3.845 14.716 4.792 11.198c9.392 -3.831 9.297 -5.382 9.114 -10.155z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 16h.452c1.943 .007 3.526 -1.461 3.543 -3.286v-2.428c.018 -1.828 1.607 -3.298 3.553 -3.286h.452"
  }));
}

export { BrandSurfshark as default };
