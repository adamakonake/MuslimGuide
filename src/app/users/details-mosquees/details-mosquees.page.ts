import { Component, OnInit } from '@angular/core';
import { Firestore, doc, docSnapshots, getDoc } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-details-mosquees',
  templateUrl: './details-mosquees.page.html',
  styleUrls: ['./details-mosquees.page.scss'],
})
export class DetailsMosqueesPage implements OnInit {

  mosquee:any;
  horaira:any;


  constructor( private activatedRoute : ActivatedRoute, private firestore:Firestore) { }


  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((result)=>{
      const id = result.get("id");
      this.getMosqueeById(id);
    })
  }

  getMosqueeById(id:any) {

    const mosqueDocRef = doc(this.firestore, "Mosquee",id);
    console.log(id);
    getDoc(mosqueDocRef).then((result)=>{
      const id = result.id;
      const data = result.data;
      this.mosquee = { id, ...data };
      console.log(this.mosquee);
      const horaireDocRef = doc(this.firestore,`Horaires/${this.mosquee.horaire.path}`)
      docSnapshots(horaireDocRef).pipe(map(doc =>{
          const id = doc.id;
          const data = doc.data;
          this.horaira = { id, ...data };
          console.log(this.horaira);
        }))
    })
    // return docSnapshots(mosqueDocRef).pipe(map(doc =>{
    //   const id = doc.id;
    //   const data = doc.data;
    //   return { id, ...data } as unknown as Mosquee;
    // }))

      // const collectionMosquee = collection(this.firestore,'Mosquee');
      // collectionData(collectionMosquee,{idField:'id'}).subscribe((result : any[])=>{
      //   result.forEach( async mosque =>{
      //     const documentRef = doc(this.firestore, mosque.horaire.path)
      //     mosque.horaire = mosque.horaire.path
      //     this.mosquee.push(mosque);
      //   })
      // })
      // return this.mosquee;
    }

   
  




}
