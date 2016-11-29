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

var FaBriefcase = function (_React$Component) {
    _inherits(FaBriefcase, _React$Component);

    function FaBriefcase() {
        _classCallCheck(this, FaBriefcase);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaBriefcase).apply(this, arguments));
    }

    _createClass(FaBriefcase, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm14.285714285714286 5.714285714285714h11.428571428571429v-2.857142857142857h-11.428571428571429v2.857142857142857z m25.714285714285715 14.285714285714285v10.714285714285715q0 1.471428571428568-1.048571428571428 2.5228571428571414t-2.5228571428571414 1.048571428571428h-32.85714285714286q-1.4714285714285715 0-2.522857142857143-1.048571428571428t-1.0485714285714263-2.5228571428571414v-10.714285714285715h15v3.571428571428573q0 0.5800000000000018 0.4242857142857144 1.0042857142857144t1.0042857142857127 0.4242857142857126h7.142857142857142q0.5799999999999983 0 1.0042857142857144-0.4242857142857126t0.4242857142857126-1.0042857142857144v-3.571428571428573h15.000000000000004z m-17.142857142857142 0v2.8571428571428577h-5.714285714285715v-2.8571428571428577h5.714285714285715z m17.142857142857142-10.714285714285715v8.57142857142857h-40v-8.571428571428571q0-1.4714285714285715 1.0485714285714285-2.522857142857143t2.522857142857143-1.0485714285714254h7.857142857142858v-3.5714285714285716q0-0.8928571428571428 0.6257142857142863-1.5171428571428573t1.517142857142856-0.6257142857142854h12.85714285714286q0.8928571428571423 0 1.5171428571428578 0.6257142857142858t0.6257142857142846 1.517142857142857v3.5714285714285716h7.857142857142858q1.471428571428575 0 2.5228571428571414 1.048571428571429t1.048571428571428 2.522857142857143z' })
                )
            );
        }
    }]);

    return FaBriefcase;
}(React.Component);

exports.default = FaBriefcase;
module.exports = exports['default'];