import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThorPage } from './thor.page';

const routes: Routes = [
  {
    path: '',
    component: ThorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThorPageRoutingModule {}
