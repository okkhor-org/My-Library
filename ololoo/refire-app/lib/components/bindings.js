'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
  var args = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var mapStateToProps = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
  var mapDispatchToProps = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

  var mapStateToPropsFn = typeof mapStateToProps === "function" ? mapStateToProps : (0, _isArray2.default)(mapStateToProps) ? generateProps(mapStateToProps) : null;

  return function (WrappedComponent) {
    return (0, _reactRedux.connect)((0, _refire.firebaseToProps)(args, mapStateToPropsFn), mapDispatchToProps)(WrappedComponent);
  };
};

var _reactRedux = require('react-redux');

var _refire = require('refire');

var _isArray = require('lodash/lang/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function generateProps(storeIds) {
  return function (state) {
    return storeIds.reduce(function (result, storeId) {
      return _extends({}, result, _defineProperty({}, storeId, state[storeId]));
    }, {});
  };
}