import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AjoutProfComponent } from 'src/app/FormLanceEvent/FormLanceEvent.component';
import { AppService } from 'src/app/app.service';
import { ValidationService } from './validation.service';
import { FormLanceEvent } from 'src/app/FormLanceEvent/FormLanceEvent';
//import { FormLanceEvent } from 'src/app/FormLanceEvent';
@Component({
  selector: 'app-tabLanceEvent',
  templateUrl: './tabLanceEvent.component.html',
  styleUrls: ['./tabLanceEvent.component.scss']
})
export class TablesComponent implements OnInit {

  Fevents: any[] | undefined

  constructor(private service: AppService , private serviceF: ValidationService) { 
   
  }

  ngOnInit(): void {
    this.service.retrieveAllLanceEvent().subscribe(data => {
      this.Fevents = data;
    })
   
  }
//////
  removeE(id: number){
   this.serviceF.removeE(id).subscribe(data => {
      this.Fevents = this.Fevents?.filter(Fevent => Fevent.id !== id);
    })
    
  
  }
  
}
