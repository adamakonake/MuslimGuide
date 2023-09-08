import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HidjriPageRoutingModule } from './hidjri-routing.module';

import { HidjriPage } from './hidjri.page';
import { DateLocaleKeys, MOMENT_HIJRI_DATE_FORMATS, NgxAngularMaterialHijriAdapterModule, NgxAngularMaterialHijriAdapterService } from 'ngx-angular-material-hijri-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatCommonModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { setOptions, localeEn, jalaliCalendar, localeFa, hijriCalendar, localeAr, MbscDatepickerModule, MbscCalendarModule, MbscModule } from '@mobiscroll/angular';
import { MomentHijriDateModule } from 'ngx-angular-material-hijri-adapter/lib/adapter/moment-hijri-date-module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HidjriPageRoutingModule,
    NgxAngularMaterialHijriAdapterModule,
    MbscModule,
    MatDatepickerModule,
    MatCardModule,
    HttpClientModule,
  ],
  declarations: [HidjriPage],
  providers :[
    {
      provide: DateAdapter,
      useClass: NgxAngularMaterialHijriAdapterService,
    },
    // Change the format by using `MOMENT_HIJRI_DATE_FORMATS` for Dates and `MOMENT_HIJRI_DATE_TIME_FORMATS` for date/time.
    { provide: MAT_DATE_FORMATS, useValue: MOMENT_HIJRI_DATE_FORMATS },
    // Change the localization to arabic by using `AR_SA` not `AR` only and `EN_US` not `EN` only.
    { provide: MAT_DATE_LOCALE, useValue: "fr" },
  ]
})
export class HidjriPageModule {}
