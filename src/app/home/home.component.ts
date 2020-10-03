import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  _leftsidebarOpen: boolean = true;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  handleToggleLeftSideBar(e: any) {
    this._leftsidebarOpen = !this._leftsidebarOpen;
  }

  onClick() {
    this.httpClient.get("http://dummyhost.xyz/").subscribe(data => { }, err => { });
  }

}
