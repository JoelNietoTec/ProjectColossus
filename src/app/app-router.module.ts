import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './sections/home/home.component';

const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(app_routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [HomeComponent];