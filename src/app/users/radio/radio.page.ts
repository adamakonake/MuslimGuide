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
  radios:any;

  constructor(private radioService: RadioService) { }//ici ce constructeur avec parametre

  ngOnInit() {
    //pour appel mon liste dans TypeScripte
    this.radioService.getRadio().subscribe((result)=>{
      this.radios=result;
    })
    // ici ce pour afficher la liste de radio
    console.log(this.radios);
  }

}
