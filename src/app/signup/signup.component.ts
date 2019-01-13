import { Component, OnInit, NgZone } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  // signUpData = {};

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(
    private _auth: AuthService,
    private _ngZone: NgZone,
    private _user: UserService
  ) {}

  ngOnInit() {}

  // signUpUser() {
  //   console.log(this.signUpData);
  //   this._auth.signUpUser(this.signUpData).subscribe(
  //     Response => {
  //       console.log(Response);
  //       this._ngZone.runOutsideAngular(() => {
  //         window.location.href = "/";
  //       });
  //     },
  //     err => {
  //       console.log(err, "Error");
  //     }
  //   );
  // }
}
