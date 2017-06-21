import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from './../http.service';
import { User } from './../user';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-battleground',
  templateUrl: './battleground.component.html',
  styleUrls: ['./battleground.component.css']
})
export class BattlegroundComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  user1 = new User();
  user2 = new User();
  player1 = new Player();
  player2 = new Player();
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
  updatePlayers(){
    this._httpService.updatePlayers(this.players);
  }

  usernameValid(user) {

    this._httpService.retrieve(user.username)

    .then(data => {
      console.log('usernameValid() success');
      if (user == this.user1) {
        this.user1.score = data['public_repos']+data['followers'];
        this.user1.profile = data['avatar_url'];

        if (this.user1.username != this.user2.username) {
          this.player1.battle_ready = true;
          if (this.players.length < 2) {
            this.players.push(this.user1);
          } else {
            this.players = [];
            this.players.push(this.user1);
          }
          this.addUser(user);
          this.updatePlayers();
        }
      }
      else if (user == this.user2) {
        this.user2.score = data['public_repos']+data['followers'];
        this.user2.profile = data['avatar_url'];

        if (this.user1.username != this.user2.username) {
          this.player2.battle_ready = true;
          if (this.players.length < 2) {
            this.players.push(this.user2);
          } else {
            this.players = [];
            this.players.push(this.user2);
          }
          this.addUser(user);
          this.updatePlayers();
        }
      }
    })

    .catch(error => {
      console.log('usernameValid() error');
      if (user == this.user1) {this.player1.username = false;}
      else if (user == this.user2) {this.player2.username = false;}
    })
  }

  addUser(user) {
    console.log('reached battleground/addUser() - user:', user);
    this._httpService.addUser(user)
    .then(user => {console.log('user added');})
    .catch(error => {console.log('error');})
  }
}

class Player {
  public username: boolean = true;
  public battle_ready: boolean = false;
}
