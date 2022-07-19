import { Component, OnInit } from '@angular/core';
import { Empleados } from '../empleados.model';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

  constructor() { }
  empleados:Empleados[] = [];
  ngOnInit(): void {
  }
  actualizar(){

  }
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
}
