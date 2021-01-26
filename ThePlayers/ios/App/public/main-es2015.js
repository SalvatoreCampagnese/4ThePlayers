(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user\Desktop\4ThePlayers\ThePlayers\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "J50X":
/*!************************!*\
  !*** ./src/app/env.ts ***!
  \************************/
/*! exports provided: GlobalEnv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalEnv", function() { return GlobalEnv; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


/*
  Generated class for the GlobalProvider provider.
*/
let GlobalEnv = class GlobalEnv {
    constructor() {
        this.baseUri = "https://for-the-players.herokuapp.com";
        //public baseUri: string = "http://localhost:3000";
        this.notificationsCounter = null;
        this.ticketUpdates = null;
        this.isLoading = false;
    }
};
GlobalEnv = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], GlobalEnv);



/***/ }),

/***/ "RDNO":
/*!**************************************************!*\
  !*** ./src/app/interceptors/auth.interceptor.ts ***!
  \**************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ "gcOT");




const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"];
let AuthInterceptor = class AuthInterceptor {
    constructor() { }
    intercept(request, next) {
        if (!request.url.includes('/login')) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.handleAuth(request, next));
        }
        return next.handle(request);
    }
    handleAuth(request, next) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const token = yield Storage.get({ key: "token" });
            request = request.clone({
                setHeaders: { 'Authorization': `Bearer ${token.value}` }
            });
            return next.handle(request).toPromise();
        });
    }
};
AuthInterceptor.ctorParameters = () => [];
AuthInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthInterceptor);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/network/ngx */ "kwrG");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./env */ "J50X");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! jwt-decode */ "EjJx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "tyNb");










const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Plugins"];




