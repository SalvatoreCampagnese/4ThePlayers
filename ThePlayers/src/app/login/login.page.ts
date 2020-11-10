import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // Inizializzo le variabili da utilizzare per il login
  email: String;
  password: String;

  constructor(private router: Router) { }

  ngOnInit() {
    document.body.classList.toggle('dark');
  }

  LoginForm(){
    console.log(this.email)
    console.log(this.password)
    this.router.navigateByUrl('/home');
  }

  SignUpPage(){
    this.router.navigateByUrl('/signup');
  }
}
