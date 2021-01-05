import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Plugins } from "@capacitor/core";
import { GlobalEnv } from "../env";
const { Storage } = Plugins;
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-users",
  templateUrl: "./users.page.html",
  styleUrls: ["./users.page.scss"],
})
export class UsersPage implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private env: GlobalEnv,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}
  userSearch: string = null;
  teamId: any;
  teamObj: any;
  token: string;
  usersList: any = [];
  usersFoundCounter: number = 0;
  tournamentId: any;
  showButtonInvite: boolean = true;
  searchValue: string = null;

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      const teamId = params["teamId"];
      const tournamentId = params["tournamentId"];
      if (!teamId || !tournamentId) {
        this.showButtonInvite = false;
      } else {
        this.teamId = teamId;

        this.tournamentId = tournamentId;
      }
      this.authService.getToken().then(() => {
        if (this.authService.isLoggedIn) {
          Storage.get({ key: "token" }).then((data) => {
            this.token = data.value;
          });
        } else {
          this.router.navigateByUrl("/login");
        }
      });
    });
  }

  onInviteUser(idUser) {
    this.env.isLoading = true;
    const dataToPost = {
      userId: idUser,
    };
    // Se ho tutti i dati a disposizione continuo con gli inviti
    if (idUser && this.teamId) {
      // Completo l'invito
      this.http
        .post(
          this.env.baseUri +
            `/tournaments/${this.tournamentId}/teams/${this.teamId}/invites`,
          dataToPost
        )
        .subscribe(
          (resp) => {
            this.env.isLoading = false;
            window.alert("Invitato correttamente");
            location.reload();
          },
          (error) => {
            this.env.isLoading = false;
            window.alert("Errore durante l'invito");
            location.reload();
          }
        );
    } else {
      return;
    }
  }

  searchUser() {
    //
    if (this.userSearch) {
      this.http
        .get(`${this.env.baseUri}/users?username=${this.userSearch}`)
        .subscribe((response) => {
          this.usersList = response;
          this.usersList.sort(function (a, b) {
            return a.username.replace(" ", "") > b.username.replace(" ", "")
              ? 1
              : -1;
          });
          if (this.teamId) {
            this.http
              .get(
                this.env.baseUri +
                  `/tournaments/${this.tournamentId}/teams/${this.teamId}`
              )
              .subscribe((resp) => {
                this.teamObj = resp;
                this.updateList();
                this.usersFoundCounter = Object.keys(this.usersList).length;
              });
          }
        });
    } else {
      this.usersFoundCounter = 0;
      this.usersList = [];
    }
  }
  updateList() {
    if (this.usersList && this.teamObj) {
      for (var i = 0; i < this.teamObj.members.length; i++) {
        for (var j = 0; j < this.usersList.length; j++) {
          this.usersList[j].disabled = this.usersList[j].disabled
            ? true
            : false;
          if (this.teamObj.members[i].userId === this.usersList[j]._id) {
            this.usersList[j].disabled = true;
          }
        }
      }
      for (var i = 0; i < this.teamObj.invites.length; i++) {
        for (var j = 0; j < this.usersList.length; j++) {
          this.usersList[j].disabled = this.usersList[j].disabled
            ? true
            : false;
          if (this.teamObj.invites[i].userId === this.usersList[j]._id) {
            this.usersList[j].disabled = true;
          }
        }
      }
    }
  }
}
