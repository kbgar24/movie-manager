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

/***/ "./library.js":
/*!********************!*\
  !*** ./library.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ \"../node_modules/semantic-ui-react/dist/es/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar data = [{\n  title: 'The Lion King',\n  year: '1994',\n  actors: ['Denzel Washington', 'Halle Berry', 'James Dolan', 'Beyonce Knowles', 'Denzel Washington', 'Halle Berry', 'James Dolan', 'Beyonce Knowles'],\n  genre: 'Animation',\n  rating: 5\n}, {\n  title: 'The Lion King',\n  year: '1994',\n  actors: ['Simba', 'Mufasa', 'Nala', 'Scar'],\n  genre: 'Animation',\n  rating: 4\n}, {\n  title: 'The Lion King',\n  year: '1994',\n  actors: ['Simba', 'Mufasa', 'Nala', 'Scar'],\n  genre: 'Animation',\n  rating: 3\n}, {\n  title: 'The Lion King',\n  year: '1994',\n  actors: ['Simba', 'Mufasa', 'Nala', 'Scar'],\n  genre: 'Animation',\n  rating: 1\n}];\n\nvar cardContainer = {\n  // display: 'flex',\n  // flexWrap: 'wrap',\n  // justifyContent: 'center',\n};\n\nvar cardCSS = {\n  display: 'inline-block',\n  margin: '40px'\n};\n\nvar starStyle = {\n  right: '15px',\n  position: 'absolute',\n  marginTop: '-25px'\n};\n\nvar Library = function (_Component) {\n  _inherits(Library, _Component);\n\n  function Library() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, Library);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Library.__proto__ || Object.getPrototypeOf(Library)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(Library, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { style: cardContainer },\n        data.map(function (movie, i) {\n          return _react2.default.createElement(\n            _semanticUiReact.Card,\n            { key: i, style: cardCSS },\n            _react2.default.createElement(_semanticUiReact.Image, { style: { height: '300px', width: '200px', margin: '0px auto' }, src: 'https://ia.media-imdb.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_UX182_CR0,0,182,268_AL_.jpg' }),\n            _react2.default.createElement(\n              _semanticUiReact.Card.Content,\n              null,\n              _react2.default.createElement(\n                _semanticUiReact.Card.Header,\n                null,\n                movie.title,\n                _react2.default.createElement(\n                  'div',\n                  { style: starStyle },\n                  Array(Number(movie.rating)).fill().map(function (e, i) {\n                    return _react2.default.createElement(_semanticUiReact.Image, { key: i, style: { height: '15px', width: '15px', margin: '0px auto' }, src: 'https://cdn2.iconfinder.com/data/icons/august/PNG/Star%20Gold.png' });\n                  })\n                )\n              ),\n              _react2.default.createElement(\n                _semanticUiReact.Card.Meta,\n                null,\n                movie.year\n              ),\n              _react2.default.createElement(\n                _semanticUiReact.Card.Description,\n                null,\n                _react2.default.createElement(\n                  'p',\n                  null,\n                  _react2.default.createElement(\n                    'strong',\n                    null,\n                    'Genre: '\n                  ),\n                  movie.genre\n                ),\n                _react2.default.createElement(\n                  'strong',\n                  null,\n                  'Starring: '\n                ),\n                _react2.default.createElement(\n                  'p',\n                  { style: {} },\n                  movie.actors.join(', ')\n                )\n              )\n            ),\n            _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true })\n          );\n        })\n      );\n    }\n  }]);\n\n  return Library;\n}(_react.Component);\n\nexports.default = Library;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWJyYXJ5LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9saWJyYXJ5LmpzPzJjZjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2FyZCwgSWNvbiwgSW1hZ2UgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuY29uc3QgZGF0YSA9IFtcbiAge1xuICAgIHRpdGxlOiAnVGhlIExpb24gS2luZycsXG4gICAgeWVhcjogJzE5OTQnLFxuICAgIGFjdG9yczogWydEZW56ZWwgV2FzaGluZ3RvbicsICdIYWxsZSBCZXJyeScsICdKYW1lcyBEb2xhbicsICdCZXlvbmNlIEtub3dsZXMnLCAnRGVuemVsIFdhc2hpbmd0b24nLCAnSGFsbGUgQmVycnknLCAnSmFtZXMgRG9sYW4nLCAnQmV5b25jZSBLbm93bGVzJ10sXG4gICAgZ2VucmU6ICdBbmltYXRpb24nLFxuICAgIHJhdGluZzogNVxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdUaGUgTGlvbiBLaW5nJyxcbiAgICB5ZWFyOiAnMTk5NCcsXG4gICAgYWN0b3JzOiBbJ1NpbWJhJywgJ011ZmFzYScsICdOYWxhJywgJ1NjYXInXSxcbiAgICBnZW5yZTogJ0FuaW1hdGlvbicsXG4gICAgcmF0aW5nOiA0XG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1RoZSBMaW9uIEtpbmcnLFxuICAgIHllYXI6ICcxOTk0JyxcbiAgICBhY3RvcnM6IFsnU2ltYmEnLCAnTXVmYXNhJywgJ05hbGEnLCAnU2NhciddLFxuICAgIGdlbnJlOiAnQW5pbWF0aW9uJyxcbiAgICByYXRpbmc6IDNcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnVGhlIExpb24gS2luZycsXG4gICAgeWVhcjogJzE5OTQnLFxuICAgIGFjdG9yczogWydTaW1iYScsICdNdWZhc2EnLCAnTmFsYScsICdTY2FyJ10sXG4gICAgZ2VucmU6ICdBbmltYXRpb24nLFxuICAgIHJhdGluZzogMVxuICB9XG5dXG5cbmNvbnN0IGNhcmRDb250YWluZXIgPSB7XG4gIC8vIGRpc3BsYXk6ICdmbGV4JyxcbiAgLy8gZmxleFdyYXA6ICd3cmFwJyxcbiAgLy8ganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxufTtcblxuY29uc3QgY2FyZENTUyA9IHtcbiAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gIG1hcmdpbjogJzQwcHgnLFxufVxuXG5jb25zdCBzdGFyU3R5bGUgPSB7XG4gIHJpZ2h0OiAnMTVweCcsXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICBtYXJnaW5Ub3A6ICctMjVweCcsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpYnJhcnkgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHsgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17Y2FyZENvbnRhaW5lcn0+XG4gICAgICAgIHsgZGF0YS5tYXAoKG1vdmllLCBpKSA9PiAoXG4gICAgICAgICAgPENhcmQga2V5PXtpfSBzdHlsZT17Y2FyZENTU30+XG4gICAgICAgICAgICA8SW1hZ2Ugc3R5bGU9e3sgaGVpZ2h0OiAnMzAwcHgnLCB3aWR0aDogJzIwMHB4JywgbWFyZ2luOiAnMHB4IGF1dG8nIH19IHNyYz0naHR0cHM6Ly9pYS5tZWRpYS1pbWRiLmNvbS9pbWFnZXMvTS9NVjVCWVRZeE5HTXlaVFl0TWpFM01TMDBNek5qTFdGak5tWXRNRGszTjJGbU0ySmlNMk0xWGtFeVhrRnFjR2RlUVhWeU5qWTVORFU0TnpJQC5fVjFfVVgxODJfQ1IwLDAsMTgyLDI2OF9BTF8uanBnJyAvPlxuICAgICAgICAgICAgPENhcmQuQ29udGVudD5cbiAgICAgICAgICAgICAgPENhcmQuSGVhZGVyPlxuICAgICAgICAgICAgICAgIHttb3ZpZS50aXRsZX1cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdGFyU3R5bGV9PlxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBBcnJheShOdW1iZXIobW92aWUucmF0aW5nKSkuZmlsbCgpLm1hcCgoZSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBrZXk9e2l9IHN0eWxlPXt7IGhlaWdodDogJzE1cHgnLCB3aWR0aDogJzE1cHgnLCBtYXJnaW46ICcwcHggYXV0bycgfX0gc3JjPSdodHRwczovL2NkbjIuaWNvbmZpbmRlci5jb20vZGF0YS9pY29ucy9hdWd1c3QvUE5HL1N0YXIlMjBHb2xkLnBuZycgLz5cbiAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxuICAgICAgICAgICAgICA8Q2FyZC5NZXRhPlxuICAgICAgICAgICAgICAgIHttb3ZpZS55ZWFyfVxuICAgICAgICAgICAgICA8L0NhcmQuTWV0YT5cbiAgICAgICAgICAgICAgPENhcmQuRGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5HZW5yZTogPC9zdHJvbmc+e21vdmllLmdlbnJlfTwvcD5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPlN0YXJyaW5nOiA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyAgfX0+XG4gICAgICAgICAgICAgICAgICB7IFxuICAgICAgICAgICAgICAgICAgICBtb3ZpZS5hY3RvcnMuam9pbignLCAnKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9DYXJkLkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgICA8Q2FyZC5Db250ZW50IGV4dHJhPlxuICAgICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBOzs7Ozs7Ozs7Ozs7OztBQUNBOzs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRkE7QUFGQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBSEE7QUFmQTtBQXlCQTtBQTNCQTtBQURBO0FBREE7QUFtQ0E7Ozs7QUF4Q0E7QUFDQTtBQURBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./library.js\n");

/***/ }),

