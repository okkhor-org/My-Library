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

var FaAmbulance = function (_React$Component) {
    _inherits(FaAmbulance, _React$Component);

    function FaAmbulance() {
        _classCallCheck(this, FaAmbulance);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaAmbulance).apply(this, arguments));
    }

    _createClass(FaAmbulance, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm12.903225806451612 30.32258064516129q0-1.0683870967741953-0.7561290322580643-1.8245161290322578t-1.8245161290322578-0.7561290322580625-1.8245161290322578 0.756129032258066-0.7561290322580643 1.8245161290322542 0.7561290322580643 1.8245161290322613 1.8245161290322578 0.7561290322580589 1.8245161290322578-0.756129032258066 0.7561290322580643-1.8245161290322542z m-7.741935483870968-10.322580645161288h7.741935483870968v-5.161290322580644h-3.187096774193547q-0.2812903225806451 0.03870967741935516-0.44258064516129103 0.1806451612903217l-3.9316129032258065 3.93548387096774q-0.14193548387096744 0.24129032258064598-0.1806451612903226 0.4438709677419368v0.6064516129032249z m25.806451612903224 10.322580645161288q0-1.0683870967741953-0.756129032258066-1.8245161290322578t-1.8245161290322542-0.7561290322580625-1.8245161290322578 0.756129032258066-0.756129032258066 1.8245161290322542 0.756129032258066 1.8245161290322613 1.8245161290322578 0.7561290322580589 1.8245161290322578-0.756129032258066 0.756129032258066-1.8245161290322542z m2.580645161290324-13.548387096774192v-3.870967741935484q0-0.2838709677419349-0.1806451612903217-0.46451612903225836t-0.4645161290322619-0.1806451612903217h-4.5161290322580605v-4.516129032258064q0-0.28387096774193576-0.1806451612903217-0.46451612903225836t-0.46451612903225836-0.1806451612903226h-3.870967741935484q-0.28387096774193665 0-0.46451612903225836 0.1806451612903226t-0.1806451612903217 0.46451612903225836v4.516129032258064h-4.516129032258064q-0.28387096774193665 0-0.46451612903225836 0.1806451612903217t-0.18064516129032526 0.46451612903225836v3.870967741935484q0 0.28387096774193665 0.1806451612903217 0.46451612903225836t0.46451612903225836 0.1806451612903217h4.516129032258068v4.516129032258064q0 0.28387096774193665 0.1806451612903217 0.46451612903225836t0.46451612903225836 0.1806451612903217h3.870967741935484q0.28387096774193665 0 0.46451612903225836-0.1806451612903217t0.1806451612903217-0.46451612903225836v-4.516129032258064h4.516129032258068q0.2838709677419331 0 0.4645161290322548-0.1806451612903217t0.1806451612903217-0.46451612903225836z m5.161290322580648-10.96774193548387v23.225806451612904q0 0.5238709677419351-0.3832258064516125 0.9070967741935476t-0.9070967741935476 0.3832258064516125h-3.8709677419354875q0 2.1367741935483835-1.512258064516132 3.6490322580645156t-3.649032258064512 1.512258064516132-3.6490322580645156-1.512258064516132-1.5122580645161285-3.6490322580645156h-7.741935483870968q0 2.1367741935483835-1.5122580645161285 3.6490322580645156t-3.6490322580645174 1.512258064516132-3.6490322580645156-1.512258064516132-1.5122580645161294-3.6490322580645156h-2.5806451612903225q-0.5238709677419355 0-0.9070967741935483-0.3832258064516125t-0.38322580645161297-0.9070967741935476 0.38322580645161275-0.9070967741935476 0.9070967741935485-0.3832258064516125v-8.387096774193548q0-0.5238709677419351 0.261935483870968-1.1690322580645152t0.6451612903225805-1.0283870967741926l3.9922580645161285-3.992258064516129q0.3832258064516125-0.3832258064516125 1.0283870967741935-0.6451612903225801t1.169032258064517-0.2619354838709711h3.225806451612902v-6.451612903225806q0-0.5238709677419351 0.3832258064516125-0.9070967741935485t0.9070967741935494-0.3832258064516134h23.225806451612904q0.5238709677419351 0 0.9070967741935476 0.3832258064516125t0.3832258064516125 0.9070967741935494z' })
                )
            );
        }
    }]);

    return FaAmbulance;
}(React.Component);

exports.default = FaAmbulance;
module.exports = exports['default'];