import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PhoneDetailComponent,
    PhoneListComponent
  ],
  imports: [
    BrowserModule,
    // CommonModule,
    FormsModule,
    // AngularFontAwesomeModule,
    HttpClientModule,
    AppRoutingModule
  ],

  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
