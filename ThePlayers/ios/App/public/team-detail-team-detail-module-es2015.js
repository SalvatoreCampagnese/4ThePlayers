(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["team-detail-team-detail-module"],{

/***/ "30zZ":
/*!***********************************************************!*\
  !*** ./src/app/team-detail/team-detail-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: TeamDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamDetailPageRoutingModule", function() { return TeamDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _team_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./team-detail.page */ "KqGN");




const routes = [
    {
        path: '',
        component: _team_detail_page__WEBPACK_IMPORTED_MODULE_3__["TeamDetailPage"]
    }
];
let TeamDetailPageRoutingModule = class TeamDetailPageRoutingModule {
};
TeamDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TeamDetailPageRoutingModule);



/***/ }),

/***/ "KqGN":
/*!*************************************************!*\
  !*** ./src/app/team-detail/team-detail.page.ts ***!
  \*************************************************/
/*! exports provided: TeamDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamDetailPage", function() { return TeamDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_team_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./team-detail.page.html */ "nNdJ");
/* harmony import */ var _team_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./team-detail.page.scss */ "LGWg");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../env */ "J50X");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jwt-decode */ "EjJx");









const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Plugins"];

let TeamDetailPage = class TeamDetailPage {
    constructor(activatedRoute, env, http, authService, router) {
        this.activatedRoute = activatedRoute;
        this.env = env;
        this.http = http;
        this.authService = authService;
        this.router = router;
        this.isLeader = false;
        this.editTeamStatus = false;
        this.isTeamNameChanged = true;
        this.teamName = null;
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((params) => {
            if (params["teamId"] && params["tournamentId"]) {
                this.tournamentId = params["tournamentId"];
                this.teamId = params["teamId"];
                Storage.get({ key: "token" }).then((data) => {
                    this.token = data.value;
                    this.getTeamInfo();
                });
            }
            else {
                this.router.navigateByUrl("/home");
            }
        });
    }
    getTeamInfo() {
        if (this.teamId) {
            this.http
                .get(this.env.baseUri +
                `/tournaments/${this.tournamentId}/teams/${this.teamId}`)
                .subscribe((resp) => {
                this.teamObj = resp;
                this.teamName = this.teamObj.name;
                if (resp["imgUrl"]) {
                    let el = document.getElementById("avatarCard");
                    el.style.backgroundImage = `url(${resp["imgUrl"]})`;
                }
                for (var i = 0; i < resp["members"].length; i++) {
                    const member = resp["members"][i];
                    if (member.userId) {
                        const decodedToken = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_9__["default"])(this.token);
                        this.userId = decodedToken["id"];
                        if (member.userId === decodedToken["id"] &&
                            member.role === "LEADER")
                            this.isLeader = true;
                    }
                    if (member.dateJoined) {
                        const today = new Date();
                        const dateJoined = new Date(member.dateJoined);
                        const diffTime = today.getTime() - dateJoined.getTime();
                        const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));
                        member.isOk = false;
                        if (diffHours >= 4) {
                            member.isOk = true;
                        }
                    }
                }
            });
        }
    }
    showUserPage(userObj) {
        if (userObj) {
            this.router.navigate(["/user-detail"], {
                queryParams: {
                    userId: userObj.userId,
                },
            });
        }
    }
    removeMember(userObj) {
        const text = "Sei sicuro di voler rimuovere il player?";
        var r = confirm(text);
        if (userObj && r === true) {
            const userId = userObj.userId;
            if (userId && this.isLeader) {
                this.http
                    .patch(this.env.baseUri +
                    `/tournaments/${this.tournamentId}/teams/${this.teamId}`, { membersToRemove: [userId] })
                    .subscribe((resp) => {
                    location.reload();
                }, (error) => {
                    window.alert("errore nella rimozione del player.");
                });
            }
        }
    }
    quitTeam() {
        if (this.userId) {
            this.http
                .patch(this.env.baseUri +
                `/tournaments/${this.tournamentId}/teams/${this.teamId}`, { membersToRemove: [this.userId] })
                .subscribe((resp) => {
                location.reload();
            }, (error) => {
                window.alert("errore nella rimozione del player.");
            });
        }
    }
    updateLeader(member) {
        const text = "Sei sicuro di voler promuovere il player a leader del team?";
        var r = confirm(text);
        if (member && r === true) {
            this.http
                .patch(this.env.baseUri +
                `/tournaments/${this.tournamentId}/teams/${this.teamId}`, { newLeader: member.userId })
                .subscribe((resp) => {
                location.reload();
            }, (error) => {
                window.alert("errore nella rimozione del player.");
            });
        }
    }
    editTeam() {
        this.editTeamStatus = true;
    }
    changeUsername() {
        if (this.teamName != this.teamObj.name)
            this.isTeamNameChanged = false;
        else
            this.isTeamNameChanged = true;
    }
    onCloseEdit() {
        this.editTeamStatus = false;
    }
    onConfirmEdit() {
        const text = "Sei sicuro di voler rinominare il team?";
        var r = confirm(text);
        if (r === true) {
            this.http
                .patch(this.env.baseUri +
                `/tournaments/${this.tournamentId}/teams/${this.teamId}`, { name: this.teamName })
                .subscribe((resp) => {
                location.reload();
            }, (error) => {
                window.alert("errore nel cambio nome team");
            });
        }
    }
};
TeamDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _env__WEBPACK_IMPORTED_MODULE_6__["GlobalEnv"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
TeamDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: "app-team-detail",
        template: _raw_loader_team_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_team_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TeamDetailPage);



