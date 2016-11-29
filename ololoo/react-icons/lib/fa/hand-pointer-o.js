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

var FaHandPointerO = function (_React$Component) {
    _inherits(FaHandPointerO, _React$Component);

    function FaHandPointerO() {
        _classCallCheck(this, FaHandPointerO);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaHandPointerO).apply(this, arguments));
    }

    _createClass(FaHandPointerO, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm15.714285714285715 2.857142857142857q-1.1828571428571433 0-2.0199999999999996 0.8371428571428572t-0.8371428571428581 2.02v20l-3.371428571428572-4.508571428571429q-0.9142857142857146-1.2057142857142864-2.3857142857142843-1.2057142857142864-1.161428571428571 0-1.9885714285714284 0.8485714285714288t-0.8257142857142874 2.008571428571429q0 0.9600000000000009 0.5800000000000001 1.7185714285714297l8.57142857142857 11.428571428571427q0.8485714285714305 1.1385714285714315 2.2771428571428594 1.1385714285714315h16.02857142857143q0.48999999999999844 0 0.879999999999999-0.29999999999999716t0.5028571428571453-0.7714285714285722l2.0528571428571425-8.214285714285715q0.5357142857142847-2.142857142857146 0.5357142857142847-4.328571428571433v-4.845714285714287q0-0.9142857142857146-0.6257142857142881-1.5857142857142854t-1.5171428571428578-0.6685714285714255-1.5171428571428578 0.6257142857142846-0.625714285714281 1.5171428571428578h-0.7142857142857153v-1.361428571428572q0-1.071428571428573-0.7142857142857153-1.8185714285714276t-1.7857142857142847-0.7471428571428564q-1.0285714285714285 0-1.7628571428571433 0.7385714285714293t-0.7371428571428567 1.7599999999999962v1.428571428571427h-0.7142857142857153v-2.0071428571428562q0-1.2285714285714278-0.8257142857142838-2.1099999999999994t-2.031428571428574-0.8828571428571426q-1.1828571428571415 0-2.0199999999999996 0.838571428571429t-0.8371428571428581 2.0185714285714305v2.1428571428571423h-0.7142857142857117v-12.720000000000002q0-1.2285714285714278-0.8257142857142874-2.1099999999999994t-2.0314285714285703-0.8842857142857139z m0-2.857142857142857q2.388571428571428 0 4.051428571428573 1.7285714285714286t1.662857142857142 4.121428571428571v4.907142857142858q0.4914285714285711-0.042857142857142705 0.7142857142857153-0.042857142857142705 2.210000000000001 0 3.861428571428572 1.5399999999999991 1.048571428571428-0.468571428571428 2.210000000000001-0.468571428571428 2.522857142857145 0 4.107142857142858 1.942857142857143 0.6028571428571396-0.15714285714285658 1.25-0.15714285714285658 2.1000000000000014 0 3.548571428571428 1.5071428571428562t1.4514285714285649 3.6042857142857123v4.842857142857145q0 2.5914285714285725-0.6257142857142881 5.024285714285714l-2.0528571428571425 8.214285714285719q-0.3571428571428541 1.4285714285714306-1.5171428571428578 2.3328571428571436t-2.632857142857141 0.9028571428571368h-16.028571428571425q-1.3399999999999999 0-2.557142857142857-0.6142857142857139t-2.0185714285714287-1.6614285714285728l-8.571428571428571-11.42857142857143q-1.13857142857143-1.5171428571428542-1.13857142857143-3.438571428571425 0-2.3428571428571416 1.662857142857143-4.0285714285714285t4.00857142857143-1.6857142857142868q1.5828571428571436 0 2.9000000000000004 0.7828571428571429v-12.21142857142857q0-2.364285714285715 1.6742857142857144-4.038571428571429t4.039999999999999-1.6757142857142862z m2.8571428571428577 31.42857142857143v-8.57142857142857h-0.7142857142857153v8.57142857142857h0.7142857142857153z m5.714285714285715 0v-8.57142857142857h-0.7142857142857153v8.57142857142857h0.7142857142857153z m5.714285714285715 0v-8.57142857142857h-0.7142857142857153v8.57142857142857h0.7142857142857153z' })
                )
            );
        }
    }]);

    return FaHandPointerO;
}(React.Component);

exports.default = FaHandPointerO;
module.exports = exports['default'];