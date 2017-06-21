import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class HttpService {
  observedPlayers = new BehaviorSubject(null);
  updatePlayers(players: Array<any>){
    this.observedPlayers.next(players);
  }
  constructor(private _http: Http) { }

  retrieve(username) {
    console.log('entered http.service/retreive');
    username = 'https://api.github.com/users/'+username;
    return this._http.get(username).map(data => data.json()).toPromise();
  }

  //CRUD - talk to back end
  //add player to the database
  addUser(user) {
    console.log('reached addUser - user:', user);
    return this._http.post('/new_user', user)
    .map((data) => data.json())
    .toPromise();
  }
  //find players
  findUsers(){
    console.log('reached findUsers');
    return this._http.get('/users')
    .map(data => data.json())
    .toPromise();
  }

}
