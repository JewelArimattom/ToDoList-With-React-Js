import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function BrandThreejs(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-brand-threejs",
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
    d: "M8 22l-5 -19l19 5.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.573 17.58l-6.152 -1.576l8.796 -9.466l1.914 6.64"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.573 17.58l-1.573 -6.58l6.13 2.179"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.527 4.893l1.473 6.107l-6.31 -1.564z"
  }));
}

export { BrandThreejs as default };
