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

var FaGroup = function (_React$Component) {
    _inherits(FaGroup, _React$Component);

    function FaGroup() {
        _classCallCheck(this, FaGroup);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaGroup).apply(this, arguments));
    }

    _createClass(FaGroup, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm12.354666666666667 20q-3.373333333333333 0.1039999999999992-5.52 2.666666666666668h-2.794666666666668q-1.7066666666666666 0-2.873333333333333-0.8440000000000012t-1.166666666666666-2.469333333333335q0-7.353333333333332 2.5826666666666664-7.353333333333332 0.1253333333333333 0 0.9066666666666667 0.43599999999999994t2.0306666666666664 0.8853333333333335 2.4800000000000004 0.4493333333333318q1.3946666666666658 0 2.769333333333332-0.4800000000000004-0.10266666666666602 0.7733333333333352-0.10266666666666602 1.3760000000000012 0 2.8933333333333326 1.6866666666666656 5.333333333333334z m22.311999999999998 13.270666666666664q0 2.5-1.5200000000000031 3.9466666666666654t-4.043999999999993 1.4493333333333354h-18.206666666666667q-2.5199999999999996 0-4.039999999999999-1.4480000000000004t-1.5226666666666686-3.9466666666666654q0-1.1066666666666691 0.07333333333333325-2.1573333333333338t0.293333333333333-2.270666666666667 0.5506666666666664-2.2600000000000016 0.8959999999999999-2.030666666666665 1.293333333333334-1.6879999999999988 1.7799999999999994-1.1159999999999997 2.3226666666666667-0.41600000000000037q0.20800000000000018 0 0.8960000000000008 0.4480000000000004t1.5199999999999996 1 2.229333333333333 1 2.8133333333333326 0.4480000000000004 2.810666666666666-0.4480000000000004 2.229333333333333-1 1.5199999999999996-1 0.8973333333333322-0.4480000000000004q1.270666666666667 0 2.3226666666666667 0.4173333333333318t1.7813333333333325 1.1146666666666682 1.293333333333333 1.6866666666666674 0.8933333333333309 2.030666666666665 0.5533333333333346 2.2600000000000016 0.29333333333333655 2.270666666666667 0.07200000000000273 2.1560000000000024z m-21.333333333333332-26.604q0 2.208000000000002-1.5626666666666669 3.770666666666667t-3.7706666666666653 1.5626666666666686-3.770666666666667-1.5626666666666669-1.5626666666666664-3.770666666666667 1.5626666666666664-3.770666666666666 3.770666666666667-1.5626666666666666 3.770666666666667 1.5626666666666666 1.562666666666665 3.770666666666666z m14.666666666666668 8.000000000000002q0 3.3119999999999994-2.344000000000001 5.656000000000001t-5.655999999999999 2.3439999999999976-5.655999999999999-2.344000000000001-2.344000000000001-5.655999999999997 2.3439999999999994-5.656000000000001 5.656000000000001-2.3439999999999994 5.655999999999999 2.3439999999999994 2.344000000000001 5.656000000000001z m12 4.688000000000001q0 1.6266666666666652-1.1666666666666643 2.4693333333333314t-2.873333333333342 0.8426666666666662h-2.7933333333333366q-2.1466666666666683-2.5599999999999987-5.52-2.666666666666668 1.6866666666666745-2.434666666666665 1.6866666666666745-5.33333333333333 0-0.602666666666666-0.1039999999999992-1.373333333333333 1.3733333333333348 0.4800000000000004 2.770666666666667 0.4800000000000004 1.2293333333333365 0 2.479999999999997-0.4493333333333336t2.0293333333333337-0.8853333333333335 0.9066666666666663-0.4399999999999995q2.584000000000003 0.0013333333333331865 2.584000000000003 7.358666666666666z m-2.6666666666666714-12.688q0 2.208-1.562666666666665 3.7706666666666653t-3.7706666666666635 1.5626666666666686-3.770666666666667-1.5626666666666669-1.5626666666666686-3.770666666666667 1.562666666666665-3.770666666666666 3.7706666666666706-1.5626666666666666 3.7706666666666635 1.5626666666666666 1.562666666666665 3.770666666666666z' })
                )
            );
        }
    }]);

    return FaGroup;
}(React.Component);

exports.default = FaGroup;
module.exports = exports['default'];