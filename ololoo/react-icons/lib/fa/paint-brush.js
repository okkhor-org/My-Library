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

var FaPaintBrush = function (_React$Component) {
    _inherits(FaPaintBrush, _React$Component);

    function FaPaintBrush() {
        _classCallCheck(this, FaPaintBrush);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaPaintBrush).apply(this, arguments));
    }

    _createClass(FaPaintBrush, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm36.048571428571435 0q1.5628571428571405 0 2.7342857142857113 1.0385714285714285t1.1714285714285708 2.6000000000000005q0 1.4057142857142857-1.0042857142857144 3.371428571428571-7.41 14.038571428571428-10.380000000000003 16.785714285714285-2.1671428571428564 2.0285714285714285-4.867142857142859 2.0285714285714285-2.814285714285713 0-4.832857142857144-2.062857142857144t-2.0199999999999996-4.899999999999999q0-2.8571428571428577 2.0528571428571425-4.732857142857142l14.242857142857144-12.924285714285716q1.3142857142857167-1.2042857142857102 2.8999999999999986-1.2042857142857102z m-20.29142857142858 23.08q0.8714285714285701 1.6971428571428575 2.37857142857143 2.8999999999999986t3.3599999999999994 1.6999999999999993l0.022857142857141355 1.5828571428571436q0.08999999999999986 4.754285714285718-2.8900000000000006 7.745714285714289t-7.778571428571427 2.991428571428571q-2.7457142857142856 0-4.865714285714286-1.03857142857143t-3.4057142857142852-2.847142857142856-1.9300000000000002-4.0814285714285745-0.6485714285714286-4.911428571428569q0.15714285714285714 0.1114285714285721 0.9171428571428571 0.6714285714285708t1.3857142857142857 0.9914285714285711 1.3142857142857145 0.8142857142857132 1.0285714285714285 0.3785714285714299q0.9142857142857146 0 1.2285714285714286-0.8257142857142874 0.5571428571428569-1.4714285714285715 1.2814285714285711-2.5114285714285707t1.5500000000000007-1.6999999999999993 1.9642857142857153-1.057142857142857 2.3000000000000007-0.571428571428573 2.7885714285714283-0.2328571428571422z' })
                )
            );
        }
    }]);

    return FaPaintBrush;
}(React.Component);

exports.default = FaPaintBrush;
module.exports = exports['default'];