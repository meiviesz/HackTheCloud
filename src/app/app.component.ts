import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Organizers } from './pages/organizers/organizers';
import { Principal } from './principal/principal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Principal, Organizers], // ✅ importa os standalone components
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}
