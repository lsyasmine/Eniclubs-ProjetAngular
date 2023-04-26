import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs'
import { FormLanceClub } from './FormLanceClub/FormLanceClub';
@Injectable({
  providedIn: 'root'
})
export class App1Service {

  private url = "http://localhost:8081/SpringMVC/servlet/";

  constructor(private http: HttpClient) { }

  // Add  - Create
  addFormLanceClub(formLanceClub: FormLanceClub){
   
    return this.http.post<FormLanceClub>(`${this.url}add-FormLanceClub`, formLanceClub)
   
  }

  // Get  - Read
  retrieveAllLanceClub(): Observable<any[]>{
    return this.http.get<any[]>(this.url+'retrieve-all-FormLanceClub')
    
  }
}
