import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { GlobalEnv } from "../env";
import { AuthService } from "../services/auth.service";
import { Plugins } from "@capacitor/core";
import jwtDecode from "jwt-decode";
const { Storage } = Plugins;
@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.page.html",
  styleUrls: ["./user-detail.page.scss"],
})
export class UserDetailPage implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private env: GlobalEnv,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}
  userObj: any;
  tournamentsList: any = [];
  userId: string = null;
  token: string;
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.authService.getToken().then(() => {
        if (this.authService.isLoggedIn) {
          Storage.get({ key: "token" }).then((data) => {
            this.token = data.value;
            if (!params["userObj"]) {
              this.userObj = {};
              const deserialized = jwtDecode(this.token);
              this.userId = deserialized["id"];
              this.userObj["userId"] = deserialized["id"];
            } else {
              this.userObj = JSON.parse(params["userObj"]);
            }
            this.showInfo();
          });
        } else {
          this.router.navigateByUrl("/login");
        }
      });
    });
  }

  showInfo() {
    if (this.userObj) {
      const userId = this.userObj.userId;
      if (userId) {
        this.http
          .get(`${this.env.baseUri}/users/${userId}`)
          .subscribe((response) => {
            if (response) {
              const userObj = response["user"];
              if (userObj) {
                this.userObj = userObj ? userObj : null;
                this.tournamentsList = userObj.tournaments;
              }
            }
          });
      }
    }
  }
  DetailTournament(idTournament, tournamentName) {
    this.router.navigate(["/tournament-detail"], {
      queryParams: {
        idTournament: idTournament,
        tournamentName: tournamentName,
      },
    });
  }
  editProfile() {
    this.router.navigateByUrl("/edit-profile");
  }
}
