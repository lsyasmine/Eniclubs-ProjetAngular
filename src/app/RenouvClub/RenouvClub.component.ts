import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { App2Service } from 'src/app/app2.service';

@Component({
  selector: 'app-RenouvClub',
  templateUrl: './RenouvClub.component.html',
  styleUrls: ['./RenouvClub.component.css']
})
export class EmploiTempsComponent implements OnInit {
  constructor(private service: App2Service, private route: ActivatedRoute, private router : Router) { }

  data: any

  
  form = new FormGroup({
    nomClub: new FormControl('', [Validators.required]),
    dateFondationClub: new FormControl('', [Validators.required]),
    objecAtteintDerniereAnnee: new FormControl('', [Validators.required]),
    planAnneeSuivante: new FormControl('', [Validators.required]),
    objectifsAnneeSuivante: new FormControl('', [Validators.required]),
    budgetAnneeSuivante: new FormControl('', [Validators.required]),
    mailDemandeur: new FormControl('', [Validators.required]),
    telDemandeur: new FormControl('', [Validators.required]),
    dateDemande: new FormControl('', [Validators.required]),
   
  

  })

  ngOnInit(): void {
  }

  
  submit(){
    this.data = this.form.value
    console.log(this.data)

    this.service.addFormRenouvellement(this.data).subscribe(data => {
      console.log(data)
    })

    
    
    this.router.navigate(['/emploiExa']);




  }
  

}
