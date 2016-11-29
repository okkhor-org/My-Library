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

var TiThMenu = function (_React$Component) {
    _inherits(TiThMenu, _React$Component);

    function TiThMenu() {
        _classCallCheck(this, TiThMenu);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiThMenu).apply(this, arguments));
    }

    _createClass(TiThMenu, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.666666666666668 28.333333333333336h-23.333333333333336c-1.8383333333333312 0-3.333333333333332 1.495000000000001-3.333333333333332 3.333333333333332s1.495 3.333333333333332 3.333333333333334 3.333333333333332h23.333333333333336c1.8383333333333312 0 3.3333333333333357-1.4949999999999974 3.3333333333333357-3.333333333333332s-1.4949999999999974-3.333333333333332-3.333333333333332-3.333333333333332z m0-11.666666666666668h-23.333333333333336c-1.8383333333333312 0-3.333333333333332 1.495000000000001-3.333333333333332 3.333333333333332s1.495 3.333333333333332 3.333333333333334 3.333333333333332h23.333333333333336c1.8383333333333312 0 3.3333333333333357-1.495000000000001 3.3333333333333357-3.333333333333332s-1.4949999999999974-3.333333333333332-3.333333333333332-3.333333333333332z m0-11.666666666666668h-23.333333333333336c-1.8383333333333312 0-3.333333333333332 1.495-3.333333333333332 3.333333333333334s1.495 3.333333333333334 3.333333333333334 3.333333333333334h23.333333333333336c1.8383333333333312 0 3.3333333333333357-1.495000000000001 3.3333333333333357-3.333333333333334s-1.4949999999999974-3.333333333333334-3.333333333333332-3.333333333333334z' })
                )
            );
        }
    }]);

    return TiThMenu;
}(React.Component);

exports.default = TiThMenu;
module.exports = exports['default'];