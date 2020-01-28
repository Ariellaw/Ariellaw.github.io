function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n    <app-navbar></app-navbar>\r\n    <div class=main-container>\r\n        <app-palindrom-editor></app-palindrom-editor>\r\n        <app-text></app-text>\r\n        <div class=\"message-container\" *ngIf=\"displayMessage\">\r\n            <button style=\"cursor:pointer\" class=\"close\" aria-label=\"Close\" (click)=\"closeMessage()\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            <h1>This app has limited functionality on mobile devices</h1>\r\n        </div>\r\n    </div>\r\n    <app-footer></app-footer>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"footer menu\"  >\n\n    <div class=\"portfolio-icons-container\">\n\n            <a target=\"_blank\" href=\"https://www.linkedin.com/in/ariella-wills-36189a12/\"> <img class=\"portfolio-icons\"\n                    src=\"../../assets/icons/linkedin-brands.svg\" alt=\"\"></a>\n            <a target=\"_blank\" href=\"https://github.com/Ariellaw/palindromer\"><img class=\"portfolio-icons\"\n                    src=\"../../assets/icons/github-square-brands.svg\" alt=\"\"></a>\n        </div>\n</footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/letter-box/letter-box.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/letter-box/letter-box.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLetterBoxLetterBoxComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<input  [ngClass]=\"{'space':typeOfChar==='space', 'punctuation':typeOfChar==='punctuation', 'letter': typeOfChar==='letter'}\" type=\"text\" [(ngModel)]=\"character\" [id]=\"side+index\" class=\"letter-box basic-char-box\" (click)=\"handleClick()\" (keyup)=\"handleKeyup($event)\"   maxlength=\"2\"/> \r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar menu\">\n    <div class=\"menu-items\">\n        <h1 class=\"title\">Palindromes Generator</h1>\n        <div class=\"portfolio-icons-container\"  >\n\n            <a target=\"_blank\" href=\"https://www.linkedin.com/in/ariella-wills-36189a12/\"> <img class=\"portfolio-icons\"\n                    src=\"palindromer/../../assets/icons/linkedin-brands.svg\" alt=\"\"></a>\n            <a target=\"_blank\" href=\"https://github.com/Ariellaw/palindromer\"><img class=\"portfolio-icons\"\n                    src=\"palindromer/../../assets/icons/github-square-brands.svg\" alt=\"\"></a>\n        </div>\n    </div>\n</nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/palindrom-editor/palindrom-editor.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/palindrom-editor/palindrom-editor.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPalindromEditorPalindromEditorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"palindrom-container\" [ngClass]=\"{'rtl':isRightToLeft}\">\r\n    <div class=\"palindrom-container\" id=\"palindrom-container\">\r\n        <app-letter-box (replaceLetter)=\"onEdit($event)\" (deleteNextChar)=\"onDeleteNextChar($event)\" (deletePreviousChar)=\"onDeletePreviousChar($event)\" (moveFocus)=\"moveFocus($event)\" (backspace)=\"onBackspaceLeft($event)\"\r\n            *ngFor=\"let currLetter of lettersLeft ; let i = index\" side=\"left\" [character]=\"currLetter\" [index]=\"i\"\r\n            (characterAdded)=\"onAddCharLeft($event)\"  (characterChanged)=\"onCharacterChangedLeft($event)\" (delete)=\"deleteLeft($event)\">\r\n        </app-letter-box>\r\n        <app-pivot-letter (moveFocus)=\"moveFocus($event)\" (backspace)=\"backspaceFromPivot()\"\r\n            (delete)=\"deleteFromPivot()\" (newUserInput)=\"onNewCharFromPivot($event)\"></app-pivot-letter>\r\n        <app-letter-box (replaceLetter)=\"onEdit($event)\"  (deleteNextChar)=\"onDeleteNextChar($event)\" (deletePreviousChar)=\"onDeletePreviousChar($event)\" (moveFocus)=\"moveFocus($event)\" (backspace)=\"onBackspaceRight($event)\"\r\n            *ngFor=\"let currLetter of lettersRight; let i = index\" side=\"right\" [character]=\"currLetter\" [index]=\"i\"\r\n            (characterAdded)=\"onAddCharRight($event)\" (characterChanged)=\"onCharacterChangedRight($event)\" (delete)=\"deleteRight($event)\">\r\n        </app-letter-box>\r\n    </div>\r\n        <button class=\"lngDirectionbtn\" (click)=\"switchTextDirection(true)\"  *ngIf=\"isRightToLeft===false\">Switch to Right to Left</button>  \r\n    <button class=\"lngDirectionbtn\" (click)=\"switchTextDirection(false)\" *ngIf=\"isRightToLeft===true\">Switch to Left to Right</button>  \r\n</div>\r\n\r\n<!-- (changeScreenDirection)=changeScreenDirection($event) [isRightToLeft]=\"isRightToLeft\" -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pivot-letter/pivot-letter.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pivot-letter/pivot-letter.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPivotLetterPivotLetterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <input type=\"text\" maxlength=\"2\" [value]=\"letter\" size=1 (input)=\"onUserInput($event.target.value)\"/> -->\n<input (click)=\"expand()\" id=\"pivot-input\" [ngClass]=\"(pivotIsCollapsed)?'collapsed':'expanded'\" class=\"pivot-box basic-char-box\" type=\"text\" maxlength=\"2\" [(ngModel)]=\"input\" (click)=\"handleClick()\" (keyup)=\"onUserInput($event)\"/>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/text/text.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/text/text.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTextTextComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <textarea class=\"complete-text\" [value]=\"text\" name=\"complete-text\" id=\"\" cols=\"30\" rows=\"10\"></textarea> -->\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-container {\n  width: 90%;\n  height: 80vh;\n  text-align: center;\n  top: 10rem;\n  position: absolute;\n  padding: 1rem;\n  margin-left: auto;\n  margin-right: auto;\n  display: inline-block;\n  transform: translate(-50%);\n}\n\n.close {\n  font-size: 24px;\n  color: black;\n  background-color: #faf4e1;\n  float: right;\n}\n\n.message-container {\n  width: 20rem;\n  padding: 2rem;\n  border-radius: 3rem;\n  border: 1px solid red;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 5rem;\n  display: none;\n}\n\n@media (max-width: 1000px) {\n  .message-container {\n    display: block;\n  }\n}\n\n.hidden {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxBcmllbFxcRG9jdW1lbnRzXFxQcm9ncmFtbWluZyBwcm9qZWN0c1xccGFsaW5kcm9tZXIvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9DOlxcVXNlcnNcXEFyaWVsXFxEb2N1bWVudHNcXFByb2dyYW1taW5nIHByb2plY3RzXFxwYWxpbmRyb21lci9zcmNcXHNjc3NcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtBQ0ZGOztBRE1BO0VBQ0UsZUFBQTtFQUNFLFlBQUE7RUFDQSx5QkVwQlM7RUZxQlQsWUFBQTtBQ0hKOztBRE1BO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0hGOztBRElFO0VBVEY7SUFVRyxjQUFBO0VDREQ7QUFDRjs7QURLQTtFQUNFLGtCQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9zY3NzL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcblxyXG4ubWFpbi1jb250YWluZXIge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiA4MHZoO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0b3A6IDEwcmVtO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcclxuXHJcbn1cclxuXHJcbi5jbG9zZXtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbl9jb2xvcjtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLm1lc3NhZ2UtY29udGFpbmVye1xyXG4gIHdpZHRoOiAyMHJlbTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tdG9wOjVyZW07XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBAbWVkaWEgKG1heC13aWR0aDoxMDAwcHgpIHtcclxuICAgZGlzcGxheTogYmxvY2s7IFxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5oaWRkZW57XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG5cclxuIiwiLm1haW4tY29udGFpbmVyIHtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA4MHZoO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRvcDogMTByZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcbn1cblxuLmNsb3NlIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWY0ZTE7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLm1lc3NhZ2UtY29udGFpbmVyIHtcbiAgd2lkdGg6IDIwcmVtO1xuICBwYWRkaW5nOiAycmVtO1xuICBib3JkZXItcmFkaXVzOiAzcmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDVyZW07XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5tZXNzYWdlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cblxuLmhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn0iLCIkbWFpbl9jb2xvcjogI2ZhZjRlMTtcclxuJHNlY29uZGFyeV9tYWluX2NvbG9yOiNlNGNiN2Q7XHJcbiRlbXBoYXNpc19ibHVlOiAjN2ZkN2U4O1xyXG4kZW1waGFzaXNfcHVycGxlOiAjYTU3ZmU4O1xyXG4kYmxhY2s6IGJsYWNrO1xyXG4kZW1waGFzaXNfZ3JlZW46ICNiZGUzNjY7XHJcbiRmb2N1c19jb2xvcjogI0ZGRENFMDtcclxuJHRpdGxlX2NvbG9yOiAjNjk0ZjEwO1xyXG4kZW1waGFzaXNfcmVkOiByZWQiXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.displayMessage = true;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(event) {}
      }, {
        key: "closeMessage",
        value: function closeMessage() {
          this.displayMessage = false;
        }
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _palindrom_editor_palindrom_editor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./palindrom-editor/palindrom-editor.component */
    "./src/app/palindrom-editor/palindrom-editor.component.ts");
    /* harmony import */


    var _letter_box_letter_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./letter-box/letter-box.component */
    "./src/app/letter-box/letter-box.component.ts");
    /* harmony import */


    var _pivot_letter_pivot_letter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pivot-letter/pivot-letter.component */
    "./src/app/pivot-letter/pivot-letter.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _text_text_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./text/text.component */
    "./src/app/text/text.component.ts");
    /* harmony import */


    var _common_services_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./common/services/constants */
    "./src/app/common/services/constants.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _palindrom_editor_palindrom_editor_component__WEBPACK_IMPORTED_MODULE_5__["PalindromEditorComponent"], _letter_box_letter_box_component__WEBPACK_IMPORTED_MODULE_6__["LetterBoxComponent"], _pivot_letter_pivot_letter_component__WEBPACK_IMPORTED_MODULE_7__["PivotLetterComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"], _text_text_component__WEBPACK_IMPORTED_MODULE_11__["TextComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeModule"]],
      providers: [_common_services_constants__WEBPACK_IMPORTED_MODULE_12__["ConstantsService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/common/services/constants.ts":
  /*!**********************************************!*\
    !*** ./src/app/common/services/constants.ts ***!
    \**********************************************/

  /*! exports provided: ConstantsService */

  /***/
  function srcAppCommonServicesConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConstantsService", function () {
      return ConstantsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ConstantsService = function ConstantsService() {
      _classCallCheck(this, ConstantsService);

      this.baseAppUrl = 'http://localhost:3000/';
    };

    ConstantsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ConstantsService);
    /***/
  },

  /***/
  "./src/app/common/services/services.ts":
  /*!*********************************************!*\
    !*** ./src/app/common/services/services.ts ***!
    \*********************************************/

  /*! exports provided: PalindromSection, ServicesService */

  /***/
  function srcAppCommonServicesServicesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PalindromSection", function () {
      return PalindromSection;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicesService", function () {
      return ServicesService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PalindromSection;

    (function (PalindromSection) {
      PalindromSection["Left"] = "left";
      PalindromSection["Right"] = "right";
      PalindromSection["Pivot"] = "pivot-input";
    })(PalindromSection || (PalindromSection = {}));

    var ServicesService =
    /*#__PURE__*/
    function () {
      function ServicesService() {
        _classCallCheck(this, ServicesService);

        this.punctionationRegex = /(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)/;
        this.latinLettersRegex = /^[A-Za-z]+$/;
        this.hebrewLettersRegex = "^[א-ת]+$";
        this.completeText = "";
      }

      _createClass(ServicesService, [{
        key: "isLetterVerification",
        value: function isLetterVerification(character) {
          return character.match(this.latinLettersRegex) || character.match(this.hebrewLettersRegex);
        }
      }, {
        key: "setCursorPosition",
        value: function setCursorPosition(currEl, caretPos) {
          if (currEl.setSelectionRange) {
            currEl.focus();
            currEl.setSelectionRange(caretPos, caretPos); // IE8 and below
          } else if (currEl.createTextRange) {
            var range = currEl.createTextRange();
            range.collapse(true);
            range.moveEnd("character", caretPos);
            range.moveStart("character", caretPos);
            range.select();
          }
        }
      }, {
        key: "setCompleteText",
        value: function setCompleteText(text) {
          this.completeText = text;
        }
      }]);

      return ServicesService;
    }();

    ServicesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], ServicesService);
    /***/
  },

  /***/
  "./src/app/footer/footer.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/footer/footer.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".footer {\n  border-top: 3px solid #7fd7e8;\n  height: 10rem;\n  width: 100vw;\n  position: absolute;\n  bottom: 0;\n}\n@media (min-width: 700px) {\n  .footer {\n    visibility: hidden;\n  }\n}\n.footer .portfolio-icons-container {\n  width: 8rem;\n  margin-right: 5rem;\n  float: right;\n  margin-top: 1rem;\n}\n.footer .portfolio-icons-container .portfolio-icons {\n  width: 3rem;\n  height: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0M6XFxVc2Vyc1xcQXJpZWxcXERvY3VtZW50c1xcUHJvZ3JhbW1pbmcgcHJvamVjdHNcXHBhbGluZHJvbWVyL3NyY1xcYXBwXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNGSjtBREdJO0VBTko7SUFPUSxrQkFBQTtFQ0FOO0FBQ0Y7QURDSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NSO0FEQVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0VaIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3Njc3MvdmFyaWFibGVzLnNjc3MnO1xyXG5AaW1wb3J0ICcuLi8uLi9zY3NzL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi5mb290ZXJ7XHJcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgJGVtcGhhc2lzX2JsdWU7XHJcbiAgICBoZWlnaHQ6IDEwcmVtO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgLnBvcnRmb2xpby1pY29ucy1jb250YWluZXJ7XHJcbiAgICAgICAgd2lkdGg6IDhyZW07XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgIC5wb3J0Zm9saW8taWNvbnN7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzcmVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDNyZW07ICBcclxuICAgICAgICB9ICAgXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4gICAiLCIuZm9vdGVyIHtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICM3ZmQ3ZTg7XG4gIGhlaWdodDogMTByZW07XG4gIHdpZHRoOiAxMDB2dztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcbiAgLmZvb3RlciB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG59XG4uZm9vdGVyIC5wb3J0Zm9saW8taWNvbnMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDhyZW07XG4gIG1hcmdpbi1yaWdodDogNXJlbTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuLmZvb3RlciAucG9ydGZvbGlvLWljb25zLWNvbnRhaW5lciAucG9ydGZvbGlvLWljb25zIHtcbiAgd2lkdGg6IDNyZW07XG4gIGhlaWdodDogM3JlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _common_services_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../common/services/services */
    "./src/app/common/services/services.ts");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent(services) {
        _classCallCheck(this, FooterComponent);

        this.services = services;
        this.changeScreenDirection = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "switchScreenDirection",
        value: function switchScreenDirection(isRighToLeft) {
          this.changeScreenDirection.emit({
            isRightToLeft: isRighToLeft
          });
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent.ctorParameters = function () {
      return [{
        type: _common_services_services__WEBPACK_IMPORTED_MODULE_2__["ServicesService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FooterComponent.prototype, "isRightToLeft", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], FooterComponent.prototype, "changeScreenDirection", void 0);
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/footer/footer.component.scss")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/letter-box/letter-box.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/letter-box/letter-box.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLetterBoxLetterBoxComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".letter-box {\n  display: inline-block;\n  position: relative;\n  border: none;\n}\n.letter-box:focus {\n  border: 3px solid #FFDCE0;\n  outline: none;\n  text-shadow: 0 0 0 red;\n  border-radius: 1rem;\n}\n.punctuation {\n  margin-right: 2px;\n  margin-left: 0px;\n  border-bottom: 2px solid #7fd7e8;\n}\n.space {\n  margin-right: 2px;\n  margin-left: 2px;\n  display: block;\n  border-bottom: 2px solid #7fd7e8;\n}\n.letter {\n  margin-right: 2px;\n  margin-left: 2px;\n  border: 2px solid #7fd7e8;\n  border-radius: 1rem;\n}\n.hidden {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGV0dGVyLWJveC9DOlxcVXNlcnNcXEFyaWVsXFxEb2N1bWVudHNcXFByb2dyYW1taW5nIHByb2plY3RzXFxwYWxpbmRyb21lci9zcmNcXGFwcFxcbGV0dGVyLWJveFxcbGV0dGVyLWJveC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGV0dGVyLWJveC9sZXR0ZXItYm94LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNESjtBREVJO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0FSO0FESUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUNESjtBRE1BO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtBQ0hKO0FEU0E7RUFFSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ1BKO0FEWUE7RUFDSSxrQkFBQTtBQ1RKIiwiZmlsZSI6InNyYy9hcHAvbGV0dGVyLWJveC9sZXR0ZXItYm94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vc2Nzcy92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4ubGV0dGVyLWJveHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgIFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgJGZvY3VzX2NvbG9yO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAwICRlbXBoYXNpc19yZWQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgICAgfVxyXG59XHJcblxyXG4ucHVuY3R1YXRpb257XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcclxuICAgIG1hcmdpbi1sZWZ0OjBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkZW1waGFzaXNfYmx1ZTtcclxuXHJcbn1cclxuXHJcblxyXG4uc3BhY2V7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcclxuICAgIG1hcmdpbi1sZWZ0OjJweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLWJvdHRvbToycHggc29saWQgJGVtcGhhc2lzX2JsdWU7XHJcblxyXG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGhvdHBpbms7XHJcbn0gICAgXHJcblxyXG5cclxuLmxldHRlcntcclxuICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBkYXJrYmx1ZTtcclxuICAgIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6MnB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgJGVtcGhhc2lzX2JsdWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG5cclxuXHJcbn1cclxuXHJcbi5oaWRkZW57XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn0iLCIubGV0dGVyLWJveCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IG5vbmU7XG59XG4ubGV0dGVyLWJveDpmb2N1cyB7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNGRkRDRTA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtc2hhZG93OiAwIDAgMCByZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG59XG5cbi5wdW5jdHVhdGlvbiB7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzdmZDdlODtcbn1cblxuLnNwYWNlIHtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzdmZDdlODtcbn1cblxuLmxldHRlciB7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjN2ZkN2U4O1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xufVxuXG4uaGlkZGVuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/letter-box/letter-box.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/letter-box/letter-box.component.ts ***!
    \****************************************************/

  /*! exports provided: LetterBoxComponent */

  /***/
  function srcAppLetterBoxLetterBoxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LetterBoxComponent", function () {
      return LetterBoxComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _common_services_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../common/services/services */
    "./src/app/common/services/services.ts");

    var charTypes;

    (function (charTypes) {
      charTypes["Letter"] = "letter";
      charTypes["Punctuation"] = "punctuation";
      charTypes["Space"] = "space";
    })(charTypes || (charTypes = {}));

    var LetterBoxComponent =
    /*#__PURE__*/
    function () {
      function LetterBoxComponent(services) {
        _classCallCheck(this, LetterBoxComponent);

        this.services = services;
        this.currChar = "";
        this.typeOfChar = charTypes.Letter;
        this.character = "";
        this.side = "";
        this.characterChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.backspace = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.newUserInput = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.moveFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.characterAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.replaceLetter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deletePreviousChar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deleteNextChar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(LetterBoxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.assignCharacterType();
          this.currChar = this.character;

          if (this.side === "left") {
            this.side = _common_services_services__WEBPACK_IMPORTED_MODULE_2__["PalindromSection"].Left;
          } else this.side = _common_services_services__WEBPACK_IMPORTED_MODULE_2__["PalindromSection"].Right; // this.currEl = document.getElementById(this.side+this.index);

        }
      }, {
        key: "handleClick",
        value: function handleClick() {
          var currEl = event.target;
          this.services.setCursorPosition(currEl, 1);
        }
      }, {
        key: "handleKeyup",
        value: function handleKeyup(event) {
          event.preventDefault();
          var currEl = event.target;
          this.services.setCursorPosition(currEl, 1);

          if (event.shiftKey && (event.keyCode === 37 || event.keyCode === 39)) {
            return;
          } else if (event.keyCode === 37 || event.keyCode === 39) {
            this.moveFocus.emit({
              keyCode: event.keyCode,
              side: this.side,
              letterIdx: this.index
            }); // 8 is backspace
          } else if (event.keyCode === 8 || event.key === "Backspace") {
            this.onBackSpace(this.side);
          } else if (event.keyCode === 46 || event.key === "Delete") {
            this.deleteChar(this.side);
          } else if (event.keyCode === 16 || event.keyCode === 20 || event.keyCode === 13 || event.keyCode === 17) {
            return;
          } else if (this.character.length === 2) {
            this.characterAdded.emit({
              newChar: this.character.charAt(1),
              oldChar: this.currChar,
              idx: this.index
            });
            this.character = this.character.charAt(0);
            this.currChar = this.character.charAt(0);
          } else if (this.character.length === 1) {
            this.characterChanged.emit({
              prevChar: this.currChar,
              newChar: this.character,
              letterIdx: this.index
            });
            this.currChar = this.character;
          }
        }
      }, {
        key: "assignCharacterType",
        value: function assignCharacterType() {
          var isLetter = this.services.isLetterVerification(this.character);

          if (isLetter) {
            this.typeOfChar = charTypes.Letter;
          } else if (this.character === " ") {
            this.typeOfChar = charTypes.Space;
          } else {
            this.typeOfChar = charTypes.Punctuation;
          }
        }
      }, {
        key: "onBackSpace",
        value: function onBackSpace(side) {
          // event.preventDefault();
          console.log("event onBackSpace", event);

          if (this.currChar.length <= 1) {
            this.backspace.emit({
              letterIdx: this.index,
              character: this.currChar
            });
            return;
          } else if (this.currChar.length > 1) {
            this.replaceLetter.emit({
              newChar: this.character,
              letterIdx: this.index,
              side: side
            });
            this.currChar = this.character;
            return;
          }
        }
      }, {
        key: "deleteChar",
        value: function deleteChar(side) {
          if (this.character.length <= 1) {
            this.delete.emit({
              letterIdx: this.index,
              character: this.currChar
            });
          } else if (this.character.length > 1) {
            this.replaceLetter.emit({
              newChar: this.character,
              letterIdx: this.index,
              side: side
            });
            this.currChar = this.character;
          }
        }
      }]);

      return LetterBoxComponent;
    }();

    LetterBoxComponent.ctorParameters = function () {
      return [{
        type: _common_services_services__WEBPACK_IMPORTED_MODULE_2__["ServicesService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LetterBoxComponent.prototype, "character", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LetterBoxComponent.prototype, "side", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LetterBoxComponent.prototype, "index", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], LetterBoxComponent.prototype, "characterChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], LetterBoxComponent.prototype, "backspace", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], LetterBoxComponent.prototype, "newUserInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], LetterBoxComponent.prototype, "moveFocus", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], LetterBoxComponent.prototype, "characterAdded", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], LetterBoxComponent.prototype, "delete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], LetterBoxComponent.prototype, "replaceLetter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], LetterBoxComponent.prototype, "deletePreviousChar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], LetterBoxComponent.prototype, "deleteNextChar", void 0);
    LetterBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-letter-box",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./letter-box.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/letter-box/letter-box.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./letter-box.component.scss */
      "./src/app/letter-box/letter-box.component.scss")).default]
    })], LetterBoxComponent); //TODO: read about preventDefault()
    //TODO: https://stackoverflow.com/questions/35105374/how-to-force-a-components-re-rendering-in-angular-2
    //fix CSS
    //support for punctation and spaces
    //Support for deleting puncuation
    //collapse pivot:
    // add to github pages
    //Add a services page

    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/navbar/navbar.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavbarNavbarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".navbar {\n  height: 10rem;\n  border-bottom: 3px solid #7fd7e8;\n  text-align: center;\n  position: relative;\n}\n.navbar .menu-items {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 50%;\n  height: 30%;\n  margin: auto;\n  width: 100%;\n}\n.navbar .menu-items .title {\n  display: inline;\n}\n.navbar .portfolio-icons-container {\n  float: right;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-right: 5rem;\n}\n@media screen and (max-width: 700px) {\n  .navbar .portfolio-icons-container {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL0M6XFxVc2Vyc1xcQXJpZWxcXERvY3VtZW50c1xcUHJvZ3JhbW1pbmcgcHJvamVjdHNcXHBhbGluZHJvbWVyL3NyY1xcYXBwXFxuYXZiYXJcXG5hdmJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNERjtBREdFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0RKO0FERUk7RUFDRSxlQUFBO0FDQU47QURJRTtFQUNFLFlBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxrQkFBQTtBQ0ZKO0FER0k7RUFKRjtJQUtJLGFBQUE7RUNBSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3Njc3MvdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLm5hdmJhciB7XHJcbiAgaGVpZ2h0OiAxMHJlbTtcclxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgJGVtcGhhc2lzX2JsdWU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgLm1lbnUtaXRlbXMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMzAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAudGl0bGV7XHJcbiAgICAgIGRpc3BsYXk6aW5saW5lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnBvcnRmb2xpby1pY29ucy1jb250YWluZXIge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIubmF2YmFyIHtcbiAgaGVpZ2h0OiAxMHJlbTtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICM3ZmQ3ZTg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm5hdmJhciAubWVudS1pdGVtcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDMwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbn1cbi5uYXZiYXIgLm1lbnUtaXRlbXMgLnRpdGxlIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuLm5hdmJhciAucG9ydGZvbGlvLWljb25zLWNvbnRhaW5lciB7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXJnaW4tcmlnaHQ6IDVyZW07XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAubmF2YmFyIC5wb3J0Zm9saW8taWNvbnMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _common_services_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../common/services/services */
    "./src/app/common/services/services.ts");

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent(services) {
        _classCallCheck(this, NavbarComponent);

        this.services = services;
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ctorParameters = function () {
      return [{
        type: _common_services_services__WEBPACK_IMPORTED_MODULE_2__["ServicesService"]
      }];
    };

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.scss */
      "./src/app/navbar/navbar.component.scss")).default]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/palindrom-editor/palindrom-editor.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/palindrom-editor/palindrom-editor.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPalindromEditorPalindromEditorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".palindrom-container {\n  width: 80vw;\n  padding: 50px;\n  display: flex;\n  flex-wrap: wrap;\n  margin: auto;\n  margin-top: 5rem;\n  padding: 1rem;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  justify-content: center;\n}\n\n.rtl {\n  direction: rtl;\n}\n\n.lngDirectionbtn {\n  border-radius: 1rem;\n  background-color: #faf4e1;\n  font-size: 2rem;\n  height: 4rem;\n  border: 2px solid #a57fe8;\n  padding: 1rem;\n  float: right;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFsaW5kcm9tLWVkaXRvci9DOlxcVXNlcnNcXEFyaWVsXFxEb2N1bWVudHNcXFByb2dyYW1taW5nIHByb2plY3RzXFxwYWxpbmRyb21lci9zcmNcXGFwcFxccGFsaW5kcm9tLWVkaXRvclxccGFsaW5kcm9tLWVkaXRvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFsaW5kcm9tLWVkaXRvci9wYWxpbmRyb20tZWRpdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSx1QkFBQTtBQ0RGOztBRElBO0VBQ0UsY0FBQTtBQ0RGOztBRElBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL3BhbGluZHJvbS1lZGl0b3IvcGFsaW5kcm9tLWVkaXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zY3NzL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG4ucGFsaW5kcm9tLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDgwdnc7XHJcbiAgcGFkZGluZzogNTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogNXJlbTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ydGwge1xyXG4gIGRpcmVjdGlvbjogcnRsO1xyXG59XHJcblxyXG4ubG5nRGlyZWN0aW9uYnRuIHtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWY0ZTE7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGhlaWdodDogNHJlbTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjYTU3ZmU4O1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuIiwiLnBhbGluZHJvbS1jb250YWluZXIge1xuICB3aWR0aDogODB2dztcbiAgcGFkZGluZzogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDVyZW07XG4gIHBhZGRpbmc6IDFyZW07XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucnRsIHtcbiAgZGlyZWN0aW9uOiBydGw7XG59XG5cbi5sbmdEaXJlY3Rpb25idG4ge1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmNGUxO1xuICBmb250LXNpemU6IDJyZW07XG4gIGhlaWdodDogNHJlbTtcbiAgYm9yZGVyOiAycHggc29saWQgI2E1N2ZlODtcbiAgcGFkZGluZzogMXJlbTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/palindrom-editor/palindrom-editor.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/palindrom-editor/palindrom-editor.component.ts ***!
    \****************************************************************/

  /*! exports provided: PalindromEditorComponent */

  /***/
  function srcAppPalindromEditorPalindromEditorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PalindromEditorComponent", function () {
      return PalindromEditorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _common_services_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../common/services/services */
    "./src/app/common/services/services.ts");

    var PalindromEditorComponent =
    /*#__PURE__*/
    function () {
      function PalindromEditorComponent(services) {
        _classCallCheck(this, PalindromEditorComponent);

        this.services = services;
        this.lettersLeft = ['t', 'a', 'c'];
        this.lettersRight = ['c', 'a', 't'];
        this.isRightToLeft = false;
        this.doneTypingInterval = 1000;
      }

      _createClass(PalindromEditorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.pivotElement = document.getElementById(_common_services_services__WEBPACK_IMPORTED_MODULE_2__["PalindromSection"].Pivot);
          this.pivotElement.focus();
          this.services.setCompleteText('this is a completeText');
          this.palindromContainerEl = document.getElementById('palindrom-container');
        }
      }, {
        key: "onDeleteNextChar",
        value: function onDeleteNextChar($event) {
          if ($event.side === _common_services_services__WEBPACK_IMPORTED_MODULE_2__["PalindromSection"].Left) {
            this.deleteChar(this.lettersRight, this.lettersLeft, $event.letterIdx, this.lettersLeft[$event.letterIdx]);
          } else {
            this.deleteChar(this.lettersLeft, this.lettersRight, $event.letterIdx, this.lettersRight[$event.letterIdx]);
          }
        }
      }, {
        key: "onDeletePreviousChar",
        value: function onDeletePreviousChar($event) {
          if ($event.side === _common_services_services__WEBPACK_IMPORTED_MODULE_2__["PalindromSection"].Left) {
            this.deleteChar(this.lettersRight, this.lettersLeft, $event.letterIdx, this.lettersLeft[$event.letterIdx]);
          } else {
            this.deleteChar(this.lettersLeft, this.lettersRight, $event.letterIdx, this.lettersRight[$event.letterIdx]);
          }
        }
      }, {
        key: "switchTextDirection",
        value: function switchTextDirection(isRightToLeft) {
          this.isRightToLeft = isRightToLeft;
        }
      }, {
        key: "onAddCharRight",
        value: function onAddCharRight($event) {
          // setTimeout(() => this.focusOnNextPreviousElement(
          //   PalindromSection.Right,
          //   $event.idx,
          //   true,
          //   1,
          // ), 1000);
          this.addNewChar($event.oldChar, $event.newChar, this.lettersRight, this.lettersLeft, $event.idx);
          this.focusOnNextPreviousElement(_common_services_services__WEBPACK_IMPORTED_MODULE_2__["PalindromSection"].Right, $event.idx, true, 1);
        }
      }, {
        key: "onAddCharLeft",
        value: function onAddCharLeft($event) {
          this.focusOnNextPreviousElement(_common_services_services__WEBPACK_IMPORTED_MODULE_2__["PalindromSection"].Left, $event.idx, true, 1, this.lettersLeft.length);
          this.addNewChar($event.oldChar, $event.newChar, this.lettersLeft, this.lettersRight, $event.idx);
        }
      }, {
        key: "onCharacterChangedRight",
        value: function onCharacterChangedRight($event) {
          this.replaceLetter(this.lettersLeft, this.lettersRight, $event.letterIdx, $event.prevChar, $event.newChar);
        }
      }, {
        key: "onCharacterChangedLeft",
        value: function onCharacterChangedLeft($event) {
          this.replaceLetter(this.lettersRight, this.lettersLeft, $event.letterIdx, $event.prevChar, $event.newChar);
        }
      }, {
        key: "onNewCharFromPivot",
        value: function onNewCharFromPivot($event) {
          this.lettersRight.unshift($event.newChar);

          if (this.services.isLetterVerification($event.newChar)) {
            this.lettersLeft.push($event.newChar);
          }
        }
      }, {
        key: "moveFocus",
        value: function moveFocus($event) {
          if ($event.keyCode === 39) {
            this.moveFocusRight($event.side, $event.letterIdx, 1);
          } else {
            this.moveFocusLeft($event.side, $event.letterIdx);
          }
        }
        /*HELPERFUNCTIONS */

      }, {
        key: "moveFocusRight",
        value: function moveFocusRight(side, letterIdx) {
          var isArrow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

          if (this.lettersRight.length === 0 && side === _common_services_services__WEBPACK_IMPORTED_MODULE_2__["PalindromSection"].Right) {
            this.pivotElement.focus();
          } else if (this.lettersRight.length === 1 && side === _common_services_services__WEBPACK_IMPORTED_MODULE_2__["PalindromSection"].Right) {
            document.getElementById('right1').focus();
          } else if (this.lettersLeft.length === 1 && side === _common_services_services__WEBPACK_IMPORTED_MODULE_2__["PalindromSection"].Left) {
            document.getElementById('left1').focus();
          } else if (side === _common_services_services__WEBPACK_IMPORTED_MODULE_2__["PalindromSection"].Right && (letterIdx === this.lettersRight.length || letterIdx === this.lettersRight.length - 1 && isArrow)) {
            this.focusOnNextPreviousElement(_common_services_services__WEBPACK_IMPORTED_MODULE_2__["PalindromSection"].Left, 0, true, 0); // var el =  document.getElementById('left1');
            //  el.focus();
          } else if (side === _common_services_services__WEBPACK_IMPORTED_MODULE_2__["PalindromSection"].Left && letterIdx === this.lettersLeft.length - 1) {
            this.pivotElement.focus();
          } else if (side === _common_services_services__WEBPACK_IMPORTED_MODULE_2__["PalindromSection"].Pivot) {
            document.getElementById('right0').focus();
          } else if (this.lettersLeft.length === 0) {
            this.pivotElement.focus();
          } else {
            this.focusOnNextPreviousElement(side, letterIdx, true, isArrow);
          }
        }
      }, {
        key: "moveFocusLeft",
        value: function moveFocusLeft(side, letterIdx) {
          if (side === _common_services_services__WEBPACK_IMPORTED_MODULE_2__["PalindromSection"].Left && letterIdx === 0 && this.lettersRight.length > 0) {
            document.getElementById("".concat(_common_services_services__WEBPACK_IMPORTED_MODULE_2__["PalindromSection"].Right).concat(this.lettersRight.length - 1)).focus();
          } else if (side === _common_services_services__WEBPACK_IMPORTED_MODULE_2__["PalindromSection"].Right && letterIdx === 0) {
            this.pivotElement.focus();
          } else if (side === _common_services_services__WEBPACK_IMPORTED_MODULE_2__["PalindromSection"].Pivot) {
            document.getElementById("".concat(_common_services_services__WEBPACK_IMPORTED_MODULE_2__["PalindromSection"].Left).concat(this.lettersLeft.length - 1)).focus();
          } else if (this.lettersRight.length > 0 || this.lettersLeft.length > 0) {
            this.focusOnNextPreviousElement(side, letterIdx, false, -1);
          } else {
            this.pivotElement.focus();
          }
        }
      }, {
        key: "onBackspaceLeft",
        value: function onBackspaceLeft($event) {
          this.deleteChar(this.lettersRight, this.lettersLeft, $event.letterIdx, $event.character);

          if ($event.letterIdx === 0 && this.lettersLeft.length >= 1) {
            document.getElementById('left1').focus();
            return;
          }

          this.moveFocusLeft(_common_services_services__WEBPACK_IMPORTED_MODULE_2__["PalindromSection"].Left, $event.letterIdx);
          console.log("last print out", this.lettersRight, this.lettersLeft);
        }
      }, {
        key: "onBackspaceRight",
        value: function onBackspaceRight($event) {
          this.deleteChar(this.lettersLeft, this.lettersRight, $event.letterIdx, $event.character);
          this.moveFocusLeft(_common_services_services__WEBPACK_IMPORTED_MODULE_2__["PalindromSection"].Right, $event.letterIdx);
        }
      }, {
        key: "deleteRight",
        value: function deleteRight($event) {
          this.deleteChar(this.lettersLeft, this.lettersRight, $event.letterIdx, $event.character);
          this.moveFocusRight(_common_services_services__WEBPACK_IMPORTED_MODULE_2__["PalindromSection"].Right, $event.letterIdx, 0);
        }
      }, {
        key: "deleteLeft",
        value: function deleteLeft($event) {
          this.deleteChar(this.lettersRight, this.lettersLeft, $event.letterIdx, $event.character);
          this.moveFocusRight(_common_services_services__WEBPACK_IMPORTED_MODULE_2__["PalindromSection"].Left, $event.letterIdx);
        }
      }, {
        key: "deleteFromPivot",
        value: function deleteFromPivot() {
          if (this.lettersRight.length > 0) {
            this.deleteChar(this.lettersLeft, this.lettersRight, 0, this.lettersRight[0]);
            this.pivotElement.focus();
          }
        }
      }, {
        key: "backspaceFromPivot",
        value: function backspaceFromPivot() {
          if (this.lettersLeft.length > 0) {
            this.deleteChar(this.lettersRight, this.lettersLeft, this.lettersLeft.length - 1, this.lettersLeft[this.lettersLeft.length - 1]);
            this.pivotElement.focus();
          }
        }
      }, {
        key: "getIdxFromLetterOnOtherSide",
        value: function getIdxFromLetterOnOtherSide(char, arr1, arr2, idx2) {
          console.log("getIdxFromLetterOnOtherSide char, arr1, arr2, idx2", char, arr1, arr2, idx2);
          var letterIdx = this.countLetterUntilIndex(idx2, char, arr2);
          console.log("letterIdx of deleted letter", letterIdx);
          var idx1 = this.findIndexOnOppositeSide(arr1, char, letterIdx);
          console.log("ipposide id", idx1);
          return idx1;
        }
      }, {
        key: "focusOnNextPreviousElement",
        value: function focusOnNextPreviousElement(side, idx, waitForIt, backOrForward) {
          var arrLength = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
          var nextLetterBox = document.getElementById(side + (idx + backOrForward));

          if (nextLetterBox && !waitForIt) {
            nextLetterBox.focus();
          } else if (waitForIt) {
            var checkExist = setInterval(function () {
              nextLetterBox = document.getElementById(side + (idx + backOrForward));

              if (nextLetterBox) {
                nextLetterBox.focus();
                clearInterval(checkExist);
              }
            }, 100);
          } else return false;
        }
      }, {
        key: "addNewChar",
        value: function addNewChar(oldChar, newChar, alteredArr, oppositeArr, idx2) {
          this.replaceLetter(oppositeArr, alteredArr, idx2, oldChar, newChar);
          var isLetter = this.services.isLetterVerification(oldChar);
          alteredArr.splice(idx2, 0, oldChar);

          if (isLetter) {
            var idx1 = this.getIdxFromLetterOnOtherSide(newChar, oppositeArr, alteredArr, idx2);
            oppositeArr.splice(idx1 + 1, 0, oldChar);
          }
        }
      }, {
        key: "deleteChar",
        value: function deleteChar(arr1, arr2, idx2, newChar) {
          var idx2Exists = this.verifyIdx(arr2, idx2);

          if (idx2Exists) {
            var isLetter = this.services.isLetterVerification(newChar);

            if (isLetter) {
              var idx1 = this.getIdxFromLetterOnOtherSide(newChar, arr1, arr2, idx2);
              var idx1Exists = this.verifyIdx(arr1, idx1);

              if (idx1Exists) {
                arr1.splice(idx1, 1);
              }
            }

            arr2.splice(idx2, 1);
            console.log("arr1", arr1, "arr2", arr2);
          }
        }
      }, {
        key: "onEdit",
        value: function onEdit($event) {
          var side = $event.side;

          if (side === _common_services_services__WEBPACK_IMPORTED_MODULE_2__["PalindromSection"].Right) {
            this.replaceLetter(this.lettersLeft, this.lettersRight, $event.letterIdx, 'k', $event.newChar);
          } else if (side === _common_services_services__WEBPACK_IMPORTED_MODULE_2__["PalindromSection"].Left) {
            this.replaceLetter(this.lettersRight, this.lettersLeft, $event.letterIdx, 'k', $event.newChar);
          }

          var el = document.getElementById(side + $event.letterIdx);
          el.focus();
        }
      }, {
        key: "replaceLetter",
        value: function replaceLetter(arr1, arr2, idx2, oldChar, newChar) {
          var isLetterOld = this.services.isLetterVerification(oldChar);
          var isLetterNew = this.services.isLetterVerification(newChar);
          var idx1 = this.getIdxFromLetterOnOtherSide(oldChar, arr1, arr2, idx2);

          if (isLetterOld && isLetterNew) {
            arr1[idx1] = newChar;
            arr2[idx2] = newChar;
          } else if (isLetterNew && !isLetterOld) {
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
          } else if (!isLetterNew && isLetterOld) {
            arr2[idx2] = newChar;
            arr1.splice(idx1, 1);
          }
        }
      }, {
        key: "countLetterUntilIndex",
        value: function countLetterUntilIndex(idx, letter, arr) {
          console.log("countLetterUntilIndex", "idx", idx, arr);
          var letterIdx = 0;

          for (var i = 0; i <= idx; i++) {
            if (this.services.isLetterVerification(arr[i])) {
              letterIdx++;
            }
          }

          return letterIdx;
        }
      }, {
        key: "findIndexOnOppositeSide",
        value: function findIndexOnOppositeSide(lettersArr, letter, letterIdx) {
          console.log("findIndexOnOppositeSide", lettersArr, letterIdx);

          for (var i = lettersArr.length - 1; i >= 0; i--) {
            if (this.services.isLetterVerification(lettersArr[i])) {
              letterIdx--;
              console.log("yay findIndexOnOppositeSide");
            }

            if (letterIdx === 0) {
              return i;
            }
          }
        }
      }, {
        key: "verifyIdx",
        value: function verifyIdx(arr, idx) {
          return idx < arr.length;
        }
      }]);

      return PalindromEditorComponent;
    }();

    PalindromEditorComponent.ctorParameters = function () {
      return [{
        type: _common_services_services__WEBPACK_IMPORTED_MODULE_2__["ServicesService"]
      }];
    };

    PalindromEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-palindrom-editor',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./palindrom-editor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/palindrom-editor/palindrom-editor.component.html")).default,
      providers: [_common_services_services__WEBPACK_IMPORTED_MODULE_2__["ServicesService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./palindrom-editor.component.scss */
      "./src/app/palindrom-editor/palindrom-editor.component.scss")).default]
    })], PalindromEditorComponent);
    /***/
  },

  /***/
  "./src/app/pivot-letter/pivot-letter.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/pivot-letter/pivot-letter.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPivotLetterPivotLetterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".pivot-box {\n  border-radius: 1rem;\n  border: 3px solid #a57fe8;\n  margin-right: 2px;\n  margin-left: 2px;\n  background-color: #e4cb7d;\n}\n.pivot-box:focus {\n  border: 3px solid yellow;\n  outline: none;\n  text-shadow: 0 0 0 red;\n}\n.expanded {\n  cursor: text;\n}\n.collapsed {\n  width: 0px;\n  height: 60px;\n  padding: 0px;\n  border-color: #7fd7e8;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGl2b3QtbGV0dGVyL0M6XFxVc2Vyc1xcQXJpZWxcXERvY3VtZW50c1xcUHJvZ3JhbW1pbmcgcHJvamVjdHNcXHBhbGluZHJvbWVyL3NyY1xcYXBwXFxwaXZvdC1sZXR0ZXJcXHBpdm90LWxldHRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGl2b3QtbGV0dGVyL0M6XFxVc2Vyc1xcQXJpZWxcXERvY3VtZW50c1xcUHJvZ3JhbW1pbmcgcHJvamVjdHNcXHBhbGluZHJvbWVyL3NyY1xcc2Nzc1xcdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3Bpdm90LWxldHRlci9waXZvdC1sZXR0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQ1BvQjtBQ0t0QjtBRklFO0VBQ0Usd0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUVGSjtBRk1BO0VBQ0UsWUFBQTtBRUhGO0FGTUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxxQkN2QmM7RUR3QmQsZUFBQTtBRUhGIiwiZmlsZSI6InNyYy9hcHAvcGl2b3QtbGV0dGVyL3Bpdm90LWxldHRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3Njc3MvdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuXHJcbi5waXZvdC1ib3gge1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgYm9yZGVyOiAzcHggc29saWQgJGVtcGhhc2lzX3B1cnBsZTtcclxuICBtYXJnaW4tcmlnaHQ6IDJweDtcclxuICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnlfbWFpbl9jb2xvcjtcclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCB5ZWxsb3c7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAwICRlbXBoYXNpc19yZWQ7XHJcbiAgfVxyXG59XHJcblxyXG4uZXhwYW5kZWQge1xyXG4gIGN1cnNvcjogdGV4dDtcclxufVxyXG5cclxuLmNvbGxhcHNlZCB7XHJcbiAgd2lkdGg6IDBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGJvcmRlci1jb2xvcjogJGVtcGhhc2lzX2JsdWU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiIsIiRtYWluX2NvbG9yOiAjZmFmNGUxO1xyXG4kc2Vjb25kYXJ5X21haW5fY29sb3I6I2U0Y2I3ZDtcclxuJGVtcGhhc2lzX2JsdWU6ICM3ZmQ3ZTg7XHJcbiRlbXBoYXNpc19wdXJwbGU6ICNhNTdmZTg7XHJcbiRibGFjazogYmxhY2s7XHJcbiRlbXBoYXNpc19ncmVlbjogI2JkZTM2NjtcclxuJGZvY3VzX2NvbG9yOiAjRkZEQ0UwO1xyXG4kdGl0bGVfY29sb3I6ICM2OTRmMTA7XHJcbiRlbXBoYXNpc19yZWQ6IHJlZCIsIi5waXZvdC1ib3gge1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBib3JkZXI6IDNweCBzb2xpZCAjYTU3ZmU4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0Y2I3ZDtcbn1cbi5waXZvdC1ib3g6Zm9jdXMge1xuICBib3JkZXI6IDNweCBzb2xpZCB5ZWxsb3c7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtc2hhZG93OiAwIDAgMCByZWQ7XG59XG5cbi5leHBhbmRlZCB7XG4gIGN1cnNvcjogdGV4dDtcbn1cblxuLmNvbGxhcHNlZCB7XG4gIHdpZHRoOiAwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgcGFkZGluZzogMHB4O1xuICBib3JkZXItY29sb3I6ICM3ZmQ3ZTg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pivot-letter/pivot-letter.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pivot-letter/pivot-letter.component.ts ***!
    \********************************************************/

  /*! exports provided: PivotLetterComponent */

  /***/
  function srcAppPivotLetterPivotLetterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PivotLetterComponent", function () {
      return PivotLetterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _common_services_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../common/services/services */
    "./src/app/common/services/services.ts");

    var PivotLetterComponent =
    /*#__PURE__*/
    function () {
      function PivotLetterComponent(services) {
        _classCallCheck(this, PivotLetterComponent);

        this.services = services;
        this.prevChar = '';
        this.input = "o";
        this.pivotIsCollapsed = false;
        this.newUserInput = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.moveFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.backspace = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(PivotLetterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.prevChar = this.input;
          this.pivotEl = document.getElementById('pivot-input');
        }
      }, {
        key: "expand",
        value: function expand() {
          this.pivotIsCollapsed = false;
        }
      }, {
        key: "handleClick",
        value: function handleClick() {
          this.services.setCursorPosition(this.pivotEl, 1);
        }
      }, {
        key: "onUserInput",
        value: function onUserInput(event) {
          event.preventDefault();
          this.services.setCursorPosition(this.pivotEl, 1);
          var isOneCharacter = this.input.length === 1;

          if (event.keyCode === 16 || event.keyCode === 20 || event.keyCode === 13 || event.keyCode === 17) {
            return;
          } else if (event.keyCode === 37 || event.keyCode === 39) {
            this.moveFocus.emit({
              keyCode: event.keyCode,
              side: _common_services_services__WEBPACK_IMPORTED_MODULE_2__["PalindromSection"].Pivot,
              letterIdx: -1
            });
          } else if (event.keyCode === 8 || event.keyCode === 46) {
            if (!this.pivotIsCollapsed) {
              this.pivotIsCollapsed = true;
              this.input = "";
              this.prevChar = "";
            } else {
              if (event.keyCode === 8) {
                this.backspace.emit();
              } else {
                if (event.keyCode === 46) {
                  this.delete.emit();
                }
              }
            }
          } else if (isOneCharacter) {
            this.pivotIsCollapsed = false;
            event.preventDefault();
            this.prevChar = this.input;
            return;
          } else if (this.input.length === 2) {
            this.newUserInput.emit({
              newChar: this.prevChar
            });
            this.prevChar = this.input.charAt(1);
            this.input = this.input.charAt(1);
          }
        }
      }]);

      return PivotLetterComponent;
    }();

    PivotLetterComponent.ctorParameters = function () {
      return [{
        type: _common_services_services__WEBPACK_IMPORTED_MODULE_2__["ServicesService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], PivotLetterComponent.prototype, "newUserInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], PivotLetterComponent.prototype, "moveFocus", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], PivotLetterComponent.prototype, "backspace", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], PivotLetterComponent.prototype, "delete", void 0);
    PivotLetterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-pivot-letter",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pivot-letter.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pivot-letter/pivot-letter.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pivot-letter.component.scss */
      "./src/app/pivot-letter/pivot-letter.component.scss")).default]
    })], PivotLetterComponent);
    /***/
  },

  /***/
  "./src/app/text/text.component.scss":
  /*!******************************************!*\
    !*** ./src/app/text/text.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppTextTextComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".complete-text {\n  border: 5px solid #a57fe8;\n  border-radius: 1rem;\n  width: 75%;\n  margin-top: 10rem;\n  background-color: #faf4e1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGV4dC9DOlxcVXNlcnNcXEFyaWVsXFxEb2N1bWVudHNcXFByb2dyYW1taW5nIHByb2plY3RzXFxwYWxpbmRyb21lci9zcmNcXGFwcFxcdGV4dFxcdGV4dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGV4dC9DOlxcVXNlcnNcXEFyaWVsXFxEb2N1bWVudHNcXFByb2dyYW1taW5nIHByb2plY3RzXFxwYWxpbmRyb21lci9zcmNcXHNjc3NcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC90ZXh0L3RleHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJDVlc7QUNNYiIsImZpbGUiOiJzcmMvYXBwL3RleHQvdGV4dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3Njc3MvdmFyaWFibGVzLnNjc3MnO1xyXG5AaW1wb3J0ICcuLi8uLi9zY3NzL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcblxyXG5cclxuLmNvbXBsZXRlLXRleHQge1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkICRlbXBoYXNpc19wdXJwbGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICB3aWR0aDogNzUlO1xyXG4gIG1hcmdpbi10b3A6IDEwcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRtYWluX2NvbG9yO1xyXG59XHJcbiIsIiRtYWluX2NvbG9yOiAjZmFmNGUxO1xyXG4kc2Vjb25kYXJ5X21haW5fY29sb3I6I2U0Y2I3ZDtcclxuJGVtcGhhc2lzX2JsdWU6ICM3ZmQ3ZTg7XHJcbiRlbXBoYXNpc19wdXJwbGU6ICNhNTdmZTg7XHJcbiRibGFjazogYmxhY2s7XHJcbiRlbXBoYXNpc19ncmVlbjogI2JkZTM2NjtcclxuJGZvY3VzX2NvbG9yOiAjRkZEQ0UwO1xyXG4kdGl0bGVfY29sb3I6ICM2OTRmMTA7XHJcbiRlbXBoYXNpc19yZWQ6IHJlZCIsIi5jb21wbGV0ZS10ZXh0IHtcbiAgYm9yZGVyOiA1cHggc29saWQgI2E1N2ZlODtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luLXRvcDogMTByZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWY0ZTE7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/text/text.component.ts":
  /*!****************************************!*\
    !*** ./src/app/text/text.component.ts ***!
    \****************************************/

  /*! exports provided: TextComponent */

  /***/
  function srcAppTextTextComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextComponent", function () {
      return TextComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _common_services_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../common/services/services */
    "./src/app/common/services/services.ts");

    var TextComponent =
    /*#__PURE__*/
    function () {
      function TextComponent(services) {
        _classCallCheck(this, TextComponent);

        this.services = services;
      }

      _createClass(TextComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TextComponent;
    }();

    TextComponent.ctorParameters = function () {
      return [{
        type: _common_services_services__WEBPACK_IMPORTED_MODULE_2__["ServicesService"]
      }];
    };

    TextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-text',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./text.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/text/text.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./text.component.scss */
      "./src/app/text/text.component.scss")).default]
    })], TextComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Ariel\Documents\Programming projects\palindromer\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map