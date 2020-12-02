import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalEnv } from '../env';
import { AuthService } from '../services/auth.service';
import { Plugins } from "@capacitor/core";
const { Storage } = Plugins;

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.page.html',
  styleUrls: ['./team-detail.page.scss'],
})
export class TeamDetailPage implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private env: GlobalEnv,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) { }

  teamObj: any;
  token: string;
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params["teamObj"]) {
        this.teamObj = JSON.parse(params["teamObj"]);
        this.authService.getToken().then(() => {
          if (this.authService.isLoggedIn) {
            Storage.get({ key: "token" }).then((data) => {
              this.token = data.value;
            });
          } else {
            this.router.navigateByUrl("/login");
          }
        });
      } else {
        this.router.navigateByUrl("/home");
      }
    });
  }
  showUserPage(userObj) {
    if (userObj) {
      this.router.navigate(["/user-detail"], {
        queryParams: {
          userObj: JSON.stringify(userObj),
        },
      });
    }
  }
}
