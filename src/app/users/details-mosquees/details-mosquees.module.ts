import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsMosqueesPageRoutingModule } from './details-mosquees-routing.module';

import { DetailsMosqueesPage } from './details-mosquees.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsMosqueesPageRoutingModule
  ],
  declarations: [DetailsMosqueesPage]
})
export class DetailsMosqueesPageModule {}
