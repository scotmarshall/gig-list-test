import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gig List :: Test';
  jsonData: any;
  keys: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchJsonData();
  }

  convertDate(gigDate: any) {
    var d = new Date(gigDate);
    return d.toDateString() + ", " + d.toLocaleTimeString();
  }

  fetchJsonData() {
    this.http.get('assets/data/GigData.json').subscribe((data: any) => {
      this.jsonData = data;
      this.keys = Object.keys(this.jsonData.gigs);
    });
  }
}
