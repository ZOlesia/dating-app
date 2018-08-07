import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:5000/api/auth/';

constructor(private http: HttpClient) { }


  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model)
      .pipe(  // in order to get a token use rxjs6 operators
        map((response: any) => {  // will store token localy so it easier have an access to the token when we have to get it
          const user = response; // user will hold token object which is coming from response as a key "token" and value
          if (user) {
            localStorage.setItem('token', user.token);
          }
        })
      );
    }
}
