import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { BaseService } from '../Base-Service/Base_Service';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  constructor(private baseService: BaseService) {
  }

  createClient(client: any): Observable<any> {
    return this.baseService.create(client, `${environment.hostAdminCreateClient}`);
  }

  createUser(user: any): Observable<any> {
    return this.baseService.create(user, `${environment.hostAdminCreateUser}`);
  }

  updateClient(client: any): Observable<any> {
    return this.baseService.update(client, `${environment.hostAdminUpdateHostClient}`);
  }

  updateStateUser(user: any): Observable<any> {
    return this.baseService.update(user, `${environment.hostAdminUpdateStateUser}`)
  }

  async viewUsers() {
    return await this.baseService.view(environment.hostAdminViewUsers).
      toPromise().
      then((data: any) =>  data).
      catch((error) => error);
  }

  viewClients(): Observable<any> {
    return this.baseService.view(environment.hostAdminViewMetric);
  }

  async filterUserbyRoleTiqal() {
    let arrayUsers = (await this.viewUsers());
    return arrayUsers.filter((element) => element.roleUser === 'USUARIO TIQAL')
  }


}
