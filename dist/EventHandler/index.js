"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStatus = exports.emitRestaurantUnavailable = exports.emitRestaurantAvailable = void 0;

var _events = _interopRequireDefault(require("events"));

var _constants = require("./constants");

var _telegram = require("../telegram");

var current_status = {
  status: null
};
var EventHandler = new _events["default"]();
EventHandler.on(_constants.RESTAURANT_AVAILABLE, function (restaurant) {
  if (!current_status.status || current_status.status === _constants.RESTAURANT_UNAVAILABLE) {
    var message = "".concat(restaurant.name, " is now available :)\n ").concat(restaurant.url);
    (0, _telegram.sendMessage)(message);
    current_status.status = _constants.RESTAURANT_AVAILABLE;
  }
});
EventHandler.on(_constants.RESTAURANT_UNAVAILABLE, function (restaurant) {
  if (!current_status.status || current_status.status === _constants.RESTAURANT_AVAILABLE) {
    var message = "".concat(restaurant.name, " is now unavailable :(");
    (0, _telegram.sendMessage)(message);
    current_status.status = _constants.RESTAURANT_UNAVAILABLE;
  }
});

var emitRestaurantAvailable = function emitRestaurantAvailable(restaurant) {
  EventHandler.emit(_constants.RESTAURANT_AVAILABLE, restaurant);
};

exports.emitRestaurantAvailable = emitRestaurantAvailable;

var emitRestaurantUnavailable = function emitRestaurantUnavailable(restaurant) {
  EventHandler.emit(_constants.RESTAURANT_UNAVAILABLE, restaurant);
};

exports.emitRestaurantUnavailable = emitRestaurantUnavailable;

var getStatus = function getStatus() {
  return current_status.status;
};

exports.getStatus = getStatus;