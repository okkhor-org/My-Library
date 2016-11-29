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

var FaUserMd = function (_React$Component) {
    _inherits(FaUserMd, _React$Component);

    function FaUserMd() {
        _classCallCheck(this, FaUserMd);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaUserMd).apply(this, arguments));
    }

    _createClass(FaUserMd, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm12.857142857142858 30q0 0.5799999999999983-0.4242857142857144 1.0042857142857144t-1.0042857142857144 0.42428571428571615-1.0042857142857144-0.4242857142857126-0.4242857142857144-1.004285714285718 0.4242857142857144-1.0042857142857144 1.0042857142857144-0.4242857142857126 1.0042857142857144 0.4242857142857126 0.4242857142857144 1.0042857142857144z m22.857142857142858 1.361428571428572q0 2.6999999999999993-1.6285714285714263 4.242857142857144t-4.332857142857144 1.53857142857143h-19.50714285714286q-2.6999999999999993 0-4.328571428571428-1.5399999999999991t-1.6314285714285717-4.242857142857144q0-1.514285714285716 0.12285714285714278-2.9228571428571435t0.5342857142857147-3.080000000000002 1.0614285714285714-2.9571428571428555 1.8085714285714287-2.3000000000000007 2.677142857142857-1.3485714285714288q-0.4900000000000002 1.1600000000000001-0.4900000000000002 2.677142857142858v4.532857142857143q-1.2942857142857136 0.4471428571428575-2.0757142857142856 1.562857142857144t-0.7814285714285711 2.4757142857142824q0 1.7857142857142847 1.2499999999999991 3.037142857142854t3.0357142857142865 1.2485714285714309 3.0357142857142865-1.2485714285714309 1.25-3.037142857142854q0-1.3599999999999994-0.7928571428571427-2.475714285714286t-2.064285714285715-1.562857142857144v-4.532857142857139q0-1.3828571428571443 0.5571428571428569-2.0742857142857147 2.94857142857143 2.321428571428573 6.585714285714285 2.321428571428573t6.585714285714285-2.321428571428573q0.5571428571428569 0.6914285714285704 0.5571428571428569 2.0742857142857147v1.428571428571427q-2.3657142857142865 0-4.039999999999999 1.6757142857142853t-1.6742857142857126 4.03857142857143v1.9885714285714293q-0.7142857142857153 0.6471428571428568-0.7142857142857153 1.585714285714289 0 0.8914285714285697 0.6257142857142846 1.5142857142857125t1.5171428571428578 0.6285714285714263 1.5171428571428578-0.6285714285714263 0.6257142857142846-1.5142857142857125q0-0.9385714285714286-0.7142857142857153-1.5857142857142854v-1.985714285714284q0-1.1614285714285728 0.8485714285714288-2.0100000000000016t2.008571428571429-0.850000000000005 2.008571428571429 0.8500000000000014 0.8485714285714288 2.0071428571428562v1.9885714285714293q-0.7142857142857153 0.6471428571428568-0.7142857142857153 1.585714285714289 0 0.8914285714285697 0.6257142857142846 1.5142857142857125t1.5171428571428578 0.6285714285714263 1.5171428571428542-0.6285714285714263 0.6257142857142881-1.5142857142857125q0-0.9385714285714286-0.7142857142857153-1.5857142857142854v-1.985714285714284q0-1.518571428571427-0.7714285714285722-2.847142857142856t-2.085714285714282-2.0885714285714343q0-0.2228571428571442 0.011428571428570677-0.9485714285714302t0-1.071428571428573-0.05714285714285694-0.9257142857142853-0.15428571428571303-1.048571428571428-0.28999999999999915-0.8928571428571423q1.5171428571428578 0.33428571428571274 2.678571428571427 1.3500000000000014t1.808571428571426 2.3000000000000007 1.0600000000000023 2.9571428571428555 0.5357142857142847 3.078571428571429 0.12285714285714278 2.924285714285716z m-7.142857142857142-19.932857142857145q0 3.54857142857143-2.5114285714285707 6.060000000000002t-6.060000000000002 2.5114285714285707-6.0600000000000005-2.5114285714285707-2.5114285714285707-6.0600000000000005 2.5114285714285725-6.0600000000000005 6.059999999999999-2.511428571428571 6.060000000000002 2.511428571428571 2.5114285714285707 6.0600000000000005z' })
                )
            );
        }
    }]);

    return FaUserMd;
}(React.Component);

exports.default = FaUserMd;
module.exports = exports['default'];