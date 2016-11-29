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

var MdFiberPin = function (_React$Component) {
    _inherits(MdFiberPin, _React$Component);

    function MdFiberPin() {
        _classCallCheck(this, MdFiberPin);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdFiberPin).apply(this, arguments));
    }

    _createClass(MdFiberPin, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm33.36 25v-10h-2.1099999999999994v5.859999999999999l-4.140000000000001-5.859999999999999h-2.1099999999999994v10h2.1099999999999994v-5.859999999999999l4.216666666666669 5.859999999999999h2.0333333333333314z m-12.5 0v-10h-2.5v10h2.5z m-5.859999999999999-5.859999999999999v-1.6400000000000006q0-1.0933333333333337-0.7033333333333331-1.7966666666666669t-1.7966666666666669-0.7033333333333331h-5.859999999999999v10h2.5v-3.3599999999999994h3.3599999999999994q1.0933333333333337 0 1.7966666666666669-0.7416666666666671t0.7033333333333331-1.759999999999998z m18.36-12.5q1.4066666666666663 0 2.3433333333333337 0.9766666666666666t0.9383333333333326 2.383333333333333v20q0 1.4066666666666663-0.9383333333333326 2.383333333333333t-2.3433333333333337 0.9766666666666666h-26.716666666666665q-1.408333333333334 0-2.3450000000000006-0.9766666666666666t-0.94-2.383333333333333v-20q0-1.4066666666666663 0.938333333333333-2.383333333333333t2.341666666666667-0.9766666666666666h26.71666666666667z m-24.22 10.86h3.3599999999999994v1.6400000000000006h-3.3599999999999994v-1.6400000000000006z' })
                )
            );
        }
    }]);

    return MdFiberPin;
}(React.Component);

exports.default = MdFiberPin;
module.exports = exports['default'];