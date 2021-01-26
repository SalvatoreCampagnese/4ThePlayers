(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-detail-user-detail-module"], {
    /***/
    "9PB8":
    /*!***************************************************!*\
      !*** ./src/app/user-detail/user-detail.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function PB8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card.header-container {\n  min-height: 190px;\n  background: none !important;\n  border-radius: 15px;\n  position: relative;\n  overflow: visible;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: none !important;\n}\nion-card.header-container .header-card {\n  min-height: 150px;\n  width: 100%;\n  background: #245339 !important;\n  z-index: 1;\n  border-radius: 15px;\n  background-position: center !important;\n  background-size: cover !important;\n}\nion-card.header-container .avatar-card {\n  background: #245339;\n  width: 120px;\n  height: 120px;\n  border-radius: 120px;\n  position: absolute;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  z-index: 2;\n  top: 65px;\n  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1kZXRhaWwvdXNlci1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUFBSjtBQUNJO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQ0FBQTtFQUNBLGlDQUFBO0FBQ1I7QUFDSTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSwyQ0FBQTtBQUNSIiwiZmlsZSI6InNyYy9hcHAvdXNlci1kZXRhaWwvdXNlci1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQuaGVhZGVyLWNvbnRhaW5lcntcclxuICAgIG1pbi1oZWlnaHQ6IDE5MHB4O1xyXG4gICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAuaGVhZGVyLWNhcmR7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzI0NTMzOSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYXZhdGFyLWNhcmR7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzI0NTMzOTtcclxuICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMjBweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgIHRvcDogNjVweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDEycHggcmdiYSgwLDAsMCwwLjUpO1xyXG4gICAgfVxyXG4gICAgXHJcbn0iXX0= */";
      /***/
    },

    /***/
    "D2oU":
    /*!*************************************************!*\
      !*** ./src/app/user-detail/user-detail.page.ts ***!
      \*************************************************/

    /*! exports provided: UserDetailPage */

    /***/
    function D2oU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserDetailPage", function () {
        return UserDetailPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_user_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./user-detail.page.html */
      "U7MV");
      /* harmony import */


      var _user_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-detail.page.scss */
      "9PB8");
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


      var _env__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../env */
      "J50X");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/auth.service */
      "lGQG");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var jwt_decode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! jwt-decode */
      "EjJx");

      var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Plugins"].Storage;

      var UserDetailPage = /*#__PURE__*/function () {
        function UserDetailPage(activatedRoute, env, http, authService, router) {
          _classCallCheck(this, UserDetailPage);

          this.activatedRoute = activatedRoute;
          this.env = env;
          this.http = http;
          this.authService = authService;
          this.router = router;
          this.tournamentsList = [];
          this.userId = null;
        }

        _createClass(UserDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.activatedRoute.queryParams.subscribe(function (params) {
              _this.authService.getToken().then(function () {
                if (_this.authService.isLoggedIn) {
                  Storage.get({
                    key: "token"
                  }).then(function (data) {
                    _this.token = data.value;

                    if (!params["userId"]) {
                      _this.userObj = {};
                      var deserialized = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_9__["default"])(_this.token);
                      _this.userId = deserialized["id"];
                      _this.userObj["userId"] = deserialized["id"];
                    } else {
                      _this.userId = params["userId"];
                    }

                    _this.showInfo();
                  });
                } else {
                  _this.router.navigateByUrl("/login");
                }
              });
            });
          }
        }, {
          key: "showInfo",
          value: function showInfo() {
            var _this2 = this;

            if (this.userId) {
              this.http.get("".concat(this.env.baseUri, "/users/").concat(this.userId)).subscribe(function (response) {
                if (response) {
                  var userObj = response["user"];

                  if (userObj) {
                    _this2.userObj = userObj ? userObj : null;
                    _this2.tournamentsList = userObj.tournaments;
                  }

                  if (userObj && userObj.platforms && userObj.platforms.length > 0) {
                    _this2.http.get("".concat(_this2.env.baseUri, "/platforms/")).subscribe(function (response) {
                      for (var i = 0; i < userObj.platforms.length; i++) {
                        var platId = userObj.platforms[i]._id; //response.find()

                        for (var j = 0; j < Object.keys(response).length; j++) {
                          if (response[Object.keys(response)[i]]._id === userObj.platforms[i]._id) {
                            switch (response[Object.keys(response)[i]].name) {
                              case "Playstation":
                                userObj.platforms[i].icon = "fab fa-playstation";
                                break;

                              case "Activision":
                                userObj.platforms[i].icon = "fab fa-jedi-order";
                                break;

                              case "Xbox":
                                userObj.platforms[i].icon = "fab fa-xbox";
                                break;

                              case "PC":
                                userObj.platforms[i].icon = "fab fa-steam";
                                break;

                              case "Nintendo":
                                userObj.platforms[i].icon = "fas fa-gamepad";
                                break;

                              default:
                                userObj.platforms[i].icon = "fas fa-gamepad";
                                break;
                            }
                          }
                        }
                      }
                    });
                  }
                }
              });
            }
          }
        }, {
          key: "DetailTournament",
          value: function DetailTournament(idTournament, tournamentName) {
            this.router.navigate(["/tournament-detail"], {
              queryParams: {
                idTournament: idTournament,
                tournamentName: tournamentName
              }
            });
          }
        }, {
          key: "editProfile",
          value: function editProfile() {
            this.router.navigateByUrl("/edit-profile");
          }
        }, {
          key: "showAccordionPlatforms",
          value: function showAccordionPlatforms() {
            var accordionPlatforms = document.getElementById("platforms-accordion"),
                anglePlatforms = document.getElementById("platforms-angle");

            if (accordionPlatforms.style.display == "none") {
              accordionPlatforms.style.display = "block";
              anglePlatforms.classList.remove("fa-angle-down");
              anglePlatforms.classList.add("fa-angle-up");
            } else {
              accordionPlatforms.style.display = "none";
              anglePlatforms.classList.remove("fa-angle-up");
              anglePlatforms.classList.add("fa-angle-down");
            }
          }
        }]);

        return UserDetailPage;
      }();

      UserDetailPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _env__WEBPACK_IMPORTED_MODULE_6__["GlobalEnv"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      UserDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: "app-user-detail",
        template: _raw_loader_user_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], UserDetailPage);
      /***/
    },

    /***/
    "Ov+x":
    /*!***************************************************!*\
      !*** ./src/app/user-detail/user-detail.module.ts ***!
      \***************************************************/

    /*! exports provided: UserDetailPageModule */

    /***/
    function OvX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserDetailPageModule", function () {
        return UserDetailPageModule;
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


      var _user_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user-detail-routing.module */
      "yStk");
      /* harmony import */


      var _user_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./user-detail.page */
      "D2oU");

      var UserDetailPageModule = function UserDetailPageModule() {
        _classCallCheck(this, UserDetailPageModule);
      };

      UserDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _user_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserDetailPageRoutingModule"]],
        declarations: [_user_detail_page__WEBPACK_IMPORTED_MODULE_6__["UserDetailPage"]]
      })], UserDetailPageModule);
      /***/
    },

    /***/
    "U7MV":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-detail/user-detail.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function U7MV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Dettagli utente</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content scrollable=\"true\">\n  <ion-card class=\"header-container\">\n    <ion-card\n      class=\"header-card\"\n      style=\"\n        background-image: url('https://i.imgur.com/6c0lZoy.png') !important;\n      \"\n    ></ion-card>\n    <ion-card\n      class=\"avatar-card\"\n      style=\"\n        background-image: url('https://i.imgur.com/OCT1szw.png') !important;\n      \"\n    ></ion-card>\n  </ion-card>\n\n  <div class=\"card-body\" style=\"overflow-y: scroll !important; z-index: 10\">\n    <ion-grid style=\"padding: 0px 15px\">\n      <ion-row>\n        <ion-col size=\"10\"><h3>{{userObj && userObj.username}}</h3></ion-col>\n        <ion-col size=\"2\"\n          ><ion-button color=\"success\" (click)=\"editProfile()\"\n            ><i class=\"fas fa-pen\"></i></ion-button\n        ></ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <div\n      *ngIf=\"userObj && userObj.platforms && userObj.platforms.length > 0\"\n      style=\"padding: 0px 10px\"\n    >\n      <ion-grid\n        style=\"background-color: white; border-radius: 10px; color: #2d2d2d\"\n      >\n        <ion-row (click)=\"showAccordionPlatforms()\">\n          <ion-col size=\"10\"><h3>Piattaforme</h3></ion-col>\n          <ion-col size=\"2\" style=\"text-align: center\"\n            ><h3><i id=\"platforms-angle\" class=\"fas fa-angle-down\"></i></h3\n          ></ion-col>\n          <ion-row id=\"platforms-accordion\" style=\"display: none; width: 100%\">\n            <ion-row\n              size=\"12\"\n              *ngFor=\"let plat of userObj.platforms\"\n              style=\"width: 100%\"\n            >\n              <ion-col size=\"3\"><i [class]=\"plat.icon\"></i></ion-col>\n              <ion-col size=\"9\">{{plat.username}}</ion-col>\n            </ion-row>\n          </ion-row>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <div class=\"user-tournament\" style=\"padding: 0px 15px\">\n      <h3>Tornei</h3>\n      <ion-grid>\n        <ion-row>\n          <ion-col\n            *ngFor=\"let tournament of tournamentsList\"\n            size=\"6\"\n            (click)=\"DetailTournament(tournament._id, tournament.name)\"\n          >\n            <ion-card\n              color=\"primary\"\n              class=\"tournament-card\"\n              style=\"background-image: url({{tournament.imgUrl}});\"\n            >\n              <div min-height=\"40px\"></div>\n              <div class=\"tournament-info\">\n                <ion-card-title>{{tournament.name}}</ion-card-title>\n                <ion-card-subtitle\n                  ><i class=\"fab fa-playstation\"></i>&nbsp;&nbsp;<i\n                    class=\"fab fa-xbox\"\n                  ></i>\n                </ion-card-subtitle>\n              </div>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "yStk":
    /*!***********************************************************!*\
      !*** ./src/app/user-detail/user-detail-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: UserDetailPageRoutingModule */

    /***/
    function yStk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserDetailPageRoutingModule", function () {
        return UserDetailPageRoutingModule;
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


      var _user_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-detail.page */
      "D2oU");

      var routes = [{
        path: '',
        component: _user_detail_page__WEBPACK_IMPORTED_MODULE_3__["UserDetailPage"]
      }];

      var UserDetailPageRoutingModule = function UserDetailPageRoutingModule() {
        _classCallCheck(this, UserDetailPageRoutingModule);
      };

      UserDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UserDetailPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-detail-user-detail-module-es5.js.map