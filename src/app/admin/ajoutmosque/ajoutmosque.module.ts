import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutmosquePageRoutingModule } from './ajoutmosque-routing.module';

import { AjoutmosquePage } from './ajoutmosque.page';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutmosquePageRoutingModule
  ],
  declarations: [AjoutmosquePage]
})
export class AjoutmosquePageModule {}
