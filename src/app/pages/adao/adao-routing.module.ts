import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdaoPage } from './adao.page';

const routes: Routes = [
  {
    path: '',
    component: AdaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdaoPageRoutingModule {}
