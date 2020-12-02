import { Component, OnInit } from '@angular/core';
import { GlobalEnv } from '../env';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private env: GlobalEnv) { }

  ngOnInit() {
  }

}
