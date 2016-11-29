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

var FaFilePowerpointO = function (_React$Component) {
    _inherits(FaFilePowerpointO, _React$Component);

    function FaFilePowerpointO() {
        _classCallCheck(this, FaFilePowerpointO);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaFilePowerpointO).apply(this, arguments));
    }

    _createClass(FaFilePowerpointO, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35.62428571428572 8.482857142857142q0.6257142857142881 0.6257142857142863 1.0714285714285694 1.6971428571428575t0.4471428571428575 1.9628571428571426v25.71428571428572q0 0.894285714285715-0.6257142857142881 1.518571428571427t-1.5171428571428578 0.6242857142857119h-30q-0.8928571428571432 0-1.5171428571428573-0.6242857142857119t-0.6257142857142854-1.518571428571427v-35.714285714285715q0-0.890000000000003 0.6257142857142859-1.5142857142857173t1.517142857142857-0.6285714285714286h20q0.8928571428571423 0 1.9642857142857153 0.44857142857142857t1.6971428571428575 1.0714285714285714z m-9.910000000000004-5.447142857142857v8.392857142857142h8.392857142857146q-0.2228571428571442-0.647142857142855-0.4914285714285711-0.9142857142857128l-6.9857142857142875-6.988571428571429q-0.2671428571428578-0.2671428571428569-0.9142857142857146-0.49142857142857155z m8.57142857142857 34.10714285714286v-22.85714285714286h-9.285714285714285q-0.8928571428571423 1.7763568394002505e-15-1.5171428571428578-0.6257142857142846t-0.6257142857142846-1.5171428571428578v-9.285714285714285h-17.142857142857142v34.28571428571428h28.57142857142857z m-22.142857142857142-5.222857142857144v2.365714285714283h7.300000000000001v-2.3657142857142865h-2.0771428571428565v-3.7285714285714278h3.057142857142857q1.6999999999999993 0 2.635714285714286-0.33285714285714363 1.4971428571428582-0.5114285714285707 2.37857142857143-1.9400000000000013t0.8814285714285717-3.2571428571428562q0-1.8099999999999987-0.8257142857142838-3.1485714285714295t-2.232857142857142-1.942857142857143q-1.071428571428573-0.4228571428571435-2.8999999999999986-0.4228571428571435h-8.217142857142864v2.388571428571428h2.0528571428571425v12.388571428571428h-2.0528571428571425z m7.879999999999999-6.25h-2.6571428571428584v-5.9857142857142875h2.6799999999999997q1.1600000000000001 0 1.8528571428571432 0.4028571428571439 1.2485714285714273 0.7371428571428567 1.2485714285714273 2.5671428571428585 0 1.985714285714284-1.3857142857142861 2.677142857142858-0.6900000000000013 0.33428571428571274-1.7399999999999984 0.33428571428571274z' })
                )
            );
        }
    }]);

    return FaFilePowerpointO;
}(React.Component);

exports.default = FaFilePowerpointO;
module.exports = exports['default'];