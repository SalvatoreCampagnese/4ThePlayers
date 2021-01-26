(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "6h0i":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content id=\"backgroundimage\">\r\n\r\n  <ion-card-content>\r\n    <ion-img class=\"logo\" src=\"../../assets/img/logo.png\"></ion-img>\r\n    <form (ngSubmit)=\"SignupForm()\">\r\n      <ion-item color=\"white\">\r\n        <ion-label><i class=\"fas fa-user\"></i></ion-label>\r\n        <ion-input type=\"text\" [(ngModel)]=\"username\" name=\"username\"></ion-input>\r\n      </ion-item>\r\n      <ion-item color=\"white\">\r\n        <ion-label><i class=\"fas fa-at\"></i></ion-label>\r\n        <ion-input type=\"email\" [(ngModel)]=\"email\" name=\"email\"></ion-input>\r\n      </ion-item>\r\n      <ion-item color=\"white\">\r\n        <ion-label><i class=\"fas fa-key\"></i></ion-label>\r\n        <ion-input type=\"password\" [(ngModel)]=\"password\" name=\"password\"></ion-input>\r\n      </ion-item>\r\n      <ion-button class=\"submit-button\" type=\"submit\" block>Registrati</ion-button>\r\n      <ion-card-subtitle>Gi&agrave; registrato?</ion-card-subtitle>\r\n      <ion-card-title (click)=\"LoginPage()\">ACCEDI!</ion-card-title>\r\n    </form>\r\n  </ion-card-content>\r\n</ion-content>");

/***/ }),

/***/ "RPFs":
/*!*************************************************!*\
  !*** ./src/app/signup/signup-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SignupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function() { return SignupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.page */ "yL7A");




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ "T9iC":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup-routing.module */ "RPFs");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "yL7A");







let SignupPageModule = class SignupPageModule {
};
SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"]
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
    })
], SignupPageModule);



/***/ }),

/***/ "fJgH":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  min-height: 100vh;\n  min-width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\nion-content#backgroundimage {\n  --background: url('login-bg.jpg') 20% 30%;\n}\n.logo {\n  margin-bottom: 5vh;\n  max-width: 80vw;\n}\nion-card-content {\n  transform: translateY(30%);\n}\nform, ion-card-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nform ion-card-subtitle, ion-card-content ion-card-subtitle {\n  color: white;\n}\nform ion-card-title, ion-card-content ion-card-title {\n  color: white;\n  font-weight: bold;\n}\nion-item {\n  width: 94vw !important;\n  border-radius: 5px;\n  margin-bottom: 20px;\n}\nion-item:last-child {\n  margin-bottom: 0px;\n}\n.submit-button {\n  min-width: 50vw;\n  height: 45px;\n  margin-top: 30px;\n}\n.align-bottom {\n  width: 100vw;\n  position: fixed;\n  bottom: 10vh !important;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQURKO0FBR0k7RUFDSSx5Q0FBQTtBQURSO0FBSUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUFESjtBQUlBO0VBQ0ksMEJBQUE7QUFESjtBQUlBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQURKO0FBRUk7RUFDSSxZQUFBO0FBQVI7QUFFSTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQUFSO0FBSUE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBS0EsbUJBQUE7QUFMSjtBQUVJO0VBQ0ksa0JBQUE7QUFBUjtBQUtBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUZKO0FBS0E7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUhKIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLWNvbnRlbnQge1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICYjYmFja2dyb3VuZGltYWdle1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1nL2xvZ2luLWJnLmpwZycpIDIwJSAzMCU7XHJcbiAgICB9XHJcbn1cclxuLmxvZ297XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1dmg7XHJcbiAgICBtYXgtd2lkdGg6IDgwdnc7XHJcbn1cclxuXHJcbmlvbi1jYXJkLWNvbnRlbnR7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzAlKTtcclxufVxyXG5cclxuZm9ybSwgaW9uLWNhcmQtY29udGVudHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaW9uLWNhcmQtc3VidGl0bGV7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgaW9uLWNhcmQtdGl0bGV7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24taXRlbXtcclxuICAgIHdpZHRoOiA5NHZ3ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gICAgJjpsYXN0LWNoaWxke1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIH1cclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5zdWJtaXQtYnV0dG9ue1xyXG4gICAgbWluLXdpZHRoOiA1MHZ3O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLmFsaWduLWJvdHRvbXtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMTB2aCAhaW1wb3J0YW50O1xyXG4gICAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSJdfQ== */");

/***/ }),

/***/ "yL7A":
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./signup.page.html */ "6h0i");
/* harmony import */ var _signup_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.page.scss */ "fJgH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _modal_registration_modal_registration_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal-registration/modal-registration.page */ "U7wi");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../env */ "J50X");










const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Plugins"];

let SignupPage = class SignupPage {
    constructor(router, modalController, authService, http, env) {
        this.router = router;
        this.modalController = modalController;
        this.authService = authService;
        this.http = http;
        this.env = env;
    }
    ngOnInit() { }
    SignupForm() {
        this.authService
            .register(this.username, this.email, this.password)
            .subscribe((data) => {
            if (data && data["token"]) {
                Storage.set({
                    key: "token",
                    value: data["token"],
                }).then(() => {
                    this.http.get(`${this.env.baseUri}/auth/email`).subscribe((data) => {
                        Storage.remove({ key: "token" });
                        this.showCreateTeamModal();
                    }, (error) => {
                        window.alert("Errore sendEmail" +
                            JSON.stringify(error.error.errors[0].msg));
                    });
                });
            }
        }, (error) => {
            window.alert("Errore in registrazione " +
                JSON.stringify(error.error.errors[0].msg));
        });
    }
    showCreateTeamModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_registration_modal_registration_page__WEBPACK_IMPORTED_MODULE_6__["ModalRegistrationPage"],
                cssClass: "small-modal",
                componentProps: {
                    textToShow: "Ti sei registrato con successo! Conferma la tua email per accedere al tuo account.",
                },
            });
            return yield modal.present();
        });
    }
    LoginPage() {
        this.router.navigateByUrl("/login");
    }
};
SignupPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] },
    { type: _env__WEBPACK_IMPORTED_MODULE_10__["GlobalEnv"] }
];
SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-signup",
        template: _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_signup_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SignupPage);



/***/ })

}]);
//# sourceMappingURL=signup-signup-module-es2015.js.map