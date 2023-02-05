import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function BoxModelOff(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-box-model-off",
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
    d: "M12 8h4v4m0 4h-8v-8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 4h10a2 2 0 0 1 2 2v10m-.586 3.414a1.994 1.994 0 0 1 -1.414 .586h-12a2 2 0 0 1 -2 -2v-12c0 -.547 .22 -1.043 .576 -1.405"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 16l3.3 3.3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 8l3.3 -3.3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 8l-3.3 -3.3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 16l-3.3 3.3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 3l18 18"
  }));
}

export { BoxModelOff as default };
