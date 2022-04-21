import { Component } from '@angular/core';
import { WifiComponent } from '../components/ticket_menu/wifi/wifi.component';
import { PrinterComponent } from '../components/ticket_menu/printer/printer.component';
import { EmailComponent } from '../components/ticket_menu/email/email.component';
import { OthersComponent } from '../components/ticket_menu/others/others.component';
import { SoftwareComponent } from '../components/ticket_menu/software/software.component';
import { ApplicationsComponent } from '../components/ticket_menu/applications/applications.component';
import { PagesComponent } from '../components/ticket_menu/pages/pages.component';
import { NetworkComponent } from '../components/ticket_menu/network/network.component';
import { SurveillanceCamComponent } from '../components/ticket_menu/surveillance-cam/surveillance-cam.component';
import { ModalController } from '@ionic/angular';
 
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor( private modal: ModalController) {}

  async wifi() {
    const modal = await this.modal.create({
      component: WifiComponent
    });
    return await modal.present();
  }
  async printer() {
    const modal = await this.modal.create({
      component: PrinterComponent
    });
    return await modal.present();
  }
  async email() {
    const modal = await this.modal.create({
      component: EmailComponent
    });
    return await modal.present();
  }
  async others() {
    const modal = await this.modal.create({
      component: OthersComponent
    });
    return await modal.present();
  }
  async software() {
    const modal = await this.modal.create({
      component: SoftwareComponent
    });
    return await modal.present();
  }
  async applications() {
    const modal = await this.modal.create({
      component: ApplicationsComponent
    });
    return await modal.present();
  }
  async pages() {
    const modal = await this.modal.create({
      component: PagesComponent
    });
    return await modal.present();
  }
  async network() {
    const modal = await this.modal.create({
      component: NetworkComponent
    });
    return await modal.present();
  }
  async surveillance() {
    const modal = await this.modal.create({
      component: SurveillanceCamComponent
    });
    return await modal.present();
  }
}
