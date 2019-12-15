(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=main-container [ngClass]=\"{'rtl':rightToLeft}\">\r\n    <nav class=\"navbar\">\r\n            <h1 *ngIf=\"!rightToLeft\" (click)=\"rightToLeft=true\">Hebrew</h1>\r\n            <h1 *ngIf=\"rightToLeft\" (click)=\"rightToLeft=false\">אנגלית</h1>\r\n            <h1 class=\"title\">Palindromes Generator</h1>\r\n            <h1>Save</h1>\r\n            <h1>Profile</h1>\r\n    </nav>\r\n    <app-palindrom-editor></app-palindrom-editor>\r\n    <!-- Fix the buttons -->\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/letter-box/letter-box.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/letter-box/letter-box.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div [ngClass]=\"{'space':typeOfChar==='space', 'punctuation':typeOfChar==='punctuation', 'letter': typeOfChar==='letter'}\" [id]=\"side+index\" class=\"letter-box\" (touchstart)=\"test()\" (input)=\"handleInput($event)\" (keyup)=\"handleKeyup($event)\" contenteditable=\"false\" tabindex=\"0\">{{character}} \r\n    <input type=\"text\"  maxlength=\"0\" class=\"hidden\">\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/palindrom-editor/palindrom-editor.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/palindrom-editor/palindrom-editor.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n \r\n    <div class=\"palindrom-container\" id=\"palindrom-container\">\r\n        <app-letter-box (moveFocus)=\"moveFocus($event)\" (backspace)=\"onBackspaceLeft($event)\"\r\n            *ngFor=\"let currLetter of lettersLeft ; let i = index\" side=\"left\" [character]=\"currLetter\" [index]=\"i\"\r\n            (characterAdded)=\"onAddCharLeft($event)\" (characterChanged)=\"onLetterInputLeft($event)\" (delete)=\"deleteLeft()\">\r\n        </app-letter-box>\r\n        <app-pivot-letter (moveFocus)=\"moveFocus($event)\" (backspace)=\"deleteLastLetterLeft()\"\r\n            (delete)=\"deleteLastLetterRight()\" (newUserInput)=\"onNewCharFromPivot($event)\"></app-pivot-letter>\r\n        <app-letter-box (moveFocus)=\"moveFocus($event)\" (backspace)=\"onBackspaceRight($event)\"\r\n            *ngFor=\"let currLetter of lettersRight; let i = index\" side=\"right\" [character]=\"currLetter\" [index]=\"i\"\r\n            (characterAdded)=\"onAddCharRight($event)\" (characterChanged)=\"onLetterInputRight($event)\" (delete)=\"deleteRight()\">\r\n        </app-letter-box>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pivot-letter/pivot-letter.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pivot-letter/pivot-letter.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <input type=\"text\" maxlength=\"2\" [value]=\"letter\" size=1 (input)=\"onUserInput($event.target.value)\"/> -->\n<input (click)=\"expand()\" id=\"pivot-input\" [ngClass]=\"(pivotIsCollapsed)?'collapsed':'expanded'\" class=\"pivot-box btn\" type=\"text\" maxlength=\"2\" [(ngModel)]=\"input\" size=1 (keyup)=\"onUserInput($event)\"/>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-container {\n  height: 100vh;\n  width: 100%;\n  text-align: center;\n}\n\n.navbar {\n  background-color: #e4cb7d;\n  height: 10rem;\n  width: 100vw;\n  border-bottom: 3px solid #7dd3e4;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.navbar h1 {\n  margin: 0 10px 0 10px;\n  font: bold 24px/30px Georgia, \"Times New Roman\", Times, serif;\n  color: #694f10;\n  cursor: pointer;\n}\n\n.hidden {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxBcmllbFxcRG9jdW1lbnRzXFxQcm9ncmFtbWluZyBwcm9qZWN0c1xccGFsaW5kcm9tZXIvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0RGOztBRElBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQ0RGOztBREdFO0VBQ0UscUJBQUE7RUFDQSw2REFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDREo7O0FES0E7RUFDRSxrQkFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGFpbmVyIHtcclxuICAvLyB3aWR0aDo5MHZ3O1xyXG4gIC8vIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGNiN2Q7XHJcbiAgaGVpZ2h0OiAxMHJlbTtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICM3ZGQzZTQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHJcbiAgaDEge1xyXG4gICAgbWFyZ2luOiAwIDEwcHggMCAxMHB4O1xyXG4gICAgZm9udDogYm9sZCAyNHB4LzMwcHggR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xyXG4gICAgY29sb3I6ICM2OTRmMTA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uaGlkZGVue1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLnRpdGxlIHt9XHJcbiIsIi5tYWluLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uYXZiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRjYjdkO1xuICBoZWlnaHQ6IDEwcmVtO1xuICB3aWR0aDogMTAwdnc7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjN2RkM2U0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5uYXZiYXIgaDEge1xuICBtYXJnaW46IDAgMTBweCAwIDEwcHg7XG4gIGZvbnQ6IGJvbGQgMjRweC8zMHB4IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgY29sb3I6ICM2OTRmMTA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'palindromer';
        this.rightToLeft = "false";
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _palindrom_editor_palindrom_editor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./palindrom-editor/palindrom-editor.component */ "./src/app/palindrom-editor/palindrom-editor.component.ts");
/* harmony import */ var _letter_box_letter_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./letter-box/letter-box.component */ "./src/app/letter-box/letter-box.component.ts");
/* harmony import */ var _pivot_letter_pivot_letter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pivot-letter/pivot-letter.component */ "./src/app/pivot-letter/pivot-letter.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _palindrom_editor_palindrom_editor_component__WEBPACK_IMPORTED_MODULE_5__["PalindromEditorComponent"],
            _letter_box_letter_box_component__WEBPACK_IMPORTED_MODULE_6__["LetterBoxComponent"],
            _pivot_letter_pivot_letter_component__WEBPACK_IMPORTED_MODULE_7__["PivotLetterComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/letter-box/letter-box.component.scss":
/*!******************************************************!*\
  !*** ./src/app/letter-box/letter-box.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".letter-box {\n  font-weight: bold;\n  border-radius: 4px;\n  font-size: 25px;\n  height: 30px;\n  text-align: center;\n  margin-right: 3px;\n  margin-bottom: 5px;\n  display: inline-block;\n  color: transparent;\n  text-shadow: 0 0 0 black;\n  position: relative;\n}\n.letter-box:focus {\n  border: 3px solid gold;\n  outline: none;\n  text-shadow: 0 0 0 red;\n}\n.punctuation {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-right: 4px;\n  margin-left: 0px;\n}\n.space {\n  width: 10px;\n  margin-right: 0px;\n  margin-left: 0px;\n  display: block;\n  border-bottom: 1px solid hotpink;\n}\n.letter {\n  width: 20px;\n  border-bottom: 1px solid darkblue;\n  margin-right: 0px;\n  margin-left: 4px;\n}\n.hidden {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGV0dGVyLWJveC9DOlxcVXNlcnNcXEFyaWVsXFxEb2N1bWVudHNcXFByb2dyYW1taW5nIHByb2plY3RzXFxwYWxpbmRyb21lci9zcmNcXGFwcFxcbGV0dGVyLWJveFxcbGV0dGVyLWJveC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGV0dGVyLWJveC9sZXR0ZXItYm94LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFFQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7QUNBSjtBRENJO0VBQ0ksc0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNDUjtBREdBO0VBQ0ksMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0FKO0FES0E7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtBQ0ZKO0FES0E7RUFDSSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDRko7QURLQTtFQUNJLGtCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9sZXR0ZXItYm94L2xldHRlci1ib3guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGV0dGVyLWJveHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgLy8gcGFkZGluZzogNXB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgIFxyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAwIGJsYWNrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgJjpmb2N1c3tcclxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCBnb2xkO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAwIHJlZDtcclxuICAgIH1cclxufVxyXG5cclxuLnB1bmN0dWF0aW9ue1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDowcHg7XHJcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgZGFya2dyYXk7XHJcblxyXG5cclxufVxyXG4uc3BhY2V7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgaG90cGluaztcclxufVxyXG5cclxuLmxldHRlcntcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGRhcmtibHVlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDo0cHg7XHJcbn1cclxuXHJcbi5oaWRkZW57XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn0iLCIubGV0dGVyLWJveCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LXNoYWRvdzogMCAwIDAgYmxhY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5sZXR0ZXItYm94OmZvY3VzIHtcbiAgYm9yZGVyOiAzcHggc29saWQgZ29sZDtcbiAgb3V0bGluZTogbm9uZTtcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIHJlZDtcbn1cblxuLnB1bmN0dWF0aW9uIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLnNwYWNlIHtcbiAgd2lkdGg6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGhvdHBpbms7XG59XG5cbi5sZXR0ZXIge1xuICB3aWR0aDogMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGRhcmtibHVlO1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLmhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/letter-box/letter-box.component.ts":
/*!****************************************************!*\
  !*** ./src/app/letter-box/letter-box.component.ts ***!
  \****************************************************/
/*! exports provided: LetterBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetterBoxComponent", function() { return LetterBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


// import { type } from 'os';
// import {InputEvent} from '@types/dom-inputevent';
let LetterBoxComponent = class LetterBoxComponent {
    constructor() {
        this.character = "";
        this.side = "";
        this.characterChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.backspace = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.moveFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.characterAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.punctionationRegex = /(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)/;
        this.latinLettersRegex = /^[A-Za-z]+$/;
        this.hebrewLettersRegex = "^[א-ת]+$";
        this.typeOfChar = "letter";
    }
    ngOnInit() {
        this.assignCharacterType();
    }
    isLetterVerification1(character) {
        return (character.match(this.latinLettersRegex) ||
            character.match(this.hebrewLettersRegex));
    }
    test() {
        console.log("test touch");
    }
    handleKeyup(event) {
        event.preventDefault();
        // var currText = event.target.innerText;
        var newChar = event.key;
        if (event.keyCode === 37 || event.keyCode === 39) {
            this.moveFocus.emit({ keyCode: event.keyCode, side: this.side, letterIdx: this.index });
        }
        else if (event.keyCode === 8) {
            this.backspace.emit({
                letterIndex: this.index,
                character: this.character
            });
        }
        else if (event.keyCode === 46) {
            this.delete.emit({
                letterIndex: this.index,
                character: this.character
            });
        }
        else if (newChar.length > 1) {
            return;
        }
        else {
            this.assignCharacterType();
            this.characterAdded.emit({
                character: newChar,
                letterIndex: this.index
            });
        }
    }
    assignCharacterType() {
        var isLetter = this.isLetterVerification1(this.character);
        if (isLetter) {
            this.typeOfChar = "letter";
        }
        else if (this.character === " ") {
            this.typeOfChar = "space";
        }
        else {
            this.typeOfChar = "punctuation";
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LetterBoxComponent.prototype, "character", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LetterBoxComponent.prototype, "side", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LetterBoxComponent.prototype, "index", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], LetterBoxComponent.prototype, "characterChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], LetterBoxComponent.prototype, "backspace", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], LetterBoxComponent.prototype, "moveFocus", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], LetterBoxComponent.prototype, "characterAdded", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], LetterBoxComponent.prototype, "delete", void 0);
LetterBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-letter-box",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./letter-box.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/letter-box/letter-box.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./letter-box.component.scss */ "./src/app/letter-box/letter-box.component.scss")).default]
    })
], LetterBoxComponent);

