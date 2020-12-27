import { Component, OnInit } from '@angular/core';
import { GlobalEnv } from '../env';
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {
  Plugins
} from '@capacitor/core';

import jwtDecode from "jwt-decode";
const { Storage } = Plugins;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userObj: any = {};
  disabledAggiorna: boolean = true;
  password: any;
  repeatPassword: any;

  constructor(public env: GlobalEnv,
    private router: Router,
    private http: HttpClient,
    private authService: AuthService) { }

  ngOnInit() {
    this.authService.getToken().then(() => {
      if (this.authService.isLoggedIn) {
        Storage.get({ key: "token" }).then((data) => {
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
              const userObj = response['user'];
              if (userObj) {
                this.userObj = userObj ? userObj : null;
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

  editUser() {
    debugger;
  }

}