let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar, network, router, http, authService, env) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.network = network;
        this.router = router;
        this.http = http;
        this.authService = authService;
        this.env = env;
        this.userId = null;
        this.initializeApp();
        this.sideMenu();
        //
        this.platform.ready().then(() => {
            let disconnected = false;
            this.network.onDisconnect().subscribe(() => {
                alert("Per utilizzare l'app devi avere una connessione ad internet.");
                disconnected = true;
            });
            this.network.onConnect().subscribe(() => {
                if (disconnected) {
                    location.reload();
                    disconnected = false;
                }
            });
        });
        // disconnectSubscription.unsubscribe();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
        this.authService.getToken().then(() => {
            this.getInvites();
            this.getTickets();
        });
    }
    getInvites() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(new Date().toLocaleString() + " - getInvites");
            const token = yield Storage.get({ key: "token" }).then((data) => {
                if (data.value) {
                    return data.value;
                }
            });
            if (token) {
                const decodedToken = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_12__["default"])(token);
                const userId = decodedToken["id"];
                this.userId = userId;
                this.http.get(this.env.baseUri + `/users/${userId}`).subscribe((resp) => {
                    if (resp && resp["user"].invites && resp["user"].invites.length) {
                        let count = 0;
                        for (let i = 0; i < resp["user"].invites.length; i++) {
                            if (resp["user"].invites[i].status == "PENDING") {
                                count++;
                            }
                        }
                        this.env.notificationsCounter = count;
                    }
                    else {
                        this.env.notificationsCounter = 0;
                    }
                }, (error) => {
                    // Empty
                });
            }
            if (!this.getInviteInterval) {
                this.getInviteInterval = setInterval(this.getInvites.bind(this), 60000);
            }
        });
    }
    getTickets() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(new Date().toLocaleString() + " - getTickets");
            const token = yield Storage.get({ key: "token" }).then((data) => {
                if (data.value) {
                    return data.value;
                }
            });
            if (token) {
                const decodedToken = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_12__["default"])(token);
                const userId = decodedToken["id"];
                this.userId = userId;
                this.http.get(this.env.baseUri + `/tickets`).subscribe((resp) => {
                    let counterTickets = 0;
                    for (let i = 0; i < Object.keys(resp).length; i++) {
                        if (resp[i] && resp[i].status === 'NEW') {
                            counterTickets++;
                        }
                    }
                    this.env.ticketUpdates = counterTickets;
                    this.sideMenu();
                }, (error) => {
                    // Empty
                });
            }
            if (!this.getTicketsInterval) {
                this.getTicketsInterval = setInterval(this.getTickets.bind(this), 120000);
            }
        });
    }
    sideMenu() {
        this.navigate = [
            {
                title: "Home",
                url: "/home",
                icon: "home",
            },
            {
                title: "Profilo",
                url: "/user-detail",
                icon: "game-controller",
            },
            {
                title: "Inviti",
                url: "/invites",
                icon: "notifications",
                notificationsCount: this.env.notificationsCounter,
            },
            {
                title: "Tickets",
                url: "/user-tickets",
                icon: "alert-circle-sharp",
                ticketUpdates: this.env.ticketUpdates,
            },
            {
                title: "Logout",
                url: "/logout",
                icon: "exit",
            },
        ];
    }
    openTicket() {
        this.router.navigateByUrl("/ticket");
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__["Network"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] },
    { type: _env__WEBPACK_IMPORTED_MODULE_9__["GlobalEnv"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-root",
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n  <ion-menu side=\"start\" menuId=\"first\" contentId=\"content1\">\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <ion-title>Menu</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content>\r\n      <ion-list *ngFor=\"let pages of navigate\">\r\n        <ion-menu-toggle auto-hide=\"true\">\r\n          <ion-item [routerLink]=\"pages.url\" routerDirection=\"forward\">\r\n            <ion-icon [name]=\"pages.icon\" slot=\"start\"></ion-icon>\r\n            <ion-badge\r\n              color=\"danger\"\r\n              class=\"badge-notifiche-menu\"\r\n              *ngIf=\"pages.notificationsCount\"\r\n            >\r\n              {{ pages.notificationsCount }}</ion-badge\r\n            >\r\n            <ion-badge\r\n              color=\"danger\"\r\n              class=\"badge-notifiche-menu left-65\"\r\n              *ngIf=\"pages.ticketUpdates\"\r\n            >\r\n              {{ this.env.ticketUpdates }}</ion-badge\r\n            >\r\n            {{ pages.title }}\r\n          </ion-item>\r\n        </ion-menu-toggle>\r\n      </ion-list>\r\n      <div style=\"text-align: center\">\r\n        <ion-title center>Main Sponsor</ion-title>\r\n        <img src=\"../assets/img/hydralogo.png\" style=\"width: 45vw\" /><br />\r\n        <a href=\"https://discord.gg/s9mRV5tUNY\"\r\n          ><img src=\"../assets/img/logodiscord.png\" style=\"width: 45vw\"\r\n        /></a>\r\n      </div>\r\n    </ion-content>\r\n  </ion-menu>\r\n  <ion-router-outlet id=\"content1\">\r\n    <div class=\"loading-wrapper\" *ngIf=\"this.env.isLoading\">\r\n      <ion-spinner name=\"dots\"></ion-spinner>\r\n      <br />\r\n      Caricamento in corso...\r\n    </div>\r\n    <div\r\n      class=\"ticket-button\"\r\n      *ngIf=\"this.authService.isLoggedIn\"\r\n      (click)=\"openTicket()\"\r\n    >\r\n      <i class=\"fas fa-exclamation\"></i>\r\n    </div>\r\n  </ion-router-outlet>\r\n</ion-app>\r\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./env */ "J50X");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/network/ngx */ "kwrG");
/* harmony import */ var _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./interceptors/auth.interceptor */ "RDNO");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _ionic_native_in_app_purchase_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/in-app-purchase/ngx */ "F7eh");
















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__["ServiceWorkerModule"].register("ngsw-worker.js", {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].production,
            }),
        ],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
            _ionic_native_in_app_purchase_ngx__WEBPACK_IMPORTED_MODULE_15__["InAppPurchase"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] },
            _env__WEBPACK_IMPORTED_MODULE_10__["GlobalEnv"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_11__["Network"],
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__["AuthInterceptor"], multi: true },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "cT6d":
/*!*************************************!*\
  !*** ./src/app/guard/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");




let AuthGuard = class AuthGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate(next, state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.authService.getToken();
            if (this.authService.isLoggedIn) {
                // authorised so return true
                return true;
            }
            // not logged in so redirect to login page with the return url
            this.router.navigate(["/login"]);
            return false;
        });
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], AuthGuard);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../env */ "J50X");






