import { Injectable, OnInit } from "@angular/core";
import { supabase } from "./config/supabase";

@Injectable({
  providedIn: "root",
})
export class AgentControlService implements OnInit {
  public agents: any;
  constructor() {}

  ngOnInit() {}

  async getActiveAgents() {
    const { data, error }: any = await supabase
      .from("usuarios")
      .select("*")
      .match({ rol: "agent", active: true });

    if (!data) {
      return false;
    } else {
      this.agents = data;
      return true;
    }
  }
  async getDeactivatedAgents() {
    const { data, error }: any = await supabase
      .from("usuarios")
      .select("*")
      .match({ rol: "agent", active: false });

    if (!data) {
      return false;
    } else {
      this.agents = data;
      return true;
    }
  }
  async recoverAgent(correo: string) {
    const { data, error }: any = await supabase
      .from("usuarios")
      .update({ active: true }, { returning: "minimal" })
      .match({ correo: correo });
    if (error) {
      return false;
    } else {
      return true;
    }
  }
  async deactivateAgent(correo: string) {
    const { data, error }: any = await supabase
      .from("usuarios")
      .update({ active: false }, { returning: "minimal" })
      .match({ correo: correo });
    if (error) {
      return false;
    } else {
      return true;
    }
  }
}

// OLD CODE -------------------------------------------------------------------------------------

/*
  url =
    "https://proyectodbdr.000webhostapp.com/proyecto_ionic/active_agent_control.php";
  urlA =
    "https://proyectodbdr.000webhostapp.com/proyecto_ionic/el_agent_control.php";
  urlB =
    "https://proyectodbdr.000webhostapp.com/proyecto_ionic/deleted_agent_control.php";
  urlC =
    "https://proyectodbdr.000webhostapp.com/proyecto_ionic/ap_agent_control.php";


    getActive() {
    return this.http
      .get(`${this.url}`)
      .subscribe((result) => (this.agents = result));
  }
  getNa() {
    return this.http
      .get(`${this.urlB}`)
      .subscribe((result) => (this.agents = result));
  }
  eliminar(correo: string) {
    return this.http
      .get(`${this.urlA}?correo=${correo}`)
      .subscribe((result) => {
        if (result["resultado"] == "1") {
          Swal.fire({
            icon: "success",
            title: "¡Agente Removido!",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Ocurrió un error inesperado, intenta otra vez...",
          });
        }
      });
  }
  recuperar(correo: string) {
    return this.http
      .get(`${this.urlC}?correo=${correo}`)
      .subscribe((result) => {
        if (result["resultado"] == "1") {
          Swal.fire({
            icon: "success",
            title: "¡Agente Recuperada!",
          });
          this.getNa();
        } else {
          Swal.fire({
            icon: "error",
            title: "Ocurrió un error inesperado, intenta otra vez...",
          });
        }
      });


  */

//-----------------------------------------------------------------------------------------------
