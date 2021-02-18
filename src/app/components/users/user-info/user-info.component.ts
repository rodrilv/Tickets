import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular'

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {

  constructor(private modal: ModalController) { }

  ngOnInit() {}

  dismissModal() {
    if (this.modal) {
      this.modal.dismiss().then(() => { this.modal = null; });
    }
  }

  

}
