import { Component, OnInit, NgZone } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { UserService } from "../services/user.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(
    private _auth: AuthService,
    private _ngZone: NgZone,
    private _user: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    if (this._user.isLoggedIn()) {
      this.router.navigateByUrl("/userprofile");
    }
  }

  model = {
    email: "",
    password: ""
  };

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;

  onSubmit(form: NgForm) {
    this._user.login(form.value).subscribe(
      res => {
        this._user.setToken(res["token"]);
        this.router.navigateByUrl("/userprofile");
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }

  //   logInUser() {
  //     console.log(this.logInData);
  //     this._auth.logInUser(this.logInData).subscribe(
  //       Response => {
  //         console.log(Response),
  //           localStorage.setItem("token", Response),
  //           this._ngZone.runOutsideAngular(() => {
  //             window.location.href = "/";
  //           });
  //       },
  //       err => console.log(err, "Error")
  //     );
  //   }
}
