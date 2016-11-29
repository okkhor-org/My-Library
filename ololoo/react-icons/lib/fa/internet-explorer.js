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

var FaInternetExplorer = function (_React$Component) {
    _inherits(FaInternetExplorer, _React$Component);

    function FaInternetExplorer() {
        _classCallCheck(this, FaInternetExplorer);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaInternetExplorer).apply(this, arguments));
    }

    _createClass(FaInternetExplorer, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm40 20.914285714285715q0 1.2514285714285727-0.15714285714285836 2.322857142857142h-25.68857142857143q0 3.2571428571428562 2.442857142857143 5.4571428571428555t5.748571428571431 2.1999999999999993q2.21142857142857 0 4.142857142857142-1.0399999999999991t3.0457142857142863-2.9142857142857146h9.442857142857143q-1.2514285714285691 3.5500000000000007-3.807142857142857 6.274285714285718t-5.9714285714285715 4.2071428571428555-7.165714285714284 1.4857142857142875q-4.171428571428571 0-7.945714285714287-1.8542857142857159-5.090000000000002 2.5899999999999963-8.794285714285714 2.5899999999999963-5.292857142857146 7.105427357601002e-15-5.292857142857146-5.871428571428567 0-2.565714285714286 1.002857142857143-6.137142857142859 0.3800000000000001-1.3399999999999999 2.4328571428571433-5.111428571428572 4.442857142857143-8.035714285714286 10.602857142857143-13.52857142857143-4.107142857142858 1.7642857142857142-9.531428571428572 7.902857142857142 1.4057142857142857-6.114285714285714 6.328571428571427-10.032857142857143t11.194285714285716-3.9171428571428573q0.6714285714285708 0 1.0057142857142871 0.022857142857142687 5.689999999999998-2.6128571428571385 9.664285714285715-2.6128571428571385 1.4285714285714306-5.551115123125783e-17 2.5900000000000034 0.29142857142857137t2.1099999999999994 0.9042857142857144 1.4857142857142875 1.7071428571428573 0.5342857142857156 2.567142857142857q0 2.588571428571428-1.6742857142857162 6.3828571428571435 2.2542857142857073 4.064285714285713 2.2542857142857073 8.707142857142856z m-1.5628571428571405-14.285714285714286q0-1.8514285714285714-1.182857142857145-2.9457142857142857t-3.057142857142857-1.0942857142857143q-2.411428571428573 0-5.671428571428571 1.5628571428571432 2.6999999999999993 1.048571428571428 4.967142857142861 2.935714285714286t3.805714285714288 4.365714285714286q1.1371428571428552-3.0142857142857142 1.1371428571428552-4.821428571428571z m-35.580000000000005 27.614285714285714q3.1086244689504383e-15 1.9185714285714255 1.0828571428571463 2.9571428571428555t3.0028571428571427 1.0371428571428538q2.5671428571428567 0 5.937142857142856-1.8528571428571396-2.7228571428571424-1.6085714285714303-4.765714285714285-4.085714285714289t-3.0685714285714294-5.46857142857143q-2.185714285714286 4.575714285714284-2.185714285714286 7.410000000000004z m11.250000000000004-15.917142857142856h16.25q-0.1114285714285721-3.171428571428571-2.522857142857145-5.289999999999999t-5.602857142857143-2.12142857142857q-3.2142857142857153 0-5.614285714285714 2.121428571428572t-2.5114285714285707 5.290000000000001z' })
                )
            );
        }
    }]);

    return FaInternetExplorer;
}(React.Component);

exports.default = FaInternetExplorer;
module.exports = exports['default'];