import { Component } from '@angular/core';
import { ListClientServiceService } from '../list-client-service.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent {
  clients: any[] = [];

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
        this.loadClients();
      },
      (error) => {
        console.error('Erreur lors du basculement du statut de la liste noire:', error);
      }
    );
  }

}
