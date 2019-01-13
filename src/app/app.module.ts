//Modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

//Services
import { AuthService } from "../app/services/auth.service";

//Components
import { AppComponent } from "./app.component";
import { CommunityComponent } from "./community/community.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { HomeComponent } from "./home/home.component";
import { PlayComponent } from './play/play.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserComponent } from './user/user.component';

//Routes
const appRoutes: Routes = [
  { path: "community", component: CommunityComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "", component: HomeComponent }
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
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
