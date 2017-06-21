import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from './../http.service';
import { User } from './../user';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  players = [];
  constructor(private _httpService: HttpService) {
    this.subscription = _httpService.observedPlayers.subscribe(
      (updatedPlayers) => {this.players = updatedPlayers;},
      (err) => {},
      () => {}
    )
  }

  ngOnInit() {}
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
