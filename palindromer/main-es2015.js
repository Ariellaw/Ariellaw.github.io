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
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <app-navbar></app-navbar>\r\n    <div class=main-container>\r\n        <app-palindrom-editor></app-palindrom-editor>\r\n        <app-text></app-text>\r\n    </div>\r\n    <app-footer></app-footer>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer menu\"  >\n\n    <div class=\"portfolio-icons-container\">\n\n            <a target=\"_blank\" href=\"https://www.linkedin.com/in/ariella-wills-36189a12/\"> <img class=\"portfolio-icons\"\n                    src=\"../../assets/icons/linkedin-brands.svg\" alt=\"\"></a>\n            <a target=\"_blank\" href=\"https://github.com/Ariellaw/palindromer\"><img class=\"portfolio-icons\"\n                    src=\"../../assets/icons/github-square-brands.svg\" alt=\"\"></a>\n        </div>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/letter-box/letter-box.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/letter-box/letter-box.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<input  [ngClass]=\"{'space':typeOfChar==='space', 'punctuation':typeOfChar==='punctuation', 'letter': typeOfChar==='letter'}\" type=\"text\" [(ngModel)]=\"character\" [id]=\"side+index\" class=\"letter-box basic-char-box\" (keyup)=\"handleKeyup($event)\"   maxlength=\"2\"/> \r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar menu\">\n    <div class=\"menu-items\">\n        <h1 class=\"title\">Palindromes Generator</h1>\n        <div class=\"portfolio-icons-container\"  >\n\n            <a target=\"_blank\" href=\"https://www.linkedin.com/in/ariella-wills-36189a12/\"> <img class=\"portfolio-icons\"\n                    src=\"../../assets/icons/linkedin-brands.svg\" alt=\"\"></a>\n            <a target=\"_blank\" href=\"https://github.com/Ariellaw/palindromer\"><img class=\"portfolio-icons\"\n                    src=\"../../assets/icons/github-square-brands.svg\" alt=\"\"></a>\n        </div>\n    </div>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/palindrom-editor/palindrom-editor.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/palindrom-editor/palindrom-editor.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div  [ngClass]=\"{'rtl':isRightToLeft}\">\r\n    <div class=\"palindrom-container\" id=\"palindrom-container\">\r\n        <app-letter-box (replaceLetter)=\"onEdit($event)\" (moveFocus)=\"moveFocus($event)\" (backspace)=\"onBackspaceLeft($event)\"\r\n            *ngFor=\"let currLetter of lettersLeft ; let i = index\" side=\"left\" [character]=\"currLetter\" [index]=\"i\"\r\n            (characterAdded)=\"onAddCharLeft($event)\" (newUserInput)=\"onNewCharFromPivot($event)\" (characterChanged)=\"onCharacterChangedLeft($event)\" (delete)=\"deleteLeft($event)\">\r\n        </app-letter-box>\r\n        <app-pivot-letter (moveFocus)=\"moveFocus($event)\" (backspace)=\"backspaceFromPivot()\"\r\n            (delete)=\"deleteFromPivot()\" (newUserInput)=\"onNewCharFromPivot($event)\"></app-pivot-letter>\r\n        <app-letter-box (replaceLetter)=\"onEdit($event)\" (moveFocus)=\"moveFocus($event)\" (backspace)=\"onBackspaceRight($event)\"\r\n            *ngFor=\"let currLetter of lettersRight; let i = index\" side=\"right\" [character]=\"currLetter\" [index]=\"i\"\r\n            (characterAdded)=\"onAddCharRight($event)\" (characterChanged)=\"onCharacterChangedRight($event)\" (delete)=\"deleteRight($event)\">\r\n        </app-letter-box>\r\n    </div>\r\n        <button class=\"lngDirectionbtn\" (click)=\"switchTextDirection(true)\"  *ngIf=\"isRightToLeft===false\">Switch to Right to Left</button>  \r\n    <button class=\"lngDirectionbtn\" (click)=\"switchTextDirection(false)\" *ngIf=\"isRightToLeft===true\">Switch to Left to Right</button>  \r\n</div>\r\n\r\n<!-- (changeScreenDirection)=changeScreenDirection($event) [isRightToLeft]=\"isRightToLeft\" -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pivot-letter/pivot-letter.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pivot-letter/pivot-letter.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <input type=\"text\" maxlength=\"2\" [value]=\"letter\" size=1 (input)=\"onUserInput($event.target.value)\"/> -->\n<input (click)=\"expand()\" id=\"pivot-input\" [ngClass]=\"(pivotIsCollapsed)?'collapsed':'expanded'\" class=\"pivot-box basic-char-box\" type=\"text\" maxlength=\"2\" [(ngModel)]=\"input\"  (keyup)=\"onUserInput($event)\"/>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/text/text.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/text/text.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <textarea class=\"complete-text\" [value]=\"text\" name=\"complete-text\" id=\"\" cols=\"30\" rows=\"10\"></textarea> -->\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".main-container {\n  width: 90%;\n  margin: auto;\n  height: 100vh;\n  text-align: center;\n}\n\n.hidden {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxBcmllbFxcRG9jdW1lbnRzXFxQcm9ncmFtbWluZyBwcm9qZWN0c1xccGFsaW5kcm9tZXIvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNGRjs7QURNQTtFQUNFLGtCQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9zY3NzL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcblxyXG4ubWFpbi1jb250YWluZXIge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLmhpZGRlbntcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcblxyXG4iLCIubWFpbi1jb250YWluZXIge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogMTAwdmg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn0iXX0= */");

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
    // title = 'palindromer';
    ngOnInit() {
    }
    ngOnChanges(event) {
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
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _text_text_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./text/text.component */ "./src/app/text/text.component.ts");
/* harmony import */ var _common_services_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/services/constants */ "./src/app/common/services/constants.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _palindrom_editor_palindrom_editor_component__WEBPACK_IMPORTED_MODULE_5__["PalindromEditorComponent"],
            _letter_box_letter_box_component__WEBPACK_IMPORTED_MODULE_6__["LetterBoxComponent"],
            _pivot_letter_pivot_letter_component__WEBPACK_IMPORTED_MODULE_7__["PivotLetterComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
            _text_text_component__WEBPACK_IMPORTED_MODULE_11__["TextComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeModule"]
        ],
        providers: [_common_services_constants__WEBPACK_IMPORTED_MODULE_12__["ConstantsService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/common/services/constants.ts":
/*!**********************************************!*\
  !*** ./src/app/common/services/constants.ts ***!
  \**********************************************/
/*! exports provided: ConstantsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstantsService", function() { return ConstantsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ConstantsService = class ConstantsService {
    constructor() {
        this.baseAppUrl = 'http://localhost:3000/';
    }
};
ConstantsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ConstantsService);



/***/ }),

/***/ "./src/app/common/services/services.ts":
/*!*********************************************!*\
  !*** ./src/app/common/services/services.ts ***!
  \*********************************************/
/*! exports provided: PalindromSection, ServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PalindromSection", function() { return PalindromSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesService", function() { return ServicesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


var PalindromSection;
(function (PalindromSection) {
    PalindromSection["Left"] = "left";
    PalindromSection["Right"] = "right";
    PalindromSection["Pivot"] = "pivot-input";
})(PalindromSection || (PalindromSection = {}));
let ServicesService = class ServicesService {
    constructor() {
        this.punctionationRegex = /(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)/;
        this.latinLettersRegex = /^[A-Za-z]+$/;
        this.hebrewLettersRegex = "^[א-ת]+$";
        this.completeText = "";
    }
    isLetterVerification(character) {
        return (character.match(this.latinLettersRegex) ||
            character.match(this.hebrewLettersRegex));
    }
    setCompleteText(text) {
        this.completeText = text;
    }
};
ServicesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], ServicesService);



/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer {\n  border-top: 3px solid #7fd7e8;\n  height: 10rem;\n  width: 100vw;\n  position: absolute;\n  bottom: 0;\n}\n@media screen and (min-width: 700px) {\n  .footer {\n    visibility: hidden;\n  }\n}\n.footer .portfolio-icons-container {\n  width: 8rem;\n  margin-right: 5rem;\n  float: right;\n  margin-top: 1rem;\n}\n.footer .portfolio-icons-container .portfolio-icons {\n  width: 3rem;\n  height: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0M6XFxVc2Vyc1xcQXJpZWxcXERvY3VtZW50c1xcUHJvZ3JhbW1pbmcgcHJvamVjdHNcXHBhbGluZHJvbWVyL3NyY1xcYXBwXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNGSjtBREdJO0VBTko7SUFPUSxrQkFBQTtFQ0FOO0FBQ0Y7QURDSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NSO0FEQVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0VaIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3Njc3MvdmFyaWFibGVzLnNjc3MnO1xyXG5AaW1wb3J0ICcuLi8uLi9zY3NzL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi5mb290ZXJ7XHJcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgJGVtcGhhc2lzX2JsdWU7XHJcbiAgICBoZWlnaHQ6IDEwcmVtO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICAucG9ydGZvbGlvLWljb25zLWNvbnRhaW5lcntcclxuICAgICAgICB3aWR0aDogOHJlbTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVyZW07XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgLnBvcnRmb2xpby1pY29uc3tcclxuICAgICAgICAgICAgd2lkdGg6IDNyZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogM3JlbTsgIFxyXG4gICAgICAgIH0gICBcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiAgICIsIi5mb290ZXIge1xuICBib3JkZXItdG9wOiAzcHggc29saWQgIzdmZDdlODtcbiAgaGVpZ2h0OiAxMHJlbTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gIC5mb290ZXIge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxufVxuLmZvb3RlciAucG9ydGZvbGlvLWljb25zLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA4cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDVyZW07XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbi5mb290ZXIgLnBvcnRmb2xpby1pY29ucy1jb250YWluZXIgLnBvcnRmb2xpby1pY29ucyB7XG4gIHdpZHRoOiAzcmVtO1xuICBoZWlnaHQ6IDNyZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_services_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/services/services */ "./src/app/common/services/services.ts");



