import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalPageCreateTeamPage } from './modal-page-create-team.page';

const routes: Routes = [
  {
    path: '',
    component: ModalPageCreateTeamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalPageCreateTeamPageRoutingModule {}
