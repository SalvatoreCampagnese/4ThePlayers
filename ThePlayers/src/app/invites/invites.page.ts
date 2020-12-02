import { Component, OnInit } from '@angular/core';
import { GlobalEnv } from '../env';
import { Plugins } from "@capacitor/core";
const { Storage } = Plugins;
import jwtDecode from "jwt-decode";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-invites',
  templateUrl: './invites.page.html',
  styleUrls: ['./invites.page.scss'],
})
export class InvitesPage implements OnInit {
  invitesListPending: any = [];
  invitesListSelected: any = [];
  constructor(private env: GlobalEnv, private http: HttpClient) { }

  async ngOnInit() {
    const token = await Storage.get({ key: "token" }).then((data) => {
      if (data.value) {
        return data.value;
      }
    });
    const decodedToken = jwtDecode(token);
    const userId = decodedToken["id"];
    if (userId) {
      // se ho l'userId prendo gli inviti
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });
      this.http.get(this.env.baseUri + `/users/${userId}`, { headers }).subscribe(
        (resp) => {
          if (resp && resp["user"].invites && resp["user"].invites.length) {
            const invitesList = resp["user"].invites;
            console.log(invitesList)
            for (let i = 0; i < invitesList.length; i++) {
              const tournamentId = invitesList[i].tournamentId,
                teamId = invitesList[i].teamId;
              this.http.get(this.env.baseUri + `/tournaments/${tournamentId}/teams/${teamId}`, { headers }).subscribe(
                (resp) => {
                  invitesList[i].teamName = resp['name'];
                  if (invitesList[i].status === 'PENDING') {
                    this.invitesListPending.push(invitesList[i])
                  } else {
                    this.invitesListSelected.push(invitesList[i])
                  }
                },
                (error) => {
                  invitesList[i].teamName = "Errore nome team.";
                  if (invitesList[i].status === 'PENDING') {
                    this.invitesListPending.push(invitesList[i])
                  } else {
                    this.invitesListSelected.push(invitesList[i])
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
  }

  async changeInviteStatus(inviteObj, status) {
    const token = await Storage.get({ key: "token" }).then((data) => {
      if (data.value) {
        return data.value;
      }
    });
    // se ho l'userId prendo gli inviti
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    this.http.patch(this.env.baseUri + `/invites/${inviteObj._id}`, { "newStatus": status }, { headers }).subscribe(
      (resp) => {
        location.reload();
      },
      (error) => {
        window.alert("errore nell'accettare l'invito.");
      }
    );
  }

  declineInvite(inviteObj) {

  }

}
