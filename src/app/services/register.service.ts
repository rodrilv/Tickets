import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url = "https://proyectodbdr.000webhostapp.com/proyecto_ionic/register.php"
  urlA = "https://proyectodbdr.000webhostapp.com/proyecto_ionic/register_agent.php";
  constructor(
    private http: HttpClient,
    private router: Router,
    private loadingController: LoadingController,
  ) { }
  loading: any;
  async presentLoading() {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Solicitando Cuenta',
    });
    await this.loading.present();
  }
  async dismissLoading() {
    this.loading = await this.loadingController.dismiss();
  }
  register(user: any) {
    this.presentLoading();
    return this.http.post(`${this.url}`, JSON.stringify(user)).subscribe(datos => {
      if (datos['resultado'] == '1') {
        this.dismissLoading();
        Swal.fire({
          icon: 'info',
          title: '¡Gracias por elegir Dex-Tree!',
          text: '¡Tu cuenta será verficada por un administrador!'
        });
      } else if (datos['resultado'] == '2') {
        this.dismissLoading();
        Swal.fire({
          icon: 'warning',
          title: 'Vaya, parece que ha habido un error',
          text: '¡Trata de verificar los datos!'
        })
      }
    }
    );
  }
  register_agent(user: any) {
    this.presentLoading();
    return this.http.post(`${this.urlA}`, JSON.stringify(user)).subscribe(datos => {
      if (datos['resultado'] == '1') {
        this.dismissLoading();
        Swal.fire({
          icon: 'info',
          title: '¡Agente Registrado!',
          text: '¡Pídele que inicie sesión!',
        });
      } else if (datos['resultado'] == '2') {
        this.dismissLoading();
        Swal.fire({
          icon: 'warning',
          title: 'Vaya, parece que ha habido un error',
          text: '¡Trata de verificar los datos!',
        });
      }
    }
    );
  }
}
