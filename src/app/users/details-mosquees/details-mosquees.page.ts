import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MosqueeService } from '../services/mosquee.service';

@Component({
  selector: 'app-details-mosquees',
  templateUrl: './details-mosquees.page.html',
  styleUrls: ['./details-mosquees.page.scss'],
})
export class DetailsMosqueesPage implements OnInit {
  mosquee : any;
  horaire : any;
  constructor( private activatedRoute : ActivatedRoute, private mosqueeService : MosqueeService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((parms)=>{
      const id = parms.get("id");
      this.mosqueeService.getMosqueeById(id).subscribe((result : any)=>{
        this.mosquee = result
        this.mosqueeService.getHoraireById(result.horaire.path).subscribe(heures =>{
          this.horaire = heures
          console.log(this.horaire);
        })
      })
    })
  }

}
