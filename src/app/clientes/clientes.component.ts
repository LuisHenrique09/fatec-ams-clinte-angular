import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clients: Client[] = [];

  constructor (private clientsService: ClientsService){}

  ngOnInit(): void {
    this.loadclients();
  }

  loadclients() {
    this.clientsService.getClientes().subscribe(
      {
        next : data => this.clients = data
      }
    )
  }

  

}
