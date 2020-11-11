import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalRegistrationPage } from '../modal-registration/modal-registration.page';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  // Inizializzo le variabili da utilizzare per la registrazione
  username: String;
  email: String;
  password: String;

  constructor(private router: Router, private modalController: ModalController) { }

  ngOnInit() {
  }

  SignupForm(){
    console.log(this.username)
    console.log(this.email)
    console.log(this.password)
    this.showCreateTeamModal();
    
  }
  async showCreateTeamModal() {
    const modal = await this.modalController.create({
      component: ModalRegistrationPage,
      cssClass: 'small-modal',
      componentProps: {
        'textToShow': 'Ti sei registrato con successo! Conferma la tua email per accedere al tuo account.'
      }
    });
    return await modal.present();
  }

  LoginPage(){
    this.router.navigateByUrl('/login');
  }
}
