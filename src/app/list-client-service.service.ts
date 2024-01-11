import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListClientServiceService {
  private apiUrl = 'http://localhost:8222/api/v1/agent/clients';

  constructor(private http: HttpClient) {}

  getClients(): Observable<any[]> {
    const url = `${this.apiUrl}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };
    return this.http.get<any[]>(url,httpOptions);
  }

  toggleBlacklistStatus(clientId: number): Observable<any> {
    const url = `${this.apiUrl}/clients/${clientId}/toggle-blacklist`;
    return this.http.put(url, {});
  }

}




