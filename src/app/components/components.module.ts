import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ApplicationsComponent } from '../components/ticket_menu//applications/applications.component';
import { ClientApprovedComponent } from '../components/users/client-approved/client-approved.component';
import { ClientIncomingComponent } from '../components/users/client-incoming/client-incoming.component';
import { ClientNaComponent } from '../components/users/client-na/client-na.component';
import { EmailComponent } from '../components/ticket_menu/email/email.component';
import { NetworkComponent } from '../components/ticket_menu/network/network.component';
import { OthersComponent } from '../components/ticket_menu/others/others.component';
import { PagesComponent } from '../components/ticket_menu/pages/pages.component';
import { PrinterComponent } from '../components/ticket_menu/printer/printer.component';
import { SoftwareComponent } from '../components/ticket_menu/software/software.component';
import { SurveillanceCamComponent } from '../components/ticket_menu/surveillance-cam/surveillance-cam.component';
import { WifiComponent } from '../components/ticket_menu/wifi/wifi.component';
import { ActiveAgentComponent } from '../components/users/active-agent/active-agent.component'
import { DeletedAgentComponent } from '../components/users/deleted-agent/deleted-agent.component';
import { RegisterAgentComponent } from '../components/users/register-agent/register-agent.component'
@NgModule({
  declarations: [
      ApplicationsComponent,
      ClientApprovedComponent,
      ClientIncomingComponent,
      ClientNaComponent,
      ActiveAgentComponent,
      DeletedAgentComponent,
      RegisterAgentComponent,
      WifiComponent,
      PrinterComponent,
      OthersComponent,
      EmailComponent,
      NetworkComponent,
      PagesComponent,
      SoftwareComponent,
      SurveillanceCamComponent,
    ],
  entryComponents: [],
  imports: [BrowserModule, FormsModule, IonicModule, CommonModule],
  providers: []
})
export class ComponentModule {}