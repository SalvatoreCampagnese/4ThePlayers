import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit() {
  }

  SignupForm(){
    console.log(this.username)
    console.log(this.email)
    console.log(this.password)
  }

  LoginPage(){
    this.router.navigateByUrl('/login');
  }
}
