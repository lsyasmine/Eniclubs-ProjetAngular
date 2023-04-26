import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { club } from './club';
import { FormLanceClub } from 'src/app/FormLanceClub/FormLanceClub';
@Injectable({
  providedIn: 'root'
})
export class ClubService {
  getClubs2() {
    return this.http.get<any[]>('http://localhost:8081/SpringMVC/servlet/retrieve-all-FormLanceClub');
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }
  getClubs(): Observable<any[]>{
    return this.http.get<any[]>('http://localhost:8081/SpringMVC/servlet/retrieve-all-clubs');
  }
  /*getClubs2(): Observable<any[]>{
    return this.http.get<any[]>('http://localhost:8081/SpringMVC/servlet/retrieve-all-FormLanceClub');
  }*/
  removeClub(id: number) : Observable<any>{
    return this.http.delete<any>(`http://localhost:8081/SpringMVC/servlet/remove-club/${id}`)
  }

 
}