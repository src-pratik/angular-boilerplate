import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  _leftsidebarOpen: boolean = true;
  environmentName = '';
  appVersion = "";
  constructor(private httpClient: HttpClient) {
    this.environmentName = environment.name;
    this.appVersion = environment.appVersion;
  }

  ngOnInit(): void {
  }

  handleToggleLeftSideBar(e: any) {
    this._leftsidebarOpen = !this._leftsidebarOpen;
  }

  onClick() {
    this.httpClient.get("http://dummyhost.xyz/").subscribe(data => { }, err => { });
  }

}
