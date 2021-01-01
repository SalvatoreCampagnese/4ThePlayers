import { Component, OnInit } from "@angular/core";
import { GlobalEnv } from "../env";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Plugins } from "@capacitor/core";

import jwtDecode from "jwt-decode";
const { Storage } = Plugins;
@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
  userObj: any = {};
  disabledAggiorna: boolean = true;
  oldPassword: string = null;
  newPassword: string = null;
  repeatPassword: string = null;
  platformList: any = {};
  token: string = null;
  constructor(
    public env: GlobalEnv,
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.getToken().then(() => {
      if (this.authService.isLoggedIn) {
        Storage.get({ key: "token" }).then((data) => {
          this.token = data.value;
          this.getProfileInfo(data.value);
        });
      } else {
        this.router.navigateByUrl("/login");
      }
    });
  }

  getProfileInfo(token) {
    if (token) {
      const decodedToken = jwtDecode(token);
      const userId = decodedToken["id"];
      if (userId) {
        this.http
          .get(`${this.env.baseUri}/users/${userId}`)
          .subscribe((response) => {
            if (response) {
              const userObj = response["user"];
              if (userObj) {
                this.userObj = userObj ? userObj : null;
                this.http
                  .get(`${this.env.baseUri}/platforms/`)
                  .subscribe((response) => {
                    this.platformList = response;
                    for (let i = 0; i < this.platformList.length; i++) {
                      if (this.platformList[i]) {
                        switch (this.platformList[i].name) {
                          case "Playstation":
                            this.platformList[i].icon =
                              "<i class='fab fa-playstation'></i>";
                            break;
                          case "Activision":
                            this.platformList[i].icon =
                              "<i class='fab fa-jedi-order'></i>";
                            break;
                          case "Xbox":
                            this.platformList[i].icon =
                              "<i class='fab fa-xbox'></i>";
                            break;
                          case "PC":
                            this.platformList[i].icon =
                              "<i class='fab fa-steam'></i>";
                            break;
                          case "Nintendo":
                            this.platformList[i].icon =
                              "<i class='fas fa-gamepad'></i>";
                            break;
                          default:
                            this.platformList[i].icon =
                              "<i class='fab fa-gamepad'></i>";
                            break;
                        }
                      }
                    }
                    this.updateUserPlatformData();
                  });
              }
            }
          });
      }
    }
  }

  doRefresh(event) {
    this.authService.getToken().then(() => {
      if (this.authService.isLoggedIn) {
        Storage.get({ key: "token" }).then((data) => {
          this.getProfileInfo(data.value);
          event.target.complete();
        });
      } else {
        this.router.navigateByUrl("/login");
      }
    });
  }

  onChangeData() {
    this.disabledAggiorna = false;
  }

  updateUserPlatformData() {
    debugger;
    if (this.platformList && this.userObj.platforms) {
      for (let i = 0; i < this.platformList.length; i++) {
        let found = false;
        for (let j = 0; j < this.userObj.platforms.length; j++) {
          if (this.platformList[i]._id === this.userObj.platforms[j]._id) {
            found = true;
            this.userObj.platforms[j].icon = this.platformList[i].icon;
            this.userObj.platforms[j].name = this.platformList[i].name;
          }
        }
        if (!found) {
          this.userObj.platforms.push(this.platformList[i]);
        }
      }
    } else if (this.platformList && !this.userObj.platforms) {
      this.userObj.platforms = this.platformList;
    }
  }

  editUser() {
    const userPatch = {};
    if (this.userObj.username) userPatch["username"] = this.userObj.username;

    if (this.oldPassword && this.newPassword && this.repeatPassword) {
      if (this.newPassword == this.repeatPassword) {
        userPatch["newPassword"] = this.newPassword;
        userPatch["oldPassword"] = this.oldPassword;
      }
    }

    let listOfPlatform = [];

    for (var i = 0; i < this.platformList.length; i++) {
      const element = (<HTMLInputElement>(
        document.getElementById(this.platformList[i]._id)
      )).value;
      listOfPlatform.push({
        username: element,
        _id: this.platformList[i]._id,
      });
    }
    userPatch["platforms"] = listOfPlatform;

    const decodedToken = jwtDecode(this.token);
    const userId = decodedToken["id"];
    this.http
      .patch(`${this.env.baseUri}/users/${userId}`, userPatch)
      .subscribe((resp) => {
        location.reload();
      });
  }
}
