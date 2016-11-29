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

var FaMarsStrokeH = function (_React$Component) {
    _inherits(FaMarsStrokeH, _React$Component);

    function FaMarsStrokeH() {
        _classCallCheck(this, FaMarsStrokeH);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaMarsStrokeH).apply(this, arguments));
    }

    _createClass(FaMarsStrokeH, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm39.604 20.396q0.3960000000000008 0.39599999999999724 0.3960000000000008 0.9373333333333314t-0.3960000000000008 0.9373333333333349l-6.12533333333333 6.125333333333334q-0.18933333333333024 0.2079999999999984-0.47066666666666634 0.2079999999999984t-0.4693333333333314-0.2079999999999984l-0.9373333333333349-0.9373333333333349q-0.2079999999999984-0.18666666666666742-0.2079999999999984-0.46933333333333493t0.2079999999999984-0.46933333333333493l3.8533333333333317-3.8533333333333317h-6.121333333333336v4.666666666666664q0 0.29066666666666663-0.1893333333333338 0.47733333333333405t-0.4800000000000004 0.18666666666666742h-1.3333333333333321q-0.29066666666666663 0-0.47733333333333405-0.18666666666666742t-0.18666666666666742-0.4800000000000004v-4.663999999999998h-2.751999999999999q-0.5 4.522666666666666-3.9066666666666663 7.594666666666665t-8.010666666666667 3.071999999999999q-3.4799999999999986 0-6.373333333333333-1.8133333333333326t-4.419999999999999-4.915999999999997-1.1239999999999997-6.643999999999998q0.31199999999999994-2.7733333333333334 1.8333333333333333-5.116t3.9173333333333336-3.79066666666667 5.1866666666666665-1.6799999999999997q3.230666666666666-0.24799999999999933 6.084 1.0933333333333337t4.666666666666668 3.8759999999999994 2.1466666666666647 5.6573333333333355h2.7493333333333325v-4.666666666666666q0-0.293333333333333 0.18666666666666742-0.4800000000000004t0.4800000000000004-0.18666666666666742h1.3333333333333321q0.293333333333333 0 0.4800000000000004 0.18666666666666742t0.18666666666666742 0.4800000000000004v4.666666666666666h6.125333333333337l-3.8533333333333317-3.8560000000000016q-0.20933333333333337-0.18666666666666742-0.20933333333333337-0.46933333333333316t0.2079999999999984-0.46933333333333316l0.9386666666666699-0.9373333333333331q0.18666666666666742-0.206666666666667 0.4693333333333314-0.206666666666667t0.4693333333333314 0.20800000000000018z m-27.604 10.270666666666664q3.8533333333333335 0 6.593333333333334-2.740000000000002t2.7399999999999984-6.59333333333333-2.7399999999999984-6.593333333333334-6.593333333333334-2.7399999999999984-6.593333333333334 2.74-2.7399999999999998 6.593333333333332 2.7399999999999998 6.593333333333334 6.593333333333334 2.7399999999999984z' })
                )
            );
        }
    }]);

    return FaMarsStrokeH;
}(React.Component);

exports.default = FaMarsStrokeH;
module.exports = exports['default'];