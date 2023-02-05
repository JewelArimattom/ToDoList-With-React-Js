import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function RollercoasterOff(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-rollercoaster-off",
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
    d: "M3 21a5.55 5.55 0 0 0 5.265 -3.795l.735 -2.205a8.759 8.759 0 0 1 2.35 -3.652m2.403 -1.589a8.76 8.76 0 0 1 3.572 -.759h3.675"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 9v7m0 4v1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 21v-3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 21v-9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 9.5v2.5m0 4v5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 3h5v3h-5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.446 5.415l.554 -.415l2 2.5l-.285 .213m-2.268 1.702l-1.447 1.085l-1.8 -.5l-.2 -2l1.139 -.854"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 3l18 18"
  }));
}

export { RollercoasterOff as default };
