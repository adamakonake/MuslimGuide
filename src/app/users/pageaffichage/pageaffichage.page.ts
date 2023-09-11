import { HttpClient } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pageaffichage',
  templateUrl: './pageaffichage.page.html',
  styleUrls: ['./pageaffichage.page.scss'],
})
export class PageaffichagePage implements OnInit {

  name ="";
  ayahs : any[] = [];
  contenue : any;
  translate : any;
  traslateAyahs : any[] = [];

  constructor( private activatedRoute : ActivatedRoute,private http : HttpClient,private zone : NgZone) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((result)=>{
      const number = result.get("numero");
      this.http.get("http://api.alquran.cloud/v1/surah/"+number).subscribe((response : any) => {
        console.log(response.data.ayahs);
        this.contenue = response.data;
        this.name = this.contenue.name;
        this.ayahs = this.contenue.ayahs
      })
      this.http.get("https://api.alquran.cloud/v1/surah/"+number+"/fr.hamidullah").subscribe((result : any) =>{
        this.translate = result.data;
        this.traslateAyahs = this.translate.ayahs;
     })
    })
  }

}
