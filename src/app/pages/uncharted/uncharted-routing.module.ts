import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnchartedPage } from './uncharted.page';

const routes: Routes = [
  {
    path: '',
    component: UnchartedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnchartedPageRoutingModule {}
