(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-profile-edit-profile-module"], {
    /***/
    "12cG":
    /*!*****************************************************!*\
      !*** ./src/app/edit-profile/edit-profile.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function cG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtcHJvZmlsZS9lZGl0LXByb2ZpbGUucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "QYDN":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-profile/edit-profile.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function QYDN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n      <ion-badge\r\n        color=\"danger\"\r\n        class=\"badge-notifiche\"\r\n        *ngIf=\"this.env.notificationsCounter + this.env.ticketUpdates\"\r\n      >\r\n        {{this.env.notificationsCounter + this.env.ticketUpdates}}</ion-badge\r\n      >\r\n    </ion-buttons>\r\n    <ion-title>Profilo</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <form (ngSubmit)=\"editUser()\">\r\n    <ion-text style=\"margin-left: 10px\">Dati utente</ion-text>\r\n    <ion-card>\r\n      <ion-item color=\"white\">\r\n        <ion-label><i class=\"fas fa-user\"></i></ion-label>\r\n        <ion-input\r\n          type=\"text\"\r\n          [(ngModel)]=\"this.userObj.username\"\r\n          (change)=\"onChangeData()\"\r\n          name=\"username\"\r\n        ></ion-input>\r\n      </ion-item>\r\n      <ion-item color=\"white\">\r\n        <ion-label><i class=\"fas fa-at\"></i></ion-label>\r\n        <ion-input\r\n          type=\"email\"\r\n          [(ngModel)]=\"this.userObj.email\"\r\n          (change)=\"onChangeData()\"\r\n          name=\"email\"\r\n        ></ion-input>\r\n      </ion-item>\r\n    </ion-card>\r\n    <ion-text style=\"margin-left: 10px\">Console ID</ion-text>\r\n    <ion-card>\r\n      <ion-item color=\"white\" *ngFor=\"let platform of userObj.platforms\">\r\n        <ion-label [innerHTML]=\"platform.icon\"></ion-label>\r\n        <ion-input\r\n          type=\"text\"\r\n          id=\"{{platform._id}}\"\r\n          (change)=\"onChangeData()\"\r\n          value=\"{{platform.username}}\"\r\n          placeholder=\"{{platform.name}}\"\r\n        ></ion-input>\r\n      </ion-item>\r\n    </ion-card>\r\n\r\n    <ion-text style=\"margin-left: 10px\">Password</ion-text>\r\n    <ion-card>\r\n      <ion-item color=\"white\">\r\n        <ion-label><i class=\"fas fa-key\"></i> Password Vecchia</ion-label>\r\n        <ion-input\r\n          type=\"password\"\r\n          [(ngModel)]=\"this.oldPassword\"\r\n          (change)=\"onChangeData()\"\r\n          name=\"password\"\r\n        ></ion-input>\r\n      </ion-item>\r\n      <ion-item color=\"white\">\r\n        <ion-label><i class=\"fas fa-key\"></i> Nuova Password</ion-label>\r\n        <ion-input\r\n          type=\"password\"\r\n          [(ngModel)]=\"this.newPassword\"\r\n          (change)=\"onChangeData()\"\r\n          name=\"password\"\r\n        ></ion-input>\r\n      </ion-item>\r\n      <ion-item color=\"white\">\r\n        <ion-label><i class=\"fas fa-key\"></i> Ripeti Password</ion-label>\r\n        <ion-input\r\n          type=\"password\"\r\n          [(ngModel)]=\"this.repeatPassword\"\r\n          (change)=\"onChangeData()\"\r\n          name=\"password\"\r\n        >\r\n        </ion-input>\r\n      </ion-item>\r\n    </ion-card>\r\n    <ion-button\r\n      class=\"submit-button\"\r\n      type=\"submit\"\r\n      disabled=\"{{this.disabledAggiorna}}\"\r\n    >\r\n      Aggiorna\r\n    </ion-button>\r\n  </form>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "Wvzw":
    /*!*****************************************************!*\
      !*** ./src/app/edit-profile/edit-profile.module.ts ***!
      \*****************************************************/

    /*! exports provided: ProfilePageModule */

    /***/
    function Wvzw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
        return ProfilePageModule;
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


      var _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./edit-profile-routing.module */
      "pj8G");
      /* harmony import */


      var _edit_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./edit-profile.page */
      "x9OG");

      var ProfilePageModule = function ProfilePageModule() {
        _classCallCheck(this, ProfilePageModule);
      };

      ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]],
        declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
      })], ProfilePageModule);
      /***/
    },

    /***/
    "pj8G":
    /*!*************************************************************!*\
      !*** ./src/app/edit-profile/edit-profile-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: ProfilePageRoutingModule */

    /***/
    function pj8G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
        return ProfilePageRoutingModule;
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


      var _edit_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./edit-profile.page */
      "x9OG");

      var routes = [{
        path: "",
        component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
      }];

      var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
        _classCallCheck(this, ProfilePageRoutingModule);
      };

      ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProfilePageRoutingModule);
      /***/
    },

    /***/
    "x9OG":
    /*!***************************************************!*\
      !*** ./src/app/edit-profile/edit-profile.page.ts ***!
      \***************************************************/

    /*! exports provided: ProfilePage */

    /***/
    function x9OG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
        return ProfilePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_edit_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./edit-profile.page.html */
      "QYDN");
      /* harmony import */


      var _edit_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./edit-profile.page.scss */
      "12cG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../env */
      "J50X");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var jwt_decode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! jwt-decode */
      "EjJx");

      var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Plugins"].Storage;

      var ProfilePage = /*#__PURE__*/function () {
        function ProfilePage(env, router, http, authService) {
          _classCallCheck(this, ProfilePage);

          this.env = env;
          this.router = router;
          this.http = http;
          this.authService = authService;
          this.userObj = {};
          this.disabledAggiorna = true;
          this.oldPassword = null;
          this.newPassword = null;
          this.repeatPassword = null;
          this.platformList = {};
          this.token = null;
        }

        _createClass(ProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.authService.getToken().then(function () {
              if (_this.authService.isLoggedIn) {
                Storage.get({
                  key: "token"
                }).then(function (data) {
                  _this.token = data.value;

                  _this.getProfileInfo(data.value);
                });
              } else {
                _this.router.navigateByUrl("/login");
              }
            });
          }
        }, {
          key: "getProfileInfo",
          value: function getProfileInfo(token) {
            var _this2 = this;

            if (token) {
              var decodedToken = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_9__["default"])(token);
              var userId = decodedToken["id"];

              if (userId) {
                this.http.get("".concat(this.env.baseUri, "/users/").concat(userId)).subscribe(function (response) {
                  if (response) {
                    var userObj = response["user"];

                    if (userObj) {
                      _this2.userObj = userObj ? userObj : null;

                      _this2.http.get("".concat(_this2.env.baseUri, "/platforms/")).subscribe(function (response) {
                        _this2.platformList = response;

                        for (var i = 0; i < _this2.platformList.length; i++) {
                          if (_this2.platformList[i]) {
                            switch (_this2.platformList[i].name) {
                              case "Playstation":
                                _this2.platformList[i].icon = "<i class='fab fa-playstation'></i>";
                                break;

                              case "Activision":
                                _this2.platformList[i].icon = "<i class='fab fa-jedi-order'></i>";
                                break;

                              case "Xbox":
                                _this2.platformList[i].icon = "<i class='fab fa-xbox'></i>";
                                break;

                              case "PC":
                                _this2.platformList[i].icon = "<i class='fab fa-steam'></i>";
                                break;

                              case "Nintendo":
                                _this2.platformList[i].icon = "<i class='fas fa-gamepad'></i>";
                                break;

                              default:
                                _this2.platformList[i].icon = "<i class='fab fa-gamepad'></i>";
                                break;
                            }
                          }
                        }

                        _this2.updateUserPlatformData();
                      });
                    }
                  }
                });
              }
            }
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
                  _this3.getProfileInfo(data.value);

                  event.target.complete();
                });
              } else {
                _this3.router.navigateByUrl("/login");
              }
            });
          }
        }, {
          key: "onChangeData",
          value: function onChangeData() {
            this.disabledAggiorna = false;
          }
        }, {
          key: "updateUserPlatformData",
          value: function updateUserPlatformData() {
            if (this.platformList && this.userObj.platforms) {
              for (var i = 0; i < this.platformList.length; i++) {
                var found = false;

                for (var j = 0; j < this.userObj.platforms.length; j++) {
                  if (this.platformList[i]._id === this.userObj.platforms[j]._id) {
                    found = true;
                    this.userObj.platforms[j].icon = this.platformList[i].icon;
                    this.userObj.platforms[j].name = this.platformList[i].name;
                  }
                }

                if (!found) {
                  this.userObj.platforms.push(this.platformList[i]);
                }
              }
            } else if (this.platformList && !this.userObj.platforms) {
              this.userObj.platforms = this.platformList;
            }
          }
        }, {
          key: "editUser",
          value: function editUser() {
            var userPatch = {};
            if (this.userObj.username) userPatch["username"] = this.userObj.username;

            if (this.oldPassword && this.newPassword && this.repeatPassword) {
              if (this.newPassword == this.repeatPassword) {
                userPatch["newPassword"] = this.newPassword;
                userPatch["oldPassword"] = this.oldPassword;
              }
            }

            var listOfPlatform = [];

            for (var i = 0; i < this.platformList.length; i++) {
              var element = document.getElementById(this.platformList[i]._id).value;
              listOfPlatform.push({
                username: element,
                _id: this.platformList[i]._id
              });
            }

            userPatch["platforms"] = listOfPlatform;
            var decodedToken = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_9__["default"])(this.token);
            var userId = decodedToken["id"];
            this.http.patch("".concat(this.env.baseUri, "/users/").concat(userId), userPatch).subscribe(function (resp) {
              location.reload();
            });
          }
        }]);

        return ProfilePage;
      }();

      ProfilePage.ctorParameters = function () {
        return [{
          type: _env__WEBPACK_IMPORTED_MODULE_4__["GlobalEnv"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }];
      };

      ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-profile",
        template: _raw_loader_edit_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProfilePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=edit-profile-edit-profile-module-es5.js.map