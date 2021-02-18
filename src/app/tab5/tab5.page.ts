import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ClientIncomingComponent } from '../components/users/client-incoming/client-incoming.component'
import { ClientApprovedComponent } from '../components/users/client-approved/client-approved.component';
import { ClientNaComponent } from '../components/users/client-na/client-na.component'
import { ActiveAgentComponent } from '../components/users/active-agent/active-agent.component'
import { DeletedAgentComponent } from '../components/users/deleted-agent/deleted-agent.component'
import { RegisterAgentComponent } from '../components/users/register-agent/register-agent.component'

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  constructor(private modal: ModalController) { }
  ngOnInit() {
  }

  async incoming() {
    const modal = await this.modal.create({
      component: ClientIncomingComponent
    });
    return await modal.present();
  }
  async approved() {
    const modal = await this.modal.create({
      component: ClientApprovedComponent
    });
    return await modal.present();
  }
  async na() {
    const modal = await this.modal.create({
      component: ClientNaComponent
    });
    return await modal.present();
  }
  async active_agents(){
    const modal = await this.modal.create({
      component: ActiveAgentComponent
    })
    return await modal.present();
  }
  async na_agents(){
    const modal = await this.modal.create({
      component: DeletedAgentComponent
    })
    return await modal.present();
  }
  async register_agents(){
    const modal = await this.modal.create({
      component: RegisterAgentComponent
    })
    return await modal.present();
  }

}
