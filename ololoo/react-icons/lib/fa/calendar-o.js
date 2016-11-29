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

var FaCalendarO = function (_React$Component) {
    _inherits(FaCalendarO, _React$Component);

    function FaCalendarO() {
        _classCallCheck(this, FaCalendarO);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaCalendarO).apply(this, arguments));
    }

    _createClass(FaCalendarO, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm4.285714285714286 37.142857142857146h31.42857142857143v-22.85714285714286h-31.42857142857143v22.85714285714286z m8.571428571428573-27.142857142857146v-6.428571428571429q0-0.31428571428571406-0.1999999999999993-0.5142857142857138t-0.514285714285716-0.20000000000000018h-1.4285714285714288q-0.31428571428571495 0-0.5142857142857142 0.20000000000000018t-0.1999999999999993 0.5142857142857142v6.428571428571429q0 0.31428571428571495 0.1999999999999993 0.5142857142857142t0.5142857142857142 0.1999999999999993h1.4285714285714288q0.31428571428571495 0 0.5142857142857142-0.1999999999999993t0.20000000000000107-0.5142857142857142z m17.142857142857142 0v-6.428571428571429q0-0.31428571428571406-0.1999999999999993-0.5142857142857138t-0.514285714285716-0.20000000000000018h-1.428571428571427q-0.31428571428571317 0-0.514285714285716 0.20000000000000018t-0.1999999999999993 0.5142857142857142v6.428571428571429q0 0.31428571428571495 0.1999999999999993 0.5142857142857142t0.5142857142857125 0.1999999999999993h1.428571428571427q0.31428571428571317 0 0.514285714285716-0.1999999999999993t0.20000000000000284-0.5142857142857142z m8.57142857142857-1.4285714285714288v28.571428571428577q0 1.1600000000000037-0.8485714285714252 2.008571428571429t-2.008571428571429 0.8485714285714252h-31.42857142857143q-1.1599999999999993 0-2.0085714285714276-0.8485714285714252t-0.8485714285714285-2.008571428571429v-28.571428571428577q0-1.1599999999999984 0.8485714285714285-2.008571428571427t2.0085714285714285-0.8485714285714279h2.8571428571428568v-2.142857142857143q0-1.4714285714285715 1.048571428571428-2.522857142857143t2.522857142857145-1.0485714285714285h1.4285714285714288q1.4714285714285715 0 2.522857142857143 1.0485714285714285t1.048571428571428 2.522857142857143v2.142857142857143h8.57142857142857v-2.142857142857143q0-1.4714285714285715 1.048571428571428-2.522857142857143t2.522857142857145-1.0485714285714285h1.428571428571427q1.4714285714285715 0 2.5228571428571414 1.0485714285714285t1.0485714285714351 2.522857142857143v2.142857142857143h2.857142857142854q1.1600000000000037 0 2.008571428571429 0.8485714285714288t0.8485714285714252 2.008571428571428z' })
                )
            );
        }
    }]);

    return FaCalendarO;
}(React.Component);

exports.default = FaCalendarO;
module.exports = exports['default'];