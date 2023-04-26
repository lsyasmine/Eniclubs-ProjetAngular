import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidationRService {

  constructor(private http:HttpClient) { }
  removeR(id: number) : Observable<any>{
    return this.http.delete<any>(`http://localhost:8081/SpringMVC/servlet/remove-formR/${id}`)
  }
}