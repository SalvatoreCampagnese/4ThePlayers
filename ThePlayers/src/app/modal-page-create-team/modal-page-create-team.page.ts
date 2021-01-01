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
  selectedAvatar: number = 1;

  constructor(
    private modalController: ModalController,
    private authService: AuthService,
    private http: HttpClient,
    private router: Router,
    public env: GlobalEnv
  ) {}

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
    let urlImg;
    switch (this.selectedAvatar) {
      case 1:
        urlImg = "https://i.imgur.com/2HZCGsX.jpeg";
        break;
      case 2:
        urlImg = "https://i.imgur.com/2HZCGsX.jpeg";
        break;
      case 3:
        urlImg = "https://i.imgur.com/2HZCGsX.jpeg";
        break;
      case 4:
        urlImg = "https://i.imgur.com/2HZCGsX.jpeg";
        break;
      default:
        urlImg = "https://i.imgur.com/2HZCGsX.jpeg";
        break;
    }
    const dataPost = {
      name: this.teamname,
      imgUrl: urlImg,
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
  setAvatarSelected(imageId) {
    if (imageId) {
      let element;
      if (this.selectedAvatar) {
        element = document.getElementById("avatar" + this.selectedAvatar);
        element.classList.remove("selectedavatar");
      }
      this.selectedAvatar = imageId;
      element = document.getElementById("avatar" + imageId);
      element.classList.add("selectedavatar");
    }
  }
}
