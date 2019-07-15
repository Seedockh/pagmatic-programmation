"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Toy2 = _interopRequireDefault(require("./Toy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

var nb = function () {
  var instances = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return {
    increment: function increment() {
      return instances++;
    }
  };
}();

var Pony =
/*#__PURE__*/
function (_Toy) {
  _inherits(Pony, _Toy);

  function Pony() {
    var _this;

    _classCallCheck(this, Pony);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Pony).call(this));

    _nb.set(_assertThisInitialized(_this), {
      writable: true,
      value: nb.increment()
    });

    _id.set(_assertThisInitialized(_this), {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(_assertThisInitialized(_this), _id, _classPrivateFieldGet(_assertThisInitialized(_this), _nb));

    _this.setIsPacked(false);

    _this.setType("Pony #".concat(_classPrivateFieldGet(_assertThisInitialized(_this), _id)));

    console.log("".concat(_this.getType(), " is singing -->\nDou-double poney, j\u2019fais izi money\nD\u2019o\xF9 tu m\u2019connais ? Parle moi en billets violets\nDou-double poney, j\u2019fais izi money"));
    return _this;
  }

  return Pony;
}(_Toy2["default"]);

var _nb = new WeakMap();

var _id = new WeakMap();

var _default = Pony;
exports["default"] = _default;