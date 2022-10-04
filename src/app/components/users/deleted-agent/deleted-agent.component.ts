import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { AgentControlService } from "../../../services/agent-control.service";
import { GenericService } from "src/app/services/generic.service";

@Component({
  selector: "app-deleted-agent",
  templateUrl: "./deleted-agent.component.html",
  styleUrls: ["./deleted-agent.component.scss"],
})
export class DeletedAgentComponent implements OnInit {
  constructor(
    protected modal: ModalController,
    protected agentService: AgentControlService,
    protected generic: GenericService
  ) {}

  ngOnInit() {
    this.agentService.getDeactivatedAgents();
  }
  doRefresh(event) {
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();
    }, 1500);
  }
  recoverAgent(correo: string) {
    if (this.agentService.recoverAgent(correo)) {
      this.generic.presentToast("Agente recuperado exitosamente");
      this.ngOnInit();
    } else {
      this.generic.presentToast("Hubo un error durante la operación");
    }
  }
}
