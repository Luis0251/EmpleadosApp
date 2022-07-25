import { Component, OnInit } from '@angular/core';
import { Empleados } from '../empleados.model';
import { DataService } from '../empleados.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'EmpleadosApp';
  constructor(private dataService: DataService,) { }
  empleados:Empleados[] = [];
  ngOnInit(): void {
   this.dataService.obtenerEmpl().subscribe(data => {console.log(data)
    this.empleados = Object.values(data)
    this.dataService.SetEmpleados(this.empleados);
  });
    //this.empleados = this.dataService.empleados;
  }
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
