import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function LungsOff(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-lungs-off",
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
    d: "M6.583 6.608c-1.206 1.058 -2.07 2.626 -2.933 5.449c-.42 1.37 -.636 2.962 -.648 4.775c-.012 1.675 1.261 3.054 2.877 3.161l.203 .007c1.611 0 2.918 -1.335 2.918 -2.98v-8.02"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 11v-3.743c0 -.694 .552 -1.257 1.233 -1.257c.204 0 .405 .052 .584 .15l.13 .083c1.46 1.059 2.432 2.647 3.405 5.824c.42 1.37 .636 2.962 .648 4.775c0 .063 0 .125 -.004 .187m-1.455 2.51c-.417 .265 -.9 .43 -1.419 .464l-.202 .007c-1.613 0 -2.92 -1.335 -2.92 -2.98v-2.02"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 12a2.99 2.99 0 0 0 2.132 -.89"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 4v4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 3l18 18"
  }));
}

export { LungsOff as default };
