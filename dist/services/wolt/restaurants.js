"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Restaurant = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _constants = require("./constants");

var _got = _interopRequireDefault(require("got"));

var _nodeHtmlParser = require("node-html-parser");

var Restaurant = /*#__PURE__*/function () {
  function Restaurant(name) {
    (0, _classCallCheck2["default"])(this, Restaurant);
    this.name = name;
    this.url = "".concat(_constants.WOLT_URL_RESTAURANT, "/").concat(this.name);
  }

  (0, _createClass2["default"])(Restaurant, [{
    key: "getHtml",
    value: function () {
      var _getHtml = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var html;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _got["default"].get(this.url);

              case 2:
                html = _context.sent;
                return _context.abrupt("return", html.body);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getHtml() {
        return _getHtml.apply(this, arguments);
      }

      return getHtml;
    }()
  }, {
    key: "getIsAvailable",
    value: function () {
      var _getIsAvailable = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var html, dom, isAvaliable;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.getHtml();

              case 2:
                html = _context2.sent;
                dom = (0, _nodeHtmlParser.parse)(html);
                isAvaliable = !!dom.querySelector('span[data-localization-key="order.empty"]');
                return _context2.abrupt("return", isAvaliable);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getIsAvailable() {
        return _getIsAvailable.apply(this, arguments);
      }

      return getIsAvailable;
    }()
  }]);
  return Restaurant;
}();

exports.Restaurant = Restaurant;