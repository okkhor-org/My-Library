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

var MdAirlineSeatFlatAngled = function (_React$Component) {
    _inherits(MdAirlineSeatFlatAngled, _React$Component);

    function MdAirlineSeatFlatAngled() {
        _classCallCheck(this, MdAirlineSeatFlatAngled);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdAirlineSeatFlatAngled).apply(this, arguments));
    }

    _createClass(MdAirlineSeatFlatAngled, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm12.188333333333333 17.033333333333335q-1.875 0.8583333333333343-3.866666666666667 0.19333333333333158t-2.8499999999999996-2.538333333333334-0.19666666666666632-3.866666666666667 2.538333333333333-2.8499999999999996 3.866666666666667-0.19666666666666632 2.8499999999999996 2.538333333333333 0.1966666666666672 3.866666666666667-2.538333333333334 2.8500000000000014z m-9.688333333333333 3.1999999999999993l1.1716666666666669-3.123333333333335 31.64 11.406666666666666-1.0933333333333337 3.125-7.576666666666668-2.6566666666666663v2.6583333333333314h-13.283333333333333v-7.5z m34.61 3.594999999999999l-1.1716666666666669 3.125-20.625-7.419999999999998 3.5166666666666693-9.455 14.216666666666665 5.156666666666666q2.6566666666666663 0.9399999999999995 3.828333333333333 3.4399999999999995t0.23333333333333428 5.156666666666666z' })
                )
            );
        }
    }]);

    return MdAirlineSeatFlatAngled;
}(React.Component);

exports.default = MdAirlineSeatFlatAngled;
module.exports = exports['default'];