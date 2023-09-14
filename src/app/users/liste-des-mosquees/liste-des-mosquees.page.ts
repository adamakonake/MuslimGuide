import { Component, OnInit } from '@angular/core';
import { collection, collectionData } from '@angular/fire/firestore';
import { doc } from 'firebase/firestore';
import { Firestore } from 'firebase/firestore';
import { MosqueeService } from '../services/mosquee.service';
import { Router } from '@angular/router';





@Component({
  selector: 'app-liste-des-mosquees',
  templateUrl: './liste-des-mosquees.page.html',
  styleUrls: ['./liste-des-mosquees.page.scss'],
})
export class ListeDesMosqueesPage implements OnInit {
  mosquee:any=[];
  constructor(private mosqueeService: MosqueeService, private route:Router) { }
  // getMosquee(){
  //   const collectionMosquee = collection(this.firestore,'Mosquee');
  //   collectionData(collectionMosquee,{idField:'id'}).subscribe((result : any[])=>{
  //     result.forEach( async mosque =>{
  //       const documentRef = doc(this.firestore, mosque.horaire.path)
  //       mosque.horaire = mosque.horaire.path
  //       this.mosquee.push(mosque);
  //     })
  //   })
  //   return this.mosquee;
  // }

  ngOnInit() {
    this.mosquee = this.mosqueeService.getMosquee()
    console.log(this.mosquee);
  }

  goToDetailsMosquee(id:any){
    this.route.navigateByUrl("/details-mosquees/"+id)
  }
  

}
