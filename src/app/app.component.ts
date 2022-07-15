import { Component } from '@angular/core';
import { Empleados } from './empleados.model';
import { ServicioEmpleadoService } from './servicio-empleado.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmpleadosApp';

  constructor(private miServicio: ServicioEmpleadoService) {
  }
  empleados:Empleados[] = [
    new Empleados("jua","carlos","CEO",50000),
    new Empleados("jua","carlos","Director",40000),
    new Empleados("jua","carlos","Admin",30000),
    new Empleados("jua","carlos","Jefe de seccion",60000),
  ];
  registrar(){
    let miEmpleados = new Empleados(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.miServicio.messageService("el nombre del empleado es" + miEmpleados.nombre)
    this.empleados.push(miEmpleados);
  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;


}
