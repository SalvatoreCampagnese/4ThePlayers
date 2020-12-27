import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalEnv } from '../env';
import { AuthService } from '../services/auth.service';
import { Plugins } from "@capacitor/core";
const { Storage } = Plugins;
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.page.html',
  styleUrls: ['./user-detail.page.scss'],
})
export class UserDetailPage implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private env: GlobalEnv,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router) { }
  userObj: any;
  token: string;
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params["userObj"]) {
        this.userObj = JSON.parse(params["userObj"]);
        this.authService.getToken().then(() => {
          if (this.authService.isLoggedIn) {
            Storage.get({ key: "token" }).then((data) => {
              this.token = data.value;
              this.showTeams();
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

  showTeams() {
    //debugger;
  }
}