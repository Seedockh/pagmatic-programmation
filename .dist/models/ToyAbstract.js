"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var ToyAbstract =
/*#__PURE__*/
function () {
  function ToyAbstract() {
    _classCallCheck(this, ToyAbstract);

    _isPacked.set(this, {
      writable: true,
      value: void 0
    });

    _type.set(this, {
      writable: true,
      value: void 0
    });

    console.log('\n        ~~~ NEW TOY CREATED ~~~        ');
    Object.freeze(this);
  }

  _createClass(ToyAbstract, [{
    key: "getIsPacked",
    value: function getIsPacked() {
      return _classPrivateFieldGet(this, _isPacked);
    }
  }, {
    key: "setIsPacked",
    value: function setIsPacked(bool) {
      _classPrivateFieldSet(this, _isPacked, bool);
    }
  }, {
    key: "getType",
    value: function getType() {
      return _classPrivateFieldGet(this, _type);
    }
  }, {
    key: "setType",
    value: function setType(type) {
      _classPrivateFieldSet(this, _type, type);
    }
  }]);

  return ToyAbstract;
}();

var _isPacked = new WeakMap();

var _type = new WeakMap();

var _default = ToyAbstract;
exports["default"] = _default;