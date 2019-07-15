"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Furniture2 = _interopRequireDefault(require("./Furniture"));

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

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var Table =
/*#__PURE__*/
function (_Furniture) {
  _inherits(Table, _Furniture);

  function Table() {
    var _this;

    _classCallCheck(this, Table);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Table).call(this));

    _content.set(_assertThisInitialized(_this), {
      writable: true,
      value: []
    });

    return _this;
  }

  _createClass(Table, [{
    key: "getContent",
    value: function getContent() {
      return _classPrivateFieldGet(this, _content);
    }
  }, {
    key: "setContent",
    value: function setContent(object) {
      if (_classPrivateFieldGet(this, _content).length > 9) {
        console.log("... *CRACK* ! Wow, calm down, I'm already full !\n");
        return false;
      }

      return _classPrivateFieldGet(this, _content).push(object);
    }
  }, {
    key: "takeContent",
    value: function takeContent(pos) {
      return _classPrivateFieldGet(this, _content).splice(pos, 1);
    }
  }]);

  return Table;
}(_Furniture2["default"]);

var _content = new WeakMap();

var _default = Table;
exports["default"] = _default;