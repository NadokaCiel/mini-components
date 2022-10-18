require("../../build~commons/runtime.js");
require("../../build~commons/vendor");
(global["webpackChunkmini_components"] = global["webpackChunkmini_components"] || []).push([["components/Banner/index"],(global["webpackChunkmini_components"] = global["webpackChunkmini_components"] || []).push([["components/Banner/index"],{

/***/ "./src/components/Banner/style/index.scss":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/Banner/index.wxml":
/***/ (function() {



/***/ }),

/***/ "./src/components/Banner/index.ts":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__("./src/components/Banner/style/index.ts");
var mini_program_base_1 = __webpack_require__("./node_modules/mini-program-base/dist/mini-program-base.es.js");
/**
 * banner组件
 */
var Banner = /** @class */ (function (_super) {
    __extends(Banner, _super);
    function Banner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.data = {
            current: 0,
            indicator: 0,
        };
        _this.properties = {
            /**
             * @property dotBottom
             * @description 指示器下边距
             * @type string
             */
            dotBottom: "20rpx",
            /**
             * @property dotColor
             * @description 指示器背景颜色，十六进制或rgba
             * @type string
             */
            dotColor: "#fff",
            /**
             * @property height
             * @description banner组件的高度
             * @requires
             * @type string
             */
            height: "",
            /**
             * @property componentData
             * @description banner数据
             * @requires
             * @type IBannersVO {@link ./__interface__/vo.d.ts}
             */
            componentData: [],
        };
        _this.options = {
            styleIsolation: "apply-shared",
        };
        return _this;
    }
    Banner.prototype.componentData = function () {
        // banner发生变化时，从第一张开始播放
        this.setData({
            current: 0,
            indicator: 0,
        });
    };
    Banner.prototype.stopTouchMove = function () {
        return false;
    };
    Banner.prototype.handleBannerTap = function (e) {
        var _a;
        /**
         * @event onFallback
         * @description 用户点击后触发
         * @detail IOnFallbackDetail {@link ./__interface__/event.d.ts}
         */
        this.triggerEvent("onFallback", {
            index: (_a = e.currentTarget.dataset) === null || _a === void 0 ? void 0 : _a.index,
        });
    };
    Banner.prototype.handleChangeCurrent = function (e) {
        var _a;
        this.setData({
            indicator: ((_a = e.detail) === null || _a === void 0 ? void 0 : _a.current) || 0,
        });
    };
    __decorate([
        (0, mini_program_base_1.observer)()
    ], Banner.prototype, "componentData", null);
    __decorate([
        mini_program_base_1.method
    ], Banner.prototype, "stopTouchMove", null);
    __decorate([
        mini_program_base_1.method
    ], Banner.prototype, "handleBannerTap", null);
    __decorate([
        mini_program_base_1.method
    ], Banner.prototype, "handleChangeCurrent", null);
    return Banner;
}(mini_program_base_1.ComponentBase));
Banner.render(new Banner());


/***/ }),

/***/ "./src/components/Banner/style/index.ts":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__("./src/components/Banner/style/index.scss");


/***/ }),

/***/ "./src/components/Banner/index.json":
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"styleIsolation":"apply-shared","component":true}');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["build~commons/vendor"], function() { return __webpack_exec__("./src/components/Banner/index.wxml"), __webpack_exec__("./src/components/Banner/index.json"), __webpack_exec__("./src/components/Banner/index.ts"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]),
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["build~commons/vendor"], function() { return __webpack_exec__("./src/components/Banner/index.wxml"), __webpack_exec__("./src/components/Banner/index.json"), __webpack_exec__("./src/components/Banner/index.ts"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map