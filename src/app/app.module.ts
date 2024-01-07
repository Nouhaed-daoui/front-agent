import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { AddClientComponent } from './add-client/add-client.component';
import { RouterModule } from '@angular/router';
import { ClientService } from './client-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ListClientComponent } from './list-client/list-client.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddClientComponent,
    ListClientComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
