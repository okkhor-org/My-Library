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

var FaToggleOff = function (_React$Component) {
    _inherits(FaToggleOff, _React$Component);

    function FaToggleOff() {
        _classCallCheck(this, FaToggleOff);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaToggleOff).apply(this, arguments));
    }

    _createClass(FaToggleOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm22.5 20q0-2.03125-0.7912500000000016-3.8775000000000013t-2.1374999999999993-3.1937499999999996-3.1950000000000003-2.137500000000001-3.875-0.7925000000000004-3.87875 0.7899999999999991-3.1937499999999996 2.1374999999999993-2.1375 3.1950000000000003-0.7949999999999986 3.8787500000000037 0.7912500000000002 3.8775000000000013 2.1399999999999997 3.1937500000000014 3.1937499999999996 2.1374999999999993 3.8774999999999995 0.7925000000000004 3.8750000000000018-0.7899999999999991 3.1950000000000003-2.1374999999999993 2.1374999999999993-3.1950000000000003 0.7937499999999993-3.8787500000000037z m15 0q0-2.03125-0.791249999999998-3.8775000000000013t-2.137500000000003-3.1937499999999996-3.1950000000000003-2.137500000000001-3.875-0.7925000000000004h-7.539999999999999q2.3249999999999993 1.7562499999999996 3.6812499999999986 4.375t1.3575000000000017 5.626250000000002-1.3587500000000006 5.625-3.6812499999999986 4.375h7.537500000000001q2.032499999999999 0 3.87875-0.7925000000000004t3.195000000000004-2.1374999999999993 2.137500000000003-3.1950000000000003 0.7924999999999969-3.8775000000000013z m2.5 0q0 2.5375000000000014-0.9962500000000034 4.853749999999998t-2.666249999999998 3.9837500000000006-3.9837500000000006 2.666249999999998-4.853749999999998 0.9962500000000034h-15q-2.5374999999999996 0-4.85375-0.9962499999999999t-3.98375-2.6662500000000016-2.66625-3.9837500000000006-0.9962500000000003-4.853749999999998 0.9962500000000001-4.85375 2.66625-3.9837500000000006 3.9837500000000006-2.66625 4.85375-0.9962499999999999h15q2.5375000000000014 0 4.853749999999998 0.9962499999999999t3.9837500000000006 2.66625 2.666249999999998 3.983749999999999 0.9962500000000034 4.853750000000002z' })
                )
            );
        }
    }]);

    return FaToggleOff;
}(React.Component);

exports.default = FaToggleOff;
module.exports = exports['default'];