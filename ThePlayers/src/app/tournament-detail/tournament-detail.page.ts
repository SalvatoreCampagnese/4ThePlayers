import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalPageCreateTeamPage } from '../modal-page-create-team/modal-page-create-team.page';

@Component({
  selector: 'app-tournament-detail',
  templateUrl: './tournament-detail.page.html',
  styleUrls: ['./tournament-detail.page.scss'],
})
export class TournamentDetailPage implements OnInit {

  idTournament: String;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, public modalController: ModalController) { }

  ngOnInit(){
    this.activatedRoute.queryParams.subscribe((params) => {
      this.idTournament = params['idTournament'];
      if(!this.idTournament){
        this.router.navigateByUrl('/home');
      }else{
        console.log(this.idTournament)
      }
    });
  }

  async showCreateTeamModal() {
    const modal = await this.modalController.create({
      component: ModalPageCreateTeamPage,
      cssClass: 'simple-modal',
      componentProps: {
        'firstName': 'Douglas',
        'lastName': 'Adams',
        'middleInitial': 'N'
      }
    });
    return await modal.present();
  }

}