/***/ }),

/***/ "LGWg":
/*!***************************************************!*\
  !*** ./src/app/team-detail/team-detail.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card.header-container {\n  min-height: 190px;\n  background: none !important;\n  border-radius: 15px;\n  position: relative;\n  overflow: visible;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: none !important;\n}\nion-card.header-container .header-card {\n  min-height: 150px;\n  width: 100%;\n  background: #245339 !important;\n  z-index: 1;\n  border-radius: 15px;\n  background-position: center !important;\n  background-size: cover !important;\n}\nion-card.header-container .avatar-card {\n  background: #245339;\n  width: 120px;\n  height: 120px;\n  border-radius: 120px;\n  position: absolute;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  z-index: 2;\n  top: 65px;\n  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);\n}\nion-card.member {\n  background: #2d2d2d;\n  color: white;\n  border-radius: 10px;\n}\nion-card.member.not-ok::after {\n  content: \"\";\n  width: 100px;\n  height: 100%;\n  background: linear-gradient(to right top, red, rgba(255, 0, 0, 0), transparent);\n  left: 0px;\n  top: 0px;\n  position: absolute;\n}\nion-card.member.ok::after {\n  content: \"\";\n  width: 100px;\n  height: 100%;\n  background: linear-gradient(to right top, green, rgba(0, 255, 0, 0), transparent);\n  left: 0px;\n  top: 0px;\n  position: absolute;\n}\n.team-detail-container {\n  width: 100%;\n  height: 50vh;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n  position: absolute;\n  top: 50px;\n  left: 0px;\n}\n.team-detail-container .team-detail-modal {\n  background: #2d2d2d;\n  min-width: 90vw;\n  padding: 15px 30px;\n  border-radius: 10px;\n  text-align: center;\n  max-height: 83vh;\n  bottom: 2vh;\n  position: absolute;\n  overflow: scroll;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbS1kZXRhaWwvdGVhbS1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUFBSjtBQUNJO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQ0FBQTtFQUNBLGlDQUFBO0FBQ1I7QUFDSTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSwyQ0FBQTtBQUNSO0FBR0E7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUFKO0FBRVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSwrRUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7QUFBWjtBQUlRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUZBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FBRlo7QUFPQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FBSko7QUFNSTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUF1QixnQkFBQTtFQUN2QixXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJDQUFBO0FBSFIiLCJmaWxlIjoic3JjL2FwcC90ZWFtLWRldGFpbC90ZWFtLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZC5oZWFkZXItY29udGFpbmVye1xyXG4gICAgbWluLWhlaWdodDogMTkwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIC5oZWFkZXItY2FyZHtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxNTBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMjQ1MzM5ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5hdmF0YXItY2FyZHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMjQ1MzM5O1xyXG4gICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEyMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgdG9wOiA2NXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTJweCByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1jYXJkLm1lbWJlcntcclxuICAgIGJhY2tncm91bmQ6ICMyZDJkMmQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgJi5ub3Qtb2t7XHJcbiAgICAgICAgJjo6YWZ0ZXJ7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwgcmVkLCByZ2JhKDI1NSwwLDAsMC4wKSwgdHJhbnNwYXJlbnQpO1xyXG4gICAgICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi5va3tcclxuICAgICAgICAmOjphZnRlcntcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCBncmVlbiwgcmdiYSgwLDI1NSwwLDAuMCksIHRyYW5zcGFyZW50KTtcclxuICAgICAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnRlYW0tZGV0YWlsLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTB2aDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG5cclxuICAgIC50ZWFtLWRldGFpbC1tb2RhbCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzJkMmQyZDtcclxuICAgICAgICBtaW4td2lkdGg6IDkwdnc7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAzMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICBtYXgtaGVpZ2h0OiA4M3ZoO1xyXG4gICAgICAgIGJvdHRvbTogMnZoO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "k8s1":
/*!***************************************************!*\
  !*** ./src/app/team-detail/team-detail.module.ts ***!
  \***************************************************/
