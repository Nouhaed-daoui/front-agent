import { HttpClient } from '@angular/common/http';
import { ClientService } from '../client-service.service';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'; // Import NgForm


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
  email: string = '@gmail.com';
  successMessage: string = ''; 

  @ViewChild('ajoutForm', { static: false }) ajoutForm: NgForm | undefined;


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
        this.resetForm();
        this.successMessage = 'Client ajouté avec succès!';
        console.log('Réponse du backend:', response);


      },
      (error) => {
        this.successMessage = 'Le client est ajoute!';
        console.error('Erreur lors de la requête POST:', error);
      }
    );
    console.log("email" + this.email)
    this.resetForm();
    // add me here a text that show that the client was add successfully
  }

  resetForm(): void {
    // Reset all form fields
    this.cin = '';
    this.address = '';
    this.firstName = '';
    this.lastName = '';
    this.email = 'test';
  }
}






