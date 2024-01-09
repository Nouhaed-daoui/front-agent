import { Component } from '@angular/core';
import { ListClientServiceService } from '../list-client-service.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent {
  clients: any[] = [];

    // Mock clients for testing
    mockClients: any[] = [
      { lastName: 'Doe', firstName: 'John', walletId: 'W123', balance: 1000, blacklisted: false },
      { lastName: 'Smith', firstName: 'Alice', walletId: 'W456', balance: 500, blacklisted: true },
      // Add more mock clients as needed
    ];

  constructor(private listclientService: ListClientServiceService) {}

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(): void {
    this.listclientService.getClients().subscribe(
      (clients) => {
        this.clients = clients;
      },
      (error) => {
        console.error('Erreur lors du chargement des clients:', error);
      }
    );
  }

  toggleBlacklistStatus(clientId: number): void {
    this.listclientService.toggleBlacklistStatus(clientId).subscribe(
      () => {
        // Mettez à jour la liste des clients après le changement de statut
        this.loadClients();
      },
      (error) => {
        console.error('Erreur lors du basculement du statut de la liste noire:', error);
      }
    );
  }

}
