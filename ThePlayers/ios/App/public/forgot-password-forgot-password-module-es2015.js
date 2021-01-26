(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-password-forgot-password-module"],{

/***/ "2bN1":
/*!*********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.ts ***!
  \*********************************************************/
/*! exports provided: ForgotPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function() { return ForgotPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./forgot-password.page.html */ "l7ks");
/* harmony import */ var _forgot_password_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot-password.page.scss */ "hxgU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../env */ "J50X");








const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"];



let ForgotPasswordPage = class ForgotPasswordPage {
    constructor(router, http, authService, menuCtrl, env, loadingController) {
        this.router = router;
        this.http = http;
        this.authService = authService;
        this.menuCtrl = menuCtrl;
        this.env = env;
        this.loadingController = loadingController;
        this.email = null;
    }
    ngOnInit() { }
    SendEmail() {
        if (this.email) {
            this.http
                .post(`${this.env.baseUri}/auth/password`, { email: this.email })
                .subscribe((resp) => {
                window.alert("Password resettata, controlla la tua email");
            });
        }
    }
    SignUpPage() {
        this.router.navigateByUrl("/signup");
    }
};
ForgotPasswordPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["MenuController"] },
    { type: _env__WEBPACK_IMPORTED_MODULE_9__["GlobalEnv"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] }
];
ForgotPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-forgot-password",
        template: _raw_loader_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forgot_password_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ForgotPasswordPage);



/***/ }),

/***/ "JgOp":
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.module.ts ***!
  \***********************************************************/
/*! exports provided: ForgotPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function() { return ForgotPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot-password-routing.module */ "RtEn");
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password.page */ "2bN1");







let ForgotPasswordPageModule = class ForgotPasswordPageModule {
};
ForgotPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordPageRoutingModule"]
        ],
        declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]]
    })
], ForgotPasswordPageModule);



/***/ }),

/***/ "RtEn":
/*!*******************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ForgotPasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageRoutingModule", function() { return ForgotPasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot-password.page */ "2bN1");




const routes = [
    {
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordPage"]
    }
];
let ForgotPasswordPageRoutingModule = class ForgotPasswordPageRoutingModule {
};
ForgotPasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ForgotPasswordPageRoutingModule);



/***/ }),

/***/ "hxgU":
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  min-height: 100vh;\n  min-width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\nion-content#backgroundimage {\n  --background: url('login-bg.jpg') 20% 30%;\n}\n.logo {\n  margin-bottom: 5vh;\n  margin-left: 10vw;\n  margin-top: 10vw;\n  max-width: 80vw;\n  min-width: 80vw;\n}\n.box-form {\n  background: white;\n}\nion-card-content {\n  transform: translateY(50%);\n}\nform, ion-card-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nform ion-card-subtitle, ion-card-content ion-card-subtitle {\n  color: white;\n}\nform ion-card-title, ion-card-content ion-card-title {\n  color: white;\n  font-weight: bold;\n}\nion-item {\n  width: 94vw !important;\n  border-radius: 5px;\n  border: 1px solid var(--ion-color-primary);\n}\nion-item:first-child {\n  margin-bottom: 20px;\n}\n.submit-button {\n  min-width: 50vw;\n  height: 45px;\n  margin-top: 30px;\n}\n.align-bottom {\n  width: 100vw;\n  position: fixed;\n  bottom: 10vh !important;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.native-input:-webkit-autofill {\n  -webkit-box-shadow: 0 0 0 50px white inset !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQURKO0FBR0k7RUFDSSx5Q0FBQTtBQURSO0FBS0E7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUZKO0FBS0E7RUFDSSxpQkFBQTtBQUZKO0FBS0E7RUFDSSwwQkFBQTtBQUZKO0FBS0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRko7QUFHSTtFQUNJLFlBQUE7QUFEUjtBQUdJO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FBRFI7QUFLQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtBQUZKO0FBSUk7RUFDSSxtQkFBQTtBQUZSO0FBTUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBSEo7QUFNQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBSko7QUFPQTtFQUNJLHFEQUFBO0FBSkoiLCJmaWxlIjoic3JjL2FwcC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24tY29udGVudCB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIG1pbi13aWR0aDogMTAwdnc7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgJiNiYWNrZ3JvdW5kaW1hZ2V7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWcvbG9naW4tYmcuanBnJykgMjAlIDMwJTtcclxuICAgIH1cclxufVxyXG5cclxuLmxvZ297XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1dmg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTB2dztcclxuICAgIG1hcmdpbi10b3A6IDEwdnc7XHJcbiAgICBtYXgtd2lkdGg6IDgwdnc7XHJcbiAgICBtaW4td2lkdGg6IDgwdnc7XHJcbn1cclxuXHJcbi5ib3gtZm9ybXtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG5pb24tY2FyZC1jb250ZW50e1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XHJcbn1cclxuXHJcbmZvcm0sIGlvbi1jYXJkLWNvbnRlbnR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGlvbi1jYXJkLXN1YnRpdGxle1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIGlvbi1jYXJkLXRpdGxle1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWl0ZW17XHJcbiAgICB3aWR0aDogOTR2dyAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG5cclxuICAgICY6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuLnN1Ym1pdC1idXR0b257XHJcbiAgICBtaW4td2lkdGg6IDUwdnc7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uYWxpZ24tYm90dG9te1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAxMHZoICFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubmF0aXZlLWlucHV0Oi13ZWJraXQtYXV0b2ZpbGwge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCA1MHB4IHdoaXRlIGluc2V0ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "l7ks":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content id=\"backgroundimage\">\n  <ion-card-content>\n    <ion-img class=\"logo\" src=\"../../assets/img/logo.png\"></ion-img>\n    <form (ngSubmit)=\"SendEmail()\">\n      <ion-item color=\"white\">\n        <ion-label><i class=\"fas fa-at\"></i></ion-label>\n        <ion-input\n          clearOnEdit=\"false\"\n          autofocus=\"true\"\n          type=\"email\"\n          [(ngModel)]=\"email\"\n          name=\"email\"\n        ></ion-input>\n      </ion-item>\n      <ion-button class=\"submit-button\" type=\"submit\">RECUPERA!</ion-button>\n      <ion-card-subtitle>Non sei ancora registrato?</ion-card-subtitle>\n      <ion-card-title (click)=\"SignUpPage()\">REGISTRATI!</ion-card-title>\n    </form>\n  </ion-card-content>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=forgot-password-forgot-password-module-es2015.js.map