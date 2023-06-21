import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamersListComponent } from './gamers-list/gamers-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { GamerAddComponent } from './gamer-add/gamer-add.component';

@NgModule({
  declarations: [
    AppComponent,
    GamerAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    GamersListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
