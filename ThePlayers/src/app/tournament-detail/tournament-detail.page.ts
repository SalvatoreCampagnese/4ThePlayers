import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { LoadingController, ModalController } from "@ionic/angular";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ModalPageCreateTeamPage } from "../modal-page-create-team/modal-page-create-team.page";
import { AuthService } from "src/app/services/auth.service";
import { Plugins } from "@capacitor/core";
import { GlobalEnv } from "../env";
const { Storage } = Plugins;

@Component({
  selector: "app-tournament-detail",
  templateUrl: "./tournament-detail.page.html",
  styleUrls: ["./tournament-detail.page.scss"],
})
export class TournamentDetailPage implements OnInit {
  idTournament: String;
  tournamentDetail: any;

  showSubscribeBox: boolean;
  showErrorTeam: boolean;
  showCreateMatch: boolean;

  teamsList: any;
  userTeam: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public modalController: ModalController,
    private authService: AuthService,
    private http: HttpClient,
    public env: GlobalEnv,
    public loadingController: LoadingController
  ) { }

  loading: any;

  async presentLoading() {
    // Prepare a loading controller
    this.loading = await this.loadingController.create({
      message: "Caricamento dei tornei in corso...",
    });
    // Present the loading controller
    await this.loading.present();
  }

  ngOnInit() {
    this.showSubscribeBox = true;
    this.showErrorTeam = false;
    this.showCreateMatch = false;

    this.activatedRoute.queryParams.subscribe((params) => {
      this.idTournament = params["idTournament"];
      if (!this.idTournament) {
        this.router.navigateByUrl("/home");
      } else {
        this.authService.getToken().then(() => {
          if (this.authService.isLoggedIn) {
            Storage.get({ key: "token" }).then((data) => {
              this.getTournamentDetail(this.idTournament, data.value);
            });
          } else {
            this.router.navigateByUrl("/login");
          }
        });
      }
    });
  }

  async showCreateTeamModal() {
    const modal = await this.modalController.create({
      component: ModalPageCreateTeamPage,
      cssClass: "simple-modal",
      componentProps: {
        idTournament: this.idTournament,
      },
    });
    modal.onDidDismiss().then((data) => {
      const created = data['data'].created;
      if (created) {
        location.reload();
      }
    });
    return await modal.present();
  }

  async getTournamentDetail(idTournament, token) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    this.http
      .get(`${this.env.baseUri}/tournaments/${idTournament}`, { headers })
      .subscribe(
        (response) => {
          this.tournamentDetail = response;
          // Guardo se l'utente ha un team
          const userTeam = this.tournamentDetail.userTeam,
            ruleset = this.tournamentDetail.ruleset;
          if (userTeam) {
            this.userTeam = userTeam;
            this.showSubscribeBox = false;
            // Controllo il nr di players in base a quelli del torneo
            if (
              ruleset.maxNumberOfPlayersPerTeam <= userTeam.members.length &&
              ruleset.minNumberOfPlayersPerTeam >= userTeam.members.length
            ) {
              // Il team è ok e faccio fare le sfide
              this.showCreateMatch = true;
              this.showErrorTeam = false;
            } else {
              // Il team non rispetta il nr di giocatori necessari
              this.showErrorTeam = true;
            }
          } else {
            // Non ce l'ha
          }
          this.teamsList = this.tournamentDetail.teams;
          if (this.tournamentDetail.userTeam) {
            this.teamsList.push(this.tournamentDetail.userTeam);
          }
          if (this.teamsList[0] === undefined) {
            this.teamsList = [];
          }
        },
        (error) => {
          window.alert("errore tornei");
        }
      );
  }
  showCreateMatchFn() {
    return true;
  }

  showInviteMembers() {
    if (this.userTeam) {
      this.router.navigate(["/users"], {
        queryParams: {
          teamObj: JSON.stringify(this.userTeam),
          tournamentId: this.idTournament,
        },
      });
    } else {
      this.router.navigateByUrl("/users");
    }
  }


  async showTeamsInfo(teamId) {
    const token = await Storage.get({ key: "token" }).then((data) => {
      return data.value;
    });
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    const teamObj = this.teamsList.find((item) => item._id == teamId);
    if (teamObj) {
      this.router.navigate(["/team-detail"], {
        queryParams: {
          teamObj: JSON.stringify(teamObj),
        },
      });
    }
  }
}
