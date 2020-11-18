import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthService } from "src/app/services/auth.service";
import { Plugins } from "@capacitor/core";
const { Storage } = Plugins;

@Component({
  selector: "app-game-detail",
  templateUrl: "./game-detail.page.html",
  styleUrls: ["./game-detail.page.scss"],
})
export class GameDetailPage implements OnInit {
  idGame: String;
  gameName: String;
  tournamentsList: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private http: HttpClient
  ) {}

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
    const baseUrl = "https://just-fight.herokuapp.com";
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    this.http.get(`${baseUrl}/tournaments`, { headers }).subscribe(
      (response) => {
        this.tournamentsList = response;
        //removeee
        this.tournamentsList = [
          {
            name: "COD6",
            id: "5fb53f85686bf952180c369d",
          },
          {
            name: "FIFA 2020",
            id: "5fb54c79df42b3001703437c",
          },
        ];
      },
      (error) => {
        // Da rimuovere
        this.tournamentsList = [
          {
            name: "COD6",
            id: "5fb53f85686bf952180c369d",
          },
          {
            name: "FIFA 2020",
            id: "5fb54c79df42b3001703437c",
          },
        ];
      }
    );
  }
}
