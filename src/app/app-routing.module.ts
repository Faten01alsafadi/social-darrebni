import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { FriendsComponent } from './friends/friends.component';
import { ListchatComponent } from './listchat/listchat.component';
import { ListviewComponent } from './listview/listview.component';
import { LogoutComponent } from './logout/logout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OfflineComponent } from './offline/offline.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { SetpasswordComponent } from './setpassword/setpassword.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SigninComponent } from './signin/signin.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' }, 

  { path: 'feed', component: FeedComponent },
  { path: 'forgot', component: ForgotpasswordComponent },
  { path: 'friends', component: FriendsComponent },
  { path: 'listchat', component: ListchatComponent },
  { path: 'listview', component: ListviewComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'offline', component: OfflineComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'setpassword', component: SetpasswordComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signin', component: SigninComponent }, 
  { path: 'error', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
