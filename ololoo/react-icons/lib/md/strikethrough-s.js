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

var MdStrikethroughS = function (_React$Component) {
    _inherits(MdStrikethroughS, _React$Component);

    function MdStrikethroughS() {
        _classCallCheck(this, MdStrikethroughS);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdStrikethroughS).apply(this, arguments));
    }

    _createClass(MdStrikethroughS, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm15.625 21.875q0 4.216666666666669 4.843333333333334 4.216666666666669 3.8299999999999983 0 3.8299999999999983-2.8116666666666674 0-1.25-0.5083333333333329-1.7966666666666669t-1.836666666666666-1.1716666666666669q-0.07666666666666799 0-0.2716666666666683-0.07833333333333314t-0.3500000000000014-0.1566666666666663-0.31666666666666643-0.07833333333333314h-16.014999999999997v-3.361666666666668h30v3.3633333333333333h-6.486666666666665q0 0.07666666666666799 0.11666666666666714 0.2716666666666683t0.19500000000000028 0.27333333333333343q0.5466666666666669 1.3283333333333331 0.5466666666666669 2.7333333333333343 0 4.766666666666666-5.233333333333334 6.25-1.6416666666666657 0.46999999999999886-3.594999999999999 0.46999999999999886-1.25 0-2.421666666666667-0.23666666666666814-2.8133333333333326-0.5466666666666669-4.375-1.716666666666665-3.046666666666667-2.2666666666666657-3.046666666666667-6.173333333333332h4.921666666666667z m8.671666666666667-9.375q0-3.5166666666666657-3.9833333333333343-3.5166666666666657-2.8166666666666664 0-3.673333333333332 1.7200000000000006-0.23333333333333428 0.4666666666666668-0.23333333333333428 1.0933333333333337 0 1.1716666666666669 1.25 2.033333333333333 1.25 0.7799999999999994 2.3416666666666686 1.17h-7.658333333333335q0-0.07833333333333314-0.1566666666666663-0.19500000000000028t-0.15499999999999936-0.19500000000000028q-0.625-1.0166666666666675-0.625-2.8133333333333344 0-2.8900000000000006 2.5-4.921666666666667 2.656666666666668-1.875 6.4833333333333325-1.875 4.141666666666666 0 6.486666666666668 2.1100000000000003 2.4216666666666704 2.1900000000000004 2.4216666666666704 5.39h-5z' })
                )
            );
        }
    }]);

    return MdStrikethroughS;
}(React.Component);

exports.default = MdStrikethroughS;
module.exports = exports['default'];