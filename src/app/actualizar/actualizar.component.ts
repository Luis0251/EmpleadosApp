import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empleados } from '../empleados.model';
import { DataService } from '../empleados.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

  constructor(private router:ActivatedRoute, private dataService:DataService) { }
  empleados:Empleados[] = [];
  ngOnInit(): void {
    this.empleados=this.dataService.empleados;
    this.indice=this.router.snapshot.params['id']
    let empleado:Empleados=this.dataService.encontrar(this.indice)
    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroSalario = empleado.salario;
    this.cuadroCargo = empleado.cargo;

  }
  actualizar(){

  }
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:Number=0;
  indice:number;
}
