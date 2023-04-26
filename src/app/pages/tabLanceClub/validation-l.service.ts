
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClubService } from '../espaceAdmin/club.service';
import { club } from '../espaceAdmin/club';
import { FormLanceClub } from 'src/app/FormLanceClub/FormLanceClub';

@Injectable({
  providedIn: 'root'
})
export class ValidationLService {
    private url ="http://localhost:8081/SpringMVC/servlet/"

  constructor(private http:HttpClient , private serviceC: ClubService) { }
  
/*getClubs2(): Observable<any[]>{
    return this.http.get<any[]>('http://localhost:8081/SpringMVC/servlet/retrieve-all-FormLanceClub');
  }*/
  removeL(id: number) : Observable<any>{
    return this.http.delete<any>(`http://localhost:8081/SpringMVC/servlet/remove-formL/${id}`)
  }

  
}