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

var MdNetworkCheck = function (_React$Component) {
    _inherits(MdNetworkCheck, _React$Component);

    function MdNetworkCheck() {
        _classCallCheck(this, MdNetworkCheck);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdNetworkCheck).apply(this, arguments));
    }

    _createClass(MdNetworkCheck, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm8.360000000000001 21.64q5-5 12.18833333333333-4.766666666666666l-2.1900000000000013 4.766666666666666q-3.828333333333333 0.466666666666665-6.716666666666669 3.3599999999999994z m20 3.3599999999999994q-0.8599999999999994-0.8599999999999994-2.0333333333333314-1.6400000000000006l0.9400000000000013-4.843333333333334q2.5 1.25 4.375 3.125z m6.640000000000001-6.640000000000001q-3.046666666666667-3.046666666666667-6.875-4.609999999999999l0.8599999999999994-4.688333333333333q5.391666666666673 1.955 9.376666666666665 5.938333333333333z m-33.36-3.3599999999999994q4.609999999999999-4.609999999999999 10.663333333333332-6.445t12.226666666666668-0.7416666666666671l-1.9533333333333331 4.453333333333335q-4.766666666666666-0.625-9.413333333333334 0.9766666666666666t-8.163333333333334 5.116666666666665z m24.843333333333334-6.639999999999999q0.8616666666666681 0 0.8616666666666681 0.7833333333333332l-4.063333333333333 21.483333333333334v0.07833333333333314q-0.23666666666666814 1.0933333333333337-1.173333333333332 1.8749999999999964t-2.1099999999999994 0.7833333333333314q-1.4066666666666663 0-2.383333333333333-0.9783333333333317t-0.975000000000005-2.384999999999998q0-0.8583333333333343 0.39000000000000057-1.6383333333333319l8.669999999999998-19.375q0.23666666666666814-0.625 0.783333333333335-0.625z' })
                )
            );
        }
    }]);

    return MdNetworkCheck;
}(React.Component);

exports.default = MdNetworkCheck;
module.exports = exports['default'];