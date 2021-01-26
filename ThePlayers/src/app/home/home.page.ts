import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { tap } from "rxjs/operators";
import { AuthService } from "src/app/services/auth.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LoadingController, MenuController } from "@ionic/angular";
import { GlobalEnv } from "../env";
import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
} from "@capacitor/core";
const { PushNotifications } = Plugins;

const { Storage } = Plugins;

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService,
    private http: HttpClient,
    private menuCtrl: MenuController,
    public env: GlobalEnv,
    public loadingController: LoadingController
  ) {}
  gamesList: any = [];
  loading: any;
  userCoins: number = 0;

  async presentLoading() {
    // Prepare a loading controller
    this.loading = await this.loadingController.create({
      message: "Caricamento dei giochi corso...",
    });
  }

  ngOnInit() {
    this.authService.getToken().then(() => {
      if (this.authService.isLoggedIn) {
        Storage.get({ key: "token" }).then((data) => {
          this.env.isLoading = true;
          this.getGames(data.value);
          this.menuCtrl.enable(true);
          this.router.navigateByUrl("/home");
          this.allowNotifications();
        });
      } else {
        this.router.navigateByUrl("/login");
      }
    });
  }

  doRefresh(event) {
    this.authService.getToken().then(() => {
      if (this.authService.isLoggedIn) {
        Storage.get({ key: "token" }).then((data) => {
          this.env.isLoading = true;
          this.getGames(data.value);
          event.target.complete();
        });
      } else {
        this.router.navigateByUrl("/login");
      }
    });
  }
  async DetailGame(idGame, nomeGioco) {
    this.router.navigate(["/game-detail"], {
      queryParams: { idGame: idGame, gameName: nomeGioco },
    });
  }

  async getGames(token) {
    this.presentLoading();
    this.http.get(`${this.env.baseUri}/games`).subscribe(
      (response) => {
        this.gamesList = response;

        this.env.isLoading = false;
      },
      (error) => {
        this.env.isLoading = false;
      }
    );
  }

  allowNotifications() {
    PushNotifications.requestPermission().then((result) => {
      if (result.granted) {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // Show some error
        window.alert("Errore permessi per notifiche");
      }
    });
    // On success, we should be able to receive notifications
    PushNotifications.addListener(
      "registration",
      (token: PushNotificationToken) => {
        console.log("Push registration success, token: " + token.value);
      }
    );

    // Some issue with our setup and push will not work
    PushNotifications.addListener("registrationError", (error: any) => {
      console.log("Error on registration: " + JSON.stringify(error));
    });

    // Show us the notification payload if the app is open on our device
    PushNotifications.addListener(
      "pushNotificationReceived",
      (notification: PushNotification) => {
        console.log("Push received: " + JSON.stringify(notification));
      }
    );

    // Method called when tapping on a notification
    PushNotifications.addListener(
      "pushNotificationActionPerformed",
      (notification: PushNotificationActionPerformed) => {
        console.log("Push action performed: " + JSON.stringify(notification));
      }
    );
  }

  showBuyCoins() {
    //this.router.navigateByUrl("/buy-credits");
    // Empty
  }
}
