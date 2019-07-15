"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

var Elf =
/*#__PURE__*/
function () {
  function Elf(nickname) {
    _classCallCheck(this, Elf);

    _nickname.set(this, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _nickname, nickname);
  }

  _createClass(Elf, [{
    key: "setNickname",
    value: function setNickname(nickname) {
      _classPrivateFieldSet(this, _nickname, nickname);
    }
  }, {
    key: "getNickname",
    value: function getNickname() {
      return _classPrivateFieldGet(this, _nickname);
    }
  }, {
    key: "pack",
    value: function pack(packaging, toy) {
      if (packaging.constructor.name === 'Box' && !packaging.getIsOpen()) {
        console.log('Sorry, this package is not opened ! :(');
      } else if (packaging.getToy()) {
        console.log('Sorry, this package is already filled ! :(');
      } else {
        packaging.insert(toy);
        console.log("Yeaaaah! Just packing the toy ~~ ".concat(toy.getType(), " ~~"));
      }
    }
  }, {
    key: "unpack",
    value: function unpack(packaging) {
      if (packaging.getIsOpen() || !packaging.getToy()) {
        console.log('Sorry, this package is already empty ! :(');
        return packaging.getToy();
      } else {
        var toy = packaging.getToy();
        packaging.setToy(null);
        console.log("Ooooooh! Just unpacking the toy ~~ ".concat(toy.getType(), " ~~"));
        return toy;
      }
    }
  }, {
    key: "log",
    value: function log() {
      var date = new Date();
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var seconds = date.getSeconds();
      return "[".concat(hours, ":").concat(minutes, ":").concat(seconds, "]");
    }
  }, {
    key: "put",
    value: function put(obj, furniture) {
      console.log("".concat(this.log(), " ").concat(_classPrivateFieldGet(this, _nickname), " is putting a ").concat(obj.constructor.name, " on the ").concat(furniture.constructor.name));
      return furniture.put(obj);
    }
  }, {
    key: "take",
    value: function take(obj, furniture) {
      console.log("".concat(this.log(), " ").concat(_classPrivateFieldGet(this, _nickname), " is removing an object from the ").concat(furniture.constructor.name));
      return furniture.take();
    }
  }, {
    key: "in",
    value: function _in(conveyorBelt) {
      console.log("".concat(this.log(), " ").concat(_classPrivateFieldGet(this, _nickname), " has pushed IN button."));
      return conveyorBelt.inButton(this);
    }
  }, {
    key: "out",
    value: function out(conveyorBelt) {
      console.log("".concat(this.log(), " * PWOOF! *").concat(_classPrivateFieldGet(this, _nickname), " has sent some magic to Sannnta ! ='D"));
      return conveyorBelt.outButton();
    }
  }, {
    key: "look",
    value: function look(furniture) {
      return console.log(furniture.getObjects());
    }
  }]);

  return Elf;
}();

var _nickname = new WeakMap();

var _default = Elf;
exports["default"] = _default;