import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BattlegroundComponent } from './battleground/battleground.component';
import { ResultsComponent } from './results/results.component';
import { RankingsComponent } from './rankings/rankings.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: BattlegroundComponent },
  { path: 'results', pathMatch: 'full', component: ResultsComponent },
  { path: 'rankings', pathMatch: 'full', component: RankingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
