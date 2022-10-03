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
  };
  checked: any;
  constructor(
    private loginService: LoginService, 
    private router: Router, 
    private generics: GenericService,
    private swal: SwalService
    ) {}

  async ngOnInit() {

  }
  async login(): Promise<void>{
    this.generics.presentLoading("Iniciando Sesión");
    await this.loginService.login(this.user.correo, this.user.password)
      ? this.router.navigate(["dashboard"])
      : this.swal.fireWarning("Tu cuenta aún no ha sido aprobada o los datos introducidos son erróneos.")
    this.generics.dismissLoading();
    console.log(this.loginService.datos);
  }
}
