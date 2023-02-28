import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuedaPage } from './queda.page';

const routes: Routes = [
  {
    path: '',
    component: QuedaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuedaPageRoutingModule {}
