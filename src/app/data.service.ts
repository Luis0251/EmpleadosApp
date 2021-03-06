import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleados } from "./empleados.model";

@Injectable()
export class DataSql{
constructor(private httpClient: HttpClient){
}
cargarEmpleados(){

  return this.httpClient.get('https://app-angular-376e9-default-rtdb.firebaseio.com/datos.json');
}
guardarEmpleados(empleados:Empleados[]){
    this.httpClient.put('https://app-angular-376e9-default-rtdb.firebaseio.com/datos.json',empleados).subscribe(
    response => console.log("Se han guardado los empleados " + response),
    error => console.log("Error" + error));
}

actualizarEmpleados(indice:number,empleados:Empleados){
let url = 'https://app-angular-376e9-default-rtdb.firebaseio.com/datos/'+indice+'.json'
this.httpClient.put(url,empleados).subscribe(
    response => console.log("Se han actualizado los empleados " + response),
    error => console.log("Error" + error));
}
EliminarEmplados(indice:number){
  let url = 'https://app-angular-376e9-default-rtdb.firebaseio.com/datos/'+indice+'.json'
  this.httpClient.delete(url).subscribe(
      response => console.log("Se ha eliminado los empleados " + response),
      error => console.log("Error" + error));
  }
}
