
export class App { // O nome da classe era App, não AppComponent
  protected title = 'HackTheCloud';

   scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'page-principal',
  templateUrl: `../app/principal/principal.html`,
  styleUrl: '../app/principal/principal.css'
})
export class PagePrincipalComponent {  protected title = 'HackTheCloud';

   scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }}

