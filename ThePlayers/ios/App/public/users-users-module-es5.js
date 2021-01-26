(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-users-module"], {
    /***/
    "Cj6H":
    /*!***********************************************!*\
      !*** ./src/app/users/users-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: UsersPageRoutingModule */

    /***/
    function Cj6H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersPageRoutingModule", function () {
        return UsersPageRoutingModule;
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


      var _users_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./users.page */
      "x3UY");

      var routes = [{
        path: '',
        component: _users_page__WEBPACK_IMPORTED_MODULE_3__["UsersPage"]
      }];

      var UsersPageRoutingModule = function UsersPageRoutingModule() {
        _classCallCheck(this, UsersPageRoutingModule);
      };

      UsersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UsersPageRoutingModule);
      /***/
    },

    /***/
    "OYNF":
    /*!***************************************!*\
      !*** ./src/app/users/users.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function OYNF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-row {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.5);\n}\nion-row ion-col {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvdXNlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaURBQUE7QUFDSjtBQUNJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBQ1IiLCJmaWxlIjoic3JjL2FwcC91c2Vycy91c2Vycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tcm93e1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcclxuXHJcbiAgICBpb24tY29se1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxufSJdfQ== */";
      /***/
    },

    /***/
    "i9Bv":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function i9Bv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Utenti</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content style=\"--padding: 5px !important\" [fullscreen]=\"true\">\r\n  <ion-item color=\"white\">\r\n    <ion-label><i class=\"fas fa-search\"></i></ion-label>\r\n    <ion-input placeholder=\"Ricerca...\" [(ngModel)]=\"userSearch\"></ion-input>\r\n    <ion-button (click)=\"searchUser()\">Ricerca</ion-button>\r\n  </ion-item>\r\n  <br />\r\n  <ion-text>\r\n    <h2>Lista utenti</h2>\r\n  </ion-text>\r\n  <ion-grid style=\"padding: 5px\">\r\n    <ion-text *ngIf=\"usersFoundCounter == 0 && !userSearch\"\r\n      >Effettua una ricerca...</ion-text\r\n    >\r\n    <ion-text *ngIf=\"usersFoundCounter == 0 && userSearch\"\r\n      >Nessun utente trovato...</ion-text\r\n    >\r\n    <ion-row *ngFor=\"let user of usersList\">\r\n      <ion-col size=\"10\">{{user.username}}</ion-col>\r\n      <ion-col *ngIf=\"showButtonInvite\" size=\"2\">\r\n        <ion-button\r\n          disabled=\"{{user.disabled}}\"\r\n          (click)=\"onInviteUser(user._id)\"\r\n          ><i class=\"fas fa-plus\"></i\r\n        ></ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "x3UY":
    /*!*************************************!*\
      !*** ./src/app/users/users.page.ts ***!
      \*************************************/

    /*! exports provided: UsersPage */

    /***/
    function x3UY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersPage", function () {
        return UsersPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_users_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./users.page.html */
      "i9Bv");
      /* harmony import */


      var _users_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./users.page.scss */
      "OYNF");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _env__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../env */
      "J50X");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");

      var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"].Storage;

      var UsersPage = /*#__PURE__*/function () {
        function UsersPage(activatedRoute, env, http, authService, router) {
          _classCallCheck(this, UsersPage);

          this.activatedRoute = activatedRoute;
          this.env = env;
          this.http = http;
          this.authService = authService;
          this.router = router;
          this.userSearch = null;
          this.usersList = [];
          this.usersFoundCounter = 0;
          this.showButtonInvite = true;
          this.searchValue = null;
        }

        _createClass(UsersPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.activatedRoute.queryParams.subscribe(function (params) {
              var teamId = params["teamId"];
              var tournamentId = params["tournamentId"];

              if (!teamId || !tournamentId) {
                _this.showButtonInvite = false;
              } else {
                _this.teamId = teamId;
                _this.tournamentId = tournamentId;
              }

              _this.authService.getToken().then(function () {
                if (_this.authService.isLoggedIn) {
                  Storage.get({
                    key: "token"
                  }).then(function (data) {
                    _this.token = data.value;
                  });
                } else {
                  _this.router.navigateByUrl("/login");
                }
              });
            });
          }
        }, {
          key: "onInviteUser",
          value: function onInviteUser(idUser) {
            var _this2 = this;

            this.env.isLoading = true;
            var dataToPost = {
              userId: idUser
            }; // Se ho tutti i dati a disposizione continuo con gli inviti

            if (idUser && this.teamId) {
              // Completo l'invito
              this.http.post(this.env.baseUri + "/tournaments/".concat(this.tournamentId, "/teams/").concat(this.teamId, "/invites"), dataToPost).subscribe(function (resp) {
                _this2.env.isLoading = false;
                window.alert("Invitato correttamente");
                location.reload();
              }, function (error) {
                _this2.env.isLoading = false;
                window.alert(error.error.errors[0].msg);
                location.reload();
              });
            } else {
              return;
            }
          }
        }, {
          key: "searchUser",
          value: function searchUser() {
            var _this3 = this;

            //
            if (this.userSearch) {
              this.http.get("".concat(this.env.baseUri, "/users?username=").concat(this.userSearch)).subscribe(function (response) {
                _this3.usersList = response;

                _this3.usersList.sort(function (a, b) {
                  return a.username.replace(" ", "") > b.username.replace(" ", "") ? 1 : -1;
                });

                if (_this3.teamId) {
                  _this3.http.get(_this3.env.baseUri + "/tournaments/".concat(_this3.tournamentId, "/teams/").concat(_this3.teamId)).subscribe(function (resp) {
                    _this3.teamObj = resp;

                    _this3.updateList();

                    _this3.usersFoundCounter = Object.keys(_this3.usersList).length;
                  });
                }
              });
            } else {
              this.usersFoundCounter = 0;
              this.usersList = [];
            }
          }
        }, {
          key: "updateList",
          value: function updateList() {
            if (this.usersList && this.teamObj) {
              for (var i = 0; i < this.teamObj.members.length; i++) {
                for (var j = 0; j < this.usersList.length; j++) {
                  this.usersList[j].disabled = this.usersList[j].disabled ? true : false;

                  if (this.teamObj.members[i].userId === this.usersList[j]._id) {
                    this.usersList[j].disabled = true;
                  }
                }
              }

              for (var i = 0; i < this.teamObj.invites.length; i++) {
                for (var j = 0; j < this.usersList.length; j++) {
                  this.usersList[j].disabled = this.usersList[j].disabled ? true : false;

                  if (this.teamObj.invites[i].userId === this.usersList[j]._id) {
                    this.usersList[j].disabled = true;
                  }
                }
              }
            }
          }
        }]);

        return UsersPage;
      }();

      UsersPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _env__WEBPACK_IMPORTED_MODULE_7__["GlobalEnv"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      UsersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: "app-users",
        template: _raw_loader_users_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_users_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], UsersPage);
      /***/
    },

    /***/
    "zrcO":
    /*!***************************************!*\
      !*** ./src/app/users/users.module.ts ***!
      \***************************************/

    /*! exports provided: UsersPageModule */

    /***/
    function zrcO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersPageModule", function () {
        return UsersPageModule;
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


      var _users_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./users-routing.module */
      "Cj6H");
      /* harmony import */


      var _users_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./users.page */
      "x3UY");

      var UsersPageModule = function UsersPageModule() {
        _classCallCheck(this, UsersPageModule);
      };

      UsersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _users_routing_module__WEBPACK_IMPORTED_MODULE_5__["UsersPageRoutingModule"]],
        declarations: [_users_page__WEBPACK_IMPORTED_MODULE_6__["UsersPage"]]
      })], UsersPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=users-users-module-es5.js.map