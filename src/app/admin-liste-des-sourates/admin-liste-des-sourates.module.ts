import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminListeDesSouratesPageRoutingModule } from './admin-liste-des-sourates-routing.module';

import { AdminListeDesSouratesPage } from './admin-liste-des-sourates.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminListeDesSouratesPageRoutingModule,
    NgOptimizedImage
  ],
  declarations: [AdminListeDesSouratesPage]
})
export class AdminListeDesSouratesPageModule {}
