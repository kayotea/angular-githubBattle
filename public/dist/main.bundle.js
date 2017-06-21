webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__battleground_battleground_component__ = __webpack_require__("../../../../../src/app/battleground/battleground.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__results_results_component__ = __webpack_require__("../../../../../src/app/results/results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rankings_rankings_component__ = __webpack_require__("../../../../../src/app/rankings/rankings.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_2__battleground_battleground_component__["a" /* BattlegroundComponent */] },
    { path: 'results', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_3__results_results_component__["a" /* ResultsComponent */] },
    { path: 'rankings', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_4__rankings_rankings_component__["a" /* RankingsComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE HTML>\n<html>\n  <head></head>\n  <body>\n    <h1>Github Battle</h1>\n    <p><a [routerLink]=\"['/']\">Battle</a> | <a [routerLink]=\"['rankings']\">Rankings</a></p>\n    <router-outlet></router-outlet>\n  </body>\n</html>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
        this.players = [];
        _httpService.updatePlayers(this.players);
    }
    AppComponent.prototype.updatePlayers = function () {
        this._httpService.updatePlayers(this.players);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__battleground_battleground_component__ = __webpack_require__("../../../../../src/app/battleground/battleground.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__results_results_component__ = __webpack_require__("../../../../../src/app/results/results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__rankings_rankings_component__ = __webpack_require__("../../../../../src/app/rankings/rankings.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__battleground_battleground_component__["a" /* BattlegroundComponent */],
            __WEBPACK_IMPORTED_MODULE_8__results_results_component__["a" /* ResultsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__rankings_rankings_component__["a" /* RankingsComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__http_service__["a" /* HttpService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/battleground/battleground.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".player{\n    width: 48%;\n    background-color: lightblue;\n    display: inline-block;\n    vertical-align: top;\n}\n.error{\n    color: red;\n}\n.battle{\n    background-color: orange;\n    margin: auto;\n}\nimg {\n    width: 100%;\n}\n.center{\n    text-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/battleground/battleground.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <div id=\"player_box\">\n    <div class=\"player\">\n      <!--before valid username is retreived-->\n      <div *ngIf=\"!player1.battle_ready\">\n        <h3>Player 1</h3>\n        <form (submit)=\"usernameValid(user1)\" #user1form=\"ngForm\">\n          Github Username: \n          <input type=\"text\" name=\"username\" \n          required\n          [(ngModel)]=\"user1.username\">\n          <br>\n          <input type=\"submit\" value=\"Get User\" [disabled]=\"!user1form.form.valid\">\n        </form>\n        <p *ngIf=\"!player1.username\" class=\"error\">Invalid Github username</p>\n        {{user1 | json}}\n        {{user1.score}}\n      </div>\n      <!--once player is retreived-->\n      <div *ngIf=\"player1.battle_ready\">\n        <img [src]=\"user1.profile\" alt=\"player1 pic\">\n        <p>{{user1.username}}</p>\n      </div>\n\n    </div>\n    <div class=\"player\">\n        <!--before valid username is retreived-->\n      <div *ngIf=\"!player2.battle_ready\">\n        <h3>Player 2</h3>\n        <form (submit)=\"usernameValid(user2)\" #user2form=\"ngForm\">\n          Github Username: \n          <input type=\"text\" name=\"username\" \n          required\n          [(ngModel)]=\"user2.username\">\n          <br>\n          <input type=\"submit\" value=\"Get User\" [disabled]=\"!user2form.form.valid\">\n        </form>\n        <p *ngIf=\"!player2.username\" class=\"error\">Invalid Github username</p>\n        {{user2 | json}}\n        {{user2.score}}\n      </div>\n      <!--once player is retreived-->\n      <div *ngIf=\"player2.battle_ready\">\n          <img [src]=\"user2.profile\" alt=\"player2 pic\">\n          <p>{{user2.username}}</p>\n      </div>\n    </div>\n  </div>\n  <button \n    *ngIf=\"player1.battle_ready && player2.battle_ready\" \n    class=\"battle\" \n    [routerLink]=\"['/results']\"\n    >BATTLE!</button>\n    {{players | json}}\n</div>"

/***/ }),

/***/ "../../../../../src/app/battleground/battleground.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__("../../../../../src/app/user.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BattlegroundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BattlegroundComponent = (function () {
    function BattlegroundComponent(_httpService) {
        var _this = this;
        this._httpService = _httpService;
        this.user1 = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]();
        this.user2 = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]();
        this.player1 = new Player();
        this.player2 = new Player();
        this.players = [];
        this.subscription = _httpService.observedPlayers.subscribe(function (updatedPlayers) { _this.players = updatedPlayers; }, function (err) { }, function () { });
    }
    BattlegroundComponent.prototype.ngOnInit = function () { };
    BattlegroundComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    BattlegroundComponent.prototype.updatePlayers = function () {
        this._httpService.updatePlayers(this.players);
    };
    BattlegroundComponent.prototype.usernameValid = function (user) {
        var _this = this;
        this._httpService.retrieve(user.username)
            .then(function (data) {
            console.log('usernameValid() success');
            if (user == _this.user1) {
                _this.user1.score = data['public_repos'] + data['followers'];
                _this.user1.profile = data['avatar_url'];
                if (_this.user1.username != _this.user2.username) {
                    _this.player1.battle_ready = true;
                    if (_this.players.length < 2) {
                        _this.players.push(_this.user1);
                    }
                    else {
                        _this.players = [];
                        _this.players.push(_this.user1);
                    }
                    _this.addUser(user);
                    _this.updatePlayers();
                }
            }
            else if (user == _this.user2) {
                _this.user2.score = data['public_repos'] + data['followers'];
                _this.user2.profile = data['avatar_url'];
                if (_this.user1.username != _this.user2.username) {
                    _this.player2.battle_ready = true;
                    if (_this.players.length < 2) {
                        _this.players.push(_this.user2);
                    }
                    else {
                        _this.players = [];
                        _this.players.push(_this.user2);
                    }
                    _this.addUser(user);
                    _this.updatePlayers();
                }
            }
        })
            .catch(function (error) {
            console.log('usernameValid() error');
            if (user == _this.user1) {
                _this.player1.username = false;
            }
            else if (user == _this.user2) {
                _this.player2.username = false;
            }
        });
    };
    BattlegroundComponent.prototype.addUser = function (user) {
        console.log('reached battleground/addUser() - user:', user);
        this._httpService.addUser(user)
            .then(function (user) { console.log('user added'); })
            .catch(function (error) { console.log('error'); });
    };
    return BattlegroundComponent;
}());
BattlegroundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-battleground',
        template: __webpack_require__("../../../../../src/app/battleground/battleground.component.html"),
        styles: [__webpack_require__("../../../../../src/app/battleground/battleground.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object])
], BattlegroundComponent);

