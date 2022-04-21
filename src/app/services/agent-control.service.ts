import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
  })
  export class AgentControlService{
      agents=null;
      url="https://proyectodbdr.000webhostapp.com/proyecto_ionic/active_agent_control.php";
      urlA="https://proyectodbdr.000webhostapp.com/proyecto_ionic/el_agent_control.php";
      urlB="https://proyectodbdr.000webhostapp.com/proyecto_ionic/deleted_agent_control.php";
      urlC="https://proyectodbdr.000webhostapp.com/proyecto_ionic/ap_agent_control.php";

      constructor(private http: HttpClient){}

      getActive(){
        return this.http.get(`${this.url}`).subscribe(result => this.agents = result);
      }
      getNa(){
        return this.http.get(`${this.urlB}`).subscribe(result => this.agents = result);
      }
      eliminar(correo: string){
        return this.http.get(`${this.urlA}?correo=${correo}`).subscribe(result =>{
            if(result['resultado']=='1'){
              Swal.fire({
                icon: 'success',
                title: '¡Agente Removido!'
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
        return this.http.get(`${this.urlC}?correo=${correo}`).subscribe(result =>{
            if(result['resultado']=='1'){
              Swal.fire({
                icon: 'success',
                title: '¡Agente Recuperada!'
              });
              this.getNa();
            }else{
              Swal.fire({
                icon: 'error',
                title:'Ocurrió un error inesperado, intenta otra vez...'
              });
            }
          })
      }
  }