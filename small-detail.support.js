"use strict";function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}Object.defineProperty(exports, "__esModule", { value: !0 });var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of"),_getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf),_classCallCheck2 = require("babel-runtime/helpers/classCallCheck"),_classCallCheck3 = _interopRequireDefault(_classCallCheck2),_createClass2 = require("babel-runtime/helpers/createClass"),_createClass3 = _interopRequireDefault(_createClass2),_possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn"),_possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2),_inherits2 = require("babel-runtime/helpers/inherits"),_inherits3 = _interopRequireDefault(_inherits2),_class,_react = require("react"),_react2 = _interopRequireDefault(_react),_mjmlCore = require("mjml-core"),_mjmlColumn = require("mjml-column"),_mjmlColumn2 = _interopRequireDefault(_mjmlColumn),_mjmlTable = require("mjml-table"),_mjmlTable2 = _interopRequireDefault(_mjmlTable),_booleanize = require("booleanize"),_booleanize2 = _interopRequireDefault(_booleanize),_falzy = require("falzy"),_falzy2 = _interopRequireDefault(_falzy),_wichevr = require("wichevr"),_wichevr2 = _interopRequireDefault(_wichevr),tagName = "mj-small-detail",parentTag = ["mj-container", "mj-section"],endingTag = !1,defaultMJMLDefinition = { content: "", attributes: { title: "", label: "", value: "", align: "left", width: "100%", reverse: !1, padding: "10px 10px 0px 10px", "background-color": "white", "foreground-color": "black" } },SmallDetail = (0, _mjmlCore.MJMLElement)(_class = function (_Component) {function SmallDetail() {return (0, _classCallCheck3.default)(this, SmallDetail), (0, _possibleConstructorReturn3.default)(this, (SmallDetail.__proto__ || (0, _getPrototypeOf2.default)(SmallDetail)).apply(this, arguments));}return (0, _inherits3.default)(SmallDetail, _Component), (0, _createClass3.default)(SmallDetail, [{ key: "render", value: function render() {var _props = this.props,mjAttribute = _props.mjAttribute,width = _props.width,padding = _props.padding,_props2 = this.props,title = _props2.title,label = _props2.label,value = _props2.value,align = _props2.align,reverse = _props2.reverse,backgroundColor = _props2.backgroundColor,foregroundColor = _props2.foregroundColor;title = (0, _wichevr2.default)(title, label, mjAttribute("title"), mjAttribute("label")), value = (0, _wichevr2.default)(value, mjAttribute("value")), (0, _falzy2.default)(value) && (title = ""), align = (0, _wichevr2.default)(align, mjAttribute("align")), reverse = (0, _booleanize2.default)((0, _wichevr2.default)(reverse, mjAttribute("reverse"))), backgroundColor = (0, _wichevr2.default)(backgroundColor, mjAttribute("background-color")), foregroundColor = (0, _wichevr2.default)(foregroundColor, mjAttribute("foreground-color"));var titleComponent = _react2.default.createElement("td", { style: { padding: "0px 0px 0px 0px", fontSize: "10.5px", fontWeight: "500", letterSpacing: "0.3px", textTransform: "uppercase", textAlign: align, color: foregroundColor } }, title),valueComponent = _react2.default.createElement("td", { style: { padding: "0px 0px 0px 0px", fontSize: "12.5px", letterSpacing: "0.3px", textAlign: align, color: foregroundColor } }, value);return _react2.default.createElement(_mjmlColumn2.default, { width: (0, _wichevr2.default)(width, mjAttribute("width")), "background-color": backgroundColor }, _react2.default.createElement(_mjmlTable2.default, { align: align, padding: (0, _wichevr2.default)(padding, mjAttribute("padding")), "table-layout": "auto", width: "auto" }, _react2.default.createElement("tr", null, reverse ? valueComponent : titleComponent), _react2.default.createElement("tr", null, reverse ? titleComponent : valueComponent)));} }]), SmallDetail;}(_react.Component)) || _class;SmallDetail.tagName = tagName, SmallDetail.parentTag = parentTag, SmallDetail.endingTag = endingTag, SmallDetail.defaultMJMLDefinition = defaultMJMLDefinition, exports.default = SmallDetail;
//# sourceMappingURL=small-detail.js.map

//# sourceMappingURL=small-detail.support.js.map