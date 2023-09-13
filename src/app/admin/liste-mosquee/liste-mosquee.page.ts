import { Component, OnInit } from '@angular/core';
import { MosqueeService } from 'src/app/users/services/mosquee.service';

@Component({
  selector: 'app-liste-mosquee',
  templateUrl: './liste-mosquee.page.html',
  styleUrls: ['./liste-mosquee.page.scss'],
})
export class ListeMosqueePage implements OnInit {

  mosquee:any;
  constructor(private mosqueeService: MosqueeService) { }
 
  ngOnInit() {
    this.mosqueeService.getMosquee().subscribe((result : any[])=>{
      //const docc = doc(this.firestore,result.horaire)
      let mosquee : any[] = [];
      console.log(result)
      result.forEach(mosque =>{
        //const documentRef = doc(this.firestore, mosque.horaire.path)
        mosque.horaire = mosque.horaire.path
        mosquee.push(mosque);
      })
      //console.log(mosquee)
      this.mosquee = mosquee;
    })
  }

  modifierMosquee( index: number){
    this.mosqueeService.updateMosque(this.mosquee[index].id,this.mosquee[index])
  }

  supprimerMosquee(index:number){
    this.mosqueeService.removeMosque(this.mosquee[index].id,)
  }
}
