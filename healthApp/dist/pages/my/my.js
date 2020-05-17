(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/my/my"],{

/***/ "./src/pages/my/my.jsx":
/*!*****************************!*\
  !*** ./src/pages/my/my.jsx ***!
  \*****************************/
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

__webpack_require__(/*! ./my.less */ "./src/pages/my/my.less");

var _data = __webpack_require__(/*! ../../mock/data.json */ "./src/mock/data.json");

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_taroWeapp2.default.setStorageSync("json", _data2.default);
// 个人中心 - 我的页面

var My = (_temp2 = _class = function (_BaseComponent) {
  _inherits(My, _BaseComponent);

  function My() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, My);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = My.__proto__ || Object.getPrototypeOf(My)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__96", "$compid__97", "userInfo", "value"], _this.config = {
      navigationBarTitleText: "个人中心"
    }, _this.setUserInfo = function (userInfo) {
      console.log(userInfo);
      _this.setState({
        userInfo: userInfo
      }, function () {
        _taroWeapp2.default.showToast({
          title: "登录成功",
          icon: "success"
        });
        "", _this.state.userInfo;
      });
    }, _this.userInfo = function (e) {
      var userInfo = e.detail.userInfo;
      _this.setUserInfo(userInfo);
      console.log(e);
    }, _this.toHome = function (e) {
      var type = e.currentTarget.dataset.index;
      console.log(e);

      _taroWeapp2.default.navigateTo({
        url: "../sport/sport?type=" + type
      });
    }, _this.customComponents = ["AtAvatar", "AtButton"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(My, [{
    key: "_constructor",
    value: function _constructor() {
      _get(My.prototype.__proto__ || Object.getPrototypeOf(My.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        value: "",
        userInfo: {
          avatarUrl: "https://jdc.jd.com/img/200",
          nikeName: ""
        }
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
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
    key: "onSubmit",
    value: function onSubmit(event) {
      console.log(this.state.value);
    }
  }, {
    key: "onReset",
    value: function onReset(event) {
      this.setState({
        value: ""
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__96"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__96 = _genCompid2[0],
          $compid__96 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__97"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__97 = _genCompid4[0],
          $compid__97 = _genCompid4[1];

      var userInfo = this.__state.userInfo;

      _taroWeapp.propsManager.set({
        "circle": true,
        "image": userInfo.avatarUrl,
        "className": "avatar"
      }, $compid__96, $prevCompid__96);
      userInfo.nikeName == "" && _taroWeapp.propsManager.set({
        "openType": "getUserInfo",
        "onGetUserInfo": this.userInfo,
        "className": "btn"
      }, $compid__97, $prevCompid__97);
      Object.assign(this.__state, {
        $compid__96: $compid__96,
        $compid__97: $compid__97
      });
      return this.__state;
    }
  }]);

  return My;
}(_taroWeapp.Component), _class.$$events = ["toHome"], _class.$$componentPath = "pages/my/my", _temp2);
exports.default = My;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(My, true));

/***/ }),

/***/ "./src/pages/my/my.less":
/*!******************************!*\
  !*** ./src/pages/my/my.less ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/my/my.jsx","runtime","vendors"]]]);