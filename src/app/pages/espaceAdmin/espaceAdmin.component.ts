import { Component, OnInit } from '@angular/core';
import { EventService } from './event.service';
import { ClubService } from './club.service';
import { Router } from '@angular/router';
import { ValidationLService } from '../tabLanceClub/validation-l.service';
import { club } from './club';
@Component({
  selector: 'app-espaceAdmin',
  templateUrl: './espaceAdmin.component.html',
  styleUrls: ['./espaceAdmin.component.scss']
})
export class UserProfileComponent implements OnInit {
  events: any[] | undefined
  clubs : any [] | undefined
  clubs2 : any [] | undefined
  constructor(private service:EventService , private serviceC: ClubService, private router: Router , private serviceL : ValidationLService) { }

  
  ngOnInit() : void {
    this.service.getEvents().subscribe(data => {
      this.events = data;
    })
    this.serviceC.getClubs().subscribe(data => {
      this.clubs = data;
    })
    this.serviceC.getClubs2().subscribe(data => {
      this.clubs2 = data;
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
updateClub(id: number){
  this.router.navigate(['update', id]);
}
updateEvent(id: number){
  this.router.navigate(['update1', id]);
}

removeEvent(id: number){
  this.service.removeEvent(id).subscribe(data => {
    this.events = this.events?.filter(event => event.id !== id);
  })
  setTimeout(()=>{
    window.location.reload();
  }, 100);

}
}
