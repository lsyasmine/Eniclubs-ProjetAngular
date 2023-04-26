import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
//import { ClubService } from 'src/app/pages/espaceAdmin/club.service';
import { club } from './club';


@Component({
  selector: 'app-updateclub',
  templateUrl: './updateclub.component.html',
  styleUrls: ['./updateclub.component.css']
})
export class UpdateclubComponent implements OnInit {

  club?: club
  data: any


  constructor(private service: AppService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getClubById(id).subscribe(data => {
      this.club = data
      console.log(this.club)
    })
  }
 

  form = new FormGroup({
    description: new FormControl('', [Validators.required]),
   
    nb_membre: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    responsable: new FormControl('', [Validators.required])
   
  })

  submit(){
    this.data = this.form.value
    console.log(this.data)
    
    this.service.updateClub(this.club?.id, this.data).subscribe(data => {
      console.log(data)
    })

    this.router.navigate(['/user-profile']);
  }

}