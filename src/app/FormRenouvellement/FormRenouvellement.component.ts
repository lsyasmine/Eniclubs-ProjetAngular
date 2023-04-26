import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { App2Service } from 'src/app/app2.service';
import { ValidationRService } from './validation-r.service';
//import { FormRenouvellement } from 'src/app/RenouvClub/FormRenouvellement';
import { club } from 'src/app/pages/espaceAdmin/club';
import { ClubService } from 'src/app/pages/espaceAdmin/club.service';


@Component({
  selector: 'app-FormRenouvellement',
  templateUrl: './FormRenouvellement.component.html',
  styleUrls: ['./FormRenouvellement.component.css']
})
export class AbscenceEnsComponent implements OnInit {
  



  renouvs: any[] | undefined
  clubs : any [] | undefined

  constructor(private service: App2Service,private serviceR:ValidationRService,private serviceC: ClubService) { }

  ngOnInit(): void {
    this.service.retrieveAllFormRenouvellement().subscribe(data => {
      this.renouvs = data;
    })
   
  }

  removeR(id: number){
    this.serviceR.removeR(id).subscribe(data => {
       this.renouvs = this.renouvs?.filter(renv => renv.id !== id);
     })
     
   
   }
   removeClub(id: number){
    this.serviceC.removeClub(id).subscribe(data => {
      this.clubs = this.clubs?.filter(club => club.id !== id);
    })
    setTimeout(()=>{
      window.location.reload();
    }, 100);
}
}
