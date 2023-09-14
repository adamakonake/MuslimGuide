import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifierlecteurPageRoutingModule } from './modifierlecteur-routing.module';

import { ModifierlecteurPage } from './modifierlecteur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifierlecteurPageRoutingModule
  ],
  declarations: [ModifierlecteurPage]
})
export class ModifierlecteurPageModule {}