var Player = (function () {
    function Player() {
        this.username = true;
        this.battle_ready = false;
    }
    return Player;
}());
var _a;
//# sourceMappingURL=battleground.component.js.map

/***/ }),

/***/ "../../../../../src/app/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HttpService = (function () {
    function HttpService(_http) {
        this._http = _http;
        this.observedPlayers = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["BehaviorSubject"](null);
    }
    HttpService.prototype.updatePlayers = function (players) {
        this.observedPlayers.next(players);
    };
    HttpService.prototype.retrieve = function (username) {
        console.log('entered http.service/retreive');
        username = 'https://api.github.com/users/' + username;
        return this._http.get(username).map(function (data) { return data.json(); }).toPromise();
    };
    //CRUD - talk to back end
    //add player to the database
    HttpService.prototype.addUser = function (user) {
        console.log('reached addUser - user:', user);
        return this._http.post('/new_user', user)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    //find players
    HttpService.prototype.findUsers = function () {
        console.log('reached findUsers');
        return this._http.get('/users')
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    return HttpService;
}());
HttpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], HttpService);

var _a;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ "../../../../../src/app/rankings/rankings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".player {\n    display: block;\n    height: 200px;\n}\nimg {\n    height: 100%;\n}\n.score {\n    display: inline-block;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/rankings/rankings.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let player of users\" class=\"player\">\n  <img [src]=\"player.profile\">\n  <div class=\"score\">\n    <h3>{{player.username}}</h3>\n    <h3>Score: {{player.score}}</h3>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/rankings/rankings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RankingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RankingsComponent = (function () {
    function RankingsComponent(_httpService) {
        this._httpService = _httpService;
    }
    RankingsComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    RankingsComponent.prototype.getUsers = function () {
        var _this = this;
        this._httpService.findUsers()
            .then(function (data) {
            console.log('users got');
            _this.users = data;
            console.log('data in getUsers()-rankings:', _this.users);
            console.log(data);
        })
            .catch(function (error) {
            console.log('error:', error);
        });
    };
    return RankingsComponent;
}());
RankingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-rankings',
        template: __webpack_require__("../../../../../src/app/rankings/rankings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/rankings/rankings.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object])
], RankingsComponent);

var _a;
//# sourceMappingURL=rankings.component.js.map

/***/ }),

/***/ "../../../../../src/app/results/results.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".box{\n    width: 48%;\n    background-color: lightblue;\n    display: inline-block;\n    vertical-align: top;\n}\nimg {\n    width: 100%;\n}\n.winner {\n    color: green;\n}\n.loser {\n    color: red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/results/results.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  results works!\n</p>\n{{players | json}}\n<div class=\"box\">\n  <h3 class=\"winner\">1st Place</h3>\n  <p *ngIf=\"players[0].score > players[1].score\" class=\"winner\">{{players[0].username}}</p>\n  <p *ngIf=\"players[1].score > players[0].score\" class=\"winner\">{{players[1].username}}</p>\n  <h3>2nd Place</h3>\n  <p *ngIf=\"players[0].score < players[1].score\" class=\"loser\">{{players[0].username}}</p>\n  <p *ngIf=\"players[1].score < players[0].score\" class=\"loser\">{{players[1].username}}</p>\n</div>\n<div class=\"box\">\n  <img *ngIf=\"players[0].score > players[1].score\" [src]=\"players[0].profile\" alt=\"winner profile\">\n  <img *ngIf=\"players[1].score > players[0].score\" [src]=\"players[1].profile\" alt=\"winner profile\">\n  <p *ngIf=\"players[0].score > players[1].score\">{{players[0].username}}</p>\n  <p *ngIf=\"players[1].score > players[0].score\">{{players[1].username}}</p>\n</div>\n<button [routerLink]=\"['/']\">Reset</button>"

/***/ }),

/***/ "../../../../../src/app/results/results.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResultsComponent = (function () {
    function ResultsComponent(_httpService) {
        var _this = this;
        this._httpService = _httpService;
        this.players = [];
        this.subscription = _httpService.observedPlayers.subscribe(function (updatedPlayers) { _this.players = updatedPlayers; }, function (err) { }, function () { });
    }
    ResultsComponent.prototype.ngOnInit = function () { };
    ResultsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return ResultsComponent;
}());
ResultsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-results',
        template: __webpack_require__("../../../../../src/app/results/results.component.html"),
        styles: [__webpack_require__("../../../../../src/app/results/results.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object])
], ResultsComponent);

var _a;
//# sourceMappingURL=results.component.js.map

/***/ }),

/***/ "../../../../../src/app/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map