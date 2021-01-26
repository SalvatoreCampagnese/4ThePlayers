(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["buy-credits-buy-credits-module"], {
    /***/
    "CDc0":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/buy-credits/buy-credits.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function CDc0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>buyCredits</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "FatO":
    /*!***************************************************!*\
      !*** ./src/app/buy-credits/buy-credits.module.ts ***!
      \***************************************************/

    /*! exports provided: BuyCreditsPageModule */

    /***/
    function FatO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BuyCreditsPageModule", function () {
        return BuyCreditsPageModule;
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


      var _buy_credits_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./buy-credits-routing.module */
      "jhh6");
      /* harmony import */


      var _buy_credits_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./buy-credits.page */
      "G4Us");

      var BuyCreditsPageModule = function BuyCreditsPageModule() {
        _classCallCheck(this, BuyCreditsPageModule);
      };

      BuyCreditsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _buy_credits_routing_module__WEBPACK_IMPORTED_MODULE_5__["BuyCreditsPageRoutingModule"]],
        declarations: [_buy_credits_page__WEBPACK_IMPORTED_MODULE_6__["BuyCreditsPage"]]
      })], BuyCreditsPageModule);
      /***/
    },

    /***/
    "G4Us":
    /*!*************************************************!*\
      !*** ./src/app/buy-credits/buy-credits.page.ts ***!
      \*************************************************/

    /*! exports provided: BuyCreditsPage */

    /***/
    function G4Us(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BuyCreditsPage", function () {
        return BuyCreditsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_buy_credits_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./buy-credits.page.html */
      "CDc0");
      /* harmony import */


      var _buy_credits_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./buy-credits.page.scss */
      "t9nY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_native_in_app_purchase_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/in-app-purchase/ngx */
      "F7eh");

      var BuyCreditsPage = /*#__PURE__*/function () {
        function BuyCreditsPage(iap) {
          _classCallCheck(this, BuyCreditsPage);

          this.iap = iap;
        }

        _createClass(BuyCreditsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.iap.getProducts(["prod1", "prod2"]).then(function (products) {
              console.log(products); //  [{ productId: 'com.yourapp.prod1', 'title': '...', description: '...', price: '...' }, ...]
            })["catch"](function (err) {
              console.log(err);
            });
            this.iap.buy("prod1").then(function (data) {
              console.log(data); // {
              //   transactionId: ...
              //   receipt: ...
              //   signature: ...
              // }
            })["catch"](function (err) {
              console.log(err);
            });
          }
        }]);

        return BuyCreditsPage;
      }();

      BuyCreditsPage.ctorParameters = function () {
        return [{
          type: _ionic_native_in_app_purchase_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppPurchase"]
        }];
      };

      BuyCreditsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-buy-credits",
        template: _raw_loader_buy_credits_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_buy_credits_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BuyCreditsPage);
      /***/
    },

    /***/
    "jhh6":
    /*!***********************************************************!*\
      !*** ./src/app/buy-credits/buy-credits-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: BuyCreditsPageRoutingModule */

    /***/
    function jhh6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BuyCreditsPageRoutingModule", function () {
        return BuyCreditsPageRoutingModule;
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


      var _buy_credits_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./buy-credits.page */
      "G4Us");

      var routes = [{
        path: '',
        component: _buy_credits_page__WEBPACK_IMPORTED_MODULE_3__["BuyCreditsPage"]
      }];

      var BuyCreditsPageRoutingModule = function BuyCreditsPageRoutingModule() {
        _classCallCheck(this, BuyCreditsPageRoutingModule);
      };

      BuyCreditsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BuyCreditsPageRoutingModule);
      /***/
    },

    /***/
    "t9nY":
    /*!***************************************************!*\
      !*** ./src/app/buy-credits/buy-credits.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function t9nY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1eS1jcmVkaXRzL2J1eS1jcmVkaXRzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=buy-credits-buy-credits-module-es5.js.map