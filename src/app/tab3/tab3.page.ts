import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserInfoComponent } from '../components/users/user-info/user-info.component'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private modal: ModalController) {}

    async settings() {
      const modal = await this.modal.create({
        component: UserInfoComponent
      });
      return await modal.present();
    }
  }
