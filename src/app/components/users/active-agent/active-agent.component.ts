import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AgentControlService } from '../../../services/agent-control.service';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-active-agent',
  templateUrl: './active-agent.component.html',
  styleUrls: ['./active-agent.component.scss'],
})
export class ActiveAgentComponent implements OnInit {

  constructor(
    protected modal: ModalController, 
    protected agentService: AgentControlService,
    protected generic: GenericService
    ) { }

  ngOnInit() {
    this.agentService.getActiveAgents();
  }
  deactivateAgent(correo: string){
    if(this.agentService.deactivateAgent(correo)){
      this.ngOnInit();
      this.generic.presentToast("Agente desactivado correctamente");
    }else{
      this.generic.presentToast("Hubo un error al completar la operación");
    }
    
  }
  doRefresh(event){
    setTimeout(()=>{
      this.ngOnInit();
      event.target.complete();
    },1500);
  }

}
