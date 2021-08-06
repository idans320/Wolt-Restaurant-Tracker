"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _restaurants = require("./services/wolt/restaurants");

var EventHandler = _interopRequireWildcard(require("./EventHandler"));

var _queue = _interopRequireDefault(require("queue"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var q = (0, _queue["default"])(); //This promise will resolve when the network call succeeds
//Feel free to make a REST fetch using promises and assign it to networkPromise

var trackStatus = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var TrackedRestaurant, isAvailable;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("checking gdb status");
            TrackedRestaurant = new _restaurants.Restaurant(process.env.WOLT_RESTAURANT);
            _context.next = 4;
            return TrackedRestaurant.getIsAvailable();

          case 4:
            isAvailable = _context.sent;
            if (isAvailable) EventHandler.emitRestaurantAvailable(TrackedRestaurant);else EventHandler.emitRestaurantUnavailable(TrackedRestaurant);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function trackStatus() {
    return _ref.apply(this, arguments);
  };
}();

q.autostart = true;
setInterval(function () {
  q.push(trackStatus);
}, 2000);