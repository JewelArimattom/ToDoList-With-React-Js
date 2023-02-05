import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var _excluded = ["size", "color"];
function Moustache(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-moustache",
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
    d: "M15 9a3 3 0 0 1 2.599 1.5h.001c.933 1.333 2.133 1.556 3.126 1.556l.291 -.006l.77 -.044l.213 -.006c-.963 1.926 -3.163 2.925 -6.6 2.996l-.4 .004l-.165 -.005a3 3 0 0 1 .165 -5.995z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 9a3 3 0 0 0 -2.599 1.5h-.001c-.933 1.333 -2.133 1.556 -3.126 1.556l-.291 -.006l-.77 -.044l-.213 -.006c.963 1.926 3.163 2.925 6.6 2.996l.4 .004l.165 -.005a3 3 0 0 0 -.165 -5.995z"
  }));
}

export { Moustache as default };
