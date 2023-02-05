import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function ThreeDCubeSphereOff(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-3d-cube-sphere-off",
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
    d: "M6 17.6l-2 -1.1v-2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 10v-2.5l2 -1.1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 4.1l2 -1.1l2 1.1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 6.4l2 1.1v2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 14v2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 19.9l-2 1.1l-2 -1.1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 8.6l2 -1.1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 12v2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 18.5v2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 12l-2 -1.12"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 8.6l-2 -1.1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 3l18 18"
  }));
}

export { ThreeDCubeSphereOff as default };
