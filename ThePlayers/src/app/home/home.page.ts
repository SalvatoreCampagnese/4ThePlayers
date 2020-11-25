import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { tap } from "rxjs/operators";
import { AuthService } from "src/app/services/auth.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Plugins } from "@capacitor/core";
import { MenuController } from "@ionic/angular";

const { Storage } = Plugins;

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor(
    private router: Router,
    private authService: AuthService,
    private http: HttpClient,
    private menuCtrl: MenuController
  ) {}
  gamesList: any;
  ionViewWillEnter() {
    this.authService.getToken().then(() => {
      if (this.authService.isLoggedIn) {
        Storage.get({ key: "token" }).then((data) => {
          this.getGames(data.value);
          this.menuCtrl.enable(true);
          this.router.navigateByUrl("/home");
        });
      } else {
        this.router.navigateByUrl("/login");
      }
    });
  }

  async DetailGame(idGame, nomeGioco) {
    this.router.navigate(["/game-detail"], {
      queryParams: { idGame: idGame, gameName: nomeGioco },
    });
  }

  getGames(token) {
    const baseUrl = "https://just-fight.herokuapp.com";
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    this.http.get(`${baseUrl}/game`, { headers }).subscribe((response) => {
      this.gamesList = response;
    });
  }
}
