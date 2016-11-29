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

var MdRowing = function (_React$Component) {
    _inherits(MdRowing, _React$Component);

    function MdRowing() {
        _classCallCheck(this, MdRowing);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdRowing).apply(this, arguments));
    }

    _createClass(MdRowing, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35 35l-5 5-5-5v-2.5l-11.796666666666667-11.796666666666667q-0.5466666666666669 0.07833333333333314-1.5633333333333326 0.07833333333333314v-3.594999999999999q2.033333333333333 0.07833333333333314 4.216666666666667-0.8999999999999986t3.5950000000000006-2.460000000000001l2.344999999999999-2.578333333333333q1.25-1.25 2.7333333333333343-1.25h0.0799999999999983q1.4833333333333343 0 2.616666666666667 1.0933333333333337t1.1333333333333329 2.6566666666666663v9.61q0 2.0333333333333314-1.5633333333333326 3.5933333333333337l-5.938333333333333-5.938333333333333v-3.830000000000002q-1.5633333333333326 1.3283333333333331-3.828333333333333 2.3433333333333337l10.466666666666669 10.466666666666665h2.5z m-10-33.36q1.3283333333333331-4.440892098500626e-16 2.3433333333333337 1.0166666666666662t1.0166666666666657 2.3416666666666663-1.0166666666666657 2.341666666666667-2.3433333333333337 1.0166666666666657-2.3433333333333337-1.0166666666666666-1.0166666666666657-2.339999999999999 1.0166666666666657-2.345 2.3433333333333337-1.0166666666666664z m-10.860000000000001 22.5l4.216666666666667 4.216666666666669h-3.3566666666666656l-5.861666666666666 5.783333333333331-2.5-2.5z' })
                )
            );
        }
    }]);

    return MdRowing;
}(React.Component);

exports.default = MdRowing;
module.exports = exports['default'];