webpackHotUpdate(0,{

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(7), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _phase = __webpack_require__(208);

var _phase2 = _interopRequireDefault(_phase);

var _phase3 = __webpack_require__(212);

var _phase4 = _interopRequireDefault(_phase3);

var _phase5 = __webpack_require__(215);

var _phase6 = _interopRequireDefault(_phase5);

var _traitsListDefinitions = __webpack_require__(217);

var _traitsListDefinitions2 = _interopRequireDefault(_traitsListDefinitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // IMPORT REACT //


// COMPONENTS //


// DATA //


var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this.state = {
            phase: 1,
            traits: [],
            activeTraits: [],
            stack: {
                happy: [],
                neutral: [],
                sad: []
            },
            column: {
                look: [],
                sound: [],
                feel: []
            },
            numOfTraitsDisplayed: 1, //multiples of 3
            numOfTraitsSelected: 0
        };

        _this.nextPhase = _this.nextPhase.bind(_this);
        _this.onSelect = _this.onSelect.bind(_this);
        _this.pushTraitToStack = _this.pushTraitToStack.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // set active traits to the number of numOfTraitsDisplayed
            var traits = _traitsListDefinitions2.default;
            var numOfTraitsDisplayed = this.state.numOfTraitsDisplayed;
            var activeTraits = traits.slice(0, numOfTraitsDisplayed);
            this.setState({ activeTraits: activeTraits, traits: traits });
        }
    }, {
        key: 'onSelect',
        value: function onSelect(selection) {
            var activeTraits = this.state.activeTraits,
                numOfTraitsSelected = this.state.numOfTraitsSelected + 1,
                traits = this.state.traits;
            // queue up next trait to activeTraits
            var index = selection.index;
            var nextTrait = traits[index + 1];
            var i = activeTraits.findIndex(function (item) {
                return item.trait == selection.trait;
            });
            activeTraits[i] = nextTrait;
            if (!selection.column) {
                this.pushTraitToStack(selection);
            } else {
                this.pushTraitToColumn(selection);
            }
            this.setState({ activeTraits: activeTraits, numOfTraitsSelected: numOfTraitsSelected });
            // go to next phase
            if (numOfTraitsSelected == traits.length) {
                return this.nextPhase();
            }
        }
    }, {
        key: 'pushTraitToColumn',
        value: function pushTraitToColumn(trait) {
            var column = this.state.column;
            switch (trait.column) {
                case 'look':
                    column.look.push(trait);
                    break;
                case 'sound':
                    column.sound.push(trait);
                    break;
                case 'feel':
                    column.feel.push(trait);
                    break;
            };
        }
    }, {
        key: 'pushTraitToStack',
        value: function pushTraitToStack(trait) {
            var stack = this.state.stack;
            switch (trait.face) {
                case 'happy':
                    stack.happy.push(trait);
                    break;
                case 'neutral':
                    stack.neutral.push(trait);
                    break;
                case 'sad':
                    stack.sad.push(trait);
                    break;
            };
        }
    }, {
        key: 'nextPhase',
        value: function nextPhase(stack) {
            // set activeTraits array to first trait in happy stack
            var activeTraits = [this.state.stack.happy[0]];
            var numOfTraitsSelected = 0;
            var phase = this.state.phase + 1;
            var traits = this.state.stack.happy;
            this.setState({ activeTraits: activeTraits, numOfTraitsSelected: numOfTraitsSelected, phase: phase, traits: traits });
        }
    }, {
        key: 'render',
        value: function render() {
            var phase = this.state.phase;
            var phase1 = _react2.default.createElement(_phase2.default, {
                activeTraits: this.state.activeTraits,
                numOfTraitsSelected: this.state.numOfTraitsSelected,
                onSelect: this.onSelect,
                traits: this.state.traits });
            var phase2 = _react2.default.createElement(_phase4.default, {
                activeTraits: this.state.activeTraits,
                numOfTraitsSelected: this.state.numOfTraitsSelected,
                onSelect: this.onSelect,
                traits: this.state.traits });
            var phase3 = _react2.default.createElement(_phase6.default, {
                column: this.state.column });

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    phase == 1 ? phase1 : null,
                    phase == 2 ? phase2 : null,
                    phase == 3 ? phase3 : null
                )
            );
        }
    }]);

    return App;
}(_react2.default.Component);