//TODO: read about preventDefault()
//TODO: https://stackoverflow.com/questions/35105374/how-to-force-a-components-re-rendering-in-angular-2
//fix CSS
//support for punctation and spaces
//Support for deleting puncuation
//collapse pivot:
// add to github pages


/***/ }),

/***/ "./src/app/palindrom-editor/palindrom-editor.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/palindrom-editor/palindrom-editor.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".palindrom-container {\n  width: 80vw;\n  padding: 50px;\n  display: flex;\n  flex-wrap: wrap;\n  margin: auto;\n  border: 1px dotted #7DD3E4;\n  margin-top: 5rem;\n  padding: 1rem;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  justify-content: center;\n}\n\n.rtl {\n  direction: rtl;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFsaW5kcm9tLWVkaXRvci9DOlxcVXNlcnNcXEFyaWVsXFxEb2N1bWVudHNcXFByb2dyYW1taW5nIHByb2plY3RzXFxwYWxpbmRyb21lci9zcmNcXGFwcFxccGFsaW5kcm9tLWVkaXRvclxccGFsaW5kcm9tLWVkaXRvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFsaW5kcm9tLWVkaXRvci9wYWxpbmRyb20tZWRpdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWxpbmRyb20tZWRpdG9yL3BhbGluZHJvbS1lZGl0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFsaW5kcm9tLWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgcGFkZGluZzogNTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3JkZXI6IDFweCBkb3R0ZWQgIzdERDNFNDtcclxuICAgIG1hcmdpbi10b3A6IDVyZW07XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbn1cclxuXHJcbi5ydGwge1xyXG4gICAgZGlyZWN0aW9uOiBydGw7XHJcbiAgfVxyXG4iLCIucGFsaW5kcm9tLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA4MHZ3O1xuICBwYWRkaW5nOiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyOiAxcHggZG90dGVkICM3REQzRTQ7XG4gIG1hcmdpbi10b3A6IDVyZW07XG4gIHBhZGRpbmc6IDFyZW07XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucnRsIHtcbiAgZGlyZWN0aW9uOiBydGw7XG59Il19 */");

/***/ }),

