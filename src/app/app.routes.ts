import { Routes } from '@angular/router';
import { Principal } from './principal/principal';
import { Organizers } from './pages/organizers/organizers';

export const routes: Routes = [
  { path: '', component: Principal },
  { path: 'organizadores', component: Organizers },
];
