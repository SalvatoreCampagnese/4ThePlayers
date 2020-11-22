import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { AuthService } from "../services/auth.service";
import { Plugins } from "@capacitor/core";
import { Router } from "@angular/router";
const { Storage } = Plugins;

@Component({
  selector: "app-modal-page-create-team",
  templateUrl: "./modal-page-create-team.page.html",
  styleUrls: ["./modal-page-create-team.page.scss"],
})
export class ModalPageCreateTeamPage implements OnInit {
  constructor(
    private modalController: ModalController,
    private authService: AuthService,
    private http: HttpClient,
    private router: Router
  ) {}

  @Input() idTournament: string;

  teamName: string;
  avatarId: string;
  created: boolean;

  ngOnInit() {}

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
    const baseUrl = "https://just-fight.herokuapp.com";
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    const dataPost = {
      name: this.teamName,
    };
    this.http
      .post(
        `https://just-fight.herokuapp.com/tournament/${this.idTournament}/team`,
        dataPost,
        { headers }
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
