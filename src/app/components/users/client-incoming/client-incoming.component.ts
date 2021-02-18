import { Component, OnInit, NgModule } from '@angular/core';
import { ClientControlService } from '../../../services/client-control.service'
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-client-incoming',
  templateUrl: './client-incoming.component.html',
  styleUrls: ['./client-incoming.component.scss'],
})
export class ClientIncomingComponent implements OnInit {

  constructor(private clientControl: ClientControlService, private modal: ModalController) { }

  ngOnInit() {
    this.clientControl.getIncoming();
    console.log(this.clientControl.clients);
  }

  dismissModal() {
    if (this.modal) {
      this.modal.dismiss().then(() => { this.modal = null; });
    }
}
  doRefresh(event){
    setTimeout(()=>{
      this.clientControl.getIncoming();
      event.target.complete();
    },1500);
  }
  aprobar(correo: string){
    this.clientControl.aprobar(correo);
  }
  eliminar(correo: string){
    this.clientControl.eliminar(correo);
  }
}
