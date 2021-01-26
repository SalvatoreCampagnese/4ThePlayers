(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar contentId=\"homePage\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button auto-hide=\"false\"></ion-menu-button>\r\n      <ion-badge\r\n        color=\"danger\"\r\n        class=\"badge-notifiche\"\r\n        *ngIf=\"this.env.notificationsCounter + this.env.ticketUpdates\"\r\n      >\r\n        {{this.env.notificationsCounter + this.env.ticketUpdates}}</ion-badge\r\n      >\r\n    </ion-buttons>\r\n    <ion-title>Homepage</ion-title>\r\n    <ion-buttons\r\n      style=\"padding-right: 20px\"\r\n      slot=\"end\"\r\n      (click)=\"showBuyCoins()\"\r\n    >\r\n      <ion-text>{{this.userCoins}}</ion-text>&nbsp;&nbsp;<i\r\n        class=\"fas fa-coins\"\r\n        color=\"orange\"\r\n      ></i>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">Homepage</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <div id=\"container\">\r\n    <strong style=\"margin-left: 15px\">Giochi</strong>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col\r\n          *ngFor=\"let game of gamesList\"\r\n          size=\"6\"\r\n          (click)=\"DetailGame(game._id, game.name)\"\r\n        >\r\n          <ion-card\r\n            color=\"primary\"\r\n            class=\"tournament-card\"\r\n            style=\"background-image: url({{game.imgUrl}});\"\r\n          >\r\n            <div min-height=\"40px\"></div>\r\n            <div class=\"tournament-info\">\r\n              <ion-card-title>{{game.name}}</ion-card-title>\r\n              <ion-card-subtitle\r\n                ><i class=\"fab fa-playstation\"></i>&nbsp;&nbsp;<i\r\n                  class=\"fab fa-xbox\"\r\n                ></i>\r\n              </ion-card-subtitle>\r\n            </div>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  left: 0;\n  right: 0;\n  padding: 10px;\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-row {\n  margin-bottom: 5px;\n}\n\n.titolo {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  text-align: center;\n  font-size: 1.6em;\n  padding-right: 20%;\n  text-shadow: 0 0 7px black;\n}\n\n.container-info-game {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.badge-notifiche {\n  border-radius: 100%;\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  left: 25px;\n  top: 25px;\n}\n\nion-col {\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLE9BQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQURGOztBQUlBO0VBQ0UscUJBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0FBREY7O0FBSUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUFESjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFERjs7QUFJQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0FBREYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4jY29udGFpbmVyIHN0cm9uZyB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG59XHJcblxyXG4jY29udGFpbmVyIHAge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuXHJcbiAgY29sb3I6ICM4YzhjOGM7XHJcblxyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuI2NvbnRhaW5lciBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmlvbi1yb3d7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4udGl0b2xve1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuNmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMjAlO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA3cHggYmxhY2s7XHJcbn1cclxuXHJcbi5jb250YWluZXItaW5mby1nYW1le1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5iYWRnZS1ub3RpZmljaGV7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDI1cHg7XHJcbiAgdG9wOiAyNXB4O1xyXG59XHJcblxyXG5pb24tY29se1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../env */ "J50X");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @capacitor/core */ "gcOT");










const { PushNotifications } = _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Plugins"];
const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Plugins"];
let HomePage = class HomePage {
    constructor(router, authService, http, menuCtrl, env, loadingController) {
        this.router = router;
        this.authService = authService;
        this.http = http;
        this.menuCtrl = menuCtrl;
        this.env = env;
        this.loadingController = loadingController;
        this.gamesList = [];
        this.userCoins = 0;
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Prepare a loading controller
            this.loading = yield this.loadingController.create({
                message: "Caricamento dei giochi corso...",
            });
        });
    }
    ngOnInit() {
        this.authService.getToken().then(() => {
            if (this.authService.isLoggedIn) {
                Storage.get({ key: "token" }).then((data) => {
                    this.env.isLoading = true;
                    this.getGames(data.value);
                    this.menuCtrl.enable(true);
                    this.router.navigateByUrl("/home");
                    this.allowNotifications();
                });
            }
            else {
                this.router.navigateByUrl("/login");
            }
        });
    }
    doRefresh(event) {
        this.authService.getToken().then(() => {
            if (this.authService.isLoggedIn) {
                Storage.get({ key: "token" }).then((data) => {
                    this.env.isLoading = true;
                    this.getGames(data.value);
                    event.target.complete();
                });
            }
            else {
                this.router.navigateByUrl("/login");
            }
        });
    }
    DetailGame(idGame, nomeGioco) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.router.navigate(["/game-detail"], {
                queryParams: { idGame: idGame, gameName: nomeGioco },
            });
        });
    }
    getGames(token) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.presentLoading();
            this.http.get(`${this.env.baseUri}/games`).subscribe((response) => {
                this.gamesList = response;
                this.env.isLoading = false;
            }, (error) => {
                this.env.isLoading = false;
            });
        });
    }
    allowNotifications() {
        PushNotifications.requestPermission().then((result) => {
            if (result.granted) {
                // Register with Apple / Google to receive push via APNS/FCM
                PushNotifications.register();
            }
            else {
                // Show some error
                window.alert("Errore permessi per notifiche");
            }
        });
        // On success, we should be able to receive notifications
        PushNotifications.addListener("registration", (token) => {
            console.log("Push registration success, token: " + token.value);
        });
        // Some issue with our setup and push will not work
        PushNotifications.addListener("registrationError", (error) => {
            console.log("Error on registration: " + JSON.stringify(error));
        });
        // Show us the notification payload if the app is open on our device
        PushNotifications.addListener("pushNotificationReceived", (notification) => {
            console.log("Push received: " + JSON.stringify(notification));
        });
        // Method called when tapping on a notification
        PushNotifications.addListener("pushNotificationActionPerformed", (notification) => {
            console.log("Push action performed: " + JSON.stringify(notification));
        });
    }
    showBuyCoins() {
        this.router.navigateByUrl("/buy-credits");
        // Empty
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"] },
    { type: _env__WEBPACK_IMPORTED_MODULE_8__["GlobalEnv"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-home",
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map