import { Component, OnInit } from '@angular/core';
import { TicketService } from  '../services/ticket.service';
import { TicketProcessComponent } from '../components/ticket-process/ticket-process.component';
import { ModalController } from '@ionic/angular'
import { FullViewTicketComponent } from '../components/ticket_menu/full-view-ticket/full-view-ticket.component';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  constructor(private ticketService: TicketService, private modal: ModalController) { }

  ngOnInit() {
  }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev.detail['value']);
      this.ticketService.getTicketByStatus(ev.detail['value']);
      this.ticketService.status = ev.detail['value'];
      //console.log(this.ticketService.ticket);
  }

  async ticket_proc() {
    const modal = await this.modal.create({
      component: TicketProcessComponent
    });
    return await modal.present();
  }
  async ticket_det() {
    const modal = await this.modal.create({
      component: FullViewTicketComponent
    });
    return await modal.present();
  }
}
