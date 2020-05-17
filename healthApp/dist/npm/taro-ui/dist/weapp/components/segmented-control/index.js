(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["npm/taro-ui/dist/weapp/components/segmented-control/index"],{

/***/ "./node_modules/taro-ui/dist/weapp/components/segmented-control/index.tsx":
/*!********************************************************************************!*\
  !*** ./node_modules/taro-ui/dist/weapp/components/segmented-control/index.tsx ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _component = __webpack_require__(/*! ../../common/component */ "./node_modules/taro-ui/dist/weapp/common/component.tsx");

var _component2 = _interopRequireDefault(_component);

var _utils = __webpack_require__(/*! ../../common/utils */ "./node_modules/taro-ui/dist/weapp/common/utils.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _utils.initTestEnv)();

var AtSegmentedControl = function (_AtComponent) {
  _inherits(AtSegmentedControl, _AtComponent);

  function AtSegmentedControl() {
    _classCallCheck(this, AtSegmentedControl);

    var _this = _possibleConstructorReturn(this, (AtSegmentedControl.__proto__ || Object.getPrototypeOf(AtSegmentedControl)).apply(this, arguments));

    _this.$usedState = ["anonymousState__temp", "loopArray3", "rootCls", "values", "disabled", "customStyle", "className", "selectedColor", "current", "color", "fontSize"];
    _this.customComponents = [];
    return _this;
  }

  _createClass(AtSegmentedControl, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(AtSegmentedControl.prototype.__proto__ || Object.getPrototypeOf(AtSegmentedControl.prototype), '_constructor', this).call(this, props);
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'handleClick',
    value: function handleClick(index, event) {
      if (this.props.disabled) {
        return;
      }
      this.props.onClick(index, event);
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
          customStyle = _props.customStyle,
          className = _props.className,
          disabled = _props.disabled,
          values = _props.values,
          selectedColor = _props.selectedColor,
          current = _props.current,
          color = _props.color,
          fontSize = _props.fontSize;

      var rootStyle = {
        borderColor: selectedColor
      };
      var itemStyle = {
        color: selectedColor,
        fontSize: (0, _utils.pxTransform)(fontSize),
        borderColor: selectedColor,
        backgroundColor: color
      };
      var selectedItemStyle = {
        color: color,
        fontSize: (0, _utils.pxTransform)(fontSize),
        borderColor: selectedColor,
        backgroundColor: selectedColor
      };
      var rootCls = (0, _classnames2.default)('at-segmented-control', {
        'at-segmented-control--disabled': disabled
      }, className);
      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)(this.mergeStyle(rootStyle, customStyle));
      var loopArray3 = values.map(function (value, i) {
        value = {
          $original: (0, _taroWeapp.internal_get_original)(value)
        };
        var $loopState__temp3 = (0, _classnames2.default)('at-segmented-control__item', {
          'at-segmented-control__item--active': current === i
        });
        var $loopState__temp5 = (0, _taroWeapp.internal_inline_style)(current === i ? selectedItemStyle : itemStyle);
        return {
          $loopState__temp3: $loopState__temp3,
          $loopState__temp5: $loopState__temp5,
          $original: value.$original
        };
      });
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        loopArray3: loopArray3,
        rootCls: rootCls,
        values: values
      });
      return this.__state;
    }
  }]);

  return AtSegmentedControl;
}(_component2.default);

AtSegmentedControl.$$events = ["handleClick"];
AtSegmentedControl.$$componentPath = "Users/vlee/Desktop/healthApp/node_modules/taro-ui/dist/weapp/components/segmented-control/index";
AtSegmentedControl.defaultProps = {
  customStyle: '',
  className: '',
  current: 0,
  color: '',
  fontSize: 0,
  disabled: false,
  selectedColor: '',
  values: [],
  onClick: function onClick() {}
};
AtSegmentedControl.propTypes = {
  customStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
  className: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.string]),
  current: _propTypes2.default.number,
  color: _propTypes2.default.string,
  fontSize: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  disabled: _propTypes2.default.bool,
  values: _propTypes2.default.array,
  onClick: _propTypes2.default.func
};
exports.default = AtSegmentedControl;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(AtSegmentedControl));

/***/ })

},[["./node_modules/taro-ui/dist/weapp/components/segmented-control/index.tsx","runtime","vendors"]]]);