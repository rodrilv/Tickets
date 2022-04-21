import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AgentControlService } from '../../../services/agent-control.service'

@Component({
  selector: 'app-active-agent',
  templateUrl: './active-agent.component.html',
  styleUrls: ['./active-agent.component.scss'],
})
export class ActiveAgentComponent implements OnInit {

  constructor(private modal: ModalController, private agentService: AgentControlService) { }

  ngOnInit() {
    this.agentService.getActive();
  }
  eliminar(correo: string){
    this.agentService.eliminar(correo);
    this.ngOnInit();
  }

  dismissModal() {
    if (this.modal) {
      this.modal.dismiss().then(() => { this.modal = null; });
    }
  }
  doRefresh(event){
    setTimeout(()=>{
      this.ngOnInit();
      event.target.complete();
    },1500);
  }

}
