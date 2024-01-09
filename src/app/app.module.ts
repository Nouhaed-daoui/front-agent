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
import { InfoTransactionComponent } from './info-transaction/info-transaction.component';
import { AddBalanceComponent } from './add-balance/add-balance.component';
import { TransactionService } from './transaction.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBalanceComponent,
    InfoTransactionComponent,
    NavbarComponent,
    AddClientComponent,
    ListClientComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [ClientService,TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
