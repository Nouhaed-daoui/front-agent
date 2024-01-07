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
  // Déclarez un objet pour stocker les données du formulaire
  formData: any = {
    gender: undefined,
    identityType: undefined,
    identityNumber: '',
    firstname: '',
    lastname: '',
    email: '',
    nationality: undefined,
    phoneNumber: null,
    address: '',
    birthdayDate: '',
    city: undefined,
    emissionCountry: undefined,
    occupation: undefined
  };
sexe: any;

  constructor(private clientService: ClientService) {}

  goToConn(formData: any): void {
    // Utilisez le service pour envoyer les données à l'API
    this.clientService.postFormData(formData)
      .subscribe(
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






