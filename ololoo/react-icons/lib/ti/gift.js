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

var TiGift = function (_React$Component) {
    _inherits(TiGift, _React$Component);

    function TiGift() {
        _classCallCheck(this, TiGift);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiGift).apply(this, arguments));
    }

    _createClass(TiGift, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.666666666666668 13.333333333333334h-3.919999999999998c0.36666666666666714-0.7616666666666667 0.586666666666666-1.5999999999999996 0.586666666666666-2.5 0-3.216666666666667-2.616666666666667-5.833333333333334-5.833333333333336-5.833333333333334-1.6333333333333329 0-3.1066666666666656 0.6783333333333337-4.166666666666668 1.7633333333333336-1.0599999999999952-1.083333333333334-2.5333333333333314-1.7633333333333336-4.166666666666664-1.7633333333333336-3.216666666666667 0-5.833333333333334 2.616666666666667-5.833333333333334 5.833333333333334 0 0.9000000000000004 0.2216666666666658 1.7383333333333333 0.586666666666666 2.5h-3.92c-0.9216666666666669 0-1.666666666666667 0.7466666666666661-1.666666666666667 1.666666666666666v6.666666666666668c0 0.9200000000000017 0.7450000000000001 1.6666666666666679 1.666666666666667 1.6666666666666679v8.333333333333336c0 2.7566666666666677 2.243333333333334 5 5 5h16.666666666666668c2.7566666666666677 0 5-2.2433333333333323 5-5v-8.333333333333336c0.9216666666666633 0 1.6666666666666679-0.7466666666666661 1.6666666666666679-1.6666666666666679v-6.666666666666668c0-0.9199999999999999-0.7449999999999974-1.666666666666666-1.6666666666666679-1.666666666666666z m-1.6666666666666679 6.666666666666666h-8.333333333333336v-3.333333333333332h8.333333333333336v3.333333333333332z m-13.333333333333336-8.333333333333334h3.333333333333332v1.666666666666666h-3.333333333333332v-1.6666666666666643z m3.333333333333332 4.999999999999998v3.333333333333332h-3.333333333333332v-3.333333333333332h3.333333333333332z m2.5-8.333333333333334c1.3783333333333339 0 2.5 1.1216666666666661 2.5 2.5s-1.1216666666666626 2.5000000000000036-2.4999999999999964 2.5000000000000036c-0.2950000000000017 0-0.5733333333333341-0.06666666666666643-0.8333333333333321-0.16166666666666707v-1.504999999999999c0-0.8666666666666671-0.673333333333332-1.5616666666666674-1.5216666666666683-1.6366666666666667 0.3383333333333347-0.9833333333333343 1.2600000000000016-1.6966666666666672 2.3550000000000004-1.6966666666666672z m-10.833333333333329 2.5000000000000036c0-1.3783333333333339 1.1216666666666661-2.5 2.5-2.5 1.0950000000000006 0 2.0166666666666657 0.7133333333333329 2.3550000000000004 1.6966666666666672-0.8499999999999996 0.07499999999999929-1.5216666666666683 0.7666666666666657-1.5216666666666683 1.6366666666666667v1.5050000000000008c-0.2599999999999998 0.09499999999999886-0.538333333333334 0.1616666666666653-0.8333333333333321 0.1616666666666653-1.3783333333333339 0-2.5-1.1216666666666661-2.5-2.5z m3.333333333333332 5.833333333333334v3.333333333333332h-8.333333333333332v-3.333333333333332h8.333333333333332z m-5 16.666666666666668c-0.9166666666666661 0-1.666666666666666-0.75-1.666666666666666-1.6666666666666679v-10h6.666666666666666v11.666666666666668h-5z m6.666666666666668 0v-11.666666666666668h3.333333333333332v11.666666666666668h-3.333333333333332z m10 0h-5v-11.666666666666668h6.666666666666668v10c0 0.9166666666666679-0.75 1.6666666666666679-1.6666666666666679 1.6666666666666679z' })
                )
            );
        }
    }]);

    return TiGift;
}(React.Component);

exports.default = TiGift;
module.exports = exports['default'];