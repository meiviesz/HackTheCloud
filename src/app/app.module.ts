import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { PrincipalComponent } from './principal/principal';
import { AppComponent } from './app.component';
import { Organizers } from './organizers/organizers';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    Organizers
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


