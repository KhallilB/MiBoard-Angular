import { Component, OnInit, NgZone } from "@angular/core";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  signUpData = {};

  constructor(private _auth: AuthService, private _ngZone: NgZone) {}

  ngOnInit() {}

  signUpUser() {
    console.log(this.signUpData);
    this._auth.signUpUser(this.signUpData).subscribe(
      Response => {
        console.log(Response);
        this._ngZone.runOutsideAngular(() => {
          window.location.href = "/";
        });
      },
      err => {
        console.log(err, "Error");
      }
    );
  }
}
