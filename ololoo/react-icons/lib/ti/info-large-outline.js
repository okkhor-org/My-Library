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

var TiInfoLargeOutline = function (_React$Component) {
    _inherits(TiInfoLargeOutline, _React$Component);

    function TiInfoLargeOutline() {
        _classCallCheck(this, TiInfoLargeOutline);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiInfoLargeOutline).apply(this, arguments));
    }

    _createClass(TiInfoLargeOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm23.723333333333333 26.69l0.923333333333332-1.8399999999999999c1.3466666666666676-2.6833333333333336 1.495000000000001-5.380000000000003 0.42166666666666686-7.586666666666666-0.1999999999999993-0.4200000000000017-0.46000000000000085-0.8000000000000007-0.7366666666666681-1.1550000000000011 2.3483333333333363-1.0333333333333332 4.001666666666672-3.3750000000000018 4.001666666666672-6.108333333333334 0-3.6750000000000007-2.990000000000002-6.666666666666667-6.666666666666668-6.666666666666667s-6.666666666666668 2.993333333333333-6.666666666666668 6.666666666666667c0 1.3066666666666666 0.39000000000000057 2.5166666666666657 1.0399999999999991 3.545-2.826666666666666 0.5500000000000007-4.676666666666666 2.08-4.911666666666667 2.291666666666666-1.1933333333333334 1.0500000000000007-1.4749999999999996 2.8000000000000007-0.6750000000000007 4.173333333333332 0.5400000000000009 0.9333333333333336 1.4766666666666666 1.5166666666666657 2.49 1.6333333333333329l-0.9233333333333338 1.8399999999999999c-1.3466666666666676 2.6833333333333336-1.4949999999999992 5.379999999999999-0.4233333333333338 7.586666666666666 0.9416666666666664 1.9400000000000013 2.6999999999999993 3.2583333333333364 4.953333333333333 3.716666666666665 0.6883333333333326 0.13833333333333542 1.3933333333333344 0.21000000000000085 2.09 0.21000000000000085 3.9466666666666654 0 6.608333333333334-2.2449999999999974 6.899999999999999-2.5 1.1933333333333316-1.0500000000000007 1.4783333333333353-2.8000000000000007 0.6783333333333346-4.173333333333332-0.5399999999999991-0.9266666666666659-1.4766666666666666-1.5166666666666657-2.4933333333333323-1.6333333333333329z m-2.056666666666665-20.023333333333333c1.8399999999999999-8.881784197001252e-16 3.333333333333332 1.4949999999999992 3.333333333333332 3.333333333333332s-1.4933333333333323 3.333333333333334-3.333333333333332 3.333333333333334c-1.841666666666665 0-3.333333333333332-1.4916666666666671-3.333333333333332-3.333333333333334s1.4916666666666671-3.333333333333334 3.333333333333332-3.333333333333334z m-3.0266666666666673 25c-0.4499999999999993 0-0.9333333333333336-0.04166666666666785-1.423333333333332-0.14499999999999957-2.7366666666666664-0.5566666666666684-3.879999999999999-3.2216666666666676-2.213333333333333-6.545000000000002l1.666666666666666-3.3249999999999993c0.8333333333333321-1.658333333333335 0.783333333333335-2.716666666666665-0.17999999999999972-3.3900000000000006-0.3000000000000007-0.20833333333333215-0.7166666666666668-0.283333333333335-1.1500000000000004-0.283333333333335-0.9599999999999991 0-2 0.3583333333333343-2 0.3583333333333343s1.8883333333333336-1.6666666666666679 4.686666666666666-1.6666666666666679c0.4499999999999993 0 0.9333333333333336 0.04166666666666785 1.4266666666666659 0.14499999999999957 2.7333333333333343 0.5516666666666694 3.8800000000000026 3.2183333333333373 2.2133333333333347 6.541666666666668l-1.6666666666666679 3.3216666666666654c-0.8333333333333321 1.663333333333334-0.7866666666666653 2.719999999999999 0.17666666666666586 3.3916666666666657 0.3000000000000007 0.21000000000000085 0.7216666666666676 0.283333333333335 1.1533333333333324 0.283333333333335 0.961666666666666 0 2-0.3550000000000004 2-0.3550000000000004s-1.8883333333333319 1.6666666666666679-4.690000000000001 1.6666666666666679z' })
                )
            );
        }
    }]);

    return TiInfoLargeOutline;
}(React.Component);

exports.default = TiInfoLargeOutline;
module.exports = exports['default'];