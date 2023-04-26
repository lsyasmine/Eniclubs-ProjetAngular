import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { App1Service } from 'src/app/app1.service';
@Component({
  selector: 'app-FormLanceClub',
  templateUrl: './FormLanceClub.component.html',
  styleUrls: ['./FormLanceClub.component.css']
})
export class AjoutAbscenceComponent implements OnInit {

  constructor(private service: App1Service, private route: ActivatedRoute, private router : Router) { }

  data: any

  
  form = new FormGroup({
    nomClub: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    nom_president: new FormControl('', [Validators.required]),
    email_president: new FormControl('', [Validators.required]),
    tel_president: new FormControl('', [Validators.required]),
    nbMembre: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    dateLance: new FormControl('', [Validators.required]),
    budget: new FormControl('', [Validators.required])


  

  })

  ngOnInit(): void {
  }

  
  submit(){
    this.data = this.form.value
    console.log(this.data)

    this.service.addFormLanceClub(this.data).subscribe(data => {
      console.log(data)
    })

    
    
    this.router.navigate(['/emploiExa']);
  }

}
