import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"]
})
export class UserProfileComponent implements OnInit {
  userDetails;
  constructor(private _user: UserService, private router: Router) {}

  ngOnInit() {
    this._user.getUserProfile().subscribe(
      res => {
        this.userDetails = res["user"];
      },
      err => {
        console.log("Error", err);
      }
    );
  }

  onLogout() {
    this._user.deleteToken();
    this.router.navigate(["/login"]);
  }
}
