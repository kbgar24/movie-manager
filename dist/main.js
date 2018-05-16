/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./app.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"../node_modules/react-dom/index.js\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"../node_modules/react-router-dom/es/index.js\");\n\nvar _mainPage = __webpack_require__(/*! ./mainPage */ \"./mainPage/index.js\");\n\nvar _mainPage2 = _interopRequireDefault(_mainPage);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = function App() {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      _reactRouterDom.BrowserRouter,\n      null,\n      _react2.default.createElement(\n        _reactRouterDom.Switch,\n        null,\n        _react2.default.createElement(_reactRouterDom.Route, { path: '/', exact: true, component: _mainPage2.default })\n      )\n    )\n  );\n};\n\n_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2FwcC5qcz8yYzk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIFJvdXRlLCBTd2l0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IE1haW5QYWdlIGZyb20gJy4vbWFpblBhZ2UnO1xuXG5cbmNvbnN0IEFwcCA9ICgpID0+IChcbiAgPGRpdj5cbiAgICAgIDxCcm93c2VyUm91dGVyPlxuICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPScvJyBleGFjdD17dHJ1ZX0gY29tcG9uZW50PXtNYWluUGFnZX0gLz5cbiAgICAgICAgPC9Td2l0Y2g+XG4gICAgICA8L0Jyb3dzZXJSb3V0ZXI+XG4gIDwvZGl2PlxuKTtcblxuUmVhY3RET00ucmVuZGVyKFxuICA8QXBwIC8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcbik7XG4iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFEQTtBQURBO0FBQ0E7QUFTQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app.js\n");

/***/ }),

/***/ "./mainPage/index.js":
/*!***************************!*\
  !*** ./mainPage/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _movieForm = __webpack_require__(/*! ../movieForm */ \"./movieForm.js\");\n\nvar _movieForm2 = _interopRequireDefault(_movieForm);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar MainPage = function (_Component) {\n  _inherits(MainPage, _Component);\n\n  function MainPage() {\n    _classCallCheck(this, MainPage);\n\n    var _this = _possibleConstructorReturn(this, (MainPage.__proto__ || Object.getPrototypeOf(MainPage)).call(this));\n\n    _this.state = {};\n    return _this;\n  }\n\n  _createClass(MainPage, [{\n    key: 'render',\n    value: function render() {\n      console.log(this.state);\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'div',\n          null,\n          'Hello World'\n        ),\n        _react2.default.createElement(_movieForm2.default, null)\n      );\n    }\n  }]);\n\n  return MainPage;\n}(_react.Component);\n\nexports.default = MainPage;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tYWluUGFnZS9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvbWFpblBhZ2UvaW5kZXguanM/MDM5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vdmllRm9ybSBmcm9tICcuLi9tb3ZpZUZvcm0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpOyBcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdj5IZWxsbyBXb3JsZDwvZGl2PlxuICAgICAgICA8TW92aWVGb3JtIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFLQTs7OztBQWRBO0FBQ0E7QUFEQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./mainPage/index.js\n");

/***/ }),

