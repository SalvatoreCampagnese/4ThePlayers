import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-registration',
  templateUrl: './modal-registration.page.html',
  styleUrls: ['./modal-registration.page.scss'],
})
export class ModalRegistrationPage implements OnInit {
  constructor(private modalController: ModalController) { }
  @Input() textToShow: string;

  ngOnInit() {
    console.log(this.textToShow)
  }

  close(){
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
