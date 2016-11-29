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

var TiDirections = function (_React$Component) {
    _inherits(TiDirections, _React$Component);

    function TiDirections() {
        _classCallCheck(this, TiDirections);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiDirections).apply(this, arguments));
    }

    _createClass(TiDirections, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34.84666666666667 15.833333333333334l-4.59-4.345000000000001c-0.9466666666666725-0.9000000000000004-2.411666666666669-1.4883333333333333-3.728333333333339-1.4883333333333333h-4.861666666666665v-0.8333333333333339c0-1.38-1.120000000000001-2.5-2.5-2.5s-2.5 1.12-2.5 2.5000000000000018v0.8333333333333321h-5.833333333333334c-3.216666666666667 0-5.833333333333334 2.616666666666667-5.833333333333334 5.833333333333334 0 2.326666666666666 1.38 4.326666666666666 3.3599999999999994 5.261666666666665l-3.0733333333333324 3.071666666666669 4.2666666666666675 4.266666666666666c0.9499999999999993 0.9499999999999993 2.4333333333333336 1.5666666666666664 3.783333333333333 1.5666666666666664h3.666666666666666l1.3333333333333321 6.666666666666664h1.6666666666666679l1.3333333333333321-6.666666666666668h4.5c3.2166666666666686 0 5.833333333333336-2.616666666666667 5.833333333333336-5.833333333333332 0-1.5033333333333339-0.5899999999999999-2.8633333333333333-1.5266666666666673-3.8999999999999986 0.03333333333333499-0.03333333333333499 0.08333333333333215-0.05666666666666842 0.120000000000001-0.09166666666666501l4.583333333333336-4.341666666666667z m-9.013333333333335 10.833333333333334h-12.500000000000002c-0.4583333333333339 0-1.0966666666666658-0.26333333333333186-1.4233333333333338-0.5899999999999999l-1.9100000000000001-1.9100000000000001 1.9100000000000001-1.9100000000000001c0.32333333333333414-0.32333333333333414 0.961666666666666-0.5899999999999999 1.4233333333333338-0.5899999999999999h12.500000000000002c1.379999999999999 0 2.5 1.120000000000001 2.5 2.5s-1.120000000000001 2.5-2.5 2.5z m2.133333333333333-8.90666666666667c-0.33333333333333215 0.31666666666666643-0.9783333333333317 0.5733333333333341-1.4383333333333326 0.5733333333333341h-15.695000000000002c-1.3800000000000008 3.552713678800501e-15-2.5-1.1199999999999974-2.5-2.4999999999999982s1.1199999999999992-2.5 2.5-2.5h15.695000000000002c0.46000000000000085 0 1.1050000000000004 0.25666666666666593 1.4366666666666674 0.5733333333333341l2.0349999999999966 1.9266666666666659-2.0333333333333314 1.9266666666666676z' })
                )
            );
        }
    }]);

    return TiDirections;
}(React.Component);

exports.default = TiDirections;
module.exports = exports['default'];