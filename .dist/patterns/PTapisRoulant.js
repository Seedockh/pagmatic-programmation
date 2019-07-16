"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ConveyorBelt = _interopRequireDefault(require("../models/ConveyorBelt"));

var _Box = _interopRequireDefault(require("../models/Box"));

var _GiftWrap = _interopRequireDefault(require("../models/GiftWrap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// GET THE PACKAGINGS HERE
var PTapisRoulant =
/*#__PURE__*/
function () {
  function PTapisRoulant() {
    _classCallCheck(this, PTapisRoulant);
  }

  _createClass(PTapisRoulant, [{
    key: "createBox",
    value: function createBox() {
      var box = new _Box["default"]();
      return box;
    }
  }, {
    key: "createPaper",
    value: function createPaper() {
      var paper = new _GiftWrap["default"]();
      return paper;
    }
  }, {
    key: "createConveyorBelt",
    value: function createConveyorBelt() {
      var tapis = new _ConveyorBelt["default"]();
      return tapis;
    }
  }]);

  return PTapisRoulant;
}();

var _default = PTapisRoulant;
exports["default"] = _default;