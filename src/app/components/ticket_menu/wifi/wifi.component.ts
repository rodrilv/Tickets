import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { ModalController } from '@ionic/angular';
import { TicketService } from '../../../services/ticket.service'


@Component({
  selector: 'app-wifi',
  templateUrl: './wifi.component.html',
  styleUrls: ['./wifi.component.scss'],
})
export class WifiComponent implements OnInit {
  sub_issue1: null;
  sub_issue2:null;
  sub_issue3:null;
  sub_issue4:null;

  ticket = {
    id_cliente: null,
    id_issue: 1,
    sub_issue: null,
    explicacion: null,
    prioridad: null,
  }
  constructor(
    private modal: ModalController,
    private loginService: LoginService,
    private ticketService: TicketService,
  ) {}

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
    if(this.sub_issue1 == true){
      this.ticket.sub_issue = "Wi-Fi Lento"
    }else if(this.sub_issue2 == true){
      this.ticket.sub_issue = "No Funciona"
    }else if(this.sub_issue3 == true){
      this.ticket.sub_issue = "Intermitente"
    }else if(this.sub_issue4 == true){
      this.ticket.sub_issue = "Otro"
    }
    console.log(this.sub_issue1, this.sub_issue2, this.sub_issue3, this.sub_issue4);
    this.ticketService.sendTicket(this.ticket);  
  }
}
