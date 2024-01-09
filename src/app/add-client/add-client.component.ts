// Import necessary modules and decorators
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientService } from '../client-service.service';


// Decorate the component
@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css'],
  providers: [ClientService],
})




export class AddClientComponent {
  cin: string = '';
  showTable: boolean = true;
  address: string = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';

  constructor(private clientService: ClientService) {}

  goToConn(): void {
    // Utilisez le service pour envoyer les données à l'API
    this.clientService.postFormData({
      email: this.email,
      address: this.address,
      cin: this.cin,
      lastName: this.lastName,
      firstName: this.firstName,
    }).subscribe(
      (response) => {
        // Gérez la réponse du backend ici (facultatif)
        console.log('Réponse du backend:', response);
      },
      (error) => {
        // Gérez les erreurs ici (facultatif)
        console.error('Erreur lors de la requête POST:', error);
      }
    );
  }
}






