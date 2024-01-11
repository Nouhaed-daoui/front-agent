import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private apiUrl = 'http://localhost:8222/api/v1/agent/transactions';

  constructor(private http: HttpClient) { }

  getTransactions(): Observable<any[]> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };
    return this.http.get<any[]>(this.apiUrl,httpOptions);
  }
}
