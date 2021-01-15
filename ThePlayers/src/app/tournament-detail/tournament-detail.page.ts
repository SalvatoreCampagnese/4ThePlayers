import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { LoadingController, ModalController } from "@ionic/angular";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ModalPageCreateTeamPage } from "../modal-page-create-team/modal-page-create-team.page";
import { AuthService } from "src/app/services/auth.service";
import { Plugins } from "@capacitor/core";
import { GlobalEnv } from "../env";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
const { Storage } = Plugins;

@Component({
  selector: "app-tournament-detail",
  templateUrl: "./tournament-detail.page.html",
  styleUrls: ["./tournament-detail.page.scss"],
})
export class TournamentDetailPage implements OnInit {
  idTournament: String;
  tournamentDetail: any;

  showSubscribeBox: boolean = false;
  showErrorTeam: boolean = false;
  showCreateMatch: boolean = false;
  showMatchPending: boolean = false;

  showClassifica: boolean = true;
  showRegolamento: boolean = false;
  showSponsor: boolean = false;
  showMatches: boolean = false;
  isOpen: boolean = false;
  alreadyMatched: boolean = false;
  showModalCreateMatch: boolean = false;
  matchForm = {
    ruleset: "",
    nrPlayers: "",
  };

  teamsList: any;
  userTeam: any;
  matchesList: any;
  matchPending: any;
  matchesNotAccepted: any;

  userCoins: number = 0;
  counterMatchPending: number = 0;
  counterMatchClosed: number = 0;

  showErrorNrPlayers: boolean = false;
  showErrorRuleset: boolean = false;
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
  timeoutCheck: any = null;
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

