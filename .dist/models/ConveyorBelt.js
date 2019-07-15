"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Furniture2 = _interopRequireDefault(require("./Furniture"));

var _DragonBall = _interopRequireDefault(require("./DragonBall"));

var _GiftWrap = _interopRequireDefault(require("./GiftWrap"));

var _DBHeroes = _interopRequireDefault(require("../constants/DBHeroes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var ConveyorBelt =
/*#__PURE__*/
function (_Furniture) {
  _inherits(ConveyorBelt, _Furniture);

  function ConveyorBelt() {
    var _this;

    _classCallCheck(this, ConveyorBelt);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ConveyorBelt).call(this));

    _isBusy.set(_assertThisInitialized(_this), {
      writable: true,
      value: void 0
    });

    _this.setIsBusy(false);

    return _this;
  }

  _createClass(ConveyorBelt, [{
    key: "getIsBusy",
    value: function getIsBusy() {
      return _classPrivateFieldGet(this, _isBusy);
    }
  }, {
    key: "setIsBusy",
    value: function setIsBusy(bool) {
      _classPrivateFieldSet(this, _isBusy, bool);
    }
  }, {
    key: "inButton",
    value: function inButton(elf) {
      var toy = new _DragonBall["default"](_DBHeroes["default"].sangoku);
      var paper = new _GiftWrap["default"]();
      elf.pack(paper, toy);
      this.addObject(paper);

      _classPrivateFieldSet(this, _isBusy, true);
    }
  }, {
    key: "outButton",
    value: function outButton() {
      this.popObject();

      _classPrivateFieldSet(this, _isBusy, false);
    }
  }]);

  return ConveyorBelt;
}(_Furniture2["default"]);

var _isBusy = new WeakMap();

var _default = ConveyorBelt;
exports["default"] = _default;