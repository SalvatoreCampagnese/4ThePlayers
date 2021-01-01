import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Plugins } from "@capacitor/core";
import { AuthService } from "src/app/services/auth.service";
const { Storage } = Plugins;
import { MenuController } from "@ionic/angular";
import { GlobalEnv } from "../env";
import { LoadingController } from "@ionic/angular";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.page.html",
  styleUrls: ["./forgot-password.page.scss"],
})
export class ForgotPasswordPage implements OnInit {
  email: string = null;

  constructor(
    private router: Router,
    public http: HttpClient,
    private authService: AuthService,
    private menuCtrl: MenuController,
    private env: GlobalEnv,
    public loadingController: LoadingController
  ) {}

  ngOnInit() {}

  SendEmail() {
    if (this.email) {
      this.http
        .post(`${this.env.baseUri}/auth/password`, { email: this.email })
        .subscribe((resp) => {
          window.alert("Password resettata, controlla la tua email");
        });
    }
  }

  SignUpPage() {
    this.router.navigateByUrl("/signup");
  }
}
