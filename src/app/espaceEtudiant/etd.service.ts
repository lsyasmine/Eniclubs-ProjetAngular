import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EtdService {

  constructor(private http:HttpClient) { }
  getEtdData(num_carteEtd : any){
    return this.http.get('http://localhost:8081/SpringMVC/servlet/etd/'+num_carteEtd);
  }


}