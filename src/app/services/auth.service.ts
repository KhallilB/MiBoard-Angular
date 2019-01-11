import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private signUpUrl = "http://localhost:3000/api/auth/signup";

  private logInUrl = "http://localhost:3000/api/auth/login";

  signUpUser(user) {
    return this.http.post<any>(this.signUpUrl, user);
  }

  logInUser(user) {
    return this.http.post<any>(this.logInUrl, user);
  }
}
