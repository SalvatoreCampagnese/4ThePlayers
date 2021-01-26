(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modal-registration-modal-registration-module"],{

/***/ "3chw":
/*!*************************************************************************!*\
  !*** ./src/app/modal-registration/modal-registration-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ModalRegistrationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalRegistrationPageRoutingModule", function() { return ModalRegistrationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modal_registration_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-registration.page */ "U7wi");




const routes = [
    {
        path: '',
        component: _modal_registration_page__WEBPACK_IMPORTED_MODULE_3__["ModalRegistrationPage"]
    }
];
let ModalRegistrationPageRoutingModule = class ModalRegistrationPageRoutingModule {
};
ModalRegistrationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ModalRegistrationPageRoutingModule);



/***/ }),

/***/ "YA4d":
/*!*****************************************************************!*\
  !*** ./src/app/modal-registration/modal-registration.module.ts ***!
  \*****************************************************************/
/*! exports provided: ModalRegistrationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalRegistrationPageModule", function() { return ModalRegistrationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _modal_registration_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-registration-routing.module */ "3chw");
/* harmony import */ var _modal_registration_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-registration.page */ "U7wi");







let ModalRegistrationPageModule = class ModalRegistrationPageModule {
};
ModalRegistrationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _modal_registration_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalRegistrationPageRoutingModule"]
        ],
        declarations: [_modal_registration_page__WEBPACK_IMPORTED_MODULE_6__["ModalRegistrationPage"]]
    })
], ModalRegistrationPageModule);



/***/ })

}]);
//# sourceMappingURL=modal-registration-modal-registration-module-es2015.js.map