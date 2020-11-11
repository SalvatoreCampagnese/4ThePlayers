import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalRegistrationPageRoutingModule } from './modal-registration-routing.module';

import { ModalRegistrationPage } from './modal-registration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalRegistrationPageRoutingModule
  ],
  declarations: [ModalRegistrationPage]
})
export class ModalRegistrationPageModule {}
