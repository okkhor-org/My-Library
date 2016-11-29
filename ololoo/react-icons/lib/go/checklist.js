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

var GoChecklist = function (_React$Component) {
    _inherits(GoChecklist, _React$Component);

    function GoChecklist() {
        _classCallCheck(this, GoChecklist);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(GoChecklist).apply(this, arguments));
    }

    _createClass(GoChecklist, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34.7125 20.165000000000003l-1.9450000000000003-1.9400000000000013c-0.25-0.254999999999999-0.6625000000000014-0.2575000000000003-0.9125000000000014 0l-4.100000000000001 4.100000000000001-4.693750000000001 4.699999999999999-3.634999999999998-3.6374999999999993c-0.254999999999999-0.254999999999999-0.6649999999999991-0.254999999999999-0.9175000000000004 0l-1.942499999999999 1.942499999999999c-0.254999999999999 0.2562500000000014-0.254999999999999 0.6662500000000016 0 0.9199999999999982l6.032499999999999 6.037500000000001c0.2562500000000014 0.2562500000000014 0.6712500000000006 0.2562500000000014 0.9200000000000017 0l11.191249999999997-11.2025c0.2575000000000003-0.2525000000000013 0.2575000000000003-0.6625000000000014 0-0.9200000000000017z m-20.787499999999998 2.5224999999999973l1.9412500000000001-1.9462499999999991c1.6587500000000013-1.6550000000000011 4.545000000000002-1.6574999999999989 6.202500000000001 0.002500000000001279l0.9875000000000007 0.9875000000000007 4.446249999999996-4.231250000000003v-12.5h-22.502499999999998v27.5h12.5l-3.5749999999999993-3.6000000000000014c-1.7087500000000002-1.7162499999999987-1.7087500000000002-4.502499999999998 0-6.212499999999999z m-1.4250000000000007-15.1875h12.5v2.5h-12.5v-2.5z m0 5h12.5v2.5h-12.5v-2.5z m-2.5 7.5h-2.5v-2.5h2.5v2.5z m0-5h-2.5v-2.5h2.5v2.5z m0-5h-2.5v-2.5h2.5v2.5z m2.5 7.5h2.5v2.5h-2.5v-2.5z' })
                )
            );
        }
    }]);

    return GoChecklist;
}(React.Component);

exports.default = GoChecklist;
module.exports = exports['default'];