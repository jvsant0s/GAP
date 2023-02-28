import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReiPage } from './rei.page';

const routes: Routes = [
  {
    path: '',
    component: ReiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReiPageRoutingModule {}