    this.env.isLoading = true;

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
      const created = data["data"].created;
      if (created) {
        location.reload();
      }
    });
    return await modal.present();
  }

  async getTournamentDetail(idTournament, token) {
    this.http.get(`${this.env.baseUri}/tournaments/${idTournament}`).subscribe(
      (response) => {
        this.tournamentDetail = response;
        // Guardo se l'utente ha un team
        const userTeam = this.tournamentDetail.userTeam,
          ruleset = this.tournamentDetail.ruleset;
        if (userTeam) {
          this.userTeam = userTeam;
          this.showSubscribeBox = false;
          let minOfPlayersPerTeam = 999;
          let maxOfPlayersPerTeam = 0;
          for (let i = 0; i < ruleset.length; i++) {
            if (ruleset[i].maxNumberOfPlayersPerTeam > maxOfPlayersPerTeam)
              maxOfPlayersPerTeam = ruleset[i].maxNumberOfPlayersPerTeam;
            if (ruleset[i].minNumberOfPlayersPerTeam < minOfPlayersPerTeam)
              minOfPlayersPerTeam = ruleset[i].minNumberOfPlayersPerTeam;
          }
          // Controllo il nr di players in base a quelli del torneo
          if (
            maxOfPlayersPerTeam >= userTeam.members.length &&
            minOfPlayersPerTeam <= userTeam.members.length
          ) {
            // Il team è ok e faccio fare le sfide
            this.showCreateMatch = true;
            this.showErrorTeam = false;
          } else {
            // Il team non rispetta il nr di giocatori necessari
            this.showErrorTeam = true;
          }
        }

        this.checkIfHasMatch(this.userTeam);
        this.isOpen = this.tournamentDetail.open
          ? this.tournamentDetail.open
          : false;
        this.teamsList = this.tournamentDetail.teams;
        if (this.teamsList[0] === undefined) {
          this.teamsList = [];
        } else {
          this.teamsList.sort((a, b) => (a.elo < b.elo ? 1 : -1));
        }

        this.env.isLoading = false;
      },
      (error) => {
        this.env.isLoading = false;
        window.alert("errore tornei");
      }
    );
  }

  checkIfHasMatch(userTeam) {
    this.http
      .get(`${this.env.baseUri}/tournaments/${this.idTournament}/matches`)
      .subscribe(
        (resp) => {
          // Itero i matches
          if (resp) {
            this.matchesList = resp;

            this.counterMatchPending = 0;
            this.counterMatchClosed = 0;
            for (var i = 0; i < this.matchesList.length; i++) {
              this.matchesList[i].createdAt = new Date(
                this.matchesList[i].createdAt
              ).toLocaleString("it");
              if (
                this.matchesList[i] &&
                this.matchesList[i].status === "PENDING"
              ) {
                if (
                  this.matchesList[i].teamOne &&
                  this.matchesList[i].teamTwo
                ) {
                  this.counterMatchPending += 1;
                }
                this.matchesNotAccepted = [];
                // Ha gia' un match in corso
                if (
                  (this.matchesList[i].teamOne &&
                    this.matchesList[i].teamOne._id ===
                    this.tournamentDetail.userTeam._id) ||
                  (this.matchesList[i].teamTwo &&
                    this.matchesList[i].teamTwo._id ===
                    this.tournamentDetail.userTeam._id)
                ) {
                  if (
                    this.matchesList[i].teamOne._id ===
                    this.tournamentDetail.userTeam._id
                  ) {
                    if (this.matchesList[i].teamTwo) {
                      this.alreadyMatched = true;
                      if (!this.matchesList[i].teamOne.result) {
                        this.showCreateMatch = false;
                        this.showMatchPending = true;
                      } else {
                        this.showCreateMatch = true;
                        this.showMatchPending = false;
                      }
                    } else {
                      this.showMatchPending = true;
                      this.showCreateMatch = false;
                      this.alreadyMatched = false;
                    }
                  } else if (
                    this.matchesList[i].teamTwo._id ===
                    this.tournamentDetail.userTeam._id
                  ) {
                    if (this.matchesList[i].teamOne) {
                      this.alreadyMatched = true;
                      if (!this.matchesList[i].teamTwo.result) {
                        this.showCreateMatch = false;
                        this.showMatchPending = true;
                      } else {
                        this.showCreateMatch = true;
                        this.showMatchPending = false;
                      }
                    } else {
                      this.showMatchPending = true;
                      this.showCreateMatch = false;
                      this.alreadyMatched = false;
                    }
                  }

                  if (this.showMatchPending) {
                    this.matchPending = this.matchesList[i];
                    for (
                      var j = 0;
                      j < this.tournamentDetail.ruleset.length;
                      j++
                    ) {
                      if (
                        this.matchPending.rulesetId ===
                        this.tournamentDetail.ruleset[j]._id
                      ) {
                        this.matchPending.rulesetName = this.tournamentDetail.ruleset[
                          j
                        ].name;
                      }
                    }
                  }
                  if (this.alreadyMatched == false) {
                    this.autoCheckForChange(this.matchesList[i]);
                  } else if (this.timeoutCheck) {
                    clearInterval(this.timeoutCheck);
                  }
                }
              } else if (
                this.matchesList[i] &&
                (this.matchesList[i].status === "TEAM1" ||
                  this.matchesList[i].status === "TEAM2")
              ) {
                this.counterMatchClosed += 1;
              }
            }
          }
        },
        (error) => {
          this.env.isLoading = false;
          window.alert(error);
        }
      );
  }

  deleteMatch(matchObj) {
    if (this.tournamentDetail.userTeam._id) {
      if (this.tournamentDetail.userTeam._id == matchObj.teamOne) {
        if (matchObj.teamTwo) {
          location.reload();
          return;
        }
      } else if (this.tournamentDetail.userTeam._id == matchObj.teamTwo) {
        if (matchObj.teamOne) {
          location.reload();
          return;
        }
      }
      this.http
        .delete(
          `${this.env.baseUri}/tournaments/${this.idTournament}/matches/${matchObj._id}`
        )
        .subscribe((resp) => {
          location.reload();
        });
    }
    return;
  }

  changeResultMatch(matchObj, result) {
    let text = ""
    if (result == 'WIN') text = "Sei sicuro di aver vinto?"
    else if (result == 'LOSS') text = "Sei sicuro di aver perso?"
    else text = "Sei sicuro di aver pareggiato?"
    var r = confirm(text);
    if (r == true) {
      if (this.tournamentDetail.userTeam._id) {
        const dataToPatch = {
          teamId: this.tournamentDetail.userTeam._id,
          action: "POST_RESULT",
          result: result,
        };
        this.http
          .patch(
            `${this.env.baseUri}/tournaments/${this.idTournament}/matches/${matchObj._id}`,
            dataToPatch
          )
          .subscribe((resp) => {
            location.reload();
          });
      }
    }

    return;
  }

  createMatchFn() {
    if (!this.matchForm.ruleset) this.showErrorRuleset = true;
    else this.showErrorRuleset = false;
    if (!this.matchForm.nrPlayers) this.showErrorNrPlayers = true;
    else this.showErrorNrPlayers = false;
    if (!this.matchForm.ruleset || !this.matchForm.nrPlayers) return;
    const dataToPost = {
      teamId: this.tournamentDetail.userTeam._id,
      rulesetId: this.matchForm.ruleset,
      numberOfPlayers: this.matchForm.nrPlayers,
    };
    this.http
      .post(
        `${this.env.baseUri}/tournaments/${this.idTournament}/matches`,
        dataToPost
      )
      .subscribe((resp) => {
        location.reload();
      });
    return true;
  }

  showCreateMatchFn() {
    this.matchesNotAccepted = [];
    this.http
      .get(`${this.env.baseUri}/tournaments/${this.idTournament}/matches`)
      .subscribe((response) => {
        for (var i = 0; i < Object.keys(response).length; i++) {
          if (
            !response[i].teamTwo &&
            response[i].teamOne &&
            response[i].teamOne._id !== this.tournamentDetail.userTeam._id
          ) {
            const ruleset = this.tournamentDetail.ruleset.find(
              (item) => item._id == response[i].rulesetId
            );
            response[i].rulesetName = ruleset.name;
            this.matchesNotAccepted.push(response[i]);
          }
        }
        this.showModalCreateMatch = true;
      });
  }
  closeCreateMatch() {
    this.matchesNotAccepted = [];
    this.showModalCreateMatch = false;
  }

  doRefresh(event) {
    this.authService.getToken().then(() => {
      if (this.authService.isLoggedIn) {
        Storage.get({ key: "token" }).then((data) => {
          location.reload();
          event.target.complete();
        });
      } else {
        this.router.navigateByUrl("/login");
      }
    });
  }

  showInviteMembers() {
    if (this.userTeam) {
      this.router.navigate(["/users"], {
        queryParams: {
          teamId: this.userTeam._id,
          tournamentId: this.idTournament,
        },
      });
    } else {
      this.router.navigateByUrl("/users");
    }
  }

  async showTeamsInfo(teamId) {
    if (teamId) {
      this.router.navigate(["/team-detail"], {
        queryParams: {
          teamId: teamId,
          tournamentId: this.idTournament,
        },
      });
    }
  }

  onTabChange(ev: any) {
    switch (ev.detail.value) {
      case "regolamento":
        this.showRegolamento = true;
        this.showClassifica = false;
        this.showSponsor = false;
        this.showMatches = false;
        break;
      case "classifica":
        this.showRegolamento = false;
        this.showClassifica = true;
        this.showSponsor = false;
        this.showMatches = false;
        break;
      case "sponsor":
        this.showRegolamento = false;
        this.showClassifica = false;
        this.showSponsor = true;
        this.showMatches = false;
        break;
      case "matches":
        this.showRegolamento = false;
        this.showClassifica = false;
        this.showSponsor = false;
        this.showMatches = true;
        break;
      default:
        this.showRegolamento = false;
        this.showClassifica = true;
        this.showSponsor = false;
        this.showMatches = false;
        break;
    }
  }

  autoCheckForChange(matchObj) {
    if (matchObj) {
      console.log(
        new Date().toLocaleString("it") + " - Match check ID:" + matchObj._id
      );
      this.http
        .get(
          `${this.env.baseUri}/tournaments/${this.idTournament}/matches/${matchObj._id}`
        )
        .subscribe((resp) => {
          if (resp["teamTwo"]) {
            if (location.pathname === "/tournament-detail") {
              location.reload();
            } else {
              window.alert(
                "Il team " + resp["teamTwo"].name + " ti ha accettato la sfida!"
              );
            }
            clearInterval(this.timeoutCheck);
          }
        });
    }
    this.timeoutCheck = setTimeout(
      this.autoCheckForChange.bind(this),
      15000,
      matchObj
    );
  }

  acceptMatch(matchObj) {
    if (matchObj) {
      const dataToPost = {
        teamId: this.tournamentDetail.userTeam._id,
      };
      this.http
        .post(
          `${this.env.baseUri}/tournaments/${this.idTournament}/matches/${matchObj._id}`,
          dataToPost
        )
        .subscribe((resp) => {
          location.reload();
        });
    }
  }
}
