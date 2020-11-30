import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { tap } from "rxjs/operators";
import { AuthService } from "src/app/services/auth.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Plugins } from "@capacitor/core";
import { LoadingController, MenuController } from "@ionic/angular";
import { GlobalEnv } from "../env";

const { Storage } = Plugins;

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService,
    private http: HttpClient,
    private menuCtrl: MenuController,
    public env: GlobalEnv,
    public loadingController: LoadingController
  ) {}
  gamesList: any;
  loading: any;

  async presentLoading() {
    // Prepare a loading controller
    this.loading = await this.loadingController.create({
      message: "Caricamento dei giochi corso...",
    });
    // Present the loading controller
    //await this.loading.present();
  }

  ngOnInit() {
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

  async getGames(token) {
    this.presentLoading();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    this.http
      .get(`${this.env.baseUri}/games`, { headers })
      .subscribe((response) => {
        this.gamesList = response;
      });
  }
}
