import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';


import { UserProfileComponent } from '../../pages/espaceAdmin/espaceAdmin.component';
import { TablesComponent } from '../../pages/tabLanceEvent/tabLanceEventcomponent';
import { EmploiTempsComponent } from 'src/app/RenouvClub/RenouvClub.component';
import { EmploiExaComponent } from 'src/app/espaceEtudiant/espaceEtudiant.component';


import { AjoutProfComponent } from 'src/app/FormLanceEvent/FormLanceEvent.component';
import { AbscenceEnsComponent } from 'src/app/FormRenouvellement/FormRenouvellement.component';
import { RegisterComponent } from '../../pages/tabLanceClub/tabLanceClub.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },

    { path: 'abscence-ens',           component: AbscenceEnsComponent },
   
  

    { path: 'emploiTemps',           component: EmploiTempsComponent },
    { path: 'emploiExa',           component: EmploiExaComponent },
  

    { path: 'ajout-prof',           component: AjoutProfComponent },
    { path: 'register',       component: RegisterComponent }
  


];
