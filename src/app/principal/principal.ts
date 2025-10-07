import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  standalone: false,
  templateUrl: './principal.html',
  styleUrls: ['./principal.css']
})

export class PrincipalComponent {
  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
