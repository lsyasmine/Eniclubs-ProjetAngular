import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Menu Principal',  icon: 'ni-tv-2 text-primary', class: '' },
 
    { path: '/dashboard', title: 'Admin Profile',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/dashboard', title: 'Espace Etudiant ',  icon:'ni-single-02 text-yellow', class: '' },

    { path: '/dashboard', title: 'Liste Demande Event',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/dashboard', title: 'Liste D.Nouveaux clubs',  icon:'ni-bullet-list-67 text-red', class: '' },

    { path: '/dashboard', title: 'Liste D.Renouvellement clubs',  icon:'ni-bullet-list-67 text-red', class: '' },
  
 

    { path: '/dashboard', title: 'Formulaire R.Club',  icon:'ni-key-25 text-info', class: '' },


    { path: '/dashboard', title: 'Formulaire L.Event',  icon:'ni-key-25 text-info', class: '' },

  

    
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
