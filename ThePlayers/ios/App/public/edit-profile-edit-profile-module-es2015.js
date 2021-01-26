(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-profile-edit-profile-module"],{

/***/ "12cG":
/*!*****************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtcHJvZmlsZS9lZGl0LXByb2ZpbGUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "QYDN":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-profile/edit-profile.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n      <ion-badge\r\n        color=\"danger\"\r\n        class=\"badge-notifiche\"\r\n        *ngIf=\"this.env.notificationsCounter + this.env.ticketUpdates\"\r\n      >\r\n        {{this.env.notificationsCounter + this.env.ticketUpdates}}</ion-badge\r\n      >\r\n    </ion-buttons>\r\n    <ion-title>Profilo</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <form (ngSubmit)=\"editUser()\">\r\n    <ion-text style=\"margin-left: 10px\">Dati utente</ion-text>\r\n    <ion-card>\r\n      <ion-item color=\"white\">\r\n        <ion-label><i class=\"fas fa-user\"></i></ion-label>\r\n        <ion-input\r\n          type=\"text\"\r\n          [(ngModel)]=\"this.userObj.username\"\r\n          (change)=\"onChangeData()\"\r\n          name=\"username\"\r\n        ></ion-input>\r\n      </ion-item>\r\n      <ion-item color=\"white\">\r\n        <ion-label><i class=\"fas fa-at\"></i></ion-label>\r\n        <ion-input\r\n          type=\"email\"\r\n          [(ngModel)]=\"this.userObj.email\"\r\n          (change)=\"onChangeData()\"\r\n          name=\"email\"\r\n        ></ion-input>\r\n      </ion-item>\r\n    </ion-card>\r\n    <ion-text style=\"margin-left: 10px\">Console ID</ion-text>\r\n    <ion-card>\r\n      <ion-item color=\"white\" *ngFor=\"let platform of userObj.platforms\">\r\n        <ion-label [innerHTML]=\"platform.icon\"></ion-label>\r\n        <ion-input\r\n          type=\"text\"\r\n          id=\"{{platform._id}}\"\r\n          (change)=\"onChangeData()\"\r\n          value=\"{{platform.username}}\"\r\n          placeholder=\"{{platform.name}}\"\r\n        ></ion-input>\r\n      </ion-item>\r\n    </ion-card>\r\n\r\n    <ion-text style=\"margin-left: 10px\">Password</ion-text>\r\n    <ion-card>\r\n      <ion-item color=\"white\">\r\n        <ion-label><i class=\"fas fa-key\"></i> Password Vecchia</ion-label>\r\n        <ion-input\r\n          type=\"password\"\r\n          [(ngModel)]=\"this.oldPassword\"\r\n          (change)=\"onChangeData()\"\r\n          name=\"password\"\r\n        ></ion-input>\r\n      </ion-item>\r\n      <ion-item color=\"white\">\r\n        <ion-label><i class=\"fas fa-key\"></i> Nuova Password</ion-label>\r\n        <ion-input\r\n          type=\"password\"\r\n          [(ngModel)]=\"this.newPassword\"\r\n          (change)=\"onChangeData()\"\r\n          name=\"password\"\r\n        ></ion-input>\r\n      </ion-item>\r\n      <ion-item color=\"white\">\r\n        <ion-label><i class=\"fas fa-key\"></i> Ripeti Password</ion-label>\r\n        <ion-input\r\n          type=\"password\"\r\n          [(ngModel)]=\"this.repeatPassword\"\r\n          (change)=\"onChangeData()\"\r\n          name=\"password\"\r\n        >\r\n        </ion-input>\r\n      </ion-item>\r\n    </ion-card>\r\n    <ion-button\r\n      class=\"submit-button\"\r\n      type=\"submit\"\r\n      disabled=\"{{this.disabledAggiorna}}\"\r\n    >\r\n      Aggiorna\r\n    </ion-button>\r\n  </form>\r\n</ion-content>\r\n");

/***/ }),

/***/ "Wvzw":
/*!*****************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.module.ts ***!
  \*****************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-profile-routing.module */ "pj8G");
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-profile.page */ "x9OG");







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]],
        declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]],
    })
], ProfilePageModule);



/***/ }),

/***/ "pj8G":
/*!*************************************************************!*\
  !*** ./src/app/edit-profile/edit-profile-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-profile.page */ "x9OG");




