import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http:HttpClient) { }

  getAdminData(prenom : any ,nom: any,email : any ,mdp : any,code : any){
    return this.http.get('http://localhost:8081/SpringMVC/servlet/admin/'+prenom+'/'+nom+'/'+email+'/'+mdp+'/'+code);
  }


}



 