const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"];

let AuthService = class AuthService {
    constructor(http, router, env) {
        this.http = http;
        this.router = router;
        this.env = env;
        this.isLoggedIn = false;
    }
    login(email, password) {
        return this.http
            .post(this.env.baseUri + "/auth/login", {
            email: email,
            password: password,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((token) => {
            if (token['status'] === 'NOT_VERIFIED') {
                window.alert('Non hai ancora verificato il tuo account, controlla la tua email.');
                return;
            }
            Storage.set({
                key: "token",
                value: token["token"],
            }).then(() => {
                this.router.navigateByUrl("/home");
            }, (error) => console.error("Error storing item", error));
            this.token = token;
            this.isLoggedIn = true;
            return token;
        }));
    }
    register(userName, email, password) {
        return this.http.post(this.env.baseUri + "/auth/signup", {
            username: userName,
            email: email,
            password: password,
        });
    }
    logout() {
        Storage.remove({ key: "token" });
        return true;
    }
    user() {
        return this.http
            .get(this.env.baseUri + "auth/user")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((user) => {
            return user;
        }));
    }
    getToken() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield Storage.get({ key: "token" }).then((data) => {
                this.token = data.value;
                if (this.token != null) {
                    this.isLoggedIn = true;
                }
                else {
                    this.isLoggedIn = false;
                }
            }, (error) => {
                this.token = null;
                this.isLoggedIn = false;
            });
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _env__WEBPACK_IMPORTED_MODULE_6__["GlobalEnv"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: "root",
    })
], AuthService);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guard/auth.guard */ "cT6d");




