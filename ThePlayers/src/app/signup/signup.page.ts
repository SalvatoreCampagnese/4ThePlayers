import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { ModalRegistrationPage } from "../modal-registration/modal-registration.page";
import { AuthService } from "src/app/services/auth.service";
import { Plugins } from "@capacitor/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
const { Storage } = Plugins;
import { GlobalEnv } from "../env";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.page.html",
  styleUrls: ["./signup.page.scss"],
})
export class SignupPage implements OnInit {
  // Inizializzo le variabili da utilizzare per la registrazione
  username: String;
  email: String;
  password: String;

  constructor(
    private router: Router,
    private modalController: ModalController,
    private authService: AuthService,
    private http: HttpClient,
    private env: GlobalEnv
  ) {}

  ngOnInit() {}

  SignupForm() {
    this.authService
      .register(this.username, this.email, this.password)
      .subscribe(
        (data) => {
          if (data && data["token"]) {
            Storage.set({
              key: "token",
              value: data["token"],
            }).then(() => {
              this.http.get(`${this.env.baseUri}/auth/email`).subscribe(
                (data) => {
                  Storage.remove({ key: "token" });
                  this.showCreateTeamModal();
                },
                (error) => {
                  window.alert(
                    "Errore sendEmail" +
                      JSON.stringify(error.error.errors[0].msg)
                  );
                }
              );
            });
          }
        },
        (error) => {
          window.alert(
            "Errore in registrazione " +
              JSON.stringify(error.error.errors[0].msg)
          );
        }
      );
  }

  async showCreateTeamModal() {
    const modal = await this.modalController.create({
      component: ModalRegistrationPage,
      cssClass: "small-modal",
      componentProps: {
        textToShow:
          "Ti sei registrato con successo! Conferma la tua email per accedere al tuo account.",
      },
    });
    return await modal.present();
  }

  LoginPage() {
    this.router.navigateByUrl("/login");
  }
}
