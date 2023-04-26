import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RespService {

  constructor(private http:HttpClient) { }

  getRespData(code : any){
    return this.http.get('http://localhost:8081/SpringMVC/servlet/resp/'+code);
  }



}