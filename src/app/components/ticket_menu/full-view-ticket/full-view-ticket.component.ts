import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-full-view-ticket',
  templateUrl: './full-view-ticket.component.html',
  styleUrls: ['./full-view-ticket.component.scss'],
})
export class FullViewTicketComponent implements OnInit {

  constructor(private modal: ModalController) { }

  ngOnInit() { }

  dismissModal() {
    if (this.modal) {
      this.modal.dismiss().then(() => { this.modal = null; });
    }
  }
}
