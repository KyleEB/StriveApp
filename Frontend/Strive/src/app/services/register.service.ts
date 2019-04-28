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

  changePasswordUser(username, password): Observable <any>{
    return this.http.post('http://localhost:3000/api/changepassword/user', {
      username: username,
      password: password
    });
  }

  updateCards(username, password, cards): Observable <any>{
    return this.http.post('http://localhost:3000/api/updatecards/user', {
      username: username,
      password: password,
      cards: cards
    });
  }

  updateSubscribed(username, password, subscribed): Observable <any>{
    return this.http.post('http://localhost:3000/api/subscribe/user', {
      username: username,
      password: password,
      subscribed: subscribed
    });
  }
}
