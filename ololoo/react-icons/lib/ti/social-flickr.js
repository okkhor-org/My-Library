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

var TiSocialFlickr = function (_React$Component) {
    _inherits(TiSocialFlickr, _React$Component);

    function TiSocialFlickr() {
        _classCallCheck(this, TiSocialFlickr);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiSocialFlickr).apply(this, arguments));
    }

    _createClass(TiSocialFlickr, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm12.5 26.666666666666668c-3.676666666666666 0-6.666666666666667-2.9899999999999984-6.666666666666667-6.666666666666668s2.990000000000001-6.666666666666668 6.666666666666667-6.666666666666668 6.666666666666668 2.9899999999999984 6.666666666666668 6.666666666666668-2.9899999999999984 6.666666666666668-6.666666666666668 6.666666666666668z m0-10c-1.838333333333333 0-3.333333333333334 1.495000000000001-3.333333333333334 3.333333333333332s1.4949999999999992 3.333333333333332 3.333333333333334 3.333333333333332 3.333333333333334-1.495000000000001 3.333333333333334-3.333333333333332-1.4949999999999992-3.333333333333332-3.333333333333334-3.333333333333332z m15-3.333333333333334c-3.676666666666666 0-6.666666666666668 2.99-6.666666666666668 6.666666666666666s2.9899999999999984 6.666666666666668 6.666666666666668 6.666666666666668 6.666666666666664-2.9899999999999984 6.666666666666664-6.666666666666668-2.990000000000002-6.666666666666668-6.666666666666668-6.666666666666668z' })
                )
            );
        }
    }]);

    return TiSocialFlickr;
}(React.Component);

exports.default = TiSocialFlickr;
module.exports = exports['default'];