/*! exports provided: TeamDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamDetailPageModule", function() { return TeamDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _team_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./team-detail-routing.module */ "30zZ");
/* harmony import */ var _team_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./team-detail.page */ "KqGN");







let TeamDetailPageModule = class TeamDetailPageModule {
};
TeamDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _team_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["TeamDetailPageRoutingModule"]
        ],
        declarations: [_team_detail_page__WEBPACK_IMPORTED_MODULE_6__["TeamDetailPage"]]
    })
], TeamDetailPageModule);



/***/ }),

/***/ "nNdJ":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/team-detail/team-detail.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n      <ion-badge\r\n        color=\"danger\"\r\n        class=\"badge-notifiche\"\r\n        *ngIf=\"this.env.notificationsCounter\"\r\n      >\r\n        {{this.env.notificationsCounter}}</ion-badge\r\n      >\r\n    </ion-buttons>\r\n    <ion-title>Dettagli team</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card class=\"header-container\">\r\n    <ion-card\r\n      class=\"header-card\"\r\n      style=\"\r\n        background-image: url('https://i.imgur.com/6c0lZoy.png') !important;\r\n      \"\r\n    ></ion-card>\r\n    <ion-card class=\"avatar-card\" id=\"avatarCard\"></ion-card>\r\n  </ion-card>\r\n\r\n  <div class=\"card-body\" style=\"overflow-y: scroll !important; z-index: 10\">\r\n    <ion-grid style=\"padding: 0px 15px\">\r\n      <ion-row>\r\n        <ion-col size=\"10\"><h3>{{teamObj && teamObj.name}}</h3></ion-col>\r\n        <ion-col size=\"2\"\r\n          ><ion-button color=\"success\" (click)=\"editTeam()\"\r\n            ><i class=\"fas fa-pen\"></i></ion-button\r\n        ></ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <div class=\"user-tournament\" style=\"padding: 0px 15px\">\r\n      <ion-text style=\"padding-left: 5px\">Membri</ion-text>\r\n      <ion-grid *ngIf=\"teamObj\">\r\n        <ion-row\r\n          size=\"12\"\r\n          *ngFor=\"let member of teamObj.members, let i = index\"\r\n          class=\"row-align-center\"\r\n        >\r\n          <ion-col [size]=\"12\" (click)=\"showUserPage(member)\">\r\n            <ion-card [class]=\"member.isOk ? 'member ok' : 'member not-ok'\">\r\n              <ion-grid>\r\n                <ion-row>\r\n                  <ion-col size=\"3\" style=\"padding: 0px\"\r\n                    ><ion-avatar item-start style=\"border: 1px solid green\">\r\n                      <img src=\"../../assets/img/avatar-1.jpg\" /> </ion-avatar\r\n                  ></ion-col>\r\n                  <ion-col size=\"9\" style=\"padding: 0px\">\r\n                    <h3\r\n                      style=\"\r\n                        margin: 5px;\r\n                        white-space: nowrap;\r\n                        margin: 5px;\r\n                        flex-wrap: nowrap;\r\n                        text-overflow: ellipsis;\r\n                        width: 100%;\r\n                        overflow: hidden;\r\n                      \"\r\n                    >\r\n                      {{member.username}}\r\n                    </h3>\r\n                    <p\r\n                      *ngIf=\"member.role == 'LEADER'\"\r\n                      style=\"padding: 0px 5px; margin: 0px !important\"\r\n                    >\r\n                      Leader\r\n                    </p>\r\n                    <p\r\n                      style=\"\r\n                        padding: 0px 5px;\r\n                        margin: 0px !important;\r\n                        font-style: italic;\r\n                        font-size: 10px;\r\n                      \"\r\n                    >\r\n                      <i class=\"fas fa-arrow-right\"></i>\r\n                      {{member.dateJoined|date:'short'}}\r\n                    </p></ion-col\r\n                  >\r\n                </ion-row>\r\n                <ion-row style=\"width: 100%\">\r\n                  <ion-col\r\n                    size=\"6\"\r\n                    *ngIf=\"isLeader && member.role != 'LEADER'\"\r\n                    style=\"text-align: center\"\r\n                  >\r\n                    <ion-button\r\n                      *ngIf=\"isLeader && member.role != 'LEADER'\"\r\n                      color=\"danger\"\r\n                      (click)=\"removeMember(member)\"\r\n                      >Rimuovi\r\n                    </ion-button>\r\n                  </ion-col>\r\n                  <ion-col\r\n                    size=\"6\"\r\n                    *ngIf=\"isLeader && member.role != 'LEADER'\"\r\n                    style=\"text-align: center\"\r\n                  >\r\n                    <ion-button\r\n                      *ngIf=\"this.isLeader && member.role != 'LEADER'\"\r\n                      color=\"danger\"\r\n                      (click)=\"updateLeader(member)\"\r\n                      >Leader\r\n                    </ion-button>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-card>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n    <div style=\"padding: 0px 15px\">\r\n      Leggenda:\r\n      <ion-grid>\r\n        <ion-row\r\n          style=\"display: flex; justify-content: center; align-items: center\"\r\n        >\r\n          <ion-col size=\"1\"\r\n            ><div style=\"width: 7px; height: 7px; background: green\">\r\n              &nbsp;\r\n            </div></ion-col\r\n          >\r\n          <ion-col size=\"11\">Il player può giocare</ion-col>\r\n        </ion-row>\r\n        <ion-row\r\n          style=\"display: flex; justify-content: center; align-items: center\"\r\n        >\r\n          <ion-col size=\"1\"\r\n            ><div style=\"width: 7px; height: 7px; background: red\">\r\n              &nbsp;\r\n            </div></ion-col\r\n          >\r\n          <ion-col size=\"11\">Il player non ha superato le 4h</ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"editTeam\" *ngIf=\"editTeamStatus\" class=\"team-detail-container\">\r\n    <div class=\"team-detail-modal\">\r\n      <h2>Modifica team</h2>\r\n\r\n      <ion-item color=\"white\">\r\n        <ion-label><i class=\"fas fa-pen\"></i></ion-label>\r\n        <ion-input\r\n          clearOnEdit=\"false\"\r\n          type=\"text\"\r\n          [(ngModel)]=\"teamName\"\r\n          name=\"teamName\"\r\n          (ionChange)=\"changeUsername()\"\r\n        ></ion-input>\r\n      </ion-item>\r\n      <ion-button\r\n        color=\"success\"\r\n        (click)=\"onConfirmEdit()\"\r\n        [disabled]=\"isTeamNameChanged\"\r\n      >\r\n        Modifica\r\n      </ion-button>\r\n      <ion-button color=\"danged\" (click)=\"onCloseEdit()\">Chiudi</ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=team-detail-team-detail-module-es2015.js.map