import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pageaffichage',
  templateUrl: './pageaffichage.page.html',
  styleUrls: ['./pageaffichage.page.scss'],
})
export class PageaffichagePage implements OnInit {

  contenue : any;

  constructor( private activatedRoute : ActivatedRoute,private http : HttpClient) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((result)=>{
      const number = result.get("numero");
      this.http.get("http://api.alquran.cloud/v1/surah/"+number).subscribe((response : any) => {
        console.log(response.data.ayahs);
        this.contenue = response.data;
      })
    })
  }

}
