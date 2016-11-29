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

var FaHeart = function (_React$Component) {
    _inherits(FaHeart, _React$Component);

    function FaHeart() {
        _classCallCheck(this, FaHeart);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaHeart).apply(this, arguments));
    }

    _createClass(FaHeart, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 37.142857142857146q-0.5799999999999983 0-0.9828571428571422-0.3999999999999986l-13.928571428571429-13.438571428571429q-0.22285714285714242-0.17857142857142705-0.6142857142857139-0.5799999999999983t-1.2385714285714284-1.46142857142857-1.5171428571428573-2.1757142857142853-1.1942857142857142-2.6999999999999993-0.5242857142857151-3.08142857142858q0-4.91 2.8342857142857145-7.677142857142857t7.8342857142857145-2.771428571428572q1.3857142857142861 0 2.8242857142857147 0.48t2.678571428571427 1.2942857142857145 2.1314285714285717 1.5285714285714285 1.6971428571428575 1.5200000000000005q0.8028571428571425-0.8028571428571434 1.6971428571428575-1.517142857142857t2.1314285714285717-1.5285714285714285 2.6785714285714306-1.2942857142857145 2.8242857142857147-0.48q5 0 7.834285714285713 2.7671428571428573t2.8342857142857127 7.677142857142857q0 4.9328571428571415-5.1114285714285685 10.042857142857141l-13.905714285714286 13.394285714285715q-0.3999999999999986 0.3999999999999986-0.9828571428571422 0.3999999999999986z' })
                )
            );
        }
    }]);

    return FaHeart;
}(React.Component);

exports.default = FaHeart;
module.exports = exports['default'];