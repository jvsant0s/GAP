import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThorPageRoutingModule } from './thor-routing.module';

import { ThorPage } from './thor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThorPageRoutingModule
  ],
  declarations: [ThorPage]
})
export class ThorPageModule {}
