import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { GlobalEnv } from "../env";
import { AuthService } from "../services/auth.service";
import { Plugins } from "@capacitor/core";
const { Storage } = Plugins;
import jwtDecode from "jwt-decode";

@Component({
  selector: "app-team-detail",
  templateUrl: "./team-detail.page.html",
  styleUrls: ["./team-detail.page.scss"],
})
export class TeamDetailPage implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    public env: GlobalEnv,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) { }

  teamId: any;
  userId: string;
  isLeader: boolean = false;
  token: string;
  tournamentId: string;
  teamObj: any;
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params["teamId"] && params["tournamentId"]) {
        this.tournamentId = params["tournamentId"];
        this.teamId = params["teamId"];
        Storage.get({ key: "token" }).then((data) => {
          this.token = data.value;
          this.getTeamInfo();
        });
      } else {
        this.router.navigateByUrl("/home");
      }
    });
  }
  getTeamInfo() {
    if (this.teamId) {
      this.http
        .get(
          this.env.baseUri +
          `/tournaments/${this.tournamentId}/teams/${this.teamId}`
        )
        .subscribe((resp) => {
          this.teamObj = resp;
          for (var i = 0; i < resp["members"].length; i++) {
            const member = resp["members"][i];
            if (member.userId) {
              const decodedToken = jwtDecode(this.token);
              this.userId = decodedToken["id"];
              if (
                member.userId === decodedToken["id"] &&
                member.role === "LEADER"
              )
                this.isLeader = true;
            }
          }
        });
    }
  }
  showUserPage(userObj) {
    if (userObj) {
      this.router.navigate(["/user-detail"], {
        queryParams: {
          userObj: JSON.stringify(userObj),
        },
      });
    }
  }

  removeMember(userObj) {
    if (userObj) {
      const userId = userObj.userId;
      if (userId && this.isLeader) {
        this.http
          .patch(
            this.env.baseUri +
            `/tournaments/${this.tournamentId}/teams/${this.teamId}`,
            { membersToRemove: [userId] }
          )
          .subscribe(
            (resp) => {
              location.reload();
            },
            (error) => {
              window.alert("errore nella rimozione del player.");
            }
          );
      }
    }
  }

  quitTeam() {
    if (this.userId) {
      this.http
        .patch(
          this.env.baseUri +
          `/tournaments/${this.tournamentId}/teams/${this.teamId}`,
          { membersToRemove: [this.userId] }
        )
        .subscribe(
          (resp) => {
            location.reload();
          },
          (error) => {
            window.alert("errore nella rimozione del player.");
          }
        );
    }
  }

  updateLeader(member) {

  }
}
