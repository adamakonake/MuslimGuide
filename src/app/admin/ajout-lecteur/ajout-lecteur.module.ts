import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutLecteurPageRoutingModule } from './ajout-lecteur-routing.module';

import { AjoutLecteurPage } from './ajout-lecteur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutLecteurPageRoutingModule
  ],
  declarations: [AjoutLecteurPage]
})
export class AjoutLecteurPageModule {}
