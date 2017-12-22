webpackHotUpdate(0,{

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(7), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // IMPORT REACT //


var Column = function (_React$Component) {
    _inherits(Column, _React$Component);

    function Column(props) {
        _classCallCheck(this, Column);

        var _this = _possibleConstructorReturn(this, (Column.__proto__ || Object.getPrototypeOf(Column)).call(this, props));

        _this.state = {
            emptyClass: 'empty-column'
        };
        return _this;
    }

    _createClass(Column, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (!this.props.traits.length == 0) {
                return this.setState({ emptyClass: null });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var traits = this.props.traits;
            return _react2.default.createElement(
                'div',
                { className: 'column ' + this.state.emptyClass },
                _react2.default.createElement(
                    'h1',
                    null,
                    this.props.name.toUpperCase()
                ),
                _react2.default.createElement(
                    'h3',
                    null,
                    this.props.description
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    traits.map(function (item, i) {
                        return _react2.default.createElement(
                            'div',
                            { key: i, className: 'column-trait' },
                            item.trait
                        );
                    })
                )
            );
        }
    }]);

    return Column;
}(_react2.default.Component);

;

exports.default = Column;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(12); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "column.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9hY3Rpdml0eS9waGFzZXMvcGhhc2UzL2NvbHVtbi5qcyJdLCJuYW1lcyI6WyJDb2x1bW4iLCJwcm9wcyIsInN0YXRlIiwiZW1wdHlDbGFzcyIsInRyYWl0cyIsImxlbmd0aCIsInNldFN0YXRlIiwibmFtZSIsInRvVXBwZXJDYXNlIiwiZGVzY3JpcHRpb24iLCJtYXAiLCJpdGVtIiwiaSIsInRyYWl0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7OzsrZUFEQTs7O0lBR01BLE07OztBQUVGLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0hBQ1RBLEtBRFM7O0FBRWYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLHdCQUFZO0FBREgsU0FBYjtBQUZlO0FBS2xCOzs7OzZDQUVvQjtBQUNqQixnQkFBRyxDQUFDLEtBQUtGLEtBQUwsQ0FBV0csTUFBWCxDQUFrQkMsTUFBbkIsSUFBNkIsQ0FBaEMsRUFBbUM7QUFDL0IsdUJBQU8sS0FBS0MsUUFBTCxDQUFjLEVBQUNILFlBQVksSUFBYixFQUFkLENBQVA7QUFDSDtBQUNKOzs7aUNBRVE7QUFDTCxnQkFBSUMsU0FBUyxLQUFLSCxLQUFMLENBQVdHLE1BQXhCO0FBQ0EsbUJBQ0k7QUFBQTtBQUFBLGtCQUFLLFdBQVcsWUFBWSxLQUFLRixLQUFMLENBQVdDLFVBQXZDO0FBQ0k7QUFBQTtBQUFBO0FBQUsseUJBQUtGLEtBQUwsQ0FBV00sSUFBWCxDQUFnQkMsV0FBaEI7QUFBTCxpQkFESjtBQUVJO0FBQUE7QUFBQTtBQUFLLHlCQUFLUCxLQUFMLENBQVdRO0FBQWhCLGlCQUZKO0FBR0k7QUFBQTtBQUFBO0FBQ0tMLDJCQUFPTSxHQUFQLENBQVcsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQLEVBQWE7QUFDckIsK0JBQU87QUFBQTtBQUFBLDhCQUFLLEtBQUtBLENBQVYsRUFBYSxXQUFVLGNBQXZCO0FBQXVDRCxpQ0FBS0U7QUFBNUMseUJBQVA7QUFDSCxxQkFGQTtBQURMO0FBSEosYUFESjtBQVdIOzs7O0VBNUJnQixnQkFBTUMsUzs7QUE2QjFCOztrQkFFY2QsTSIsImZpbGUiOiIwLmFmNWFlMDNjY2VlNDRiZjliMGU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJTVBPUlQgUkVBQ1QgLy9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIENvbHVtbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBlbXB0eUNsYXNzOiAnZW1wdHktY29sdW1uJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBpZighdGhpcy5wcm9wcy50cmFpdHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHtlbXB0eUNsYXNzOiBudWxsfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB0cmFpdHMgPSB0aGlzLnByb3BzLnRyYWl0cztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnY29sdW1uICcgKyB0aGlzLnN0YXRlLmVtcHR5Q2xhc3N9PlxuICAgICAgICAgICAgICAgIDxoMT57dGhpcy5wcm9wcy5uYW1lLnRvVXBwZXJDYXNlKCl9PC9oMT5cbiAgICAgICAgICAgICAgICA8aDM+e3RoaXMucHJvcHMuZGVzY3JpcHRpb259PC9oMz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICB7dHJhaXRzLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9J2NvbHVtbi10cmFpdCc+e2l0ZW0udHJhaXR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29sdW1uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvYWN0aXZpdHkvcGhhc2VzL3BoYXNlMy9jb2x1bW4uanMiXSwic291cmNlUm9vdCI6IiJ9