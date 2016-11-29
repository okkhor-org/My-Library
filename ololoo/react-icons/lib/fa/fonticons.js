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

var FaFonticons = function (_React$Component) {
    _inherits(FaFonticons, _React$Component);

    function FaFonticons() {
        _classCallCheck(this, FaFonticons);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaFonticons).apply(this, arguments));
    }

    _createClass(FaFonticons, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm2.857142857142857 2.857142857142857h34.285714285714285v34.285714285714285h-34.285714285714285v-34.285714285714285z m20.267142857142858 7.142857142857142l-0.2671428571428578 0.7371428571428567 1.6742857142857126 1.8528571428571432-0.6914285714285704 2.5428571428571427 0.5571428571428569 0.5600000000000005 2.3900000000000006-1.2714285714285722 2.3900000000000006 1.2714285714285722 0.5571428571428569-0.5571428571428569-0.6900000000000013-2.5457142857142863 1.6742857142857126-1.8528571428571432-0.26857142857142335-0.7371428571428567h-2.121428571428577l-1.1814285714285724-2.1428571428571423h-0.7142857142857153l-1.182857142857138 2.1428571428571423h-2.1214285714285737z m-5.957142857142859 3.638571428571428q0.7142857142857153 0 0.9914285714285711 0.35714285714285765t0.25714285714285623 1.4057142857142857l3.885714285714286-0.4671428571428571q0-1.2285714285714278-0.39000000000000057-2.064285714285715t-1.12857142857143-1.25-1.53857142857143-0.5685714285714294-1.8971428571428568-0.15714285714285658q-2.968571428571428 0-4.442857142857143 1.2857142857142865t-1.4714285714285715 4.071428571428573v1.6085714285714268h-2.1428571428571423v2.8571428571428577h1.6957142857142902q0.4471428571428575 0 0.4471428571428575 0.17999999999999972v8.528571428571428q0 0.3114285714285714-0.1114285714285721 0.44571428571428484t-0.40000000000000036 0.15714285714285836l-1.6314285714285717 0.15428571428571303v1.9600000000000044h10v-1.918571428571429l-3.3257142857142856-0.31428571428571317q-0.13428571428571345-0.02142857142857224-0.1899999999999995-0.03142857142857025t-0.07857142857142918-0.05714285714285694-0.011428571428570677-0.08857142857142719 0.02142857142857224-0.15714285714285836 0.011428571428570677-0.22142857142857153v-8.640000000000004h4.262857142857143l0.8485714285714288-2.8571428571428577h-5.152857142857142q-0.13428571428571345 0-0.042857142857142705-0.13285714285714434t0.08857142857142897-0.1999999999999993v-1.7857142857142865q0-0.6042857142857141 0.03285714285714292-0.9057142857142857t0.16714285714285637-0.6257142857142863 0.43571428571428505-0.4471428571428575 0.8142857142857132-0.12285714285714278z m13.547142857142859 18.504285714285718v-1.9200000000000017l-1.2057142857142864-0.1999999999999993q-0.15714285714285836-0.024285714285714022-0.21142857142856997-0.05714285714285694t-0.05714285714285694-0.0671428571428585 0.024285714285714022-0.16857142857142904 0.022857142857141355-0.2671428571428578v-11.605714285714285h-6.137142857142859l-0.5142857142857125 2.2542857142857144 1.8542857142857159 0.4914285714285711q0.5142857142857125 0.15714285714285836 0.5142857142857125 0.6028571428571432v8.25714285714286q0 0.31428571428571317-0.13571428571428612 0.4142857142857146t-0.4471428571428575 0.14571428571428413l-1.562857142857144 0.1999999999999993v1.9214285714285708h7.857142857142858z' })
                )
            );
        }
    }]);

    return FaFonticons;
}(React.Component);

exports.default = FaFonticons;
module.exports = exports['default'];