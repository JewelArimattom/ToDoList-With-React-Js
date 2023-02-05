import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function RulerMeasure(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-ruler-measure",
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
    d: "M19.875 12c.621 0 1.125 .512 1.125 1.143v5.714c0 .631 -.504 1.143 -1.125 1.143h-15.875a1 1 0 0 1 -1 -1v-5.857c0 -.631 .504 -1.143 1.125 -1.143h15.75z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 12v2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 12v3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 12v3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 12v3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 12v2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 3v4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 5h18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 3v4"
  }));
}

export { RulerMeasure as default };
