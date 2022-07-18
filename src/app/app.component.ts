import { Component, OnInit } from '@angular/core';
import { Empleados } from './empleados.model';
import { DataService } from './empleados.service';
import { ServicioEmpleadoService } from './servicio-empleado.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'EmpleadosApp';

  constructor(/*private miServicio: ServicioEmpleadoService,*/ private dataService: DataService) {
  }
  ngOnInit(): void {
    this.empleados = this.dataService.empleados;
  }
  empleados:Empleados[] = [];
  registrar(){
    let miEmpleados = new Empleados(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //this.miServicio.messageService("el nombre del empleado es" + miEmpleados.nombre)
    this.dataService.agregarEm(miEmpleados);
  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;


}
