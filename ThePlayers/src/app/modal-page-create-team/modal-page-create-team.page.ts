import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { AuthService } from "../services/auth.service";
import { Plugins } from "@capacitor/core";
import { Router } from "@angular/router";
import { GlobalEnv } from "../env";
const { Storage } = Plugins;

@Component({
  selector: "app-modal-page-create-team",
  templateUrl: "./modal-page-create-team.page.html",
  styleUrls: ["./modal-page-create-team.page.scss"],
})
export class ModalPageCreateTeamPage implements OnInit {
  idTournament: String;
  teamname: string;
  avatarId: String;
  created: Boolean;
  constructor(
    private modalController: ModalController,
    private authService: AuthService,
    private http: HttpClient,
    private router: Router,
    public env: GlobalEnv
  ) { }

  ngOnInit() { }

  CreateTeam() {
    this.authService.getToken().then(() => {
      if (this.authService.isLoggedIn) {
        Storage.get({ key: "token" }).then((data) => {
          this.createTeamRest(data.value);
        });
      } else {
        this.router.navigateByUrl("/login");
      }
    });
  }

  createTeamRest(token) {

    const dataPost = {
      name: this.teamname,
    };
    this.http
      .post(
        `${this.env.baseUri}/tournaments/${this.idTournament}/teams`,
        dataPost
      )
      .subscribe((response) => {
        this.created = true;
        this.dismiss();
      });
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      dismissed: true,
      created: this.created,
    });
  }
}
