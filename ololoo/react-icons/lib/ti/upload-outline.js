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

var TiUploadOutline = function (_React$Component) {
    _inherits(TiUploadOutline, _React$Component);

    function TiUploadOutline() {
        _classCallCheck(this, TiUploadOutline);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiUploadOutline).apply(this, arguments));
    }

    _createClass(TiUploadOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34.97666666666667 28.333333333333336c0-0.1750000000000007-0.006666666666667709-0.3500000000000014-0.06333333333333258-0.5266666666666673l-3.333333333333332-10c-0.15500000000000114-0.46000000000000085-0.5033333333333339-0.8049999999999997-0.9333333333333336-0.9899999999999984 1.4666666666666686-1.958333333333334 1.3333333333333321-4.745000000000001-0.4499999999999993-6.523333333333333l-10.196666666666669-10.200000000000003-10.200000000000001 10.200000000000001c-1.7799999999999994 1.7783333333333342-1.916666666666666 4.566666666666668-0.4499999999999993 6.523333333333335-0.4283333333333328 0.18333333333333357-0.7799999999999994 0.5266666666666673-0.9333333333333336 0.9899999999999984l-3.333333333333334 10c-0.05666666666666664 0.1750000000000007-0.06333333333333346 0.3500000000000014-0.06333333333333346 0.5266666666666673-0.019999999999998685 0-0.019999999999998685 8.333333333333336-0.019999999999998685 8.333333333333336 0 0.9216666666666669 0.7450000000000001 1.6666666666666643 1.666666666666667 1.6666666666666643h26.666666666666668c0.9216666666666669 0 1.6666666666666643-0.7449999999999974 1.6666666666666643-1.6666666666666643 0 0 0-8.333333333333336-0.023333333333333428-8.333333333333336z m-22.821666666666665-15.683333333333335l7.844999999999999-7.845 7.844999999999999 7.845c0.6499999999999986 0.6500000000000004 0.6499999999999986 1.705 0 2.3566666666666674-0.6333333333333329 0.6283333333333339-1.7250000000000014 0.6283333333333339-2.3566666666666656 0l-3.8216666666666654-3.823333333333334v9.650000000000002c0 0.9200000000000017-0.7466666666666661 1.6666666666666679-1.6666666666666679 1.6666666666666679s-1.6666666666666679-0.7466666666666661-1.6666666666666679-1.6666666666666679v-9.650000000000002l-3.8216666666666637 3.825000000000001c-0.6333333333333329 0.6283333333333339-1.7249999999999996 0.6283333333333339-2.3566666666666674 0-0.6500000000000004-0.6500000000000004-0.6500000000000004-1.708333333333334 0-2.3566666666666674z m-0.9550000000000018 7.35h3.8000000000000007v0.8333333333333321c0 2.7566666666666677 2.2433333333333323 5 5 5s5-2.2433333333333323 5-5v-0.8333333333333321h3.8000000000000007l2.775000000000002 8.333333333333336h-23.153333333333336l2.7799999999999994-8.333333333333336z m-2.8666666666666654 15v-5h23.333333333333336v5h-23.333333333333336z' })
                )
            );
        }
    }]);

    return TiUploadOutline;
}(React.Component);

exports.default = TiUploadOutline;
module.exports = exports['default'];