import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuedaPageRoutingModule } from './queda-routing.module';

import { QuedaPage } from './queda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuedaPageRoutingModule
  ],
  declarations: [QuedaPage]
})
export class QuedaPageModule {}
