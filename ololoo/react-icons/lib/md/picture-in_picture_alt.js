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

var MdPictureInPictureAlt = function (_React$Component) {
    _inherits(MdPictureInPictureAlt, _React$Component);

    function MdPictureInPictureAlt() {
        _classCallCheck(this, MdPictureInPictureAlt);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdPictureInPictureAlt).apply(this, arguments));
    }

    _createClass(MdPictureInPictureAlt, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35 31.71666666666667v-23.433333333333337h-30v23.433333333333337h30z m3.3599999999999994-0.07666666666666799q0 1.3283333333333331-1.0166666666666657 2.3433333333333337t-2.3416666666666686 1.0166666666666657h-30.001666666666665q-1.326666666666667 0-2.341666666666667-1.0166666666666657t-1.0166666666666666-2.3433333333333337v-23.36q0-1.3283333333333331 1.0166666666666666-2.3049999999999997t2.341666666666667-0.9750000000000014h30q1.3299999999999983 0 2.344999999999999 0.9749999999999996t1.0166666666666657 2.3049999999999997v23.36z m-6.719999999999999-13.280000000000001v10h-13.283333333333331v-10h13.283333333333331z' })
                )
            );
        }
    }]);

    return MdPictureInPictureAlt;
}(React.Component);

exports.default = MdPictureInPictureAlt;
module.exports = exports['default'];