import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutannoncesPageRoutingModule } from './ajoutannonces-routing.module';

import { AjoutannoncesPage } from './ajoutannonces.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutannoncesPageRoutingModule
  ],
  declarations: [AjoutannoncesPage]
})
export class AjoutannoncesPageModule {}
