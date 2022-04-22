import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { supabase } from "./config/supabase";
import { Router } from "@angular/router";
import { LoadingController } from "@ionic/angular";
import Swal from "sweetalert2";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  datos: any;
  loading = false;
  status: any;
  constructor(
    private http: HttpClient,
    private router: Router,
    private loadingController: LoadingController
  ) {
    this.datos = null;
  }

  ngOnInit() {}

  async login(correo: string, password: string) {
    this.presentLoading();

    const { data, error } = await supabase
      .from("cliente")
      .select()
      .match({ correo: correo, password: password });
    console.log(data);

    if (data.length === 0) {
      Swal.fire({
        icon: "error",
        title:"Hubo un error",
        text: "Verifica los datos introducidos",
        toast: true,
      });
      this.dismissLoading();
    } else {
      this.datos = data;
      this.status = true;
      this.router.navigate(["dashboard"]);
      this.dismissLoading();
    }
  }

  /*login(correo, password) {
    this.presentLoading();
    return this.http.get(`${this.url}correo=${correo}&pass=${password}`).subscribe(datos => {
      if (datos['resultado'] == '1') {
        Swal.fire(
          '¡Bienvenido!',
          '',
          'success'
        );
        this.dismissLoading();
        this.datos.push(datos['usuario']);
        this.router.navigate(['dashboard']);
      } else if (datos['resultado'] == '2') {
        Swal.fire({
          icon: 'warning',
          title: 'Tu cuenta no ha sido verificada...'
        });
        this.dismissLoading();
      } else if (datos['resultado'] == '0') {
        return this.http.get(`${this.urlA}correo=${correo}&pass=${password}`).subscribe(datos => {
          if (datos['resultado'] == '1') {
            Swal.fire(
              '¡Bienvenido!',
              '',
              'success'
            );
            this.dismissLoading();
            this.datos.push(datos['usuario']);
            this.router.navigate(['dashboard']);
          }
          else if (datos['resultado'] == '0') {
            return this.http.get(`${this.urlAd}correo=${correo}&pass=${password}`).subscribe(datos => {
              if (datos['resultado'] == '1') {
                Swal.fire(
                  '¡Bienvenido!',
                  '',
                  'success'
                );
                this.dismissLoading();
                this.datos.push(datos['usuario']);
                this.router.navigate(['dashboard']);
              } else {
                Swal.fire({
                  icon: 'error',
                  title: 'Verifica los datos...'
                });
              } this.dismissLoading();
            },
              error => console.log("Hubo un error inesperado\n ¿Tal vez conexión de internet?"));
          } this.dismissLoading();
        },
          error => console.log("Hubo un error inesperado\n ¿Tal vez conexión de internet?"));
      } this.dismissLoading();
    },
      error => console.log("Hubo un error inesperado\n ¿Tal vez conexión de internet?"));
  }*/

  async presentLoading() {
    this.loading = true;
    return await this.loadingController
      .create({
        cssClass: "my-custom-class",
        message: "Iniciando Sesión",
      })
      .then((a) => {
        a.present().then(() => {
          if (!this.loading) {
            a.dismiss();
          }
        });
      });
  }

  async dismissLoading() {
    if (this.loading) {
      this.loading = false;
      return await this.loadingController.dismiss();
    }
    return null;
  }
}
