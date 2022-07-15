import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-caracter-empl',
  templateUrl: './caracter-empl.component.html',
  styleUrls: ['./caracter-empl.component.css']
})
export class CaracterEmplComponent implements OnInit {
  @Output() caracter = new EventEmitter<string>();
  addCaracter(value: string) {
    this.caracter.emit(value);}

  ngOnInit(): void {
  }

}
