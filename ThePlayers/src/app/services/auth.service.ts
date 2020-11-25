import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";
import { EnvService } from "./env.service";
import { User } from "../models/user";
import { Plugins } from "@capacitor/core";
const { Storage } = Plugins;

@Injectable({
  providedIn: "root",
})
export class AuthService {
  isLoggedIn = false;
  token: any;
  constructor(
    private http: HttpClient,
    private env: EnvService,
    private router: Router
  ) {}

  login(email: String, password: String) {
    return this.http
      .post(this.env.API_URL + "auth/login", {
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
    return this.http.post(this.env.API_URL + "auth/signup", {
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
    const headers = new HttpHeaders({
      Authorization:
        this.token["token_type"] + " " + this.token["access_token"],
    });
    return this.http
      .get<User>(this.env.API_URL + "auth/user", { headers: headers })
      .pipe(
        tap((user) => {
          return user;
        })
      );
  }
  getToken() {
    return Storage.get({ key: "token" }).then(
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
