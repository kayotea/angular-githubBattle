import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';


@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent implements OnInit {
  users: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this._httpService.findUsers()
    .then(data => {
      console.log('users got');
      this.users = data;
      console.log('data in getUsers()-rankings:',this.users);
      console.log(data);
    })
    .catch(error => {
      console.log('error:', error);
    })
  }

}
