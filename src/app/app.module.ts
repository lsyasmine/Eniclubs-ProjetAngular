import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { EmploiTempsComponent } from './RenouvClub/RenouvClub.component';
import { EmploiExaComponent } from './espaceEtudiant/espaceEtudiant.component';

import { AjoutProfComponent } from './FormLanceEvent/FormLanceEvent.component';
import { AbscenceEnsComponent } from './FormRenouvellement/FormRenouvellement.component';
import { AjoutAbscenceComponent } from './FormLanceClub/FormLanceClub.component';
import { UpdateclubComponent } from './pages/espaceAdmin/updateclub.component';
import { DetailJustifComponent } from './detail-justif/detail-justif.component';
import { UpdateeventComponent } from './pages/espaceAdmin/updateevent.component';


import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    EmploiTempsComponent,
    EmploiExaComponent,
    
    UpdateeventComponent,
    AjoutProfComponent,
    AbscenceEnsComponent,
    AjoutAbscenceComponent,
  UpdateclubComponent,
    DetailJustifComponent,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
