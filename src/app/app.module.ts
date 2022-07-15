import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListEmpleadoComponent } from './list-empleado/list-empleado.component';
import { CaracterEmplComponent } from './caracter-empl/caracter-empl.component';

@NgModule({
  declarations: [
    AppComponent,
    ListEmpleadoComponent,
    CaracterEmplComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
