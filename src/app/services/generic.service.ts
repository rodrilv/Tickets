import { Injectable } from "@angular/core";
import { LoadingController, ModalController, ToastController } from "@ionic/angular";
@Injectable({
  providedIn: "root",
})
export class GenericService {
  constructor(
    private loadingController: LoadingController, 
    public toast: ToastController
    ) {}

    async presentToast(message: string){
      const toast = await this.toast.create({
        message: message,
        duration: 2000,
        position: 'top'
      })
      await toast.present();
    }
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

  dismissModal(modal: ModalController) {
    if (modal) {
      modal.dismiss().then(() => {
        modal = null;
      });
    }
  }
}
