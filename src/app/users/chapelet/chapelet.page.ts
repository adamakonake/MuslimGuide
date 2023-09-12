import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapelet',
  templateUrl: './chapelet.page.html',
  styleUrls: ['./chapelet.page.scss'],
})
export class ChapeletPage implements OnInit {

  reset:any;   
   count!:number; 

  

  constructor() { }

    
  ngOnInit() {
    this.count = 0;
  }

  increment(count:number):any{
    this.count++;
  }

  resetNumber():any{
   this.count = 0;
  }

}
