(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\user\Desktop\4ThePlayers\ThePlayers\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
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
    "J50X":
    /*!************************!*\
      !*** ./src/app/env.ts ***!
      \************************/

    /*! exports provided: GlobalEnv */

    /***/
    function J50X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GlobalEnv", function () {
        return GlobalEnv;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /*
        Generated class for the GlobalProvider provider.
      */


      var GlobalEnv = function GlobalEnv() {
        _classCallCheck(this, GlobalEnv);

        this.baseUri = "https://for-the-players.herokuapp.com"; //public baseUri: string = "http://localhost:3000";

        this.notificationsCounter = null;
        this.ticketUpdates = null;
        this.isLoading = false;
      };

      GlobalEnv = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], GlobalEnv);
      /***/
    },

    /***/
    "RDNO":
    /*!**************************************************!*\
      !*** ./src/app/interceptors/auth.interceptor.ts ***!
      \**************************************************/

    /*! exports provided: AuthInterceptor */

    /***/
    function RDNO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
        return AuthInterceptor;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");

      var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"].Storage;

      var AuthInterceptor = /*#__PURE__*/function () {
        function AuthInterceptor() {
          _classCallCheck(this, AuthInterceptor);
        }

        _createClass(AuthInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            if (!request.url.includes('/login')) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.handleAuth(request, next));
            }

            return next.handle(request);
          }
        }, {
          key: "handleAuth",
          value: function handleAuth(request, next) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var token;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return Storage.get({
                        key: "token"
                      });

                    case 2:
                      token = _context.sent;
                      request = request.clone({
                        setHeaders: {
                          'Authorization': "Bearer ".concat(token.value)
                        }
                      });
                      return _context.abrupt("return", next.handle(request).toPromise());

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
          }
        }]);

        return AuthInterceptor;
      }();

      AuthInterceptor.ctorParameters = function () {
        return [];
      };

      AuthInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthInterceptor);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/network/ngx */
      "kwrG");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _env__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./env */
      "J50X");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var jwt_decode__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! jwt-decode */
      "EjJx");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Plugins"].Storage;

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, network, router, http, authService, env) {
          var _this = this;

          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.network = network;
          this.router = router;
          this.http = http;
          this.authService = authService;
          this.env = env;
          this.userId = null;
          this.initializeApp();
          this.sideMenu(); //

          this.platform.ready().then(function () {
            var disconnected = false;

            _this.network.onDisconnect().subscribe(function () {
              alert("Per utilizzare l'app devi avere una connessione ad internet.");
              disconnected = true;
            });

            _this.network.onConnect().subscribe(function () {
              if (disconnected) {
                location.reload();
                disconnected = false;
              }
            });
          }); // disconnectSubscription.unsubscribe();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this2 = this;

            this.platform.ready().then(function () {
              _this2.statusBar.styleDefault();

              _this2.splashScreen.hide();
            });
            this.authService.getToken().then(function () {
              _this2.getInvites();

              _this2.getTickets();
            });
          }
        }, {
          key: "getInvites",
          value: function getInvites() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              var token, decodedToken, userId;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      console.log(new Date().toLocaleString() + " - getInvites");
                      _context2.next = 3;
                      return Storage.get({
                        key: "token"
                      }).then(function (data) {
                        if (data.value) {
                          return data.value;
                        }
                      });

                    case 3:
                      token = _context2.sent;

                      if (token) {
                        decodedToken = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_12__["default"])(token);
                        userId = decodedToken["id"];
                        this.userId = userId;
                        this.http.get(this.env.baseUri + "/users/".concat(userId)).subscribe(function (resp) {
                          if (resp && resp["user"].invites && resp["user"].invites.length) {
                            var count = 0;

                            for (var i = 0; i < resp["user"].invites.length; i++) {
                              if (resp["user"].invites[i].status == "PENDING") {
                                count++;
                              }
                            }

                            _this3.env.notificationsCounter = count;
                          } else {
                            _this3.env.notificationsCounter = 0;
                          }
                        }, function (error) {// Empty
                        });
                      }

                      if (!this.getInviteInterval) {
                        this.getInviteInterval = setInterval(this.getInvites.bind(this), 60000);
                      }

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getTickets",
          value: function getTickets() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this4 = this;

              var token, decodedToken, userId;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      console.log(new Date().toLocaleString() + " - getTickets");
                      _context3.next = 3;
                      return Storage.get({
                        key: "token"
                      }).then(function (data) {
                        if (data.value) {
                          return data.value;
                        }
                      });

                    case 3:
                      token = _context3.sent;

                      if (token) {
                        decodedToken = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_12__["default"])(token);
                        userId = decodedToken["id"];
                        this.userId = userId;
                        this.http.get(this.env.baseUri + "/tickets").subscribe(function (resp) {
                          var counterTickets = 0;

                          for (var i = 0; i < Object.keys(resp).length; i++) {
                            if (resp[i] && resp[i].status === 'NEW') {
                              counterTickets++;
                            }
                          }

                          _this4.env.ticketUpdates = counterTickets;

                          _this4.sideMenu();
                        }, function (error) {// Empty
                        });
                      }

                      if (!this.getTicketsInterval) {
                        this.getTicketsInterval = setInterval(this.getTickets.bind(this), 120000);
                      }

                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "sideMenu",
          value: function sideMenu() {
            this.navigate = [{
              title: "Home",
              url: "/home",
              icon: "home"
            }, {
              title: "Profilo",
              url: "/user-detail",
              icon: "game-controller"
            }, {
              title: "Inviti",
              url: "/invites",
              icon: "notifications",
              notificationsCount: this.env.notificationsCounter
            }, {
              title: "Tickets",
              url: "/user-tickets",
              icon: "alert-circle-sharp",
              ticketUpdates: this.env.ticketUpdates
            }, {
              title: "Logout",
              url: "/logout",
              icon: "exit"
            }];
          }
        }, {
          key: "openTicket",
          value: function openTicket() {
            this.router.navigateByUrl("/ticket");
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"]
        }, {
          type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__["Network"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]
        }, {
          type: _env__WEBPACK_IMPORTED_MODULE_9__["GlobalEnv"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-root",
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n  <ion-menu side=\"start\" menuId=\"first\" contentId=\"content1\">\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <ion-title>Menu</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content>\r\n      <ion-list *ngFor=\"let pages of navigate\">\r\n        <ion-menu-toggle auto-hide=\"true\">\r\n          <ion-item [routerLink]=\"pages.url\" routerDirection=\"forward\">\r\n            <ion-icon [name]=\"pages.icon\" slot=\"start\"></ion-icon>\r\n            <ion-badge\r\n              color=\"danger\"\r\n              class=\"badge-notifiche-menu\"\r\n              *ngIf=\"pages.notificationsCount\"\r\n            >\r\n              {{ pages.notificationsCount }}</ion-badge\r\n            >\r\n            <ion-badge\r\n              color=\"danger\"\r\n              class=\"badge-notifiche-menu left-65\"\r\n              *ngIf=\"pages.ticketUpdates\"\r\n            >\r\n              {{ this.env.ticketUpdates }}</ion-badge\r\n            >\r\n            {{ pages.title }}\r\n          </ion-item>\r\n        </ion-menu-toggle>\r\n      </ion-list>\r\n      <div style=\"text-align: center\">\r\n        <ion-title center>Main Sponsor</ion-title>\r\n        <img src=\"../assets/img/hydralogo.png\" style=\"width: 45vw\" /><br />\r\n        <a href=\"https://discord.gg/s9mRV5tUNY\"\r\n          ><img src=\"../assets/img/logodiscord.png\" style=\"width: 45vw\"\r\n        /></a>\r\n      </div>\r\n    </ion-content>\r\n  </ion-menu>\r\n  <ion-router-outlet id=\"content1\">\r\n    <div class=\"loading-wrapper\" *ngIf=\"this.env.isLoading\">\r\n      <ion-spinner name=\"dots\"></ion-spinner>\r\n      <br />\r\n      Caricamento in corso...\r\n    </div>\r\n    <div\r\n      class=\"ticket-button\"\r\n      *ngIf=\"this.authService.isLoggedIn\"\r\n      (click)=\"openTicket()\"\r\n    >\r\n      <i class=\"fas fa-exclamation\"></i>\r\n    </div>\r\n  </ion-router-outlet>\r\n</ion-app>\r\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _env__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./env */
      "J50X");
      /* harmony import */


      var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/network/ngx */
      "kwrG");
      /* harmony import */


      var _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./interceptors/auth.interceptor */
      "RDNO");
      /* harmony import */


      var _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/service-worker */
      "Jho9");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../environments/environment */
      "AytR");
      /* harmony import */


      var _ionic_native_in_app_purchase_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic-native/in-app-purchase/ngx */
      "F7eh");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__["ServiceWorkerModule"].register("ngsw-worker.js", {
          enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].production
        })],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_in_app_purchase_ngx__WEBPACK_IMPORTED_MODULE_15__["InAppPurchase"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }, _env__WEBPACK_IMPORTED_MODULE_10__["GlobalEnv"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_11__["Network"], {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
          useClass: _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__["AuthInterceptor"],
          multi: true
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "cT6d":
    /*!*************************************!*\
      !*** ./src/app/guard/auth.guard.ts ***!
      \*************************************/

    /*! exports provided: AuthGuard */

    /***/
    function cT6d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/auth.service */
      "lGQG");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router, authService) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
          this.authService = authService;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.authService.getToken();

                    case 2:
                      if (!this.authService.isLoggedIn) {
                        _context4.next = 4;
                        break;
                      }

                      return _context4.abrupt("return", true);

                    case 4:
                      // not logged in so redirect to login page with the return url
                      this.router.navigate(["/login"]);
                      return _context4.abrupt("return", false);

                    case 6:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      };

      AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
      })], AuthGuard);
      /***/
    },

    /***/
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["dUtr", "common", 0],
        "./ion-alert.entry.js": ["Q8AI", "common", 1],
        "./ion-app_8.entry.js": ["hgI1", "common", 2],
        "./ion-avatar_3.entry.js": ["CfoV", "common", 3],
        "./ion-back-button.entry.js": ["Nt02", "common", 4],
        "./ion-backdrop.entry.js": ["Q2Bp", 5],
        "./ion-button_2.entry.js": ["0Pbj", "common", 6],
        "./ion-card_5.entry.js": ["ydQj", "common", 7],
        "./ion-checkbox.entry.js": ["4fMi", "common", 8],
        "./ion-chip.entry.js": ["czK9", "common", 9],
        "./ion-col_3.entry.js": ["/CAe", 10],
        "./ion-datetime_3.entry.js": ["WgF3", "common", 11],
        "./ion-fab_3.entry.js": ["uQcF", "common", 12],
        "./ion-img.entry.js": ["wHD8", 13],
        "./ion-infinite-scroll_2.entry.js": ["2lz6", 14],
        "./ion-input.entry.js": ["ercB", "common", 15],
        "./ion-item-option_3.entry.js": ["MGMP", "common", 16],
        "./ion-item_8.entry.js": ["9bur", "common", 17],
        "./ion-loading.entry.js": ["cABk", "common", 18],
        "./ion-menu_3.entry.js": ["kyFE", "common", 19],
        "./ion-modal.entry.js": ["TvZU", "common", 20],
        "./ion-nav_2.entry.js": ["vnES", "common", 21],
        "./ion-popover.entry.js": ["qCuA", "common", 22],
        "./ion-progress-bar.entry.js": ["0tOe", "common", 23],
        "./ion-radio_2.entry.js": ["h11V", "common", 24],
        "./ion-range.entry.js": ["XGij", "common", 25],
        "./ion-refresher_2.entry.js": ["nYbb", "common", 26],
        "./ion-reorder_2.entry.js": ["smMY", "common", 27],
        "./ion-ripple-effect.entry.js": ["STjf", 28],
        "./ion-route_4.entry.js": ["k5eQ", "common", 29],
        "./ion-searchbar.entry.js": ["OR5t", "common", 30],
        "./ion-segment_2.entry.js": ["fSgp", "common", 31],
        "./ion-select_3.entry.js": ["lfGF", "common", 32],
        "./ion-slide_2.entry.js": ["5xYT", 33],
        "./ion-spinner.entry.js": ["nI0H", "common", 34],
        "./ion-split-pane.entry.js": ["NAQR", 35],
        "./ion-tab-bar_2.entry.js": ["knkW", "common", 36],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 37],
        "./ion-text.entry.js": ["ISmu", "common", 38],
        "./ion-textarea.entry.js": ["U7LX", "common", 39],
        "./ion-toast.entry.js": ["L3sA", "common", 40],
        "./ion-toggle.entry.js": ["IUOf", "common", 41],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "lGQG":
    /*!******************************************!*\
      !*** ./src/app/services/auth.service.ts ***!
      \******************************************/

    /*! exports provided: AuthService */

    /***/
    function lGQG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _env__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../env */
      "J50X");

      var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"].Storage;

      var AuthService = /*#__PURE__*/function () {
        function AuthService(http, router, env) {
          _classCallCheck(this, AuthService);

          this.http = http;
          this.router = router;
          this.env = env;
          this.isLoggedIn = false;
        }

        _createClass(AuthService, [{
          key: "login",
          value: function login(email, password) {
            var _this5 = this;

            return this.http.post(this.env.baseUri + "/auth/login", {
              email: email,
              password: password
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (token) {
              if (token['status'] === 'NOT_VERIFIED') {
                window.alert('Non hai ancora verificato il tuo account, controlla la tua email.');
                return;
              }

              Storage.set({
                key: "token",
                value: token["token"]
              }).then(function () {
                _this5.router.navigateByUrl("/home");
              }, function (error) {
                return console.error("Error storing item", error);
              });
              _this5.token = token;
              _this5.isLoggedIn = true;
              return token;
            }));
          }
        }, {
          key: "register",
          value: function register(userName, email, password) {
            return this.http.post(this.env.baseUri + "/auth/signup", {
              username: userName,
              email: email,
              password: password
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            Storage.remove({
              key: "token"
            });
            return true;
          }
        }, {
          key: "user",
          value: function user() {
            return this.http.get(this.env.baseUri + "auth/user").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (user) {
              return user;
            }));
          }
        }, {
          key: "getToken",
          value: function getToken() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this6 = this;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return Storage.get({
                        key: "token"
                      }).then(function (data) {
                        _this6.token = data.value;

                        if (_this6.token != null) {
                          _this6.isLoggedIn = true;
                        } else {
                          _this6.isLoggedIn = false;
                        }
                      }, function (error) {
                        _this6.token = null;
                        _this6.isLoggedIn = false;
                      });

                    case 2:
                      return _context5.abrupt("return", _context5.sent);

                    case 3:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5);
            }));
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _env__WEBPACK_IMPORTED_MODULE_6__["GlobalEnv"]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: "root"
      })], AuthService);
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./guard/auth.guard */
      "cT6d");

      var routes = [{
        path: "home",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | home-home-module */
          "home-home-module").then(__webpack_require__.bind(null,
          /*! ./home/home.module */
          "ct+p")).then(function (m) {
            return m.HomePageModule;
          });
        },
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
      }, {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      }, {
        path: "login",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | login-login-module */
          "login-login-module").then(__webpack_require__.bind(null,
          /*! ./login/login.module */
          "X3zk")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: "signup",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | signup-signup-module */
          [__webpack_require__.e("common"), __webpack_require__.e("signup-signup-module")]).then(__webpack_require__.bind(null,
          /*! ./signup/signup.module */
          "T9iC")).then(function (m) {
            return m.SignupPageModule;
          });
        }
      }, {
        path: "tournament-detail",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | tournament-detail-tournament-detail-module */
          [__webpack_require__.e("common"), __webpack_require__.e("tournament-detail-tournament-detail-module")]).then(__webpack_require__.bind(null,
          /*! ./tournament-detail/tournament-detail.module */
          "Okdo")).then(function (m) {
            return m.TournamentDetailPageModule;
          });
        }
      }, {
        path: "modal-page-create-team",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modal-page-create-team-modal-page-create-team-module */
          [__webpack_require__.e("common"), __webpack_require__.e("modal-page-create-team-modal-page-create-team-module")]).then(__webpack_require__.bind(null,
          /*! ./modal-page-create-team/modal-page-create-team.module */
          "z9CW")).then(function (m) {
            return m.ModalPageCreateTeamPageModule;
          });
        }
      }, {
        path: "modal-registration",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modal-registration-modal-registration-module */
          [__webpack_require__.e("common"), __webpack_require__.e("modal-registration-modal-registration-module")]).then(__webpack_require__.bind(null,
          /*! ./modal-registration/modal-registration.module */
          "YA4d")).then(function (m) {
            return m.ModalRegistrationPageModule;
          });
        }
      }, {
        path: "logout",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | logout-logout-module */
          "logout-logout-module").then(__webpack_require__.bind(null,
          /*! ./logout/logout.module */
          "q6at")).then(function (m) {
            return m.LogoutPageModule;
          });
        }
      }, {
        path: "game-detail",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | game-detail-game-detail-module */
          "game-detail-game-detail-module").then(__webpack_require__.bind(null,
          /*! ./game-detail/game-detail.module */
          "iv5H")).then(function (m) {
            return m.GameDetailPageModule;
          });
        }
      }, {
        path: "edit-profile",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | edit-profile-edit-profile-module */
          "edit-profile-edit-profile-module").then(__webpack_require__.bind(null,
          /*! ./edit-profile/edit-profile.module */
          "Wvzw")).then(function (m) {
            return m.ProfilePageModule;
          });
        }
      }, {
        path: "users",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | users-users-module */
          "users-users-module").then(__webpack_require__.bind(null,
          /*! ./users/users.module */
          "zrcO")).then(function (m) {
            return m.UsersPageModule;
          });
        }
      }, {
        path: "team-detail",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | team-detail-team-detail-module */
          "team-detail-team-detail-module").then(__webpack_require__.bind(null,
          /*! ./team-detail/team-detail.module */
          "k8s1")).then(function (m) {
            return m.TeamDetailPageModule;
          });
        }
      }, {
        path: "user-detail",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | user-detail-user-detail-module */
          "user-detail-user-detail-module").then(__webpack_require__.bind(null,
          /*! ./user-detail/user-detail.module */
          "Ov+x")).then(function (m) {
            return m.UserDetailPageModule;
          });
        }
      }, {
        path: "invites",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | invites-invites-module */
          "invites-invites-module").then(__webpack_require__.bind(null,
          /*! ./invites/invites.module */
          "QFw5")).then(function (m) {
            return m.InvitesPageModule;
          });
        }
      }, {
        path: "forgot-password",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | forgot-password-forgot-password-module */
          "forgot-password-forgot-password-module").then(__webpack_require__.bind(null,
          /*! ./forgot-password/forgot-password.module */
          "JgOp")).then(function (m) {
            return m.ForgotPasswordPageModule;
          });
        }
      }, {
        path: "reset-password",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | reset-password-reset-password-module */
          "reset-password-reset-password-module").then(__webpack_require__.bind(null,
          /*! ./reset-password/reset-password.module */
          "Rr42")).then(function (m) {
            return m.ResetPasswordPageModule;
          });
        }
      }, {
        path: 'ticket',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | ticket-ticket-module */
          "ticket-ticket-module").then(__webpack_require__.bind(null,
          /*! ./ticket/ticket.module */
          "ROBH")).then(function (m) {
            return m.TicketPageModule;
          });
        }
      }, {
        path: 'user-tickets',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | user-tickets-user-tickets-module */
          "user-tickets-user-tickets-module").then(__webpack_require__.bind(null,
          /*! ./user-tickets/user-tickets.module */
          "Xfli")).then(function (m) {
            return m.UserTicketsPageModule;
          });
        }
      }, {
        path: 'bracket-tournament',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | bracket-tournament-bracket-tournament-module */
          "bracket-tournament-bracket-tournament-module").then(__webpack_require__.bind(null,
          /*! ./bracket-tournament/bracket-tournament.module */
          "/tHz")).then(function (m) {
            return m.BracketTournamentPageModule;
          });
        }
      }, {
        path: 'buy-credits',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | buy-credits-buy-credits-module */
          "buy-credits-buy-credits-module").then(__webpack_require__.bind(null,
          /*! ./buy-credits/buy-credits.module */
          "FatO")).then(function (m) {
            return m.BuyCreditsPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
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
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map