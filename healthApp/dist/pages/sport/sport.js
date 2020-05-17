(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/sport/sport"],{

/***/ "./src/pages/sport/sport.jsx":
/*!***********************************!*\
  !*** ./src/pages/sport/sport.jsx ***!
  \***********************************/
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

__webpack_require__(/*! ./sport.less */ "./src/pages/sport/sport.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sport = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Sport, _BaseComponent);

  function Sport() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, Sport);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Sport.__proto__ || Object.getPrototypeOf(Sport)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray36", "loopArray37", "$compid__140", "$compid__141", "$compid__142", "$compid__143", "$compid__144", "$compid__145", "$compid__146", "type", "$anonymousCallee__15", "lists", "title", "value", "fare", "ganmao", "touyun", "run", "walk", "oterh", "other"], _this.state = {
      title: "",
      value: "",
      lists: [],
      fare: "",
      ganmao: "",
      touyun: "",
      run: "",
      walk: "",
      oterh: ""
    }, _this.getData = function () {
      var type = _this.state.type;
      var url = "http://localhost:3000/info";
      if (type === "1") {
        url = "http://localhost:3000/info";
      } else if (type === "2") {
        url = "http://localhost:3000/sport";
      }
      _taroWeapp2.default.request({
        url: url
      }).then(function (res) {
        console.log(res);
        var lists = res.data;
        _this.setState({
          lists: lists
        });
      });
    }, _this.setValue = function (value, e) {
      var key = e.target.id;
      _this.setState(_defineProperty({}, key, value));
    }, _this.save = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var type, data, url, that;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              type = _this.state.type;
              data = {};
              url = void 0;
              that = _this;

              if (type === "1") {
                data.touteng = _this.state.touteng;
                data.fare = _this.state.fare;
                data.ganmao = _this.state.ganmao;
                data.touyun = _this.state.touyun;
                url = "http://localhost:3000/info";
              } else {
                data.walk = _this.state.walk;
                data.run = _this.state.run;
                data.other = _this.state.other;
                url = "http://localhost:3000/sport";
              }

              _taroWeapp2.default.request({
                url: url,
                method: "post",
                data: data
              }).then(function (res) {
                console.log(res);
                _taroWeapp2.default.showToast({
                  title: "成功",
                  icon: "success",
                  duration: 2000
                }).then(function (res) {
                  console.log(res);
                  _this.getData();
                  that.setState({
                    fare: "",
                    ganmao: "",
                    touyun: "",
                    walk: "",
                    run: "",
                    other: ""
                  });
                });
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _this.customComponents = ["AtInput", "AtButton"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Sport, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Sport.prototype.__proto__ || Object.getPrototypeOf(Sport.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      console.log(this.$router.params);
      var type = this.$router.params.type;
      var info = "";
      var healthInfo = "健康信息管理";
      var sportInfo = "运动信息管理";
      console.log(type);
      if (type === "1") {
        info = healthInfo;
        console.log(type);
      } else if (type === "2") {
        info = sportInfo;
        console.log(type);
      }
      console.log("iiinfo ", info);
      this.setState({
        title: info,
        type: type
      });
      _taroWeapp2.default.setNavigationBarTitle({
        title: info
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getData();
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
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__140"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__140 = _genCompid2[0],
          $compid__140 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__141"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__141 = _genCompid4[0],
          $compid__141 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__142"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__142 = _genCompid6[0],
          $compid__142 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__143"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__143 = _genCompid8[0],
          $compid__143 = _genCompid8[1];

      var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "$compid__144"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__144 = _genCompid10[0],
          $compid__144 = _genCompid10[1];

      var _genCompid11 = (0, _taroWeapp.genCompid)(__prefix + "$compid__145"),
          _genCompid12 = _slicedToArray(_genCompid11, 2),
          $prevCompid__145 = _genCompid12[0],
          $compid__145 = _genCompid12[1];

      var _genCompid13 = (0, _taroWeapp.genCompid)(__prefix + "$compid__146"),
          _genCompid14 = _slicedToArray(_genCompid13, 2),
          $prevCompid__146 = _genCompid14[0],
          $compid__146 = _genCompid14[1];

      var _state = this.__state,
          title = _state.title,
          lists = _state.lists,
          type = _state.type;

      var $anonymousCallee__15 = lists.reverse();
      var loopArray36 = type === "1" ? lists.reverse().map(function (item, _anonIdx) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var $loopState__temp2 = type === "1" ? item.$original.date.split("T")[0] : null;
        var $loopState__temp4 = type === "1" ? item.$original.date.split("T")[1].split(".")[0] : null;
        return {
          $loopState__temp2: $loopState__temp2,
          $loopState__temp4: $loopState__temp4,
          $original: item.$original
        };
      }) : [];
      var loopArray37 = !(type === "1") ? lists.map(function (item, _anonIdx3) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var $loopState__temp6 = item.$original.date.split("T")[0];
        var $loopState__temp8 = item.$original.date.split("T")[1].split(".")[0];
        return {
          $loopState__temp6: $loopState__temp6,
          $loopState__temp8: $loopState__temp8,
          $original: item.$original
        };
      }) : [];
      type === "1" && _taroWeapp.propsManager.set({
        "name": "fare",
        "title": "\u662F\u5426\u53D1\u70ED",
        "type": "text",
        "value": this.__state.fare,
        "onChange": this.setValue
      }, $compid__140, $prevCompid__140);
      type === "1" && _taroWeapp.propsManager.set({
        "name": "ganmao",
        "title": "\u662F\u5426\u611F\u5192",
        "type": "text",
        "value": this.__state.ganmao,
        "onChange": this.setValue
      }, $compid__141, $prevCompid__141);
      type === "1" && _taroWeapp.propsManager.set({
        "name": "touyun",
        "title": "\u662F\u5426\u5934\u6655",
        "type": "text",
        "value": this.__state.touyun,
        "onChange": this.setValue
      }, $compid__142, $prevCompid__142);
      !(type === "1") && _taroWeapp.propsManager.set({
        "name": "run",
        "title": "\u8DD1\u6B65\u65F6\u95F4",
        "type": "text",
        "value": this.__state.run,
        "onChange": this.setValue
      }, $compid__143, $prevCompid__143);
      !(type === "1") && _taroWeapp.propsManager.set({
        "name": "walk",
        "title": "\u8D70\u8DEF\u65F6\u95F4",
        "type": "text",
        "value": this.__state.walk,
        "onChange": this.setValue
      }, $compid__144, $prevCompid__144);
      !(type === "1") && _taroWeapp.propsManager.set({
        "name": "other",
        "title": "\u5176\u4ED6\u8FD0\u52A8",
        "type": "text",
        "value": this.__state.other,
        "onChange": this.setValue
      }, $compid__145, $prevCompid__145);
      _taroWeapp.propsManager.set({
        "onClick": this.save
      }, $compid__146, $prevCompid__146);
      Object.assign(this.__state, {
        loopArray36: loopArray36,
        loopArray37: loopArray37,
        $compid__140: $compid__140,
        $compid__141: $compid__141,
        $compid__142: $compid__142,
        $compid__143: $compid__143,
        $compid__144: $compid__144,
        $compid__145: $compid__145,
        $compid__146: $compid__146,
        type: type,
        $anonymousCallee__15: $anonymousCallee__15
      });
      return this.__state;
    }
  }]);

  return Sport;
}(_taroWeapp.Component), _class.$$events = [], _class.$$componentPath = "pages/sport/sport", _temp2);
exports.default = Sport;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Sport, true));

/***/ }),

/***/ "./src/pages/sport/sport.less":
/*!************************************!*\
  !*** ./src/pages/sport/sport.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/sport/sport.jsx","runtime","vendors"]]]);