let FooterComponent = class FooterComponent {
    constructor(services) {
        this.services = services;
        this.changeScreenDirection = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    switchScreenDirection(isRighToLeft) {
        this.changeScreenDirection.emit({ isRightToLeft: isRighToLeft });
    }
};
FooterComponent.ctorParameters = () => [
    { type: _common_services_services__WEBPACK_IMPORTED_MODULE_2__["ServicesService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FooterComponent.prototype, "isRightToLeft", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FooterComponent.prototype, "changeScreenDirection", void 0);
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/letter-box/letter-box.component.scss":
/*!******************************************************!*\
  !*** ./src/app/letter-box/letter-box.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".letter-box {\n  display: inline-block;\n  position: relative;\n  border: none;\n}\n.letter-box:focus {\n  border: 3px solid #FFDCE0;\n  outline: none;\n  text-shadow: 0 0 0 red;\n  border-radius: 1rem;\n}\n.punctuation {\n  margin-right: 2px;\n  margin-left: 0px;\n  border-bottom: 2px solid #7fd7e8;\n}\n.space {\n  margin-right: 2px;\n  margin-left: 2px;\n  display: block;\n  border-bottom: 2px solid #7fd7e8;\n}\n.letter {\n  margin-right: 2px;\n  margin-left: 2px;\n  border: 2px solid #7fd7e8;\n  border-radius: 1rem;\n}\n.hidden {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGV0dGVyLWJveC9DOlxcVXNlcnNcXEFyaWVsXFxEb2N1bWVudHNcXFByb2dyYW1taW5nIHByb2plY3RzXFxwYWxpbmRyb21lci9zcmNcXGFwcFxcbGV0dGVyLWJveFxcbGV0dGVyLWJveC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGV0dGVyLWJveC9sZXR0ZXItYm94LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNESjtBREVJO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0FSO0FESUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUNESjtBRE1BO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtBQ0hKO0FEU0E7RUFFSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ1BKO0FEWUE7RUFDSSxrQkFBQTtBQ1RKIiwiZmlsZSI6InNyYy9hcHAvbGV0dGVyLWJveC9sZXR0ZXItYm94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vc2Nzcy92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4ubGV0dGVyLWJveHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgIFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgJGZvY3VzX2NvbG9yO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAwIHJlZDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgICB9XHJcbn1cclxuXHJcbi5wdW5jdHVhdGlvbntcclxuICAgIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6MHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRlbXBoYXNpc19ibHVlO1xyXG5cclxufVxyXG5cclxuXHJcbi5zcGFjZXtcclxuICAgIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6MnB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCAkZW1waGFzaXNfYmx1ZTtcclxuXHJcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgaG90cGluaztcclxufSAgICBcclxuXHJcblxyXG4ubGV0dGVye1xyXG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGRhcmtibHVlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbiAgICBtYXJnaW4tbGVmdDoycHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkZW1waGFzaXNfYmx1ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcblxyXG5cclxufVxyXG5cclxuLmhpZGRlbntcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufSIsIi5sZXR0ZXItYm94IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5sZXR0ZXItYm94OmZvY3VzIHtcbiAgYm9yZGVyOiAzcHggc29saWQgI0ZGRENFMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIHJlZDtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cblxuLnB1bmN0dWF0aW9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjN2ZkN2U4O1xufVxuXG4uc3BhY2Uge1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjN2ZkN2U4O1xufVxuXG4ubGV0dGVyIHtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM3ZmQ3ZTg7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG59XG5cbi5oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59Il19 */");

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
/* harmony import */ var _common_services_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/services/services */ "./src/app/common/services/services.ts");




var charTypes;
(function (charTypes) {
    charTypes["Letter"] = "letter";
    charTypes["Punctuation"] = "punctuation";
    charTypes["Space"] = "space";
})(charTypes || (charTypes = {}));
let LetterBoxComponent = class LetterBoxComponent {
    constructor(services) {
        this.services = services;
        this.currChar = '';
        this.typeOfChar = charTypes.Letter;
        this.character = '';
        this.side = '';
        this.characterChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.backspace = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.newUserInput = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.moveFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.characterAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.replaceLetter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.assignCharacterType();
        this.currChar = this.character;
    }
    //
    handleKeyup(event) {
        var side;
        this.currChar = this.character;
        var currEl = document.getElementById(side + this.index);
        if (this.side === _common_services_services__WEBPACK_IMPORTED_MODULE_2__["PalindromSection"].Right) {
            side = _common_services_services__WEBPACK_IMPORTED_MODULE_2__["PalindromSection"].Right;
        }
        else if (this.side === _common_services_services__WEBPACK_IMPORTED_MODULE_2__["PalindromSection"].Left) {
            side = _common_services_services__WEBPACK_IMPORTED_MODULE_2__["PalindromSection"].Left;
        }
        if (event.shiftKey && (event.keyCode === 37 || event.keyCode === 39)) {
            return;
        }
        else if (event.keyCode === 37 || event.keyCode === 39) {
            if (this.currChar.length === 2) {
                this.character = this.currChar.charAt(0);
                this.currChar = this.currChar.charAt(0);
                return;
            }
            this.moveFocus.emit({
                keyCode: event.keyCode,
                side,
                letterIdx: this.index
            });
        }
        else if (event.keyCode === 8) {
            if (this.character.length == 1) {
                console.log(this.currChar, this.doGetCaretPosition(currEl));
                this.replaceLetter.emit({
                    newChar: this.character,
                    letterIdx: this.index,
                    side: side
                });
                this.currChar = this.character;
                return;
            }
            this.backspace.emit({
                letterIndex: this.index,
                character: this.currChar
            });
        }
        else if (event.keyCode === 46) {
            if (this.character.length == 1) {
                console.log(this.currChar, this.doGetCaretPosition(currEl));
                this.replaceLetter.emit({
                    newChar: this.character,
                    letterIdx: this.index,
                    side: side
                });
                this.currChar = this.character;
                return;
            }
            this.delete.emit({
                letterIndex: this.index,
                character: this.character
            });
        }
        else if (event.keyCode === 16 ||
            event.keyCode === 20 ||
            event.keyCode === 13 ||
            event.keyCode === 17) {
            return;
        }
        else if (this.character.length === 2) {
            this.characterAdded.emit({
                character: this.character.charAt(1),
                letterIndex: this.index
            });
            this.character = this.character.charAt(0);
        }
        else if (this.character.length === 1) {
            this.characterChanged.emit({
                prevChar: this.currChar,
                newChar: this.character,
                letterIndex: this.index
            });
            this.currChar = this.character;
        }
    }
    assignCharacterType() {
        var isLetter = this.services.isLetterVerification(this.character);
        if (isLetter) {
            this.typeOfChar = charTypes.Letter;
        }
        else if (this.character === ' ') {
            this.typeOfChar = charTypes.Space;
        }
        else {
            this.typeOfChar = charTypes.Punctuation;
        }
    }
    doGetCaretPosition(oField) {
        // Initialize
        var iCaretPos = 0;
        // // IE Support
        // if (document.selection) {
        //   // Set focus on the element
        //   oField.focus();
        //   // To get cursor position, get empty selection range
        //   var oSel = document.selection.createRange();
        //   // Move selection start to 0 position
        //   oSel.moveStart('character', -oField.value.length);
        //   // The caret position is selection length
        //   iCaretPos = oSel.text.length;
        // }
        // Firefox support
        //  if (oField.selectionStart || oField.selectionStart == '0')
        //   iCaretPos = oField.selectionDirection=='backward' ? oField.selectionStart : oField.selectionEnd;
        // Return results
        return iCaretPos;
    }
};
LetterBoxComponent.ctorParameters = () => [
    { type: _common_services_services__WEBPACK_IMPORTED_MODULE_2__["ServicesService"] }
];
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
], LetterBoxComponent.prototype, "newUserInput", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], LetterBoxComponent.prototype, "moveFocus", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], LetterBoxComponent.prototype, "characterAdded", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], LetterBoxComponent.prototype, "delete", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], LetterBoxComponent.prototype, "replaceLetter", void 0);
LetterBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-letter-box',
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
//Add a services page


