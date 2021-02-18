import { Component, OnInit } from '@angular/core';
import { ClientControlService } from '../../../services/client-control.service'
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-client-na',
  templateUrl: './client-na.component.html',
  styleUrls: ['./client-na.component.scss'],
})
export class ClientNaComponent implements OnInit {

  constructor(private modal: ModalController, private clientControl: ClientControlService) { }

  ngOnInit() {
    this.clientControl.getna();
  }

  dismissModal() {
    if (this.modal) {
      this.modal.dismiss().then(() => { this.modal = null; });
    }
  }
  recover(correo: string) {
    this.clientControl.recuperar(correo);
  }

  doRefresh(event) {
    setTimeout(() => {
      this.clientControl.getna();
      event.target.complete();
    }, 1500);
  }
}
