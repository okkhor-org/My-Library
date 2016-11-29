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

var FaPhone = function (_React$Component) {
    _inherits(FaPhone, _React$Component);

    function FaPhone() {
        _classCallCheck(this, FaPhone);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaPhone).apply(this, arguments));
    }

    _createClass(FaPhone, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35.714285714285715 27.67857142857143q0 0.6028571428571432-0.2228571428571442 1.5742857142857147t-0.46857142857142975 1.5285714285714285q-0.46857142857142975 1.1142857142857139-2.722857142857144 2.3657142857142865-2.1000000000000014 1.1385714285714315-4.151428571428571 1.1385714285714315-0.6028571428571432 0-1.1714285714285708-0.07857142857142918t-1.282857142857143-0.278571428571432-1.0599999999999987-0.32428571428571473-1.2385714285714293-0.4571428571428555-1.0942857142857143-0.3999999999999986q-2.185714285714287-0.7828571428571429-3.904285714285713-1.8542857142857159-2.8571428571428577-1.7628571428571433-5.904285714285715-4.810000000000002t-4.8100000000000005-5.904285714285713q-1.0714285714285712-1.7185714285714297-1.8528571428571432-3.9057142857142857-0.06714285714285673-0.1999999999999993-0.40000000000000036-1.0928571428571434t-0.4571428571428573-1.2385714285714293-0.3257142857142856-1.0600000000000005-0.27857142857142847-1.282857142857143-0.07857142857142829-1.1714285714285708q0-2.0528571428571425 1.1385714285714288-4.151428571428572 1.248571428571429-2.2542857142857144 2.364285714285714-2.722857142857143 0.5571428571428569-0.24571428571428555 1.5285714285714285-0.4685714285714284t1.5742857142857147-0.22285714285714286q0.31428571428571495 0 0.468571428571428 0.06714285714285717 0.40000000000000036 0.132857142857143 1.1828571428571433 1.6957142857142857 0.24571428571428555 0.4242857142857144 0.6714285714285708 1.2057142857142855t0.7799999999999994 1.418571428571429 0.6899999999999995 1.194285714285714q0.06714285714285673 0.08857142857142897 0.39000000000000057 0.5571428571428569t0.4800000000000004 0.7928571428571427 0.15714285714285658 0.6357142857142861q0 0.4471428571428575-0.637142857142857 1.1142857142857139t-1.3857142857142861 1.2285714285714295-1.3828571428571426 1.1828571428571433-0.6357142857142861 1.0285714285714285q0 0.1999999999999993 0.1114285714285721 0.5t0.19142857142857217 0.4571428571428573 0.31428571428571495 0.5371428571428574 0.257142857142858 0.4242857142857126q1.694285714285714 3.0600000000000023 3.8800000000000026 5.247142857142858t5.2457142857142856 3.885714285714286q0.04285714285714448 0.02142857142857224 0.4242857142857126 0.25714285714285623t0.5371428571428574 0.3114285714285714 0.4571428571428555 0.1914285714285704 0.5028571428571418 0.1114285714285721q0.3999999999999986 0 1.0285714285714285-0.6357142857142861t1.1814285714285724-1.3857142857142861 1.2285714285714278-1.3828571428571443 1.1142857142857139-0.6371428571428588q0.31428571428571317 0 0.6357142857142861 0.15714285714285836t0.7928571428571445 0.47857142857142776 0.5571428571428569 0.3885714285714279q0.5599999999999987 0.33428571428571274 1.1957142857142848 0.6914285714285704t1.4171428571428564 0.7814285714285703 1.2057142857142864 0.6714285714285708q1.5628571428571405 0.7800000000000011 1.6971428571428575 1.1814285714285724 0.06714285714285495 0.15714285714285836 0.06714285714285495 0.46857142857142975z' })
                )
            );
        }
    }]);

    return FaPhone;
}(React.Component);

exports.default = FaPhone;
module.exports = exports['default'];