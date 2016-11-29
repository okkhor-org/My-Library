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

var FaGitSquare = function (_React$Component) {
    _inherits(FaGitSquare, _React$Component);

    function FaGitSquare() {
        _classCallCheck(this, FaGitSquare);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaGitSquare).apply(this, arguments));
    }

    _createClass(FaGitSquare, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm15.848571428571429 29.197142857142858q0 1.4714285714285715-2.0757142857142856 1.4714285714285715-2.385714285714286 0-2.385714285714286-1.404285714285713 0-1.428571428571427 2.185714285714285-1.428571428571427 2.2771428571428576 0 2.2771428571428576 1.361428571428572z m-0.8042857142857152-10.402857142857144q0 1.8971428571428568-1.6500000000000004 1.8971428571428568-1.718571428571428 0-1.718571428571428-1.8757142857142846 0-2.0071428571428562 1.718571428571428-2.0071428571428562 0.8028571428571425 0 1.2285714285714295 0.5685714285714276t0.4228571428571435 1.4171428571428564z m3.7071428571428555-1.6742857142857126v-2.7914285714285736q-1.7428571428571438 0.6485714285714277-3.0142857142857142 0.6485714285714277-1.1142857142857139-0.6471428571428568-2.4542857142857137-0.6471428571428568-1.92 0-3.2371428571428567 1.274285714285714t-1.314285714285715 3.1914285714285704q0 1.1142857142857139 0.6571428571428566 2.277142857142856t1.6400000000000006 1.4957142857142856v0.0671428571428585q-0.8485714285714288 0.379999999999999-0.8485714285714288 1.8971428571428568 0 1.1828571428571415 0.9142857142857146 1.7185714285714297v0.0671428571428585q-2.5228571428571414 0.8242857142857147-2.5228571428571414 3.101428571428574 0 1.0042857142857144 0.4457142857142866 1.7528571428571418t1.2057142857142864 1.139999999999997 1.6071428571428577 0.5685714285714312 1.8100000000000005 0.1785714285714306q4.999999999999998 0 4.999999999999998-4.195714285714285 0-1.4957142857142856-1.071428571428573-2.210000000000001t-2.814285714285715-1.0285714285714285q-0.5999999999999996-0.10999999999999943-1.1485714285714277-0.4571428571428555t-0.5485714285714263-0.8828571428571479q0-0.9828571428571422 1.0942857142857143-1.1600000000000001 1.718571428571428-0.33428571428571274 2.7228571428571424-1.562857142857144t1.0042857142857144-2.9914285714285676q0-0.5357142857142847-0.2228571428571442-1.1600000000000001 0.8242857142857147-0.1999999999999993 1.0928571428571416-0.28999999999999915z m1.3171428571428585 9.352857142857143h3.057142857142857q-0.04285714285714448-0.6000000000000014-0.04285714285714448-1.8285714285714292v-8.638571428571428q0-1.0285714285714285 0.04285714285714448-1.5399999999999991h-3.057142857142857q0.0671428571428585 0.5142857142857142 0.0671428571428585 1.5857142857142854v8.74857142857143q0 1.1142857142857139-0.0671428571428585 1.6714285714285708z m11.360000000000003-0.35857142857142676v-2.6999999999999993q-0.6714285714285708 0.46857142857142975-1.5171428571428578 0.46857142857142975-1.1828571428571415 0-1.1828571428571415-1.8285714285714292v-5.02571428571429h1.1600000000000001q0.1999999999999993 0 0.5914285714285725 0.024285714285714022t0.5914285714285725 0.022857142857141355v-2.611428571428572h-2.3428571428571416q0-1.8285714285714292 0.06571428571428584-2.2771428571428576h-3.1257142857142846q0.08999999999999986 0.5371428571428574 0.08999999999999986 1.2285714285714295v1.048571428571428h-1.3385714285714272v2.611428571428572q0.8028571428571425-0.0671428571428585 0.8257142857142838-0.0671428571428585 0.06857142857142762 0 0.24714285714285822 0.011428571428570677t0.2671428571428578 0.011428571428570677v0.04571428571428626h-0.04571428571429337v4.842857142857142q0 0.8285714285714292 0.05428571428571516 1.428571428571427t0.25714285714285623 1.2628571428571433 0.5471428571428589 1.0828571428571436 0.9714285714285715 0.6914285714285704 1.4742857142857133 0.2671428571428578q1.428571428571427 0 2.41-0.5357142857142847z m-7.945714285714285-15.75714285714286q0-0.8028571428571425-0.5357142857142847-1.4171428571428564t-1.3399999999999999-0.6142857142857139-1.3500000000000014 0.6028571428571432-0.5471428571428589 1.4285714285714288q0 0.8028571428571425 0.5571428571428569 1.395714285714286t1.3428571428571416 0.5914285714285707 1.3285714285714292-0.5999999999999996 0.5457142857142863-1.3857142857142861z m13.66-1.0714285714285712v21.42857142857143q0 2.6571428571428584-1.8857142857142861 4.5428571428571445t-4.5428571428571445 1.8857142857142861h-21.42857142857143q-2.6571428571428575 0-4.542857142857144-1.8857142857142861t-1.885714285714284-4.5428571428571445v-21.42857142857143q0-2.6571428571428575 1.8857142857142857-4.542857142857144t4.542857142857144-1.885714285714284h21.42857142857143q2.6571428571428584 0 4.5428571428571445 1.8857142857142857t1.8857142857142861 4.542857142857144z' })
                )
            );
        }
    }]);

    return FaGitSquare;
}(React.Component);

exports.default = FaGitSquare;
module.exports = exports['default'];