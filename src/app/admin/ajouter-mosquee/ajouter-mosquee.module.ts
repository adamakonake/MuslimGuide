import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterMosqueePageRoutingModule } from './ajouter-mosquee-routing.module';

import { AjouterMosqueePage } from './ajouter-mosquee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterMosqueePageRoutingModule
  ],
  declarations: [AjouterMosqueePage]
})
export class AjouterMosqueePageModule {}
