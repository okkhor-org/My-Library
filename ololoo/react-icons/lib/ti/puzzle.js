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

var TiPuzzle = function (_React$Component) {
    _inherits(TiPuzzle, _React$Component);

    function TiPuzzle() {
        _classCallCheck(this, TiPuzzle);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiPuzzle).apply(this, arguments));
    }

    _createClass(TiPuzzle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.083333333333336 18.75c0.6066666666666656 0 1.173333333333332 0.24166666666666714 1.6400000000000006 0.6499999999999986 0.9166666666666679 0.5549999999999997 1.2766666666666673-0.054999999999999716 1.2766666666666673-0.6499999999999986v-2.916666666666666c0-1.375-1.125-2.5-2.5-2.5h-4.583333333333332c-0.5933333333333337 0-1.206666666666667-0.35999999999999943-0.6499999999999986-1.2766666666666673 0.408333333333335-0.4666666666666668 0.6499999999999986-1.0333333333333332 0.6499999999999986-1.6400000000000006 0-1.6116666666666664-1.6783333333333346-2.916666666666667-3.75-2.916666666666667s-3.75 1.3050000000000006-3.75 2.916666666666667c0 0.5 0.15833333333333321 0.9599999999999991 0.4250000000000007 1.3716666666666661 0.8449999999999989 1.1216666666666661 0.22666666666666657 1.545-0.4250000000000007 1.545h-4.5833333333333375c-1.375 1.7763568394002505e-15-2.5 1.1250000000000036-2.5 2.5000000000000018v2.916666666666666c0 0.6499999999999986 0.4233333333333338 1.2699999999999996 1.5466666666666669 0.4066666666666663 0.41000000000000014-0.25 0.8699999999999992-0.4066666666666663 1.3699999999999992-0.4066666666666663 1.6099999999999994 0 2.916666666666668 1.6799999999999997 2.916666666666668 3.75s-1.3066666666666666 3.75-2.916666666666668 3.75c-0.6066666666666674 0-1.1733333333333338-0.24166666666666714-1.6400000000000006-0.6499999999999986-0.9166666666666661-0.5549999999999997-1.2766666666666673 0.054999999999999716-1.2766666666666673 0.6499999999999986v4.583333333333336c0 1.375 1.125 2.5 2.5 2.5h4.583333333333334c0.6500000000000004 0 1.2700000000000014-0.423333333333332 0.40499999999999936-1.5450000000000017-0.24666666666666615-0.4116666666666653-0.40499999999999936-0.8716666666666661-0.40499999999999936-1.3716666666666661 0-1.6116666666666681 1.6783333333333328-2.916666666666668 3.7499999999999982-2.916666666666668s3.75 1.3049999999999997 3.75 2.916666666666668c0 0.6083333333333343-0.24166666666666714 1.173333333333332-0.6499999999999986 1.639999999999997-0.5566666666666684 0.9166666666666643 0.05666666666666842 1.2766666666666637 0.6499999999999986 1.2766666666666637h4.583333333333336c1.375 0 2.5-1.125 2.5-2.5v-4.583333333333336c0-0.6499999999999986-0.423333333333332-1.2699999999999996-1.5466666666666669-0.4066666666666663-0.41000000000000014 0.25-0.870000000000001 0.4066666666666663-1.370000000000001 0.4066666666666663-1.6099999999999994 0-2.916666666666668-1.6799999999999997-2.916666666666668-3.75s1.3066666666666684-3.75 2.916666666666668-3.75z' })
                )
            );
        }
    }]);

    return TiPuzzle;
}(React.Component);

exports.default = TiPuzzle;
module.exports = exports['default'];