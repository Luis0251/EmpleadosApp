import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleados } from '../empleados.model';
import { DataService } from '../empleados.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }
  empleados:Empleados[] = [];
  ngOnInit(): void {
    this.empleados = this.dataService.empleados;
  }
  registrar(){
    let miEmpleados = new Empleados(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //this.miServicio.messageService("el nombre del empleado es" + miEmpleados.nombre)
    this.dataService.agregarEm(miEmpleados);
    this.router.navigate(['']);
  }
  volver(){
    this.router.navigate(['']);
  }
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
}


