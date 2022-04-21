import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';
import Swal from 'sweetalert2';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  ticket=null;
  status: any;
  constructor(private http: HttpClient, private loginService: LoginService) { }
  url="http://proyectodbdr.000webhostapp.com/proyecto_ionic/ticket_control.php";
  urlA="http://proyectodbdr.000webhostapp.com/proyecto_ionic/your_ticket_control.php";
  urlB="http://proyectodbdr.000webhostapp.com/proyecto_ionic/incoming_ticket_control.php";
  urlC="http://proyectodbdr.000webhostapp.com/proyecto_ionic/incoming_ticket_user_control.php";

  sendTicket(ticket: any){
    return this.http.post(this.url, JSON.stringify(ticket)).subscribe(datos => {
      if(datos['resultado'] != '1'){
        Swal.fire({
          icon: 'error',
          title: 'Ha ocurrido un error',
          text: 'Intentalo más tarde...'
        })
      }else{
        Swal.fire({
          icon: 'success',
          title: '¡Tu ticket será atendido en breve!',
        })
      }
    })

    }
    getTickets(){
      let id = this.loginService.datos[0]['id_cliente'];
      return this.http.get(`${this.urlA}?id=${id}`).subscribe(result => this.ticket = result);
    }
    getTicketByStatus(menu: any){
      return this.http.get(`${this.urlB}?menu=${menu}`).subscribe(result => this.ticket = result);
    }
    getPersonalTicketsByStatus(menu: any){
      let id = this.loginService.datos[0]['id_cliente'];
      return this.http.get(`${this.urlC}?menu=${menu}&id=${id}`).subscribe(result => this.ticket = result);
    }
  }
