import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AjoutAbscenceComponent } from './FormLanceClub/FormLanceClub.component';
import { UpdateeventComponent} from './pages/espaceAdmin/updateevent.component';
import { DetailJustifComponent } from './detail-justif/detail-justif.component';
import { UpdateclubComponent } from './pages/espaceAdmin/updateclub.component';
import { LoginComponent } from './pages/login/login.component';
import { UserProfileComponent } from './pages/espaceAdmin/espaceAdmin.component';
const routes: Routes = [
  {path: "add-ab", component: AjoutAbscenceComponent},
  { path: 'update1/:id', component: UpdateeventComponent },
  { path: 'update/:id', component: UpdateclubComponent },
  {path:"detail-justif", component: DetailJustifComponent},
  {path:"login", component: LoginComponent},
  
{
 
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
      }
    ]
  }, {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule)
      }
    ]
  }, 
  {
   path: '**',
    redirectTo: 'dashboard'
  },
  {path:"user-profile", component: UserProfileComponent},
  
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
