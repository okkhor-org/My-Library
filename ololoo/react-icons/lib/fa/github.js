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

var FaGithub = function (_React$Component) {
    _inherits(FaGithub, _React$Component);

    function FaGithub() {
        _classCallCheck(this, FaGithub);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaGithub).apply(this, arguments));
    }

    _createClass(FaGithub, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm37.142857142857146 20q0 5.602857142857143-3.2714285714285722 10.07857142857143t-8.447142857142858 6.194285714285712q-0.6028571428571432 0.11428571428571388-0.8814285714285717-0.15428571428571303t-0.27857142857142847-0.6714285714285708v-4.708571428571428q0-2.1657142857142873-1.1600000000000001-3.171428571428571 1.2714285714285722-0.13285714285714434 2.28857142857143-0.3999999999999986t2.1000000000000014-0.8714285714285701 1.807142857142857-1.4828571428571422 1.1828571428571415-2.3428571428571416 0.4571428571428555-3.361428571428572q0-2.6999999999999993-1.7628571428571433-4.600000000000001 0.8257142857142874-2.0285714285714285-0.17857142857142705-4.551428571428572-0.6285714285714299-0.20285714285714285-1.8099999999999987 0.242857142857142t-2.0528571428571425 0.9857142857142858l-0.8485714285714288 0.5342857142857138q-2.0757142857142874-0.5800000000000001-4.285714285714285-0.5800000000000001t-4.285714285714285 0.5800000000000001q-0.35714285714285765-0.24571428571428555-0.9485714285714284-0.6028571428571432t-1.8628571428571465-0.860000000000003-1.9185714285714308-0.29999999999999893q-0.9857142857142858 2.5199999999999996-0.15714285714285658 4.549999999999999-1.7628571428571433 1.8971428571428568-1.7628571428571433 4.600000000000001 0 1.8957142857142841 0.4571428571428573 3.347142857142856t1.1714285714285708 2.3428571428571416 1.7971428571428572 1.4957142857142856 2.0999999999999996 0.8714285714285701 2.2857142857142865 0.3999999999999986q-0.8914285714285715 0.8028571428571425-1.0928571428571434 2.3000000000000007-0.47142857142857153 0.22142857142857153-1.0057142857142853 0.33285714285714363t-1.2714285714285722 0.1114285714285721-1.4628571428571426-0.4800000000000004-1.2385714285714293-1.3957142857142841q-0.4242857142857144-0.7142857142857153-1.0828571428571436-1.1600000000000001t-1.104285714285714-0.5357142857142847l-0.4471428571428575-0.0671428571428585q-0.4671428571428571 0-0.6457142857142859 0.10000000000000142t-0.11142857142857121 0.25714285714285623 0.20000000000000018 0.31428571428571317 0.2914285714285718 0.2671428571428578l0.15714285714285658 0.1114285714285721q0.4900000000000002 0.2228571428571442 0.9714285714285715 0.8485714285714288t0.6999999999999993 1.1371428571428588l0.2242857142857151 0.5142857142857125q0.2914285714285718 0.8471428571428561 0.9857142857142858 1.37142857142857t1.4942857142857147 0.6714285714285744 1.5514285714285716 0.15428571428571303 1.2385714285714293-0.07857142857142918l0.5114285714285707-0.09142857142857252q0 0.8485714285714252 0.011428571428570677 1.9857142857142875t0.011428571428570677 1.2071428571428555q0 0.4028571428571439-0.28999999999999915 0.6714285714285708t-0.8914285714285715 0.15714285714285836q-5.178571428571429-1.7199999999999989-8.448571428571428-6.195714285714285t-3.2714285714285714-10.07857142857143q0-4.6657142857142855 2.3-8.604285714285714t6.238571428571431-6.235714285714284 8.6-2.3000000000000003 8.604285714285716 2.3000000000000003 6.238571428571426 6.2385714285714275 2.299999999999997 8.604285714285712z' })
                )
            );
        }
    }]);

    return FaGithub;
}(React.Component);

exports.default = FaGithub;
module.exports = exports['default'];