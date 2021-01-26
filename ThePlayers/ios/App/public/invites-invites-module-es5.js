(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invites-invites-module"], {
    /***/
    "FRf2":
    /*!***************************************************!*\
      !*** ./src/app/invites/invites-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: InvitesPageRoutingModule */

    /***/
    function FRf2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvitesPageRoutingModule", function () {
        return InvitesPageRoutingModule;
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


      var _invites_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./invites.page */
      "aQBV");

      var routes = [{
        path: '',
        component: _invites_page__WEBPACK_IMPORTED_MODULE_3__["InvitesPage"]
      }];

      var InvitesPageRoutingModule = function InvitesPageRoutingModule() {
        _classCallCheck(this, InvitesPageRoutingModule);
      };

      InvitesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], InvitesPageRoutingModule);
      /***/
    },

    /***/
    "QFw5":
    /*!*******************************************!*\
      !*** ./src/app/invites/invites.module.ts ***!
      \*******************************************/

    /*! exports provided: InvitesPageModule */

    /***/
    function QFw5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvitesPageModule", function () {
        return InvitesPageModule;
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


      var _invites_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./invites-routing.module */
      "FRf2");
      /* harmony import */


      var _invites_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./invites.page */
      "aQBV");

      var InvitesPageModule = function InvitesPageModule() {
        _classCallCheck(this, InvitesPageModule);
      };

      InvitesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _invites_routing_module__WEBPACK_IMPORTED_MODULE_5__["InvitesPageRoutingModule"]],
        declarations: [_invites_page__WEBPACK_IMPORTED_MODULE_6__["InvitesPage"]]
      })], InvitesPageModule);
      /***/
    },

    /***/
    "TbFO":
    /*!*******************************************!*\
      !*** ./src/app/invites/invites.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function TbFO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".team-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.team-container .flex-direction-row {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52aXRlcy9pbnZpdGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsc0JBQUE7QUFBSjtBQUNBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9pbnZpdGVzL2ludml0ZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlYW0tY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4uZmxleC1kaXJlY3Rpb24tcm93eyAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxufSJdfQ== */";
      /***/
    },

    /***/
    "VIhc":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invites/invites.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function VIhc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n      <ion-badge color=\"danger\" class=\"badge-notifiche\" *ngIf=\"this.env.notificationsCounter + this.env.ticketUpdates\">\r\n        {{this.env.notificationsCounter + this.env.ticketUpdates}}</ion-badge>\r\n    </ion-buttons>\r\n    <ion-title>Inviti</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content style=\"--padding-top: 10px !important;\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-text style=\"margin-left: 5px\">Inviti in sospeso</ion-text>\r\n  <ion-grid style=\"margin-bottom: 15px\">\r\n    <ion-text *ngIf=\"invitesListPending.length == 0\" color=\"danger\">Non hai nessun invito.\r\n    </ion-text>\r\n    <ion-row *ngFor=\"let invite of invitesListPending\">\r\n      <ion-col>\r\n        <ion-card color=\"white\" class=\"team-container\">\r\n          <ion-text>{{invite.teamName}}</ion-text>\r\n          <div class=\"flex-direction-row\">\r\n            <ion-button color=\"success\" (click)=\"changeInviteStatus(invite, 'ACCEPTED')\">ACCETTA</ion-button>\r\n            <ion-button color=\"danger\" (click)=\"changeInviteStatus(invite, 'DECLINED')\">RIFIUTA</ion-button>\r\n          </div>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-text style=\"margin-left: 5px\">Inviti accettati/rifiutati</ion-text>\r\n  <ion-grid>\r\n    <ion-text *ngIf=\"invitesListSelected.length == 0\" color=\"danger\">Non hai nessun invito.\r\n    </ion-text>\r\n    <ion-row *ngFor=\"let invite of invitesListSelected\">\r\n      <ion-col>\r\n        <ion-card color=\"white\" class=\"team-container\">\r\n          <ion-text>{{invite.teamName}}</ion-text>\r\n          <div class=\"flex-direction-row\">\r\n            <ion-text color=\"success\" *ngIf=\"invite.status === 'ACCEPTED'\">Accettato</ion-text>\r\n            <ion-text color=\"danger\" *ngIf=\"invite.status === 'DECLINED'\">Rifiutato</ion-text>\r\n          </div>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>";
      /***/
    },

    /***/
    "aQBV":
    /*!*****************************************!*\
      !*** ./src/app/invites/invites.page.ts ***!
      \*****************************************/

    /*! exports provided: InvitesPage */

    /***/
    function aQBV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvitesPage", function () {
        return InvitesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_invites_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./invites.page.html */
      "VIhc");
      /* harmony import */


      var _invites_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./invites.page.scss */
      "TbFO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../env */
      "J50X");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var jwt_decode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! jwt-decode */
      "EjJx");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");

      var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"].Storage;

      var InvitesPage = /*#__PURE__*/function () {
        function InvitesPage(env, router, http, authService) {
          _classCallCheck(this, InvitesPage);

          this.env = env;
          this.router = router;
          this.http = http;
          this.authService = authService;
          this.invitesListPending = [];
          this.invitesListSelected = [];
        }

        _createClass(InvitesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var token, decodedToken, userId;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return Storage.get({
                        key: "token"
                      }).then(function (data) {
                        if (data.value) {
                          return data.value;
                        }
                      });

                    case 2:
                      token = _context.sent;
                      decodedToken = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_6__["default"])(token);
                      userId = decodedToken["id"];

                      if (userId) {
                        this.getInvites(userId);
                      }

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getInvites",
          value: function getInvites(userId) {
            var _this = this;

            this.http.get(this.env.baseUri + "/users/".concat(userId)).subscribe(function (resp) {
              if (resp && resp["user"].invites && resp["user"].invites.length) {
                (function () {
                  var invitesList = resp["user"].invites;
                  console.log(invitesList);

                  var _loop = function _loop(i) {
                    var tournamentId = invitesList[i].tournamentId,
                        teamId = invitesList[i].teamId;

                    _this.http.get(_this.env.baseUri + "/tournaments/".concat(tournamentId, "/teams/").concat(teamId)).subscribe(function (resp) {
                      invitesList[i].teamName = resp["name"];

                      if (invitesList[i].status === "PENDING") {
                        _this.invitesListPending.push(invitesList[i]);
                      } else {
                        _this.invitesListSelected.push(invitesList[i]);
                      }
                    }, function (error) {
                      if (invitesList[i].status === "PENDING") {
                        _this.invitesListPending.push(invitesList[i]);
                      } else {
                        _this.invitesListSelected.push(invitesList[i]);
                      }
                    });
                  };

                  for (var i = 0; i < invitesList.length; i++) {
                    _loop(i);
                  }
                })();
              }
            }, function (error) {// Empty
            });
          }
        }, {
          key: "changeInviteStatus",
          value: function changeInviteStatus(inviteObj, status) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              var token;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.env.isLoading = true;
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
                      this.http.patch(this.env.baseUri + "/invites/".concat(inviteObj._id), {
                        newStatus: status
                      }).subscribe(function (resp) {
                        _this2.env.isLoading = false;
                        location.reload();
                      }, function (error) {
                        window.alert("errore nell'accettare l'invito.");
                      });

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
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
                  var decodedToken = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_6__["default"])(data.value);
                  var userId = decodedToken["id"];

                  if (userId) {
                    _this3.getInvites(userId);
                  }

                  event.target.complete();
                });
              } else {
                _this3.router.navigateByUrl("/login");
              }
            });
          }
        }]);

        return InvitesPage;
      }();

      InvitesPage.ctorParameters = function () {
        return [{
          type: _env__WEBPACK_IMPORTED_MODULE_4__["GlobalEnv"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]
        }];
      };

      InvitesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-invites",
        template: _raw_loader_invites_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_invites_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], InvitesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=invites-invites-module-es5.js.map