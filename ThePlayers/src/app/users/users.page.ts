import { HttpClient, HttpHeaders } from "@angular/common/http";
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
  teamObj: any;
  token: string;
  usersList: any;
  tournamentId: any;
  showButtonInvite: boolean = true;

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      const teamObj = params["teamObj"];
      const tournamentId = params["tournamentId"];
      if (!teamObj || !tournamentId) {
        this.showButtonInvite = false;
      } else {
        this.teamObj = JSON.parse(teamObj);
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
      this.usersList = [
        { username: "test", id: "5fbd6266632de60015458b4f" },
        { username: "test", id: "5fbd6266632de60015458b4f" },
      ];
    });
  }

  onInviteUser(idUser) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    const dataToPost = {
      userId: idUser,
    };
    // Se ho tutti i dati a disposizione continuo con gli inviti
    if (idUser && this.teamObj) {
      // Completo l'invito
      this.http
        .post(
          this.env.baseUri +
            `/tournaments/${this.tournamentId}/teams/${this.teamObj._id}/invites`,
          dataToPost,
          { headers }
        )
        .subscribe(
          (resp) => {
            window.alert("Invitato correttamente");
          },
          (error) => {
            window.alert("Errore durante l'invito");
          }
        );
    } else {
      return;
    }
  }
}
