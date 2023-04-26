import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs'
import { FormLanceEvent } from './FormLanceEvent/FormLanceEvent';
import { club } from './pages/espaceAdmin/club';
import { event } from './pages/espaceAdmin/event';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url = "http://localhost:8081/SpringMVC/servlet/";

  constructor(private http: HttpClient) { }

  // Add  - Create
  addFormLanceEvent(formLanceEvent: FormLanceEvent){
   
    return this.http.post<FormLanceEvent>(`${this.url}add-FormLanceEvent`, formLanceEvent)
   // return this.http.get(`http://localhost:8081/SpringMVC/servlet/add-FormLanceEvent`, {responseType: 'text'})
  }

  // Get  - Read
  retrieveAllLanceEvent(): Observable<any[]>{
    return this.http.get<any[]>(this.url+'retrieve-all-FormLanceEvent')
    
  }
  updateClub(id?: number ,club?: any): Observable<any>{
    return this.http.put<any>(`${this.url}modify-club/${id}`, club)
  }

  // Get  - Read
  getClubs(): Observable<any[]>{
    return this.http.get<any[]>(this.url+'retrieve-all-clubs')
  }
   // Get  by Id - Read
   getClubById(id: number): Observable<club>{
    return this.http.get<club>(`${this.url}getclubbyid/${id}`)
  }

  updateEvent(id?: number ,event?: any): Observable<any>{
    return this.http.put<any>(`${this.url}modify-event/${id}`, event)
  }

   // Get  by Id - Read
   getEventById(id: number): Observable<event>{
    return this.http.get<event>(`${this.url}geteventbyid/${id}`)
  }
}
