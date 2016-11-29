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

var TiInfinityOutline = function (_React$Component) {
    _inherits(TiInfinityOutline, _React$Component);

    function TiInfinityOutline() {
        _classCallCheck(this, TiInfinityOutline);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiInfinityOutline).apply(this, arguments));
    }

    _createClass(TiInfinityOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.390000000000004 14.326666666666668c1.9199999999999982 0 3.7283333333333353 0.75 5.088333333333335 2.1066666666666656 1.3583333333333343 1.3599999999999994 2.1099999999999994 3.166666666666668 2.1099999999999994 5.093333333333334s-0.75 3.7333333333333343-2.1133333333333297 5.093333333333334c-1.3550000000000004 1.3583333333333343-3.163333333333334 2.1099999999999994-5.088333333333335 2.1099999999999994s-3.7300000000000004-0.75-5.091666666666665-2.1099999999999994l-2.295000000000009-2.200000000000003-2.323333333333334 2.2300000000000004c-1.3283333333333331 1.3333333333333321-3.1366666666666667 2.0799999999999983-5.0600000000000005 2.0799999999999983s-3.7333333333333343-0.75-5.09-2.111666666666668c-1.3599999999999985-1.3516666666666595-2.1099999999999985-3.163333333333327-2.1099999999999985-5.084999999999994s0.75-3.7333333333333343 2.1166666666666663-5.096666666666668c1.3566666666666674-1.3550000000000004 3.163333333333332-2.1099999999999994 5.088333333333333-2.1099999999999994s3.7333333333333343 0.75 5.093333333333334 2.1099999999999994l2.285 2.1999999999999993 2.328333333333333-2.2333333333333343c1.3299999999999983-1.3283333333333331 3.1366666666666667-2.076666666666666 5.061666666666667-2.076666666666666z m0-3.333333333333334c-2.8000000000000007 0-5.416666666666668 1.075000000000001-7.388333333333332 3.0216666666666665-1.9366666666666674-1.9333333333333336-4.574999999999999-3.0233333333333334-7.383333333333333-3.0233333333333334-2.8116666666666674 0-5.455 1.0950000000000006-7.443333333333334 3.088333333333333-1.9900000000000002 1.9833333333333325-3.086666666666667 4.633333333333331-3.086666666666667 7.446666666666667s1.0966666666666667 5.456666666666667 3.086666666666667 7.446666666666669c1.9833333333333334 1.9866666666666681 4.633333333333332 3.086666666666666 7.446666666666668 3.086666666666666 2.8000000000000007 0 5.416666666666668-1.0749999999999993 7.383333333333333-3.0233333333333334 1.9400000000000013 1.9333333333333336 4.578333333333333 3.0233333333333334 7.386666666666667 3.0233333333333334 2.8166666666666664 0 5.460000000000001-1.0966666666666676 7.450000000000003-3.09 1.9866666666666646-1.9800000000000004 3.0833333333333357-4.626666666666669 3.0833333333333357-7.445 0-2.8133333333333326-1.0949999999999989-5.456666666666667-3.0833333333333357-7.449999999999999-1.9966666666666697-1.9916666666666671-4.640000000000001-3.083333333333334-7.449999999999999-3.083333333333334z m-14.773333333333337 9.166666666666666c0.3766666666666669 0 0.711666666666666 0.14666666666666828 1.0216666666666665 0.4499999999999993l0.9499999999999993 0.9166666666666679-1.0050000000000008 0.9633333333333347c-0.2333333333333325 0.23666666666666814-0.586666666666666 0.37166666666666615-0.9633333333333329 0.37166666666666615-0.37833333333333385 0-0.7300000000000004-0.13333333333333286-0.9666666666666668-0.37166666666666615-0.25833333333333286-0.25833333333333286-0.40000000000000036-0.6000000000000014-0.40000000000000036-0.9633333333333347 0-0.36666666666666714 0.14000000000000057-0.7033333333333331 0.40499999999999936-0.966666666666665 0.2599999999999998-0.26000000000000156 0.5916666666666668-0.3999999999999986 0.9600000000000009-0.3999999999999986z m0-1.6666666666666679c-0.8083333333333336 0-1.5666666666666664 0.31666666666666643-2.1400000000000006 0.8883333333333319-0.5749999999999993 0.5749999999999993-0.8916666666666675 1.3333333333333321-0.8916666666666675 2.1433333333333344 0 0.8066666666666649 0.31666666666666643 1.5666666666666664 0.8900000000000006 2.1416666666666657s1.3583333333333325 0.8616666666666681 2.1449999999999996 0.8616666666666681 1.5716666666666672-0.2866666666666653 2.1433333333333326-0.8599999999999994l2.2333333333333343-2.1400000000000006-2.203333333333333-2.116666666666667c-0.5999999999999996-0.6000000000000014-1.3616666666666664-0.9166666666666679-2.171666666666667-0.9166666666666679z m14.773333333333337 1.6950000000000003c0.379999999999999 0 0.7300000000000004 0.13333333333333286 0.9600000000000009 0.36666666666666714 0.26333333333333186 0.26333333333333186 0.40333333333333243 0.5966666666666676 0.40333333333333243 0.966666666666665s-0.13833333333333186 0.7049999999999983-0.40500000000000114 0.9699999999999989c-0.24166666666666714 0.2433333333333323-0.5883333333333347 0.379999999999999-0.9533333333333331 0.379999999999999-0.38333333333333286 0-0.7399999999999984-0.14666666666666828-1.0283333333333324-0.43333333333333357l-0.9499999999999993-0.9166666666666679 1.004999999999999-0.961666666666666c0.23333333333333428-0.23833333333333329 0.5883333333333347-0.37166666666666615 0.966666666666665-0.37166666666666615z m0-1.6666666666666679c-0.7866666666666653 0-1.5716666666666654 0.2866666666666653-2.1449999999999996 0.8599999999999994l-2.2333333333333343 2.1400000000000006 2.203333333333333 2.116666666666667c0.6000000000000014 0.6000000000000014 1.3949999999999996 0.8999999999999986 2.1833333333333336 0.8999999999999986s1.5616666666666674-0.29666666666666686 2.133333333333333-0.870000000000001c0.5749999999999993-0.5733333333333341 0.8883333333333319-1.3333333333333321 0.8883333333333319-2.1449999999999996s-0.3133333333333326-1.5666666666666664-0.8866666666666667-2.1449999999999996c-0.5749999999999993-0.5733333333333341-1.3599999999999994-0.8583333333333343-2.1433333333333344-0.8583333333333343z' })
                )
            );
        }
    }]);

    return TiInfinityOutline;
}(React.Component);

exports.default = TiInfinityOutline;
module.exports = exports['default'];