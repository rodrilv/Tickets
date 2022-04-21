import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../../ticket_menu/popover/popover.component';
import { RegisterService } from '../../../services/register.service';


@Component({
  selector: 'app-register-agent',
  templateUrl: './register-agent.component.html',
  styleUrls: ['./register-agent.component.scss'],
})
export class RegisterAgentComponent implements OnInit {
  agent = {
    nombre: null,
    apellido_paterno: null,
    apellido_materno: null,
    correo_electronico: null,
    telefono: null,
    password: null
  }

  constructor(private modal: ModalController, private popov: PopoverController, private registerService: RegisterService) { }

  ngOnInit() {

  }

  dismissModal() {
    if (this.modal) {
      this.modal.dismiss().then(() => { this.modal = null; });
    }
  }
  async presentPopover(ev: any) {
    const popover = await this.popov.create({
      component: PopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: false
    });
    return await popover.present();
  }
  register() {
    this.registerService.register_agent(this.agent);
  }

}
