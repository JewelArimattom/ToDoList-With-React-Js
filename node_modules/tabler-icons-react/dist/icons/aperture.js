import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function Aperture(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-aperture",
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
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.6 15h10.55"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.551 4.938l3.26 10.034"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.032 4.636l-8.535 6.201"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20.559 14.51l-8.535 -6.201"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.257 20.916l3.261 -10.034"
  }));
}

export { Aperture as default };
