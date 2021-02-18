import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginService } from '../../../services/login.service';
import { TicketService } from '../../../services/ticket.service'

@Component({
  selector: 'app-surveillance-cam',
  templateUrl: './surveillance-cam.component.html',
  styleUrls: ['./surveillance-cam.component.scss'],
})
export class SurveillanceCamComponent implements OnInit {

  sub_issue1: null;
  sub_issue2: null;

  ticket = {
    id_cliente: null,
    id_issue: 9,
    sub_issue: null,
    explicacion: null,
    prioridad: null
  }

  constructor( private modal: ModalController, private loginService: LoginService, private ticketService: TicketService) { }

  ngOnInit() {}

  dismissModal() {
    if (this.modal) {
      this.modal.dismiss().then(() => { this.modal = null; });
    }
}
sendTicket() {
  if(this.ticket.id_cliente == null){
    this.ticket.id_cliente = this.loginService.datos[0]['id_cliente'];
  }
  if(this.sub_issue1 == true){
    this.ticket.sub_issue = "Instalaciones"
  }else if(this.sub_issue2 == true){
    this.ticket.sub_issue = "Mantenimiento"
  }
  console.log(this.sub_issue1, this.sub_issue2);
  this.ticketService.sendTicket(this.ticket);  
}


}
