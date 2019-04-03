import { Component, OnInit } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Component({
  templateUrl: "./login.component.html",
  styles: [
    `
      em {
        float: right;
        color: orange;
        padding-left: 10px;
      }
    `
  ]
})
export class LoginComponent implements OnInit {
  userName;
  password;
  mouseoverLogin;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}
  login(val) {
    console.log(val, "login");
    this.authService.loginUser(val.userName, val.password);
    this.router.navigate(["events"]);
  }
  cancel() {
    this.router.navigate(["events"]);
  }
}
