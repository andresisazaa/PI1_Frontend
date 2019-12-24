import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CandidatesModule } from './candidates/candidates.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CandidatesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
