import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserListeDesSouratesPageRoutingModule } from './user-liste-des-sourates-routing.module';

import { UserListeDesSouratesPage } from './user-liste-des-sourates.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserListeDesSouratesPageRoutingModule
  ],
  declarations: [UserListeDesSouratesPage]
})
export class UserListeDesSouratesPageModule {}
