(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["game-detail-game-detail-module"], {
    /***/
    "BRYk":
    /*!***************************************************!*\
      !*** ./src/app/game-detail/game-detail.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function BRYk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#container {\n  left: 0;\n  right: 0;\n  padding: 10px;\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-row {\n  margin-bottom: 5px;\n}\n\n.titolo {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  font-size: 1.6em;\n}\n\n.container-info-game {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.tournament-detail {\n  padding: 3px 5px;\n  margin-top: 0px;\n  width: 50%;\n  font-size: 0.9em;\n  border-radius: 0px 5px 5px 0px;\n}\n\n.tournament-detail.ladder {\n  background: #121296bf;\n}\n\n.tournament-detail.tournament {\n  width: 80%;\n  background: #961212bf;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS1kZXRhaWwvZ2FtZS1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksT0FBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBREo7O0FBSUU7RUFDRSxxQkFBQTtBQURKOztBQUlFO0VBQ0Usa0JBQUE7QUFESjs7QUFJRTtFQUNFLFdBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBRE47O0FBSUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBREo7O0FBSUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQURGOztBQUdFO0VBQ0UscUJBQUE7QUFESjs7QUFHRTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtBQURKIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS1kZXRhaWwvZ2FtZS1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAjY29udGFpbmVyIHN0cm9uZyB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lciBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIFxyXG4gICAgY29sb3I6ICM4YzhjOGM7XHJcbiAgXHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWluZXIgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1yb3d7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50aXRvbG97XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDEuNmVtO1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyLWluZm8tZ2FtZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbi50b3VybmFtZW50LWRldGFpbHtcclxuICBwYWRkaW5nOiAzcHggNXB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICB3aWR0aDogNTAlO1xyXG4gIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4IDVweCA1cHggMHB4O1xyXG5cclxuICAmLmxhZGRlcntcclxuICAgIGJhY2tncm91bmQ6ICMxMjEyOTZiZjtcclxuICB9XHJcbiAgJi50b3VybmFtZW50e1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGJhY2tncm91bmQ6ICM5NjEyMTJiZjtcclxuICB9XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "IpZ9":
    /*!***********************************************************!*\
      !*** ./src/app/game-detail/game-detail-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: GameDetailPageRoutingModule */

    /***/
    function IpZ9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GameDetailPageRoutingModule", function () {
        return GameDetailPageRoutingModule;
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


      var _game_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./game-detail.page */
      "XZQ3");

      var routes = [{
        path: '',
        component: _game_detail_page__WEBPACK_IMPORTED_MODULE_3__["GameDetailPage"]
      }];

      var GameDetailPageRoutingModule = function GameDetailPageRoutingModule() {
        _classCallCheck(this, GameDetailPageRoutingModule);
      };

      GameDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], GameDetailPageRoutingModule);
      /***/
    },

    /***/
    "XZQ3":
    /*!*************************************************!*\
      !*** ./src/app/game-detail/game-detail.page.ts ***!
      \*************************************************/

    /*! exports provided: GameDetailPage */

    /***/
    function XZQ3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GameDetailPage", function () {
        return GameDetailPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_game_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./game-detail.page.html */
      "huaH");
      /* harmony import */


      var _game_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./game-detail.page.scss */
      "BRYk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _env__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../env */
      "J50X");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"].Storage;

      var GameDetailPage = /*#__PURE__*/function () {
        function GameDetailPage(activatedRoute, router, authService, http, env, loadingController) {
          _classCallCheck(this, GameDetailPage);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.authService = authService;
          this.http = http;
          this.env = env;
          this.loadingController = loadingController;
          this.userCoins = 0;
        }

        _createClass(GameDetailPage, [{
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingController.create({
                        message: "Caricamento dei giochi in corso..."
                      });

                    case 2:
                      this.loading = _context.sent;
                      _context.next = 5;
                      return this.loading.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.authService.getToken().then(function () {
              if (_this.authService.isLoggedIn) {
                Storage.get({
                  key: "token"
                }).then(function (data) {
                  _this.getTournaments(data.value); //this.router.navigateByUrl("/game-detail");

                });
              } else {
                _this.router.navigateByUrl("/login");
              }
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.activatedRoute.queryParams.subscribe(function (params) {
              _this2.idGame = params["idGame"];
              _this2.gameName = params["gameName"];

              if (!_this2.idGame) {
                _this2.router.navigateByUrl("/home");
              }
            });
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            var _this3 = this;

            this.authService.getToken().then(function () {
              if (_this3.authService.isLoggedIn) {
                Storage.get({
                  key: "token"
                }).then(function (data) {
                  _this3.getTournaments(data.value);

                  event.target.complete();
                });
              } else {
                _this3.router.navigateByUrl("/login");
              }
            });
          }
        }, {
          key: "DetailTournament",
          value: function DetailTournament(idTournament, tournamentName) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.router.navigate(["/tournament-detail"], {
                        queryParams: {
                          idTournament: idTournament,
                          tournamentName: tournamentName
                        }
                      });

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getTournaments",
          value: function getTournaments(token) {
            var _this4 = this;

            this.presentLoading();
            this.http.get("".concat(this.env.baseUri, "/tournaments/?gameId=").concat(this.idGame)).subscribe(function (response) {
              _this4.tournamentsList = response;

              if (_this4.tournamentsList.length == 0) {
                _this4.errorText = "Non ci sono tornei per questo gioco.";
              } else {
                _this4.errorText = null;
              }

              _this4.loading.dismiss();
            }, function (error) {
              _this4.loading.dismiss();

              window.alert("errore tornei");
            });
          }
        }]);

        return GameDetailPage;
      }();

      GameDetailPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _env__WEBPACK_IMPORTED_MODULE_8__["GlobalEnv"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"]
        }];
      };

      GameDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-game-detail",
        template: _raw_loader_game_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_game_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], GameDetailPage);
      /***/
    },

    /***/
    "huaH":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game-detail/game-detail.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function huaH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n      <ion-badge\r\n        color=\"danger\"\r\n        class=\"badge-notifiche\"\r\n        *ngIf=\"this.env.notificationsCounter + this.env.ticketUpdates\"\r\n      >\r\n        {{this.env.notificationsCounter + this.env.ticketUpdates}}</ion-badge\r\n      >\r\n    </ion-buttons>\r\n    <ion-title> {{this.gameName}} </ion-title>\r\n    <ion-buttons style=\"padding-right: 20px\" slot=\"end\">\r\n      <ion-text>{{this.userCoins}}</ion-text>&nbsp;&nbsp;<i\r\n        class=\"fas fa-coins\"\r\n        color=\"orange\"\r\n      ></i>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">Tornei</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <div id=\"container\">\r\n    <strong style=\"margin-left: 15px\">Tornei</strong>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col\r\n          *ngFor=\"let tournament of tournamentsList\"\r\n          size=\"6\"\r\n          (click)=\"DetailTournament(tournament._id, tournament.name)\"\r\n        >\r\n          <ion-card\r\n            color=\"primary\"\r\n            class=\"tournament-card\"\r\n            style=\"background-image: url({{tournament.imgUrl}});\"\r\n          >\r\n            <div\r\n              [class]=\"tournament.type === 'TOURNAMENT' ? 'tournament-detail tournament' : 'tournament-detail ladder'\"\r\n            >\r\n              {{tournament.type}}\r\n            </div>\r\n            <div min-height=\"40px\"></div>\r\n            <div class=\"tournament-info\">\r\n              <ion-card-title>{{tournament.name}}</ion-card-title>\r\n              <ion-card-subtitle\r\n                ><i class=\"fab fa-playstation\"></i>&nbsp;&nbsp;<i\r\n                  class=\"fab fa-xbox\"\r\n                ></i>\r\n              </ion-card-subtitle>\r\n            </div>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "iv5H":
    /*!***************************************************!*\
      !*** ./src/app/game-detail/game-detail.module.ts ***!
      \***************************************************/

    /*! exports provided: GameDetailPageModule */

    /***/
    function iv5H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GameDetailPageModule", function () {
        return GameDetailPageModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _game_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./game-detail-routing.module */
      "IpZ9");
      /* harmony import */


      var _game_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./game-detail.page */
      "XZQ3");

      var GameDetailPageModule = function GameDetailPageModule() {
        _classCallCheck(this, GameDetailPageModule);
      };

      GameDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _game_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["GameDetailPageRoutingModule"]],
        declarations: [_game_detail_page__WEBPACK_IMPORTED_MODULE_6__["GameDetailPage"]]
      })], GameDetailPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=game-detail-game-detail-module-es5.js.map