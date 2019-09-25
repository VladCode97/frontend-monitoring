import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateClientComponentComponent } from './components/Administrator-Components/create-client-component/create-client-component.component';
import { CreateUserComponentComponent } from './components/Administrator-Components/create-user-component/create-user-component.component';
import { UpdateClientComponentComponent } from './components/Administrator-Components/update-client-component/update-client-component.component';
import { ViewUserstComponentComponent } from './components/Administrator-Components/view-userst-component/view-userst-component.component';
import { ViewUsersComponentComponent } from './components/Administrator-Components/view-users-component/view-users-component.component';
import { ViewClientsComponentComponent } from './components/Administrator-Components/view-clients-component/view-clients-component.component';
import { ViewGraphicClientsComponentComponent } from './components/Administrator-Components/view-graphic-clients-component/view-graphic-clients-component.component';
import { AdministradoComponentComponent } from './components/Administrator-Components/administrado-component/administrado-component.component';
import { AdministratorComponentComponent } from './components/Administrator-Components/administrator-component/administrator-component.component';
import { ViewGraphicClientComponentComponent } from './components/Administrator-Components/view-graphic-client-component/view-graphic-client-component.component';
import { HomeApplicationComponentComponent } from './components/home-application-component/home-application-component.component';
import { NoAuthComponentComponent } from './components/no-auth-component/no-auth-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateClientComponentComponent,
    CreateUserComponentComponent,
    UpdateClientComponentComponent,
    ViewUserstComponentComponent,
    ViewUsersComponentComponent,
    ViewClientsComponentComponent,
    ViewGraphicClientsComponentComponent,
    AdministradoComponentComponent,
    AdministratorComponentComponent,
    ViewGraphicClientComponentComponent,
    HomeApplicationComponentComponent,
    NoAuthComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
