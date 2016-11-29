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

var MdPortableWifiOff = function (_React$Component) {
    _inherits(MdPortableWifiOff, _React$Component);

    function MdPortableWifiOff() {
        _classCallCheck(this, MdPortableWifiOff);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdPortableWifiOff).apply(this, arguments));
    }

    _createClass(MdPortableWifiOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm5.466666666666667 4.140000000000001l1.6416666666666666 1.7166666666666668 27.891666666666666 27.89333333333333-2.1116666666666646 2.1083333333333343-12.5-12.578333333333333h-0.07833333333333314l-0.3133333333333326 0.07833333333333314q-1.3283333333333331 0-2.3433333333333337-1.0166666666666657t-1.0166666666666693-2.3416666666666686l0.0799999999999983-0.3133333333333326-2.6566666666666663-2.6566666666666663q-0.7033333333333331 1.4066666666666663-0.7033333333333331 2.9666666666666686 0 3.8299999999999983 3.283333333333335 5.783333333333335l-1.6416666666666657 2.8900000000000006q-2.2666666666666675-1.3283333333333331-3.633333333333333-3.633333333333333t-1.365000000000002-5.036666666666672q0-2.969999999999999 1.5616666666666674-5.391666666666666l-2.3450000000000006-2.421666666666667q-2.575 3.5933333333333337-2.575 7.813333333333333 0 3.5933333333333337 1.796666666666666 6.68t4.843333333333334 4.883333333333333l-1.6400000000000006 2.8900000000000006q-3.8299999999999983-2.1866666666666674-6.058333333333332-6.053333333333335t-2.2233333333333336-8.399999999999999q0-5.783333333333335 3.4383333333333335-10.233333333333333l-3.44-3.5166666666666675z m14.533333333333333 2.5q-3.3599999999999994 0-6.25 1.5633333333333326l-2.421666666666667-2.419999999999999q3.905000000000001-2.4250000000000003 8.671666666666667-2.4250000000000003 6.875 0 11.758333333333333 4.883333333333333t4.883333333333333 11.758333333333333q0 4.766666666666666-2.421666666666667 8.673333333333332l-2.5-2.421666666666667q1.6400000000000006-3.0450000000000017 1.6400000000000006-6.25 0-5.466666666666667-3.9450000000000003-9.411666666666667t-9.415-3.9466666666666645z m9.296666666666667 17.11l-2.7333333333333343-2.7333333333333343q0.07666666666666799-0.31666666666666643 0.07666666666666799-1.0166666666666657 0-2.7333333333333343-1.9533333333333331-4.688333333333333t-4.686666666666667-1.9533333333333331q-0.7049999999999983 0-1.0166666666666657 0.07833333333333314l-2.7333333333333343-2.7333333333333343q1.7166666666666686-0.7050000000000001 3.75-0.7050000000000001 4.138333333333335 0 7.066666666666666 2.928333333333333t2.9333333333333336 7.073333333333334q0 2.030000000000001-0.7049999999999983 3.75z' })
                )
            );
        }
    }]);

    return MdPortableWifiOff;
}(React.Component);

exports.default = MdPortableWifiOff;
module.exports = exports['default'];