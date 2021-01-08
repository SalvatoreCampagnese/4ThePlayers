import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ticket",
  templateUrl: "./ticket.page.html",
  styleUrls: ["./ticket.page.scss"],
})
export class TicketPage implements OnInit {
  constructor() {}

  attachments: any = [""];
  category: any;
  description: any;
  subject: any;
  ngOnInit() {}

  createTicket() {
    //
  }

  addAttachment() {
    this.attachments.length < 5 ? this.attachments.push("") : "";
  }
  removeAttachment(i) {
    i ? this.attachments.splice(i, 1) : "";
  }
}
