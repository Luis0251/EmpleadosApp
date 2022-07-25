import { Injectable } from '@angular/core';
import { DataSql } from './data.service';
import { Empleados } from './empleados.model';
import { ServicioEmpleadoService } from './servicio-empleado.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private mensajeServ:ServicioEmpleadoService, private data:DataSql) { }
  empleados:Empleados[] = [];
  SetEmpleados(misEmpleados:Empleados[]){
    this.empleados = misEmpleados;
  }
  obtenerEmpl(){
    return this.data.cargarEmpleados();
  }
  /*empleados:Empleados[] = [
    new Empleados("jua","carlos","CEO",50000),
    new Empleados("jua","carlos","Director",40000),
    new Empleados("jua","carlos","Admin",30000),
    new Empleados("jua","carlos","Jefe de seccion",60000),
  ];*/
  agregarEm(empleado:Empleados){
    this.mensajeServ.messageService("El empleado registrado con nombre" + "\n" + empleado.nombre + "Tendra un salario de" + "\n" + empleado.salario);
    this.empleados.push(empleado);
    this.data.guardarEmpleados(this.empleados);
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

    this.data.actualizarEmpleados(indice,empleado);
  }
  eliminarEm(indice:number){
    this.empleados.splice(indice,1);
    this.data.EliminarEmplados(indice);
    this.data.guardarEmpleados(this.empleados);
  }

}
