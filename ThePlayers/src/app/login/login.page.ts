import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Plugins } from "@capacitor/core";
import { AuthService } from "src/app/services/auth.service";
const { Storage } = Plugins;

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  // Inizializzo le variabili da utilizzare per il login
  email: String;
  password: String;
  responseLogin: any;
  constructor(
    private router: Router,
    public httpClient: HttpClient,
    private authService: AuthService
  ) {}

  ngOnInit() {
    document.body.classList.toggle("dark");
  }

  LoginForm() {
    this.authService.login(this.email, this.password).subscribe(
      (data) => {
        this.router.navigateByUrl("/home");
      },
      (error) => {
        window.alert("Username o password errati.");
      }
    );
  }

  SignUpPage() {
    this.router.navigateByUrl("/signup");
  }
}
