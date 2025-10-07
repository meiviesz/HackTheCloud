
import { Organizers } from './pages/organizers/organizers';
// O caminho correto começa com './' (a partir da pasta atual 'app')


@Component({
  selector: 'app-root',
  standalone: true, // É importante manter esta linha se ela já existia
  imports: [Organizers],
  templateUrl: './app.html', // O nome aqui era app.html, não app.component.html
  styleUrl: './app.css' // O nome aqui era app.css, não app.component.css
})
export class App { // O nome da classe era App, não AppComponent
  protected title = 'HackTheCloud';

   scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

import { Principal } from './principal/principal';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



@Component({
  selector: 'page-principal',
  standalone: true,
  imports: [Principal], // 🔹 importa o componente
  template: `<page-principal></page-principal>`,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PagePrincipalComponent {  protected title = 'HackTheCloud';

   scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }}

