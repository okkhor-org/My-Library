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

var TiCloudStorageOutline = function (_React$Component) {
    _inherits(TiCloudStorageOutline, _React$Component);

    function TiCloudStorageOutline() {
        _classCallCheck(this, TiCloudStorageOutline);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiCloudStorageOutline).apply(this, arguments));
    }

    _createClass(TiCloudStorageOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.5 15h-0.6000000000000014c-1.3999999999999986-3.9000000000000004-5.5-6.699999999999999-9.8-6.699999999999999-5.5 0-10.4 4.5-10.4 10v0.1999999999999993c-1.7000000000000002 0.8000000000000007-4.6 3.3999999999999986-4.6 6.5 0 3.6999999999999993 3.4000000000000004 6.699999999999999 7.1 6.699999999999999h18.300000000000004c4.600000000000001 0 8.299999999999997-3.8000000000000007 8.299999999999997-8.400000000000002s-3.6999999999999957-8.299999999999997-8.299999999999997-8.299999999999997z m0 13.3h-7.5v-6.300000000000001l3.6000000000000014 3.6000000000000014c0.10000000000000142 0.1999999999999993 0.3999999999999986 0.1999999999999993 0.6000000000000014 0.1999999999999993s0.3999999999999986-0.10000000000000142 0.6000000000000014-0.1999999999999993c0.3000000000000007-0.3000000000000007 0.3000000000000007-0.8999999999999986 0-1.1999999999999993l-5-5-0.3000000000000007-0.1999999999999993c-0.1999999999999993-0.10000000000000142-0.3999999999999986-0.10000000000000142-0.6999999999999993 0l-0.1999999999999993 0.1999999999999993-5 5c-0.3000000000000007 0.3000000000000007-0.3000000000000007 0.8999999999999986 0 1.1999999999999993 0.09999999999999964 0.1999999999999993 0.40000000000000036 0.1999999999999993 0.5999999999999996 0.1999999999999993s0.40000000000000036-0.10000000000000142 0.5999999999999996-0.1999999999999993l3.5-3.6000000000000014v6.300000000000001h-9.100000000000005c-1.9000000000000004 0-3.4000000000000004-1.5-3.4000000000000004-3.3000000000000007s1.5-3.3000000000000007 3.200000000000001-3.3000000000000007h2.4000000000000004l-0.40000000000000036-2c-0.09999999999999964-0.5-0.1999999999999993-0.8999999999999986-0.1999999999999993-1.3999999999999986 0-3.5999999999999996 3-6.6 6.699999999999999-6.6 3.3000000000000007 0 6 2.299999999999999 6.600000000000001 5.500000000000002l0.3000000000000007 1.8999999999999986 1.8000000000000007-0.5c0.5-0.1999999999999993 0.8999999999999986-0.3000000000000007 1.3000000000000007-0.3000000000000007 2.8000000000000007 0 4.9999999999999964 2.3000000000000007 4.9999999999999964 5s-2.1999999999999993 5-5 5z' })
                )
            );
        }
    }]);

    return TiCloudStorageOutline;
}(React.Component);

exports.default = TiCloudStorageOutline;
module.exports = exports['default'];