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

var FaKey = function (_React$Component) {
    _inherits(FaKey, _React$Component);

    function FaKey() {
        _classCallCheck(this, FaKey);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaKey).apply(this, arguments));
    }

    _createClass(FaKey, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 11.428571428571429q0-1.7857142857142865-1.25-3.0357142857142865t-3.0357142857142847-1.2499999999999991-3.0357142857142847 1.2499999999999991-1.2500000000000018 3.0357142857142865q0 0.9371428571428577 0.4242857142857144 1.8528571428571432-0.9142857142857146-0.4242857142857144-1.8528571428571432-0.4242857142857144-1.7857142857142865 0-3.0357142857142856 1.25t-1.25 3.0357142857142847 1.25 3.0357142857142847 3.0357142857142856 1.2500000000000036 3.0357142857142847-1.25 1.2500000000000018-3.0357142857142883q0-0.937142857142856-0.4242857142857144-1.8528571428571432 0.9142857142857146 0.42428571428571615 1.8528571428571432 0.42428571428571615 1.7857142857142847 0 3.0357142857142847-1.25t1.25-3.0357142857142865z m18.995714285714286 15.714285714285717q0 0.379999999999999-1.0942857142857179 1.4714285714285715t-1.471428571428575 1.095714285714287q-0.20000000000000284 0-0.6357142857142861-0.35714285714285765t-0.8142857142857167-0.7371428571428567-0.8599999999999994-0.8914285714285697-0.5485714285714209-0.5814285714285781l-2.142857142857139 2.1428571428571423 4.909999999999997 4.910000000000004q0.6257142857142881 0.6257142857142881 0.6257142857142881 1.5171428571428578 0 0.9357142857142833-0.8714285714285737 1.807142857142857t-1.807142857142857 0.8714285714285737q-0.8928571428571459 0-1.5171428571428578-0.6285714285714263l-14.977142857142855-14.972857142857151q-3.928571428571427 2.924285714285716-8.14857142857143 2.924285714285716-3.637142857142857 0-5.924285714285714-2.289999999999999t-2.289999999999999-5.924285714285716q-2.220446049250313e-16-3.571428571428571 2.121428571428571-6.988571428571429t5.535714285714287-5.535714285714285 6.985714285714286-2.1185714285714288q3.6428571428571423 0 5.928571428571427 2.285714285714286t2.2857142857142847 5.928571428571428q0 4.217142857142857-2.9228571428571435 8.145714285714286l7.9228571428571435 7.925714285714285 2.1428571428571423-2.1428571428571423q-0.06571428571428584-0.06857142857142762-0.5785714285714292-0.548571428571428t-0.8928571428571423-0.8599999999999994-0.7371428571428567-0.8142857142857132-0.35714285714285765-0.6357142857142861q0-0.38142857142857167 1.0942857142857143-1.4742857142857133t1.4714285714285715-1.0942857142857143q0.2914285714285718 0 0.514285714285716 0.2228571428571442 0.134285714285717 0.13428571428571345 1.028571428571432 0.9928571428571438t1.8285714285714292 1.774285714285714 1.9314285714285688 1.9200000000000017 1.6285714285714263 1.7399999999999984 0.6371428571428552 0.9142857142857146z' })
                )
            );
        }
    }]);

    return FaKey;
}(React.Component);

exports.default = FaKey;
module.exports = exports['default'];