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

var FurnitureAbstract =
/*#__PURE__*/
function () {
  function FurnitureAbstract() {
    _classCallCheck(this, FurnitureAbstract);

    _objects.set(this, {
      writable: true,
      value: []
    });

    console.log('\n     ~~~ NEW FURNITURE CREATED ~~~      ');
    console.log('________________________________________');
    console.log("   >>> ".concat(this.constructor.name, "\n"));
    Object.freeze(this);
  }

  _createClass(FurnitureAbstract, [{
    key: "getObjects",
    value: function getObjects() {
      return _classPrivateFieldGet(this, _objects).map(function (obj) {
        return obj.constructor.name;
      });
    }
  }, {
    key: "setObjects",
    value: function setObjects(objects) {
      return _classPrivateFieldSet(this, _objects, objects);
    }
  }, {
    key: "addObject",
    value: function addObject(object) {
      _classPrivateFieldGet(this, _objects).push(object);

      return _classPrivateFieldGet(this, _objects);
    }
  }, {
    key: "popObject",
    value: function popObject() {
      _classPrivateFieldGet(this, _objects).pop();

      return _classPrivateFieldGet(this, _objects);
    }
  }]);

  return FurnitureAbstract;
}();

var _objects = new WeakMap();

var _default = FurnitureAbstract;
exports["default"] = _default;