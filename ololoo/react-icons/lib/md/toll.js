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

var MdToll = function (_React$Component) {
    _inherits(MdToll, _React$Component);

    function MdToll() {
        _classCallCheck(this, MdToll);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdToll).apply(this, arguments));
    }

    _createClass(MdToll, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm5 20q0 3.2833333333333314 1.836666666666667 5.859999999999999t4.805000000000001 3.5933333333333337v3.4383333333333326q-4.375-1.0933333333333337-7.1883333333333335-4.688333333333333t-2.813333333333334-8.203333333333333 2.813333333333333-8.203333333333333 7.188333333333333-4.6883333333333335v3.4383333333333335q-2.966666666666667 1.0166666666666657-4.805000000000001 3.5933333333333337t-1.8366666666666651 5.859999999999999z m20 10q4.140000000000001 0 7.07-2.9299999999999997t2.9299999999999997-7.07-2.9299999999999997-7.07-7.07-2.9299999999999997-7.07 2.9299999999999997-2.9299999999999997 7.07 2.9299999999999997 7.07 7.07 2.9299999999999997z m0-23.36q5.466666666666669 0 9.413333333333334 3.9450000000000003t3.9450000000000003 9.415-3.9450000000000003 9.411666666666669-9.413333333333334 3.9450000000000003-9.413333333333334-3.9450000000000003-3.9449999999999985-9.411666666666669 3.9450000000000003-9.416666666666668 9.413333333333332-3.9416666666666655z' })
                )
            );
        }
    }]);

    return MdToll;
}(React.Component);

exports.default = MdToll;
module.exports = exports['default'];