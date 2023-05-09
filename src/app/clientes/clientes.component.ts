import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Client } from '../client';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clients: Client[] = [];

  formGroupClient : FormGroup;
  isEditing: boolean = false;

  constructor (private clientsService: ClientsService,
                private formBuilder: FormBuilder
    ){
      this.formGroupClient = formBuilder.group({
        id : [''],
        name : [''],
        email : ['']
      });
    }


  ngOnInit(): void {
    this.loadclients();
  }

  loadclients() {
    this.clientsService.getClientes().subscribe(
      {
        next : data => this.clients = data
      }
    );
  }

  clear(){
    this.formGroupClient.reset();
    this.isEditing = false;
  }

  save(){
    if(this.isEditing){
      this.clientsService.update(this.formGroupClient.value).subscribe({
        next: () => {
          this.loadclients();
          this.formGroupClient.reset();
          this.isEditing = false;
        }
      })
    }
    else{
      this.clientsService.save(this.formGroupClient.value).subscribe({
          next: () => {
            this.loadclients();
            this.formGroupClient.reset();
            this.isEditing = false;
          }
        }
      );
    }
  }

  edit(client: Client){
    this.formGroupClient.setValue(client);
    this.isEditing = true;
  }

  delete(client: Client){
    this.clientsService.delete(client).subscribe({
      next: () => this.loadclients()
    })
  }

}


