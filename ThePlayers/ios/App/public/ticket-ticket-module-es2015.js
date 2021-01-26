(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ticket-ticket-module"],{

/***/ "05mq":
/*!*****************************************!*\
  !*** ./src/app/ticket/ticket.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpY2tldC90aWNrZXQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "6SUL":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ticket/ticket.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Nuovo ticket</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form style=\"padding: 10px\" (ngSubmit)=\"createTicket()\">\r\n    <ion-item color=\"white\">\r\n      <ion-label><i class=\"fas fa-pen\"></i></ion-label>\r\n      <ion-input\r\n        type=\"text\"\r\n        [(ngModel)]=\"subject\"\r\n        name=\"subject\"\r\n        placeholder=\"Oggetto...\"\r\n      ></ion-input>\r\n    </ion-item>\r\n    <br />\r\n    <ion-item color=\"white\">\r\n      <ion-label><i class=\"fas fa-align-left\"></i></ion-label>\r\n      <ion-textarea\r\n        type=\"text\"\r\n        rows=\"4\"\r\n        [(ngModel)]=\"description\"\r\n        name=\"description\"\r\n        placeholder=\"Descrizione...\"\r\n      ></ion-textarea>\r\n    </ion-item>\r\n    <br />\r\n    <ion-select\r\n      color=\"white\"\r\n      type=\"text\"\r\n      [(ngModel)]=\"category\"\r\n      name=\"category\"\r\n      placeholder=\"Categoria...\"\r\n      style=\"width: 100%; min-height: 50px\"\r\n    >\r\n      <ion-select-option value=\"GENERAL_INQUIRY\">Generale</ion-select-option>\r\n      <ion-select-option value=\"PAYMENT\">Pagamento/Ordine</ion-select-option>\r\n    </ion-select>\r\n    <br />\r\n    <br />\r\n    <ion-text>Allegati</ion-text>\r\n    <ion-grid>\r\n      <ion-row\r\n        size=\"12\"\r\n        *ngFor=\"let attachment of attachments; let i = index\"\r\n        style=\"margin-bottom: 5px\"\r\n      >\r\n        <ion-col size=\"8\">\r\n          <ion-item color=\"white\">\r\n            <ion-label><i class=\"fas fa-paperclip\"></i></ion-label>\r\n            <ion-input\r\n              type=\"url\"\r\n              placeholder=\"Link allegato {{i+1}}... \"\r\n              [(ngModel)]=\"attachments[i].value\"\r\n              name=\"{{i}}\"\r\n            ></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col size=\"2\">\r\n          <ion-button\r\n            [disabled]=\"attachments.length >= 5\"\r\n            (click)=\"addAttachment()\"\r\n            ><i class=\"fas fa-plus\"></i\r\n          ></ion-button>\r\n        </ion-col>\r\n        <ion-col size=\"2\">\r\n          <ion-button [disabled]=\"i == 0\" (click)=\"removeAttachment(i)\"\r\n            ><i class=\"fas fa-times\"></i\r\n          ></ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <ion-button color=\"success\" type=\"submit\">Crea Ticket</ion-button>\r\n  </form>\r\n</ion-content>\r\n");

/***/ }),

/***/ "HJnd":
/*!*************************************************!*\
  !*** ./src/app/ticket/ticket-routing.module.ts ***!
  \*************************************************/
/*! exports provided: TicketPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketPageRoutingModule", function() { return TicketPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ticket_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ticket.page */ "qG1E");




const routes = [
    {
        path: '',
        component: _ticket_page__WEBPACK_IMPORTED_MODULE_3__["TicketPage"]
    }
];
let TicketPageRoutingModule = class TicketPageRoutingModule {
};
TicketPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TicketPageRoutingModule);



/***/ }),

/***/ "ROBH":
/*!*****************************************!*\
  !*** ./src/app/ticket/ticket.module.ts ***!
  \*****************************************/
/*! exports provided: TicketPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketPageModule", function() { return TicketPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ticket_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ticket-routing.module */ "HJnd");
/* harmony import */ var _ticket_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ticket.page */ "qG1E");







let TicketPageModule = class TicketPageModule {
};
TicketPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ticket_routing_module__WEBPACK_IMPORTED_MODULE_5__["TicketPageRoutingModule"]
        ],
        declarations: [_ticket_page__WEBPACK_IMPORTED_MODULE_6__["TicketPage"]]
    })
], TicketPageModule);



/***/ }),

/***/ "qG1E":
/*!***************************************!*\
  !*** ./src/app/ticket/ticket.page.ts ***!
  \***************************************/
/*! exports provided: TicketPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketPage", function() { return TicketPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ticket_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ticket.page.html */ "6SUL");
/* harmony import */ var _ticket_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ticket.page.scss */ "05mq");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../env */ "J50X");







let TicketPage = class TicketPage {
    constructor(http, router, env) {
        this.http = http;
        this.router = router;
        this.env = env;
        this.attachments = [{ value: "" }];
    }
    ngOnInit() { }
    createTicket() {
        let attachmentsList = [];
        if (this.attachments) {
            this.attachments.forEach((element) => {
                if (element.value) {
                    attachmentsList.push(element.value);
                }
            });
        }
        const dataToPost = {
            subject: this.subject,
            description: this.description,
            category: this.category,
            attachments: attachmentsList,
        };
        this.http
            .post(`${this.env.baseUri}/tickets`, dataToPost)
            .subscribe((resp) => {
            this.router.navigateByUrl("user-tickets");
        });
    }
    addAttachment() {
        this.attachments.length < 5 ? this.attachments.push({ value: "" }) : "";
    }
    removeAttachment(i) {
        i ? this.attachments.splice(i, 1) : "";
    }
};
TicketPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _env__WEBPACK_IMPORTED_MODULE_6__["GlobalEnv"] }
];
TicketPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: "app-ticket",
        template: _raw_loader_ticket_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ticket_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TicketPage);



/***/ })

}]);
//# sourceMappingURL=ticket-ticket-module-es2015.js.map