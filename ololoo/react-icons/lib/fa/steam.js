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

var FaSteam = function (_React$Component) {
    _inherits(FaSteam, _React$Component);

    function FaSteam() {
        _classCallCheck(this, FaSteam);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaSteam).apply(this, arguments));
    }

    _createClass(FaSteam, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35.31428571428572 12.991428571428571q0 2.2542857142857144-1.597142857142856 3.8500000000000014t-3.8500000000000014 1.5942857142857143-3.8500000000000014-1.595714285714287-1.595714285714287-3.8514285714285723 1.595714285714287-3.8457142857142834 3.8500000000000014-1.5971428571428579 3.8500000000000014 1.5971428571428579 1.595714285714287 3.8485714285714288z m-17.19 16.561428571428575q0-2.321428571428573-1.62857142857143-3.951428571428572t-3.952857142857143-1.629999999999999q-0.5999999999999996 0-1.2042857142857137 0.13428571428571345l2.321428571428571 0.937142857142856q1.718571428571428 0.6914285714285704 2.442857142857143 2.3771428571428572t0.034285714285715585 3.3814285714285717q-0.6914285714285722 1.7199999999999989-2.388571428571428 2.434285714285714t-3.3928571428571423 0.022857142857141355q-0.47142857142857153-0.1785714285714306-1.3857142857142861-0.5471428571428589t-1.3614285714285712-0.5471428571428589q0.7142857142857144 1.3400000000000034 2.031428571428571 2.154285714285713t2.9000000000000004 0.8142857142857167q2.321428571428571 0 3.951428571428572-1.6285714285714263t1.62857142857143-3.952857142857141z m18.527142857142852-16.53857142857143q0-2.8142857142857167-1.9971428571428547-4.811428571428573t-4.811428571428568-1.9971428571428564q-2.8328571428571436 0-4.831428571428571 1.9971428571428564t-1.9971428571428618 4.811428571428571q0 2.8328571428571436 1.9971428571428582 4.8199999999999985t4.832857142857144 1.985714285714284q2.814285714285713 0 4.811428571428568-1.985714285714284t1.9971428571428547-4.821428571428571z m3.348571428571425-1.7763568394002505e-15q0 4.217142857142859-2.979999999999997 7.185714285714285t-7.175714285714285 2.9685714285714297l-9.752857142857145 7.120000000000001q-0.2671428571428578 2.8800000000000026-2.4328571428571415 4.865714285714283t-5.111428571428572 1.9857142857142875q-2.6999999999999993 0-4.777142857142857-1.6957142857142884t-2.6342857142857143-4.285714285714285l-5.135714285714281-2.05142857142857v-9.57857142857143l8.682857142857143 3.505714285714287q1.7628571428571433-1.071428571428573 3.8614285714285703-1.071428571428573 0.2914285714285718 0 0.7828571428571429 0.04285714285714448l6.34-9.082857142857142q0.04285714285714448-4.174285714285714 3.024285714285714-7.12t7.151428571428575-2.945714285714288q4.199999999999999 0 7.177142857142858 2.978571428571428t2.979999999999997 7.175714285714287z' })
                )
            );
        }
    }]);

    return FaSteam;
}(React.Component);

exports.default = FaSteam;
module.exports = exports['default'];