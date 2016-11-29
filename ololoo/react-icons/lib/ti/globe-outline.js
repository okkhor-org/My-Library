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

var TiGlobeOutline = function (_React$Component) {
    _inherits(TiGlobeOutline, _React$Component);

    function TiGlobeOutline() {
        _classCallCheck(this, TiGlobeOutline);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiGlobeOutline).apply(this, arguments));
    }

    _createClass(TiGlobeOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm18.333333333333336 10c3.676666666666666 0 6.666666666666668 2.99 6.666666666666668 6.666666666666668s-2.9899999999999984 6.666666666666668-6.666666666666668 6.666666666666668c-3.673333333333334 0-6.663333333333334-2.990000000000002-6.663333333333334-6.666666666666668s2.9899999999999984-6.666666666666668 6.663333333333334-6.666666666666668z m0-3.333333333333334c-5.523333333333333 0-9.996666666666668 4.476666666666667-9.996666666666668 9.999999999999998s4.473333333333333 10.000000000000004 9.996666666666668 10.000000000000004c5.52 0 10-4.48 10-10 0-5.523333333333333-4.48-10-10-10z m10 26.66666666666667h-6.666666666666668v-2.0500000000000007c2.7333333333333343-0.6166666666666671 5.243333333333332-1.9800000000000004 7.271666666666668-4.010000000000002 2.8333333333333286-2.833333333333332 4.395-6.599999999999998 4.395-10.606666666666666 0-3.4433333333333334-1.1499999999999986-6.711666666666666-3.280000000000001-9.363333333333335l1.125-1.121666666666667c0.6499999999999986-0.6533333333333333 0.6499999999999986-1.706666666666667 0-2.36-0.6499999999999986-0.6533333333333333-1.7049999999999983-0.6499999999999999-2.3566666666666656 0l-3.421666666666667 3.4116666666666675 1.1833333333333336 1.1800000000000006c2.1999999999999993 2.203333333333333 3.4166666666666643 5.1366666666666685 3.4166666666666643 8.253333333333334s-1.2166666666666686 6.044999999999998-3.416666666666668 8.25-5.133333333333333 3.416666666666668-8.249999999999996 3.416666666666668-6.045-1.2166666666666686-8.25-3.416666666666668c-0.6500000000000004-0.6533333333333324-1.7033333333333331-0.6533333333333324-2.3550000000000004 0-0.6500000000000004 0.6499999999999986-0.6500000000000004 1.7033333333333331 0 2.3550000000000004 2.833333333333332 2.833333333333332 6.599999999999998 4.395 10.605 4.395v1.6666666666666679h-6.666666666666668c-0.9216666666666669 0-1.666666666666666 0.7449999999999974-1.666666666666666 1.6666666666666643s0.7449999999999992 1.6666666666666643 1.666666666666666 1.6666666666666643h16.666666666666668c0.9216666666666669 0 1.6666666666666679-0.7449999999999974 1.6666666666666679-1.6666666666666643s-0.745000000000001-1.6666666666666643-1.6666666666666679-1.6666666666666643z' })
                )
            );
        }
    }]);

    return TiGlobeOutline;
}(React.Component);

exports.default = TiGlobeOutline;
module.exports = exports['default'];