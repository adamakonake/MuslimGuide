import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LireCoransPageRoutingModule } from './lire-corans-routing.module';

import { LireCoransPage } from './lire-corans.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LireCoransPageRoutingModule
  ],
  declarations: [LireCoransPage]
})
export class LireCoransPageModule {}
