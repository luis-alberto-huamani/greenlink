webpackHotUpdate("static/development/pages/perfil.js",{

/***/ "./components/card-post/card-post.jsx":
/*!********************************************!*\
  !*** ./components/card-post/card-post.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _card_post_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./card-post.scss */ "./components/card-post/card-post.scss");
/* harmony import */ var _card_post_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_card_post_scss__WEBPACK_IMPORTED_MODULE_7__);








var heart = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
  d: "M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
}));
var comment = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
  d: "M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"
}));
var share = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 448 512"
}, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
  d: "M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"
}));
var angle = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 320 512"
}, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
  d: "M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"
}));

var CardPost =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CardPost, _Component);

  function CardPost(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CardPost);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CardPost).call(this, props));
    _this.state = {
      likes: 0,
      myLike: false
    };
    _this.handleLike = _this.handleLike.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CardPost, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        likes: this.props.post.likes
      });
    }
  }, {
    key: "handleLike",
    value: function handleLike() {
      var _this$state = this.state,
          myLike = _this$state.myLike,
          likes = _this$state.likes;

      if (myLike) {
        this.setState({
          myLike: false,
          likes: likes - 1
        });
      } else {
        this.setState({
          myLike: true,
          likes: likes + 1
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          likes = _this$state2.likes,
          myLike = _this$state2.myLike;
      var _this$props$post = this.props.post,
          author = _this$props$post.author,
          date = _this$props$post.date,
          imgUrl = _this$props$post.imgUrl,
          history = _this$props$post.history;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "card_post shadow"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "header"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "post_info"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: author.img
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "post_data"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, author.name), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, date))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", null, "...")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "img",
        style: imgUrl ? {
          background: "url(\"".concat(imgUrl, "\") top center no-repeat"),
          backgroundSize: "cover"
        } : {
          display: 'none'
        }
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "history"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, history)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "footer"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "social_buttons"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.handleLike
      }, heart, " +", likes), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", null, comment), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", null, share)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "comments"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", null, angle))));
    }
  }]);

  return CardPost;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

;
/* harmony default export */ __webpack_exports__["default"] = (CardPost);

/***/ })

})
//# sourceMappingURL=perfil.js.d79c5cea2bcb61e04153.hot-update.js.map