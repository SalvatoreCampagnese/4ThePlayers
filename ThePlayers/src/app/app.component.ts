import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { Network } from "@ionic-native/network/ngx";

import { Plugins } from "@capacitor/core";
import { GlobalEnv } from "./env";
const { Storage } = Plugins;
import { AuthService } from "src/app/services/auth.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import jwtDecode from "jwt-decode";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  navigate: any;
  notifications: any;
  token: string;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private network: Network,
    private http: HttpClient,
    private authService: AuthService,
    private env: GlobalEnv
  ) {
    this.sideMenu();
    this.initializeApp();

    //
    this.platform.ready().then(() => {
      let disconnected = false;
      this.network.onDisconnect().subscribe(() => {
        alert("Per utilizzare l'app devi avere una connessione ad internet.");
        disconnected = true;
      });
      this.network.onConnect().subscribe(() => {
        if (disconnected) {
          location.reload();
          disconnected = false;
        }
      });
    });

    // disconnectSubscription.unsubscribe();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.authService.getToken().then(() => {
      if (this.authService.isLoggedIn) {
        Storage.get({ key: "token" }).then((data) => {
          if (data.value) {
            //this.getInvites();
          }
        });
      }
    });
  }

  async getInvites() {
    console.log(new Date().toLocaleString() + " - getInvites");
    const token = await Storage.get({ key: "token" }).then((data) => {
      if (data.value) {
        return data.value;
      }
    });
    const decodedToken = jwtDecode(token);
    const userId = decodedToken["id"];
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    this.http.get(this.env.baseUri + `/users/${userId}`, { headers }).subscribe(
      (resp) => {
        if (resp && resp["invites"] && resp["invites"].length) {
          this.env.notificationsCounter = resp["invites"].length;
        } else {
          this.env.notificationsCounter = 0;
        }
      },
      (error) => {
        // Empty
      }
    );
    setInterval(this.getInvites.bind(this), 40000);
  }

  sideMenu() {
    this.navigate = [
      {
        title: "Home",
        url: "/home",
        icon: "home",
      },
      {
        title: "Profilo",
        url: "/profile",
        icon: "game-controller",
      },
      {
        title: "Logout",
        url: "/logout",
        icon: "exit",
      },
    ];
  }
}
