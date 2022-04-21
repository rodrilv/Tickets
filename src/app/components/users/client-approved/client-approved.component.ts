import { Component, OnInit } from '@angular/core';
import { ClientControlService } from '../../../services/client-control.service'
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-client-approved',
  templateUrl: './client-approved.component.html',
  styleUrls: ['./client-approved.component.scss'],
})
export class ClientApprovedComponent implements OnInit {

  constructor(private clientControl: ClientControlService, private modal: ModalController) { }

  ngOnInit() {
    this.clientControl.getActive();
  }

  dismissModal() {
    if (this.modal) {
      this.modal.dismiss().then(() => { this.modal = null; });
    }
  }
  doRefresh(event){
    setTimeout(()=>{
      this.clientControl.getActive();
      event.target.complete();
    },1500);
  }
  eliminar(correo){
    this.clientControl.eliminar(correo);
    this.ngOnInit();
  }


}
