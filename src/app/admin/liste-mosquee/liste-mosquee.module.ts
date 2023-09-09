import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeMosqueePageRoutingModule } from './liste-mosquee-routing.module';

import { ListeMosqueePage } from './liste-mosquee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeMosqueePageRoutingModule
  ],
  declarations: [ListeMosqueePage]
})
export class ListeMosqueePageModule {}
