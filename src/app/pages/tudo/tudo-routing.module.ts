import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TudoPage } from './tudo.page';

const routes: Routes = [
  {
    path: '',
    component: TudoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TudoPageRoutingModule {}
