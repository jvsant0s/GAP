import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnchartedPageRoutingModule } from './uncharted-routing.module';

import { UnchartedPage } from './uncharted.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnchartedPageRoutingModule
  ],
  declarations: [UnchartedPage]
})
export class UnchartedPageModule {}
