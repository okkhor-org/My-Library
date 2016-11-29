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

var MdComputer = function (_React$Component) {
    _inherits(MdComputer, _React$Component);

    function MdComputer() {
        _classCallCheck(this, MdComputer);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdComputer).apply(this, arguments));
    }

    _createClass(MdComputer, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm6.640000000000001 10v16.64h26.71666666666667v-16.64h-26.715000000000003z m26.72 20h6.640000000000001v3.3599999999999994h-40v-3.3599999999999994h6.640000000000001q-1.3283333333333331 0-2.3049999999999997-1.0166666666666657t-0.9750000000000001-2.3416666666666686v-16.641666666666666q0-1.3266666666666662 0.976666666666667-2.341666666666667t2.3066666666666666-1.0166666666666666h26.716666666666665q1.3299999999999983 0 2.306666666666665 1.0166666666666666t0.9733333333333434 2.341666666666667v16.641666666666666q0 1.3283333333333331-0.9766666666666666 2.3433333333333337t-2.3049999999999997 1.0166666666666657z' })
                )
            );
        }
    }]);

    return MdComputer;
}(React.Component);

exports.default = MdComputer;
module.exports = exports['default'];