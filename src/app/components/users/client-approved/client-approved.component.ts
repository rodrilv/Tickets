import { Component, OnInit } from '@angular/core';
import { ClientControlService } from '../../../services/client-control.service'
import { GenericService } from 'src/app/services/generic.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-client-approved',
  templateUrl: './client-approved.component.html',
  styleUrls: ['./client-approved.component.scss'],
})
export class ClientApprovedComponent implements OnInit {

  constructor(
    protected clientControl: ClientControlService, 
    protected modal: ModalController, 
    protected generic: GenericService) { }

  ngOnInit() {
    this.clientControl.getActiveClients();
  }
  
  doRefresh(event){
    setTimeout(()=>{
      this.clientControl.getActiveClients();
      event.target.complete();
    },1500);
  }
  deactivateClient(correo: string){
    if(this.clientControl.deactivateClient(correo)){
      this.ngOnInit();
      this.generic.presentToast("Cliente eliminado correctamente");
      
    }else{
      this.generic.presentToast("Hubo un error al completar la operación");
    }
  }


}
