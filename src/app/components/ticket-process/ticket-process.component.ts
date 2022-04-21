import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular'

@Component({
  selector: 'app-ticket-process',
  templateUrl: './ticket-process.component.html',
  styleUrls: ['./ticket-process.component.scss'],
})
export class TicketProcessComponent implements OnInit {

  constructor(private modal: ModalController) { }

  ngOnInit() { }

  dismissModal() {
    if (this.modal) {
      this.modal.dismiss().then(() => { this.modal = null; });
    }

  }

  /*cronometro(){
    for(let i=0; i>){}
    
  }*/
}