/***/ "./src/app/palindrom-editor/palindrom-editor.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/palindrom-editor/palindrom-editor.component.ts ***!
  \****************************************************************/
/*! exports provided: PalindromEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PalindromEditorComponent", function() { return PalindromEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PalindromEditorComponent = class PalindromEditorComponent {
    constructor() {
        this.lettersLeft = ["a", "b", "c"];
        this.lettersRight = ["c", "b", "a"];
        this.punctionationRegex = /(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)/;
        this.latinLettersRegex = /^[A-Za-z]+$/;
        this.hebrewLettersRegex = "^[א-ת]+$";
        this.letterBoxElement = "APP-LETTER-BOX";
        this.pivotElementNodeName = "APP-PIVOT-LETTER";
    }
    // באב. ליל באב.
    ngOnInit() {
        this.pivotElement = document.getElementById("pivot-input");
        this.pivotElement.focus();
    }
    onAddCharRight($event) {
        let rightIdx = $event.letterIndex;
        let leftIdx = this.lettersRight.length - 1 - rightIdx;
        let character = $event.character;
        // var focusedElement = window.document.activeElement;
        this.focusOnNextPreviousElement("right", rightIdx, true, 1, this.lettersRight.length);
        this.addNewChar(this.lettersLeft, leftIdx, this.lettersRight, rightIdx + 1, character);
    }
    onAddCharLeft($event) {
        let leftIdx = $event.letterIndex;
        let rightIdx = this.lettersLeft.length - 1 - leftIdx;
        let character = $event.character;
        // var focusedElement = window.document.activeElement;
        this.focusOnNextPreviousElement("left", leftIdx, true, 1, this.lettersLeft.length);
        this.addNewChar(this.lettersRight, rightIdx, this.lettersLeft, leftIdx + 1, character);
    }
    onNewCharFromPivot($event) {
        this.addNewChar(this.lettersLeft, this.lettersLeft.length, this.lettersRight, 0, $event.newLetter);
    }
    onChangeCharRight() { }
    onChangeCharLeft() { }
    onDeleteRight() { }
    onDeleteLeft() { }
    moveFocus($event) {
        console.log("moveFocus", $event.letterIdx, $event.side);
        if ($event.keyCode === 39) {
            this.moveFocusRight($event.side, $event.letterIdx);
        }
        else {
            this.moveFocusLeft($event.side, $event.letterIdx);
        }
    }
    /*HELPERFUNCTIONS */
    moveFocusRight(side, letterIdx) {
        if (side === "right" &&
            letterIdx === this.lettersRight.length - 1) {
            document.getElementById("left0").focus();
        }
        else if (side === "left" &&
            letterIdx === this.lettersLeft.length - 1) {
            this.pivotElement.focus();
        }
        else if (side === "pivot-input") {
            document.getElementById("right0").focus();
        }
        else {
            this.focusOnNextPreviousElement(side, letterIdx, false, 1);
        }
    }
    moveFocusLeft(side, letterIdx) {
        if (side === "left" &&
            letterIdx === 0 && this.lettersRight.length > 0) {
            document.getElementById(`right${this.lettersRight.length - 1}`).focus();
        }
        else if (side === "right" &&
            letterIdx === 0) {
            this.pivotElement.focus();
        }
        else if (side === "pivot-input") {
            document.getElementById(`left${this.lettersLeft.length - 1}`).focus();
        }
        else if (this.lettersRight.length > 0 && this.lettersLeft.length > 0) {
            this.focusOnNextPreviousElement(side, letterIdx, false, -1);
        }
        else {
            this.pivotElement.focus();
        }
    }
    onBackspaceLeft($event) {
        console.log("onBackspaceLeft");
        this.deleteChar(this.lettersRight, this.lettersLeft, $event.letterIndex, $event.character);
        this.moveFocusLeft("left", $event.letterIndex);
    }
    onBackspaceRight($event) {
        console.log("onBackspaceRight");
        this.deleteChar(this.lettersLeft, this.lettersRight, $event.letterIndex, $event.character);
        this.moveFocusLeft("right", $event.letterIndex);
    }
    getIdxFromLetterOnOtherSide(deletedLetter, arr1, arr2, idx2) {
        var letterIdx = this.getLetterFrequency(idx2, deletedLetter, arr2);
        var idx1 = this.findIndexOnOppositeSide(arr1, deletedLetter, letterIdx);
        return idx1;
    }
    getNodeIfLetterBox(currElement) {
        var nextElement = currElement.nextSibling;
        var nextNode = nextElement && nextElement.nodeName === this.letterBoxElement
            ? nextElement
            : "null";
        return Promise.resolve(nextNode);
    }
    focusOnNextPreviousElement(side, id, waitForIt, backOrForward, arrLength = null) {
        var nextLetterBox = document.getElementById(side + (id + backOrForward));
        if (nextLetterBox && !waitForIt) {
            nextLetterBox.focus();
        }
        else if (waitForIt) {
            var checkExist = setInterval(function () {
                nextLetterBox = document.getElementById(side + (id + backOrForward));
                if (nextLetterBox) {
                    nextLetterBox.focus();
                    clearInterval(checkExist);
                }
                // console.log("tried")
            }, 100);
        }
        else
            return false;
    }
    calculateWheretoDeleteFromOtherSide() { }
    isLetterVerification(character) {
        return (character.match(this.latinLettersRegex) ||
            character.match(this.hebrewLettersRegex));
    }
    addNewChar(arr1, idx1, arr2, idx2, newChar) {
        var isLetter = this.isLetterVerification(newChar);
        if (isLetter) {
            arr1.splice(idx1, 0, newChar);
        }
        arr2.splice(idx2, 0, newChar);
    }
    deleteChar(arr1, arr2, idx2, newChar) {
        var isLetter = this.isLetterVerification(newChar);
        if (isLetter) {
            var idx1 = this.getIdxFromLetterOnOtherSide(newChar, arr1, arr2, idx2);
            console.log("deleteChar", idx1, idx2);
            arr1.splice(idx1, 1);
        }
        arr2.splice(idx2, 1);
    }
    // deleteLastLetterLeft() {
    //   let character = this.lettersLeft[this.lettersLeft.length - 1];
    //   if (this.lettersLeft.length > 0) {
    //     this.onBackspaceLeft({
    //       letterIndex: this.lettersLeft.length - 1,
    //       character
    //     });
    //   }
    // }
    // deleteLastLetterRight() {
    //   let character = this.lettersRight[0];
    //   if (this.lettersRight.length > 0) {
    //     this.onBackspaceRight({ letterIndex: 0, character });
    //   }
    //   this.pivotElement.focus();
    // }
    // onLetterInputRight($event: { character: string; letterIndex: number }) {
    //   let rightIdx = $event.letterIndex;
    //   let leftIdx = this.lettersRight.length - 1 - rightIdx;
    //   let character = $event.character;
    // onLetterInputLeft($event: { character: string; letterIndex: number }) {
    //   let leftIdx = $event.letterIndex;
    //   let rightIdx = this.lettersRight.length - 1 - leftIdx;
    //   let character = $event.character;
    //   this.addOrDeleteCharacter(
    //     this.lettersRight,
    //     this.lettersLeft,
    //     character,
    //     rightIdx,
    //     leftIdx, false
    //   );
    // }
    // onCharacterAddedRight($event: { character: string; letterIndex: number }) {
    //   let rightIdx = $event.letterIndex;
    //   let leftIdx = this.lettersRight.length - 1 - rightIdx;
    //   let character = $event.character;
    //   this.addOrDeleteCharacter(
    //     this.lettersLeft,
    //     this.lettersRight,
    //     character,
    //     leftIdx,
    //     rightIdx+1, false
    //   );
    // }
    // onCharacterAddedLeft($event: { character: string; letterIndex: number }) {
    //   let leftIdx = $event.letterIndex;
    //   let rightIdx = this.lettersRight.length - 1 - leftIdx;
    //   let character = $event.character;
    //   this.addOrDeleteCharacter(
    //     this.lettersRight,
    //     this.lettersLeft,
    //     character,
    //     rightIdx,
    //     leftIdx + 1, false
    //   );
    // }
    // previousElementIsLetterBox(currElement, nodeName) {
    //   var previousElement = currElement.previousSibling;
    //   var element =
    //     previousElement && previousElement.nodeName === nodeName
    //       ? previousElement
    //       : null;
    //   return element;
    // }
    // addOrDeleteCharacter(arr1, arr2, newChar, idx1, idx2, toDelete) {
    //   if(newChar){
    //     var isLetter = this.isLetterVerification(newChar);
    //   }
    //   if (isLetter || toDelete) {
    //     !toDelete ?arr1.splice(idx1, 0, newChar):arr1.splice(idx1, 1);
    //   }
    //   !toDelete ?arr2.splice(idx2, 0, newChar):arr2.splice(idx2, 1);
    // }
    getLetterFrequency(idx, letter, lettersArr) {
        let letterIdx = 0;
        for (var i = 0; i <= idx; i++) {
            if (lettersArr[i] === letter) {
                letterIdx++;
            }
        }
        return letterIdx;
    }
    findIndexOnOppositeSide(lettersArr, letter, letterIdx) {
        for (var i = lettersArr.length - 1; i >= 0; i--) {
            if (lettersArr[i] === letter && letterIdx > 1) {
                letterIdx--;
            }
            else if (lettersArr[i] === letter && letterIdx === 1) {
                return i;
            }
        }
    }
};
PalindromEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-palindrom-editor",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./palindrom-editor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/palindrom-editor/palindrom-editor.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./palindrom-editor.component.scss */ "./src/app/palindrom-editor/palindrom-editor.component.scss")).default]
    })
], PalindromEditorComponent);



