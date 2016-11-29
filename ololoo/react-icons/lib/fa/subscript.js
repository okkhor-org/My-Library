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

var FaSubscript = function (_React$Component) {
    _inherits(FaSubscript, _React$Component);

    function FaSubscript() {
        _classCallCheck(this, FaSubscript);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaSubscript).apply(this, arguments));
    }

    _createClass(FaSubscript, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm22.88 30.557142857142857v3.7285714285714278h-5.537142857142854l-3.547142857142857-5.625714285714288-0.5357142857142865-0.937142857142856q-0.17857142857142883-0.1999999999999993-0.24571428571428555-0.46857142857142975h-0.06714285714285673l-0.1999999999999993 0.46857142857142975q-0.2242857142857151 0.4471428571428575-0.5600000000000005 0.9828571428571422l-3.45857142857143 5.580000000000002h-5.7614285714285725v-3.7285714285714278h2.8571428571428577l4.397142857142857-6.494285714285716-4.128571428571429-6.071428571428569h-3.059999999999999v-3.7485714285714273h6.16l3.102857142857143 5.088571428571427q0.042857142857142705 0.08999999999999986 0.5142857142857142 0.937142857142856 0.17714285714285793 0.1999999999999993 0.242857142857142 0.46857142857142975h0.0685714285714294q0.06714285714285673-0.1999999999999993 0.24571428571428555-0.46857142857142975l0.5571428571428569-0.937142857142856 3.1328571428571426-5.088571428571427h5.7357142857142875v3.7485714285714273h-2.7928571428571445l-4.107142857142858 5.960000000000001 4.5528571428571425 6.607142857142858h2.4328571428571415z m14.262857142857147 4.842857142857149v4.599999999999994h-11.471428571428572l-0.09142857142857252-0.6028571428571396q-0.0671428571428585-1.0042857142857144-0.0671428571428585-1.028571428571432 0-1.4285714285714306 0.5785714285714292-2.6099999999999994t1.451428571428572-1.9285714285714306 1.8771428571428572-1.452857142857141 1.8757142857142846-1.217142857142857 1.4514285714285684-1.2042857142857137 0.5799999999999983-1.428571428571427q0-0.8485714285714288-0.6599999999999966-1.3957142857142841t-1.5742857142857147-0.5471428571428554q-1.138571428571428 0-2.1657142857142873 0.8714285714285701-0.31428571428571317 0.24285714285714377-0.8028571428571425 0.8471428571428561l-2.3428571428571416-2.0528571428571425q0.5785714285714292-0.8257142857142874 1.404285714285713-1.4714285714285715 1.7857142857142847-1.452857142857141 4.199999999999999-1.452857142857141 2.4542857142857137 0 3.9714285714285715 1.3285714285714292t1.5171428571428578 3.53857142857143q0 1.4714285714285715-0.7714285714285722 2.645714285714284t-1.874285714285712 1.9185714285714255-2.221428571428575 1.394285714285715-1.942857142857143 1.4057142857142892-0.9142857142857146 1.6285714285714263h5.178571428571427v-1.7857142857142847h2.814285714285724z' })
                )
            );
        }
    }]);

    return FaSubscript;
}(React.Component);

exports.default = FaSubscript;
module.exports = exports['default'];