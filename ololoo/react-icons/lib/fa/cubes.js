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

var FaCubes = function (_React$Component) {
    _inherits(FaCubes, _React$Component);

    function FaCubes() {
        _classCallCheck(this, FaCubes);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaCubes).apply(this, arguments));
    }

    _createClass(FaCubes, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm11.764705882352942 33.529411764705884l7.0588235294117645-3.529411764705884v-5.7717647058823545l-7.0588235294117645 3.014117647058825v6.287058823529414z m-1.1764705882352935-8.345882352941175l7.425882352941176-3.1799999999999997-7.425882352941178-3.1800000000000033-7.425882352941177 3.1799999999999997z m20 8.345882352941175l7.0588235294117645-3.529411764705884v-5.7717647058823545l-7.0588235294117645 3.014117647058825v6.287058823529414z m-1.1764705882352935-8.345882352941175l7.42588235294118-3.1799999999999997-7.42588235294118-3.1800000000000033-7.425882352941176 3.1799999999999997z m-8.235294117647058-5.385882352941177l7.0588235294117645-3.0329411764705867v-4.889411764705885l-7.0588235294117645 3.014117647058823v4.908235294117645z m-1.1764705882352935-6.9670588235294115l8.105882352941176-3.474117647058824-8.10588235294118-3.4741176470588258-8.105882352941176 3.474117647058824z m19.999999999999996 9.52235294117647v7.647058823529413q0 0.6611764705882344-0.3494117647058843 1.2317647058823518t-0.9552941176470569 0.8635294117647092l-8.235294117647058 4.117647058823529q-0.46000000000000085 0.25764705882352246-1.0482352941176458 0.25764705882352246t-1.0470588235294116-0.2588235294117638l-8.235294117647058-4.117647058823529q-0.0941176470588232-0.03529411764706225-0.1294117647058819-0.07294117647058584-0.0352941176470587 0.03529411764706225-0.1294117647058819 0.07411764705882007l-8.23529411764706 4.117647058823529q-0.45882352941176663 0.25764705882352956-1.0470588235294152 0.25764705882352956t-1.0470588235294116-0.2588235294117638l-8.23529411764706-4.117647058823529q-0.6082352941176471-0.2941176470588225-0.9564705882352941-0.8623529411764714t-0.3494117647058813-1.2317647058823518v-7.6470588235294095q0-0.6988235294117651 0.39529411764705885-1.28705882352941t1.0388235294117647-0.882352941176471l7.97764705882353-3.4188235294117675v-7.352941176470589q0-0.6988235294117651 0.39529411764705813-1.2870588235294118t1.038823529411765-0.882352941176471l8.23529411764706-3.5294117647058822q0.42117647058823593-0.18352941176470594 0.9188235294117639-0.18352941176470594t0.9176470588235297 0.18352941176470594l8.235294117647062 3.5294117647058822q0.644705882352941 0.2941176470588234 1.0399999999999991 0.882352941176471t0.39529411764705813 1.2870588235294118v7.352941176470589l7.976470588235298 3.418823529411764q0.6623529411764721 0.2941176470588225 1.04941176470588 0.882352941176471t0.3858823529411737 1.2870588235294136z' })
                )
            );
        }
    }]);

    return FaCubes;
}(React.Component);

exports.default = FaCubes;
module.exports = exports['default'];