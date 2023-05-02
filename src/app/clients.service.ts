import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor (private http: HttpClient) { }

  getClientes(): Observable<Client[]> {
    let url = "http://localhost:3000/clients";
    return this.http.get<Client[]>(url);
  }



}



