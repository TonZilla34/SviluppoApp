import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamersListComponent } from './gamers-list/gamers-list.component';
import { GamerAddComponent } from './gamer-add/gamer-add.component';

const routes: Routes = [
  {
    path: 'list',
    component: GamersListComponent
  },
  {
    path: 'add-gamer',
    component: GamerAddComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
