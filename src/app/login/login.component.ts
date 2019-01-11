import { Component, OnInit, NgZone } from "@angular/core";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  logInData = {};

  constructor(private _auth: AuthService, private _ngZone: NgZone) {}

  ngOnInit() {}

  logInUser() {
    console.log(this.logInData);
    this._auth.logInUser(this.logInData).subscribe(
      Response => {
        console.log(Response),
          localStorage.setItem("token", Response),
          this._ngZone.runOutsideAngular(() => {
            window.location.href = "/";
          });
      },
      err => console.log(err, "Error")
    );
  }
}
