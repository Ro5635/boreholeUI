import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainNavMenuComponent } from './main-nav-menu/main-nav-menu.component';
import { AddBoreholeComponent } from "./add-borehole/add-borehole.component";
import {SearchForBoreholeComponent} from "./search-for-borehole/search-for-borehole.component";

const routes: Routes = [
  { path: '', component: MainNavMenuComponent },
  { path: 'add', component: AddBoreholeComponent },
  { path: 'search', component: SearchForBoreholeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
