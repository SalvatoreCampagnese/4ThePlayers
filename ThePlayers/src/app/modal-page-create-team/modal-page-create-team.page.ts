import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-page-create-team',
  templateUrl: './modal-page-create-team.page.html',
  styleUrls: ['./modal-page-create-team.page.scss'],
})
export class ModalPageCreateTeamPage implements OnInit {

  constructor(private modalController: ModalController) { }
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() middleInitial: string;

  teamName: string;
  description: string;
  avatarId: string;

  ngOnInit() {
    console.log(this.firstName)
    document.body.classList.toggle('dark');
  }

  CreateTeam(){
    this.dismiss()
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
