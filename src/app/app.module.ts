import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { NavigationComponent } from './game/navigation/navigation.component';
import { LandingComponent } from './landing/landing.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { TimerComponent } from './game/timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    NavigationComponent,
    LandingComponent,
    TimerComponent,
    TimerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
