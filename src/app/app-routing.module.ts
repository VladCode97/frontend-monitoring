import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeApplicationComponent } from './components/home-application-component/home-application.component';
import { AdministratorComponent } from './components/Administrator-Components/administrator-component/administrator.component';
import { AuthWebGuard } from './Guards/Auth_Guard';
import { HomeAdministratorComponent } from './components/Administrator-Components/home-administrator/home-administrator.component';
import { CreateClientComponent } from './components/Administrator-Components/create-client-component/create-client-component.component';
import { CreateUserComponent } from './components/Administrator-Components/create-user-component/create-user-component.component';
import { UpdateClientComponent } from './components/Administrator-Components/update-client-component/update-client-component.component';


const routes: Routes = [
  { path: 'home', component: HomeApplicationComponent },
  { path: '', component: HomeApplicationComponent },
  {
    path: 'admin', component: AdministratorComponent, canActivate: [AuthWebGuard],
    children: [
      {path: '', component: HomeAdministratorComponent},
      {path: 'create/clients', component: CreateClientComponent},
      {path: 'create/users', component: CreateUserComponent},
      {path: 'update/client', component: UpdateClientComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
