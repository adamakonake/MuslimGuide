import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListRadioPageRoutingModule } from './list-radio-routing.module';

import { ListRadioPage } from './list-radio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListRadioPageRoutingModule
  ],
  declarations: [ListRadioPage]
})
export class ListRadioPageModule {}
