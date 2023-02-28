import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'adao',
    loadChildren: () => import('./pages/adao/adao.module').then( m => m.AdaoPageModule)
  },
  {
    path: 'queda',
    loadChildren: () => import('./pages/queda/queda.module').then( m => m.QuedaPageModule)
  },
  {
    path: 'rei',
    loadChildren: () => import('./pages/rei/rei.module').then( m => m.ReiPageModule)
  },
  {
    path: 'top',
    loadChildren: () => import('./pages/top/top.module').then( m => m.TopPageModule)
  },
  {
    path: 'tudo',
    loadChildren: () => import('./pages/tudo/tudo.module').then( m => m.TudoPageModule)
  },
  {
    path: 'doutor',
    loadChildren: () => import('./pages/doutor/doutor.module').then( m => m.DoutorPageModule)
  },
  {
    path: 'uncharted',
    loadChildren: () => import('./pages/uncharted/uncharted.module').then( m => m.UnchartedPageModule)
  },
  {
    path: 'thor',
    loadChildren: () => import('./pages/thor/thor.module').then( m => m.ThorPageModule)
  },
  {
    path: 'acc',
    loadChildren: () => import('./pages/acc/acc.module').then( m => m.AccPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
