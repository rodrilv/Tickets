import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { GenericService } from "./generic.service";
import { supabase } from "./config/supabase";
import { INewUser } from "../models/userInterfaces.interface";

@Injectable({
  providedIn: "root",
})
export class RegisterService {
  constructor(private router: Router, private generic: GenericService) {}
  loading: any;

  async register(user: INewUser): Promise<boolean>{
    const { data, error } = await supabase.from("cliente").insert(user);
    if (!data  && data.length === 0) {
      console.log(data, error)
      return false;
    } else {
      return true;
    }
  }
  async register_agent(agent: any) {}

  //------------------------------- OLD URL's, just for reference ---------------------------------------------------------------------
  /*url = "https://proyectodbdr.000webhostapp.com/proyecto_ionic/register.php";
  urlA =
    "https://proyectodbdr.000webhostapp.com/proyecto_ionic/register_agent.php";*/
  //----------------------------------------------------------------------------------------------------------------------------------
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
}
