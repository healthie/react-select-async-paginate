'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends5 = require('babel-runtime/helpers/extends');

var _extends6 = _interopRequireDefault(_extends5);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialCache = {
  options: [],
  hasMore: true,
  isLoading: false
};

var AsyncPaginate = function (_Component) {
  (0, _inherits3.default)(AsyncPaginate, _Component);

  function AsyncPaginate(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, AsyncPaginate);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AsyncPaginate.__proto__ || (0, _getPrototypeOf2.default)(AsyncPaginate)).call(this, props));

    _this.onClose = function () {
      _this.setState({
        search: ''
      });
    };

    _this.onOpen = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (_this.state.optionsCache['']) {
                _context.next = 3;
                break;
              }

              _context.next = 3;
              return _this.loadOptions();

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    }));

    _this.onInputChange = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(search) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this.setState({
                  search: search
                });

              case 2:
                if (_this.state.optionsCache[search]) {
                  _context2.next = 5;
                  break;
                }

                _context2.next = 5;
                return _this.loadOptions();

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.onMenuScrollToBottom = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      var _this$state, search, optionsCache, currentOptions;

      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _this$state = _this.state, search = _this$state.search, optionsCache = _this$state.optionsCache;
              currentOptions = optionsCache[search];

              if (!currentOptions) {
                _context3.next = 5;
                break;
              }

              _context3.next = 5;
              return _this.loadOptions();

            case 5:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this2);
    }));


    var initialOptionsCache = props.options ? {
      '': {
        isLoading: false,
        options: props.options,
        hasMore: true
      }
    } : {};

    _this.state = {
      search: '',
      optionsCache: initialOptionsCache
    };
    return _this;
  }

  (0, _createClass3.default)(AsyncPaginate, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(_ref4) {
      var cacheUniq = _ref4.cacheUniq;

      if (cacheUniq !== this.props.cacheUniq) {
        this.setState({
          optionsCache: {}
        });
      }
    }
  }, {
    key: 'loadOptions',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
        var _state, search, optionsCache, currentOptions, _ref6, options, hasMore;

        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _state = this.state, search = _state.search, optionsCache = _state.optionsCache;
                currentOptions = optionsCache[search] || initialCache;

                if (!(currentOptions.isLoading || !currentOptions.hasMore)) {
                  _context4.next = 4;
                  break;
                }

                return _context4.abrupt('return');

              case 4:
                _context4.next = 6;
                return this.setState({
                  search: search,
                  optionsCache: (0, _extends6.default)({}, this.state.optionsCache, (0, _defineProperty3.default)({}, search, (0, _extends6.default)({}, currentOptions, {
                    isLoading: true
                  })))
                });

              case 6:
                _context4.prev = 6;
                _context4.next = 9;
                return this.props.loadOptions(search, currentOptions.options);

              case 9:
                _ref6 = _context4.sent;
                options = _ref6.options;
                hasMore = _ref6.hasMore;
                _context4.next = 14;
                return this.setState({
                  optionsCache: (0, _extends6.default)({}, this.state.optionsCache, (0, _defineProperty3.default)({}, search, (0, _extends6.default)({}, currentOptions, {
                    options: currentOptions.options.concat(options),
                    hasMore: !!hasMore,
                    isLoading: false
                  })))
                });

              case 14:
                _context4.next = 20;
                break;

              case 16:
                _context4.prev = 16;
                _context4.t0 = _context4['catch'](6);
                _context4.next = 20;
                return this.setState({
                  optionsCache: (0, _extends6.default)({}, this.state.optionsCache, (0, _defineProperty3.default)({}, search, (0, _extends6.default)({}, currentOptions, {
                    isLoading: false
                  })))
                });

              case 20:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this, [[6, 16]]);
      }));

      function loadOptions() {
        return _ref5.apply(this, arguments);
      }

      return loadOptions;
    }()
  }, {
    key: 'render',
    value: function render() {
      var selectRef = this.props.selectRef;
      var _state2 = this.state,
          search = _state2.search,
          optionsCache = _state2.optionsCache;


      var currentOptions = optionsCache[search] || initialCache;

      return _react2.default.createElement(_reactSelect2.default, (0, _extends6.default)({}, this.props, {
        onClose: this.onClose,
        onOpen: this.onOpen,
        onInputChange: this.onInputChange,
        onMenuScrollToBottom: this.onMenuScrollToBottom,
        isLoading: currentOptions.isLoading,
        options: currentOptions.options,
        ref: selectRef
      }));
    }
  }]);
  return AsyncPaginate;
}(_react.Component);

AsyncPaginate.propTypes = {
  loadOptions: _propTypes2.default.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  cacheUniq: _propTypes2.default.any,
  selectRef: _propTypes2.default.func,
  options: _propTypes2.default.arrayOf(_propTypes2.default.object)
};
AsyncPaginate.defaultProps = {
  cacheUniq: null,
  selectRef: function selectRef() {},
  options: null
};
exports.default = AsyncPaginate;