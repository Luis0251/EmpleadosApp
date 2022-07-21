import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleados } from '../empleados.model';
import { DataService } from '../empleados.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

  constructor(private router:ActivatedRoute, private dataService:DataService,private routers: Router) { }
  empleados:Empleados[] = [];
  Accion:number;
  ngOnInit(): void {
    this.Accion=parseInt(this.router.snapshot.queryParams['accion'])
    this.empleados=this.dataService.empleados;
    this.indice=this.router.snapshot.params['id']
    let empleado:Empleados=this.dataService.encontrar(this.indice)
    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroSalario = empleado.salario;
    this.cuadroCargo = empleado.cargo;

  }
 /* actualizar(){
    let miEmpleados = new Empleados(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //this.miServicio.messageService("el nombre del empleado es" + miEmpleados.nombre)
    this.dataService.actualizarEm(this.indice,miEmpleados);
    this.routers.navigate(['']);
  }
  eliminar(){
    this.dataService.eliminarEm(this.indice);
    this.routers.navigate(['']);
  }*/
  accion(){
    if(this.Accion == 1){
      let miEmpleados = new Empleados(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
      //this.miServicio.messageService("el nombre del empleado es" + miEmpleados.nombre)
      this.dataService.actualizarEm(this.indice,miEmpleados);
      this.routers.navigate(['']);}
      else{this.dataService.eliminarEm(this.indice);
      this.routers.navigate(['']);
    }
  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
  indice:number;
}
