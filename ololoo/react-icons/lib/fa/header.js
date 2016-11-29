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

var FaHeader = function (_React$Component) {
    _inherits(FaHeader, _React$Component);

    function FaHeader() {
        _classCallCheck(this, FaHeader);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaHeader).apply(this, arguments));
    }

    _createClass(FaHeader, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm37.542857142857144 37.142857142857146q-0.9814285714285731 0-2.9571428571428555-0.07857142857142918t-2.9785714285714278-0.07857142857142918q-0.9828571428571422 0-2.9471428571428575 0.07857142857142918t-2.9457142857142884 0.07857142857142918q-0.5371428571428574 0-0.8285714285714292-0.4571428571428555t-0.28857142857143003-1.0142857142857125q0-0.6928571428571431 0.379999999999999-1.028571428571425t0.8714285714285701-0.38000000000000256 1.1371428571428588-0.15714285714285836 1.0042857142857144-0.33285714285714363q0.7371428571428567-0.46714285714286063 0.7371428571428567-3.1242857142857154l-0.024285714285714022-8.728571428571431q0-0.4671428571428571-0.022857142857141355-0.6900000000000013-0.28999999999999915-0.08999999999999986-1.1142857142857139-0.08999999999999986h-15.06857142857143q-0.8499999999999996 0-1.1400000000000006 0.08999999999999986-0.02285714285714313 0.2228571428571442-0.02285714285714313 0.6914285714285704l-0.019999999999997797 8.278571428571432q0 3.171428571428571 0.8257142857142856 3.661428571428573 0.35714285714285765 0.2228571428571442 1.0714285714285712 0.28999999999999915t1.2714285714285722 0.07857142857142918 1.0057142857142853 0.33571428571428896 0.4471428571428575 1.0142857142857125q0 0.5814285714285745-0.27857142857142847 1.0714285714285694t-0.814285714285715 0.4928571428571402q-1.048571428571428 0-3.1142857142857157-0.07857142857142918t-3.0914285714285725-0.07857142857142918q-0.96 0-2.8571428571428577 0.07857142857142918t-2.834285714285712 0.07714285714286007q-0.5142857142857142 0-0.7928571428571427-0.46857142857142975t-0.27857142857142847-1.0042857142857144q0-0.6714285714285708 0.34571428571428564-1.0057142857142836t0.8028571428571429-0.39000000000000057 1.0600000000000005-0.16714285714285637 0.9371428571428568-0.33428571428571274q0.7371428571428575-0.5142857142857125 0.7371428571428575-3.1914285714285704l-0.02285714285714313-1.2714285714285722v-18.148571428571437q0-0.06714285714285495 0.011428571428571566-0.5799999999999983t0-0.814285714285715-0.03142857142857203-0.8585714285714268-0.08000000000000007-0.9371428571428568-0.1457142857142859-0.8142857142857141-0.24571428571428555-0.7028571428571428-0.35714285714285676-0.40000000000000036q-0.3342857142857145-0.2242857142857142-1.0042857142857144-0.2685714285714287t-1.1828571428571428-0.042857142857142705-0.9171428571428573-0.31428571428571406-0.3999999999999999-1.0042857142857144q0-0.5800000000000001 0.2657142857142858-1.0714285714285712t0.8028571428571427-0.49142857142857155q1.0285714285714285 0 3.0914285714285716 0.07857142857142874t3.0914285714285725 0.07857142857142874q0.9371428571428577 0 2.8242857142857147-0.07857142857142874t2.8285714285714274-0.07857142857142962q0.5571428571428569 0 0.8371428571428563 0.49142857142857155t0.27857142857142847 1.0714285714285712q0 0.6714285714285717-0.38142857142857167 0.9714285714285715t-0.8599999999999994 0.32428571428571473-1.1028571428571432 0.08999999999999986-0.9600000000000009 0.29000000000000004q-0.781428571428572 0.46857142857142886-0.781428571428572 3.571428571428572l0.02142857142857224 7.142857142857144q0 0.46857142857142975 0.02285714285714313 0.7142857142857153 0.2914285714285718 0.0671428571428585 0.8714285714285719 0.0671428571428585h15.602857142857141q0.5571428571428569 0 0.8485714285714288-0.0671428571428585 0.022857142857141355-0.24571428571428555 0.022857142857141355-0.7142857142857153l0.022857142857141355-7.142857142857142q0-3.102857142857143-0.7814285714285703-3.571428571428571-0.3999999999999986-0.24571428571428555-1.3042857142857152-0.27857142857142847t-1.4714285714285715-0.29000000000000004-0.571428571428573-1.104285714285714q0-0.5814285714285714 0.28000000000000114-1.0714285714285712t0.8342857142857198-0.49285714285714644q0.9814285714285731 0 2.945714285714285 0.07857142857142874t2.9471428571428575 0.07857142857142874q0.9599999999999973 0 2.879999999999999-0.07857142857142874t2.8814285714285717-0.07857142857142874q0.5571428571428569 0 0.8371428571428581 0.49142857142857155t0.278571428571432 1.0714285714285716q0 0.6685714285714282-0.39000000000000057 0.9814285714285713t-0.8928571428571459 0.32428571428571384-1.1499999999999986 0.06714285714285673-0.9828571428571422 0.28000000000000025q-0.7828571428571465 0.515714285714286-0.7828571428571465 3.595714285714286l0.022857142857141355 21.048571428571428q0 2.6571428571428584 0.7571428571428598 3.125714285714288 0.3571428571428541 0.2228571428571442 1.028571428571432 0.29999999999999716t1.1942857142857122 0.10000000000000142 0.9257142857142853 0.3471428571428561 0.3999999999999986 0.9928571428571402q0 0.5799999999999983-0.2657142857142887 1.0714285714285694t-0.8028571428571425 0.4914285714285711z' })
                )
            );
        }
    }]);

    return FaHeader;
}(React.Component);

exports.default = FaHeader;
module.exports = exports['default'];