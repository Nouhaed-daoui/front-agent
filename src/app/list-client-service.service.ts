import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListClientServiceService {
  private apiUrl = 'http://localhost:8090/api/v1/agent/clients';

  constructor(private http: HttpClient) {}

  getClients(): Observable<any[]> {
    const url = `${this.apiUrl}`; // Remplacez par l'endpoint correct
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };
    return this.http.get<any[]>(url,httpOptions);
  }

  // getClients(): Observable<any[]> {
  //   // Simulation d'une liste de clients
  //   const fakeClients = [
  //     { id: 1, name: 'Client 1', blacklisted: false },
  //     { id: 2, name: 'Client 2', blacklisted: true },
  //     { id: 3, name: 'Client 3', blacklisted: false },
  //     // ... Ajoutez autant de clients que nécessaire
  //   ];

    //return of(fakeClients).pipe(delay(500)); // Utilisez 'of' et 'delay' pour simuler une requête asynchrone
   
      //return this.http.get<any[]>(`${this.apiUrl}`);
    
  //}

  toggleBlacklistStatus(clientId: number): Observable<any> {
    const url = `${this.apiUrl}/clients/${clientId}/toggle-blacklist`;
    return this.http.put(url, {});
  }

}




