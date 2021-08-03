"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _restaurants = require("./services/wolt/restaurants");

var EventHandler = _interopRequireWildcard(require("./EventHandler"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function main() {
  return _main.apply(this, arguments);
}

function _main() {
  _main = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var TrackedRestaurant, isAvailable, timeOutPromise;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            //This promise will resolve when the network call succeeds
            //Feel free to make a REST fetch using promises and assign it to networkPromise
            console.log("Listening to GDB status");
            TrackedRestaurant = new _restaurants.Restaurant(process.env.WOLT_RESTAURANT);
            _context.next = 4;
            return TrackedRestaurant.getIsAvailable();

          case 4:
            isAvailable = _context.sent;
            if (isAvailable) EventHandler.emitRestaurantAvailable(TrackedRestaurant);else EventHandler.emitRestaurantUnavailable(TrackedRestaurant); //This promise will resolve when 2 seconds have passed

            timeOutPromise = new Promise(function (resolve, reject) {
              // 2 Second delay
              setTimeout(resolve, 2000, 'Timeout Done');
            });
            Promise.all([networkPromise, timeOutPromise]).then(function (values) {
              //Repeat
              main();
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _main.apply(this, arguments);
}

main();