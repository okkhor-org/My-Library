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

var FaVenusDouble = function (_React$Component) {
    _inherits(FaVenusDouble, _React$Component);

    function FaVenusDouble() {
        _classCallCheck(this, FaVenusDouble);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaVenusDouble).apply(this, arguments));
    }

    _createClass(FaVenusDouble, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm39.957142857142856 11.80857142857143q0.2657142857142887 3.460000000000001-1.1714285714285708 6.517142857142858t-4.152857142857144 5-6.061428571428568 2.299999999999997v5.800000000000001h4.9999999999999964q0.3142857142857167 0 0.5142857142857125 0.20285714285714107t0.20000000000000284 0.5142857142857125v1.4285714285714306q0 0.3114285714285714-0.20000000000000284 0.5114285714285742t-0.5142857142857125 0.20000000000000284h-4.9999999999999964v5q0 0.3142857142857167-0.1999999999999993 0.5142857142857125t-0.5142857142857125 0.20000000000000284h-1.428571428571427q-0.3114285714285714 0-0.5114285714285707-0.20000000000000284t-0.1999999999999993-0.5142857142857125v-4.997142857142862h-11.428571428571429v5q0 0.3142857142857167-0.20285714285714285 0.5142857142857125t-0.5142857142857142 0.20000000000000284h-1.4285714285714288q-0.3114285714285714 0-0.5114285714285707-0.20000000000000284t-0.1999999999999993-0.5142857142857125v-5h-5.002857142857151q-0.31428571428571406 0-0.5142857142857142-0.20000000000000284t-0.20000000000000018-0.5142857142857125v-1.4285714285714306q0-0.3114285714285714 0.20000000000000018-0.5114285714285707t0.5142857142857142-0.1999999999999993h5v-5.804285714285715q-3.3499999999999996-0.35714285714285765-6.061428571428572-2.3000000000000007t-4.152857142857143-5-1.1714285714285715-6.514285714285714q0.38-4.6000000000000005 3.6714285714285717-7.957142857142857t7.871428571428572-3.7899999999999956q4.600000000000001-0.4671428571428573 8.41714285714286 2.1 3.8171428571428585-2.567142857142857 8.414285714285715-2.1 4.5771428571428565 0.4257142857142857 7.87142857142857 3.7857142857142856t3.671428571428571 7.957142857142858z m-19.957142857142856 8.034285714285716q2.8571428571428577-2.9228571428571435 2.8571428571428577-6.985714285714286t-2.8571428571428577-6.985714285714286q-2.8571428571428577 2.921428571428569-2.8571428571428577 6.985714285714284t2.8571428571428577 6.985714285714284z m-7.142857142857142 3.0142857142857125q2.5671428571428567 0 4.8657142857142865-1.2714285714285722-3.4371428571428577-3.685714285714287-3.4371428571428577-8.728571428571428 0-5 3.4371428571428577-8.72857142857143-2.3000000000000025-1.271428571428571-4.8657142857142865-1.271428571428571-4.128571428571428 0-7.064285714285715 2.9357142857142855t-2.9357142857142855 7.064285714285715 2.9357142857142855 7.064285714285713 7.064285714285715 2.935714285714287z m12.857142857142858 8.571428571428573v-5.8028571428571425q-3.057142857142857-0.33428571428571274-5.714285714285715-2.1000000000000014-2.6571428571428584 1.764285714285716-5.714285714285715 2.1000000000000014v5.8028571428571425h11.42857142857143z m1.428571428571427-8.57142857142857q4.12857142857143 0 7.064285714285713-2.935714285714287t2.9357142857142904-7.064285714285717-2.9357142857142833-7.064285714285715-7.06428571428572-2.9357142857142855q-2.5671428571428585 0-4.8657142857142865 1.2714285714285718 3.4371428571428595 3.7285714285714286 3.4371428571428595 8.728571428571428 0 5.042857142857141-3.437142857142856 8.728571428571431 2.3000000000000007 1.2714285714285687 4.865714285714283 1.2714285714285687z' })
                )
            );
        }
    }]);

    return FaVenusDouble;
}(React.Component);

exports.default = FaVenusDouble;
module.exports = exports['default'];