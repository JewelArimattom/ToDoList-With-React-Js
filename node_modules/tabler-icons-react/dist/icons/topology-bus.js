import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function TopologyBus(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-topology-bus",
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
    d: "M14 10a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 10a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 10a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 16h20"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 12v4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 12v4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 12v4"
  }));
}

export { TopologyBus as default };
