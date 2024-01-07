import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './add-client/add-client.component';
import { ListClientComponent } from './list-client/list-client.component';
import { AddBalanceComponent } from './add-balance/add-balance.component';
import { InfoTransactionComponent } from './info-transaction/info-transaction.component';

const routes: Routes = [
  { path: 'addClient', component: AddClientComponent },
  { path: 'listClients', component: ListClientComponent },
  { path: 'add-balance', component:  AddBalanceComponent},
  { path: 'info-transaction', component: InfoTransactionComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


