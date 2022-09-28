import { Injectable } from "@angular/core";
import { title } from "process";
import Swal from "sweetalert2";

@Injectable({
  providedIn: "root",
})
export class SwalService {
  constructor() {}

  fireSuccess(text: string) {
    Swal.fire({
      icon: "success",
      title: "Bien",
      text: `${text}`,
    });
  }
  fireWarning(text: string) {
    Swal.fire({
      icon: "warning",
      title: "Aviso",
      text: `${text}`,
    });
  }
  fireError(text: string) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: `${text}`,
    });
  }
}