const routes = [
    {
        path: "home",
        loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then((m) => m.HomePageModule),
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
    },
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full",
    },
    {
        path: "login",
        loadChildren: () => __webpack_require__.e(/*! import() | login-login-module */ "login-login-module").then(__webpack_require__.bind(null, /*! ./login/login.module */ "X3zk")).then((m) => m.LoginPageModule),
    },
    {
        path: "signup",
        loadChildren: () => Promise.all(/*! import() | signup-signup-module */[__webpack_require__.e("common"), __webpack_require__.e("signup-signup-module")]).then(__webpack_require__.bind(null, /*! ./signup/signup.module */ "T9iC")).then((m) => m.SignupPageModule),
    },
    {
        path: "tournament-detail",
        loadChildren: () => Promise.all(/*! import() | tournament-detail-tournament-detail-module */[__webpack_require__.e("common"), __webpack_require__.e("tournament-detail-tournament-detail-module")]).then(__webpack_require__.bind(null, /*! ./tournament-detail/tournament-detail.module */ "Okdo")).then((m) => m.TournamentDetailPageModule),
    },
    {
        path: "modal-page-create-team",
        loadChildren: () => Promise.all(/*! import() | modal-page-create-team-modal-page-create-team-module */[__webpack_require__.e("common"), __webpack_require__.e("modal-page-create-team-modal-page-create-team-module")]).then(__webpack_require__.bind(null, /*! ./modal-page-create-team/modal-page-create-team.module */ "z9CW")).then((m) => m.ModalPageCreateTeamPageModule),
    },
    {
        path: "modal-registration",
        loadChildren: () => Promise.all(/*! import() | modal-registration-modal-registration-module */[__webpack_require__.e("common"), __webpack_require__.e("modal-registration-modal-registration-module")]).then(__webpack_require__.bind(null, /*! ./modal-registration/modal-registration.module */ "YA4d")).then((m) => m.ModalRegistrationPageModule),
    },
    {
        path: "logout",
        loadChildren: () => __webpack_require__.e(/*! import() | logout-logout-module */ "logout-logout-module").then(__webpack_require__.bind(null, /*! ./logout/logout.module */ "q6at")).then((m) => m.LogoutPageModule),
    },
    {
        path: "game-detail",
        loadChildren: () => __webpack_require__.e(/*! import() | game-detail-game-detail-module */ "game-detail-game-detail-module").then(__webpack_require__.bind(null, /*! ./game-detail/game-detail.module */ "iv5H")).then((m) => m.GameDetailPageModule),
    },
    {
        path: "edit-profile",
        loadChildren: () => __webpack_require__.e(/*! import() | edit-profile-edit-profile-module */ "edit-profile-edit-profile-module").then(__webpack_require__.bind(null, /*! ./edit-profile/edit-profile.module */ "Wvzw")).then((m) => m.ProfilePageModule),
    },
    {
        path: "users",
        loadChildren: () => __webpack_require__.e(/*! import() | users-users-module */ "users-users-module").then(__webpack_require__.bind(null, /*! ./users/users.module */ "zrcO")).then((m) => m.UsersPageModule),
    },
    {
        path: "team-detail",
        loadChildren: () => __webpack_require__.e(/*! import() | team-detail-team-detail-module */ "team-detail-team-detail-module").then(__webpack_require__.bind(null, /*! ./team-detail/team-detail.module */ "k8s1")).then((m) => m.TeamDetailPageModule),
    },
    {
        path: "user-detail",
        loadChildren: () => __webpack_require__.e(/*! import() | user-detail-user-detail-module */ "user-detail-user-detail-module").then(__webpack_require__.bind(null, /*! ./user-detail/user-detail.module */ "Ov+x")).then((m) => m.UserDetailPageModule),
    },
    {
        path: "invites",
        loadChildren: () => __webpack_require__.e(/*! import() | invites-invites-module */ "invites-invites-module").then(__webpack_require__.bind(null, /*! ./invites/invites.module */ "QFw5")).then((m) => m.InvitesPageModule),
    },
    {
        path: "forgot-password",
        loadChildren: () => __webpack_require__.e(/*! import() | forgot-password-forgot-password-module */ "forgot-password-forgot-password-module").then(__webpack_require__.bind(null, /*! ./forgot-password/forgot-password.module */ "JgOp")).then((m) => m.ForgotPasswordPageModule),
    },
    {
        path: "reset-password",
        loadChildren: () => __webpack_require__.e(/*! import() | reset-password-reset-password-module */ "reset-password-reset-password-module").then(__webpack_require__.bind(null, /*! ./reset-password/reset-password.module */ "Rr42")).then((m) => m.ResetPasswordPageModule),
    },
    {
        path: 'ticket',
        loadChildren: () => __webpack_require__.e(/*! import() | ticket-ticket-module */ "ticket-ticket-module").then(__webpack_require__.bind(null, /*! ./ticket/ticket.module */ "ROBH")).then(m => m.TicketPageModule)
    },
    {
        path: 'user-tickets',
        loadChildren: () => __webpack_require__.e(/*! import() | user-tickets-user-tickets-module */ "user-tickets-user-tickets-module").then(__webpack_require__.bind(null, /*! ./user-tickets/user-tickets.module */ "Xfli")).then(m => m.UserTicketsPageModule)
    },
    {
        path: 'bracket-tournament',
        loadChildren: () => __webpack_require__.e(/*! import() | bracket-tournament-bracket-tournament-module */ "bracket-tournament-bracket-tournament-module").then(__webpack_require__.bind(null, /*! ./bracket-tournament/bracket-tournament.module */ "/tHz")).then(m => m.BracketTournamentPageModule)
    },
    {
        path: 'buy-credits',
        loadChildren: () => __webpack_require__.e(/*! import() | buy-credits-buy-credits-module */ "buy-credits-buy-credits-module").then(__webpack_require__.bind(null, /*! ./buy-credits/buy-credits.module */ "FatO")).then(m => m.BuyCreditsPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map