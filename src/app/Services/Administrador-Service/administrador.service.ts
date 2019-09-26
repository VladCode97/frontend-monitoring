import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  createClient(client: any): Observable<any> {
    return this.httpClient.post(`${environment.hostAdminCreateClient}`, client, {
      headers: new HttpHeaders({
        token: localStorage.getItem('token'), authorization: localStorage.getItem('authorization')
      })
    }).pipe(map(async (responseServer: any) => {
      let response = (await responseServer);
      console.log(response.message);
      if (response.message === 'Client already exists') {
        return response.message;
      } else {
        return this.router.navigateByUrl('/admin');
      }
    }));
  }

}
