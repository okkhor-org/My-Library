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

var FaExclamationTriangle = function (_React$Component) {
    _inherits(FaExclamationTriangle, _React$Component);

    function FaExclamationTriangle() {
        _classCallCheck(this, FaExclamationTriangle);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaExclamationTriangle).apply(this, arguments));
    }

    _createClass(FaExclamationTriangle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm22.857142857142858 30.691428571428574v-4.242857142857144q0-0.3114285714285714-0.21142857142856997-0.5228571428571414t-0.5028571428571453-0.21142857142857352h-4.285714285714285q-0.28999999999999915 0-0.5028571428571418 0.21142857142856997t-0.21142857142856997 0.524285714285714v4.242857142857144q0 0.3114285714285714 0.21142857142856997 0.5228571428571414t0.5028571428571418 0.2142857142857153h4.285714285714285q0.28999999999999915 0 0.5028571428571418-0.2142857142857153t0.21142857142856997-0.5228571428571414z m-0.04285714285714448-8.347142857142856l0.3999999999999986-10.242857142857144q0-0.2685714285714287-0.2228571428571442-0.42571428571428527-0.2914285714285647-0.24714285714286-0.5342857142857085-0.24714285714286h-4.914285714285718q-0.24571428571428555 0-0.5357142857142847 0.24571428571428555-0.2228571428571442 0.15714285714285658-0.2228571428571442 0.468571428571428l0.38142857142857167 10.2q0 0.2242857142857133 0.2228571428571442 0.3714285714285701t0.5357142857142847 0.14285714285714235h4.12857142857143q0.31428571428571317 0 0.5257142857142867-0.14285714285714235t0.23428571428571487-0.3714285714285701z m-0.31428571428571317-20.847142857142856l17.14285714285714 31.42857142857143q0.7814285714285703 1.4057142857142821-0.04285714285714448 2.8142857142857167-0.38142857142857167 0.6457142857142841-1.0399999999999991 1.0257142857142867t-1.4171428571428493 0.3771428571428501h-34.28571428571429q-0.757142857142854 0-1.4171428571428542-0.37857142857142634t-1.0385714285714285-1.028571428571425q-0.8242857142857143-1.404285714285713-0.04285714285714287-2.8114285714285714l17.142857142857142-31.42857142857143q0.379999999999999-0.6914285714285714 1.048571428571428-1.0942857142857143t1.4499999999999993-0.40142857142857835 1.451428571428572 0.4 1.048571428571428 1.095714285714286z' })
                )
            );
        }
    }]);

    return FaExclamationTriangle;
}(React.Component);

exports.default = FaExclamationTriangle;
module.exports = exports['default'];