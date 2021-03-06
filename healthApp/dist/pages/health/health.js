(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/health/health"],{

/***/ "./src/pages/health/health.jsx":
/*!*************************************!*\
  !*** ./src/pages/health/health.jsx ***!
  \*************************************/
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

__webpack_require__(/*! ./health.less */ "./src/pages/health/health.less");

var _data = __webpack_require__(/*! ../../mock/data.json */ "./src/mock/data.json");

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Health = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Health, _BaseComponent);

  function Health() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Health);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Health.__proto__ || Object.getPrototypeOf(Health)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "$compid__5", "$compid__6", "health", "current"], _this.config = {
      navigationBarTitleText: "健康管理"
    }, _this.customComponents = ["AtSegmentedControl", "AtTimeline"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Health, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Health.prototype.__proto__ || Object.getPrototypeOf(Health.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        current: 0
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        health: _data2.default.data.health
      });
    }
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
    key: "handleClick",
    value: function handleClick(value) {
      this.setState({
        current: value
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__5"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__5 = _genCompid2[0],
          $compid__5 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__6"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__6 = _genCompid4[0],
          $compid__6 = _genCompid4[1];

      var health = this.__state.health;

      var anonymousState__temp = ["早餐", "午餐", "晚餐"];
      var anonymousState__temp2 = [{ title: "刷牙洗脸" }, { title: "吃早餐", color: "green" }, { title: "上班", color: "red" }, { title: "睡觉", color: "yellow" }];
      _taroWeapp.propsManager.set({
        "values": anonymousState__temp,
        "onClick": this.handleClick.bind(this),
        "current": this.__state.current
      }, $compid__5, $prevCompid__5);
      _taroWeapp.propsManager.set({
        "items": anonymousState__temp2
      }, $compid__6, $prevCompid__6);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        $compid__5: $compid__5,
        $compid__6: $compid__6,
        health: health
      });
      return this.__state;
    }
  }]);

  return Health;
}(_taroWeapp.Component), _class.$$events = [], _class.$$componentPath = "pages/health/health", _temp2);
exports.default = Health;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Health, true));

/***/ }),

/***/ "./src/pages/health/health.less":
/*!**************************************!*\
  !*** ./src/pages/health/health.less ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/health/health.jsx","runtime","vendors"]]]);