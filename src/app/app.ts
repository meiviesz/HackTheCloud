import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Organizers } from './pages/organizers/organizers';
// O caminho correto começa com './' (a partir da pasta atual 'app')


@Component({
  selector: 'app-root',
  standalone: true, // É importante manter esta linha se ela já existia
  imports: [RouterOutlet, Organizers],
  templateUrl: './app.html', // O nome aqui era app.html, não app.component.html
  styleUrl: './app.css' // O nome aqui era app.css, não app.component.css
})
export class App { // O nome da classe era App, não AppComponent
  protected title = 'HackTheCloud';
}