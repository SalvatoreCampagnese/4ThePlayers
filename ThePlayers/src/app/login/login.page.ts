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
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  // Inizializzo le variabili da utilizzare per il login
  email: String;
  password: String;
  responseLogin: any;
  loading: any;
  constructor(
    private router: Router,
    public httpClient: HttpClient,
    private authService: AuthService,
    private menuCtrl: MenuController,
    private env: GlobalEnv,
    public loadingController: LoadingController
  ) {}

  async presentLoading() {
    // Prepare a loading controller
    this.loading = await this.loadingController.create({
      message: "Caricamento in corso...",
    });
    // Present the loading controller
    await this.loading.present();
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    document.body.classList.toggle("dark");
  }

  async LoginForm() {
    this.presentLoading();
    this.authService.login(this.email, this.password).subscribe(
      (data) => {
        this.loading.dismiss();
        this.router.navigateByUrl("/home");
      },
      (error) => {
        this.loading.dismiss();
        window.alert("Username o password errati.");
      }
    );
  }

  SignUpPage() {
    this.router.navigateByUrl("/signup");
  }

  ForgotPassword() {
    this.router.navigateByUrl("/forgot-password");
  }
}
