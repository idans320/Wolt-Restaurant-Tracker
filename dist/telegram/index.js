"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendMessage = void 0;

var _nodeTelegramBotApi = _interopRequireDefault(require("node-telegram-bot-api"));

var token = process.env.TELEGRAM_TOKEN;
var chat_id = process.env.TELEGRAM_CHAT_ID;

var sendMessage = function sendMessage(text) {
  var bot = new _nodeTelegramBotApi["default"](token);
  bot.sendMessage(chat_id, text);
};

exports.sendMessage = sendMessage;