import { Component, OnInit } from '@angular/core';
import { TicketService } from '../services/ticket.service';
import { ModalController } from '@ionic/angular';
import { FullViewTicketComponent } from '../components/ticket_menu/full-view-ticket/full-view-ticket.component'


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  number: any;

  constructor(private ticketService: TicketService, private modal: ModalController) {}

  segmentChanged(ev: any) {
    console.log('Segment changed', ev.detail['value']);
      this.ticketService.getPersonalTicketsByStatus(ev.detail['value']);
      this.number = ev.detail['value'];
      //console.log(this.ticketService.ticket);
  }

ngOnInit(){
this.ticketService.getTickets();
}
  doRefresh(event) {
    setTimeout(() => {
      this.ticketService.getPersonalTicketsByStatus(this.number);
      event.target.complete();
    }, 1900);
  }

  async ticket_det() {
    const modal = await this.modal.create({
      component: FullViewTicketComponent
    });
    return await modal.present();
  }
}
