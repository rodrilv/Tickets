import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { supabase } from "./config/supabase";
@Injectable({
  providedIn: "root",
})
export class ClientControlService {
  public clients: any;

  constructor(private http: HttpClient) {}

  async getIncomingClients() {
    const { data, error }: any = await supabase
      .from("cliente")
      .select("*")
      .match({ aud: false });
    if (!data) {
      return false;
    } else {
      this.clients = data;
      return true;
    }
  }
  async getActiveClients() {
    const { data, error }: any = await supabase
      .from("cliente")
      .select("*")
      .match({ active: true, aud: true });
    if (error) {
      return false;
    } else {
      this.clients = data;
    }
  }
  async getUnsubscribedClients() {
    const { data, error }: any = await supabase
      .from("cliente")
      .select("*")
      .match({ active: false, aud: true });
    if (error) {
      return false;
    } else {
      this.clients = data;
    }
  }
  async aproveClient(correo: string) {
    const { data, error }: any = await supabase
      .from("cliente")
      .update({ aud: true }, { returning: "minimal" })
      .match({ correo: correo });
    if (error) {
      return false;
    } else {
      return true;
    }
  }
  async deactivateClient(correo: string) {
    const { data, error }: any = await supabase
      .from("cliente")
      .update({ active: false }, { returning: "minimal" })
      .match({ correo: correo });
    if (error) {
      return false;
    } else {
      return true;
    }
  }
  async deleteIncoming(correo: string) {
    const { data, error }: any = await supabase
      .from("cliente")
      .delete({ returning: "minimal" })
      .match({ correo: correo });
    if (error) {
      return false;
    } else {
      return true;
    }
  }
  async recoverDeactivatedClient(correo: string) {
    const { data, error }: any = await supabase
      .from("cliente")
      .update({ active: true }, { returning: "minimal" })
      .match({ correo: correo });
    if (error) {
      return false;
    } else {
      return true;
    }
  }
}

// OLD URL's and code -------------------------------------------------------------------------------------------------

/*url="https://proyectodbdr.000webhostapp.com/proyecto_ionic/client_control.php";
  urlA="https://proyectodbdr.000webhostapp.com/proyecto_ionic/ap_client_control.php";
  urlB="https://proyectodbdr.000webhostapp.com/proyecto_ionic/el_client_control.php";
  urlC="https://proyectodbdr.000webhostapp.com/proyecto_ionic/active_client_control.php";
  urlD="https://proyectodbdr.000webhostapp.com/proyecto_ionic/deleted_client_control.php";*/

/*

  getActive(){
    return this.http.get(`${this.urlC}`).subscribe(result => this.clients = result);
  }
  getna(){
    return this.http.get(`${this.urlD}`).subscribe(result => this.clients = result);
  }
  getIncoming(){
    return this.http.get(`${this.url}`).subscribe(result => this.clients = result);
  }
  
  aprobar(correo: string){
    return this.http.get(`${this.urlA}?correo=${correo}`).subscribe(result =>{
      if(result['resultado']=='1'){
        Swal.fire({
          icon: 'success',
          title: '¡Cuenta Verificada!'
        });
        this.getIncoming();
      }else{
        Swal.fire({
          icon: 'error',
          title:'Ocurrió un error inesperado, intenta otra vez...'
        });
      }
    })
  }
  eliminar(correo: string){
    return this.http.get(`${this.urlB}?correo=${correo}`).subscribe(result =>{
      if(result['resultado']=='1'){
        Swal.fire({
          icon: 'success',
          title: '¡Cuenta Removida!'
        });
      }else{
        Swal.fire({
          icon: 'error',
          title:'Ocurrió un error inesperado, intenta otra vez...'
        });
      }
    })
  }
  recuperar(correo: string){
    return this.http.get(`${this.urlA}?correo=${correo}`).subscribe(result =>{
      if(result['resultado']=='1'){
        Swal.fire({
          icon: 'success',
          title: '¡Cuenta Recuperada!'
        });
        this.getna();
      }else{
        Swal.fire({
          icon: 'error',
          title:'Ocurrió un error inesperado, intenta otra vez...'
        });
      }
    })

  }*/
