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

var FaSkyatlas = function (_React$Component) {
    _inherits(FaSkyatlas, _React$Component);

    function FaSkyatlas() {
        _classCallCheck(this, FaSkyatlas);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaSkyatlas).apply(this, arguments));
    }

    _createClass(FaSkyatlas, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm33.0075 17.87125q2.8900000000000006 0 4.941250000000004 1.9250000000000007t2.049999999999997 4.774999999999999q0 3.0650000000000013-2.1287499999999966 5.106249999999999t-5.215000000000003 2.0412500000000016q-1.6600000000000001 0-3.1625000000000014-0.5375000000000014t-2.696249999999999-1.4349999999999987-2.3049999999999997-2.0700000000000003-2.12875-2.469999999999999-2.0199999999999996-2.5874999999999986-2.1187499999999986-2.4624999999999986-2.2874999999999996-2.0687500000000014-2.6549999999999994-1.4375-3.1050000000000004-0.5375000000000014q-3.0075000000000003 0-4.9125000000000005 1.7875000000000014t-1.9012500000000028 4.774999999999999q0 3.067499999999999 2.0300000000000002 4.883749999999999t5.137500000000001 1.8162500000000001q1.9525000000000006 0 4.0625-0.7325000000000017t3.7687500000000007-1.9250000000000007q0.09625000000000128-0.07750000000000057 0.4087500000000013-0.35999999999999943t0.5874999999999986-0.46875 0.42875000000000085-0.18374999999999986q0.2749999999999986 0 0.47875000000000156 0.2049999999999983t0.2049999999999983 0.47875000000000156q0 0.46875-1.1724999999999994 1.5037500000000001-1.9750000000000014 1.71875-4.581250000000001 2.7749999999999986t-5.0875 1.0537500000000009q-2.5975 0-4.795-1.1325000000000003t-3.5162500000000003-3.2225-1.3187499999999999-4.7075q0-4.00375 2.7625-6.66t6.7875-2.65625q2.344999999999999 0 4.425000000000001 0.8499999999999996t3.6224999999999987 2.2075000000000014 2.9587499999999984 2.9875000000000007 2.715 3.2712499999999984 2.6062499999999993 2.9974999999999987 2.9200000000000017 2.2074999999999996 3.3699999999999974 0.8500000000000014q1.9924999999999997 0 3.291249999999998-1.1999999999999993t1.2974999999999994-3.1750000000000007q0-1.8537500000000016-1.259999999999998-3.1037500000000016t-3.115000000000002-1.25q-0.5874999999999986 0-1.5912499999999987 0.3625000000000007t-1.3374999999999986 0.35999999999999943q-0.39124999999999943 0-0.6937500000000014-0.2925000000000004t-0.30249999999999844-0.682500000000001q0-0.3500000000000014 0.16625000000000156-1.1125000000000007t0.16750000000000043-1.1537499999999987q0-3.10375-2.1000000000000014-5.135t-5.201249999999998-2.034999999999995q-1.1325000000000003 0-2.1774999999999984 0.3625000000000007t-1.6412499999999994 0.7899999999999991-1.0837499999999984 0.7899999999999991-0.6449999999999996 0.3625000000000007q-0.2925000000000004 0-0.4975000000000005-0.2062500000000007t-0.20500000000000007-0.4975000000000005q0-0.3725000000000005 0.4875000000000007-0.9000000000000004 1.1537499999999987-1.3087499999999999 2.8724999999999987-2.02125t3.5549999999999997-0.7125000000000004q3.7300000000000004 0 6.212499999999999 2.4499999999999993t2.4787500000000016 6.162500000000001q0 0.7250000000000014-0.07874999999999943 1.2899999999999991 1.1125000000000007-0.2925000000000004 2.24625-0.2925000000000004z' })
                )
            );
        }
    }]);

    return FaSkyatlas;
}(React.Component);

exports.default = FaSkyatlas;
module.exports = exports['default'];