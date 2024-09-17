import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SetpasswordComponent } from './setpassword/setpassword.component';
import { ProfileComponent } from './profile/profile.component';
import { OfflineComponent } from './offline/offline.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoutComponent } from './logout/logout.component';
import { ListviewComponent } from './listview/listview.component';
import { ListchatComponent } from './listchat/listchat.component';
import { FriendsComponent } from './friends/friends.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { EventComponent } from './event/event.component';
import { ChatsComponent } from './chats/chats.component';
import { AccountComponent } from './account/account.component';
import { AccountsettingComponent } from './accountsetting/accountsetting.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    SigninComponent,
    RegisterComponent,
    SidebarComponent,
    SetpasswordComponent,
    ProfileComponent,
    OfflineComponent,
    NavbarComponent,
    LogoutComponent,
    ListviewComponent,
    ListchatComponent,
    FriendsComponent,
    ForgotpasswordComponent,
    EventComponent,
    ChatsComponent,
    AccountComponent,
    AccountsettingComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
