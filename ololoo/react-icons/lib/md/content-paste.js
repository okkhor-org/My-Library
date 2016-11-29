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

var MdContentPaste = function (_React$Component) {
    _inherits(MdContentPaste, _React$Component);

    function MdContentPaste() {
        _classCallCheck(this, MdContentPaste);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdContentPaste).apply(this, arguments));
    }

    _createClass(MdContentPaste, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.640000000000004 33.36v-26.716666666666665h-3.283333333333335v5h-16.715000000000003v-5h-3.2833333333333314v26.716666666666665h23.283333333333335z m-11.640000000000004-30q-0.7033333333333331 8.881784197001252e-16-1.1716666666666669 0.4666666666666677t-0.466666666666665 1.173333333333333 0.466666666666665 1.1716666666666669 1.1716666666666669 0.4666666666666668 1.1716666666666669-0.4666666666666668 0.466666666666665-1.1716666666666669-0.466666666666665-1.1716666666666669-1.1716666666666669-0.4666666666666668z m11.64 8.881784197001252e-16q1.3283333333333331 0 2.3433333333333337 0.9766666666666666t1.0166666666666657 2.3049999999999997v26.71666666666667q0 1.3299999999999983-1.0166666666666657 2.306666666666665t-2.3433333333333337 0.9750000000000014h-23.28333333333333q-1.3266666666666689 0-2.3416666666666686-0.9766666666666666t-1.0150000000000006-2.3049999999999997v-26.715q0-1.330000000000001 1.0166666666666666-2.3066666666666675t2.3416666666666677-0.9766666666666666h6.953333333333333q0.5466666666666669-1.4833333333333334 1.7966666666666669-2.421666666666667t2.8916666666666657-0.9383333333333335 2.8883333333333354 0.9383333333333332 1.7966666666666669 2.421666666666667h6.954999999999998z' })
                )
            );
        }
    }]);

    return MdContentPaste;
}(React.Component);

exports.default = MdContentPaste;
module.exports = exports['default'];