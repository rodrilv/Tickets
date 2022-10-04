import { Component, OnInit } from '@angular/core';
import { ClientControlService } from '../../../services/client-control.service';
import { GenericService } from 'src/app/services/generic.service';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-client-na',
  templateUrl: './client-na.component.html',
  styleUrls: ['./client-na.component.scss'],
})
export class ClientNaComponent implements OnInit {

  constructor(
    protected modal: ModalController, 
    protected clientControl: ClientControlService,
    protected generic: GenericService) { }

  ngOnInit() {
    this.clientControl.getUnsubscribedClients();
  }
  recoverDeactivatedClient(correo: string) {
    if(this.clientControl.recoverDeactivatedClient(correo)){
      this.generic.presentToast("Cliente recuperado");
      this.ngOnInit();
    }else{
      this.generic.presentToast("Hubo un error al completar la operación");
    }
  }

  doRefresh(event) {
    setTimeout(() => {
      this.clientControl.getUnsubscribedClients();
      event.target.complete();
    }, 1500);
  }
}
