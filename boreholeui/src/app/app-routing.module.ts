import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainNavMenuComponent } from './main-nav-menu/main-nav-menu.component';
import { AddBoreholeComponent } from "./add-borehole/add-borehole.component";

const routes: Routes = [
  { path: '', component: MainNavMenuComponent },
  { path: 'add', component: AddBoreholeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
