import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { App1Service } from 'src/app/app1.service';
import { ValidationLService } from './validation-l.service';
import { ClubService } from '../espaceAdmin/club.service';
import { club } from '../espaceAdmin/club';
import { FormLanceClub } from 'src/app/FormLanceClub/FormLanceClub';

@Component({
  selector: 'app-tabLanceClub',
  templateUrl: './tabLanceClub.component.html',
  styleUrls: ['./tabLanceClub.component.scss']
})
export class RegisterComponent implements OnInit {

  listes: any[] | undefined
    form :  FormLanceClub 

  url: string = "http://localhost:8081/SpringMVC/servlet/";
  clubs2: any [];

  constructor(private service: App1Service,private serviceL: ValidationLService, private serviceC: ClubService) { 
   
  }

  ngOnInit(): void {
    this.service.retrieveAllLanceClub().subscribe(data => {
      this.listes = data;
    })
    this.serviceC.getClubs2().subscribe(data => {
      this.clubs2 = data;
    })
  

  }



  removeL(id: number){
    this.serviceL.removeL(id).subscribe(data => {
       this.listes = this.listes?.filter(club => club.id !== id);
     })
     
   
   }
  

}
