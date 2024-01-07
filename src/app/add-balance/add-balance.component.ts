import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add-balance',
  templateUrl: './add-balance.component.html',
  styleUrls: ['./add-balance.component.css']
})
export class AddBalanceComponent {

  constructor(private http: HttpClient) { }
  
    clientIdentityType: string = "" 
    identityNumber: string ="" 
    balanceAmount: number = 0 

  onSubmit() {
   
    // Ajoutez le code pour ajouter le montant de la balance au wallet du client
      const apiUrl = 'http://localhost:port/api/balances';
  
      const data = {
        clientIdentityType: this.clientIdentityType,
        identityNumber: this.identityNumber,
        balanceAmount: this.balanceAmount
      };
      const jsonString = JSON.stringify(data);
  
      this.http.post(apiUrl,jsonString)
        .subscribe(
          (response : any) => {
            console.log(response);
          },
          (error) => {
            console.error(error);
          }
        );
    }
}