/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar {\n  height: 10rem;\n  border-bottom: 3px solid #7fd7e8;\n  text-align: center;\n  position: relative;\n}\n.navbar .menu-items {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 50%;\n  height: 30%;\n  margin: auto;\n  width: 100%;\n}\n.navbar .menu-items .title {\n  display: inline;\n}\n.navbar .portfolio-icons-container {\n  float: right;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-right: 5rem;\n}\n@media screen and (max-width: 700px) {\n  .navbar .portfolio-icons-container {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL0M6XFxVc2Vyc1xcQXJpZWxcXERvY3VtZW50c1xcUHJvZ3JhbW1pbmcgcHJvamVjdHNcXHBhbGluZHJvbWVyL3NyY1xcYXBwXFxuYXZiYXJcXG5hdmJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNERjtBREdFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0RKO0FERUk7RUFDRSxlQUFBO0FDQU47QURJRTtFQUNFLFlBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxrQkFBQTtBQ0ZKO0FER0k7RUFKRjtJQUtJLGFBQUE7RUNBSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3Njc3MvdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLm5hdmJhciB7XHJcbiAgaGVpZ2h0OiAxMHJlbTtcclxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgJGVtcGhhc2lzX2JsdWU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgLm1lbnUtaXRlbXMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMzAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAudGl0bGV7XHJcbiAgICAgIGRpc3BsYXk6aW5saW5lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnBvcnRmb2xpby1pY29ucy1jb250YWluZXIge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIubmF2YmFyIHtcbiAgaGVpZ2h0OiAxMHJlbTtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICM3ZmQ3ZTg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm5hdmJhciAubWVudS1pdGVtcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDMwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbn1cbi5uYXZiYXIgLm1lbnUtaXRlbXMgLnRpdGxlIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuLm5hdmJhciAucG9ydGZvbGlvLWljb25zLWNvbnRhaW5lciB7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXJnaW4tcmlnaHQ6IDVyZW07XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAubmF2YmFyIC5wb3J0Zm9saW8taWNvbnMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_services_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/services/services */ "./src/app/common/services/services.ts");



let NavbarComponent = class NavbarComponent {
    constructor(services) {
        this.services = services;
    }
    ngOnInit() {
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _common_services_services__WEBPACK_IMPORTED_MODULE_2__["ServicesService"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/palindrom-editor/palindrom-editor.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/palindrom-editor/palindrom-editor.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".palindrom-container {\n  width: 80vw;\n  padding: 50px;\n  display: flex;\n  flex-wrap: wrap;\n  margin: auto;\n  margin-top: 5rem;\n  padding: 1rem;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  justify-content: center;\n}\n\n.rtl {\n  direction: rtl;\n}\n\n.lngDirectionbtn {\n  border-radius: 1rem;\n  background-color: #faf4e1;\n  font-size: 2rem;\n  height: 4rem;\n  border: 2px solid #a57fe8;\n  padding: 1rem;\n  float: right;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFsaW5kcm9tLWVkaXRvci9DOlxcVXNlcnNcXEFyaWVsXFxEb2N1bWVudHNcXFByb2dyYW1taW5nIHByb2plY3RzXFxwYWxpbmRyb21lci9zcmNcXGFwcFxccGFsaW5kcm9tLWVkaXRvclxccGFsaW5kcm9tLWVkaXRvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFsaW5kcm9tLWVkaXRvci9wYWxpbmRyb20tZWRpdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSx1QkFBQTtBQ0RGOztBRElBO0VBQ0UsY0FBQTtBQ0RGOztBRElBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL3BhbGluZHJvbS1lZGl0b3IvcGFsaW5kcm9tLWVkaXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zY3NzL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG4ucGFsaW5kcm9tLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDgwdnc7XHJcbiAgcGFkZGluZzogNTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogNXJlbTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ydGwge1xyXG4gIGRpcmVjdGlvbjogcnRsO1xyXG59XHJcblxyXG4ubG5nRGlyZWN0aW9uYnRuIHtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWY0ZTE7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGhlaWdodDogNHJlbTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjYTU3ZmU4O1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuIiwiLnBhbGluZHJvbS1jb250YWluZXIge1xuICB3aWR0aDogODB2dztcbiAgcGFkZGluZzogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDVyZW07XG4gIHBhZGRpbmc6IDFyZW07XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucnRsIHtcbiAgZGlyZWN0aW9uOiBydGw7XG59XG5cbi5sbmdEaXJlY3Rpb25idG4ge1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmNGUxO1xuICBmb250LXNpemU6IDJyZW07XG4gIGhlaWdodDogNHJlbTtcbiAgYm9yZGVyOiAycHggc29saWQgI2E1N2ZlODtcbiAgcGFkZGluZzogMXJlbTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */");

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
/* harmony import */ var _common_services_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/services/services */ "./src/app/common/services/services.ts");




let PalindromEditorComponent = class PalindromEditorComponent {
    constructor(services) {
        this.services = services;
        this.lettersLeft = ["t", "a", "c"];
        this.lettersRight = ["c", "a", "t"];
        this.isRightToLeft = false;
    }
    ngOnInit() {
        this.pivotElement = document.getElementById(_common_services_services__WEBPACK_IMPORTED_MODULE_2__["PalindromSection"].Pivot);
        this.pivotElement.focus();
        this.services.setCompleteText("this is a completeText");
    }
    switchTextDirection(isRightToLeft) {
        this.isRightToLeft = isRightToLeft;
        console.log("isRightToLeft", isRightToLeft);
    }
    onAddCharRight($event) {
        let rightIdx = $event.letterIndex;
        let leftIdx = this.lettersRight.length - 1 - rightIdx;
        let character = $event.character;
        this.focusOnNextPreviousElement(_common_services_services__WEBPACK_IMPORTED_MODULE_2__["PalindromSection"].Right, rightIdx, true, 1, this.lettersRight.length);
        this.addNewChar(this.lettersLeft, leftIdx, this.lettersRight, rightIdx + 1, character);
    }
    onAddCharLeft($event) {
        let character = $event.character;
        let leftIdx = $event.letterIndex;
        let rightIdx = this.lettersLeft.length - 1 - leftIdx;
        this.focusOnNextPreviousElement(_common_services_services__WEBPACK_IMPORTED_MODULE_2__["PalindromSection"].Left, leftIdx, true, 1, this.lettersLeft.length);
        this.addNewChar(this.lettersRight, rightIdx, this.lettersLeft, leftIdx + 1, character);
    }
    onCharacterChangedRight($event) {
        this.replaceLetter(this.lettersLeft, this.lettersRight, $event.letterIndex, $event.prevChar, $event.newChar);
    }
    onCharacterChangedLeft($event) {
        this.replaceLetter(this.lettersRight, this.lettersLeft, $event.letterIndex, $event.prevChar, $event.newChar);
    }
    onNewCharFromPivot($event) {
        // this.pivotIsWorking=true;
        this.addNewChar(this.lettersLeft, this.lettersLeft.length, this.lettersRight, 0, $event.newLetter);
    }
    moveFocus($event) {
        if ($event.keyCode === 39) {
            this.moveFocusRight($event.side, $event.letterIdx);
        }
        else {
            this.moveFocusLeft($event.side, $event.letterIdx);
        }
    }
    /*HELPERFUNCTIONS */
    moveFocusRight(side, letterIdx) {
        if (side === _common_services_services__WEBPACK_IMPORTED_MODULE_2__["PalindromSection"].Right &&
            letterIdx === this.lettersRight.length - 1) {
            document.getElementById("left0").focus();
        }
        else if (side === _common_services_services__WEBPACK_IMPORTED_MODULE_2__["PalindromSection"].Left &&
            letterIdx === this.lettersLeft.length - 1) {
            console.log("this is the reason");
            this.pivotElement.focus();
        }
        else if (side === _common_services_services__WEBPACK_IMPORTED_MODULE_2__["PalindromSection"].Pivot) {
            document.getElementById("right0").focus();
        }
        else {
            this.focusOnNextPreviousElement(side, letterIdx, false, 1);
        }
    }
    moveFocusLeft(side, letterIdx) {
        console.log("move focus", side, letterIdx);
        if (side === _common_services_services__WEBPACK_IMPORTED_MODULE_2__["PalindromSection"].Left &&
            letterIdx === 0 &&
            this.lettersRight.length > 0) {
            document
                .getElementById(`${_common_services_services__WEBPACK_IMPORTED_MODULE_2__["PalindromSection"].Right}${this.lettersRight.length - 1}`)
                .focus();
        }
        else if (side === _common_services_services__WEBPACK_IMPORTED_MODULE_2__["PalindromSection"].Right && letterIdx === 0) {
            console.log("go to pivot", letterIdx);
            this.pivotElement.focus();
        }
        else if (side === _common_services_services__WEBPACK_IMPORTED_MODULE_2__["PalindromSection"].Pivot) {
            document
                .getElementById(`${_common_services_services__WEBPACK_IMPORTED_MODULE_2__["PalindromSection"].Left}${this.lettersLeft.length - 1}`)
                .focus();
        }
        else if (this.lettersRight.length > 0 || this.lettersLeft.length > 0) {
            this.focusOnNextPreviousElement(side, letterIdx, false, -1);
        }
        else {
            console.log("else");
            this.pivotElement.focus();
        }
    }
    onBackspaceLeft($event) {
        this.deleteChar(this.lettersRight, this.lettersLeft, $event.letterIndex, $event.character);
        if ($event.letterIndex === 0 && this.lettersLeft.length >= 1) {
            document.getElementById("left1").focus();
            return;
        }
        this.moveFocusLeft(_common_services_services__WEBPACK_IMPORTED_MODULE_2__["PalindromSection"].Left, $event.letterIndex);
    }
    onBackspaceRight($event) {
        this.deleteChar(this.lettersLeft, this.lettersRight, $event.letterIndex, $event.character);
        this.moveFocusLeft(_common_services_services__WEBPACK_IMPORTED_MODULE_2__["PalindromSection"].Right, $event.letterIndex);
    }
    deleteRight($event) {
        this.deleteChar(this.lettersLeft, this.lettersRight, $event.letterIndex, $event.character);
        this.moveFocusRight(_common_services_services__WEBPACK_IMPORTED_MODULE_2__["PalindromSection"].Right, $event.letterIndex);
    }
    deleteLeft($event) {
        this.deleteChar(this.lettersRight, this.lettersLeft, $event.letterIndex, $event.character);
        this.moveFocusRight(_common_services_services__WEBPACK_IMPORTED_MODULE_2__["PalindromSection"].Left, $event.letterIndex);
    }
    deleteFromPivot() {
        if (this.lettersRight.length > 0) {
            this.deleteChar(this.lettersLeft, this.lettersRight, 0, this.lettersRight[0]);
            this.pivotElement.focus();
        }
    }
    backspaceFromPivot() {
        if (this.lettersLeft.length > 0) {
            this.deleteChar(this.lettersRight, this.lettersLeft, this.lettersLeft.length - 1, this.lettersLeft[this.lettersLeft.length - 1]);
            this.pivotElement.focus();
        }
    }
    getIdxFromLetterOnOtherSide(deletedLetter, arr1, arr2, idx2) {
        var letterIdx = this.countLetterUntilIndex(idx2, deletedLetter, arr2);
        var idx1 = this.findIndexOnOppositeSide(arr1, deletedLetter, letterIdx);
        return idx1;
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
            }, 100);
        }
        else
            return false;
    }
    addNewChar(arr1, idx1, arr2, idx2, newChar) {
        var isLetter = this.services.isLetterVerification(newChar);
        if (isLetter) {
            arr1.splice(idx1, 0, newChar);
        }
        arr2.splice(idx2, 0, newChar);
    }
    deleteChar(arr1, arr2, idx2, newChar) {
        console.log("delete Char", arr1, arr2, idx2, newChar);
        var isLetter = this.services.isLetterVerification(newChar);
        if (isLetter) {
            var idx1 = this.getIdxFromLetterOnOtherSide(newChar, arr1, arr2, idx2);
            arr1.splice(idx1, 1);
        }
        else {
        }
        arr2.splice(idx2, 1);
    }
    onEdit($event) {
        console.log("on edit");
        var side = $event.side;
        if (side === _common_services_services__WEBPACK_IMPORTED_MODULE_2__["PalindromSection"].Right) {
            this.replaceLetter(this.lettersLeft, this.lettersRight, $event.letterIdx, "k", $event.newChar);
        }
        else if (side === _common_services_services__WEBPACK_IMPORTED_MODULE_2__["PalindromSection"].Left) {
            this.replaceLetter(this.lettersRight, this.lettersLeft, $event.letterIdx, "k", $event.newChar);
        }
        var el = document.getElementById(side + $event.letterIdx);
        console.log(el);
        el.focus();
    }
    replaceLetter(arr1, arr2, idx2, oldChar, newChar) {
        console.log("replaceLetter", arr1, arr2, idx2, oldChar, newChar);
        var isLetterOld = this.services.isLetterVerification(oldChar);
        var isLetterNew = this.services.isLetterVerification(newChar);
        var idx1 = this.getIdxFromLetterOnOtherSide(oldChar, arr1, arr2, idx2);
        if (isLetterOld && isLetterNew) {
            arr1[idx1] = newChar;
            arr2[idx2] = newChar;
        }
        else if (isLetterNew && !isLetterOld) {
            var lettersBeforeTargetCell = 0;
            arr2[idx2] = newChar;
            for (var i = 0; i < idx2; i++) {
                if (this.services.isLetterVerification(arr2[i])) {
                    lettersBeforeTargetCell++;
                }
            }
            if (lettersBeforeTargetCell === 0) {
                arr1.splice(arr1.length, 0, newChar);
                return;
            }
            for (var j = arr1.length - 1; j >= 0; j--) {
                if (this.services.isLetterVerification(arr1[j])) {
                    lettersBeforeTargetCell--;
                }
                if (lettersBeforeTargetCell === 0) {
                    arr1.splice(j, 0, newChar);
                    return;
                }
            }
        }
        else if (!isLetterNew && isLetterOld) {
            arr2[idx2] = newChar;
            arr1.splice(idx1, 1);
        }
    }
    countLetterUntilIndex(idx, letter, lettersArr) {
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
PalindromEditorComponent.ctorParameters = () => [
    { type: _common_services_services__WEBPACK_IMPORTED_MODULE_2__["ServicesService"] }
];
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
/* harmony default export */ __webpack_exports__["default"] = (".pivot-box {\n  border-radius: 1rem;\n  border: 3px solid #a57fe8;\n  margin-right: 2px;\n  margin-left: 2px;\n  background-color: #e4cb7d;\n}\n.pivot-box:focus {\n  border: 3px solid #FFDCE0;\n  outline: none;\n  text-shadow: 0 0 0 red;\n}\n.expanded {\n  cursor: text;\n}\n.collapsed {\n  width: 0px;\n  height: 60px;\n  padding: 0px;\n  border-color: #7fd7e8;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGl2b3QtbGV0dGVyL0M6XFxVc2Vyc1xcQXJpZWxcXERvY3VtZW50c1xcUHJvZ3JhbW1pbmcgcHJvamVjdHNcXHBhbGluZHJvbWVyL3NyY1xcYXBwXFxwaXZvdC1sZXR0ZXJcXHBpdm90LWxldHRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGl2b3QtbGV0dGVyL0M6XFxVc2Vyc1xcQXJpZWxcXERvY3VtZW50c1xcUHJvZ3JhbW1pbmcgcHJvamVjdHNcXHBhbGluZHJvbWVyL3NyY1xcc2Nzc1xcdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3Bpdm90LWxldHRlci9waXZvdC1sZXR0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQ1BvQjtBQ0t0QjtBRklFO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUVGSjtBRk1BO0VBQ0UsWUFBQTtBRUhGO0FGTUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxxQkN2QmM7RUR3QmQsZUFBQTtBRUhGIiwiZmlsZSI6InNyYy9hcHAvcGl2b3QtbGV0dGVyL3Bpdm90LWxldHRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3Njc3MvdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuXHJcbi5waXZvdC1ib3gge1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgYm9yZGVyOiAzcHggc29saWQgJGVtcGhhc2lzX3B1cnBsZTtcclxuICBtYXJnaW4tcmlnaHQ6IDJweDtcclxuICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnlfbWFpbl9jb2xvcjtcclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAkZm9jdXNfY29sb3I7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAwIHJlZDtcclxuICB9XHJcbn1cclxuXHJcbi5leHBhbmRlZCB7XHJcbiAgY3Vyc29yOiB0ZXh0O1xyXG59XHJcblxyXG4uY29sbGFwc2VkIHtcclxuICB3aWR0aDogMHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgYm9yZGVyLWNvbG9yOiAkZW1waGFzaXNfYmx1ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIiwiJG1haW5fY29sb3I6ICNmYWY0ZTE7XHJcbiRzZWNvbmRhcnlfbWFpbl9jb2xvcjojZTRjYjdkO1xyXG4kZW1waGFzaXNfYmx1ZTogIzdmZDdlODtcclxuJGVtcGhhc2lzX3B1cnBsZTogI2E1N2ZlODtcclxuJGJsYWNrOiBibGFjaztcclxuJGVtcGhhc2lzX2dyZWVuOiAjYmRlMzY2O1xyXG4kZm9jdXNfY29sb3I6ICNGRkRDRTA7XHJcbiR0aXRsZV9jb2xvcjogIzY5NGYxMDtcclxuIiwiLnBpdm90LWJveCB7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGJvcmRlcjogM3B4IHNvbGlkICNhNTdmZTg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRjYjdkO1xufVxuLnBpdm90LWJveDpmb2N1cyB7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNGRkRDRTA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtc2hhZG93OiAwIDAgMCByZWQ7XG59XG5cbi5leHBhbmRlZCB7XG4gIGN1cnNvcjogdGV4dDtcbn1cblxuLmNvbGxhcHNlZCB7XG4gIHdpZHRoOiAwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgcGFkZGluZzogMHB4O1xuICBib3JkZXItY29sb3I6ICM3ZmQ3ZTg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */");

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
/* harmony import */ var _common_services_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/services/services */ "./src/app/common/services/services.ts");




