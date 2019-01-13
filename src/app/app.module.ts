//Modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

//Services & Gaurds
import { AuthService } from "../app/services/auth.service";
import { UserService } from "../app/services/user.service";

import { AuthGuard } from "../app/services/auth.guard";

import { AuthInterceptor } from "../app/services/auth.interceptor";

//Components
import { AppComponent } from "./app.component";
import { CommunityComponent } from "./community/community.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { HomeComponent } from "./home/home.component";
import { PlayComponent } from "./play/play.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { NavComponent } from "./nav/nav.component";

//Routes
const appRoutes: Routes = [
  { path: "community", component: CommunityComponent },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "signup", component: SignupComponent, pathMatch: "full" },
  { path: "", component: HomeComponent },
  {
    path: "userprofile",
    component: UserProfileComponent,
    canActivate: [AuthGuard]
  },
  { path: "play", component: PlayComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    CommunityComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    PlayComponent,
    UserProfileComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
