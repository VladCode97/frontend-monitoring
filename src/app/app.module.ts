import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeApplicationComponent } from './components/home-application-component/home-application.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatIconModule, MatListModule, MatTreeModule, MatSnackBarModule, MatPaginatorModule, MatTableModule, MatDialogModule, MatSelectModule } from '@angular/material';
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
import { ViewUsersComponent } from './components/Administrator-Components/view-users-component/view-users-component.component';
import { UpdateStateUserComponent } from './components/Administrator-Components/update-state-user/update-state-user.component';
import { ViewClientsComponent } from './components/Administrator-Components/view-clients-component/view-clients-component.component';
import { ViewGraphicClientComponent } from './components/Administrator-Components/view-graphic-client-component/view-graphic-client-component.component';
import { ChartsModule } from 'ng2-charts';
import { UserComponent } from './components/user-component/user-component.component';
import { ViewClientsUserComponent } from './components/user-component/view-clients/view-clients.component';
import { HomeUserComponent } from './components/user-component/home-user/home-user.component';


@NgModule({
  declarations: [
    HomeApplicationComponent,
    AppComponent,
    AdministratorComponent,
    HomeAdministratorComponent,
    CreateClientComponent,
    CreateUserComponent,
    UpdateClientComponent,
    ViewUsersComponent,
    UpdateStateUserComponent,
    ViewClientsComponent,
    ViewGraphicClientComponent,
    UserComponent,
    ViewClientsUserComponent,
    HomeUserComponent

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
    MatSnackBarModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule,
    ChartsModule
  ],
  entryComponents: [
    UpdateStateUserComponent,
    ViewGraphicClientComponent
  ],
  providers: [AuthService, AdministradorService, BaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
