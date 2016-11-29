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

var TiBeer = function (_React$Component) {
    _inherits(TiBeer, _React$Component);

    function TiBeer() {
        _classCallCheck(this, TiBeer);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiBeer).apply(this, arguments));
    }

    _createClass(TiBeer, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm16.666666666666668 27.5c0 0.45833333333333215-0.375 0.8333333333333321-0.8333333333333339 0.8333333333333321s-0.8333333333333339-0.375-0.8333333333333339-0.8333333333333321v-10c0-0.45833333333333215 0.375-0.8333333333333321 0.8333333333333339-0.8333333333333321s0.8333333333333339 0.375 0.8333333333333339 0.8333333333333321v10z m3.333333333333332 0c0 0.45833333333333215-0.375 0.8333333333333321-0.8333333333333321 0.8333333333333321s-0.8333333333333321-0.375-0.8333333333333321-0.8333333333333321v-10c0-0.45833333333333215 0.375-0.8333333333333321 0.8333333333333321-0.8333333333333321s0.8333333333333321 0.375 0.8333333333333321 0.8333333333333321v10z m3.3333333333333357 0c0 0.45833333333333215-0.375 0.8333333333333321-0.8333333333333321 0.8333333333333321s-0.8333333333333321-0.375-0.8333333333333321-0.8333333333333321v-10c0-0.45833333333333215 0.375-0.8333333333333321 0.8333333333333321-0.8333333333333321s0.8333333333333321 0.375 0.8333333333333321 0.8333333333333321v10z m7.5-17.5h-0.8333333333333357v-1.666666666666666c0-1.8399999999999999-1.4933333333333323-3.333333333333334-3.333333333333332-3.333333333333334h-15c-1.8399999999999999 0-3.333333333333334 1.4933333333333332-3.333333333333334 3.333333333333334v21.666666666666664c0 2.759999999999998 2.24 5 5 5h11.666666666666666c2.759999999999998 0 5-2.240000000000002 5-5h0.8333333333333321c3.216666666666665 0 5.833333333333332-2.616666666666667 5.833333333333332-5.833333333333336v-8.333333333333334c7.105427357601002e-15-3.2166666666666632-2.61666666666666-5.83333333333333-5.833333333333329-5.83333333333333z m-19.166666666666668-1.666666666666666h15v1.666666666666666h-7.406666666666666l-0.19666666666666544 0.5533333333333328c-0.27333333333333343 0.7633333333333336-1.1050000000000004 1.2166666666666668-1.8616666666666681 1.08l-0.5783333333333331-0.09666666666666757-0.288333333333334 0.5116666666666667c-0.4450000000000003 0.7899999999999991-1.2750000000000004 1.2833333333333332-2.166666666666668 1.2833333333333332-1.379999999999999 0.0016666666666687036-2.501666666666665-1.1199999999999974-2.501666666666665-2.4983333333333313v-2.5z m15 21.666666666666664c0 0.9200000000000017-0.7466666666666661 1.6666666666666679-1.6666666666666679 1.6666666666666679h-11.666666666666666c-0.9199999999999999 0-1.666666666666666-0.7466666666666661-1.666666666666666-1.6666666666666679v-15.85c0.6999999999999993 0.5283333333333342 1.5600000000000005 0.8499999999999996 2.5 0.8499999999999996 1.3066666666666666 0 2.533333333333335-0.6266666666666669 3.3166666666666664-1.666666666666666 1.211666666666666 0 2.3033333333333346-0.6500000000000004 2.8916666666666657-1.666666666666666h6.291666666666668v18.333333333333336z m6.666666666666668-5.833333333333336c0 1.3783333333333339-1.1216666666666697 2.5-2.5 2.5h-2.5v-13.33333333333333h2.5c1.3783333333333303 0 2.5 1.1216666666666661 2.5 2.5v8.333333333333334z' })
                )
            );
        }
    }]);

    return TiBeer;
}(React.Component);

exports.default = TiBeer;
module.exports = exports['default'];