import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';



export interface Giocatori {
  firstname: string;
  lastname: string ;
  description?: string;
  immagine: string;
}

@Component({
  selector: 'app-gamers-list',
  templateUrl: './gamers-list.component.html',
  styleUrls: ['./gamers-list.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatCardModule, CommonModule, MatSnackBarModule]
})
export class GamersListComponent {

  giocatori: Giocatori[] = [
    {
      firstname: 'Maicol',
      lastname: 'Pad',
      description: 'Soffro di tunnel carpale',
      immagine: '/assets/gamer-stats-measure-gamer-skill-performances-dubsnatch_1920x.jpg'
    },
    {
      firstname: 'Max',
      lastname: 'Del Ping',
      description: 'Ho finito i giga',
      immagine: '/assets/20201017_WorldsQuartersDay3_241_edit-jpg-2105708-1-0.jpg'
    },
    {
      firstname: 'Checco',
      lastname: 'Nsole',
      description: 'PC master race',
      immagine: '/assets/Culture_esports_642956890.jpg'
    }
  ]

  constructor(private _snackBar: MatSnackBar) {}

  onDelete(index:number) {
    this.giocatori.splice(index, 1);
    this._snackBar.open('Utente eliminato', '', {
      duration: 2000,
    });

  }
  }