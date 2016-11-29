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

var TiAdjustBrightness = function (_React$Component) {
    _inherits(TiAdjustBrightness, _React$Component);

    function TiAdjustBrightness() {
        _classCallCheck(this, TiAdjustBrightness);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiAdjustBrightness).apply(this, arguments));
    }

    _createClass(TiAdjustBrightness, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 11.556666666666667l1.6666666666666679-4.89c0.120000000000001-0.35499999999999954 0.129999999999999-0.753333333333333 0-1.1366666666666667-0.3133333333333326-0.9216666666666669-1.3166666666666664-1.413333333333333-2.2333333333333343-1.1000000000000005-0.923333333333332 0.31666666666666643-1.413333333333334 1.3166666666666664-1.1000000000000014 2.2366666666666664l1.6666666666666679 4.890000000000001z m-13.333333333333332 6.776666666666669c-0.3550000000000004-0.120000000000001-0.7533333333333339-0.129999999999999-1.1366666666666676 0-0.9216666666666669 0.3133333333333326-1.413333333333333 1.3166666666666664-1.1000000000000005 2.2333333333333343 0.31666666666666643 0.923333333333332 1.3166666666666664 1.413333333333334 2.2366666666666664 1.1000000000000014l4.890000000000001-1.6666666666666679-4.89-1.6666666666666679z m13.333333333333332 10.109999999999996l-1.6666666666666643 4.890000000000004c-0.120000000000001 0.3549999999999969-0.129999999999999 0.7533333333333303 0 1.1366666666666632 0.3133333333333326 0.9216666666666669 1.3166666666666664 1.413333333333334 2.2333333333333343 1.1000000000000014 0.923333333333332-0.31666666666667 1.413333333333334-1.31666666666667 1.1000000000000014-2.2366666666666646l-1.6666666666666679-4.890000000000001z m15.56666666666667-9.014999999999997c-0.3116666666666674-0.9216666666666669-1.3116666666666674-1.413333333333334-2.2333333333333343-1.1000000000000014l-4.890000000000001 1.6666666666666679 4.890000000000001 1.6666666666666679c0.3549999999999969 0.12166666666666615 0.7533333333333303 0.13333333333333286 1.1366666666666632 0 0.9200000000000017-0.3116666666666674 1.4116666666666688-1.3133333333333326 1.1000000000000014-2.2333333333333343z m-26.173333333333336-7.678333333333335l4.633333333333333 2.2783333333333324-2.2766666666666673-4.633333333333333c-0.16666666666666607-0.33833333333333293-0.44166666666666643-0.6266666666666669-0.8033333333333328-0.8049999999999997-0.8733333333333331-0.4299999999999997-1.9283333333333328-0.07000000000000028-2.3583333333333325 0.8033333333333328-0.4283333333333328 0.8716666666666661-0.06666666666666643 1.9283333333333328 0.8049999999999997 2.3566666666666674z m-0.8050000000000015 17.30333333333333c-0.4283333333333328 0.8716666666666661-0.06666666666666643 1.9266666666666659 0.8033333333333328 2.3566666666666656 0.8716666666666661 0.42833333333333456 1.9283333333333328 0.06666666666666643 2.3566666666666656-0.8033333333333346l2.2766666666666673-4.633333333333333-4.633333333333333 2.2766666666666673c-0.336666666666666 0.16666666666666785-0.625 0.4383333333333326-0.8049999999999997 0.8033333333333346z m22.016666666666666-0.803333333333331l-4.633333333333329-2.280000000000001 2.2766666666666673 4.633333333333333c0.16666666666666785 0.3383333333333347 0.4383333333333326 0.6266666666666652 0.8000000000000007 0.8049999999999997 0.8733333333333348 0.42833333333333456 1.9283333333333346 0.06666666666666643 2.3583333333333343-0.8033333333333346s0.07000000000000028-1.9283333333333346-0.8033333333333346-2.3566666666666656z m0.801666666666673-17.306666666666665c0.4299999999999997-0.8733333333333348 0.07000000000000028-1.9283333333333346-0.8000000000000007-2.3583333333333343-0.8733333333333348-0.42666666666666586-1.9299999999999997-0.06666666666666643-2.3583333333333343 0.8049999999999997l-2.283333333333335 4.638333333333334 4.636666666666667-2.2799999999999994c0.336666666666666-0.16666666666666607 0.625-0.4399999999999995 0.8033333333333346-0.8033333333333328z m-11.40666666666667 1.5566666666666649c-4.133333333333333 0-7.5 3.366666666666667-7.5 7.5s3.366666666666667 7.5 7.5 7.5 7.5-3.366666666666667 7.5-7.5-3.366666666666667-7.5-7.5-7.5z' })
                )
            );
        }
    }]);

    return TiAdjustBrightness;
}(React.Component);

exports.default = TiAdjustBrightness;
module.exports = exports['default'];