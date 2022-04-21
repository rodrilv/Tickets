import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { RegisterService } from '../../../services/register.service';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../../../components/ticket_menu/popover/popover.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user = {
    nombre: null,
    apellido_p: null,
    apellido_m: null,
    empresa: null,
    ubicacion: null,
    correo: null,
    telefono: null,
    password: null
  }
  constructor(
    private registerService: RegisterService,
    private popov: PopoverController,
  ) { }

  async presentPopover(ev: any) {
    const popover = await this.popov.create({
      component: PopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: false
    });
    return await popover.present();
  }

  ngOnInit() {
  }
  register() {
    this.registerService.register(this.user);
  }
}
