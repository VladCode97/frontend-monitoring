import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  constructor(private httpClient: HttpClient, private httpRouter: Router) { }

  signIn(userAuth: any): Observable<any> {
    return this.httpClient.post(`${environment.hostSignIn}`, userAuth).pipe(map(async (responseServer: any) => {
      let response = (await responseServer.message);
      if (response === 'User not found' || response === 'Password Incorrect') {
        return response;
      } else {
        localStorage.setItem('token', response);
        localStorage.setItem('authorization', `${true}`);
        return this.httpRouter.navigateByUrl('/home');
      }
    }));
  }

}
