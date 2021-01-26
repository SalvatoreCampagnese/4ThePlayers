(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reset-password-reset-password-module"],{

/***/ "GNdb":
/*!*******************************************************!*\
  !*** ./src/app/reset-password/reset-password.page.ts ***!
  \*******************************************************/
/*! exports provided: ResetPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPage", function() { return ResetPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reset_password_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reset-password.page.html */ "joop");
/* harmony import */ var _reset_password_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reset-password.page.scss */ "jLJT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../env */ "J50X");








const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"];



let ResetPasswordPage = class ResetPasswordPage {
    constructor(router, http, authService, menuCtrl, env, activatedRoute, loadingController) {
        this.router = router;
        this.http = http;
        this.authService = authService;
        this.menuCtrl = menuCtrl;
        this.env = env;
        this.activatedRoute = activatedRoute;
        this.loadingController = loadingController;
        this.newPassword = null;
        this.repeatPassword = null;
        this.token = null;
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((params) => {
            this.token = params["jwt"];
            if (this.token) {
                Storage.set({
                    key: "token",
                    value: this.token,
                });
            }
        });
    }
    ResetPassword() {
        if (this.newPassword == this.repeatPassword) {
            this.http
                .patch(`${this.env.baseUri}/auth/password`, {
                newPassword: this.newPassword,
            })
                .subscribe((resp) => {
                window.alert("Password resettata!");
                this.router.navigateByUrl("/login");
            });
        }
    }
};
ResetPasswordPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["MenuController"] },
    { type: _env__WEBPACK_IMPORTED_MODULE_9__["GlobalEnv"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] }
];
ResetPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-reset-password",
        template: _raw_loader_reset_password_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reset_password_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ResetPasswordPage);



/***/ }),

/***/ "Rr42":
/*!*********************************************************!*\
  !*** ./src/app/reset-password/reset-password.module.ts ***!
  \*********************************************************/
/*! exports provided: ResetPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPageModule", function() { return ResetPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reset-password-routing.module */ "X1sl");
/* harmony import */ var _reset_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reset-password.page */ "GNdb");







let ResetPasswordPageModule = class ResetPasswordPageModule {
};
ResetPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResetPasswordPageRoutingModule"]
        ],
        declarations: [_reset_password_page__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordPage"]]
    })
], ResetPasswordPageModule);



/***/ }),

/***/ "X1sl":
/*!*****************************************************************!*\
  !*** ./src/app/reset-password/reset-password-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ResetPasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPageRoutingModule", function() { return ResetPasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _reset_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset-password.page */ "GNdb");




const routes = [
    {
        path: '',
        component: _reset_password_page__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordPage"]
    }
];
let ResetPasswordPageRoutingModule = class ResetPasswordPageRoutingModule {
};
ResetPasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ResetPasswordPageRoutingModule);



/***/ }),

/***/ "jLJT":
/*!*********************************************************!*\
  !*** ./src/app/reset-password/reset-password.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  min-height: 100vh;\n  min-width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\nion-content#backgroundimage {\n  --background: url('login-bg.jpg') 20% 30%;\n}\n.logo {\n  margin-bottom: 5vh;\n  margin-left: 10vw;\n  margin-top: 10vw;\n  max-width: 80vw;\n  min-width: 80vw;\n}\n.box-form {\n  background: white;\n}\nion-card-content {\n  transform: translateY(50%);\n}\nform, ion-card-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nform ion-card-subtitle, ion-card-content ion-card-subtitle {\n  color: white;\n}\nform ion-card-title, ion-card-content ion-card-title {\n  color: white;\n  font-weight: bold;\n}\nion-item {\n  width: 94vw !important;\n  border-radius: 5px;\n  border: 1px solid var(--ion-color-primary);\n}\nion-item:first-child {\n  margin-bottom: 20px;\n}\n.submit-button {\n  min-width: 50vw;\n  height: 45px;\n  margin-top: 30px;\n}\n.align-bottom {\n  width: 100vw;\n  position: fixed;\n  bottom: 10vh !important;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.native-input:-webkit-autofill {\n  --webkit-box-shadow: 0 0 0 50px white inset !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFESjtBQUdJO0VBQ0kseUNBQUE7QUFEUjtBQUtBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFGSjtBQUtBO0VBQ0ksaUJBQUE7QUFGSjtBQUtBO0VBQ0ksMEJBQUE7QUFGSjtBQUtBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUZKO0FBR0k7RUFDSSxZQUFBO0FBRFI7QUFHSTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQURSO0FBS0E7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7QUFGSjtBQUlJO0VBQ0ksbUJBQUE7QUFGUjtBQU1BO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUhKO0FBTUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUpKO0FBT0E7RUFDSSxzREFBQTtBQUpKIiwiZmlsZSI6InNyYy9hcHAvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi1jb250ZW50IHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWluLXdpZHRoOiAxMDB2dztcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAmI2JhY2tncm91bmRpbWFnZXtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9sb2dpbi1iZy5qcGcnKSAyMCUgMzAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubG9nb3tcclxuICAgIG1hcmdpbi1ib3R0b206IDV2aDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHZ3O1xyXG4gICAgbWFyZ2luLXRvcDogMTB2dztcclxuICAgIG1heC13aWR0aDogODB2dztcclxuICAgIG1pbi13aWR0aDogODB2dztcclxufVxyXG5cclxuLmJveC1mb3Jte1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1jYXJkLWNvbnRlbnR7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcclxufVxyXG5cclxuZm9ybSwgaW9uLWNhcmQtY29udGVudHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaW9uLWNhcmQtc3VidGl0bGV7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgaW9uLWNhcmQtdGl0bGV7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24taXRlbXtcclxuICAgIHdpZHRoOiA5NHZ3ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcblxyXG4gICAgJjpmaXJzdC1jaGlsZHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uc3VibWl0LWJ1dHRvbntcclxuICAgIG1pbi13aWR0aDogNTB2dztcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5hbGlnbi1ib3R0b217XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDEwdmggIWltcG9ydGFudDtcclxuICAgIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uYXRpdmUtaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCB7XHJcbiAgICAtLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCA1MHB4IHdoaXRlIGluc2V0ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "joop":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reset-password/reset-password.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content id=\"backgroundimage\">\n  <ion-card-content>\n    <ion-img class=\"logo\" src=\"../../assets/img/logo.png\"></ion-img>\n    <form (ngSubmit)=\"ResetPassword()\">\n      <ion-item color=\"white\">\n        <ion-label><i class=\"fas fa-key\"></i></ion-label>\n        <ion-input\n          clearOnEdit=\"false\"\n          autofocus=\"true\"\n          type=\"password\"\n          [(ngModel)]=\"newPassword\"\n          name=\"newPassword\"\n          placeholder=\"Nuova Password\"\n        ></ion-input>\n      </ion-item>\n      <ion-item color=\"white\">\n        <ion-label><i class=\"fas fa-key\"></i></ion-label>\n        <ion-input\n          clearOnEdit=\"false\"\n          type=\"password\"\n          [(ngModel)]=\"repeatPassword\"\n          name=\"repeatPassword\"\n          placeholder=\"Ripeti Password\"\n        ></ion-input>\n      </ion-item>\n      <ion-button class=\"submit-button\" type=\"submit\"\n        >RESET PASSWORD</ion-button\n      >\n    </form>\n  </ion-card-content>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=reset-password-reset-password-module-es2015.js.map