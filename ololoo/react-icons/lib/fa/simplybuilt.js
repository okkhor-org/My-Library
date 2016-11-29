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

var FaSimplybuilt = function (_React$Component) {
    _inherits(FaSimplybuilt, _React$Component);

    function FaSimplybuilt() {
        _classCallCheck(this, FaSimplybuilt);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaSimplybuilt).apply(this, arguments));
    }

    _createClass(FaSimplybuilt, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm16.855 22.65625q0-2.1875-1.5525000000000002-3.740000000000002t-3.74-1.5537499999999973-3.7300000000000004 1.5537500000000009-1.5425000000000004 3.7399999999999984 1.5425000000000004 3.7300000000000004 3.7300000000000004 1.5412500000000016 3.74-1.5425000000000004 1.5525000000000002-3.7312499999999993z m16.85625-0.019999999999999574q0-2.1875-1.5437500000000028-3.7312499999999993t-3.729999999999997-1.5425000000000004-3.7375000000000007 1.5437499999999993-1.5537500000000009 3.7300000000000004q0 2.2062500000000007 1.5524999999999984 3.75t3.7375000000000007 1.5412500000000016 3.7312499999999993-1.5524999999999984 1.5424999999999969-3.7375000000000007z m6.28875-15.79875v26.325000000000003q0 0.8599999999999994-0.615000000000002 1.4750000000000014t-1.4937499999999986 0.615000000000002h-35.78125q-0.8787499999999995 0-1.4937499999999997-0.615000000000002t-0.6162499999999997-1.4725000000000037v-26.3275q0-0.862499999999998 0.61625-1.4749999999999979t1.4937500000000004-0.61625h8.4175q0.8599999999999994 0 1.4849999999999994 0.6150000000000002t0.625 1.4749999999999996v3.14375h14.724999999999998v-3.1425q0-0.8624999999999998 0.625-1.4749999999999996t1.4875000000000007-0.61625h8.416250000000002q0.8787499999999966 0 1.4937499999999986 0.6150000000000002t0.615000000000002 1.4762499999999994z' })
                )
            );
        }
    }]);

    return FaSimplybuilt;
}(React.Component);

exports.default = FaSimplybuilt;
module.exports = exports['default'];