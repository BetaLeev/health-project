(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/ask/ask"],{

/***/ "./src/pages/ask/ask.jsx":
/*!*******************************!*\
  !*** ./src/pages/ask/ask.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _data = __webpack_require__(/*! ../../mock/data.json */ "./src/mock/data.json");

var _data2 = _interopRequireDefault(_data);

__webpack_require__(/*! ./ask.less */ "./src/pages/ask/ask.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ask = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Ask, _BaseComponent);

  function Ask() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Ask);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Ask.__proto__ || Object.getPrototypeOf(Ask)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__7", "$compid__8", "questions", "value"], _this.config = {
      navigationBarTitleText: "健康咨询中心"
    }, _this.customComponents = ["AtTextarea", "AtButton"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Ask, [{
    key: "_constructor",
    value: function _constructor() {
      this.state = {
        value: ""
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        questions: _data2.default.data.question
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "handleChange",
    value: function handleChange(value) {
      this.setState({
        value: value
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__7"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__7 = _genCompid2[0],
          $compid__7 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__8"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__8 = _genCompid4[0],
          $compid__8 = _genCompid4[1];

      var questions = this.__state.questions;

      _taroWeapp.propsManager.set({
        "value": this.__state.value,
        "onChange": this.handleChange.bind(this),
        "maxLength": 200,
        "placeholder": "\u4F60\u7684\u95EE\u9898\u662F..."
      }, $compid__7, $prevCompid__7);
      _taroWeapp.propsManager.set({
        "type": "primary"
      }, $compid__8, $prevCompid__8);
      Object.assign(this.__state, {
        $compid__7: $compid__7,
        $compid__8: $compid__8,
        questions: questions
      });
      return this.__state;
    }
  }]);

  return Ask;
}(_taroWeapp.Component), _class.$$events = [], _class.$$componentPath = "pages/ask/ask", _temp2);
exports.default = Ask;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Ask, true));

/***/ }),

/***/ "./src/pages/ask/ask.less":
/*!********************************!*\
  !*** ./src/pages/ask/ask.less ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/ask/ask.jsx","runtime","vendors"]]]);