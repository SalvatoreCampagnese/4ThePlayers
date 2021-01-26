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

  attachments: any = [{ value: "" }];
  category: any;
  description: any;
  subject: any;
  ngOnInit() {}

  createTicket() {
    let attachmentsList = [];
    if (this.attachments) {
      this.attachments.forEach((element) => {
        if (element.value) {
          attachmentsList.push(element.value);
        }
      });
    }
    const dataToPost = {
      subject: this.subject,
      description: this.description,
      category: this.category,
      attachments: attachmentsList,
    };
    this.http
      .post(`${this.env.baseUri}/tickets`, dataToPost)
      .subscribe((resp) => {
        this.router.navigateByUrl("user-tickets");
      });
  }

  addAttachment() {
    this.attachments.length < 5 ? this.attachments.push({ value: "" }) : "";
  }
  removeAttachment(i) {
    i ? this.attachments.splice(i, 1) : "";
  }
}
