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


  constructor(private mosqueeService: MosqueeService, private route : Router) { }
  

  searchTerm: string ='';

  ngOnInit() {
    console.log("Starting")
    this.mosqueeService.getMosquee().subscribe((result : any[])=>{
      //const docc = doc(this.firestore,result.horaire)
      let mosquee : any[] = [];
      console.log(result)
      result.forEach(mosque =>{
        //const documentRef = doc(this.firestore, mosque.horaire.path)
        mosque.horaire = mosque.horaire.path
        mosquee.push(mosque);
        console.log(mosque+" added")
      })
      //console.log(mosquee)
      this.mosquee = mosquee;
    })
  }
  

  goToDetail(id : any){
    this.route.navigateByUrl("details-mosquees/"+id);
  }

  // ngOnInit() {
  //   this.mosqueeService.getMosquee().subscribe((result: any[]) => {
  //   this.mosquee = result;
  //   });
  //   }
  
  searchMosque(searchTerm: string) {
    if (!searchTerm) {
        return this.mosquee;
    }

    return this.mosquee.filter((mosque: { name: string; }) => 
        mosque.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
}

highlight(text: string, search: string): string {
  if (!search) {
    return text;
  }
  const pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
  const regex = new RegExp(pattern, "gi");
  return text.replace(regex, match => `<b>${match}</b>`);
}

sortMosque(searchTerm: string) {
  if (!searchTerm) {
    return this.mosquee;
  }

  return this.mosquee.sort((a: any, b: { nom: string; }) => 
    b.nom.toLowerCase().includes(searchTerm.toLowerCase()) ? 1 : -1
  );
}

}
