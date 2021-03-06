import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
  providers: [UserService]
})
export class SignupComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(public _user: UserService) {}

  ngOnInit() {}

  showSuccessMessage: boolean;
  serverErrorMessages: string;

  onSubmit(form: NgForm) {
    this._user.postUser(form.value).subscribe(
      res => {
        this.showSuccessMessage = true;
        setTimeout(() => (this.showSuccessMessage = false), 1000);
        this.resetForm(form);
        console.log(form);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join("<br/>");
        } else {
          this.serverErrorMessages = "Something Went Wrong.";
        }
      }
    );
  }

  resetForm(form: NgForm) {
    this._user.selectedUser = {
      fullName: "",
      email: "",
      password: ""
    };
    form.resetForm();
    this.serverErrorMessages = "";
  }

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
