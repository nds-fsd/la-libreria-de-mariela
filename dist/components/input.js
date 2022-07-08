"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  height: "80px",
  width: "230px",
  border: "2px solid black",
  padding: "6px",
  borderRadius: "3px",
  color: "grey"
};

var MyInput = function MyInput(_ref) {
  var label = _ref.label,
      onChange = _ref.onChange,
      type = _ref.type,
      color = _ref.color;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
    value: label,
    type: type,
    onChange: onChange,
    style: _objectSpread(_objectSpread({}, styles), {}, {
      backgroundColor: color,
      fontWeight: "bold"
    }),
    placeholder: "Enter your input here"
  });
};

MyInput.propTypes = {
  label: _propTypes.default.string,
  onChange: _propTypes.default.func,
  type: _propTypes.default.string,
  color: _propTypes.default.string
};
var _default = MyInput;
exports.default = _default;