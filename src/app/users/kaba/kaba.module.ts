import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

import { KabaPageRoutingModule } from './kaba-routing.module';

import { KabaPage } from './kaba.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    KabaPageRoutingModule
  ],
  declarations: [KabaPage]
})
export class KabaPageModule {}
