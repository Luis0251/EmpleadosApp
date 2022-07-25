import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListEmpleadoComponent } from './list-empleado/list-empleado.component';
import { CaracterEmplComponent } from './caracter-empl/caracter-empl.component';
import { ServicioEmpleadoService } from './servicio-empleado.service';
import { DataService } from './empleados.service';
import { HomeComponent } from './home/home.component';
import { QuienSomosComponent } from './quien-somos/quien-somos.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { ComponenErrorComponent } from './componen-error/componen-error.component';
import { DataSql } from './data.service';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  {path: 'contact', component: ContactComponent},
  {path: '', component: HomeComponent},
  {path: 'QuienesSomos', component:QuienSomosComponent},
  {path: 'actualizar/:id', component:ActualizarComponent},
  {path: '**', component:ComponenErrorComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    ListEmpleadoComponent,
    CaracterEmplComponent,
    HomeComponent,
    QuienSomosComponent,
    ContactComponent,
    ActualizarComponent,
    ComponenErrorComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ServicioEmpleadoService,DataService,DataSql],
  bootstrap: [AppComponent]
})
export class AppModule { }
