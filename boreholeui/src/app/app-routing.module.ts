import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainNavMenuComponent } from './main-nav-menu/main-nav-menu.component';

const routes: Routes = [
  { path: '', component: MainNavMenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
