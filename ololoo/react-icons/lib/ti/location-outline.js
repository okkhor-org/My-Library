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

var TiLocationOutline = function (_React$Component) {
    _inherits(TiLocationOutline, _React$Component);

    function TiLocationOutline() {
        _classCallCheck(this, TiLocationOutline);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiLocationOutline).apply(this, arguments));
    }

    _createClass(TiLocationOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 8.333333333333334c2.6833333333333336 0 5.199999999999999 1.0233333333333334 7.09 2.883333333333333 1.8766666666666652 1.8450000000000006 2.91 4.300000000000001 2.91 6.9s-1.033333333333335 5.050000000000001-2.908333333333335 6.899999999999999l-7.091666666666665 6.970000000000002-7.09-6.976666666666667c-1.876666666666667-1.8433333333333337-2.91-4.293333333333333-2.91-6.898333333333333s1.0333333333333332-5.050000000000001 2.91-6.899999999999999c1.8900000000000023-1.8550000000000022 4.411666666666669-2.8783333333333356 7.09-2.8783333333333356z m0-3.333333333333334c-3.411666666666669 0-6.826666666666668 1.2800000000000002-9.428333333333335 3.841666666666667-5.206666666666667 5.123333333333333-5.206666666666667 13.428333333333336 0 18.549999999999997l9.428333333333335 9.275000000000006 9.428333333333335-9.276666666666667c5.2066666666666706-5.120000000000001 5.2066666666666706-13.426666666666666 0-18.55-2.599999999999998-2.55666666666667-6.016666666666666-3.8400000000000034-9.428333333333335-3.8400000000000034z m0 9.166666666666668c1.1133333333333333 0 2.16 0.43333333333333357 2.9466666666666654 1.2166666666666668 1.6266666666666652 1.626666666666667 1.6266666666666652 4.270000000000001 0 5.895000000000001-0.788333333333334 0.7866666666666653-1.8333333333333321 1.2166666666666686-2.9466666666666654 1.2166666666666686s-2.1583333333333314-0.43333333333333357-2.9466666666666654-1.2166666666666686c-1.626666666666667-1.6266666666666652-1.626666666666667-4.27 0-5.895 0.788333333333334-0.7833333333333332 1.8333333333333321-1.2166666666666668 2.9466666666666654-1.2166666666666668z m0-1.666666666666666c-1.4933333333333323 0-2.986666666666668 0.5666666666666664-4.125 1.705-2.2783333333333324 2.2783333333333324-2.2783333333333324 5.973333333333333 0 8.25 1.1400000000000006 1.1416666666666657 2.629999999999999 1.7083333333333321 4.125 1.7083333333333321s2.986666666666668-0.5700000000000003 4.125-1.706666666666667c2.2766666666666673-2.2783333333333324 2.2766666666666673-5.973333333333333 0-8.25-1.1383333333333319-1.1400000000000006-2.633333333333333-1.708333333333334-4.125-1.708333333333334z' })
                )
            );
        }
    }]);

    return TiLocationOutline;
}(React.Component);

exports.default = TiLocationOutline;
module.exports = exports['default'];