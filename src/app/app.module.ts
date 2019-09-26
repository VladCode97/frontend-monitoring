import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeApplicationComponent } from './components/home-application-component/home-application.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatIconModule, MatListModule, MatTreeModule, MatSnackBarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AdministratorComponent } from './components/Administrator-Components/administrator-component/administrator.component';
import { AuthService } from './Services/Auth-Service/auth-service.service';
import { HomeAdministratorComponent } from './components/Administrator-Components/home-administrator/home-administrator.component';
import { CreateClientComponent } from './components/Administrator-Components/create-client-component/create-client-component.component';
import { AdministradorService } from './Services/Administrador-Service/administrador.service';
import { CreateUserComponent } from './components/Administrator-Components/create-user-component/create-user-component.component';
import { UpdateClientComponent } from './components/Administrator-Components/update-client-component/update-client-component.component';
import { BaseService } from './Services/Base-Service/Base_Service';

@NgModule({
  declarations: [
    HomeApplicationComponent,
    AppComponent,
    AdministratorComponent,
    HomeAdministratorComponent,
    CreateClientComponent,
    CreateUserComponent,
    UpdateClientComponent
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
    MatTreeModule,
    MatSnackBarModule
  ],
  providers: [AuthService, AdministradorService, BaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
