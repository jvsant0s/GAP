import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TudoPageRoutingModule } from './tudo-routing.module';

import { TudoPage } from './tudo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TudoPageRoutingModule
  ],
  declarations: [TudoPage]
})
export class TudoPageModule {}
