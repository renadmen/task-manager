import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  constructor(private http: HttpClient) {
  }

  get(uri: string) {
    return this.http.get(`${environment.baseUrl}/${uri}`);
  }

  post(uri: string, payload: Object) {
    return this.http.post(`${environment.baseUrl}/${uri}`, payload);
  }

  patch(uri: string, payload: Object) {
    return this.http.patch(`${environment.baseUrl}/${uri}`, payload);
  }

  delete(uri: string) {
    return this.http.delete(`${environment.baseUrl}/${uri}`);
  }

  getTasks(uri: string, payload: Object) {
    return this.http.get(`${environment.baseUrl}/${uri}`, payload);
  }

  login(email: string, password: string){
    return this.http.post(`${environment.baseUrl}/users/login`,{
      email,
      password
    },{
      observe: 'response'
    }
    )
  }

  signup(email: string, password: string) {
    return this.http.post(`${environment.baseUrl}/users`, {
      email,
      password
    }, {
        observe: 'response'
      });
  }




}
