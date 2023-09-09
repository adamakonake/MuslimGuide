import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutDesRadiosPageRoutingModule } from './ajout-des-radios-routing.module';

import { AjoutDesRadiosPage } from './ajout-des-radios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutDesRadiosPageRoutingModule
  ],
  declarations: [AjoutDesRadiosPage]
})
export class AjoutDesRadiosPageModule {}
