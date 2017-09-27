"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NoTokenSetWhileMakingRequest = function (_Error) {
    _inherits(NoTokenSetWhileMakingRequest, _Error);

    function NoTokenSetWhileMakingRequest() {
        _classCallCheck(this, NoTokenSetWhileMakingRequest);

        var _this = _possibleConstructorReturn(this, (NoTokenSetWhileMakingRequest.__proto__ || Object.getPrototypeOf(NoTokenSetWhileMakingRequest)).call(this));

        _this.name = "NoTokenSetWhileMakingRequest";
        _this.message = ["Network manager was asked to make a request but a token", "was not set on the manager instance."].join(" ");
        _this.stack = new Error().stack;
        return _this;
    }

    return NoTokenSetWhileMakingRequest;
}(Error);

var TokenMustBeString = function (_Error2) {
    _inherits(TokenMustBeString, _Error2);

    function TokenMustBeString() {
        _classCallCheck(this, TokenMustBeString);

        var _this2 = _possibleConstructorReturn(this, (TokenMustBeString.__proto__ || Object.getPrototypeOf(TokenMustBeString)).call(this));

        _this2.name = "TokenMustBeString";
        _this2.message = ["Network manager was asked to set its token, but the given", "token was not of type string."].join(" ");
        _this2.stack = new Error().stack;
        return _this2;
    }

    return TokenMustBeString;
}(Error);

module.exports = {
    NoTokenSetWhileMakingRequest: NoTokenSetWhileMakingRequest,
    TokenMustBeString: TokenMustBeString
};