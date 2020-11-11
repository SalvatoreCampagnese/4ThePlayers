import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router,
    private authService: AuthService) {
  }

  ionViewWillEnter() {
    this.authService.getToken().then(() => {
      if(this.authService.isLoggedIn) {
        this.router.navigateByUrl('/home');
      }else{
        this.router.navigateByUrl('/login');
      }
    });
  }
  
  async DetailTournament(idTournament){
    this.router.navigate(['/tournament-detail'], {queryParams: {"idTournament": idTournament}});
  }
}
