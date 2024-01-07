import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, NgModel } from '@angular/forms';
import { Router, RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddBalanceComponent } from './add-balance/add-balance.component';
import { HttpClientModule } from '@angular/common/http';
import { InfoTransactionComponent } from './info-transaction/info-transaction.component';


@NgModule({
  declarations: [
    AppComponent,
    AddBalanceComponent,
    NavBarComponent,
    InfoTransactionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
