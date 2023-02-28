import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdaoPageRoutingModule } from './adao-routing.module';

import { AdaoPage } from './adao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdaoPageRoutingModule
  ],
  declarations: [AdaoPage]
})
export class AdaoPageModule {}
