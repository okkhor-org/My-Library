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

var MdMoreVert = function (_React$Component) {
    _inherits(MdMoreVert, _React$Component);

    function MdMoreVert() {
        _classCallCheck(this, MdMoreVert);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdMoreVert).apply(this, arguments));
    }

    _createClass(MdMoreVert, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 26.64q1.3283333333333331 0 2.3433333333333337 1.0166666666666657t1.0166666666666657 2.3416666666666686-1.0166666666666657 2.3416666666666686-2.3433333333333337 1.0166666666666657-2.3433333333333337-1.0166666666666657-1.0166666666666657-2.3400000000000034 1.0166666666666657-2.344999999999999 2.3433333333333337-1.0166666666666657z m0-10q1.3283333333333331 0 2.3433333333333337 1.0166666666666657t1.0166666666666657 2.3416666666666686-1.0166666666666657 2.3416666666666686-2.3433333333333337 1.0166666666666657-2.3433333333333337-1.0166666666666657-1.0166666666666657-2.3400000000000034 1.0166666666666657-2.344999999999999 2.3433333333333337-1.0166666666666657z m0-3.280000000000001q-1.3283333333333331 0-2.3433333333333337-1.0166666666666657t-1.0166666666666657-2.341666666666667 1.0166666666666657-2.341666666666667 2.3433333333333337-1.0183333333333335 2.3433333333333337 1.0166666666666666 1.0166666666666657 2.3433333333333337-1.0166666666666657 2.3450000000000006-2.3433333333333337 1.0166666666666657z' })
                )
            );
        }
    }]);

    return MdMoreVert;
}(React.Component);

exports.default = MdMoreVert;
module.exports = exports['default'];