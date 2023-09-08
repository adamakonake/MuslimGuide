import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { hijriCalendar, localeAr } from '@mobiscroll/angular';
import { DateLocaleKeys, MOMENT_HIJRI_DATE_FORMATS, NgxAngularMaterialHijriAdapterService } from 'ngx-angular-material-hijri-adapter';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hidjri',
  templateUrl: './hidjri.page.html',
  styleUrls: ['./hidjri.page.scss'],
})
export class HidjriPage implements OnInit, AfterViewInit {

  hijriService! : NgxAngularMaterialHijriAdapterService;

  //now = new Date();
  selectDate! : Date | null ;
  //selec! : Observable<Date>;
  public hijriCalendar = hijriCalendar;
  public localeAr = localeAr;
  constructor(private http : HttpClient) { }

  ngOnInit() {
  setTimeout(()=>{
    const active = document.querySelector('.mat-calendar-body-selected')
    const span1 = active as HTMLButtonElement;
    span1.style.backgroundColor="#25A069"
    console.log(span1)
  },10)
    // let toDay = new Date();
    // this.http.get("https://api.aladhan.com/v1/gToH/"+toDay.getDate()+"-"+(toDay.getMonth()+1)+"-"+toDay.getFullYear()).subscribe(
    //   (resul : any) => {
    //     console.log(resul.data.hijri.year+"-"+resul.data.hijri.month.number+"-"+resul.data.hijri.day);
    //     //this.selectDate = new Date(resul.data.hijri.year+"-"+resul.data.hijri.month.number+"-"+resul.data.hijri.day)
    //   }
    // );
    // console.log(this.selectDate);
  }

  changeColor(){
    const active = document.querySelector('.mat-calendar-body-selected')
    const span1 = active as HTMLButtonElement;
    span1.style.backgroundColor=""
    console.log(span1)
    setTimeout(()=>{
      const active = document.querySelector('.mat-calendar-body-selected')
      const span1 = active as HTMLButtonElement;
      span1.style.backgroundColor="#25A069"
      console.log(span1)
    },5);
  }

  ngAfterViewInit(): void {
    this.changeThColor();
    const buttonNext = document.querySelectorAll(".mat-calendar-next-button")
    const nextButton = buttonNext[0] as HTMLButtonElement;
    nextButton.addEventListener("click", e =>{
      this.changeThColor();
    });
    const buttonPrev = document.querySelectorAll(".mat-calendar-previous-button")
    const prevButton = buttonPrev[0] as HTMLButtonElement;
    prevButton.addEventListener("click", e =>{
      this.changeThColor();
    });
    //console.log(ths);
    // const today = document.querySelectorAll('.mat-calendar-body-today')
    // const span = today[0] as unknown as HTMLSpanElement;
    // console.log()
    // span.style.border="none";
    // this.now.setDate(this.now.getDate()-1);
    // this.selectDate = new Date();
  }
  changeThColor(){
    const ths = document.querySelectorAll(".mat-calendar-table > thead > tr > th > span")
    console.log(ths[0]);
    ths.forEach(th=>{
      const span = th as HTMLSpanElement;
      span.style.color="#25A069";
    });
    console.log("-----------")
  }

}
