import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

import { event } from './event';


@Component({
  selector: 'app-updateevent',
  templateUrl: './updateevent.component.html',
  styleUrls: ['./updateevent.component.css']
})
export class UpdateeventComponent implements OnInit {

  event?: event
  data: any


  constructor(private service: AppService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getEventById(id).subscribe(data => {
      this.event = data
      console.log(this.event)
    })
  }


  
 

  form = new FormGroup({
    description: new FormControl('', [Validators.required]),
    place: new FormControl('', [Validators.required]),
    
    titre: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required])
   
  })

  submit(){
    this.data = this.form.value
    console.log(this.data)
    
    this.service.updateEvent(this.event?.id, this.data).subscribe(data => {
      console.log(data)
    })

    this.router.navigate(['/user-profile']);
  }

}