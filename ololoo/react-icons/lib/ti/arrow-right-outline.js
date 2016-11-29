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

var TiArrowRightOutline = function (_React$Component) {
    _inherits(TiArrowRightOutline, _React$Component);

    function TiArrowRightOutline() {
        _classCallCheck(this, TiArrowRightOutline);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiArrowRightOutline).apply(this, arguments));
    }

    _createClass(TiArrowRightOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 35c-1.3333333333333321 0-2.5916666666666686-0.5200000000000031-3.533333333333335-1.4666666666666686s-1.466666666666665-2.1999999999999957-1.466666666666665-3.5333333333333314c0-1.2433333333333323 0.4499999999999993-1.663333333333334 1.2733333333333334-3.3299999999999983h-8.06c-2.756666666666667 0-5-2.245000000000001-5-5 0-2.7566666666666677 2.243333333333334-5 5-5h8.06c-0.8233333333333341-1.6700000000000017-1.2733333333333334-2.0950000000000024-1.2733333333333334-3.336666666666668 0-1.338333333333333 0.5199999999999996-2.591666666666667 1.4666666666666686-3.536666666666667 1.8866666666666667-1.8866666666666667 5.18-1.8883333333333336 7.066666666666666 0l11.871666666666666 11.870000000000001-11.866666666666667 11.866666666666664c-0.9450000000000003 0.9466666666666654-2.1999999999999993 1.4666666666666686-3.5366666666666653 1.4666666666666686z m-11.786666666666667-15c-0.9199999999999999 0-1.666666666666667 0.75-1.666666666666667 1.6666666666666679s0.746666666666667 1.6666666666666679 1.666666666666667 1.6666666666666679h16.09666666666667l-5.488333333333333 5.488333333333333c-0.31666666666666643 0.31666666666666643-0.4883333333333333 0.7333333333333343-0.4883333333333333 1.1766666666666659 0 0.44666666666666544 0.173333333333332 0.8633333333333333 0.4883333333333333 1.1783333333333346 0.6333333333333329 0.629999999999999 1.7250000000000014 0.629999999999999 2.3566666666666656 0l9.51166666666667-9.510000000000002-9.511666666666667-9.511666666666667c-0.6333333333333329-0.6300000000000008-1.7250000000000014-0.6300000000000008-2.3566666666666656 0-0.31666666666666643 0.31666666666666643-0.4883333333333333 0.7333333333333343-0.4883333333333333 1.1766666666666659 0 0.4450000000000003 0.173333333333332 0.8633333333333333 0.4883333333333333 1.1783333333333328l5.48833333333333 5.49h-16.09666666666667z' })
                )
            );
        }
    }]);

    return TiArrowRightOutline;
}(React.Component);

exports.default = TiArrowRightOutline;
module.exports = exports['default'];