import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  //bootstrap: [AppComponent]
})

export class AppModule { }