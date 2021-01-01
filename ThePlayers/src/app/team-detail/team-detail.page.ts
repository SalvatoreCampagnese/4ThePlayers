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
  ) {}

  teamObj: any;
  isLeader: boolean = false;
  token: string;
  tournamentId: string;
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params["teamObj"] && params["tournamentId"]) {
        if (params["tournamentId"]) this.tournamentId = params["tournamentId"];
        this.teamObj = JSON.parse(params["teamObj"]);
        this.authService.getToken().then(() => {
          if (this.authService.isLoggedIn) {
            Storage.get({ key: "token" }).then((data) => {
              this.token = data.value;
              this.getTeamInfo();
            });
          } else {
            this.router.navigateByUrl("/login");
          }
        });
      } else {
        this.router.navigateByUrl("/home");
      }
    });
  }
  getTeamInfo() {
    if (this.teamObj) {
      this.http
        .get(
          this.env.baseUri +
            `/tournaments/${this.tournamentId}/teams/${this.teamObj._id}`
        )
        .subscribe((resp) => {
          for (var i = 0; i < this.teamObj.members.length; i++) {
            const member = this.teamObj.members[i];
            if (member.userId) {
              this.http
                .get(`${this.env.baseUri}/users/${member.userId}`)
                .subscribe((response) => {
                  if (response) {
                    const userObj = response["user"];
                    if (userObj) {
                      const decodedToken = jwtDecode(this.token);
                      if (
                        userObj._id === decodedToken["id"] &&
                        member.role === "LEADER"
                      )
                        this.isLeader = true;
                      member.username = userObj.username;
                    }
                  }
                });
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
              `/tournaments/${this.tournamentId}/teams/${this.teamObj._id}`,
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
}
