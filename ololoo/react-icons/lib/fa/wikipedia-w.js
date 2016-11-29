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

var FaWikipediaW = function (_React$Component) {
    _inherits(FaWikipediaW, _React$Component);

    function FaWikipediaW() {
        _classCallCheck(this, FaWikipediaW);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaWikipediaW).apply(this, arguments));
    }

    _createClass(FaWikipediaW, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm25.93777777777778 32.9l-5.122222222222224-12.066666666666666q-0.43333333333333357 0.8511111111111127-2.7511111111111113 5.303333333333331t-3.446666666666667 6.762222222222221q-0.017777777777777004 0.01666666666666572-0.47777777777777786 0.007777777777775441t-0.46000000000000085-0.025555555555555998q-1.4222222222222225-3.3511111111111127-4.435555555555556-10.191111111111113t-4.505555555555553-10.345555555555546q-0.36444444444444457-0.8666666666666671-1.155555555555556-1.8666666666666671t-1.794444444444444-1.7444444444444454-1.7733333333333334-0.7466666666666644q1.214306433183765e-17-0.08666666666666689-0.008888888888888877-0.41666666666666696t-0.006666666666666668-0.47000000000000064h10.120000000000001v0.8688888888888888q-0.6777777777777771 0.033333333333333215-1.3800000000000008 0.27777777777777857t-1.155555555555556 0.7466666666666661-0.1722222222222225 1.1111111111111107q0.45222222222222186 1.0244444444444447 3.7600000000000007 8.663333333333336t4.08888888888889 9.375555555555557q0.5377777777777784-1.0588888888888874 2.431111111111111-4.626666666666665t2.2744444444444447-4.296666666666667q-0.3311111111111096-0.6777777777777771-2.18888888888889-4.877777777777776t-2.3611111111111107-5.122222222222224q-0.6600000000000001-1.1977777777777785-3.488888888888889-1.2333333333333334v-0.8666666666666663l8.905555555555557 0.017777777777777892v0.815555555555556q-1.0422222222222217 0.033333333333333215-1.6222222222222236 0.43333333333333357t-0.2177777777777763 1.1999999999999993q0.5733333333333341 1.2144444444444442 1.5111111111111128 3.2888888888888896t1.492222222222221 3.2555555555555546q1.9111111111111114-3.7155555555555555 3.003333333333334-6.302222222222223 0.41666666666666785-0.9555555555555557-0.173333333333332-1.3800000000000008t-2.2399999999999984-0.45999999999999996q0.017777777777777004-0.12222222222222268 0.017777777777777004-0.43555555555555525v-0.41666666666666696q1.1111111111111107 0 2.960000000000001-0.008888888888888502t3.124444444444439-0.01666666666667105 1.6055555555555543-0.011111111111111072v0.8522222222222222q-1.0777777777777793 0.033333333333333215-2.0666666666666664 0.5733333333333333t-1.56111111111111 1.4077777777777793l-3.6977777777777767 7.6722222222222225q0.2255555555555553 0.5733333333333341 2.2133333333333347 5.033333333333335t2.108888888888888 4.757777777777779l7.6555555555555586-17.65555555555556q-0.24222222222222456-0.6611111111111114-0.8577777777777769-1.086666666666666t-1.1288888888888877-0.5477777777777781-0.9633333333333347-0.13888888888888928v-0.8666666666666671l7.985555555555553 0.068888888888889 0.017777777777780557 0.033333333333333215-0.017777777777780557 0.7666666666666666q-2.413333333333334 0.06888888888888811-3.488888888888887 2.5166666666666666-9.133333333333333 21.11111111111111-9.705555555555556 22.411111111111115h-0.852222222222224z' })
                )
            );
        }
    }]);

    return FaWikipediaW;
}(React.Component);

exports.default = FaWikipediaW;
module.exports = exports['default'];