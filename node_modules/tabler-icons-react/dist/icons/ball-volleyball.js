import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function BallVolleyball(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-ball-volleyball",
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
    d: "M12 12a8 8 0 0 0 8 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.5 13.5a12 12 0 0 0 8.5 6.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 12a8 8 0 0 0 -7.464 4.928"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.951 7.353a12 12 0 0 0 -9.88 4.111"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 12a8 8 0 0 0 -.536 -8.928"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.549 15.147a12 12 0 0 0 1.38 -10.611"
  }));
}

export { BallVolleyball as default };
