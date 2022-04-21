import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { LoadingController } from "@ionic/angular";
import Swal from "sweetalert2";
import { supabase } from "./config/supabase";

@Injectable({
  providedIn: "root",
})
export class RegisterService {
  url = "https://proyectodbdr.000webhostapp.com/proyecto_ionic/register.php";
  urlA =
    "https://proyectodbdr.000webhostapp.com/proyecto_ionic/register_agent.php";
  constructor(
    private http: HttpClient,
    private router: Router,
    private loadingController: LoadingController
  ) {}
  loading: any;

  async register(user: any) {
    this.presentLoading();
    try {
      const { data, error } = await supabase.from("cliente").insert(user);

      if (!data) {
        Swal.fire({
          icon: "error",
          title: "Hubo un error",
          text: `Intenta nuevamente o ponte en contacto con Soporte...`,
        });
        this.dismissLoading();
        //this.router.navigate(["/"]);
      } else {
        Swal.fire({
          icon: "info",
          title: "¡Gracias por elegir Empresa Example!",
          text: "¡Tu cuenta será verficada por un administrador!",
        });
        this.dismissLoading();
        this.router.navigate(["/"]);
      }
    } catch (error) {}
  }

  async register_agent(agent: any) {}

  /*register(user: any) {
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
  }*/

  async presentLoading() {
    this.loading = await this.loadingController.create({
      cssClass: "my-custom-class",
      message: "Solicitando Cuenta",
    });
    await this.loading.present();
  }
  async dismissLoading() {
    this.loading = await this.loadingController.dismiss();
  }
}