exports.default = App;
;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(12); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9hY3Rpdml0eS9pbmRleC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJzdGF0ZSIsInBoYXNlIiwidHJhaXRzIiwiYWN0aXZlVHJhaXRzIiwic3RhY2siLCJoYXBweSIsIm5ldXRyYWwiLCJzYWQiLCJjb2x1bW4iLCJsb29rIiwic291bmQiLCJmZWVsIiwibnVtT2ZUcmFpdHNEaXNwbGF5ZWQiLCJudW1PZlRyYWl0c1NlbGVjdGVkIiwibmV4dFBoYXNlIiwiYmluZCIsIm9uU2VsZWN0IiwicHVzaFRyYWl0VG9TdGFjayIsInNsaWNlIiwic2V0U3RhdGUiLCJzZWxlY3Rpb24iLCJpbmRleCIsIm5leHRUcmFpdCIsImkiLCJmaW5kSW5kZXgiLCJpdGVtIiwidHJhaXQiLCJwdXNoVHJhaXRUb0NvbHVtbiIsImxlbmd0aCIsInB1c2giLCJmYWNlIiwicGhhc2UxIiwicGhhc2UyIiwicGhhc2UzIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUdBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBOzs7Ozs7Ozs7OytlQVRBOzs7QUFHQTs7O0FBS0E7OztJQUdxQkEsRzs7O0FBQ2pCLG1CQUFjO0FBQUE7O0FBQUE7O0FBRVYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLG1CQUFPLENBREU7QUFFVEMsb0JBQVEsRUFGQztBQUdUQywwQkFBYyxFQUhMO0FBSVRDLG1CQUFPO0FBQ0hDLHVCQUFPLEVBREo7QUFFSEMseUJBQVMsRUFGTjtBQUdIQyxxQkFBSztBQUhGLGFBSkU7QUFTVEMsb0JBQVE7QUFDSkMsc0JBQU0sRUFERjtBQUVKQyx1QkFBTyxFQUZIO0FBR0pDLHNCQUFNO0FBSEYsYUFUQztBQWNUQyxrQ0FBc0IsQ0FkYixFQWNnQjtBQUN6QkMsaUNBQXFCO0FBZlosU0FBYjs7QUFrQkEsY0FBS0MsU0FBTCxHQUFpQixNQUFLQSxTQUFMLENBQWVDLElBQWYsT0FBakI7QUFDQSxjQUFL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O0FBQ0g7OztpQ0FFUTtBQUNMLGdCQUFJRCxRQUFRLEtBQUtELEtBQUwsQ0FBV0MsS0FBdkI7QUFDQSxnQkFBSThCLFNBQVM7QUFDRyw4QkFBYyxLQUFLL0IsS0FBTCxDQUFXRyxZQUQ1QjtBQUVHLHFDQUFxQixLQUFLSCxLQUFMLENBQVdhLG1CQUZuQztBQUdHLDBCQUFVLEtBQUtHLFFBSGxCO0FBSUcsd0JBQVEsS0FBS2hCLEtBQUwsQ0FBV0UsTUFKdEIsR0FBYjtBQUtBLGdCQUFJOEIsU0FBUztBQUNHLDhCQUFjLEtBQUtoQyxLQUFMLENBQVdHLFlBRDVCO0FBRUcscUNBQXFCLEtBQUtILEtBQUwsQ0FBV2EsbUJBRm5DO0FBR0csMEJBQVUsS0FBS0csUUFIbEI7QUFJRyx3QkFBUSxLQUFLaEIsS0FBTCxDQUFXRSxNQUp0QixHQUFiO0FBS0EsZ0JBQUkrQixTQUFTO0FBQ0csd0JBQVEsS0FBS2pDLEtBQUwsQ0FBV1EsTUFEdEIsR0FBYjs7QUFHQSxtQkFDSTtBQUFBO0FBQUE7QUFFSTtBQUFBO0FBQUEsc0JBQUssV0FBVSxXQUFmO0FBQ0tQLDZCQUFTLENBQVQsR0FBYThCLE1BQWIsR0FBc0IsSUFEM0I7QUFFSzlCLDZCQUFTLENBQVQsR0FBYStCLE1BQWIsR0FBc0IsSUFGM0I7QUFHSy9CLDZCQUFTLENBQVQsR0FBYWdDLE1BQWIsR0FBc0I7QUFIM0I7QUFGSixhQURKO0FBVUg7Ozs7RUF2SDRCLGdCQUFNQyxTOztrQkFBbEJuQyxHO0FBd0hwQixDIiwiZmlsZSI6IjAuMzYxZGVhNGYxNTBkNjdhZWQ4ZWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIElNUE9SVCBSRUFDVCAvL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLy8gQ09NUE9ORU5UUyAvL1xuaW1wb3J0IFBoYXNlMSBmcm9tICcuL3BoYXNlcy9waGFzZTEnO1xuaW1wb3J0IFBoYXNlMiBmcm9tICcuL3BoYXNlcy9waGFzZTInO1xuaW1wb3J0IFBoYXNlMyBmcm9tICcuL3BoYXNlcy9waGFzZTMnO1xuXG4vLyBEQVRBIC8vXG5pbXBvcnQgdHJhaXRzTGlzdCBmcm9tICcuLi8uLi9qc29uL3RyYWl0cy1saXN0LWRlZmluaXRpb25zLmpzb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcGhhc2U6IDEsXG4gICAgICAgICAgICB0cmFpdHM6IFtdLFxuICAgICAgICAgICAgYWN0aXZlVHJhaXRzOiBbXSxcbiAgICAgICAgICAgIHN0YWNrOiB7XG4gICAgICAgICAgICAgICAgaGFwcHk6IFtdLFxuICAgICAgICAgICAgICAgIG5ldXRyYWw6IFtdLFxuICAgICAgICAgICAgICAgIHNhZDogW11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb2x1bW46IHtcbiAgICAgICAgICAgICAgICBsb29rOiBbXSxcbiAgICAgICAgICAgICAgICBzb3VuZDogW10sXG4gICAgICAgICAgICAgICAgZmVlbDogW11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBudW1PZlRyYWl0c0Rpc3BsYXllZDogMSwgLy9tdWx0aXBsZXMgb2YgM1xuICAgICAgICAgICAgbnVtT2ZUcmFpdHNTZWxlY3RlZDogMFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMubmV4dFBoYXNlID0gdGhpcy5uZXh0UGhhc2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblNlbGVjdCA9IHRoaXMub25TZWxlY3QuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5wdXNoVHJhaXRUb1N0YWNrID0gdGhpcy5wdXNoVHJhaXRUb1N0YWNrLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIC8vIHNldCBhY3RpdmUgdHJhaXRzIHRvIHRoZSBudW1iZXIgb2YgbnVtT2ZUcmFpdHNEaXNwbGF5ZWRcbiAgICAgICAgbGV0IHRyYWl0cyA9IHRyYWl0c0xpc3Q7XG4gICAgICAgIGxldCBudW1PZlRyYWl0c0Rpc3BsYXllZCA9IHRoaXMuc3RhdGUubnVtT2ZUcmFpdHNEaXNwbGF5ZWQ7XG4gICAgICAgIGxldCBhY3RpdmVUcmFpdHMgPSB0cmFpdHMuc2xpY2UoMCxudW1PZlRyYWl0c0Rpc3BsYXllZCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZVRyYWl0cywgdHJhaXRzfSk7XG4gICAgfVxuXG4gICAgb25TZWxlY3Qoc2VsZWN0aW9uKSB7XG4gICAgICAgIGxldCBhY3RpdmVUcmFpdHMgICAgICAgID0gdGhpcy5zdGF0ZS5hY3RpdmVUcmFpdHMsXG4gICAgICAgICAgICBudW1PZlRyYWl0c1NlbGVjdGVkID0gdGhpcy5zdGF0ZS5udW1PZlRyYWl0c1NlbGVjdGVkICsgMSxcbiAgICAgICAgICAgIHRyYWl0cyAgICAgICAgICAgICAgPSB0aGlzLnN0YXRlLnRyYWl0cztcbiAgICAgICAgLy8gcXVldWUgdXAgbmV4dCB0cmFpdCB0byBhY3RpdmVUcmFpdHNcbiAgICAgICAgbGV0IGluZGV4ID0gc2VsZWN0aW9uLmluZGV4O1xuICAgICAgICBsZXQgbmV4dFRyYWl0ID0gdHJhaXRzW2luZGV4ICsgMV07XG4gICAgICAgIGxldCBpID0gYWN0aXZlVHJhaXRzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0udHJhaXQgPT0gc2VsZWN0aW9uLnRyYWl0KTtcbiAgICAgICAgYWN0aXZlVHJhaXRzW2ldID0gbmV4dFRyYWl0O1xuICAgICAgICBpZighc2VsZWN0aW9uLmNvbHVtbikge1xuICAgICAgICAgICAgdGhpcy5wdXNoVHJhaXRUb1N0YWNrKHNlbGVjdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnB1c2hUcmFpdFRvQ29sdW1uKHNlbGVjdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlVHJhaXRzLCBudW1PZlRyYWl0c1NlbGVjdGVkfSk7XG4gICAgICAgIC8vIGdvIHRvIG5leHQgcGhhc2VcbiAgICAgICAgaWYobnVtT2ZUcmFpdHNTZWxlY3RlZCA9PSB0cmFpdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uZXh0UGhhc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1c2hUcmFpdFRvQ29sdW1uKHRyYWl0KSB7XG4gICAgICAgIGxldCBjb2x1bW4gPSB0aGlzLnN0YXRlLmNvbHVtbjtcbiAgICAgICAgc3dpdGNoICh0cmFpdC5jb2x1bW4pIHtcbiAgICAgICAgICAgIGNhc2UgJ2xvb2snOlxuICAgICAgICAgICAgICAgIGNvbHVtbi5sb29rLnB1c2godHJhaXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc291bmQnOlxuICAgICAgICAgICAgICAgIGNvbHVtbi5zb3VuZC5wdXNoKHRyYWl0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2ZlZWwnOlxuICAgICAgICAgICAgICAgIGNvbHVtbi5mZWVsLnB1c2godHJhaXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHB1c2hUcmFpdFRvU3RhY2sodHJhaXQpIHtcbiAgICAgICAgbGV0IHN0YWNrID0gdGhpcy5zdGF0ZS5zdGFjaztcbiAgICAgICAgc3dpdGNoICh0cmFpdC5mYWNlKSB7XG4gICAgICAgICAgICBjYXNlICdoYXBweSc6XG4gICAgICAgICAgICAgICAgc3RhY2suaGFwcHkucHVzaCh0cmFpdCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICduZXV0cmFsJzpcbiAgICAgICAgICAgICAgICBzdGFjay5uZXV0cmFsLnB1c2godHJhaXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc2FkJzpcbiAgICAgICAgICAgICAgICBzdGFjay5zYWQucHVzaCh0cmFpdCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgbmV4dFBoYXNlKHN0YWNrKSB7XG4gICAgICAgIC8vIHNldCBhY3RpdmVUcmFpdHMgYXJyYXkgdG8gZmlyc3QgdHJhaXQgaW4gaGFwcHkgc3RhY2tcbiAgICAgICAgbGV0IGFjdGl2ZVRyYWl0cyA9IFt0aGlzLnN0YXRlLnN0YWNrLmhhcHB5WzBdXTtcbiAgICAgICAgbGV0IG51bU9mVHJhaXRzU2VsZWN0ZWQgPSAwO1xuICAgICAgICBsZXQgcGhhc2UgPSB0aGlzLnN0YXRlLnBoYXNlICsgMTtcbiAgICAgICAgbGV0IHRyYWl0cyA9IHRoaXMuc3RhdGUuc3RhY2suaGFwcHk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZVRyYWl0cywgbnVtT2ZUcmFpdHNTZWxlY3RlZCwgcGhhc2UsIHRyYWl0c30pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHBoYXNlID0gdGhpcy5zdGF0ZS5waGFzZTtcbiAgICAgICAgbGV0IHBoYXNlMSA9IDxQaGFzZTFcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVRyYWl0cz17dGhpcy5zdGF0ZS5hY3RpdmVUcmFpdHN9XG4gICAgICAgICAgICAgICAgICAgICAgICBudW1PZlRyYWl0c1NlbGVjdGVkPXt0aGlzLnN0YXRlLm51bU9mVHJhaXRzU2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17dGhpcy5vblNlbGVjdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYWl0cz17dGhpcy5zdGF0ZS50cmFpdHN9IC8+XG4gICAgICAgIGxldCBwaGFzZTIgPSA8UGhhc2UyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVUcmFpdHM9e3RoaXMuc3RhdGUuYWN0aXZlVHJhaXRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtT2ZUcmFpdHNTZWxlY3RlZD17dGhpcy5zdGF0ZS5udW1PZlRyYWl0c1NlbGVjdGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9e3RoaXMub25TZWxlY3R9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFpdHM9e3RoaXMuc3RhdGUudHJhaXRzfSAvPlxuICAgICAgICBsZXQgcGhhc2UzID0gPFBoYXNlM1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uPXt0aGlzLnN0YXRlLmNvbHVtbn0gLz5cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7LyogPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm5leHRQaGFzZX0+TkVYVCBQSEFTRTwvYnV0dG9uPiAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICB7cGhhc2UgPT0gMSA/IHBoYXNlMSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIHtwaGFzZSA9PSAyID8gcGhhc2UyIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAge3BoYXNlID09IDMgPyBwaGFzZTMgOiBudWxsfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL2FjdGl2aXR5L2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==