/***/ }),

/***/ "./src/app/pivot-letter/pivot-letter.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pivot-letter/pivot-letter.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pivot-box {\n  font-weight: bold;\n  border-radius: 9px;\n  font-size: 20px;\n  border: 4px solid #A17DE4;\n  text-align: center;\n  margin-right: 5px;\n  margin-bottom: 5px;\n  color: transparent;\n  text-shadow: 0 0 0 black;\n}\n.pivot-box:focus {\n  border: 4px solid #15dfe6;\n  outline: none;\n  text-shadow: 0 0 0 red;\n}\n.expanded {\n  width: 25px;\n  height: 25px;\n  padding: 5px;\n  cursor: text;\n}\n.collapsed {\n  width: 0px;\n  height: 60px;\n  padding: 0px;\n  border-color: black;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGl2b3QtbGV0dGVyL0M6XFxVc2Vyc1xcQXJpZWxcXERvY3VtZW50c1xcUHJvZ3JhbW1pbmcgcHJvamVjdHNcXHBhbGluZHJvbWVyL3NyY1xcYXBwXFxwaXZvdC1sZXR0ZXJcXHBpdm90LWxldHRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGl2b3QtbGV0dGVyL3Bpdm90LWxldHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FDQ0o7QURBSTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDRVI7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNDSjtBREdBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9waXZvdC1sZXR0ZXIvcGl2b3QtbGV0dGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBpdm90LWJveHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQgI0ExN0RFNDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTo1cHg7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDAgYmxhY2s7XHJcbiAgICAmOmZvY3Vze1xyXG4gICAgICAgIGJvcmRlcjogNHB4IHNvbGlkIHJnYigyMSwgMjIzLCAyMzApO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAwIHJlZDtcclxuICAgIH1cclxufVxyXG5cclxuLmV4cGFuZGVke1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBjdXJzb3I6IHRleHQ7XHJcblxyXG59XHJcblxyXG4uY29sbGFwc2Vke1xyXG4gICAgd2lkdGg6IDBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJvcmRlci1jb2xvcjpibGFjaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuIiwiLnBpdm90LWJveCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYm9yZGVyOiA0cHggc29saWQgI0ExN0RFNDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRleHQtc2hhZG93OiAwIDAgMCBibGFjaztcbn1cbi5waXZvdC1ib3g6Zm9jdXMge1xuICBib3JkZXI6IDRweCBzb2xpZCAjMTVkZmU2O1xuICBvdXRsaW5lOiBub25lO1xuICB0ZXh0LXNoYWRvdzogMCAwIDAgcmVkO1xufVxuXG4uZXhwYW5kZWQge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGN1cnNvcjogdGV4dDtcbn1cblxuLmNvbGxhcHNlZCB7XG4gIHdpZHRoOiAwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgcGFkZGluZzogMHB4O1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/pivot-letter/pivot-letter.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pivot-letter/pivot-letter.component.ts ***!
  \********************************************************/
