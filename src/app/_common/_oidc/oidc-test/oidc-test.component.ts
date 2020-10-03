import { Component, OnInit } from '@angular/core';
import { User } from 'oidc-client';
import { IOidcService } from '../interfaces';
import { OidcService } from '../oidc.service';

@Component({
  selector: 'common-oidc-test',
  templateUrl: './oidc-test.component.html',
  styleUrls: ['./oidc-test.component.css']
})
export class OidcTestComponent implements OnInit {

  constructor(private oidcService: OidcService) {
  }

  messages: string[] = [];
  get currentUserJson(): string {
    return JSON.stringify(this.currentUser, null, 2);
  }
  currentUser: User;

  ngOnInit(): void {
    this.oidcService.getUser().then(user => {
      this.currentUser = user;

      if (user) {
        this.addMessage('User Logged In');
      } else {
        this.addMessage('User Not Logged In');
      }
    }).catch(err => this.addError(err));
  }

  clearMessages() {
    while (this.messages.length) {
      this.messages.pop();
    }
  }
  addMessage(msg: string) {
    this.messages.push(msg);
  }
  addError(msg: string | any) {
    this.messages.push('Error: ' + msg && msg.message);
  }

  public onLogin() {
    this.clearMessages();
    this.oidcService.login().catch(err => {
      this.addError(err);
    });
  }

  // public onCallAPI() {
  //   this.clearMessages();
  //   this.apiService.callApi().then(result => {
  //     this.addMessage('API Result: ' + JSON.stringify(result));
  //   }, err => this.addError(err));
  // }

  public onRenewToken() {
    this.clearMessages();
    this.oidcService.renewToken()
      .then(user => {
        this.currentUser = user;
        this.addMessage('Silent Renew Success');
      })
      .catch(err => this.addError(err));
  }

  public onLogout() {
    this.clearMessages();
    this.oidcService.logout().catch(err => this.addError(err));
  }

  get tokenExpiry(): string {
    if (!this.currentUser)
      return "";

    return new Date(this.currentUser.expires_at * 1000).toString();
  }
}
