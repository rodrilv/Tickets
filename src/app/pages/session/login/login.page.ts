import { Component, OnInit } from "@angular/core";
import { LoginService } from "../../../services/login.service";
import { Router } from "@angular/router";
import { GenericService } from "src/app/services/generic.service";
import { SwalService } from "src/app/services/swal.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  user = {
    correo: null,
    password: null,
    checked: null,
  };
  
  options: Array<any>;
  constructor(
    private loginService: LoginService, 
    private router: Router, 
    private generics: GenericService,
    private swal: SwalService
    ) {}

  async ngOnInit() {
    
  }
  async login(): Promise<void>{
    if(this.user.checked){
      this.options.push(this.user);
      localStorage.setItem('data', JSON.stringify(this.options));
    }
    this.generics.presentLoading("Iniciando Sesión");
    await this.loginService.login(this.user.correo, this.user.password)
      ? this.router.navigate(["dashboard"])
      : this.swal.fireWarning("Hubo un problema con iniciar sesión, si el problema persiste, ponte en contacto con soporte")
    this.generics.dismissLoading();
    
  }
}
