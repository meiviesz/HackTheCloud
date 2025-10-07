import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Organizers } from './pages/organizers/organizers';
import { AppComponent } from './app.component';
import { Principal } from './principal/principal'; // ✅ importa o componente
import { routes } from './app.routes'; // ✅ importa as rotas definidas em outro arquivo

@NgModule({
  declarations: [
  AppComponent,
  Principal,
  Organizers // agora o Angular conhece este componente
],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // ✅ usa as rotas corretas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
