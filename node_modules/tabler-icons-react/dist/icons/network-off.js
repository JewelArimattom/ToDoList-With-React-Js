import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function NetworkOff(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-network-off",
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
    d: "M6.537 6.516a6 6 0 0 0 7.932 7.954m2.246 -1.76a6 6 0 0 0 -8.415 -8.433"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 3c1.333 .333 2 2.333 2 6c0 .348 -.006 .681 -.018 1m-.545 3.43c-.332 .89 -.811 1.414 -1.437 1.57"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 3c-.938 .234 -1.547 1.295 -1.825 3.182m-.156 3.837c.117 3.02 .777 4.68 1.981 4.981"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 9h3m4 0h5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 19h7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 19h5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "19",
    r: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 15v2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 3l18 18"
  }));
}

export { NetworkOff as default };
