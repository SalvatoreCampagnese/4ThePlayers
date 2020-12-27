import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";
import { User } from "../models/user";
import { Plugins } from "@capacitor/core";
const { Storage } = Plugins;

import { GlobalEnv } from "../env";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  isLoggedIn = false;
  token: any;
  constructor(
    private http: HttpClient,
    private router: Router,
    public env: GlobalEnv
  ) { }

  login(email: String, password: String) {
    return this.http
      .post(this.env.baseUri + "/auth/login", {
        email: email,
        password: password,
      })
      .pipe(
        tap((token) => {
          Storage.set({
            key: "token",
            value: token["token"],
          }).then(
            () => {
              this.router.navigateByUrl("/home");
            },
            (error) => console.error("Error storing item", error)
          );
          this.token = token;
          this.isLoggedIn = true;
          return token;
        })
      );
  }
  register(userName: String, email: String, password: String) {
    return this.http.post(this.env.baseUri + "/auth/signup", {
      username: userName,
      email: email,
      password: password,
    });
  }
  logout() {
    Storage.remove({ key: "token" });
    return true;
  }
  user() {
    return this.http
      .get<User>(this.env.baseUri + "auth/user")
      .pipe(
        tap((user) => {
          return user;
        })
      );
  }
  async getToken() {
    return await Storage.get({ key: "token" }).then(
      (data) => {
        this.token = data.value;
        if (this.token != null) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      },
      (error) => {
        this.token = null;
        this.isLoggedIn = false;
      }
    );
  }
}