/*! exports provided: PivotLetterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PivotLetterComponent", function() { return PivotLetterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PivotLetterComponent = class PivotLetterComponent {
    constructor() {
        this.input = "o";
        this.newUserInput = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.moveFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pivotIsCollapsed = false;
        this.backspace = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
    expand() {
        this.pivotIsCollapsed = false;
    }
    onUserInput(event) {
        var isOneCharacter = this.input.length === 1;
        if (event.keyCode === 37 || event.keyCode === 39) {
            this.moveFocus.emit({ keyCode: event.keyCode, side: "pivot-input", letterIdx: -1 });
        }
        else if (event.keyCode === 8 || event.keyCode === 46) {
            if (!this.pivotIsCollapsed) {
                this.pivotIsCollapsed = true;
            }
            else {
                if (event.keyCode === 8) {
                    this.backspace.emit();
                }
                else {
                    if (event.keyCode === 46) {
                        this.delete.emit();
                    }
                }
            }
        }
        else if (isOneCharacter) {
            this.pivotIsCollapsed = false;
            event.preventDefault();
            return;
        }
        else if (this.input.length === 2) {
            var newCharacter = this.input.charAt(0);
            this.newUserInput.emit({
                newLetter: newCharacter
            });
            this.input = this.input.slice(1);
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PivotLetterComponent.prototype, "newUserInput", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PivotLetterComponent.prototype, "moveFocus", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PivotLetterComponent.prototype, "backspace", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PivotLetterComponent.prototype, "delete", void 0);
PivotLetterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-pivot-letter",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pivot-letter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pivot-letter/pivot-letter.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pivot-letter.component.scss */ "./src/app/pivot-letter/pivot-letter.component.scss")).default]
    })
], PivotLetterComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ariel\Documents\Programming projects\palindromer\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map