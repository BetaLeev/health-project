(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["npm/taro-ui/dist/weapp/components/avatar/index"],{

/***/ "./node_modules/taro-ui/dist/weapp/components/avatar/index.tsx":
/*!*********************************************************************!*\
  !*** ./node_modules/taro-ui/dist/weapp/components/avatar/index.tsx ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _component = __webpack_require__(/*! ../../common/component */ "./node_modules/taro-ui/dist/weapp/common/component.tsx");

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SIZE_CLASS = {
  large: 'large',
  normal: 'normal',
  small: 'small'
};

var AtAvatar = function (_AtComponent) {
  _inherits(AtAvatar, _AtComponent);

  function AtAvatar() {
    _classCallCheck(this, AtAvatar);

    var _this = _possibleConstructorReturn(this, (AtAvatar.__proto__ || Object.getPrototypeOf(AtAvatar)).apply(this, arguments));

    _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "openData", "image", "letter", "isWEAPP", "size", "circle", "text", "customStyle", "className"];
    _this.customComponents = [];
    return _this;
  }

  _createClass(AtAvatar, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(AtAvatar.prototype.__proto__ || Object.getPrototypeOf(AtAvatar.prototype), '_constructor', this).call(this, props);
      this.state = {
        isWEAPP: _taroWeapp2.default.getEnv() === _taroWeapp2.default.ENV_TYPE.WEAPP
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: '_createData',
    value: function _createData() {
      var _classObject;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var _props = this.__props,
          size = _props.size,
          circle = _props.circle,
          image = _props.image,
          text = _props.text,
          openData = _props.openData,
          customStyle = _props.customStyle;

      var rootClassName = ['at-avatar'];
      var iconSize = SIZE_CLASS[size || 'normal'];
      var classObject = (_classObject = {}, _defineProperty(_classObject, "at-avatar--" + iconSize, iconSize), _defineProperty(_classObject, 'at-avatar--circle', circle), _classObject);
      var letter = '';
      if (text) {
        letter = text[0];
      }
      var elem = void 0;
      if (openData && openData.type === 'userAvatarUrl' && this.__state.isWEAPP) {} else if (image) {}
      var anonymousState__temp = (0, _classnames2.default)(rootClassName, classObject, this.__props.className);
      var anonymousState__temp2 = (0, _taroWeapp.internal_inline_style)(customStyle);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        openData: openData,
        image: image,
        letter: letter
      });
      return this.__state;
    }
  }]);

  return AtAvatar;
}(_component2.default);

AtAvatar.$$events = [];
AtAvatar.$$componentPath = "Users/vlee/Desktop/healthApp/node_modules/taro-ui/dist/weapp/components/avatar/index";
AtAvatar.defaultProps = {
  size: 'normal',
  circle: false,
  text: '',
  image: '',
  openData: undefined,
  customStyle: {},
  className: ''
};
AtAvatar.propTypes = {
  size: _propTypes2.default.oneOf(['large', 'normal', 'small']),
  circle: _propTypes2.default.bool,
  text: _propTypes2.default.string,
  image: _propTypes2.default.string,
  openData: _propTypes2.default.object,
  customStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
  className: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.string])
};
exports.default = AtAvatar;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(AtAvatar));

/***/ })

},[["./node_modules/taro-ui/dist/weapp/components/avatar/index.tsx","runtime","vendors"]]]);