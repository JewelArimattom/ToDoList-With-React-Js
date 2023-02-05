import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function MacroOff(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-macro-off",
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
    d: "M6 15a6 6 0 0 0 11.47 2.467"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.53 15.53a6.001 6.001 0 0 0 -3.53 5.47"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 21a6 6 0 0 0 -6 -6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 21v-10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.866 10.87a5.007 5.007 0 0 1 -3.734 -3.723m-.132 -4.147l3 2l2 -2l2 2l3 -2v3a5 5 0 0 1 -2.604 4.389"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 3l18 18"
  }));
}

export { MacroOff as default };
