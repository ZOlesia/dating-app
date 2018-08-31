import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:5000/api/auth/';

constructor(private http: HttpClient) { }

// our server will return token as a response so we want to do smth with that token
// and in order to do smth with a token we will use rxjs6 operators
  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model)
      .pipe(  // allows us to chain rxjs operator to our request
        map((response: any) => {  // will store token localy so it easier have an access to the token when we need to get it
          const user = response; // user will hold token object which is coming from response as a key "token" and value
          if (user) {
            localStorage.setItem('token', user['tokenString']); // .token -> this is what coming from the object from our api
          }
        })
      );
    }

    register(model: any) {
      return this.http.post(this.baseUrl + 'register', model);
    }
}
