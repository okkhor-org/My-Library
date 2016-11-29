'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoAlert = function (_React$Component) {
    _inherits(GoAlert, _React$Component);

    function GoAlert() {
        _classCallCheck(this, GoAlert);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(GoAlert).apply(this, arguments));
    }

    _createClass(GoAlert, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm39.29125 31.259999999999998l-17.12-29.9625c-0.44624999999999915-0.7762499999999994-1.2749999999999986-1.2574999999999994-2.171249999999997-1.2574999999999994s-1.7250000000000014 0.48250000000000004-2.1687499999999993 1.2625l-17.118750000000002 29.956250000000004c-0.44374999999999865 0.7750000000000021-0.4399999999999986 1.7249999999999979 0.007500000000001283 2.495000000000001s1.2712500000000002 1.2462499999999963 2.1625000000000005 1.2462499999999963h34.2425c0.8900000000000006 0 1.7124999999999986-0.4750000000000014 2.1625000000000014-1.2449999999999974s0.45000000000000284-1.7212499999999977 0.007500000000000284-2.495000000000001z m-16.791249999999998-1.259999999999998h-5v-5h5v5z m0-7.5h-5v-10h5v10z' })
                )
            );
        }
    }]);

    return GoAlert;
}(React.Component);

exports.default = GoAlert;
module.exports = exports['default'];