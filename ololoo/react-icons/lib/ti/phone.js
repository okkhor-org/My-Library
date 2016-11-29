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

var TiPhone = function (_React$Component) {
    _inherits(TiPhone, _React$Component);

    function TiPhone() {
        _classCallCheck(this, TiPhone);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiPhone).apply(this, arguments));
    }

    _createClass(TiPhone, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm22.290000000000003 11.805000000000001l6.183333333333334-6.183333333333334-0.7283333333333317-0.7233333333333336c-0.9433333333333316-0.9449999999999998-2.5916666666666686-0.9449999999999998-3.533333333333335 0l-2.645000000000003 2.6416666666666657c-0.4733333333333327 0.4733333333333336-0.7333333333333343 1.1000000000000005-0.7333333333333343 1.7666666666666666s0.26000000000000156 1.2966666666666669 0.7300000000000004 1.7666666666666675l0.7266666666666666 0.7300000000000004z m-11.213333333333336 9.761666666666665c-0.9433333333333334-0.9450000000000003-2.591666666666667-0.9450000000000003-3.533333333333333 0l-2.6449999999999996 2.6416666666666657c-0.4733333333333336 0.4733333333333327-0.7333333333333334 1.1000000000000014-0.7333333333333334 1.7666666666666657s0.2599999999999998 1.2966666666666669 0.7333333333333334 1.7716666666666683l0.7300000000000004 0.7199999999999989 6.171666666666667-6.171666666666667-0.7233333333333327-0.7300000000000004z m19.65166666666667-13.683333333333332l-0.5900000000000034-0.5916666666666668-6.18 6.18 1.0833333333333321 1.083333333333334c0.158333333333335 0.1566666666666663 0.2433333333333323 0.36666666666666714 0.2433333333333323 0.5883333333333329s-0.08333333333333215 0.43333333333333357-0.24166666666666714 0.5899999999999999l-9.31 9.309999999999999c-0.31666666666666643 0.3133333333333326-0.8666666666666671 0.31666666666666643-1.1799999999999997 0l-1.083333333333334-1.0833333333333321-6.17 6.183333333333334 0.5899999999999999 0.5899999999999999c0.43333333333333357 0.43333333333333357 2.076666666666666 1.8416666666666686 5.093333333333334 1.8416666666666686 2.6933333333333334 0 7.0933333333333355-1.1866666666666674 12.750000000000002-6.841666666666669 11.288333333333334-11.291666666666668 5.263333333333335-17.583333333333336 4.995000000000001-17.85z' })
                )
            );
        }
    }]);

    return TiPhone;
}(React.Component);

exports.default = TiPhone;
module.exports = exports['default'];