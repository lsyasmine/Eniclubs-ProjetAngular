import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs'
import { FormRenouvellement } from './FormRenouvellement/FormRenouvellement';
@Injectable({
  providedIn: 'root'
})
export class App2Service {

  private url = "http://localhost:8081/SpringMVC/servlet/";

  constructor(private http: HttpClient) { }

  // Add  - Create
  addFormRenouvellement(FormRenouvellement: FormRenouvellement){
   
    return this.http.post<FormRenouvellement>(`${this.url}add-FormRenouvellement`, FormRenouvellement)
   
  }

  // Get  - Read
  retrieveAllFormRenouvellement(): Observable<any[]>{
    return this.http.get<any[]>(this.url+'retrieve-all-FormRenouvellement')
    
  }
}
