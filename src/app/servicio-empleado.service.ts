import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadoService {

  messageService(mensaje: string){
    alert(mensaje);
  }
  constructor() { }
}
