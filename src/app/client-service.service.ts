// your-api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'URL_DE_VOTRE_API'; // Remplacez par l'URL réelle de votre API

  constructor(private http: HttpClient) {}

  postFormData(data: any): Observable<any> {
    const url = `${this.apiUrl}/votre-endpoint`; // Remplacez par le point de terminaison de votre API
    return this.http.post(url, data);
  }
}
