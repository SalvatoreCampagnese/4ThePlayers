import { Component, OnInit } from "@angular/core";
import { GlobalEnv } from "../env";
import { Plugins } from "@capacitor/core";
const { Storage } = Plugins;
import jwtDecode from "jwt-decode";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-invites",
  templateUrl: "./invites.page.html",
  styleUrls: ["./invites.page.scss"],
})
export class InvitesPage implements OnInit {
  invitesListPending: any = [];
  invitesListSelected: any = [];
  constructor(
    public env: GlobalEnv,
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  async ngOnInit() {
    const token = await Storage.get({ key: "token" }).then((data) => {
      if (data.value) {
        return data.value;
      }
    });
    const decodedToken = jwtDecode(token);
    const userId = decodedToken["id"];
    if (userId) {
      this.getInvites(userId);
    }
  }

  getInvites(userId) {
    this.http.get(this.env.baseUri + `/users/${userId}`).subscribe(
      (resp) => {
        if (resp && resp["user"].invites && resp["user"].invites.length) {
          const invitesList = resp["user"].invites;
          console.log(invitesList);
          for (let i = 0; i < invitesList.length; i++) {
            const tournamentId = invitesList[i].tournamentId,
              teamId = invitesList[i].teamId;
            this.http
              .get(
                this.env.baseUri +
                  `/tournaments/${tournamentId}/teams/${teamId}`
              )
              .subscribe(
                (resp) => {
                  invitesList[i].teamName = resp["name"];
                  if (invitesList[i].status === "PENDING") {
                    this.invitesListPending.push(invitesList[i]);
                  } else {
                    this.invitesListSelected.push(invitesList[i]);
                  }
                },
                (error) => {
                  if (invitesList[i].status === "PENDING") {
                    this.invitesListPending.push(invitesList[i]);
                  } else {
                    this.invitesListSelected.push(invitesList[i]);
                  }
                }
              );
          }
        }
      },
      (error) => {
        // Empty
      }
    );
  }

  async changeInviteStatus(inviteObj, status) {
    this.env.isLoading = true;
    const token = await Storage.get({ key: "token" }).then((data) => {
      if (data.value) {
        return data.value;
      }
    });
    this.http
      .patch(this.env.baseUri + `/invites/${inviteObj._id}`, {
        newStatus: status,
      })
      .subscribe(
        (resp) => {
          this.env.isLoading = false;
          location.reload();
        },
        (error) => {
          window.alert("errore nell'accettare l'invito.");
        }
      );
  }

  doRefresh(event) {
    this.authService.getToken().then(() => {
      if (this.authService.isLoggedIn) {
        Storage.get({ key: "token" }).then((data) => {
          const decodedToken = jwtDecode(data.value);
          const userId = decodedToken["id"];
          if (userId) {
            this.getInvites(userId);
          }
          event.target.complete();
        });
      } else {
        this.router.navigateByUrl("/login");
      }
    });
  }
}
