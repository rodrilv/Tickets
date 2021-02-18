import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginService } from '../../../services/login.service';
import { TicketService } from '../../../services/ticket.service';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.scss'],
})
export class SoftwareComponent implements OnInit {
  sub_issue: null;

  ticket = {
    id_cliente: null,
    id_issue: 5,
    sub_issue: null,
    explicacion: null,
    prioridad: null,
  }

  constructor(private modal: ModalController, private loginService: LoginService, private ticketService: TicketService) { }

  ngOnInit() { }

  dismissModal() {
    if (this.modal) {
      this.modal.dismiss().then(() => { this.modal = null; });
    }
  }

  sendTicket() {
    if(this.ticket.id_cliente == null){
      this.ticket.id_cliente= this.loginService.datos[0]['id_cliente'];
    }
    if (this.sub_issue == true) {
      this.ticket.sub_issue = "Pidió Junta"
    } else {
      this.ticket.sub_issue = "No pidió Junta"
    }
    console.log(this.sub_issue);
    this.ticketService.sendTicket(this.ticket);
  }
}
