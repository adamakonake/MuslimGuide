import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageaffichagePageRoutingModule } from './pageaffichage-routing.module';

import { PageaffichagePage } from './pageaffichage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageaffichagePageRoutingModule
  ],
  declarations: [PageaffichagePage]
})
export class PageaffichagePageModule {}
