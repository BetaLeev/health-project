(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["npm/taro-ui/dist/weapp/components/loading/index"],{

/***/ "./node_modules/taro-ui/dist/weapp/components/loading/index.tsx":
/*!**********************************************************************!*\
  !*** ./node_modules/taro-ui/dist/weapp/components/loading/index.tsx ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _component = __webpack_require__(/*! ../../common/component */ "./node_modules/taro-ui/dist/weapp/common/component.tsx");

var _component2 = _interopRequireDefault(_component);

var _utils = __webpack_require__(/*! ../../common/utils */ "./node_modules/taro-ui/dist/weapp/common/utils.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _utils.initTestEnv)();

var AtLoading = function (_AtComponent) {
  _inherits(AtLoading, _AtComponent);

  function AtLoading() {
    _classCallCheck(this, AtLoading);

    var _this = _possibleConstructorReturn(this, (AtLoading.__proto__ || Object.getPrototypeOf(AtLoading)).apply(this, arguments));

    _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "color", "size"];
    _this.customComponents = [];
    return _this;
  }

  _createClass(AtLoading, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(AtLoading.prototype.__proto__ || Object.getPrototypeOf(AtLoading.prototype), '_constructor', this).call(this, props);
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var _props = this.__props,
          color = _props.color,
          size = _props.size;

      var loadingSize = typeof size === 'string' ? size : String(size);
      var sizeStyle = {
        width: size ? "" + _taroWeapp2.default.pxTransform(parseInt(loadingSize)) : '',
        height: size ? "" + _taroWeapp2.default.pxTransform(parseInt(loadingSize)) : ''
      };
      var colorStyle = {
        border: color ? "1px solid " + color : '',
        'border-color': color ? color + " transparent transparent transparent" : ''
      };
      var ringStyle = Object.assign({}, colorStyle, sizeStyle);
      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)(sizeStyle);
      var anonymousState__temp2 = (0, _taroWeapp.internal_inline_style)(ringStyle);
      var anonymousState__temp3 = (0, _taroWeapp.internal_inline_style)(ringStyle);
      var anonymousState__temp4 = (0, _taroWeapp.internal_inline_style)(ringStyle);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4
      });
      return this.__state;
    }
  }]);

  return AtLoading;
}(_component2.default);

AtLoading.$$events = [];
AtLoading.$$componentPath = "Users/vlee/Desktop/healthApp/node_modules/taro-ui/dist/weapp/components/loading/index";
AtLoading.defaultProps = {
  size: 0,
  color: ''
};
AtLoading.propTypes = {
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  color: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};
exports.default = AtLoading;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(AtLoading));

/***/ })

},[["./node_modules/taro-ui/dist/weapp/components/loading/index.tsx","runtime","vendors"]]]);