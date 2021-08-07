"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _nodeTelegramBotApi = _interopRequireDefault(require("node-telegram-bot-api"));

var Telegram = function Telegram() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, Telegram);
  (0, _defineProperty2["default"])(this, "token", process.env.TELEGRAM_TOKEN);
  (0, _defineProperty2["default"])(this, "chat_id", process.env.TELEGRAM_CHAT_ID);
  (0, _defineProperty2["default"])(this, "sendMessage", function (text) {
    var bot = new _nodeTelegramBotApi["default"](_this.token);
    bot.sendMessage(_this.chat_id, text);
  });
};

var telegram = new Telegram();
var _default = telegram;
exports["default"] = _default;