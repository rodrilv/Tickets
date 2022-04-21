import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { LoginService } from '../services/login.service'
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage{
  constructor(
    private menu: MenuController, 
    private router: Router, 
    private platform: Platform, 
    private loginService: LoginService,
    private ticketService: TicketService,
    ){
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigate(["/dashboard"])
    });
  }
  loading: any;
  ngOnInit(){
    if(this.loginService.datos != null){
    document.getElementById('grt').innerHTML = "Hola, "+this.loginService.datos[0]['nombre'];
    console.log("Successful");
    }else{
      this.router.navigate(['/login']);
    }
  }
  
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  logOut(){
    this.menu.close('first');
    location.replace('/login')
      }
    toSettings(){
    this.router.navigate(["dashboard/tab3"]);
    this.menu.close('first');
    }
    getTicket(){
      if(this.loginService.datos[0]['cliente']){
      this.ticketService.getTickets();
      }else if(this.loginService.datos[0]['administrador'] || this.loginService.datos[0]['agente']){
        this.ticketService.getTicketByStatus(this.ticketService.status);
      }
    }
  }
  
