import { Component, OnInit, NgModule } from "@angular/core";
import { ClientControlService } from "../../../services/client-control.service";
import { ModalController } from "@ionic/angular";
import { GenericService } from "src/app/services/generic.service";
@Component({
  selector: "app-client-incoming",
  templateUrl: "./client-incoming.component.html",
  styleUrls: ["./client-incoming.component.scss"],
})
export class ClientIncomingComponent implements OnInit {
  constructor(
    protected clientControl: ClientControlService,
    protected modal: ModalController,
    protected generic: GenericService
  ) {}

  ngOnInit() {
    this.clientControl.getIncomingClients();
  }

  doRefresh(event) {
    setTimeout(() => {
      this.clientControl.getIncomingClients();
      event.target.complete();
    }, 2500);
  }
  async aproveClient(correo: string) {
    if(this.clientControl.aproveClient(correo)){
      this.generic.presentToast("Cliente entrante aprobado");
      this.ngOnInit();
    }else{
      this.generic.presentToast("Hubo un error al completar la operación");
    }
  }
  async deleteIncoming(correo: string) {
    if(this.clientControl.deleteIncoming(correo)){
      this.generic.presentToast("Cliente entrante eliminado");
      this.ngOnInit();
    }else{
      this.generic.presentToast("Hubo un error al completar la operación");
    }
    
  }
}
