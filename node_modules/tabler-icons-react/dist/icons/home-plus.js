import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function HomePlus(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-home-plus",
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
    d: "M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 19h6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 16v6"
  }));
}

export { HomePlus as default };
