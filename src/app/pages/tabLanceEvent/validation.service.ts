import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor(private http:HttpClient) { }
   removeE(id: number) : Observable<any>{
    return this.http.delete<any>(`http://localhost:8081/SpringMVC/servlet/remove-form/${id}`)
  }
}