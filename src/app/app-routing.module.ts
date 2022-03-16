import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/phone-list', pathMatch: 'full'},
  {path: 'phone-list', component: PhoneListComponent },
  {path: 'phone-detail/:id', component: PhoneDetailComponent },
  
];

@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)],
  ]
  
  
})
export class AppRoutingModule { }