/***/ "./mainPage/index.js":
/*!***************************!*\
  !*** ./mainPage/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _movieForm = __webpack_require__(/*! ../movieForm */ \"./movieForm.js\");\n\nvar _movieForm2 = _interopRequireDefault(_movieForm);\n\nvar _library = __webpack_require__(/*! ../library */ \"./library.js\");\n\nvar _library2 = _interopRequireDefault(_library);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar MainPage = function (_Component) {\n  _inherits(MainPage, _Component);\n\n  function MainPage() {\n    _classCallCheck(this, MainPage);\n\n    var _this = _possibleConstructorReturn(this, (MainPage.__proto__ || Object.getPrototypeOf(MainPage)).call(this));\n\n    _this.state = {};\n    return _this;\n  }\n\n  _createClass(MainPage, [{\n    key: 'render',\n    value: function render() {\n      console.log(this.state);\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_movieForm2.default, null),\n        _react2.default.createElement('hr', null),\n        _react2.default.createElement(_library2.default, null)\n      );\n    }\n  }]);\n\n  return MainPage;\n}(_react.Component);\n\nexports.default = MainPage;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tYWluUGFnZS9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvbWFpblBhZ2UvaW5kZXguanM/MDM5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vdmllRm9ybSBmcm9tICcuLi9tb3ZpZUZvcm0nO1xuaW1wb3J0IExpYnJhcnkgZnJvbSAnLi4vbGlicmFyeSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5QYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge307XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7IFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TW92aWVGb3JtIC8+XG4gICAgICAgIDxoci8+XG4gICAgICAgIDxMaWJyYXJ5IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTs7OztBQWZBO0FBQ0E7QUFEQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./mainPage/index.js\n");

