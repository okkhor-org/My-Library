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

var FaEyeSlash = function (_React$Component) {
    _inherits(FaEyeSlash, _React$Component);

    function FaEyeSlash() {
        _classCallCheck(this, FaEyeSlash);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaEyeSlash).apply(this, arguments));
    }

    _createClass(FaEyeSlash, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm12.38857142857143 29.8l1.742857142857142-3.1485714285714295q-1.942857142857143-1.4057142857142857-3.0371428571428574-3.548571428571428t-1.0942857142857143-4.53142857142857q0-2.6999999999999993 1.361428571428572-5.022857142857143-5.111428571428572 2.6114285714285703-8.504285714285714 7.880000000000001 3.7285714285714278 5.75714285714286 9.531428571428572 8.371428571428574z m8.682857142857143-16.942857142857143q0-0.4471428571428575-0.31428571428571317-0.757142857142858t-0.7571428571428598-0.31428571428571317q-2.789999999999999 0-4.788571428571428 1.9971428571428564t-1.9971428571428564 4.78857142857143q0 0.4471428571428575 0.31428571428571495 0.7571428571428562t0.757142857142858 0.31428571428571317 0.757142857142858-0.31428571428571317 0.31428571428571495-0.7571428571428562q0-1.9200000000000017 1.361428571428572-3.281428571428572t3.2814285714285667-1.361428571428572q0.4471428571428575 0 0.7571428571428562-0.31428571428571495t0.31428571428571317-0.757142857142858z m8.102857142857143-4.262857142857143q0 0.15714285714285658-0.022857142857141355 0.1999999999999993-2.3428571428571416 4.199999999999999-7.03142857142857 12.635714285714286t-7.0528571428571425 12.657142857142858l-1.0942857142857143 1.9857142857142875q-0.22142857142857153 0.3571428571428541-0.6242857142857137 0.3571428571428541-0.2671428571428578 0-2.991428571428571-1.5614285714285714-0.357142857142863-0.22571428571428243-0.357142857142863-0.6257142857142881 0-0.2685714285714269 0.9814285714285713-1.942857142857143-3.1914285714285713-1.451428571428572-5.881428571428572-3.861428571428572t-4.654285714285714-5.467142857142857q-0.44571428571428573-0.6942857142857122-0.44571428571428573-1.5428571428571374t0.44571428571428573-1.53857142857143q3.4142857142857146-5.2457142857142856 8.482857142857142-8.281428571428572t11.071428571428573-3.0371428571428574q1.985714285714284 0 4.017142857142858 0.38142857142857167l1.2057142857142864-2.1657142857142855q0.2228571428571442-0.35714285714285676 0.6257142857142846-0.35714285714285676 0.1114285714285721 0 0.3999999999999986 0.13571428571428612t0.6928571428571431 0.3457142857142861 0.735714285714284 0.4142857142857146 0.7028571428571411 0.41142857142857103 0.43571428571428683 0.2571428571428571q0.35714285714285765 0.2228571428571433 0.35714285714285765 0.6028571428571423z m0.8257142857142838 9.977142857142859q0 3.102857142857143-1.7628571428571433 5.657142857142858t-4.665714285714284 3.671428571428571l6.25-11.204285714285714q0.17857142857142705 1.0042857142857144 0.17857142857142705 1.8757142857142846z m10 2.8571428571428577q0 0.7814285714285703-0.4471428571428575 1.5399999999999991-0.8714285714285737 1.428571428571427-2.432857142857145 3.2371428571428567-3.348571428571425 3.84-7.757142857142856 5.960000000000001t-9.362857142857141 2.1199999999999974l1.6499999999999986-2.9471428571428575q4.732857142857142-0.3999999999999986 8.761428571428574-3.057142857142857t6.728571428571428-6.854285714285716q-2.565714285714286-3.997142857142858-6.2928571428571445-6.564285714285713l1.4057142857142821-2.5q2.1199999999999974 1.4285714285714288 4.074285714285715 3.4142857142857146t3.2242857142857133 4.10857142857143q0.44857142857143373 0.7614285714285707 0.44857142857143373 1.5428571428571445z' })
                )
            );
        }
    }]);

    return FaEyeSlash;
}(React.Component);

exports.default = FaEyeSlash;
module.exports = exports['default'];