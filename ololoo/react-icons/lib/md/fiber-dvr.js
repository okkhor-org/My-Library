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

var MdFiberDvr = function (_React$Component) {
    _inherits(MdFiberDvr, _React$Component);

    function MdFiberDvr() {
        _classCallCheck(this, MdFiberDvr);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdFiberDvr).apply(this, arguments));
    }

    _createClass(MdFiberDvr, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35 19.14v-1.6400000000000006q0-1.0933333333333337-0.7033333333333331-1.7966666666666669t-1.7966666666666669-0.7033333333333331h-5.859999999999999v10h2.5v-3.3599999999999994h1.9533333333333331l1.4066666666666663 3.3599999999999994h2.5l-1.4833333333333343-3.5166666666666657q1.4833333333333343-0.6999999999999993 1.4833333333333343-2.3416666666666686z m-13.983333333333334 5.859999999999999l2.9666666666666686-10h-2.5l-1.7166666666666686 5.703333333333333-1.6433333333333309-5.703333333333333h-2.5l2.8900000000000006 10h2.5z m-7.656666666666666-2.5v-5q0-1.0933333333333337-0.7416666666666671-1.7966666666666669t-1.7566666666666642-0.7033333333333331h-5.861666666666668v10h5.859999999999999q1.0166666666666657 0 1.7583333333333329-0.7033333333333331t0.7433333333333341-1.7966666666666669z m21.64-17.5q1.4066666666666663 0 2.383333333333333 0.9766666666666666t0.9766666666666666 2.383333333333333v23.283333333333335q0 1.3266666666666644-0.9766666666666666 2.341666666666665t-2.383333333333333 1.0150000000000006h-30q-1.4066666666666667 0-2.3833333333333333-1.0166666666666657t-0.9766666666666666-2.3416666666666686v-23.28333333333333q0-1.405000000000002 0.9766666666666666-2.3833333333333346t2.3833333333333333-0.9749999999999996h30z m-27.5 12.5h3.3599999999999994v5h-3.3599999999999994v-5z m21.64 0h3.3599999999999994v1.6400000000000006h-3.3599999999999994v-1.6400000000000006z' })
                )
            );
        }
    }]);

    return MdFiberDvr;
}(React.Component);

exports.default = MdFiberDvr;
module.exports = exports['default'];