import { Component, OnInit } from '@angular/core';
import { RadioService } from '../../admin/services/RadioService';
import { Radio } from 'src/app/admin/list-radio/mode';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.page.html',
  styleUrls: ['./radio.page.scss'],
})
export class RadioPage implements OnInit {
  // on va declare radion ici
  radio:any;
  searchTerm:string=''
  // radio: any;

  constructor(private radioService: RadioService) { }//ici ce constructeur avec parametre

  ngOnInit() {
    //pour appel mon liste dans TypeScripte
    this.radioService.getRadio().subscribe((result)=>{
      this.radio=result;
    })
    // ici ce pour afficher la liste de radio
    console.log(this.radio);
  }
  //pour faire la filter de rechrcher de radio liste
  searchRadio(searchTerm: string){
    if(!searchTerm){
      return this.radio;
    }
    return this.radio.filter((radio:{name: string})=>
    radio.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  //ici recherch tourne sur texte recherch dans liste radio 
  highlight(text: string, search:string ): string{
    if(!search){
      return text;
    }
    const pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    const regex = new RegExp(pattern, "gi");
    return text.replace(regex, match=> `<b>${match}</b>`);
  }
  sortRadio(searchTerm: string){
    if(!searchTerm){
      return this.radio;
    }
    return this.radio.sort((a:any, b:{nom: string;})=>
    b.nom.toLowerCase().includes(searchTerm.toLowerCase()) ? 1:-1
  );
  }


}
