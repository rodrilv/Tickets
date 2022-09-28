import { Injectable } from "@angular/core";
import { LoadingController } from "@ionic/angular";
@Injectable({
  providedIn: "root",
})
export class GenericService {
  constructor(private loadingController: LoadingController) {}

  async presentLoading(message: string) {
    return await this.loadingController
      .create({
        //cssClass: "my-custom-class",
        message: `${message}`,
      })
      .then((a) => {
        a.present();
      });
  }

  async dismissLoading() {
    return await this.loadingController.dismiss();
  }
}
