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

var TiWorldOutline = function (_React$Component) {
    _inherits(TiWorldOutline, _React$Component);

    function TiWorldOutline() {
        _classCallCheck(this, TiWorldOutline);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiWorldOutline).apply(this, arguments));
    }

    _createClass(TiWorldOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 3.3333333333333335c-8.283333333333333 0-15 6.716666666666667-15 14.999999999999998s6.716666666666669 14.999999999999996 15 14.999999999999996 15-6.716666666666669 15-15-6.716666666666669-15-15-15z m0 10c0-0.9216666666666669 0.745000000000001-1.666666666666666 1.6666666666666679-1.666666666666666s1.6666666666666679 0.7449999999999992 1.6666666666666679 1.666666666666666v5.000000000000002c-0.9200000000000017 0-1.6666666666666679 0.7466666666666661-1.6666666666666679 1.6666666666666679s0.7466666666666661 1.6666666666666679 1.6666666666666679 1.6666666666666679c0.9216666666666669 0 1.6666666666666679-0.7466666666666661 1.6666666666666679-1.6666666666666679h1.6666666666666679v-3.333333333333332l1.6666666666666679 1.6666666666666679-1.6666666666666679 1.6666666666666679c0 5 0 5-3.333333333333332 6.666666666666668 0-1.6666666666666679-1.6666666666666679-1.6666666666666679-5-1.6666666666666679v-3.333333333333332l-3.333333333333334-3.333333333333332v-3.333333333333343c-1.666666666666666 0-1.666666666666666 1.6666666666666679-1.666666666666666 1.6666666666666679l-3.6883333333333397-3.6866666666666674c1.9450000000000003-3.746666666666666 5.855000000000002-6.3133333333333335 10.355-6.3133333333333335 1.1466666666666683 0 2.254999999999999 0.1733333333333329 3.3000000000000007 0.4833333333333334-0.14166666666666572 1.4916666666666671-0.9633333333333347 2.8499999999999996-2.466666666666665 2.8499999999999996-1.6666666666666679 0-2.5 1.666666666666666-2.5 3.333333333333334v5.000000000000002s1.6666666666666679 0 1.6666666666666679-5z m0 16.666666666666664c-6.433333333333334 0-11.666666666666668-5.233333333333334-11.666666666666668-11.666666666666668 0-1.293333333333333 0.22166666666666757-2.533333333333333 0.6116666666666664-3.700000000000001l7.721666666666669 7.725000000000003v2.6416666666666657c0 0.9200000000000017 0.745000000000001 1.6666666666666679 1.6666666666666679 1.6666666666666679 1.3000000000000007 0 2.75 0 3.3433333333333337 0.14999999999999858 0.06333333333333258 0.5033333333333339 0.3500000000000014 0.9716666666666676 0.7800000000000011 1.2383333333333333 0.28000000000000114 0.173333333333332 0.6000000000000014 0.2666666666666657 0.9200000000000017 0.2666666666666657 0.24166666666666714 0 0.4833333333333343-0.053333333333334565 0.7033333333333331-0.163333333333334 3.913333333333334-1.956666666666667 4.233333333333334-2.7399999999999984 4.253333333333334-7.466666666666669l1.1799999999999997-1.1783333333333346c0.6499999999999986-0.6499999999999986 0.6499999999999986-1.7049999999999983 0-2.3566666666666656l-1.6666666666666679-1.666666666666666c-0.3200000000000074-0.31999999999999496-0.7466666666666661-0.48999999999999666-1.1800000000000033-0.48999999999999666-0.216666666666665 0-0.43333333333333357 0.041666666666666075-0.6383333333333319 0.12666666666666693-0.6216666666666661 0.25833333333333286-1.0283333333333324 0.8666666666666671-1.0283333333333324 1.540000000000001v-3.333333333333334c0-1.1500000000000004-0.5833333333333321-2.163333333333334-1.4716666666666676-2.7633333333333336 0.6999999999999993-0.6833333333333336 1.1866666666666674-1.6583333333333332 1.3766666666666652-2.8083333333333336 3.986666666666668 1.8583333333333343 6.761666666666667 5.8916666666666675 6.761666666666667 10.571666666666669 0 6.433333333333334-5.233333333333334 11.666666666666668-11.666666666666668 11.666666666666668z' })
                )
            );
        }
    }]);

    return TiWorldOutline;
}(React.Component);

exports.default = TiWorldOutline;
module.exports = exports['default'];