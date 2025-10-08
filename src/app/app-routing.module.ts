import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal';
import { Organizers } from '../app/organizers/organizers';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'organizacao', component: Organizers },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }