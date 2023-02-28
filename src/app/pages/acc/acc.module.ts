import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccPageRoutingModule } from './acc-routing.module';

import { AccPage } from './acc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccPageRoutingModule
  ],
  declarations: [AccPage]
})
export class AccPageModule {}
