import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeApplicationComponent } from './components/home-application-component/home-application.component';


const routes: Routes = [
  {path: 'home', component: HomeApplicationComponent},
  {path: '', component: HomeApplicationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
