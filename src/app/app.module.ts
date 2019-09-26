import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeApplicationComponent } from './components/home-application-component/home-application.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatIconModule, MatListModule, MatTreeModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AdministratorComponent } from './components/Administrator-Components/administrator-component/administrator.component';
import { AuthService } from './Services/Auth-Service/auth-service.service';
import { HomeAdministratorComponent } from './components/Administrator-Components/home-administrator/home-administrator.component';
import { CreateClientComponent } from './components/Administrator-Components/create-client-component/create-client-component.component';
import { AdministradorService } from './Services/Administrador-Service/administrador.service';

@NgModule({
  declarations: [
    HomeApplicationComponent,
    AppComponent,
    AdministratorComponent,
    HomeAdministratorComponent,
    CreateClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    RouterModule,
    MatIconModule,
    MatListModule,
    MatTreeModule
  ],
  providers: [AuthService, AdministradorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
