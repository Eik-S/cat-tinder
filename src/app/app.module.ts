import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SummaryComponent } from './summary/summary.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CandidatesComponent,
    NavigationComponent,
    SummaryComponent,
    WelcomeComponent,
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
