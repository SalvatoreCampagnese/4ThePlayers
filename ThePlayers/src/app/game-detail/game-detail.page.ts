import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthService } from "src/app/services/auth.service";
import { Plugins } from "@capacitor/core";
const { Storage } = Plugins;
import { GlobalEnv } from "../env";
import { LoadingController } from "@ionic/angular";

@Component({
  selector: "app-game-detail",
  templateUrl: "./game-detail.page.html",
  styleUrls: ["./game-detail.page.scss"],
})
export class GameDetailPage implements OnInit {
  idGame: String;
  gameName: String;
  tournamentsList: any;

  errorText: string;
  loading: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private http: HttpClient,
    public env: GlobalEnv,
    public loadingController: LoadingController
  ) { }
  async presentLoading() {
    // Prepare a loading controller
    this.loading = await this.loadingController.create({
      message: "Caricamento dei giochi in corso...",
    });
    // Present the loading controller
    await this.loading.present();
  }

  ionViewWillEnter() {
    this.authService.getToken().then(() => {
      if (this.authService.isLoggedIn) {
        Storage.get({ key: "token" }).then((data) => {
          this.getTournaments(data.value);
          //this.router.navigateByUrl("/game-detail");
        });
      } else {
        this.router.navigateByUrl("/login");
      }
    });
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.idGame = params["idGame"];
      this.gameName = params["gameName"];
      if (!this.idGame) {
        this.router.navigateByUrl("/home");
      }
    });
  }

  async DetailTournament(idTournament, tournamentName) {
    this.router.navigate(["/tournament-detail"], {
      queryParams: {
        idTournament: idTournament,
        tournamentName: tournamentName,
      },
    });
  }

  getTournaments(token) {
    this.presentLoading();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    this.http
      .get(`${this.env.baseUri}/tournaments/?gameId=${this.idGame}`, {
        headers,
      })
      .subscribe(
        (response) => {
          this.tournamentsList = response;
          if (this.tournamentsList.length == 0) {
            this.errorText = "Non ci sono tornei per questo gioco.";
          } else {
            this.errorText = null;
          }
          this.loading.dismiss();
        },
        (error) => {
          this.loading.dismiss();
          window.alert("errore tornei");
        }
      );
  }
}
