import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RespService } from './resp.service';
import { EtdService } from './etd.service';

@Component({
  selector: 'app-espaceEtudiant',
  templateUrl: './espaceEtudiant.component.html',
  styleUrls: ['./espaceEtudiant.component.css']
})
export class EmploiExaComponent implements OnInit  {
  model: any = {}

  getData: boolean;
   constructor(private respservice :RespService
     ,private router :Router , private etdservice:EtdService) {}
 
   ngOnInit() {
   }
   ngOnDestroy() {
   }
 
   loginResp1(){//formulaire lancement event 
    
     var code = this.model.code;
 
     this.respservice.getRespData(code).subscribe((res:boolean)=>{
       this.getData = res;
       if(this.getData == true){
         console.log("hello");
         this.router.navigate(["/ajout-prof"]);
       } 
       else {
         alert("Invalide responsable");
        console.log("erreur");
       }
     });
    }
    
   loginResp2(){//formulaire renouvellement
    
    var code = this.model.code;

    this.respservice.getRespData(code).subscribe((res:boolean)=>{
      this.getData = res;
      if(this.getData == true){
        console.log("hello");
        this.router.navigate(["/emploiTemps"]);
      } 
      else {
        alert("Invalide responsable");
       console.log("erreur");
      }
    });
   }
     loginetd(){//formulaire creation club 
   
      var num_carteEtd = this.model.num_carteEtd;
  
      this.etdservice.getEtdData(num_carteEtd).subscribe((res:boolean)=>{
        this.getData = res;
        if(this.getData == true){
          console.log("hello");
          this.router.navigate(["/add-ab"]);
        } 
        else {
          alert("Invalide etudiant");
         console.log("erreur");
        }
      });
   }




}
