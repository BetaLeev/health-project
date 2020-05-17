(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/shareArticle/shareArticle"],{

/***/ "./src/pages/shareArticle/shareArticle.jsx":
/*!*************************************************!*\
  !*** ./src/pages/shareArticle/shareArticle.jsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

__webpack_require__(/*! ./shareArticle.less */ "./src/pages/shareArticle/shareArticle.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var shareArticle = (_temp2 = _class = function (_BaseComponent) {
  _inherits(shareArticle, _BaseComponent);

  function shareArticle() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, shareArticle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = shareArticle.__proto__ || Object.getPrototypeOf(shareArticle)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__0", "$compid__1", "$compid__2", "$compid__3", "titleValue", "articleValue", "isOpened", "totastText"], _this.config = {
      navigationBarTitleText: '发布文章'
    }, _this.state = {
      titleValue: '',
      articleValue: '',
      isOpened: false,
      totastText: ''
    }, _this.publishArticle = function () {
      var bool = _this.checkValue([{
        value: _this.state.titleValue,
        totastText: '请输入标题'
      }, {
        value: _this.state.articleValue,
        totastText: '请输入文章内容'
      }]);
      if (!bool) {
        return false;
      }var json = _taroWeapp2.default.getStorageSync('json') || { data: { news: [] } };
      json.data.news.unshift({
        title: _this.state.titleValue,
        img: "../img/food-2.png",
        content: _this.state.articleValue
      });
      _taroWeapp2.default.setStorageSync('json', json);
      _taroWeapp2.default.reLaunch({
        url: '/pages/index/index'
      });
    }, _this.checkValue = function (arr) {
      return !arr.some(function (curr) {
        if (!curr.value) {
          _this.setState({
            isOpened: true,
            totastText: curr.totastText
          });
          return true;
        }
      });
    }, _this.customComponents = ["AtInput", "AtTextarea", "AtButton", "AtToast"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(shareArticle, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(shareArticle.prototype.__proto__ || Object.getPrototypeOf(shareArticle.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "handleChange",
    value: function handleChange(titleValue) {
      this.setState({
        titleValue: titleValue
      });
      return titleValue;
    }
  }, {
    key: "handleTextAreaChange",
    value: function handleTextAreaChange(articleValue) {
      this.setState({
        articleValue: articleValue
      });
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps, nextContext) {}
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
    key: "componentDidCatchError",
    value: function componentDidCatchError() {}
  }, {
    key: "componentDidNotFound",
    value: function componentDidNotFound() {}
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__0"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__0 = _genCompid2[0],
          $compid__0 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__1"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__1 = _genCompid4[0],
          $compid__1 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__2"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__2 = _genCompid6[0],
          $compid__2 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__3"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__3 = _genCompid8[0],
          $compid__3 = _genCompid8[1];

      _taroWeapp.propsManager.set({
        "title": "\u6587\u7AE0\u6807\u9898",
        "type": "text",
        "placeholder": "\u8BF7\u8F93\u5165\u6587\u7AE0\u6807\u9898",
        "value": this.__state.titleValue,
        "onChange": this.handleChange.bind(this)
      }, $compid__0, $prevCompid__0);
      _taroWeapp.propsManager.set({
        "className": "textarea",
        "value": this.__state.articleValue,
        "onChange": this.handleTextAreaChange.bind(this),
        "maxLength": 200,
        "placeholder": "\u8BF7\u8F93\u5165\u6587\u7AE0\u5185\u5BB9..."
      }, $compid__1, $prevCompid__1);
      _taroWeapp.propsManager.set({
        "className": "publish-article",
        "type": "primary",
        "full": true,
        "onClick": this.publishArticle.bind(this)
      }, $compid__2, $prevCompid__2);
      _taroWeapp.propsManager.set({
        "isOpened": this.__state.isOpened,
        "text": this.__state.totastText
      }, $compid__3, $prevCompid__3);
      Object.assign(this.__state, {
        $compid__0: $compid__0,
        $compid__1: $compid__1,
        $compid__2: $compid__2,
        $compid__3: $compid__3
      });
      return this.__state;
    }
  }]);

  return shareArticle;
}(_taroWeapp.Component), _class.$$events = [], _class.$$componentPath = "pages/shareArticle/shareArticle", _temp2);
exports.default = shareArticle;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(shareArticle, true));

/***/ }),

/***/ "./src/pages/shareArticle/shareArticle.less":
/*!**************************************************!*\
  !*** ./src/pages/shareArticle/shareArticle.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/shareArticle/shareArticle.jsx","runtime","vendors"]]]);