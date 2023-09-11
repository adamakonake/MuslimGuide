import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageaffichagePageRoutingModule } from './pageaffichage-routing.module';

import { PageaffichagePage } from './pageaffichage.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageaffichagePageRoutingModule,
    HttpClientModule
  ],
  declarations: [PageaffichagePage]
})
export class PageaffichagePageModule {}
