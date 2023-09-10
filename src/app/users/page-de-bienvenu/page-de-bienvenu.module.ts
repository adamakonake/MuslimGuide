import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageDeBienvenuPageRoutingModule } from './page-de-bienvenu-routing.module';

import { PageDeBienvenuPage } from './page-de-bienvenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageDeBienvenuPageRoutingModule
  ],
  declarations: [PageDeBienvenuPage]
})
export class PageDeBienvenuPageModule {}
