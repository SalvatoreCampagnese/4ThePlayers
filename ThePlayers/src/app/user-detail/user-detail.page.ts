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
            if (!params["userId"]) {
              this.userObj = {};
              const deserialized = jwtDecode(this.token);
              this.userId = deserialized["id"];
              this.userObj["userId"] = deserialized["id"];
            } else {
              this.userId = params["userId"];
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
    if (this.userId) {
      this.http
        .get(`${this.env.baseUri}/users/${this.userId}`)
        .subscribe((response) => {
          if (response) {
            const userObj = response["user"];
            if (userObj) {
              this.userObj = userObj ? userObj : null;
              this.tournamentsList = userObj.tournaments;
            }
            if (userObj && userObj.platforms && userObj.platforms.length > 0) {
              this.http
                .get(`${this.env.baseUri}/platforms/`)
                .subscribe((response) => {
                  for (let i = 0; i < userObj.platforms.length; i++) {
                    let platId = userObj.platforms[i]._id;
                    //response.find()
                    for (let j = 0; j < Object.keys(response).length; j++) {
                      if (
                        response[Object.keys(response)[i]]._id ===
                        userObj.platforms[i]._id
                      ) {
                        switch (response[Object.keys(response)[i]].name) {
                          case "Playstation":
                            userObj.platforms[i].icon = "fab fa-playstation";
                            break;
                          case "Activision":
                            userObj.platforms[i].icon = "fab fa-jedi-order";
                            break;
                          case "Xbox":
                            userObj.platforms[i].icon = "fab fa-xbox";
                            break;
                          case "PC":
                            userObj.platforms[i].icon = "fab fa-steam";
                            break;
                          case "Nintendo":
                            userObj.platforms[i].icon = "fas fa-gamepad";
                            break;
                          default:
                            userObj.platforms[i].icon = "fas fa-gamepad";
                            break;
                        }
                      }
                    }
                  }
                });
            }
          }
        });
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

  showAccordionPlatforms() {
    const accordionPlatforms = document.getElementById("platforms-accordion"),
      anglePlatforms = document.getElementById("platforms-angle");
    if (accordionPlatforms.style.display == "none") {
      accordionPlatforms.style.display = "block";
      anglePlatforms.classList.remove("fa-angle-down");
      anglePlatforms.classList.add("fa-angle-up");
    } else {
      accordionPlatforms.style.display = "none";
      anglePlatforms.classList.remove("fa-angle-up");
      anglePlatforms.classList.add("fa-angle-down");
    }
  }
}
