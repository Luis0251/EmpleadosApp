import { Component, Input, OnInit } from '@angular/core';
import { Empleados } from '../empleados.model';

@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.css']
})
export class ListEmpleadoComponent implements OnInit {
    @Input() empleadoList : Empleados;
  ngOnInit(): void {
  }
    newCaracter = [''];
    addCaracters(newItem: string) {
      this.newCaracter.push(newItem);
    }

}
