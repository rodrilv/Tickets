import { Component, OnInit } from '@angular/core';
import { AppAvailability } from '@ionic-native/app-availability/ngx';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = { id: null, nombre: null, apellido_p: null, apellido_m: null, correo: null, password: null, ubicacion: null, telefono: null, rol: null }
  datos: any;
  checked: any;
  constructor(
    private appAvailability: AppAvailability,
    private platform: Platform,
    private router: Router,
    private loginService: LoginService) { }
  ngOnInit() {
    if (window.localStorage.getItem('pass') == null && window.localStorage.getItem('correo') == null) {
      console.log("vacio");
    } else {
      this.user.correo = window.localStorage.getItem('correo');
      this.user.password = window.localStorage.getItem('pass');
      //document.getElementById('correo').value = window.localStorage.getItem('correo');
      //document.getElementById('password').value = window.localStorage.getItem('pass');
      //document.in.correo.value = window.localStorage.getItem('correo');
      //document.in.password.value = window.localStorage.getItem('pass');
      //this.loginService.login(window.localStorage.getItem('correo'), window.localStorage.getItem('pass'));
    }
  }
  login() {
    this.loginService.login(this.user.correo, this.user.password);
    this.loginService.status = true;
    if (this.checked) {
      window.localStorage.setItem('correo', this.user.correo);
      window.localStorage.setItem('pass', this.user.password);
      console.log(this.checked);
    } else {
      console.log('Remember me Disabled');
      window.localStorage.clear();
    }
  }
}
