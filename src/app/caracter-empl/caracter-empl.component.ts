import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicioEmpleadoService } from '../servicio-empleado.service';

@Component({
  selector: 'app-caracter-empl',
  templateUrl: './caracter-empl.component.html',
  styleUrls: ['./caracter-empl.component.css']
})
export class CaracterEmplComponent implements OnInit {
  @Output() caracter = new EventEmitter<string>();

  /**constructor(private miServicio:ServicioEmpleadoService){
  }**/
  addCaracter(value: string) {
   // this.miServicio.messageService(value)
    this.caracter.emit(value);}

  ngOnInit(): void {
  }

}
