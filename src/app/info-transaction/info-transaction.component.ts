import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-info-transaction',
  templateUrl: './info-transaction.component.html',
  styleUrls: ['./info-transaction.component.css']
})
export class InfoTransactionComponent  implements OnInit {
//   trs : any[] = [
//     {
//     senderEmail : "aicha@gmail",
//     beneficiaryEmail: "mariam@gmail...",
//     amount:2345,
//     date : "01/01/2024",
//     status: "extournee"
//    },
//    {
//     senderEmail : "aicha@gmail",
//     beneficiaryEmail: "mariam@gmail...",
//     amount:2345,
//     date : "01/01/2024",
//     status: "extournee"
//    },
// ]
  transactions: any[] = [];

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.loadTransactions();
  }

  loadTransactions() {
    this.transactionService.getTransactions().subscribe(
      (data: any[]) => {
        this.transactions = data;
      },
      (error) => {
        console.error('Error fetching transactions', error);
      }
    );
  }

}