const routes = [
    {
        path: "",
        component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"],
    },
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "x9OG":
/*!***************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.page.ts ***!
  \***************************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-profile.page.html */ "QYDN");
/* harmony import */ var _edit_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-profile.page.scss */ "12cG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../env */ "J50X");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jwt-decode */ "EjJx");










const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Plugins"];
let ProfilePage = class ProfilePage {
    constructor(env, router, http, authService) {
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
    ngOnInit() {
        this.authService.getToken().then(() => {
            if (this.authService.isLoggedIn) {
                Storage.get({ key: "token" }).then((data) => {
                    this.token = data.value;
                    this.getProfileInfo(data.value);
                });
            }
            else {
                this.router.navigateByUrl("/login");
            }
        });
    }
    getProfileInfo(token) {
        if (token) {
            const decodedToken = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_9__["default"])(token);
            const userId = decodedToken["id"];
            if (userId) {
                this.http
                    .get(`${this.env.baseUri}/users/${userId}`)
                    .subscribe((response) => {
                    if (response) {
                        const userObj = response["user"];
                        if (userObj) {
                            this.userObj = userObj ? userObj : null;
                            this.http
                                .get(`${this.env.baseUri}/platforms/`)
                                .subscribe((response) => {
                                this.platformList = response;
                                for (let i = 0; i < this.platformList.length; i++) {
                                    if (this.platformList[i]) {
                                        switch (this.platformList[i].name) {
                                            case "Playstation":
                                                this.platformList[i].icon =
                                                    "<i class='fab fa-playstation'></i>";
                                                break;
                                            case "Activision":
                                                this.platformList[i].icon =
                                                    "<i class='fab fa-jedi-order'></i>";
                                                break;
                                            case "Xbox":
                                                this.platformList[i].icon =
                                                    "<i class='fab fa-xbox'></i>";
                                                break;
                                            case "PC":
                                                this.platformList[i].icon =
                                                    "<i class='fab fa-steam'></i>";
                                                break;
                                            case "Nintendo":
                                                this.platformList[i].icon =
                                                    "<i class='fas fa-gamepad'></i>";
                                                break;
                                            default:
                                                this.platformList[i].icon =
                                                    "<i class='fab fa-gamepad'></i>";
                                                break;
                                        }
                                    }
                                }
                                this.updateUserPlatformData();
                            });
                        }
                    }
                });
            }
        }
    }
    doRefresh(event) {
        this.authService.getToken().then(() => {
            if (this.authService.isLoggedIn) {
                Storage.get({ key: "token" }).then((data) => {
                    this.getProfileInfo(data.value);
                    event.target.complete();
                });
            }
            else {
                this.router.navigateByUrl("/login");
            }
        });
    }
    onChangeData() {
        this.disabledAggiorna = false;
    }
    updateUserPlatformData() {
        if (this.platformList && this.userObj.platforms) {
            for (let i = 0; i < this.platformList.length; i++) {
                let found = false;
                for (let j = 0; j < this.userObj.platforms.length; j++) {
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
        }
        else if (this.platformList && !this.userObj.platforms) {
            this.userObj.platforms = this.platformList;
        }
    }
    editUser() {
        const userPatch = {};
        if (this.userObj.username)
            userPatch["username"] = this.userObj.username;
        if (this.oldPassword && this.newPassword && this.repeatPassword) {
            if (this.newPassword == this.repeatPassword) {
                userPatch["newPassword"] = this.newPassword;
                userPatch["oldPassword"] = this.oldPassword;
            }
        }
        let listOfPlatform = [];
        for (var i = 0; i < this.platformList.length; i++) {
            const element = (document.getElementById(this.platformList[i]._id)).value;
            listOfPlatform.push({
                username: element,
                _id: this.platformList[i]._id,
            });
        }
        userPatch["platforms"] = listOfPlatform;
        const decodedToken = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_9__["default"])(this.token);
        const userId = decodedToken["id"];
        this.http
            .patch(`${this.env.baseUri}/users/${userId}`, userPatch)
            .subscribe((resp) => {
            location.reload();
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _env__WEBPACK_IMPORTED_MODULE_4__["GlobalEnv"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-profile",
        template: _raw_loader_edit_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=edit-profile-edit-profile-module-es2015.js.map