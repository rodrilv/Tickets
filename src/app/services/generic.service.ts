import { Injectable } from "@angular/core";
import { LoadingController } from "@ionic/angular";
import Swal from "sweetalert2";

@Injectable({
  providedIn: "root",
})
export class GenericService {
  private loading = false;

  constructor(private loadingController: LoadingController) {}

  async presentLoading() {
    this.loading = true;
    return await this.loadingController
      .create({
        cssClass: "my-custom-class",
        message: "Iniciando Sesión",
      })
      .then((a) => {
        a.present();
      });
  }

  async dismissLoading() {
    return await this.loadingController.dismiss();
  }
}
