(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tournament-detail-tournament-detail-module"], {
    /***/
    "/8sc":
    /*!***************************************************************!*\
      !*** ./src/app/tournament-detail/tournament-detail.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function sc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  min-height: 100vh;\n  min-width: 100vw;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  text-align: center;\n}\n\ndiv#container {\n  width: 100%;\n  text-align: center;\n}\n\ndiv#container.flex-direction-column {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\ndiv#container ion-text {\n  width: 90%;\n  text-align: center;\n}\n\n.my-team {\n  color: red !important;\n}\n\nion-grid {\n  background: white;\n  color: #2d2d2d;\n  border-radius: 5px;\n  width: 94vw;\n  left: 3vw;\n}\n\nion-grid.no-background {\n  background: transparent !important;\n}\n\nion-row ion-row {\n  background: #2d2d2d;\n  color: white;\n  border-radius: 5px;\n  padding: 2px;\n}\n\nion-row.team-one:after {\n  content: \"\";\n  width: 100%;\n  background: linear-gradient(to right, #15981359, transparent, transparent, #d2000059);\n  position: relative;\n  height: 100%;\n  bottom: 100%;\n  border-radius: 5px;\n  left: 0px;\n  z-index: 1;\n}\n\nion-row.team-two:after {\n  content: \"\";\n  width: 100%;\n  background: linear-gradient(to left, #15981359, transparent, transparent, #d2000059);\n  position: relative;\n  height: 100%;\n  bottom: 100%;\n  border-radius: 5px;\n  left: 0px;\n  z-index: 1;\n}\n\nion-row.header {\n  font-weight: bold;\n  text-align: left;\n}\n\nion-col {\n  text-align: left;\n  font-size: 14px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.winner {\n  color: green !important;\n}\n\n.looser {\n  color: red !important;\n}\n\nion-row.border-bottom:last-child {\n  border-bottom: none !important;\n}\n\n.border-bottom {\n  border-bottom: 1px solid #2d2d2d91;\n}\n\n.avatar {\n  width: 25px;\n  height: 25px;\n  border-radius: 25px;\n  background: green;\n}\n\n.avatar.avatar1 {\n  background-image: url(\"https://i.imgur.com/2HZCGsX.jpeg\");\n  background-size: 30px 30px;\n  background-repeat: no-repeat;\n}\n\n.centered {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.create-match-container {\n  width: 100%;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n}\n\n.create-match-container .create-match-modal {\n  background: #2d2d2d;\n  min-width: 90vw;\n  padding: 15px 30px;\n  border-radius: 10px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);\n}\n\n.vertical-center ion-col {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG91cm5hbWVudC1kZXRhaWwvdG91cm5hbWVudC1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBQ1I7O0FBRUk7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUFBUjs7QUFJQTtFQUNJLHFCQUFBO0FBREo7O0FBSUE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBREo7O0FBSUE7RUFDSSxrQ0FBQTtBQURKOztBQUtJO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBRlI7O0FBSUk7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHFGQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFGUjs7QUFJSTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0Esb0ZBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUZSOztBQU1BO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQUhKOztBQU1BO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBRUEsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBSko7O0FBT0E7RUFDSSx1QkFBQTtBQUpKOztBQU9BO0VBQ0kscUJBQUE7QUFKSjs7QUFPQTtFQUNJLDhCQUFBO0FBSko7O0FBT0E7RUFDSSxrQ0FBQTtBQUpKOztBQU9BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBSko7O0FBTUk7RUFDSSx5REFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7QUFKUjs7QUFRQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFMSjs7QUFRQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBTEo7O0FBT0k7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7QUFMUjs7QUFVSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBUFIiLCJmaWxlIjoic3JjL2FwcC90b3VybmFtZW50LWRldGFpbC90b3VybmFtZW50LWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIG1pbi13aWR0aDogMTAwdnc7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuZGl2I2NvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAmLmZsZXgtZGlyZWN0aW9uLWNvbHVtbiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi10ZXh0IHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLm15LXRlYW0ge1xyXG4gICAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tZ3JpZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiAjMmQyZDJkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgd2lkdGg6IDk0dnc7XHJcbiAgICBsZWZ0OiAzdnc7XHJcbn1cclxuXHJcbmlvbi1ncmlkLm5vLWJhY2tncm91bmQge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXJvdyB7XHJcbiAgICBpb24tcm93IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMmQyZDJkO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgfVxyXG4gICAgJi50ZWFtLW9uZTphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMTU5ODEzNTksIHRyYW5zcGFyZW50LCB0cmFuc3BhcmVudCwgI2QyMDAwMDU5KTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJvdHRvbTogMTAwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbiAgICAmLnRlYW0tdHdvOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzE1OTgxMzU5LCB0cmFuc3BhcmVudCwgdHJhbnNwYXJlbnQsICNkMjAwMDA1OSk7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBib3R0b206IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24tcm93LmhlYWRlciB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbmlvbi1jb2wge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ud2lubmVyIHtcclxuICAgIGNvbG9yOiBncmVlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9vc2VyIHtcclxuICAgIGNvbG9yOiByZWQgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXJvdy5ib3JkZXItYm90dG9tOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhSW1wb3J0YW50O1xyXG59XHJcblxyXG4uYm9yZGVyLWJvdHRvbSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzJkMmQyZDkxO1xyXG59XHJcblxyXG4uYXZhdGFyIHtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xyXG5cclxuICAgICYuYXZhdGFyMSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9pLmltZ3VyLmNvbS8ySFpDR3NYLmpwZWdcIik7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAzMHB4IDMwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIH1cclxufVxyXG5cclxuLmNlbnRlcmVkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uY3JlYXRlLW1hdGNoLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgei1pbmRleDogOTk5OTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG5cclxuICAgIC5jcmVhdGUtbWF0Y2gtbW9kYWwge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMyZDJkMmQ7XHJcbiAgICAgICAgbWluLXdpZHRoOiA5MHZ3O1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHggMzBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi52ZXJ0aWNhbC1jZW50ZXIge1xyXG4gICAgaW9uLWNvbCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG59Il19 */";
      /***/
    },

    /***/
    "IhXp":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tournament-detail/tournament-detail.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function IhXp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n      <ion-badge\r\n        color=\"danger\"\r\n        class=\"badge-notifiche\"\r\n        *ngIf=\"this.env.notificationsCounter + this.env.ticketUpdates\"\r\n      >\r\n        {{this.env.notificationsCounter + this.env.ticketUpdates}}</ion-badge\r\n      >\r\n    </ion-buttons>\r\n    <ion-title>Torneo</ion-title>\r\n    <ion-buttons style=\"padding-right: 20px\" slot=\"end\">\r\n      <ion-text>{{this.userCoins}}</ion-text>&nbsp;&nbsp;<i\r\n        class=\"fas fa-coins\"\r\n        color=\"orange\"\r\n      ></i>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <div id=\"container flex-direction-column\" style=\"margin-bottom: 10px\">\r\n    <!-- Mostro se deve creare il team -->\r\n    <ion-text *ngIf=\"showSubscribeBox == true && isOpen == true\"\r\n      >Non sei ancora iscritto alla competizione.</ion-text\r\n    >\r\n    <ion-text\r\n      *ngIf=\"showSubscribeBox == false && tournamentDetail.type === 'TOURNAMENT'\"\r\n      >Ti sei iscritto con successo!</ion-text\r\n    >\r\n    <ion-button\r\n      (click)=\"showCreateTeamModal()\"\r\n      *ngIf=\"showSubscribeBox == true && isOpen == true\"\r\n      >Crea un Team</ion-button\r\n    >\r\n    <ion-text\r\n      *ngIf=\"isOpen == false && showSubscribeBox == true\"\r\n      style=\"margin-top: 10px\"\r\n      >Iscrizioni alla competizione chiuse.</ion-text\r\n    >\r\n    <!-- Mostro se non rispecchia il nr di membri corretto -->\r\n    <ion-text *ngIf=\"showErrorTeam == true && isLeader\" style=\"padding: 15px\"\r\n      >Non hai un nr. adeguato di membri per pubblicare una sfida.<br\r\n    /></ion-text>\r\n    <ion-button\r\n      (click)=\"showInviteMembers()\"\r\n      *ngIf=\"showErrorTeam == true && isLeader\"\r\n      >Invita Membri</ion-button\r\n    >\r\n    <!-- Mostro se è ok -->\r\n    <ion-text\r\n      *ngIf=\"showCreateMatch == true && isLeader && tournamentDetail.type === 'LADDER'\"\r\n      >Gioca ora!<br\r\n    /></ion-text>\r\n    <ion-button\r\n      (click)=\"showCreateMatchFn()\"\r\n      *ngIf=\"showCreateMatch == true && isLeader && tournamentDetail.type === 'LADDER'\"\r\n      >Crea un Match</ion-button\r\n    ><br />\r\n    <ion-button\r\n      (click)=\"showInviteMembers()\"\r\n      *ngIf=\"showCreateMatch == true && isLeader && tournamentDetail.type === 'LADDER'\"\r\n      ><i class=\"fas fa-plus\"></i>&nbsp;Invita Membri</ion-button\r\n    >\r\n    <div *ngIf=\"showMatchPending === true && isLeader\">\r\n      <ion-text>Match in Corso!</ion-text> <br />\r\n      <div *ngIf=\"alreadyMatched==true\">\r\n        <ion-card>\r\n          <ion-grid>\r\n            <ion-row style=\"width: 100%\">\r\n              <ion-col size=\"5\" class=\"ion-text-center centered\"\r\n                ><div class=\"avatar avatar1\"></div>\r\n                {{this.matchPending.teamOne.name}}</ion-col\r\n              >\r\n              <ion-col size=\"2\" class=\"ion-text-center\"> vs </ion-col>\r\n              <ion-col size=\"5\" class=\"ion-text-center centered\"\r\n                ><div class=\"avatar avatar1\"></div>\r\n                {{this.matchPending.teamTwo.name}}</ion-col\r\n              >\r\n              <ion-col\r\n                size=\"12\"\r\n                class=\"ion-text-center\"\r\n                style=\"font-size: 0.8em; font-style: italic\"\r\n                >{{this.matchPending.acceptedAt}}</ion-col\r\n              >\r\n              <ion-col\r\n                size=\"12\"\r\n                class=\"ion-text-center\"\r\n                style=\"\r\n                  font-size: 0.8em;\r\n                  font-style: italic;\r\n                  white-space: pre-line;\r\n                \"\r\n                >Regolamento: {{this.matchPending.rulesetName}}</ion-col\r\n              >\r\n              <ion-col\r\n                *ngFor=\"let item of [].constructor(matchPending.maps.length); let i = index\"\r\n                size=\"4\"\r\n                class=\"ion-text-center\"\r\n                style=\"font-size: 0.8em; font-weight: bold\"\r\n                >Mappa {{i + 1}}</ion-col\r\n              >\r\n              <ion-col\r\n                *ngFor=\"let map of matchPending.maps\"\r\n                size=\"4\"\r\n                class=\"ion-text-center\"\r\n                style=\"font-size: 0.8em; font-style: italic\"\r\n                >{{map}}</ion-col\r\n              >\r\n              <ion-col\r\n                size=\"12\"\r\n                class=\"ion-text-center\"\r\n                style=\"font-size: 0.8em; font-style: italic\"\r\n              >\r\n                <ion-button\r\n                  (click)=\"changeResultMatch(this.matchPending, 'WIN')\"\r\n                  >Vinto</ion-button\r\n                >\r\n                <ion-button\r\n                  (click)=\"changeResultMatch(this.matchPending, 'LOSS')\"\r\n                  color=\"danger\"\r\n                  >Perso\r\n                </ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-card>\r\n      </div>\r\n      <div *ngIf=\"alreadyMatched==false\">\r\n        <ion-text>Ricerca match in corso...</ion-text><br />\r\n        <ion-button (click)=\"deleteMatch(this.matchPending)\" color=\"danger\"\r\n          >Cancella\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"!showSubscribeBox && !isLeader\">\r\n      <ion-card\r\n        style=\"\r\n          background: white;\r\n          text-align: center;\r\n          display: flex;\r\n          justify-content: center;\r\n          flex-direction: column;\r\n          align-items: center;\r\n          padding: 15px;\r\n        \"\r\n        width=\"100%\"\r\n      >\r\n        <ion-avatar width=\"50\" height=\"50\"\r\n          ><img src=\"{{tournamentDetail.imgUrl}}\" /></ion-avatar\r\n        ><br />\r\n        <b>{{userTeam.name}}</b><br />\r\n        {{userTeam.rank}}&deg; Posizione<br />\r\n        <div *ngIf=\"showMatchPending && alreadyMatched\">\r\n          <ion-grid>\r\n            <ion-row style=\"width: 100%\">\r\n              <ion-col size=\"5\" class=\"ion-text-center centered\"\r\n                ><div class=\"avatar avatar1\"></div>\r\n                {{this.matchPending.teamOne.name}}</ion-col\r\n              >\r\n              <ion-col size=\"2\" class=\"ion-text-center\"> vs </ion-col>\r\n              <ion-col size=\"5\" class=\"ion-text-center centered\"\r\n                ><div class=\"avatar avatar1\"></div>\r\n                {{this.matchPending.teamTwo.name}}</ion-col\r\n              >\r\n              <ion-col\r\n                size=\"12\"\r\n                class=\"ion-text-center\"\r\n                style=\"font-size: 0.8em; font-style: italic\"\r\n                >{{this.matchPending.createdAt}}</ion-col\r\n              >\r\n              <ion-col\r\n                size=\"12\"\r\n                class=\"ion-text-center\"\r\n                style=\"font-size: 0.8em; font-style: italic\"\r\n                >Regolamento: {{this.matchPending.rulesetName}}</ion-col\r\n              >\r\n              <ion-col\r\n                *ngFor=\"let item of [].constructor(matchPending.maps.length); let i = index\"\r\n                size=\"4\"\r\n                class=\"ion-text-center\"\r\n                style=\"font-size: 0.8em; font-weight: bold\"\r\n                >Mappa {{i + 1}}</ion-col\r\n              >\r\n              <ion-col\r\n                *ngFor=\"let map of matchPending.maps\"\r\n                size=\"4\"\r\n                class=\"ion-text-center\"\r\n                style=\"font-size: 0.8em; font-style: italic\"\r\n                >{{map}}</ion-col\r\n              >\r\n            </ion-row>\r\n          </ion-grid>\r\n        </div>\r\n      </ion-card>\r\n    </div>\r\n  </div>\r\n\r\n  <ion-segment (ionChange)=\"onTabChange($event)\" value=\"classifica\">\r\n    <ion-segment-button value=\"classifica\">\r\n      <ion-label color=\"white\">Classifica</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"regolamento\">\r\n      <ion-label color=\"white\">Regole</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"matches\">\r\n      <ion-label color=\"white\">Match</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"sponsor\">\r\n      <ion-label color=\"white\">Sponsor</ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n  <div\r\n    id=\"classifica\"\r\n    *ngIf=\"showClassifica\"\r\n    style=\"\r\n      overflow-y: scroll !important;\r\n      max-height: 100%;\r\n      margin-top: 15px;\r\n      padding-bottom: 250px;\r\n    \"\r\n  >\r\n    <ion-grid>\r\n      <ion-row class=\"header\">\r\n        <ion-col size=\"1.4\">#</ion-col>\r\n        <ion-col size=\"5.6\">Nome team</ion-col>\r\n        <ion-col size=\"2\">PT</ion-col>\r\n        <ion-col size=\"1\">W</ion-col>\r\n        <ion-col size=\"1\">D</ion-col>\r\n        <ion-col size=\"1\">L</ion-col>\r\n      </ion-row>\r\n      <ion-row\r\n        class=\"fair\"\r\n        *ngFor=\"let team of teamsList, let i = index\"\r\n        (click)=\"showTeamsInfo(team._id)\"\r\n      >\r\n        <ion-col size=\"1.4\">{{i + 1}}</ion-col>\r\n        <ion-col size=\"5.6\">{{team.name}}</ion-col>\r\n        <ion-col size=\"2\" *ngIf=\"tournamentDetail.type === 'LADDER'\"\r\n          >{{team.elo}}</ion-col\r\n        >\r\n        <ion-col size=\"2\" *ngIf=\"tournamentDetail.type === 'TOURNAMENT'\"\r\n          >{{team.points}}</ion-col\r\n        >\r\n        <ion-col size=\"1\">{{team.wins}}</ion-col>\r\n        <ion-col size=\"1\">{{team.ties}}</ion-col>\r\n        <ion-col size=\"1\">{{team.losses}}</ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n  <div\r\n    id=\"regolamento\"\r\n    *ngIf=\"showRegolamento\"\r\n    style=\"\r\n      overflow-y: scroll !important;\r\n      margin-top: 15px;\r\n      white-space: pre-line;\r\n      padding-bottom: 250px;\r\n    \"\r\n  >\r\n    <ion-card\r\n      style=\"background: white !important; color: #2d2d2d !important\"\r\n      *ngFor=\"let ruleset of tournamentDetail.rulesets\"\r\n    >\r\n      <ion-card-header style=\"font-weight: bold\">\r\n        <ion-grid>\r\n          <ion-row (click)=\"showDescription(ruleset._id)\">\r\n            <ion-col size=\"10\">{{ruleset.name}} </ion-col>\r\n            <ion-col size=\"2\"\r\n              ><i id=\"{{'angle-'+ruleset._id}}\" class=\"fas fa-angle-down\"></i\r\n            ></ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-card-header>\r\n      <ion-card-content id=\"{{'desc-'+ruleset._id}}\" style=\"display: none\">\r\n        {{ruleset.description}}\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n  <div\r\n    id=\"matches\"\r\n    *ngIf=\"showMatches\"\r\n    style=\"overflow-y: scroll !important; margin-top: 15px\"\r\n  >\r\n    <div *ngIf=\"counterMatchPending != 0\">\r\n      <ion-text>Match in corso: {{counterMatchPending}}</ion-text>\r\n      <ion-grid class=\"no-background\">\r\n        <ion-row *ngFor=\"let match of matchesList, let i = index\">\r\n          <ion-row\r\n            *ngIf=\"match.status == 'PENDING' && match.teamOne && match.teamTwo\"\r\n            style=\"width: 100%; margin-bottom: 2px\"\r\n          >\r\n            <ion-col\r\n              size=\"5\"\r\n              class=\"ion-text-center centered\"\r\n              *ngIf=\"match.teamOne && match.teamTwo\"\r\n              ><div class=\"avatar avatar1\"></div>\r\n              {{match.teamOne.name}}</ion-col\r\n            >\r\n            <ion-col size=\"2\" class=\"ion-text-center\"> vs </ion-col>\r\n            <ion-col\r\n              size=\"5\"\r\n              class=\"ion-text-center centered\"\r\n              *ngIf=\"match.teamOne && match.teamTwo\"\r\n              ><div class=\"avatar avatar1\"></div>\r\n              {{match.teamTwo.name}}</ion-col\r\n            >\r\n            <ion-col\r\n              size=\"12\"\r\n              class=\"ion-text-center\"\r\n              style=\"font-size: 0.8em; font-style: italic\"\r\n              >{{match.acceptedAt}}</ion-col\r\n            >\r\n          </ion-row>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n    <div\r\n      *ngIf=\"counterMatchClosed != 0\"\r\n      style=\"margin-top: 15px; padding-bottom: 150px\"\r\n    >\r\n      <ion-text>Match conclusi: {{counterMatchClosed}}</ion-text>\r\n      <ion-grid class=\"no-background\">\r\n        <ion-row\r\n          *ngFor=\"let match of matchesList, let i = index\"\r\n          style=\"margin-bottom: 2px\"\r\n        >\r\n          <ion-row\r\n            style=\"width: 100%\"\r\n            *ngIf=\"match.status=='TEAM1' || match.status=='TEAM2'\"\r\n            [class]=\"match.status=='TEAM1' ? 'team-one' : 'team-two'\"\r\n          >\r\n            <ion-col\r\n              size=\"5\"\r\n              class=\"ion-text-center winner centered\"\r\n              *ngIf=\"match.status == 'TEAM1'\"\r\n              ><div class=\"avatar avatar1\"></div>\r\n              {{match.teamOne.name}}</ion-col\r\n            >\r\n            <ion-col\r\n              size=\"5\"\r\n              class=\"ion-text-center looser centered\"\r\n              *ngIf=\"match.status != 'TEAM1'\"\r\n              ><div class=\"avatar avatar1\"></div>\r\n              {{match.teamOne.name}}</ion-col\r\n            >\r\n            <ion-col size=\"2\" class=\"ion-text-center\"> vs </ion-col>\r\n            <ion-col\r\n              size=\"5\"\r\n              class=\"ion-text-center winner centered\"\r\n              *ngIf=\"match.status == 'TEAM2'\"\r\n              ><div class=\"avatar avatar1\"></div>\r\n              {{match.teamTwo.name}}</ion-col\r\n            >\r\n            <ion-col\r\n              size=\"5\"\r\n              class=\"ion-text-center looser centered\"\r\n              *ngIf=\"match.status != 'TEAM2'\"\r\n              ><div class=\"avatar avatar1\"></div>\r\n              {{match.teamTwo.name}}</ion-col\r\n            >\r\n            <ion-col\r\n              size=\"12\"\r\n              class=\"ion-text-center\"\r\n              style=\"font-size: 0.8em; font-style: italic\"\r\n              >{{match.acceptedAt}}</ion-col\r\n            >\r\n          </ion-row>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n  <div\r\n    id=\"sponsor\"\r\n    *ngIf=\"showSponsor\"\r\n    style=\"overflow-y: scroll !important; margin-top: 15px\"\r\n  >\r\n    <img src=\"../../assets/img/hydralogo.png\" />\r\n  </div>\r\n\r\n  <div class=\"create-match-container\" *ngIf=\"showModalCreateMatch\">\r\n    <div class=\"create-match-modal\">\r\n      <br />\r\n      <ion-title>Crea Match</ion-title>\r\n      <ion-grid\r\n        *ngIf=\"matchesNotAccepted && matchesNotAccepted.length > 0\"\r\n        style=\"max-width: 100%\"\r\n        class=\"vertical-center\"\r\n      >\r\n        <ion-row\r\n          size=\"12\"\r\n          *ngFor=\"let matchNotAccepted of matchesNotAccepted\"\r\n          style=\"margin-bottom: 2px\"\r\n        >\r\n          <ion-col size=\"1\"\r\n            ><i\r\n              class=\"fas fa-angle-up\"\r\n              style=\"color: red\"\r\n              *ngIf=\"this.tournamentDetail.userTeam.elo <= matchNotAccepted.teamOne.elo\"\r\n            ></i\r\n            ><i\r\n              class=\"fas fa-angle-down\"\r\n              style=\"color: green\"\r\n              *ngIf=\"this.tournamentDetail.userTeam.elo > matchNotAccepted.teamOne.elo\"\r\n            ></i\r\n          ></ion-col>\r\n          <ion-col size=\"3\"\r\n            >{{matchNotAccepted.numberOfPlayers}} vs\r\n            {{matchNotAccepted.numberOfPlayers}}</ion-col\r\n          >\r\n          <ion-col size=\"6\">{{matchNotAccepted.rulesetName}}</ion-col>\r\n          <ion-col size=\"2\"\r\n            ><ion-button color=\"success\" (click)=\"acceptMatch(matchNotAccepted)\"\r\n              ><i class=\"fas fa-check\"></i></ion-button\r\n          ></ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <br />\r\n      <form (submit)=\"createMatchFn()\">\r\n        <ion-text><i class=\"fas fa-align-left\"></i> Regolamento</ion-text>\r\n        <br /><br />\r\n        <ion-text color=\"danger\" *ngIf=\"showErrorRuleset\"\r\n          >Seleziona un regolamento...</ion-text\r\n        >\r\n        <ion-select\r\n          [(ngModel)]=\"matchForm.ruleset\"\r\n          name=\"ruleset\"\r\n          hasError=\"showErrorRuleset\"\r\n          placeholder=\"Seleziona un regolamento...\"\r\n          interface=\"popover\"\r\n          required\r\n        >\r\n          <ion-select-option\r\n            [value]=\"ruleset._id\"\r\n            *ngFor=\"let ruleset of tournamentDetail.rulesets\"\r\n            >{{ruleset.name}}</ion-select-option\r\n          >\r\n        </ion-select>\r\n        <br /><br />\r\n        <ion-text><i class=\"fas fa-users\"></i> Numero players</ion-text>\r\n        <br /><br />\r\n        <ion-text color=\"danger\" *ngIf=\"showErrorNrPlayers\"\r\n          >Seleziona un nr di players...</ion-text\r\n        >\r\n        <ion-select\r\n          [(ngModel)]=\"matchForm.nrPlayers\"\r\n          name=\"nrPlayers\"\r\n          hasError=\"showErrorNrPlayers\"\r\n          interface=\"popover\"\r\n          placeholder=\"Seleziona il nr. di players...\"\r\n          required\r\n        >\r\n          <ion-select-option value=\"4\">4vs4</ion-select-option>\r\n          <ion-select-option value=\"5\">5vs5</ion-select-option>\r\n        </ion-select>\r\n        <br />\r\n        <ion-button color=\"success\" type=\"submit\">Crea Match</ion-button>\r\n        <ion-button color=\"danger\" (click)=\"closeCreateMatch()\"\r\n          >Chiudi</ion-button\r\n        >\r\n      </form>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "Okdo":
    /*!***************************************************************!*\
      !*** ./src/app/tournament-detail/tournament-detail.module.ts ***!
      \***************************************************************/

    /*! exports provided: TournamentDetailPageModule */

    /***/
    function Okdo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TournamentDetailPageModule", function () {
        return TournamentDetailPageModule;
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


      var _tournament_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tournament-detail-routing.module */
      "SiDd");
      /* harmony import */


      var _tournament_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tournament-detail.page */
      "ivWz");

      var TournamentDetailPageModule = function TournamentDetailPageModule() {
        _classCallCheck(this, TournamentDetailPageModule);
      };

      TournamentDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tournament_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["TournamentDetailPageRoutingModule"]],
        declarations: [_tournament_detail_page__WEBPACK_IMPORTED_MODULE_6__["TournamentDetailPage"]]
      })], TournamentDetailPageModule);
      /***/
    },

    /***/
    "SiDd":
    /*!***********************************************************************!*\
      !*** ./src/app/tournament-detail/tournament-detail-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: TournamentDetailPageRoutingModule */

    /***/
    function SiDd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TournamentDetailPageRoutingModule", function () {
        return TournamentDetailPageRoutingModule;
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


      var _tournament_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tournament-detail.page */
      "ivWz");

      var routes = [{
        path: "",
        component: _tournament_detail_page__WEBPACK_IMPORTED_MODULE_3__["TournamentDetailPage"]
      }];

      var TournamentDetailPageRoutingModule = function TournamentDetailPageRoutingModule() {
        _classCallCheck(this, TournamentDetailPageRoutingModule);
      };

      TournamentDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TournamentDetailPageRoutingModule);
      /***/
    },

    /***/
    "ivWz":
    /*!*************************************************************!*\
      !*** ./src/app/tournament-detail/tournament-detail.page.ts ***!
      \*************************************************************/

    /*! exports provided: TournamentDetailPage */

    /***/
    function ivWz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TournamentDetailPage", function () {
        return TournamentDetailPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tournament_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tournament-detail.page.html */
      "IhXp");
      /* harmony import */


      var _tournament_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tournament-detail.page.scss */
      "/8sc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _modal_page_create_team_modal_page_create_team_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../modal-page-create-team/modal-page-create-team.page */
      "rblj");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _env__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../env */
      "J50X");
      /* harmony import */


      var jwt_decode__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! jwt-decode */
      "EjJx");

      var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Plugins"].Storage;

      var TournamentDetailPage = /*#__PURE__*/function () {
        function TournamentDetailPage(activatedRoute, router, modalController, authService, http, env, loadingController) {
          _classCallCheck(this, TournamentDetailPage);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.modalController = modalController;
          this.authService = authService;
          this.http = http;
          this.env = env;
          this.loadingController = loadingController;
          this.showSubscribeBox = false;
          this.showErrorTeam = false;
          this.showCreateMatch = false;
          this.showMatchPending = false;
          this.showClassifica = true;
          this.showRegolamento = false;
          this.showSponsor = false;
          this.showMatches = false;
          this.isOpen = false;
          this.alreadyMatched = false;
          this.showModalCreateMatch = false;
          this.matchForm = {
            ruleset: "",
            nrPlayers: ""
          };
          this.userCoins = 0;
          this.counterMatchPending = 0;
          this.counterMatchClosed = 0;
          this.showErrorNrPlayers = false;
          this.showErrorRuleset = false;
          this.isLeader = false;
          this.userId = null;
          this.timeoutCheck = null;
        }

        _createClass(TournamentDetailPage, [{
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingController.create({
                        message: "Caricamento dei tornei in corso..."
                      });

                    case 2:
                      this.loading = _context.sent;
                      _context.next = 5;
                      return this.loading.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.showSubscribeBox = true;
            this.showErrorTeam = false;
            this.showCreateMatch = false;
            this.env.isLoading = true;
            this.activatedRoute.queryParams.subscribe(function (params) {
              _this.idTournament = params["idTournament"];

              if (!_this.idTournament) {
                _this.router.navigateByUrl("/home");
              } else {
                _this.authService.getToken().then(function () {
                  if (_this.authService.isLoggedIn) {
                    Storage.get({
                      key: "token"
                    }).then(function (data) {
                      _this.userId = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_11__["default"])(data.value)["id"];

                      _this.getTournamentDetail(_this.idTournament, data.value);
                    });
                  } else {
                    _this.router.navigateByUrl("/login");
                  }
                });
              }
            });
          }
        }, {
          key: "showCreateTeamModal",
          value: function showCreateTeamModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalController.create({
                        component: _modal_page_create_team_modal_page_create_team_page__WEBPACK_IMPORTED_MODULE_7__["ModalPageCreateTeamPage"],
                        cssClass: "simple-modal",
                        componentProps: {
                          idTournament: this.idTournament
                        }
                      });

                    case 2:
                      modal = _context2.sent;
                      modal.onDidDismiss().then(function (data) {
                        var created = data["data"].created;

                        if (created) {
                          location.reload();
                        }
                      });
                      _context2.next = 6;
                      return modal.present();

                    case 6:
                      return _context2.abrupt("return", _context2.sent);

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getTournamentDetail",
          value: function getTournamentDetail(idTournament, token) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.http.get("".concat(this.env.baseUri, "/tournaments/").concat(idTournament)).subscribe(function (response) {
                        _this2.tournamentDetail = response; // Guardo se l'utente ha un team

                        var userTeam = _this2.tournamentDetail.userTeam,
                            ruleset = _this2.tournamentDetail.rulesets;

                        if (userTeam) {
                          // Controllo se e' il leader
                          userTeam.members.forEach(function (item) {
                            if (item.userId == _this2.userId && item.role === "LEADER") {
                              _this2.isLeader = true;
                            }
                          });
                          _this2.userTeam = userTeam;
                          _this2.showSubscribeBox = false;
                          var minOfPlayersPerTeam = 999;
                          var maxOfPlayersPerTeam = 0;

                          for (var i = 0; i < ruleset.length; i++) {
                            if (ruleset[i].maxNumberOfPlayersPerTeam > maxOfPlayersPerTeam) maxOfPlayersPerTeam = ruleset[i].maxNumberOfPlayersPerTeam;
                            if (ruleset[i].minNumberOfPlayersPerTeam < minOfPlayersPerTeam) minOfPlayersPerTeam = ruleset[i].minNumberOfPlayersPerTeam;
                          } // Controllo il nr di players in base a quelli del torneo


                          if (maxOfPlayersPerTeam >= userTeam.members.length && minOfPlayersPerTeam <= userTeam.members.length) {
                            // Il team è ok e faccio fare le sfide
                            _this2.showCreateMatch = true;
                            _this2.showErrorTeam = false;
                          } else {
                            // Il team non rispetta il nr di giocatori necessari
                            _this2.showErrorTeam = true;
                          }
                        }

                        _this2.checkIfHasMatch(_this2.userTeam);

                        _this2.isOpen = _this2.tournamentDetail.open ? _this2.tournamentDetail.open : false;
                        _this2.teamsList = _this2.tournamentDetail.teams;

                        if (_this2.teamsList[0] === undefined) {
                          _this2.teamsList = [];
                        } else {
                          _this2.teamsList.sort(function (a, b) {
                            return a.elo < b.elo ? 1 : -1;
                          });
                        }

                        if (_this2.teamsList && _this2.userTeam) {
                          var rank = 1;

                          _this2.teamsList.forEach(function (item) {
                            if (item._id === _this2.userTeam._id) {
                              _this2.userTeam.rank = rank;
                            }

                            rank++;
                          });
                        }

                        _this2.env.isLoading = false;
                      }, function (error) {
                        _this2.env.isLoading = false;
                        window.alert("errore tornei");
                      });

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "checkIfHasMatch",
          value: function checkIfHasMatch(userTeam) {
            var _this3 = this;

            this.http.get("".concat(this.env.baseUri, "/tournaments/").concat(this.idTournament, "/matches")).subscribe(function (resp) {
              // Itero i matches
              if (resp) {
                _this3.matchesList = resp;
                _this3.counterMatchPending = 0;
                _this3.counterMatchClosed = 0;

                for (var i = 0; i < _this3.matchesList.length; i++) {
                  _this3.matchesList[i].acceptedAt = new Date(_this3.matchesList[i].acceptedAt).toLocaleString("it");

                  if (_this3.matchesList[i] && _this3.matchesList[i].status === "PENDING") {
                    if (_this3.matchesList[i].teamOne && _this3.matchesList[i].teamTwo) {
                      _this3.counterMatchPending += 1;
                    }

                    _this3.matchesNotAccepted = []; // Ha gia' un match in corso

                    if (_this3.matchesList[i].teamOne && _this3.matchesList[i].teamOne._id === _this3.tournamentDetail.userTeam._id || _this3.matchesList[i].teamTwo && _this3.matchesList[i].teamTwo._id === _this3.tournamentDetail.userTeam._id) {
                      if (_this3.matchesList[i].teamOne._id === _this3.tournamentDetail.userTeam._id) {
                        if (_this3.matchesList[i].teamTwo) {
                          _this3.alreadyMatched = true;

                          if (!_this3.matchesList[i].teamOne.result) {
                            _this3.showCreateMatch = false;
                            _this3.showMatchPending = true;
                          } else {
                            _this3.showCreateMatch = true;
                            _this3.showMatchPending = false;
                          }
                        } else {
                          _this3.showMatchPending = true;
                          _this3.showCreateMatch = false;
                          _this3.alreadyMatched = false;
                        }
                      } else if (_this3.matchesList[i].teamTwo._id === _this3.tournamentDetail.userTeam._id) {
                        if (_this3.matchesList[i].teamOne) {
                          _this3.alreadyMatched = true;

                          if (!_this3.matchesList[i].teamTwo.result) {
                            _this3.showCreateMatch = false;
                            _this3.showMatchPending = true;
                          } else {
                            _this3.showCreateMatch = true;
                            _this3.showMatchPending = false;
                          }
                        } else {
                          _this3.showMatchPending = true;
                          _this3.showCreateMatch = false;
                          _this3.alreadyMatched = false;
                        }
                      }

                      if (_this3.showMatchPending) {
                        _this3.matchPending = _this3.matchesList[i];

                        for (var j = 0; j < _this3.tournamentDetail.rulesets.length; j++) {
                          if (_this3.matchPending.rulesetId === _this3.tournamentDetail.rulesets[j]._id) {
                            _this3.matchPending.rulesetName = _this3.tournamentDetail.rulesets[j].name;
                          }
                        }
                      }

                      if (_this3.alreadyMatched == false) {
                        _this3.autoCheckForChange(_this3.matchesList[i]);
                      } else if (_this3.timeoutCheck) {
                        clearInterval(_this3.timeoutCheck);
                      }
                    }
                  } else if (_this3.matchesList[i] && (_this3.matchesList[i].status === "TEAM1" || _this3.matchesList[i].status === "TEAM2")) {
                    _this3.counterMatchClosed += 1;
                  }
                }
              }
            }, function (error) {
              _this3.env.isLoading = false;
              window.alert(error);
            });
          }
        }, {
          key: "deleteMatch",
          value: function deleteMatch(matchObj) {
            if (this.tournamentDetail.userTeam._id) {
              if (this.tournamentDetail.userTeam._id == matchObj.teamOne) {
                if (matchObj.teamTwo) {
                  location.reload();
                  return;
                }
              } else if (this.tournamentDetail.userTeam._id == matchObj.teamTwo) {
                if (matchObj.teamOne) {
                  location.reload();
                  return;
                }
              }

              this.http["delete"]("".concat(this.env.baseUri, "/tournaments/").concat(this.idTournament, "/matches/").concat(matchObj._id)).subscribe(function (resp) {
                location.reload();
              });
            }

            return;
          }
        }, {
          key: "changeResultMatch",
          value: function changeResultMatch(matchObj, result) {
            var text = "";
            if (result == "WIN") text = "Sei sicuro di aver vinto?";else if (result == "LOSS") text = "Sei sicuro di aver perso?";else text = "Sei sicuro di aver pareggiato?";
            var r = confirm(text);

            if (r == true) {
              if (this.tournamentDetail.userTeam._id) {
                var dataToPatch = {
                  teamId: this.tournamentDetail.userTeam._id,
                  action: "POST_RESULT",
                  result: result
                };
                this.http.patch("".concat(this.env.baseUri, "/tournaments/").concat(this.idTournament, "/matches/").concat(matchObj._id), dataToPatch).subscribe(function (resp) {
                  location.reload();
                });
              }
            }

            return;
          }
        }, {
          key: "createMatchFn",
          value: function createMatchFn() {
            if (!this.matchForm.ruleset) this.showErrorRuleset = true;else this.showErrorRuleset = false;
            if (!this.matchForm.nrPlayers) this.showErrorNrPlayers = true;else this.showErrorNrPlayers = false;
            if (!this.matchForm.ruleset || !this.matchForm.nrPlayers) return;
            var dataToPost = {
              teamId: this.tournamentDetail.userTeam._id,
              rulesetId: this.matchForm.ruleset,
              numberOfPlayers: this.matchForm.nrPlayers
            };
            this.http.post("".concat(this.env.baseUri, "/tournaments/").concat(this.idTournament, "/matches"), dataToPost).subscribe(function (resp) {
              location.reload();
            });
            return true;
          }
        }, {
          key: "showCreateMatchFn",
          value: function showCreateMatchFn() {
            var _this4 = this;

            this.matchesNotAccepted = [];
            this.http.get("".concat(this.env.baseUri, "/tournaments/").concat(this.idTournament, "/matches")).subscribe(function (response) {
              for (var i = 0; i < Object.keys(response).length; i++) {
                if (!response[i].teamTwo && response[i].teamOne && response[i].teamOne._id !== _this4.tournamentDetail.userTeam._id) {
                  var ruleset = _this4.tournamentDetail.rulesets.find(function (item) {
                    return item._id == response[i].rulesetId;
                  });

                  response[i].rulesetName = ruleset.name;

                  _this4.matchesNotAccepted.push(response[i]);
                }
              }

              _this4.showModalCreateMatch = true;
            });
          }
        }, {
          key: "closeCreateMatch",
          value: function closeCreateMatch() {
            this.matchesNotAccepted = [];
            this.showModalCreateMatch = false;
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            var _this5 = this;

            this.authService.getToken().then(function () {
              if (_this5.authService.isLoggedIn) {
                Storage.get({
                  key: "token"
                }).then(function (data) {
                  location.reload();
                  event.target.complete();
                });
              } else {
                _this5.router.navigateByUrl("/login");
              }
            });
          }
        }, {
          key: "showInviteMembers",
          value: function showInviteMembers() {
            if (this.userTeam) {
              this.router.navigate(["/users"], {
                queryParams: {
                  teamId: this.userTeam._id,
                  tournamentId: this.idTournament
                }
              });
            } else {
              this.router.navigateByUrl("/users");
            }
          }
        }, {
          key: "showTeamsInfo",
          value: function showTeamsInfo(teamId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      if (teamId) {
                        this.router.navigate(["/team-detail"], {
                          queryParams: {
                            teamId: teamId,
                            tournamentId: this.idTournament
                          }
                        });
                      }

                    case 1:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "onTabChange",
          value: function onTabChange(ev) {
            switch (ev.detail.value) {
              case "regolamento":
                this.showRegolamento = true;
                this.showClassifica = false;
                this.showSponsor = false;
                this.showMatches = false;
                break;

              case "classifica":
                this.showRegolamento = false;
                this.showClassifica = true;
                this.showSponsor = false;
                this.showMatches = false;
                break;

              case "sponsor":
                this.showRegolamento = false;
                this.showClassifica = false;
                this.showSponsor = true;
                this.showMatches = false;
                break;

              case "matches":
                this.showRegolamento = false;
                this.showClassifica = false;
                this.showSponsor = false;
                this.showMatches = true;
                break;

              default:
                this.showRegolamento = false;
                this.showClassifica = true;
                this.showSponsor = false;
                this.showMatches = false;
                break;
            }
          }
        }, {
          key: "autoCheckForChange",
          value: function autoCheckForChange(matchObj) {
            var _this6 = this;

            if (matchObj) {
              console.log(new Date().toLocaleString("it") + " - Match check ID:" + matchObj._id);
              this.http.get("".concat(this.env.baseUri, "/tournaments/").concat(this.idTournament, "/matches/").concat(matchObj._id)).subscribe(function (resp) {
                if (resp["teamTwo"]) {
                  if (location.pathname === "/tournament-detail") {
                    location.reload();
                  } else {
                    window.alert("Il team " + resp["teamTwo"].name + " ti ha accettato la sfida!");
                  }

                  clearInterval(_this6.timeoutCheck);
                }
              });
            }

            this.timeoutCheck = setTimeout(this.autoCheckForChange.bind(this), 15000, matchObj);
          }
        }, {
          key: "acceptMatch",
          value: function acceptMatch(matchObj) {
            if (matchObj) {
              var dataToPost = {
                teamId: this.tournamentDetail.userTeam._id
              };
              this.http.post("".concat(this.env.baseUri, "/tournaments/").concat(this.idTournament, "/matches/").concat(matchObj._id), dataToPost).subscribe(function (resp) {
                location.reload();
              });
            }
          }
        }, {
          key: "showDescription",
          value: function showDescription(rulesetId) {
            var accordionPlatforms = document.getElementById("desc-".concat(rulesetId)),
                anglePlatforms = document.getElementById("angle-".concat(rulesetId));

            if (accordionPlatforms.style.display == "none") {
              accordionPlatforms.style.display = "block";
              anglePlatforms.classList.remove("fa-angle-down");
              anglePlatforms.classList.add("fa-angle-up");
            } else {
              accordionPlatforms.style.display = "none";
              anglePlatforms.classList.remove("fa-angle-up");
              anglePlatforms.classList.add("fa-angle-down");
            }
          }
        }]);

        return TournamentDetailPage;
      }();

      TournamentDetailPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }, {
          type: _env__WEBPACK_IMPORTED_MODULE_10__["GlobalEnv"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }];
      };

      TournamentDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-tournament-detail",
        template: _raw_loader_tournament_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tournament_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TournamentDetailPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tournament-detail-tournament-detail-module-es5.js.map