import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BracketTournamentPageRoutingModule } from './bracket-tournament-routing.module';

import { BracketTournamentPage } from './bracket-tournament.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BracketTournamentPageRoutingModule
  ],
  declarations: [BracketTournamentPage]
})
export class BracketTournamentPageModule {}
