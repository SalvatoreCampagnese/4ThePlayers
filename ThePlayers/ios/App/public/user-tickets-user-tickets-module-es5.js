(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-tickets-user-tickets-module"], {
    /***/
    "/yHb":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-tickets/user-tickets.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function yHb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n      <ion-badge\r\n        color=\"danger\"\r\n        class=\"badge-notifiche\"\r\n        *ngIf=\"this.env.notificationsCounter + this.env.ticketUpdates\"\r\n      >\r\n        {{this.env.notificationsCounter + this.env.ticketUpdates}}</ion-badge\r\n      >\r\n    </ion-buttons>\r\n    <ion-title>Tickets</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content style=\"padding-top: 15px\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <br />\r\n  <ion-title>Ticket Aperti</ion-title>\r\n  <br />\r\n  <ion-grid class=\"vertical-center\" *ngIf=\"ticketsList.length > 0\">\r\n    <ion-row size=\"12\" class=\"header\">\r\n      <ion-col size=\"5\">Titolo</ion-col>\r\n      <ion-col size=\"4\">Data</ion-col>\r\n      <ion-col size=\"1\">Stato</ion-col>\r\n      <ion-col size=\"2\">&nbsp;</ion-col>\r\n    </ion-row>\r\n    <ion-row size=\"12\" *ngFor=\"let ticket of ticketsList\">\r\n      <ion-col size=\"5\">{{ticket.subject}}</ion-col>\r\n      <ion-col size=\"4\">\r\n        <ion-datetime\r\n          value=\"{{ticket.createdAt}}\"\r\n          display-timezone=\"utc\"\r\n          displayFormat=\"DD/MM/YYYY HH:mm:ss\"\r\n          disabled\r\n        ></ion-datetime>\r\n      </ion-col>\r\n      <ion-col size=\"1\">\r\n        <i class=\"fas fa-check\" *ngIf=\"ticket.status === 'SOLVED'\"></i>\r\n        <i class=\"fas fa-clock\" *ngIf=\"ticket.status === 'IN_PROGRESS'\"></i>\r\n        <i class=\"fas fa-star\" *ngIf=\"ticket.status === 'NEW'\"></i>\r\n      </ion-col>\r\n      <ion-col size=\"2\"\r\n        ><ion-button color=\"success\" (click)=\"openTicketDetail(ticket._id)\"\r\n          ><i class=\"fas fa-search\"></i></ion-button\r\n      ></ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <div class=\"ticket-detail-container\" *ngIf=\"showTicketInfo\">\r\n    <div class=\"ticket-detail-modal\">\r\n      <h1>Ticket</h1>\r\n      <div *ngIf=\"ticketInfo.category === 'DISPUTE'\">\r\n        <ion-text\r\n          >{{ticketInfo.matchObj.teamOneName}} vs\r\n          {{ticketInfo.matchObj.teamTwoName}}</ion-text\r\n        ><br /><br />\r\n        <ion-text><b>Torneo</b><br />{{ticketInfo.tournamentName}}</ion-text>\r\n        <ion-datetime\r\n          value=\"{{ticketInfo.createdAt}}\"\r\n          display-timezone=\"utc\"\r\n          displayFormat=\"DD/MM/YYYY HH:mm:ss\"\r\n          disabled\r\n        ></ion-datetime\r\n        ><br /><br />\r\n      </div>\r\n      <div *ngIf=\"ticketInfo.category !== 'DISPUTE'\">\r\n        <ion-datetime\r\n          value=\"{{ticketInfo.createdAt}}\"\r\n          display-timezone=\"utc\"\r\n          displayFormat=\"DD/MM/YYYY HH:mm:ss\"\r\n          disabled\r\n        ></ion-datetime>\r\n      </div>\r\n      <br />\r\n      <ion-text style=\"font-weight: bold\">Messaggi</ion-text><br />\r\n      <div *ngIf=\"ticketInfo.messages.length == 0\">Nessun messaggio...</div>\r\n      <div *ngIf=\"ticketInfo.messages.length > 0\">\r\n        <ion-grid style=\"width: 100%\" class=\"no-background\">\r\n          <ion-row\r\n            size=\"12\"\r\n            *ngFor=\"let message of ticketInfo.messages, let i = index\"\r\n          >\r\n            <ion-col>\r\n              <ion-row *ngIf=\"message.fromAdminPanel\"\r\n                ><p\r\n                  style=\"margin: 5px 0px\"\r\n                  [ngClass]=\"(message.user._id !== loggedUserId) ? 'text-align-right admin' : 'admin'\"\r\n                >\r\n                  {{message.user.username}}\r\n                </p></ion-row\r\n              >\r\n              <ion-row *ngIf=\"!message.fromAdminPanel\"\r\n                ><p\r\n                  style=\"margin: 5px 0px\"\r\n                  [ngClass]=\"(message.user._id !== loggedUserId) ? 'text-align-right' : ''\"\r\n                >\r\n                  {{message.user.username}}\r\n                </p></ion-row\r\n              >\r\n              <ion-row\r\n                ><p\r\n                  [ngClass]=\"(message.user._id !== loggedUserId) ? 'text-align-right italic' : 'italic'\"\r\n                >\r\n                  <ion-datetime\r\n                    value=\"{{message.createdAt}}\"\r\n                    display-timezone=\"utc\"\r\n                    displayFormat=\"DD/MM/YYYY HH:mm:ss\"\r\n                    disabled\r\n                  ></ion-datetime></p\r\n              ></ion-row>\r\n              <ion-row\r\n                ><p\r\n                  [ngClass]=\"(message.user._id !== loggedUserId) ? 'text-align-right margin-5-0' : 'margin-5-0'\"\r\n                >\r\n                  {{message.message}}\r\n                </p></ion-row\r\n              >\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n      <br /><br />\r\n      <form (submit)=\"addMessageToTicket(ticketInfo._id)\">\r\n        <ion-item color=\"white\">\r\n          <ion-textarea\r\n            [(ngModel)]=\"newMessage\"\r\n            name=\"newMessage\"\r\n            placeholder=\"Aggiungi messaggio...\"\r\n            rows=\"5\"\r\n            required\r\n          >\r\n          </ion-textarea>\r\n        </ion-item>\r\n\r\n        <ion-button color=\"success\" type=\"submit\"\r\n          >Aggiungi messaggio</ion-button\r\n        >\r\n        <ion-button color=\"danger\" (click)=\"closeTicketDetail()\"\r\n          >Chiudi</ion-button\r\n        >\r\n      </form>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "R94C":
    /*!***************************************************!*\
      !*** ./src/app/user-tickets/user-tickets.page.ts ***!
      \***************************************************/

    /*! exports provided: UserTicketsPage */

    /***/
    function R94C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserTicketsPage", function () {
        return UserTicketsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_user_tickets_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./user-tickets.page.html */
      "/yHb");
      /* harmony import */


      var _user_tickets_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-tickets.page.scss */
      "ma4t");
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


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../services/auth.service */
      "lGQG");
      /* harmony import */


      var jwt_decode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! jwt-decode */
      "EjJx");

      var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"].Storage;

      var UserTicketsPage = /*#__PURE__*/function () {
        function UserTicketsPage(router, authService, http, env) {
          _classCallCheck(this, UserTicketsPage);

          this.router = router;
          this.authService = authService;
          this.http = http;
          this.env = env;
          this.ticketsList = [];
          this.ticketInfo = [];
          this.showTicketInfo = false;
          this.newMessage = null;
          this.loggedUserId = null;
        }

        _createClass(UserTicketsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.authService.getToken().then(function () {
              if (_this.authService.isLoggedIn) {
                Storage.get({
                  key: "token"
                }).then(function (data) {
                  var decodedToken = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_9__["default"])(data.value);
                  _this.loggedUserId = decodedToken["id"];

                  _this.getTickets();
                });
              } else {
                _this.router.navigateByUrl("/login");
              }
            });
          }
        }, {
          key: "getTickets",
          value: function getTickets() {
            var _this2 = this;

            this.http.get("".concat(this.env.baseUri, "/tickets")).subscribe(function (resp) {
              _this2.ticketsList = resp;
            });
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
                  var decodedToken = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_9__["default"])(data.value);
                  var userId = decodedToken["id"];

                  if (userId) {
                    _this3.getTickets();
                  }

                  event.target.complete();
                });
              } else {
                _this3.router.navigateByUrl("/login");
              }
            });
          }
        }, {
          key: "openTicketDetail",
          value: function openTicketDetail(ticketId) {
            var _this4 = this;

            if (!ticketId) return;
            this.ticketInfo = [];
            this.http.get("".concat(this.env.baseUri, "/tickets/").concat(ticketId)).subscribe(function (resp) {
              _this4.ticketInfo = resp;
              _this4.showTicketInfo = true;
            });
          }
        }, {
          key: "closeTicketDetail",
          value: function closeTicketDetail() {
            this.ticketInfo = [];
            this.showTicketInfo = false;
          }
        }, {
          key: "addMessageToTicket",
          value: function addMessageToTicket(ticketId) {
            if (!this.newMessage) return;
            this.http.post("".concat(this.env.baseUri, "/tickets/").concat(ticketId, "/messages"), {
              message: this.newMessage,
              fromAdminPanel: false
            }).subscribe(function (resp) {
              window.alert("Messaggio inviato correttamente.");
              location.reload();
            });
          }
        }]);

        return UserTicketsPage;
      }();

      UserTicketsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _env__WEBPACK_IMPORTED_MODULE_7__["GlobalEnv"]
        }];
      };

      UserTicketsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: "app-user-tickets",
        template: _raw_loader_user_tickets_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_tickets_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], UserTicketsPage);
      /***/
    },

    /***/
    "TP8x":
    /*!*************************************************************!*\
      !*** ./src/app/user-tickets/user-tickets-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: UserTicketsPageRoutingModule */

    /***/
    function TP8x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserTicketsPageRoutingModule", function () {
        return UserTicketsPageRoutingModule;
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


      var _user_tickets_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-tickets.page */
      "R94C");

      var routes = [{
        path: '',
        component: _user_tickets_page__WEBPACK_IMPORTED_MODULE_3__["UserTicketsPage"]
      }];

      var UserTicketsPageRoutingModule = function UserTicketsPageRoutingModule() {
        _classCallCheck(this, UserTicketsPageRoutingModule);
      };

      UserTicketsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UserTicketsPageRoutingModule);
      /***/
    },

    /***/
    "Xfli":
    /*!*****************************************************!*\
      !*** ./src/app/user-tickets/user-tickets.module.ts ***!
      \*****************************************************/

    /*! exports provided: UserTicketsPageModule */

    /***/
    function Xfli(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserTicketsPageModule", function () {
        return UserTicketsPageModule;
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


      var _user_tickets_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user-tickets-routing.module */
      "TP8x");
      /* harmony import */


      var _user_tickets_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./user-tickets.page */
      "R94C");

      var UserTicketsPageModule = function UserTicketsPageModule() {
        _classCallCheck(this, UserTicketsPageModule);
      };

      UserTicketsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _user_tickets_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserTicketsPageRoutingModule"]],
        declarations: [_user_tickets_page__WEBPACK_IMPORTED_MODULE_6__["UserTicketsPage"]]
      })], UserTicketsPageModule);
      /***/
    },

    /***/
    "ma4t":
    /*!*****************************************************!*\
      !*** ./src/app/user-tickets/user-tickets.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function ma4t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-grid {\n  background: white;\n  color: #2d2d2d;\n  border-radius: 5px;\n  width: 94vw;\n  left: 3vw;\n}\n\nion-grid.no-background {\n  background: transparent;\n}\n\nion-row {\n  background: white;\n  margin-bottom: 5px;\n  border-radius: 5px;\n}\n\n.vertical-center ion-col {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-row.header ion-col {\n  font-weight: bold;\n}\n\n.ticket-detail-container {\n  width: 100%;\n  height: 50vh;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n  position: absolute;\n  top: 250px;\n  left: 0px;\n}\n\n.ticket-detail-container .ticket-detail-modal {\n  background: #2d2d2d;\n  min-width: 90vw;\n  padding: 15px 30px;\n  border-radius: 10px;\n  text-align: center;\n  max-height: 83vh;\n  bottom: 2vh;\n  position: absolute;\n  overflow: scroll;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);\n}\n\n.text-align-right {\n  text-align: right !important;\n}\n\nion-row p {\n  width: 100%;\n  text-align: left;\n}\n\nion-row p.text-align-right {\n  text-align: right;\n}\n\nion-row p.italic {\n  font-style: italic;\n  margin: 0 0;\n  font-size: 11px;\n}\n\nion-row p.margin-5-0 {\n  margin: 5px 0px;\n}\n\nion-row p.admin {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci10aWNrZXRzL3VzZXItdGlja2V0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBRUE7RUFFSSx1QkFBQTtBQUFKOztBQUdBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBSUk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQURSOztBQU1JO0VBQ0ksaUJBQUE7QUFIUjs7QUFPQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBSko7O0FBTUk7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFBdUIsZ0JBQUE7RUFDdkIsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtBQUhSOztBQU9BO0VBQ0ksNEJBQUE7QUFKSjs7QUFPQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQUpKOztBQU1JO0VBQ0ksaUJBQUE7QUFKUjs7QUFPSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFMUjs7QUFRSTtFQUNJLGVBQUE7QUFOUjs7QUFTSTtFQUNJLFVBQUE7QUFQUiIsImZpbGUiOiJzcmMvYXBwL3VzZXItdGlja2V0cy91c2VyLXRpY2tldHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWdyaWQge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBjb2xvcjogIzJkMmQyZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHdpZHRoOiA5NHZ3O1xyXG4gICAgbGVmdDogM3Z3O1xyXG59XHJcblxyXG5pb24tZ3JpZC5uby1iYWNrZ3JvdW5kIHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuaW9uLXJvdyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnZlcnRpY2FsLWNlbnRlciB7XHJcbiAgICBpb24tY29sIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1yb3cuaGVhZGVyIHtcclxuICAgIGlvbi1jb2wge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG59XHJcblxyXG4udGlja2V0LWRldGFpbC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgei1pbmRleDogOTk5OTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjUwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcblxyXG4gICAgLnRpY2tldC1kZXRhaWwtbW9kYWwge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMyZDJkMmQ7XHJcbiAgICAgICAgbWluLXdpZHRoOiA5MHZ3O1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHggMzBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgbWF4LWhlaWdodDogODN2aDtcclxuICAgICAgICBib3R0b206IDJ2aDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgfVxyXG59XHJcblxyXG4udGV4dC1hbGlnbi1yaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tcm93IHAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxuICAgICYudGV4dC1hbGlnbi1yaWdodCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHRcclxuICAgIH1cclxuXHJcbiAgICAmLml0YWxpYyB7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIG1hcmdpbjogMCAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIH1cclxuXHJcbiAgICAmLm1hcmdpbi01LTAge1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDBweDtcclxuICAgIH1cclxuXHJcbiAgICAmLmFkbWluIHtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgfVxyXG59Il19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-tickets-user-tickets-module-es5.js.map