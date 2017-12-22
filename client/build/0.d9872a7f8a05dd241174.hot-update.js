webpackHotUpdate(0,{

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(7), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _trait = __webpack_require__(211);

var _trait2 = _interopRequireDefault(_trait);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // IMPORT REACT //


// COMPONENTS //


var TraitItems = function (_React$Component) {
    _inherits(TraitItems, _React$Component);

    function TraitItems() {
        _classCallCheck(this, TraitItems);

        return _possibleConstructorReturn(this, (TraitItems.__proto__ || Object.getPrototypeOf(TraitItems)).apply(this, arguments));
    }

    _createClass(TraitItems, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var activeTraits = this.props.activeTraits;
            var traits = this.props.traits;
            return _react2.default.createElement(
                'div',
                null,
                activeTraits.map(function (item) {
                    // set global identifier index number
                    var index = traits.findIndex(function (res) {
                        return res.trait == item.trait;
                    });
                    item.index = index;
                    return _react2.default.createElement(_trait2.default, { key: index, onSelect: _this2.props.onSelect, traitObj: item, traits: traits });
                })
            );
        }
    }]);

    return TraitItems;
}(_react2.default.Component);

exports.default = TraitItems;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(12); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "trait-items.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9hY3Rpdml0eS9waGFzZXMvcGhhc2UxL3RyYWl0LWl0ZW1zLmpzIl0sIm5hbWVzIjpbIlRyYWl0SXRlbXMiLCJhY3RpdmVUcmFpdHMiLCJwcm9wcyIsInRyYWl0cyIsIm1hcCIsImluZGV4IiwiZmluZEluZGV4IiwicmVzIiwidHJhaXQiLCJpdGVtIiwib25TZWxlY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBR0E7Ozs7Ozs7Ozs7K2VBSkE7OztBQUdBOzs7SUFHTUEsVTs7Ozs7Ozs7Ozs7aUNBRU87QUFBQTs7QUFDTCxnQkFBSUMsZUFBZSxLQUFLQyxLQUFMLENBQVdELFlBQTlCO0FBQ0EsZ0JBQUlFLFNBQVMsS0FBS0QsS0FBTCxDQUFXQyxNQUF4QjtBQUNBLG1CQUNJO0FBQUE7QUFBQTtBQUVRRiw2QkFBYUcsR0FBYixDQUFpQixnQkFBUTtBQUNyQjtBQUNBLHdCQUFJQyxRQUFRRixPQUFPRyxTQUFQLENBQWlCO0FBQUEsK0JBQU9DLElBQUlDLEtBQUosSUFBYUMsS0FBS0QsS0FBekI7QUFBQSxxQkFBakIsQ0FBWjtBQUNBQyx5QkFBS0osS0FBTCxHQUFhQSxLQUFiO0FBQ0EsMkJBQU8saURBQU8sS0FBS0EsS0FBWixFQUFtQixVQUFVLE9BQUtILEtBQUwsQ0FBV1EsUUFBeEMsRUFBa0QsVUFBVUQsSUFBNUQsRUFBa0UsUUFBUU4sTUFBMUUsR0FBUDtBQUNILGlCQUxEO0FBRlIsYUFESjtBQVlIOzs7O0VBakJvQixnQkFBTVEsUzs7a0JBb0JoQlgsVSIsImZpbGUiOiIwLmQ5ODcyYTdmOGEwNWRkMjQxMTc0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJTVBPUlQgUkVBQ1QgLy9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLy8gQ09NUE9ORU5UUyAvL1xuaW1wb3J0IFRyYWl0IGZyb20gJy4vdHJhaXQnXG5cbmNsYXNzIFRyYWl0SXRlbXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgYWN0aXZlVHJhaXRzID0gdGhpcy5wcm9wcy5hY3RpdmVUcmFpdHNcbiAgICAgICAgbGV0IHRyYWl0cyA9IHRoaXMucHJvcHMudHJhaXRzXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlVHJhaXRzLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldCBnbG9iYWwgaWRlbnRpZmllciBpbmRleCBudW1iZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRyYWl0cy5maW5kSW5kZXgocmVzID0+IHJlcy50cmFpdCA9PSBpdGVtLnRyYWl0KVxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmRleCA9IGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFRyYWl0IGtleT17aW5kZXh9IG9uU2VsZWN0PXt0aGlzLnByb3BzLm9uU2VsZWN0fSB0cmFpdE9iaj17aXRlbX0gdHJhaXRzPXt0cmFpdHN9IC8+XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYWl0SXRlbXNcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL2FjdGl2aXR5L3BoYXNlcy9waGFzZTEvdHJhaXQtaXRlbXMuanMiXSwic291cmNlUm9vdCI6IiJ9