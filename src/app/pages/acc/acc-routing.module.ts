import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccPage } from './acc.page';

const routes: Routes = [
  {
    path: '',
    component: AccPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccPageRoutingModule {}
