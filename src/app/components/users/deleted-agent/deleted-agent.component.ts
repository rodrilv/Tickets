import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AgentControlService } from '../../../services/agent-control.service'

@Component({
  selector: 'app-deleted-agent',
  templateUrl: './deleted-agent.component.html',
  styleUrls: ['./deleted-agent.component.scss'],
})
export class DeletedAgentComponent implements OnInit {

  constructor(private modal: ModalController, private agentService: AgentControlService) { }

  ngOnInit() {
    this.agentService.getNa();
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
  recuperar(correo: string){
  this.agentService.recuperar(correo);
  }
}
