import { Component } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-add-balance',
  templateUrl: './add-balance.component.html',
  styleUrls: ['./add-balance.component.css']
})
export class AddBalanceComponent {

  constructor(private http: HttpClient) { }


    cin: string =""
    amount: number = 0

  onSubmit() {

      const apiUrl = 'http://localhost:8222/api/v1/agent/updateBalance';

      const data = {
        cin: this.cin,
        amount: this.amount
      };
      const jsonString = JSON.stringify(data);
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        })
      };


      this.http.put(apiUrl,jsonString,httpOptions)
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