/***/ }),

/***/ "./movieForm.js":
/*!**********************!*\
  !*** ./movieForm.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ \"../node_modules/semantic-ui-react/dist/es/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar genreOptions = [{ key: 'h', text: 'Horror', value: 'horror' }, { key: 'a', text: 'Action', value: 'action' }, { key: 'd', text: 'Drama', value: 'drama' }, { key: 'c', text: 'Comedy', value: 'comedy' }];\n\nvar ratingOptions = [{ key: '1', text: '5', value: '5' }, { key: '2', text: '4', value: '4' }, { key: '3', text: '3', value: '3' }, { key: '4', text: '2', value: '2' }, { key: '5', text: '1', value: '1' }];\n\nvar MovieForm = function (_Component) {\n  _inherits(MovieForm, _Component);\n\n  function MovieForm() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, MovieForm);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MovieForm.__proto__ || Object.getPrototypeOf(MovieForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      actors: [],\n      actor: '',\n      title: '',\n      year: '',\n      rating: '',\n      genre: ''\n    }, _this.handleChange = function (e, _ref2) {\n      var value = _ref2.value;\n      return _this.setState({ value: value });\n    }, _this.handleAddActor = function (e) {\n      var _this$state = _this.state,\n          actor = _this$state.actor,\n          actors = _this$state.actors;\n\n      actor && _this.setState({\n        actors: [].concat(_toConsumableArray(actors), [actor]),\n        actor: '',\n        title: '',\n        year: '',\n        genre: ''\n      });\n    }, _this.handleChange = function (e, data) {\n      var value = data.value,\n          placeholder = data.placeholder;\n\n      var type = placeholder.toLowerCase();\n      var isNumber = function isNumber(string) {\n        return (/^\\d+$/.test(string)\n        );\n      };\n      if (type === 'year' && value.length) {\n        if (value.length > 4 || !isNumber(value)) {\n          return;\n        }\n      }\n      _this.setState(_defineProperty({}, type, value));\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(MovieForm, [{\n    key: 'render',\n    value: function render() {\n      var value = this.state.value;\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          _semanticUiReact.List,\n          null,\n          this.state.actors.map(function (actor, i) {\n            return _react2.default.createElement(\n              _semanticUiReact.List.Item,\n              { key: i },\n              actor\n            );\n          })\n        ),\n        _react2.default.createElement(\n          _semanticUiReact.Form,\n          null,\n          _react2.default.createElement(\n            _semanticUiReact.Form.Group,\n            { widths: 'equal' },\n            _react2.default.createElement(_semanticUiReact.Form.Field, { control: _semanticUiReact.Input, label: 'Title', placeholder: 'Title', value: this.state.title, onChange: this.handleChange }),\n            _react2.default.createElement(_semanticUiReact.Form.Field, { control: _semanticUiReact.Input, label: 'Year', placeholder: 'Year', value: this.state.year, onChange: this.handleChange }),\n            _react2.default.createElement(_semanticUiReact.Form.Field, { control: _semanticUiReact.Select, label: 'Genre', options: genreOptions, placeholder: 'Genre', value: this.state.genre, onChange: this.handleChange }),\n            _react2.default.createElement(_semanticUiReact.Form.Field, { control: _semanticUiReact.Select, label: 'Rating', options: ratingOptions, placeholder: 'Rating', value: this.state.rating, onChange: this.handleChange }),\n            _react2.default.createElement(_semanticUiReact.Form.Field, { control: _semanticUiReact.Input, label: 'Actor', placeholder: 'Actor', value: this.state.actor, onChange: this.handleChange }),\n            _react2.default.createElement(\n              _semanticUiReact.Button,\n              { onClick: this.handleAddActor },\n              'Add Actors'\n            )\n          ),\n          _react2.default.createElement(\n            _semanticUiReact.Form.Field,\n            { control: _semanticUiReact.Button },\n            'Submit'\n          )\n        )\n      );\n    }\n  }]);\n\n  return MovieForm;\n}(_react.Component);\n\nexports.default = MovieForm;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb3ZpZUZvcm0uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL21vdmllRm9ybS5qcz8wMTBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJ1dHRvbiwgQ2hlY2tib3gsIEZvcm0sIElucHV0LCBSYWRpbywgU2VsZWN0LCBUZXh0QXJlYSwgTGlzdCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcblxuY29uc3QgZ2VucmVPcHRpb25zID0gW1xuICB7IGtleTogJ2gnLCB0ZXh0OiAnSG9ycm9yJywgdmFsdWU6ICdob3Jyb3InIH0sXG4gIHsga2V5OiAnYScsIHRleHQ6ICdBY3Rpb24nLCB2YWx1ZTogJ2FjdGlvbicgfSxcbiAgeyBrZXk6ICdkJywgdGV4dDogJ0RyYW1hJywgdmFsdWU6ICdkcmFtYScgfSxcbiAgeyBrZXk6ICdjJywgdGV4dDogJ0NvbWVkeScsIHZhbHVlOiAnY29tZWR5JyB9LFxuXTtcblxuY29uc3QgcmF0aW5nT3B0aW9ucyA9IFtcbiAgeyBrZXk6ICcxJywgdGV4dDogJzUnLCB2YWx1ZTogJzUnIH0sXG4gIHsga2V5OiAnMicsIHRleHQ6ICc0JywgdmFsdWU6ICc0JyB9LFxuICB7IGtleTogJzMnLCB0ZXh0OiAnMycsIHZhbHVlOiAnMycgfSxcbiAgeyBrZXk6ICc0JywgdGV4dDogJzInLCB2YWx1ZTogJzInIH0sXG4gIHsga2V5OiAnNScsIHRleHQ6ICcxJywgdmFsdWU6ICcxJyB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92aWVGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgYWN0b3JzOiBbXSxcbiAgICBhY3RvcjogJycsXG4gICAgdGl0bGU6ICcnLCBcbiAgICB5ZWFyOiAnJyxcbiAgICByYXRpbmc6ICcnLFxuICAgIGdlbnJlOiAnJyxcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChlLCB7IHZhbHVlIH0pID0+IHRoaXMuc2V0U3RhdGUoeyB2YWx1ZSB9KVxuXG4gIGhhbmRsZUFkZEFjdG9yID0gKGUpID0+IHtcbiAgICBjb25zdCB7IGFjdG9yLCBhY3RvcnMgfSA9IHRoaXMuc3RhdGU7XG4gICAgYWN0b3IgJiYgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RvcnM6IFsuLi5hY3RvcnMsIGFjdG9yXSxcbiAgICAgIGFjdG9yOiAnJyxcbiAgICAgIHRpdGxlOiAnJyxcbiAgICAgIHllYXI6ICcnLFxuICAgICAgZ2VucmU6ICcnLFxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gKGUsIGRhdGEpID0+IHtcbiAgICBjb25zdCB7IHZhbHVlLCBwbGFjZWhvbGRlciB9ID0gZGF0YTtcbiAgICBjb25zdCB0eXBlID0gcGxhY2Vob2xkZXIudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCBpc051bWJlciA9IChzdHJpbmcpID0+IC9eXFxkKyQvLnRlc3Qoc3RyaW5nKTtcbiAgICBpZiAodHlwZSA9PT0gJ3llYXInICYmIHZhbHVlLmxlbmd0aCl7XG4gICAgICBpZiAodmFsdWUubGVuZ3RoID4gNCB8fCAhaXNOdW1iZXIodmFsdWUpKXtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFt0eXBlXTogdmFsdWUgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgPExpc3Q+XG4gICAgICAgIHsgXG4gICAgICAgICAgdGhpcy5zdGF0ZS5hY3RvcnMubWFwKChhY3RvciwgaSkgPT4gKFxuICAgICAgICAgICAgPExpc3QuSXRlbSBrZXk9e2l9PnthY3Rvcn08L0xpc3QuSXRlbT5cbiAgICAgICAgICApKSBcbiAgICAgICAgfVxuICAgICAgPC9MaXN0PlxuICAgICAgPEZvcm0+XG4gICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz0nZXF1YWwnPlxuICAgICAgICAgIDxGb3JtLkZpZWxkIGNvbnRyb2w9e0lucHV0fSBsYWJlbD0nVGl0bGUnIHBsYWNlaG9sZGVyPSdUaXRsZScgdmFsdWU9e3RoaXMuc3RhdGUudGl0bGV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICA8Rm9ybS5GaWVsZCBjb250cm9sPXtJbnB1dH0gbGFiZWw9J1llYXInIHBsYWNlaG9sZGVyPSdZZWFyJyB2YWx1ZT17dGhpcy5zdGF0ZS55ZWFyfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgPEZvcm0uRmllbGQgY29udHJvbD17U2VsZWN0fSBsYWJlbD0nR2VucmUnIG9wdGlvbnM9e2dlbnJlT3B0aW9uc30gcGxhY2Vob2xkZXI9J0dlbnJlJyB2YWx1ZT17dGhpcy5zdGF0ZS5nZW5yZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgIDxGb3JtLkZpZWxkIGNvbnRyb2w9e1NlbGVjdH0gbGFiZWw9J1JhdGluZycgb3B0aW9ucz17cmF0aW5nT3B0aW9uc30gcGxhY2Vob2xkZXI9J1JhdGluZycgdmFsdWU9e3RoaXMuc3RhdGUucmF0aW5nfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgPEZvcm0uRmllbGQgY29udHJvbD17SW5wdXR9IGxhYmVsPSdBY3RvcicgcGxhY2Vob2xkZXI9J0FjdG9yJyB2YWx1ZT17dGhpcy5zdGF0ZS5hY3Rvcn0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVBZGRBY3Rvcn0+QWRkIEFjdG9yczwvQnV0dG9uPlxuICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgIDxGb3JtLkZpZWxkIGNvbnRyb2w9e0J1dHRvbn0+U3VibWl0PC9Gb3JtLkZpZWxkPlxuICAgICAgPC9Gb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFPQTs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBRkE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5BO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRBO0FBUkE7QUFxQkE7Ozs7QUEzREE7QUFDQTtBQURBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./movieForm.js\n");

/***/ })

/******/ });