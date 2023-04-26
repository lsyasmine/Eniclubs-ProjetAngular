import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
 model: any = {}
 getData: boolean;
  constructor(private adminservice :AdminserviceService
    ,private router :Router ) {}

  ngOnInit() {
  }
  ngOnDestroy() {
  }

  loginAdmin(){
    var prenom = this.model.prenom;
    var nom = this.model.nom;
    var email = this.model.email;
    var mdp = this.model.mdp;
    var code = this.model.code;

    this.adminservice.getAdminData(prenom,nom,email,mdp,code).subscribe((res:boolean)=>{
      this.getData = res;
      if(this.getData == true){
        console.log("hello");
        this.router.navigate(["/user-profile"]);
      } 
      else {
        alert("Invalide administrateur");
       console.log("erreur");
      }
    });
  }

}





