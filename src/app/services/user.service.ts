import { Injectable } from "@angular/core";
import { User } from "./user.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  selectedUser: User = {
    fullName: "",
    email: "",
    password: ""
  };

  postUser(user: User) {
    return this.http.post(environment.apiBaseUrl + "/signup", user);
  }

  login(authCreds) {
    return this.http.post(
      environment.apiBaseUrl + "/authenticate",
      authCreds
      // this.noAuthHeader
    );
  }

  setToken(token: string) {
    localStorage.setItem("token", token);
  }

  getToken() {
    return localStorage.getItem("token");
  }

  deleteToken() {
    localStorage.removeItem("token");
  }
}
