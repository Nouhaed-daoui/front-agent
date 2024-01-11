// your-api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'http://localhost:8222/api/v1/agent/addClient';

  constructor(private http: HttpClient) {}

  postFormData(data : any): Observable<any> {
    const json = JSON.stringify(data);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };
    return this.http.post<number>(`${this.apiUrl}`, json ,httpOptions);
  }
}
