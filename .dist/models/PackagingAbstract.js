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

var PackagingAbstract =
/*#__PURE__*/
function () {
  function PackagingAbstract() {
    _classCallCheck(this, PackagingAbstract);

    _isOpen.set(this, {
      writable: true,
      value: void 0
    });

    _toy.set(this, {
      writable: true,
      value: void 0
    });

    console.log('\n     ~~~ NEW PACKAGING CREATED ~~~     ');
    console.log("     >>> ".concat(this.constructor.name, "\n"));
    Object.freeze(this);
  }

  _createClass(PackagingAbstract, [{
    key: "getIsOpen",
    value: function getIsOpen() {
      return _classPrivateFieldGet(this, _isOpen);
    }
  }, {
    key: "setIsOpen",
    value: function setIsOpen(bool) {
      _classPrivateFieldSet(this, _isOpen, bool);
    }
  }, {
    key: "getToy",
    value: function getToy() {
      return _classPrivateFieldGet(this, _toy);
    }
  }, {
    key: "setToy",
    value: function setToy(toy) {
      _classPrivateFieldSet(this, _toy, toy);
    }
  }]);

  return PackagingAbstract;
}();

var _isOpen = new WeakMap();

var _toy = new WeakMap();

var _default = PackagingAbstract;
exports["default"] = _default;