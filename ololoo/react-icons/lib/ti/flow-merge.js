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

var TiFlowMerge = function (_React$Component) {
    _inherits(TiFlowMerge, _React$Component);

    function TiFlowMerge() {
        _classCallCheck(this, TiFlowMerge);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiFlowMerge).apply(this, arguments));
    }

    _createClass(TiFlowMerge, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30 26.973333333333336v-3.083333333333332c0-3.216666666666665-2.616666666666667-5.833333333333332-5.833333333333336-5.833333333333332-1.3783333333333339 0-2.5-1.1233333333333348-2.5-2.5v-2.5316666666666716c1.9333333333333371-0.6916666666666664 3.3333333333333357-2.5216666666666665 3.3333333333333357-4.691666666666666 0-2.756666666666667-2.2433333333333323-5-5-5s-5 2.243333333333333-5 5c0 2.17 1.3999999999999986 4 3.333333333333332 4.691666666666666v2.5299999999999994c0 1.3783333333333339-1.1216666666666661 2.5-2.5 2.5-3.216666666666667 0-5.833333333333334 2.616666666666667-5.833333333333334 5.833333333333336v3.083333333333332c-1.9333333333333318 0.6950000000000038-3.3333333333333313 2.5283333333333324-3.3333333333333313 4.695 0 2.756666666666664 2.243333333333333 5.0000000000000036 5.000000000000001 5.0000000000000036s5-2.2433333333333323 5-5c0-2.1700000000000017-1.4000000000000004-4-3.333333333333334-4.693333333333335v-3.083333333333332c0-1.379999999999999 1.1216666666666661-2.5 2.5-2.5 1.6333333333333346 0 3.1066666666666674-0.6799999999999997 4.166666666666666-1.7666666666666657 1.0599999999999987 1.086666666666666 2.533333333333335 1.7666666666666657 4.166666666666668 1.7666666666666657 1.3783333333333339 0 2.5 1.120000000000001 2.5 2.5v3.083333333333332c-1.9333333333333336 0.6916666666666664-3.333333333333332 2.5233333333333334-3.333333333333332 4.693333333333335 0 2.7566666666666677 2.2433333333333323 5 5 5s5-2.2433333333333323 5-5c0-2.1700000000000017-1.3999999999999986-4-3.333333333333332-4.693333333333335z m-18.333333333333332 6.359999999999999c-0.9199999999999999 0-1.666666666666666-0.75-1.666666666666666-1.6666666666666679s0.7466666666666661-1.6666666666666679 1.666666666666666-1.6666666666666679 1.666666666666666 0.75 1.666666666666666 1.6666666666666679-0.7466666666666661 1.6666666666666679-1.666666666666666 1.6666666666666679z m8.333333333333332-26.666666666666668c0.9200000000000017 0 1.6666666666666679 0.75 1.6666666666666679 1.666666666666666s-0.7466666666666661 1.666666666666666-1.6666666666666679 1.666666666666666-1.6666666666666679-0.75-1.6666666666666679-1.666666666666666 0.7466666666666661-1.666666666666667 1.6666666666666679-1.666666666666667z m8.333333333333336 26.666666666666668c-0.9200000000000017 0-1.6666666666666679-0.75-1.6666666666666679-1.6666666666666679s0.7466666666666661-1.6666666666666679 1.6666666666666679-1.6666666666666679 1.6666666666666679 0.75 1.6666666666666679 1.6666666666666679-0.7466666666666661 1.6666666666666679-1.6666666666666679 1.6666666666666679z' })
                )
            );
        }
    }]);

    return TiFlowMerge;
}(React.Component);

exports.default = TiFlowMerge;
module.exports = exports['default'];