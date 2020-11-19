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
    return this.http.get(`${uri}`);
  }

  post(uri: string, payload: Object) {
    return this.http.post(`${uri}`, payload);
  }

  patch(uri: string, payload: Object) {
    return this.http.patch(`${uri}`, payload);
  }

  delete(uri: string) {
    return this.http.delete(`${uri}`);
  }

  getTasks(uri: string, payload: Object) {
    return this.http.get(`${uri}`, payload);
  }

  login(email: string, password: string){
    return this.http.post(`users/login`,{
      email,
      password
    },{
      observe: 'response'
    }
    )
  }

  signup(email: string, password: string) {
    return this.http.post(`users`, {
      email,
      password
    }, {
        observe: 'response'
      });
  }




}