/***/ "./movieForm.js":
/*!**********************!*\
  !*** ./movieForm.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ \"../node_modules/semantic-ui-react/dist/es/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar genreOptions = [{ key: 'h', text: 'Horror', value: 'horror' }, { key: 'a', text: 'Action', value: 'action' }, { key: 'd', text: 'Drama', value: 'drama' }, { key: 'c', text: 'Comedy', value: 'comedy' }];\n\nvar ratingOptions = [{ key: '1', text: '5', value: '5' }, { key: '2', text: '4', value: '4' }, { key: '3', text: '3', value: '3' }, { key: '4', text: '2', value: '2' }, { key: '5', text: '1', value: '1' }];\n\nvar MovieForm = function (_Component) {\n  _inherits(MovieForm, _Component);\n\n  function MovieForm() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, MovieForm);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MovieForm.__proto__ || Object.getPrototypeOf(MovieForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      actors: [],\n      actor: '',\n      title: '',\n      year: '',\n      rating: '',\n      genre: ''\n    }, _this.handleChange = function (e, _ref2) {\n      var value = _ref2.value;\n      return _this.setState({ value: value });\n    }, _this.handleAddActor = function (e) {\n      var _this$state = _this.state,\n          actor = _this$state.actor,\n          actors = _this$state.actors;\n\n      actor && _this.setState({\n        actors: [].concat(_toConsumableArray(actors), [actor]),\n        actor: '',\n        title: '',\n        year: '',\n        genre: ''\n      });\n    }, _this.handleChange = function (e, data) {\n      var value = data.value,\n          placeholder = data.placeholder;\n\n      var type = placeholder.toLowerCase();\n      var isNumber = function isNumber(string) {\n        return (/^\\d+$/.test(string)\n        );\n      };\n      if (type === 'year') {\n        if (value.length > 4 || !isNumber(string)) {\n          return;\n        }\n      }\n      _this.setState(_defineProperty({}, type, value));\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(MovieForm, [{\n    key: 'render',\n    value: function render() {\n      var value = this.state.value;\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          _semanticUiReact.List,\n          null,\n          this.state.actors.map(function (actor, i) {\n            return _react2.default.createElement(\n              _semanticUiReact.List.Item,\n              { key: i },\n              actor\n            );\n          })\n        ),\n        _react2.default.createElement(\n          _semanticUiReact.Form,\n          null,\n          _react2.default.createElement(\n            _semanticUiReact.Form.Group,\n            { widths: 'equal' },\n            _react2.default.createElement(_semanticUiReact.Form.Field, { control: _semanticUiReact.Input, label: 'Title', placeholder: 'Title', value: this.state.title, onChange: this.handleChange }),\n            _react2.default.createElement(_semanticUiReact.Form.Field, { control: _semanticUiReact.Input, label: 'Year', placeholder: 'Year', value: this.state.year, onChange: this.handleChange }),\n            _react2.default.createElement(_semanticUiReact.Form.Field, { control: _semanticUiReact.Select, label: 'Genre', options: genreOptions, placeholder: 'Genre', value: this.state.genre, onChange: this.handleChange }),\n            _react2.default.createElement(_semanticUiReact.Form.Field, { control: _semanticUiReact.Select, label: 'Rating', options: ratingOptions, placeholder: 'Rating', value: this.state.rating, onChange: this.handleChange }),\n            _react2.default.createElement(_semanticUiReact.Form.Field, { control: _semanticUiReact.Input, label: 'Actor', placeholder: 'Actor', value: this.state.actor, onChange: this.handleChange }),\n            _react2.default.createElement(\n              _semanticUiReact.Button,\n              { onClick: this.handleAddActor },\n              'Add Actors'\n            )\n          ),\n          _react2.default.createElement(\n            _semanticUiReact.Form.Field,\n            { control: _semanticUiReact.Button },\n            'Submit'\n          )\n        )\n      );\n    }\n  }]);\n\n  return MovieForm;\n}(_react.Component);\n\nexports.default = MovieForm;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb3ZpZUZvcm0uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL21vdmllRm9ybS5qcz8wMTBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJ1dHRvbiwgQ2hlY2tib3gsIEZvcm0sIElucHV0LCBSYWRpbywgU2VsZWN0LCBUZXh0QXJlYSwgTGlzdCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcblxuY29uc3QgZ2VucmVPcHRpb25zID0gW1xuICB7IGtleTogJ2gnLCB0ZXh0OiAnSG9ycm9yJywgdmFsdWU6ICdob3Jyb3InIH0sXG4gIHsga2V5OiAnYScsIHRleHQ6ICdBY3Rpb24nLCB2YWx1ZTogJ2FjdGlvbicgfSxcbiAgeyBrZXk6ICdkJywgdGV4dDogJ0RyYW1hJywgdmFsdWU6ICdkcmFtYScgfSxcbiAgeyBrZXk6ICdjJywgdGV4dDogJ0NvbWVkeScsIHZhbHVlOiAnY29tZWR5JyB9LFxuXTtcblxuY29uc3QgcmF0aW5nT3B0aW9ucyA9IFtcbiAgeyBrZXk6ICcxJywgdGV4dDogJzUnLCB2YWx1ZTogJzUnIH0sXG4gIHsga2V5OiAnMicsIHRleHQ6ICc0JywgdmFsdWU6ICc0JyB9LFxuICB7IGtleTogJzMnLCB0ZXh0OiAnMycsIHZhbHVlOiAnMycgfSxcbiAgeyBrZXk6ICc0JywgdGV4dDogJzInLCB2YWx1ZTogJzInIH0sXG4gIHsga2V5OiAnNScsIHRleHQ6ICcxJywgdmFsdWU6ICcxJyB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92aWVGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgYWN0b3JzOiBbXSxcbiAgICBhY3RvcjogJycsXG4gICAgdGl0bGU6ICcnLCBcbiAgICB5ZWFyOiAnJyxcbiAgICByYXRpbmc6ICcnLFxuICAgIGdlbnJlOiAnJyxcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChlLCB7IHZhbHVlIH0pID0+IHRoaXMuc2V0U3RhdGUoeyB2YWx1ZSB9KVxuXG4gIGhhbmRsZUFkZEFjdG9yID0gKGUpID0+IHtcbiAgICBjb25zdCB7IGFjdG9yLCBhY3RvcnMgfSA9IHRoaXMuc3RhdGU7XG4gICAgYWN0b3IgJiYgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RvcnM6IFsuLi5hY3RvcnMsIGFjdG9yXSxcbiAgICAgIGFjdG9yOiAnJyxcbiAgICAgIHRpdGxlOiAnJyxcbiAgICAgIHllYXI6ICcnLFxuICAgICAgZ2VucmU6ICcnLFxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gKGUsIGRhdGEpID0+IHtcbiAgICBjb25zdCB7IHZhbHVlLCBwbGFjZWhvbGRlciB9ID0gZGF0YTtcbiAgICBjb25zdCB0eXBlID0gcGxhY2Vob2xkZXIudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCBpc051bWJlciA9IChzdHJpbmcpID0+IC9eXFxkKyQvLnRlc3Qoc3RyaW5nKTtcbiAgICBpZiAodHlwZSA9PT0gJ3llYXInKXtcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiA0IHx8ICFpc051bWJlcihzdHJpbmcpKXtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFt0eXBlXTogdmFsdWUgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgPExpc3Q+XG4gICAgICAgIHsgXG4gICAgICAgICAgdGhpcy5zdGF0ZS5hY3RvcnMubWFwKChhY3RvciwgaSkgPT4gKFxuICAgICAgICAgICAgPExpc3QuSXRlbSBrZXk9e2l9PnthY3Rvcn08L0xpc3QuSXRlbT5cbiAgICAgICAgICApKSBcbiAgICAgICAgfVxuICAgICAgPC9MaXN0PlxuICAgICAgPEZvcm0+XG4gICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz0nZXF1YWwnPlxuICAgICAgICAgIDxGb3JtLkZpZWxkIGNvbnRyb2w9e0lucHV0fSBsYWJlbD0nVGl0bGUnIHBsYWNlaG9sZGVyPSdUaXRsZScgdmFsdWU9e3RoaXMuc3RhdGUudGl0bGV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICA8Rm9ybS5GaWVsZCBjb250cm9sPXtJbnB1dH0gbGFiZWw9J1llYXInIHBsYWNlaG9sZGVyPSdZZWFyJyB2YWx1ZT17dGhpcy5zdGF0ZS55ZWFyfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgPEZvcm0uRmllbGQgY29udHJvbD17U2VsZWN0fSBsYWJlbD0nR2VucmUnIG9wdGlvbnM9e2dlbnJlT3B0aW9uc30gcGxhY2Vob2xkZXI9J0dlbnJlJyB2YWx1ZT17dGhpcy5zdGF0ZS5nZW5yZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgIDxGb3JtLkZpZWxkIGNvbnRyb2w9e1NlbGVjdH0gbGFiZWw9J1JhdGluZycgb3B0aW9ucz17cmF0aW5nT3B0aW9uc30gcGxhY2Vob2xkZXI9J1JhdGluZycgdmFsdWU9e3RoaXMuc3RhdGUucmF0aW5nfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgPEZvcm0uRmllbGQgY29udHJvbD17SW5wdXR9IGxhYmVsPSdBY3RvcicgcGxhY2Vob2xkZXI9J0FjdG9yJyB2YWx1ZT17dGhpcy5zdGF0ZS5hY3Rvcn0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVBZGRBY3Rvcn0+QWRkIEFjdG9yczwvQnV0dG9uPlxuICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgIDxGb3JtLkZpZWxkIGNvbnRyb2w9e0J1dHRvbn0+U3VibWl0PC9Gb3JtLkZpZWxkPlxuICAgICAgPC9Gb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFPQTs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBRkE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5BO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRBO0FBUkE7QUFxQkE7Ozs7QUEzREE7QUFDQTtBQURBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./movieForm.js\n");

/***/ })

/******/ });