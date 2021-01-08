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
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  navigate: any;
  notifications: any;
  token: string;
  getInviteInterval: any;
  userId: string = null;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private network: Network,
    private router: Router,
    private http: HttpClient,
    private authService: AuthService,
    public env: GlobalEnv
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
      this.getInvites();
    });
  }

  async getInvites() {
    console.log(new Date().toLocaleString() + " - getInvites");
    const token = await Storage.get({ key: "token" }).then((data) => {
      if (data.value) {
        return data.value;
      }
    });
    if (token) {
      const decodedToken = jwtDecode(token);
      const userId = decodedToken["id"];
      this.userId = userId;
      this.http.get(this.env.baseUri + `/users/${userId}`).subscribe(
        (resp) => {
          if (resp && resp["user"].invites && resp["user"].invites.length) {
            let count = 0;
            for (let i = 0; i < resp["user"].invites.length; i++) {
              if (resp["user"].invites[i].status == "PENDING") {
                count++;
              }
            }
            this.env.notificationsCounter = count;
          } else {
            this.env.notificationsCounter = 0;
          }
        },
        (error) => {
          // Empty
        }
      );
    }
    if (!this.getInviteInterval) {
      this.getInviteInterval = setInterval(this.getInvites.bind(this), 60000);
    }
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
        url: "/user-detail",
        icon: "game-controller",
      },
      {
        title: " Inviti",
        url: "/invites",
        icon: "notifications",
        notificationsCount: this.env.notificationsCounter,
      },
      {
        title: "Logout",
        url: "/logout",
        icon: "exit",
      },
    ];
  }

  openTicket() {
    this.router.navigateByUrl("/ticket");
  }
}
