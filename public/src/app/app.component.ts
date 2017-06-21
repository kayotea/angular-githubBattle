import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  players = [];
  constructor(private _httpService: HttpService) {
    _httpService.updatePlayers(this.players);
  }
  updatePlayers(){
    this._httpService.updatePlayers(this.players);
  }
}
