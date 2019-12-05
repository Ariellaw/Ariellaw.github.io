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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=main-container>\r\n    <app-palindrom-editor></app-palindrom-editor>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/letter-box/letter-box.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/letter-box/letter-box.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div [id]=\"side+index\" class=\"letter-box\"  (input)=\"handleInput($event)\" (keyup)=\"handleKeyup($event)\" contenteditable=\"false\" tabindex=\"0\">{{character}} </div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/palindrom-editor/palindrom-editor.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/palindrom-editor/palindrom-editor.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"palindrom-container\" id=\"palindrom-container\">\r\n    <app-letter-box (moveFocus)=\"moveFocus($event)\"   (backspace)=\"onBackspaceLeft($event)\" *ngFor=\"let currLetter of lettersLeft ; let i = index\"\r\n     side=\"left\"   [character]=\"currLetter\" [index]=\"i\" (characterAdded)=\"onCharacterAddedLeft($event)\" (characterChanged)=\"onLetterInputLeft($event)\"></app-letter-box>\r\n    <app-pivot-letter (moveFocus)=\"moveFocus($event)\"  (backspace)=\"deleteLastLetter()\" (newUserInput)=\"onPivotChanged($event)\"></app-pivot-letter>\r\n    <app-letter-box (moveFocus)=\"moveFocus($event)\"  (backspace)=\"onBackspaceRight($event)\" *ngFor=\"let currLetter of lettersRight; let i = index\"\r\n    side=\"right\" [character]=\"currLetter\" [index]=\"i\" (characterAdded)=\"onCharacterAddedRight($event)\" (characterChanged)=\"onLetterInputRight($event)\"></app-letter-box>\r\n\r\n\r\n\r\n</div>");

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
/* harmony default export */ __webpack_exports__["default"] = (".main-container {\n  background-color: lightblue;\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxBcmllbFxcRG9jdW1lbnRzXFxQcm9ncmFtbWluZyBwcm9qZWN0c1xccGFsaW5kcm9tZXIvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksMkJBQUE7RUFFQSxhQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXJ7XHJcbiAgICAvLyB3aWR0aDo5MHZ3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG4gICAgLy8gYm9yZGVyOjFweCBzb2xpZCBibGFjaztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAvLyBwYWRkaW5nOiAyMHB4O1xyXG59IiwiLm1haW4tY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xuICBoZWlnaHQ6IDEwMHZoO1xufSJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = (".letter-box {\n  font-weight: bold;\n  border-radius: 9px;\n  font-size: 20px;\n  border: 3px solid red;\n  padding: 5px;\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  margin-right: 5px;\n  margin-bottom: 5px;\n  display: inline-block;\n  color: transparent;\n  text-shadow: 0 0 0 black;\n  position: relative;\n}\n.letter-box:focus {\n  border: 3px solid gold;\n  outline: none;\n  text-shadow: 0 0 0 red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGV0dGVyLWJveC9DOlxcVXNlcnNcXEFyaWVsXFxEb2N1bWVudHNcXFByb2dyYW1taW5nIHByb2plY3RzXFxwYWxpbmRyb21lci9zcmNcXGFwcFxcbGV0dGVyLWJveFxcbGV0dGVyLWJveC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGV0dGVyLWJveC9sZXR0ZXItYm94LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0FDQ0o7QURBSTtFQUNJLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9sZXR0ZXItYm94L2xldHRlci1ib3guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGV0dGVyLWJveHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmVkO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206NXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAgXHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDAgYmxhY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAmOmZvY3Vze1xyXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIGdvbGQ7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDAgcmVkO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIiwiLmxldHRlci1ib3gge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHJlZDtcbiAgcGFkZGluZzogNXB4O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LXNoYWRvdzogMCAwIDAgYmxhY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5sZXR0ZXItYm94OmZvY3VzIHtcbiAgYm9yZGVyOiAzcHggc29saWQgZ29sZDtcbiAgb3V0bGluZTogbm9uZTtcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIHJlZDtcbn0iXX0= */");

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


// import {InputEvent} from '@types/dom-inputevent';
let LetterBoxComponent = class LetterBoxComponent {
    constructor() {
        this.character = "";
        this.side = "";
        this.characterChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.backspace = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.moveFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.characterAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.punctionationRegex = /(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)/;
        this.lettersRegex = /^[A-Za-z]+$/;
    }
    ngOnInit() {
        // console.log("letterbox init test", this.character, this.side, this.index);
        // this.character = "x";
    }
    handleKeyup(event) {
        var currText = event.target.innerText;
        var newChar = event.key;
        event.preventDefault();
        if (newChar === "Shift") {
            return;
        }
        else if (event.keyCode === 37 || event.keyCode === 39) {
            this.moveFocus.emit({ keyCode: event.keyCode });
        }
        else if (event.key === "Backspace") {
            this.backspace.emit({
                letterIndex: this.index,
                character: this.character
            });
        }
        else if ((newChar.match(this.lettersRegex) && newChar.length === 1) ||
            (newChar.match(this.punctionationRegex) && newChar.length === 1) ||
            newChar === " ") {
            this.characterAdded.emit({
                character: newChar,
                letterIndex: this.index
            });
        }
        else {
            return;
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
/* harmony default export */ __webpack_exports__["default"] = (".palindrom-container {\n  position: absolute;\n  top: 50%;\n  width: 90vw;\n  margin: auto 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFsaW5kcm9tLWVkaXRvci9DOlxcVXNlcnNcXEFyaWVsXFxEb2N1bWVudHNcXFByb2dyYW1taW5nIHByb2plY3RzXFxwYWxpbmRyb21lci9zcmNcXGFwcFxccGFsaW5kcm9tLWVkaXRvclxccGFsaW5kcm9tLWVkaXRvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFsaW5kcm9tLWVkaXRvci9wYWxpbmRyb20tZWRpdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBR0EsV0FBQTtFQUNBLGdCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9wYWxpbmRyb20tZWRpdG9yL3BhbGluZHJvbS1lZGl0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFsaW5kcm9tLWNvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgLy8gbGVmdDogNTAlO1xyXG4gICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB3aWR0aDo5MHZ3O1xyXG4gICAgbWFyZ2luOiBhdXRvIDUwJTtcclxufVxyXG5cclxuIiwiLnBhbGluZHJvbS1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogOTB2dztcbiAgbWFyZ2luOiBhdXRvIDUwJTtcbn0iXX0= */");

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
        this.lettersLeft = ["a", "b"];
        this.lettersRight = ["b", "a"];
        this.punctionationRegex = /(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)/;
        this.lettersRegex = /^[A-Za-zא-ת]+$/;
        this.letterBoxElement = "APP-LETTER-BOX";
        this.pivotElementNodeName = "APP-PIVOT-LETTER";
    }
    ngOnInit() {
        this.pivotElement = document.getElementById("pivot-input");
        this.pivotElement.focus();
    }
    //TODO - move to another file
    //   isTextSelected(input) {
    //     if (typeof input.selectionStart === "number") {
    //         return input.selectionStart === 0 && input.selectionEnd === input.value.length;
    //     } else if (typeof DOCUMENT.selection !== "undefined") {
    //         input.focus();
    //         return DOCUMENT.selection.createRange().text === input.value;
    //     }
    // }
    moveFocus($event) {
        if ($event.keyCode === 39) {
            this.moveFocusRight();
        }
        else {
            this.moveFocusLeft();
        }
    }
    moveFocusRight() {
        var focusedElement = window.document.activeElement;
        var nextElement = focusedElement.parentNode.nextSibling;
        if (nextElement) {
            if (this.nextElementIsLetterBox(focusedElement.parentNode, this.letterBoxElement) ||
                this.nextElementIsLetterBox(focusedElement.parentNode, this.pivotElementNodeName)) {
                this.focusOnElement(nextElement);
            }
            else if (nextElement.nextSibling) {
                if (this.nextElementIsLetterBox(nextElement, this.letterBoxElement) ||
                    this.nextElementIsLetterBox(nextElement, this.pivotElementNodeName)) {
                    this.focusOnElement(nextElement.nextSibling);
                }
            }
        }
        else {
            return;
        }
    }
    moveFocusLeft() {
        var focusedElement = window.document.activeElement;
        var previousElement = focusedElement.parentNode.previousSibling;
        if (previousElement) {
            if (this.previousElementIsLetterBox(focusedElement.parentNode, this.letterBoxElement) ||
                this.previousElementIsLetterBox(focusedElement.parentNode, this.pivotElementNodeName)) {
                this.focusOnElement(previousElement);
            }
            else if (previousElement.previousSibling) {
                if (this.previousElementIsLetterBox(previousElement, this.letterBoxElement) ||
                    this.previousElementIsLetterBox(previousElement, this.pivotElementNodeName)) {
                    this.focusOnElement(previousElement.previousSibling);
                }
            }
        }
        else {
            return;
        }
    }
    onPivotChanged($letter) {
        this.lettersLeft.push($letter.newLetter);
        this.lettersRight.unshift($letter.newLetter);
    }
    onLetterInputRight($event) {
        console.log("onLetterInputRight");
        let rightIdx = $event.letterIndex;
        let leftIdx = this.lettersRight.length - 1 - rightIdx;
        let character = $event.character;
        if (character.match(this.lettersRegex)) {
            this.lettersLeft[leftIdx] = character;
            this.lettersRight[rightIdx] = character;
        }
        else if (character.match(this.punctionationRegex)) {
            // this.lettersLeft[leftIdx] = "";
            this.lettersRight[rightIdx] = character;
        }
    }
    onLetterInputLeft($event) {
        console.log("onLetterInputLeft");
        let leftIdx = $event.letterIndex;
        let rightIdx = this.lettersRight.length - 1 - leftIdx;
        let character = $event.character;
        if (character.match(this.lettersRegex)) {
            this.lettersLeft[leftIdx] = character;
            this.lettersRight[rightIdx] = character;
        }
        else if (character.match(this.punctionationRegex)) {
            this.lettersLeft[leftIdx] = character;
            // this.lettersRight[rightIdx] = "";
        }
    }
    onCharacterAddedRight($event) {
        console.log("onCharacterAddedRight");
        let rightIdx = $event.letterIndex;
        let leftIdx = this.lettersRight.length - 1 - rightIdx;
        let character = $event.character;
        if (character.match(this.lettersRegex)) {
            this.lettersLeft.splice(leftIdx, 0, $event.character);
            this.lettersRight.splice(rightIdx + 1, 0, $event.character);
        }
        else if (character.match(this.punctionationRegex)) {
            this.lettersRight.splice(rightIdx + 1, 0, $event.character);
        }
    }
    onCharacterAddedLeft($event) {
        console.log("onCharacterAddedLeft");
        let leftIdx = $event.letterIndex;
        let rightIdx = this.lettersRight.length - 1 - leftIdx;
        let character = $event.character;
        if (character.match(this.lettersRegex)) {
            this.lettersLeft.splice(leftIdx + 1, 0, character);
            this.lettersRight.splice(rightIdx, 0, character);
        }
        else if (character.match(this.punctionationRegex)) {
            this.lettersLeft.splice(leftIdx + 1, 0, character);
        }
    }
    onBackspaceLeft($event) {
        var focusedElement = window.document.activeElement;
        var previousElement = this.previousElementIsLetterBox(focusedElement.parentNode, this.letterBoxElement);
        var nextElement = this.nextElementIsLetterBox(focusedElement.parentNode, this.letterBoxElement);
        if (previousElement) {
            this.focusOnElement(previousElement);
        }
        else if (nextElement) {
            this.focusOnElement(nextElement);
        }
        else {
            this.pivotElement.focus();
        }
        let leftIdx = $event.letterIndex;
        let deletedLetter = $event.character;
        if (deletedLetter.match(this.lettersRegex)) {
            var letterIdx = this.getLetterFrequency(leftIdx, deletedLetter, this.lettersLeft);
            var letterToDelete = this.findIndexOnOppositeSide(this.lettersRight, deletedLetter, letterIdx);
            this.lettersRight.splice(letterToDelete, 1);
        }
        this.lettersLeft.splice(leftIdx, 1);
    }
    onBackspaceRight($event) {
        var focusedElement = window.document.activeElement;
        var previousElement = this.previousElementIsLetterBox(focusedElement.parentNode, this.letterBoxElement);
        var nextElement = this.nextElementIsLetterBox(focusedElement.parentNode, this.letterBoxElement);
        if (previousElement) {
            this.focusOnElement(previousElement);
        }
        else if (nextElement) {
            this.focusOnElement(nextElement);
        }
        else {
            this.pivotElement.focus();
        }
        let rightIdx = $event.letterIndex;
        let deletedLetter = $event.character;
        if (deletedLetter.match(this.lettersRegex)) {
            var letterIdx = this.getLetterFrequency(rightIdx, deletedLetter, this.lettersRight);
            var letterToDelete = this.findIndexOnOppositeSide(this.lettersLeft, deletedLetter, letterIdx);
            this.lettersLeft.splice(letterToDelete, 1);
        }
        this.lettersRight.splice(rightIdx, 1);
    }
    nextElementIsLetterBox(currElement, nodeName) {
        var nextElement = currElement.nextSibling;
        var element = nextElement && nextElement.nodeName === nodeName
            ? nextElement
            : null;
        return element;
    }
    previousElementIsLetterBox(currElement, nodeName) {
        var previousElement = currElement.previousSibling;
        var element = previousElement && previousElement.nodeName === nodeName
            ? previousElement
            : null;
        return element;
    }
    focusOnElement(element) {
        var activeElement = element.childNodes[0];
        activeElement.focus();
    }
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
/* harmony default export */ __webpack_exports__["default"] = (".pivot-box {\n  font-weight: bold;\n  border-radius: 9px;\n  font-size: 20px;\n  border: 4px solid blue;\n  text-align: center;\n  margin-right: 5px;\n  margin-bottom: 5px;\n  color: transparent;\n  text-shadow: 0 0 0 black;\n}\n.pivot-box:focus {\n  border: 4px solid #15dfe6;\n  outline: none;\n  text-shadow: 0 0 0 red;\n}\n.expanded {\n  width: 35px;\n  height: 35px;\n  padding: 5px;\n  cursor: text;\n}\n.collapsed {\n  width: 0px;\n  height: 60px;\n  padding: 0px;\n  border-color: black;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGl2b3QtbGV0dGVyL0M6XFxVc2Vyc1xcQXJpZWxcXERvY3VtZW50c1xcUHJvZ3JhbW1pbmcgcHJvamVjdHNcXHBhbGluZHJvbWVyL3NyY1xcYXBwXFxwaXZvdC1sZXR0ZXJcXHBpdm90LWxldHRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGl2b3QtbGV0dGVyL3Bpdm90LWxldHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUVBLHdCQUFBO0FDQUo7QURDSTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDQ1I7QURHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNBSjtBRElBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9waXZvdC1sZXR0ZXIvcGl2b3QtbGV0dGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBpdm90LWJveHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQgYmx1ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTo1cHg7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBcclxuICAgIHRleHQtc2hhZG93OiAwIDAgMCBibGFjaztcclxuICAgICY6Zm9jdXN7XHJcbiAgICAgICAgYm9yZGVyOiA0cHggc29saWQgcmdiKDIxLCAyMjMsIDIzMCk7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDAgcmVkO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZXhwYW5kZWR7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGN1cnNvcjogdGV4dDtcclxuXHJcbn1cclxuXHJcbi5jb2xsYXBzZWR7XHJcbiAgICB3aWR0aDogMHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOmJsYWNrO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4iLCIucGl2b3QtYm94IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBib3JkZXI6IDRweCBzb2xpZCBibHVlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIGJsYWNrO1xufVxuLnBpdm90LWJveDpmb2N1cyB7XG4gIGJvcmRlcjogNHB4IHNvbGlkICMxNWRmZTY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtc2hhZG93OiAwIDAgMCByZWQ7XG59XG5cbi5leHBhbmRlZCB7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgY3Vyc29yOiB0ZXh0O1xufVxuXG4uY29sbGFwc2VkIHtcbiAgd2lkdGg6IDBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */");

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
        this.input = "a";
        this.newUserInput = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.backspace = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.moveFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pivotIsCollapsed = false;
    }
    ngOnInit() { }
    expand() {
        console.log("expand");
        this.pivotIsCollapsed = false;
    }
    onUserInput(event) {
        this.pivotIsCollapsed = false;
        var lettersRegex = /^[A-Za-z]+$/;
        var isOneCharacter = this.input.length === 1;
        if (event.keyCode === 37 || event.keyCode === 39) {
            this.moveFocus.emit({ keyCode: event.keyCode });
        }
        else if (event.keyCode === 8 || event.keyCode === 46) {
            this.pivotIsCollapsed = true;
        }
        else if (isOneCharacter) {
            event.preventDefault();
            return;
        }
        else if (this.input.length === 2) {
            var newCharacter = this.input.charAt(0);
            if (newCharacter.match(lettersRegex)) {
                this.newUserInput.emit({
                    newLetter: newCharacter
                });
                this.input = this.input.slice(1);
            }
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PivotLetterComponent.prototype, "newUserInput", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PivotLetterComponent.prototype, "backspace", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PivotLetterComponent.prototype, "moveFocus", void 0);
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