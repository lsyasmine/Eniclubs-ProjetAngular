import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) {}
    getEvents(): Observable<any[]>{
      return this.http.get<any[]>('http://localhost:8081/SpringMVC/servlet/retrieve-all-events');
    }

    removeEvent(id: number) : Observable<any>{
      return this.http.delete<any>(`http://localhost:8081/SpringMVC/servlet/remove-event/${id}`)
    }
    
   
}