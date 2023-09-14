import { Component, OnInit,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss'],
})
export class ConfirmationDialogComponent  implements OnInit {
  @Output() confirmed = new EventEmitter <boolean>();
  //methode a appeler losqque je clique sur supprimer
  confirm(){
    this.confirmed.emit(true);
  }
  //methode a appeler losque j'annule la suppresion
  cancel (){
    this.confirmed.emit(false);
  }

  constructor() { }

  ngOnInit() {}

}
