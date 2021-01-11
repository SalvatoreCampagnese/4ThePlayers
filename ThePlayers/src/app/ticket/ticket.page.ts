import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GlobalEnv } from "../env";

@Component({
  selector: "app-ticket",
  templateUrl: "./ticket.page.html",
  styleUrls: ["./ticket.page.scss"],
})
export class TicketPage implements OnInit {
  constructor(
    private http: HttpClient,
    private router: Router,
    public env: GlobalEnv
  ) {}

  attachments: any = [""];
  category: any;
  description: any;
  subject: any;
  ngOnInit() {}

  createTicket() {
    const today = new Date();
    let month = "" + today.getMonth() + 1;
    let day = "" + today.getDay();
    if (parseInt(day) <= 9) day = "0" + day;
    const dataToPost = {
      subject: this.subject,
      description: this.description,
      category: this.category,
      date: today.getFullYear() + "-" + month + "-" + day,
      tournamentId: null,
      matchId: null,
    };
    this.http
      .post(`${this.env.baseUri}/tickets`, dataToPost)
      .subscribe((resp) => {
        this.router.navigateByUrl("user-tickets");
      });
  }

  addAttachment() {
    this.attachments.length < 5 ? this.attachments.push("") : "";
  }
  removeAttachment(i) {
    i ? this.attachments.splice(i, 1) : "";
  }
}
