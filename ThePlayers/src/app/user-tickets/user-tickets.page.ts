import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Plugins } from "@capacitor/core";
import { GlobalEnv } from "../env";
import { AuthService } from "../services/auth.service";
import jwtDecode from "jwt-decode";

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
  ticketInfo: any = [];
  showTicketInfo: boolean = false;
  newMessage: string = null;
  loggedUserId: string = null;
  ngOnInit() {
    this.authService.getToken().then(() => {
      if (this.authService.isLoggedIn) {
        Storage.get({ key: "token" }).then((data) => {
          let decodedToken = jwtDecode(data.value);
          this.loggedUserId = decodedToken["id"];
          this.getTickets();
        });
      } else {
        this.router.navigateByUrl("/login");
      }
    });
  }

  getTickets() {
    this.http.get(`${this.env.baseUri}/tickets`).subscribe((resp) => {
      this.ticketsList = resp;
    });
  }

  doRefresh(event) {
    this.authService.getToken().then(() => {
      if (this.authService.isLoggedIn) {
        Storage.get({ key: "token" }).then((data) => {
          const decodedToken = jwtDecode(data.value);
          const userId = decodedToken["id"];
          if (userId) {
            this.getTickets();
          }
          event.target.complete();
        });
      } else {
        this.router.navigateByUrl("/login");
      }
    });
  }

  openTicketDetail(ticketId) {
    if (!ticketId) return;
    this.ticketInfo = [];
    this.http
      .get(`${this.env.baseUri}/tickets/${ticketId}`)
      .subscribe((resp) => {
        this.ticketInfo = resp;
        this.showTicketInfo = true;
      });
  }

  closeTicketDetail() {
    this.ticketInfo = [];
    this.showTicketInfo = false;
  }

  addMessageToTicket(ticketId) {
    if (!this.newMessage) return;
    this.http
      .post(`${this.env.baseUri}/tickets/${ticketId}/messages`, {
        message: this.newMessage,
        fromAdminPanel: false,
      })
      .subscribe((resp) => {
        window.alert("Messaggio inviato correttamente.");
        location.reload();
      });
  }
}
