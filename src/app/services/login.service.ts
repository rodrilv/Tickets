import { Injectable } from "@angular/core";
import { supabase } from "./config/supabase";
@Injectable({
  providedIn: "root",
})
export class LoginService {
  datos: any;
  status: any;
  constructor() {
    this.datos = null;
  }
  async checkIfUser(correo: string, password: string): Promise<boolean>{
    const { data, error } = await supabase
    .from('usuarios')
    .select('*')
    .match( {correo: correo, password: password} );

    if(data.length === 0){
      return false;
    }else{
      this.datos = data;
      return true;
    }
  }

  async checkIfClient(correo: string, password: string): Promise<boolean>{
    const { data, error } = await supabase
    .from('usuarios')
    .select('*')
    .match( {correo: correo, password: password} );
    //console.log(!data);
    if(data.length === 0){
      return false;
    }else{
      this.datos = data;
      return true;
    }
  }
  async login(correo: string, password: string): Promise<boolean>{
    if(await this.checkIfClient(correo, password)){
      this.status = true;
      return true;
    }else if(await this.checkIfUser(correo, password)){
      this.status = true;
      return true;
    }else{
      return false;
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
}
