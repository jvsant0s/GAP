import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoutorPage } from './doutor.page';

const routes: Routes = [
  {
    path: '',
    component: DoutorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoutorPageRoutingModule {}
