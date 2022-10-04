import { Component, OnInit } from "@angular/core";
import { ModalController, PopoverController } from "@ionic/angular";
import { PopoverComponent } from "../../ticket_menu/popover/popover.component";
import { GenericService } from "src/app/services/generic.service";
import { RegisterService } from "../../../services/register.service";
import { Agent } from "src/app/models/agent.model";

@Component({
  selector: "app-register-agent",
  templateUrl: "./register-agent.component.html",
  styleUrls: ["./register-agent.component.scss"],
})
export class RegisterAgentComponent implements OnInit {
  protected agent: Agent = new Agent();
  constructor(
    private modal: ModalController,
    private popov: PopoverController,
    private registerService: RegisterService,
    private generic: GenericService
  ) {}

  ngOnInit() {}

  dismissModal() {
    if (this.modal) {
      this.modal.dismiss().then(() => {
        this.modal = null;
      });
    }
  }
  async presentPopover(ev: any) {
    const popover = await this.popov.create({
      component: PopoverComponent,
      cssClass: "my-custom-class",
      event: ev,
      translucent: false,
    });
    return await popover.present();
  }
  async registerAgent() {
    (await this.registerService.registerAgent(this.agent))
      ? this.generic.presentToast(
          "El agente ha sido registrado correctamente"
        )
      : this.generic.presentToast(
          "Hubo un error al registrar tu agente intenta más tarde o contacta a soporte."
        );
  }
}
