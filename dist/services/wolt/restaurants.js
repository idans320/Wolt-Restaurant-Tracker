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

var _asyncIterator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncIterator"));

var _constants = require("./constants");

var _undici = require("undici");

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
        var _yield$request, body, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, data;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _undici.request)(this.url);

              case 2:
                _yield$request = _context.sent;
                body = _yield$request.body;
                body.setEncoding('utf8');
                _iteratorAbruptCompletion = false;
                _didIteratorError = false;
                _context.prev = 7;
                _iterator = (0, _asyncIterator2["default"])(body);

              case 9:
                _context.next = 11;
                return _iterator.next();

              case 11:
                if (!(_iteratorAbruptCompletion = !(_step = _context.sent).done)) {
                  _context.next = 17;
                  break;
                }

                data = _step.value;
                return _context.abrupt("return", data);

              case 14:
                _iteratorAbruptCompletion = false;
                _context.next = 9;
                break;

              case 17:
                _context.next = 23;
                break;

              case 19:
                _context.prev = 19;
                _context.t0 = _context["catch"](7);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 23:
                _context.prev = 23;
                _context.prev = 24;

                if (!(_iteratorAbruptCompletion && _iterator["return"] != null)) {
                  _context.next = 28;
                  break;
                }

                _context.next = 28;
                return _iterator["return"]();

              case 28:
                _context.prev = 28;

                if (!_didIteratorError) {
                  _context.next = 31;
                  break;
                }

                throw _iteratorError;

              case 31:
                return _context.finish(28);

              case 32:
                return _context.finish(23);

              case 33:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[7, 19, 23, 33], [24,, 28, 32]]);
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