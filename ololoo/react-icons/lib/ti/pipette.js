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

var TiPipette = function (_React$Component) {
    _inherits(TiPipette, _React$Component);

    function TiPipette() {
        _classCallCheck(this, TiPipette);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiPipette).apply(this, arguments));
    }

    _createClass(TiPipette, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35.64 12.216666666666667c0.1216666666666697-1.9966666666666661-0.5900000000000034-3.9783333333333335-1.9099999999999966-5.296666666666667-1.2199999999999989-1.216666666666666-2.988333333333337-1.92-4.853333333333335-1.92-1.9600000000000009 0-3.676666666666666 0.7549999999999999-4.708333333333332 2.071666666666667-1.1499999999999986 1.4716666666666658-2.3166666666666664 4.375-2.9466666666666654 6.078333333333333l-2.693333333333335-2.6950000000000003c-0.6533333333333324-0.6500000000000004-1.7049999999999983-0.6500000000000004-2.3566666666666656 0s-0.6533333333333342 1.705 0 2.3566666666666674l0.4883333333333333 0.4883333333333333-8.716666666666669 8.720000000000002c-0.6266666666666669 0.625-1.2000000000000002 1.5199999999999996-1.6166666666666671 2.5266666666666673-0.03000000000000025 0.07166666666666544-2.8750000000000004 7.213333333333335-0.15333333333333332 9.933333333333334 0.878333333333333 0.875 2.216666666666666 1.1766666666666694 3.63 1.1766666666666694 2.966666666666667-0.0033333333333303017 6.256666666666668-1.3116666666666674 6.306666666666665-1.3333333333333357 1.0033333333333339-0.4166666666666643 1.8999999999999986-0.9883333333333297 2.5233333333333334-1.6133333333333297l8.719999999999999-8.719999999999999 0.4883333333333333 0.4883333333333333c0.3249999999999993 0.3249999999999993 0.75 0.4883333333333333 1.1783333333333346 0.4883333333333333s0.8533333333333317-0.163333333333334 1.1783333333333346-0.4883333333333333c0.6499999999999986-0.6499999999999986 0.6499999999999986-1.7033333333333331 0-2.3566666666666656l-2.698333333333334-2.6933333333333422c1.7049999999999983-0.6266666666666652 4.609999999999999-1.7916666666666679 6.079999999999998-2.9499999999999993 1.2000000000000028-0.9333333333333336 1.9500000000000028-2.4866666666666664 2.0600000000000023-4.260000000000002z m-27.10666666666667 19.909999999999997c-0.4133333333333322-0.49166666666666714-0.17666666666666409-2.5133333333333354 0.25500000000000256-4.300000000000001l4.036666666666667 4.038333333333334c-1.7833333333333332 0.43333333333333357-3.8049999999999997 0.6716666666666633-4.293333333333335 0.2616666666666667z m7.740000000000002-1.7666666666666657c-0.3133333333333326 0.3116666666666674-0.8499999999999996 0.6449999999999996-1.4416666666666664 0.8866666666666667-0.05833333333333357 0.02499999999999858-0.13333333333333286 0.046666666666666856-0.19500000000000028 0.07000000000000028l-5.300000000000001-5.300000000000001c0.025000000000000355-0.06333333333333258 0.04499999999999993-0.13833333333333186 0.07000000000000028-0.19666666666666544 0.24333333333333407-0.5899999999999999 0.5766666666666662-1.129999999999999 0.8883333333333336-1.4400000000000013l8.72-8.716666666666669 5.976666666666667 5.975000000000001-8.719999999999999 8.716666666666669z' })
                )
            );
        }
    }]);

    return TiPipette;
}(React.Component);

exports.default = TiPipette;
module.exports = exports['default'];