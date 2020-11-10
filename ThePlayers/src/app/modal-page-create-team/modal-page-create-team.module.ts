import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPageCreateTeamPageRoutingModule } from './modal-page-create-team-routing.module';

import { ModalPageCreateTeamPage } from './modal-page-create-team.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPageCreateTeamPageRoutingModule
  ],
  declarations: [ModalPageCreateTeamPage]
})
export class ModalPageCreateTeamPageModule {}
