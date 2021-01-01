import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Plugins } from "@capacitor/core";
import { AuthService } from "src/app/services/auth.service";
const { Storage } = Plugins;
import { MenuController } from "@ionic/angular";
import { GlobalEnv } from "../env";
import { LoadingController } from "@ionic/angular";

@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.page.html",
  styleUrls: ["./reset-password.page.scss"],
})
export class ResetPasswordPage implements OnInit {
  newPassword: string = null;
  repeatPassword: string = null;
  token: string = null;
  constructor(
    private router: Router,
    public http: HttpClient,
    private authService: AuthService,
    private menuCtrl: MenuController,
    private env: GlobalEnv,
    private activatedRoute: ActivatedRoute,
    public loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.token = params["jwt"];
      if (this.token) {
        Storage.set({
          key: "token",
          value: this.token,
        });
      }
    });
  }

  ResetPassword() {
    if (this.newPassword == this.repeatPassword) {
      this.http
        .patch(`${this.env.baseUri}/auth/password`, {
          newPassword: this.newPassword,
        })
        .subscribe((resp) => {
          window.alert("Password resettata!");
          this.router.navigateByUrl("/login");
        });
    }
  }
}
