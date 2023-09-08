import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccueilPageRoutingModule } from './accueil-routing.module';

import { AccueilPage } from './accueil.page';
import { IgxCarouselModule, IgxSliderModule } from "igniteui-angular";
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccueilPageRoutingModule,
    IgxCarouselModule,
	  IgxSliderModule,
    MatCardModule
  ],
  declarations: [AccueilPage]
})
export class AccueilPageModule {}
