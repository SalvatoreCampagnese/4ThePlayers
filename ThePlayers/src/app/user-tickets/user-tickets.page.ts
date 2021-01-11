import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Plugins } from "@capacitor/core";
import { GlobalEnv } from "../env";
import { AuthService } from "../services/auth.service";

const { Storage } = Plugins;
@Component({
  selector: "app-user-tickets",
  templateUrl: "./user-tickets.page.html",
  styleUrls: ["./user-tickets.page.scss"],
})
export class UserTicketsPage implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService,
    private http: HttpClient,
    public env: GlobalEnv
  ) {}

  ticketsList: any = [];
  ngOnInit() {
    this.authService.getToken().then(() => {
      if (this.authService.isLoggedIn) {
        this.getInvites();
      } else {
        this.router.navigateByUrl("/login");
      }
    });
  }

  getInvites() {
    this.http.get(`${this.env.baseUri}/tickets`).subscribe((resp) => {
      this.ticketsList = resp;
    });
  }
}
