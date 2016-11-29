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

var MdBlurOff = function (_React$Component) {
    _inherits(MdBlurOff, _React$Component);

    function MdBlurOff() {
        _classCallCheck(this, MdBlurOff);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdBlurOff).apply(this, arguments));
    }

    _createClass(MdBlurOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm5 22.5q0.8600000000000003 0 0.8600000000000003 0.8599999999999994 0 0.783333333333335-0.8600000000000003 0.783333333333335t-0.8600000000000003-0.783333333333335q0-0.8599999999999994 0.8600000000000003-0.8599999999999994z m5 5.859999999999999q0.7033333333333331 0 1.1716666666666669 0.466666666666665t0.4666666666666668 1.173333333333332-0.4666666666666668 1.1716666666666669-1.1716666666666669 0.466666666666665-1.1716666666666669-0.466666666666665-0.4666666666666668-1.1716666666666669 0.4666666666666668-1.1716666666666669 1.1716666666666669-0.466666666666665z m6.640000000000001 5.780000000000001q0.8599999999999994 0 0.8599999999999994 0.8599999999999994t-0.8599999999999994 0.8599999999999994q-0.7833333333333332 0-0.7833333333333332-0.8599999999999994t0.7833333333333332-0.8599999999999994z m-11.64-18.28q0.8600000000000003 1.7763568394002505e-15 0.8600000000000003 0.783333333333335 0 0.8583333333333343-0.8600000000000003 0.8583333333333343t-0.8600000000000003-0.8583333333333343q0-0.7833333333333332 0.8600000000000003-0.7833333333333332z m5 5.780000000000001q0.7033333333333331 0 1.1716666666666669 0.5083333333333329t0.4666666666666668 1.2100000000000009-0.4666666666666668 1.1716666666666669-1.1716666666666669 0.46999999999999886-1.1716666666666669-0.466666666666665-0.4666666666666668-1.173333333333332 0.4666666666666668-1.211666666666666 1.1716666666666669-0.5100000000000016z m25 0.8599999999999994q0.8599999999999994 0 0.8599999999999994 0.8599999999999994 0 0.783333333333335-0.8599999999999994 0.783333333333335t-0.8599999999999994-0.783333333333335q0-0.8599999999999994 0.8599999999999994-0.8599999999999994z m-18.36 5.859999999999999q0.7033333333333331 0 1.211666666666666 0.466666666666665t0.5100000000000016 1.173333333333332-0.5083333333333329 1.1716666666666669-1.2100000000000009 0.466666666666665-1.1716666666666669-0.466666666666665-0.47166666666666757-1.1716666666666633 0.4666666666666668-1.1716666666666669 1.1733333333333338-0.466666666666665z m-12.5-19.61l2.1099999999999994-2.1099999999999994 27.11 27.11-2.1883333333333326 2.1099999999999994-6.25-6.328333333333333q0.07833333333333314 0.15500000000000114 0.07833333333333314 0.466666666666665 0 0.7033333333333331-0.466666666666665 1.1716666666666669t-1.173333333333332 0.466666666666665-1.211666666666666-0.466666666666665-0.5100000000000016-1.1716666666666669 0.5083333333333329-1.1716666666666669 1.2100000000000009-0.466666666666665q0.3133333333333326 0 0.466666666666665 0.07666666666666799l-4.686666666666667-4.688333333333333q-0.1566666666666663 0.8599999999999994-0.8599999999999994 1.4833333333333343t-1.6400000000000006 0.6266666666666652q-1.0166666666666657 0-1.7583333333333329-0.7416666666666671t-0.7433333333333341-1.7566666666666677q0-0.9383333333333326 0.625-1.6400000000000006t1.4833333333333325-0.8599999999999994l-4.681666666666665-4.688333333333333q0.07833333333333314 0.1566666666666663 0.07833333333333314 0.466666666666665 0 0.7049999999999983-0.4666666666666668 1.2133333333333347t-1.1733333333333338 0.5100000000000016-1.1716666666666669-0.5083333333333329-0.4666666666666668-1.2100000000000009 0.4666666666666668-1.1716666666666669 1.1716666666666669-0.47166666666666757l0.4666666666666668 0.07833333333333314z m19.220000000000002 25.39q0.783333333333335 0 0.783333333333335 0.8599999999999994t-0.783333333333335 0.8599999999999994q-0.8599999999999994 0-0.8599999999999994-0.8599999999999994t0.8599999999999994-0.8599999999999994z m6.639999999999997-22.5q-0.7033333333333331 0-1.1716666666666669-0.4666666666666668t-0.466666666666665-1.1733333333333338 0.466666666666665-1.1716666666666669 1.1716666666666669-0.4666666666666668 1.1716666666666669 0.4666666666666668 0.466666666666665 1.1716666666666669-0.466666666666665 1.1716666666666669-1.1716666666666669 0.4666666666666668z m0 6.719999999999999q-0.7033333333333331 0-1.1716666666666669-0.5083333333333329t-0.466666666666665-1.2100000000000009 0.466666666666665-1.1716666666666669 1.1716666666666669-0.46999999999999886 1.1716666666666669 0.4666666666666668 0.466666666666665 1.1733333333333338-0.466666666666665 1.211666666666666-1.1716666666666669 0.5100000000000016z m0 6.640000000000001q-0.7033333333333331 0-1.1716666666666669-0.466666666666665t-0.466666666666665-1.173333333333332 0.466666666666665-1.211666666666666 1.1716666666666669-0.5100000000000016 1.1716666666666669 0.5083333333333329 0.466666666666665 1.2100000000000009-0.466666666666665 1.1716666666666669-1.1716666666666669 0.471666666666664z m-13.36-13.36q-0.7033333333333331 0-1.1716666666666669-0.4666666666666668t-0.4683333333333337-1.1733333333333338 0.4666666666666668-1.1716666666666669 1.1733333333333338-0.4666666666666668 1.211666666666666 0.4666666666666668 0.5100000000000016 1.1716666666666669-0.5083333333333329 1.1716666666666669-1.2100000000000009 0.4666666666666668z m18.36 5.859999999999999q-0.8599999999999994 0-0.8599999999999994-0.8599999999999994 0-0.7833333333333332 0.8599999999999994-0.7833333333333332t0.8599999999999994 0.7833333333333332q0 0.8599999999999994-0.8599999999999994 0.8599999999999994z m-18.36-11.64q-0.7833333333333332 8.881784197001252e-16-0.7833333333333332-0.8599999999999994t0.7833333333333332-0.8600000000000003q0.8599999999999994 0 0.8599999999999994 0.8600000000000003t-0.8599999999999994 0.8600000000000003z m6.719999999999999 8.881784197001252e-16q-0.8599999999999994 0-0.8599999999999994-0.8600000000000003t0.8599999999999994-0.8600000000000003q0.783333333333335 0 0.783333333333335 0.8600000000000003t-0.783333333333335 0.8600000000000003z m-0.3916666666666657 13.280000000000001q-0.7800000000000011-0.07833333333333314-1.4050000000000011-0.7033333333333331t-0.7033333333333331-1.4066666666666663v-0.39000000000000057q0-1.0166666666666657 0.7416666666666671-1.7583333333333329t1.7583333333333329-0.7433333333333341 1.7583333333333329 0.7416666666666671 0.7416666666666671 1.756666666666666-0.7416666666666671 1.7583333333333329-1.7583333333333329 0.7399999999999984h-0.39000000000000057z m0.3933333333333344-7.5q-0.7033333333333331 0-1.211666666666666-0.4666666666666668t-0.5116666666666667-1.1733333333333338 0.5083333333333329-1.1716666666666669 1.2100000000000009-0.4666666666666668 1.1716666666666669 0.4666666666666668 0.471666666666664 1.1716666666666669-0.466666666666665 1.1716666666666669-1.173333333333332 0.4666666666666668z' })
                )
            );
        }
    }]);

    return MdBlurOff;
}(React.Component);

exports.default = MdBlurOff;
module.exports = exports['default'];