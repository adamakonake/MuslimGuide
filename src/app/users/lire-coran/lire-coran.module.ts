import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LireCoranPageRoutingModule } from './lire-coran-routing.module';

import { LireCoranPage } from './lire-coran.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LireCoranPageRoutingModule
  ],
  declarations: [LireCoranPage]
})
export class LireCoranPageModule {}
