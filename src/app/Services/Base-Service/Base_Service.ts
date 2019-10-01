import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject } from '@angular/core';
import { map } from 'rxjs/operators';


@Inject({
    providedIn: 'root'
})
export class BaseService {

    public messagesServer: Array<string> = new Array<string>();

    constructor(private httpClient: HttpClient) {
        this.messagesServer.push('Client already exists', 'User already exists', 'Error updating client host. Does not exist', 'No data for this date');
    }

    create(objectCreate: any, routeServer: string): Observable<any> {
        return this.httpClient.post(routeServer, objectCreate, {
            headers: new HttpHeaders({
                token: localStorage.getItem('token'), authorization: localStorage.getItem('authorization')
            })
        }).pipe(map(async (responseServer: any) => {
            let response = (await responseServer);
            console.log(responseServer);
            if (this.messagesServer.includes(response.message)) {
                return response.message;
            }
        }));
    }

    createSpecial(objectCreate: any, routeServer: string): Observable<any> {
        return this.httpClient.post(routeServer, objectCreate, {
            headers: new HttpHeaders({
                token: localStorage.getItem('token'), authorization: localStorage.getItem('authorization')
            })
        }).pipe(map(async (responseServer: any) => {
            let response = (await responseServer);
            console.log(responseServer);
            if (this.messagesServer.includes(response.message)) {
                return response.message;
            }else {
                return response.message;
            }
        }));
    }

    update(objectUpdate: any, routeServer: string): Observable<any> {
        return this.httpClient.put(routeServer, objectUpdate, {
            headers: new HttpHeaders({
                token: localStorage.getItem('token'), authorization: localStorage.getItem('authorization')
            })
        }).pipe(map(async (responseServer: any) => {
            let response = (await responseServer);
            if (this.messagesServer.includes(response.message)) {
                return response.message;
            }else {
                return response.message;
            }
        }));
    }

    view(routeServer: string): Observable<any> {
        return this.httpClient.get(routeServer, {
            headers: new HttpHeaders({
                token: localStorage.getItem('token'), authorization: localStorage.getItem('authorization')
            })
        }).pipe(map(async (responseServer: any) => {
            let response = (await responseServer);
            if (this.messagesServer.includes(response.message)) {
                return response.message;
            }else {
                return response.message;
            }
        }));
    }


}