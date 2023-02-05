import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function PodiumOff(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-podium-off",
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
    d: "M12 8h7l-.621 2.485a2 2 0 0 1 -1.94 1.515h-.439m-4 0h-4.439a2 2 0 0 1 -1.94 -1.515l-.621 -2.485h3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 8v-1m.864 -3.106a2.99 2.99 0 0 1 2.136 -.894"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 12l1 9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.599 15.613l-.599 5.387"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 21h10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 3l18 18"
  }));
}

export { PodiumOff as default };
