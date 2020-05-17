(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["npm/taro-ui/dist/weapp/components/timeline/index"],{

/***/ "./node_modules/taro-ui/dist/weapp/components/timeline/index.tsx":
/*!***********************************************************************!*\
  !*** ./node_modules/taro-ui/dist/weapp/components/timeline/index.tsx ***!
  \***********************************************************************/
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AtTimeline = function (_AtComponent) {
  _inherits(AtTimeline, _AtComponent);

  function AtTimeline() {
    _classCallCheck(this, AtTimeline);

    var _this = _possibleConstructorReturn(this, (AtTimeline.__proto__ || Object.getPrototypeOf(AtTimeline)).apply(this, arguments));

    _this.$usedState = ["anonymousState__temp7", "anonymousState__temp8", "loopArray4", "items", "pending", "customStyle", "className"];
    _this.customComponents = [];
    return _this;
  }

  _createClass(AtTimeline, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(AtTimeline.prototype.__proto__ || Object.getPrototypeOf(AtTimeline.prototype), '_constructor', this).call(this, props);
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
          pending = _props.pending,
          items = _props.items,
          customStyle = _props.customStyle;

      var rootClassName = ['at-timeline'];
      if (pending) {
        rootClassName.push('at-timeline--pending');
      }
      var rootClassObject = {
        'at-timeline--pending': pending
      };
      var anonymousState__temp7 = (0, _classnames2.default)(rootClassName, rootClassObject, this.__props.className);
      var anonymousState__temp8 = (0, _taroWeapp.internal_inline_style)(customStyle);
      var loopArray4 = items.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var _item$$original = item.$original,
            _item$$original$title = _item$$original.title,
            title = _item$$original$title === undefined ? '' : _item$$original$title,
            color = _item$$original.color,
            icon = _item$$original.icon,
            _item$$original$conte = _item$$original.content,
            content = _item$$original$conte === undefined ? [] : _item$$original$conte;

        var iconClass = (0, _classnames2.default)(_defineProperty({
          'at-icon': true
        }, "at-icon-" + icon, icon));
        var itemRootClassName = ['at-timeline-item'];
        if (color) {
          itemRootClassName.push("at-timeline-item--" + color);
        }
        var dotClass = [];
        if (icon) {
          dotClass.push('at-timeline-item__icon');
        } else {
          dotClass.push('at-timeline-item__dot');
        }
        var $loopState__temp2 = (0, _classnames2.default)(itemRootClassName);
        var $loopState__temp4 = "at-timeline-item-" + index;
        var $loopState__temp6 = (0, _classnames2.default)(dotClass);
        return {
          color: color,
          icon: icon,
          title: title,
          content: content,
          iconClass: iconClass,
          itemRootClassName: itemRootClassName,
          dotClass: dotClass,
          $loopState__temp2: $loopState__temp2,
          $loopState__temp4: $loopState__temp4,
          $loopState__temp6: $loopState__temp6,
          $original: item.$original
        };
      });
      Object.assign(this.__state, {
        anonymousState__temp7: anonymousState__temp7,
        anonymousState__temp8: anonymousState__temp8,
        loopArray4: loopArray4,
        items: items
      });
      return this.__state;
    }
  }]);

  return AtTimeline;
}(_component2.default);

AtTimeline.$$events = [];
AtTimeline.$$componentPath = "Users/vlee/Desktop/healthApp/node_modules/taro-ui/dist/weapp/components/timeline/index";
AtTimeline.defaultProps = {
  pending: false,
  items: [],
  customStyle: {}
};
AtTimeline.propTypes = {
  pending: _propTypes2.default.bool,
  items: _propTypes2.default.arrayOf(_propTypes2.default.object),
  customStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string])
};
exports.default = AtTimeline;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(AtTimeline));

/***/ })

},[["./node_modules/taro-ui/dist/weapp/components/timeline/index.tsx","runtime","vendors"]]]);