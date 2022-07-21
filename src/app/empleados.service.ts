import { Injectable } from '@angular/core';
import { Empleados } from './empleados.model';
import { ServicioEmpleadoService } from './servicio-empleado.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  empleados:Empleados[] = [
    new Empleados("jua","carlos","CEO",50000),
    new Empleados("jua","carlos","Director",40000),
    new Empleados("jua","carlos","Admin",30000),
    new Empleados("jua","carlos","Jefe de seccion",60000),
  ];
  agregarEm(empleado:Empleados){
    this.mensajeServ.messageService("El empleado registrado con nombre" + "\n" + empleado.nombre + "Tendra un salario de" + "\n" + empleado.salario);
    this.empleados.push(empleado);
  }
  encontrar(indice:number){
    let empleado:Empleados = this.empleados[indice];
    return empleado;
  }
  actualizarEm(indice:number, empleado:Empleados){
    let newEmpleado = this.empleados[indice];
    newEmpleado.nombre=empleado.nombre;
    newEmpleado.apellido=empleado.apellido;
    newEmpleado.cargo=empleado.cargo;
    newEmpleado.salario=empleado.salario;
  }
  eliminarEm(indice:number){
    this.empleados.splice(indice,1);
  }
  constructor(private mensajeServ:ServicioEmpleadoService) { }
}
