import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  register(body:any):Observable<any>{
    return this.httpClient.post("http://localhost:8080/register",body)
  }
  login(body:any):Observable<any>{
    return this.httpClient.post("http://localhost:8080/login",body)
  }
}
