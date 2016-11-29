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

var MdAccessible = function (_React$Component) {
    _inherits(MdAccessible, _React$Component);

    function MdAccessible() {
        _classCallCheck(this, MdAccessible);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdAccessible).apply(this, arguments));
    }

    _createClass(MdAccessible, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm21.406666666666666 30h3.4383333333333326q-0.625 2.8900000000000006-2.8900000000000006 4.766666666666666t-5.313333333333333 1.8733333333333348q-3.4383333333333344 0-5.859999999999999-2.421666666666667t-2.423333333333334-5.858333333333334q0-3.046666666666667 1.875-5.313333333333333t4.7666666666666675-2.8916666666666657v3.4383333333333326q-1.4833333333333343 0.5466666666666669-2.421666666666667 1.836666666666666t-0.9383333333333326 2.9299999999999997q0 2.0333333333333314 1.4833333333333343 3.5166666666666657t3.5166666666666657 1.4833333333333343q1.6400000000000006 0 2.9299999999999997-0.9383333333333326t1.836666666666666-2.421666666666667z m-4.766666666666666-14.843333333333335q0-1.875 1.6400000000000006-2.966666666666667t3.3599999999999994-0.08000000000000007h0.07833333333333314v0.07833333333333314q0.5500000000000007 0.2333333333333325 1.0166666666666657 0.7033333333333331l2.1883333333333326 2.421666666666667q2.8133333333333326 3.0466666666666686 6.716666666666669 3.0466666666666686v3.2833333333333314q-4.373333333333335 0-8.280000000000001-3.2049999999999983v5.703333333333333h5q1.3283333333333331 0 2.3049999999999997 1.0166666666666657t0.9766666666666666 2.3416666666666686v9.14h-3.2833333333333314v-8.283333333333331h-8.358333333333334q-1.3299999999999983 0-2.344999999999999-1.0133333333333319t-1.0166666666666657-2.3433333333333373v-9.843333333333334z m0-8.516666666666667q0-1.4066666666666663 0.9766666666666666-2.3433333333333337t2.383333333333333-0.9383333333333295 2.383333333333333 0.938333333333333 0.9766666666666666 2.3433333333333337-0.9766666666666666 2.383333333333333-2.383333333333333 0.9766666666666666-2.383333333333333-0.9766666666666666-0.9766666666666666-2.383333333333333z' })
                )
            );
        }
    }]);

    return MdAccessible;
}(React.Component);

exports.default = MdAccessible;
module.exports = exports['default'];