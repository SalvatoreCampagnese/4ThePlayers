import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ProfilePageRoutingModule } from "./edit-profile-routing.module";

import { ProfilePage } from "./edit-profile.page";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ProfilePageRoutingModule],
  declarations: [ProfilePage],
})
export class ProfilePageModule {}
