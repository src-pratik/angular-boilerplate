import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'start-app';
  environmentName = '';
  appVersion = "";

  constructor(private httpClient: HttpClient) {
    this.environmentName = environment.name;
    this.appVersion = environment.appVersion;
  }
  onClick() {
    this.httpClient.get("http://dummyhost.xyz/").subscribe(data => { }, err => { });
  }

}
