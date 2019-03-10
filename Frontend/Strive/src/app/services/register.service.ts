import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(public http: HttpClient) { 

  }

  registerUser(username, password, fullname, email): Observable <any>{
    return this.http.post('http://localhost:3000/api/signup/user', {
      username: username,
      password: password,
      fullname: fullname,
      email: email
    });
  }

  loginUser(username ,password): Observable <any>{
    return this.http.post('http://localhost:3000/api/login/user', {
      username: username,
      password: password
    });
  }
}