let PivotLetterComponent = class PivotLetterComponent {
    constructor(services) {
        this.services = services;
        this.input = "o";
        this.pivotIsCollapsed = false;
        this.newUserInput = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.moveFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.backspace = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
    expand() {
        this.pivotIsCollapsed = false;
    }
    onUserInput(event) {
        var isOneCharacter = this.input.length === 1;
        if (event.keyCode === 16 ||
            event.keyCode === 20 ||
            event.keyCode === 13 ||
            event.keyCode === 17) {
            return;
        }
        else if (event.keyCode === 37 || event.keyCode === 39) {
            this.moveFocus.emit({
                keyCode: event.keyCode,
                side: _common_services_services__WEBPACK_IMPORTED_MODULE_2__["PalindromSection"].Pivot,
                letterIdx: -1
            });
        }
        else if (event.keyCode === 8 || event.keyCode === 46) {
            if (!this.pivotIsCollapsed) {
                this.pivotIsCollapsed = true;
                this.input = "";
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
PivotLetterComponent.ctorParameters = () => [
    { type: _common_services_services__WEBPACK_IMPORTED_MODULE_2__["ServicesService"] }
];
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

/***/ "./src/app/text/text.component.scss":
/*!******************************************!*\
  !*** ./src/app/text/text.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".complete-text {\n  border: 5px solid #a57fe8;\n  border-radius: 1rem;\n  width: 75%;\n  margin-top: 10rem;\n  background-color: #faf4e1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGV4dC9DOlxcVXNlcnNcXEFyaWVsXFxEb2N1bWVudHNcXFByb2dyYW1taW5nIHByb2plY3RzXFxwYWxpbmRyb21lci9zcmNcXGFwcFxcdGV4dFxcdGV4dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGV4dC9DOlxcVXNlcnNcXEFyaWVsXFxEb2N1bWVudHNcXFByb2dyYW1taW5nIHByb2plY3RzXFxwYWxpbmRyb21lci9zcmNcXHNjc3NcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC90ZXh0L3RleHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJDVlc7QUNNYiIsImZpbGUiOiJzcmMvYXBwL3RleHQvdGV4dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3Njc3MvdmFyaWFibGVzLnNjc3MnO1xyXG5AaW1wb3J0ICcuLi8uLi9zY3NzL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcblxyXG5cclxuLmNvbXBsZXRlLXRleHQge1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkICRlbXBoYXNpc19wdXJwbGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICB3aWR0aDogNzUlO1xyXG4gIG1hcmdpbi10b3A6IDEwcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRtYWluX2NvbG9yO1xyXG59XHJcbiIsIiRtYWluX2NvbG9yOiAjZmFmNGUxO1xyXG4kc2Vjb25kYXJ5X21haW5fY29sb3I6I2U0Y2I3ZDtcclxuJGVtcGhhc2lzX2JsdWU6ICM3ZmQ3ZTg7XHJcbiRlbXBoYXNpc19wdXJwbGU6ICNhNTdmZTg7XHJcbiRibGFjazogYmxhY2s7XHJcbiRlbXBoYXNpc19ncmVlbjogI2JkZTM2NjtcclxuJGZvY3VzX2NvbG9yOiAjRkZEQ0UwO1xyXG4kdGl0bGVfY29sb3I6ICM2OTRmMTA7XHJcbiIsIi5jb21wbGV0ZS10ZXh0IHtcbiAgYm9yZGVyOiA1cHggc29saWQgI2E1N2ZlODtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luLXRvcDogMTByZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWY0ZTE7XG59Il19 */");

/***/ }),

/***/ "./src/app/text/text.component.ts":
/*!****************************************!*\
  !*** ./src/app/text/text.component.ts ***!
  \****************************************/
/*! exports provided: TextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextComponent", function() { return TextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_services_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/services/services */ "./src/app/common/services/services.ts");



let TextComponent = class TextComponent {
    constructor(services) {
        this.services = services;
    }
    ngOnInit() {
    }
};
TextComponent.ctorParameters = () => [
    { type: _common_services_services__WEBPACK_IMPORTED_MODULE_2__["ServicesService"] }
];
TextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-text',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./text.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/text/text.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./text.component.scss */ "./src/app/text/text.component.scss")).default]
    })
], TextComponent);



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