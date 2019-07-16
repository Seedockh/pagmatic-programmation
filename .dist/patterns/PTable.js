"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Table = _interopRequireDefault(require("../models/Table"));

var _Pony = _interopRequireDefault(require("../models/Pony"));

var _DragonBall = _interopRequireDefault(require("../models/DragonBall"));

var _DBHeroes = _interopRequireDefault(require("../constants/DBHeroes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// GET THE TOYS HERE
var PTable =
/*#__PURE__*/
function () {
  function PTable() {
    _classCallCheck(this, PTable);
  }

  _createClass(PTable, [{
    key: "createPony",
    value: function createPony() {
      var pony = new _Pony["default"]();
      return pony;
    }
  }, {
    key: "createDragonBall",
    value: function createDragonBall() {
      var dragonball = new _DragonBall["default"](_DBHeroes["default"].bejita);
      return dragonball;
    }
  }, {
    key: "createTable",
    value: function createTable() {
      var table = new _Table["default"]();
      return table;
    }
  }]);

  return PTable;
}();

var _default = PTable;
exports["default"] = _default;