import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeLecteurPageRoutingModule } from './liste-lecteur-routing.module';

import { ListeLecteurPage } from './liste-lecteur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeLecteurPageRoutingModule
  ],
  declarations: [ListeLecteurPage]
})
export class ListeLecteurPageModule {}
