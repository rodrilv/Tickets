import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ClientControlService {
  url="https://proyectodbdr.000webhostapp.com/proyecto_ionic/client_control.php";
  urlA="https://proyectodbdr.000webhostapp.com/proyecto_ionic/ap_client_control.php";
  urlB="https://proyectodbdr.000webhostapp.com/proyecto_ionic/el_client_control.php";
  urlC="https://proyectodbdr.000webhostapp.com/proyecto_ionic/active_client_control.php";
  urlD="https://proyectodbdr.000webhostapp.com/proyecto_ionic/deleted_client_control.php";
  clients= null;

  constructor( private http: HttpClient) { }

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

  }
}
